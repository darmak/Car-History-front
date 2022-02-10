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

{/* <div className="search-panel">
<div className="search-panel-title">
    <h2>Get car history by VIN</h2>
</div>
<div className="search-panel-place">
    <input className="search-input" type="text" placeholder='4F2YU08102KM26251'/>
    <button className="search-button">Check car</button>
</div>
</div>  */}

export default SearchPanel;