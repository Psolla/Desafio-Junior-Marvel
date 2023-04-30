import React, { useState } from 'react';
import { MenuProps, } from 'antd';
import { Menu } from 'antd';
import Avatares from '../Avatares/avatares';
import { useNavigate } from 'react-router-dom';

const Navegator = (props: {path: string; title: string}) => {
  const navegate = useNavigate () 
  return (
    <div onClick={ () => navegate(props.path,{replace: true})}>
      {props.title}
    </div>
  )
}

const items: MenuProps['items'] = [   
  {
    label:<Navegator path="/" title='Home Marvel'/>,
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
            label: <Navegator path="/login" title='Fazer Login'/>,
            key: 'setting:1', 
          },
          {
            label: <Navegator path="/signup" title='Criar Conta'/>,
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