(window["webpackJsonpmonster-relodex"]=window["webpackJsonpmonster-relodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),l=n(4),i=n(6),h=n(5),u=n(7);n(14);function m(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),r.a.createElement("h2",null," ",e.monster.name," "),r.a.createElement("p",null,e.monster.email))}n(15);function d(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(m,{key:e.id,monster:e})})))}n(16);var f=function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})},p=(n(17),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleError=function(e){if(!e.ok)throw Error(e.status);return e.json()},n.handleChange=function(e){n.setState({searchField:e.target.value})},n.state={monsters:[],searchField:""},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(this.handleError).then((function(t){return e.setState({monsters:t})})).catch(console.log)}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster Rolodex"),r.a.createElement(f,{placeholder:"Search Monster",handleChange:this.handleChange}),r.a.createElement(d,{monsters:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2b196c1f.chunk.js.map