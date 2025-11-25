import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') || ''

  const q = query.trim().toLowerCase()
  const results = q
    ? PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    : []

  return (
    <main className="pt-20 pb-10 container bg-black">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Resultados da busca</h2>
        <p className="text-gray-400">Pesquisa: <span className="text-ml-yellow">{query}</span></p>
      </div>

      {q === '' ? (
        <div className="text-gray-400">Nenhuma busca fornecida. <Link to="/products" className="text-ml-yellow">Ver produtos</Link></div>
      ) : (
        <>
          <p className="text-gray-400 mb-4">{results.length} produto(s) encontrado(s)</p>
          {results.length === 0 ? (
            <div className="text-gray-400">Nenhum produto encontrado para esta busca.</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {results.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </>
      )}
    </main>
  )
}

export default SearchResults
