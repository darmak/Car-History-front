import React from 'react';
import './index.scss';
import { Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;

const AboutUsDescription= () => {
    return (
    <Row className="description-wrapper">
      <Col span={12} offset={6}>
        <div>
          <Text>
            The service will allow you to maintain a common database of cars where users can view the history of car maintenance, create a new history element or edit an existing one.
            This will help to avoid fraud when selling a car, such as fraud with mileage, since the history will show when and at what mileage the service was performed.
            It will also help the owner of the car to keep a record of those services and in the future to predict a breakdown or the time of the next service.
          </Text>
        </div>
        <div className="description-links">
          <img src="../../../../assets/socialNetworks/vk2.png" alt="VK"/>
          <img src="../../../../assets/socialNetworks/instagram.png" alt="Instagram"/>
          <img src="../../../../assets/socialNetworks/facebook.png" alt="Facebook"/>
        </div>
        <div className="contact-us">
          <Title level={3}>Contact us</Title>
        </div>
      </Col>  
    </Row>
  )
}

export default AboutUsDescription;

