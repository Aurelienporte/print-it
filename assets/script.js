const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Création des points selon nombre de diapo
const conteneurPoints = document.querySelector(".dots");
for(slide of slides){
	const point = document.createElement("div");
	point.classList.add("dot");
	conteneurPoints.append(point);
}

// faire défiler les diapos acceder au html
const image = document.querySelector(".banner-img");
const texteBanniere = document.querySelector("#banner p");
const tousLesPoints = document.querySelectorAll(".dot");	

// initialisation première diapo (ajouter l'url de l'image afficher premier point en gras)
let numeroDiapo = 0;
image.setAttribute("src", "./assets/images/slideshow/" + slides[numeroDiapo].image);
tousLesPoints[0].classList.add("dot_selected");

// Acceder aux chrevrons et poser un gestionnaire d'evenement
const chevronDroit = document.querySelector(".arrow_right");
chevronDroit.addEventListener("click", avancer);
const chevronGauche = document.querySelector(".arrow_left");
chevronGauche.addEventListener("click", reculer);

// Fonctions declenchees par l'eventlistener
function avancer(){
	numeroDiapo++;
	if(numeroDiapo>=slides.length){
		numeroDiapo=0;
	}
	changerImage();
	actualisationTexte();
	deplacementPoint();
}

function reculer(){
	numeroDiapo--;
	if(numeroDiapo<0){
		numeroDiapo=slides.length - 1;
	}
	changerImage();
	actualisationTexte();
	deplacementPoint();
}

function changerImage(){
	image.setAttribute("src", "./assets/images/slideshow/" + slides[numeroDiapo].image);	
}

function deplacementPoint(){
	for(chaquePoint of tousLesPoints){
		chaquePoint.classList.remove("dot_selected");
	}
	tousLesPoints[numeroDiapo].classList.add("dot_selected");
}

function actualisationTexte(){
	texteBanniere.innerHTML = slides[numeroDiapo].tagLine;
}