(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,n){e.exports=n(262)},142:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(33),c=n.n(l),o=n(84),i=n.n(o),u=n(17),s=n(118),b=n(25),m=n(26),d=n(27),f=n(28),p=n(29),y=(n(142),n(263)),E=n(119),h=function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json").then(function(e){return e.json()})};var g=function(e){var t=e.showList;return a.a.createElement(y.a,{size:"massive",onClick:t,primary:!0,basic:!0},"Load data")},O=function(e){var t=e.byName,n=e.byId,r=e.bySex,l=e.byBorn,c=e.byDied,o=e.byAge,i=e.byCentury;return a.a.createElement(y.a.Group,null,a.a.createElement(y.a,{basic:!0,size:"big",color:"red",onClick:t},"Sort by name"),a.a.createElement(y.a,{basic:!0,size:"big",color:"orange",onClick:n},"Sort by id"),a.a.createElement(y.a,{basic:!0,size:"big",color:"yellow",onClick:r},"Sort by sex"),a.a.createElement(y.a,{basic:!0,size:"big",color:"olive",onClick:l},"Sort by born"),a.a.createElement(y.a,{basic:!0,size:"big",color:"green",onClick:c},"Sort by died"),a.a.createElement(y.a,{basic:!0,size:"big",color:"teal",onClick:o},"Sort by age"),a.a.createElement(y.a,{basic:!0,size:"big",color:"blue",onClick:i},"Sort by century"))},v=n(268),C=function(e){var t=e.filtering;return a.a.createElement(v.a,{onChange:function(e){t(e.target.value)},id:"form-input-control",fluid:!0,icon:"search",placeholder:"Search..."})},w=n(269),j=function(){return a.a.createElement(w.a.Header,null,a.a.createElement(w.a.Row,null,a.a.createElement(w.a.HeaderCell,null,"Id"),a.a.createElement(w.a.HeaderCell,null,"Name"),a.a.createElement(w.a.HeaderCell,null,"Sex"),a.a.createElement(w.a.HeaderCell,null,"Born"),a.a.createElement(w.a.HeaderCell,null,"Died"),a.a.createElement(w.a.HeaderCell,null,"Age"),a.a.createElement(w.a.HeaderCell,null,"Century"),a.a.createElement(w.a.HeaderCell,null,"Mother"),a.a.createElement(w.a.HeaderCell,null,"Father")))},k=n(34),S=function(e){var t=e.person,n=t.id,r=t.name,l=t.sex,c=t.born,o=t.died,i=t.mother,u=t.father,s=t.age,b=t.century;return a.a.createElement(a.a.Fragment,null,a.a.createElement(w.a.Cell,null,n),c<1650?a.a.createElement(w.a.Cell,null,r," ",a.a.createElement(k.a,{name:"checkmark"})):a.a.createElement(w.a.Cell,null,r),a.a.createElement(w.a.Cell,null,"f"===l?a.a.createElement(k.a,{name:"venus"}):a.a.createElement(k.a,{name:"mars"})),a.a.createElement(w.a.Cell,null,c),a.a.createElement(w.a.Cell,null,o),s>=65?a.a.createElement(w.a.Cell,{positive:!0},s):a.a.createElement(w.a.Cell,null,s),a.a.createElement(w.a.Cell,null,b),a.a.createElement(w.a.Cell,null,i||"Unknown"),a.a.createElement(w.a.Cell,null,u||"Unknown"))},P=function(e){var t=e.person,n=e.isActive,r=e.onRawSelected;return a.a.createElement(w.a.Row,{key:t.id,onClick:r,className:n?"negative":""},a.a.createElement(S,{person:t}))};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var x=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).updateActiveRow=function(e){n.setState(function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{activeId:e})})},n.state={activeId:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(w.a,{celled:!0},a.a.createElement(j,null),a.a.createElement(w.a.Body,null,this.props.people.map(function(t){return a.a.createElement(P,{person:t,key:t.id,onRawSelected:function(){return e.updateActiveRow(t.id)},isActive:e.state.activeId===t.id})})))}}]),t}(r.Component);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var L=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).cashTable=Object(E.a)([function(e){return e.initialTable},function(e){return e.sortValue},function(e){return e.inputValue}],function(e,t,n){var r=n.toLowerCase().trim();return e.filter(function(e){return e.name.toLowerCase().includes(r)||(e.mother?e.mother.toLowerCase():"").includes(r)||(e.father?e.father.toLowerCase():"").includes(r)}).sort(function(e,n){switch(t){case"name":return e.name.localeCompare(n.name);case"id":return e.id-n.id;case"sex":return e.sex.localeCompare(n.sex);case"born":return e.born-n.born;case"died":return e.died-n.died;case"age":return e.age-n.age;case"century":return e.century-n.century;default:return e.id-n.id}})}),n.showList=Object(s.a)(i.a.mark(function e(){var t,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),e.next=3,h();case 3:t=e.sent,r=t.map(function(e,t){return H({},e,{id:t+1,age:e.died-e.born,century:Math.ceil(e.died/100)})}),n.setState({initialTable:r,currentTable:r});case 6:case"end":return e.stop()}},e)})),n.filtering=function(e){e&&n.setState({inputValue:e})},n.sortTable=function(e){n.setState(function(t){return H({},t,{sortValue:e})})},n.state={initialTable:null,currentTable:null,sortValue:null,inputValue:"",loading:!1},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.initialTable,r=t.loading;return null===n?r?a.a.createElement(y.a,{size:"massive",loading:!0,primary:!0},"Loading"):a.a.createElement(g,{showList:this.showList}):a.a.createElement("div",{className:"wrapper"},a.a.createElement(C,{filtering:this.filtering}),a.a.createElement(O,{byName:function(){return e.sortTable("name")},byId:function(){return e.sortTable("id")},bySex:function(){return e.sortTable("sex")},byBorn:function(){return e.sortTable("born")},byDied:function(){return e.sortTable("died")},byAge:function(){return e.sortTable("age")},byCentury:function(){return e.sortTable("century")}}),a.a.createElement(x,{people:this.cashTable(this.state)}))}}]),t}(r.Component);c.a.render(a.a.createElement(L,{test:123}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.586813e9.chunk.js.map