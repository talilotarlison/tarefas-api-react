import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaTarefas from './assets/ListaTarefas'

function App() { 
  var mensagem = true;

  return (
    <div>
      <h1>{mensagem?'Meu Projeto de Tarefas':null} </h1>
      <ListaTarefas/>
    </div>  
    )
}

export default App;
