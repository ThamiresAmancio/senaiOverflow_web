import { useState } from "react";

// Data binding : LIGAÇÃO DE DADOS

function Teste() {
    const [contador,setContador] =useState(0);
    const [nomes, setNomes] = useState(["Brayan","Carol","Thamires"]);
    const [nome, setNome] = useState([""]);
    const handSend = () =>{
        // let nomesAux = nomes;
        // nomesAux.push(nome);

        setNomes([...nomes,nome]);
        setNome('');
    }

    return (
        <>
            <h1>{contador}</h1>

            <ul>
                {nomes.map(nome =>  <li>{nome}</li>)}
            </ul>

            <button onClick={() =>setContador(contador+1)}>Contar</button>

            {/* com o cont não conseguimos usar o ++ */}

            <br/>
            <br/>
            <input type="text" onChange={(e) => setNome(e.target.value)} value={nome}  placeholder = "Digite seu nome" />
            <h2>{nome}</h2>
            <button onClick={() =>setNome("")}>Limpar</button>
            <button onClick={handSend}>Enviar</button>

        </>
    )
}

//deixa importar o componente inteiro
export default Teste;

// export const teste = : deixa importa apenas um componente