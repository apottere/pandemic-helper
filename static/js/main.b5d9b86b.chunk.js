(this["webpackJsonppandemic-helper"]=this["webpackJsonppandemic-helper"]||[]).push([[0],{12:function(e,n,a){"use strict";(function(e){a.d(n,"a",(function(){return m})),a.d(n,"b",(function(){return s}));var t=a(18),o=a(28),c=a(6),r=a(1),l=a.n(r),i=function(){var n=window.location.hash;return n?JSON.parse(e.from(n,"base64").toString()):{}},u=Object(r.createContext)(void 0),m=function(e){var n=e.children,a=Object(r.useState)(i()),t=Object(c.a)(a,2),o=t[0],m=t[1];console.log(o);var s=u.Provider;return l.a.createElement(s,{value:[o,m]},n)},s=function(n,a){var l=Object(r.useContext)(u),m=Object(c.a)(l,2),s=m[0],d=m[1],f=function(n){!function(n){window.location.hash=e.from(JSON.stringify(n)).toString("base64")}(n)};Object(r.useEffect)((function(){var e=function(){return d(i())};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}));var b=n?s[n]:s,E=n?function(e){var a=Object(o.a)({},s,Object(t.a)({},n,e));f(a)}:function(e){return f(e)};return[void 0===b&&a?a():b,E]}}).call(this,a(42).Buffer)},35:function(e,n,a){e.exports=a(52)},40:function(e,n,a){},47:function(e,n,a){},51:function(e,n,a){},52:function(e,n,a){"use strict";a.r(n);var t=a(1),o=a.n(t),c=a(13),r=a.n(c),l=(a(40),a(41),a(6)),i=a(57),u=a(12),m=(a(47),a(59)),s=a(54),d=a(7),f=function(e){var n=e.id,a=e.config,t=Object(u.b)(),c=Object(l.a)(t,2)[1];return o.a.createElement(m.a.Group,{controlId:"init.save-config"},o.a.createElement(s.a,{variant:"success",type:"submit",onClick:function(){return c({game:n,config:a})}},o.a.createElement(d.d,{size:24})," Start"))},b=a(55),E=a(30),p=a(56),g=function(e,n,a){var c=Object(t.useState)(a),r=Object(l.a)(c,2),i=r[0],u=r[1],d=function(){i<n&&u(i+1)},f=function(){i>e&&u(i-1)};return[i,function(){return o.a.createElement(m.a.Group,{as:b.a,controlId:"init.game-config.epidemics"},o.a.createElement(m.a.Label,{column:!0,xs:"8"},"Epidemic Count"),o.a.createElement(E.a,{xs:"4"},o.a.createElement(p.a,{size:"md",className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(s.a,{variant:"outline-secondary",onClick:f,disabled:i===e},"-")),o.a.createElement(m.a.Control,{type:"text",disabled:!0,value:i}),o.a.createElement(p.a.Append,null,o.a.createElement(s.a,{variant:"outline-secondary",onClick:d,disabled:i===n},"+")))))}]},v=[{name:"Vanilla",Config:function(e){var n=e.id,a=g(4,6,5),t=Object(l.a)(a,2),c=t[0],r=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(r,null),o.a.createElement(f,{id:n,config:{epidemics:c}}))},cities:[{name:"Algiers",color:"black",count:1},{name:"Atlanta",color:"blue",count:1},{name:"Baghdad",color:"black",count:1},{name:"Bangkok",color:"red",count:1},{name:"Beijing",color:"red",count:1},{name:"Bogot\xe1",color:"yellow",count:1},{name:"Buenos Aires",color:"yellow",count:1},{name:"Cairo",color:"black",count:1},{name:"Chennai",color:"black",count:1},{name:"Chicago",color:"blue",count:1},{name:"Delhi",color:"black",count:1},{name:"Essen",color:"blue",count:1},{name:"Ho Chi Minh City",color:"red",count:1},{name:"Hong Kong",color:"red",count:1},{name:"Istanbul",color:"black",count:1},{name:"Jakarta",color:"red",count:1},{name:"Johannesburg",color:"yellow",count:1},{name:"Karachi",color:"black",count:1},{name:"Khartoum",color:"yellow",count:1},{name:"Kinshasa",color:"yellow",count:1},{name:"Kolkata",color:"black",count:1},{name:"Lagos",color:"yellow",count:1},{name:"Lima",color:"yellow",count:1},{name:"London",color:"blue",count:1},{name:"Los Angeles",color:"yellow",count:1},{name:"Madrid",color:"blue",count:1},{name:"Manila",color:"red",count:1},{name:"Mexico City",color:"yellow",count:1},{name:"Miami",color:"yellow",count:1},{name:"Milan",color:"blue",count:1},{name:"Montr\xe9al",color:"blue",count:1},{name:"Moscow",color:"black",count:1},{name:"Mumbai",color:"black",count:1},{name:"New York",color:"blue",count:1},{name:"Osaka",color:"red",count:1},{name:"Paris",color:"blue",count:1},{name:"Riyadh",color:"black",count:1},{name:"San Francisco",color:"blue",count:1},{name:"Santiago",color:"yellow",count:1},{name:"S\xe3o Paulo",color:"yellow",count:1},{name:"Seoul",color:"red",count:1},{name:"Shanghai",color:"red",count:1},{name:"St. Petersburg",color:"blue",count:1},{name:"Sydney",color:"red",count:1},{name:"Taipei",color:"red",count:1},{name:"Tehran",color:"black",count:1},{name:"Tokyo",color:"red",count:1},{name:"Washington",color:"blue",count:1}]},{name:"Legacy Season 1",Config:function(e){var n=e.id;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a.Group,{controlId:"init.game-config"},o.a.createElement("span",{className:"text-muted"},"No configuration options.")),o.a.createElement(f,{id:n,config:{}}))},cities:[{name:"Algiers",color:"black",count:1},{name:"Atlanta",color:"blue",count:1},{name:"Baghdad",color:"black",count:1},{name:"Bangkok",color:"red",count:1},{name:"Beijing",color:"red",count:1},{name:"Bogot\xe1",color:"yellow",count:1},{name:"Buenos Aires",color:"yellow",count:1},{name:"Cairo",color:"black",count:1},{name:"Chennai",color:"black",count:1},{name:"Chicago",color:"blue",count:1},{name:"Delhi",color:"black",count:1},{name:"Essen",color:"blue",count:1},{name:"Ho Chi Minh City",color:"red",count:1},{name:"Hong Kong",color:"red",count:1},{name:"Istanbul",color:"black",count:1},{name:"Jakarta",color:"red",count:1},{name:"Johannesburg",color:"yellow",count:1},{name:"Karachi",color:"black",count:1},{name:"Khartoum",color:"yellow",count:1},{name:"Kinshasa",color:"yellow",count:1},{name:"Kolkata",color:"black",count:1},{name:"Lagos",color:"yellow",count:1},{name:"Lima",color:"yellow",count:1},{name:"London",color:"blue",count:1},{name:"Los Angeles",color:"yellow",count:1},{name:"Madrid",color:"blue",count:1},{name:"Manila",color:"red",count:1},{name:"Mexico City",color:"yellow",count:1},{name:"Miami",color:"yellow",count:1},{name:"Milan",color:"blue",count:1},{name:"Montr\xe9al",color:"blue",count:1},{name:"Moscow",color:"black",count:1},{name:"Mumbai",color:"black",count:1},{name:"New York",color:"blue",count:1},{name:"Osaka",color:"red",count:1},{name:"Paris",color:"blue",count:1},{name:"Riyadh",color:"black",count:1},{name:"San Francisco",color:"blue",count:1},{name:"Santiago",color:"yellow",count:1},{name:"S\xe3o Paulo",color:"yellow",count:1},{name:"Seoul",color:"red",count:1},{name:"Shanghai",color:"red",count:1},{name:"St. Petersburg",color:"blue",count:1},{name:"Sydney",color:"red",count:1},{name:"Taipei",color:"red",count:1},{name:"Tehran",color:"black",count:1},{name:"Tokyo",color:"red",count:1},{name:"Washington",color:"blue",count:1}]},{name:"Legacy Season 2",Config:function(e){var n=e.id,a=g(1,20,5),t=Object(l.a)(a,2),c=t[0],r=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(r,null),o.a.createElement(f,{id:n,config:{epidemics:c}}))},cities:[]}],h=a(58),k=function(e){var n=e.card,a=e.infect,c=e.epidemic,r=e.remove,i=e.unremove,u=e.showEpidemic,m=e.showDraw,f=Object(t.useState)(!1),b=Object(l.a)(f,2),E=b[0],p=b[1],g=function(){return p(!1)},v=n.city,k=n.id,y=n.count,w=v.color,O=v.name,j=v.count,C=function(e){return function(){g(),e(k)}},S=[];c&&!u&&S.push(o.a.createElement(s.a,{className:"infection-extra-button",size:"lg",variant:"success",onClick:C(c)},o.a.createElement(d.a,{size:26})," Force Epidemic")),a&&!m&&S.push(o.a.createElement(s.a,{className:"infection-extra-button",size:"lg",variant:"primary",onClick:C(a)},o.a.createElement(d.c,{size:26})," Force Draw")),r&&S.push(o.a.createElement(s.a,{className:"infection-extra-button",size:"lg",variant:"danger",onClick:C(r)},o.a.createElement(d.h,{size:26})," Remove from Play")),i&&S.push(o.a.createElement(s.a,{className:"infection-extra-button",size:"lg",variant:"primary",onClick:C(i)},o.a.createElement(d.b,{size:26})," Return to Play"));var N=0!==S.length,x=o.a.createElement("span",{className:"mr-auto p-2"},O),M=o.a.createElement("span",{className:"p-2"},o.a.createElement("span",null,y),o.a.createElement("span",{className:"text-muted"}," / "),o.a.createElement("span",{className:"text-muted"},j));return o.a.createElement("div",{className:"d-flex infection-deck-card infection-group-".concat(w)},x,M,u&&c&&o.a.createElement("span",{className:"p-2"},o.a.createElement(s.a,{variant:"success",size:"xs",onClick:function(){return c(k)}},o.a.createElement(d.a,{size:18}))),m&&a&&o.a.createElement("span",{className:"p-2"},o.a.createElement(s.a,{size:"xs",onClick:function(){return a(k)}},o.a.createElement(d.c,{size:18}))),N&&o.a.createElement("span",{className:"p-2 infection-deck-card-extra"},o.a.createElement(s.a,{variant:"secondary-outline",size:"xs",onClick:function(){return p(!0)}},o.a.createElement(d.f,{size:18}))),N&&o.a.createElement(h.a,{show:N&&E,onHide:g},o.a.createElement(h.a.Header,{closeButton:!0},o.a.createElement(h.a.Title,null,"Additional Actions")),o.a.createElement(h.a.Body,null,o.a.createElement("div",{className:"d-flex infection-deck-card infection-group-".concat(w)},x,M),S.map((function(e,n){return o.a.createElement("div",{key:n},e)})))))},y=a(22),w=function(e,n){var a={};return e.forEach((function(e,t){var o=C(t,n);e.count>o&&N(t,a,e.count-o)})),a},O=function(e,n,a){var t=[];return Object.entries(a).forEach((function(a){var o=Object(l.a)(a,2),c=o[0],r=o[1],i=!!n&&0===C(c,n);t.push(j(c,r,i,e[c])),n&&N(c,n)})),t.sort((function(e,n){return e.city.name.localeCompare(n.city.name)})),t},j=function(e,n,a,t){return{city:t,id:e,count:n,first:a}},C=function(e,n){return n[e]||0},S=function(e,n){var a=C(e,n);return a>0&&(a>1?n[e]--:delete n[e],!0)},N=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;C(e,n)<=0&&(n[e]=0),n[e]=n[e]+a},x=function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),t=1;t<n;t++)a[t-1]=arguments[t];a.find((function(n){return S(e,n)}))},M=function(e,n){n[e]||(n[e]=0),n[e]++},z=function(){var e=Object(u.b)("game"),n=Object(l.a)(e,1)[0],a=v[n].cities,t=Object(u.b)("infectionDeck",(function(){return{epidemics:[],discard:{},removed:{}}})),c=Object(l.a)(t,2),r=c[0],m=c[1],s=function(e,n){var a={},t={};t.epidemics=e.epidemics.slice(0).reverse().map((function(e){return O(n,a,e)})),t.discard=O(n,a,e.discard),t.removed=O(n,a,e.removed);var o=w(n,a);return t.unseen=O(n,null,o),{explodedDeck:t,missingSection:o}}(r,a),d=s.explodedDeck,f=s.missingSection,b=function(e){!function(e,n,a){x.apply(void 0,[e].concat(Object(y.a)([n].concat(Object(y.a)(a)).reverse())))}(e,f,r.epidemics),M(e,r.discard),m(r)},E=function(e){!function(e,n,a){x.apply(void 0,[e,n].concat(Object(y.a)(a)))}(e,f,r.epidemics),M(e,r.discard),r.epidemics.push(r.discard),r.discard={},m(r)},p=function(e){return function(n){S(n,e),M(n,r.removed),m(r)}};return o.a.createElement(i.a,{fluid:!0,className:"infection-content"},d.epidemics.map((function(e,n){return o.a.createElement(L,{key:n,name:"Epidemic #".concat(d.epidemics.length-n),cards:e,infect:b,epidemic:E,remove:p(r.epidemics[r.epidemics.length-1-n]),showEpidemic:!1,showDraw:0===d.epidemics.slice(0,n).flatMap((function(e){return e})).length})})),o.a.createElement(L,{name:"Main Deck",cities:a,cards:d.unseen,infect:b,epidemic:E,remove:p(f),showEpidemic:!0,showDraw:0===d.epidemics.flatMap((function(e){return e})).length}),o.a.createElement(L,{name:"Discard",cities:a,cards:d.discard,remove:p(r.discard)}),o.a.createElement(L,{name:"Removed from Play",cities:a,cards:d.removed,unremove:function(e){S(e,r.removed),m(r)}}))},L=function(e){var n=e.name,a=e.cards,t=e.infect,c=e.epidemic,r=e.remove,l=e.unremove,i=e.showEpidemic,u=e.showDraw;return!a||a.length<=0?o.a.createElement(o.a.Fragment,null):o.a.createElement("div",{className:"infection-deck-section"},o.a.createElement("h3",{className:"infection-deck-section-title"},n),a.map((function(e,n){return o.a.createElement(k,{key:n,card:e,infect:t,epidemic:c,remove:r,unremove:l,showEpidemic:i,showDraw:u})})))},B=a(60),D=(a(51),function(){var e=Object(t.useState)(0),n=Object(l.a)(e,2),a=n[0],c=n[1],r=v[a].Config;return o.a.createElement(i.a,{fluid:!0,className:"main-content"},o.a.createElement("h3",null,"Start a New Game"),o.a.createElement(m.a,null,o.a.createElement(m.a.Group,{controlId:"init.game-name"},o.a.createElement(m.a.Label,null,"Game Version"),o.a.createElement(m.a.Control,{as:"select",value:a,onChange:function(e){return c(e.target.value)}},v.map((function(e,n){return o.a.createElement("option",{key:n,value:n},e.name)})))),o.a.createElement(r,{id:a})))}),A=function(){var e=Object(t.useState)("/infection"),n=Object(l.a)(e,2),a=n[0],c=n[1],r=Object(u.b)("game"),i=Object(l.a)(r,1)[0],f=Object(u.b)(),b=Object(l.a)(f,2)[1];return i||0===i?o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,{variant:"tabs",activeKey:a,onSelect:function(e){return c(e)}},o.a.createElement(B.a.Item,{className:"mr-auto"},o.a.createElement(B.a.Link,{eventKey:"/infection"},"Infection Deck")),o.a.createElement(m.a,{inline:!0,className:"nav-buttons"},o.a.createElement(s.a,{variant:"outline-primary",onClick:function(){return window.history.back()}},o.a.createElement(d.e,{size:24})),o.a.createElement(s.a,{variant:"outline-danger",onClick:function(){return b({})}},o.a.createElement(d.g,{size:24})))),"/infection"===a&&o.a.createElement(z,null),"/player-cards"===a&&o.a.createElement("div",null,"todo")):o.a.createElement(D,null)};r.a.render(o.a.createElement((function(){return o.a.createElement(u.a,null,o.a.createElement(A,null))}),null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b5d9b86b.chunk.js.map