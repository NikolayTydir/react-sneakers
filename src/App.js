import React from "react";
import axios from "axios";
import {Route, Routes } from 'react-router-dom'

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";



function App() {
  // https://60d62397943aa60017768e77.mockapi.io/cart
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(()=>{

      axios.get('https://60d62397943aa60017768e77.mockapi.io/items').then((res) =>{
        setItems(res.data)
      })
      axios.get('https://60d62397943aa60017768e77.mockapi.io/cart').then((res) =>{
        setCartItems(res.data)
      })
      axios.get('https://60d62397943aa60017768e77.mockapi.io/favorites').then((res) =>{
        setFavorites(res.data)
      })
  },[]); 

  const onAddToCart = (obj) => {
    axios.post('https://60d62397943aa60017768e77.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj]);
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter((item) => item.id !== id ));
  }

  const onAddToFavorite = async (obj) => {
    try{
      if (favorites.find(favObj => favObj.id !== obj.id)){
        axios.delete(`https://60d62397943aa60017768e77.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter((item) => item.id !== obj.id ));
      } else {
        const {data} = await axios.post('https://60d62397943aa60017768e77.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты")
      console.log(error)
    }

  } 


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }




  return (    
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      
      <Routes>
        <Route path="/" exact element={ <Home  items={items} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} onChangeSearchInput={onChangeSearchInput} setSearchValue={setSearchValue} searchValue={searchValue}/> } />
        <Route path="/favorites" exact element={<Favorites onChangeSearchInput={onChangeSearchInput} setSearchValue={setSearchValue} searchValue={searchValue} onAddToFavorite={onAddToFavorite} items={items} /> } />
      </Routes>

      
      

    </div>
  );
}

export default App;
