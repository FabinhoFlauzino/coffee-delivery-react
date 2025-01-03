import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Produtos } from './components/Produtos'
import './global.css'

function App() {

  return (
    <div className='container'>
      <Header />
      <Hero />
      
      <Produtos />

    </div>
  )
}

export default App
