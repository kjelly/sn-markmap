"use strict";(self.webpackChunkstandard_notes_editor_template_cra_typescript=self.webpackChunkstandard_notes_editor_template_cra_typescript||[]).push([[9572],{9572:(e,t,r)=>{r.r(t),r.d(t,{tiddlyWiki:()=>y});var n={},i={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},a=/[\w_\-]/i,u=/^\-\-\-\-+$/,o=/^\/\*\*\*$/,c=/^\*\*\*\/$/,f=/^<<<$/,l=/^\/\/\{\{\{$/,m=/^\/\/\}\}\}$/,s=/^<!--\{\{\{-->$/,k=/^<!--\}\}\}-->$/,h=/^\{\{\{$/,d=/^\}\}\}$/,p=/.*?\}\}\}/;function _(e,t,r){return t.tokenize=r,r(e,t)}function b(e,t){var r=e.sol(),i=e.peek();if(t.block=!1,r&&/[<\/\*{}\-]/.test(i)){if(e.match(h))return t.block=!0,_(e,t,w);if(e.match(f))return"quote";if(e.match(o)||e.match(c))return"comment";if(e.match(l)||e.match(m)||e.match(s)||e.match(k))return"comment";if(e.match(u))return"contentSeparator"}if(e.next(),r&&/[\/\*!#;:>|]/.test(i)){if("!"==i)return e.skipToEnd(),"header";if("*"==i)return e.eatWhile("*"),"comment";if("#"==i)return e.eatWhile("#"),"comment";if(";"==i)return e.eatWhile(";"),"comment";if(":"==i)return e.eatWhile(":"),"comment";if(">"==i)return e.eatWhile(">"),"quote";if("|"==i)return"header"}if("{"==i&&e.match("{{"))return _(e,t,w);if(/[hf]/i.test(i)&&/[ti]/i.test(e.peek())&&e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if('"'==i)return"string";if("~"==i)return"brace";if(/[\[\]]/.test(i)&&e.match(i))return"brace";if("@"==i)return e.eatWhile(a),"link";if(/\d/.test(i))return e.eatWhile(/\d/),"number";if("/"==i){if(e.eat("%"))return _(e,t,$);if(e.eat("/"))return _(e,t,z)}if("_"==i&&e.eat("_"))return _(e,t,W);if("-"==i&&e.eat("-")){if(" "!=e.peek())return _(e,t,g);if(" "==e.peek())return"brace"}return"'"==i&&e.eat("'")?_(e,t,v):"<"==i&&e.eat("<")?_(e,t,x):(e.eatWhile(/[\w\$_]/),n.propertyIsEnumerable(e.current())?"keyword":null)}function $(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=b;break}n="%"==r}return"comment"}function v(e,t){for(var r,n=!1;r=e.next();){if("'"==r&&n){t.tokenize=b;break}n="'"==r}return"strong"}function w(e,t){var r=t.block;return r&&e.current()?"comment":!r&&e.match(p)||r&&e.sol()&&e.match(d)?(t.tokenize=b,"comment"):(e.next(),"comment")}function z(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=b;break}n="/"==r}return"emphasis"}function W(e,t){for(var r,n=!1;r=e.next();){if("_"==r&&n){t.tokenize=b;break}n="_"==r}return"link"}function g(e,t){for(var r,n=!1;r=e.next();){if("-"==r&&n){t.tokenize=b;break}n="-"==r}return"deleted"}function x(e,t){if("<<"==e.current())return"meta";var r=e.next();return r?">"==r&&">"==e.peek()?(e.next(),t.tokenize=b,"meta"):(e.eatWhile(/[\w\$_]/),i.propertyIsEnumerable(e.current())?"keyword":null):(t.tokenize=b,null)}const y={name:"tiddlywiki",startState:function(){return{tokenize:b}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}}]);
//# sourceMappingURL=9572.chunk.js.map