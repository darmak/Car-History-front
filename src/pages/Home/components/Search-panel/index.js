import React from 'react';
import { Input } from 'antd';
import './index.css';
import { Row, Col } from 'antd';

const { Search } = Input;

const SearchPanel = () => {
    return (
        <>
         <Row>
             <Col span={8} offset={8}>
             <Search
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