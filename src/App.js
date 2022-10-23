import './App.css';
import axios from "axios";
import {useEffect, useState} from "react"
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './Pages/Home';
import {Route, Routes} from "react-router-dom"
import Allgames from './Pages/Allgames';
import More from './Pages/More';



function App() {
  const [games, getGames]=useState(null)
  
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
          <Route path="/1"  element={games&&<More games={games}/>}/>

     </Routes>  
      <Footer/>   
</>
  );
}

export default App;


