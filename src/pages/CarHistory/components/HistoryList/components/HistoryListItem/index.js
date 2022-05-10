import React from 'react';
import { Card, Typography, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { formatDate } from '../../../../../../helpers/formatDate';
import HasPermissions from '../../../../../../helpers/HasPermissions';
import { permissions } from '../../../../../../constans/rolePermission';
import { userRoles } from '../../../../../../constans/userRoles';
import { deleteHistory } from './../../../../../../features/historiesCreator';
import { getCarHistories } from './../../../../../../features/historiesCreator';

import './index.scss';

const { Title } = Typography;

function HistoryListItem({
  author,
  mileage,
  date,
  description,
  id,
  carId,
  setIsModalVisible,
  setIsEditing
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const textDate = formatDate(date);

  const onDeleteHistory = (id) => {
    dispatch(deleteHistory({ id })).then(() => dispatch(getCarHistories({ carId })));
  };

  return (
    <div className="history-list-item-wrapper">
      <div className="history-list-item-data">
        <span>{textDate}</span>
      </div>
      <Card
        className="car-card"
        extra={
          <HasPermissions
            role={user.role}
            userPermissions={user.permissions}
            requiredPermission={permissions.histories.edit}
            requiredRole={userRoles.css}>
            {user.name === author ? (
              <div className="header-btns">
                <div className="header-btns__edit">
                  <Button
                    onClick={() => {
                      setIsModalVisible(true);
                      setIsEditing(true);
                    }}
                    type="primary"
                    ghost
                    icon={<EditOutlined />}
                  />
                </div>
                <div className="header-btns__delete">
                  <Button
                    onClick={() => onDeleteHistory(id)}
                    className="delete-btn"
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                  />
                </div>
              </div>
            ) : null}
          </HasPermissions>
        }
        title={`${author}`}>
        <div className="history-list-item">
          <div className="history-list-item-description">
            <div>
              <Title level={5}>
                Repair description: <span>{description}</span>
              </Title>
              <Title level={5}>
                Mileage:<span> {mileage} km</span>
              </Title>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default HistoryListItem;
