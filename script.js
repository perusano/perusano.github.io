document.addEventListener('DOMContentLoaded', () => {
    const totalVisitsElement = document.getElementById('total-visits-count');
    const miniGraphBars = document.querySelectorAll('.mini-graph-bar');

    // Inicializa o recupera el contador de visitas de localStorage
    let visitCount = parseInt(localStorage.getItem('saneamientoVisitCount')) || 0;
    visitCount++; // Incrementa el contador en cada carga de página
    localStorage.setItem('saneamientoVisitCount', visitCount);
    totalVisitsElement.textContent = visitCount;

    // Simula mini-gráficos (muy básico, basado en el total de visitas para efecto visual)
    miniGraphBars.forEach((bar, index) => {
        // Genera una altura base escalada por el contador de visitas, más una pequeña variación
        const baseHeight = Math.min(80, (visitCount / 5) + (index * 5)); 
        bar.style.height = `${Math.max(10, baseHeight + (Math.random() * 15))}px`; // Asegura una altura mínima y añade fluctuación
        
        // Asigna colores para las barras (alternando para mejor visualización)
        if (index % 2 === 0) {
            bar.style.backgroundColor = 'var(--secondary-color)'; 
        } else {
            bar.style.backgroundColor = 'var(--accent-orange)'; /* Una de las barras será naranja */
        }
    });

    // Removed the event listener for the support button as per user request.
    // All chat buttons are now always visible.
});