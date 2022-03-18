import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Space } from 'antd';
import HistoryListItem from './components/HistoryListItem';
import { carHistories } from '../../../../features/historiesCreator';

import './index.scss';

function HistoryList() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const car = useSelector((state) => state.cars.selectedCar);
  const histories = useSelector((state) => state.histories.histories);

  useEffect(() => {
    setLoading(true);
    dispatch(carHistories({ carId: car.id })).then(() => setLoading(false));
  }, []);

  const elements = histories.map((item) => {
    const { id, ...itemProps } = item;
    return <HistoryListItem {...itemProps} key={id} />;
  });
  return (
    <Row className="history-list">
      <Col span={12} offset={5}>
        {loading ? (
          <Space size="middle">
            <Spin size="large" />
          </Space>
        ) : (
          elements
        )}
      </Col>
    </Row>
  );
}

export default HistoryList;
