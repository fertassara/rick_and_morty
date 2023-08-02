import {connect} from 'react-redux';
import Card from './Card/Card';

const Favorites = ({myFavorites})=>{
    return(
        <div>
            <h1>Mis favoritos!</h1>
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
            }
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
        myFavorites: state.myFavorites
    }
};


 export default connect(mapStateToProps, null)(Favorites)