import React, { useEffect, useRef } from 'react';
import '../styles/style.css';

const BackgroundEffect = ({ mode }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = mode === 'night' ? ['white', 'yellow'] : ['black', 'yellow'];

        const createParticle = () => {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5,
            };
        };

        for (let i = 0; i < 100; i++) {
            particles.push(createParticle());
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                ctx.closePath();
            });
        };

        const updateParticles = () => {
            particles.forEach((particle) => {
                particle.x += particle.dx;
                particle.y += particle.dy;

                if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
            });
        };

        const animate = () => {
            drawParticles();
            updateParticles();
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mode]);

    return <canvas ref={canvasRef} className={`background-effect ${mode}`} />;
};

export default BackgroundEffect;