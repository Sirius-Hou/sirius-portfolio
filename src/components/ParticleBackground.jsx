import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const particleCount = Math.floor(canvas.width * canvas.height / 20000);
    const maxDistance = 120;
    const speedFactor = 0.2;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directionX = (Math.random() - 0.5) * speedFactor;
        this.directionY = (Math.random() - 0.5) * speedFactor;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.x += this.directionX;
        this.y += this.directionY;
        if (this.x > canvas.width || this.x < 0) this.directionX *= -1;
        if (this.y > canvas.height || this.y < 0) this.directionY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    function createParticles() {
      particlesArray = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    function handleParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        const particle = particlesArray[i];
        particle.update();
        particle.draw();

        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            const colorFactor = Math.random();
            const r = Math.floor(255 * (1 - colorFactor));
            const b = Math.floor(255 * colorFactor);
            ctx.strokeStyle = `rgba(${r}, ${b}, 255, ${(1 - distance / maxDistance) * particle.opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    });
  }, []);

  // return <canvas ref={canvasRef} id="canvas" className="particle-canvas"></canvas>;
  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="particle-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -2, // Set to a low z-index to ensure it's behind everything
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Prevent mouse interaction with the canvas
      }}
    ></canvas>
  );
};

export default ParticleBackground;
