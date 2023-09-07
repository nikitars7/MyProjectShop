import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SortValueEnum } from "../../utils/RateList";
interface FilterState {
   searchParams:string,
   sortValue:SortValueEnum,
}
const initialState:FilterState = {
   searchParams: '',
   sortValue:SortValueEnum.NAME_ASC,
   
}
const filterSlice = createSlice({
   name:'filter',
   initialState,
   reducers:{
      setSearchParams(state,action:PayloadAction<string>){
       state.searchParams = action.payload;
      },
      setSortBy(state,action:PayloadAction<SortValueEnum>){
         state.sortValue= action.payload;
      }
   }
})
export const {setSearchParams,setSortBy} = filterSlice.actions;
export default filterSlice.reducer;