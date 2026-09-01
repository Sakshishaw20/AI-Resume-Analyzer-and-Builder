# Import required modules
from flask import Flask
from flask_cors import CORS
from routes.resume_generator import resume_generator_bp

# Import configuration
from config import Config

# Import routes
from routes.resume_routes import resume_bp

# Create Flask app
app = Flask(__name__)

# Load configuration
app.config.from_object(Config)

# Enable CORS for React
CORS(app)

# Register routes
app.register_blueprint(resume_bp)
app.register_blueprint(resume_generator_bp)

# Home route
@app.route("/")
def home():
    return {
        "success": True,
        "message": "AI Resume Analyzer API is Running"
    }

# Run server
if __name__ == "__main__":
    app.run(debug=True)