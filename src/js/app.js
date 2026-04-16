import { ENV, getWhatsAppUrl } from './utils/env.js';
import { initNavbar, initMobileMenu, initSmoothScroll, initActiveNav } from './modules/navbar.js';
import { initParticlesCanvas } from './modules/particles.js';
import { initRevealObserver } from './modules/revealObserver.js';
import { initCarousel } from './modules/carousel.js';
import { initCounters } from './modules/counters.js';
import { initTiltEffect } from './modules/tiltEffect.js';
import { initAnimatedCheckmarks } from './modules/checkmarkAnimation.js';
import { initContactForm } from './services/contactForm.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Environment Variables into DOM (Replacing placeholders safely)
    injectEnvVariables();

    // 2. Initialize UI Modules
    initNavbar();
    initMobileMenu(getWhatsAppUrl());
    initSmoothScroll();
    initActiveNav();
    initParticlesCanvas();
    initRevealObserver();
    initCarousel();
    initCounters();
    initTiltEffect();
    initAnimatedCheckmarks();
    
    // 3. Initialize Services
    initContactForm();
});

function injectEnvVariables() {
    const waNumber = ENV.WHATSAPP_NUMBER;
    const waMessage = ENV.WHATSAPP_MESSAGE;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    document.querySelectorAll('a[href*="SEUNUMERO"], .social-btn-wa').forEach(link => {
        link.href = waUrl;
    });

    document.querySelectorAll('a[href*="SEUPERFIL"]').forEach(link => {
        const isInstagram = link.getAttribute('aria-label')?.toLowerCase().includes('instagram');
        link.href = isInstagram ? ENV.INSTAGRAM_URL : ENV.LINKEDIN_URL;
    });
}
