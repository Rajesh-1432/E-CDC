import React from "react";
import { Menu, Layout, Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Header } = Layout;

const NavBar = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    if (e.key === "admin-login") {
      navigate("/admin-login");
    } else if (e.key === "college-login") {
      navigate("/college-login");
    }
  };

  const loginMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="admin-login">Admin Login</Menu.Item>
      <Menu.Item key="college-login">College Login</Menu.Item>
    </Menu>
  );

  return (
    <Header style={{backgroundColor:"white"}}>
      <Menu  mode="horizontal" defaultSelectedKeys={["home"]} style={{ justifyContent: "flex-end" }}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Dropdown overlay={loginMenu} trigger={["click"]}>
            <span>Login</span>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="register">
          <Link to="/register">New Register</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
