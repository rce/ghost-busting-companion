(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(e,n,t){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,n,t,i){void 0===i&&(i=t),Object.defineProperty(e,i,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,i){void 0===i&&(i=t),e[i]=n[t]}),c=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return c(n,e),n};n.__esModule=!0;var a=u(t(0)),o=t(4);t(8);var d=[{name:"henki",evidence:["SPIRIT_BOX","FINGERPRINTS","GHOSTWRITING"]},{name:"haamu",evidence:["FINGERPRINTS","FREEZING","SPIRIT_BOX"]},{name:"kummitus",evidence:["EMF_FIVE","GHOSTORB","FREEZING"]},{name:"räyhähenki",evidence:["SPIRIT_BOX","FINGERPRINTS","GHOSTORB"]},{name:"banshee",evidence:["EMF_FIVE","FINGERPRINTS","FREEZING"]},{name:"jinni",evidence:["SPIRIT_BOX","GHOSTORB","EMF_FIVE"]},{name:"mare",evidence:["SPIRIT_BOX","GHOSTORB","FREEZING"]},{name:"revenant",evidence:["EMF_FIVE","FINGERPRINTS","GHOSTWRITING"]},{name:"varjo",evidence:["EMF_FIVE","GHOSTWRITING","GHOSTORB"]},{name:"demoni",evidence:["SPIRIT_BOX","GHOSTWRITING","FREEZING"]},{name:"yurei",evidence:["GHOSTORB","GHOSTWRITING","FREEZING"]},{name:"oni",evidence:["EMF_FIVE","SPIRIT_BOX","GHOSTWRITING"]},{name:"yokai",evidence:["SPIRIT_BOX","GHOSTORB","GHOSTWRITING"]},{name:"hantu",evidence:["FINGERPRINTS","GHOSTORB","GHOSTWRITING"]}];function I(e){var n;return(n=[]).concat.apply(n,e)}function f(e){return Array.from(new Set(e))}var v=f(I(d.map((function(e){return e.evidence}))));o.render(a.default.createElement((function(){var e=a.useState([]),n=e[0],t=e[1],r=function(e){return n.includes(e)},c=f(I(d.filter((function(e){return n.every((function(n){return e.evidence.includes(n)}))})).map((function(e){return i(i({},e),{evidence:e.evidence.filter((function(e){return!r(e)}))})})).map((function(e){return e.evidence})))).filter((function(e){return!r(e)}));return a.default.createElement("div",{className:"evidence-grid"},v.map((function(e){var i=["evidence-grid--evidence"];return n.includes(e)?i.push("found"):c.includes(e)||i.push("impossible"),a.default.createElement("div",{className:i.join(" "),onClick:function(){return function(e){var i=n.filter((function(n){return n!=e}));n.includes(e)?t(i):c.includes(e)&&t([e].concat(i))}(e)}},e)})))}),null),document.getElementById("app"))},8:function(e,n){function t(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")}window.addEventListener("resize",t),t()}},[[2,1,2]]]);
//# sourceMappingURL=0.bundle.83b08fde494b9d09ddd0.js.map