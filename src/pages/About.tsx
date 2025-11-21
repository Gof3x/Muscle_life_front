import React from 'react'

const About: React.FC = () => {
  return (
    <main className="pt-20 pb-10 bg-black">
      {/* Hero Section */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Conteúdo à esquerda */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-5xl font-heading font-bold mb-4">Sobre a Muscle Life</h1>
              <div className="w-24 h-1 bg-ml-yellow rounded"></div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Bem-vindo à <span className="font-semibold text-white">Muscle Life Supplements</span>, sua parceira de confiança na jornada por uma vida mais saudável, forte e equilibrada. Nascida no coração de Recife em agosto de 2024, nossa loja virtual foi criada a partir de uma paixão genuína pelo bem-estar e pela crença de que a qualidade de vida é o nosso bem mais precioso.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Aqui, nós vamos além da venda de suplementos. Entendemos que cada corpo é único e que a busca pela saúde é uma jornada pessoal e contínua. Por isso, nos dedicamos a oferecer produtos de altíssima qualidade, selecionados com rigor para garantir pureza, eficácia e resultados.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Nosso compromisso é ser a extensão da sua dedicação, fornecendo não apenas produtos excepcionais, mas também um atendimento humanizado e consultivo. Acreditamos que a força verdadeira vem da união entre um corpo saudável e uma mente tranquila.
            </p>
          </div>

          {/* Logo/Imagem à direita */}
          <div className="md:col-span-1 flex flex-col items-center justify-start p-8">
            <div className="w-80 h-80 flex items-center justify-center">
              <img src="/images/logo.png" alt="Logo Muscle Life" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Filosofia Section */}
      <div className="container py-12 border-t border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-heading font-bold mb-2">Nossa Filosofia</h2>
          <div className="w-24 h-1 bg-ml-yellow rounded mb-8"></div>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Na Muscle Life Supplements, nossa missão é guiada por três pilares fundamentais que definem quem somos:
          </p>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-ml-yellow">
              <h3 className="text-xl font-semibold text-white mb-2">💪 Qualidade Inegociável</h3>
              <p className="text-gray-300">Acreditamos que o que você consome é fundamental para os seus resultados. Por isso, a excelência e a segurança dos nossos produtos são a base de tudo o que fazemos.</p>
            </div>

            <div className="bg-ml-gray-2 p-6 rounded-lg border-l-4 border-ml-yellow">
              <h3 className="text-xl font-semibold text-white mb-2">❤️ Paixão pelo Bem-Estar</h3>
              <p className="text-gray-300">Somos movidos por um amor genuíno pela saúde. Nosso propósito é inspirar e apoiar sua evolução, fornecendo os recursos necessários para que você atinja seu potencial máximo.</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-ml-yellow">
              <h3 className="text-xl font-semibold text-white mb-2">🤝 Confiança & Transparência</h3>
              <p className="text-gray-300">Queremos ser mais do que sua loja de suplementos; queremos ser seu parceiro de confiança. Construímos relacionamentos baseados na honestidade, suporte e compromisso com sua satisfação.</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-900 border border-ml-yellow rounded-lg text-center">
            <p className="text-2xl font-heading font-bold text-ml-yellow">
              Muscle Life Supplements
            </p>
            <p className="text-xl text-gray-300 mt-2">
              Mais do que Suplementos, um Estilo de Vida
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
