import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface FilterState {
   searchParams:string,
}
const initialState:FilterState = {
   searchParams: '',
}
const filterSlice = createSlice({
   name:'filter',
   initialState,
   reducers:{
      setSearchParams(state,action:PayloadAction<string>){
       state.searchParams = action.payload;
      }
   }
})
export const {setSearchParams} = filterSlice.actions;
export default filterSlice.reducer;