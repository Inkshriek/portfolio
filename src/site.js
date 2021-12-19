import React from "react";
import ItemList from "./components/itemlist.js";
import Card from "./components/card.js";
import Footer from "./components/footer.js";

function Site() {
    return (
    <div>
        <h1>Noah Jervey's Portfolio</h1>
        <Card 
        header="About Me" 
        content1="He/They | 24 | Hispanic"
        content2="My name is Noah Jervey, or 'Inkshriek' as my alias. I am an aspiring front-end and full-stack web developer with a Bachelor's Degree in Digital Media from the University of Central Florida. While I do game work and fiction writing as a hobby, my work in website design and functionality is where I intend to form my career. I also quite like D&D and drawing sometimes!"
        content3="Further down is where you'll find my notable projects, some from my work in university and some from my personal projects."
        content4="It's just my little neck of the woods."
        />
        <h1>My Projects</h1>
        <ItemList/>
        <Footer/>
    </div>
    );
}

export default Site;