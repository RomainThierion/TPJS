let repertoire = [
  {
    nom: "Durand",
    prenom: "Paul",
    telephone: "06.12.12.12.12"
  },
  {
    nom: "Dupont",
    prenom: "Jacques",
    telephone: "06.13.15.78.67"
  },
  {
    nom: "Deschamps",
    prenom: "Didier",
    telephone: "06.25.34.78.78"
  },
];

let informations = {};

function create() {
  ligne = document.createElement("li");
  var text = document.createTextNode(repertoire);
  console.log(text);
  ligne.appendChild(text);
  document.getElementById("liste").appendChild(ligne);  
}

document.querySelector("#validate").addEventListener("click", function(event) {
  event.preventDefault();
  catchName = document.getElementById('name').value;
  catchNickName = document.getElementById('nickname').value;
  catchTel = document.getElementById('telephone').value;
  informations = {
    nom: catchName,
    prenom: catchNickName,
    telephone: catchTel
  };
  repertoire.push(informations);
  create(informations);
  console.log(repertoire);
}, false);





