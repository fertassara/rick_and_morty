import {connect} from 'react-redux';
import Card from './Card/Card';
import { filterCards,orderCards } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import style from './Favorites.module.css'

const Favorites = ({myFavorites})=>{
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value));
        setAux(!aux)
    };

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    };

    return(
        <div classname = {style.containerfav}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Desendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            <h1>Mis favoritos!</h1>
            <div className={style.divfav}>
            {
                myFavorites.length && 
                myFavorites.map(({id, name,status, species,origin,image,gender, onClose})=>{
                    return (
                        <Card
                        key={id}
                        id={id}
                        name= {name}
                        status={status}
                        species={species}
                        origin={origin}
                        image={image}
                        gender={gender}
                        onClose={onClose}
                        />
                    )
                })
            }</div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
        myFavorites: state.myFavorites
    }
};


 export default connect(mapStateToProps, null)(Favorites)