export async function GET() {
  const body = [
    "Prasanth M Resume Placeholder",
    "",
    "Replace this route response with the final resume PDF when ready.",
    "",
    "Name: Prasanth M",
    "Title: AI UX Designer | Product Designer | UX Engineer",
    "Location: Chennai, India",
    "Email: premprasanth683@gmail.com",
    "Phone: +91 7338936273"
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Prasanth-M-Resume.txt"'
    }
  });
}
