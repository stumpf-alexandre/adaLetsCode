import Contador from "./components/Contador"
import Lista from "./components/Lista"

import MeuComponente from "./components/MeuComponents"


function App() {

  return (
    <div>
      <h1>Olá Mundo!!! No React</h1>

      <MeuComponente/>
      <MeuComponente/>

      <MeuBotao conteudo='Me click'/>
      <MeuBotao conteudo='Depois aqui'/>
      <MeuBotao conteudo='E depois aqui'/>

      <div>
        <h1>Estados e Eventos</h1>
        <Contador/>
      </div>
      <div>
        <h1>Listas no React</h1>
        <Lista/>
      </div>
    </div>
    
  )
}
function MeuBotao(props) {
  return (

    // eslint-disable-next-line react/prop-types
    <button>{props.conteudo}</button>
  )
}

export default App
