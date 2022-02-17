import React from 'react';
import './index.scss';
import { Button, Typography, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Title } = Typography;

const GarageTitleWithBtn = () => {
    return (
        <Row className="title-wrapper">
            <Col span={10} offset={7}>
                <Row>
                <Col span={8} offset={4}>
                    <Title>Garage</Title>
                </Col>
                <Col span={8}>
                    <Button type="primary" icon={<PlusOutlined />}>Add new car</Button>
                </Col>
                </Row>
            </Col>
        </Row>
  )
}

export default GarageTitleWithBtn;