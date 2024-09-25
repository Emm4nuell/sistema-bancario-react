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
        <div className="tela">
            <div className="apresentacao">
                <div className="texto">
                    <p>FAÇA LOGIN E EXPLORE TUDO O QUE TEMOS A OFORECER!!</p>
                </div>

                <div className="divlogin">
                    <form>
                        <h3>Login</h3>
                        <p>Digite seus dados de acesso no campo abaixo.</p>
                        <Input name={'email'} type={'text'} nome={'Digite seu e-mail'} />
                        <Input name={'senha'} type={'password'} nome={'Digite sua senha'}/>
                        <div className="senha">
                            <Link to={'/'}>Esqueci a senha</Link>
                        </div>
                        <div className="btn">
                            <ButtonCustom titulo={'Acessar'} tipo={'green'}/>
                            <ButtonCustom titulo={'Criar minha conta'} onclick={loand} tipo={'red'}/>
                        </div>
                    </form>
                    <div className="icons">
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