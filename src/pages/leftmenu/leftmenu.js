import { Menu, } from 'antd';
import React, { Component } from 'react';
import { Link } from "mirrorx";
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

import './leftmenu.less';
const { SubMenu } = Menu;
class Leftmenu extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
      <Menu defaultSelectedKeys={['mypage']} mode="inline"  >
        <SubMenu key="mypage" icon={<MailOutlined />} title="mytest">
          <Menu.Item key="mediums" icon={<ContainerOutlined />}>
            < Link to="/mypage/mediums" >mytest</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>


    );
  }
}
export default Leftmenu;