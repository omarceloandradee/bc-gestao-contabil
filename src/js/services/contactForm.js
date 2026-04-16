import { getWhatsAppUrl } from '../utils/env.js';

export function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const userName = document.getElementById('userName').value;
        // Na vida real, poderíamos disparar uma API (ex: EmailJS, SendGrid). 
        // Aqui, preparamos o redirect de WhatsApp simulando integração:
        
        const customWaUrl = `${getWhatsAppUrl()}%20Me%20chamo%20${encodeURIComponent(userName)}.`;
        window.open(customWaUrl, '_blank');
        
        contactForm.reset();
    });
}
