"use strict";(self.webpackChunkstandard_notes_editor_template_cra_typescript=self.webpackChunkstandard_notes_editor_template_cra_typescript||[]).push([[480],{480:(e,t,n)=>{function r(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}n.r(t),n.d(t,{d:()=>w});var i="body catch class do else enum for foreach foreach_reverse if in interface mixin out scope struct switch try union unittest version while with";const o={keywords:r("abstract alias align asm assert auto break case cast cdouble cent cfloat const continue debug default delegate delete deprecated export extern final finally function goto immutable import inout invariant is lazy macro module new nothrow override package pragma private protected public pure ref return shared short static super synchronized template this throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters "+i),blockKeywords:r(i),builtin:r("bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte ucent uint ulong ushort wchar wstring void size_t sizediff_t"),atoms:r("exit failure success true false null"),hooks:{"@":function(e,t){return e.eatWhile(/[\w\$_]/),"meta"}}};var a,l=o.statementIndentUnit,u=o.keywords,s=o.builtin,c=o.blockKeywords,f=o.atoms,d=o.hooks,p=o.multiLineStrings,m=/[+\-*&%=<>!?|\/]/;function y(e,t){var n,r=e.next();if(d[r]){var i=d[r](e,t);if(!1!==i)return i}if('"'==r||"'"==r||"`"==r)return t.tokenize=(n=r,function(e,t){for(var r,i=!1,o=!1;null!=(r=e.next());){if(r==n&&!i){o=!0;break}i=!i&&"\\"==r}return(o||!i&&!p)&&(t.tokenize=null),"string"}),t.tokenize(e,t);if(/[\[\]{}\(\),;\:\.]/.test(r))return a=r,null;if(/\d/.test(r))return e.eatWhile(/[\w\.]/),"number";if("/"==r){if(e.eat("+"))return t.tokenize=k,k(e,t);if(e.eat("*"))return t.tokenize=h,h(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(m.test(r))return e.eatWhile(m),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var o=e.current();return u.propertyIsEnumerable(o)?(c.propertyIsEnumerable(o)&&(a="newstatement"),"keyword"):s.propertyIsEnumerable(o)?(c.propertyIsEnumerable(o)&&(a="newstatement"),"builtin"):f.propertyIsEnumerable(o)?"atom":"variable"}function h(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null;break}r="*"==n}return"comment"}function k(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null;break}r="+"==n}return"comment"}function _(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function b(e,t,n){var r=e.indented;return e.context&&"statement"==e.context.type&&(r=e.context.indented),e.context=new _(r,t,n,null,e.context)}function v(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}const w={name:"d",startState:function(e){return{tokenize:null,context:new _(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;a=null;var r=(t.tokenize||y)(e,t);if("comment"==r||"meta"==r)return r;if(null==n.align&&(n.align=!0),";"!=a&&":"!=a&&","!=a||"statement"!=n.type)if("{"==a)b(t,e.column(),"}");else if("["==a)b(t,e.column(),"]");else if("("==a)b(t,e.column(),")");else if("}"==a){for(;"statement"==n.type;)n=v(t);for("}"==n.type&&(n=v(t));"statement"==n.type;)n=v(t)}else a==n.type?v(t):(("}"==n.type||"top"==n.type)&&";"!=a||"statement"==n.type&&"newstatement"==a)&&b(t,e.column(),"statement");else v(t);return t.startOfLine=!1,r},indent:function(e,t,n){if(e.tokenize!=y&&null!=e.tokenize)return null;var r=e.context,i=t&&t.charAt(0);"statement"==r.type&&"}"==i&&(r=r.prev);var o=i==r.type;return"statement"==r.type?r.indented+("{"==i?0:l||n.unit):r.align?r.column+(o?0:1):r.indented+(o?0:n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}}]);
//# sourceMappingURL=480.chunk.js.map