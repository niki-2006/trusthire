
async function fetchScores() {
    const resumeText = document.getElementById("resumeText");

    if (!resumeText || !resumeText.value.trim()) {
        alert("Please enter your resume text first.");
        return;
    }

    try {
        const response = await fetch("/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                resumeText: resumeText.value
            })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Resume analysis failed.");
            return;
        }

        const result = document.getElementById("wordCount");
        if (result) {
            result.innerText = data.wordCount;
        }

        alert("Resume text received successfully!");
    } catch (error) {
        console.error("Error analyzing resume:", error);
        alert("Could not connect to the server. Please start the backend.");
    }
}
