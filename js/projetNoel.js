"use strict"

let commande = [];
let compteurDeCommande = 1
function acheterVoiture() {
    let voiture = document.getElementById("achat");
    let bouton = document.getElementsByName("voiture1");
    for (let i = 0; i < bouton.length; i++) {
        bouton[i];
        if (bouton[i].checked == true) {
            commande.push(["Commande numéro " + compteurDeCommande, voiture.nom.value, voiture.prenom.value, voiture.age.value + " ans", voiture.adresse.value, bouton[i].value]);
            console.log(commande);
            compteurDeCommande ++
            alert("La commande pour votre " + bouton[i].value + " a bien été enregistrée !")
        }
    }
    return false;


}

