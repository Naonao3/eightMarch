// Animation module using GSAP
import gsap from 'gsap';

// Petal colors for the falling petals
const petalColors = [
  '#e91e8c', // pink-main
  '#f48fb1', // pink-light
  '#c2185b', // pink-dark
  '#c62828', // rose-red
  '#e57373', // rose-pink
  '#9b4dca', // purple-light
];

// Create a single petal SVG element
function createPetal(): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'petal');
  svg.setAttribute('viewBox', '0 0 30 30');
  svg.setAttribute('width', '30');
  svg.setAttribute('height', '30');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M15 0 C20 5, 25 15, 15 30 C5 15, 10 5, 15 0');
  path.setAttribute('fill', petalColors[Math.floor(Math.random() * petalColors.length)]);
  path.setAttribute('opacity', '0.8');

  svg.appendChild(path);
  return svg;
}

// Create sparkle element
function createSparkle(): HTMLDivElement {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.animationDelay = `${Math.random() * 2}s`;
  sparkle.style.width = `${5 + Math.random() * 10}px`;
  sparkle.style.height = sparkle.style.width;
  return sparkle;
}

// Initialize sparkle effects on countdown screen
export function initSparkles(container: HTMLElement, count: number = 30): void {
  for (let i = 0; i < count; i++) {
    const sparkle = createSparkle();
    container.appendChild(sparkle);
  }
}

// Animate rose bud opening (as countdown progresses)
export function animateBudOpening(progress: number): void {
  const bud = document.getElementById('rose-bud');
  if (!bud) return;

  // Scale the bud based on how close we are to the target
  // Progress goes from 1 (far) to 0 (close)
  const scale = 0.5 + (1 - progress) * 0.5;
  const opacity = 0.2 + (1 - progress) * 0.3;

  gsap.to(bud, {
    scale,
    opacity,
    duration: 1,
    ease: 'power2.out'
  });
}

// Petals falling animation
export function startPetalAnimation(container: HTMLElement): void {
  const createFallingPetal = () => {
    const petal = createPetal();
    container.appendChild(petal);

    const startX = Math.random() * window.innerWidth;
    const endX = startX + (Math.random() - 0.5) * 200;
    const duration = 4 + Math.random() * 4;
    const rotation = Math.random() * 720 - 360;
    const scale = 0.5 + Math.random() * 1;

    gsap.set(petal, {
      x: startX,
      y: -50,
      rotation: Math.random() * 360,
      scale
    });

    gsap.to(petal, {
      y: window.innerHeight + 50,
      x: endX,
      rotation: `+=${rotation}`,
      duration,
      ease: 'none',
      onComplete: () => {
        petal.remove();
      }
    });
  };

  // Create initial burst of petals
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createFallingPetal(), i * 100);
  }

  // Continue creating petals
  setInterval(createFallingPetal, 300);
}

// Screen transition animation
export function transitionToCelebration(
  countdownScreen: HTMLElement,
  celebrationScreen: HTMLElement,
  onComplete?: () => void
): void {
  const timeline = gsap.timeline({
    onComplete
  });

  // Fade out countdown screen
  timeline.to(countdownScreen, {
    opacity: 0,
    duration: 1,
    ease: 'power2.inOut',
    onComplete: () => {
      countdownScreen.classList.remove('active');
    }
  });

  // Show celebration screen
  timeline.call(() => {
    celebrationScreen.classList.add('active');
  });

  // Animate celebration elements
  timeline.to(celebrationScreen, {
    opacity: 1,
    duration: 0.5
  });

  // Animate title
  timeline.to('#celebration-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'back.out(1.7)'
  }, '-=0.3');

  // Animate bouquet appearing
  timeline.to('#bouquet', {
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: 'elastic.out(1, 0.5)'
  }, '-=0.5');

  // Animate subtitle
  timeline.to('.celebration-subtitle', {
    opacity: 1,
    duration: 0.8
  }, '-=0.8');

  // Animate button
  timeline.to('.message-button', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'back.out(1.7)'
  }, '-=0.4');
}

// Animate quote display
export function animateQuote(quoteElement: HTMLElement, authorElement: HTMLElement): void {
  const messageDisplay = document.getElementById('message-display');
  if (!messageDisplay) return;

  // Show the container if hidden
  messageDisplay.classList.add('show');

  const timeline = gsap.timeline();

  // Fade out old content
  timeline.to([quoteElement, authorElement], {
    opacity: 0,
    y: -10,
    duration: 0.3
  });

  // Animate container
  timeline.to(messageDisplay, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out'
  });

  // Fade in new content
  timeline.to(quoteElement, {
    opacity: 1,
    y: 0,
    duration: 0.5
  });

  timeline.to(authorElement, {
    opacity: 1,
    y: 0,
    duration: 0.3
  }, '-=0.2');
}

// Button click effect
export function buttonClickEffect(button: HTMLElement): void {
  gsap.to(button, {
    scale: 0.95,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    ease: 'power2.inOut'
  });

  // Create sparkle burst around button
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: linear-gradient(135deg, #ffd700, #ffe066);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
      box-shadow: 0 0 10px #ffd700;
    `;
    document.body.appendChild(particle);

    const angle = (i / 8) * Math.PI * 2;
    const distance = 60 + Math.random() * 40;

    gsap.set(particle, {
      x: centerX,
      y: centerY
    });

    gsap.to(particle, {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
      opacity: 0,
      scale: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => particle.remove()
    });
  }
}

// Countdown number update animation
export function animateCountdownUpdate(element: HTMLElement, newValue: string): void {
  const currentValue = element.textContent;

  if (currentValue !== newValue) {
    gsap.to(element, {
      y: -10,
      opacity: 0,
      duration: 0.15,
      ease: 'power2.in',
      onComplete: () => {
        element.textContent = newValue;
        gsap.fromTo(element,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.15, ease: 'power2.out' }
        );
      }
    });
  }
}

// Pulse animation for elements
export function pulseElement(element: HTMLElement): void {
  gsap.to(element, {
    scale: 1.05,
    duration: 0.5,
    yoyo: true,
    repeat: 1,
    ease: 'power2.inOut'
  });
}
