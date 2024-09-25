import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../../pages/login/Login"
import CadastrarUsuario from "../../pages/cadastrarusuario/CadastrarUsuario"

function PublicRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/novousuario" element={<CadastrarUsuario />}/>
                {/* <Route path="/acessar" element={}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default PublicRoutes