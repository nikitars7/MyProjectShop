import { fireEvent, screen,} from "@testing-library/react";
import { renderWithRouterRedux } from "../tests/helpers/renderWithRouterRedux";
describe("wishListTest", () => {
  test("plus count test", () => {
   const wishItem = {
      id: 8,
      imageUrl:
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
      name: "Beanie",
      price: 50,
      count: 2,
      size: "XL",
    };
  renderWithRouterRedux(null,'/wishlist',{ 
   wishSlice:{
      wishItems: [wishItem],
   }
,})
  const wishTitle = screen.getByTestId('wish-title');
  expect(wishTitle).toBeInTheDocument();
  const buttonPlus = screen.getByTestId('button-plus');
  expect(buttonPlus).toBeInTheDocument();
  expect(screen.getByTestId('item-count')).toHaveTextContent('2');
  fireEvent.click(buttonPlus);
  expect(screen.getByTestId('item-count')).toHaveTextContent('3');
  })
  test("minus count test", () => {
   const wishItem = {
      id: 8,
      imageUrl:
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
      name: "Beanie",
      price: 50,
      count: 2,
      size: "XL",
    };
  renderWithRouterRedux(null,'/wishlist',{ 
   wishSlice:{
      wishItems: [wishItem],
   }
,})
  const wishTitle = screen.getByTestId('wish-title');
  expect(wishTitle).toBeInTheDocument();
  const buttonPlus = screen.getByTestId('button-minus');
  expect(buttonPlus).toBeInTheDocument();
  expect(screen.getByTestId('item-count')).toHaveTextContent('2');
  fireEvent.click(buttonPlus);
  expect(screen.getByTestId('item-count')).toHaveTextContent('1');
  })
});
