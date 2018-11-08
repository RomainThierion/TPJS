let letterArray = [];

class Lettres   {
    constructor(lettre) {
        this.lettre = lettre;
    }

    ajoutHTML() {
        let lettre;
        let mot = nouvellePartie.mot.key;
        
        this.lettre = mot.length;
        for (lettre = 0; lettre < mot.length; ++lettre) {
            
            console.log(mot[lettre]);
            letterArray.push(mot[lettre]);
            $('#wordContainer').append('<div style="padding: 10px; border: solid 1px black;"><p>' + mot[lettre] + '</p></div>');
        }
    }

    lettreJouee() {
        $('#submit').click(function() {
            if ($('#choix').val() = mot[lettre]) {
                letterArray.forEach(function(letter){
                    $('p').css({ "display": "block"});
                })
                alert($('#choix').val());
            }
            
        })
    }
}
let totalLettres = new Lettres();
totalLettres.ajoutHTML();
totalLettres.lettreJouee();
console.log(letterArray);
