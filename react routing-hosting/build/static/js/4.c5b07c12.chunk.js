(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={card:"Card_card__1dtaw"}},46:function(e,t,c){e.exports={form:"QuoteForm_form__2uAKQ",loading:"QuoteForm_loading__35KXO",control:"QuoteForm_control__l2U8S",actions:"QuoteForm_actions__2CPde"}},54:function(e,t,c){"use strict";c.r(t);var n=c(21),o=c(1),r=c.n(o),a=c(2),s=c(45),u=c.n(s),i=c(0),l=function(e){return Object(i.jsx)("div",{className:u.a.card,children:e.children})},d=c(14),j=c(46),b=c.n(j),f=function(e){var t=Object(o.useState)(!1),c=Object(n.a)(t,2),s=c[0],u=c[1],j=Object(o.useRef)(),f=Object(o.useRef)();return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(a.a,{when:s,message:function(e){return"Are You Sure? Data will Lost"}}),Object(i.jsx)(l,{children:Object(i.jsxs)("form",{onFocus:function(){u(!0)},className:b.a.form,onSubmit:function(t){t.preventDefault();var c=j.current.value,n=f.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:b.a.loading,children:Object(i.jsx)(d.a,{})}),Object(i.jsxs)("div",{className:b.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:j})]}),Object(i.jsxs)("div",{className:b.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:f})]}),Object(i.jsx)("div",{className:b.a.actions,children:Object(i.jsx)("button",{onClick:function(){u(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(19),x=c(20);t.default=function(){var e=Object(h.a)(x.b),t=e.sendRequest,c=e.status,n=Object(a.h)();Object(o.useEffect)((function(){"completed"===c&&n.push("/quotes")}),[c,n]);return Object(i.jsx)(f,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=4.c5b07c12.chunk.js.map