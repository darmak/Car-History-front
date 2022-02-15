import React from 'react';
import "./index.scss";
import { Typography, Row, Col } from 'antd';
const { Title } = Typography;

const AboutUsTitle= () => {
    return (
    <Row className="about-us-title">
        <Col span={8} offset={8}>
            <Title>About Us</Title>
        </Col>
    </Row>
  )
}

export default AboutUsTitle;