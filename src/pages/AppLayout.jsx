import { Outlet } from "react-router-dom";

import "../index.css";

const AppLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
