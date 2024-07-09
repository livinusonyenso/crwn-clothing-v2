import { Outlet } from "react-router-dom";
import Directory from "../../component/dircetory-component/directory.component";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Outlet />
      <Directory />
    </Fragment>
  );
};

export default Home;
