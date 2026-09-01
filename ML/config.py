# ==========================================================
# config.py
# Configuration file for Flask Application
# ==========================================================

# Import os module to access environment variables
import os


# Create Config class
class Config:

    # ------------------------------------------------------
    # Secret Key
    # Used by Flask for session security
    # If .env contains SECRET_KEY, use it.
    # Otherwise use the default value.
    # ------------------------------------------------------
    SECRET_KEY = os.getenv(
        "SECRET_KEY",
        "resume-analyzer-secret-key"
    )


    # ------------------------------------------------------
    # Upload Folder
    # All uploaded resume PDFs will be stored here.
    # ------------------------------------------------------
    UPLOAD_FOLDER = "uploads"


    # ------------------------------------------------------
    # Maximum Upload Size
    # 5 MB
    # ------------------------------------------------------
    MAX_CONTENT_LENGTH = 5 * 1024 * 1024


    # ------------------------------------------------------
    # Allowed File Extensions
    # Only PDF files can be uploaded.
    # ------------------------------------------------------
    ALLOWED_EXTENSIONS = {
        "pdf"
    }


    # ------------------------------------------------------
    # ML Model Paths
    # ------------------------------------------------------
    MODEL_PATH = "models/ats_model.pkl"

    VECTORIZER_PATH = "models/vectorizer.pkl"