function Card(props) {
    return (
        <div className="card">
            <img className="icon" src="./img/icon.png" alt="My Icon"/>
            <h2>{props.header}</h2>
            <p>{props.content1}</p>
            <p>{props.content2}</p>
            <p>{props.content3}</p>
            <p>{props.content4}</p>
            <p>{props.content5}</p>
            <img className="decor bl" src="./img/corner.png" alt=""/>
            <img className="decor tl" src="./img/corner.png" alt=""/>
            <img className="decor tr" src="./img/corner.png" alt=""/>
            <img className="decor br" src="./img/corner.png" alt=""/>
            <img className="decor sidel" src="./img/side.png" alt=""/>
            <img className="decor sider" src="./img/side.png" alt=""/>
            <img className="decor btm" src="./img/bottom.png" alt=""/>
        </div>
    )
}

export default Card;