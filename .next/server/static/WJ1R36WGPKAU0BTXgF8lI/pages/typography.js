module.exports=function(e){var t=require("../../../ssr-module-cache.js");function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}},o=!0;try{e[a].call(n.exports,n,n.exports,r),o=!1}finally{o&&delete t[a]}return n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/_next/",r(r.s=14)}({"/+P4":function(e,t,r){var a=r("Bhuq"),n=r("TRZx");function o(t){return e.exports=o=n?a:function(e){return e.__proto__||a(e)},o(t)}e.exports=o},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},14:function(e,t,r){e.exports=r("C4at")},"5Uuq":function(e,t,r){var a=r("Jo+v"),n=r("hfKm");e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=n&&a?a(e,r):{};o.get||o.set?n(t,r,o):t[r]=e[r]}return t.default=e,t}},"9Pu4":function(e,t){e.exports=require("@material-ui/core/styles")},Bhuq:function(e,t,r){e.exports=r("/+oN")},C4at:function(e,t,r){"use strict";var a=r("KI45");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=a(r("Zmqe"))},FDO7:function(e,t,r){"use strict";var a=r("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=a(r("/HRN")),o=a(r("WaGi")),s=a(r("ZDA2")),i=a(r("/+P4")),l=a(r("N9n2")),u=a(r("xHqa")),c=a(r("cDcd")),f=(a(r("rf6O")),a(r("UVoM"))),p=a(r("qt1I"));t.styles=function(e){return{layout:{width:"100%",flex:1,display:"flex",justifyContent:"center",alignItems:"stretch",flexDirection:"column"},row:(0,u.default)({display:"flex",justifyContent:"stretch",alignItems:"center",margin:"2rem"},e.breakpoints.down("sm"),{flexDirection:"column",margin:"2rem 0"}),label:(0,u.default)({width:350,padding:"0 2rem 1rem 2rem",textAlign:"right",fontFamily:"Roboto Mono",fontWeight:"bold"},e.breakpoints.down("sm"),{textAlign:"center"}),item:{padding:"2rem",flex:1}}};var d=function(e){function t(){return(0,n.default)(this,t),(0,s.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return c.default.createElement("div",{className:this.props.classes.layout},c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="h1">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"h1",color:"inherit"},"h1. Heading"))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="h2">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"h2",color:"inherit"},"h2. Heading"))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="h3">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"h3",color:"inherit"},"h3. Heading"))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="h4">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"h4",color:"inherit"},"h4. Heading"))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="h5">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"h5",color:"inherit"},"h5. Heading"))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="h6">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"h6",color:"inherit"},"h6. Heading"))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="subtitle1">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"subtitle1",color:"inherit"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="subtitle2">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"subtitle2",color:"inherit"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="body1">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"body1",color:"inherit"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="body2">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"body2",color:"inherit"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="button">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"button",color:"inherit"},"Button text"))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="caption">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"caption",color:"inherit"},"Caption text"))),c.default.createElement("div",{className:this.props.classes.row},c.default.createElement(f.default,{className:this.props.classes.label,variant:"body1",color:"inherit"},'<Typography variant="overline">'),c.default.createElement(p.default,{className:this.props.classes.item},c.default.createElement(f.default,{variant:"overline",color:"inherit"},"Overline text"))))}}]),t}(c.default.Component);t.default=d},"Jo+v":function(e,t,r){e.exports=r("Z6Kq")},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},N9n2:function(e,t,r){var a=r("SqZg"),n=r("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},SqZg:function(e,t,r){e.exports=r("o5io")},TRZx:function(e,t,r){e.exports=r("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},UVoM:function(e,t){e.exports=require("@material-ui/core/Typography")},WaGi:function(e,t,r){var a=r("hfKm");function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),a(e,n.key,n)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,r){e.exports=r("gHn/")},Z6Kq:function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-descriptor")},Z7t5:function(e,t,r){e.exports=r("vqFK")},ZDA2:function(e,t,r){var a=r("iZP3"),n=r("K47E");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?n(e):t}},Zmqe:function(e,t,r){"use strict";var a=r("5Uuq");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("9Pu4"),o=a(r("FDO7")),s=(0,n.withStyles)(o.styles)(o.default);s.getInitialProps=o.default.getInitialProps;var i=s;t.default=i},cDcd:function(e,t){e.exports=require("react")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,r){e.exports=r("TUA0")},iZP3:function(e,t,r){var a=r("XVgq"),n=r("Z7t5");function o(e){return(o="function"==typeof n&&"symbol"==typeof a?function(e){return typeof e}:function(e){return e&&"function"==typeof n&&e.constructor===n&&e!==n.prototype?"symbol":typeof e})(e)}function s(t){return"function"==typeof n&&"symbol"===o(a)?e.exports=s=function(e){return o(e)}:e.exports=s=function(e){return e&&"function"==typeof n&&e.constructor===n&&e!==n.prototype?"symbol":o(e)},s(t)}e.exports=s},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},qt1I:function(e,t){e.exports=require("@material-ui/core/Paper")},rf6O:function(e,t){e.exports=require("prop-types")},vjea:function(e,t,r){var a=r("TRZx");function n(t,r){return e.exports=n=a||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},xHqa:function(e,t,r){var a=r("hfKm");e.exports=function(e,t,r){return t in e?a(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}});