let pseudo = document.getElementById('pseudo');
let password = document.getElementById('password');
let form = document.getElementById('form');

class User {
    constructor(pseudo, password) {
        this.pseudo = pseudo;
        this.password = password;
    }
}

let user = new User('romain', 'azerty');
pseudo.addEventListener("keyup", function() {
    verify(pseudo.value, password.value);
});

password.addEventListener("keyup", function() {
    verify(pseudo.value, password.value);
});

function verify(pseudo, password) {
    if (user.pseudo == pseudo && user.password == password) {
        form.style.display = "none";
        alert("Bonjour " + pseudo);
    } else {
        console.log("erreur");
    }
}




