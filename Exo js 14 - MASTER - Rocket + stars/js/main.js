'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let timer;
let count = 10;

// Sélection des différents éléments du DOM sur lesquels nous allons agir
const rocket = document.getElementById('rocket');
const billboard = document.querySelector('#billboard span');
const firingButton = document.getElementById('firing-button');
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
// Gestionnaire d'événement au clic sur le bouton de mise à feu
function onClickFiringButton()
{
    // Une fois que la mise à feu lancée, on désactive le bouton de mise à feu et afficher en gris (class css)
    firingButton.removeEventListener("click", onClickFiringButton)
    firingButton.classList.add('disabled')
    // Programmation du décollage de la fusée à la fin du compte à rebours (appel de fonction)
    scheduleTakeOff()
    
    // Affichage initial du compte à rebours (appel function)
    countDown()
    
    // Lancement du compte à rebours 
    timer = window.setInterval(countDown,1000)
    // On change la source de l'image de la fusée (appel de fonction)
    updateRocket('rocket2.gif')
}

/**
 * Programme le décollage de la fusée à la fin du compte à rebours
 */
function scheduleTakeOff()
{
    // Programmation du décollage pour dans x secondes
    window.setTimeout(()=>{
         // On change la source de l'image de la fusée
        updateRocket('rocket3.gif')
        // On fait décoller la fusée en lui donnant la classe 'tookOff', la transition CSS fera le reste
        rocket.classList.add('tookOff')
    }, count * 1000)
       
    
}    

// Gestion du compte à rebours
function countDown()
{
    // Affichage sur le panneau du compte à rebours
    billboard.innerHTML = count
    // On décrémente le compteur
    count--
    // Si le compteur arrive à -1, on stoppe le chronomètre
    if(count < 0){
        window.clearInterval(timer)
    }
}

/**
 * Met à jour l'image de la fusée
 */
function updateRocket(filename)
{
    //on change la valeur de l'attribut src de notre image (argument) filename.src=
    rocket.src = `images/${filename}`
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

// Installation du gestionnaire d'événement au clic sur le bouton de mise à feu
firingButton.addEventListener("click", onClickFiringButton)

/************************************************************************************/
/* *********************************** ETOILES  *************************************/
/************************************************************************************/

/**
 * Bonus: Choisir la taille de l'étoile
 */
 
/*function choisirTaille(){
    let taille = getRandomInteger(1,3)
    switch(taille){
        case 1:
            return 'tiny'
        break;
        case 2:
            return 'normal'
        break;
        case 3:
            return 'big'
        break;
    }
}*/

/**
 *  Bonus: Choisir la position X et Y
 */
 /*function choisirX(){
     return getRandomInteger(1, window.innerWidth - 3)
 }
 
 function choisirY(){
     return getRandomInteger(1, window.innerHeight - 3)
 }*/
 
 // AJOUTER LES ETOILES
 /*const numberOfStars = 300
 //ici je vais stocker les div qui seront mes étoiles sur le html
 let stars = []
 
 //ici je vais faire 300 tours de boucle et pour chaque tour de boucle je vais créer une div (étoile) qu'on va positionner
 for(let i = 0; i <= numberOfStars; i++){
     stars[i] = document.createElement("div")
     document.body.appendChild(stars[i])
     //on ajoute la classe star à chacune des div (qui va nous mettre un position absolute et la couleur par défaut)
     stars[i].classList.add("star")
     //je vais ajouter une classe tiré au sort pour ajouter une taille d'étoile aléatoire (tiny, normal, big)
     stars[i].classList.add(choisirTaille())
     //comme j'ai une position absolute sur chaque div je les positionne avec top et left sur mon html
     stars[i].style.left = choisirX() + "px"
     stars[i].style.top = choisirY() + "px"
 }*/
 
 
 function starsInBack(){
     for(let i = 0; i < 200; i++){
        let tailleEtoile = getRandomInteger(1,3)
        let randomX = getRandomInteger(1, window.innerWidth - 3)
        let randomY = getRandomInteger(1, window.innerHeight - 3)
        let etoiles = document.createElement("div")
        
        etoiles.classList.add("star")
        
        if(tailleEtoile === 1){
            etoiles.classList.add("tiny")    
        }else if(tailleEtoile === 2){
            etoiles.classList.add("normal")
        }else{
           etoiles.classList.add("big")
        }
        
        etoiles.style = `top: ${randomY}px; left: ${randomX}px`;
        document.body.appendChild(etoiles)
     }
 }
 
 starsInBack()