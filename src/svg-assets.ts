// SVG assets for roses and petals

export const roseBudSVG = `
<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Stem -->
  <path d="M50 150 L50 70" stroke="#2d5a2d" stroke-width="4" stroke-linecap="round"/>

  <!-- Leaves -->
  <path d="M50 120 Q30 110, 25 95 Q35 100, 50 120" fill="#3d7a3d"/>
  <path d="M50 100 Q70 90, 75 75 Q65 80, 50 100" fill="#3d7a3d"/>

  <!-- Bud base (sepals) -->
  <path d="M35 75 Q50 85, 65 75 Q60 65, 50 60 Q40 65, 35 75" fill="#2d5a2d"/>

  <!-- Rose bud petals -->
  <ellipse cx="50" cy="45" rx="18" ry="25" fill="#c2185b"/>
  <path d="M35 50 Q50 35, 65 50 Q55 40, 50 30 Q45 40, 35 50" fill="#e91e8c"/>
  <path d="M40 45 Q50 30, 60 45 Q55 38, 50 28 Q45 38, 40 45" fill="#f48fb1"/>

  <!-- Highlight -->
  <ellipse cx="45" cy="38" rx="5" ry="8" fill="#f8bbd9" opacity="0.5"/>
</svg>
`;

export const roseBouquetSVG = `
<svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Wrapper/Ribbon -->
  <path d="M80 380 Q150 350, 220 380 L200 250 Q150 270, 100 250 Z" fill="#9b4dca" opacity="0.9"/>
  <path d="M90 370 Q150 345, 210 370 L195 260 Q150 275, 105 260 Z" fill="#6b2d8b"/>

  <!-- Ribbon bow -->
  <ellipse cx="150" cy="265" rx="35" ry="15" fill="#ffd700"/>
  <circle cx="150" cy="265" r="10" fill="#ffe066"/>
  <path d="M115 265 Q100 250, 90 265 Q100 280, 115 265" fill="#ffd700"/>
  <path d="M185 265 Q200 250, 210 265 Q200 280, 185 265" fill="#ffd700"/>

  <!-- Stems -->
  <g stroke="#2d5a2d" stroke-width="3" stroke-linecap="round">
    <path d="M150 260 L150 150"/>
    <path d="M120 260 L100 130"/>
    <path d="M180 260 L200 130"/>
    <path d="M135 260 L115 160"/>
    <path d="M165 260 L185 160"/>
    <path d="M105 260 L70 170"/>
    <path d="M195 260 L230 170"/>
  </g>

  <!-- Leaves -->
  <g fill="#3d7a3d">
    <path d="M100 200 Q80 190, 70 170 Q85 180, 100 200"/>
    <path d="M200 200 Q220 190, 230 170 Q215 180, 200 200"/>
    <path d="M120 220 Q100 210, 90 190 Q105 200, 120 220"/>
    <path d="M180 220 Q200 210, 210 190 Q195 200, 180 220"/>
    <path d="M140 230 Q125 220, 115 200 Q130 210, 140 230"/>
    <path d="M160 230 Q175 220, 185 200 Q170 210, 160 230"/>
  </g>

  <!-- Baby's breath (small white flowers) -->
  <g fill="#fff" opacity="0.8">
    <circle cx="75" cy="145" r="4"/>
    <circle cx="85" cy="155" r="3"/>
    <circle cx="70" cy="160" r="3"/>
    <circle cx="225" cy="145" r="4"/>
    <circle cx="215" cy="155" r="3"/>
    <circle cx="230" cy="160" r="3"/>
    <circle cx="95" cy="140" r="3"/>
    <circle cx="205" cy="140" r="3"/>
  </g>

  <!-- Rose 1 (center top) -->
  <g transform="translate(150, 100)">
    <circle cx="0" cy="0" r="35" fill="#c2185b"/>
    <path d="M-25 5 Q0 -20, 25 5 Q15 -10, 0 -25 Q-15 -10, -25 5" fill="#e91e8c"/>
    <path d="M-18 0 Q0 -15, 18 0 Q10 -8, 0 -18 Q-10 -8, -18 0" fill="#f48fb1"/>
    <ellipse cx="-5" cy="-8" rx="6" ry="8" fill="#f8bbd9" opacity="0.5"/>
    <path d="M-12 8 Q0 0, 12 8 Q5 2, 0 -5 Q-5 2, -12 8" fill="#e91e8c"/>
  </g>

  <!-- Rose 2 (left) -->
  <g transform="translate(85, 115)">
    <circle cx="0" cy="0" r="30" fill="#e91e8c"/>
    <path d="M-20 3 Q0 -15, 20 3 Q12 -7, 0 -20 Q-12 -7, -20 3" fill="#f48fb1"/>
    <path d="M-14 0 Q0 -10, 14 0 Q8 -5, 0 -14 Q-8 -5, -14 0" fill="#fce4ec"/>
    <ellipse cx="-3" cy="-5" rx="5" ry="6" fill="#fff" opacity="0.3"/>
    <path d="M-10 6 Q0 0, 10 6 Q4 2, 0 -4 Q-4 2, -10 6" fill="#f48fb1"/>
  </g>

  <!-- Rose 3 (right) -->
  <g transform="translate(215, 115)">
    <circle cx="0" cy="0" r="30" fill="#e91e8c"/>
    <path d="M-20 3 Q0 -15, 20 3 Q12 -7, 0 -20 Q-12 -7, -20 3" fill="#f48fb1"/>
    <path d="M-14 0 Q0 -10, 14 0 Q8 -5, 0 -14 Q-8 -5, -14 0" fill="#fce4ec"/>
    <ellipse cx="-3" cy="-5" rx="5" ry="6" fill="#fff" opacity="0.3"/>
    <path d="M-10 6 Q0 0, 10 6 Q4 2, 0 -4 Q-4 2, -10 6" fill="#f48fb1"/>
  </g>

  <!-- Rose 4 (lower left) -->
  <g transform="translate(105, 155)">
    <circle cx="0" cy="0" r="28" fill="#c62828"/>
    <path d="M-18 3 Q0 -12, 18 3 Q10 -5, 0 -16 Q-10 -5, -18 3" fill="#e57373"/>
    <path d="M-12 0 Q0 -8, 12 0 Q6 -4, 0 -12 Q-6 -4, -12 0" fill="#ffcdd2"/>
    <ellipse cx="-2" cy="-4" rx="4" ry="5" fill="#fff" opacity="0.3"/>
  </g>

  <!-- Rose 5 (lower right) -->
  <g transform="translate(195, 155)">
    <circle cx="0" cy="0" r="28" fill="#c62828"/>
    <path d="M-18 3 Q0 -12, 18 3 Q10 -5, 0 -16 Q-10 -5, -18 3" fill="#e57373"/>
    <path d="M-12 0 Q0 -8, 12 0 Q6 -4, 0 -12 Q-6 -4, -12 0" fill="#ffcdd2"/>
    <ellipse cx="-2" cy="-4" rx="4" ry="5" fill="#fff" opacity="0.3"/>
  </g>

  <!-- Rose 6 (center lower) -->
  <g transform="translate(150, 175)">
    <circle cx="0" cy="0" r="32" fill="#e91e8c"/>
    <path d="M-22 4 Q0 -16, 22 4 Q13 -7, 0 -22 Q-13 -7, -22 4" fill="#f48fb1"/>
    <path d="M-15 0 Q0 -12, 15 0 Q8 -6, 0 -15 Q-8 -6, -15 0" fill="#fce4ec"/>
    <ellipse cx="-4" cy="-6" rx="5" ry="7" fill="#fff" opacity="0.4"/>
    <path d="M-11 7 Q0 0, 11 7 Q5 2, 0 -5 Q-5 2, -11 7" fill="#f48fb1"/>
  </g>

  <!-- Rose 7 (far left) -->
  <g transform="translate(60, 155)">
    <circle cx="0" cy="0" r="25" fill="#9b4dca"/>
    <path d="M-16 2 Q0 -10, 16 2 Q9 -5, 0 -14 Q-9 -5, -16 2" fill="#ce93d8"/>
    <path d="M-10 0 Q0 -7, 10 0 Q5 -3, 0 -10 Q-5 -3, -10 0" fill="#e1bee7"/>
    <ellipse cx="-2" cy="-3" rx="4" ry="5" fill="#fff" opacity="0.3"/>
  </g>

  <!-- Rose 8 (far right) -->
  <g transform="translate(240, 155)">
    <circle cx="0" cy="0" r="25" fill="#9b4dca"/>
    <path d="M-16 2 Q0 -10, 16 2 Q9 -5, 0 -14 Q-9 -5, -16 2" fill="#ce93d8"/>
    <path d="M-10 0 Q0 -7, 10 0 Q5 -3, 0 -10 Q-5 -3, -10 0" fill="#e1bee7"/>
    <ellipse cx="-2" cy="-3" rx="4" ry="5" fill="#fff" opacity="0.3"/>
  </g>

  <!-- Sparkle accents -->
  <g fill="#ffd700" opacity="0.8">
    <path d="M130 70 L132 75 L137 75 L133 78 L135 83 L130 80 L125 83 L127 78 L123 75 L128 75 Z"/>
    <path d="M170 70 L172 75 L177 75 L173 78 L175 83 L170 80 L165 83 L167 78 L163 75 L168 75 Z"/>
    <path d="M50 130 L51 133 L54 133 L52 135 L53 138 L50 136 L47 138 L48 135 L46 133 L49 133 Z"/>
    <path d="M250 130 L251 133 L254 133 L252 135 L253 138 L250 136 L247 138 L248 135 L246 133 L249 133 Z"/>
  </g>
</svg>
`;

export const petalSVG = `
<svg viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 0 C22 8, 28 20, 15 40 C2 20, 8 8, 15 0" fill="currentColor" opacity="0.85"/>
  <path d="M15 5 C19 10, 22 18, 15 32 C8 18, 11 10, 15 5" fill="currentColor" opacity="0.5"/>
</svg>
`;
