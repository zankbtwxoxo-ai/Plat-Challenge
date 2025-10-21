import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const RTPLogo: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0a0f1a"/>
        <stop offset="1" stop-color="#05070b"/>
      </linearGradient>
      <linearGradient id="scan" gradientUnits="userSpaceOnUse" x1="-300" y1="0" x2="1324" y2="0">
        <stop offset="0" stop-color="#22d3ee" stop-opacity="0"/>
        <stop offset="0.25" stop-color="#34d399" stop-opacity="0.95"/>
        <stop offset="0.5" stop-color="#60a5fa" stop-opacity="0.95"/>
        <stop offset="0.75" stop-color="#34d399" stop-opacity="0.95"/>
        <stop offset="1" stop-color="#22d3ee" stop-opacity="0"/>
        <animate attributeName="x1" values="-300;-1200" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="x2" values="1324;424" dur="5s" repeatCount="indefinite"/>
      </linearGradient>
      <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#e6f4ff"/>
        <stop offset="1" stop-color="#9fb7c6"/>
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="6" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <style>
        @keyframes pulse { 0%{opacity:.8} 50%{opacity:1} 100%{opacity:.8} }
        .pulse { animation: pulse 2.6s ease-in-out infinite; }
      </style>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <g transform="translate(0,0)">
      <path d="M512 70 L880 200 L828 570 L512 920 L196 570 L144 200 Z" fill="url(#metal)" stroke="url(#scan)" strokeWidth="16" filter="url(#glow)"/>
      <g className="pulse">
        <path d="M512 220 L650 370 L606 640 L418 640 L374 370 Z" fill="#0e2232" stroke="#67e8f9" strokeWidth="6"/>
        <path d="M512 240 L604 360 L578 620 L446 620 L420 360 Z" fill="url(#scan)" opacity="0.95"/>
        <circle cx="512" cy="360" r="22" fill="#e0f2fe"/>
      </g>
    </g>
    <g>
      <rect x="190" y="610" rx="18" ry="18" width="644" height="140" fill="#0b1422" stroke="#0ea5e9" strokeWidth="4"/>
      <text x="512" y="692" textAnchor="middle" fontFamily="Impact, Haettenschweiler, 'Arial Black', sans-serif" fontSize="96" fill="#dffbff" style={{paintOrder:'stroke', stroke:'#0ea5e9', strokeWidth:3, letterSpacing:2}}>ROAD TO PLAT</text>
    </g>
    <rect x="480" y="760" width="64" height="96" rx="6" fill="url(#scan)" stroke="#8ee6c7" strokeWidth="3" filter="url(#glow)"/>
  </svg>
);


const NavLink: React.FC<{to:string; active:boolean; label:string}> = ({to, active, label}) => (
  <Link to={to} className={`px-3 py-2 rounded-xl flex items-center gap-2 transition border ${active ? 'bg-emerald-500 text-gray-900 border-emerald-400' : 'hover:bg-gray-900 text-gray-200 border-gray-800'}`}>
    {label}
  </Link>
)

const Shell: React.FC<{children: React.ReactNode}> = ({children}) => {
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="sticky top-0 z-20 backdrop-blur bg-gray-900/80 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 font-semibold text-gray-100 group logo-wrap">
            <RTPLogo className="h-14 w-14 rounded-xl ring-1 ring-emerald-500/30 group-hover:ring-emerald-400/60 transition"/>
            Road to Plat
          </Link>
          <nav className="ml-auto flex items-center gap-1">
            <NavLink to="/" active={pathname === "/"} label="Concept" />
            <NavLink to="/inscription" active={pathname.startsWith("/inscription")} label="Inscription" />
            <NavLink to="/classement" active={pathname.startsWith("/classement")} label="Classement" />
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      <footer className="mt-16 border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        By ZanKBTWxoxo • CraZyBTW Content © • Made for viewers
      </footer>
    </div>
  )
}

export default Shell
