(this["webpackJsonpfinal-exam"]=this["webpackJsonpfinal-exam"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.75509f2e.png"},24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},35:function(e,t){},36:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),l=a.n(c),i=(a(29),a(16)),s=a(17),u=a(22),h=a(18),o=a(7),m=a(23),d=a(19),p=a.n(d),E=function(e){console.log(e.characters);var t=e.characters,a=t.image,r=t.name,c=t.status,l=t.origin,i=t.episode,s=t.species;return n.a.createElement("div",null,n.a.createElement("h3",null,"Volver"),n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("img",{src:a,alt:"character"})),n.a.createElement("td",null,n.a.createElement("p",null,r),n.a.createElement("p",null,"Status: ",c),n.a.createElement("p",null,"Species: ",s),n.a.createElement("p",null,"Origin: ",l.name),n.a.createElement("p",null,"Episodes: ",i.length))))))},f=a(8),b=function(e){var t=e.characters,a=t.id,r=t.image,c=t.name,l=t.species,i="/characters/".concat(a);return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(f.b,{to:i},n.a.createElement("img",{src:r,alt:"character"}),n.a.createElement("div",null,n.a.createElement("p",null,c),n.a.createElement("p",null,l)))))};var v=function(e){return n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,e.characters.map((function(e){return n.a.createElement(b,{key:e.id,characters:e})}))))},g=(a(35),a(5)),y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={search:"",characters:[]},e.handleSearch=e.handleSearch.bind(Object(o.a)(e)),e.renderCharacterDetail=e.renderCharacterDetail.bind(Object(o.a)(e)),e.filterCharacters=e.filterCharacters.bind(Object(o.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(t){return e.setState({characters:t})}))}},{key:"handleSearch",value:function(e){this.setState({search:e.target.value})}},{key:"renderCharacterDetail",value:function(e){var t=parseInt(e.match.params.id),a=this.state.characters.find((function(e){return e.id===t}));return void 0===a?n.a.createElement("p",null,"The character doesn't exist"):n.a.createElement(E,{characters:a})}},{key:"filterCharacters",value:function(){var e=this;return this.state.characters.filter((function(t){return t.name===e.state.search.value}))}},{key:"render",value:function(){return console.log(this.state),n.a.createElement("div",null,n.a.createElement("img",{src:p.a,alt:"Logo rick and morty"}),n.a.createElement(g.c,null,n.a.createElement(g.a,{exact:!0,path:"/"},n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"inputCharacter"}," Introduce al personaje"),n.a.createElement("input",{id:"inputCharacter",type:"text",placeholder:"Rick",onChange:this.handleSearch})),n.a.createElement(v,{characters:this.state.characters})),n.a.createElement(g.a,{path:"/characters/:id",render:this.renderCharacterDetail})))}}]),t}(n.a.Component);l.a.render(n.a.createElement(f.a,null,n.a.createElement(y,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c8aaec64.chunk.js.map