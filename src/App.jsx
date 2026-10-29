import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Depoimentos from './components/Depoimentos'
import News from './components/News'
import Vagas from './components/Vagas'
import './App.css'

function App() {
  
  return (
    <div>
        <Header />
     
        <Hero 
            title="As melhores vagas em startups de tecnologia"
            subtitle="Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras"
        >
            <button id="bt" className="btn cta">Publicar Vaga - $299</button>
        </Hero>    
            <div className="conteudo">
        <Vagas />
            </div>
        
        <Hero
        title="Vagas novas, toda quinta-feira"
        subtitle= "Um resumo curto das melhores vagas direto no seu inbox"      
    >
        <News />
    </Hero>

    <Hero 
        title="Quem já usa o OpenBoard"
        subtitle="Depoimentos de recrutadores e candidadtos que já fecharam vaga por aqui."
    >
        <Depoimentos />
    </Hero>

    <Footer />
    
     </div>
  )
}

export default App