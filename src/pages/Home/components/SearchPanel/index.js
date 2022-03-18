import React from 'react';
import { Input, Row, Col, Typography } from 'antd';
import { debounce } from '../../../../helpers/debounce.js';

import './index.scss';

const { Title } = Typography;
const { Search } = Input;

function SearchPanel({ searchHandler, debounceDelay }) {
  const onChange = debounceDelay ? debounce(searchHandler, debounceDelay) : searchHandler;

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
          onChange={onChange}
        />
      </Col>
    </Row>
  );
}

export default SearchPanel;
