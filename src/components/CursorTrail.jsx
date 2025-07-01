import { useState, useEffect } from 'react';

const CursorTrail = () => {
    const [particles, setParticles] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Criar nova partícula
            const newParticle = {
                id: Date.now() + Math.random(),
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 8 + 4,
                color: Math.random() > 0.5 ? 'bg-pink-400' : Math.random() > 0.5 ? 'bg-purple-500' : 'bg-indigo-400',
                life: 1
            };

            setParticles(prev => [...prev.slice(-20), newParticle]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setParticles(prev =>
                prev
                    .map(particle => ({ ...particle, life: particle.life - 0.02 }))
                    .filter(particle => particle.life > 0)
            );
        }, 16);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className={`absolute rounded-full ${particle.color} animate-ping`}
                    style={{
                        left: particle.x - particle.size / 2,
                        top: particle.y - particle.size / 2,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.life,
                        transform: `scale(${particle.life})`,
                        transition: 'all 0.1s ease-out'
                    }}
                />
            ))}

            <div
                className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 animate-pulse shadow-lg"
                style={{
                    left: mousePosition.x - 12,
                    top: mousePosition.y - 12,
                    transition: 'all 0.1s ease-out'
                }}
            />
        </div>
    );
};

export default CursorTrail;
