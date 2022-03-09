import React from 'react';
import { Input, Row, Col, Typography } from 'antd';
import './index.scss';

const { Title } = Typography;
const { Search } = Input;

function SearchPanel({ setClickSearch }) {
  const searchHandler = () => {
    console.log('request search');
    setClickSearch(true);
  };

  return (
    <Row className="row-wrapper">
      <Col span={8} offset={8}>
        <Title className="search-title">Get car history by VIN</Title>
        <Search
          className="search-place"
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={searchHandler}
        />
      </Col>
    </Row>
  );
}

export default SearchPanel;
