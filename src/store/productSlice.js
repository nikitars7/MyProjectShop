import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
   'products/fetchProducts',
   async () => {
      const response = await fetch('https://6404ecfc40597b65de2d48a6.mockapi.io/Products');
      const data = await response.json();
       return data ;
   }
 )
const initialState = {
   products:[],
}

const productSlice = createSlice({
   name:'product',
   initialState,
   reducers:{
      setProducts(state,action){
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