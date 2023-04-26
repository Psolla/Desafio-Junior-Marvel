import React, { useState } from 'react';
import { MenuProps, } from 'antd';
import { Menu } from 'antd';
import Avatares from '../Avatares/avatares';


const items: MenuProps['items'] = [
    
  {
    label: (
      <a className='Menufont' href="#"  rel="noopener noreferrer">
      Home Marvel
      </a>
    ),
    key: 'mail',
    
  },

  {
    label: '',
    key: 'SubMenu',
    icon: <Avatares />,
    children: [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: (
              <a href="#"  rel="noopener noreferrer">
              Fazer Login
              </a>
            ),
            key: 'setting:1', 
          },
          {
            label: (
              <a href="#"  rel="noopener noreferrer">
              Criar uma Conta
              </a>
            ),
            key: 'setting:2',
          },
        ],  
      },
     
        ],
      },
    ];
    
  

const Menuu: React.FC = () => {
    
  const [current, setCurrent,] = useState('mail');
  

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu style={{padding: '8px', }}  theme={'dark'} onClick={onClick}  mode="horizontal" items={items} />;
};

export default Menuu;