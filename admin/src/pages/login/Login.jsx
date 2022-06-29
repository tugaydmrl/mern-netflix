import { useContext, useState } from "react"
import "./Login.css"
import { AuthContext } from "../../context/authContext/AuthContext"
import { login } from "../../context/authContext/apiCalls"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { error, notAdmin, dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch)
    }

    return (
        <div className="login">
            <h3 className="formTitle">ADMIN PANEL</h3>
            {error && <span className="failAttempt">Wrong email or password!</span>}
            {notAdmin && <span className="failAttempt">Only admins can login!</span>}
            <form className="loginForm">
                <input type="text" placeholder="Email" className="loginInput" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="loginInput" onChange={(e) => setPassword(e.target.value)} />
                <button className="loginButton" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login
