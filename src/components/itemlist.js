import Item from "./portfolioitem.js";
import items from "../portfolioitems.json";
import React, {useState} from "react";
import $ from 'jquery';

function ItemList() {
    const [state, setState] = useState(-1);
    function setActive(current) {
        if (current === state) setState(-1);
        else setState(current);

        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#item${current}`).offset().top
        }, 200);
    }
    //The number in the state represents which one is active. Receiving information from one will set this number and reload all items.
    const list = items.map((item, index) => <Item clickHandler={setActive} active={(state === index) ? true : false} obj={item} key={index} index={index}/>);
    return <div>{list}</div>;
}

export default ItemList;