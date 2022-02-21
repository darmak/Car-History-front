import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import { Row, Col } from 'antd';
import HistoryListItem from './components/HistoryListItem';

function HistoryList() {
  const histories = useSelector((state) => state.history.history);

  const elements = histories.map((item) => {
    const { _id, ...itemProps } = item;
    return <HistoryListItem data={itemProps} key={_id} />;
  });
  return (
    <Row className="history-list">
      <Col span={12} offset={5}>
        {elements}
      </Col>
    </Row>
  );
}

export default HistoryList;
