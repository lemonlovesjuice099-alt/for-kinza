const noBtn = document.getElementById("no-btn");
const proposalBox = document.getElementById("proposal-box");
const marriageBox = document.getElementById("marriage-box");

// The Teleporting "No" Button Logic
noBtn.addEventListener("mouseenter", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Switch from Question 1 to Question 2
function nextQuestion() {
    proposalBox.style.display = "none";
    marriageBox.style.display = "block";
}

// Final Celebration Alert
function celebrate() {
    alert("My heart is yours forever! I love you so much, Kinza! ❤️💍✨");
}