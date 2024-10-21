document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
  
    // Move circles randomly (as before)
    circles.forEach(circle => {
      const moveCircle = () => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
      };
  
      const animateCircle = () => {
        moveCircle();
        setTimeout(animateCircle, 2000);
      };
  
      animateCircle();
    });
  
    // Add ripple effect on hover
    circles.forEach(circle => {
      circle.addEventListener('mouseenter', () => {
        gsap.to(circle, {
          duration: 0.6,
          scale: 1.2, // Slight enlargement to simulate a ripple
          borderRadius: '40%', // Deformation to simulate the ripple shape
          ease: 'elastic.out(1, 0.3)', // Elastic easing to create a bouncy effect
        });
      });
  
      circle.addEventListener('mouseleave', () => {
        gsap.to(circle, {
          duration: 0.6,
          scale: 1, // Back to original size
          borderRadius: '50%', // Return to circle shape
          ease: 'elastic.out(1, 0.3)', // Smooth return
        });
      });
    });
  });
  