import React, { useState } from 'react';
import {
  Card,
  Row,
  Col,
  Button,
  Input,
  Table,
  Tag,
  Space,
  Modal,
  Drawer,
  notification,
  Alert,
  Typography,
  List,
  Avatar,
  Badge,
  Tabs,
  Collapse,
  Timeline,
  Tree,
} from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  MessageOutlined,
  LikeOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const Components: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('1');

  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button type="text" icon={<EditOutlined />} />
          <Button type="text" icon={<DeleteOutlined />} danger />
        </Space>
      ),
    },
  ];

  const tableData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['developer', 'designer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['manager'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 28,
      address: 'Sidney No. 1 Lake Park',
      tags: ['developer'],
    },
  ];

  const listData = [
    {
      title: 'Ant Design Title 1',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      avatar: <Avatar icon={<UserOutlined />} />,
      content: 'We supply a series of design principles, practical patterns and high quality design resources.',
    },
    {
      title: 'Ant Design Title 2',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      avatar: <Avatar icon={<UserOutlined />} />,
      content: 'We supply a series of design principles, practical patterns and high quality design resources.',
    },
    {
      title: 'Ant Design Title 3',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      avatar: <Avatar icon={<UserOutlined />} />,
      content: 'We supply a series of design principles, practical patterns and high quality design resources.',
    },
  ];

  const timelineData = [
    {
      children: 'Create a services site 2015-09-01',
    },
    {
      children: 'Solve initial network problems 2015-09-01',
    },
    {
      children: 'Technical testing 2015-09-01',
    },
    {
      children: 'Network problems being solved 2015-09-01',
    },
  ];

  
  const showModal = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    setModalVisible(false);
    notification.success({
      message: 'Success',
      description: 'Modal action completed successfully!',
    });
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  return (
    <div>
      <Title level={2}>Components Showcase</Title>
      <Text type="secondary">Explore various Ant Design components</Text>

      <Tabs activeKey={activeTab} onChange={setActiveTab} style={{ marginTop: 24 }}>
        <TabPane tab="General" key="1">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card title="Buttons" size="small">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                  </Space>
                  <Space>
                    <Button type="text">Text</Button>
                    <Button type="link">Link</Button>
                    <Button danger>Danger</Button>
                  </Space>
                  <Space>
                    <Button icon={<PlusOutlined />} />
                    <Button icon={<EditOutlined />} />
                    <Button icon={<DeleteOutlined />} />
                  </Space>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card title="Input & Search" size="small">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Input placeholder="Basic input" />
                  <Input.Search placeholder="Search..." />
                  <Input.Password placeholder="Password" />
                  <Input.TextArea placeholder="Text area" rows={2} />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card title="Tags & Badges" size="small">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space>
                    <Tag color="red">red</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="blue">blue</Tag>
                  </Space>
                  <Space>
                    <Badge count={5}>
                      <Avatar shape="square" icon={<UserOutlined />} />
                    </Badge>
                    <Badge count={0} showZero>
                      <Avatar shape="square" icon={<MessageOutlined />} />
                    </Badge>
                    <Badge dot>
                      <Avatar shape="square" icon={<LikeOutlined />} />
                    </Badge>
                  </Space>
                </Space>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="Data Display" key="2">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="Table">
                <Table
                  columns={tableColumns}
                  dataSource={tableData}
                  pagination={{ pageSize: 5 }}
                />
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card title="List">
                <List
                  itemLayout="vertical"
                  dataSource={listData}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={item.avatar}
                        title={item.title}
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card title="Timeline">
                <Timeline items={timelineData} />
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="Feedback" key="3">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="Alerts & Notifications">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Alert message="Success Text" type="success" />
                  <Alert message="Info Text" type="info" />
                  <Alert message="Warning Text" type="warning" />
                  <Alert message="Error Text" type="error" />
                  <Space>
                    <Button type="primary" onClick={showModal}>
                      Open Modal
                    </Button>
                    <Button onClick={showDrawer}>
                      Open Drawer
                    </Button>
                    <Button
                      onClick={() => {
                        notification.info({
                          message: 'Notification',
                          description: 'This is a notification message!',
                        });
                      }}
                    >
                      Show Notification
                    </Button>
                  </Space>
                </Space>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="Navigation" key="4">
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
              <Card title="Collapse">
                <Collapse>
                  <Panel header="This is panel header 1" key="1">
                    <p>This is the content of panel 1.</p>
                  </Panel>
                  <Panel header="This is panel header 2" key="2">
                    <p>This is the content of panel 2.</p>
                  </Panel>
                  <Panel header="This is panel header 3" key="3">
                    <p>This is the content of panel 3.</p>
                  </Panel>
                </Collapse>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card title="Tree">
                <Tree
                  defaultExpandAll
                  defaultSelectedKeys={['0-0-0']}
                  treeData={[
                    {
                      title: 'parent 1',
                      key: '0-0',
                      children: [
                        {
                          title: 'parent 1-0',
                          key: '0-0-0',
                          children: [
                            { title: 'leaf', key: '0-0-0-0' },
                            { title: 'leaf', key: '0-0-0-1' },
                          ],
                        },
                        {
                          title: 'parent 1-1',
                          key: '0-0-1',
                          children: [{ title: 'leaf', key: '0-0-1-0' }],
                        },
                      ],
                    },
                  ]}
                />
              </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>

      <Modal
        title="Basic Modal"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={() => setModalVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default Components;