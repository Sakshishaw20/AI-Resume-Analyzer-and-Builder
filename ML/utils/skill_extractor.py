import re

SKILLS = [
    "python",
    "java",
    "c",
    "c++",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "nodejs",
    "express",
    "flask",
    "django",
    "mongodb",
    "mysql",
    "sql",
    "html",
    "css",
    "tailwind",
    "bootstrap",
    "git",
    "github",
    "docker",
    "aws",
    "azure",
    "firebase",
    "machine learning",
    "deep learning",
    "data science",
    "nlp",
    "opencv",
    "numpy",
    "pandas",
    "matplotlib",
    "scikit-learn",
    "tensorflow",
    "keras"
]


def extract_skills(text):

    text = text.lower()

    found_skills = []

    for skill in SKILLS:

        # Count how many times the skill appears
        count = len(re.findall(r"\b" + re.escape(skill) + r"\b", text))

        if count > 0:

            # Calculate score
            score = min(60 + count * 10, 100)

            found_skills.append({
                "name": skill.title(),
                "score": score
            })

    return found_skills