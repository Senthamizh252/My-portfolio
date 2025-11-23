import React, { useEffect, useRef } from 'react';

const CursorEffect = () => {
    const dotsRef = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });
    const dotsPos = useRef([]);

    useEffect(() => {
        // Initialize positions
        dotsPos.current = Array(20).fill({ x: 0, y: 0 });

        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            let targetX = mouse.current.x;
            let targetY = mouse.current.y;

            dotsRef.current.forEach((dot, index) => {
                if (!dot) return;

                const currentPos = dotsPos.current[index];
                let nextX, nextY;

                if (index === 0) {
                    // First dot follows mouse with some ease
                    nextX = currentPos.x + (targetX - currentPos.x) * 0.5;
                    nextY = currentPos.y + (targetY - currentPos.y) * 0.5;
                } else {
                    // Subsequent dots follow the previous dot
                    const prevPos = dotsPos.current[index - 1];
                    nextX = currentPos.x + (prevPos.x - currentPos.x) * 0.4;
                    nextY = currentPos.y + (prevPos.y - currentPos.y) * 0.4;
                }

                dotsPos.current[index] = { x: nextX, y: nextY };

                // Apply transform
                // Scale down subsequent dots for 3D effect
                const scale = 1 - index * 0.04;
                // Adjust opacity
                const opacity = 1 - index * 0.03;

                dot.style.transform = `translate(${nextX}px, ${nextY}px) scale(${scale})`;
                dot.style.opacity = opacity;
            });

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (dotsRef.current[i] = el)}
                    className="cursor-dot"
                />
            ))}
        </>
    );
};

export default CursorEffect;
