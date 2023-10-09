import productReducer,{fetchProducts} from '../slices/productSlice'
const initialState = {
   products:[],
   isLoading: 'loading' | 'success' | 'error',
}

describe('productSlice' ,() => {
   it('should change status with "fetchProducts.pending" action',()=>{
      const state = productReducer(initialState,fetchProducts.pending());
      expect(state.isLoading).toBe('loading');
   })
   it('should fetch products with "fetchProducts.fulfilled" action',()=>{
      const mockProducts = [{
         id:"4",
         name:"Beanie",
         price:50,
         sizes:[
          'XS','S','M','L'
         ],
         imageUrl:"https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
       }];
      const state = productReducer(initialState,fetchProducts.fulfilled(mockProducts));
      expect(state).toEqual({
         products:mockProducts,
         isLoading:'success',
      })
   })
   it('should change status with "fetchProducts.rejected" action',()=>{
      const state = productReducer(initialState,fetchProducts.rejected());
      expect(state.isLoading).toBe('error');
   })
})