// Funções JS
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function toggleMusic() {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}