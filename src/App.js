import {Link, Outlet} from "react-router-dom"
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="Titulo">Biblioteca Pessoal</h1>
      <nav className="nav">
      <hr/>
      <Link className="link1" to="/livros/cadastrar">Cadastro</Link> &nbsp;
      <Link className="link2" to="livros/consultar">Consulta</Link> &nbsp;
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
