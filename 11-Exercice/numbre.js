var nb = prompt("Choisissez un nombre", '');

nb = parseInt(nb);

var fact = 1;

if (isNaN(nb) || nb < 0) {
    alert("Veuillez entrer un nombre entier positif.");
} else {
    
    var i = nb;

    while (i > 1) {
        fact *= i;
        i -= 1;
    }

    alert("Factorielle " + nb + " = " + fact);
}