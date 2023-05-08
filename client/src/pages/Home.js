import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import CardList from '../components/evnts/cardList';
import NavbarUser from '../components/Navbar';
import SearchBar from '../components/SearchBar';
const { Header, Content, Sider } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    <NavbarUser/>
    
    <div style={{display:"flex",border:"1px solid red",flexWrap:"wrap"}}>
    {/* <SearchBar/> */}
   
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
export default Home;