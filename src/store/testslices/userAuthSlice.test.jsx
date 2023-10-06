import authSliceReducer, { login, logOut } from "../slices/userAuthSlice";
describe("filterSlice", () => {
  test("should return default state", () => {
    const result = authSliceReducer(undefined, { type: "" });
    expect(result).toEqual({ email: null, token: null, id: null });
    expect(result).toMatchSnapshot();
  });
  test("should return authorized state", () => {
    const action = {
      type: login.type,
      payload: {
        email: "som@gmail.com",
        token: "123456789",
        id: "1",
      },
    };
    const result = authSliceReducer(
      { email: null, token: null, id: null },
      action
    );
    expect(result).toEqual({
      email: "som@gmail.com",
      token: "123456789",
      id: "1",
    });
    expect(result).toMatchSnapshot();
  });
  test("should logout", () => {
    const action = {
      type: logOut.type,
      payload: {
        email: null,
        token: null,
        id: null,
      },
    };
    const result = authSliceReducer(
      {
        email: "som@gmail.com",
        token: "123456789",
        id: "1",
      },
      action
    );
    expect(result).toEqual({
      email: null,
      token: null,
      id: null,
    });
    expect(result).toMatchSnapshot();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
