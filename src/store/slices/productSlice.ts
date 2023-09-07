import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
export type FetchParams = {
   limit?:number,
   page?:number,
   search?:string,
   sorted?:string,
   order?:string,
}
export const fetchProducts = createAsyncThunk(
   'products/fetchProducts',
   async (params:FetchParams) => {
      const {limit = '',page = 1,search = '',order,sorted} = params;
      const response = await fetch(`https://6404ecfc40597b65de2d48a6.mockapi.io/Products?page=${page}&limit=${limit}&sortBy=${sorted}&order=${order}${search}`);
      const data = await response.json();
       return data as FetchProduct[] ;
   }
 )
 type FetchProduct = {
   id:number,
   imageUrl:string,
   name:string,
   price:number,
 }
 interface ProductState {
   products:FetchProduct[],
 }
const initialState:ProductState = {
   products:[],
}

const productSlice = createSlice({
   name:'product',
   initialState,
   reducers:{
      setProducts(state,action:PayloadAction<FetchProduct[]>){
         state.products = action.payload
      }
   },
   extraReducers:(builder) =>{
      builder
      .addCase(fetchProducts.pending, (state) => {
         
       })
      .addCase(fetchProducts.fulfilled, (state, action) => {
         state.products = action.payload;
       })
       .addCase(fetchProducts.rejected, (state) => {
         
       })
   }
   
})

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;