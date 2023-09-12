import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserFromLS } from "../../utils/localStorage";
export interface AuthInitial {
   email:null|string,
   token:null|string,
   id:null|string,
}
const {userData} = getUserFromLS();
const initialState:AuthInitial = {
   email:userData.email,
   token:userData.token,
   id:userData.id,
}

const userAuthSlice = createSlice({
   name:'userAuth',
   initialState,
   reducers:{
    login(state,action:PayloadAction<AuthInitial>){
     state.email = action.payload.email;
     state.token = action.payload.token;
     state.id = action.payload.id;
    },
    logOut(state){
      state.email = null;
      state.token = null;
      state.id = null;
    }
   }
})
export const {login,logOut} = userAuthSlice.actions;
export default userAuthSlice.reducer;