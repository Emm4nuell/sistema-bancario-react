import Input from '../../components/input/Input'
import { Link, useNavigate } from 'react-router-dom';
import './Login.modules.css'
import ButtonCustom from '../../components/button/ButtonCustom'
import { FaLinkedin, FaGithubSquare, FaRedoAlt } from "react-icons/fa";
import Loading from '../../components/loading/Loading';
import { useState } from 'react';

function Login() {
    const navigate = useNavigate();
    const [verificador, setVerificador] = useState(false)

    function loand(){
        setVerificador(true);
        setTimeout(() => {
            setVerificador(false);
            navigate("/novousuario")
        }, 2000);
    }

    return(
        <div className="login_container">
            <div className="login_apresentacao">
                <div className="login_texto">
                    <div className="texto">
                        <h2>Olá, eu sou</h2>
                        <h1>Eduardo Emmanuel</h1>
                        <p>Seja bem-vindo ao meu sistema. 
                            Para saber mais sobre mim e meu trabalho, 
                            clique no link abaixo e acesse o meu portfólio.</p>
                        <div className='btn_portfolio'>
                            <a href='#'>Meu Portfólio</a>
                        </div>
                    </div>
                </div>

                <div className="login_divlogin">
                    <form className='login_form'>
                        <h3>Login</h3>
                        <p>Digite seus dados de acesso no campo abaixo.</p>
                        <Input name={'email'} type={'text'} text={'Digite seu e-mail'} />
                        <Input name={'senha'} type={'password'} text={'Digite sua senha'}/>
                        <div className="login_senha">
                            <Link to={'/'}>Esqueci a senha</Link>
                        </div>
                        <div className="login_btn">
                            <ButtonCustom text={'Acessar'} tipo={'green'}/>
                            <ButtonCustom text={'Criar minha conta'} onclick={loand} tipo={'blue'}/>
                        </div>
                    </form>
                    <div className="login_icons">
                        <ul>
                            <li><a href='https://www.linkedin.com/in/eduardo-emmanuel-096403221/' target='_blank'><FaLinkedin /></a></li>
                            <li><a href='https://github.com/Emm4nuell' target='_blank'><FaGithubSquare /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {verificador ? <Loading /> : ''}
        </div>
    )
}

export default Login