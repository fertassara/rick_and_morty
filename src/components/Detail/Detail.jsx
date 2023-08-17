import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const URL_BASE = 'ttp://localhost:3001/rickandmorty/character/${id}';
const API_KEY_FER= 'key=henrym-fertassara'

const Detail = ()=>{

    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?${API_KEY_FER}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <img src={character.image && character.image} alt="" />
            <h1>Name: "{character.name && character.name}"</h1>
            <h1>Status: "{character.status && character.status}"</h1>
            <h1>Specie: "{character.species && character.species}"</h1>
            <h1>Gender: "{character.gender && character.gender}"</h1>
            <h1>Origins: "{character.origin?.name && character.origin?.name}"</h1>
        </div>
    )
};

export default Detail;