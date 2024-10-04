import './Button.modeles.css'

function ButtonCustom({text, tipo, onclick}) {
    return(
        <div className="btncustom">
            <input type="button" value={text} id={tipo} onClick={onclick} />
        </div>
    )
}

export default ButtonCustom