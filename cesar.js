// Referencia al botón y contenedor de besitos
const sendKissBtn = document.getElementById('sendKissBtn');
const kissContainer = document.getElementById('kissContainer');

// Evento al hacer clic en el botón
sendKissBtn.addEventListener('click', () => {
    const kiss = document.createElement('div');
    kiss.classList.add('kiss');
    kiss.innerText = '💋';

    // Posición aleatoria
    kiss.style.left = `${Math.random() * 100}vw`;
    kiss.style.top = `${Math.random() * 100}vh`;

    kissContainer.appendChild(kiss);

    // Eliminar el besito después de la animación
    setTimeout(() => {
        kiss.remove();
    }, 3000);
});
