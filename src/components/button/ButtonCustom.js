import './Button.modeles.css'

function ButtonCustom({titulo, tipo, onclick}) {
    return(
        <div className="btncustom">
            <input type="button" value={titulo} id={tipo} onClick={onclick} />
        </div>
    )
}

export default ButtonCustom