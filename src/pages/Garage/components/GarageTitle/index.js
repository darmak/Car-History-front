import React from 'react';
import "./index.scss";
import { Typography, Row, Col } from 'antd';
const { Title } = Typography;

const GarageTitle= () => {

    return (
      <Row className="garage-title">
          <Col span={8} offset={8}>
            <Title>Garage</Title>
          </Col>
      </Row>
  )
}

export default GarageTitle;