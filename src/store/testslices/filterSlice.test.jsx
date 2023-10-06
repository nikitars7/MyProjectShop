import filterSliceReducer, {
  setSearchParams,
  setSortBy,
  setPage,
} from "../slices/filterSlice";
describe("filterSlice", () => {
  test("should return default state", () => {
    const result = filterSliceReducer(undefined, { type: "" });
    expect(result).toEqual({ searchParams: "", sortValue: "-name", page: 1 });
    expect(result).toMatchSnapshot();
  });
  test("should update search value", () => {
    const action = { type: setSearchParams.type, payload: "search..." };
    const result = filterSliceReducer(
      { searchParams: "", sortValue: "-name", page: 1 },
      action
    );
    const {searchParams} = result;
    expect(searchParams).toBe('search...');
    expect(result).toMatchSnapshot();
  });
  test("should update sort value", () => {
   const action = { type: setSortBy.type, payload: "price" };
   const result = filterSliceReducer(
     { searchParams: "", sortValue: "-name", page: 1 },
     action
   );
   const {sortValue} = result;
   expect(sortValue).toBe('price');
   expect(result).toMatchSnapshot();
 });
 test("should update page value", () => {
   const action = { type: setPage.type, payload: 2 };
   const result = filterSliceReducer(
     { searchParams: "", sortValue: "-name", page: 1 },
     action
   );
   const {page} = result;
   expect(page).toBe(2);
   expect(result).toMatchSnapshot();
 });
 afterEach(() => {
   jest.clearAllMocks();
 })
});
