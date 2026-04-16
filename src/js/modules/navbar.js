export function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

export function initMobileMenu(waUrl) {
    const toggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (!toggle || !navLinks) return;

    // Inject mobile Wa button inside navList directly via JS if not present
    if (!navLinks.querySelector('.mobile-wa-btn')) {
        const waWrap = document.createElement('li');
        waWrap.className = 'mobile-wa-btn';
        waWrap.innerHTML = `
            <a href="${waUrl}" target="_blank" class="btn-primary ripple" style="padding: 12px 24px;">
                Falar no WhatsApp
            </a>
        `;
        navLinks.appendChild(waWrap);
    }

    toggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('mobile-open');
        toggle.classList.toggle('active', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-open');
            toggle.classList.remove('active');
        });
    });
}

export function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;
            
            e.preventDefault();
            const offsetHeight = document.getElementById('navbar').offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - offsetHeight - 20;
            
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

export function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Using logic to active sections based on scroll
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
}
