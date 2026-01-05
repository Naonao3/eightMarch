// Main entry point for International Women's Day 2025 Web App
import {
  CountdownTimer,
  formatNumber,
  getNextAnticipationMessage,
  isCountdownComplete,
  TimeRemaining
} from './countdown';
import { getRandomQuote } from './messages';
import {
  animateCountdownUpdate,
  animateQuote,
  buttonClickEffect,
  initSparkles,
  startPetalAnimation,
  transitionToCelebration
} from './animations';
import { roseBudSVG, roseBouquetSVG } from './svg-assets';
import {
  playCelebrationChime,
  playClickSound,
  playAmbientTone,
  resumeAudioContext
} from './audio';

// DOM Elements
const countdownScreen = document.getElementById('countdown-screen') as HTMLElement;
const celebrationScreen = document.getElementById('celebration-screen') as HTMLElement;
const daysElement = document.getElementById('days') as HTMLElement;
const hoursElement = document.getElementById('hours') as HTMLElement;
const minutesElement = document.getElementById('minutes') as HTMLElement;
const secondsElement = document.getElementById('seconds') as HTMLElement;
const anticipationMsg = document.getElementById('anticipation-msg') as HTMLElement;
const messageBtn = document.getElementById('message-btn') as HTMLButtonElement;
const quoteText = document.getElementById('quote-text') as HTMLElement;
const quoteAuthor = document.getElementById('quote-author') as HTMLElement;
const soundToggle = document.getElementById('sound-toggle') as HTMLButtonElement;
const sparklesContainer = document.getElementById('sparkles') as HTMLElement;
const petalsContainer = document.getElementById('petals') as HTMLElement;
const bouquetContainer = document.getElementById('bouquet') as HTMLElement;
const roseBudContainer = document.getElementById('rose-bud') as HTMLElement;

// Sound state
let isSoundEnabled = false;
let ambientInterval: number | null = null;

// Toggle sound
function toggleSound(): void {
  isSoundEnabled = !isSoundEnabled;
  resumeAudioContext();

  const soundOn = soundToggle.querySelector('.sound-on') as SVGElement;
  const soundOff = soundToggle.querySelector('.sound-off') as SVGElement;

  if (isSoundEnabled) {
    soundOn.style.display = 'block';
    soundOff.style.display = 'none';
    // Start ambient background sound
    playAmbientTone(5);
    ambientInterval = window.setInterval(() => {
      if (isSoundEnabled) {
        playAmbientTone(5);
      }
    }, 5000);
  } else {
    soundOn.style.display = 'none';
    soundOff.style.display = 'block';
    if (ambientInterval) {
      clearInterval(ambientInterval);
      ambientInterval = null;
    }
  }
}

// Play celebration sound
function playCelebration(): void {
  if (isSoundEnabled) {
    playCelebrationChime();
  }
}

// Play click sound
function playClick(): void {
  if (isSoundEnabled) {
    playClickSound();
  }
}

// Update countdown display
function updateCountdown(time: TimeRemaining): void {
  animateCountdownUpdate(daysElement, formatNumber(time.days));
  animateCountdownUpdate(hoursElement, formatNumber(time.hours));
  animateCountdownUpdate(minutesElement, formatNumber(time.minutes));
  animateCountdownUpdate(secondsElement, formatNumber(time.seconds));
}

// Handle countdown completion
function handleCountdownComplete(): void {
  playCelebration();

  transitionToCelebration(countdownScreen, celebrationScreen, () => {
    // Start petal animation after transition
    startPetalAnimation(petalsContainer);
  });
}

// Update anticipation message periodically
function startAnticipationMessages(): void {
  setInterval(() => {
    anticipationMsg.style.opacity = '0';
    setTimeout(() => {
      anticipationMsg.textContent = getNextAnticipationMessage();
      anticipationMsg.style.opacity = '1';
    }, 500);
  }, 5000);
}

// Show random quote
function showRandomQuote(): void {
  playClick();
  buttonClickEffect(messageBtn);

  const quote = getRandomQuote();
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;

  animateQuote(quoteText, quoteAuthor);
}

// Insert SVG assets
function initSVGs(): void {
  // Insert rose bud SVG
  roseBudContainer.innerHTML = roseBudSVG;

  // Insert rose bouquet SVG
  bouquetContainer.innerHTML = roseBouquetSVG;
}

// Initialize the application
function init(): void {
  // Initialize SVG assets
  initSVGs();

  // Initialize sparkles on countdown screen
  initSparkles(sparklesContainer, 30);

  // Check if countdown is already complete
  if (isCountdownComplete()) {
    // Skip countdown, go directly to celebration
    countdownScreen.classList.remove('active');
    celebrationScreen.classList.add('active');
    celebrationScreen.style.opacity = '1';

    // Animate celebration elements
    setTimeout(() => {
      const title = document.getElementById('celebration-title') as HTMLElement;
      const subtitle = document.querySelector('.celebration-subtitle') as HTMLElement;

      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
      bouquetContainer.style.opacity = '1';
      bouquetContainer.style.transform = 'scale(1)';
      subtitle.style.opacity = '1';
      messageBtn.style.opacity = '1';
      messageBtn.style.transform = 'translateY(0)';

      startPetalAnimation(petalsContainer);
    }, 100);
  } else {
    // Start countdown
    const timer = new CountdownTimer(updateCountdown, handleCountdownComplete);
    timer.start();

    // Start rotating anticipation messages
    startAnticipationMessages();
  }

  // Event listeners
  soundToggle.addEventListener('click', toggleSound);
  messageBtn.addEventListener('click', showRandomQuote);

  // Keyboard accessibility
  messageBtn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      showRandomQuote();
    }
  });
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
