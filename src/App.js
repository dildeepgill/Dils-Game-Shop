import './App.css';
import axios from "axios";
import {useEffect, useState, useRef} from "react"
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './Pages/Home';
import {Route, Routes} from "react-router-dom"
import Allgames from './Pages/Allgames';
import More from './Pages/More';
import Cart from './Pages/Cart';
import Loading from './reuseable/Loading';



function App() {
  const [games, getGames]=useState(null)
  const [cart, setCart]= useState([])
  const scroll = useRef();
  
  function add(singleGames){
    setCart([...cart,{...singleGames, amount:1}])
    // cart is array of Objects that we spread 
    // singleGames is 1 object of game that we clicked and spread all properties 
  }
  
  function amountChanged(game, amount){
    // game is single object with properties                

    setCart(cart.map(singleGames =>{
          // singleGames is 1 object of game that we clicked and spread all properties 
      if(singleGames.id===game.id){
        // single game is on more page
        // game is in cart 
        return{
          ...game,
          amount: parseInt(amount),
        }
      }
      else {
        return singleGames
      }
    }))
  }

  function itemsInCart(){
    let num=0
    for (let price of cart) {
      console.log(price)
      num+= price.amount
    }
    return num
  }

  function remove(id) {
   console.log(id)
   setCart(cart.filter(same => !(same.id ===id)))
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
   <Nav itemsInCart={itemsInCart()}/>
   {games?
   
   <><Routes>
          <Route path="/"  element= {games&&<Home games={games} />}/>
          <Route path="/Allgames"  element={games&&<Allgames games={games} scroll={scroll}/>}/>
          <Route path="/games/:id"  element={games&&<More games={games} add={add}/>}/>
          <Route path="/games/cart"  element={games&&<Cart games={games} amountChanged={amountChanged} cart={cart} remove={remove}/> }/>
     </Routes> 
     </>: 
     <Loading/>



  }
      <Footer/>   
</>
  );
}

export default App;


