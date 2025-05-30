export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Olá, eu sou <span className="text-blue-500">Wesley Lira</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Desenvolvedor Frontend Pleno | React
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#experiencia"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors"
            >
              Ver Experiência
            </a>
            <a
              href="#contato"
              className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Sobre Mim</h2>
          <div className="max-w-3xl mx-auto text-gray-600">
            <p className="text-lg mb-6">
              Desenvolvedor Front-End com mais de 3 anos de experiência em tecnologia, serviços
              financeiros e marketing digital. Atualmente atuando na V4 Company como Desenvolvedor Front-End,
              trabalhando com desenvolvimento de interfaces para usuários do XP Investimentos e automação
              de marketing na Salesforce Marketing Cloud.
            </p>
            <p className="text-lg mb-6">
              Minha experiência inclui participação ativa em projetos para grandes players do mercado como
              XP Investimentos, Boa Vista e Acordo Certo. Sou um profissional disciplinado, colaborativo,
              com hábitos saudáveis e capacidade de adaptação em ambientes ágeis.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-gray-900">Formação</h3>
                <p className="mb-2 text-gray-700">Bacharel em Sistemas de Informação - UNIP</p>
                <p className="text-gray-500">Conclusão: Dezembro de 2023</p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-gray-900">Idiomas</h3>
                <p className="text-gray-700">Inglês – Intermediário (B1)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Minhas Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-gray-900">Frontend</h3>
              <p className="text-gray-600">React, Angular, HTML, CSS, JavaScript</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-gray-900">DevOps</h3>
              <p className="text-gray-600">Git, GitLab CI/CD</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-gray-900">Marketing Digital</h3>
              <p className="text-gray-600">Salesforce Marketing Cloud</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2 text-gray-900">Soft Skills</h3>
              <p className="text-gray-600">Trabalho em equipe, Comunicação, Adaptabilidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiencia" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Experiência Profissional</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl mb-2 text-gray-900">V4 Company – Desenvolvedor Front-End</h3>
              <p className="text-gray-600 mb-2">Jun 2024 – Atualmente</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Desenvolvimento de interfaces para usuários de um grande banco brasileiro (XP Investimentos)</li>
                <li>Criação e manutenção de campanhas na Salesforce Marketing Cloud</li>
                <li>Atuação em time de ativação digital e automação de marketing</li>
              </ul>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl mb-2 text-gray-900">Acordo Certo – Desenvolvedor Web Front-End</h3>
              <p className="text-gray-600 mb-2">Out 2022 – Jan 2024 | São Paulo (Híbrido)</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Desenvolvimento de funcionalidades em React e Angular</li>
                <li>Participação na evolução do portal principal da empresa</li>
                <li>Integração de soluções com GitLab CI/CD</li>
              </ul>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl mb-2 text-gray-900">Boa Vista SCPC – Desenvolvedor Front-End</h3>
              <p className="text-gray-600 mb-2">Fev 2021 – Out 2022 | São Paulo</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Atuação no portal de análise de crédito e dados</li>
                <li>Implementação de melhorias de performance e usabilidade</li>
                <li>Colaboração com equipes multidisciplinares (UX, QA, Backend)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <div className="space-y-2">
                  <p>
                    <a href="mailto:wesleyliramtx@gmail.com" className="text-blue-400 hover:text-blue-300">
                      wesleyliramtx@gmail.com
                    </a>
                  </p>
                  <p>(11) 95031-3436</p>
                  <p>São Paulo - Zona Sul</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/wesleygimenez/"
                    className="text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/wesleymtx"
                    className="text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
