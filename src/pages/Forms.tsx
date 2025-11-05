import React, { useState } from 'react';
import {
  Card,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  TimePicker,
  Switch,
  Slider,
  Upload,
  Radio,
  Checkbox,
  Rate,
  Row,
  Col,
  Typography,
  Space,
  message,
  Divider,
  Steps,
  Cascader,
  TreeSelect,
} from 'antd';
import {
  UploadOutlined,
  InboxOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import type { UploadProps } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Dragger } = Upload;

const Forms: React.FC = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);

  const cascaderOptions = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ];

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('Form submitted successfully!');
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    {
      title: 'Personal Info',
      content: 'personal',
    },
    {
      title: 'Contact Info',
      content: 'contact',
    },
    {
      title: 'Preferences',
      content: 'preferences',
    },
    {
      title: 'Review',
      content: 'review',
    },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'Please input your first name!' }]}
              >
                <Input prefix={<UserOutlined />} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Please input your last name!' }]}
              >
                <Input prefix={<UserOutlined />} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Date of Birth"
                name="dob"
                rules={[{ required: true, message: 'Please select your date of birth!' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[{ required: true, message: 'Please select your gender!' }]}
              >
                <Select>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        );
      case 1:
        return (
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input prefix={<MailOutlined />} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input prefix={<PhoneOutlined />} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please input your address!' }]}
              >
                <Input prefix={<EnvironmentOutlined />} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Location" name="location">
                <Cascader options={cascaderOptions} placeholder="Select location" />
              </Form.Item>
            </Col>
          </Row>
        );
      case 2:
        return (
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="Department" name="department">
                <TreeSelect
                  style={{ width: '100%' }}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={treeData}
                  placeholder="Please select"
                  treeDefaultExpandAll
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Skills" name="skills">
                <Select mode="multiple" placeholder="Select skills">
                  <Option value="react">React</Option>
                  <Option value="vue">Vue</Option>
                  <Option value="angular">Angular</Option>
                  <Option value="nodejs">Node.js</Option>
                  <Option value="python">Python</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Interests" name="interests">
                <Checkbox.Group>
                  <Row>
                    <Col span={8}>
                      <Checkbox value="sports">Sports</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="music">Music</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="travel">Travel</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="reading">Reading</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="gaming">Gaming</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="cooking">Cooking</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Experience Level" name="experience">
                <Rate />
              </Form.Item>
            </Col>
          </Row>
        );
      case 3:
        return (
          <div>
            <Title level={4}>Review Your Information</Title>
            <Text>Please review all the information you've provided before submitting.</Text>
            <Divider />
            <Text>This is where you would display a summary of all form data.</Text>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Title level={2}>Forms Demonstration</Title>
      <Text type="secondary">Explore various form components and validation</Text>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={12}>
          <Card title="Basic Form">
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Age" name="age">
                <Slider min={1} max={100} />
              </Form.Item>
              <Form.Item label="Bio" name="bio">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item label="Active" name="active" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button htmlType="reset">
                    Reset
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Advanced Controls">
            <Space direction="vertical" style={{ width: '100%' }}>
              <div>
                <Text strong>Date & Time</Text>
                <div style={{ marginTop: 8 }}>
                  <DatePicker style={{ marginRight: 8 }} />
                  <TimePicker />
                </div>
                <div style={{ marginTop: 8 }}>
                  <RangePicker style={{ width: '100%' }} />
                </div>
              </div>

              <Divider />

              <div>
                <Text strong>File Upload</Text>
                <div style={{ marginTop: 8 }}>
                  <Upload {...uploadProps}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Dragger {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Dragger>
                </div>
              </div>

              <Divider />

              <div>
                <Text strong>Radio & Checkbox</Text>
                <div style={{ marginTop: 8 }}>
                  <Radio.Group>
                    <Radio value="a">Option A</Radio>
                    <Radio value="b">Option B</Radio>
                    <Radio value="c">Option C</Radio>
                  </Radio.Group>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Checkbox.Group>
                    <Checkbox value="apple">Apple</Checkbox>
                    <Checkbox value="banana">Banana</Checkbox>
                    <Checkbox value="orange">Orange</Checkbox>
                  </Checkbox.Group>
                </div>
              </div>
            </Space>
          </Card>
        </Col>

        <Col span={24}>
          <Card title="Multi-step Form Wizard">
            <Steps current={currentStep} items={steps} />
            <div style={{ marginTop: 24 }}>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                {renderStepContent()}
                <div style={{ marginTop: 24 }}>
                  {currentStep > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={prevStep}>
                      Previous
                    </Button>
                  )}
                  {currentStep < steps.length - 1 && (
                    <Button type="primary" onClick={nextStep}>
                      Next
                    </Button>
                  )}
                  {currentStep === steps.length - 1 && (
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  )}
                </div>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Forms;