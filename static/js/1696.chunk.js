"use strict";(self.webpackChunkstandard_notes_editor_template_cra_typescript=self.webpackChunkstandard_notes_editor_template_cra_typescript||[]).push([[1696],{1696:(t,e,n)=>{function r(t){return{type:t,style:"keyword"}}n.r(e),n.d(e,{haxe:()=>at,hxml:()=>it});var a,i=r("keyword a"),o=r("keyword b"),l=r("keyword c"),u=r("operator"),c={type:"atom",style:"atom"},f={type:"attribute",style:"attribute"},s=r("typedef"),d={if:i,while:i,else:o,do:o,try:o,return:l,break:l,continue:l,new:l,throw:l,var:r("var"),inline:f,static:f,using:r("import"),public:f,private:f,cast:r("cast"),import:r("import"),macro:r("macro"),function:r("function"),catch:r("catch"),untyped:r("untyped"),callback:r("cb"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:u,never:r("property_access"),trace:r("trace"),class:s,abstract:s,enum:s,interface:s,typedef:s,extends:s,implements:s,dynamic:s,true:c,false:c,null:c},p=/[+\-*&%=<>!?|]/;function m(t,e,n){return e.tokenize=n,n(t,e)}function v(t,e){for(var n,r=!1;null!=(n=t.next());){if(n==e&&!r)return!0;r=!r&&"\\"==n}}function y(t,e,n){return s=t,a=n,e}function h(t,e){var n=t.next();if('"'==n||"'"==n)return m(t,e,(r=n,function(t,e){return v(t,r)&&(e.tokenize=h),y("string","string")}));if(/[\[\]{}\(\),;\:\.]/.test(n))return y(n);if("0"==n&&t.eat(/x/i))return t.eatWhile(/[\da-f]/i),y("number","number");if(/\d/.test(n)||"-"==n&&t.eat(/\d/))return t.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),y("number","number");if(e.reAllowed&&"~"==n&&t.eat(/\//))return v(t,"/"),t.eatWhile(/[gimsu]/),y("regexp","string.special");if("/"==n)return t.eat("*")?m(t,e,b):t.eat("/")?(t.skipToEnd(),y("comment","comment")):(t.eatWhile(p),y("operator",null,t.current()));if("#"==n)return t.skipToEnd(),y("conditional","meta");if("@"==n)return t.eat(/:/),t.eatWhile(/[\w_]/),y("metadata","meta");if(p.test(n))return t.eatWhile(p),y("operator",null,t.current());if(/[A-Z]/.test(n))return t.eatWhile(/[\w_<>]/),y("type","type",a=t.current());t.eatWhile(/[\w_]/);var r,a=t.current(),i=d.propertyIsEnumerable(a)&&d[a];return i&&e.kwAllowed?y(i.type,i.style,a):y("variable","variable",a)}function b(t,e){for(var n,r=!1;n=t.next();){if("/"==n&&r){e.tokenize=h;break}r="*"==n}return y("comment","comment")}var k={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function x(t,e,n,r,a,i){this.indented=t,this.column=e,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function w(t,e){for(var n=t.localVars;n;n=n.next)if(n.name==e)return!0}function g(t,e){if(/[a-z]/.test(e.charAt(0)))return!1;for(var n=t.importedtypes.length,r=0;r<n;r++)if(t.importedtypes[r]==e)return!0}function A(t){for(var e=_.state,n=e.importedtypes;n;n=n.next)if(n.name==t)return;e.importedtypes={name:t,next:e.importedtypes}}var _={state:null,column:null,marked:null,cc:null};function V(){for(var t=arguments.length-1;t>=0;t--)_.cc.push(arguments[t])}function S(){return V.apply(null,arguments),!0}function W(t,e){for(var n=e;n;n=n.next)if(n.name==t)return!0;return!1}function z(t){var e=_.state;if(e.context){if(_.marked="def",W(t,e.localVars))return;e.localVars={name:t,next:e.localVars}}else if(e.globalVars){if(W(t,e.globalVars))return;e.globalVars={name:t,next:e.globalVars}}}var T={name:"this",next:null};function E(){_.state.context||(_.state.localVars=T),_.state.context={prev:_.state.context,vars:_.state.localVars}}function D(){_.state.localVars=_.state.context.vars,_.state.context=_.state.context.prev}function O(t,e){var n=function(){var n=_.state;n.lexical=new x(n.indented,_.stream.column(),t,null,n.lexical,e)};return n.lex=!0,n}function Z(){var t=_.state;t.lexical.prev&&(")"==t.lexical.type&&(t.indented=t.lexical.indented),t.lexical=t.lexical.prev)}function P(t){return function e(n){return n==t?S():";"==t?V():S(e)}}function I(t){return"@"==t?S(F):"var"==t?S(O("vardef"),Q,P(";"),Z):"keyword a"==t?S(O("form"),C,I,Z):"keyword b"==t?S(O("form"),I,Z):"{"==t?S(O("}"),E,M,Z,D):";"==t?S():"attribute"==t?S(B):"function"==t?S(Y):"for"==t?S(O("form"),P("("),O(")"),U,P(")"),Z,I,Z):"variable"==t?S(O("stat"),H):"switch"==t?S(O("form"),C,O("}","switch"),P("{"),M,Z,Z):"case"==t?S(C,P(":")):"default"==t?S(P(":")):"catch"==t?S(O("form"),E,P("("),rt,P(")"),I,Z,D):"import"==t?S(q,P(";")):"typedef"==t?S(G):V(O("stat"),C,P(";"),Z)}function C(t){return k.hasOwnProperty(t)||"type"==t?S($):"function"==t?S(Y):"keyword c"==t?S(N):"("==t?S(O(")"),N,P(")"),Z,$):"operator"==t?S(C):"["==t?S(O("]"),L(N,"]"),Z,$):"{"==t?S(O("}"),L(K,"}"),Z,$):S()}function N(t){return t.match(/[;\}\)\],]/)?V():V(C)}function $(t,e){return"operator"==t&&/\+\+|--/.test(e)?S($):"operator"==t||":"==t?S(C):";"!=t?"("==t?S(O(")"),L(C,")"),Z,$):"."==t?S(J,$):"["==t?S(O("]"),C,P("]"),Z,$):void 0:void 0}function B(t){return"attribute"==t?S(B):"function"==t?S(Y):"var"==t?S(Q):void 0}function F(t){return":"==t||"variable"==t?S(F):"("==t?S(O(")"),L(j,")"),Z,I):void 0}function j(t){if("variable"==t)return S()}function q(t,e){return"variable"==t&&/[A-Z]/.test(e.charAt(0))?(A(e),S()):"variable"==t||"property"==t||"."==t||"*"==e?S(q):void 0}function G(t,e){return"variable"==t&&/[A-Z]/.test(e.charAt(0))?(A(e),S()):"type"==t&&/[A-Z]/.test(e.charAt(0))?S():void 0}function H(t){return":"==t?S(Z,I):V($,P(";"),Z)}function J(t){if("variable"==t)return _.marked="property",S()}function K(t){if("variable"==t&&(_.marked="property"),k.hasOwnProperty(t))return S(P(":"),C)}function L(t,e){function n(r){return","==r?S(t,n):r==e?S():S(P(e))}return function(r){return r==e?S():V(t,n)}}function M(t){return"}"==t?S():V(I,M)}function Q(t,e){return"variable"==t?(z(e),S(tt,R)):S()}function R(t,e){return"="==e?S(C,R):","==t?S(Q):void 0}function U(t,e){return"variable"==t?(z(e),S(X,C)):V()}function X(t,e){if("in"==e)return S()}function Y(t,e){return"variable"==t||"type"==t?(z(e),S(Y)):"new"==e?S(Y):"("==t?S(O(")"),E,L(rt,")"),Z,tt,I,D):void 0}function tt(t){if(":"==t)return S(et)}function et(t){return"type"==t||"variable"==t?S():"{"==t?S(O("}"),L(nt,"}"),Z):void 0}function nt(t){if("variable"==t)return S(tt)}function rt(t,e){if("variable"==t)return z(e),S(tt)}D.lex=!0,Z.lex=!0;const at={name:"haxe",startState:function(t){return{tokenize:h,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new x(-t,0,"block",!1),importedtypes:["Int","Float","String","Void","Std","Bool","Dynamic","Array"],context:null,indented:0}},token:function(t,e){if(t.sol()&&(e.lexical.hasOwnProperty("align")||(e.lexical.align=!1),e.indented=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);return"comment"==s?n:(e.reAllowed=!("operator"!=s&&"keyword c"!=s&&!s.match(/^[\[{}\(,;:]$/)),e.kwAllowed="."!=s,function(t,e,n,r,a){var i=t.cc;for(_.state=t,_.stream=a,_.marked=null,_.cc=i,t.lexical.hasOwnProperty("align")||(t.lexical.align=!0);;)if((i.length?i.pop():I)(n,r)){for(;i.length&&i[i.length-1].lex;)i.pop()();return _.marked?_.marked:"variable"==n&&w(t,r)?"variableName.local":"variable"==n&&g(t,r)?"variableName.special":e}}(e,n,s,a,t))},indent:function(t,e,n){if(t.tokenize!=h)return 0;var r=e&&e.charAt(0),a=t.lexical;"stat"==a.type&&"}"==r&&(a=a.prev);var i=a.type,o=r==i;return"vardef"==i?a.indented+4:"form"==i&&"{"==r?a.indented:"stat"==i||"form"==i?a.indented+n.unit:"switch"!=a.info||o?a.align?a.column+(o?0:1):a.indented+(o?0:n.unit):a.indented+(/^(?:case|default)\b/.test(e)?n.unit:2*n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}},it={name:"hxml",startState:function(){return{define:!1,inString:!1}},token:function(t,e){var n=t.peek(),r=t.sol();if("#"==n)return t.skipToEnd(),"comment";if(r&&"-"==n){var a="variable-2";return t.eat(/-/),"-"==t.peek()&&(t.eat(/-/),a="keyword a"),"D"==t.peek()&&(t.eat(/[D]/),a="keyword c",e.define=!0),t.eatWhile(/[A-Z]/i),a}n=t.peek();return 0==e.inString&&"'"==n&&(e.inString=!0,t.next()),1==e.inString?(t.skipTo("'")||t.skipToEnd(),"'"==t.peek()&&(t.next(),e.inString=!1),"string"):(t.next(),null)},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=1696.chunk.js.map