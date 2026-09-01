from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
import os


def generate_resume_pdf(data):

    os.makedirs("static", exist_ok=True)

    pdf_path = os.path.join("static", "generated_resume.pdf")

    doc = SimpleDocTemplate(pdf_path)

    styles = getSampleStyleSheet()

    story = []

    story.append(Paragraph(f"<b>{data.get('name','')}</b>", styles["Title"]))
    story.append(Paragraph(f"Email: {data.get('email','')}", styles["BodyText"]))
    story.append(Paragraph(f"Phone: {data.get('phone','')}", styles["BodyText"]))
    story.append(Paragraph(f"Address: {data.get('address','')}", styles["BodyText"]))
    story.append(Paragraph(f"LinkedIn: {data.get('linkedin','')}", styles["BodyText"]))
    story.append(Paragraph(f"GitHub: {data.get('github','')}", styles["BodyText"]))

    story.append(Paragraph("<br/><b>Education</b>", styles["Heading2"]))
    story.append(Paragraph(data.get("education",""), styles["BodyText"]))

    story.append(Paragraph("<br/><b>Experience</b>", styles["Heading2"]))
    story.append(Paragraph(data.get("experience",""), styles["BodyText"]))

    story.append(Paragraph("<br/><b>Projects</b>", styles["Heading2"]))
    story.append(Paragraph(data.get("projects",""), styles["BodyText"]))

    story.append(Paragraph("<br/><b>Skills</b>", styles["Heading2"]))
    story.append(Paragraph(data.get("skills",""), styles["BodyText"]))

    story.append(Paragraph("<br/><b>Certifications</b>", styles["Heading2"]))
    story.append(Paragraph(data.get("certifications",""), styles["BodyText"]))

    doc.build(story)

    return pdf_path