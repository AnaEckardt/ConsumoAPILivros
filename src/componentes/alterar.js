import {  useState } from "react"
import { Link, useParams } from "react-router-dom"
import './cadastro.css'

export default function Alterar(){

    const[titulo, setTitulo] = useState('')
    const[autor, setAutor] = useState('')
    const[editora, setEditora] = useState('')
    const[ano, setAno] = useState('')

    const { idLivros } = useParams();

    function Salvar(){

        let obj = {id: Number(idLivros), titulo, autor, editora, ano}

        if(titulo === ''){
            alert('Informe o título do livro!!')
            return
        } 

        if(autor === ''){
            alert('Informe o autor do livro!!')
            return
        }

        if(editora === ''){
            alert('Informe a editora do livro!!')
            return
        }

        else if(ano === ''){
            alert('Informe o ano do livro!!')
        }
        
        fetch(`http://localhost:8080/livros`,
        {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(obj)
        
        })
        .then(x => alert("Livro alterado com sucesso!!"))
    }
    
             return(   
        <div className="form-cadastro">
            <div>
            <h2 className="titulo">Alterar Livro: {idLivros} </h2>

            <label className="label">Informe o título do livro</label>
                <input className="form-control form-control-lg" type="text" placeholder="Informe o título" 
                onChange={txt => setTitulo(txt.target.value)}
                />

            <label className="label">Informe o autor do livro</label>
                <input className="form-control form-control-lg" type="text" placeholder="Informe o autor" 
                onChange={txt => setAutor(txt.target.value)}
                />

            <label className="label">Informe a editora do livro</label>
                <input className="form-control form-control-lg" type="text" placeholder="Informe a editora" 
                onChange={txt => setEditora(txt.target.value)}
                />

            <label className="label">Informe o ano do livro</label>
                <input className="form-control form-control-lg" type="text" placeholder="Informe o ano" 
                onChange={txt => setAno(txt.target.value)}
                />

            <div className="comandos">
                <button onClick={Salvar} className="btn btn-primary">Salvar</button>
                <Link to={'/livros/consultar'}><button className="btn btn-danger">Cancelar</button></Link>
            </div>
            </div>
        </div>   

    )
}