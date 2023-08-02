import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav,removeFav } from '../../Redux/action';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';



 const Card = ({id, name, status,species, gender, origin, image,onClose, addFav, removeFav, myFavorites }) =>{

   const [isFav, setFavs] = useState(false);

   const handleFavorite = ()=>{
      // if(isFav){
         // removeFav(id)
      // } else {
         // addFav({id, name, status,species, gender, origin, image, onClose}
      // }
      isFav ? removeFav(id) : addFav({id, name, status,species, gender, origin, image, onClose})

      setFavs(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFavs(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.div}>
         {
         isFav ? (<button onClick={handleFavorite}>❤️</button>) 
         : (<button onClick={handleFavorite}>🤍</button>)
         }


         <button className={style.btn} onClick={()=> onClose(id)} >X</button>
         <img className={style.image} src={image} alt={name} />

        <Link to={`/detail/${id}/`}>
            <h4 className={style.name}>{name}</h4>
        </Link>

         <div className={style.data}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            {/* <h2>Status: {status}</h2> */}
            {/* <h2>Origin: {origin}</h2> */}
         </div>
      </div>
   );
};

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character)=> dispatch(addFav(character)),
      removeFav: (id)=> dispatch(removeFav(id))
   }
};

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)