import React from 'react';
import { Button, Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { getAllUsers, deleteUser } from '../../../../../../features/usersCreator';

import './index.scss';

const { Title } = Typography;

function UserListCard({ name, email, id }) {
  const dispatch = useDispatch();

  const onDeleteUser = (id) => {
    dispatch(deleteUser({ id })).then(() => {
      dispatch(getAllUsers());
    });
  };

  return (
    <>
      <div className="user-list-content__card">
        <div className="user-list-content-title">
          <Title className="user-list-title" level={5}>
            {name}
          </Title>
        </div>
        <div className="user-list-content-title user-list-content-right-wrapper">
          <div>
            <Title className="user-list-title" level={5}>
              {email}
            </Title>
          </div>
          <div className="user-list-btns">
            <Button type="primary" ghost icon={<EditOutlined />} />
            <Button
              onClick={() => onDeleteUser(id)}
              className="delete-btn"
              type="primary"
              danger
              icon={<DeleteOutlined />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserListCard;
