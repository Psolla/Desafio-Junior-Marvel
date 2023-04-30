import React from 'react'
import md5 from 'md5';


//Construção da chave api da marvel
const publicKey = 'dc0441059758adc6d42430dda0f7388f';
const privateKey = 'd2e2416373ce01f2b6c4387ecc482d38067b6b83';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

   

  const ApiMarvel = () => {
    
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=20`,
    )
      .then((response) => {
        return response.json();
      }).then((jsonParsed) => {
        console.log(jsonParsed);
  })
    return(
      <h2>Api da MaRVEL</h2>
    )
  }
  
export default ApiMarvel