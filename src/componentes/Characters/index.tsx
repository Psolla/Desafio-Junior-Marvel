import React, { useCallback, useEffect, useState} from 'react'
import ApiM from '../../services/apimarvel'
import { Card, CardList, Container, ButtonMore } from './styles'
import Avatar3 from '../../Assets/spidermanavatar.png'

// Caminho da API 
interface ResponseData{
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}

//Construção dos Personagens da Marvel
const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<ResponseData[]>([]);

    // Toda vez que carregar a página ele vai carregar os personagens
    useEffect(() => {
        ApiM
        .get('/characters')
        .then(response =>{
             setCharacters(response.data.data.results)
        })
        .catch(err => console.log(err));
    }, []);

    const handleMore = useCallback(async() => {
        try {
            const offset = characters.length;
            const response = await ApiM.get('characters', {
                params: {
                    offset: offset,
                },
            });

            setCharacters([...characters, ...response.data.data.results]);
            } catch (err) {
            console.log(err);
        }
    }, [characters])

    // Mostrar os personagens da Marvel na tela
    return (
    <Container>
        <div className='cards3'><img className='avatars3' src={Avatar3} alt=''></img>
  <p className='guide3'>Parabéns, você seguiu todos os passos corretamente, acho que agora você provou que é capaz e está hapto para ver nossos outros heróis secretos.
    Mas Atenção! Caso essas informações sejam revelados eu mesme irei atrás de você.</p>
   </div> <h1 className="headerherois">Personagens Marvel</h1>
       <CardList>
            {characters.map(character => {
                return (
                    <Card key={character.id} thumbnail={character.thumbnail}>
                       <div id="img" />
                       <h2>{character.name}</h2>
                       <p>{character.description}</p>
                    </Card>
                )
            })}
       </CardList>  
       <ButtonMore onClick={handleMore}>
        Mais
       </ButtonMore>
    </Container>
    )
};

export default Characters
