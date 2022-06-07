import axios from 'axios';
import React from 'react';
import AppContext from '../../context';
import Info from '../Info';
import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClose, onRemove, items = []}) {

    const {cartItems, setCartItems} = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try{
            setIsLoading(true);
            const {data} = await axios.post('/orders', {
                items: cartItems,
            })
            setOrderId(data.id)
            setIsOrderComplete(true);
            setCartItems([]);
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('/cart/' + item.id);
                await delay(1000);
              }
        } catch (error){
            alert('Не удалось создать заказ')
        }
        setIsLoading(false);
    }
    return(
        <div  className={styles.overlay}>
            <div className={styles.drawer}>
            <h2 className="mb-30 justify-between d-flex">Корзина <img className="cu-p" onClick={onClose}  src="/img/btn-remove.svg" alt="img" /></h2>

            {
                items.length > 0 
                ?   ( <div>
                        <div className={styles.items}>
                            {items.map(obj=>(
                                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                    <div style={{ backgroundImage:`url(${obj.imageUrl})`}} className="cartItemImg"></div>
                                    <div className="mr-20 d-flex">
                                    <p className="mb-5">{obj.title}</p>
                                    <b>{obj.price} р.</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className="removeBtn"  src="/img/btn-remove.svg" alt="img" />
                                </div>
                            ))}
                        </div>

                        <div className={styles.cartTotalBlock}>
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
                            <button 
                                disabled={isLoading}                                 
                                onClick={onClickOrder}
                                className="greenButton" >
                                Оформить заказ 
                                <img src="/img/arrow.svg" alt="arrow" />
                            </button>
                        </div>
                    </div>)
                :    <Info 
                        title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"} 
                        description={isOrderComplete ? `Ваш заказ #${orderId}` : "Добавьте что-то" }
                        image={isOrderComplete ? "/img/complete-order.jpg"  : "/img/empty-card.jpg" }
                    />
            }

            </div>
        </div>
    );
}

export default Drawer;