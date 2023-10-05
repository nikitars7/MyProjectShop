import wishListReducer, {
  addToWishList,
  removeFromWishList,
  plusItem,
  minusItem,
} from "../slices/wishSlice";

describe("wishSlice", () => {
  test("should return default state", () => {
    const result = wishListReducer(undefined, { type: "" });
    expect(result).toEqual({ wishItems: [] });
  });
  test("should add a new item to the state", () => {
    const action = {
      type: addToWishList.type,
      payload: {
        id: 1,
        imageUrl: "image",
        name: "added",
        price: 100,
        count: 1,
        size: "L",
      },
    };
    const result = wishListReducer({ wishItems: [] }, action);
    const { wishItems } = result;
    expect(wishItems[0].name).toBe("added");
    expect(result).toMatchSnapshot();
  });
  test("should remove the item from the state", () => {
    const wishItem = {
      id: 1,
      imageUrl: "image",
      name: "added",
      price: 100,
      count: 1,
      size: "L",
    };
    const action = {
      type: removeFromWishList.type,
      payload:1,
    };
    const result = wishListReducer({ wishItems: [wishItem] }, action);
    expect(result).toEqual({ wishItems: [] });
  });
});
