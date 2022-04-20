import React from 'react';
import './index.scss';
import { Button, Typography, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

function GarageTitleWithBtn({ setIsModalVisible }) {
  return (
    <Row className="title-wrapper">
      <Col span={10} offset={7}>
        <div className="title-content">
          <div className="title-content-item" />
          <div className="title-content-item">
            <Title className="title-content_text">Garage</Title>
          </div>
          <div className="title-content-item">
            <Button onClick={() => setIsModalVisible(true)} type="primary" icon={<PlusOutlined />}>
              Add new car
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default GarageTitleWithBtn;
