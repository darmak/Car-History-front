import React from 'react';
import { Typography, Row } from 'antd';
import { useSelector } from 'react-redux';

import './index.scss';

const { Title } = Typography;

function HistoryHeader() {
  const car = useSelector((state) => state.cars.selectedCar);
  return (
    <div className="history-header-wrapper">
      <Row className="history-header">
        <Title>
          History {car.brand} {car.model}
        </Title>
      </Row>
    </div>
  );
}

export default HistoryHeader;
