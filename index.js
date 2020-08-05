// Selctionne les elements
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");

// cache l'erreur
error.style.display = "none";

//genere un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random()* 101);
let coups = 0;
let nombreChoisi;

//verifie que l'utilisateur donne bien un nombre
input.addEventListener("keyup", ()=>{
    if(isNaN(input.value)) {
        error.style.display = "inline";
    }else{
        error.style.display = "none";
    }
});

//agi à l'envoi du formulaire
formulaire.addEventListener("submit", (e) =>{
    e.preventDefault();

    if(isNaN(input.value)|| input.value==""){
        input.style.borderColor="red";
    }else{
        coups++;
        input.style.borderColor="silver";
        nombreChoisi = input.value;
        input.value ="";
        verifier(nombreChoisi);
    }
})

// fonction verifier
function verifier(nombre) {
    let instruction = document.createElement("div");
    if(nombre < nombreAleatoire) {
        instruction.textContent="#"+ coups +"("+nombre+") C'est plus!";
        instruction.className="instruction plus";
    }else if(nombre>nombreAleatoire){
        instruction.textContent="#"+ coups +"("+nombre+") C'est moins!";
        instruction.className="instruction moins";
    }else {
        instruction.textContent="#"+ coups +"("+nombre+") Bien jouéééééé";
        instruction.className="instruction fini";
    }
    document.querySelector("#instructions").prepend(instruction);
}