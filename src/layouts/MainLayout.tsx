import { Outlet } from "react-router-dom";
import { Header} from "../pages";
const MainLayout:React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>

  );
};

export default MainLayout;
