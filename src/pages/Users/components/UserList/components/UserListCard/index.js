import React, { useState } from 'react';
import { Button, Typography, Input } from 'antd';
import { DeleteOutlined, EditOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { getAllUsers, deleteUser, editUser } from '../../../../../../features/usersCreator';

import './index.scss';

const { Title } = Typography;

function UserListCard({ name, email, role, id }) {
  const dispatch = useDispatch();

  const [isEdited, setIsEdited] = useState(false);
  const [user, setUser] = useState({ name, email });

  const onDeleteUser = (id) => {
    dispatch(deleteUser({ id })).then(() => {
      dispatch(getAllUsers());
    });
  };

  const onEditUser = (id, name, email) => {
    dispatch(editUser({ id, name, email })).then(() => {
      dispatch(getAllUsers());
    });
  };

  return (
    <>
      <div className="user-list-content__card">
        <div className="user-list-content-title">
          <div className="user-list-content-wrapper">
            {isEdited ? (
              <Input
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                size="middle"
                className="edit-input"
                value={user.name}
                placeholder="Change name"
              />
            ) : (
              <Title className="user-list-title" level={5}>
                {user.name}
              </Title>
            )}
          </div>
        </div>

        <div className="user-list-content-title user-list-content-right-wrapper">
          <div className="user-list-content-wrapper">
            {isEdited ? (
              <Input
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
                size="middle"
                className="edit-input"
                value={user.email}
                placeholder="Change email"
              />
            ) : (
              <Title className="user-list-title" level={5}>
                {user.email}
              </Title>
            )}
          </div>
        </div>

        <div className="user-list-content-title user-list-content-right-wrapper">
          <div>
            <Title className="user-list-title" level={5}>
              {role}
            </Title>
          </div>
          <div className="user-list-btns">
            {isEdited ? (
              <>
                <Button
                  onClick={() => {
                    setIsEdited(false);
                    if (user.name != name || user.email != email) {
                      onEditUser(id, user.name, user.email);
                    }
                  }}
                  type="primary"
                  ghost
                  icon={<CheckOutlined />}
                />
                <Button
                  onClick={() => {
                    setUser({ name, email });
                    setIsEdited(false);
                  }}
                  className="cancel-btn"
                  type="primary"
                  ghost
                  icon={<CloseOutlined />}
                />
              </>
            ) : (
              <Button
                onClick={() => {
                  setIsEdited(true);
                  setUser({ name, email });
                }}
                type="primary"
                ghost
                icon={<EditOutlined />}
              />
            )}

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
