/* eslint-disable indent */
import React from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';

import HasPermissions from '../../../../helpers/HasPermissions';
import { userRoles } from '../../../../constans/userRoles';
import { permissions } from '../../../../constans/rolePermission';

import './index.scss';

const { Title } = Typography;

function HistoryHeader({ setIsModalVisible }) {
  const carBrand = useSelector((state) => state.cars.selectedCar.carBrand?.brand);
  const carModel = useSelector((state) => state.cars.selectedCar.carModel?.model);
  const userRole = useSelector((state) => state.auth.user?.role);
  const userPermissions = useSelector((state) => state.auth.user?.permissions);
  return (
    <div className="history-header-wrapper">
      <Row className="history-header">
        <Col span={10} offset={7}>
          <div className="history-header-content">
            <div className="history-header-item" />
            <div className="history-header-item">
              <Title>
                History {carBrand} {carModel}
              </Title>
            </div>
            <div className="history-header-item">
              <HasPermissions
                role={userRole}
                userPermissions={userPermissions}
                requiredPermission={permissions.histories.create}
                requiredRole={userRoles.css}>
                <Button
                  onClick={() => setIsModalVisible(true)}
                  type="primary"
                  icon={<PlusOutlined />}>
                  Add new history
                </Button>
              </HasPermissions>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HistoryHeader;
