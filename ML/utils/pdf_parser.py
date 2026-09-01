# Import PDF libraries
import pdfplumber
from PyPDF2 import PdfReader


# Function to extract text from PDF
def extract_text_from_pdf(pdf_path):

    text = ""

    # Try using pdfplumber
    try:
        with pdfplumber.open(pdf_path) as pdf:

            for page in pdf.pages:

                page_text = page.extract_text()

                if page_text:
                    text += page_text + "\n"

    except:
        pass

    # Backup using PyPDF2
    if not text:

        try:
            reader = PdfReader(pdf_path)

            for page in reader.pages:

                page_text = page.extract_text()

                if page_text:
                    text += page_text + "\n"

        except:
            return ""

    return text.strip()