import "react";
import Titulo from "./Titulo.jsx"
import Conteudo from "./Conteudo.jsx";
import Livro from "./Livro.jsx";

//componente
//por padrao, nome função = nome do arquivo
//padrao: export default function 
export default function App(){
    //js


    //so pode retornar 1 tag html
    // entre a div fica o componente
    return (
     
        <div>
        <h1>Livros</h1>
        <Livro />
    
    </div>
    )
}


