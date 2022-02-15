import React from 'react';
import "./index.scss";
import { Typography, Row, Col } from 'antd';
const { Title } = Typography;

const AuthorizationTitle= () => {

    return (
      <Row className="authorization-title">
          <Col span={8} offset={8}>
            <Title>Sign In</Title>
          </Col>
      </Row>
  )
}

export default AuthorizationTitle;