import React from 'react';
import './assets/styles/index.scss';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import PageHeader from './components/PageHeader';

const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="wrapper">
        <Header className="page-header">
          <PageHeader />
        </Header>
        <Content>
          <Router />
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
