import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   email:null,
   token:null,
   id:null,
}

const userAuthSlice = createSlice({
   name:'userAuth',
   initialState,
   reducers:{
    login(state,action){
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