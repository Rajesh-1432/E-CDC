import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import logo from "../assets/logo.jpg";
import Layout from "../components/Layout";

const { Title } = Typography;

const AdminLogin = () => {
  const [form] = Form.useForm(); // Create an instance of the Form
  const [error, setError] = useState(null); // Initialize error state
  const [loading, setLoading] = useState(false); // Initialize loading state

  const formContainerStyle = {
    maxWidth: "26vw", // Set maximum width for the form container
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const pinkInputStyle = {
    borderColor: "#006A4E",
  };

  const handleSubmit = (values) => {};

  return (
    <Layout>
        <div style={{width:"100%"}}>
        <Row
        justify="center"
        align="middle"
        style={{ minHeight: "88vh",width:"100%" }}
      >
        <Col span={24} style={formContainerStyle}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "80px",
              height: "80px",
              marginBottom: "20px",
              borderRadius: "50px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <Title
            level={3}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            College Login
          </Title>
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              label="Username"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input style={pinkInputStyle} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password style={pinkInputStyle} />
            </Form.Item>

            {error && (
              <p
                style={{
                  color: "red",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
            )}

            <Form.Item>
              <a
                href="*"
                style={{
                  color: "#006A4E",
                  marginBottom: "10px",
                  textAlign: "center",
                  display: "block",
                }}
              >
                Forgot Password?
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  color: "white",
                  backgroundColor: "#006A4E",
                }}
                loading={loading}
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

        </div>
          </Layout>
  );
};

export default AdminLogin;
