import React from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../types'
// Cart removed: product cards are now read-only

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-ml-gray-1 p-4 rounded-lg shadow-md card-hover flex flex-col h-full">
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded" />
      </Link>
      <div className="mt-3 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-300 mb-2">{product.category}</p>
        <p className="text-xs text-gray-400 mb-3 flex-grow line-clamp-3">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="text-xl font-bold">R$ {product.price.toFixed(2)}</div>
          {/* botão de adicionar removido - site sem carrinho */}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
