function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3Djv":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("LRne"),a=n("eIep"),o=n("8Y7J"),c=n("IheW"),i=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.baseUrl="http://localhost:8080/products"}return _createClass(t,[{key:"fetchProducts",value:function(){return this.http.get(this.baseUrl)}},{key:"getProduct",value:function(t){return this.http.get("".concat(this.baseUrl,"/").concat(t))}},{key:"addProduct",value:function(t,e){var n=this,o=Object(r.a)({});return e&&(o=o.pipe(Object(a.a)((function(){return t.imageUrl?n.http.delete("http://localhost:8080/images/".concat(t.imageUrl)):Object(r.a)({})})),Object(a.a)((function(){t.imageUrl=n.randomStr();var r=new FormData;return r.append("pid",t.imageUrl),r.append("file",e),n.http.post("http://localhost:8080/images",r,{responseType:"text"})})))),o.pipe(Object(a.a)((function(){return n.http.post(n.baseUrl,t)})))}},{key:"deleteProduct",value:function(t){return this.http.delete("".concat(this.baseUrl,"/").concat(t))}},{key:"randomStr",value:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz0123456789",n=0;n<14;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}}]),t}();return t.ngInjectableDef=o.Ib({factory:function(){return new t(o.Jb(c.c))},token:t,providedIn:"root"}),t}()}}]);