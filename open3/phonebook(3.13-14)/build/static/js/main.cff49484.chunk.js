(this.webpackJsonpphonebook311=this.webpackJsonpphonebook311||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(16),o=n.n(a),u=n(3),s=n(0),l=function(e){var t=e.filter,n=e.eventfilter;return Object(s.jsxs)(s.Fragment,{children:["Search here..",Object(s.jsx)("input",{value:t,onChange:n})]})},i=n(4),j=n.n(i),b="/api/contact",d={getAll:function(){return j.a.get(b).then((function(e){return e.data}))},create:function(e){return j.a.post(b,e).then((function(e){return e.data}))},update:function(e,t){return j.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},remove:function(e,t){return j.a.delete("".concat(b,"/").concat(e),t).then((function(e){return e.data}))}},h=function(e){var t=e.personToshow;e.deleteHandler;return Object(s.jsx)("div",{children:t.map((function(e){return Object(s.jsxs)("li",{className:"persons",children:["".concat(e.name," :"),"    ",e.number]},e.id)}))})},f=(n(40),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(u.a)(a,2),i=o[0],j=o[1],b=Object(c.useState)(""),f=Object(u.a)(b,2),O=f[0],p=f[1],m=Object(c.useState)(""),g=Object(u.a)(m,2),v=g[0],x=g[1],S=Object(c.useState)(null),w=Object(u.a)(S,2),k=w[0],y=w[1],C=Object(c.useState)(null),M=Object(u.a)(C,2),N=M[0],T=M[1];Object(c.useEffect)((function(){d.getAll().then((function(e){console.log("successfull"),r(e)}))}),[]);var A=function(e){var t=e.errorMsg;return null===t?null:Object(s.jsx)("div",{className:"error",children:t})},B=function(e){var t=e.successMSg;return null===t?null:Object(s.jsx)("div",{className:"message",children:t})},E=v.length>=0?n.filter((function(e){return e.name.toLowerCase().includes(v.toLowerCase())})):n;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Phonebook"}),Object(s.jsx)(A,{errorMsg:k}),Object(s.jsx)(B,{successMSg:N}),Object(s.jsx)(l,{filter:v,eventfilter:function(e){x(e.target.value)}}),Object(s.jsx)(h,{personToshow:E}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:i,number:O,id:n.length+1};d.create(t).then((function(e){r(n.concat(e)),console.log(r),T("".concat(i," is added to the phoonebook")),setTimeout((function(){T(null)}),3e3)})).catch((function(e){y("".concat(i," is already added to phonebook change name and try again!")),setTimeout((function(){y(null)}),5e3)})),j(""),p("")},children:[Object(s.jsx)("input",{placeholder:"new contact name..",value:i,type:"text",onChange:function(e){return j(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{placeholder:"new contact number..",value:O,type:"number",onChange:function(e){return p(e.target.value)}}),Object(s.jsx)("button",{className:"addBtn",type:"submit",children:"add"})]})]})});o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.cff49484.chunk.js.map