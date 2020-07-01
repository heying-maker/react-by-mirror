import React from 'react';
import { Router, Route } from "mirrorx";
import './App.css';
import Leftmenu from './pages/leftmenu/leftmenu';
import PAGE from './pages/content/router';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
  const App = () => (

      <Router>
        <Layout>
          <Header>
            <div className="logo" />
            <h2>my test for react</h2>
          </Header>
          <Content>
            <div className="appLeft">
              <Leftmenu />
            </div>
            <div className="appContent">
              {/* {process.env.NODE_ENV == 'development' && <Route exact path="*" component={Layout} />} */}
              <Route path='/mypage' component={PAGE}></Route>
            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Marker ©2019 Created by Poldi Chen.</Footer>
        </Layout>
      </Router>
    )

export default App;
