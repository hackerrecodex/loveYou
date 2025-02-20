// Floating Hearts Animation
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsContainer.appendChild(heart);
    }
}
createHearts();

// Love Meter
function calculateLove() {
    const lovePercent = Math.floor(Math.random() * 101);
    document.getElementById('loveResult').innerHTML = `
        <h2 style="color:#ff69b4">${lovePercent}% Love! 💘</h2>
        <p>${lovePercent > 80 ? "Soulmates Forever!" : "Growing Stronger Everyday!"}</p>
    `;
}

// Music Player
let isPlaying = true;
const audio = document.getElementById('bgMusic');
audio.volume = 0.3;

function toggleMusic() {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
}

// Personalized Message (Add your custom message)
const messages = [
    "You're the Mona Lisa of my life ҉",
    "My heart skips a beat when you smile 💓",
    "҉You're my today and all my tomorrows ҉",
    "֎In your arms is my favorite place ֍",
     "﴾ You are my First Love ﴿",
      "ꙮLove You So Much...ꙮ",
];

function showMessage() {
    const messageBox = document.getElementById('messageBox');
    document.getElementById('specialMessage').textContent = messages[Math.floor(Math.random() * messages.length)];
    messageBox.style.display = 'block';
}

function closeMessage() {
    document.getElementById('messageBox').style.display = 'none';
}

// Auto-show message every 10 seconds
setInterval(showMessage, 10000);

// Sparkle Effect on Click
document.addEventListener('click', function(e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
});

// GSAP Animations
gsap.from(".gallery-item", {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)"
});
// Romantic Theme Particles
particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ["#ff69b4", "#ff1493", "#ff007f"] }, /* Pink shades */
      shape: {
        type: "image", /* हार्ट शेप के लिए */
        image: { 
          src: "https://www.freeiconspng.com/uploads/heart-png-31.png", 
          width: 100,
          height: 100
        }
      },
      opacity: { value: 0.5, random: true },
      size: { value: 10, random: true },
      line_linked: { enable: false }, /* लिंक हटाने के लिए */
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" }, /* हॉवर पर पार्टिकल्स भागेंगे */
        onclick: { enable: true, mode: "push" }, /* क्लिक पर नए पार्टिकल्स */
        resize: true
      }
    },
    retina_detect: true
  });

  