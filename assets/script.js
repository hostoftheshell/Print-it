const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    }, {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    }, {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    }, {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

// Sélectionnez l'élément HTML avec la classe "arrow_left" et stockez-le dans la variable "preview"
const preview = document.querySelector('.arrow_left');
// Sélectionnez l'élément HTML avec la classe "arrow_right" et stockez-le dans la variable "next"
const next = document.querySelector('.arrow_right');

// Déclaration d'une variable pour stocker le nombre total d'image
const slidesCount = slides.length;

// Chemin des images
const slidePath = './assets/images/slideshow/';

// Index actuel du slide
let current = 0;


// Fonction pour mettre à jour les slides
function updateSlides() {
    const bannerImg = document.querySelector(".banner-img");
    bannerImg.src = slidePath + slides[current].image;
    bannerImg.alt = "Images illustrant l'impression, l'environnement de bureau et des modèles d'autocollants personnalisés";
    const bannerTagLine = document.querySelector("#banner p");
    bannerTagLine.innerHTML = slides[current].tagLine;

    // Mise en place de la navigation par les points
    dotList.forEach((dot, index) => {
        dot.classList.toggle("dot_selected", index === current);
    });
}

// Écouteur d'événements pour le bouton "next"
next.addEventListener('click', () => {
    current = (current + 1) % slidesCount;
    updateSlides();
});

// Écouteur d'événements pour le bouton "preview"
preview.addEventListener('click', () => {
    current = (current - 1 + slidesCount) % slidesCount;
    updateSlides();
});

// Déclaration d'une variable pour stocker l'élément html qui possède la class "dots"
const dots = document.querySelector(".dots");

// Mise en place des points de sélection
for (let i = 0; i < slidesCount; i++) { 
	
	// Crée un nouvel élément 'span'
    const dot = document.createElement('span');

    // Ajoute les attributs et classes nécessaires
    dot.id = `dot_${i}`;
    dot.classList.add('dot');
    dot.title = `Point de navigation ${
        i + 1
    }`;

    // Ajoute les nouveaux éléments 'dot' à l'élément parent 'dots'
    dots.appendChild(dot);
}

// Sélectionne tous les éléments avec la classe "dot" et les stocke dans une NodeList
const dotList = document.querySelectorAll(".dot")

// Ajoute des écouteurs d'événements aux points de navigation
dotList.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        current = index;
        updateSlides();
    });
});

// Initialiser le premier slide
updateSlides();