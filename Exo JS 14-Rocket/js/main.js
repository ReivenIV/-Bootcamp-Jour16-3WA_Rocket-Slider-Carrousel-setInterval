'use strict';
/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
const IMG_PATH = 'images/';
let timer;
let count;

// Initialisation des variables globales
count = 10;
// Sélection des différents éléments du DOM sur lesquels nous allons agir
let firingButton = document.querySelector("#firing-button");
let ecouteurData  = document.querySelector("aside span");
let rocket = document.querySelector("#rocket")


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/


// Gestionnaire d'événement au clic sur le bouton de mise à feu
function onClickFiringButton() {
    
    // Une fois que la mise à feu lancée, on désactive le bouton de mise à feu et afficher en gris (class css)
    firingButton.removeEventListener("click", onClickFiringButton);
    firingButton.classList.add("disabled");
    
    // Programmation du décollage de la fusée à la fin du compte à rebours (appel de fonction)
    scheduleTakeOff()
    // Affichage initial du compte à rebours (appel function)
    countDown()
    
    // Lancement du compte à rebours 
    timer =  window.setInterval(()=>{
        countDown()
    }, 1000)
    // On change la source de l'image de la fusée (appel de fonction)
    updateRocket("rocket2.gif");
}


/**
 * Programme le décollage de la fusée à la fin du compte à rebours
 */
function scheduleTakeOff() {
    // Programmation du décollage pour dans x secondes
    window.setTimeout(()=>{ 
        // On change la source de l'image de la fusée
        updateRocket('rocket3.gif')
        // On fait décoller la fusée en lui donnant la classe 'tookOff', la transition CSS fera le reste
        rocket.classList.add('tookOff')
    }, 10000) // , count * 1000) tambien funcionaria
}    


// Gestion du compte à rebours <<-- Cuenta regresiba 
function countDown() {
    // Affichage sur le panneau du compte à rebours
    ecouteurData.innerHTML = count
    // On décrémente le compteur
    count--
    // Si le compteur arrive à -1, on stoppe le chronomètre
    if(count === -1){
        window.clearInterval(timer) 
    }
}

/**
 * Met à jour l'image de la fusée
*/

function updateRocket(filename) {    
    //on change la valeur de l'attribut src de notre image (argument) filename.src=
    rocket.src = `images/${filename}`
}



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
firingButton.addEventListener("click", onClickFiringButton)
// Installation du gestionnaire d'événement au clic sur le bouton de mise à feu


/************************************************************************************/
/* *********************************** ETOILES  *************************************/
/************************************************************************************/

/**
 * Bonus: Choisir la taille de l'étoile
*/