document.addEventListener('DOMContentLoaded', () => {
    // Récupère toutes les sections du site
    const sections = document.querySelectorAll('.section');

    // Fonction qui vérifie si une section est dans le viewport
    const checkVisibility = () => {
        const viewportHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            // Si la section est dans le viewport, on lui ajoute la classe 'visible'
            if (sectionTop < viewportHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    // Vérifier la visibilité des sections dès le début
    checkVisibility();

    // Ajouter un écouteur d'événements pour vérifier lors du défilement
    window.addEventListener('scroll', checkVisibility);

    // Bouton retour en haut de la page
    const scrollToTopButton = document.getElementById("scrollToTop");

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Button contact
    const contactButtons = document.querySelectorAll(".contact-btn");

    contactButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            console.log("Bouton cliqué :", event.currentTarget.href);
        });
    });
});

