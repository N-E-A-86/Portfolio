// Inicialización del cursor 3D
document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('custom-cursor');

    // Verificar que el elemento exista para evitar errores
    if (!customCursor) return;

    // Seguimiento del cursor con soporte para scroll
    document.addEventListener('mousemove', (e) => {
        // Usa pageX y pageY para considerar el desplazamiento de la página
        customCursor.style.left = `${e.pageX}px`;
        customCursor.style.top = `${e.pageY}px`;
    });

    // Efecto hover
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => {
            customCursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            customCursor.classList.remove('hover');
        });
    });

    // Efecto 3D
    document.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const angleX = (e.pageX - centerX) / centerX * 10;
        const angleY = (e.pageY - centerY) / centerY * 10;

        customCursor.style.transform = `
            perspective(500px) 
            rotateX(${-angleY}deg) 
            rotateY(${angleX}deg)
        `;
    });
});