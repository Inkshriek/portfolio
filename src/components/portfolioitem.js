import React from "react";

function Item(props) {
    let item = props.obj;
    let style = null;
    if (props.active) {
        console.log("Item " + props.index + " is active!");
        style = "active";
    }
    else {
        console.log("Item " + props.index + " is inactive!");
        style = "inactive";
    }
    return <section className={"item " + style} id={`item${props.index}`}>
        <div className="item-inner" style={{backgroundImage: `url(${item.img})`}}>
            <button onClick={() => props.clickHandler(props.index)} className="toggle">
                <img draggable="false" src="./img/dropdown.png" alt=""/>
            </button>
            <div className="content">
                <h2 className="title">{item.name}</h2>
                <p className="desc">{item.tagline}</p>
                <p className="desc">{item.description}</p>
                <div className="links">
                    <a href={item.github} title="Repository">
                        <img draggable="false" src="./img/github-button.png" alt=""></img>
                    </a>
                    <a href={item.link} title="Deployment">
                        <img draggable="false" src="./img/link-button.png" alt=""></img>
                    </a>
                </div>
            </div>
        </div>
        <img className="decor bl" src="./img/corner-item.png" alt="" draggable="false"/>
        <img className="decor br" src="./img/corner-item.png" alt="" draggable="false"/>
        <img className="decor tl" src="./img/corner-item.png" alt="" draggable="false"/>
        <img className="decor tr" src="./img/corner-item.png" alt="" draggable="false"/>
    </section>;
}

export default Item;