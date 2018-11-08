class Partie {
    constructor(mot) {
        this.mot = mot;
    }

    randomWord() {
        this.mot = DICTIONNARY[Math.floor(Math.random()*DICTIONNARY.length)];
        console.log(this.mot.key);
    }
}

let nouvellePartie = new Partie();
nouvellePartie.randomWord();