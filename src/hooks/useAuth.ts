import { useTypedSelector } from "../hooks/useTypedSelector";
export const useAuth = () => {
const {email,token,id} = useTypedSelector(state => state.authSlice);
return {
   isAuth: !!email,
   email,
   token,
   id,
}
}