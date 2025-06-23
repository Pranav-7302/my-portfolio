const Logo = () => (
  <svg width="200" height="60" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003049" />
        <stop offset="100%" stopColor="#00253A" />
      </linearGradient>

      <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F77F00" />
        <stop offset="100%" stopColor="#E67300" />
      </linearGradient>
    </defs>

    <rect x="80" y="40" width="60" height="60" rx="5" fill="url(#blueGradient)" transform="rotate(45 110 70)" opacity="0.9" />

    <path d="M300 70 L330 40 L360 70 L330 100 Z" fill="url(#orangeGradient)" opacity="0.9" />

    <text x="200" y="70" fontFamily="Arial, sans-serif" fontSize="42" fontWeight="700" textAnchor="middle" fill="#212121" letterSpacing="-1">
      <tspan fill="url(#blueGradient)">PRANAV</tspan>
    </text>

    <rect x="120" y="85" width="160" height="6" fill="url(#orangeGradient)" rx="3" />

    <text x="200" y="125" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="600" textAnchor="middle" fill="#212121" letterSpacing="2">
      GUPTA
    </text>

    <g transform="translate(0 150)">
      <line x1="100" y1="0" x2="300" y2="0" stroke="#003049" strokeWidth="3" strokeDasharray="5" opacity="0.4" />

      <circle cx="140" cy="0" r="4" fill="#F77F00" />
      <circle cx="180" cy="0" r="4" fill="#F77F00" />
      <circle cx="220" cy="0" r="4" fill="#F77F00" />
      <circle cx="260" cy="0" r="4" fill="#F77F00" />

      <rect x="90" y="-2" width="20" height="4" fill="#003049" rx="1" />
      <rect x="290" y="-2" width="20" height="4" fill="#003049" rx="1" />
    </g>

    <circle cx="330" cy="130" r="12" fill="url(#orangeGradient)" />
    <text x="330" y="135" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="800" textAnchor="middle" fill="white">PG</text>
  </svg>
);

export default Logo;