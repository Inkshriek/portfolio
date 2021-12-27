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
            <img className="decor bl" src="./img/corner.png" alt="" draggable="false"/>
            <img className="decor tl" src="./img/corner.png" alt="" draggable="false"/>
            <img className="decor tr" src="./img/corner.png" alt="" draggable="false"/>
            <img className="decor br" src="./img/corner.png" alt="" draggable="false"/>
            <img className="decor sidel" src="./img/side.png" alt="" draggable="false"/>
            <img className="decor sider" src="./img/side.png" alt="" draggable="false"/>
            <img className="decor btm" src="./img/bottom.png" alt="" draggable="false"/>
            <div className="socials">
            <a href="https://twitter.com/_CursedFlame" title="Twitter">
                <img draggable="false" src="./img/twitter.png" alt=""/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100055621749175" title="Facebook">
                <img draggable="false" src="./img/facebook.png" alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/noah-jervey-614368192/" title="LinkedIn">
                <img draggable="false" src="./img/linkedin.png" alt=""/>
            </a>
            <a href="https://github.com/Inkshriek" title="GitHub">
                <img draggable="false" src="./img/github.png" alt=""/>
            </a>
            <a href="mailto:inkshriek@gmail.com" title="Email">
                <img draggable="false" src="./img/email.png" alt=""/>
            </a>
        </div>
        </div>
    )
}

export default Card;