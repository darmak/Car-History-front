import React from 'react';
import { Row, Col, Typography } from 'antd';
import UserListCard from './components/UserListCard';

import './index.scss';

const { Title } = Typography;

function UserList() {
  return (
    <div className="user-list-wrapper">
      <Row>
        <Col span={12} offset={6}>
          <div className="user-list">
            <div className="user-list-header">
              <div className="user-list-header-left user-list-header__item">
                <div className="user-list-header__name">
                  <Title className="user-list-title" level={5}>
                    Username
                  </Title>
                </div>
              </div>
              <div className="user-list-header-right user-list-header__item">
                <div className="user-list-header__mail">
                  <Title className="user-list-title" level={5}>
                    Email
                  </Title>
                </div>
              </div>
            </div>
            <div className="user-list-content">
              <UserListCard />
              <UserListCard />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UserList;
