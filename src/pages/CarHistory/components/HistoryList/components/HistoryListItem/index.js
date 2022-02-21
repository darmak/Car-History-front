import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Card, Typography } from 'antd';

const { Title } = Typography;

function HistoryListItem({ data }) {
  const { author, mileage, date, description } = data;
  return (
    <div className="history-list-item-wrapper">
      <div className="history-list-item-data">
        <span>{date}</span>
      </div>
      <Card title={`${author}`}>
        <div className="history-list-item">
          <div className="history-list-item-description">
            <div>
              <Title level={5}>
                Repair description: <span>{description}</span>
              </Title>
              <Title level={5}>
                Mileage:<span> {mileage} km</span>
              </Title>
            </div>
          </div>
          <div className="history-list-item-info">
            <Link to="/">More...</Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default HistoryListItem;
