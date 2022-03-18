import React from 'react';
import { Space, Spin } from 'antd';

import './index.scss';

function Spinner() {
  return (
    <div className="spinner">
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
}

export default Spinner;
