import { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

interface SignupProps {
  // add any props here
}

interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

const Signup: React.FC<SignupProps> = (
  {
    /* add props here */
  }
) => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: SignupFormValues) => {
    setLoading(true);
    // Send signup request here
    console.log("Received values of form: ", values);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-lg">
        <Title className="mb-6" level={2}>
          Signup
        </Title>
        <Form
          name="signup"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className="flex gap-4 mb-4">
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input
                placeholder="First Name"
                size="large"
                className="border rounded-md px-3 py-2 w-full"
                prefix={<UserOutlined className="text-gray-500" />}
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input
                placeholder="Last Name"
                size="large"
                className="border rounded-md px-3 py-2 w-full"
                prefix={<UserOutlined className="text-gray-500" />}
              />
            </Form.Item>
          </div>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              placeholder="Email"
              size="large"
              className="border rounded-md px-3 py-2 w-full mb-4"
              prefix={<MailOutlined className="text-gray-500" />}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              placeholder="Phone"
              size="large"
              className="border rounded-md px-3 py-2 w-full mb-4"
              prefix={<PhoneOutlined className="text-gray-500" />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              size="large"
              className="border rounded-md px-3 py-2 w-full mb-4"
              prefix={<LockOutlined className="text-gray-500" />}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Signup
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
