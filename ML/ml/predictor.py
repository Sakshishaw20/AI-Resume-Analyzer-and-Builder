# Import required libraries
import os
import joblib

# Load model
MODEL_PATH = "models/ats_model.pkl"
VECTORIZER_PATH = "models/vectorizer.pkl"

model = None
vectorizer = None

if os.path.exists(MODEL_PATH):
    model = joblib.load(MODEL_PATH)

if os.path.exists(VECTORIZER_PATH):
    vectorizer = joblib.load(VECTORIZER_PATH)


# Predict ATS Score
def predict_ats_score(text):

    # If model not available
    if model is None or vectorizer is None:

        return 50

    vector = vectorizer.transform([text])

    score = model.predict(vector)[0]

    return int(score)