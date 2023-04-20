import React, { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import AccessType from "../../components/list-view/AccessType";
import ListView from "../../components/list-view";
import Header from "../../components/Navbar";

const Dashboard = () => {
  const [viewMethod, setViewMethod] = useState("list");
  const [accessTypeToggle, setAccessTypeToggle] = useState(false);
  const [roleToggle, setRoleToggle] = useState(false);

  const handleClick = (e) => {
    if (!document.getElementById("role-select").contains(e.target))
      setRoleToggle(false);
    if (!document.getElementById("access-type-select").contains(e.target))
      setAccessTypeToggle(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, false);
    return () => {
      document.removeEventListener("click", handleClick, false);
    };
  }, []);
  useEffect(() => {
    setRoleToggle(roleToggle)
  },[roleToggle])

  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <NavigationBar
          setViewMethod={(value) => setViewMethod(value)}
          viewMethod={viewMethod}
          roleToggle={roleToggle}
          setRoleToggle={(v) => {setRoleToggle(v)}}
        />
        <div className="list-view-container justify-conent responsive-mobile">
          <AccessType
            accessTypeToggle={accessTypeToggle}
            setAccessTypeToggle={(v) => {
              setAccessTypeToggle(v);
            }}
          />
          <ListView viewMethod={viewMethod} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
