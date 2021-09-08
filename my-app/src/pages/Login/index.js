import { Container, FormContainer } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import { api } from "../../services/api";



function Login (){

    const [formLogin,setFormLogin] = useState({

        email:"",
        senha:""

    })

    const  handleInput = (e) => {
        setFormLogin({...formLogin,[e.target.id]: e.target.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response  = await api.post("/sessions",{
                email: formLogin.email,
                password:formLogin.senha
            });
            
            
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <h1>Bem-vindo ao</h1>
                <h1>SENAI-Overflow</h1>
                <Input label="E-mail" type="email" id="email" required handler={handleInput}/>
                <Input label="Senha" id="senha" type="password" required   handler={handleInput} />
                <button>Entrar</button>
            </FormContainer>
        </Container>
    );
}
export default Login;