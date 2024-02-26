import React, { useState } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div style={{  height: "100vh",width:"100vw" }}>
      <div
        style={{
          flex: "1",
          boxSizing: "border-box",
          // width: "100%",
          backgroundColor: darkMode ? "#001529" : "#f2f2f2",
          color: darkMode ? "white" : "black",
        }}
      >
        <div
          style={{
            height: "80px",
            zIndex: 50,
            width: "100%",
            backgroundColor: "rgb(255 255 255)",
          }}
        >
          <Navbar />
        </div>
        <div style={{ width: "100%" }}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
