// Audio handling with Web Audio API fallback
// This module provides synthesized sounds when audio files are not available

type AudioContextType = typeof AudioContext;

interface WindowWithWebkit extends Window {
  webkitAudioContext?: AudioContextType;
}

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext ||
      (window as WindowWithWebkit).webkitAudioContext;
    if (AudioContextClass) {
      audioContext = new AudioContextClass();
    }
  }
  return audioContext!;
}

// Synthesize a gentle ambient tone
export function playAmbientTone(duration: number = 4): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(220, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + duration);

  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.5);
  gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + duration - 0.5);
  gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration);
}

// Synthesize a celebration chime
export function playCelebrationChime(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  const startTime = ctx.currentTime;

  frequencies.forEach((freq, index) => {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(freq, startTime);

    const noteStart = startTime + index * 0.15;
    gainNode.gain.setValueAtTime(0, noteStart);
    gainNode.gain.linearRampToValueAtTime(0.3, noteStart + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, noteStart + 1);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(noteStart);
    oscillator.stop(noteStart + 1);
  });
}

// Synthesize a soft click sound
export function playClickSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(800, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.1);
}

// Resume audio context (needed for user interaction)
export function resumeAudioContext(): void {
  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume();
  }
}
