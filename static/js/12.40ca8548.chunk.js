(this.webpackJsonpSoftypeHR=this.webpackJsonpSoftypeHR||[]).push([[12],{1292:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),i=r(4),o=(r(59),r(45));r(787);t.default=function(){Object(n.useRef)();var e=function(e,t){return e[t]};return Object(n.useEffect)((function(){}),[]),a.a.createElement(i.cb,null,a.a.createElement(i.s,{xl:12},a.a.createElement(i.h,null,a.a.createElement(i.i,null,a.a.createElement(i.w,{items:[{employeeId:0,name:"John Doe",date_reviewed:"2018/01/01",status:"Pending"},{employeeId:1,name:"Samppa Nori",date_reviewed:"2018/01/01",status:"Done"}],fields:[{key:"name",_style:{width:"20%"}},{key:"date_reviewed",_style:{width:"20%"}},{key:"status",_style:{width:"10%"}},{key:"action",_style:{width:"10%"}}],itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,pagination:!0,scopedSlots:{status:function(t){return a.a.createElement("td",null,a.a.createElement(i.b,{color:e(o.n,t.status)},t.status))},action:function(e,t){return a.a.createElement("td",{className:"py-2"},a.a.createElement(i.f,{color:"info",variant:"outline",shape:"square",size:"sm",onClick:function(){console.log(e,t," Details")}},"Details"),a.a.createElement(i.f,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){console.log(e,t," Reviews")}},"Review"))}}})))))}},754:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(755),i=(n=a)&&n.__esModule?n:{default:n};Number.isInteger=Number.isInteger||function(e){return"number"===typeof e&&isFinite(e)&&Math.floor(e)===e},t.default=i.default},755:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=s(r(1)),i=s(r(0)),o=s(r(756));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){var e,r,n;l(this,t);for(var a=arguments.length,i=Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={highestStarHovered:-1/0},n.fillId="starGrad"+Math.random().toFixed(15).slice(2),n.hoverOverStar=function(e){return function(){n.setState({highestStarHovered:e})}},n.unHoverOverStar=function(){n.setState({highestStarHovered:-1/0})},u(n,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"stopColorStyle",value:function(e){var t={stopColor:e,stopOpacity:"1"};return this.props.ignoreInlineStyles?{}:t}},{key:"render",value:function(){var e=this.props,t=e.starRatedColor,r=e.starEmptyColor;return a.default.createElement("div",{className:"star-ratings",title:this.titleText,style:this.starRatingsStyle},a.default.createElement("svg",{className:"star-grad",style:this.starGradientStyle},a.default.createElement("defs",null,a.default.createElement("linearGradient",{id:this.fillId,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},a.default.createElement("stop",{offset:"0%",className:"stop-color-first",style:this.stopColorStyle(t)}),a.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-first",style:this.stopColorStyle(t)}),a.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-final",style:this.stopColorStyle(r)}),a.default.createElement("stop",{offset:"100%",className:"stop-color-final",style:this.stopColorStyle(r)})))),this.renderStars)}},{key:"starRatingsStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"relative",boxSizing:"border-box",display:"inline-block"}}},{key:"starGradientStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"absolute",zIndex:"0",width:"0",height:"0",visibility:"hidden"}}},{key:"titleText",get:function(){var e=this.props,t=e.typeOfWidget,r=e.rating,n=this.state.highestStarHovered,a=n>0?n:r,i=parseFloat(a.toFixed(2)).toString();Number.isInteger(a)&&(i=String(a));var o=t+"s";return"1"===i&&(o=t),i+" "+o}},{key:"offsetValue",get:function(){var e=this.props.rating,t="0%";Number.isInteger(e)||(t=e.toFixed(2).split(".")[1].slice(0,2)+"%");return t}},{key:"renderStars",get:function(){var e=this,t=this.props,r=t.changeRating,n=t.rating,i=t.numberOfStars,s=t.starDimension,l=t.starSpacing,u=t.starRatedColor,c=t.starEmptyColor,d=t.starHoverColor,f=t.gradientPathName,p=t.ignoreInlineStyles,g=t.svgIconPath,m=t.svgIconViewBox,v=t.name,y=this.state.highestStarHovered;return Array.apply(null,Array(i)).map((function(t,h){var S=h+1,b=S<=n,E=y>0,R=S<=y,O=S===y,w=S>n&&S-1<n,I=1===S,C=S===i;return a.default.createElement(o.default,{key:S,fillId:e.fillId,changeRating:r?function(){return r(S,v)}:null,hoverOverStar:r?e.hoverOverStar(S):null,unHoverOverStar:r?e.unHoverOverStar:null,isStarred:b,isPartiallyFullStar:w,isHovered:R,hoverMode:E,isCurrentHoveredStar:O,isFirstStar:I,isLastStar:C,starDimension:s,starSpacing:l,starHoverColor:d,starRatedColor:u,starEmptyColor:c,gradientPathName:f,ignoreInlineStyles:p,svgIconPath:g,svgIconViewBox:m})}))}}]),t}(a.default.Component);c.propTypes={rating:i.default.number.isRequired,numberOfStars:i.default.number.isRequired,changeRating:i.default.func,starHoverColor:i.default.string.isRequired,starRatedColor:i.default.string.isRequired,starEmptyColor:i.default.string.isRequired,starDimension:i.default.string.isRequired,starSpacing:i.default.string.isRequired,gradientPathName:i.default.string.isRequired,ignoreInlineStyles:i.default.bool.isRequired,svgIconPath:i.default.string.isRequired,svgIconViewBox:i.default.string.isRequired,name:i.default.string},c.defaultProps={rating:0,typeOfWidget:"Star",numberOfStars:5,changeRating:null,starHoverColor:"rgb(230, 67, 47)",starRatedColor:"rgb(109, 122, 130)",starEmptyColor:"rgb(203, 211, 227)",starDimension:"50px",starSpacing:"7px",gradientPathName:"",ignoreInlineStyles:!1,svgIconPath:"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",svgIconViewBox:"0 0 51 48"},t.default=c},756:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=s(r(1)),i=s(r(2)),o=s(r(0));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){var e=this.props,t=e.changeRating,r=e.hoverOverStar,n=e.unHoverOverStar,i=e.svgIconViewBox,o=e.svgIconPath;return a.default.createElement("div",{className:"star-container",style:this.starContainerStyle,onMouseEnter:r,onMouseLeave:n,onClick:t},a.default.createElement("svg",{viewBox:i,className:this.starClasses,style:this.starSvgStyle},a.default.createElement("path",{className:"star",style:this.pathStyle,d:o})))}},{key:"starContainerStyle",get:function(){var e=this.props,t=e.changeRating,r=e.starSpacing,n=e.isFirstStar,a=e.isLastStar;return e.ignoreInlineStyles?{}:{position:"relative",display:"inline-block",verticalAlign:"middle",paddingLeft:n?void 0:r,paddingRight:a?void 0:r,cursor:t?"pointer":void 0}}},{key:"starSvgStyle",get:function(){var e=this.props,t=e.ignoreInlineStyles,r=e.isCurrentHoveredStar,n=e.starDimension;return t?{}:{width:n,height:n,transition:"transform .2s ease-in-out",transform:r?"scale(1.1)":void 0}}},{key:"pathStyle",get:function(){var e=this.props,t=e.isStarred,r=e.isPartiallyFullStar,n=e.isHovered,a=e.hoverMode,i=e.starEmptyColor,o=e.starRatedColor,s=e.starHoverColor,l=e.gradientPathName,u=e.fillId,c=void 0;return c=a?n?s:i:r?"url('"+l+"#"+u+"')":t?o:i,e.ignoreInlineStyles?{}:{fill:c,transition:"fill .2s ease-in-out"}}},{key:"starClasses",get:function(){var e=this.props,t=e.isSelected,r=e.isPartiallyFullStar,n=e.isHovered,a=e.isCurrentHoveredStar,o=e.ignoreInlineStyles,s=(0,i.default)({"widget-svg":!0,"widget-selected":t,"multi-widget-selected":r,hovered:n,"current-hovered":a});return o?{}:s}}]),t}(a.default.Component);c.propTypes={fillId:o.default.string.isRequired,changeRating:o.default.func,hoverOverStar:o.default.func,unHoverOverStar:o.default.func,isStarred:o.default.bool.isRequired,isPartiallyFullStar:o.default.bool.isRequired,isHovered:o.default.bool.isRequired,hoverMode:o.default.bool.isRequired,isCurrentHoveredStar:o.default.bool.isRequired,isFirstStar:o.default.bool.isRequired,isLastStar:o.default.bool.isRequired,starDimension:o.default.string.isRequired,starSpacing:o.default.string.isRequired,starHoverColor:o.default.string.isRequired,starRatedColor:o.default.string.isRequired,starEmptyColor:o.default.string.isRequired,gradientPathName:o.default.string.isRequired,ignoreInlineStyles:o.default.bool.isRequired,svgIconPath:o.default.string.isRequired,svgIconViewBox:o.default.string.isRequired},t.default=c},787:function(e,t,r){"use strict";var n=r(8),a=r.n(n),i=r(15),o=r(40),s=r(1),l=r.n(s),u=r(4),c=r(59),d=r(754),f=r.n(d),p=r(20),g=r(28),m=r(45),v=function(e){var t=e.rating,r=e.setRating,n=e.activeIndex,a=e.setActiveIndex,i=e.QUESTIONS;return l.a.createElement(u.cb,null,l.a.createElement(u.s,{xl:12},l.a.createElement(u.i,null,l.a.createElement(u.o,{activeIndex:n,onSlideChange:function(e){a(e)}},l.a.createElement(u.q,null,i.map((function(e,n){return l.a.createElement(u.r,{key:n},l.a.createElement("center",null,l.a.createElement("h5",null,"".concat(n+1,".) ").concat(e)),l.a.createElement(f.a,{key:n,rating:t[n],starRatedColor:"primary",starDimension:"25px",numberOfStars:5,changeRating:function(e){!function(e,n){var a=Object(g.f)(t);a[n]=e,r(a)}(e,n)},name:"rating"}),l.a.createElement("br",null),l.a.createElement("h5",null,m.p[""+t[n]])))}))),l.a.createElement(u.p,{direction:"prev",className:"mt-5"},l.a.createElement(u.f,null,l.a.createElement(p.b,{size:"sm",color:"primary",name:"cil-chevron-left"}))),l.a.createElement(u.p,{direction:"next",className:"mt-5"},l.a.createElement(u.f,null,l.a.createElement(p.b,{size:"sm",color:"primary",name:"cil-chevron-right"})))))))},y=r(23),h=r(5),S=(r(71),{c1:null,c2:null,c3:null,c4:null,c5:null,employee_reviewed:null,reviewer:null}),b=r(24);t.a=function(e){var t=e.user,r=Object(y.d)((function(e){var t=e.appState.auth.user;return{firstname:t.firstname,lastname:t.lastname,employeeId:t.employeeId,userId:t.userId}})),n=Object(s.useState)([0,0,0,0,0]),d=Object(o.a)(n,2),f=d[0],p=d[1],E=Object(s.useState)(S),R=Object(o.a)(E,2),O=R[0],w=R[1],I=Object(s.useState)(0),C=Object(o.a)(I,2),_=C[0],P=C[1],j=Object(s.useState)(!1),x=Object(o.a)(j,2),q=x[0],k=x[1];S.reviewer=r.employeeId,S.employee_reviewed=t.employeeId,S.c1=f[0],S.c2=f[1],S.c3=f[2],S.c4=f[3],S.c5=f[4];var H=Object(y.c)(),N=Object(s.useRef)(),F=function(){N.current.toggle(),p([0,0,0,0,0]),w(S),P(0)},M=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),Object(g.g)(H,{type:"info",message:"Please wait"}),e.next=4,b.a.post("/create_performance_review",O);case 4:(t=e.sent).error?Object(g.g)(H,{type:"error",message:t.message}):(Object(g.g)(H,{type:"success",message:"Success"}),H(Object(h.b)(h.a.ADD_PERFORMANCE_REVIEW,t.data.performance_review_information[0]))),F(),k(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(c.f,{ref:N,centered:!0,btnTitle:"Add Perforrmance Review",title:"".concat(t.firstname," ").concat(t.lastname),modalOnClose:F,footer:l.a.createElement(l.a.Fragment,null,l.a.createElement(c.e,{isLoading:q,submit:function(){f.includes(0)?Object(g.g)(H,{type:"error",message:"Please add some review"}):M()},btnText:"Submit"}),l.a.createElement(u.f,{color:"danger",onClick:function(){F()}},"Cancel")),hideCancelButton:!0},l.a.createElement(v,{rating:f,setRating:p,activeIndex:_,setActiveIndex:P,QUESTIONS:m.o}))}}}]);
//# sourceMappingURL=12.40ca8548.chunk.js.map