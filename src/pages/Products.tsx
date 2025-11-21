import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, CATEGORIES } from '../data/products'

const Products: React.FC = () => {
  const [category, setCategory] = useState<string | null>(null)
  const filtered = category ? PRODUCTS.filter(p => p.category === category) : PRODUCTS

  const getCategoryCount = (cat: string) => PRODUCTS.filter(p => p.category === cat).length

  return (
    <main className="pt-20 pb-10 container bg-black">
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-60">
          <h4 className="font-semibold mb-3">Categorias</h4>
          <div className="flex flex-col gap-2">
            <button onClick={() => setCategory(null)} className={`text-left px-3 py-2 rounded flex justify-between items-center ${category===null? 'bg-gray-900 text-ml-yellow border border-ml-yellow':'text-gray-300 hover:bg-gray-900'}`}>
              <span>Todas</span>
              <span className="text-xs bg-ml-yellow text-black px-2 py-1 rounded">{PRODUCTS.length}</span>
            </button>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCategory(c)} className={`text-left px-3 py-2 rounded flex justify-between items-center ${category===c? 'bg-gray-900 text-ml-yellow border border-ml-yellow':'text-gray-300 hover:bg-gray-900'}`}>
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
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Products
