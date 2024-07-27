import React from "react";
import DashboardMenu from "./DashboardMenu";
import Songs from "./Songs";
import "../Styles/style.css";
function Main() {
  return (
    <div className="dashboardWrapper">
      <DashboardMenu />
      <Songs />
    </div>
  );
}

export default Main;
