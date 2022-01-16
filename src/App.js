import React from "react";

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  CodeOutlined,
  FileOutlined,
  HeartOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

import myResume from "./assets/peakchasem_resume.pdf";
import awsSALogo from "./assets/solutions-architect-associate-tag_360x32.png";

import "antd/dist/antd.css";

function renderPage(page) {
  switch(page) {
    case "Home":
      return home();
    case "Resume":
      return resume();
    default:
      return emptyPage();
  }
}

function home() {
  return (
    <div>
      <h2>Welcome to my website!</h2>
      <h3>This website is currently in the  <i>VERY</i> early stages of development. Content is available on the <b>Resume</b> page.</h3>
    </div>
  );
}

function resume() {
  return (
    <iframe title="myResume" src={myResume} style={{width:"100%", height: "100vh"}}></iframe>
  );
}

function emptyPage() {
  return (
    <div>
      <h3>Content currently unavailable...</h3>
      <LoadingOutlined/>
    </div>
    
  )
}

function App() {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const defaultPage = "Home";
  const [page, setPage] = React.useState(defaultPage)
  return (
    <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[defaultPage]}
        style={{fontSize: 20}}
        onSelect={
          (item) => {setPage(item.key)}
        }
        >
        <Menu.Item key="Home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="Resume" icon={<FileOutlined />}>
          Resume
        </Menu.Item>
        <Menu.Item key="Code-Samples" icon={<CodeOutlined />}>
          Code Samples
        </Menu.Item>
        <Menu.Item key="Lifestyle" icon={<HeartOutlined />}>
          Lifestyle
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          {renderPage(page)}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <h3>
          <b>Created by <a href="mailto:chasempeak@gmail.com">Chase M. Peak</a></b>
          <br/>
          <img src={awsSALogo} style={{height: 26, width: 294}}></img>
        </h3>
        <h4>Last updated on Jan 15th, 2022</h4>
      </Footer>
    </Layout>
  </Layout>
  );
}

export default App;
