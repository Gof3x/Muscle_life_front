import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// Cart removed: no shopping cart in header

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')
  const navigate = useNavigate()
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }

  const submitSearch = (query: string) => {
    const q = query.trim()
    if (!q) return
    navigate(`/search?query=${encodeURIComponent(q)}`)
    setSearchQuery('')
  }

  const handleSelectProduct = (productId: string) => {
    navigate(`/product/${productId}`)
    setSearchQuery('')
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  

  return (
    <header className="fixed top-0 left-0 right-0 bg-ml-gray-1/95 backdrop-blur-sm border-b border-ml-gray-2 z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl logo font-bold">
            <span style={{ color: '#f2d01b' }}>Muscle</span>
            <span className="text-white"> Life</span>
          </NavLink>
        </div>
        
        {/* Navigation Menu - Center */}
        <nav className="hidden md:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/" className={({ isActive }: { isActive: boolean }) => `px-3 py-2 ${isActive ? 'text-ml-yellow' : 'text-white'}`}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }: { isActive: boolean }) => `px-3 py-2 ${isActive ? 'text-ml-yellow' : 'text-white'}`}>Produtos</NavLink>
          <NavLink to="/about" className={({ isActive }: { isActive: boolean }) => `px-3 py-2 ${isActive ? 'text-ml-yellow' : 'text-white'}`}>Sobre</NavLink>
          <NavLink to="/contact" className={({ isActive }: { isActive: boolean }) => `px-3 py-2 ${isActive ? 'text-ml-yellow' : 'text-white'}`}>Contato</NavLink>
        </nav>

        {/* Search Bar - Right */}
        <div className="hidden md:flex items-center relative">
          <div className="relative">
            <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') submitSearch(searchQuery) }}
              className="bg-ml-gray-2 text-white px-4 py-2 pl-10 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ml-yellow transition text-sm w-64"
            />
            <div className="absolute right-2 top-2 flex items-center space-x-2">
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="text-gray-400 hover:text-white"
                  aria-label="Limpar pesquisa"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
              <button
                onClick={() => submitSearch(searchQuery)}
                className="text-gray-400 hover:text-white"
                aria-label="Pesquisar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Busca agora abre página de resultados em vez de dropdown */}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(o => !o)} aria-label="Abrir menu" className="p-2 text-white">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H22M0 8H22M0 15H22" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ml-gray-1 border-t border-ml-gray-2">
          <div className="container py-3 flex flex-col gap-4">
            {/* Mobile Search */}
            <div className="relative">
              <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') submitSearch(searchQuery) }}
                    className="w-full bg-ml-gray-2 text-white px-4 py-2 pl-10 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ml-yellow transition"
                  />
                  <div className="absolute right-2 top-2 flex items-center space-x-2">
                    {searchQuery && (
                      <button onClick={clearSearch} className="text-gray-400 hover:text-white" aria-label="Limpar pesquisa">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                    <button onClick={() => submitSearch(searchQuery)} className="text-gray-400 hover:text-white" aria-label="Pesquisar">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
            </div>

            {/* Mobile: a pesquisa abre a página de resultados ao pressionar Enter ou clicar no ícone */}

            {/* Menu Links */}
            <nav className="flex flex-col gap-2 border-t border-ml-gray-3 pt-4">
              <NavLink to="/" onClick={() => setOpen(false)} className="py-2 text-white">Home</NavLink>
              <NavLink to="/products" onClick={() => setOpen(false)} className="py-2 text-white">Produtos</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className="py-2 text-white">Sobre</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className="py-2 text-white">Contato</NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
