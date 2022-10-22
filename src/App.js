import './App.css';
import axios from "axios";
import {useEffect, useState} from "react"
import Nav from './components/Nav';
import Header from './components/Header';




function App() {
  
  async function getApi() {
    const { data } = await axios
      .get("https://api.rawg.io/api/games?key=55b31f7ac24f4c55aff6499f85e934d8")
      .catch((err) => {
        console.log(err);
      });
    const games = data.results;
    console.log(games);
  }
  
  useEffect(()=>{
    getApi()
  },[])


  return (
    <>
      <Nav/>
      <Header/>
    </>
  );
}

export default App;
