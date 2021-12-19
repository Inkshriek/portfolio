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
    return <section className={"item " + style} id={`item${props.index}`} style={{backgroundImage: `url(${item.img})`}}>
        <button onClick={() => props.clickHandler(props.index)} className="toggle">
            <img src="./img/dropdown.png" alt=""/>
        </button>
        <div className="content">
            <h2 className="title">{item.name}</h2>
            <p className="desc">{item.tagline}</p>
            <div className="links">
                <a href={item.github} title="GitHub">
                    <img draggable="false" src="./img/github-button.png" alt=""></img>
                </a>
                <a href={item.link} title="Deployment">
                    <img draggable="false" src="./img/link-button.png" alt=""></img>
                </a>
            </div>
        </div>
    </section>;
}

export default Item;