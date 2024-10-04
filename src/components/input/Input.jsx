import './Input.modules.css'

function Input({name, text, type}) {
    return(
        <div className="divinput">
            <input name={name} type={type} required/>
            <label htmlFor="inputlabel">{text}:</label>
        </div>
    )
}

export default Input;