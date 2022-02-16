import React from 'react';
import "./index.scss";
import { Typography } from 'antd';
import { Row } from 'antd';


const { Title } = Typography;

const HistoryHeader = () => {
    return (
        <div className="history-header-wrapper">
            <Row className="history-header">
                <Title>History BMW E38</Title>
            </Row>
        </div>
  )
}

export default HistoryHeader;