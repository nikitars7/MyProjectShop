import { wishItemsSelector } from "./wishItemsSelector";

describe("wishItemSelector", () => {
  test("work with empty state", () => {
    const wishSlice = [
      {
        id: 1,
        imageUrl: "",
        name: "Jacket",
        price: 100,
        count: 1,
        size: "L",
      },
    ];
    const result = wishItemsSelector({wishSlice})
    expect(result).toEqual(wishSlice)
  });
});
