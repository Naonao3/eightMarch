// Countdown timer for International Women's Day 2025

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

// Target date: March 8, 2025, 00:00:00 JST (UTC+9)
// JST is UTC+9, so we need to calculate the UTC time
// March 8, 2025 00:00:00 JST = March 7, 2025 15:00:00 UTC
const TARGET_DATE = new Date('2025-03-07T15:00:00Z');

export function getTimeRemaining(): TimeRemaining {
  const now = new Date();
  const total = TARGET_DATE.getTime() - now.getTime();

  if (total <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      total: 0
    };
  }

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    total
  };
}

export function formatNumber(num: number): string {
  return num.toString().padStart(2, '0');
}

export function isCountdownComplete(): boolean {
  return getTimeRemaining().total <= 0;
}

export class CountdownTimer {
  private intervalId: number | null = null;
  private onTick: (time: TimeRemaining) => void;
  private onComplete: () => void;

  constructor(
    onTick: (time: TimeRemaining) => void,
    onComplete: () => void
  ) {
    this.onTick = onTick;
    this.onComplete = onComplete;
  }

  start(): void {
    // Initial tick
    this.tick();

    // Update every second
    this.intervalId = window.setInterval(() => {
      this.tick();
    }, 1000);
  }

  private tick(): void {
    const time = getTimeRemaining();
    this.onTick(time);

    if (time.total <= 0) {
      this.stop();
      this.onComplete();
    }
  }

  stop(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Anticipation messages that rotate
const anticipationMessages = [
  "The celebration awaits...",
  "Every woman is a story of strength...",
  "Get ready to celebrate!",
  "Honoring women everywhere...",
  "Something beautiful is blooming...",
  "A moment to cherish is coming...",
  "Embrace the power within...",
  "The world celebrates with you..."
];

let messageIndex = 0;

export function getNextAnticipationMessage(): string {
  const message = anticipationMessages[messageIndex];
  messageIndex = (messageIndex + 1) % anticipationMessages.length;
  return message;
}
