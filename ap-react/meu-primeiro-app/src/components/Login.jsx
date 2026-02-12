import { useContext } from "react"
import { useInput } from "../hooks/useInput"
import { UserContext } from "../contexts/UserContext"
import './Login.css'

function Login(){
    const NomeDoUsuario = useInput()
    const {setUsuario} = useContext(UserContext)
    const handleLogin = (e) => {
        e.preventDefault()

        setUsuario({nome: NomeDoUsuario.valor, estalogado: true})
    }

return(
    <form className="form" onSubmit={handleLogin}>
        <input className="form__login" type="text"
        placeholder="Digitie seu nome"
        value={NomeDoUsuario.valor}
        onChange={NomeDoUsuario.onChange} />
        <button type="submit" className="login__btn">Entrar</button>
    </form>
)
}
export default Login