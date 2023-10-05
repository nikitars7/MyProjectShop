import { fireEvent, screen } from "@testing-library/react";
import { renderWithRouterRedux } from "../tests/helpers/renderWithRouterRedux"
import userEvent from "@testing-library/user-event";
import { Main } from "../pages";
import ItemsPage from "../pages/ItemsPage";
import App from "../App";
import Wishlist from "../pages/Wishlist";


describe('AppRouterTest',()=> {
  test('Router test',() => {
    renderWithRouterRedux(<Main/>);
     const bannerButton = screen.getByTestId('button-catalogue');
     fireEvent.click(bannerButton)
     renderWithRouterRedux(<ItemsPage/>);
     expect(screen.getByTestId('catalogue-page')).toBeInTheDocument();
  })
  test('Wish test', () => {
    renderWithRouterRedux(null,'/');
    const headerWish = screen.getByTestId('header-wish');
    expect(headerWish).toBeInTheDocument();
    fireEvent.click(headerWish);
    const wishList= screen.getByTestId('empty-wish')
    expect(wishList).toBeInTheDocument();
  })
  test('Cart test', () => {
    renderWithRouterRedux(null,'/');
    const headerCart = screen.getByTestId('header-cart');
    expect(headerCart).toBeInTheDocument();
    expect(headerCart).toMatchSnapshot()
  })
})