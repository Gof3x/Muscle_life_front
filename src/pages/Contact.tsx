import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode enviar o form para um backend
    console.log('Form enviado:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="pt-20 pb-10 bg-black">
      <div className="container">
        {/* Hero Section */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Conteúdo à esquerda */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h1 className="text-5xl font-heading font-bold mb-4">Entre em Contato</h1>
                <div className="w-24 h-1 bg-ml-yellow rounded"></div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Adoramos ouvir nossos clientes! Se você tiver dúvidas, sugestões ou apenas quiser conversar sobre seus objetivos fitness, estamos aqui para ajudar.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">Mlsupplements2024@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
                    <p className="text-gray-300">(81) 99114-2186</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Endereço</h3>
                    <p className="text-gray-300">Recife, Pernambuco, Brasil</p>
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="mt-8 p-8 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-ml-yellow focus:outline-none transition"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-ml-yellow focus:outline-none transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem aqui..."
                    rows={6}
                    className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-ml-yellow focus:outline-none transition"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full px-6 py-3 btn-primary rounded font-semibold hover:scale-105 transition-transform"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Logo à direita */}
            <div className="md:col-span-1 flex flex-col items-center justify-start p-8">
              <div className="w-80 h-80 flex items-center justify-center">
                <img src="/images/logo.png" alt="Logo Muscle Life" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
