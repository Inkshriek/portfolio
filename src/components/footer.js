function Footer() {
    return <footer>
        <img src="./img/cool-logo.gif" alt="cool vibes"/>
        <div className="socials">
            <a className="github" href="https://github.com/Inkshriek" title="GitHub">
                <img draggable="false" src="./img/github.png" alt=""/>
                </a>
            <a className="twitter" href="https://twitter.com/_CursedFlame" title="Twitter">
                <img draggable="false" src="./img/twitter.png" alt=""/>
                </a>
            <a className="facebook" href="https://www.facebook.com/profile.php?id=100055621749175" title="Facebook">
                <img draggable="false" src="./img/facebook.png" alt=""/>
                </a>
            <a className="linkedin" href="https://www.linkedin.com/in/noah-jervey-614368192/" title="LinkedIn">
                <img draggable="false" src="./img/linkedin.png" alt=""/>
                </a>
        </div>
        <p>Site developed by hand in HTML5, CSS3, Sass, React, and jQuery. Background image is free-to-use from <a href="https://www.pexels.com/">Pexels.</a></p>
    </footer>
}

export default Footer;