import { useContext } from "react"
import { useInput } from "../../hooks/useInput"
import { UserContext } from "../../contexts/UserContext"
import './Login.css'
import { Form, Form__login, Login__btn } from './styles.jsx'

function Login(){
    const NomeDoUsuario = useInput()
    const {setUsuario} = useContext(UserContext)
    const handleLogin = (e) => {
        e.preventDefault()

        setUsuario({nome: NomeDoUsuario.valor, estalogado: true})
    }

return(
    <Form onSubmit={handleLogin}>
        <Form__login type="text"
        placeholder="Digitie seu nome"
        value={NomeDoUsuario.valor}
        onChange={NomeDoUsuario.onChange} />
        <Login__btn type="submit">Entrar</Login__btn>
    </Form>
)
}
export default Login