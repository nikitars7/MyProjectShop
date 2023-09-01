import { useForm } from "react-hook-form";
import '../styles/Form.scss'
interface FormProps {
   title:string,
   handleClick: (email:string,password:string) => void;
}
type FormData = {
   email:string,
   password:string,
}
const Form:React.FC<FormProps> = ({title,handleClick}) => {
   const {register,handleSubmit,formState:{errors,isValid,},} = useForm<FormData>({
      defaultValues:{
         email:'',
         password:'',
      },
      mode:'all',
   })
 
   const onSubmit = (data:FormData) => {
   const {email,password} = data;
   handleClick(email,password)
   }
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__block">
         <label>Email</label>    
      <input type='email'{...register('email',{required:'Email is required'})}
      className={errors?.email ? 'input__error' : 'form__input'}
      />
       {errors?.email && <p className="form__error">{errors.email.message}</p>}
      </div>
      <div className="form__block">
         <label>Password</label>    
      <input type='password'{...register('password',{required:'Password is required'})}
      className={errors?.password ? 'input__error' : 'form__input'}
      />
       {errors?.password && <p className="form__error">{errors.password.message}</p>}
      </div>
      <button  className="button__form " type="submit" disabled={!isValid}>
      {title}
      </button>
    </form>
  )
}

export default Form