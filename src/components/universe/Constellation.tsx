const stars = [
  { x: 13, y: 48, r: 2.2 },
  { x: 31, y: 24, r: 2.7 },
  { x: 45, y: 53, r: 2.1 },
  { x: 65, y: 39, r: 3.2 },
  { x: 82, y: 67, r: 2.4 },
  { x: 56, y: 81, r: 1.8 },
  { x: 29, y: 75, r: 1.7 },
];

const paths = [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [6, 0]];

export default function Constellation() {
  return (
    <div className="vela-constellation relative z-[2] aspect-square w-full max-w-[520px]" aria-label="Representación artística inspirada en la constelación Vela">
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(199,164,93,0.10)_0%,rgba(23,45,73,0.08)_38%,transparent_70%)] blur-2xl" />
      <svg viewBox="0 0 100 100" role="img" aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <filter id="vela-star-glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="vela-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C7A45D" stopOpacity=".16" />
            <stop offset="55%" stopColor="#E2C783" stopOpacity=".72" />
            <stop offset="100%" stopColor="#A9BED7" stopOpacity=".22" />
          </linearGradient>
        </defs>
        {paths.map(([from, to], index) => (
          <line
            key={index}
            x1={stars[from].x}
            y1={stars[from].y}
            x2={stars[to].x}
            y2={stars[to].y}
            stroke="url(#vela-line)"
            strokeWidth=".28"
            strokeDasharray="1.4 1.2"
            className="vela-constellation-line"
            style={{ animationDelay: `${index * 180}ms` }}
          />
        ))}
        {stars.map((star, index) => (
          <g key={index} className="vela-star" style={{ animationDelay: `${index * 260}ms` }}>
            <circle cx={star.x} cy={star.y} r={star.r * 2.7} fill="#C7A45D" opacity=".075" />
            <circle cx={star.x} cy={star.y} r={star.r} fill="#F0DDAF" filter="url(#vela-star-glow)" />
            <circle cx={star.x} cy={star.y} r=".65" fill="#FFFFFF" />
          </g>
        ))}
      </svg>
      <div className="absolute left-[64%] top-[18%] h-24 w-24 rounded-full border border-[#C7A45D]/10 [transform:rotate(32deg)_scaleY(.45)]" />
      <div className="absolute bottom-[13%] left-[10%] h-16 w-16 rounded-full border border-[#A9BED7]/10 [transform:rotate(-28deg)_scaleY(.5)]" />
    </div>
  );
}
