# International Women's Day 2026 Countdown

A beautiful countdown web application celebrating International Women's Day (March 8, 2026).

**Live Demo:** https://naonao3.github.io/eightMarch/

---

## Features / 機能

### English

- **Countdown Timer**: Real-time countdown to March 8, 2026, 00:00:00 JST
- **Celebration Screen**: Automatic transition with falling petals animation and rose bouquet reveal
- **Empowerment Quotes**: 20 inspirational quotes from influential women (Malala Yousafzai, Michelle Obama, Maya Angelou, Ruth Bader Ginsburg, and more)
- **Sound Effects**: Background ambient sound and celebration chimes using Web Audio API
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Sparkle Effects**: Beautiful golden sparkle animations on the countdown screen
- **Accessibility**: Supports reduced motion preferences and high contrast mode

### 日本語

- **カウントダウンタイマー**: 2026年3月8日 00:00:00（JST）までのリアルタイムカウントダウン
- **セレブレーション画面**: 花びらが舞い散り、バラの花束が現れるアニメーション付き自動切り替え
- **エンパワーメントメッセージ**: マララ・ユスフザイ、ミシェル・オバマ、マヤ・アンジェロウ、ルース・ベイダー・ギンズバーグなど、影響力のある女性たちの名言20個
- **サウンドエフェクト**: Web Audio APIによるBGMとお祝いチャイム
- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに完全対応
- **キラキラエフェクト**: カウントダウン画面に美しいゴールドのスパークルアニメーション
- **アクセシビリティ**: モーション軽減設定とハイコントラストモードに対応

---

## Tech Stack / 使用技術

| Category | Technology |
|----------|------------|
| Language | TypeScript |
| Build Tool | Vite |
| Animation | GSAP (GreenSock Animation Platform) |
| Audio | Web Audio API |
| Styling | CSS3 (Custom Properties, Flexbox, Media Queries) |
| Fonts | Google Fonts (Playfair Display, Poppins) |
| Deployment | GitHub Pages + GitHub Actions |

---

## Project Structure / プロジェクト構成

```
eightMarch/
├── index.html              # Main HTML file
├── src/
│   ├── main.ts             # Application entry point
│   ├── countdown.ts        # Countdown timer logic
│   ├── messages.ts         # Empowerment quotes (20 quotes)
│   ├── animations.ts       # GSAP animation functions
│   ├── audio.ts            # Web Audio API sound synthesis
│   └── svg-assets.ts       # SVG graphics (roses, bouquet)
├── styles/
│   └── style.css           # Responsive CSS styles
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started / 始め方

### Prerequisites / 前提条件

- Node.js 18+
- npm

### Installation / インストール

```bash
# Clone the repository
git clone https://github.com/Naonao3/eightMarch.git
cd eightMarch

# Install dependencies
npm install
```

### Development / 開発

```bash
# Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

### Build / ビルド

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment / デプロイ

This project uses GitHub Actions for automatic deployment to GitHub Pages.

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys
3. Access at: https://naonao3.github.io/eightMarch/

---

## Design / デザイン

### Color Theme / カラーテーマ

| Color | Hex | Usage |
|-------|-----|-------|
| Purple Dark | `#4a1a6b` | Background gradient |
| Purple Main | `#6b2d8b` | Background gradient |
| Pink Dark | `#c2185b` | Accents, buttons |
| Pink Main | `#e91e8c` | Highlights |
| Pink Light | `#f48fb1` | Text accents |
| Gold | `#ffd700` | Sparkles, author names |

### Motifs / モチーフ

- Roses (バラ)
- Flower petals (花びら)
- Sparkles (キラキラ)

---

## Featured Quotes / 収録名言

Quotes from influential women including:
- Malala Yousafzai
- Michelle Obama
- Maya Angelou
- Ruth Bader Ginsburg
- Oprah Winfrey
- Rosa Parks
- Eleanor Roosevelt
- Coco Chanel
- Marie Curie
- Audrey Hepburn
- and more...

---

## License / ライセンス

MIT License

---

## Acknowledgments / 謝辞

- International Women's Day - March 8
- All the incredible women who inspire us every day
- 国際女性デー - 3月8日
- 日々私たちにインスピレーションを与えてくれるすべての素晴らしい女性たちへ
