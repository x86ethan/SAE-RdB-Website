let hasAnimated = false;
let hasAnimated2 = false;

function checkResize() {
    if (window.innerWidth > 1400) {
        if (!hasAnimated) {
            const elements = document.querySelectorAll('.name-wrapper, .id-wrapper, .email-wrapper, .password-wrapper, .submit-button, .confirm-password-wrapper, .validation-wrapper, .email-text');
            elements.forEach(el => {
                el.style.animation = 'widthchangeback 0.24s forwards'; // Ajout de l'animation
            });
            hasAnimated = true;
        }
    } else if (window.innerWidth <= 1400) {
        // Si la largeur devient inférieure ou égale à 1400px, réinitialiser l'animation si nécessaire
        hasAnimated = false; 
    } else {
        hasAnimated = false; // Réinitialise si la taille sort de la plage entre 1400 et 1450px
    }
}

function checkResize2() {
    if (window.innerWidth <= 1400) {
        if (!hasAnimated2) {  // Vérifie si l'animation n'a pas encore été lancée
            const elements = document.querySelectorAll('.name-wrapper, .id-wrapper, .email-wrapper, .password-wrapper, .submit-button, .confirm-password-wrapper, .validation-wrapper, .email-text');
            elements.forEach(el => {
                el.style.animation = 'widthchange 0.24s forwards'; // Ajout de l'animation
            });
            hasAnimated2 = true; // Marque que l'animation a été effectuée
        }
    } else {
        hasAnimated2 = false;  // Réinitialisation pour permettre la relance
    }
}

// Fonction de détection précise de la largeur
function handleResize() {
    checkResize();
    checkResize2();
}

// Écoute l'événement de redimensionnement
window.addEventListener('resize', handleResize);

// Vérifie lors du chargement initial de la page
handleResize();
