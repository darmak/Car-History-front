import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './index.scss';

const { Title } = Typography;

function UsersTitleWithBtn({ setIsModalVisible }) {
  return (
    <Row className="title-wrapper">
      <Col span={12} offset={6}>
        <div className="title-content">
          <div className="title-content-item" />
          <div className="title-content-item">
            <Title className="title-content_text">Users</Title>
          </div>
          <div className="title-content-item">
            <Button onClick={() => setIsModalVisible(true)} type="primary" icon={<PlusOutlined />}>
              Add new CSS
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default UsersTitleWithBtn;
