import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
// Cart removed: product detail is view-only

const ProductDetail: React.FC = () => {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === id)
  const [flavor, setFlavor] = useState<string | undefined>(product?.flavors[0])

  if(!product) return <div className="pt-20 container">Produto não encontrado.</div>

  return (
    <main className="min-h-screen bg-black pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black p-8 rounded-lg border border-gray-800">
          <div>
            <div className="bg-black p-4 rounded border border-gray-800">
              <img src={product.images[0]} alt={product.name} className="w-full h-[500px] object-cover rounded" />
              <div className="mt-3 grid grid-cols-4 gap-2">
                {product.images.map((img, idx) => (
                  <button key={idx} onClick={() => { /* small enhancement: could set main image */ }} className="w-full h-28 overflow-hidden rounded">
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-heading font-bold">{product.name}</h1>
            <div className="text-2xl font-bold mt-2">R$ {product.price.toFixed(2)}</div>
            <p className="mt-4 text-gray-300">{product.description}</p>

            <div className="mt-4">
              <h4 className="font-semibold">Sabores</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.flavors.map(f => (
                  <button 
                    key={f} 
                    onClick={() => setFlavor(f)} 
                    className={`px-3 py-2 rounded text-sm whitespace-nowrap transition-all ${
                      flavor===f
                        ? 'bg-ml-yellow text-black font-semibold' 
                        : 'bg-ml-gray-1 text-gray-300 hover:bg-ml-gray-2'
                    } ${product.flavors.length > 4 ? 'text-xs px-2 py-1' : ''}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4">
              {/* Carrinho removido: controles de quantidade e botão de adicionar foram removidos */}
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Benefícios</h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                {product.benefits.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Modo de uso</h4>
              <p className="text-gray-300">{product.usage}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail
