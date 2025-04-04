document.addEventListener('DOMContentLoaded', function() {
    // Efeito de digitação no título
    const title = document.querySelector('h1 .gradient-text');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);
    
    // Animação dos cards
    const cards = document.querySelectorAll('.card-button');
    cards.forEach((card, index) => {
        // Atraso escalonado para cada card
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Efeito hover com GSAP
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Efeito de partículas no background (opcional)
    const colors = ['#6C5CE7', '#00B894', '#FD79A8', '#FDCB6E'];
    const container = document.querySelector('.main-container');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        container.appendChild(particle);
        
        // Animação das partículas
        gsap.to(particle, {
            x: `${Math.random() * 100 - 50}px`,
            y: `${Math.random() * 100 - 50}px`,
            duration: Math.random() * 20 + 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
});