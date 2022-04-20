/* eslint-disable indent */
import React from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';

import { userRoles } from '../../../../constans/userRoles';
import { permissions } from '../../../../constans/rolePermission';

import './index.scss';

const { Title } = Typography;

function HistoryHeader() {
  const car = useSelector((state) => state.cars.selectedCar);
  const user = useSelector((state) => state.users.user);
  const userWithPermission = useSelector((state) => state.auth.user);
  return (
    <div className="history-header-wrapper">
      <Row className="history-header">
        <Col span={10} offset={7}>
          <div className="history-header-content">
            <div className="history-header-item" />
            <div className="history-header-item">
              <Title>
                History {car.brand} {car.model}
              </Title>
            </div>
            <div className="history-header-item">
              {userWithPermission &&
              user.role === userRoles.css &&
              userWithPermission.permissions.includes(permissions.histories.create) ? (
                <Button type="primary" icon={<PlusOutlined />}>
                  Add new history
                </Button>
              ) : null}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HistoryHeader;
