(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports={movies:"_1RnmyVs0VAW4fMVTjc8tIM",list:"JTN7dpaLvnigpMPV6MBpE",listHidden:"_3GCEnJT9WSQhlpMeAUfU8R",movie:"_31iGdH_VbEJAMlagB1FxQb"}},26:function(e,a,t){e.exports={app:"_1ebweWhQapIO_JirmNQhJy",aa:"_2ryn4W4aLjlRRGnSejInP0"}},32:function(e){e.exports=[{title:"Pirates of the Caribbean: On Stranger Tides",cover:"/images/On_Stranger_Tides_Poster.jpg",year:"2011",cost:378.5,starring:[{name:"Johnny Depp"},{name:"Pen\xe9lope Cruz"},{name:"Ian McShane"},{name:"Kevin R. McNally"},{name:"Geoffrey Rush"}]},{title:"Pirates of the Caribbean: At World's End",cover:"/images/Pirates_AWE_Poster.jpg",year:"2007",cost:300,starring:[{name:"Johnny Depp"},{name:"Orlando Bloom"},{name:"Keira Knightley"},{name:"Geoffrey Rush"},{name:"Stellan Skarsg\xe5rd"}]},{title:"Avengers: Age of Ultron",cover:"/images/Avengers_Age_of_Ultron.jpg",year:"2015",cost:279.9,starring:[{name:"Robert Downey Jr."},{name:"Chris Hemsworth"},{name:"Mark Ruffalo"},{name:"Chris Evans"},{name:"Scarlett Johansson"}]},{title:"John Carter",cover:"/images/John_carter_poster.jpg",year:"2012",cost:263.7,starring:[{name:"Taylor Kitsch"},{name:"Lynn Collins"},{name:"Samantha Morton"},{name:"Mark Strong"},{name:"Ciar\xe1n Hinds"}]},{title:"Tangled",cover:"/images/Tangled_poster.jpg",year:"2010",cost:260,starring:[{name:"Mandy Moore"},{name:"Zachary Levi"},{name:"Donna Murphy"}]},{title:"Spider-Man 3",cover:"/images/Spider-Man_3%2C_International_Poster.jpg",year:"2007",cost:258,starring:[{name:"Tobey Maguire"},{name:"Kirsten Dunst"},{name:"James Franco"},{name:"Thomas Haden Church"},{name:"Topher Grace"}]},{title:"Harry Potter and the Half-Blood Prince",cover:"/images/harry-potter-and-the-half-blood-prince.jpg",year:"2009",cost:250,starring:[{name:"Daniel Radcliffe"},{name:"Rupert Grint"},{name:"Emma Watson"},{name:"Jim Broadbent"},{name:"Helena Bonham Carter"}]},{title:"Spectre",cover:"/images/MV5BMjIwNTA1MDA2Ml5BMl5BanBnXkFtZTgwNzIzMTA5NDE@._V1_SX640_SY720_.jpg",year:"2015",cost:245,starring:[{name:"Daniel Craig"},{name:"Christoph Waltz"},{name:"L\xe9a Seydoux"},{name:"Ben Whishaw"},{name:"Naomie Harris"}]},{title:"Avatar",cover:"/images/Avatar-Teaser-Poster.jpg",year:"2009",cost:237,starring:[{name:"Sam Worthington"},{name:"Zoe Saldana"},{name:"Stephen Lang"},{name:"Michelle Rodriguez"},{name:"Sigourney Weaver"}]},{title:"The Dark Knight Rises",cover:"/images/Dark_knight_rises_poster.jpg",year:"2012",cost:230,starring:[{name:"Christian Bale"},{name:"Michael Caine"},{name:"Gary Oldman"},{name:"Anne Hathaway"},{name:"Tom Hardy"}]}]},34:function(e,a,t){e.exports=t(48)},48:function(e,a,t){"use strict";t.r(a);var n,r=t(0),o=t.n(r),i=t(30),s=t.n(i),c=t(10),m=t(12),l=t(19),p=t(25),v=t(50),h=Object(v.a)((n={},Object(l.a)(n,"movies/FETCH_MOVIES",function(e,a){return Object(p.a)({},e,{all:a.movies})}),Object(l.a)(n,"movies/FETCH_MOVIE",function(e,a){return Object(p.a)({},e,{current:e.all[a.index-1]})}),n),{movies:[],movie:{}}),u=Object(m.b)({movies:h}),d=t(3),g=t(13),y=t(14),f=t(17),b=t(15),j=t(16),E=t(26),M=t.n(E),_=t(20),O=t.n(_),T=t(11),k=t(32),C=function(e){function a(){return Object(g.a)(this,a),Object(f.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(j.a)(a,e),Object(y.a)(a,[{key:"componentWillMount",value:function(){this.props.fetchMovies(k)}},{key:"render",value:function(){var e=this.props.children,a=this.props.movies,t=void 0===a?[]:a,n=this.props.match.params,r=void 0===n?{}:n;return console.log(this.props),console.log(e),console.log(t),console.log(r),o.a.createElement("div",{className:O.a.movies},o.a.createElement("div",{className:r.id?O.a.listHidden:O.a.list},t.map(function(e,a){return o.a.createElement(T.b,{key:a,to:"/movies/".concat(a+1)},o.a.createElement("div",{className:O.a.movie,style:{backgroundImage:"url(".concat(e.cover,")")}}))})),e)}}]),a}(o.a.Component),S=Object(c.b)(function(e){return{movies:e.movies.all}},{fetchMovies:function(e){return{type:"movies/FETCH_MOVIES",movies:e}}})(C),N=t(9),W=t.n(N),I=function(e){function a(){return Object(g.a)(this,a),Object(f.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(j.a)(a,e),Object(y.a)(a,[{key:"componentWillMount",value:function(){this.props.fetchMovie(this.props.match.params.id)}},{key:"componentWillUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.props.fetchMovie(e.match.params.id)}},{key:"render",value:function(){var e=this.props.movie,a=void 0===e?{starring:[]}:e;return console.log(this.props),o.a.createElement("div",{className:W.a.movie,style:{backgroundImage:"linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(".concat(a.cover,")")}},o.a.createElement("div",{className:W.a.cover,style:{backgroundImage:"url(".concat(a.cover,")")}}),o.a.createElement("div",{className:W.a.description},o.a.createElement("div",{className:W.a.title},a.title),o.a.createElement("div",{className:W.a.year},a.year),o.a.createElement("div",{className:W.a.starring},a.starring.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return o.a.createElement("div",{key:a,className:W.a.actor},e.name)}))),o.a.createElement(T.b,{className:W.a.closeButton,to:"/movies"},"\u2190"))}}]),a}(o.a.Component),A=Object(c.b)(function(e){return{movie:e.movies.current}},{fetchMovie:function(e){return{type:"movies/FETCH_MOVIE",index:e}}})(I),B=function(e){function a(){return Object(g.a)(this,a),Object(f.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(j.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:M.a.app},o.a.createElement("div",{className:M.a.aa},o.a.createElement(d.a,{path:"/movies/:id",component:A})),o.a.createElement(d.a,{path:"/movies",component:S}))}}]),a}(o.a.Component),H=Object(c.b)()(B),D=o.a.createElement(T.a,null,o.a.createElement(d.a,{path:"/",component:H}),o.a.createElement(d.a,{exact:!0,path:"/",render:function(){return o.a.createElement(T.b,{to:"/movies"},"Click")}}));s.a.render(o.a.createElement(c.a,{store:Object(m.c)(u)},D),document.getElementById("app"))},9:function(e,a,t){e.exports={movie:"_2pQ8UMq5gurzIQpE7Ogs-T",cover:"vyfoEBvDaa6MdrsazYbTy",description:"_3zfsGRu9XM6E__79pGd2Rd",title:"_1Ne8Vl1MQkeBUDz6MdatNj",year:"_1yWPmxoojWuGicHiWpeJfc",starring:"_254DSAETiqxjk3pI31OkP5",actor:"_1ZMdKhDGWyc7IFX9fWTY3e",closeButton:"_2ly7U4Xa6wDj7Tb49fh2XA"}}},[[34,1,2]]]);
//# sourceMappingURL=main.0f8b4ed7.chunk.js.map