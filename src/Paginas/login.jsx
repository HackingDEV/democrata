import { useState } from 'react';
import './styles.css'




function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  
  return ( 
        
    <div className="container" >
        
      <div className="container-login">
        <div className="wrap-login">

          <form className="login-form">

            <span className="login-form-title">Bem Vindo!</span>
            <span className="login-form-title">
              {<header><h4>DEM</h4><h3 className='p'>O</h3><h4>CRATA</h4></header>}
            </span>

            <div className="wrap-input">

              <input 
              className={email !== "" ? 'has-val input' : 'input'} 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email" ></span>
            </div>

            <div className="wrap-input">
              <input
               className={password !== "" ? 'has-val input' : 'input'}
               type="password" 
               value={password}
               onChange={e => setPassword(e.target.value)}
               />
              <span className="focus-input" data-placeholder="Senha" ></span>
            </div>

            <div className="container-login-form-btn">
              <button  type="button" className="login-form-btn" onClick={"./home.html"} >Login</button>
            </div>

            <div className='text-conter'>
              <span className="txt1">Não possui conta?</span>
              
              <a className='txt2' class="btn btn-dark"  href="./home.html">Criar conta.</a>
            </div>

          </form>

        </div>
      </div> 
    </div>
  ); 
}
export default Login;