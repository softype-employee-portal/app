(this.webpackJsonpSoftypeHR=this.webpackJsonpSoftypeHR||[]).push([[32],{1291:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),c=n(15),i=n(40),o=n(1),l=n.n(o),u=n(4),p=n(24);t.default=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(o.useState)(""),f=Object(i.a)(s,2),m=f[0],d=f[1],v=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",n,n.name),t.append("description",m),e.next=5,p.a.post("/upload",t,!0);case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.D,null,l.a.createElement(u.E,{row:!0},l.a.createElement(u.R,{col:!0,md:"3",htmlFor:"file-input"},"File input"),l.a.createElement(u.s,{xs:"12",md:"9"},l.a.createElement(u.L,{id:"file-input",onChange:function(e){var t=e.target.files;console.log(t),a(t[0])},name:"file"}),l.a.createElement(u.J,{value:m||"",id:"desc-input",onChange:function(e){var t=e.target.value;d(t)},name:"description"}),l.a.createElement(u.f,{onClick:v,color:"primary"},"upload")))))}}}]);
//# sourceMappingURL=32.178cd43b.chunk.js.map