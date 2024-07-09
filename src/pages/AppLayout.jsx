import { Outlet } from "react-router-dom";

import "../index.css";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <>
      <div className="bg-Clay">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
