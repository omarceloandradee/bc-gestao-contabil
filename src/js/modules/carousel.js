export function initCarousel() {
    const track = document.getElementById('testimonialTrack');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoInterval;

    // Criar dots
    slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.dot');

    const updateUI = () => {
        const slideWidth = track.parentElement.offsetWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        dots.forEach(d => d.classList.remove('active'));
        if(dots[currentIndex]) dots[currentIndex].classList.add('active');
    };

    window.addEventListener('resize', updateUI);

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateUI();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateUI();
    };

    const goToSlide = (idx) => {
        currentIndex = idx;
        updateUI();
        resetInterval();
    };

    if(nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
    if(prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });

    const resetInterval = () => {
        clearInterval(autoInterval);
        autoInterval = setInterval(nextSlide, 5000);
    };
    resetInterval();
}
