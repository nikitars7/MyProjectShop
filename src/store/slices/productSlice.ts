import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
export type FetchParams = {
  limit?: number;
  page?: number;
  search?: string;
  sorted?: string;
  order?: string;
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params: FetchParams, { rejectWithValue }) => {
    const { limit = "", page = 1, search = "", order, sorted } = params;
    try {
      const response = await fetch(
        `https://65907955cbf74b575ecad237.mockapi.io/products?page=${page}&limit=${limit}&sortBy=${sorted}&order=${order}${search}`
      );
      if (!response.ok) {
        throw new Error("Cant fetch");
      }
      const data = await response.json();
      return data as FetchProduct[];
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
export const fetchMainProducts = createAsyncThunk(
  "products/fetchMainProducts",
  async (params: FetchParams) => {
    const { limit = "", page = 1 } = params;
    const response = await fetch(
      `https://65907955cbf74b575ecad237.mockapi.io/products?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    return data as FetchProduct[];
  }
);
export type FetchProduct = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  sizes: string[];
};
export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
interface ProductState {
  products: FetchProduct[];
  itemsMain: FetchProduct[];
  isLoading: Status;
}
const initialState: ProductState = {
  products: [],
  itemsMain: [],
  isLoading: Status.LOADING,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<FetchProduct[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = Status.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = Status.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = Status.ERROR;
        state.products = [];
      })
      .addCase(fetchMainProducts.pending, (state) => {
        state.isLoading = Status.LOADING;
        state.itemsMain = [];
      })
      .addCase(fetchMainProducts.fulfilled, (state, action) => {
        state.itemsMain = action.payload;
        state.isLoading = Status.SUCCESS;
      })
      .addCase(fetchMainProducts.rejected, (state) => {
        state.isLoading = Status.ERROR;
        state.itemsMain = [];
      });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
