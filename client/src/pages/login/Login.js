import axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import "./login.css"

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })
    const {loading, error, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const handleClick = async e => {
        e.preventDefault()
        dispatch({ type: "LGIN_START" })
        try {
            const res = await axios.post("/auth/login", credentials)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }
    }
    return (
        <div className='login'>
            <div className='lContainer'>

                <input type="text"
                    placeholder="username"
                    onChange={handleChange}
                    className="lInput" />
                <input type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput" />
                <button disabled={loading} onClick={handleClick} className='lButton'>Login</button>
                {error && <span>{error.message}</span>}
            </div>
            Login</div>
    )
}
export default Login
