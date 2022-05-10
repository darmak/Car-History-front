import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import HistoryListItem from './components/HistoryListItem';
import { getCarHistories } from '../../../../features/historiesCreator';
import Spinner from '../../../../components/Spinner';

import './index.scss';

function HistoryList({ setIsModalVisible, setIsEditing, carId }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const histories = useSelector((state) => state.histories.histories);

  useEffect(() => {
    setLoading(true);
    dispatch(getCarHistories({ carId })).then(() => setLoading(false));
  }, []);

  const elements = histories.map((item) => {
    return (
      <HistoryListItem
        setIsModalVisible={setIsModalVisible}
        setIsEditing={setIsEditing}
        {...item}
        key={item.id}
        carId={carId}
      />
    );
  });
  return (
    <Row className="history-list">
      <Col span={12} offset={5}>
        {loading ? <Spinner /> : elements}
      </Col>
    </Row>
  );
}

export default HistoryList;
