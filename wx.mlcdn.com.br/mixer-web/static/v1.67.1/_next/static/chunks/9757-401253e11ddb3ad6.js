"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9757],{98045:function(e,t,l){l.d(t,{Z:function(){return r}});var a=l(92336),n=l(44194),o=l(32171),i=l(28474);let s=({type:e,children:t})=>n.createElement("div",{className:(0,o.V)("z-30 overflow-auto rounded-sm","full"===e?"inset-0 absolute bg-on-info-default w-full h-full":"w-[85%] max-w-[690px] bg-surface-container-lowest")},t),r=e=>{var{visible:t,children:l,showClose:r,position:c="center",onClose:d}=e,m=(0,a.__rest)(e,["visible","children","showClose","position","onClose"]);(0,i.Z)(t);let u=t?"visible":"invisible",p=()=>{d&&d()},f="full"===c;return n.createElement("div",{className:(0,o.V)("fixed bottom-[0] left-[0] right-[0] top-[0] z-30 flex flex-col items-center",u,{top:"justify-start pt-xlg",center:"justify-center",bottom:"justify-end pb-xlg"}[c]||"center"),"data-testid":m["data-testid"]||"modal"},!f&&n.createElement("div",{"data-testid":"modal-overlay",className:(0,o.V)(u,"inset-y-0 display-block absolute right-[0] top-[0] z-20 h-screen w-[100%] cursor-pointer opacity-50 bg-surface-container-highest"),onClick:p}),n.createElement(s,{type:c},(r||f)&&n.createElement("div",{role:"button",className:"absolute right-lg top-lg z-40 flex h-3xlg w-3xlg items-center justify-center\n            rounded-2xlg bg-surface-container-lower",onClick:p},n.createElement("i",{"aria-label":"Fechar","data-testid":"modal-close-icon",className:"icon-close icon flex justify-center text-on-surface-3 font-xlg-regular"})),l))};r.Paper=s},65534:function(e,t,l){l.d(t,{Z:function(){return m}});var a=l(44194),n=l(32171),o=l(3860),i=l(3146);let s=({showButton:e,label:t="CEP",labelError:l,initialValue:s="",onChange:r,onSubmit:c,loading:d=!1})=>{let[m,u]=a.useState((0,o.U)(s)),p=l&&""!==l?"error":"";return a.createElement("form",{onSubmit:e=>{e.preventDefault(),c&&c(e)}},a.createElement("div",{"data-testid":"zipcode-input-group",className:(0,n.V)("input-group px-sm pb-sm",d?"disabled":"",p)},a.createElement("label",{htmlFor:"zipcode-input",className:"mb-xlsm font-md-regular"},t),d?a.createElement("span",{"data-testid":"zipcode-loading",className:"icon-loader-color-less input-icon animate-spin"}):a.createElement("span",{className:"icon-my-location input-icon"}),a.createElement("input",{disabled:d,type:"text","data-testid":"zipcode-input",inputMode:"numeric",autoComplete:"off",placeholder:"Digite seu cep",value:m,onChange:e=>{u((0,o.U)(e.target.value)),r&&r(e)},id:"zipcode-input",name:"zipcode-input",className:"border-b input-text mb-sm w-full outline-none bg-surface-container-lowest font-sm-regular"}),l&&a.createElement("span",{className:"icon-info input-info"},l)),e&&a.createElement("div",{className:"my-sm flex flex-col items-center"},a.createElement(i.Z,{type:"submit"},"CONTINUAR")))};var r=l(83473),c=l(98045);let d=({src:e="https://wx.mlcdn.com.br/site/shared/geoloc/geo-map.svg"})=>a.createElement("div",{className:"flex items-center justify-center py-xsm bg-brand-default md:w-[200px] md:px-lg"},a.createElement(r.Z,{width:"80",height:"200",src:e,"aria-hidden":!0,loading:"lazy"})),m=({showButton:e,showCloseButton:t,supportText:l,title:n="Qual a sua localiza\xe7\xe3o?",labelError:o,position:i,visible:r,onClose:m,onSubmit:u,onChange:p,loading:f=!1,initialValue:g=""})=>a.createElement(a.Fragment,null,a.createElement(c.Z,{visible:r,position:i,onClose:m,"data-testid":"zipcode-modal"},a.createElement("div",{className:"bg-surface-container-lowest md:flex md:flex-row"},a.createElement(d,null),a.createElement("div",{className:"md:flex md:w-full md:flex-col md:justify-center md:gap-md md:p-md"},t&&a.createElement("div",{className:"flex justify-end"},a.createElement("i",{"aria-label":"Close","data-testid":"zipcode-modal-close-icon",onClick:m,className:'text-on-surface-1" icon-close icon flex justify-center font-lg-regular'})),a.createElement("p",{className:"m-[0] mx-sm py-md text-on-surface-2 font-lg-bold md:py-sm md:font-xlg-bold"},n),l&&a.createElement("p",{className:"m-[0] mx-sm text-on-surface-2 font-md-regular md:font-lg-regular"},l),a.createElement(s,{showButton:e,labelError:o,onSubmit:u,onChange:p,loading:f,initialValue:g})))));m.ZipCodeInput=s,m.ZipCodeImage=d},3860:function(e,t,l){l.d(t,{U:function(){return a}});let a=e=>e.replace(/\D/g,"").replace(/(\d{5})(\d)/,"$1-$2").replace(/(\d{5})(\d{3})/,"$1-$2").replace(/(-\d{3})\d+?$/,"$1")},35623:function(e,t,l){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let n=(0,a(l(30522)).default)(`
  query locationQuery($zipCode: String) {
    location(locationRequest: { zipCode: $zipCode }) {
      state
      city
      latitude
      longitude
    }
  }
`);t.default=n}}]);
//# sourceMappingURL=9757-401253e11ddb3ad6.js.map