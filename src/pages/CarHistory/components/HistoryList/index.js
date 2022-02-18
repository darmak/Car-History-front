import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./index.scss";
import { Row, Col } from 'antd';
import HistoryListItem from './components/HistoryListItem';

const HistoryList = () => {
    const histories = useSelector((state) => state.car.history);

    const elements = histories.map(item => {
        const {_id, ...itemProps} = item;
        return <HistoryListItem _id={_id} {...itemProps} key={_id}/>
    })
    return (
       <>
            <Row className="history-list">
                <Col span={12} offset={5}> 
                    {elements}
                </Col>
            </Row>
       </>
  )
}

export default HistoryList;