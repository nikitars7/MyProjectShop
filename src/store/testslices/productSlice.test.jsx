import { fetchProducts } from "../slices/productSlice";
global.fetch = jest.fn();
describe('fetchProducts', () => { 
 it('should fetch products with resolved response', async() => {
   const mockProducts = [{
     id:"4",
     name:"Beanie",
     price:50,
     sizes:[
      'XS','S','M','L'
     ],
     imageUrl:"https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
   }];
   fetch.mockResolvedValue({
      ok:true,
      json:() => Promise.resolve(mockProducts)
   })
   const dispatch = jest.fn();
   const params = {
      limit:'',
      page:1,
      search:'',
      order: 'ask',
      sorted: 'name',
   }
   const thunk = fetchProducts(params);
   await thunk(dispatch , () => ({}))
   const {calls} = dispatch.mock;
   expect(calls).toHaveLength(2)
   const [start,end] = calls;
   expect(start[0].type).toBe('products/fetchProducts/pending') //.toBe(fetchTodos.pending().type)
   expect(end[0].type).toBe('products/fetchProducts/fulfilled')
   expect(end[0].payload).toBe(mockProducts)
 })
 it('should fetch products with rejected response' , async() => {
    fetch.mockResolvedValue({
       ok:false,
    })
    const dispatch = jest.fn();
    const params = {
       limit:'',
       page:1,
       search:'',
       order: 'ask',
       sorted: 'name',
    }
    const thunk = fetchProducts(params);
    await thunk(dispatch , () => ({}))
    const {calls} = dispatch.mock;
    expect(calls).toHaveLength(2)
    const [start,end] = calls;
    expect(start[0].type).toBe(fetchProducts.pending().type) //.toBe(fetchTodos.pending().type)
    expect(end[0].type).toBe(fetchProducts.rejected().type)
    expect(end[0].meta.rejectedWithValue).toBe(true)
    expect(end[0].payload).toBe('Cant fetch')
 })
 })