import styles from './SearchBar.module.css';
import { useState } from "react";

const SearchBar = ({onSearch}) =>{

   const [id, setId] = useState('');

   const handleChange = (event)=>{
      setId(event.target.value)
   };

   return (
      <div className={styles.div}>
         <input className={styles.input} type='search' value={id} onChange={handleChange}/> 
         <button className={styles.btn} onClick={ ()=> onSearch(id)}>Agregar</button>
      </div>
   );
}

export default SearchBar
