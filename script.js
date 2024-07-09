// Función para mostrar el mensaje de confirmación
function showConfirmationMessage() {
    document.getElementById('confirmation-message').style.display = 'block';
}

// Función para animar el texto palabra por palabra y mantener la animación continua
document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.querySelector('.animated-text');
    const text = textContainer.textContent.trim();
    const words = text.split(' ');

    let html = '';
    words.forEach(word => {
        // Añadir un span para cada palabra y espacio
        html += `<span style="opacity: 0;">${word}&nbsp;</span>`; // &nbsp; para asegurar que los espacios se mantengan
    });

    textContainer.innerHTML = html;

    // Función para animar continuamente
    function animateText() {
        const spans = document.querySelectorAll('.animated-text span');
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.style.opacity = '1';
            }, 300 * index);
        });

        // Reiniciar la animación después de que termine
        setTimeout(() => {
            spans.forEach((span) => {
                span.style.opacity = '0';
            });
            animateText(); // Llamar de nuevo a la función para continuar la animación
        }, 300 * words.length);
    }

    animateText(); // Iniciar la animación al cargar la página
});