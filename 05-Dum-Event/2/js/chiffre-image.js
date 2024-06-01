'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const numberDiv = document.getElementById('numberDiv');
    const image = numberDiv.querySelector('img');

    function updateImage() {
        const number = numberInput.value;
        image.src = `image/${number}.jpg`;
        image.alt = `Image chiffre ${number}`;
    }

    numberInput.addEventListener('input', updateImage);
    numberInput.addEventListener('change', updateImage);

    updateImage();
});