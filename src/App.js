import './App.css';
import axios from "axios";
import {useEffect, useState} from "react"
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './Pages/Home';
import {Route, Routes} from "react-router-dom"
import Allgames from './Pages/Allgames';
import More from './Pages/More';
import Cart from './Pages/Cart';



function App() {
  const [games, getGames]=useState(null)
  const [cart, setCart]= useState([])
  
  function add(singleGames){
    
    setCart( (prevState) => [...prevState, singleGames]) 
    const filtered = cart.map(({metacritic}) => metacritic)
    console.log(filtered)
  }
  

  function sub(){
  
  }
  
  useEffect(() =>{
axios
  .get("https://api.rawg.io/api/games?key=57d57c4f17ab4eb6be853b6c81c89343")
  .then((res)=>{
    getGames(res.data.results)
  }).catch((error)=>{
    console.log(error)
  })
},[])


  return (
    <>
   <Nav/>
      <Routes>             
          <Route path="/" exact element= {games&&<Home games={games} />}/>
          <Route path="/Allgames"  element={games&&<Allgames games={games}/>}/>
          <Route path="/games/:id"  element={games&&<More games={games} add={add}/>}/>
          <Route path="/games/cart"  element={games&&<Cart games={games} cart={cart}/> }/>
     </Routes>  
      <Footer/>   
</>
  );
}

export default App;


