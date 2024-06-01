
'use strict';

const colorSelect = document.getElementById('colorSelect');

colorSelect.addEventListener('change', function() {
    const selectedColor = colorSelect.value;
    document.body.style.backgroundColor = selectedColor;
});