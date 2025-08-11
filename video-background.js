// Gestion de l'arrière-plan vidéo
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const overlay = document.querySelector('.video-overlay');
    
    // Pause/Play au clic
    overlay.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
    
    // Contrôles de volume au survol
    overlay.addEventListener('mouseenter', function() {
        video.muted = false;
        video.volume = 0.3;
    });
    
    overlay.addEventListener('mouseleave', function() {
        video.muted = true;
    });
    
    // Gestion des erreurs de vidéo
    video.addEventListener('error', function() {
        console.log('Erreur lors du chargement de la vidéo');
        // Fallback vers une image de fond
        document.querySelector('.video-background').style.backgroundImage = 'url("montain.jpg")';
        video.style.display = 'none';
    });
    
    // Optimisation des performances
    let isScrolled = false;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && !isScrolled) {
            video.style.filter = 'blur(2px)';
            isScrolled = true;
        } else if (window.scrollY <= 100 && isScrolled) {
            video.style.filter = 'none';
            isScrolled = false;
        }
    });
    
    // Animation d'entrée du contenu
    const content = document.querySelector('.video-overlay .content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        content.style.transition = 'all 1s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 500);
});

// Fonction pour changer la vidéo dynamiquement
function changeVideo(newVideoSrc) {
    const video = document.getElementById('myVideo');
    const source = video.querySelector('source');
    source.src = newVideoSrc;
    video.load();
    video.play();
}

// Fonction pour ajuster la luminosité de l'overlay
function adjustOverlayBrightness(brightness) {
    const overlay = document.querySelector('.video-overlay');
    overlay.style.background = `rgba(0, 0, 0, ${brightness})`;
}