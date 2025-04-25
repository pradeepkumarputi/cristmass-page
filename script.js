const starsContainer = document.getElementById('stars');
const snowContainer = document.getElementById('snow');
const canvas = document.getElementById('winterCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generate stars
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = Math.random() * 5 + 's';
    starsContainer.appendChild(star);
}

// Generate snowflakes
for (let i = 0; i < 200; i++) {
    const flake = document.createElement('div');
    flake.classList.add('flake');
    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.animationDelay = Math.random() * 10 + 's';
    flake.style.animationDuration = Math.random() * 5 + 5 + 's';
    snowContainer.appendChild(flake);
}

// Draw mountains
const drawMountains = () => {
    ctx.fillStyle = '#ffffff'; // Snowy mountains
    ctx.beginPath();
    ctx.moveTo(0, canvas.height * 0.7);
    ctx.lineTo(canvas.width * 0.5, canvas.height * 0.8);
    ctx.lineTo(canvas.width * 0.8, canvas.height * 0.7);
    // ctx.lineTo(canvas.width * 0.9, canvas.height * 0.3);
    ctx.lineTo(canvas.width, canvas.height * 0.7);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();
};

drawMountains();

const movingImage = document.getElementById('movingImage');
const droppedImage = document.getElementById('droppedImage');

movingImage.addEventListener('animationiteration', () => {
    // Detect the midpoint
    setTimeout(() => {
        droppedImage.style.display = 'block';
        droppedImage.style.animation = 'dropToGround 2s ease-out forwards';
    }, 2500); // Half of the 5s animation duration (midpoint)
});