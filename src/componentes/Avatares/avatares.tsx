import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import React from 'react';

const Avatares: React.FC = () => (
  <Space size={16} wrap>
    <Avatar  icon={<UserOutlined />} />
  </Space>
);

export default Avatares;