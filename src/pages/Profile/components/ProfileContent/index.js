import React, { useState } from 'react';
import './index.scss';
import { Row, Col, Button, Typography, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title } = Typography;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

function ProfileContent() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageURL) => {
        setLoading(false);
        setImageUrl(imageURL);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Row className="profile-wrapper">
        <Col span={11} className="profile-avatar">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader profile-avatar-img"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}>
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Col>
        <Col span={11}>
          <Title level={4}>
            Username: <span>Dima</span>
          </Title>
          <Title level={4}>
            Email: <span>Buravkin.08@gmail.com</span>
          </Title>
          <Title level={4}>
            Total cars: <span>4</span>
          </Title>
          <Title level={4}>
            Total services: <span>24</span>
          </Title>
          <Title level={4}>
            Total price: <span>3540</span> $
          </Title>
        </Col>
      </Row>
      <div className="profile-btn-wrapper">
        <Link to="/garage">
          <Button type="primary" icon={<PlusOutlined />}>
            Add new car
          </Button>
        </Link>
      </div>
    </>
  );
}

export default ProfileContent;
