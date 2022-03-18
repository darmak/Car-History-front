import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Card, Typography } from 'antd';

const { Title } = Typography;

function HistoryListItem({ author, mileage, date, description }) {
  const currentDate = new Date(date);
  console.log(currentDate);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const textDate = `${day}.${month + 1}.${year}`;
  return (
    <div className="history-list-item-wrapper">
      <div className="history-list-item-data">
        <span>{textDate}</span>
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
