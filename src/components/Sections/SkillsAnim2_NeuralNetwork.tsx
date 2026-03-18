import React, { useEffect, useRef } from 'react';
import { SKILLS, TOOLS, LEARNING } from '../../constants';

interface Node {
    x: number; y: number;
    vx: number; vy: number;
    label: string;
    color: string;
    radius: number;
}

const NeuralNetwork: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nodesRef = useRef<Node[]>([]);
    const rafRef = useRef<number>(0);

    const allSkills = [
        ...SKILLS.map(s => ({ name: s.name, color: '#818cf8' })),
        ...TOOLS.map(t => ({ name: t, color: '#67e8f9' })),
        ...LEARNING.map(l => ({ name: l, color: '#c084fc' })),
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;

        const W = canvas.offsetWidth;
        const H = canvas.offsetHeight;
        canvas.width = W;
        canvas.height = H;

        // Init nodes
        nodesRef.current = allSkills.map(s => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            label: s.name,
            color: s.color,
            radius: 4,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, W, H);

            const nodes = nodesRef.current;

            // Move nodes
            nodes.forEach(n => {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > W) n.vx *= -1;
                if (n.y < 0 || n.y > H) n.vy *= -1;
            });

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        const alpha = (1 - dist / 120) * 0.4;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes + labels
            nodes.forEach(n => {
                // Glow
                const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 14);
                grd.addColorStop(0, n.color + 'aa');
                grd.addColorStop(1, 'transparent');
                ctx.beginPath();
                ctx.arc(n.x, n.y, 14, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Dot
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
                ctx.fillStyle = n.color;
                ctx.fill();

                // Label
                ctx.font = '600 11px monospace';
                ctx.fillStyle = n.color;
                ctx.textAlign = 'center';
                ctx.fillText(n.label, n.x, n.y - 10);
            });

            rafRef.current = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    return (
        <div className="h-[500px] w-full relative">
            <canvas
                ref={canvasRef}
                style={{ width: '100%', height: '100%', display: 'block' }}
            />
        </div>
    );
};

export default NeuralNetwork;