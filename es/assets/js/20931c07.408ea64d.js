"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[2809],{6115:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var r=o(5893),t=o(1151);const i={title:"theme",language:"en"},c=void 0,s={id:"config/theme",title:"theme",description:"The configuration property theme is used for specifying the theme. Rio will look in the themes folder for the theme.",source:"@site/docs/config/theme.md",sourceDirName:"config",slug:"/config/theme",permalink:"/rio/es/docs/config/theme",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/config/theme.md",tags:[],version:"current",frontMatter:{title:"theme",language:"en"},sidebar:"tutorialSidebar",previous:{title:"startup-directory",permalink:"/rio/es/docs/config/startup-directory"},next:{title:"use-fork",permalink:"/rio/es/docs/config/use-fork"}},l={},h=[{value:"Building your own theme",id:"building-your-own-theme",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The configuration property ",(0,r.jsx)(n.code,{children:"theme"})," is used for specifying the theme. Rio will look in the ",(0,r.jsx)(n.code,{children:"themes"})," folder for the theme."]}),"\n",(0,r.jsxs)(n.p,{children:["You can see common paths for the ",(0,r.jsx)(n.code,{children:"themes"})," directory here:"]}),"\n",(0,r.jsx)(n.p,{children:'Note: Remember to replace "YOUR_USERNAME" with your actual user name.'}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Platform"}),(0,r.jsx)(n.th,{children:"Path"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/Users/YOUR_USERNAME/.config/rio/themes"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Linux"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/home/YOUR_USERNAME/.config/rio/themes"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Windows"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"C:\\Users\\YOUR_USERNAME\\AppData\\Local\\rio\\themes"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["In the example below, we will setup the Dracula theme for Rio. The theme can be downloaded from ",(0,r.jsx)(n.a,{href:"https://github.com/dracula/rio-terminal",children:"github.com/dracula/rio-terminal"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["After downloading the ",(0,r.jsx)(n.code,{children:"dracula.toml"})," file, move it inside the folder ",(0,r.jsx)(n.code,{children:"themes"})," in the configuration folder."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'#  ~/.config/rio/config.toml\ntheme = "dracula"\n'})}),"\n",(0,r.jsx)(n.p,{children:"It should look like this:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Dracula theme example",src:o(2576).Z+"",width:"1824",height:"1424"})}),"\n",(0,r.jsxs)(n.p,{children:["Another option would be to install the ",(0,r.jsx)(n.a,{href:"https://github.com/raphamorim/lucario/#rio-terminal",children:"Lucario color scheme for Rio terminal"}),", by moving the downloaded file to ",(0,r.jsx)(n.code,{children:"~/.config/rio/themes/lucario.toml"})," and setting the ",(0,r.jsx)(n.code,{children:"theme"})," property:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'#  ~/.config/rio/config.toml\ntheme = "lucario"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/raphamorim/lucario/raw/main/images/rio.png",alt:"Lucario theme example"})}),"\n",(0,r.jsxs)(n.p,{children:["You can find more than 250 themes for Rio terminal in this repository: ",(0,r.jsx)(n.a,{href:"https://github.com/mbadolato/iTerm2-Color-Schemes/tree/master/rio",children:"mbadolato/iTerm2-Color-Schemes/tree/master/rio"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"building-your-own-theme",children:"Building your own theme"}),"\n",(0,r.jsx)(n.p,{children:"Building your own theme for Rio is very straightforward."}),"\n",(0,r.jsxs)(n.p,{children:["Simply create a new theme file in your configuration themes folder (E.g. ",(0,r.jsx)(n.code,{children:"~/.config/rio/themes/foobar.toml"}),") and choose your preferred colors:"]}),"\n",(0,r.jsx)(n.p,{children:"Note: Missing fields will use the default for Rio."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'# ~/.config/rio/themes/foobar.toml\n\n[colors]\nbackground = ""\nforeground = ""\n\n# Selection\nselection-background = ""\nselection-foreground = ""\n\n# Navigation\ntabs-active = ""\ntabs-active-foreground = ""\ntabs-active-highlight = ""\ntabs-active-foreground = ""\nbar = ""\ncursor = ""\nvi-cursor = ""\n\n# Search\nsearch-match-background = ""\nsearch-match-foreground = ""\nsearch-focused-match-background = ""\nsearch-focused-match-foreground = ""\n\n# Regular colors\nblack = ""\nblue = ""\ncyan = ""\ngreen = ""\nmagenta = ""\nred = ""\ntabs = ""\nwhite = ""\nyellow = ""\n\n# Dim colors\ndim-black = ""\ndim-blue = ""\ndim-cyan = ""\ndim-foreground = ""\ndim-green = ""\ndim-magenta = ""\ndim-red = ""\ndim-white = ""\ndim-yellow = ""\n\n# Light colors\nlight-black = ""\nlight-blue = ""\nlight-cyan = ""\nlight-foreground = ""\nlight-green = ""\nlight-magenta = ""\nlight-red = ""\nlight-white = ""\nlight-yellow = ""\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After that all you have to do is set the ",(0,r.jsx)(n.code,{children:"theme"})," property in your configuration file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'# ~/.config/rio/config.toml\ntheme = "foobar"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Proud of your new theme? Why not share it on the ",(0,r.jsx)(n.a,{href:"https://discord.gg/zRvJjmKGwS",children:"Rio Discord"}),"!"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2576:(e,n,o)=>{o.d(n,{Z:()=>r});const r=o.p+"assets/images/dracula-nvim-a1d1457e2aa3780989b7e3378e473316.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>c});var r=o(7294);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);