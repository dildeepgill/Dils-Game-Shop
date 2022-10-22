import './App.css';
import axios from "axios";
import {useEffect, useState} from "react"
import Nav from './components/Nav';
import Header from './components/Header';
import Reasons from './components/Reasons';
import TopGames from './components/TopGames';


// function App() {
//   let games;
//   async function getApi() {
//     const { data } = await axios   
//       .get("https://api.rawg.io/api/games?key=55b31f7ac24f4c55aff6499f85e934d8")     
//       .catch((err) => {
//         console.log(err);        
//       });     
//   return games = data.results;
    
//   }
  
//   useEffect(()=>{
//     getApi()
    
//   },[])


function App(){
  const [games,getGames]=useState("")
useEffect(() => {
  fetch("https://api.rawg.io/api/games?key=55b31f7ac24f4c55aff6499f85e934d8")
    .then((res) => res.json())
    .then((jsonRes) => {
      getGames(jsonRes.results)
    })
},[])
  return (
    <>
      <Nav/>
      <Header/>
      <Reasons/>
      <TopGames games={games}/>
    </>
  );
}

export default App;
