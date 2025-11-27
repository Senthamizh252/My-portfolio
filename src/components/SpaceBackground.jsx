import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.current.x = null;
            mouse.current.y = null;
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        class Star {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.color = Math.random() > 0.8 ? '#FFD700' : '#ffffff'; // 20% Gold, 80% White
                this.opacity = Math.random();
            }

            update() {
                // Gravity effect
                if (mouse.current.x != null && mouse.current.y != null) {
                    const dx = mouse.current.x - this.x;
                    const dy = mouse.current.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;

                    // Max distance to feel gravity
                    const maxDistance = 200;
                    let force = 0;

                    if (distance < maxDistance) {
                        force = (maxDistance - distance) / maxDistance;
                        const gravityStrength = 0.5; // Adjust for stronger/weaker pull
                        this.speedX += forceDirectionX * force * gravityStrength;
                        this.speedY += forceDirectionY * force * gravityStrength;
                    }
                }

                this.x += this.speedX;
                this.y += this.speedY;

                // Friction to stop them from accelerating forever
                this.speedX *= 0.98;
                this.speedY *= 0.98;

                // Keep some base movement
                if (Math.abs(this.speedX) < 0.1) this.speedX += (Math.random() - 0.5) * 0.02;
                if (Math.abs(this.speedY) < 0.1) this.speedY += (Math.random() - 0.5) * 0.02;

                // Wrap around screen
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Twinkle
                this.opacity += (Math.random() - 0.5) * 0.05;
                if (this.opacity < 0.1) this.opacity = 0.1;
                if (this.opacity > 1) this.opacity = 1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const stars = [];
        const initStars = () => {
            stars.length = 0;
            const numberOfStars = (canvas.width * canvas.height) / 3000; // Increased Density
            for (let i = 0; i < numberOfStars; i++) {
                stars.push(new Star());
            }
        };

        initStars();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                star.update();
                star.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="space-canvas" />;
};

export default SpaceBackground;
