"use strict";(self.webpackChunkstandard_notes_editor_template_cra_typescript=self.webpackChunkstandard_notes_editor_template_cra_typescript||[]).push([[8016],{8016:(t,r,n)=>{function e(t,r){return t.skipToEnd(),r.cur=s,"error"}function u(t,r){return t.match(/^HTTP\/\d\.\d/)?(r.cur=c,"keyword"):t.match(/^[A-Z]+/)&&/[ \t]/.test(t.peek())?(r.cur=a,"keyword"):e(t,r)}function c(t,r){var n=t.match(/^\d+/);if(!n)return e(t,r);r.cur=o;var u=Number(n[0]);return u>=100&&u<400?"atom":"error"}function o(t,r){return t.skipToEnd(),r.cur=s,null}function a(t,r){return t.eatWhile(/\S/),r.cur=i,"string.special"}function i(t,r){return t.match(/^HTTP\/\d\.\d$/)?(r.cur=s,"keyword"):e(t,r)}function s(t){return t.sol()&&!t.eat(/[ \t]/)?t.match(/^.*?:/)?"atom":(t.skipToEnd(),"error"):(t.skipToEnd(),"string")}function d(t){return t.skipToEnd(),null}n.r(r),n.d(r,{http:()=>p});const p={name:"http",token:function(t,r){var n=r.cur;return n!=s&&n!=d&&t.eatSpace()?null:n(t,r)},blankLine:function(t){t.cur=d},startState:function(){return{cur:u}}}}}]);
//# sourceMappingURL=8016.chunk.js.map