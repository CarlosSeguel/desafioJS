// Selecciona todos los divs con clase 'glow'
let border = document.querySelectorAll('.glow');

// Agrega un controlador de eventos de clic a cada div
border.forEach(function(div) {
    div.addEventListener('click', function() {
        // Cuando se hace clic en el div, verifica si tiene la clase 'clicked'
        if (this.classList.contains('clicked')) {
            // Si tiene la clase, la elimina
            this.classList.remove('clicked');
        } else {
            // Si no tiene la clase, la añade
            this.classList.add('clicked');
        }
    });
});

function calcularTotal (){
const number1 = parseInt(document.getElementById('sticker1').value);
const number2 = parseInt(document.getElementById('sticker2').value);
const number3 = parseInt(document.getElementById('sticker3').value);
const mensaje = document.getElementById('total');

let total = number1 + number2 + number3;

mensaje.textContent = total;

if (total<0){
    mensaje.textContent = "Debes escoger una cantidad mayor que 0"
}
else if (total>10){
    mensaje.textContent = "Llevas muchos Stikers, 10 es el máximo"
}
else{
    mensaje.textContent = "Llevas " + total + " Stickers"
}

}