(this.webpackJsonpSoftypeHR=this.webpackJsonpSoftypeHR||[]).push([[25],{1304:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(4),c=a(59),o=a(28),s=a(124),i=a.n(s),m=a(43),h=function(e){var t=e.content;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.cb,null,l.a.createElement(r.s,null,t.length?l.a.createElement("table",{className:"table table-hover ",style:{borderBottom:"1px solid grey"}},l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:t.toString()},l.a.createElement("td",{className:"text-center"},l.a.createElement("h5",{className:"card-title mb-0"},"".concat(e.firstname," ").concat(e.lastname,"\n                            ").concat(Object(o.l)(e.birthdate)).concat("1"===Object(o.l)(e.birthdate).toString().substring(1,2)?"st":"2"===Object(o.l)(e.birthdate).toString().substring(1,2)?"nd":"3"===Object(o.l)(e.birthdate).toString().substring(1,2)?"rd":"th"," birthday!"),l.a.createElement(i.a,{path:m.i,size:1.5}))))})))):l.a.createElement("div",{className:"text-center"},l.a.createElement("h5",{className:"card-title mb-0"},"Nobody is celebrating now.")))))};t.default=function(e){var t=e.user,a=e.totalEmployees,o=(e.viewLeaveRequests,e.viewOfficeRequests,e.viewEmployees,e.viewLeaveCalendar,e.employeesOnLeave),s=e.pendingLeaveRequests,d=(e.todaysPendingOfficeRequests,e.viewDepartmentInfo,e.employeeDepartment),u=e.stateBirthdayEmployees,E=Object(n.useRef)(),g=function(e){E.current.toggle()};return l.a.createElement(r.cb,null,l.a.createElement(c.f,{ref:E,centered:!0,title:"Today's Birthday Celebrant/s",modalOnClose:g,hidden:!0,closeButton:!0,footer:l.a.createElement(l.a.Fragment,null,l.a.createElement(r.f,{color:"danger",onClick:function(){g()}},"Close")),hideCancelButton:!0},l.a.createElement(h,{content:u})),l.a.createElement(r.s,{sm:"6",lg:"3"},l.a.createElement(r.yb,{style:{minHeight:"150px"},color:"gradient-primary",header:l.a.createElement("h2",null,"".concat(o)),text:"Employees on Leave",footerSlot:l.a.createElement("div",{className:"text-center",style:{height:"70px"}})},l.a.createElement(i.a,{path:m.a,size:1.8,horizontal:!0,vertical:!0,rotate:180}))),l.a.createElement(r.s,{sm:"6",lg:"3"},l.a.createElement(r.yb,{style:{minHeight:"150px"},color:"gradient-info",header:l.a.createElement("h2",null,"".concat(a)),text:"Total Employees",footerSlot:l.a.createElement("div",{className:"text-center",style:{height:"70px"}})},l.a.createElement(i.a,{path:m.f,size:1.8,horizontal:!0,vertical:!0,rotate:180}))),l.a.createElement(r.s,{sm:"6",lg:"3"},l.a.createElement(r.yb,{style:{minHeight:"150px"},color:"gradient-warning",header:l.a.createElement("h2",null,"".concat(u.length)),text:0===u.length?"No Birthday/s Today":"Birthday Celebrants",footerSlot:l.a.createElement("div",{className:"text-center",style:{height:"70px"}})},l.a.createElement(r.xb,{content:0!==u.length?"See who's celebrating":"Nobody's celebrating now"},l.a.createElement(i.a,{path:m.i,size:1.8,horizontal:!0,style:{cursor:"pointer"},vertical:!0,onClick:function(){g()},rotate:180})))),l.a.createElement(r.s,{sm:"6",lg:"3"},l.a.createElement(r.yb,{style:{minHeight:"150px"},color:"gradient-danger",header:3===t.accountType&&0!==d.length?l.a.createElement("h2",{className:"blockquote"},"".concat(d[0].department_name)):3===t.accountType&&0===d.length?l.a.createElement("h2",null,l.a.createElement("i",null,"UNSET")):l.a.createElement("h2",null,s),text:3===t.accountType?"Department":1===t.accountType||2===t.accountType?"Pending Leave Requests":"",footerSlot:l.a.createElement("div",{className:"text-center",style:{height:"70px"}})},l.a.createElement(i.a,{path:3!==t.accountType?m.c:m.w,size:1.8,horizontal:!0,vertical:!0,rotate:180}))))}}}]);
//# sourceMappingURL=25.76f6defb.chunk.js.map