(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=u,e.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e);var c=n("q1tI"),f=n.n(c),s=n("8Bbg"),l=n.n(s),p=n("8Kt/"),d=n.n(p),y=f.a.createElement;function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var v=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(i,t);var e,n,a,u=h(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),u.apply(this,arguments)}return e=i,(n=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return y(f.a.Fragment,null,y(d.a,null,y("meta",{charSet:"utf-8"}),y("title",null,"KoalaDigital | Web, Shopify and Designer service in Ryde Sydney \ud83d\udc28"),y("meta",{content:"Create new or improve existing websites, Shopify stores or online portals \u2022 Custom digital design, banners, themes, flyers and videos \u2022 Webmaster service available",name:"description"}),y("meta",{content:"KoalaDigital | Web, Shopify and Designer service in Ryde Sydney \ud83d\udc28",property:"og:title"}),y("meta",{content:"KoalaDigital | Web, Shopify and Designer service in Ryde Sydney \ud83d\udc28",property:"twitter:title"}),y("meta",{content:"width=device-width, initial-scale=1",name:"viewport"}),y("link",{href:"/css/tailwind.css",rel:"stylesheet",type:"text/css"})),y(e,n))}}])&&r(e.prototype,n),a&&r(e,a),i}(l.a);e.default=v},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),a=n("lwAK"),u=n("FYa8"),i=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var i=0,c=l.length;i<c;i++){var f=l[i];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var s=o.props[f],p=r[f]||new Set;p.has(s)?a=!1:(p.add(s),r[f]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function y(t){var e=t.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(t)},e)}))})))}y.rewind=d.rewind;var h=y;e.default=h},B5Ud:function(t,e,n){"use strict";var r=n("o0o1"),o=n("lwsE"),a=n("W8MJ"),u=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),f=n("yXPU");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var l=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=m,e.default=void 0;var p=l(n("q1tI")),d=n("g/15");function y(t){return h.apply(this,arguments)}function h(){return(h=f(r.mark((function t(e){var n,o,a;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return a=t.sent,t.abrupt("return",{pageProps:a});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps;var v=function(t){u(n,t);var e=s(n);function n(){return o(this,n),e.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return(p.default.createElement(n,Object.assign({},r,o||a?{}:{url:m(e)})))}}]),n}(p.default.Component);function m(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=v,v.origGetInitialProps=y,v.getInitialProps=y},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),u=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||u()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),u=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),f=n("RIqP");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(i){u(f,i);var c=s(f);function f(t){var a;return r(this,f),a=c.call(this,t),p&&(e.add(o(a)),n(o(a))),a}return a(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component))}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o}},[[0,0,1,2]]]);