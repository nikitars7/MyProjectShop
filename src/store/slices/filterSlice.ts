import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SortValueEnum } from "../../utils/RateList";
interface FilterState {
   searchParams:string,
   sortValue:SortValueEnum,
   page:number,
}
const initialState:FilterState = {
   searchParams: '',
   sortValue:SortValueEnum.NAME_ASC,
   page:1,
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
      },
      setPage(state,action:PayloadAction<number>){
       state.page = action.payload;
      }
   }
})
export const {setSearchParams,setSortBy,setPage} = filterSlice.actions;
export default filterSlice.reducer;