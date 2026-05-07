import { useEffect, useRef } from "react";

type LineDef = {
  p: [number, number, number, number, number, number, number, number];
  color: [number, number, number];
  phase: number;
  dotProgress: number;
  dotSpeed: number;
  dotSize: number;
};

export function AnimatedLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Cubic bezier control points in normalized 0–1 space.
    // Cyan group flows left-center → right; purple group converges from lower-left.
    const lines: LineDef[] = [
      // Cyan
      { p: [-0.05, 0.68, 0.28, 0.53, 0.62, 0.43, 1.05, 0.33], color: [6, 182, 212],   phase: 0.0, dotProgress: 0.10, dotSpeed: 0.00090, dotSize: 2.5 },
      { p: [-0.05, 0.73, 0.31, 0.58, 0.65, 0.48, 1.05, 0.38], color: [6, 182, 212],   phase: 0.7, dotProgress: 0.55, dotSpeed: 0.00070, dotSize: 2.0 },
      { p: [-0.05, 0.77, 0.33, 0.63, 0.68, 0.53, 1.05, 0.43], color: [6, 182, 212],   phase: 1.4, dotProgress: 0.80, dotSpeed: 0.00105, dotSize: 3.0 },
      { p: [-0.05, 0.63, 0.24, 0.49, 0.57, 0.39, 1.05, 0.29], color: [6, 182, 212],   phase: 2.1, dotProgress: 0.35, dotSpeed: 0.00082, dotSize: 1.8 },
      // Purple
      { p: [-0.05, 0.83, 0.20, 0.69, 0.45, 0.59, 0.76, 0.53], color: [168, 85, 247],  phase: 0.3, dotProgress: 0.20, dotSpeed: 0.00095, dotSize: 2.5 },
      { p: [-0.05, 0.88, 0.17, 0.74, 0.41, 0.63, 0.71, 0.57], color: [168, 85, 247],  phase: 1.0, dotProgress: 0.65, dotSpeed: 0.00075, dotSize: 2.0 },
      { p: [-0.05, 0.79, 0.22, 0.65, 0.48, 0.55, 0.79, 0.49], color: [168, 85, 247],  phase: 1.7, dotProgress: 0.90, dotSpeed: 0.00110, dotSize: 3.0 },
      { p: [-0.05, 0.93, 0.14, 0.79, 0.37, 0.67, 0.67, 0.61], color: [168, 85, 247],  phase: 2.4, dotProgress: 0.45, dotSpeed: 0.00088, dotSize: 1.8 },
    ];

    const bezierPt = (
      t: number,
      x0: number, y0: number,
      cx1: number, cy1: number,
      cx2: number, cy2: number,
      x1: number, y1: number,
      w: number, h: number
    ) => {
      const mt = 1 - t;
      return {
        x: (mt * mt * mt * x0 + 3 * mt * mt * t * cx1 + 3 * mt * t * t * cx2 + t * t * t * x1) * w,
        y: (mt * mt * mt * y0 + 3 * mt * mt * t * cy1 + 3 * mt * t * t * cy2 + t * t * t * y1) * h,
      };
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      time += 0.004;

      lines.forEach((line) => {
        const [x0, y0, cx1, cy1, cx2, cy2, x1, y1] = line.p;
        const [r, g, b] = line.color;
        const wave = Math.sin(time * 0.55 + line.phase) * 0.022;

        // Draw the curve
        const segs = 80;
        ctx.beginPath();
        for (let i = 0; i <= segs; i++) {
          const t = i / segs;
          const pt = bezierPt(t, x0, y0, cx1, cy1 + wave, cx2, cy2 + wave * 0.5, x1, y1, w, h);
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.20)`;
        ctx.lineWidth = 1.3;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.35)`;
        ctx.shadowBlur = 5;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Advance dot
        line.dotProgress += line.dotSpeed;
        if (line.dotProgress > 1) line.dotProgress = 0;

        const dp = bezierPt(line.dotProgress, x0, y0, cx1, cy1 + wave, cx2, cy2 + wave * 0.5, x1, y1, w, h);

        // Dot glow
        const grad = ctx.createRadialGradient(dp.x, dp.y, 0, dp.x, dp.y, 14);
        grad.addColorStop(0,   `rgba(${r}, ${g}, ${b}, 0.65)`);
        grad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.20)`);
        grad.addColorStop(1,   `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.beginPath();
        ctx.arc(dp.x, dp.y, 14, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Dot core
        ctx.beginPath();
        ctx.arc(dp.x, dp.y, line.dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.92)`;
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
}
