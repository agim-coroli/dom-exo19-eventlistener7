// 1. Créer un programme qui te permet de passer le contenu de la variable pContent jusqu'a une function et en suite fait en sorte que cette function ajoute ce qu'elle a reçue en parametre dans le p de la section au click du bouton.
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


let monP = document.querySelector("p")
let btn = document.querySelector("button")

let funct = (texte) =>{
    monP.textContent = texte
} 

btn.addEventListener("click", () => {
    funct(pContent)
})


// 2. Créer un programme qui au clique du h1, le background devient gold et sa color red, Attention voici les contraintes :
// - Les couleurs sont contenu dans des variables sur le fichier main.js, sert-en pour les affecter au style de la balise h1
// - Il faut que ces variables soient envoyé en parametre dans la function via le addEventListener.
let theColor = "red";
let theBackground = "gold";

let monH = document.querySelector("h1")

let funct2 = (couleur, bgc) => {
    monH.style.color = couleur
    monH.style.backgroundColor = bgc
}

monH.addEventListener("click", () => {
    funct2(theColor, theBackground)
})