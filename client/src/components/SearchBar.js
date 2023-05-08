

import React, { useState } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { filterEvent } from '../app/eventSlice';
const { Header, Content, Sider } = Layout;


const SearchBar = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      const  [value,setValue] = useState('')
      const events = useSelector(state=>state.events)
      const dispatch = useDispatch();
      
      const handelSearch = ()=>{
        dispatch(filterEvent(value))
      }


  return (
    <div>
        <Layout>
     
     <Layout>
       <Sider
         width={200}
       
         style={{
           background: colorBgContainer,
         }}
       >
          <input type="text"  onChange={(e)=>setValue(e.target.value)} />
          <button onClick={()=>handelSearch()}>search</button>
         <Menu
           mode="inline"
           defaultSelectedKeys={['1']}
           defaultOpenKeys={['sub1']}
           style={{
             height: '100%',
             borderRight: 0,
           }}
           
         />
        
       </Sider>
       <Layout
         style={{
           padding: '0 24px 24px',
         }}
       >
         </Layout>
      </Layout>
    </Layout>
    </div>
  )
}

export default SearchBar