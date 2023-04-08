import { useState } from 'react';
import { Tabs } from 'antd';
import Login from '@/pages/components/Login';
import Signup from '@/pages/components/Register';

const { TabPane } = Tabs;

const AuthContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-lg">
        <Tabs
          activeKey={activeTab}
          onChange={handleTabChange}
          className="text-center"
          centered
        >
          <TabPane tab="Login" key="login">
            <Login />
          </TabPane>
          <TabPane tab="Signup" key="signup">
            <Signup />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthContainer;
