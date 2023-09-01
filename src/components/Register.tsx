import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form"
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/store"
import { login } from "../store/slices/userAuthSlice";
const Register = () => {
  const dispatch= useAppDispatch();
  const navigate = useNavigate();
  const handleRegister = (email:string,password:string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
     console.log(user)
     dispatch(login({
      email:user.email,
      id:user.uid,
      token:user.refreshToken,
     }))
     navigate('/')
    })
    .catch(()=> alert('Invalid email/password'))
  }
  return (
    <div>
    <Form handleClick={handleRegister} title='Sign up'/>
    </div>
  )
}

export default Register