// Tableau contenant les différentes étapes du titre
const titles = ["Site Map - Apple 🗻 🏢 🚗 ", "Site Map - Apple 🗻 🚗 💭", "Site Map - Apple 🚗 💭 ☁️"];
let currentIndex = 0;

// Fonction pour changer le titre toutes les 5 secondes
function updateTitle() {
    // Met à jour immédiatement le titre avec l'élément actuel du tableau
    document.title = titles[currentIndex];
    
    // Passe à l'élément suivant du tableau (avec retour au début une fois arrivé à la fin)
    currentIndex = (currentIndex + 1) % titles.length;
}

// Appeler la fonction updateTitle immédiatement, puis toutes les 5 secondes (5000 millisecondes)
updateTitle();  // Appel initial immédiat
setInterval(updateTitle, 1000);  // Mise à jour toutes les 5 secondes
