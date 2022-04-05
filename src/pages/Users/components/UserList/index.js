import React, { useState, useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import UserListCard from './components/UserListCard';
import Spinner from '../../../../components/Spinner';
import { getAllUsers } from '../../../../features/usersCreator.js';

import './index.scss';

const { Title } = Typography;

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getAllUsers()).then(() => setLoading(false));
  }, []);

  const elements = users.map((item) => {
    return <UserListCard {...item} id={item.id} key={item.id} />;
  });
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
            <div className="user-list-content">{loading ? <Spinner /> : elements}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UserList;
