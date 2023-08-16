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

// acceder aux fleches, ajouter un gestionnaire d'événement et vérifier à la console
const fleches = document.querySelectorAll(".arrow");
 for(chevron of fleches){
	chevron.addEventListener("click", info);
 }
function info(){
	console.log(this);
}

// Création des points selon nombre de diapo
const conteneurPoints = document.querySelector(".dots");
for(slide of slides){
	const point = document.createElement("div");
	point.classList.add("dot");
	conteneurPoints.append(point);
}

// faire défiler les diapos
const image = document.querySelector(".banner-img");
const texteBanniere = document.querySelector("#banner p");
const tousLesPoints = document.querySelectorAll(".dot");	

// initialisation première diapo
let numeroDiapo = 0;
image.setAttribute("src", "./assets/images/slideshow/" + slides[numeroDiapo].image);
tousLesPoints[0].classList.add("dot_selected");

const chevronDroit = document.querySelector(".arrow_right");
chevronDroit.addEventListener("click", avancer);
const chevronGauche = document.querySelector(".arrow_left");
chevronGauche.addEventListener("click", reculer);

function avancer(){
	numeroDiapo++;
	if(numeroDiapo>=slides.length){
		numeroDiapo=0;
	}
	diapoActive();
	texteActif();
	pointActif();
}

function reculer(){
	numeroDiapo--;
	if(numeroDiapo<0){
		numeroDiapo=slides.length - 1;
	}
	diapoActive();
	texteActif();
	pointActif();
}

function diapoActive(){
	image.setAttribute("src", "./assets/images/slideshow/" + slides[numeroDiapo].image);	
}

function pointActif(){
	for(chaquePoint of tousLesPoints){
		chaquePoint.classList.remove("dot_selected");
	}
	tousLesPoints[numeroDiapo].classList.add("dot_selected");
}

function texteActif(){
	texteBanniere.innerHTML = slides[numeroDiapo].tagLine;
}