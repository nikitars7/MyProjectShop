import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { initStore } from "../../store/store";
import AppRouter from "../../router/AppRouter";
export const renderWithRouterRedux = (component, initialRoute = '/',initialState) => {
  return render(
    <Provider store={initStore(initialState)}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
