import { screen } from "@testing-library/react";
import { renderWithRouterRedux } from "../tests/helpers/renderWithRouterRedux";
import ProductPage from "../pages/ProductPage";
import axios from "axios";
jest.mock('axios');
describe("ProductPage test", () => {
   let response;
   beforeEach(() => {
      response = {
         data: {
               id:'2',
               imageUrl:'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
               name:'Jacket',
               price:100,
               sizes:["XS","S","L","XL"]
            }  
      }
   })
  test("display", async() => {
   axios.get.mockReturnValue(response);
   renderWithRouterRedux(<ProductPage />
   );
   const product = await screen.findByTestId('product-item')
   expect(product).toBeInTheDocument();
   expect(axios.get).toBeCalledTimes(1)
  });
});
