import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const URL_BASE = 'https://rym2-production.up.railway.app/api/character';
const API_KEY_MATY = 'key=henrym-hx-mantunez'

const Detail = ()=>{

    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?${API_KEY_MATY}`)
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