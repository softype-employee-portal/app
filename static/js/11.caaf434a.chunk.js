(this.webpackJsonpSoftypeHR=this.webpackJsonpSoftypeHR||[]).push([[11],{1237:function(t,e){},1239:function(t,e){},1277:function(t,e){},1278:function(t,e){},1279:function(t,e){},1295:function(t,e,n){"use strict";n.r(e);var a=n(40),r=n(8),c=n.n(r),o=n(15),s=n(71),i=n(72),u=n(74),l=n(73),m=n(1),p=n.n(m),f=n(24),b=n(4),h=n(28),d=n(213),g=n(53),v=n(873),y=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={loading:!0,src:d.a.logoSm,userDetails:{}},t.SvgToPng=function(){var e=Object(o.a)(c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.svg2png)({input:n.trim(),encoding:"dataURL",format:"png",multiplier:1,quality:1});case 2:a=e.sent,t.setState({src:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.getQrCode=function(){var e=Object(o.a)(c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/image/".concat(n.qr_code));case 3:(a=e.sent).error||t.SvgToPng(a.toString()),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.auth.user,e=this.getQrCode(t);this.setState({loading:!1}),"error"!==e&&this.setState({userDetails:{Address:"".concat(Object(h.z)(t.street)," ").concat(Object(h.z)(t.city)," ").concat(Object(h.z)(t.country)),Age:Object(h.l)(t.birthdate),Email:t.email,"Mobile Number":t.mobileno,Position:t.position}})}},{key:"componentWillUnmount",value:function(){this.setState=function(t,e){}}},{key:"render",value:function(){var t=this,e=this.props.auth.user,n=this.state,r=(n.loading,n.src,n.userDetails),c="".concat(g.a.IS_DEV?g.a.API_URL_BASE_DEV:g.a.API_URL_BASE_LIVE,"/file/images"),o="".concat(Object(h.z)(e.firstname)," ").concat(e.middlename&&Object(h.z)(e.middlename)+" ").concat(Object(h.z)(e.lastname));return p.a.createElement(p.a.Fragment,null,p.a.createElement(b.cb,{className:"justify-content-center"},p.a.createElement(b.s,{md:10},p.a.createElement(b.cb,null,p.a.createElement(b.s,{md:4,className:"justify-content-center"},p.a.createElement(b.I,{src:e.profile_img?"".concat(c,"/").concat(e.profile_img):d.a.logoSm,style:{width:"100%"},className:"mb-2"})),p.a.createElement(b.s,{md:7},p.a.createElement("h3",null,"Name:"," ",o),Object.entries(r).map((function(t){var e=Object(a.a)(t,2),n=e[0],r=e[1];return p.a.createElement("h6",{key:n},n," : ",r)})),p.a.createElement(b.f,{block:!0,className:"mr-5 px-4",onClick:function(){t.props.toggleModal(),t.props.history.push("/myAccount")},color:"primary"},"Update"))))))}}]),n}(m.Component);e.default=y}}]);
//# sourceMappingURL=11.caaf434a.chunk.js.map