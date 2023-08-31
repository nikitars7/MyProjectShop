import { useAppDispatch } from "../store/store"
import { login } from "../store/slices/userAuthSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form"
const Login = () => {
  const dispatch= useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = (email,password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user)
      dispatch(login({
       email:user.email,
       id:user.uid,
       token:user.accessToken,
      }))
      navigate('/')
     })
     .catch(()=> alert('Invalid email/password'))
  }
  return (
    <div>
      <Form handleClick={handleLogin} title='Sign in'/>
      </div>
  )
}

export default Login