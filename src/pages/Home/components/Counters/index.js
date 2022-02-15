import React from 'react';
import './index.scss';
import { Typography } from 'antd';

const { Title } = Typography;

const Counters = () => {
    return (
        <div className="counters-wrapper">
            <div className="car-counts">
                <div>
                    <Title className="count-description">Car counts:</Title>
                </div>
                <div className="count-value-wrapper">
                    <Title className="count-value">1225</Title>
                </div>
            </div>
            <div className="car-counts">
                <div>
                    <Title className="count-description">STO:</Title>
                </div>
                <div className="count-value-wrapper">
                    <Title className="count-value">wewe</Title>
                </div>
            </div>
        </div>
  )
}

export default Counters;