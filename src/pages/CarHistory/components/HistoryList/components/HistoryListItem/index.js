import React from 'react';
import { Card, Typography } from 'antd';
import { formatDate } from '../../../../../../helpers/formatDate';

import './index.scss';

const { Title } = Typography;

function HistoryListItem({ author, mileage, date, description }) {
  const textDate = formatDate(date);
  return (
    <div className="history-list-item-wrapper">
      <div className="history-list-item-data">
        <span>{textDate}</span>
      </div>
      <Card className="car-card" title={`${author}`}>
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
        </div>
      </Card>
    </div>
  );
}

export default HistoryListItem;
