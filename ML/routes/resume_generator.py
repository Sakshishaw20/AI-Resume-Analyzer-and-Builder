from flask import Blueprint, request, jsonify, send_file
from utils.pdf_generator import generate_resume_pdf

resume_generator_bp = Blueprint("resume_generator", __name__)


@resume_generator_bp.route("/api/generate-resume", methods=["POST"])
def generate_resume():

    data = request.json

    pdf_path = generate_resume_pdf(data)

    return jsonify({
        "success": True,
        "message": "Resume Generated Successfully",
        "pdf_url": "https://ai-resume-analyzer-and-builder-1.onrender.com/api/download-resume"
    })


@resume_generator_bp.route("/api/download-resume", methods=["GET"])
def download_resume():

    return send_file(
        "static/generated_resume.pdf",
        as_attachment=True
    )