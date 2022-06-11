'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

// Codes des touches du clavier.
const SPACE_KEY= 'Space';
const LEFT_ARROW_KEY = 'ArrowLeft';
const RIGHT_ARROW_KEY = 'ArrowRight';

//buttons
let btnForward = document.querySelector("#forward");
let btnBackward = document.querySelector("#backward");
let btnPlay = document.querySelector("#play");
let btnStop = document.querySelector("#stop");
let random = document.querySelector('#random')

//img
let photoReceptor = document.querySelector('figure img');
let figcaption = document.querySelector('figure figcaption')



// La liste des slides du carrousel. (tableau d'objet, pour chaque objet je veux le nom de l'image et la legende)
const slides =
[
    { image: 'images/1.jpg', legend: '1 Street Art'          }, //0
    { image: 'images/2.jpg', legend: '2 Fast Lane'           }, //1
    { image: 'images/3.jpg', legend: '3 Colorful Building'   }, //2
    { image: 'images/4.jpg', legend: '4 Skyscrapers'         }, //3
    { image: 'images/5.jpg', legend: '5 City by night'       }, //4
    { image: 'images/6.jpg', legend: '6 Tour Eiffel la nuit' }  //5
];

// Objet contenant l'état du carrousel.
let state;
//slides[state.index].image 



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
//passage à l'image suivante
function onSliderGoToNext()
{
    
    state.index++
    //si nous sommes à la fin du tableau (dernière image)
    if (state.index == slides.length){
        // on revient au début (le carrousel est circulaire).
        state.index = 0
    }
        
    // Mise à jour de l'affichage. (appel fonction)
    refreshSlider()
}

//passage à l'image précédente
function onSliderGoToPrevious()
{
    // Passage à la slide précédente.
    state.index--
    //si on est revenu au début du tableau (première image)
    if (state.index < 0){
        //on revient à la fin (dernière img)
        state.index = slides.length -1
    }
        
    // Mise à jour de l'affichage. (appel fonction)
     refreshSlider()
}

//fonction de tirage alétoire d'une image à afficher
function onSliderGoToRandom()
{
    let index;
    
    //boucle qui va tirer au sort une image tant que l'index selectionné correspond à l'index précédent
    //on lui interdit d'afficher deux fois de suite la mm image (do while) on utilise getRandomInteger
    do{
        index = getRandomInteger(0, slides.length - 1)
        // Passage à une slide aléatoire.
    } while(index == state.index)
    
    state.index = index 
    
    // Mise à jour de l'affichage. (appel fonction)
    refreshSlider()
}

/*
 * Quand on créé un gestionnaire d'évènements, le navigateur appelle la
 * fonction en fournissant un argument event représentant l'évènement lui-même.
 *
 * Si le gestionnaire d'évènements n'a pas besoin de cet argument,
 * inutile de le déclarer !
 *
 * Mais ici on va en avoir besoin...
 */
function onSliderKeyUp(event)
{
    /*
     * Les gestionnaires d'évènements d'appui sur une touche (évènements
     * keydown, keyup, keypress) contiennent une propriété keyCode dans l'objet
     * event représentant le code de la touche du clavier.
     *
     * Il existe de très nombreux codes, plus ou moins standards, voir la page :
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode SWITCH
     selon la touche du clavier pressé, on appelera une des fonctions
     */
     switch(event.keyCode){
         case 39: // -->>
             onSliderGoToNext()
         break;
         case 37: // <<--
            onSliderGoToPrevious()
         break;
         case 32: //Splace
              onSliderToggle()             
         break;
         case 38: //Arrow UP 
              onSliderGoToRandom()             
         break;  
     }
}

//lecture automatique du carrousel ou stop
function onSliderToggle()
{
    // Modification de l'icône du bouton pour démarrer ou arrêter le carrousel.
    
    let playChange = document.querySelector("#play  i");
    playChange.classList.toggle("fa-circle-play");
    playChange.classList.toggle("fa-circle-pause");

    
    // Est-ce que le carousel est démarré ?  
    if (state.timer === null){
        // Non, démarrage du carousel, toutes les deux secondes.
        state.timer = setInterval(onSliderGoToNext, 2000  )         
        //on vise l'attribut title de l'élément cliqué (this)
        this.title = "Arreter le Slider" // <<--- MESSAGE FLOTANT HOVER MOUSE
        
    } else { //sinon    
        // Oui, arrêt du carousel.
        clearInterval(state.timer);
        // Réinitialisation de la propriété pour le prochain clic sur le bouton.
        state.timer = null;
        //on vise l'attribut title de l'élément cliqué (this)
        this.title = "Allumer le Slider" // <<--- MESSAGE FLOTANT HOVER MOUSE
    }



        
}

//affiche ou cache la barre d'outil du slider
function onToolbarToggle()
{
    // Modification de l'icône du lien pour afficher ou cacher la barre d'outils.
    
    
    // Affiche ou cache la barre d'outils. (jouer avec une classe hide en css)
}

function refreshSlider()
{
    // Recherche des balises de contenu du carrousel. (image et figcaption)
    figcaption.textContent = slides[state.index].legend
    
    // Changement de la source de l'image et du texte de la légende du carrousel.
    photoReceptor.src = slides[state.index].image;
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 * Le gestionnaire d'évènement est une fonction anonyme que l'on donne en deuxième
 * argument directement à document.addEventListener().
 */
document.addEventListener('DOMContentLoaded', function() {

    // Initialisation du carrousel.
    state       = {};
    state.index = 0;                   // On commence à la première slide
    state.timer = null;                // Le carrousel est arrêté au démarrage
    
    // Installation des gestionnaires d'évènement. (installEventHandler utilities)
    
  

    //IMPORTANT reduction de code à garder! 
    function installEventHandler(selector, type, eventHandler){
    // Récupération du premier objet DOM correspondant au sélecteur.
    const domObject = document.querySelector(selector)
    // Installation d'un gestionnaire d'évènement sur cet objet DOM.
    domObject.addEventListener(type, eventHandler)
    }
    //Appel aus evenements. 
    installEventHandler("#play", "click", onSliderToggle);   
    installEventHandler("#backward", "click", onSliderGoToPrevious);
    installEventHandler("#forward", "click", onSliderGoToNext);
    installEventHandler('#random', "click", onSliderGoToRandom)
    
   
    
    
    /*
     * L'évènement d'appui sur une touche doit être installé sur l'ensemble de la
     * page, on ne recherche pas une balise en particulier dans l'arbre DOM.
     *
     * L'ensemble de la page c'est la balise <html> et donc la variable document.
     */
    document.addEventListener('keyup', onSliderKeyUp);
    // Equivalent à installEventHandler('html', 'keyup', onSliderKeyUp);
    
    // Affichage initial.
    refreshSlider();
})

