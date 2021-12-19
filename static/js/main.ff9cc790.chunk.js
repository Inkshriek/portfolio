(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),s=i(4),r=i.n(s),a=i(6),o=i(0);var l=function(e){var t=e.obj,i=null;return e.active?(console.log("Item "+e.index+" is active!"),i="active"):(console.log("Item "+e.index+" is inactive!"),i="inactive"),Object(o.jsxs)("section",{className:"item "+i,id:"item".concat(e.index),children:[Object(o.jsxs)("div",{className:"item-inner",style:{backgroundImage:"url(".concat(t.img,")")},children:[Object(o.jsx)("button",{onClick:function(){return e.clickHandler(e.index)},className:"toggle",children:Object(o.jsx)("img",{src:"./img/dropdown.png",alt:""})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h2",{className:"title",children:t.name}),Object(o.jsx)("p",{className:"desc",children:t.tagline}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)("a",{href:t.github,title:"GitHub",children:Object(o.jsx)("img",{draggable:"false",src:"./img/github-button.png",alt:""})}),Object(o.jsx)("a",{href:t.link,title:"Deployment",children:Object(o.jsx)("img",{draggable:"false",src:"./img/link-button.png",alt:""})})]})]})]}),Object(o.jsx)("img",{className:"decor bl",src:"./img/corner-item.png",alt:""}),Object(o.jsx)("img",{className:"decor br",src:"./img/corner-item.png",alt:""})]})},m=i(5),d=i(3),g=i.n(d);var j=function(){var e=Object(n.useState)(-1),t=Object(a.a)(e,2),i=t[0],c=t[1];function s(e){c(e===i?-1:e),g()([document.documentElement,document.body]).animate({scrollTop:g()("#item".concat(e)).offset().top},200)}var r=m.map((function(e,t){return Object(o.jsx)(l,{clickHandler:s,active:i===t,obj:e,index:t},t)}));return Object(o.jsx)("div",{children:r})};var h=function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{className:"icon",src:"./img/icon.png",alt:"My Icon"}),Object(o.jsx)("h2",{children:e.header}),Object(o.jsx)("p",{children:e.content1}),Object(o.jsx)("p",{children:e.content2}),Object(o.jsx)("p",{children:e.content3}),Object(o.jsx)("p",{children:e.content4}),Object(o.jsx)("p",{children:e.content5}),Object(o.jsx)("img",{className:"decor bl",src:"./img/corner.png",alt:""}),Object(o.jsx)("img",{className:"decor tl",src:"./img/corner.png",alt:""}),Object(o.jsx)("img",{className:"decor tr",src:"./img/corner.png",alt:""}),Object(o.jsx)("img",{className:"decor br",src:"./img/corner.png",alt:""}),Object(o.jsx)("img",{className:"decor sidel",src:"./img/side.png",alt:""}),Object(o.jsx)("img",{className:"decor sider",src:"./img/side.png",alt:""}),Object(o.jsx)("img",{className:"decor btm",src:"./img/bottom.png",alt:""})]})};var b=function(){return Object(o.jsxs)("footer",{children:[Object(o.jsx)("img",{src:"./img/cool-logo.gif",alt:"Now let's vibe."}),Object(o.jsxs)("div",{className:"socials",children:[Object(o.jsx)("a",{className:"github",href:"https://github.com/Inkshriek",title:"GitHub",children:Object(o.jsx)("img",{draggable:"false",src:"./img/github.png",alt:""})}),Object(o.jsx)("a",{className:"twitter",href:"https://twitter.com/_CursedFlame",title:"Twitter",children:Object(o.jsx)("img",{draggable:"false",src:"./img/twitter.png",alt:""})}),Object(o.jsx)("a",{className:"facebook",href:"https://www.facebook.com/profile.php?id=100055621749175",title:"Facebook",children:Object(o.jsx)("img",{draggable:"false",src:"./img/facebook.png",alt:""})}),Object(o.jsx)("a",{className:"linkedin",href:"https://www.linkedin.com/in/noah-jervey-614368192/",title:"LinkedIn",children:Object(o.jsx)("img",{draggable:"false",src:"./img/linkedin.png",alt:""})})]}),Object(o.jsxs)("p",{children:["Site developed by hand in HTML5, CSS3, Sass, React, and jQuery. Background image is free-to-use from ",Object(o.jsx)("a",{href:"https://www.pexels.com/",children:"Pexels."})]})]})};var u=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Noah Jervey's Portfolio"}),Object(o.jsx)(h,{header:"About Me",content1:"He/They | 24 | Hispanic",content2:"My name is Noah Jervey, or 'Inkshriek' as my alias. I am an aspiring front-end and full-stack web developer with a Bachelor's Degree in Digital Media from the University of Central Florida. While I do game work and fiction writing as a hobby, my work in website design and functionality is where I intend to form my career. I also quite like D&D and drawing sometimes!",content3:"Further down is where you'll find my notable projects, some from my work in university and some from my personal projects.",content4:"It's just my little neck of the woods."}),Object(o.jsx)("h1",{children:"My Projects"}),Object(o.jsx)(j,{}),Object(o.jsx)(b,{})]})},p=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,13)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),p()},5:function(e){e.exports=JSON.parse('[{"name":"Church of Cthulhu","tagline":"A fictional site made for a fictional client\'s need.","description":"","github":"https://github.com/Inkshriek/Church-of-Cthulhu","link":"https://inkshriek.github.io/Church-of-Cthulhu/","img":"./img/church.png"},{"name":"GreenMind","tagline":"A site designed to advocate for active citizenry against climate change.","description":"","github":"https://github.com/Inkshriek/GreenMind","link":"https://students.cah.ucf.edu/~no518143/greenmind/","img":"./img/greenmind.png"},{"name":"Pok\xe9mon Team Manager","tagline":"Still working on this part of the portfolio!","description":"","github":"#","link":"#","img":""}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.ff9cc790.chunk.js.map