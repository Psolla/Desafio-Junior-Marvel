import React from 'react';
import './body.css';
import Logo from '../../Assets/logo.png';
import Avatar1 from '../../Assets/spiderman3.png';
import Avatar2 from '../../Assets/spidermanavatar2.png'

function Body(props:{children:React.ReactNode}) {

  return (
  <>
  <div>
  <div className='Welcome'>
    <img className='Logo' src={Logo}></img>
  </div> 

  <div className='Texto'>
      <p>Crie sua conta e descubra<br></br> novos personagens da <b>Marvel</b></p>
    </div>

  <div className='Banner'></div>

  <div className='Final'>
    <h2 className='Titlefinal'>Conheça um pouco mais sobre o projeto</h2>
  </div>
  <div className='cards'>
  <img className='avatars' src={Avatar1} alt=''></img>
  <p className='guide'>Olá, eu sou o Homem Aranha e hoje vou te ensinar
  a como criar uma conta e conhecer nossos outros Heróis da Marvel, através de
  uma API</p>
  </div>
  <div className='cards2'>
 
  <p className='guide2'>Primeiramente você terá que criar uma conta, basta clicar no avatar
  na parte do menu e selecionar a opção "Criar uma conta". Após a criação de conta
  é só fazer o login e você irá conseguir ver os nossos outros Heróis.</p>
   <img className='avatars2' src={Avatar2} alt=''></img>
  </div>
    {props.children}
  </div>
     </> 
   
  )

}
  
export default Body;

 