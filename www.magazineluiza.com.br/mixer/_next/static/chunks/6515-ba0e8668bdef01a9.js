"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6515],{5530:function(a,b,c){c.d(b,{Z:function(){return q}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(87043);let i=(0,g.ZP)(h.rj).attrs(a=>Object.assign({pt:2,pb:3,px:3,backgroundColor:"background.lighter",borderRadius:"medium"},a))`
  grid-template-columns: minmax(auto, 64px) auto;
  grid-template-areas: ${({hasFigure:a})=>a?`'f c'
        'b b'`:`'c c'
        'b b'`};
`,j=(0,g.ZP)(h.kC).attrs(a=>Object.assign({my:3,mx:2},a))`
  flex-direction: column;
  justify-content: space-around;
  grid-area: c;
`,k=(0,g.ZP)(h.xu).attrs(a=>Object.assign({my:3,mx:2,minWidth:"64px"},a))`
  grid-area: f;
`,l=(0,g.ZP)(h.Ee)``,m=(0,g.ZP)(h.xu).attrs(a=>Object.assign({forwardedAs:"p",color:"text.base",fontWeight:"medium",fontSize:2},a))``,n=(0,g.ZP)(h.xu).attrs(a=>Object.assign({forwardedAs:"p",color:"text.base",fontWeight:"regular",fontSize:1,lineHeight:"big"},a))``,o=(0,g.ZP)(h.zx)`
  width: 100%;
  text-transform: uppercase;
  grid-area: b;
`,p=a=>{let{data:b,as:c,href:g,image:h,alt:p,onButtonClick:q,buttonProps:r}=a,s=(0,e.Z)(a,["data","as","href","image","alt","onButtonClick","buttonProps"]);return f.createElement(i,(0,d.Z)({"data-testid":"card",hasFigure:Boolean(h)},s),Boolean(h)&&f.createElement(k,{"data-testid":"card-figure"},f.createElement(l,{src:h,alt:p,width:64,height:64,lazy:!0})),(Boolean(b.title)||Boolean(b.text))&&f.createElement(j,{"data-testid":"card-content"},Boolean(b.title)&&f.createElement(m,{"data-testid":"card-title"},b.title),Boolean(b.text)&&f.createElement(n,{"data-testid":"card-text"},b.text)),f.createElement(o,(0,d.Z)({"data-testid":"card-button",forwardedAs:g?"a":c,href:g,onClick:q,children:b.action},r)))};p.defaultProps={as:"button",data:{title:"",text:"",action:""},image:"",href:void 0,alt:"",onButtonClick:()=>{}};var q=p},92877:function(a,b,c){c.d(b,{Z:function(){return o}});var d=c(2784),e=c(34490),f=c(70615),g=c(50616),h=c(99673),i=c(91489),j=c(63825);let k=h.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 16px;
  border-bottom: 3px solid #eee;
`,l=h.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,m=(0,h.ZP)(j.Z)`
  text-align: center;
  font-weight: ${a=>(0,i.R)("fontWeights.medium")(a)};
  font-size: ${a=>(0,i.R)("fontSizes.2")(a)}px;
`;function n({label:a,content:b,detailTitle:c,fullScreen:h,children:i,open:j,onCloseSidebar:n,onChangeOpen:o}){let[p,q]=(0,d.useState)(j);function r(){q(!1),o(!1),n()}return(0,d.useEffect)(()=>{q(j),o(j)},[j]),d.createElement(d.Fragment,null,d.createElement(g.Z,{title:a,open:!!b,onClick:()=>{q(!p),o(!p)}},b),d.createElement(f.Z,{direction:"right",visible:p,onClickOutside:r,fullScreen:h},d.createElement(k,null,d.createElement(e.xhZ,{color:"text.light","data-testid":"arrow-back",role:"button",title:"Fechar detalhes",onClick:r}),d.createElement(l,null,d.createElement(m,{"data-testid":"detail-title"},c))),i))}n.defaultProps={content:null,open:!1,onCloseSidebar:()=>{},onChangeOpen:()=>{}};var o=n},36103:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(2784),e=c(19527),f=c(23778),g=c(5086),h=c(2575);let i={color:g.Z,size:f.Z,voltage:f.Z,volume:h.Z},j=a=>null==a?void 0:a.reduce((a,b)=>{var c;return a[b.type]=Object.assign({},a[b.type],{[b.value]:[...(null==(c=(null==a?void 0:a[b.type])||{})?void 0:c[b.value])||[],b]}),a},{}),k=(a,b)=>a.map((c,d)=>{var e,f,g,h;let i=j(b);return Object.assign({},c,{variations:null==(e=(null==i?void 0:null==(f=i[null==(g=a[d-1])?void 0:g.type])?void 0:f[null==(h=a[d-1])?void 0:h.current])||b)?void 0:e.reduce((a,b)=>Array(...new Set([...a,b.id])),[])})}),l=({onAttributeChange:a,attributes:b,variations:c,title:g,alignment:h,colorMinLength:j,colorVariant:l,fullWidth:m,showTitle:n,style:o,onVariationClick:p})=>{let q={color:j},r={color:l},s=k(b,c);return d.createElement(e.Z,{flexDirection:"column",width:1,rowGap:3},s.map((b,e)=>{let j=i[null==b?void 0:b.type]||f.Z,k=c.filter(a=>b.variations.includes(a.id)&&a.type===b.type);return d.createElement(j,{fullWidth:m,key:`${null==b?void 0:b.type}-${e}`,attribute:b,variations:k,onChange:a,onVariationClick:p,title:g,alignment:h,minLength:q[null==b?void 0:b.type],variant:r[null==b?void 0:b.type],showTitle:n,style:o})}))};l.defaultProps={attributes:[],alignment:"center",colorVariant:"smooth",fullWidth:!1,variations:[],showTitle:!0,style:{},onVariationClick:null};var m=l},28426:function(a,b,c){c.d(b,{Z:function(){return v}});var d=c(7896),e=c(31461),f=c(2784),g=c(12468),h=c(87043),i=c(70615),j=c(99673),k=c(91489),l=c(63825);let m=(0,j.ZP)(l.Z)`
  color: ${a=>(0,k.uu)("scratched")(a)};
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,k.R)("fontWeights.regular")(a)};
`,n=(0,j.ZP)(l.Z)`
  margin-top: 16px;
  line-height: 1.25;
`,o=(0,j.ZP)(l.Z)`
  font-weight: ${a=>(0,k.R)("fontWeights.bold")(a)};
  color: ${a=>(0,k.ow)("text.primary")(a)};
  line-height: 1.25;
`,p=a=>{let{isMagaluCompany:b,onLinkClick:c}=a,d=(0,e.Z)(a,["isMagaluCompany","onLinkClick"]),g=()=>null==c?void 0:c();return b?f.createElement(h.xu,d,f.createElement(m,{"data-testid":"guaranteelabel"},"Empresa do"," ",f.createElement(h.rU,{underline:!0,display:"inline",color:"text.scratched",onClick:g},"Grupo Magalu")," ","que garante sua compra do pedido \xe0 entrega.")):f.createElement(h.xu,d,f.createElement(m,{"data-testid":"guaranteelabel"},"O Magalu garante a sua compra, do pedido \xe0 entrega."," ",f.createElement(h.rU,{underline:!0,display:"inline",color:"text.scratched","data-testid":"learn-more",onClick:g},"Saiba mais")))};p.defaultProps={id:"magazineluiza",delivery:"magazineluiza",isMagaluCompany:!1};var q=p,r=c(34490);let s=({text:a,title:b})=>f.createElement(h.xu,{p:16},f.createElement(h.kC,null,f.createElement(r.hzV,{mr:16,width:45,height:35}),f.createElement(o,{"data-testid":"details-title"},b)),f.createElement(h.xu,{p:1},null==a?void 0:a.map((a,b)=>f.createElement(n,{key:b},a))));s.defaultProps={title:"",text:[]};var t=s;let u=a=>{let{seller:b,showDialog:c,detailsText:j,detailsTitle:k,isMagaluCompany:l,onDetailsOpen:m,onDetailsClose:n}=a,o=(0,e.Z)(a,["seller","showDialog","detailsText","detailsTitle","isMagaluCompany","onDetailsOpen","onDetailsClose"]),{id:p}=b,[r,s]=(0,f.useState)(!1),u=a=>{m(a),s(!0)},v=a=>{n(a),s(!1)};return p===g.ig?null:f.createElement(f.Fragment,null,f.createElement(q,(0,d.Z)({isMagaluCompany:l,onLinkClick:u},o)),!c&&f.createElement(i.Z,{direction:"right",visible:r,onClickOutside:v,fullScreen:!1},f.createElement(i.$,{label:l?"Empresa do Grupo Magalu":"Entrega e compra garantida",align:"left",fontSize:3,leftButton:{icon:"back",title:"Voltar para a pagina do produto",onClick:v}}),f.createElement(t,{text:j,title:k})),c&&f.createElement(h.Vq,{visible:r,onClickOutside:v,type:"responsive",position:"center",width:"350px",titleStyle:{textAlign:"center"},showClose:!0},f.createElement(t,{text:j,title:k})))};u.defaultProps={seller:{id:"magazineluiza"},detailsText:[],detailsTitle:"",showDialog:!1,isMagaluCompany:!1,onDetailsOpen:()=>{},onDetailsClose:()=>{}};var v=u},90713:function(a,b,c){c.d(b,{Z:function(){return r}});var d=c(2784),e=c(33279),f=c(99673),g=c(91489),h=c(19527),i=c(87043);let j=f.ZP.div`
  width: 100%;
  padding: ${a=>(0,g.R)("space.2")(a)}px;
  ${({desktopMode:a})=>!a&&f.iv`
      display: flex;
      justify-content: start;
      overflow-x: scroll;
    `};
`,k=(0,f.ZP)(i.xv)`
  font-size: ${a=>(0,g.R)(a.desktopMode?"fontSizes.2":"fontSizes.0")(a)}px;
  white-space: nowrap;
  color: #8f8f8f;
`,l=(0,f.ZP)(h.Z)`
  padding: ${a=>(0,g.R)("space.2")(a)}px;
`,m=(0,f.ZP)(h.Z)`
  justify-content: ${a=>a.desktopMode?"flex-start":"center"};
  align-items: center;
`,n=f.ZP.a`
  text-decoration: none;
  cursor: default;
  justify-content: center;
  display: flex;
`,o=f.ZP.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
  border-radius: ${(0,g.R)("radii.default")};
  align-items: center;
  background: ${a=>(0,g.dF)("white")(a)};
  box-shadow: ${a=>(0,g.R)("boxShadows.4")(a)};
  height: ${({height:a})=>`${a}px`};
  width: ${({width:a})=>`${a}px`};
  margin: ${a=>(0,g.R)("space.1")(a)}px 0px;
  & > img {
    padding: 14% 16%;
    max-width: 100%;
    max-height: 100%;
  }
`;var p=c(46275);function q({filters:a={},onItemClick:b,onView:c,desktopMode:f,itemHeight:g,itemWidth:h}){let{attributeFilters:q}=a,[r,s]=(0,e.YD)({triggerOnce:!0,threshold:0,delay:1e3});(0,d.useEffect)(()=>{s&&c({filters:a})},[s]);let t=({children:a,filter:b})=>f&&b.values.length>4?d.createElement(p.lr,{auto:!1,showControls:!1,showArrowControls:!0,showPartial:!1,showPartialNextSlide:!1,gutter:0,slidesPerView:5,"data-testid":"carousel"},a):d.createElement(m,{"data-testid":"m-carousel",desktopMode:f,gap:f?32:2},a);return d.createElement(d.Fragment,null,q.map((a,c)=>d.createElement(d.Fragment,null,d.createElement(l,null,d.createElement(i.X6,{"data-testid":"header-label",as:"h2",fontSize:f?18:14,color:"text.attributeLabel"},a.label)),d.createElement(j,{ref:r,"data-testid":"filter-item-container",key:c,desktopMode:f},d.createElement(t,{filter:a},null==a?void 0:a.values.map(a=>d.createElement(n,{key:a.id,role:"button",onClick:c=>b(c,a),href:a.url||a.href,"data-testid":"filter-item-link"},d.createElement(o,{"data-testid":"filter-item-label",height:g,width:"text"===a.filterType?1.4*h:h},"icon"===a.filterType?d.createElement(i.Ee,{alt:a.label,title:a.label,"data-testid":"filter-item-image",src:a.icon}):d.createElement(k,{desktopMode:f,"data-testid":"filter-item-text"},a.label)))))))))}q.defaultProps={filters:{},onItemClick:()=>{},onView:()=>{}};var r=q},63486:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(2784),e=c(34490),f=c(99673),g=c(19527);let h=(0,f.ZP)(g.Z)`
  display: flex;
  align-content: center;
  justify-content: ${({carousel:a})=>a?"start":"center"};
  padding: 12px;
  overflow-x: ${({scrollOff:a})=>a?"hidden":"scroll"};
`,i=(0,f.ZP)(g.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;var j=c(17781);let k=({filters:a,onChange:b,hasBorder:c,scrollOff:f})=>{let g=a=>d.createElement(e.JO$,{name:{"24c":"DeliveryRTomorrow",delivery_plus_1:"FastDelivery",store_pickup:"PickupStore",delivery_1h:"Delivery1h",delivery_24h:"Delivery24h","magalu-entregas":"DeliveryM","magalu-partner":"Pin",free_shipping:"DeliveryFree",today:"ExpressDelivery",magalu_indica:"Check",promocao_sazonal_1:"Christmas",promocao_sazonal_2:"CupomPromotion",promocao_sazonal_3:"Offers",promocao_sazonal_4:"Offers"}[a]||"FastDelivery"});return d.createElement(h,{"data-testid":"delivery-filter-container",carousel:(null==a?void 0:a.length)>2,scrollOff:f},d.createElement(i,null,null==a?void 0:a.map(({label:a,slug:e,selected:f,href:h})=>d.createElement(j.Z,{as:"a",type:"checkbox",name:"DeliveryFilter",startIcon:g(e),onChange:c=>b(Object.assign({},c,{href:h,label:a,slug:e})),checked:f,href:h,value:e,key:e,id:e,hasBorder:c},a))))};k.defaultProps={filters:[],onChange:()=>{},scrollOff:!1,hasBorder:!1};var l=k},66608:function(a,b,c){c.d(b,{Z:function(){return C}});var d=c(7896),e=c(31461),f=c(2784),g=c(82753),h=c(70615),i=c(37215),j=c(71180),k=c(87043),l=c(99673),m=c(91489),n=c(37270);let o=(0,l.ZP)(k.xv)`
  color: ${a=>(0,m.uu)("scratched")(a)};
  font-size: ${a=>(0,m.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,m.R)("fontWeights.bold")(a)};
  margin-bottom: 5px;
`,p=(0,l.ZP)(k.xv)`
  color: ${a=>(0,m.uu)("scratched")(a)};
  font-size: ${a=>(0,m.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,m.R)("fontWeights.regular")(a)};
`,q=(0,l.ZP)(k.xv).attrs({fontSize:3})`
  line-height: normal;
  font-weight: normal;
  color: ${a=>(0,m.R)("colors.greyishBrown")(a)};
`,r=l.ZP.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: normal;
  font-size: ${a=>(0,m.R)("fontSizes.3")(a)}px;

  color: ${a=>(0,m.R)("colors.greyishBrown")(a)};
  line-height: 18.7px;

  b {
    font-weight: 500;
  }
`,s=(0,l.ZP)(k.zx)`
  border-radius: 12px;
  padding: 11px 100px;
`;(0,l.ZP)(k.xv)`
  font-weight: ${a=>(0,m.R)("fontWeights.bold")(a)};
  color: ${a=>(0,m.ow)("text.scratched")(a)};
  line-height: 1.25;
`;let t=l.ZP.br``,u=(0,l.ZP)(k.Vq).attrs({titleStyle:{fontSize:"22px",color:"#424A52",fontWeight:700}})`
  max-width: 724px;
  overflow-x: hidden;
`,v=(0,l.ZP)(n.bo)`
  height: 1px;
  max-width: 724px;
  transform: translateX(-16px);
  margin: 24px 0 18px;
`,w=a=>{let{onLinkClick:b,isIncludeTaxes:c,totalValueImportTax:g,totalValueICMS:h}=a,i=(0,e.Z)(a,["onLinkClick","isIncludeTaxes","totalValueImportTax","totalValueICMS"]),l=()=>null==b?void 0:b();return f.createElement(k.xu,(0,d.Z)({"data-testid":"content-box"},i),c&&f.createElement(f.Fragment,null,f.createElement(o,{"data-testid":"titletaxeslabel"},"+ Imposto de importa\xe7\xe3o ",(0,j.oB)({value:g})," e ICMS ",(0,j.oB)({value:h}),"."),f.createElement(p,{"data-testid":"texttaxeslabel"},"Os impostos s\xe3o calculados de acordo com o ",f.createElement(t,null),"Remessa Conforme."," ",f.createElement(k.rU,{display:"inline",color:"text.primary","data-testid":"learn-more",onClick:l},"Saiba mais"))),!c&&f.createElement(p,{"data-testid":"texttaxeslabel"},"Impostos de importa\xe7\xe3o ser\xe3o adicionados ao seguir ",f.createElement(t,null),"com a compra."," ",f.createElement(k.rU,{display:"inline",color:"text.primary","data-testid":"learn-more",onClick:l},"Saiba mais")))};w.defaultProps={onLinkClick:void 0,isIncludeTaxes:!1};var x=w,y=c(34490);let z=({closeDetails:a,isMobile:b})=>f.createElement(k.kC,{flexDirection:"column","data-testid":"detail-text"},f.createElement(k.xu,{p:16},f.createElement(k.kC,{flexDirection:b?"column":"row"},f.createElement(k.kC,null,f.createElement(y.qGg,{mr:16,width:66,height:67})),f.createElement(k.kC,null,f.createElement(q,null,"[PRODUTO INTERNACIONAL/COMPRA INTERNACIONAL] Toda mercadoria proveniente do exterior (importada) deve ser objeto de declara\xe7\xe3o de importa\xe7\xe3o e est\xe1 sujeita a tributos federal e estadual."))),f.createElement(k.kC,null,f.createElement(r,null,f.createElement("span",null,"Com o Remessa Conforme, o programa do governo brasileiro que simplifica o processo de importa\xe7\xe3o, voc\xea sabe de forma clara o que pagar:"),f.createElement("span",null,"• Para compras ",f.createElement("b",null,"at\xe9 50 d\xf3lares"),", voc\xea paga 20% de taxa de importa\xe7\xe3o e o ICMS*, sem taxas extras na alf\xe2ndega."),f.createElement("span",null,"• Para compras ",f.createElement("b",null,"acima de 50,01 d\xf3lares"),", a taxa de importa\xe7\xe3o \xe9 de 60%, com um desconto de 20 d\xf3lares, al\xe9m do ICMS*. E n\xe3o h\xe1 taxas extras na alf\xe2ndega."),f.createElement("span",null,f.createElement("b",null,"*ICMS:")," Imposto estadual sobre a circula\xe7\xe3o de produtos e servi\xe7os no Brasil. Imposto estadual sobre a circula\xe7\xe3o de produtos e servi\xe7os no Brasil, definido em 17% independentemente do valor da compra.")))),f.createElement(k.kC,{justifyContent:"center",flexDirection:"column"},f.createElement(v,{ruleSize:1,bg:"border.light"}),f.createElement(k.kC,{justifyContent:"center"},f.createElement(s,{onClick:a},"Entendi"))));z.defaultProps={closeDetails:()=>{},isMobile:!1};var A=z;let B=a=>{let{product:b,onDetailsOpen:c,onDetailsClose:j,isIncludeTaxes:k,isMobile:l}=a,m=(0,e.Z)(a,["product","onDetailsOpen","onDetailsClose","isIncludeTaxes","isMobile"]),[n,o]=(0,f.useState)(!1),p=(0,g.xx)(null==b?void 0:b.price),q=a=>{c(a),o(!0)},r=a=>{j(a),o(!1)};return p?f.createElement(f.Fragment,null,f.createElement(i.Z,{variant:"small"}),f.createElement(x,(0,d.Z)({onLinkClick:q,isIncludeTaxes:k},m)),l&&f.createElement(h.Z,{direction:"right",visible:n,onClickOutside:r,fullScreen:!1},f.createElement(h.$,{label:"Compra Internacional",align:"left",fontSize:3,leftButton:{icon:"back",title:"Voltar para a p\xe1gina do produto",onClick:r}}),f.createElement(A,{isMobile:!0,closeDetails:r})),!l&&f.createElement(u,{visible:n,onClickOutside:r,position:"center",showHorizontalRule:!0,title:"Compra Internacional",showClose:!0},f.createElement(A,{closeDetails:r}))):null};B.defaultProps={product:{},isMobile:!1,isIncludeTaxes:!1,onDetailsOpen:()=>{},onDetailsClose:()=>{}};var C=B},75057:function(a,b,c){c.d(b,{Z:function(){return v}});var d=c(31461),e=c(2784),f=c(15312),g=c(13111),h=c(84546),i=c(60861),j=c(18281),k=c(19527),l=c(10200),m=c(63825),n=c(29869),o=c(99673),p=c(25610);let q=(0,o.ZP)(p.Z).attrs({fontSize:5,fontWeight:"light"})``,r=(0,o.ZP)(h.Z).attrs({fontSize:[0,1,2,2],display:"contents",color:"text.light",mY:3})``,s=(0,o.ZP)(m.Z).attrs({mt:3,mb:1})``,t=(0,o.ZP)(m.Z).attrs({color:"error",mt:1})``;function u({errorEmail:a,errorName:b,labelEmail:c,labelName:o,labelNewsletter:p,noticeMeLabel:u,noticeMeLink:v,onSubmit:w,placeholderEmail:x,placeholderName:y,subtitle:z,textSubmitButton:A,title:B}){let[C,D]=(0,e.useState)(!0),[E,F]=(0,e.useState)(""),[G,H]=(0,e.useState)(""),[I,J]=(0,e.useState)({}),K=e.useCallback(()=>{let a=(0,f.Z)(E)?void 0:{fullName:b};return J(b=>Object.assign({},(0,d.Z)(b,["fullName"]),a)),a},[E]),L=e.useCallback(b=>{let c=(0,g.Z)(b)?void 0:{email:a};return J(a=>Object.assign({},(0,d.Z)(a,["email"]),c)),c},[G]),M=(0,e.useCallback)(()=>{F(""),H(""),D(!0)},[E,G]),N=a=>{let b=Object.assign({},K(E),L(G));Object.entries(b).length||w({fullName:E,email:G,newsletter:C},M),a.preventDefault()};return e.createElement(e.Fragment,null,e.createElement(k.Z,{alignItems:"baseline",gap:"2",mb:"3"},e.createElement(q,{"data-testid":"let-me-know-title"},B),e.createElement(l.Z,{href:v,target:"_blank",underline:!0,color:"text.light",fontSize:[0,1,2,2]},u)),e.createElement(r,{"data-testid":"let-me-know-description"},z),e.createElement("form",null,e.createElement(s,{"data-testid":"let-me-know-input-label-name"},o),e.createElement(n.Z,{"data-testid":"let-me-know-input-name",placeholder:y,hasError:!!I.fullName,value:E,onChange:a=>F(a.target.value),onFocus:()=>J(a=>(0,d.Z)(a,["fullName"])),onBlur:a=>K(a.target.value)}),e.createElement(t,{"data-testid":"let-me-know-error-name"},I.fullName),e.createElement(s,{"data-testid":"let-me-know-input-label-email"},c),e.createElement(n.Z,{"data-testid":"let-me-know-input-email",placeholder:x,type:"email",hasError:!!I.email,value:G,onChange:a=>H(a.target.value),onFocus:()=>J(a=>(0,d.Z)(a,["email"])),onBlur:a=>L(a.target.value)}),e.createElement(t,{"data-testid":"let-me-know-error-email"},I.email)),e.createElement(h.Z,{mt:15},e.createElement(j.Z,{as:m.Z,fontSize:[1,2],checked:C,onChange:a=>D(a.target.checked)},p)),e.createElement(h.Z,{mt:15},e.createElement(i.Z,{"data-testid":"let-me-know-submit",full:!0,onClick:N},A)))}u.defaultProps={errorEmail:"Insira o e-mail corretamente.",errorName:"Insira o nome completo corretamente.",labelEmail:"E-mail",labelName:"Nome",labelNewsletter:"Quero receber ofertas e conte\xfados por e-mail",noticeMeLabel:"Ver produtos similares",onSubmit:void 0,placeholderEmail:"Digite seu e-mail",placeholderName:"Digite seu nome",subtitle:"Avise-me quando estiver dispon\xedvel",textSubmitButton:"Avise-me",title:"N\xe3o dispon\xedvel"};var v=u},99075:function(a,b,c){c.d(b,{Z:function(){return n}});var d=c(2784),e=c(34490),f=c(82753),g=c(87043),h=c(46275),i=c(99673),j=c(91489);let k=i.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  text-align: center;
`,l=i.ZP.h2`
  font-size: ${a=>(0,j.R)("fontSizes.4")(a)}px;
  line-height: ${a=>(0,j.R)("lineHeights.fontSize")(a)};
  font-weight: ${a=>(0,j.R)("fontWeights.medium")(a)};
  color: ${a=>a.color};
  margin: 10px;
`,m=i.ZP.p`
  font-size: ${a=>(0,j.R)("fontSizes.2")(a)}px;
  line-height: ${a=>(0,j.R)("lineHeights.display")(a)};
  color: ${a=>(0,j.uu)("base")(a)};
  margin: 15px 0;
  width: 80%;
`;function n({label:a,description:b,value:c,productUrl:i,attributes:{color:j,icon:n,textColor:o}}){let p={coin:"Coin",lightning:"Lightning"}[n]||"Coin",[q,r]=(0,d.useState)(!1),[s,t]=(0,d.useState)(!1),u=a=>{a.stopPropagation(),a.preventDefault(),t(!s)},v=a=>!q&&(r(!0),(0,f.vQ)(a),setTimeout(()=>r(!1),3e3));return d.createElement(d.Fragment,null,d.createElement(h.mY,{hasInfo:!0,onClick:u,color:j,icon:p,textColor:o,value:c}),d.createElement(g.Vq,{visible:s,onClickOutside:u,position:"center",showClose:!0,type:"alert"},d.createElement(k,{onClick:a=>{a.stopPropagation(),a.preventDefault()}},d.createElement(g.kC,{alignItems:"center",flexDirection:"column"},d.createElement(e.JO$,{name:p,"data-testid":"loyalty-commission-icon",width:"25px",height:"25px",color:j}),d.createElement(l,{id:"loyaltyDialogTitle",color:j},a)),d.createElement(h.mY,{value:c,color:j,Icon:e.JO$,textColor:o}),d.createElement(m,{id:"loyaltyDialogDesc"},b),d.createElement(g.zx,{rounded:!0,variation:q?null:"outline",full:!0,onClick:()=>v(i),"data-testid":"loyalty-commission-button"},q?"Copiado":"Copiar Link"))))}},60857:function(a,b,c){c.d(b,{Z:function(){return s}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(19527),i=c(7029),j=c(99673);let k=(0,j.ZP)(h.Z).attrs(a=>({borderWidth:a.selected?2:1,borderColor:a.selected?"blue":"whisper",borderStyle:"solid",borderRadius:"default",padding:2,width:a.smallThumbnails?"84px":"110px",height:a.smallThumbnails?"66px":"110px",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative"}))`
  & img {
    height: ${a=>a.smallThumbnails?"70px":"90px"};
  }
`,l=a=>{let{alt:b,title:c,audio:j,images:l,video:m,imgWidth:n,imgHeight:o,imgMaxHeight:p,onImageClick:q,onAudioClick:r,onVideoClick:s,showMedia:t,showMoreTooltip:u,smallThumbnails:v,preload:w}=a,x=(0,e.Z)(a,["alt","title","audio","images","video","imgWidth","imgHeight","imgMaxHeight","onImageClick","onImageChange","onAudioClick","onVideoClick","showMedia","showMoreTooltip","smallThumbnails","preload"]),[y,z]=(0,f.useState)({image:l[0],index:0}),A=a=>{q(a)};return(0,f.useEffect)(()=>{z({image:l[0],index:0})},[l]),f.createElement(h.Z,(0,d.Z)({columnGap:4,maxHeight:614,"data-testid":"media-gallery"},x),f.createElement(h.Z,{rowGap:3,flexDirection:"column",width:"fit-content"},l.slice(0,l.length>5?4:l.length).map((a,d)=>f.createElement(k,{key:`gallery-img-${d}`,selected:d===y.index,smallThumbnails:v},f.createElement(i.Z,{alt:b,title:c,"data-testid":"media-gallery-image",src:a,width:90,height:90,onClick:()=>z({image:a,index:d}),onMouseOver:()=>z({image:a,index:d})}))),l.length>5&&f.createElement(h.Z,{"data-testid":"media-gallery-image-more",fontSize:5,fontWeight:"bold",borderRadius:"default",width:v?"84px":"110px",height:v?"66px":"110px",title:u,alignItems:"center",justifyContent:"center",bg:"background.base",color:"text.base",cursor:"pointer",onClick:()=>q(4)},"+ ",l.length-4)),f.createElement(h.Z,{flex:1,maxHeight:614,position:"relative"},f.createElement(i.Z,{"data-testid":"image-selected-thumbnail",src:y.image,maxHeight:p,width:n,height:o,alt:b,title:c,lazy:!w||0!==y.index,onClick:()=>A(y.index),cursor:"pointer"}),t&&f.createElement(h.Z,{gap:2,position:"absolute",bottom:0,left:0,"data-testid":"media-gallery-icons"},!!m&&f.createElement(g.JO$,{name:"VideoCircle",cursor:"pointer",width:"40px",height:"40px","data-testid":"media-gallery-video-icon",onClick:s}),!!j&&f.createElement(g.JO$,{name:"PodcastCircle",cursor:"pointer",width:"40px",height:"40px","data-testid":"media-gallery-audio-icon",onClick:r}))))};l.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:600,imgHeight:600,imgMaxHeight:"40vh",alt:"",title:"",showMoreTooltip:"",smallThumbnails:!1,preload:!1};var m=l,n=c(87043),o=c(46275);let p=a=>{let{alt:b,title:c,audio:h,images:i,video:j,imgWidth:k,imgHeight:l,imgMaxHeight:m,counterSeparator:p,showCounter:q,onImageChange:r,onImageClick:s,onAudioClick:t,onVideoClick:u,showMedia:v,lazy:w,preload:x}=a,y=(0,e.Z)(a,["alt","title","audio","images","video","imgWidth","imgHeight","imgMaxHeight","counterSeparator","showCounter","onImageChange","onImageClick","onAudioClick","onVideoClick","showMedia","lazy","preload"]),[z,A]=(0,f.useState)(1),[B,C]=(0,f.useState)(),D={audio:t,video:u},E={video:f.createElement(n.cx,{"data-testid":"media-embed",src:j}),audio:f.createElement("audio",{"data-testid":"media-audio",controls:!0,src:h})},F=a=>{let b="string"==typeof a&&["video","audio"].includes(a)?a:null;C(b)},G=a=>{let b=D[a];b(),F(a)},H=a=>{A(a+1),r(i[a])};return f.createElement(f.Fragment,null,f.createElement(n.xu,(0,d.Z)({"data-testid":"media-gallery",fontSize:0,position:"relative"},y),f.createElement(o.lr,{lazy:w,onChange:H,showControls:!1,auto:!1},i.map((a,d)=>f.createElement(n.xu,{height:m,key:`gallery-img-${d}`},f.createElement(n.Ee,{alt:b,title:c,"data-testid":"media-gallery-image",key:`gallery-img-${d}`,src:a,m:"auto",width:k,height:l,maxHeight:m,lazy:!x||0!==d,onClick:()=>s(d)})))),v&&f.createElement(n.kC,{"data-testid":"media-gallery-icons",position:"absolute",bottom:"16px",left:"16px",columnGap:2},!!j&&f.createElement(g.JO$,{name:"VideoCircle",width:"40px",height:"40px",onClick:()=>G("video"),"data-testid":"media-gallery-video-icon"}),!!h&&f.createElement(g.JO$,{name:"PodcastCircle",width:"40px",height:"40px",onClick:()=>G("audio"),"data-testid":"media-gallery-audio-icon"})),q&&!!i.length&&f.createElement(n.xu,{"data-testid":"media-gallery-counter",bg:"background.dark",color:"text.lightest",position:"absolute",bottom:"16px",right:"16px",paddingX:2,paddingY:1,borderRadius:"default",opacity:"85%"},z,p,i.length)),B&&f.createElement(n.Vq,{title:null,position:"center",showClose:!0,onClickOutside:F,visible:!0},E[B]))};p.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:800,imgHeight:600,imgMaxHeight:"40vh",counterSeparator:" de ",showCounter:!0,alt:"",title:"",lazy:!1,preload:!1};var q=p;let r=a=>{let{alt:b,title:c,audios:g,images:h,podcasts:i,videos:j,imgWidth:k,imgHeight:l,imgMaxHeight:n,onImageChange:o,onImageClick:p,onAudioClick:r,onVideoClick:s,showThumbnail:t,showMoreTooltip:u,smallThumbnails:v,preload:w}=a,x=(0,e.Z)(a,["alt","title","audios","images","podcasts","videos","imgWidth","imgHeight","imgMaxHeight","counterSeparator","showCounter","onImageChange","onImageClick","onAudioClick","onVideoClick","showThumbnail","showMoreTooltip","smallThumbnails","lazy","preload"]),[y]=j,[z]=[...i,...g];return f.createElement(t?m:q,(0,d.Z)({alt:b,title:c,audio:z,video:y,images:h,imgWidth:k,imgHeight:l,imgMaxHeight:n,onImageClick:p,onAudioClick:r,onVideoClick:s,onImageChange:o,showMedia:!!y||!!z,showMoreTooltip:u,smallThumbnails:v,preload:w},x))};r.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:800,imgHeight:600,imgMaxHeight:"40vh",counterSeparator:" de ",showCounter:!0,alt:"",title:"",onImageChange:()=>{},onImageClick:()=>{},onVideoClick:()=>{},onAudioClick:()=>{},showThumbnail:!1,showMoreTooltip:"",smallThumbnails:!1,lazy:!1,preload:!1};var s=r},56337:function(a,b,c){c.d(b,{Z:function(){return x}});var d=c(2784),e=c(71180),f=c(84546),g=c(78045),h=c(97949),i=c(73172),j=c(25164);let k=(a=[],b)=>a.map(a=>({mediaUrl:a,mediaType:b,original:a.includes("original"),processed:a.includes("processed"),thumbnails:a.includes("thumbnails")}));var l=c(99673),m=c(91489),n=c(87043);let o=(0,l.ZP)(n.kC)`
  align-items: center;
  padding: 0 0 ${a=>(0,m.R)("space.2")(a)}px;

  ${(0,m.aK)("large")} {
    padding: 0 0 ${a=>(0,m.R)("space.3")(a)}px;
  }
`,p=l.ZP.span`
  width: 80px;
`,q=(0,l.ZP)(n.xv).attrs(()=>({fontSize:2}))`
  color: ${a=>(0,m.R)("colors.darkSilver")(a)};
  font-weight: ${a=>(0,m.R)("fontWeights.regular")(a)};
  padding: ${a=>(0,m.R)("space.2")(a)}px;
  line-height: ${a=>(0,m.R)("lineHeights.plus")(a)}px;
`,r=(0,l.ZP)(n.xu).attrs(()=>({fontSize:2}))`
  color: #69727763;
  font-weight: ${a=>(0,m.R)("fontWeights.regular")(a)};
  line-height: ${a=>(0,m.R)("lineHeights.plus")(a)}px;
`,s=(0,l.ZP)(n.xu).attrs(()=>({fontSize:3}))`
  color: ${a=>(0,m.R)("colors.darkSilver")(a)};
  font-weight: ${a=>(0,m.R)("fontWeights.regular")(a)};
  line-height: 24px;
  padding: ${a=>(0,m.R)("space.3")(a)}px 0
    ${a=>(0,m.R)("space.3")(a)}px;
  word-break: break-word;
`,t=(0,l.ZP)(n.xu).attrs(()=>({color:"primary.base",fontSize:1}))`
  display: inline;
  text-decoration: underline;
  cursor: pointer;
`,u=(0,l.ZP)(n.xu).attrs(()=>({fontSize:2}))`
  color: #69727763;
  font-weight: ${a=>(0,m.R)("fontWeights.regular")(a)};
  line-height: ${a=>(0,m.R)("lineHeights.tall")(a)}px;
`,v=(a,b)=>a.map(a=>d.createElement(h.Z,{key:`gallery-media-${a.mediaUrl}`,media:a,onClick:()=>b(a.mediaUrl.split("/").reverse()[0]),width:"124px",height:"124px"})),w=({review:a,charLimit:b})=>{let[c,h]=(0,d.useState)(!1),{rating:l,description:m,submissionDate:n,attributes:w,userData:x,product:y}=a,z=(null==m?void 0:m.length)<=b,[A,B]=(0,d.useState)(!1),[C,D]=(0,d.useState)(0),E=/^\d+$/.test(n),F=n&&!E&&(0,e.jL)(new Date(n),new Date),G=(null==w?void 0:w.map((a,b)=>0===b?`${a.label}: ${a.value}`:` | ${a.label}: ${a.value}`))||[],H=k(null==y?void 0:y.images,"image"),I=k(null==y?void 0:y.videos,"video"),J=H.filter(a=>a.processed).concat(I.filter(a=>a.processed)),K=H.filter(a=>a.thumbnails).concat(I.filter(a=>a.thumbnails)),L=a=>{let b=J.findIndex(b=>b.mediaUrl.includes(a.split(".")[0]));D(b>=0?b:0),B(!0)};return d.createElement(f.Z,null,d.createElement(o,null,d.createElement(g.Z,null),d.createElement(q,null,null==x?void 0:x.name),d.createElement(p,null,d.createElement(i.Z,{score:l}))),G.length>0&&d.createElement(r,{"data-testid":"review-sub-title"},G),m&&d.createElement(s,{"data-testid":"review-description"},c||z?m:`${m.substring(0,b)}...`,"\xa0",!z&&d.createElement(t,{onClick:()=>h(!c),"data-testid":"see-more-btn",role:"button"},c?"ver menos":"ver mais")),F&&d.createElement(u,{"data-testid":"review-date"},`h\xe1 ${F}`),K.length>0&&d.createElement(j.zT,null,v(K,L)),A&&d.createElement(j.Qp,{review:a,charLimit:b,mediaProps:J,selectedMedia:C,closePopup:()=>B(!1)}))};w.defaultProps={charLimit:110,mediaReview:null};var x=w},60926:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(7896),e=c(2784),f=c(46275),g=c(99673),h=c(87043);let i=g.ZP.div`
  position: relative;

  span {
    filter: blur(3px);
  }
`,j=(0,g.ZP)(h.zx)`
  visibility: hidden;
  position: absolute;
  bottom: 0;

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${i}:hover & {
    visibility: visible;
  }
`,k=({hidePriceMode:a,hidePrice:b,displayMode:c,installment:g,showInCashInfo:h,showDiscount:k,showDiscountOnlyCashInfo:l,price:m,hidePriceButtonAction:n,product:o})=>b?"hide"===a?null:e.createElement(i,null,e.createElement("span",{"data-testid":"hided-price"},e.createElement(f.tA,{display:c,installment:null,price:0,showInCashInfo:h})),n&&e.createElement(j,{full:!0,size:"small",m:"10px 0","data-testid":"show-price-button",onClick:a=>{a.preventDefault(),n(o)}},"Ver Pre\xe7o")):e.createElement(f.tA,(0,d.Z)({display:c,installment:g,showInCashInfo:h,showDiscount:k,showDiscountOnlyCashInfo:l},m));var l=k},1939:function(a,b,c){c.d(b,{Z:function(){return p}});var d=c(2784),e=c(84546),f=c(71180),g=c(99673),h=c(91489),i=c(87043);let j=(0,g.ZP)(i.xv).attrs(()=>({fontSize:0,fontWeight:"regular",marginTop:1}))`
  color: ${(0,h.uu)("scratched")};
`,k=g.ZP.div``;var l=c(57862),m=c(37215),n=c(82753);let o=({showShippingTags:a,shippingTag:b,price:c})=>{let{time:g,cost:h,complement:i}=b,o=(0,n.xx)(c),p=0===h?"Frete gr\xe1tis":`Frete: ${(0,f.oB)({value:h})}`,q=()=>0===h?d.createElement(l.dO,null,p):d.createElement(j,null,p);return d.createElement(e.Z,{marginTop:1},o&&d.createElement(m.Z,null),a&&d.createElement(k,{"data-testid":"productCard-shipping-tag"},null!=h&&d.createElement(q,null),g&&d.createElement(l.dO,null,g),i&&d.createElement(l.dO,null,i)))};o.defaultProps={showShippingTags:!1,shippingTag:{},price:{}};var p=o},45178:function(a,b,c){c.d(b,{Z:function(){return M}});var d=c(7896),e=c(31461),f=c(2784),g=c(33279),h=c(34490),i=c(57862),j=c(46275),k=c(87043),l=c(25164),m=c(7029),n=c(12468),o=c(99673),p=c(91489);let q=(0,o.ZP)(k.rj)`
  grid-template-columns: 1fr ${({displayMode:a,sponsored:b,isMagaluIndica:c})=>a!==n.IY&&c||a===n.Co&&b?"20px":""};
  margin-bottom: ${(0,p.R)("space.1")}px;
  ${a=>a.displayMode===n.IY&&`
    grid-column-start: 3;
    grid-row-start: 1;
    align-self: start;
  `}
`,r=(0,o.ZP)(k.Af).attrs(a=>Object.assign({},a))`
  justify-self: start;
`,s=(0,o.ZP)(j.iG).attrs(a=>Object.assign({width:20,height:20},a))`
  justify-self: end;
  max-width: 20px;
`,t=({displayMode:a,sponsored:b,showWishBtn:c,isLiked:d,handleAddToWishlist:e,isMagaluIndica:g})=>f.createElement(q,{isMagaluIndica:g,displayMode:a,sponsored:b},b&&a===n.Co&&f.createElement(i.lK,{place:"header"},"Patrocinado"),g&&a===n.yg&&f.createElement(r,{autoSize:!0,padding:"2px 8px",bg:"primary",fontSize:1,endIcon:f.createElement(h.JO$,{name:"Check",fill:"#FFF",width:"16px",height:"16px"}),fontWeight:"medium",gridGap:1,borderRadius:6,width:"125px"},"magalu indica"),c&&f.createElement(s,{active:d,onClick:e}));var u=t,v=c(19527),w=c(63825);let x=({geoLocTags:a,displayMode:b})=>null!=a&&a.title?f.createElement(v.Z,{alignItems:"center",justifyContent:b===n.Co?"center":null,gap:1},f.createElement("div",null,f.createElement(h.JO$,{name:a.icon||"FastDelivery",color:"text.primary",width:30,height:30})),f.createElement("div",null,f.createElement(w.Z,{color:"text.primary",fontSize:[1,1,2,2],fontWeight:"medium"},a.title))):null;var y=x;let z={miniature:o.iv`
    justify-self: center;
    align-self: center;
  `,list:o.iv`
    justify-self: left;
  `},A=o.ZP.div`
  ${({displayMode:a})=>a&&z[a]};
  max-height: 20px;
`,B=({displayMode:a,count:b,score:c,allowEmptyRating:d,showRating:e,format:g})=>(d||c)&&e?f.createElement(A,{displayMode:a},f.createElement(j.Cq,{format:g,score:c,count:b,width:"12px",height:"12px"})):null;var C=B,D=c(60926);let E=({allGeoLocTags:a,displayMode:b})=>a.length>0&&f.createElement(v.Z,{display:"none","data-testid":"allGeoLocTags",flexDirection:"column"},a.map((a,c)=>a.title&&f.createElement(v.Z,{key:c,alignItems:"center",display:b===n.Co?"none":null,color:"text.primary",fontSize:"0",fontWeight:"medium"},a.title)));E.defaultProps={allGeoLocTags:[]};var F=E,G=c(1939),H=c(99075);let I={sales_commission:H.Z,sales_dynamic_commission:H.Z},J=({displayMode:a,loyalty:b,productUrl:c})=>{let e=I[null==b?void 0:b.type];return b?f.createElement(i.RJ,{displayMode:a},e&&f.createElement(e,(0,d.Z)({},b,{productUrl:c}))):null};J.defaultProps={displayMode:n.IY,loyalty:{},productUrl:""};var K=J;let L=a=>{let{hideLinkBorder:b,onClick:c,onView:o,domain:p,imgLazyLoading:q,index:r,lazyLoadingOffset:s,showInCashInfo:t,enableShadow:v,enableHover:w,geoLocTags:x,allGeoLocTags:z,hidePriceMode:A,hidePrice:B,hidePriceButtonAction:E,showPreview:H,previewAction:I,showWishBtn:J,onClickWishBtn:L,fullHeight:M,showRating:N,showDiscount:O,showDiscountOnlyCashInfo:P,allowEmptyRating:Q,containerWidth:R,onThumbnailClick:S,colorMinLength:T,attributeStyle:U,offerTimerProps:V}=a,W=(0,e.Z)(a,["adId","hideLinkBorder","onClick","onView","domain","imgLazyLoading","index","lazyLoadingOffset","showInCashInfo","enableShadow","enableHover","geoLocTags","allGeoLocTags","hidePriceMode","hidePrice","hidePriceButtonAction","showPreview","previewAction","showWishBtn","onClickWishBtn","fullHeight","showRating","percentBadge","showDiscount","showDiscountOnlyCashInfo","allowEmptyRating","containerWidth","onThumbnailClick","colorMinLength","attributeStyle","offerTimerProps"]),{displayMode:X,title:Y,price:Z,image:$,installment:_,badges:aa,rating:ab,variationId:ac,url:ad,titleAs:ae,loyalty:af,imageAltPrefix:ag,isOnWishlist:ah,imageWidth:ai,imageHeight:aj,shippingCost:ak,shippingTag:al,brand:am,offerTags:an,ads:ao,thumbnails:ap,restrictions:aq,parsedAttributes:ar,reward:as}=W,{count:at,score:au}=ab,av=null==an?void 0:an.includes("magalu_indica"),aw=null==aa?void 0:aa.slice(-1)[0],ax=a=>{a.stopPropagation(),a.preventDefault(),L(a)},[ay,az]=(0,g.YD)({triggerOnce:!0,threshold:.5,delay:1e3});(0,f.useEffect)(()=>{az&&o(Object.assign({index:r,geoLocTags:x},W))},[az]);let aA=ag?`${ag}${W.title}`:W.title,aB=(null==ao?void 0:ao.id)||void 0;return f.createElement(i.W2,{ref:ay,href:ad,onClick:a=>c(a,Object.assign({},W,{index:r})),displayMode:X,"data-testid":"product-card-container","ads-click-event":aB,"ads-view-event":aB,"ads-impression-event":aB,redirect:ad,hideLinkBorder:b,enableShadow:v,enableHover:w,fullHeight:M,containerWidth:R,index:r,"data-brand":null==am?void 0:am.slug},f.createElement(u,{displayMode:X,sponsored:null==ao?void 0:ao.sponsored,showWishBtn:J,isLiked:ah,handleAddToWishlist:ax,isMagaluIndica:av}),f.createElement(i.mo,{displayMode:X},av&&X===n.IY&&f.createElement(k.Af,{autoSize:!0,padding:"2px 8px",bg:"primary",fontSize:1,endIcon:f.createElement(h.JO$,{name:"Check",fill:"#FFF",width:"16px",height:"16px"}),fontWeight:"medium",gridGap:1,borderRadius:6,width:"125px",mb:1},"magalu indica"),f.createElement(m.Z,{src:$,alt:aA,width:ai,height:aj,title:Y,lazy:q,offset:s,mb:1}),f.createElement(K,{displayMode:X,loyalty:af,productUrl:p+ad}),!!aw&&f.createElement(j.Ct,{key:`${ac}-badge-${aw.id}`,url:aw.imageUrl,tooltip:aw.tooltip,displayMode:X,borderRadius:"medium"}),X===n.IY&&ar&&f.createElement(l.dO,{attributes:ar,variations:ap,colorVariant:"button",showTitle:!1,colorMinLength:T,style:U,onVariationClick:S})),H&&f.createElement(i.Mn,{"data-testid":"button-preview-container"},f.createElement(i.AH,{size:"small",m:"10px 0","data-testid":"button-preview",onClick:a=>{a.preventDefault(),I(W)}},"Conferir")),f.createElement(i.VY,{displayMode:X,"data-testid":"product-card-content"},X!==n.IY&&ar&&f.createElement(l.dO,{attributes:ar,variations:ap,onVariationClick:S,colorVariant:"button",showTitle:!1,colorMinLength:T,style:U}),X!==n.Co&&f.createElement(j.dV,(0,d.Z)({height:20,fontSize:["10px",1],restrictions:aq,displayMode:X},V)),(null==ao?void 0:ao.sponsored)&&X!==n.Co&&f.createElement(i.lK,{place:"content"},"Patrocinado"),X!==n.Co&&f.createElement(i.Dx,{as:ae,displayMode:X,"data-testid":"product-title"},Y),C({displayMode:X,count:at,score:au,allowEmptyRating:Q,showRating:N,format:"score-count"}),f.createElement(y,{geoLocTags:x,displayMode:X}),(0,D.Z)({hidePriceMode:A,hidePrice:B,displayMode:X,installment:_,showInCashInfo:t,showDiscount:O,showDiscountOnlyCashInfo:P,price:Z,hidePriceButtonAction:E,product:W}),f.createElement(j.lF,{displayMode:X,costDescription:ak.costDescription,cost:ak.cost}),f.createElement(F,{allGeoLocTags:z,displayMode:X}),f.createElement(G.Z,{showShippingTags:X!==n.Co,shippingTag:al,price:Z}),!!as&&!!(null!=as&&as.active)&&f.createElement(j.QP,{icon:null==as?void 0:as.icon,message:null==as?void 0:as.message,intent:null==as?void 0:as.intent,styleContainer:null==as?void 0:as.styleContainer,styleMessage:null==as?void 0:as.styleMessage})))};var M=L;L.defaultProps={variationId:"",url:"",displayMode:n.IY,domain:n.RW,title:"",image:"",index:0,price:{},installment:{},geoLocTags:{},allGeoLocTags:[],rating:{},badges:[],brand:{},onClick:()=>{},onView:()=>{},imgLazyLoading:!1,fullHeight:!1,percentBadge:30,lazyLoadingOffset:50,showInCashInfo:!0,hideLinkBorder:!1,titleAs:"h2",enableShadow:!0,enableHover:!1,imageAltPrefix:"",hidePriceMode:"blur",hidePrice:!1,hidePriceButtonAction:null,showPreview:!1,previewAction:()=>{},isOnWishlist:!1,showWishBtn:!1,onClickWishBtn:()=>{},showRating:!0,showDiscount:!1,showDiscountOnlyCashInfo:!0,shippingCost:{},ads:{},shippingTag:{},allowEmptyRating:!1,onThumbnailClick:null,colorMinLength:3,attributeStyle:{width:"42px",height:"42px",bg:"background.lighter",color:"background.primary",shouldHover:!0},offerTimerProps:{}}},57862:function(a,b,c){c.d(b,{AH:function(){return u},Dx:function(){return r},Mn:function(){return t},RJ:function(){return q},VY:function(){return s},W2:function(){return m},dO:function(){return v},lK:function(){return l},mo:function(){return o}});var d=c(99673),e=c(68054),f=c(91489),g=c(46275),h=c(12468),i=c(27439),j=c(87043);let k=(a,b)=>{let c={miniature:d.iv`
      display: grid;
      padding: 8px 2px;
    `,list:d.iv`
      display: grid;
      grid-template-columns: 1.5fr 2fr;
      ${b>=500&&d.iv`
        ${(0,f.aK)("small")} {
          grid-template-columns: 180px 2fr;
          grid-column-gap: 20px;
        }
      `}
      padding: 16px;
    `,gallery:d.iv`
      grid-template-rows: auto auto 1fr;
    `};return c[a]},l=(0,d.ZP)(j.xv).attrs(a=>Object.assign({fontSize:13,fontWeight:"regular",lineHeight:"display"},a))`
  justify-self: left;
  color: ${(0,f.uu)("light")};

  ${e.cp}
`;(0,d.ZP)(g.iG).attrs(a=>Object.assign({width:20,height:20},a))`
  justify-self: end;
  max-width: 20px;
`;let m=(0,d.ZP)(i.ZP)`
  position: relative;
  padding: 5px;
  justify-content: unset;
  border-radius: 0;
  background-color: ${a=>a.hideLinkBorder?"unset":(0,f.ow)("background.lighter")(a)};
  ${({displayMode:a,containerWidth:b})=>a&&k(a,b)};
  display: grid;

  ${({fullHeight:a})=>a&&`
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`,n={miniature:d.iv`
    height: 20vw;
    justify-content: flex-end;
    ${(0,f.aK)("small")} {
      height: 120px;
    }
  `,list:d.iv`
    justify-content: flex-start;
    padding-top: 4px;
    min-height: 25vw;
    ${(0,f.aK)("small")} {
      min-height: initial;
      max-height: 210px;
    }
  `,gallery:d.iv`
    height: 32vw;
    justify-content: flex-end;
    ${(0,f.aK)("small")} {
      max-height: 210px;
    }
  `},o=d.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    max-height: 100%;
  }
  ${({displayMode:a})=>a&&n[a]}
`,p={miniature:d.iv`
    justify-content: center;
  `,list:d.iv`
    justify-content: flex-start;
  `,gallery:d.iv`
    justify-content: flex-end;
  `},q=d.ZP.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: 5%;
  ${({displayMode:a})=>a&&p[a]}
`,r=(0,d.ZP)(j.xv).attrs(a=>Object.assign({fontSize:[1,1,1],lineHeight:"display",fontWeight:"regular"},a))`
  ${({displayMode:a})=>a!==h.IY?"height: 52px;":"height: 32px;"};
  color: ${(0,f.uu)("base")};
  -webkit-line-clamp: ${({displayMode:a})=>a!==h.IY?3:2};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
  margin: 4px 0 4px 0;
  ${(0,f.aK)("small")} {
    ${({displayMode:a})=>a===h.IY&&"height: 40px;"};
  }
  ${e.cp}
`,s=d.ZP.div`
  ${({displayMode:a})=>a===h.IY&&"padding-left: 8px"}
  ${({displayMode:a})=>a!==h.IY&&`
    display: grid;
    padding-top: 8px;
  `}
`,t=d.ZP.div`
  width: 100%;
  height: 15px;
  position: relative;
`,u=(0,d.ZP)(j.zx)`
  opacity: 0.7;
  visibility: hidden;
  position: absolute;
  width: 50%;
  min-width: 90px;

  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;

  &:hover {
    opacity: 1;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${m}:hover & {
    visibility: visible;
  }
`,v=(0,d.ZP)(j.xv).attrs(()=>({fontSize:0,fontWeight:"medium",marginTop:1}))`
  color: ${(0,f.uu)("primary")};
`},3018:function(a,b,c){c.d(b,{Z:function(){return u}});var d=c(31461),e=c(2784),f=c(33279),g=c(7029),h=c(99673),i=c(91489),j=c(68054),k=c(19527),l=c(12468),m=c(87043);let n=h.ZP.a`
  display: flex;
  cursor: pointer;
  padding: 16px;
  border-radius: 12px;
  background-color: #fff;
  max-width: 452px;
  text-decoration: none;
`,o=(0,h.ZP)(k.Z)`
  flex-direction: column;
  flex-basis: 33.333333%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    max-width: 100%;
    max-height: 100%;
  }
`,p=(0,h.ZP)(k.Z)`
  flex-basis: 66.666667%;
  padding: 0 8px;
  flex-direction: column;
  justify-content: center;
`,q=(0,h.ZP)(m.xv).attrs(a=>Object.assign({fontSize:[1,1,1],lineHeight:"big",fontWeight:"regular"},a))`
  ${({displayMode:a})=>a!==l.IY?"height: 52px;":"height: 32px;"};
  color: ${(0,i.uu)("base")};
  -webkit-line-clamp: ${({displayMode:a})=>a!==l.IY?3:2};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
  margin: 4px 0 4px 0;
  ${(0,i.aK)("small")} {
    ${({displayMode:a})=>a===l.IY&&"height: 40px;"};
  }
  ${j.cp}
`;var r=c(60926),s=c(1939);function t(a){let{imgLazyLoading:b,showInCashInfo:c,showDiscount:h,onView:i,index:j,onClick:k,showDiscountOnlyCashInfo:l,lazyLoadingOffset:m,hidePriceButtonAction:t}=a,u=(0,d.Z)(a,["imgLazyLoading","showInCashInfo","showDiscount","onView","index","geoLocTags","onClick","showDiscountOnlyCashInfo","lazyLoadingOffset","hidePriceButtonAction"]),{title:v,price:w,image:x,installment:y,url:z,titleAs:A,shippingTag:B,imageWidth:C,imageHeight:D,imageAltPrefix:E,hidePrice:F}=u,G=E?`${E}${u.title}`:u.title,H="list",[I,J]=(0,f.YD)({triggerOnce:!0,threshold:.5,delay:1e3});return(0,e.useEffect)(()=>{J&&i(Object.assign({index:j},u))},[J]),e.createElement(n,{ref:I,href:z,index:j,onClick:a=>k(a,Object.assign({},u,{index:j})),"data-testid":"product-card-horizontal"},e.createElement(o,{width:C,height:D},e.createElement(g.Z,{src:x,alt:G,width:C,height:D,title:v,lazy:b,offset:m})),e.createElement(p,null,e.createElement(q,{as:A,displayMode:H,"data-testid":"product-title"},v),(0,r.Z)({hidePrice:F,displayMode:H,installment:y,showInCashInfo:c,showDiscount:h,showDiscountOnlyCashInfo:l,price:w,hidePriceButtonAction:t,product:u}),e.createElement(s.Z,{showShippingTags:!0,shippingTag:{cost:null==B?void 0:B.cost},price:w})))}t.defaultProps={imgLazyLoading:!1,showInCashInfo:!0,showDiscount:!1,url:"",onClick:()=>{},onView:()=>{},geoLocTags:{},index:0,showDiscountOnlyCashInfo:!0,lazyLoadingOffset:50,hidePriceButtonAction:!1};var u=t},4720:function(a,b,c){c.d(b,{Z:function(){return i}});var d=c(7896),e=c(2784),f=c(45178),g=c(46275),h=c(3018);function i({products:a,displayMode:b,onClick:c,onProductView:i,onChange:j,gutter:k,showInCashInfo:l,slidesPerView:m,interval:n,auto:o,showPartialNextSlide:p,transitionDuration:q,productTitleAs:r,imageAltPrefix:s,imgLazyLoading:t,imageWidth:u,imageHeight:v,showControls:w,showArrowControls:x,showRating:y,enableHover:z,showPreview:A,showDiscount:B,showDiscountOnlyCashInfo:C,fullHeight:D,previewAction:E,cardType:F,offerTimerProps:G}){let H=b=>{let c=Array(m).fill().map((c,d)=>a[d+b]);j(c)},I=x&&m<=(null==a?void 0:a.length),J={horizontal:h.Z,vertical:f.Z},K=J[F];return e.createElement(g.lr,{onChange:H,slidesPerView:m,gutter:k,auto:o,interval:n,showPartialNextSlide:p,transitionDuration:q,isProductCarousel:!0,showControls:w,showArrowControls:I},null==a?void 0:a.map((a,f)=>e.createElement(K,(0,d.Z)({},a,{displayMode:b,onClick:c,onView:i,showInCashInfo:l,titleAs:r,fullHeight:D,imageAltPrefix:s,imgLazyLoading:t,imageWidth:u,imageHeight:v,showRating:y,key:`product-carousel-${a.variationId||a.id}-${f}`,enableHover:z,showPreview:A,previewAction:E,showDiscount:B,showDiscountOnlyCashInfo:C,offerTimerProps:G}))))}i.defaultProps={displayMode:"gallery",onClick:()=>{},onProductView:()=>{},onChange:()=>{},showInCashInfo:!0,showPartialNextSlide:!0,auto:!0,slidesPerView:2,interval:5e3,fullHeight:!0,transitionDuration:400,gutter:2,productTitleAs:"h2",imageAltPrefix:"",imgLazyLoading:!0,showControls:!0,showArrowControls:!1,showRating:!0,enableHover:!0,showPreview:!1,showDiscount:!1,showDiscountOnlyCashInfo:!1,previewAction:()=>{},cardType:"vertical"}},98284:function(a,b,c){c.d(b,{Z:function(){return C}});var d=c(7896),e=c(31461),f=c(2784),g=c(45178),h=c(99673),i=c(34490),j=c(91489),k=c(68054),l=c(19527),m=c(84546),n=c(78012);let o=({displayMode:a})=>{let b={gallery:h.iv`
      grid-template-columns: 1fr 1fr;
      ${(0,j.aK)("small")} {
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      }
    `,list:h.iv`
      grid-template-columns: 1fr;
    `,miniature:h.iv`
      grid-template-columns: 1fr 1fr 1fr;
      ${(0,j.aK)("small")} {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      }
    `};return b[a]},p=(0,h.ZP)(l.Z).attrs(a=>Object.assign({fontSize:[1,2,2,2],py:3,px:2,color:"text.scratched",borderRadius:"medium",bg:"transparent",textAlign:["center","left","left","left"],boxShadow:[4,"none","none","none"]},a))`
  min-width: 280px;
  margin: 0 auto;
  border-radius: 4px;
  transition: width 0.2s ease;
  word-break: break-word;

  ${k.AF}
  ${j.$_}
  ${k.Dh}
  ${k.cp}
`,q=h.ZP.h1.attrs(a=>Object.assign({fontSize:[3,5,5,5],fontWeight:"regular"},a))`
  text-align: center;
  color: ${a=>(0,j.uu)("base")(a)};
  line-height: normal;
  margin-bottom: 18px;
  span {
    color: ${a=>(0,j.ow)("primary.base")(a)};
    display: inline-flex;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 2.4em;
    line-height: 1.2em;
  }

  ${(0,j.aK)("small")} {
    text-align: left;
  }

  ${k.cp}
`,r=h.ZP.span.attrs(()=>({mr:3}))`
  display: none;

  ${(0,j.aK)("small")} {
    display: block;
  }

  ${k.Dh}
`,s=(0,h.ZP)(i.olm).attrs(a=>Object.assign({width:60,height:60,color:"primary.base"},a))`
  ${j.$_}
`,t=(0,h.ZP)(m.Z).attrs(a=>Object.assign({boxShadow:[4,4,"unset","unset"],borderRadius:"medium"},a))`
  margin: 0;
  overflow: hidden;
  transition: width 0.2s ease;
`,u=(0,h.ZP)(n.Z).attrs(a=>Object.assign({gridGap:["2px","1px","1px"]},a))`
  ${({displayMode:a})=>o({displayMode:a})}
  ${k.eC}
`,v=(0,h.ZP)(u.Action).attrs(()=>({fontWeight:"regular",color:"background.primary",fill:"background.primary"}))`
  border-top: ${(0,j.R)("borders.0")};
`,w=h.ZP.li`
  list-style: none;
  ${(0,j.aK)("small")} {
    margin: ${a=>(0,j.R)("space.2")(a)}px 0px;
  }
  > * {
    min-height: 100%;
  }
`,x=({message:a,messageSecondary:b})=>f.createElement(p,{"data-testid":"product-list-empty"},f.createElement(r,null,f.createElement(s,null)),f.createElement("div",null,f.createElement(q,null,a),b||""));x.defaultProps={messageSecondary:"",message:""};var y=x,z=c(66228),A=c(12468);let B=(0,f.forwardRef)(function(a,b){var c;let{hidePriceButtonAction:h,lazyLoadingOffset:i,onClickLoadMore:j,imgLazyLoading:k,showInCashInfo:l,showDiscount:m,showDiscountOnlyCashInfo:n,imageAltPrefix:o,imageWidth:p,imageHeight:q,onClickWishBtn:r,previewAction:s,showFullListBtn:x,enableShadow:B,displayMode:C,enableHover:D,showPreview:E,showWishBtn:F,showMoreBtn:G,hidePrice:H,notFound:I,onClick:J,onProductView:K,partial:L,titleAs:M,domain:N,jsonLD:O,allowEmptyRating:P,data:Q,gridGap:R,onThumbnailClick:S,colorMinLength:T,attributeStyle:U,offerTimerProps:V}=a,W=(0,e.Z)(a,["hidePriceButtonAction","lazyLoadingOffset","onClickLoadMore","imgLazyLoading","showInCashInfo","showDiscount","showDiscountOnlyCashInfo","imageAltPrefix","imageWidth","imageHeight","onClickWishBtn","previewAction","showFullListBtn","enableShadow","displayMode","enableHover","showPreview","showWishBtn","showMoreBtn","hidePrice","notFound","onClick","onProductView","partial","titleAs","domain","jsonLD","allowEmptyRating","data","gridGap","onThumbnailClick","colorMinLength","attributeStyle","offerTimerProps"]);null!==(c=b)&& void 0!==c||(b=(0,f.useRef)(null));let[X,Y]=(0,f.useState)(0),[Z,$]=(0,f.useState)(Boolean(L));if(f.useEffect(()=>{var a;return null!=(a=b)&&a.current&&Y(b.current.clientWidth),$(Boolean(L)),()=>$(!1)},[L]),I)return f.createElement(y,I);let _=null==Q?void 0:Q.map((a,b)=>f.createElement(w,{key:`product-item-${b}`},f.createElement(g.Z,(0,d.Z)({key:`product-${a.variationId||a.id}-${b}`,hidePriceButtonAction:h,lazyLoadingOffset:i,imgLazyLoading:k,showInCashInfo:l,imageAltPrefix:o,imageWidth:p,imageHeight:q,enableShadow:B,displayMode:C,domain:N,enableHover:D,showPreview:E,showWishBtn:F,hidePrice:H,onClick:J,onView:K,titleAs:M,index:b,showDiscount:m,showDiscountOnlyCashInfo:n,onClickWishBtn:b=>r(b,a),previewAction:()=>s(a),allowEmptyRating:P,containerWidth:X,onThumbnailClick:S,colorMinLength:T,attributeStyle:U,offerTimerProps:V},a)))),aa=x?{label:A.dz,props:A.Bl}:{label:A.K9,props:A.Uh};return f.createElement(t,(0,d.Z)({ref:b,"data-testid":"product-list"},W),f.createElement(u,(0,d.Z)({},L&&!x&&{collapse:!0,trigger:Z,collapsedIn:L},{variant:"light",displayMode:C,gridGap:R,renderAction:(Z||x||G)&&L<Q.length&&f.createElement(v,(0,d.Z)({onClick:()=>{j(),$(!Z)}},aa.props),aa.label)}),_),O&&Q&&f.createElement(z.ZP,{schema:Q.filter(a=>{var b;return null==(b=a.price)?void 0:b.price}).map(a=>(0,z.Iy)({product:a,isList:!0},N)),type:"ItemList"}))});B.defaultProps={hidePriceButtonAction:null,showFullListBtn:!1,displayMode:"gallery",domain:A.RW,lazyLoadingOffset:50,showInCashInfo:!0,imgLazyLoading:!0,showWishBtn:!1,showPreview:!1,showMoreBtn:!1,imageAltPrefix:"",hidePrice:!1,showDiscountOnlyCashInfo:!1,showDiscount:!1,titleAs:"h2",jsonLD:!0,partial:0,allowEmptyRating:!1,onThumbnailClick:null,colorMinLength:3,attributeStyle:{},onClickLoadMore:()=>{},onClickWishBtn:()=>{},previewAction:()=>{},onClick:()=>{},onProductView:()=>{}};var C=B},99970:function(a,b,c){c.d(b,{Z:function(){return k}});var d=c(2784),e=c(49542),f=c(99673),g=c(87043);let h=(0,f.ZP)(g.rj)`
  overflow-x: auto;
  padding: 16px 0;
`,i=(0,f.ZP)(g.rj)`
  gap: 12px;
  display: flex;
  flex-wrap: nowrap;
`,j=({children:a,isMobile:b})=>{let[c,f]=(0,d.useState)(2);if((0,d.useEffect)(()=>{b||f(5)},[]),a.length>c){var g;return g=c,d.createElement(e.Z,{showArrowControls:!0,showControls:!1,auto:!1,slidesPerView:g},a)}return d.createElement(h,{"data-testid":"gallery-without-carousel"},d.createElement(i,null,a))};var k=j},77576:function(a,b,c){c.d(b,{Z:function(){return ad}});var d=c(2784),e=c(99673),f=c(7029);let g=(0,e.ZP)("video")`
  width: 100%;
  border-radius: 15px;
  margin: auto;
  max-height: 100%;
`,h=(0,e.ZP)(f.Z)`
  border-radius: 15px;
  display: block;
`,i=e.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    max-height: 100%;
    padding: 0 2px;
  }
`,j=({media:a,alt:b})=>d.createElement(i,null,"image"===a.mediaType?d.createElement(h,{alt:b,lazy:!0,src:a.mediaUrl}):d.createElement(g,{muted:!0,controls:!0,type:"video/mp4",src:a.mediaUrl,disablePictureInPicture:!0,controlsList:"nodownload noplaybackrate"}));var k=j,l=c(34490),m=c(78045),n=c(49542),o=c(73172),p=c(91489),q=c(84546),r=c(19527),s=c(63825);let t=e.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px 16px;
  z-index: ${(0,p.R)("zIndices.4")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 500px) {
    display: none;
  }
`,u=e.ZP.div`
  color: white;
  text-align: start;
  width: 100%;
`;e.ZP.div`
  margin: auto;
  ${(0,p.aK)("medium")} {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 720px;
    gap: 30px;
  }
`;let v=e.ZP.div`
  position: relative;
  display: flex;
  justify-content: end;
  width: 100%;
`,w=e.ZP.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,x=(0,e.ZP)(q.Z).attrs(()=>({color:"primary.base",fontSize:1}))`
  display: inline;
  text-decoration: underline;
  cursor: pointer;
`,y=e.ZP.div`
  max-width: calc(100% - 80px);
  margin: auto;
  ${(0,p.aK)("medium")} {
    max-width: 280px;
  }
`,z=(0,e.ZP)(q.Z)``,A=(0,e.ZP)(r.Z)`
  padding: 0 0 ${a=>(0,p.R)("space.2")(a)}px;
  ${(0,p.aK)("large")} {
    padding: 0 0 ${a=>(0,p.R)("space.3")(a)}px;
  }
`,B=(0,e.ZP)(s.Z).attrs(()=>({fontSize:2}))`
  color: ${a=>(0,p.uu)("white")(a)};
  font-weight: ${a=>(0,p.R)("fontWeights.regular")(a)};
  padding: ${a=>(0,p.R)("space.2")(a)}px;
  line-height: ${a=>(0,p.R)("lineHeights.plus")(a)}px;
`,C=e.ZP.span`
  width: 80px;
`;var D=c(71180);let E=(a,b)=>(null==a?void 0:a.length)<=b,F=(a,b)=>null==a?void 0:a.substring(0,b).concat("..."),G=a=>/^\d+$/.test(a),H=a=>a&&!G(a)&&(0,D.jL)(new Date(a),new Date),I=a=>(null==a?void 0:a.map((a,b)=>0===b?`${a.label}: ${a.value}`:` | ${a.label}: ${a.value}`))||[],J=({charLimit:a,children:b,closePopup:c,selectedMedia:e,review:f,changeCaroulsel:g})=>{let[h,i]=(0,d.useState)(!1),{rating:j,description:k,userData:p}=f,q=E(k,a),r=F(k,a);return d.createElement(t,null,d.createElement(v,null,d.createElement(w,{"data-testid":"close-popup","aria-label":"fechar popup",onClick:c},d.createElement(l.JO$,{name:"Close",color:"#FFF"}))),d.createElement(y,null,d.createElement(n.Z,{auto:!1,goTo:e,verticalAlign:"center",onChange:g},b)),d.createElement(z,{container:!0},d.createElement(A,null,d.createElement(m.Z,null),d.createElement(B,null,p.name),d.createElement(C,null,d.createElement(o.Z,{score:j}))),d.createElement(u,{"data-testid":"review-description"},h||q?k:r,"\xa0",!q&&d.createElement(x,{onClick:()=>i(!h),role:"button"},h?"ver menos":"ver mais"))))};J.defaultProps={charLimit:110,changeCaroulsel:()=>0};var K=J,L=c(97949),M=c(99970),N=c(66762);let O=(0,e.ZP)(r.Z)`
  align-items: center;
  padding: 0 0 ${a=>(0,p.R)("space.2")(a)}px;

  ${(0,p.aK)("large")} {
    padding: 0 0 ${a=>(0,p.R)("space.3")(a)}px;
  }
`,P=(0,e.ZP)(s.Z).attrs(()=>({fontSize:2}))`
  color: ${a=>(0,p.R)("colors.darkSilver")(a)};
  font-weight: ${a=>(0,p.R)("fontWeights.regular")(a)};
  padding: ${a=>(0,p.R)("space.2")(a)}px;
  line-height: ${a=>(0,p.R)("lineHeights.plus")(a)}px;
`,Q=(0,e.ZP)(q.Z).attrs(()=>({fontSize:2}))`
  color: ${(0,p.uu)("davysGray")};
  font-weight: ${a=>(0,p.R)("fontWeights.regular")(a)};
  line-height: ${a=>(0,p.R)("lineHeights.plus")(a)}px;
`,R=(0,e.ZP)(q.Z).attrs(()=>({fontSize:2}))`
  color: ${(0,p.uu)("davysGray")};
  font-weight: ${a=>(0,p.R)("fontWeights.regular")(a)};
  line-height: ${a=>(0,p.R)("lineHeights.tall")(a)}px;
`,S=(0,e.ZP)(q.Z).attrs(()=>({fontSize:3}))`
  color: ${(0,p.R)("colors.black")};
  font-weight: ${(0,p.R)("fontWeights.regular")};
  line-height: 24px;
  padding: ${(0,p.R)("space.3")}px 0 ${(0,p.R)("space.3")}px;
  word-break: break-word;
  width: 100%;
`,T=e.ZP.div`
  margin: 25px 0;
  display: flex;
  width: 100%;
  gap: 40px;
`,U=(0,e.ZP)(q.Z).attrs(()=>({color:"primary.base",fontSize:1}))`
  display: inline;
  text-decoration: underline;
  cursor: pointer;
`,V=e.ZP.span`
  width: 80px;
`,W=e.ZP.div`
  width: 50%;
`,X=(0,e.ZP)(q.Z)`
  width: 50%;
`,Y=(0,e.ZP)(N.Z)`
  max-width: 720px;
  background-color: ${(0,p.ow)("background.lighter")};
  padding: 20px;
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
  }
`,Z=(0,e.ZP)(r.Z)`
  min-height: 400px;
`,$=(0,e.ZP)(q.Z)`
  width: 100%;
`,_={color:"#51585C",fontWeight:"bold"},aa=({changeCaroulsel:a,charLimit:b,children:c,closePopup:e,review:f,selectedMedia:g,thumbnails:h})=>{let[i,j]=(0,d.useState)(!1),[k,l]=(0,d.useState)(g),{rating:p,description:q,submissionDate:r,attributes:s,userData:t}=f,u=E(q,b),v=F(q,b),w=H(r),x=I(s);return d.createElement(Y,{position:"center",showClose:!0,type:"responsive",onClickOutside:e,title:"Avalia\xe7\xf5es com m\xeddias",titleStyle:_},d.createElement(Z,{flexDirection:"column",justifyContent:"space-between"},d.createElement(T,null,d.createElement(W,null,d.createElement(n.Z,{showArrowControls:!0,showControls:!1,auto:!1,goTo:k,verticalAlign:"center",onChange:a},c)),d.createElement(X,{container:!0},d.createElement(O,null,d.createElement(m.Z,null),d.createElement(P,null,t.name),d.createElement(V,null,d.createElement(o.Z,{score:p}))),x.length>0&&d.createElement(Q,{"data-testid":"review-sub-title"},x),d.createElement(S,{"data-testid":"review-description"},i||u?q:v,"\xa0",!u&&d.createElement(U,{onClick:()=>j(!i),role:"button"},i?"ver menos":"ver mais")),w&&d.createElement(R,{"data-testid":"review-date"},`h\xe1 ${w}`))),d.createElement($,null,(()=>{let a=h.map((a,b)=>d.createElement(L.Z,{key:`caroulsel-card-${a.mediaUrl}`,media:a,onClick:()=>l(b)}));return d.createElement(M.Z,null,a)})())))};aa.defaultProps={charLimit:110,reviewDate:null,subtitle:""};var ab=aa;let ac=({review:a,charLimit:b,mediaProps:c,selectedMedia:e,closePopup:f,changeCaroulsel:g})=>{let h=(0,d.useCallback)(()=>c.filter(a=>a.processed||"video"===a.mediaType).map(a=>d.createElement(k,{key:`slide-item-${a.mediaUrl}`,media:a,alt:""})),[]),i=c.filter(a=>a.processed||"video"===a.mediaType),j=()=>{document.body.style.overflow="visible",f()};return window.innerWidth>=500?d.createElement(ab,{charLimit:b,closePopup:f,review:a,selectedMedia:e,changeCaroulsel:g,thumbnails:i},h()):(document.body.style.overflow="hidden",d.createElement(K,{charLimit:b,closePopup:j,review:a,selectedMedia:e,changeCaroulsel:g},h()))};ac.defaultProps={charLimit:110,changeCaroulsel:()=>0};var ad=ac},79534:function(a,b,c){c.d(b,{Z:function(){return p}});var d=c(31461),e=c(2784),f=c(87043),g=c(46275),h=c(99673),i=c(91489),j=c(63825),k=c(84546);let l=(0,h.ZP)(k.Z)`
  padding-bottom: ${(0,i.R)("space.2")}px;
`;function m(a){var b=n(a,"string");return"symbol"==typeof b?b:String(b)}function n(a,b){if("object"!=typeof a||null===a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}function o({agreedError:a,agreedLabel:b,buttonLabel:c,onSubmit:h,ratingError:i,ratingLabel:j,recommendedError:k,recommendedLabel:n,reviewCharacteristics:o,minTextSize:p,textError:q,textLabel:r,textPlaceholder:s,titleError:t,titleLabel:u,titlePlaceholder:v,focus:w}){let[x,y]=(0,e.useState)(!1),[z,A]=(0,e.useState)(""),[B,C]=(0,e.useState)(""),[D,E]=(0,e.useState)(""),[F,G]=(0,e.useState)(""),[H,I]=(0,e.useState)(o||[]),[J,K]=(0,e.useState)({}),L=Object.assign({rating:(0,e.useRef)(),title:(0,e.useRef)(),text:(0,e.useRef)(),recommended:(0,e.useRef)()},H.reduce((a,{id:b})=>Object.assign({},a,{[b]:(0,e.useRef)()}),{}),{agreed:(0,e.useRef)()}),M=(0,e.useCallback)((a,b,c=w)=>{K(e=>{let f=(0,d.Z)(e,[a].map(m)),g=Object.assign({},f,b),h=Object.keys(g);if(c&&h.includes(a)&&b){let{current:i}=L[h[0]];window.scroll({top:i.offsetTop-35,left:0,behavior:"smooth"})}return g})},[J]),N=(0,e.useCallback)((a,b,c,d,e)=>{let f=a.length<c?{[b]:d}:void 0;return M(b,f,e),f},[B,D,F,z,H,x]),O=(0,e.useCallback)((a,b,c,d)=>{let e=a?void 0:{[b]:c};return M(b,e,d),e},[B,D,F,z,H,x]),P=(0,e.useCallback)(()=>{C(""),E(""),G(""),A(""),y(!1),I(o.map(a=>(0,d.Z)(a,["value"])))},[o]),Q=(0,e.useCallback)(b=>{let c=Object.assign({},O(B,"rating",i),O(D,"title",t),N(F,"text",p,q),O(z,"recommended",k),H.reduce((a,b)=>Object.assign({},a,O(b.value,b.id,i)),{}),O(x,"agreed",a));Object.keys(c).length||h({rating:B,title:D,text:F,recommended:z,characteristics:H},P),b.preventDefault()},[B,D,F,z,x,H]);return e.createElement(f.xu,{as:"form","data-testid":"review-form"},e.createElement(l,null,e.createElement(g.qr,{onChange:a=>{O(a.target.value,"rating",i,!1),C(a.target.value)},ref:L.rating,value:B,error:J.rating,type:"rating",label:j,height:[40,30],width:[40,30],gap:[0,30],fontSize:[4,2],fontWeight:["bold","regular"],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"],name:"rating"})),e.createElement(l,null,e.createElement(g.qr,{onChange:a=>E(a.target.value),onFocus:()=>K(a=>(0,d.Z)(a,["title"])),onBlur:a=>O(a.target.value,"title",t,!1),ref:L.title,value:D,error:J.title,type:"text",label:u,placeholder:v,gap:[0,30],flexDirection:["column","row"],textAlign:["left","right"]})),e.createElement(l,null,e.createElement(g.qr,{onChange:a=>G(a.target.value),onFocus:()=>K(a=>(0,d.Z)(a,["text"])),onBlur:a=>N(a.target.value,"text",50,q,!1),ref:L.text,value:F,error:J.text,type:"textarea",label:r,gap:[0,30],flexDirection:["column","row"],textAlign:["left","right"],placeholder:s})),e.createElement(l,{borderBottomWidth:["1px","0px"],borderBottomStyle:"solid",borderColor:"lightSilver"},e.createElement(g.qr,{onChange:a=>{O(a.target.value,"recommended",k,!1),A(a.target.value)},ref:L.recommended,value:z,error:J.recommended,type:"recommendation",label:n,gap:[0,30],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]})),null==H?void 0:H.map(({id:a,label:b,value:c})=>e.createElement(l,{key:a,borderBottomWidth:["1px","0px"],borderBottomStyle:"solid",borderColor:"lightSilver"},e.createElement(g.qr,{onChange:b=>{O(b.target.value,a,i,!1),I(H.map(c=>c.id===a?Object.assign({},c,{value:b.target.value}):c))},name:a,ref:L[a],value:c,error:J[a],label:b,type:"rating",height:[30,24],width:[30,24],gap:[0,30],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]}))),e.createElement(f.kC,{m:20,flexDirection:["column","row"],gap:[0,30]},e.createElement(f.kC,{flex:"0.75"}),e.createElement(f.kC,{flex:"1",gap:"2",alignItems:["center","start"],justifyContent:"space-evenly",flexDirection:"column"},e.createElement(f.XZ,{ref:L.agreed,checked:x,onChange:b=>{O(b.target.checked,"agreed",a,!1),y(b.target.checked)}},b),J.agreed&&e.createElement(f.xv,{color:"error.base"},J.agreed))),e.createElement(f.kC,{mY:20,flexDirection:["column","row"],gap:[0,30]},e.createElement(f.kC,{flex:"0.75"}),e.createElement(f.kC,{flex:"1",gap:"2",alignItems:["center","start"],justifyContent:"space-evenly",flexDirection:"column"},e.createElement(f.zx,{onClick:Q,full:!0},c))))}(0,h.ZP)(j.Z)`
  text-decoration: underline;
  cursor: pointer;
`,o.defaultProps={agreedError:"Por favor verifique os termos.",agreedLabel:"Concordo com os termos e condi\xe7\xf5es",buttonLabel:"Enviar avalia\xe7\xe3o",ratingError:"Clique nas estrelas para classificar!",ratingLabel:"Avalia\xe7\xe3o Geral",recommendedError:"Por favor selecione uma op\xe7\xe3o.",recommendedLabel:"Voc\xea recomenda esse produto?",minTextSize:50,textError:"M\xednimo de 50 caracteres.",textLabel:"Avalia\xe7\xe3o",titleError:"Insira o t\xedtulo completo corretamente.",titleLabel:"T\xedtulo da avalia\xe7\xe3o",titlePlaceholder:"Ex. Produto Maravilhoso",textPlaceholder:"Ex: Escreva exclusivamente sobre o produto. Para sugest\xf5es, reclama\xe7\xf5es ou problemas em geral, acesse nossa Central de Atendimento",focus:!0};var p=o},4506:function(a,b,c){c.d(b,{Z:function(){return s}});var d=c(2784),e=c(34490),f=c(99673),g=c(91489),h=c(19527),i=c(84546),j=c(63825);let k=(0,f.ZP)(h.Z)`
  display: flex;
  justify-content: center;
  align-items: center;
`,l=(0,f.ZP)(h.Z)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
  }
`,m=(0,f.ZP)(j.Z)`
  font-weight: ${a=>(0,g.R)("fontWeights.bold")(a)};
  font-size: ${a=>(0,g.R)("fontSizes.7")(a)}px;
`,n=(0,f.ZP)(j.Z)`
  font-size: ${a=>(0,g.R)("fontSizes.0")(a)}px;
  color: ${a=>(0,g.uu)("light")(a)};
`,o=(0,f.ZP)(i.Z)`
  border-left: 3px solid ${a=>(0,g.kJ)("light")(a)};
  height: 90px;
  margin: 0px 24px;
`;var p=c(60861),q=c(46275);function r({average:a,count:b,distribution:c,actionLabel:f,onReviewButtonClick:g}){let h=b>1?`${b} avalia\xe7\xf5es`:`${b} avalia\xe7\xe3o`;return c.sort((a,b)=>b.value-a.value),d.createElement(d.Fragment,null,d.createElement(k,{mb:[3,3,3]},d.createElement(l,null,d.createElement("div",null,d.createElement(m,{"data-testid":"stat-score"},a.toFixed(1)),d.createElement(e.Uxw,{width:"50px",height:"50px",color:"#FFCC03"})),d.createElement(n,{"data-testid":"stat-desc"},h)),d.createElement(o,null),d.createElement("ul",null,null==c?void 0:c.map(a=>d.createElement(q.me,{key:a.value,id:a.value,score:a.count,count:a.count,max:b})))),!!f&&d.createElement(p.Z,{full:!0,variation:"fill",size:"medium",color:"primary",onClick:d=>g(d,{average:a,distribution:c,desc:h,total:b})},f))}r.defaultProps={actionLabel:"Quero avaliar",average:0,count:0,distribution:[],onReviewButtonClick:()=>({})};var s=r},30143:function(a,b,c){c.d(b,{Z:function(){return I}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(25164),i=c(87043),j=c(99673),k=c(91489),l=c(63825);let m=(0,j.ZP)(l.Z)`
  color: ${a=>a.color||(0,k.uu)("scratched")(a)};
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,k.R)("fontWeights.regular")(a)};
  margin-right: 4px;
  line-height: ${a=>a.lineHeight||"20px"};
`,n=j.ZP.label`
  color: ${a=>(0,k.uu)("base")(a)};
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,k.R)("fontWeights.bold")(a)};
  text-decoration: ${({disableClick:a})=>a?"none":"underline"};
  cursor: ${({disableClick:a})=>a?"default":"pointer"};
`,o=j.ZP.a`
  cursor: pointer;

  svg {
    vertical-align: middle;
  }
`,p=(0,j.ZP)(g.ZGh).attrs(a=>({color:`${a.logoIconColor||(0,k.ow)("base")(a)}`,width:60,height:14,viewBox:"0 0 60 14"}))`
  vertical-align: middle;
  margin-top: 4px;
`,q=j.ZP.div`
  padding: 15px 15px;
`,r=(0,j.ZP)(l.Z)`
  font-size: ${a=>(0,k.R)("fontSizes.5")(a)}px;
  font-weight: ${a=>(0,k.R)("fontWeights.bold")(a)};
`,s=j.ZP.a`
  height: 20px;
  display: flex;
  align-items: center;
  margin: 28px 0;
  text-decoration: none;
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,k.R)("fontWeights.medium")(a)};
  color: ${a=>(0,k.uu)("primary")(a)};
  cursor: pointer;
`,t=(0,j.ZP)(g._Qn).attrs(a=>({color:(0,k.uu)("primary")(a)}))`
  vertical-align: middle;
  width: 20px;
  height: 20px;
`,u=j.ZP.div`
  margin: 0 0 15px;
`,v=(0,j.ZP)(l.Z)`
  font-size: ${a=>(0,k.R)("fontSizes.3")(a)}px;
  font-weight: ${a=>(0,k.R)("fontWeights.bold")(a)};
  padding: 0 0 5px;
`,w=j.ZP.p`
  font-size: ${a=>(0,k.R)("fontSizes.2")(a)}px;
  color: ${a=>(0,k.uu)("greyish")(a)};
  padding: 0 0 5px;
`,x={bg:"#f0f0f2",borderRadius:8,p:2,mb:2,alignItems:"center"},y=a=>{let{id:b,delivery:c,handleLabelName:g,internationalPartner:h,partnerColor:j}=a,k=(0,e.Z)(a,["id","delivery","handleLabelName","internationalPartner","partnerColor"]);return c||b?c&&(null==b?void 0:b.toUpperCase())!==(null==c?void 0:c.toUpperCase())?f.createElement(i.xu,k,f.createElement(m,{"data-testid":"label"},"Vendido por ",g(b)),f.createElement(m,{"data-testid":"label"},"Entregue por ",g(c))):f.createElement(i.xu,h?x:k,f.createElement(m,(0,d.Z)({},h?{color:j,lineHeight:"16px"}:{},{"data-testid":"label"}),"Vendido e entregue por ",g(c))):null};y.defaultProps={id:"magazineluiza",delivery:"magazineluiza",handleLabelName:()=>{},internationalPartner:!1};var z=y,A=c(82753);let B=a=>{let{address:b,number:c,district:d,city:e,state:f,zipcode:g}=a,h=[];return b&&c&&h.push(`${b}, ${c}`),e&&f&&h.push(`${d?`${d} - `:""}${e}/${f}`),g&&h.push(`CEP: ${g}`),h},C=({seller:a,product:b,onOffersClick:c})=>{let{id:d,description:e,deliveryId:g,details:h,href:i}=a,j=(0,A.xx)(null==b?void 0:b.price),k=B((null==h?void 0:h.address)||{}),l=[(null==h?void 0:h.legalName)&&{label:"Raz\xe3o Social",id:"legalName",value:null==h?void 0:h.legalName},j?{label:"ID do Lojista",id:"shippingDocumentNumber",value:null==h?void 0:h.shippingDocumentNumber}:{label:"CNPJ",id:"documentNumber",value:null==h?void 0:h.documentNumber},k.length&&{label:"Endere\xe7o",id:"address",value:B(null==h?void 0:h.address)}];return f.createElement(q,null,f.createElement(r,null,e),f.createElement(s,{href:i,onClick:a=>c(a,{id:d,delivery:g}),"data-testid":"offers-link"},"Veja todas as ofertas dessa loja ",f.createElement(t,null)),l.map((a,b)=>f.createElement(u,{key:`seller-detail-${b}`,"data-testid":"details"},f.createElement(v,null,null==a?void 0:a.label),Array.isArray(null==a?void 0:a.value)?null==a?void 0:a.value.map(a=>f.createElement(w,{"data-testid":"details-value",key:`seller-value-${a}`},a)):f.createElement(w,null,null==a?void 0:a.value))))};C.defaultProps={seller:{id:"magazineluiza",deliveryId:"magazineluiza",description:"Magalu",details:{}},product:{},onOffersClick:()=>{}};var D=C,E={zattini:{id:"zattini",logo:g.fOR},netshoes:{id:"netshoes",logo:g.fOD},kabum:{id:"kabum",logo:g.M0M},"epocacosmeticos-integra":{id:"epoca",logo:g.uE5}},F=c(12468),G=c(83179);let H=a=>{let{showSellerDetailContent:b,onCloseModalContent:c,seller:j,product:k,onSellerClick:l,onOffersClick:m,disableSellerClick:q,disableSellerDetails:r,logoIconColor:s,showDialog:t,modal:u,internationalPartner:v,partnerColor:w,partnerLogo:x}=a,y=(0,e.Z)(a,["showSellerDetailContent","onCloseModalContent","seller","product","onSellerClick","onOffersClick","disableSellerClick","disableSellerDetails","logoIconColor","showDialog","modal","internationalPartner","partnerColor","partnerLogo"]),{id:A,description:B,deliveryId:C}=j,[H,I]=(0,f.useState)(b),J=a=>{l(a,{id:A,delivery:C}),I(!r)},K=()=>{I(!1),c()};f.useEffect(()=>{I(b)},[b]);let L=a=>{if(v&&x)return f.createElement(o,{title:`Logo ${C}`,"data-testid":`${C}logo`,children:f.createElement(g.RdR,{href:x,width:77,height:16}),onClick:q?null:J});if(a===F.ig)return f.createElement(p,{title:"Logo magalu","data-testid":"magalogo",logoIconColor:s});if(E[a]){let{id:b,logo:c}=E[a];return f.createElement(o,{title:`Logo ${b}`,"data-testid":`${b}logo`,children:f.createElement(c,{preserveAspectRatio:!0}),onClick:q?null:J})}return f.createElement(n,{onClick:q?null:J,disableClick:q,children:B||C,"data-testid":"link"})};return f.createElement(f.Fragment,null,f.createElement(z,(0,d.Z)({id:A,delivery:C,handleLabelName:L,internationalPartner:v,partnerColor:w},y)),!q&&!t&&f.createElement(h.YE,{direction:"right",visible:H,onClickOutside:K,fullScreen:!0,portal:!0},f.createElement(G.Z,{label:u.title||"Informa\xe7\xf5es da loja parceira",align:"left",leftButton:{icon:"back",title:"Voltar para a pagina do produto",onClick:K}}),u.content||f.createElement(D,{seller:j,product:k,onOffersClick:m})),!q&&!r&&t&&f.createElement(i.Vq,{visible:H,onClickOutside:K,position:"center",type:"responsive",showClose:!0,title:u.title,titleStyle:u.titleStyle},u.content||f.createElement(D,{seller:j,product:k,onOffersClick:m})))};H.defaultProps={product:{},seller:{id:"magazineluiza",deliveryId:"magazineluiza",description:"Magalu"},onSellerClick:()=>{},onOffersClick:()=>{},disableSellerClick:!1,onCloseModalContent:()=>({}),showSellerDetailContent:!1,disableSellerDetails:!1,logoIconColor:"",showDialog:!1,modal:{title:""},internationalPartner:!1};var I=H},2334:function(a,b,c){c.d(b,{Z:function(){return j}});var d=c(7896),e=c(31461),f=c(2784),g=c(46275),h=c(87043);let i=a=>{let{items:b,currency:c}=a,i=(0,e.Z)(a,["items","currency"]);return f.createElement(h.xu,i,b.map((a,b)=>f.createElement(h.xu,{key:`shipping-item-${b}`},!!b&&f.createElement(h.bo,null),f.createElement(g.KI,(0,d.Z)({currency:c},a)))))};i.defaultProps={items:[],currency:"BRL"};var j=i},75335:function(a,b,c){c.d(b,{Z:function(){return R}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(68054),i=c(91489),j=c(19527),k=c(63825),l=c(27439);let m=g.iv`
  color: ${a=>(0,i.uu)("base")(a)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
`,n={miniature:g.iv`
    display: grid;
    padding: 8px 2px;
  `,list:g.iv`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 16px;
  `,gallery:g.iv``,none:g.iv`
    display: contents;
  `,button:g.iv`
    display: block;
    padding: 16px 16px 6px;
  `},o={miniature:g.iv`
    height: 20vw;
    justify-content: flex-end;
    & > span {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,list:g.iv`
    justify-content: flex-start;
    padding-top: 4px;
    min-height: 25vw;
  `,gallery:g.iv`
    height: 32vw;
    justify-content: flex-end;
    & > span {
      display: block;
      width: 100%;
      height: 100%;
    }
  `},p=(0,g.ZP)(l.ZP)`
  background-color: ${a=>(0,i.ow)("background.lighter")(a)};
  padding: 0;
  ${({displayMode:a})=>a&&n[a]}
`,q=g.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: ${a=>(0,i.R)("space.2")(a)}px;
  ${({displayMode:a})=>a&&o[a]}
`,r=g.ZP.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  grid-column-start: ${({betterOffer:a})=>a&&2};
  ${({highlight:a,highlightType:b,sponsored:c})=>a&&!b?g.iv`
          margin: ${(0,i.R)("space.0")}px ${(0,i.R)("space.2")}px;
        `:g.iv`
          margin-bottom: ${c?(0,i.R)("space.2"):(0,i.R)("space.3")}px;
        `};
`,s=(0,g.ZP)(k.Z).attrs(({highlight:a,fontSize:b})=>({fontSize:null!=b?b:[a?1:2,4,5],lineHeight:"display",fontWeight:"medium"}))`
  ${m}
  ${h.cp}

  & > span {
    font-weight: ${a=>(0,i.R)("fontWeights.bold")(a)};
  }
`,t=g.ZP.h2`
  ${m}
  height: 32px;
  line-height: ${a=>(0,i.R)("lineHeights.plus")(a)}px;
  font-size: ${a=>(0,i.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,i.R)("fontWeights.regular")(a)};
  margin: 0 0 4px 0;
`,u=g.ZP.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`,v=(0,g.ZP)(k.Z).attrs(()=>({fontSize:[1,4,5],lineHeight:"display",fontWeight:"regular"}))`
  ${m}
  ${h.cp}
`,w=g.ZP.div`
  display: grid;
`,x=g.ZP.div`
  box-shadow: ${({exhibition:a})=>"highlight"===a?"0 4px 10px 0 rgba(0, 0, 0, 0.11)":"unset"};
  border-radius: ${({exhibition:a})=>"highlight"===a&&"4px"};
  overflow: hidden;
  ${({exhibition:a})=>"betteroffer"===a&&g.iv`
      display: grid;
      grid-template-rows: auto auto;
      padding: 24px;
      grid-template-columns: 1fr minmax(auto, 1376px) 1fr;
    `}
  ${h.Dh}
  ${h.$_}
  ${h.bK}
  ${h.Cg}
`,y=(0,g.ZP)(j.Z)`
  flex: 1;
  flex: 0 0 calc(100% / 4);
  border-right: ${(0,i.R)("borders.0")};
  border-width: 2px;
`,z=(0,g.ZP)(k.Z).attrs(()=>({fontSize:0,color:"light",marginTop:1}))``,A=g.ZP.div`
  grid-column-start: 2;
`;var B=c(98284);let C=({title:a,titleAs:b,titleSize:c,highlightType:d,showSponsoredSubTitle:e,betterOffer:g})=>{let[h,i="",j=""]=a.split('"'),k=j.replace(", ","");return f.createElement(r,{highlight:i,highlightType:d,sponsored:e,betterOffer:g},d?f.createElement(s,{as:b,fontSize:c,"data-testid":"product-title-head"},h," ",f.createElement("span",null,i)," ",k):f.createElement(f.Fragment,null,f.createElement(s,{as:b,fontSize:c,highlight:i,"data-testid":"product-title-head"},h),!!i&&f.createElement(v,{as:b,fontSize:c,"data-testid":"text-highlight"},i),!!k&&f.createElement(s,{as:b,fontSize:c,"data-testid":"text-suffix"},k)),e&&f.createElement(z,{"data-testid":"sponsored-tag"},"Patrocinados"))};C.defaultProps={title:"",titleAs:"h2",highlightType:!1,showSponsoredSubTitle:!1,betterOffer:!1};var D=C;let E=a=>{let{data:b,title:c,titleAs:g,titleSize:h,imageAltPrefix:i,productTitleAs:j,showDiscountOnlyCashInfo:k,showDiscount:l}=a,m=(0,e.Z)(a,["data","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showDiscountOnlyCashInfo","showDiscount"]);return f.createElement(f.Fragment,null,f.createElement(D,{title:c,titleSize:h,titleAs:g}),f.createElement(B.Z,(0,d.Z)({data:b,displayMode:"list",enableShadow:!1,exhibition:"rank",imageAltPrefix:i,titleAs:j,showInCashInfo:!0,showDiscountOnlyCashInfo:k,showDiscount:l},m)))},F=a=>{let{data:b,title:c,titleAs:g,titleSize:h,imageAltPrefix:i,productTitleAs:j,showFullListBtn:k,showMoreBtn:l,onClickLoadMore:m,showDiscountOnlyCashInfo:n,showDiscount:o,showSponsoredSubTitle:p}=a,q=(0,e.Z)(a,["data","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showFullListBtn","showMoreBtn","onClickLoadMore","showDiscountOnlyCashInfo","showDiscount","showSponsoredSubTitle"]);return f.createElement(f.Fragment,null,f.createElement(D,{title:c,titleSize:h,titleAs:g,showSponsoredSubTitle:p}),f.createElement(B.Z,(0,d.Z)({data:b,displayMode:"gallery",enableShadow:!1,exhibition:"list",imageAltPrefix:i,titleAs:j,showFullListBtn:k,showMoreBtn:l,onClickLoadMore:m,showInCashInfo:!0,showDiscount:o,showDiscountOnlyCashInfo:n},q)))};var G=c(7029);let H=a=>{let{data:b,highlight:c,title:g,titleAs:h,titleSize:i,imageAltPrefix:j,productTitleAs:k,showDiscount:l,showDiscountOnlyCashInfo:m}=a,n=(0,e.Z)(a,["data","highlight","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showDiscount","showDiscountOnlyCashInfo"]),o=j?`${j}${c.title}`:c.title;return f.createElement(f.Fragment,null,f.createElement(p,{as:"div",displayMode:"list","data-testid":"product-card-container",hideLinkBorder:!1},f.createElement(q,{displayMode:"list"},f.createElement(G.Z,{src:c.image,alt:o,lazy:!0,offset:2})),f.createElement(w,{displayMode:"gallery","data-testid":"product-card-content"},f.createElement(D,{title:g,titleAs:h,titleSize:i}))),f.createElement(B.Z,(0,d.Z)({data:b,displayMode:"gallery",enableShadow:!1,exhibition:"highlight",imageAltPrefix:j,titleAs:k,showInCashInfo:!0,showDiscountOnlyCashInfo:m,showDiscount:l},n)))};var I=c(34490),J=c(87043);let K=({data:a,button:b,title:c,titleAs:d,titleSize:e,imageAltPrefix:g,productTitleAs:h,onClick:i})=>{let[j]=a,k=g?`${g}${j.title}`:null==j?void 0:j.title;return f.createElement(p,{displayMode:"button","data-testid":"product-card-container",hideLinkBorder:!1,as:"div"},f.createElement(D,{title:c,titleAs:d,titleSize:e}),f.createElement(u,null,f.createElement(q,{displayMode:"list"},f.createElement(G.Z,{src:null==j?void 0:j.image,alt:k,lazy:!0,offset:2})),f.createElement(w,{displayMode:"none","data-testid":"product-card-content"},f.createElement(r,{as:h},f.createElement(t,null,null==j?void 0:j.title)))),f.createElement(J.zx,{"data-testid":"showcase-button",onClick:a=>i(a,j),color:"secondary",startIcon:f.createElement(I.tuM,{width:32,height:32}),m:"10px 0",full:!0},(null==b?void 0:b.label)||"RETOMAR SUA COMPRA"))};var L=c(4720),M=c(45178);let N=a=>{let{title:b,titleAs:c,titleSize:g,data:h,highlight:i,slidesPerView:k,showDiscount:l,showDiscountOnlyCashInfo:m,showSponsoredSubTitle:n,offerTimerProps:o}=a,p=(0,e.Z)(a,["title","titleAs","titleSize","data","highlight","slidesPerView","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle","offerTimerProps"]);return f.createElement(f.Fragment,null,f.createElement(D,{title:b,titleAs:c,titleSize:g,highlightType:!!i,showSponsoredSubTitle:n}),f.createElement(j.Z,null,i&&f.createElement(y,{slidesPerView:k},f.createElement(M.Z,(0,d.Z)({},i,{displayMode:"gallery",showInCashInfo:!0,titleAs:"h3",fullHeight:!0,imageAltPrefix:"",imgLazyLoading:!0,imageWidth:p.imageWidth,imageHeight:p.imageHeight,showRating:!1,showDiscountOnlyCashInfo:m,showDiscount:l,key:`product-hightlight${i.variationId||i.id}`,offerTimerProps:o,enableHover:!0}))),f.createElement(L.Z,(0,d.Z)({products:h,slidesPerView:i?k-1:k,enableHover:!i,showDiscountOnlyCashInfo:m,showDiscount:l,offerTimerProps:o},p))))};N.defaultProps={slidesPerView:4};let O=a=>{let{title:b,titleAs:c,titleSize:g,data:h,highlight:i,slidesPerViewBetterOffer:j,showSponsoredSubTitle:k}=a,l=(0,e.Z)(a,["title","titleAs","titleSize","data","highlight","slidesPerViewBetterOffer","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle"]);return f.createElement(f.Fragment,null,f.createElement(D,{title:b,titleAs:c,titleSize:g,highlightType:!!i,showSponsoredSubTitle:k,betterOffer:!0}),f.createElement(A,null,f.createElement(L.Z,(0,d.Z)({products:h,slidesPerView:j,enableHover:!i,showDiscountOnlyCashInfo:!1,showDiscount:!1,fullHeight:!1,exhibition:"betteroffer",gutter:24,displayMode:"list",showRating:!1,showPartialNextSlide:!0,cardType:"horizontal",show:!0},l))))};O.defaultProps={slidesPerViewBetterOffer:2};var P={rank:E,list:F,highlight:H,button:K,carousel:N,betteroffer:O};let Q=(0,f.forwardRef)((a,b)=>{var c;let{data:g,onClick:h,onProductView:i,jsonLD:j,exhibition:k,titleAs:l,titleSize:m,imageAltPrefix:n,productTitleAs:o,showFullListBtn:p,showMoreBtn:q,onClickLoadMore:r,showInCashInfo:s,showDiscount:t,showDiscountOnlyCashInfo:u,showSponsoredSubTitle:v,slidesPerViewBetterOffer:w}=a,y=(0,e.Z)(a,["data","onClick","onProductView","jsonLD","exhibition","titleAs","titleSize","imageAltPrefix","productTitleAs","showFullListBtn","showMoreBtn","onClickLoadMore","showInCashInfo","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle","slidesPerViewBetterOffer"]);null!==(c=b)&& void 0!==c||(b=(0,f.useRef)(null));let z=void 0===P[k]?P.rank:P[k];return f.createElement(x,(0,d.Z)({ref:b,exhibition:k},y),f.createElement(z,(0,d.Z)({data:g.products,title:g.title,highlight:g.highlight,button:g.button,onClick:h,onProductView:i,jsonLD:j,titleAs:l,titleSize:m,productTitleAs:o,imageAltPrefix:n,showFullListBtn:p,slidesPerViewBetterOffer:w,showMoreBtn:q,onClickLoadMore:r,showInCashInfo:s,showDiscount:t,showDiscountOnlyCashInfo:u,showSponsoredSubTitle:v},y)))});Q.defaultProps={data:{title:null,products:[]},onClick:()=>!1,onProductView:()=>{},exhibition:"rank",jsonLD:!0,titleAs:"h2",productTitleAs:"h3",imageAltPrefix:"",showFullListBtn:!1,showMoreBtn:!1,showInCashInfo:!0,showDiscount:!1,showDiscountOnlyCashInfo:!1,showSponsoredSubTitle:!1,slidesPerViewBetterOffer:2},Q.displayName="Showcase";var R=Q},83179:function(a,b,c){c.d(b,{Z:function(){return r}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(99673),i=c(91489),j=c(68054),k=c(63825);let l={left:h.iv`
    grid-template-columns: auto repeat(1, auto) 1fr;
  `,right:h.iv`
    grid-template-columns: 1fr repeat(1, auto) auto;
  `,default:h.iv`
    grid-template-columns: 1fr repeat(1, auto) 1fr;
  `},m=(0,h.ZP)(k.Z)`
  align-self: center;
  font-weight: 500;
`,n=h.ZP.div`
  margin-right: auto;
`,o=h.ZP.div`
  display: grid;
  ${a=>l[null==a?void 0:a.align]||l.default}
  gap: 0 10px;
  padding: 20px 16px;
  border-bottom: 1px solid ${a=>(0,i.dF)("darker")(a)};
  ${j.Dh}
  ${j.$_}
  ${j.bK}
  ${j.Cg}
  ${j.J4}
  ${j.$u}
`,p={close:g.x8P,back:g.xhZ},q=a=>{let{label:b,align:c,fontSize:g,leftButton:h,showCloseButton:i}=a,j=(0,e.Z)(a,["label","align","fontSize","leftButton","showCloseButton"]),{icon:k,title:l,onClick:q,iconColor:r="#8c8c8c"}=h,s=p[k||"close"];return f.createElement(o,(0,d.Z)({},j,{align:c,"data-testid":"sidebar-header"}),f.createElement(n,null,i&&f.createElement(s,{color:r,role:"button",title:l,"data-testid":`${k}-button`,onClick:q})),f.createElement(m,(0,d.Z)({fontSize:g},j,{"data-testid":"title"}),b))};q.defaultProps={align:"center",fontSize:1,leftButton:{icon:"close",onClick:()=>{}},showCloseButton:!0};var r=q},70615:function(a,b,c){c.d(b,{"$":function(){return s.Z},Z:function(){return y}});var d=c(7896),e=c(31461),f=c(2784),g=c(39879),h=c(99673),i=c(68054),j=c(91489),k=c(81572),l=c(84546);let m={left:h.iv`
    left: 0;
    transform: ${({visible:a})=>a?"translateX(0)":"translateX(-100%)"};
  `,right:h.iv`
    right: 0;
    transform: ${({visible:a})=>a?"translateX(0)":"translateX(100%)"};
  `},n=h.ZP.aside`
  z-index: ${a=>(0,j.R)("zIndices.2")(a)};
  visibility: ${({visible:a})=>a?"visible":"hidden"};
`,o=(0,h.ZP)(k.Z).attrs(a=>({borderBottom:`1px solid ${(0,j.dF)("darker")(a)}`}))``,p=(0,h.ZP)(l.Z).attrs(a=>{let{fullScreen:b}=a,c=(0,e.Z)(a,["visible","fullScreen"]);return{backgroundColor:(0,j.dF)((null==c?void 0:c.bg)||"lighter")(c),zIndex:(0,j.R)("zIndices.3")(c),width:b?"100%":"80%",overflowX:"hidden",position:"fixed",overflowY:"auto",textAlign:"left",display:"block",height:"100vh",height:"100svh",top:0}})`
  ${i.$_}

  ${({direction:a})=>m[a]||m.right}
  visibility: ${({visible:a})=>a?"visible":"hidden"};
  transition: ${({timeTransition:a})=>`transform ${a}s ease-in-out`};

  /* mobile native toolbar */
  padding-bottom: 54px;
`,q=(0,h.ZP)(l.Z).attrs(a=>{let{visible:b}=a,c=(0,e.Z)(a,["visible"]);return{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:(0,j.R)("zIndices.2")(c),opacity:Number(b),position:"fixed",bottom:0,right:0,left:0,top:0}})`
  visibility: ${({visible:a})=>a?"visible":"hidden"};
  transition: visibility 0s, opacity 0.3s linear;
`;var r=c(75851),s=c(83179),t=c(34490);let u=a=>{let{children:b,variant:c,startIcon:g,fontSize:h,fontWeight:i,textAlign:j,ariaLabel:k,fill:l,onClick:m}=a,n=(0,e.Z)(a,["children","variant","startIcon","fontSize","fontWeight","textAlign","ariaLabel","fill","onClick"]);return f.createElement(o,(0,d.Z)({variant:c,scale:"large",startIcon:g&&f.createElement(t.JO$,{name:g,"aria-label":k,fill:l,onClick:m,"data-testid":"sidebar-header-icon"}),textAlign:j,fontSize:h,fontWeight:i,"data-testid":"sidebar-header"},n),b)};u.defaultProps={children:null,variant:"transparent",startIcon:"ArrowBack",fontSize:1,fontWeight:"medium",textAlign:"center",ariaLabel:"fechar sidebar",fill:"currentColor",onClick:()=>{}};let v=a=>f.createElement(r.Z,{id:"portal-sidebar"},a),w=a=>{let{portal:b=!1}=a,c=(0,e.Z)(a,["portal"]),d=f.createElement(x,c);return b?v(d):d},x=a=>{let{children:b,visible:c,direction:h,timeTransition:i,onClickOutside:j,headerTitle:k,fullScreen:l}=a,m=(0,e.Z)(a,["children","visible","direction","timeTransition","onClickOutside","headerTitle","fullScreen"]),o=(0,f.useRef)(null);return(0,f.useEffect)(()=>{var a;let b=window.getComputedStyle(document.body).overflow;return document.body.style.overflow=c?"hidden":b,null!=o&&null!=(a=o.current)&&a.scrollTop&&(o.current.scrollTop=0),()=>{document.body.style.overflow=b}},[c]),(0,f.useEffect)(()=>{(0,g.Iq)()},[b]),f.createElement(n,{visible:c,"data-testid":"sidebar"},f.createElement(p,(0,d.Z)({forwardRef:o,visible:c,direction:h,timeTransition:i,fullScreen:l,"data-testid":"content"},m),k&&f.createElement(s.Z,{label:k,leftButton:{onClick:j}}),b),f.createElement(q,{"aria-hidden":"true",visible:c,onClick:j,"data-testid":"overlay"}))};x.defaultProps={direction:"left",timeTransition:.3,headerTitle:null,fullScreen:!1,visible:!1,onClickOutside:()=>{}},w.Header=u;var y=w},37215:function(a,b,c){c.d(b,{Z:function(){return k}});var d=c(2784),e=c(34490),f=c(99673),g=c(17781);let h={xsmall:{size:"xsmall",width:"15px",height:"15px",minWidth:"152px",maxWidth:"152px",fontSize:0},small:{size:"small",width:"17px",height:"17px",minWidth:"153px",maxWidth:"153px",fontSize:1},medium:{size:"medium",width:"20px",height:"18px",minWidth:"160px",maxWidth:"160px",fontSize:1}},i=(0,f.ZP)(g.Z).attrs(({variant:a,startIcon:b})=>({bg:"magabluLight",fontSize:0,startIcon:b,fontWeight:"medium",gridGap:1,borderRadius:8,mb:2,mt:2,color:"primary",justify:"start",padding:"2px 8px",minWidth:h[a].minWidth,maxWidth:h[a].maxWidth,textMaxWidth:"auto",size:h[a].size}))``;function j({variant:a}){return d.createElement(i,{variant:a,"data-testid":"productCard-international-tag",startIcon:d.createElement(e.JO$,{name:"Airplane",fill:"#0086FF",width:h[a].width,height:h[a].height})},"Compra Internacional")}j.defaultProps={variant:"xsmall"};var k=j},35306:function(a,b,c){c.d(b,{Z:function(){return t}});var d=c(7896),e=c(31461),f=c(2784),g=c(46275),h=c(87043),i=c(99673),j=c(91489);let k={default:i.iv`
    flex-direction: column;
    word-break: break-word;
    min-width: 280px;
  `,flex:i.iv`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    ${(0,j.aK)("small")} {
      justify-content: left;
    }
  `,inline:i.iv`
    display: inline;
    font-size: inherit;
    line-height: normal;
  `},l={flex:i.iv`
    display: inline-block;
    padding: ${(0,j.R)("space.3")}px ${(0,j.R)("space.2")}px;
    ${(0,j.aK)("small")} {
      width: 150px;
      padding: unset;
    }
  `,inline:i.iv`
    display: inline-block;
    margin-right: ${(0,j.R)("space.4")}px;
    font-size: inherit;
    & a {
      display: inline-block;
      font-size: inherit;
      line-height: normal;
    }
  `},m={default:i.iv`
    color: ${a=>(0,j.uu)("base")(a)};
    padding-bottom: ${(0,j.R)("space.3")}px;
    line-height: normal;
  `,inline:i.iv`
    display: inline-block;
    margin-right: ${(0,j.R)("space.3")}px;
    font-size: inherit;
  `},n=(0,i.ZP)(h.xu).attrs(a=>Object.assign({p:3,textAlign:"left",borderRadius:"default"},a))``,o=(0,i.ZP)(h.X6)`
  ${a=>m[a.variation]||m.default};
`,p=(0,i.ZP)(h.bo)`
  ${(0,j.aK)("small")} {
    display: none;
  }
`,q=i.ZP.ul`
  list-style-position: inside;
  display: flex;
  justify-content: space-around;
  ${a=>k[a.variation]||k.default};
`,r=(0,i.ZP)(h.xv).attrs(()=>({forwardedAs:"li",fontSize:2,color:"scratched",lineHeight:"big"}))`
  list-style-type: ${({hideListPoint:a})=>a?"none":"disc"};
  ${a=>l[a.variation]||l.default};
`,s=a=>{let{hideListPoint:b,limitListItems:c,list:i,handleClickLink:j,showAllItems:k,showMoreLabel:l,title:m,titleAs:s,typeList:t}=a,u=(0,e.Z)(a,["hideListPoint","limitListItems","list","handleClickLink","showAllItems","showMoreLabel","title","titleAs","typeList"]),[v,w]=(0,f.useState)(k),[x,y]=(0,f.useState)(i.slice(0,c)),z=()=>{w(!0),y(i)};return f.createElement(n,(0,d.Z)({"data-testid":"text-list-container"},u,{variation:t}),m&&f.createElement(f.Fragment,null,f.createElement(o,{"data-testid":"text-list-title",as:s,variation:t},m),"inline"!==t&&f.createElement(p,{variation:t})),f.createElement(q,{"data-testid":"text-list-ul",variation:t},x.map((a,d)=>f.createElement(r,{variation:t,hide:!v&&d>=c,key:d,"data-testid":"text-list-text",hideListPoint:b},f.createElement(g.g0,{data:a,handleClickLink:j})))),!v&&x.length>=c&&f.createElement(f.Fragment,null,f.createElement(p,null),f.createElement(h.ck,{fontWeight:"medium",fontSize:1,color:"text.primary",fill:"text.primary",startIcon:"ChevronDownCircle",variant:"transparent",gap:1,centered:!0,onClick:z,"data-testid":"term-list-more"},l)))};s.defaultProps={hideListPoint:!1,limitListItems:20,list:[],handleClickLink:()=>{},showAllItems:!0,showMoreLabel:"veja mais",title:null,titleAs:"h1",typeList:"default"};var t=s},41323:function(a,b,c){c.d(b,{Z:function(){return o}});var d=c(7896),e=c(31461),f=c(2784),g=c(1587),h=c(99673),i=c(91489),j=c(34490),k=c(19527);let l=(0,h.ZP)(k.Z).attrs(()=>({alignItems:"center",justifyContent:"space-between",backgroundColor:"background.primaryDark",padding:1}))``,m=(0,h.ZP)(j._Qn).attrs(a=>({color:(0,i.uu)("lightest")(a)}))``,n=a=>{let{text:b,defaultText:c,zipcode:h,state:i,city:j,onClick:k}=a,n=(0,e.Z)(a,["text","defaultText","zipcode","state","city","onClick"]);return f.createElement(l,(0,d.Z)({onClick:k,"data-testid":"container"},n),f.createElement(g.Z,{city:j,defaultText:c,state:i,text:b,zipcode:h,iconHeight:18,iconWidth:20}),f.createElement(m,null))};n.defaultProps={zipcode:void 0,state:void 0,city:void 0};var o=n},25164:function(a,b,c){c.d(b,{dO:function(){return d.Z},G4:function(){return N},jm:function(){return J},aw:function(){return T},pZ:function(){return R},f4:function(){return aj},DH:function(){return ad},Il:function(){return ae.Z},zT:function(){return aH.Z},Qp:function(){return aE.Z},Ak:function(){return aD},Ym:function(){return at},fP:function(){return aF.Z},u0:function(){return aG.Z},YE:function(){return w.Z}}),c(5530),c(92877);var d=c(36103),e=c(31461),f=c(2784),g=c(34490),h=c(71180),i=c(68054),j=c(99673),k=c(91489),l=c(19527),m=c(8341),n=c(63825);let o=j.ZP.section`
  padding: 12px;
  border: solid 1px ${a=>(0,k.dF)("whisper")(a)};
  border-radius: 4px;
  ${i.Dh}
`,p=(0,j.ZP)(l.Z)`
  justify-content: space-between;
`,q=(0,j.ZP)(n.Z)`
  font-weight: ${a=>(0,k.R)("fontWeights.medium")(a)};
  cursor: pointer;
  text-decoration: underline;
`,r=(0,j.ZP)(n.Z)`
  font-size: ${a=>(0,k.R)("fontSizes.0")(a)}px;
  line-height: ${a=>(0,k.R)("lineHeights.input")(a)}em;
`,s=(0,j.ZP)(m.Z)`
  padding: 12px;
  border-bottom: 1px solid ${a=>(0,k.dF)("darker")(a)};
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-gap: 1em;
  margin-bottom: 20px;
`,t=(0,j.ZP)(n.Z)`
  font-size: ${a=>(0,k.R)("fontSizes.2")(a)}px;
`,u=`Cart\xe3o de cr\xe9dito`;var v=c(563),w=c(70615);let x=a=>{let{plan:b,payments:c,onClick:d,onClose:i,onPaymentMethodChange:j}=a,k=(0,e.Z)(a,["plan","payments","onClick","onClose","onPaymentMethodChange"]),[l,m]=(0,f.useState)(!1),n=()=>{m(!0),d(b)},x=()=>{m(!1),i()},{paymentMethodDescription:y,totalAmount:z,quantity:A,amount:B}=b;return f.createElement(o,k,f.createElement(p,null,f.createElement("div",null,f.createElement(q,{onClick:n,role:"button","aria-hidden":!0,"aria-label":"abrir m\xe9todos de pagamento"},u),f.createElement(r,null,y)),f.createElement("div",null,f.createElement(r,{textAlign:"right"},(0,h.oB)({value:z})),f.createElement(r,{fontWeight:"500"},A,"x ",(0,h.oB)({value:B})))),f.createElement(w.Z,{visible:l,direction:"right",onClickOutside:x,"data-testid":"sidebar-payments"},f.createElement(s,null,f.createElement(g.x8P,{color:"#bcbcbc",onClick:x,role:"button",title:"fechar m\xe9todos de pagamento"}),f.createElement(t,{fontWeight:"normal"},"Formas de pagamento")),f.createElement(v.Z,{payments:c,onChange:j})))};x.defaultProps={plan:{},payments:{},onClick:()=>({}),onClose:()=>({}),onPaymentMethodChange:()=>({})},c(28426),c(63486);var y=c(7896),z=c(1729),A=c(99554),B=c(84546);let C=(0,j.ZP)(B.Z)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${a=>(0,k.dF)("lighter")(a)};
  border-bottom: 1px solid ${a=>(0,k.dF)("darker")(a)};
  border-top: 1px solid ${a=>(0,k.dF)("darker")(a)};
  padding: 14px 16px;
`,D=j.ZP.div``,E=(0,j.ZP)(n.Z)``,F=(0,j.ZP)(n.Z)`
  margin: 4px 0;
  color: ${a=>(0,k.uu)("scratched")(a)};
`,G=j.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 20px 16px;
  border-bottom: 1px solid ${a=>(0,k.dF)("darker")(a)};
  margin-bottom: 0.5em;
`,H=j.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,I=a=>{let{onClick:b,label:c,position:d,filterSelected:h,fullScreen:i,showFilterInput:j,onChangeFilterInput:k,onClearInput:l,children:m}=a,n=(0,e.Z)(a,["onClick","label","position","filterSelected","fullScreen","showFilterInput","onChangeFilterInput","onClearInput","children"]),[o,p]=(0,f.useState)(!1),q=()=>{p(!0),b({label:c,position:d})};return f.createElement(f.Fragment,null,f.createElement(C,(0,y.Z)({},n,{onClick:q,"data-testid":"filter-item-container"}),f.createElement(D,null,f.createElement(E,{fontSize:1,"data-testid":"filter-item-container"},c),h&&f.createElement(F,{as:"string"!=typeof h?"div":"p",fontSize:0,"data-testid":"filter-item-selected"},h)),f.createElement(D,null,f.createElement(g.olP,{width:"12px",height:"12px"}))),f.createElement(D,null,f.createElement(w.Z,{direction:"right",visible:o,onClickOutside:()=>p(!1),fullScreen:i},f.createElement(D,null,f.createElement(G,null,f.createElement(D,null,f.createElement(g.xhZ,{color:"#8c8c8c","data-testid":"close-filter-detail",role:"button",title:"Fechar filtro",onClick:()=>p(!1)})),f.createElement(H,null,f.createElement(E,{fontSize:1,textAlign:"center",fontWeight:"500"},c))),f.createElement("div",null,j&&f.createElement(A.Z,{m:"20px",onChange:k,onClearInput:l,label:c})),m))))};I.defaultProps={filterSelected:"",onClick:()=>({}),fullScreen:!1};var J=I,K=c(41869);let L=(a="",b=[])=>b.filter(b=>{var c,d;return null==(c=b.label)?void 0:null==(d=c.toUpperCase())?void 0:d.includes(a.toUpperCase())}),M=a=>{let{fullScreen:b,label:c,position:d,filterSelected:g,items:h,showFilterInput:i,onItemClick:j}=a,k=(0,e.Z)(a,["fullScreen","label","position","filterSelected","items","showFilterInput","onItemClick"]),[l,m]=(0,f.useState)((0,K.Z)(h));(0,f.useEffect)(()=>(m((0,K.Z)(h)),()=>m([])),[h]);let n=()=>{m(h)},o=a=>{m((0,K.Z)(L(a.target.value,h)))};return f.createElement(J,(0,y.Z)({},k,{label:c,position:d,fullScreen:b,onChangeFilterInput:o,onClearInput:n,filterSelected:g,showFilterInput:i}),f.createElement("ul",null,l.map((a,b)=>f.createElement(z.Z,{item:a,key:(null==a?void 0:a.slug)||b,onClick:j}))))};M.defaultProps={label:"",filterSelected:"",items:[],showFilterInput:!1,onItemClick:()=>({})};var N=M,O=c(46275),P=c(82260);let Q=a=>{let{fullScreen:b,label:c,position:d,filterSelected:g,items:h,onItemClick:i}=a,j=(0,e.Z)(a,["fullScreen","label","position","filterSelected","items","showFilterInput","onItemClick"]),[k,l]=(0,f.useState)((0,P.Z)(h));return(0,f.useEffect)(()=>(l(h),()=>l({})),[h]),f.createElement(J,(0,y.Z)({position:d,label:c,fullScreen:b,filterSelected:g&&Object.keys(g).length?f.createElement(O.Cq,{min:0,max:5,score:null==g?void 0:g.value,label:null==g?void 0:g.hint,format:"label",fontSize:"14px",width:"20px",height:"20px"}):void 0},j),k.map((a,b)=>f.createElement("ul",{key:(null==a?void 0:a.slug)||b},f.createElement(O.L2,{onClick:i,item:a},f.createElement(O.Cq,{min:0,max:5,score:null==a?void 0:a.value,label:null==a?void 0:a.hint,format:"label",fontSize:"14px",width:"20px",height:"20px","data-testid":"review-item"})))))};Q.defaultProps={filterSelected:[],items:[],showFilterInput:!1,onItemClick:()=>{},onClick:()=>{}};var R=Q;let S=a=>{let{fullScreen:b,label:c,position:d,onApply:g,min:i,max:j,selectedMin:k,selectedMax:l,item:m}=a,n=(0,e.Z)(a,["fullScreen","label","position","onApply","min","max","selectedMin","selectedMax","item"]);return f.createElement(J,(0,y.Z)({id:"filter-item-price-container",position:d,label:c,fullScreen:b,filterSelected:k||l?`${(0,h.oB)({value:k})} - ${(0,h.oB)({value:l})}`:void 0},n),f.createElement(O.MS,{min:i,max:j,initialMin:k,initialMax:l,onApply:g,item:m}))};S.defaultProps={onApply:()=>{},onClick:()=>{},item:{}};var T=S;c(66608),c(75057);var U=c(82753),V=c(10200);let W=j.ZP.nav.attrs(a=>Object.assign({bg:"background.primary"},a))`
  text-align: left;

  ${k.$_}
`,X=j.ZP.ul.attrs(a=>Object.assign({my:0,pl:0},a))`
  display: flex;
  align-items: center;
  line-height: 45px;
  list-style: none;
  white-space: nowrap;
  justify-content: space-between;

  ${i.Dh}
`,Y=(0,j.ZP)(V.Z).attrs(a=>Object.assign({color:"text.white",px:"10px",underlineOnHover:!1},a))`
  ${k.$_}
`,Z=j.ZP.div`
  position: absolute;
  background-color: ${a=>(0,k.dF)("white")(a)};
  z-index: ${a=>(0,k.R)("zIndices.4")(a)};
  ${a=>`display: ${a.show?"block":"none"}`};
  ${i.FK}
  ${k.$_}
  ${i.Dh}
`,$=j.ZP.li`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  z-index: ${a=>a.selected&&(0,k.R)("zIndices.1")(a)};
  background-color: ${a=>a.selected&&(0,k.dF)("white")(a)};

  &:hover {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    & path {
      fill: ${a=>a.colorOnHover?a.colorOnHover:(0,k.uu)("base")(a)};
    }
  }
  &:hover > div > a {
    color: ${a=>a.colorOnHover?a.colorOnHover:(0,k.uu)("base")(a)};
  }
`,_=j.ZP.div`
  background: rgba(0, 0, 0, 0.6);
  animation: ${U.Ji} 0.2s linear;

  position: fixed;
  z-index: ${a=>(0,k.R)("zIndices.0")(a)};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  ${a=>a.show?j.iv`
          display: block;
        `:j.iv`
          display: none;
        `};
`;var aa=c(48919);let ab=a=>{let{banner:b,subcategoriesList:c}=a||{},{component:d}=b||{},{props:e}=d||{},{static:f}=e||{},g=Boolean(null==f?void 0:f.path),h=Boolean(null==f?void 0:f.slot),i=Array.isArray(c)&&c.length>0;return g||h||i},ac=({data:a,enableHoverDelay:b,onMenuItemClick:c})=>{let{categoryList:d,specialLinks:e,externalLinks:h,allCategories:i}=a,{orderBy:j=[],list:k=[],show:m}=d,n=(0,U.IC)(k,j),o=n.slice(0,m||j.length),p=(0,f.useRef)(null),q={},r={},[s,t]=(0,f.useState)(0),[u,v]=(0,f.useState)(null),[w,x]=(0,f.useState)(null);(0,U.O)(q,p,"inline-block");let y=a=>{let b=r[a].current;if(b.style.display="block",b){let c=b.clientWidth,d=q[a].current.offsetLeft,e=p.current.offsetWidth+p.current.offsetLeft,f=d+c-e;t(f>=0?-f:0)}b.style.display=null},z=(a,c,d)=>{let e=ab(c);if(e){if("open"===a&&b){let f=setTimeout(()=>{y(d),v(d)},300);x(f)}else"close"===a?(v(null),clearTimeout(w)):v(d)}},A=(a={},b)=>f.createElement(Z,{marginLeft:s,show:u===b,"data-testid":"nav-submenu",ref:r[b]},f.createElement(aa.Z,{data:a,onMenuItemClick:c})),B=({menuType:a,index:b,menu:c,icon:d,chevronDown:e=!1})=>{let{color:h,label:i,url:j}=c,k=`${a}-item-${b}`;q[k]=(0,f.useRef)(null),r[k]=(0,f.useRef)(null);let m=ab(c);return f.createElement($,{selected:m&&u===k,"data-testid":"link-menu-item",key:k,colorOnHover:m?"":h,onMouseEnter:a=>{a.stopPropagation(),z("open",c,k)},onMouseLeave:()=>z("close",c,k),ref:q[k]},f.createElement(l.Z,{mx:"2px",justifyContent:"center",alignItems:"center"},d&&f.createElement(g.JO$,{name:d,"data-testid":`link-icon-${b}`,color:"text.lightest"}),f.createElement(Y,{href:j},i),e&&f.createElement(g.JO$,{name:"ChevronDown",color:"text.lightest"})),A(c,k))};return f.createElement(W,{"data-testid":"links-menu",ref:p},f.createElement(X,null,B({menuType:"main",index:0,icon:"Burger",menu:i,chevronDown:!0}),e.map((a,b)=>B({menuType:"special",index:b,menu:a})),o.map((a,b)=>B({menuType:"category",index:b,menu:a})),h.map((a,b)=>B({menuType:"external",index:b,menu:a,icon:a.id}))),f.createElement(_,{"data-testid":"menu-overlay",show:!!u}))};ac.defaultProps={data:{categoryList:{},specialLinks:[],externalLinks:[],allCategories:{}},enableHoverDelay:!0};var ad=ac;c(99075),c(60857),c(56337);var ae=c(45178);c(4720),c(98284);let af={height:"auto",fontSize:0,flexWrap:"no-wrap",mt:0,overflow:"auto",px:"9px",pb:"5px"},ag={height:"16px",fontSize:1,flexWrap:"wrap",mt:1,overflow:"hidden"},ah=(0,j.ZP)(l.Z).attrs(a=>Object.assign({bg:"background.primary"},a.isMobile?Object.assign({},af):Object.assign({},ag),a))`
  white-space: pre;
  line-height: ${a=>(0,k.R)("lineHeights.plus")(a)}px;

  a {
    font-size: inherit;
  }
`,ai=a=>{let{data:b,onClick:c,isMobile:d,isRendered:g}=a,h=(0,e.Z)(a,["data","onClick","isMobile","isRendered"]),{links:i,title:j}=b;return(null==i?void 0:i.length)>=1&&j?f.createElement(ah,(0,y.Z)({display:g?"flex":"none","data-testid":"header-links-list",isMobile:d},h,{color:"text.lightest"}),f.createElement(n.Z,{color:"text.lightest"},`${j}: `),null==i?void 0:i.map((a,b)=>{let d=0!==b&&f.createElement("span",null," | ");return f.createElement(f.Fragment,null,d,f.createElement(V.Z,{"data-testid":"header-link",key:a.value,href:a.href,onClick:b=>c(b,a),hover:!1,color:"text.lightest"},(0,U.kC)(a.value)))})):null};ai.defaultProps={data:{links:[],title:""},onClick:()=>{},isMobile:!1,isRendered:!0};var aj=ai,ak=c(41544),al=c(87043);let am=j.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > ul {
    width: 100%;
    margin-top: 20px;
  }

  ${(0,k.aK)("large")} {
    flex-direction: row;
    width: 100%;

    > ul {
      width: ${({showScoreDesc:a})=>a?"50%":"100%"};
    }
  }
`,an=j.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(0,k.aK)("large")} {
    flex-direction: column-reverse;
    flex: 1;
  }
`,ao=j.ZP.div`
  margin-left: 8px;

  > div {
    margin-left: -4px;
  }
`,ap=j.ZP.li`
  display: grid;
  grid-template-columns: 2fr 2fr auto;
  align-items: center;
  grid-gap: 8px;

  & > p:first-child {
    font-size: ${(0,k.R)("fontSizes.1")}px;
    line-height: ${(0,k.R)("lineHeights.display")};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > p:last-child {
    font-weight: ${a=>(0,k.R)("fontWeights.bold")(a)};
  }

  ${(0,k.aK)("large")} {
    grid-template-columns: 1fr 2fr auto;
  }
`,aq=(0,j.ZP)(n.Z)`
  font-weight: ${a=>(0,k.R)("fontWeights.medium")(a)};
  font-size: ${a=>(0,k.R)("fontSizes.7")(a)}px;

  & > span {
    display: none;
  }

  ${(0,k.aK)("large")} {
    line-height: ${a=>(0,k.R)("lineHeights.fontSize")(a)};

    & > span {
      display: inline-block;
    }
  }
`,ar=(0,j.ZP)(n.Z)`
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,k.uu)("light")(a)};

  ${(0,k.aK)("large")} {
    margin-top: ${a=>(0,k.R)("space.3")(a)}px;
  }
`;function as({average:a,count:b,characteristics:c,showScoreDesc:d}){let e=b>1?`${b} avalia\xe7\xf5es`:`${b} avalia\xe7\xe3o`;return f.createElement(am,{showScoreDesc:d},d&&f.createElement(an,null,f.createElement(aq,{"data-testid":"stat-score"},f.createElement("span",null,"Nota:"),` ${a.toFixed(1)}`),f.createElement(ao,null,f.createElement(O.Cq,{score:a,width:"20px",height:"20px"}),f.createElement(ar,{"data-testid":"stat-desc"},e))),f.createElement("ul",null,null==c?void 0:c.map(a=>f.createElement(ap,{key:a.label},f.createElement(n.Z,null,a.label),f.createElement(al.uk,{height:"8px",color:"#0086ff",value:a.value,max:5}),f.createElement(n.Z,null,a.value.toFixed(1))))))}as.defaultProps={average:0,count:0,characteristics:[],showScoreDesc:!0};var at=as;let au=j.ZP.div`
  ${(0,k.aK)("large")} {
    display: flex;
  }
`,av=(0,j.ZP)(n.Z)`
  margin-top: 4px;
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,k.R)(a.bold?"fontWeights.medium":"fontWeights.regular")(a)};
  color: ${a=>(0,k.uu)("base")(a)};

  > span {
    color: ${a=>(0,k.uu)("lighter")(a)};
  }
`,aw=(0,j.ZP)(n.Z)`
  margin-top: 12px;
  font-size: ${a=>(0,k.R)("fontSizes.5")(a)}px;
  font-weight: ${a=>(0,k.R)("fontWeights.medium")(a)};
  color: ${a=>(0,k.uu)("base")(a)};
  line-height: ${a=>(0,k.R)("lineHeights.display")(a)};
`,ax=(0,j.ZP)(n.Z)`
  margin: 12px 0;
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,k.uu)("scratched")(a)};
  line-height: ${a=>(0,k.R)("lineHeights.plus")(a)}px;
  text-align: justify;
`,ay=(0,j.ZP)(B.Z)`
  border-bottom: 3px solid ${a=>(0,k.kJ)("light")(a)};
  margin: 16px 0px;
  width: 100%;
`,az=(0,j.ZP)(n.Z)`
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,k.R)("fontWeights.medium")(a)};

  color: ${a=>a.reviewOK?(0,k.R)("baseColors.lima.base")(a):(0,k.R)("baseColors.vermillion.base")(a)};
`,aA=(0,j.ZP)(B.Z)`
  ${(0,k.aK)("large")} {
    width: 50%;
    flex: 1;
    margin-right: 32px;
  }
`,aB=(0,j.ZP)(B.Z)`
  ${(0,k.aK)("large")} {
    align-self: center;
    width: 50%;
  }
`;function aC({title:a,text:b,rating:c,recommended:d,user:e,date:g,characteristics:h,showScoreDesc:i}){let j=g&&(0,ak.Z)(new Date(g),new Date);return f.createElement(f.Fragment,null,f.createElement(au,{"data-testid":"review-card"},f.createElement(aA,null,f.createElement(O.Cq,{score:c,width:"20px",height:"20px"}),f.createElement(av,null,(null==e?void 0:e.name)||"An\xf4nimo"," - ",f.createElement("span",null,"H\xe1 ",j)),f.createElement(aw,{bold:!0},a),f.createElement(ax,null,b),f.createElement(az,{reviewOK:d},d?"Sim, eu recomendo esse produto":"N\xe3o, eu n\xe3o recomendo esse produto")),f.createElement(aB,null,f.createElement(at,{characteristics:h,showScoreDesc:i}))),f.createElement(ay,null))}aC.defaultProps={user:{name:"An\xf4nimo"},showScoreDesc:!1};var aD=aC;c(4506);var aE=c(77576),aF=c(30143),aG=c(2334);c(75335),c(35306),c(41323),c(90713),c(37215);var aH=c(99970);c(3018)}}])
//# sourceMappingURL=6515-ba0e8668bdef01a9.js.map