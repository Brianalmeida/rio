"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[1081],{3301:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=s(5893),o=s(1151);const r={title:"Sixel protocol",language:"en"},n=void 0,a={id:"features/sixel-protocol",title:"Sixel protocol",description:'Sixel, short for "six pixels", is a bitmap graphics format supported by terminals and printers from DEC. It consists of a pattern six pixels high and one wide, resulting in 64 possible patterns. Each possible pattern is assigned an ASCII character, making the sixels easy to transmit on 7-bit serial links.',source:"@site/docs/features/sixel-protocol.md",sourceDirName:"features",slug:"/features/sixel-protocol",permalink:"/rio/docs/features/sixel-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/features/sixel-protocol.md",tags:[],version:"current",frontMatter:{title:"Sixel protocol",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Rio is Fast",permalink:"/rio/docs/features/rio-is-fast"},next:{title:"Spawn or Fork",permalink:"/rio/docs/features/spawn-or-fork"}},l={},c=[];function d(e){const t={a:"a",blockquote:"blockquote",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:'Sixel, short for "six pixels", is a bitmap graphics format supported by terminals and printers from DEC. It consists of a pattern six pixels high and one wide, resulting in 64 possible patterns. Each possible pattern is assigned an ASCII character, making the sixels easy to transmit on 7-bit serial links.'}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Demo of sixel on Rio."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Demo sixel as gif",src:s(8627).Z+"",width:"800",height:"565"})}),"\n",(0,i.jsx)(t.p,{children:'Sixel was first introduced as a way of sending bitmap graphics to DEC dot matrix printers like the LA50. After being put into "sixel mode" the following data was interpreted to directly control six of the pins in the nine-pin print head. A string of sixel characters encodes a single 6-pixel high row of the image.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Demo sixel with timg",src:s(3831).Z+"",width:"1156",height:"826"})}),"\n",(0,i.jsx)(t.p,{children:"The system was later re-used as a way to send bitmap data to the VT200 series and VT320 terminals when defining custom character sets. A series of sixels are used to transfer the bitmap for each character. This feature is known as soft character sets or dynamically redefinable character sets (DRCS). With the VT240, VT241, VT330, and VT340, the terminals could decode a complete sixel image to the screen, like those previously sent to printers."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Demo sixel",src:s(9063).Z+"",width:"2810",height:"1960"})}),"\n",(0,i.jsxs)(t.p,{children:["For more information on Sixel: ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Sixel",children:"en.wikipedia.org/wiki/Sixel"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3831:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/demo-sixel-2-a4997b091c40f3eb9fc9ddd648f9a859.png"},8627:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/demo-sixel-cb1f23c1c25a508d38889253607d4514.gif"},9063:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/demo-sixel-1004e7736a31fafb4461edac9b567dfa.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>n});var i=s(7294);const o={},r=i.createContext(o);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);