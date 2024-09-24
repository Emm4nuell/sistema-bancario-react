import './Button.modeles.css'

function ButtonCustom({titulo, tipo}) {
    return(
        <div className="btncustom">
            <input type="button" value={titulo} id={tipo} />
        </div>
    )
}

export default ButtonCustom