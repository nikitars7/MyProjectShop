import { useAppSelector } from "../store/store";
export const useAuth = () => {
const {email,token,id} = useAppSelector(state => state.authSlice);
return {
   isAuth: !!email,
   email,
   token,
   id,
}
}