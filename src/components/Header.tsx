import React from 'react'
import { NavLink } from 'react-router-dom'
// Cart removed: no shopping cart in header

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 bg-ml-gray-1/95 backdrop-blur-sm border-b border-ml-gray-2 z-50">
      <div className="container flex items-center justify-center h-16 relative">
        <div className="absolute left-0 flex items-center">
          <NavLink to="/" className="text-2xl logo font-bold">
            <span style={{ color: '#f2d01b' }}>Muscle</span>
            <span className="text-white"> Life</span>
          </NavLink>
        </div>
        
        <nav className="hidden md:flex gap-4 items-center">
          <NavLink to="/" className={({ isActive }: { isActive: boolean }) => `px-3 py-2 ${isActive ? 'text-ml-yellow' : 'text-white'}`}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }: { isActive: boolean }) => `px-3 py-2 ${isActive ? 'text-ml-yellow' : 'text-white'}`}>Produtos</NavLink>
          <NavLink to="/about" className={({ isActive }: { isActive: boolean }) => `px-3 py-2 ${isActive ? 'text-ml-yellow' : 'text-white'}`}>Sobre</NavLink>
          <NavLink to="/contact" className={({ isActive }: { isActive: boolean }) => `px-3 py-2 ${isActive ? 'text-ml-yellow' : 'text-white'}`}>Contato</NavLink>
        </nav>

        <div className="absolute right-0 flex items-center gap-4">
          <button onClick={() => setOpen(o => !o)} aria-label="Abrir menu" className="md:hidden p-2 text-white">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H22M0 8H22M0 15H22" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>

          {/* cart removed */}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ml-gray-1 border-t border-ml-gray-2">
          <div className="container py-3 flex flex-col">
            <NavLink to="/" onClick={() => setOpen(false)} className="py-2 text-white">Home</NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)} className="py-2 text-white">Produtos</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className="py-2 text-white">Sobre</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="py-2 text-white">Contato</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
