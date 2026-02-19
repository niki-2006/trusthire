async function fetchScores() {
    try {
        const response = await fetch('/analyze');
        const data = await response.json();

        document.getElementById("plagiarism").innerText = data.plagiarism;
        document.getElementById("skill").innerText = data.skill;
        document.getElementById("trust").innerText = data.trust;
    } catch (error) {
        console.error("Error fetching scores:", error);
    }
}

fetchScores();