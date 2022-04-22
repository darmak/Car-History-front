import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import HasPermissions from '../../../../helpers/HasPermissions';
import { permissions } from '../../../../constans/rolePermission';
import { userRoles } from '../../../../constans/userRoles';

import './index.scss';

const { Title } = Typography;

function GarageTitleWithBtn({ setIsModalVisible }) {
  const user = useSelector((state) => state.auth.user);
  return (
    <Row className="title-wrapper">
      <Col span={10} offset={7}>
        <div className="title-content">
          <div className="title-content-item" />
          <div className="title-content-item">
            <Title className="title-content_text">Garage</Title>
          </div>
          <div className="title-content-item">
            <HasPermissions
              role={user.role}
              userPermissions={user.permissions}
              requiredPermission={permissions.cars.create}
              requiredRole={userRoles.standart}>
              <Button
                onClick={() => setIsModalVisible(true)}
                type="primary"
                icon={<PlusOutlined />}>
                Add new car
              </Button>
            </HasPermissions>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default GarageTitleWithBtn;
