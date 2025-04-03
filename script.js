// Crear partículas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio entre 1px y 5px
        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posición aleatoria
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Duración de animación aleatoria
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Retraso de animación aleatorio
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Galería modal
function setupGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeModal = document.querySelector('.close-modal');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Abrir modal al hacer click en una imagen
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            modal.style.display = 'block';
            modalImg.src = img.src;
            modalCaption.innerHTML = this.querySelector('.gallery-overlay').innerHTML;
        });
    });
    
    // Cerrar modal al hacer click en la X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Cerrar modal al hacer click fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Efecto parallax suave
function setupParallax() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const particles = document.getElementById('particles');
        
        particles.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
}

// Efecto de escritura para el título
function typeWriter() {
    const title = document.querySelector('h1');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const speed = 100; // velocidad en milisegundos
    
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Inicializar todo cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupGalleryModal();
    setupParallax();
    // typeWriter(); // Descomentar si quieres efecto de máquina de escribir
});