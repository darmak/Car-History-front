import React from 'react';
import "./index.scss";
import { Typography, Row, Col } from 'antd';
const { Title } = Typography;

const RegistrationTitle= () => {

    return (
      <Row className="registration-title">
          <Col span={8} offset={8}>
            <Title>Sign Up</Title>
          </Col>
      </Row>
  )
}

export default RegistrationTitle;