
const resumeForm = document.getElementById("resumeForm");

if (resumeForm) {
    resumeForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const resumeText = document.getElementById("resumeText").value.trim();
        const status = document.getElementById("status");
        const wordCount = document.getElementById("wordCount");

        if (!resumeText) {
            status.textContent = "Please enter your resume text.";
            return;
        }

        status.textContent = "Analyzing resume...";

        try {
            const response = await fetch("/analyze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ resumeText: resumeText })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Analysis failed.");
            }

            wordCount.textContent = data.wordCount;
            status.textContent = data.message;
        } catch (error) {
            status.textContent =
                "Could not connect to the backend. Start the server and try again.";
            console.error(error);
        }
    });
}
