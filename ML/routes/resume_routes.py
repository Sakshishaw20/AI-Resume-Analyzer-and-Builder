# Import required modules
from utils.pdf_parser import extract_text_from_pdf
from utils.skill_extractor import extract_skills
from utils.summary import generate_summary
from utils.suggestions import generate_suggestions
from ml.predictor import predict_ats_score
import os

from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename

# Import configuration
from config import Config

# Create Blueprint
resume_bp = Blueprint("resume", __name__)

# Function to check allowed file
def allowed_file(filename):
    return (
        "." in filename
        and filename.rsplit(".", 1)[1].lower()
        in Config.ALLOWED_EXTENSIONS
    )


# Upload Resume API
@resume_bp.route("/api/upload", methods=["POST"])
def upload_resume():

    # Check file exists or not
    if "resume" not in request.files:
        return jsonify({
            "success": False,
            "message": "No file uploaded"
        }), 400

    file = request.files["resume"]

    # Check filename
    if file.filename == "":
        return jsonify({
            "success": False,
            "message": "No file selected"
        }), 400

    # Check PDF
    if file and allowed_file(file.filename):

        # Secure filename
        filename = secure_filename(file.filename)

        # Create upload folder if not exists
        os.makedirs(Config.UPLOAD_FOLDER, exist_ok=True)

        # Save file
        filepath = os.path.join(
            Config.UPLOAD_FOLDER,
            filename
        )

        file.save(filepath)

        return jsonify({
            "success": True,
            "message": "Resume uploaded successfully",
            "filename": filename,
            "filepath": filepath
        })

    return jsonify({
        "success": False,
        "message": "Only PDF files are allowed"
    }), 400



# Analyze Resume API
@resume_bp.route("/api/analyze", methods=["POST"])
def analyze_resume():

    # Check if file exists
    if "resume" not in request.files:
        return jsonify({
            "success": False,
            "message": "No file uploaded"
        }), 400

    file = request.files["resume"]

    # Check filename
    if file.filename == "":
        return jsonify({
            "success": False,
            "message": "No file selected"
        }), 400

    # Check PDF
    if not allowed_file(file.filename):
        return jsonify({
            "success": False,
            "message": "Only PDF files are allowed"
        }), 400

    # Secure filename
    filename = secure_filename(file.filename)

    # Create uploads folder
    os.makedirs(Config.UPLOAD_FOLDER, exist_ok=True)

    # Save file
    filepath = os.path.join(
        Config.UPLOAD_FOLDER,
        filename
    )

    file.save(filepath)

    # Extract text from PDF
    resume_text = extract_text_from_pdf(filepath)

    # Extract skills
    skills = extract_skills(resume_text)

    # Predict ATS score
    ats_score = predict_ats_score(resume_text)

    # Generate summary
    summary = generate_summary(skills)

    # Generate suggestions
    suggestions = generate_suggestions(skills)

    # Return response
    return jsonify({
        "success": True,
        "ats_score": ats_score,
        "skills": skills,
        "summary": summary,
        "suggestions": suggestions,
        "resume_text": resume_text
    })