import Input from '../../components/input/Input'
import './Login.modules.css'
import ButtonCustom from '../../components/button/ButtonCustom'


function Login() {
    return(
        <div className="tela">
            <div className="formulario">
                <div className="texto">
                    <p>FAÇA LOGIN E EXPLORE TUDO O QUE TEMOS A OFORECER!!</p>
                </div>
                <div className="login">
                    <form>
                        <h3>Login</h3>
                        <p>Digite seus dados de acesso no campo abaixo.</p>
                        <Input name={'email'} type={'text'} nome={'Digite seu e-mail'} />
                        <Input name={'senha'} type={'password'} nome={'Digite sua senha'}/>
                        <div className="btn">
                            <ButtonCustom titulo={'Acessar'} tipo={'green'}/>
                            <ButtonCustom titulo={'Criar minha conta'} tipo={'red'}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login