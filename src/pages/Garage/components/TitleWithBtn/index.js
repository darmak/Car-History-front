import React from 'react';
import './index.scss';
import { Button, Typography, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Title } = Typography;

const GarageTitleWithBtn = ({setModalActive}) => {
    return (
        <Row className="title-wrapper">
            <Col span={10} offset={7}>
                <div className="title-content">
                    <div className="title-content-item">
                    </div>
                    <div className="title-content-item">
                        <Title>Garage</Title>
                    </div>
                    <div className="title-content-item">
                        <Button onClick={() => setModalActive(true)} type="primary" icon={<PlusOutlined />}>Add new car</Button>
                    </div>
                </div>
            </Col>
        </Row>
  )
}

export default GarageTitleWithBtn;