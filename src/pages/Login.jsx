import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

// 1 - criar o objeto p/ enviar os dados "dentro {}"" pq é objeto q vai sair da pagina e fazer login
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate()

    const handleLogin = (evento) => {
        evento.preventDefault()
        
        if(email === 'adm@teste' && senha === '123'){       
            navigate('/home');
        }else{
            alert('usuario ou senha invalidos')
        }
    }


  return (
    <div>
        <main className="form-signin w-100 m-auto">
  <form onSubmit={handleLogin}>
    <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Faça seu Login</h1>


    <div className="form-floating mb-6">
    <label htmlFor="floatingInput" className="mb-12">Email: </label>
      <input type="email" 
      className="form-control"
       id="email" 
       placeholder="name@example.com"
       onChange={(e)=>{setEmail(e.target.value)}} //fazendo o input aceitar digitação
       value={email}
        
    />

    </div>
    <div className="form-floating">
    <label htmlFor="floatingPassword">Senha: </label>
      <input type="password"
       className="form-control"
        id="senha"
         placeholder="Senha"
         onChange={(e)=>{setSenha(e.target.value)}} 
         value={senha} 
          
        />
    
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit" >Logar</button>
    <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
  </form>
</main>
    </div>
  )
}
