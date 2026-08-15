import React from 'react';

export default function Logo({ size = "md", variant = "full", className = "" }) {
  // Dimensions based on size
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg", sub: "text-xs" },
    md: { icon: "w-11 h-11", text: "text-xl", sub: "text-xs" },
    lg: { icon: "w-16 h-16", text: "text-2xl", sub: "text-sm" },
    xl: { icon: "w-28 h-28", text: "text-3xl", sub: "text-base" }
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Logo Graphic Emblem */}
      <div className={`relative ${currentSize.icon} flex-shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle Outer Glow */}
          <circle cx="100" cy="100" r="95" fill="#0B1B3D" stroke="#DA9616" strokeWidth="2" strokeDasharray="4 4" opacity="0.3"/>
          <circle cx="100" cy="100" r="90" fill="url(#bg-gradient)"/>

          {/* Dotted Map Graphic Effect */}
          <g opacity="0.15" fill="#ffffff">
            <circle cx="50" cy="80" r="1.5"/><circle cx="70" cy="70" r="1.5"/><circle cx="90" cy="75" r="1.5"/>
            <circle cx="110" cy="65" r="1.5"/><circle cx="130" cy="70" r="1.5"/><circle cx="150" cy="80" r="1.5"/>
            <circle cx="60" cy="110" r="1.5"/><circle cx="80" cy="120" r="1.5"/><circle cx="100" cy="115" r="1.5"/>
            <circle cx="120" cy="125" r="1.5"/><circle cx="140" cy="110" r="1.5"/>
          </g>

          {/* Golden Upper Arc S Shape */}
          <path d="M 60 75 C 60 35, 140 30, 145 70 C 150 100, 70 95, 75 130 C 80 160, 150 155, 140 120" 
                stroke="url(#gold-grad)" strokeWidth="16" strokeLinecap="round" fill="none"/>
          
          {/* White Inner Swoosh Flight Line */}
          <path d="M 75 140 C 60 90, 140 90, 160 50" 
                stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none"/>

          {/* Airplane Silhouette */}
          <g transform="translate(155, 42) rotate(-35) scale(0.65)" fill="#DA9616">
            <path d="M12 2L2 22L12 18L22 22L12 2Z"/>
          </g>

          {/* Mosque & Skyline Silhouettes inside bottom loop */}
          <g fill="#FFFFFF" opacity="0.95">
            {/* Mosque Minarets & Domes */}
            <rect x="75" y="115" width="3" height="25"/>
            <path d="M76.5 110 L75 115 L78 115 Z"/>
            <path d="M82 130 A 8 8 0 0 1 98 130 L98 140 L82 140 Z"/>
            <rect x="100" y="112" width="3" height="28"/>
            <path d="M101.5 107 L100 112 L103 112 Z"/>
            {/* Skyscrapers */}
            <rect x="107" y="122" width="6" height="18" rx="1"/>
            <rect x="115" y="118" width="7" height="22" rx="1"/>
            <line x1="117" y1="121" x2="120" y2="121" stroke="#0B1B3D" strokeWidth="1"/>
            <line x1="117" y1="125" x2="120" y2="125" stroke="#0B1B3D" strokeWidth="1"/>
            <rect x="124" y="125" width="5" height="15" rx="1"/>
          </g>

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5B74A" />
              <stop offset="50%" stopColor="#DA9616" />
              <stop offset="100%" stopColor="#B47B10" />
            </linearGradient>
            <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F2756" />
              <stop offset="100%" stopColor="#061127" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography Section */}
      {variant !== "icon" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight text-white ${currentSize.text}`}>
              شام تورز
            </span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="font-bold tracking-wider text-amber-400 text-xs font-mono">
              SHAM TOURS
            </span>
          </div>
          {variant === "full" && size !== "sm" && (
            <span className="text-[10px] text-slate-300 font-medium tracking-normal mt-0.5 opacity-90">
              Travel • Tourism • Visas
            </span>
          )}
        </div>
      )}
    </div>
  );
}
