import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { initStore } from "../../store/store";
import AppRouter from "../../router/AppRouter";
export const renderTestApp = (component, options) => {
  const store = initStore(options?.initialState)
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
