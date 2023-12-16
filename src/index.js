import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cadastro from './componentes/cadastro';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Consulta from './componentes/consulta';
import Alterar from './componentes/alterar';
import Mensagem from './componentes/mensagem';

const rotas = createBrowserRouter([
{
  path: "/",
  element: <App />,

  children: [
    {
      path: "",
      element: <Mensagem />
    },
    {
      path: "/livros/cadastrar",
      element: <Cadastro />
    },
    {
      path: "/livros/consultar",
      element: <Consulta />
    },
    {
      path: "/livros/alterar/:idLivros",
      element: <Alterar />
    },
  ]
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);


