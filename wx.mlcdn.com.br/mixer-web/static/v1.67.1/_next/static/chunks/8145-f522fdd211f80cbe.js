"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8145],{99551:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(92336),r=a(44194),i=a(32171),o=a(5205),l=a(63287);let u=e=>{var{id:t,label:a,icon:u,checked:s,disable:d,checkedIcon:c,disableRipple:f,onChange:m=()=>{},className:g}=e,p=(0,n.__rest)(e,["id","label","icon","checked","disable","checkedIcon","disableRipple","onChange","className"]);let b=t||(0,o.Z)(a),v=u&&c?l.b.custom:l.b.default,_=v===l.b.custom,h={[l.b.custom]:r.createElement(r.Fragment,null,u,c),[l.b.default]:r.createElement("i",{className:"mark","data-testid":"checkbox-icon"})};return r.createElement("div",Object.assign({className:(0,i.V)("checkbox-group","cursor-pointer",g)},p),r.createElement("input",{id:b,type:"checkbox",className:(0,i.V)("checkbox !z-10",_&&"transparent"),onChange:m,checked:s,disabled:d,"data-testid":"checkbox-input"}),!f&&r.createElement("span",{className:"ripple","data-testid":"checkbox-ripple"}),h[v],a&&r.createElement("label",{htmlFor:b,className:_?"padding-[0px] absolute z-0 m-[-1px] h-[1px] w-[1px] overflow-hidden border-none":"title","data-testid":"checkbox-title"},a))}},63287:function(e,t,a){var n,r;a.d(t,{b:function(){return n}}),(r=n||(n={})).custom="CUSTOM",r.default="DEFAULT"},49722:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(92336),r=a(44194),i=a(32171),o=a(99551);let l=(0,a(57291).j)("font-2xlg-bold text-on-surface-3",{variants:{background:{lowest:"bg-surface-container-lowest",lower:"bg-surface-container-lower"},variation:{default:null,square:"w-full h-full rounded-md",circle:"w-full h-full rounded-2xlg"},size:{default:"w-fit p-2xsm",square:"w-fit p-xsm",circle:"w-fit p-sm"},opacity:{default:null,transparency:"opacity-60"}},defaultVariants:{variation:"default",opacity:"default",size:"default"}});function u(e){var{background:t="lower",variation:a,opacity:u,id:s,className:d,checked:c,disableRipple:f,onChange:m}=e,g=(0,n.__rest)(e,["background","variation","opacity","id","className","checked","disableRipple","onChange"]);return r.createElement("div",Object.assign({className:(0,i.V)(l({size:a}),"relative flex items-center justify-center",d),"data-testid":"favorite-button-container"},g),r.createElement("div",{className:(0,i.V)(l({variation:a,opacity:u,background:t}),"absolute"),"data-testid":"favorite-button-background"}),r.createElement(o.Z,{id:s,checked:c,onChange:m,disableRipple:"square"===a||f,label:c?"Remover favorito":"Favoritar",icon:r.createElement("i",{className:"unchecked icon-favorite-border icon font-xlg-regular"}),checkedIcon:r.createElement("i",{className:"icon-favorite icon checked text-on-interaction-default-inverted font-xlg-regular"}),"data-testid":"favorite-button"}))}},56646:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(92336),r=a(44194),i=a(32171);let o={fraction:.5,exact:1},l=(e,t=o.fraction)=>Math.round(e/t)*t,u=({precisionRate:e,roundedScore:t,stars:a,readOnly:n})=>{var r;let l=Array.from({length:a},(e,t)=>t+1);return(e===o.fraction?(r=n?a=>{let n=a-e;if(n===t)return n}:t=>t-e,l.reduce((e,t)=>[...e,r&&r(t),t].filter(Boolean),[])):l).map(e=>({className:(0,i.V)("rating-item",Number(e)===e&&e%1!=0?"rating-half":"rating-full"),isChecked:t===e,current:e})).reverse()},s=(0,a(57291).j)("rating",{variants:{size:{large:"rating-lg",medium:"rating-md",small:"rating-sm"}},defaultVariants:{size:"medium"}}),d=({label:e})=>e?r.isValidElement(e)?e:r.createElement("span",{"data-testid":"rating-label",className:"pl-2xsm text-on-surface-3 font-2xsm-regular"},e):null,c=e=>{var{size:t,label:a,stars:c=5,score:f=0,precision:m="exact",readOnly:g=!1,className:p,onChange:b}=e,v=(0,n.__rest)(e,["size","label","stars","score","precision","readOnly","className","onChange"]);let _=(0,r.useId)(),h=o[m]||o.exact,y=l(f,h),P=u({precisionRate:h,roundedScore:y,stars:c,readOnly:g});if(!g){let e=e=>{let t=Number(e.target.value);b&&b(e,t)};return r.createElement("div",Object.assign({className:(0,i.V)("flex items-center",p)},v),r.createElement("form",{className:(0,i.V)(s({size:t})),"data-testid":"rating-form"},null==P?void 0:P.map(({className:t,current:a},n)=>{let o=`radio-${_}-${n}`;return r.createElement(r.Fragment,{key:"rating-".concat(a.toString())},r.createElement("input",{type:"radio",id:o,name:"rating",value:a,checked:y===a,onChange:e,"data-testid":"rating-input-".concat(a.toString())}),r.createElement("label",{htmlFor:o,title:`Adicionar ${a} estrelas`,className:(0,i.V)("cursor-pointer",t),"data-testid":"rating-label-".concat(a.toString())}))})),r.createElement(d,{label:a}))}return r.createElement("div",Object.assign({className:(0,i.V)("flex items-center",p)},v),r.createElement("ol",{className:(0,i.V)("no-hover",s({size:t})),"data-testid":"rating-list"},null==P?void 0:P.map(({isChecked:e,className:t,current:a})=>r.createElement("li",{key:"rating-".concat(a.toString()),className:(0,i.V)(t,e&&"checked"),"data-testid":"rating-li-".concat(a.toString()),"aria-label":`${a} estrelas`}))),r.createElement(d,{label:a}))}},50464:function(e,t,a){a.d(t,{Z:function(){return M}});var n=a(44194),r=a(32171),i=a(99498),o=a(92336),l=a(82690),u=a(49722),s=a(43843),d=a(83473),c=a(64345),f=a(56646),m=a(71639);a(50853),a(5205),a(41074),a(32506),a(73427);let g={small:"!w-[150px]",default:"!w-[170px]",fit:"!w-fit",full:"!w-[100%]"},p=({className:e,size:t,isHorizontal:a})=>(0,r.V)(g[t]||g.default,e,"px-xsm py-sm",a?"rounded-lg":"rounded-md"),b=({isHorizontal:e})=>(0,r.V)(e&&"hidden"),v=({addSpacingOnTop:e,isHorizontal:t})=>(0,r.V)("relative",t?"h-[auto] rounded-lg basis-1/3":"h-[137px]",e&&"mt-xsm"),_=({isHorizontal:e})=>(0,r.V)(e&&"px-xsm basis-2/3",!e&&"pt-xsm"),h={default:e=>{var{as:t="div",orientation:a="vertical",size:g="default",badge:h={},offer:y={},media:P={},price:O={},ads:j={},rating:F,tags:M=[],title:x,discount:I={},isOnWishlist:N=!1,className:k,onClickFavorite:S}=e,C=(0,o.__rest)(e,["as","orientation","size","badge","offer","media","price","ads","rating","tags","title","discount","isOnWishlist","className","onClickFavorite"]);let[E,w]=(0,n.useState)(N),D="small"===g,V="horizontal"===a,Z=!(0,i.Z)(P),z=!(0,i.Z)(F),R=!(0,i.Z)(y),$=!(0,i.Z)(x),B=!(0,i.Z)(O),T=!(0,i.Z)(I),W=!(0,i.Z)(h),A=!(0,i.Z)(M),q=!(0,i.Z)(j),L=(0,o.__rest)(C,["customProps"]);return n.createElement(l.Z,Object.assign({as:t,variation:a,elevation:!1,className:p({isHorizontal:V,className:k,size:"horizontal"===a?"fit":g}),"data-testid":"product-card-container"},C.customProps,L),R&&n.createElement(l.Z.Header,{className:b({isHorizontal:V}),"data-testid":"product-card-header"},n.createElement(m.Z,Object.assign({endIcon:n.createElement("i",{className:"icon-check-magalu-indica icon font-xsm-regular"}),className:"font-2xsm-bold"},y))),Z&&n.createElement("div",{className:v({addSpacingOnTop:R&&!V,isHorizontal:V})},n.createElement("label",{className:"absolute right-[0] top-[0]","aria-label":"bot\xe3o de favorito"},n.createElement(u.Z,{className:"text-on-surface-5",background:"lowest",variation:"square",opacity:"transparency",disableRipple:!0,checked:E,onChange:e=>{w(t=>(S&&S(e,!t),!t))},onClick:e=>e.stopPropagation(),"data-testid":"product-card-favorite-button"})),n.createElement(l.Z.Media,Object.assign({draggable:!1,"data-testid":"product-card-media",width:"144",height:"137"},P,{className:(0,r.V)("h-[100%] w-[100%] rounded-md !object-contain",null==P?void 0:P.className)})),W&&n.createElement(d.Z,Object.assign({className:"absolute bottom-[0]",width:"60",height:"44","data-testid":"product-card-badge"},h))),n.createElement(l.Z.Content,{className:_({isHorizontal:V})},q&&(null==j?void 0:j.sponsored)&&n.createElement("p",{className:"mb-2xsm text-on-surface-4 font-2xsm-regular","data-testid":"product-card-sponsored"},"Patrocinado"),z&&n.createElement(f.Z,Object.assign({},F,{readOnly:!0,precision:"fraction",size:"small","data-testid":"product-card-rating",className:"gap-2xsm"})),$&&n.createElement(s.Z,Object.assign({as:"h3",className:"mb-xsm line-clamp-3 overflow-hidden break-words text-on-surface-3 !font-xsm-regular","data-testid":"product-card-title"},x)),T&&n.createElement(m.Z,Object.assign({size:"medium",className:"mb-2xsm bg-green-100 font-2xsm-bold","data-testid":"product-card-discount"},I)),B&&n.createElement(c.Z,Object.assign({},O,{"data-testid":"product-card-price"}),n.createElement(c.Z.Final,{className:(0,r.V)("mb-2xsm text-on-surface-2",D?"font-xsm-bold":"font-md-bold"),"data-testid":"product-card-price-final"}),n.createElement(c.Z.MethodDescription,{className:(0,r.V)("mb-2xsm text-on-surface-3",D?"!mt-3xsm !font-3xsm-regular":"!mt-2xsm !font-2xsm-regular"),"data-testid":"product-card-price-method"}),n.createElement(c.Z.Installment,{className:"text-on-surface-3 !font-2xsm-regular","data-testid":"product-card-price-installment"})),A&&n.createElement("ol",{className:"[&>*:first-child]:mt-xsm","data-testid":"product-card-tags"},null==M?void 0:M.map((e,t)=>{var{children:a,className:i}=e,l=(0,o.__rest)(e,["children","className"]);return n.createElement("li",{key:"product-tag-".concat(t.toString())},n.createElement(m.Z,Object.assign({size:"small",className:(0,r.V)("items-center text-brand-default font-2xsm-regular",i)},l),a))}))))}},y=e=>{var{display:t="default"}=e,a=(0,o.__rest)(e,["display"]);let r=h[t]||h.default;return n.createElement(r,Object.assign({},a))};var P=a(79020);let O=(e,t)=>{var{offer:a,rating:n,discount:r}=e,i=(0,o.__rest)(e,["offer","rating","discount"]);let l={};return l.key="showcase-product-card-".concat(t.toString()),(null==a?void 0:a.children)&&(l.offer={children:null==a?void 0:a.children,color:null==a?void 0:a.color,size:"medium"}),(null==n?void 0:n.label)&&(l.rating={label:null==n?void 0:n.label,score:null==n?void 0:n.score,color:"primary"}),(null==r?void 0:r.children)&&(l.discount={children:null==r?void 0:r.children,variant:"lighter",color:"success"}),Object.assign(Object.assign({},l),i)};var j={carousel:({items:e,onItemClick:t,onItemFavoriteClick:a,onItemView:i,className:l})=>n.createElement("div",{className:(0,r.V)("relative flex w-full snap-x snap-mandatory scroll-pl-md gap-xsm overflow-x-auto hidden-scrollbar",l)},null==e?void 0:e.map((e,r)=>{var{"data-product":l}=e,u=(0,o.__rest)(e,["data-product"]);return n.createElement(P.Z,{key:"showcase-carousel-item-".concat((null==l?void 0:l.id)||r.toString()),triggerOnce:!0,threshold:.5,onChange:({isVisible:e})=>{e&&i&&i(Object.assign(Object.assign({},l),{position:r+1}))}},n.createElement(y,Object.assign({as:"a",size:"small",display:"default",draggable:!1,className:"h-full shrink-0 snap-start",onClick:e=>{var a;return a=Object.assign(Object.assign({},l),{position:r+1}),void(t&&t(e,a))},onClickFavorite:(e,t)=>{var n;n=Object.assign(Object.assign({},l),{position:r+1}),a&&a(e,t,n)}},O(u,r),u.customProps||{})))})),list:({items:e,onItemClick:t,onItemView:a,onItemFavoriteClick:i,className:l})=>n.createElement("div",{className:(0,r.V)("grid grid-cols-2 gap-xsm",l),"data-testid":"showcase-list"},null==e?void 0:e.map((e,r)=>{var{"data-product":l}=e,u=(0,o.__rest)(e,["data-product"]);return n.createElement(P.Z,{key:"showcase-list-item-".concat((null==l?void 0:l.id)||r.toString()),triggerOnce:!0,threshold:.5,onChange:({isVisible:e})=>{e&&a&&a(Object.assign(Object.assign({},l),{position:r+1}))}},n.createElement(y,Object.assign({as:"a",size:"full",display:"default",className:"h-full",onClick:e=>{var a;return a=Object.assign(Object.assign({},l),{position:r+1}),void(t&&t(e,a))},onClickFavorite:(e,t)=>{var a;a=Object.assign(Object.assign({},l),{position:r+1}),i&&i(e,t,a)}},O(u,r),u.customProps||{})))})),betteroffer:({items:e,onItemClick:t,onItemView:a,className:r})=>{var i,o;if(!(null==e?void 0:e[0]))return null;let l=e[0],u=0===(null===(o=null===(i=l["data-product"])||void 0===i?void 0:i.shippingTag)||void 0===o?void 0:o.cost)?[{children:"Frete Gr\xe1tis",variant:"inverted"}]:[],{media:s,price:d,title:c}=l;return n.useEffect(()=>{a&&a(Object.assign(Object.assign({},l["data-product"]),{position:1}))},[]),n.createElement(y,{"data-testid":"showcase-betteroffer",as:"a",tags:u,orientation:"horizontal",className:r,media:Object.assign(Object.assign({},s),{width:"120",height:"120",className:"max-h-[120px]"}),title:c,price:d,onClick:e=>{var a;return a=Object.assign(Object.assign({},l["data-product"]),{position:1}),void(t&&t(e,a))}})}},F=a(3146);let M=({type:e,title:t,items:a,action:o,className:l,sponsored:u=!1,childrenSettings:d={},onItemClick:c,onItemView:f,onItemFavoriteClick:m})=>{if((0,i.Z)(a))return null;let g=j[e]||j.list,{title:p,showcase:b}=d;return n.createElement("div",{className:l,"data-testid":"showcase"},n.createElement("div",{className:(0,r.V)("pb-sm pt-md",null==p?void 0:p.className)},t&&n.createElement(s.Z,{as:"h2",className:"text-on-surface-2 font-md-bold","data-testid":"showcase-title"},t),u&&n.createElement("p",{"data-testid":"sponsored-tag",className:"pt-xsm text-on-surface-4 font-2xsm-regular"},"Patrocinados")),n.createElement(g,{title:t,items:a,className:null==b?void 0:b.className,onItemClick:c,onItemView:f,onItemFavoriteClick:m}),!(0,i.Z)(o)&&n.createElement(F.Z,Object.assign({variant:"inverted",endIcon:"chevron-right",className:"mx-auto mt-xlg flex","data-testid":"showcase-action"},o),(null==o?void 0:o.children)||"Ver Mais"))}},57244:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(44194),r=a(99498),i=a(54154),o=a(12835);let l=(e={})=>Object.entries(e).reduce((e,[t,a])=>{let n="__typename"===t?0:a;return"cost"===t&&(n=0===a?"Frete Gr\xe1tis":0),n?[...e,{children:n,variant:"inverted"}]:e},[]),u=(e,t)=>(0,r.Z)(e)?[]:null==e?void 0:e.map(e=>{var a,r,u,s;let{id:d,title:c,image:f,price:m,installment:g,rating:p,shippingTag:b,path:v,ads:_,offerTags:h=[],badges:y=[],trackId:P="",campaignId:O=""}=e,j=(null==_?void 0:_.id)||void 0,F=null==y?void 0:y.slice(-1)[0];return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({"data-product":e,customProps:{"ads-click-event":j,"ads-view-event":j,"ads-impression-event":j,"data-brand":null===(u=e.brand)||void 0===u?void 0:u.label,redirect:e.url},ads:{sponsored:null==_?void 0:_.sponsored},title:{children:c},href:(0,o.Z)(v),media:{src:f},price:{price:null==m?void 0:m.bestPrice,installment:{amount:null==g?void 0:g.amount,paymentMethodDescription:null==g?void 0:g.paymentMethodDescription,quantity:null==g?void 0:g.quantity,totalAmount:null==g?void 0:g.totalAmount}}},(null==p?void 0:p.score)&&{rating:{label:null==p?void 0:p.count,score:null==p?void 0:p.score,color:"primary"}}),!!(r=null==m?void 0:m.discount)&&!!parseInt(r)&&{discount:{children:null===(s=parseInt(null==m?void 0:m.discount))||void 0===s?void 0:s.toString().concat("% OFF")}}),(null==h?void 0:h.includes("magalu_indica"))&&{offer:{children:"Magalu indica"}}),!!(null==F?void 0:F.imageUrl)&&{badge:{src:null==F?void 0:F.imageUrl,alt:null==F?void 0:F.text}}),{tags:[...(a=null==m?void 0:m.currency,(0,i.Z)(a)?[{children:"Compra Internacional",variant:"lighter",color:"primary",size:"small",className:"font-3xsm-medium gap-3xsm",startIcon:(0,n.createElement)("i",{className:"icon icon-compra-internacional"})}]:[]),...l(b)],isOnWishlist:!(!d||!t)&&t(d),id:d,trackId:P,campaignId:O})})},97829:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment meta on MetaCategory {
    canonical
    breadcrumbAlias
    description
    seoBlock
  }
`);t.default=r},11197:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=(0,r.default)`
  fragment linkList on ComponentPresentationLinkList {
    href
    value
    alt
  }
`;t.default=i},70966:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=(0,r.default)`
  fragment posts on PostItem {
    id
    title
    subtitle
    slug
    publishedAt
    updatedAt
    categoryId
    categorySlug
    categoryTitle
    image {
      alt
      urls {
        default
        thumbnail
        small
        medium
        large
      }
    }
  }
`;t.default=i},95266:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=n(a(70966)),o=(0,r.default)`
  fragment recommendations on BlogRecommendation {
    id
    title
    variation
    categoryId
    postIds
    link
    quantity
    blogCategoryId
    parentCategoryId
    theme {
      background
      card
    }
    posts {
      ...posts
    }
  }
  ${i.default}
`;t.default=o},54352:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=(0,r.default)`
  fragment seo on ComponentBlogSeo {
    title
    description
  }
`;t.default=i},73478:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment category on Category {
    id
    label
    title
    description
    meta {
      description
      seoBlock
      canonical
      titleAlias
    }
  }
`);t.default=r},67987:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=(0,r.default)`
  fragment pagination on Pagination {
    page
    pages
    records
    size
    start
  }
`;t.default=i},74675:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
 fragment ads on Ads {
    sponsored
    id
    label
  }
`);t.default=r},90314:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
 fragment attributes on Attribute {
    type
    label
    value
    current
    values
  }
`);t.default=r},57218:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment brand on Brand {
    label
    slug
  }
`);t.default=r},14553:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment category on ProductCategory {
    id
    name
  }
`);t.default=r},2031:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment geoLocTags on Tag {
    title
    icon
  }
`);t.default=r},45531:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=n(a(54680)),o=(0,r.default)`
  fragment productImportTaxes on ProductTax {
    freight {
      ...productImportTaxesValue
    }
    product {
      ...productImportTaxesValue
    }
    total {
      ...productImportTaxesValue
    }
  }
  ${i.default}
`;t.default=o},54680:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=(0,r.default)`
  fragment productImportTaxesValue on ImportTaxProduct {
    icmsValue
    importTaxValue
    iofValue
  }
`;t.default=i},55741:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment installment on Installment {
    paymentMethodId
    paymentMethodDescription
    quantity
    amount
    totalAmount
  }
`);t.default=r},28527:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment loyalty on Loyalty {
    value
    type
    attributes {
      color
      icon
    }
    label
    description
  }
`);t.default=r},82059:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment price on Price {
    paymentMethodDescription
    price
    fullPrice
    bestPrice
    discount
    currency
    exchangeRate
    idExchangeRate
    originalPriceForeign
  }
`);t.default=r},58602:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment rating on Rating {
    count
    score
  }
`);t.default=r},27399:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment general on RatingInformation {
    rating
    reviewCount
    commentCount
  }
`);t.default=r},90305:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment reviewsByRating on ReviewsByRating {
    rating
    total
  }
`);t.default=r},47361:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=a(68468),o=(0,r.default)`
  fragment product on Product {
    id
    variationId
    title
    description
    image
    available
    url
    path
    reference
    offerTags
    price {
      paymentMethodDescription
      price
      fullPrice
      bestPrice
      discount
      currency
    }
    installment {
      paymentMethodDescription
      quantity
      amount
      totalAmount
    }
    rating {
      count
      score
    }
    badges {
      text
      imageUrl
      container
      position
      tooltip
    }
    seller {
      ...seller
    }
    brand {
      ...brand
    }
    category {
      ...category
    }
    subcategory {
      ...subcategory
    }
    attributes {
      ...attributes
    }
  }
  ${i.ProductWithSellerFragment}
  ${i.ProductBrandFragment}
  ${i.ProductCategoryFragment}
  ${i.ProductSubCategoryFragment}
  ${i.ProductAttributesFragment}
`;t.default=o},24498:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment shippingCost on BasicShippingCost {
    cost
    costDescription
  }
`);t.default=r},42046:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment subcategory on ProductCategory {
    id
    name
  }
`);t.default=r},89522:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment badges on Badge {
    text
    imageUrl
    container
    position
    tooltip
  }
`);t.default=r},26537:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment bundles on Bundle {
    id
    image
    price
    quantity
    reference
    title
    dimensions {
      ...dimensions
    }
    factsheet {
      ...factsheet
    }
  }
`);t.default=r},17842:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment dimensions on Dimension {
    height
    length
    weight
    width
  }`);t.default=r},23235:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment factsheet on FactSheet {
    displayName
    slug
    elements {
      keyName
      elements {
        keyName
        isHtml
        value
      }
    }
  }
`);t.default=r},83538:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment financialServices on FinancialService {
    id
    description
    offers {
      campaignId
      description
      id
      price
      treeId
      wageCompensation {
        amount
        percentage
      }
    }
  }
`);t.default=r},39296:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment media on Media {
    audios
    images
    podcasts
    videos
  }
`);t.default=r},44456:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment offers on Offer {
    sku
    price {
      paymentMethodDescription
      bestPrice
      fullPrice
      price
      currency
      discount
    }
    seller {
      ...seller
    }
  }
`);t.default=r},87048:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
    fragment paymentMethods on PaymentMethods {
        id
        installmentPlans {
            installment
            installmentAmount
            interest
            interestAmount
            totalAmount
            discount
        }
    }
`);t.default=r},40500:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment seller on Seller {
    id
    sku
    description
    category
    deliveryId
    deliveryDescription
    restrictions
    details {
      id
      legalName
      documentNumber
      shippingDocumentNumber
      score
      sellerSince
      totalSales
      deliveryRate {
        message
        status
      }
      answerRate {
        message
        status
      }
      address {
        address
        number
        complement
        district
        city
        state
        country
        zipcode
      }
    }
    tags {
      message
      type
      version
      action {
        type
        url
      }
    }
  }
`);t.default=r},41034:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment variations on Variation {
    id
    label
    type
    value
    image
    available
    path
  }
`);t.default=r},69650:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment items on Question {
    id
    question
    questionCreatedAt
    answer
    answerCreatedAt
  }
`);t.default=r},34109:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment pagination on QuestionPagination {
    page
    totalPages
  }
`);t.default=r},43148:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment sellerInfo on SellerInfoResponse {
    enabled
  }
`);t.default=r},21357:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
 fragment filters on FilterResponse {
    type
    slug
    label
    min
    max
    selectedMin
    selectedMax
    values {
      id
      slug
      label
      count
      selected
      type
      values {
        id
        slug
        label
        count
        selected
        parent {
          id
          slug
          label
          count
        }
        values {
          id
          slug
          label
          count
          selected
          type
        }
      }
    }
  }
`);t.default=r},15556:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment products on Product {
    id
    variationId
    title
    description
    image
    available
    position
    isBuyBox
    url
    path
    reference
    attributes {
      type
      label
      value
      current
      values
    }
    price {
      paymentMethodDescription
      price
      fullPrice
      bestPrice
      discount
    }
  }
`);t.default=r},2202:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=(0,n(a(30522)).default)(`
  fragment selection on Selection {
    id
    name
    description
  }
`);t.default=r},17068:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=(0,r.default)`
  fragment faq on ComponentPresentationFaq {
    answer: Answer
    question: Question
  }
`;t.default=i},18385:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=(0,r.default)`
  fragment meta on ComponentPresentationMeta {
    title
    description
    canonical
  }
`;t.default=i},9998:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=(0,r.default)`
  fragment pagination on ShowCasePagination {
    next
    previous
  }
`;t.default=i},68468:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SeoMetaFragment=t.SeoFaqFragment=t.SearchSelectionFragment=t.SearchProductFragment=t.SearchFiltersFragment=t.QuestionsSellerInfoFragment=t.QuestionsPaginationFragment=t.QuestionsItemFragment=t.ShowcasePaginationFragment=t.ProductRecommendationFragment=t.ProductWithVariationsFragment=t.ProductWithSellerFragment=t.ProductWithPaymentMethodFragment=t.ProductWithOffersFragment=t.ProductWithMediaFragment=t.ProductWithFinancialServices=t.ProductWithFactSheetFragment=t.ProductWithDimensionFragment=t.ProductWithBundleFragment=t.ProductWithBadgeFragment=t.ProductSubCategoryFragment=t.ProductShippingCostFragment=t.ProductRatingReviewsByRatingFragment=t.ProductRatingGeneralFragment=t.ProductRatingFragment=t.ProductPriceFragment=t.ProductLoyaltyFragment=t.ProductInstallmentFragment=t.ProductImportTaxesValueFragment=t.ProductImportTaxesFragment=t.ProductGeoLocTags=t.ProductCategoryFragment=t.ProductBrandFragment=t.ProductAttributesFragment=t.ProductAdsFragment=t.PaginationFragment=t.CategoryFragment=t.BlogLinkListFragment=t.BlogSeoFragment=t.BlogRecommendationsFragment=t.BlogPostFragment=t.AllCategoriesMetaFragment=void 0;var r=a(97829);Object.defineProperty(t,"AllCategoriesMetaFragment",{enumerable:!0,get:function(){return n(r).default}});var i=a(70966);Object.defineProperty(t,"BlogPostFragment",{enumerable:!0,get:function(){return n(i).default}});var o=a(95266);Object.defineProperty(t,"BlogRecommendationsFragment",{enumerable:!0,get:function(){return n(o).default}});var l=a(54352);Object.defineProperty(t,"BlogSeoFragment",{enumerable:!0,get:function(){return n(l).default}});var u=a(11197);Object.defineProperty(t,"BlogLinkListFragment",{enumerable:!0,get:function(){return n(u).default}});var s=a(73478);Object.defineProperty(t,"CategoryFragment",{enumerable:!0,get:function(){return n(s).default}});var d=a(67987);Object.defineProperty(t,"PaginationFragment",{enumerable:!0,get:function(){return n(d).default}});var c=a(74675);Object.defineProperty(t,"ProductAdsFragment",{enumerable:!0,get:function(){return n(c).default}});var f=a(90314);Object.defineProperty(t,"ProductAttributesFragment",{enumerable:!0,get:function(){return n(f).default}});var m=a(57218);Object.defineProperty(t,"ProductBrandFragment",{enumerable:!0,get:function(){return n(m).default}});var g=a(14553);Object.defineProperty(t,"ProductCategoryFragment",{enumerable:!0,get:function(){return n(g).default}});var p=a(2031);Object.defineProperty(t,"ProductGeoLocTags",{enumerable:!0,get:function(){return n(p).default}});var b=a(45531);Object.defineProperty(t,"ProductImportTaxesFragment",{enumerable:!0,get:function(){return n(b).default}});var v=a(54680);Object.defineProperty(t,"ProductImportTaxesValueFragment",{enumerable:!0,get:function(){return n(v).default}});var _=a(55741);Object.defineProperty(t,"ProductInstallmentFragment",{enumerable:!0,get:function(){return n(_).default}});var h=a(28527);Object.defineProperty(t,"ProductLoyaltyFragment",{enumerable:!0,get:function(){return n(h).default}});var y=a(82059);Object.defineProperty(t,"ProductPriceFragment",{enumerable:!0,get:function(){return n(y).default}});var P=a(58602);Object.defineProperty(t,"ProductRatingFragment",{enumerable:!0,get:function(){return n(P).default}});var O=a(27399);Object.defineProperty(t,"ProductRatingGeneralFragment",{enumerable:!0,get:function(){return n(O).default}});var j=a(90305);Object.defineProperty(t,"ProductRatingReviewsByRatingFragment",{enumerable:!0,get:function(){return n(j).default}});var F=a(24498);Object.defineProperty(t,"ProductShippingCostFragment",{enumerable:!0,get:function(){return n(F).default}});var M=a(42046);Object.defineProperty(t,"ProductSubCategoryFragment",{enumerable:!0,get:function(){return n(M).default}});var x=a(89522);Object.defineProperty(t,"ProductWithBadgeFragment",{enumerable:!0,get:function(){return n(x).default}});var I=a(26537);Object.defineProperty(t,"ProductWithBundleFragment",{enumerable:!0,get:function(){return n(I).default}});var N=a(17842);Object.defineProperty(t,"ProductWithDimensionFragment",{enumerable:!0,get:function(){return n(N).default}});var k=a(23235);Object.defineProperty(t,"ProductWithFactSheetFragment",{enumerable:!0,get:function(){return n(k).default}});var S=a(83538);Object.defineProperty(t,"ProductWithFinancialServices",{enumerable:!0,get:function(){return n(S).default}});var C=a(39296);Object.defineProperty(t,"ProductWithMediaFragment",{enumerable:!0,get:function(){return n(C).default}});var E=a(44456);Object.defineProperty(t,"ProductWithOffersFragment",{enumerable:!0,get:function(){return n(E).default}});var w=a(87048);Object.defineProperty(t,"ProductWithPaymentMethodFragment",{enumerable:!0,get:function(){return n(w).default}});var D=a(40500);Object.defineProperty(t,"ProductWithSellerFragment",{enumerable:!0,get:function(){return n(D).default}});var V=a(41034);Object.defineProperty(t,"ProductWithVariationsFragment",{enumerable:!0,get:function(){return n(V).default}});var Z=a(47361);Object.defineProperty(t,"ProductRecommendationFragment",{enumerable:!0,get:function(){return n(Z).default}});var z=a(9998);Object.defineProperty(t,"ShowcasePaginationFragment",{enumerable:!0,get:function(){return n(z).default}});var R=a(69650);Object.defineProperty(t,"QuestionsItemFragment",{enumerable:!0,get:function(){return n(R).default}});var $=a(34109);Object.defineProperty(t,"QuestionsPaginationFragment",{enumerable:!0,get:function(){return n($).default}});var B=a(43148);Object.defineProperty(t,"QuestionsSellerInfoFragment",{enumerable:!0,get:function(){return n(B).default}});var T=a(21357);Object.defineProperty(t,"SearchFiltersFragment",{enumerable:!0,get:function(){return n(T).default}});var W=a(15556);Object.defineProperty(t,"SearchProductFragment",{enumerable:!0,get:function(){return n(W).default}});var A=a(2202);Object.defineProperty(t,"SearchSelectionFragment",{enumerable:!0,get:function(){return n(A).default}});var q=a(17068);Object.defineProperty(t,"SeoFaqFragment",{enumerable:!0,get:function(){return n(q).default}});var L=a(18385);Object.defineProperty(t,"SeoMetaFragment",{enumerable:!0,get:function(){return n(L).default}})},17912:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=n(a(30522)),i=n(a(47361)),o=n(a(9998)),l=(0,r.default)`
  query showcaseQuery(
    $showcaseId: String
    $customerId: String
    $placeId: String
    $pageId: String
    $partnerId: String
    $pmdPromoter: String
    $storeId: String
    $productId: String
    $filters: [FilterInput]
    $includePagination: Boolean = true
    $toggleWishlist: Boolean = true
    $zipcode: String
  ) {
    recommendation(
      recommendationRequest: {
        customerId: $customerId
        pageId: $pageId
        placeId: $placeId
        productId: $productId
        metadata: {
          partnerId: $partnerId
          loyaltyParams: { pmdPromoter: $pmdPromoter, storeId: $storeId }
        }
        filters: $filters
        searchRequest: { location: { zipCode: $zipcode } }
      }
    ) {
      dynamic(showcaseId: $showcaseId) {
        id
        title
        type
        designTokenId
        products {
          ...product
          isOnWishlist @include(if: $toggleWishlist)
          shippingTag {
            cost
            time
            complement
          }
        }
        highlight {
          ...product
          shippingTag {
            cost
            time
            complement
          }
        }
        button {
          label
        }
        pagination {
          ...pagination @include(if: $includePagination)
        }
      }
    }
  }
  ${i.default}
  ${o.default}
`;t.default=l}}]);
//# sourceMappingURL=8145-f522fdd211f80cbe.js.map