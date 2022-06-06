function Drawer({onClose, onRemoveItem, items = []}) {
    return(
        <div  className="overlay">
            <div className="drawer">
            <h2 className="mb-30 justify-between d-flex">Корзина <img className="cu-p" onClick={onClose}  src="/img/btn-remove.svg" alt="img" /></h2>


            {
                items.length > 0 
                ?   ( <div>
                        <div className="items">
                            {items.map(obj=>(
                                <div className="cartItem d-flex align-center mb-20">
                                    <div style={{ backgroundImage:`url(${obj.imageUrl})`}} className="cartItemImg"></div>
                                    <div className="mr-20 d-flex">
                                    <p className="mb-5">{obj.title}</p>
                                    <b>{obj.price} р.</b>
                                    </div>
                                    <img onClick={() => onRemoveItem(obj.id)} className="removeBtn"  src="/img/btn-remove.svg" alt="img" />
                                </div>
                            ))}
                        </div>

                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                <span>Итого</span>
                                <div></div>
                                <b>21 389р.</b>
                                </li>
                                <li>
                                <span>Налог 5%</span>
                                <div></div>
                                <b>1074р.</b>
                                </li>
                            </ul>
                            <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
                        </div>
                    </div>)
                :   (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img src="/img/empty-card.jpg" alt="empty" />
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6"> Добавьте что-то в корзину</p>
                        <button onClick={onClose} className="greenButton">
                            <img src="/img/arrow.svg" alt="arrow" />
                            Вернуться назад
                        </button>
                    </div>)
            }

            </div>
        </div>
    );
}

export default Drawer;