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
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()
  
  function add(singleGames){
    setCart([...cart,{...singleGames, amount:1}])
    
  }
  function amountChanged(game, amount){
    setCart(cart.map(singleGames =>{
      if(singleGames.id===game.id){
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
      num+= price.amount
    }
    return num
  }

  function remove(id) {
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
          <Route path="/"  element= {games&&<Home games={games} executeScroll={executeScroll} myRef={myRef}/>}/>
          <Route path="/Allgames"  element={games&&<Allgames games={games} />}/>
          <Route path="/games/:id"  element={games&&<More games={games}  add={add}/>}/>
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


