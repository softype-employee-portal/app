(this.webpackJsonpSoftypeHR=this.webpackJsonpSoftypeHR||[]).push([[29],{759:function(e,t,a){"use strict";a.r(t);var n=a(40),l=a(1),r=a.n(l),c=a(4),o=(a(20),a(23)),s=a(28),i=a(59),m=Object(l.lazy)((function(){return Promise.all([a.e(1),a.e(2)]).then(a.bind(null,719))}));t.default=function(e){var t=e.match,a=Object(o.c)(),u=Object(o.d)((function(e){return e.appState.leave.leave_requests.filter((function(e){return e.id.toString()===t.params.id.toString()}))[0]})),d=Object(o.d)((function(e){return e.appState.auth.user})),b=Object(l.useState)(),f=Object(n.a)(b,2),p=f[0],y=f[1],g=Object(l.useState)(!1),j=Object(n.a)(g,2),O=j[0],E=j[1],h=Object(l.useRef)();if(!Object.keys(u).length)return r.a.createElement(i.g,null);var v=Object(s.w)(u);v=Object(s.p)(v,"no_of_days",Object(s.n)(v["date from"],v["date to"]),4);var w={start:new Date(v["date from"]),end:new Date(v["date to"]),title:v.category},k=v?Object.entries(v):[],S=function(e){E(!1);var t={id:v.id,approver:d.employeeId,status:Object(s.k)(e),statusCode:e,noOfDays:v["no of days"],employeeId:v["employee id"]};y(t),h.current.toggle()};return r.a.createElement(c.cb,null,r.a.createElement(i.b,Object.assign({ref:h},{show:h,onConfirm:function(){return O?Object(s.b)(a,v.id):Object(s.s)(a,p)},title:O?"Cancel Request?":"".concat(p&&p.status)})),r.a.createElement(c.s,{lg:6},r.a.createElement(c.h,{style:{maxHeight:500}},r.a.createElement(c.k,null,"Leave Request ID : ",t.params.id,"pending"===v.status&&3!==d.roleId&&r.a.createElement(c.g,{style:{float:"right"}},r.a.createElement(c.f,{color:"primary",onClick:function(){S(1)},className:"mr-2"},"Accept"),r.a.createElement(c.f,{onClick:function(){S(0)},color:"danger",className:"mr-2"},"Reject"),d.employeeId===v["employee id"]&&r.a.createElement(c.f,{onClick:function(){E(!0),h.current.toggle()},color:"warning"}," Cancel"))),r.a.createElement(c.i,{style:{overflowY:"auto"}},r.a.createElement("table",{className:"table table-hover ",style:{borderBottom:"1px solid grey"}},r.a.createElement("tbody",null,k.map((function(e,t){var a=Object(n.a)(e,2),l=a[0],c=a[1];return"id"!==l&&"employee id"!==l.toLowerCase()&&r.a.createElement("tr",{key:t.toString()},r.a.createElement("td",{className:"text-capitalize"},"  ","".concat(Object(s.y)(Object(s.x)(l)),":")),r.a.createElement("td",null,r.a.createElement("p",{className:"wrap-content-text",style:{minWidth:"100%"}}," ",c?r.a.createElement("strong",null,c):r.a.createElement("em",null,"NULL")," ")))}))))))),r.a.createElement(c.s,{lg:6,style:{minHeight:"500px"},className:"d-md-down-none"},r.a.createElement(m,{header:{right:!1,left:!1},style:{height:450},events:[w],clickable:!1})))}}}]);
//# sourceMappingURL=29.42d16c7f.chunk.js.map