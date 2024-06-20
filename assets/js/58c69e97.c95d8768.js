"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[7047],{4086:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var a=o(5893),i=o(1151);const t={title:"Navigation",language:"en"},s=void 0,r={id:"navigation",title:"Navigation",description:"Rio has multiple styles of showing navigation/tabs.",source:"@site/versioned_docs/version-0.0.x/navigation.md",sourceDirName:".",slug:"/navigation",permalink:"/rio/docs/0.0.x/navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/versioned_docs/version-0.0.x/navigation.md",tags:[],version:"0.0.x",frontMatter:{title:"Navigation",language:"en"},sidebar:"docs",previous:{title:"Key Bindings",permalink:"/rio/docs/0.0.x/key-bindings"},next:{title:"Themes",permalink:"/rio/docs/0.0.x/themes"}},l={},d=[{value:"CollapsedTab",id:"collapsedtab",level:3},{value:"NativeTab (MacOS only)",id:"nativetab-macos-only",level:3},{value:"BottomTab",id:"bottomtab",level:3},{value:"TopTab",id:"toptab",level:3},{value:"Breadcrumb",id:"breadcrumb",level:3},{value:"Plain",id:"plain",level:3},{value:"Color automation for navigation",id:"color-automation-for-navigation",level:3},{value:"Program",id:"program",level:4},{value:"Path",id:"path",level:4},{value:"Program and path",id:"program-and-path",level:4}];function c(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Rio has multiple styles of showing navigation/tabs."}),"\n",(0,a.jsx)(n.h3,{id:"collapsedtab",children:"CollapsedTab"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"CollapsedTab"})," is the default navigation mode for Linux, BSD and Windows."]}),"\n",(0,a.jsxs)(n.p,{children:["Note: The example below is using the ",(0,a.jsx)(n.a,{href:"https://github.com/dracula/rio-terminal",children:"Dracula"})," color scheme instead of Rio default colors."]}),"\n",(0,a.jsx)("img",{src:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*gMLWcZkniSHUT6Cb7L06Gg.png",width:"60%"}),"\n",(0,a.jsx)(n.p,{children:"Usage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[navigation]\nmode = "CollapsedTab"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"nativetab-macos-only",children:"NativeTab (MacOS only)"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"NativeTab"})," is the default navigation mode for MacOS."]}),"\n",(0,a.jsx)(n.p,{children:"Note: NativeTab only works for MacOS."}),"\n",(0,a.jsx)("img",{alt:"Demo NativeTab",src:"/rio/assets/posts/0.0.17/demo-native-tabs.png",width:"60%"}),"\n",(0,a.jsx)(n.p,{children:"Usage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[navigation]\nmode = "NativeTab"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"bottomtab",children:"BottomTab"}),"\n",(0,a.jsxs)(n.p,{children:["Note: ",(0,a.jsx)(n.code,{children:"BottomTab"})," does not support click mode yet."]}),"\n",(0,a.jsx)("img",{alt:"Demo BottomTab",src:"/rio/assets/features/demo-bottom-tab.png",width:"58%"}),"\n",(0,a.jsx)(n.p,{children:"Usage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[colors]\ntabs = "#000000"\n\n[navigation]\nmode = "BottomTab"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"toptab",children:"TopTab"}),"\n",(0,a.jsxs)(n.p,{children:["Note: ",(0,a.jsx)(n.code,{children:"TopTab"})," does not support click mode yet."]}),"\n",(0,a.jsx)("img",{alt:"Demo TopTab",src:"/rio/assets/features/demo-top-tab.png",width:"70%"}),"\n",(0,a.jsx)(n.p,{children:"Usage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[colors]\ntabs = "#000000"\n\n[navigation]\nmode = "TopTab"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"breadcrumb",children:"Breadcrumb"}),"\n",(0,a.jsxs)(n.p,{children:["Note: ",(0,a.jsx)(n.code,{children:"Breadcrumb"})," does not support click mode yet and is only available for MacOS, BSD and Linux."]}),"\n",(0,a.jsx)("img",{alt:"Demo Breadcrumb",src:"/rio/assets/features/demo-breadcrumb.png",width:"70%"}),"\n",(0,a.jsx)(n.p,{children:"Usage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[navigation]\nmode = "Breadcrumb"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"plain",children:"Plain"}),"\n",(0,a.jsx)(n.p,{children:"Plain navigation mode will simply turn off any tab key binding."}),"\n",(0,a.jsx)(n.p,{children:"This mode is perfect if you use Rio terminal with tmux or zellij."}),"\n",(0,a.jsx)(n.p,{children:"Usage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[navigation]\nmode = "Plain"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"color-automation-for-navigation",children:"Color automation for navigation"}),"\n",(0,a.jsxs)(n.p,{children:["Rio supports specifying the color of tabs using the ",(0,a.jsx)(n.code,{children:"program"})," and ",(0,a.jsx)(n.code,{children:"path"})," options."]}),"\n",(0,a.jsxs)(n.p,{children:["Note: ",(0,a.jsx)(n.code,{children:"path"})," is only available for MacOS, BSD and Linux."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  # Set tab to red (#FF0000) when NeoVim is open.\n  { program = "nvim", color = "#FF0000" },\n  # Set tab to green  (#00FF00) when in the projects folder\n  { path = "/home/YOUR_USERNAME/projects", color = "#00FF00" },\n    # Set tab to blue (#0000FF) when in the Rio folder AND vim is open\n  { program = "vim", path = "/home/YOUR_USERNAME/projects/rio", color = "#0000FF" },\n]\n'})}),"\n",(0,a.jsx)(n.h4,{id:"program",children:"Program"}),"\n",(0,a.jsxs)(n.p,{children:["The example below sets ",(0,a.jsx)(n.code,{children:"#FFFF00"})," as color background whenever ",(0,a.jsx)(n.code,{children:"nvim"})," is running."]}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{alt:"example navigation with program color automation using BottomTab",src:"/rio/assets/features/demo-colorized-navigation.png",width:"48%"}),(0,a.jsx)("img",{alt:"example navigation with program color automation using CollapsedTab",src:"/rio/assets/features/demo-colorized-navigation-2.png",width:"48%"})]}),"\n",(0,a.jsx)(n.p,{children:"The configuration would be like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  { program = "nvim", color = "#FFFF00" }\n]\n'})}),"\n",(0,a.jsx)(n.h4,{id:"path",children:"Path"}),"\n",(0,a.jsxs)(n.p,{children:["The example below sets ",(0,a.jsx)(n.code,{children:"#FFFF00"})," as color background when in the ",(0,a.jsx)(n.code,{children:"/home/geg/.config/rio"})," path."]}),"\n",(0,a.jsxs)(n.p,{children:["Note: ",(0,a.jsx)(n.code,{children:"path"})," is only available for MacOS, BSD and Linux."]}),"\n",(0,a.jsx)(n.p,{children:"The configuration would be like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  { path = "/home/geg/.config/rio", color = "#FFFF00" }\n]\n'})}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{alt:"example navigation with path color automation using TopTab",src:"/rio/assets/features/demo-colorized-navigation-path-1.png",width:"48%"}),(0,a.jsx)("img",{alt:"example navigation with path color automation using CollapsedTab",src:"/rio/assets/features/demo-colorized-navigation-path-2.png",width:"48%"})]}),"\n",(0,a.jsx)(n.h4,{id:"program-and-path",children:"Program and path"}),"\n",(0,a.jsxs)(n.p,{children:["It is possible to use both ",(0,a.jsx)(n.code,{children:"path"})," and ",(0,a.jsx)(n.code,{children:"program"})," at the same time."]}),"\n",(0,a.jsxs)(n.p,{children:["The example below sets ",(0,a.jsx)(n.code,{children:"#FFFF00"})," as color background when in the ",(0,a.jsx)(n.code,{children:"/home"})," path and ",(0,a.jsx)(n.code,{children:"nvim"})," is open."]}),"\n",(0,a.jsxs)(n.p,{children:["Note: ",(0,a.jsx)(n.code,{children:"path"})," is only available for MacOS, BSD and Linux."]}),"\n",(0,a.jsx)(n.p,{children:"The configuration would be like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  { program = "nvim", path = "/home", color = "#FFFF00" }\n]\n'})}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{alt:"example navigation with program and path color automation using TopTab",src:"/rio/assets/features/demo-colorized-navigation-program-and-path-1.png",width:"48%"}),(0,a.jsx)("img",{alt:"example navigation with program and path color automation using CollapsedTab",src:"/rio/assets/features/demo-colorized-navigation-program-and-path-2.png",width:"48%"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>s});var a=o(7294);const i={},t=a.createContext(i);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);