"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[1729],{131:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=o(5893),a=o(1151);const t={title:"navigation",language:"en"},s=void 0,r={id:"config/navigation",title:"navigation",description:"- hide-if-single - Hide navigation UI if there is only one tab. It does not work for NativeTab.",source:"@site/docs/config/navigation.md",sourceDirName:"config",slug:"/config/navigation",permalink:"/rio/docs/config/navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/config/navigation.md",tags:[],version:"current",frontMatter:{title:"navigation",language:"en"},sidebar:"tutorialSidebar",previous:{title:"mouse",permalink:"/rio/docs/config/mouse"},next:{title:"option-as-alt",permalink:"/rio/docs/config/option-as-alt"}},l={},c=[{value:"Mode",id:"mode",level:2},{value:"Bookmark",id:"bookmark",level:3},{value:"NativeTab (MacOS only)",id:"nativetab-macos-only",level:3},{value:"BottomTab",id:"bottomtab",level:3},{value:"TopTab",id:"toptab",level:3},{value:"Plain",id:"plain",level:3},{value:"Split",id:"split",level:2},{value:"Hide if is only one tab",id:"hide-if-is-only-one-tab",level:2},{value:"Color automation for navigation",id:"color-automation-for-navigation",level:2},{value:"Program",id:"program",level:3},{value:"Path",id:"path",level:3},{value:"Program and path",id:"program-and-path",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hide-if-single"})," - Hide navigation UI if there is only one tab. It does not work for ",(0,i.jsx)(n.code,{children:"NativeTab"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clickable"})," - Enable click on tabs to switch."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"use-current-path"})," - Use same path whenever a new tab is created (Note: requires ",(0,i.jsx)(n.a,{href:"/docs/config/use-fork",children:(0,i.jsx)(n.code,{children:"use-fork"})})," to be set to false)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"color-automation"})," - Set a specific color for the tab whenever a specific program is running, or in a specific directory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"use-split"})," - Enable split panels feature."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[navigation]\nmode = "Bookmark"\nclickable = false\nhide-if-single = true\nuse-current-path = false\ncolor-automation = []\nuse-split = true\n'})}),"\n",(0,i.jsx)(n.h2,{id:"mode",children:"Mode"}),"\n",(0,i.jsx)(n.p,{children:"Rio has multiple styles of showing navigation/tabs."}),"\n",(0,i.jsx)(n.h3,{id:"bookmark",children:"Bookmark"}),"\n",(0,i.jsxs)(n.p,{children:["Note: The example below is using the ",(0,i.jsx)(n.a,{href:"https://github.com/dracula/rio-terminal",children:"Dracula"})," color scheme instead of Rio default colors."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Bookmark"})," is the default navigation mode."]}),"\n",(0,i.jsx)("img",{src:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*gMLWcZkniSHUT6Cb7L06Gg.png",width:"60%"}),"\n",(0,i.jsx)(n.p,{children:"Usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[navigation]\nmode = "Bookmark"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"nativetab-macos-only",children:"NativeTab (MacOS only)"}),"\n",(0,i.jsx)("img",{alt:"Demo NativeTab",src:"/rio/assets/posts/0.0.17/demo-native-tabs.png",width:"60%"}),"\n",(0,i.jsx)(n.p,{children:"Usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[navigation]\nmode = "NativeTab"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"bottomtab",children:"BottomTab"}),"\n",(0,i.jsxs)(n.p,{children:["Note: ",(0,i.jsx)(n.code,{children:"BottomTab"})," does not support click mode yet."]}),"\n",(0,i.jsx)("img",{alt:"Demo BottomTab",src:"/rio/assets/features/demo-bottom-tab.png",width:"58%"}),"\n",(0,i.jsx)(n.p,{children:"Usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[colors]\ntabs = "#000000"\n\n[navigation]\nmode = "BottomTab"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"toptab",children:"TopTab"}),"\n",(0,i.jsxs)(n.p,{children:["Note: ",(0,i.jsx)(n.code,{children:"TopTab"})," does not support click mode yet."]}),"\n",(0,i.jsx)("img",{alt:"Demo TopTab",src:"/rio/assets/features/demo-top-tab.png",width:"70%"}),"\n",(0,i.jsx)(n.p,{children:"Usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[colors]\ntabs = "#000000"\n\n[navigation]\nmode = "TopTab"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"plain",children:"Plain"}),"\n",(0,i.jsx)(n.p,{children:"Plain navigation mode will simply turn off any tab key binding."}),"\n",(0,i.jsx)(n.p,{children:"This mode is perfect if you use Rio terminal with tmux or zellij."}),"\n",(0,i.jsx)(n.p,{children:"Usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[navigation]\nmode = "Plain"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"split",children:"Split"}),"\n",(0,i.jsx)(n.p,{children:"Enable split feature. It is enabled by default."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[navigation]\nuse-split = true\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Demo split",src:o(297).Z+"",width:"1824",height:"1280"})}),"\n",(0,i.jsx)(n.h2,{id:"hide-if-is-only-one-tab",children:"Hide if is only one tab"}),"\n",(0,i.jsxs)(n.p,{children:["The property ",(0,i.jsx)(n.code,{children:"hide-if-single"})," hides navigation UI if there is only one tab. It does not work for ",(0,i.jsx)(n.code,{children:"NativeTab"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Default is ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[navigation]\nhide-if-single = true\n"})}),"\n",(0,i.jsx)(n.h2,{id:"color-automation-for-navigation",children:"Color automation for navigation"}),"\n",(0,i.jsxs)(n.p,{children:["Rio supports specifying the color of tabs using the ",(0,i.jsx)(n.code,{children:"program"})," and ",(0,i.jsx)(n.code,{children:"path"})," options."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: ",(0,i.jsx)(n.code,{children:"path"})," is only available for MacOS, BSD and Linux."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  # Set tab to red (#FF0000) when NeoVim is open.\n  { program = "nvim", color = "#FF0000" },\n  # Set tab to green  (#00FF00) when in the projects folder\n  { path = "/home/YOUR_USERNAME/projects", color = "#00FF00" },\n    # Set tab to blue (#0000FF) when in the Rio folder AND vim is open\n  { program = "vim", path = "/home/YOUR_USERNAME/projects/rio", color = "#0000FF" },\n]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"program",children:"Program"}),"\n",(0,i.jsxs)(n.p,{children:["The example below sets ",(0,i.jsx)(n.code,{children:"#FFFF00"})," as color background whenever ",(0,i.jsx)(n.code,{children:"nvim"})," is running."]}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("img",{alt:"example navigation with program color automation using BottomTab",src:"/rio/assets/features/demo-colorized-navigation.png",width:"48%"}),(0,i.jsx)("img",{alt:"example navigation with program color automation using Bookmark",src:"/rio/assets/features/demo-colorized-navigation-2.png",width:"48%"})]}),"\n",(0,i.jsx)(n.p,{children:"The configuration would be like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  { program = "nvim", color = "#FFFF00" }\n]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"path",children:"Path"}),"\n",(0,i.jsxs)(n.p,{children:["The example below sets ",(0,i.jsx)(n.code,{children:"#FFFF00"})," as color background when in the ",(0,i.jsx)(n.code,{children:"/home/geg/.config/rio"})," path."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: ",(0,i.jsx)(n.code,{children:"path"})," is only available for MacOS, BSD and Linux."]}),"\n",(0,i.jsx)(n.p,{children:"The configuration would be like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  { path = "/home/geg/.config/rio", color = "#FFFF00" }\n]\n'})}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("img",{alt:"example navigation with path color automation using TopTab",src:"/rio/assets/features/demo-colorized-navigation-path-1.png",width:"48%"}),(0,i.jsx)("img",{alt:"example navigation with path color automation using Bookmark",src:"/rio/assets/features/demo-colorized-navigation-path-2.png",width:"48%"})]}),"\n",(0,i.jsx)(n.h3,{id:"program-and-path",children:"Program and path"}),"\n",(0,i.jsxs)(n.p,{children:["It is possible to use both ",(0,i.jsx)(n.code,{children:"path"})," and ",(0,i.jsx)(n.code,{children:"program"})," at the same time."]}),"\n",(0,i.jsxs)(n.p,{children:["The example below sets ",(0,i.jsx)(n.code,{children:"#FFFF00"})," as color background when in the ",(0,i.jsx)(n.code,{children:"/home"})," path and ",(0,i.jsx)(n.code,{children:"nvim"})," is open."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: ",(0,i.jsx)(n.code,{children:"path"})," is only available for MacOS, BSD and Linux."]}),"\n",(0,i.jsx)(n.p,{children:"The configuration would be like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  { program = "nvim", path = "/home", color = "#FFFF00" }\n]\n'})}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("img",{alt:"example navigation with program and path color automation using TopTab",src:"/rio/assets/features/demo-colorized-navigation-program-and-path-1.png",width:"48%"}),(0,i.jsx)("img",{alt:"example navigation with program and path color automation using Bookmark",src:"/rio/assets/features/demo-colorized-navigation-program-and-path-2.png",width:"48%"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},297:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/demo-split-2371bfcbad15af3a7c820db4811c1032.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>s});var i=o(7294);const a={},t=i.createContext(a);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);