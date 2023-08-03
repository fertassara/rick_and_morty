import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Forms/Form';
import Favorites from './components/Favorites';
const EMAIL = 'nanotassara@live.com';
const PASSWORD = '123456a';

const URL_BASE = 'https://rickandmortyapi.com/api/character';
const API_KEY_MATY = 'key=henrym-fertassara'


function App() {
  const {pathname} = useLocation();
  const [characters, setCharacters] = useState([]);
   
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  
  
  
  const login = (userData)=> {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
     }
  };

  useEffect(() => {
   !access && navigate('/');
}, [access]);


const onSearch = (id) =>{
   axios(`${URL_BASE}/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
};

const onClose = (id)=>{
   setCharacters(
      characters.filter(char => {
         return char.id !== Number(id)
      })
   )
};

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch}/>}

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>

      </div>
   );
}

export default App;
