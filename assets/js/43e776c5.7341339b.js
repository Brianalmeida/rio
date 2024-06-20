"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[1219],{9758:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var o=i(5893),a=i(1151),s=i(725);const t={layout:"post",title:"Support to tabs, custom key bindings, performance improvements and other updates",date:"2023-08-02 12:34",description:"Support to tabs, custom key bindings, performance improvements, color automation for tabs, binary size optimization, bug fixes and other updates.",categories:"windows macos linux webassembly"},r=void 0,l={permalink:"/rio/blog/2023/08/02/release-0.0.15",editUrl:"https://github.com/raphamorim/rio/tree/main/docs/blog/2023-08-02-release-0.0.15.mdx",source:"@site/blog/2023-08-02-release-0.0.15.mdx",title:"Support to tabs, custom key bindings, performance improvements and other updates",description:"Support to tabs, custom key bindings, performance improvements, color automation for tabs, binary size optimization, bug fixes and other updates.",date:"2023-08-02T12:34:00.000Z",tags:[],readingTime:3.335,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Support to tabs, custom key bindings, performance improvements and other updates",date:"2023-08-02 12:34",description:"Support to tabs, custom key bindings, performance improvements, color automation for tabs, binary size optimization, bug fixes and other updates.",categories:"windows macos linux webassembly"},unlisted:!1,prevItem:{title:"New font configuration API and native tabs",permalink:"/rio/blog/2023/08/29/release-0.0.17"},nextItem:{title:"Rio 0.0.11",permalink:"/rio/blog/2023/07/19/release-0.0.11"}},d={authorsImageUrls:[]},c=[{value:"Highlights",id:"highlights",level:2},{value:"Navigation",id:"navigation",level:2},{value:"Sugarloaf performance improvements",id:"sugarloaf-performance-improvements",level:2},{value:"Color automation for navigation",id:"color-automation-for-navigation",level:2},{value:"Custom key bindings",id:"custom-key-bindings",level:2},{value:"Changelog of v0.0.15 along with 0.0.13 and 0.0.12",id:"changelog-of-v0015-along-with-0013-and-0012",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This post also includes changes from v0.0.13 and v0.0.12."}),"\n",(0,o.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Navigation."}),"\n",(0,o.jsx)(n.li,{children:"Custom key bindings."}),"\n",(0,o.jsx)(n.li,{children:"Performance updates."}),"\n",(0,o.jsx)(n.li,{children:"Color automation for tabs."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"navigation",children:"Navigation"}),"\n",(0,o.jsx)(n.p,{children:"Rio allows to choose navigation between the following options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"CollapsedTab"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"BottomTab"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"TopTab"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"Breadcrumb"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You can set the navigation mode in the configuration file. An example of configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[navigation]\nmode = "BottomTab"\nuse-current-path = true\nclickable = false\n'})}),"\n",(0,o.jsx)(n.p,{children:"Note: BottomTab and TopTab does not support click mode yet."}),"\n",(0,o.jsx)(n.p,{children:"Below some images with different navigation setups:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"First image: BottomTab navigation x11."}),"\n",(0,o.jsx)(n.li,{children:"Second image: TopTav navigation wayland."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"example navigation x11",src:i(6023).Z+"",width:"1668",height:"1198"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"second example navigation Wayland",src:i(2367).Z+"",width:"1346",height:"902"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"First image: Breadcrumb navigation macos."}),"\n",(0,o.jsx)(n.li,{children:"Second image: BottomTab navigation macos."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"example breadcrumb navigation macos",src:i(114).Z+"",width:"1132",height:"526"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"example BottomTab navigation macos",src:i(2266).Z+"",width:"1424",height:"1024"})}),"\n",(0,o.jsxs)(n.p,{children:["More info about navigation in ",(0,o.jsx)(n.a,{href:"/docs/0.0.x/navigation/",children:"docs/navigation"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"sugarloaf-performance-improvements",children:"Sugarloaf performance improvements"}),"\n",(0,o.jsx)(n.p,{children:"Performance improvements with Sugarloaf de-duplication of input data."}),"\n",(0,o.jsx)(n.p,{children:'Before an average sugarloaf.stack call would cost around "~253.5\xb5s" and now it does cost an average of "~51.5\xb5s".'}),"\n",(0,o.jsx)(n.p,{children:"The algorithm is effective whenever the terminal has a lot of repetition like empty spaces. The benchmark test below was made rendering 100.000 characters that had repetition:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"second example navigation Wayland",src:i(7106).Z+"",width:"1200",height:"578"})}),"\n",(0,o.jsxs)(n.p,{children:["The de-duplication algorithm in the renderer considerably reduced the initial rendering time from avg ",(0,o.jsx)(n.strong,{children:"6ms to 2ms"})," and using Rio in a large screen (>=136 columns) has dropped from ",(0,o.jsx)(n.strong,{children:"36ms to 8ms"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Tweet reference:"}),"\n",(0,o.jsx)(s.t,{id:"1685612156773961728"}),"\n",(0,o.jsx)(n.h2,{id:"color-automation-for-navigation",children:"Color automation for navigation"}),"\n",(0,o.jsx)(n.p,{children:"Rio allows to specify color overwrites for tabs based on program context."}),"\n",(0,o.jsxs)(n.p,{children:["The example below sets ",(0,o.jsx)(n.code,{children:"#FFFF00"})," as color background whenever ",(0,o.jsx)(n.code,{children:"nvim"})," is running."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"example navigation with color automation",src:i(6498).Z+"",width:"950",height:"660"}),"\n",(0,o.jsx)(n.img,{alt:"second example navigation with color automation",src:i(401).Z+"",width:"870",height:"604"})]}),"\n",(0,o.jsx)(n.p,{children:"The configuration would be like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[navigation]\ncolor-automation = [\n  { program = "nvim", color = "#FFFF00" }\n]\n'})}),"\n",(0,o.jsx)(n.h2,{id:"custom-key-bindings",children:"Custom key bindings"}),"\n",(0,o.jsx)(n.p,{children:"Now you can configure custom key bindings for Rio terminal."}),"\n",(0,o.jsx)(n.p,{children:"Below an example of two custom key bindings:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[bindings]\nkeys = [\n  { key = "q", with = "super", action = "Quit" }\n  # Bytes[27, 91, 53, 126] is equivalent to "\\x1b[5~"\n  { key = "home", with = "super | shift", bytes = [27, 91, 53, 126] }\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:'For example, in the first binding will tell Rio to close the terminal every time that "q" key is pressed along with "super" (in MacOS the "super" key is "command").'}),"\n",(0,o.jsxs)(n.p,{children:["More info about custom key bindings in ",(0,o.jsx)(n.a,{href:"/docs/0.0.x/key-bindings/",children:"docs/key-bindings"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"changelog-of-v0015-along-with-0013-and-0012",children:"Changelog of v0.0.15 along with 0.0.13 and 0.0.12"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Introduce configurable navigation with the following options: "CollapsedTab" (default), "Breadcrumb", "TopTab" and "BottomTab".'}),"\n",(0,o.jsx)(n.li,{children:'Performance improvements with Sugarloaf de-duplication of input data. Before: "~253.5\xb5s" and now "~51.5\xb5s".'}),"\n",(0,o.jsx)(n.li,{children:'Introduce "navigation.use-current-path" which sets if a tab/breacrumb should be open from the current context path.'}),"\n",(0,o.jsxs)(n.li,{children:["Fix rendering unicode with 1 width glyphs (fix ",(0,o.jsx)(n.a,{href:"https://github.com/raphamorim/rio/issues/160",children:"#160"}),")."]}),"\n",(0,o.jsx)(n.li,{children:"Increased max tabs from 9 to 72."}),"\n",(0,o.jsx)(n.li,{children:'Default colors "selection-foreground" and "selection-background" has changed.'}),"\n",(0,o.jsx)(n.li,{children:'Default colors "tab" and "tab-active" has changed.'}),"\n",(0,o.jsxs)(n.li,{children:["Implementation of custom key bindings (",(0,o.jsx)(n.a,{href:"https://github.com/raphamorim/rio/issues/117",children:"#117"}),")."]}),"\n",(0,o.jsx)(n.li,{children:"Fix .deb packing in GH Actions."}),"\n",(0,o.jsx)(n.li,{children:"Fix key binding for switch tab next (MacOS only)."}),"\n",(0,o.jsx)(n.li,{children:"Fix scroll when copying text outside of offset."}),"\n",(0,o.jsx)(n.li,{children:"Fix copy key bindings."}),"\n",(0,o.jsxs)(n.li,{children:["Fix Fuzzy Finder issue (",(0,o.jsx)(n.a,{href:"https://github.com/raphamorim/rio/issues/132",children:"#132"}),")."]}),"\n",(0,o.jsx)(n.li,{children:"Introduce Copa (Alacritty's VTE forked version to introduce new sequences/instructions in next versions)."}),"\n",(0,o.jsx)(n.li,{children:"Upgraded Winit to 0.29.0-beta.0"}),"\n",(0,o.jsx)(n.li,{children:"Support for keybindings with dead keys."}),"\n",(0,o.jsx)(n.li,{children:'"Back"/"Forward" mouse buttons support in bindings.'}),"\n",(0,o.jsx)(n.li,{children:"Fix unconditional query of xdg-portal settings on Wayland"}),"\n",(0,o.jsx)(n.li,{children:'Fix "Maximized" startup mode not filling the screen properly on GNOME Wayland.'}),"\n",(0,o.jsx)(n.li,{children:'Fix Default Vi key bindings for "Last"/"First" actions not working on X11/Wayland.'}),"\n",(0,o.jsx)(n.li,{children:'Set "padding-x" to 0 for non-macos.'}),"\n",(0,o.jsx)(n.li,{children:'Set "app_id"/"WM_CLASS" property on Wayland/X11.'}),"\n",(0,o.jsx)(n.li,{children:"Strip binary is on for release builds."}),"\n",(0,o.jsx)(n.li,{children:"Each paste or key binding that has writing leads to clear selection and scroll bottom."}),"\n",(0,o.jsx)(n.li,{children:"Fixed over-rendering when scrolling."}),"\n",(0,o.jsx)(n.li,{children:"Fix selection."}),"\n",(0,o.jsx)(n.li,{children:"Support to copy using VIM."}),"\n",(0,o.jsx)(n.li,{children:"Fix for MacOS deadzone changing cursor to draggable on window buttons."}),"\n",(0,o.jsx)(n.li,{children:"Fix for scroll using tmux."}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},2266:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/demo-bottom-tab-8b9933b7d2983553a727f0419f0d67e1.png"},114:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/demo-breadcrumb-d35acfa5227edcf96354ce73c590acf7.png"},401:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/demo-colorized-navigation-2-63209bd650fba709433ceb11d828e689.png"},6498:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/demo-colorized-navigation-9dd764d270c6e5be42c381b48c704679.png"},7106:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/de-duplication-sugarloaf-acb99ce5901de9967ea945e37b865ae5.jpg"},2367:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/demo-navigation-wayland-9dab1a71f07fd9c93f4ed8919b523c8e.png"},6023:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/demo-navigation-x11-21f1a78c0ce45a1d878717cb6e5f64cb.png"}}]);