import React from 'react'
import { Link, useLocation } from 'react-router-dom'

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
          <Link to="/" className="font-semibold text-gray-100 group logo-wrap">
            <img src="/logo-rtp-v1.svg?v=1001" alt="Road to Plat" className="h-14 w-14 rounded-xl ring-1 ring-emerald-500/30 transition" />
            Road to Plat
          </Link>
          <nav className="ml-auto flex items-center gap-1">
            <NavLink to="/" active={pathname==='/' } label="Concept"/>
            <NavLink to="/inscription" active={pathname.startsWith('/inscription')} label="Inscription"/>
            <NavLink to="/classement" active={pathname.startsWith('/classement')} label="Classement"/>
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
