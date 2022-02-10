import React from 'react';
import './assets/styles/index.less';
import Router from './router/index.js';
import PageHeader from './components/PageHeader/index.js';
import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom";
const { Header, Content } = Layout;

const App = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Header className='page-header'>
            <PageHeader/>
          </Header>
          <Content>
            <Router/>
          </Content>
      </Layout>
      </BrowserRouter>
      
  )
}

export default App;