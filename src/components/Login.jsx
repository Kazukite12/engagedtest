import { useState } from "react"
import "../style/login.css"
import { Navigate } from "react-router-dom";


const Login =()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [auth, setAuth] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (username == "admin" && password == "admin") {
            setAuth(true);
        } else {
            alert("username atau password salah")
        }

    }

    if (auth) {
        return <Navigate to="/" />
    }

    return (
        <div className="login-page">
            <div className="login-box">
            <div className="login-logo">
                <b>Novelty Training & Consulting</b>
            </div>
            <div className="login-body">
                <p className="login-body-msg">Silahkan Login</p>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input value={username} onChange={e=> setUsername(e.target.value)} required placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input value={password} onChange={e => setPassword(e.target.value)} required type="password" placeholder="Password" />
                    </div>
                    <div className="submit">
                        <input type="submit" className="action-submit" value="Login" />
                    </div>

                </form>
            </div>

        </div>
        </div>
    )
}

export default Login