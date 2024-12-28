        // Fonction de redirection vers la page d'accueil
        function redirectHome() {
            window.location.href = 'index.html';  // Changez l'URL selon votre page d'accueil
        }

        // Fonction de redirection vers la boîte mail
        function redirectEmail() {
            window.location.href = 'https://mail.example.com';  // Remplacez par l'URL de votre boîte mail
        }

        // Ajouter un événement submit au formulaire
        document.getElementById('reset-password-form').addEventListener('submit', function(event) {
            // Empêcher l'envoi du formulaire pour vérifier les données
            event.preventDefault();

            // Vérifier si le champ e-mail est rempli
            var emailInput = document.getElementById('form-emailbox-0');
            if (emailInput.value.trim() !== '') {
                // Afficher la popup si le formulaire est valide
                document.getElementById('popup').style.display = 'block';
            } else {
                // Afficher un message d'erreur ou une alerte si le champ est vide
                alert('Veuillez entrer un e-mail ou numéro de téléphone.');
            }
        });