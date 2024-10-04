import Input from "../../components/input/Input"
import styles from './CadastrarUsuario.module.css'
import ButtonCustom from '../../components/button/ButtonCustom'

function CadastrarUsuario() {
    return(
        <div className={styles.container}>
            <div className={styles.divform}>
            <h1>Cadastrar Usuario</h1>
                <form>
                    <Input text={'Nome completo'} type={'text'} name={'nome'}/>
                    <Input text={'E-mail'} type={'email'} name={'email'}/>
                    <Input text={'Cpf'} type={'text'} name={'cpf'}/>
                    <div className={styles.inputsenha}>
                        <Input text={'Senha'} type={'password'} name={'senha'}/>
                        <Input text={'Repita a senha'} type={'password'} name={'repitasenha'}/>
                    </div>
                    <div className={styles.btn}>
                        <ButtonCustom text={'Criar conta'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CadastrarUsuario