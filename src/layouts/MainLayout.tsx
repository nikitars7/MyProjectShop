import { Outlet } from "react-router-dom";
import { Header} from "../pages";
import {Footer} from "../pages";
const MainLayout:React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  );
};

export default MainLayout;
