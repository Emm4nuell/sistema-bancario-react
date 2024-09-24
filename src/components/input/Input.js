import './Input.modules.css'

function Input({name, nome, type}) {
    return(
        <div className="divinput">
            <input id="inputlabel" name="inputlabel" type={type} required/>
            <label htmlFor="inputlabel">{nome}:</label>
        </div>
    )
}

export default Input;