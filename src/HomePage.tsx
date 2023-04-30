import React from 'react';
import { Layout,  } from 'antd';
import Body from './componentes/body/body'
import 'antd/'
import Menuu from './componentes/Menu/menu'
import { useAuth } from './context/AuthProvider/useAuth';
import ApiMarvel from './componentes/apimarvel';


const Homepage: React.FC = () => {

  const auth = useAuth ()
//Construção do Layout e do Footer
  const { Content, Footer } = Layout;

 const islogged = auth.token

  return (
    
    <Layout>
      <Menuu />
      <Content className="site-layout" style={{ padding: '0 0px' }}>
        <div style={{ minHeight: 1600, background: '#131516' }}><Body><div>{islogged?<ApiMarvel />:null}</div></Body></div>
      </Content>
      <Footer style={{ textAlign: 'center',  background: '#0F1111', color: '#fff', fontFamily: 'poppins'  }}>Designed by Pedro Solla</Footer>
    </Layout>
  );
};

export default Homepage;