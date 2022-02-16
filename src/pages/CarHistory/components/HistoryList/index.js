import React from 'react';
import "./index.scss";
import { Row, Col } from 'antd';
import HistoryListItem from './components/HistoryListItem';

const HistoryList = () => {
    return (
       <>
            <Row className="history-list">
                <Col span={12} offset={5}> 
                    <HistoryListItem/>
                    <HistoryListItem/>
                    <HistoryListItem/>
                    <HistoryListItem/>
                </Col>
            </Row>
       </>
  )
}

export default HistoryList;