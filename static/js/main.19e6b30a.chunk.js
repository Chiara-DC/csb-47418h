(this["webpackJsonpcdc-site"]=this["webpackJsonpcdc-site"]||[]).push([[0],{10:function(e,t,i){e.exports={gridcontainer:"Blog_gridcontainer__3lYqa",blogfilter:"Blog_blogfilter__wvEZP",griditem:"Blog_griditem__TCQyk",blogtags:"Blog_blogtags__AoWJE"}},13:function(e,t,i){e.exports={navbar:"Navbar_navbar__cP-tv",navtitle:"Navbar_navtitle__2f4Tn",navlinks:"Navbar_navlinks__1RH6i",navlink:"Navbar_navlink__1VcPD"}},24:function(e,t,i){e.exports={footer:"Footer_footer__2OXy3"}},34:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i(23),s=(i(34),i(25)),a=i(3),l=i(7),o=i.n(l),r=i(5),b=i(0);function j(e){return console.log(e),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:o.a.recents,children:["Recent Blog Posts!",Object(b.jsxs)(b.Fragment,{children:[r.blogs.blog.map((function(e,t){return Object(b.jsxs)("div",{className:o.a.recentblog,children:[e.title," ",Object(b.jsx)("br",{})," ",e.date]},t)})),e&&Object(b.jsx)("div",{className:o.a.recentblog,children:Object(b.jsx)("a",{href:"/blog",children:e.additional})})]})]})})}function m(e){return Object(b.jsxs)("div",{className:o.a.hellobox,children:[Object(b.jsx)("img",{src:"/images/cactus.jpg",alt:e.name,className:o.a.image}),Object(b.jsxs)("div",{className:o.a.title,children:[e.name,Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:o.a.text,children:e.tagline})]}),Object(b.jsx)("div",{className:o.a.intro,children:e.intro})]})}var x=i(13),d=i.n(x);function h(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("nav",{className:d.a.navbar,children:[Object(b.jsx)("div",{className:d.a.navtitle,children:Object(b.jsx)("a",{href:"/",children:r.about.fullname})}),Object(b.jsxs)("div",{className:d.a.navlinks,children:[Object(b.jsx)("a",{href:"/about",children:Object(b.jsx)("div",{className:d.a.navlink,children:"About "})}),Object(b.jsx)("a",{href:"/blog",children:Object(b.jsx)("div",{className:d.a.navlink,children:"Blog "})}),Object(b.jsx)("a",{href:"/#contact",children:Object(b.jsx)("div",{className:d.a.navlink,children:"Contact "})})]})]})})}var O=i(24),g=i.n(O);function u(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("footer",{className:g.a.footer,children:Object(b.jsx)("a",{href:"/contact",children:r.site.copyright})})})}function _(){return Object(b.jsxs)("div",{className:o.a.contact,children:[Object(b.jsx)("p",{id:"contact",children:"Contact "}),Object(b.jsxs)("div",{className:o.a.contacttype,children:[Object(b.jsx)("img",{src:"/images/icons/Linkedin.svg",height:28,title:r.contact.linkedin,alt:r.contact.linkedin}),"LinkedIn: ",r.contact.linkedin]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:o.a.contacttype,children:[Object(b.jsx)("img",{src:"/images/icons/Email.svg",height:28,title:r.contact.email,alt:r.contact.email}),"Email: ",r.contact.email]}),Object(b.jsx)("br",{})]})}function v(){return Object(b.jsxs)("div",{className:o.a.home,children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{className:o.a.boxes,children:Object(b.jsx)(m,{name:r.about.fullname,tagline:r.about.shorttext,intro:r.about.introtext})}),Object(b.jsx)(j,{additional:"Read more here!",id:"recents"}),Object(b.jsx)(_,{id:"contact"}),Object(b.jsx)(u,{})]})}var f=i(6),p=i.n(f);function N(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:p.a.introbox,children:[Object(b.jsx)("img",{src:"/images/cactus.jpg",alt:e.name,className:p.a.image}),Object(b.jsxs)("div",{className:p.a.title,children:[e.name,Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:p.a.text,children:e.shorttext})]}),Object(b.jsx)("div",{className:p.a.paragraph,children:e.longtext})]})})}var k=i(4);function A(){var e=Object(c.useState)(!1),t=Object(k.a)(e,2),i=t[0],n=t[1];return Object(b.jsxs)("div",{className:"timeline",children:[Object(b.jsx)("div",{className:p.a.timelinetitle,children:"Timeline"}),r.timeline.map((function(e,t){return Object(b.jsxs)("div",{className:p.a.timelinebox,children:[Object(b.jsx)("div",{className:p.a.timelineimage,children:Object(b.jsx)("img",{src:"/images/logos/".concat(e.logo,".svg"),width:32,height:32,alt:e.location},e.description)}),Object(b.jsxs)("div",{className:p.a.timelinetext,children:[Object(b.jsx)("b",{children:e.name})," ",Object(b.jsx)("br",{}),e.description,Object(b.jsx)("br",{}),e.description,Object(b.jsx)("br",{}),i?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{onClick:function(){n(!1)},children:"Read more here!"})}):Object(b.jsxs)(b.Fragment,{children:[e.details,Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){n(!0)},children:"Read more!"})]})]})]},t)}))]})}function y(){return Object(b.jsxs)("div",{className:p.a.timeline,children:[Object(b.jsx)("div",{className:p.a.timelinetitle,children:"Skills"}),Object(b.jsx)("div",{className:p.a.skilltext,children:r.skills.map((function(e,t){return Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:e})})}))})]})}function H(){return Object(b.jsxs)("div",{className:p.a.column,children:[Object(b.jsx)(A,{}),Object(b.jsx)(y,{})]})}function J(){return Object(b.jsxs)("div",{className:p.a.about,children:[Object(b.jsx)(h,{}),Object(b.jsx)(N,{name:r.about.fullname,shorttext:r.about.jobtitle,longtext:r.about.longtext}),Object(b.jsx)(H,{}),Object(b.jsx)(u,{})]})}var C=i(10),T=i.n(C);var w=function(e){var t=e.blog,i=Object(c.useState)(!1),n=Object(k.a)(i,2),s=n[0],a=n[1];return Object(b.jsxs)(b.Fragment,{children:[t&&!s&&Object(b.jsx)("div",{className:T.a.griditem,children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("b",{style:{fontSize:"large"},children:t.title})," ",Object(b.jsx)("br",{}),t.date,Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:t.subtitle}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){a(!0)},children:"Read more here!"})]})}),t&&s&&Object(b.jsx)("div",{className:T.a.griditem,children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("b",{style:{fontSize:"large"},children:t.title}),Object(b.jsx)("br",{}),t.date,Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:t.subtitle}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),t.text,Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:T.a.blogtags,children:["Tags:",t.tags.map((function(e){return Object(b.jsxs)("b",{children:[" ",e,", "]},e)})),Object(b.jsx)("b",{children:"blog"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){a(!1)},children:"Close"})]})})]})};function F(){var e=Object(c.useState)(!0),t=Object(k.a)(e,2),i=(t[0],t[1]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)("div",{className:T.a.blogfilter,children:["Tags =",r.blogs.tags.map((function(e){return Object(b.jsx)("button",{onClick:function(t){i(!0),console.log(e)},children:e},e)})),Object(b.jsx)("button",{children:"blog"},"blog")]}),Object(b.jsx)("div",{className:T.a.gridcontainer,children:r.blogs.blog.sort((function(e,t){return e.title-t.title})).map((function(e,t){return Object(b.jsx)(w,{blog:e},t)}))}),Object(b.jsx)(u,{})]})}function S(){return Object(b.jsx)(s.a,{children:Object(b.jsxs)(a.c,{children:[Object(b.jsx)(a.a,{exact:!0,path:"/",element:Object(b.jsx)(v,{})}),Object(b.jsx)(a.a,{exact:!0,path:"/about",element:Object(b.jsx)(J,{})}),Object(b.jsx)(a.a,{exact:!0,path:"/blog",element:Object(b.jsx)(F,{})}),Object(b.jsx)(a.a,{path:"*",element:Object(b.jsx)(v,{})}),Object(b.jsx)(a.a,{path:"/blog/:blogId",element:Object(b.jsx)(F,{})})]})})}var E=document.getElementById("root");Object(n.createRoot)(E).render(Object(b.jsx)(c.StrictMode,{children:Object(b.jsx)(S,{})}))},5:function(e){e.exports=JSON.parse('{"about":{"fullname":"Anonymous Full Name","jobtitle":"Anonymous Job Title","shorttext":"Welcome to my website!","introtext":"Welcome! I am the creator of this website and here is a short summary about me.","longtext":"Welcome to my website! This is still very much a work in progress. Here is a longer description about me. :) "},"blogs":{"blog":[{"title":"Hello World","subtitle":"As it wouldn\'t be a blog by a tech-person without the obligatory \'this is how I built it\'.","date":"2022-04-01","text":"I built this in React JS","tags":["tag1","tag2"]},{"title":"Hello Again!","subtitle":"Hello from CodeSandbox.io","date":"2022-04-01","text":"WSL isn\'t working on my computer, so...","tags":["tag1","tag2"]},{"title":"Third Hello!","subtitle":"I\'m starting to run out of example titles\'","date":"2022-04-01","text":"All this data is false, as this sandbox is shared. :)","tags":["tag3"]}],"tags":["tag1","tag2","tag3","tech"]},"timeline":[{"name":"Job Title 1","description":"Job Title 1","location":"Job Location 1","logo":"logo1","details":"Job details go here, description, etc"},{"name":"Job Title 2","description":"Job Title 2","location":"Job Location 2","logo":"logo2"},{"name":"Job Title 3","description":"Job Title 3","location":"Job Location 3","logo":"logo3"}],"skills":["name","copyright","description"],"contact":{"linkedin":"Linkedin","email":"Email address","phone":"Phone number"},"site":{"name":"CDC site","copyright":"CDC \xa9 2022","description":"CDC\'s website"}}')},6:function(e,t,i){e.exports={about:"About_about__2P5xE",introbox:"About_introbox__BEe1z",image:"About_image__1QlLb",title:"About_title__2uHJk",text:"About_text__1a9O2",paragraph:"About_paragraph__3onEv",column:"About_column__2t_IH",timeline:"About_timeline__1K_gT",timelinetitle:"About_timelinetitle__1mvXJ",timelinebox:"About_timelinebox__1OEnK",timelineimage:"About_timelineimage__2QiSs",timelinetext:"About_timelinetext__1x8AU",skilltext:"About_skilltext__3vEcB",home:"About_home__vqkn4"}},7:function(e,t,i){e.exports={home:"Home_home__2ifuu",recents:"Home_recents__3_5gR",recentblog:"Home_recentblog__6HLGj",boxes:"Home_boxes__1QlAQ",hellobox:"Home_hellobox__uytSK",image:"Home_image__1K-ES",title:"Home_title__2jL4m",text:"Home_text__2MkP5",intro:"Home_intro__2uq8f",contact:"Home_contact__3wIFe",contacttype:"Home_contacttype__hIUED"}}},[[36,1,2]]]);
//# sourceMappingURL=main.19e6b30a.chunk.js.map