import React from 'react';
import { Layout,  } from 'antd';
import Body from './componentes/body/body'
import md5 from 'md5';
import 'antd/'
import Menuu from './componentes/Menu/menu'

//Construção da chave api da marvel
const publicKey = 'dc0441059758adc6d42430dda0f7388f';
const privateKey = 'd2e2416373ce01f2b6c4387ecc482d38067b6b83';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);


const App: React.FC = () => {

 
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=20`,
    )
      .then((response) => {
        return response.json();
      }).then((jsonParsed) => {
        console.log(jsonParsed);
  })

//Construção do Layout e do Footer
  const { Content, Footer } = Layout;

 

  return (
    
    <Layout>
      <Menuu />
      <Content className="site-layout" style={{ padding: '0 0px' }}>
        <div style={{ minHeight: 1600, background: '#131516' }}><Body /></div>
      </Content>
      <Footer style={{ textAlign: 'center',  background: '#0F1111', color: '#fff', fontFamily: 'poppins'  }}>Designed by Pedro Solla</Footer>
    </Layout>
  );
};

export default App;