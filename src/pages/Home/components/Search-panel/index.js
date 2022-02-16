import React from 'react';
import { Input } from 'antd';
import './index.scss';
import { Row, Col, Typography } from 'antd';

const { Title } = Typography;
const { Search } = Input;

const SearchPanel = () => {
    return (
        <>
         <Row className="row-wrapper">
             <Col span={8} offset={8}>
                <Title className="search-title">Get car history by VIN</Title>
                <Search
                    className="search-place"
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    />
             </Col>
         </Row>
        </>
  )
}

export default SearchPanel;