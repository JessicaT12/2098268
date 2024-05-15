'use strict';

function afficherNoteFinale() {
    var note = prompt("Quelle est la note en pourcentage?", "");
    note = parseFloat(note);
    if (isNaN(note)) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }
    if (note >= 90) {
        alert("Note finale A");
    } else if (note >= 80) {
        alert("Note finale B");
    } else if (note >= 70) {
        alert("Note finale C");
    } else if (note <= 60) {
        alert("Note finale D");
    } else {
        alert("Échec");
    }
}



