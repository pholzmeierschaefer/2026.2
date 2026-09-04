import "react";
import { use, useState } from "react";
import Mostrar from "./Mostrar"


export default function Conteudo({valor}){
    //js - comportamento é js

    const [contador, setContador] = useState(0)
    const [nome, setNome] = useState("");

    const [id, setId] = useState(0);
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");

    const[mostrar, setMostrar] = useState(false);




  


    //so pode retornar 1 tag html
    // entre a div fica o componente
    return (
        //comportamento é html
        <div>
            
            <input value={contador}></input>
            <button onClick={() => setContador(contador + 1)}>incrementar</button>

            <br/>

            <input value={nome} onChange={(event) => {setNome(event.target.value)}}></input> 
            {nome.length > 3 && <Mostrar valor={nome}/>}

            <br/>
            <br/>
            <p>id</p>
            <input value={id} onChange={(event) => {setId(event.target.value)}}></input> 
            
            <br/>
            <p>titulo</p>
            <input value={titulo} onChange={(event) => {setTitulo(event.target.value)}}></input>
            
            <br/>
            <p>autor</p>
            <input value={autor} onChange={(event) => {setAutor(event.target.value)}}></input> 
            
            <br/>
            <br/>
            <button onClick={() => setMostrar(!mostrar)}>mostrar</button>
            {mostrar &&
                <div>
                    <br/>
                    { <Mostrar valor={id}/>}
                    { <Mostrar valor={titulo}/>}
                    { <Mostrar valor={autor}/>}


                </div>
            
            }              
            
           
           
        </div>
    )
}