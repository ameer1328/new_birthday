// Play the audio when the main button is clicked
function playSong() {
    const audio = document.getElementById('audio');
    audio.play().catch(error => {
        console.log('Autoplay was prevented. User interaction may be required to start playback.');
    });
}

// Show hearts animation when "Yes" is clicked
function showHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerText = '❤️';
        heart.classList.add('floating-heart');
        document.body.appendChild(heart);

        // Set random initial position and duration for each heart
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';

        // Remove heart after animation ends
        heart.addEventListener('animationend', () => heart.remove());
    }
}

// Show sad face animation when "No" is clicked
function showSad() {
    for (let i = 0; i < 20; i++) {
        const sad = document.createElement('div');
        sad.innerText = '🤧';
        sad.classList.add('floating-sad');
        document.body.appendChild(sad);

        // Set random initial position and duration for each sad emoji
        sad.style.left = Math.random() * 100 + 'vw';
        sad.style.top = Math.random() * 100 + 'vh';
        sad.style.animationDuration = Math.random() * 3 + 2 + 's';

        // Remove sad emoji after animation ends
        sad.addEventListener('animationend', () => sad.remove());
    }
}
