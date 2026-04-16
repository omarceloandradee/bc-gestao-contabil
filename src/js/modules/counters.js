export function initCounters() {
    const counters = document.querySelectorAll('.counter, .flip-clock-number');

    if (!counters.length) return;

    const runCounter = (el) => {
        const text = el.innerText.trim();
        const match = text.match(/^([+]?)(\d+)([%+]?)$/);
        if (!match) return;

        const prefix = match[1];
        const target = parseInt(match[2]);
        const suffix = match[3];

        let start = 0;
        const duration = 2000;
        const stepTime = 20; // ms
        const steps = duration / stepTime;
        const inc = target / steps;
        
        el.innerText = prefix + '0' + suffix;

        const timer = setInterval(() => {
            start += inc;
            if (start >= target) {
                clearInterval(timer);
                el.innerText = prefix + target + suffix;
            } else {
                el.innerText = prefix + Math.floor(start) + suffix;
            }
        }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}
