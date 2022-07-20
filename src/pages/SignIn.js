
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";
import signinbg from "../assets/images/img-signin.jpg";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Header, Footer, Content } = Layout;





const SignIn = () => {



  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Layout className="layout-default layout-signin">

        <Content className="Login">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15">Sign In</Title>
              <Title className="font-regular text-muted" level={5}>
                Ingresa tu correo y password para iniciar session
              </Title>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="username"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Porfavor ingresa tu email!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  className="username"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Porfavor ingresa tu password!",
                    },
                  ]}
                >
                  <Input placeholder="Password" />
                </Form.Item>

                <Form.Item
                  name="remember"
                  className="aligin-center"
                  valuePropName="checked"
                >

                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                    onClick={() => console.log('navig')}                    >
                    INGRESAR
                  </Button>
                </Form.Item>

              </Form>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <img src={signinbg} alt="" />
            </Col>
          </Row>
        </Content>

      </Layout>
    </>
  );
}

export default SignIn