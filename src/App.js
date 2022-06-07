import React from "react";
import axios from "axios";
import {Route, Routes } from 'react-router-dom'

import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import AppContext from "./context";



function App() {
  // https://60d62397943aa60017768e77.mockapi.io/cart
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(()=>{
      async function fetchData() {

        const cardResponse = await axios.get('https://60d62397943aa60017768e77.mockapi.io/cart');
        const favoritesResponse = await axios.get('https://60d62397943aa60017768e77.mockapi.io/favorites');
        const itemsResponse = await axios.get('https://60d62397943aa60017768e77.mockapi.io/items');

        setIsLoading(false);

        setCartItems(cardResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
        
      }    
      fetchData()
  },[]); 

  const onAddToCart = async (obj) => {
    try{ 
      if (cartItems.find(item => Number(item.id) !== Number(obj.id))){
        axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else{
        axios.post('https://60d62397943aa60017768e77.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj]);
      }


    } catch (error) {
      alert("Не удалось добавить в корзину")
      console.log(error)
    }
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(id) ));
  }

  const onAddToFavorite = async (obj) => {
    try{
      if (favorites.find(favObj => Number(favObj.id) !== Number(obj.id))){
        axios.delete(`https://60d62397943aa60017768e77.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter((item) => Number(item.id) !== Number(obj.id) ));
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };


  return (    
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened}}>
      <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
        <Header onClickCart={() => setCartOpened(true)} />
        
        <Routes>
          <Route path="/" exact element={ 
            <Home  
              items={items} 
              cartItems={cartItems}
              onAddToFavorite={onAddToFavorite} 
              onAddToCart={onAddToCart} 
              onChangeSearchInput={onChangeSearchInput} 
              setSearchValue={setSearchValue} 
              searchValue={searchValue}
              isLoading={isLoading} /> 
          } />
          <Route path="/favorites" exact element={
            <Favorites   /> 
          } />
        </Routes> 
      </div>
    </AppContext.Provider>
  );
}

export default App;
