import './App.css';
import axios from "axios";
import {useEffect, useState} from "react"
import Nav from './components/Nav';
import Header from './components/Header';
import Reasons from './components/Reasons';
import TopGames from './components/TopGames';
import Moregames from './components/Moregames';
import Discountedgames from './components/Discountedgames';
import Footer from './components/Footer';



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
      <Header/>
      <Reasons/> 
       {games&&<TopGames games={games} />}
       {games&&<Discountedgames games={games} />}
       <Moregames/>
       <Footer/>
       
    </>
  );
}

export default App;


