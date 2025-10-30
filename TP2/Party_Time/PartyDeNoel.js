const NOM_EMPLOYE = document.getElementById("nomEmploye");
const messageErreurNom = document.getElementById("messageErreurNom");

let employe_present = document.getElementById("oui");
let employe_absent = document.getElementById("non");
const messageErreurPresence = document.getElementById("messageErreurPresence");


let invite_present = document.getElementById("invite");
let invite_absent = document.getElementById("ancunInvite");
const champ_Invite = document.getElementsByClassName("nomInvité")[0];
let nom_Invite = document.getElementById("accompagnation");
let employe_accompagner = document.getElementsByName("accompagner");
const messageErreurAccompagnateur = document.getElementById("messageErreurAcompagnation");



let repasVegan = document.getElementById("Tourtiere_végane");
let repasBoeuf = document.getElementById("Bœuf_braise");
let repasPoulet = document.getElementById("poulet_Anana");
let unRepasChoisit = document.getElementsByName("repas_Employe")
const messageErreurRepas = document.getElementById("messageErreurRepas");


const Nb_Activite_dispo = 2;
const RESTE_FORMULAIRE = document.getElementsByClassName("employe_present d-none")[0];

const checkboxes = document.getElementsByName("activite_Employe"); 
let ErreurActivite = document.getElementById("messageErreurActivite");


const BUTTON_ENVOYER = document.querySelector(".btn-primary");
const form = document.querySelector('form'); 


function PresenceEmploye(){
let employeEstPresent = false;
    if(employe_present.checked){
        RESTE_FORMULAIRE.classList.remove("d-none");
        employeEstPresent = true;
    }
    else if(employe_absent.checked){
        RESTE_FORMULAIRE.classList.add("d-none");
        employeEstPresent = true;

    }

else{
    messageErreurPresence.classList.remove("d-none"); 
    messageErreurPresence.querySelector('p').textContent = "Veuillez choisir une option."; 
    }
        return employeEstPresent;
}

function ChampsNomRemplie() {
    if (NOM_EMPLOYE.value.length < 1 ) {
        return false;
    }
    return true;
}

function ChampsInviteRemplie() {
    if (champ_Invite.value.length < 1 ) {
        return false;
    }
    return true;
}



function ChampsActiviteRemplie(){

    let deuxOptionsChoisit = false;
let nbOptionsChecker = 0;

for(let i = 0 ; i < checkboxes.length; i++){

    if(checkboxes[i].checked){
        nbOptionsChecker++;
    }
}

if(nbOptionsChecker === Nb_Activite_dispo){

    deuxOptionsChoisit = true;
}else{
    deuxOptionsChoisit = false;
}

return deuxOptionsChoisit;
   
}

function ChampAccompagner(){

    let accompagner = false;

   for(let i= 0 ; i < employe_accompagner.length ; i++){
         
    if(employe_accompagner[i].checked){
        accompagner =  true;
    }

   }
   console.log(accompagner)
   return accompagner;
}


function ChampRepasChoisie(){

    let auMoinsUnRepasChoisit = false;

   for(let i= 0 ; i < unRepasChoisit.length ; i++){
         
    if(unRepasChoisit[i].checked){
        auMoinsUnRepasChoisit =  true;
    }

   }
   return auMoinsUnRepasChoisit;
}

function PresenceInvite(){
    if(invite_present.checked){
        nom_Invite.classList.remove("d-none");
        
    }
    else{
        nom_Invite.classList.add("d-none");
    }
}

function VerificationChamps(event){
    
    event.preventDefault();

    let toutLesChampsValide = true;

   if( ChampRepasChoisie() === false){

       toutLesChampsValide = false;
       messageErreurRepas.classList.remove("d-none") ;
       messageErreurRepas.textContent = "Veillez choisir un repas";
    }else{
        messageErreurRepas.classList.add("d-none") ;
        messageErreurRepas.textContent = "";
    }

    if( ChampAccompagner() === false){

        toutLesChampsValide = false;
        messageErreurAccompagnateur.classList.remove("d-none") ;
        messageErreurAccompagnateur.textContent = "Veillez choisir une option";
     }else{
        messageErreurAccompagnateur.classList.add("d-none") ;
        messageErreurAccompagnateur.textContent = "";
     }

    if(ChampsActiviteRemplie() === false){
        toutLesChampsValide = false;
        
        ErreurActivite.classList.remove("d-none") ;
        ErreurActivite.textContent = "Veillez choisir deux activités";
    } else{
        ErreurActivite.classList.add("d-none");
        ErreurActivite.textContent = "";

    }
   
 
    if(!ChampsNomRemplie()){
        toutLesChampsValide = false;
        messageErreurNom.classList.remove("d-none") ;
        messageErreurNom.textContent = "Veillez entrez votre nom";
    }else{
        messageErreurNom.classList.add("d-none") ;
        messageErreurNom.textContent = "";

    }
   
    if (!PresenceEmploye()) {
        toutLesChampsValide = false;
        messageErreurPresence.classList.remove("d-none"); 
        messageErreurPresence.textContent = "Veuillez choisir une option."; 
    } else {
        messageErreurPresence.classList.add("d-none");
        messageErreurPresence.textContent = ""; 

    }
    if(employe_absent.checked){
        form.submit();

    }

    if(toutLesChampsValide){
        alert("Formulaire validé avec succès !");
        form.submit();

        return true;
    }
    
}

invite_present.onclick = PresenceInvite ;
invite_absent .onclick = PresenceInvite ;
employe_present.onclick= PresenceEmploye ;
employe_absent.onclick= PresenceEmploye ;
BUTTON_ENVOYER.addEventListener("click", VerificationChamps);
