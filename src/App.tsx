import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  AppstoreOutlined,
  FormOutlined,
  HomeOutlined
} from '@ant-design/icons';
import Dashboard from './pages/Dashboard';
import Components from './pages/Components';
import Forms from './pages/Forms';
import './App.css';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
            Ant Design Showcase
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              style={{ height: '100%', borderRight: 0 }}
              items={[
                {
                  key: '/',
                  icon: <HomeOutlined />,
                  label: <a href="/">Home</a>,
                },
                {
                  key: '/dashboard',
                  icon: <DashboardOutlined />,
                  label: <a href="/dashboard">Dashboard</a>,
                },
                {
                  key: '/components',
                  icon: <AppstoreOutlined />,
                  label: <a href="/components">Components</a>,
                },
                {
                  key: '/forms',
                  icon: <FormOutlined />,
                  label: <a href="/forms">Forms</a>,
                },
              ]}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/components" element={<Components />} />
                <Route path="/forms" element={<Forms />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
