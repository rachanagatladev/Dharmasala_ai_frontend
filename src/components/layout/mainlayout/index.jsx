import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import "./mainlayout.css";

const MainLayout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        {/* Header will be rendered by individual pages to allow custom titles/actions */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;