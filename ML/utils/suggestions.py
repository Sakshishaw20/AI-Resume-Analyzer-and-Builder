# Function to generate suggestions
def generate_suggestions(skills):

    suggestions = []

    # Sirf skill names nikalo aur lowercase me convert karo
    skill_names = [skill["name"].lower() for skill in skills]

    # If resume has very few skills
    if len(skill_names) < 5:
        suggestions.append(
            "Add more technical skills related to your field."
        )

    # Missing Git
    if "git" not in skill_names and "github" not in skill_names:
        suggestions.append(
            "Mention Git or GitHub if you have used version control."
        )

    # Missing projects related skills
    if "react" not in skill_names and "flask" not in skill_names:
        suggestions.append(
            "Include personal or academic projects."
        )

    # Missing cloud
    if "aws" not in skill_names:
        suggestions.append(
            "Learning a cloud platform like AWS can improve your resume."
        )

    # No suggestions
    if len(suggestions) == 0:
        suggestions.append(
            "Great resume! Keep updating it with new projects and skills."
        )

    return suggestions