import { useState } from "react";
import axios from "axios";

export default function Livro() {
    const [livro, setLivro] = useState(null);
    const [id, setId] = useState(""); 
    

    async function buscarLivro() {       
            const response = await axios.get(`http://localhost:3001/livros/${id}`);
            setLivro(response.data); 
    }

    return (
        <div>
            {!livro && (
                <>
                    <input
                        type="text"
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    />
                    <button onClick={buscarLivro}>Buscar Livro</button>
                </>
            )}

            {livro && (
                <div>
                    <p>id: {livro.id}</p>
                    <p>titulo: {livro.titulo}</p>
                    <p>autor: {livro.autor}</p>
                    <button onClick={() => {
                        setId("");
                        setLivro(null);
                    }}>Limpar
                    </button>
                </div>
            )}
        </div>
    );
}