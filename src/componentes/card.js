import { Link } from "react-router-dom";
import './card.css'

export default function Card(props){

    function excluirLivro(){
        fetch(`http://localhost:8080/livros/${props.livro.id}`,
        {
            method: "DELETE"
        })
        .then(X => alert('Livro excluído com sucesso!!'))
    }

return(
    <div className="card">
            
            <div className="card-body"> 
                <h2 className="card-title">{props.livro.titulo}</h2>
                <img src="https://th.bing.com/th/id/OIP.65tVd9Jtp4aEBdU8v-xphAHaFw?w=184&h=143&c=7&r=0&o=5&pid=1.7" 
                className="card-img-top" alt="..."></img>
                                
                {/* <div className="card-text">
                    <span className="span">Título do Livro: </span>
                    <span className="dados">{props.livro.titulo}</span>  
                </div> */}

                <div className="card-text">
                    <span className="span">Autor: </span>
                    <span className="dados">{props.livro.autor}</span>  
                </div>

                <div className="card-text">
                    <span className="span">Editora: </span>
                    <span className="dados">{props.livro.editora}</span>  
                </div>

                <div className="card-text">
                    <span className="span">Ano: </span>
                    <span className="dados">{props.livro.ano}</span>  
                </div>

                
            </div>  
            <div className="comandos">
                    <Link to={`/livros/alterar/${props.livro.id}`}>
                        <button className="btn btn-primary">Alterar</button></Link>
                        <button onClick={excluirLivro} className="btn btn-danger">Excluir</button>
                </div>   
        </div>

)
}