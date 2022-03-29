import React from 'react';
import { Button, Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import './index.scss';

const { Title } = Typography;

function UserListCard() {
  return (
    <>
      <div className="user-list-content__card">
        <div className="user-list-content-title">
          <Title className="user-list-title" level={5}>
            Username
          </Title>
        </div>
        <div className="user-list-content-title user-list-content-right-wrapper">
          <div>
            <Title className="user-list-title" level={5}>
              Email
            </Title>
          </div>
          <div className="user-list-btns">
            <Button type="primary" ghost icon={<EditOutlined />} />
            <Button className="delete-btn" type="primary" danger icon={<DeleteOutlined />} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserListCard;
