import React from 'react';
import { Card, Row, Col, Statistic, Progress, List, Avatar, Typography, Space } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  RiseOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const Dashboard: React.FC = () => {
  const recentActivity = [
    {
      title: 'New user registration',
      description: 'John Doe signed up',
      time: '2 hours ago',
      type: 'user',
    },
    {
      title: 'New order received',
      description: 'Order #12345 - $299.00',
      time: '3 hours ago',
      type: 'order',
    },
    {
      title: 'Product updated',
      description: 'Product catalog refreshed',
      time: '5 hours ago',
      type: 'update',
    },
    {
      title: 'Payment received',
      description: 'Invoice #6789 paid',
      time: '1 day ago',
      type: 'payment',
    },
  ];

  const getAvatar = (type: string) => {
    switch (type) {
      case 'user':
        return <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#87d068' }} />;
      case 'order':
        return <Avatar icon={<ShoppingCartOutlined />} style={{ backgroundColor: '#1890ff' }} />;
      case 'update':
        return <Avatar icon={<RiseOutlined />} style={{ backgroundColor: '#722ed1' }} />;
      case 'payment':
        return <Avatar icon={<DollarOutlined />} style={{ backgroundColor: '#52c41a' }} />;
      default:
        return <Avatar icon={<UserOutlined />} />;
    }
  };

  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <Text type="secondary">Welcome to Ant Design Showcase Dashboard</Text>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Users"
              value={11280}
              prefix={<UserOutlined />}
              suffix={<ArrowUpOutlined style={{ color: '#3f8600' }} />}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="success">+12% from last month</Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Revenue"
              value={89650}
              prefix={<DollarOutlined />}
              suffix={<ArrowUpOutlined style={{ color: '#3f8600' }} />}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="success">+23% from last month</Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Orders"
              value={3562}
              prefix={<ShoppingCartOutlined />}
              suffix={<ArrowDownOutlined style={{ color: '#cf1322' }} />}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="danger">-5% from last month</Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Conversion Rate"
              value={3.2}
              precision={1}
              suffix="%"
              prefix={<RiseOutlined />}
            />
            <div style={{ marginTop: 8 }}>
              <Progress percent={32} showInfo={false} />
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col xs={24} lg={12}>
          <Card title="Performance Overview" style={{ height: 400 }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <div>
                <Text strong>Sales Target</Text>
                <Progress percent={75} status="active" />
              </div>
              <div>
                <Text strong>Customer Satisfaction</Text>
                <Progress percent={92} status="active" strokeColor="#52c41a" />
              </div>
              <div>
                <Text strong>Product Quality</Text>
                <Progress percent={88} status="active" strokeColor="#1890ff" />
              </div>
              <div>
                <Text strong>Delivery Performance</Text>
                <Progress percent={67} status="active" strokeColor="#faad14" />
              </div>
            </Space>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Recent Activity" style={{ height: 400 }}>
            <List
              itemLayout="horizontal"
              dataSource={recentActivity}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={getAvatar(item.type)}
                    title={item.title}
                    description={
                      <div>
                        <div>{item.description}</div>
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {item.time}
                        </Text>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;