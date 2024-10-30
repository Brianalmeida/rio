"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[64],{7298:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=r(5893),i=r(1151);const d={title:"renderer",language:"en"},t=void 0,l={id:"config/renderer",title:"renderer",description:"Performance",source:"@site/docs/config/renderer.md",sourceDirName:"config",slug:"/config/renderer",permalink:"/rio/ja/docs/config/renderer",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/config/renderer.md",tags:[],version:"current",frontMatter:{title:"renderer",language:"en"},sidebar:"tutorialSidebar",previous:{title:"padding",permalink:"/rio/ja/docs/config/padding"},next:{title:"scroll",permalink:"/rio/ja/docs/config/scroll"}},c={},o=[{value:"Performance",id:"performance",level:2},{value:"Backend",id:"backend",level:2},{value:"Disable unfocused render",id:"disable-unfocused-render",level:2},{value:"Target FPS",id:"target-fps",level:2},{value:"Filter",id:"filter",level:2},{value:"Strategy",id:"strategy",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Performance"})," - Set WGPU rendering performance"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"High"}),": Adapter that has the highest performance. This is often a discrete GPU."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Low"}),": Adapter that uses the least possible power. This is often an integrated GPU."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[renderer]\nperformance = "High"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"backend",children:"Backend"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Backend"})," - Set WGPU rendering backend"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Automatic"}),": Leave Sugarloaf/WGPU to decide"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GL"}),": Supported on Linux/Android, and Windows and macOS/iOS via ANGLE"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Vulkan"}),": Supported on Windows, Linux/Android"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DX12"}),": Supported on Windows 10"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Metal"}),": Supported on macOS/iOS"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[renderer]\nbackend = "Automatic"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"disable-unfocused-render",children:"Disable unfocused render"}),"\n",(0,s.jsx)(n.p,{children:"This property disable renderer processes while Rio is unfocused."}),"\n",(0,s.jsx)(n.p,{children:"Default is false."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:"[renderer]\ndisable-unfocused-render = false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"target-fps",children:"Target FPS"}),"\n",(0,s.jsx)(n.p,{children:"This configuration is disabled by default but if isLimits the maximum number of frames per second that rio terminal will attempt to draw on a specific frame per second interval."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:"[renderer]\ntarget-fps = 120\n"})}),"\n",(0,s.jsx)(n.h2,{id:"filter",children:"Filter"}),"\n",(0,s.jsxs)(n.p,{children:["Rio allow to configure filters based on RetroArch shaders: ",(0,s.jsx)(n.a,{href:"https://github.com/libretro/slang-shaders",children:"github.com/libretro/slang-shaders"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: Filters does not work with ",(0,s.jsx)(n.code,{children:"GL"})," backend."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[renderer]\nfilters = [\n  "/Users/raphael/Downloads/slang-shaders-master/crt/newpixie-crt.slangp"\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Demo shaders 2",src:r(8984).Z+"",width:"2562",height:"1992"})}),"\n",(0,s.jsx)(n.h2,{id:"strategy",children:"Strategy"}),"\n",(0,s.jsxs)(n.p,{children:["Strategy property defines how Rio will render, by default it follows Event driven (",(0,s.jsx)(n.code,{children:"Events"}),"), but you can change it to a continuous loop (that will consume more CPU) by changing to ",(0,s.jsx)(n.code,{children:"Continuous"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[renderer]\nstrategy = "events"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8984:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/demo-retroarch-2-6d2eaa7ce0abb86ca64a7debd4b34963.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var s=r(7294);const i={},d=s.createContext(i);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);