import React, { useState, useMemo, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, CATEGORIES } from '../data/products'

const Products: React.FC = () => {
  const [category, setCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [shuffledProducts, setShuffledProducts] = useState<typeof PRODUCTS | null>(null)
  const itemsPerPage = 16

  // Função para embaralhar array (Fisher-Yates shuffle)
  const shuffleArray = (array: typeof PRODUCTS) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Inicializar produtos embaralhados apenas uma vez
  useEffect(() => {
    const storedProducts = localStorage.getItem('shuffledProducts')
    if (storedProducts) {
      setShuffledProducts(JSON.parse(storedProducts))
    } else {
      const newShuffled = shuffleArray(PRODUCTS)
      setShuffledProducts(newShuffled)
      localStorage.setItem('shuffledProducts', JSON.stringify(newShuffled))
    }
  }, [])

  const filtered = category && shuffledProducts
    ? shuffledProducts.filter(p => p.category === category)
    : shuffledProducts || []
  
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProducts = filtered.slice(startIndex, endIndex)

  const getCategoryCount = (cat: string) => PRODUCTS.filter(p => p.category === cat).length

  const handleCategoryChange = (cat: string | null) => {
    setCategory(cat)
    setCurrentPage(1)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleLastPage = () => {
    setCurrentPage(totalPages)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleFirstPage = () => {
    setCurrentPage(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="pt-20 pb-10 container bg-black">
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-60">
          <h4 className="font-semibold mb-3">Categorias</h4>
          <div className="flex flex-col gap-2">
            <button onClick={() => handleCategoryChange(null)} className={`text-left px-3 py-2 rounded flex justify-between items-center ${category===null? 'bg-gray-900 text-ml-yellow border border-ml-yellow':'text-gray-300 hover:bg-gray-900'}`}>
              <span>Todas</span>
              <span className="text-xs bg-ml-yellow text-black px-2 py-1 rounded">{PRODUCTS.length}</span>
            </button>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => handleCategoryChange(c)} className={`text-left px-3 py-2 rounded flex justify-between items-center ${category===c? 'bg-gray-900 text-ml-yellow border border-ml-yellow':'text-gray-300 hover:bg-gray-900'}`}>
                <span>{c}</span>
                <span className={`text-xs px-2 py-1 rounded ${category===c? 'bg-ml-yellow text-black':'bg-gray-800 text-gray-300'}`}>{getCategoryCount(c)}</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            Produtos {category ? `- ${category}` : ''} 
            <span className="text-ml-yellow ml-2">({filtered.length})</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center justify-center gap-4 mt-10 pt-8 border-t border-gray-700">
              <div className="flex flex-wrap gap-2 justify-center items-center">
                {/* First Page Button */}
                <button
                  onClick={handleFirstPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded font-medium transition ${
                    currentPage === 1
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-ml-yellow text-black hover:bg-yellow-500'
                  }`}
                >
                  « Primeira
                </button>

                {/* Previous Page Button */}
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded font-medium transition ${
                    currentPage === 1
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  ‹ Anterior
                </button>

                {/* Page Numbers */}
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className={`px-3 py-2 rounded font-medium transition ${
                        currentPage === page
                          ? 'bg-ml-yellow text-black'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next Page Button */}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded font-medium transition ${
                    currentPage === totalPages
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Próxima ›
                </button>

                {/* Last Page Button */}
                <button
                  onClick={handleLastPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded font-medium transition ${
                    currentPage === totalPages
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-ml-yellow text-black hover:bg-yellow-500'
                  }`}
                >
                  Última »
                </button>
              </div>

              {/* Page Info */}
              <div className="text-gray-400 text-sm">
                Página <span className="text-ml-yellow font-semibold">{currentPage}</span> de <span className="text-ml-yellow font-semibold">{totalPages}</span>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default Products
