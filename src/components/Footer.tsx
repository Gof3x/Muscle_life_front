import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-ml-gray-1 text-white mt-16">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-heading text-xl mb-2">Muscle Life Supplements</h3>
          <p className="text-sm text-gray-300">Loja premium de suplementos. Qualidade e performance para seus treinos.</p>
          <p className="text-xs text-gray-400 mt-3">Atendimento: mlsupplements2024@gmail.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><a href="/" className="hover:text-ml-yellow">Home</a></li>
            <li><a href="/products" className="hover:text-ml-yellow">Produtos</a></li>
            <li><a href="/about" className="hover:text-ml-yellow">Sobre</a></li>
            <li><a href="/contact" className="hover:text-ml-yellow">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Redes</h4>
          <div className="flex gap-3 text-2xl text-white">
            <a href="https://www.instagram.com/ml_supplements_?igsh=MWVja3J0dnk5a3JobA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/5581991142186" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
          <div className="mt-4 text-sm text-gray-400">Horário de atendimento: Seg-Sex 9h-18h</div>
        </div>
      </div>
      <div className="border-t border-ml-gray-2 text-center py-4 text-sm">© {new Date().getFullYear()} Muscle Life Supplements. Todos os direitos reservados.</div>
    </footer>
  )
}

export default Footer
