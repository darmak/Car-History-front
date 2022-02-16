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
            Сервис позволит вести общую базу автомобилей где пользователи смогут просмотреть историю технического обслуживания автомобиля, создать новый элемент истории или отредактировать имеющийся.
            Это поможет избежать обмана при продаже автомобиля, например махинации с пробегом, так как в истории будет видно когда и на каком пробеге производилось обслуживание. 
            Также поможет владельцу автомобиля вести учет тех обслуживания и в дальнейшем предсказать поломку или время следующего обслуживания.
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

