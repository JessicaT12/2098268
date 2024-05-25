window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var boatX = -150; // Position initiale du bateau (hors écran à gauche)
    var boatY = 50; // Position Y fixe du bateau
    var boatSpeed = 2; // Vitesse de déplacement du bateau

    function drawBoat(x, y) {
        // Effacer le canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dessiner l'eau
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 350, canvas.width, 50); // Eau en bas du canvas

        // Toile du bateau
        ctx.beginPath();
        ctx.moveTo(x + 90, y + 30);
        ctx.lineTo(x + 240, y + 180);
        ctx.lineTo(x + 90, y + 180);
        ctx.fillStyle = "lightblue";
        ctx.fill();

        // Poteau du bateau
        ctx.fillStyle = "sienna";
        ctx.fillRect(x + 75, y, 10, 200);

        // Base du bateau
        ctx.beginPath();
        ctx.moveTo(x, y + 200);
        ctx.lineTo(x + 60, y + 250);
        ctx.lineTo(x + 190, y + 250);
        ctx.lineTo(x + 250, y + 200);
        ctx.fillStyle = "peru";
        ctx.fill();

        // Contour de la base du bateau
        ctx.beginPath();
        ctx.moveTo(x, y + 201);
        ctx.lineTo(x + 60, y + 250);
        ctx.lineTo(x + 190, y + 250);
        ctx.lineTo(x + 250, y + 201);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "sienna";
        ctx.stroke();
    }

    function animate() {
        drawBoat(boatX, boatY);

        boatX += boatSpeed;

        // Si le bateau sort de l'écran à droite, le réinitialiser à gauche
        if (boatX > canvas.width) {
            boatX = -250; // Réinitialiser la position X pour recommencer à gauche
        }

        requestAnimationFrame(animate);
    }

    animate();
};