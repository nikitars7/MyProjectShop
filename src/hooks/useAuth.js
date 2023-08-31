import { useSelector } from "react-redux"
export const useAuth = () => {
const {email,token,id} = useSelector(state => state.authSliceReducer);
return {
   isAuth: !!email,
   email,
   token,
   id,
}
}