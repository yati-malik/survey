(this.webpackJsonpsurvey=this.webpackJsonpsurvey||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=(n(16),n(4)),u=n(6),s=n(2),l=n(5),f=n.n(l),d=n(10),h=function(){var e=Object(d.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yati-malik.github.io/survey/surveyOne.json");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=n(7),m=function(e){var t=[];return function e(r){var a={currentPathIdentifier:r.questionId,dfsLength:1};if(t.find((function(e){return e.currentPathIdentifier==a.currentPathIdentifier})))return a.dfsLength;t.push(a);var o,c=Object(i.a)(r.options);try{for(c.s();!(o=c.n()).done;){var u=o.value;if(null!==u.questionPointer){var s=n(u.questionPointer),l=e(s)+1;a.dfsLength<l&&(a.dfsLength=l)}}}catch(f){c.e(f)}finally{c.f()}return a.dfsLength}(Object(v.a)({},e[0])),t;function n(t){var n=e.filter((function(e){return e.questionId===t})),r=Object(s.a)(n,1)[0];return Object(v.a)({},r)}};var p=function(e){var t=Object(r.useState)(0),n=Object(s.a)(t,2),o=n[0],c=n[1],l=Object(r.useState)([]),f=Object(s.a)(l,2),d=f[0],v=f[1],p=Object(r.useState)(0),b=Object(s.a)(p,2),g=b[0],j=b[1],O=Object(r.useRef)([]),y=Object(r.useRef)([]);return Object(r.useEffect)((function(){h().then((function(e){O.current=e;var t=[].concat(Object(u.a)(d),[e[0]]);y.current=m(e),console.log(y.current),v(t)}))}),[]),a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,o),a.a.createElement("div",null,a.a.createElement("div",{className:"question"},a.a.createElement("span",null,d.length>0?d[d.length-1].questionText:""),a.a.createElement("br",null),d.length>0?d[d.length-1].options.map((function(e){return a.a.createElement("div",{key:d[d.length-1].questionId+e.optionId,className:"option"},a.a.createElement("input",{type:"radio","data-questionid":e.questionPointer,name:"option",id:e.optionId}),a.a.createElement("span",{className:"option-name"},e.optionName))})):""),a.a.createElement("div",null,a.a.createElement("input",{type:"button",value:"Next",onClick:function(e){var t,n=document.querySelectorAll(".question input[type=radio]"),r=Object(i.a)(n);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.checked&&function(){var e=a.dataset.questionid,t=O.current.filter((function(t){return t.questionId==e}));if(0===t.length);else{var n=y.current.find((function(t){return t.currentPathIdentifier===e})).dfsLength,r=g+1,o=(100*r/(n+r)).toFixed(2);j(r),c(o),v([].concat(Object(u.a)(d),[t[0]]))}}()}}catch(o){r.e(o)}finally{r.f()}}}))))};n(18);var b=function(){return a.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.67c38b5d.chunk.js.map