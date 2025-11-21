import React from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard'

const Home: React.FC = () => {
  return (
    <main className="pb-10">
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/fundo/Fundo%20site.jpg)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Conteúdo */}
        <div className="container text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">Bem vindo à Muscle Life Supplements</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">Produtos de alta performance para você atingir seus objetivos. Qualidade e confiança.</p>
        </div>
      </section>

      <section className="container mt-10 py-10">
        <h2 className="text-2xl font-semibold mb-4">Produtos em destaque</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRODUCTS.slice(0,4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/products" className="inline-block px-8 py-4 btn-primary rounded text-lg font-semibold hover:scale-105 transition-transform">Ver Produtos</Link>
        </div>
      </section>
    </main>
  )
}

export default Home
