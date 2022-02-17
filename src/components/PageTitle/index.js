import React from 'react';
import "./index.scss";
import { Typography, Row, Col } from 'antd';
const { Title } = Typography;

const PageTitle = ({titleText}) => {

    return (
      <Row className="title">
          <Col span={8} offset={8}>
            <Title>{titleText}</Title>
          </Col>
      </Row>
  )
}

export default PageTitle;