import React from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";



function App() {
  // https://60d62397943aa60017768e77.mockapi.io/cart
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(()=>{
    fetch('https://60d62397943aa60017768e77.mockapi.io/items').then(
      res => {
        return res.json();
      }). then( json => {
        setItems(json);
      })
  },[]); 

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  console.log(cartItems);

  return (    
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 >Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={18} height={18} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
        { items.map( item => (
          <Card
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={() => console.log('favorite')}
          />
        ))}


        </div>
      </div>

    </div>
  );
}

export default App;
