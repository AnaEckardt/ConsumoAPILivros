import { useEffect, useState } from "react";
import Card from "./card";
import './consulta.css';

export default function Consulta(){

    const [livros, setLivros] = useState([])

    function consultarLivros(){
        fetch('http://localhost:8080/livros')
        .then(data => data.json())
        .then(Response => setLivros(Response))
    }       
        useEffect(consultarLivros, [])

    return(
        <div> 
            <h1 className="titulo">Consultar Acervo de Livros</h1>
                <div className="lista-livros">
                    {
                        livros.map(lv => <Card livro={lv}/>)
                    }
                </div>
        </div>
    )
}