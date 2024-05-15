/**
 * Exercice - belle-marquise
 *
 * Consignes:
 *  Créer le fichier js/belle-marquise.js à partir du code suivant.
 *  Compléter le code manquant pour obtenir le résultat de la maquette.
 *
 * Note: Ne pas chercher une formule mathématique
 * Note: Ne pas faire de boucle
 */
'use strict'

const VIRGULE = ', '
const tableau = [
    'belle Marquise',
    'vos beaux yeux',
    'me font mourir',
    'd\'amour'
]

// Create a new unordered list element
const ul = document.createElement('ul');

// Define the permutations
const permutations = [
    [tableau[0], tableau[1], tableau[2], tableau[3]],
    [tableau[1], tableau[0], tableau[3], tableau[2]],
    [tableau[3], tableau[2], tableau[0], tableau[1]],
    [tableau[2], tableau[0], tableau[3], tableau[1]]
];

// Iterate over the permutations and create list items
permutations.forEach(permutation => {
    const li = document.createElement('li');
    li.textContent = permutation.join(VIRGULE);
    ul.appendChild(li);
});

// Append the unordered list to the body (or any specific element)
document.body.appendChild(ul);