export const initialState = {
  wishItems: [],
};
export const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISH_LIST":
      return { wishItems: [...state.wishItems, action.payload] };
    case "REMOVE_FROM_WISH_LIST":
      const filteredItems = state.wishItems.filter(
        (item) => item.id !== action.payload
      );
      console.log(action);
      return { wishItems: filteredItems };
    default:
      return state;
  }
};
