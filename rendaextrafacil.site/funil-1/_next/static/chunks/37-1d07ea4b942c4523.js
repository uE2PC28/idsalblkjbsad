(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{9610:(e,t,n)=>{"use strict";var o=n(1141);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,u){if(u!==o){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},5358:(e,t,n)=>{e.exports=n(9610)()},1141:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6984:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var o=n(1541),r=n(5268),i=n(5358),u=n.n(i),s=!!("undefined"!=typeof window&&window.document&&window.document.createElement),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(e){function t(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return s?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),o.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),t}(r.Component);a.propTypes={children:u().node.isRequired,node:u().any};var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=function(e){function t(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(e){this.renderPortal()}},{key:"componentWillUnmount",value:function(){o.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(e){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var t=this.props.children;"function"==typeof this.props.children.type&&(t=r.cloneElement(this.props.children)),this.portal=o.unstable_renderSubtreeIntoContainer(this,t,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),t}(r.Component);p.propTypes={children:u().node.isRequired,node:u().any};let d=o.createPortal?a:p},4394:(e,t,n)=>{"use strict";n.d(t,{N:()=>b});var o=n(632),r=n(5268),i=n(7833),u=n(5561),s=n(7089),l=n(9952);class a extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c(e){let{children:t,isPresent:n}=e,i=(0,r.useId)(),u=(0,r.useRef)(null),s=(0,r.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,r.useContext)(l.Q);return(0,r.useInsertionEffect)(()=>{let{width:e,height:t,top:o,left:r}=s.current;if(n||!u.current||!e||!t)return;u.current.dataset.motionPopId=i;let l=document.createElement("style");return c&&(l.nonce=c),document.head.appendChild(l),l.sheet&&l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(o,"px !important;\n            left: ").concat(r,"px !important;\n          }\n        ")),()=>{document.head.removeChild(l)}},[n]),(0,o.jsx)(a,{isPresent:n,childRef:u,sizeRef:s,children:r.cloneElement(t,{ref:u})})}let p=e=>{let{children:t,initial:n,isPresent:i,onExitComplete:l,custom:a,presenceAffectsLayout:p,mode:f}=e,h=(0,u.M)(d),y=(0,r.useId)(),m=(0,r.useCallback)(e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;l&&l()},[h,l]),b=(0,r.useMemo)(()=>({id:y,initial:n,isPresent:i,custom:a,onExitComplete:m,register:e=>(h.set(e,!1),()=>h.delete(e))}),p?[Math.random(),m]:[i,m]);return(0,r.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[i]),r.useEffect(()=>{i||h.size||!l||l()},[i]),"popLayout"===f&&(t=(0,o.jsx)(c,{isPresent:i,children:t})),(0,o.jsx)(s.t.Provider,{value:b,children:t})};function d(){return new Map}var f=n(9470);let h=e=>e.key||"";function y(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}var m=n(7810);let b=e=>{let{children:t,custom:n,initial:s=!0,onExitComplete:l,presenceAffectsLayout:a=!0,mode:c="sync",propagate:d=!1}=e,[b,v]=(0,f.xQ)(d),_=(0,r.useMemo)(()=>y(t),[t]),E=d&&!b?[]:_.map(h),g=(0,r.useRef)(!0),w=(0,r.useRef)(_),P=(0,u.M)(()=>new Map),[C,O]=(0,r.useState)(_),[x,j]=(0,r.useState)(_);(0,m.E)(()=>{g.current=!1,w.current=_;for(let e=0;e<x.length;e++){let t=h(x[e]);E.includes(t)?P.delete(t):!0!==P.get(t)&&P.set(t,!1)}},[x,E.length,E.join("-")]);let k=[];if(_!==C){let e=[..._];for(let t=0;t<x.length;t++){let n=x[t],o=h(n);E.includes(o)||(e.splice(t,0,n),k.push(n))}"wait"===c&&k.length&&(e=k),j(y(e)),O(_);return}let{forceRender:N}=(0,r.useContext)(i.L);return(0,o.jsx)(o.Fragment,{children:x.map(e=>{let t=h(e),r=(!d||!!b)&&(_===x||E.includes(t));return(0,o.jsx)(p,{isPresent:r,initial:(!g.current||!!s)&&void 0,custom:r?void 0:n,presenceAffectsLayout:a,mode:c,onExitComplete:r?void 0:()=>{if(!P.has(t))return;P.set(t,!0);let e=!0;P.forEach(t=>{t||(e=!1)}),e&&(null==N||N(),j(w.current),d&&(null==v||v()),l&&l())},children:e},t)})})}},425:(e,t,n)=>{"use strict";n.d(t,{Ak:()=>o});let o=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&n[e]];return t}}}]);