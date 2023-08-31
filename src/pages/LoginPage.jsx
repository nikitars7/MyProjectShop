import { Link } from "react-router-dom"
import Login from "../components/Login"
const LoginPage = () => {
  return (
    <div>
     <h1>Login</h1>
     <Login/>
     <p>
         Still without us ? <Link to='/register'>Sign up</Link>
      </p>
      </div>
  )
}

export default LoginPage