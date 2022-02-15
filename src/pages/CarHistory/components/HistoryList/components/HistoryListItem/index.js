import React from 'react';
import "./index.scss";
import { Card, Col, Typography } from 'antd';

const { Title } = Typography;

const HistoryListItem = () => {
    return (
       <>
            <Col span={12} offset={6} className="history-list-item-wrapper">
                <Card title="Author: Dima (buravkin.08@gmail.com)">
                    <div className="history-list-item">
                        <div className="history-list-item-description">
                            <div>
                                <Title level={5}>Repair description: <span>Lorem HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk</span></Title>
                                <Title level={5}>Mileage:<span>200 km</span></Title>
                            </div>
                            <div className="history-list-item-data">
                                <Title level={5}>Data: <span>14/11/1996</span></Title>
                            </div>
                        </div>
                        <div className="history-list-item-info">
                            <a href="#">More...</a>
                        </div>
                    </div>
                </Card>
            </Col>
       </>
  )
}

export default HistoryListItem;