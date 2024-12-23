import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const particleDensity = 20000; // Adjust this value to control particle density
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
      const particleCount = Math.floor(canvas.width * canvas.height / particleDensity);
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    function addParticle(x, y) {
      particlesArray.push(new Particle(x, y));
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
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / maxDistance) * particle.opacity})`;
            ctx.lineWidth = 1;
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

    canvas.addEventListener("click", (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      addParticle(x, y);
    });

    window.addEventListener("resize", () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const newParticleCount = Math.floor(canvas.width * canvas.height / particleDensity) - particlesArray.length;
      for (let i = 0; i < newParticleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    });
  }, []);

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
        pointerEvents: "auto", // Allow mouse interaction with the canvas
      }}
    ></canvas>
  );
};

export default ParticleBackground;