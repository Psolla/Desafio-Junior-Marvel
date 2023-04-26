import React from 'react';
import './body.css';
import Logo from './logo.png';

function Body() {

  return (
  <>
  <body>
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
  </body>
     </> 
   
  )

}
  
export default Body;

 