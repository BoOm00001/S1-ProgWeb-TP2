let USERINPUT = document.getElementById("nombre");
const BUTTON_ID = document.getElementById("envoyer");
const ALERT = document.getElementsByClassName("alert")[0];
let nbEssaieRestant = document.getElementById("essaie-restant");
let magicNb = Math.floor(Math.random() * 100);
let nbEssaie = 0;
console.log(nbEssaie);
let ESSAIE_MAXIMUM = 10;

 function Game() {
    nbEssaie++ ; 
    
    let userNb = parseInt(USERINPUT.value, 10);
    if(isNaN(userNb)){
        ALERT.textContent = "Entrez un nombre valide"
        nbEssaie--;
    }
    
    else if(userNb < magicNb){
        ALERT.textContent = "Vous êtes proches!! Un chiffre plus grand"
    }
    
    else if(userNb > magicNb){
        ALERT.textContent = "Vous êtes proches donner un chiffre plus petit"
    }

    else{
        ALERT.textContent =` Félicitation vous avez reussit en ${nbEssaie} coups `;
        BUTTON_ID.disabled = false;
        endGame();
        return;
    }

    let essaieRestant = ESSAIE_MAXIMUM - nbEssaie;
    nbEssaieRestant.textContent = `Tentatives restantes : ${essaieRestant}`;

    if (nbEssaie >= ESSAIE_MAXIMUM) {
        ALERT.textContent = `Désolé, vous avez utilisé vos ${ESSAIE_MAXIMUM} tentatives. Le nombre magique était ${magicNb}.`;
         endGame(); 
    }
   
    function endGame() {
        BUTTON_ID.textContent = "Recommencer";
        BUTTON_ID.removeEventListener("click", Game);
        BUTTON_ID.addEventListener("click", restartGame);
    }

    function restartGame() {

        magicNb = Math.floor(Math.random() * 100);
        nbEssaie = 0;
        USERINPUT.value = ""; 
        ALERT.textContent = "";
        nbEssaieRestant.textContent = `Tentatives restantes : ${ESSAIE_MAXIMUM}`; 
        BUTTON_ID.textContent = "Envoyer"; 
        BUTTON_ID.removeEventListener("click", restartGame); 
        BUTTON_ID.addEventListener("click", Game); 

    }
}

BUTTON_ID.addEventListener("click", Game, );



