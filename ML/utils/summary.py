# Function to generate resume summary
def generate_summary(skills):

    if len(skills) == 0:
        return "No technical skills were detected in the uploaded resume."

    # Sirf skill names nikalo
    skill_names = [skill["name"] for skill in skills]

    summary = (
        f"The resume contains {len(skill_names)} technical skills. "
        f"Detected skills include: {', '.join(skill_names)}."
    )

    return summary