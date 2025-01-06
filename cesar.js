const sendKissBtn = document.getElementById('sendKissBtn');
const kissContainer = document.getElementById('kissContainer');

sendKissBtn.addEventListener('click', () => {
    const kiss = document.createElement('div');
    kiss.classList.add('kiss');
    kiss.innerText = '💋';

    // Posición inicial centrada abajo
    kiss.style.left = '50%';
    kiss.style.bottom = '0';
    kiss.style.transform = 'translateX(-50%)';

    kissContainer.appendChild(kiss);

    // Eliminar el besito después de la animación
    setTimeout(() => {
        kiss.remove();
    }, 3000);
});
