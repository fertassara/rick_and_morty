import Card from '../Card/Card';
import style from './Cards.module.css';

 const Cards = ({characters, onClose})=> {
   return(
      <div className={style.div}>
        {
         characters.map(({id,name,species,gender,image,status,origin})=>{
            return <Card
            id={id}
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            status={status}
            origin={origin.name}
            onClose={onClose}
            />
         })
        }

      </div>
   )
};

export default Cards;