var nb = prompt("Choisissez un nombre", '');

nb = parseInt(nb);

var fact = 1;

if (isNaN(nb) || nb < 0) {
    alert("Veuillez entrer un nombre entier positif.");
} else {
    for (var i = nb; i > 1; i -= 1) {
        fact *= i;
    }
    alert("Factorielle " + nb + " = " + fact);
}