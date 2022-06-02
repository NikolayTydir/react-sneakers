function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img  src="/img/heart-unliked.svg" alt="img" />
            </div>
            <img width={133} height={122} src="/img/sneakers/1.jpg" alt="img" />
            <h5>Мужские кроссовки Nike</h5>
            <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>
                Цена:
                </span>
                <b>
                12 999р.
                </b>
            </div>
            <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
            
            </div>
        </div>
    )
}

export default Card;