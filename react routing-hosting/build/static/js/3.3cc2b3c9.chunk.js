(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{47:function(e,t,c){e.exports={comments:"Comments_comments__1KPLF"}},48:function(e,t,c){e.exports={form:"NewCommentForm_form__1qOsO",loading:"NewCommentForm_loading__2yU0p",control:"NewCommentForm_control__2KX-f",actions:"NewCommentForm_actions__2DKo5"}},49:function(e,t,c){e.exports={item:"CommentItem_item__25zvM"}},50:function(e,t,c){e.exports={comments:"CommentsList_comments__a2phD"}},51:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__3UXtC"}},53:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(8),o=c(21),a=c(1),r=c(47),m=c.n(r),j=c(48),i=c.n(j),d=c(19),l=c(20),u=c(14),b=c(0),x=function(e){var t=Object(a.useRef)(),c=Object(d.a)(l.a),n=c.sendRequest,s=c.status,o=c.error,r=e.onAddedComment;Object(a.useEffect)((function(){"completed"!==s||o||r()}),[s,o,r]);var m=function(c){c.preventDefault();var s=t.current.value;n({commentData:{text:s},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:i.a.form,onSubmit:m,children:["pending"===s&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(u.a,{})}),Object(b.jsxs)("div",{className:i.a.control,onSubmit:m,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:i.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(49),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(50),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.j)().quoteId,j=Object(d.a)(l.c),i=j.sendRequest,O=j.status,h=j.data;Object(a.useEffect)((function(){i(r)}),[i,r]);var f,p=Object(a.useCallback)((function(){i(r)}),[i,r]);return"pending"===O&&(f=Object(b.jsxs)("div",{className:"centered",children:[" ",Object(b.jsx)(u.a,{})," "]})),"completed"===O&&h&&h.length>0&&(f=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(f=Object(b.jsx)("p",{className:"centered",children:"No Comments were added yet!"})),Object(b.jsxs)("section",{className:m.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:r,onAddedComment:p}),f]})},C=c(51),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(n.k)(),t=Object(n.j)();console.log(t.quoteId),console.log(e.path),console.log(e.url);var c=t.quoteId,o=Object(d.a)(l.e,!0),r=o.sendRequest,m=o.status,j=o.data,i=o.error;return Object(a.useEffect)((function(){r(c)}),[r,c]),"pending"===m?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(u.a,{})}):i?Object(b.jsx)("p",{className:"centered",children:i}):j.text?Object(b.jsxs)("div",{children:[Object(b.jsx)(q,{text:j.text,author:j.author}),Object(b.jsx)(n.c,{path:"".concat(e.path),exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(s.b,{to:"".concat(e.url,"/comments"),className:"btn--flat",children:"Load Comments"})})}),Object(b.jsx)(n.c,{path:"".concat(e.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:"No Quote Found!"})}}}]);
//# sourceMappingURL=3.3cc2b3c9.chunk.js.map