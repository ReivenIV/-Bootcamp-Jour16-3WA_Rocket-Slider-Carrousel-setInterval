/* LES SELECTEURS */

/* QUERYSELECTOR cible un élément souhaité */
// un sélécteur universel on peut lui mettre n'importe quoi (balise, id, class) un seul élément
let headerP = document.querySelector("header p")


console.log(headerP)


/* QUERYSELECTORALL cible plusieurs éléments*/
//attention il récupère les valeurs multiples et nous les renvoies dans un tableau, du coup même si il n'y a qu'un seul élément on aura un tableau avec un seul index
let articles = document.querySelectorAll("article p")

console.log(articles)
console.log(articles[0])


/* GETELEMENTBYID */
//on récupère l'article par son ID (un seul élément)

let article1 = document.getElementById('art1')

console.log(article1)

/* GETELEMENTSBYCLASSNAME */
/* cible plusieurs éléments par une class */
//attention il récupère les valeurs multiples et nous les renvoies dans un tableau, du coup même si il n'y a qu'un seul élément on aura un tableau avec un seul index
let article2 = document.getElementsByClassName('texto')

console.log(article2)

/* GETELEMENTSBYTAGNAME */
/*reservé aux balises*/
//attention il récupère les valeurs multiples et nous les renvoies dans un tableau, du coup même si il n'y a qu'un seul élément on aura un tableau avec un seul index
let footer = document.getElementsByTagName('footer')

console.log(footer)



/* MANIPULATION DES TEXTES */

//innerHTML nous permet de lire ou d'écrire d'écrire dans le HTML
console.log(headerP.innerHTML)
//let coucou = headerP.innerHTML + 'blabla'
//on écrase l'ancien contenu par la nouvelle valeur on peut aussi lui écrire des balise le navigateur va le comprendre
headerP.innerHTML = "<strong>Je suis le paragraphe du header</strong>"

//innerText récupère le texte de l'élément et nous permet de le modifier lui aussi. (attention uniquement le texte et nous permet pas de rajouter des balise)
console.log(headerP.innerText)

headerP.innerText = "Je suis un nouveau paragraphe"

//textContent nous récupère lui aussi le contenu texte de la balise et nous permet de le manipuler. (attention uniquement le texte et nous permet pas de rajouter des balise)
console.log(headerP.textContent)

headerP.textContent = "Je suis un contenu nouveau"



/* STYLE */

//la propriété style nous permet d'attaquer n'importe quelle propriété css sur notre élément ciblé

//2 méthodes: ici on peut mettre plusieurs valeurs en même temps
articles[0].style = "color: red;text-align:center;"

//on peut les attaquer propriété par propriété (les propriété s'appeleront en camelCase)
articles[1].style.color = "green";
articles[1].style.backgroundColor = "silver"


/* CREATION d'ELEMENTS et AJOUT D'ENFANTS */

//on peut créer une élément (pour le moment on ne la pas injecté dans le html)
let div = document.createElement("div")

//on peut customiser cette événement et lui donner du contenu
div.style.border = "1px solid black"

div.innerHTML = "<p>Coucou je suis une div crée via du javascript!</p>"

//on ajoute notre div à un élément du html en tant qu'enfant
article1.appendChild(div)

console.log(div.textContent)


/* EVENTS JAVASCRIPT */

let button = document.querySelector('#bt1')

//addEventListener est un écouteur d'événements
button.addEventListener("click", function(e){
    console.log(e.target.innerHTML)//e nous sort l'objet de l'evenement et les propriétés de l'élément qui a déclenché cet événement
    
    button.style.backgroundColor = "red";
    button.style.color = "white"
    
})


let btn = document.getElementById('bt2')

function alerteGenerale(e){
    console.log(e)
    alert("ALEEEERTE GENERAAAAAAALE!")
}
//on peut appeler une fonction nommée dans notre addEventListener
btn.addEventListener("dblclick", alerteGenerale)

let maDiv = document.querySelector(".testDiv")

maDiv.style = "width: 100px; height: 100px; background-color: orange"

//il existe de nombreux types d'événements
maDiv.addEventListener("mouseover", (e)=>{
    maDiv.innerHTML = "Je suis orange hahaha"
})


maDiv.addEventListener("mouseout", (e)=>{
    maDiv.style.backgroundColor= "red"
})

document.addEventListener("DOMContentLoaded", (e)=>{
    //nous permet de supprimer un écouteur d'événement
    button.removeEventListener("click", function(){
        console.log("je t'ai eu")
    })
})

/* CLASSLIST */

//la propriété classList ajoute, supprime ou ajout/suppr une classe sur un élément
article1.classList.add("maSection")

document.querySelector("header h1").addEventListener("click", function(){

    article1.classList.remove("maSection")
})

article1.classList.add("maSection2")
document.querySelector("#toggle").addEventListener("click", function(){
    article1.classList.toggle("maSection2")
    newEvent()
})
//add pour ajouter une class
//remove pour supprimer une class
//toggle pour supprimer une class


/* CREATION D'EVENEMENT */

function newEvent() {
   /* let myEvent = document.createEvent('Event')
    myEvent.initEvent("perso",true, true)
    document.dispatchEvent(myEvent)*/
    
    let myEvent = new CustomEvent('perso', {
        detail:{
            //ici on peut mettre nos données
            nom: "perso",
            type: "event maison"
        }
    })
    document.dispatchEvent(myEvent)
}


/* AJOUT D'ATTRIBUT */

//on peut ajouter des attribut dans nos balises, le but est de faire passer des données (non sensible) de manière discrète afin de pouvoir les récupérer à un moment donnée
article1.setAttribute("coucou", "salut")

/*on peut créer un data-quelquechose comme attribut dans notre HTML
si j'ai une boucle pour générer une liste d'élément cliquables, le fait de glisser un dataset sur chacun de ces éléments me permettra de recupérer facilement l'index de l'élément sur lequel j'ai cliqué
*/
//          data-index      valeur
article1.dataset.index = "numero 1"

//on peut créer ou écraser la valeur d'un attribut
//document.querySelector("img").setAttribute("src", "cancel-button.png")

//on peut attaquer directement le src sur une image
document.querySelector("img").src = "cancel-button.png"

console.log(window)
document.write(`largeur: ${window.innerWidth}, hauteur: ${window.innerHeight}`)