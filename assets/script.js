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
const fleches = document.querySelectorAll('.arrow');
 for(chevron of fleches){
	chevron.addEventListener("click", info);
 }
function info(){
	console.log(this);
}

// faire défiler les diapos
const image = document.querySelector('.banner-img');
const rangeeDePoints = document.querySelectorAll('.dot');
const texteBanniere = document.querySelector('#banner p');

let numeroDiapo = 0;

const chevronDroit = document.querySelector('.arrow_right');
chevronDroit.addEventListener('click', avancer);
const chevronGauche = document.querySelector('.arrow_left');
chevronGauche.addEventListener('click', reculer);

function avancer(){
	numeroDiapo++;
	if(numeroDiapo>3){
		numeroDiapo=0;
	}
	diapoActive();
	texteActif();
	pointActif();
}

function reculer(){
	numeroDiapo--;
	if(numeroDiapo<0){
		numeroDiapo=3;
	}
	diapoActive();
	texteActif();
	pointActif();
}

function diapoActive(){
	image.setAttribute('src', './assets/images/slideshow/' + slides[numeroDiapo].image);	
}

function pointActif(){
	for(point of rangeeDePoints){
		point.classList.remove('dot_selected');
	}
	rangeeDePoints[numeroDiapo].classList.add('dot_selected');
}

function texteActif(){
	texteBanniere.innerHTML = slides[numeroDiapo].tagLine;
}