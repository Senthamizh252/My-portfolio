import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let dots = [];

        // Mouse state
        let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        let targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initDots();
        };

        class Dot {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.z = Math.random() * 0.8 + 0.2; // Depth factor (0.2 to 1.0)
                this.size = Math.random() * 2 + 0.5; // Size between 0.5 and 2.5
                this.baseX = this.x;
                this.baseY = this.y;

                // Random slow drift
                this.driftX = (Math.random() - 0.5) * 0.3;
                this.driftY = (Math.random() - 0.5) * 0.3;
            }

            update() {
                // 1. Apply constant drift
                this.baseX += this.driftX;
                this.baseY += this.driftY;

                // 2. Wrap around screen logic (for the base position)
                if (this.baseX < -50) this.baseX = canvas.width + 50;
                if (this.baseX > canvas.width + 50) this.baseX = -50;
                if (this.baseY < -50) this.baseY = canvas.height + 50;
                if (this.baseY > canvas.height + 50) this.baseY = -50;

                // 3. Calculate Parallax / "Shift toward cursor" effect
                // We calculate a shift based on the mouse position relative to the center
                // The 'z' value determines how much it moves (depth effect)
                const dx = (mouse.x - window.innerWidth / 2) * this.z * 0.08;
                const dy = (mouse.y - window.innerHeight / 2) * this.z * 0.08;

                // 4. Smoothly interpolate current position to target position
                const targetX = this.baseX + dx;
                const targetY = this.baseY + dy;

                this.x += (targetX - this.x) * 0.05; // Smooth transition factor
                this.y += (targetY - this.y) * 0.05;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // White with slight transparency

                // Glowing effect
                ctx.shadowBlur = 8;
                ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';

                ctx.fill();
                ctx.shadowBlur = 0; // Reset shadow for performance
            }
        }

        const initDots = () => {
            dots = [];
            const count = 250; // Between 150-300
            for (let i = 0; i < count; i++) {
                dots.push(new Dot());
            }
        };

        const animate = () => {
            // Smooth mouse interpolation
            mouse.x += (targetMouse.x - mouse.x) * 0.1;
            mouse.y += (targetMouse.y - mouse.y) * 0.1;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                dot.update();
                dot.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            targetMouse.x = e.clientX;
            targetMouse.y = e.clientY;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="space-canvas" />;
};

export default SpaceBackground;
