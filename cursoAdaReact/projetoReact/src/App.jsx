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
