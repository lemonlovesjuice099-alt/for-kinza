const noBtn = document.getElementById("no-btn");
const proposalBox = document.getElementById("proposal-box");
const marriageBox = document.getElementById("marriage-box");
const music = document.getElementById("bg-music");

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

// Switch from Question 1 to Question 2 + Play Music
function nextQuestion() {
    proposalBox.style.display = "none";
    marriageBox.style.display = "block";
    
    if (music) {
        music.volume = 0.4; // Soft background volume
        music.play().catch(error => console.log("Audio waiting for explicit click engagement loop."));
    }
}

// Final Celebration Alert
function celebrate() {
    alert("My heart is yours forever! I love you so much, Kinza! ❤️💍✨");
}

// AUTOMATIC FLOATING HEARTS GENERATOR
function createHeart() {
    const container = document.getElementById("hearts-container");
    if (!container) return;

    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    
    const heartStyles = ["❤️", "💖", "💝", "💕", "🌸"];
    heart.innerText = heartStyles[Math.floor(Math.random() * heartStyles.length)];

    heart.style.left = Math.random() * 100 + "vw";
    
    const duration = Math.random() * 3 + 4; 
    heart.style.animationDuration = duration + "s";
    heart.style.fontSize = Math.random() * 15 + 15 + "px"; 

    heart.style.setProperty('--random-x', (Math.random() * 100 - 50) + "px");
    heart.style.setProperty('--random-rotate', (Math.random() * 360) + "deg");

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 400);