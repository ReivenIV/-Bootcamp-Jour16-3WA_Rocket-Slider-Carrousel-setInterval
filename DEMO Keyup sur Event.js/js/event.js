document.addEventListener('perso', (e)=>{
    console.log("je suis un event perso", e);
})

//lorsque j'ai appuyé sur une touche du clavier (le doigt vient de s'enlever)
document.addEventListener("keyup", function(e){
    //on pourra récupérer le code de la touche du clavier dans l'event
    console.log("keyup", e)
    console.log("keyup: key: ", e.key)
    console.log("keyup: code: ", e.code)
    console.log("keyup: keycode: ", e.keyCode)
    
    switch(e.keyCode){
        case 37:
            console.log("flèche de gauche")
        break;
        case 39:
            console.log("flèche de droite")
        break;
        case 38:
            console.log("flèche du haut")
        break;
        case 40:
            console.log("flèche du bas")
        break;
    }
})

//lorsque je suis en train d'appuyer appuyé sur une touche du clavier (le doigt reste sur la touche)
/*document.addEventListener("keydown", function(e){
    //on pourra récupérer le code de la touche du clavier dans l'event
   // console.log("keydown", e)
   // console.log("keydown: key: ", e.key)
   // console.log("keydown: code: ", e.code)
    //console.log("keydown: keycode: ", e.keyCode)
    
    switch(e.keyCode){
        case 37:
            console.log("flèche de gauche")
        break;
        case 39:
            console.log("flèche de droite")
        break;
        case 38:
            console.log("flèche du haut")
        break;
        case 40:
            console.log("flèche du bas")
        break;
    }
})*/

//idem que keyup (déprécié)
/*document.addEventListener("keypress", function(e){
    //on pourra récupérer le code de la touche du clavier dans l'event
   // console.log("keyup", e)
   // console.log("keyup: key: ", e.key)
   // console.log("keyup: code: ", e.code)
    //console.log("keyup: keycode: ", e.keyCode)
    
    switch(e.keyCode){
        case 37:
            console.log("flèche de gauche")
        break;
        case 39:
            console.log("flèche de droite")
        break;
        case 38:
            console.log("flèche du haut")
        break;
        case 40:
            console.log("flèche du bas")
        break;
    }
})*/