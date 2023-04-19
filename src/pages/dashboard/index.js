import React, { useState } from "react";
import Header from "../../components/header";
import NavigationBar from "../../components/navigation-bar";
import AccessType from "../../components/accesstype";
import ListView from "../../components/list-view";

import "../../assets/scss/dashboard.scss";

const Dashboard = () => {
  const [viewMethod, setViewMethod] = useState("list");
  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <NavigationBar setViewMethod={(value) => setViewMethod(value)} viewMethod={viewMethod} />
        <div className="d-flex list-view-container flex-row justify-conent" >
          <AccessType/>
          <ListView viewMethod={viewMethod}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
