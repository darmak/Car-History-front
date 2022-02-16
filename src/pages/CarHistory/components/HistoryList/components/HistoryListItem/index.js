import React from 'react';
import "./index.scss";
import { Card, Typography } from 'antd';

const { Title } = Typography;

const HistoryListItem = () => {
    return (
       <>
            <div className="history-list-item-wrapper">
                <div className="history-list-item-data">
                    <span>14/11/1996</span>
                </div>
                <Card title="Author: Dima (buravkin.08@gmail.com)">
                    <div className="history-list-item">
                        <div className="history-list-item-description">
                            <div>
                                <Title level={5}>Repair description: <span>Lorem HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk</span></Title>
                                <Title level={5}>Mileage:<span>200 km</span></Title>
                            </div>
                        </div>
                        <div className="history-list-item-info">
                            <a href="#">More...</a>
                        </div>
                    </div>
                </Card>
            </div>
       </>
  )
}

export default HistoryListItem;