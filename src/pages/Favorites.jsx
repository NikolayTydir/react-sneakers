import React from "react";
import Card from "../components/Card/Card";


function Favorites ({items, onAddToFavorite, searchValue, setSearchValue, onChangeSearchInput}) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
            <h1 >{ searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
            <div className="search-block d-flex align-center">
                <img width={18} height={18} src="/img/search.svg" alt="search" />
                {searchValue &&  <img onClick={()=> setSearchValue('')} className="clear cu-p"  src="/img/btn-remove.svg" alt="img" />}
                <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
            </div>
            </div>

            <div className="d-flex flex-wrap">
            { items.map( (item, index) => (
                <Card
                key={index}
                
                favorited={true}
                onAddToFavorite={onAddToFavorite}
                {...item}
                />
            ))}
            </div>
        </div>

    )
}

export default Favorites;