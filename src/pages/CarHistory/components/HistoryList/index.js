import React from 'react';
import "./index.scss";
import { Row } from 'antd';
import HistoryListItem from './components/HistoryListItem';

const HistoryList = () => {
    return (
       <>
            <Row className="history-list">
                <HistoryListItem/>
                <HistoryListItem/>
                <HistoryListItem/>
                <HistoryListItem/>
            </Row>
       </>
  )
}

export default HistoryList;