export function initAnimatedCheckmarks() {
    const wraps = document.querySelectorAll('.draw-checkbox');
    if (!wraps.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                drawCheckmark(entry.target.querySelector('.chk-canvas'));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    wraps.forEach(wrap => observer.observe(wrap));

    function drawCheckmark(canvas) {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const drawSpeed = 0.05;
        let progress = 0;

        const points = [
            {x: 8, y: 20},
            {x: 16, y: 28},
            {x: 32, y: 12}
        ];

        ctx.beginPath();
        ctx.arc(20, 20, 18, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(212, 175, 55, 0.1)';
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
        ctx.stroke();

        function animateStroke() {
            ctx.clearRect(0,0,40,40);
            
            ctx.beginPath();
            ctx.arc(20, 20, 18, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(212, 175, 55, 0.15)';
            ctx.fill();
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
            ctx.stroke();

            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = '#D4AF37';
            ctx.moveTo(points[0].x, points[0].y);

            let pt2X, pt2Y, pt3X, pt3Y;

            if (progress <= 0.5) {
                let p = progress * 2;
                pt2X = points[0].x + (points[1].x - points[0].x) * p;
                pt2Y = points[0].y + (points[1].y - points[0].y) * p;
                ctx.lineTo(pt2X, pt2Y);
            } else {
                ctx.lineTo(points[1].x, points[1].y);
                let p = (progress - 0.5) * 2;
                pt3X = points[1].x + (points[2].x - points[1].x) * p;
                pt3Y = points[1].y + (points[2].y - points[1].y) * p;
                ctx.lineTo(pt3X, pt3Y);
            }

            ctx.stroke();

            if (progress < 1) {
                progress += drawSpeed;
                requestAnimationFrame(animateStroke);
            }
        }
        
        animateStroke();
    }
}
