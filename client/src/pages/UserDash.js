import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import CardList from '../components/evnts/cardList';
import NavbarUser from '../components/Navbar';
import SearchBar from '../components/SearchBar';
const { Header, Content, Sider } = Layout;

const UserDash = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    <NavbarUser/>
    
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
     <SearchBar/>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
          <CardList/>
          </Content>
          </div>
 
    </>
  );
};
export default UserDash;