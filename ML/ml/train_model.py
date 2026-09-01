# Import libraries
import os
import joblib
import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LinearRegression

# Create sample dataset
data = {

    "resume": [

        "Python Flask React MongoDB Machine Learning SQL Git GitHub",

        "Java Spring Boot MySQL HTML CSS JavaScript",

        "Python Data Science Pandas NumPy Machine Learning Deep Learning",

        "React Node Express MongoDB JavaScript Tailwind CSS",

        "Python Flask Docker AWS Git Machine Learning",

        "HTML CSS JavaScript Bootstrap",

        "Python Django PostgreSQL Docker AWS",

        "C C++ Data Structures Algorithms SQL",

        "React NextJS TypeScript Firebase",

        "Python NLP TensorFlow Keras Pandas"
    ],

    "score": [

        95,
        82,
        98,
        90,
        94,
        65,
        88,
        75,
        84,
        97
    ]
}

# Convert dictionary into dataframe
df = pd.DataFrame(data)

# Create TF-IDF Vectorizer
vectorizer = TfidfVectorizer()

# Convert resume text into vectors
X = vectorizer.fit_transform(df["resume"])

# Target values
y = df["score"]

# Train model
model = LinearRegression()

model.fit(X, y)

# Create models folder if not exists
os.makedirs("models", exist_ok=True)

# Save model
joblib.dump(model, "models/ats_model.pkl")

# Save vectorizer
joblib.dump(vectorizer, "models/vectorizer.pkl")

print("Model trained successfully.")
print("ats_model.pkl created.")
print("vectorizer.pkl created.")