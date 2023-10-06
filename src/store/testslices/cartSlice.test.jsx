import cartSliceReducer, {
  addToCart,
  removeFromCart,
} from "../slices/cartSlice";
describe("cartSlice", () => {
  test("should return default state", () => {
    const result = cartSliceReducer(undefined, { type: "" });
    expect(result).toEqual({ cartItems: [], totalPrice: 0 });
    expect(result).toMatchSnapshot();
  });
  test("should add a new item to the state", () => {
    const action = {
      type: addToCart.type,
      payload: {
        id: 1,
        imageUrl: "image",
        name: "added",
        price: 100,
        count: 1,
        size: "L",
      },
    };
    const result = cartSliceReducer({ cartItems: [], totalPrice: 0 }, action);
    const { cartItems, totalPrice } = result;
    expect(cartItems[0].name).toBe("added");
    expect(totalPrice).toBe(100);
    expect(result).toMatchSnapshot();
  });
  test("should remove the item from the state", () => {
    const cartItem = {
      id: 1,
      imageUrl: "image",
      name: "added",
      price: 100,
      count: 1,
      size: "L",
    };
    const action = {
      type: removeFromCart.type,
      payload: 1,
    };
    const result = cartSliceReducer(
      { cartItems: [cartItem], totalPrice: 100 },
      action
    );
    expect(result).toEqual({ cartItems: [], totalPrice: 0 });
    expect(result).toMatchSnapshot();
  });
});
