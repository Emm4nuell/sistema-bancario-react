import Input from '../../components/input/Input'
import './Login.modules.css'
import ButtonCustom from '../../components/button/ButtonCustom'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


function Login() {
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
                            <a href="#">Esqueci a senha</a>
                        </div>
                        <div className="btn">
                            <ButtonCustom titulo={'Acessar'} tipo={'green'}/>
                            <ButtonCustom titulo={'Criar minha conta'} tipo={'red'}/>
                        </div>
                    </form>
                    <div className="icons">
                        <ul>
                            <li><FaLinkedin /></li>
                            <li><FaGithubSquare /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login