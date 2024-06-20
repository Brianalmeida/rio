"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[2494],{4752:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=i(5893),s=i(1151);const r={title:"Build from source",language:"en"},a=void 0,o={id:"install/build-from-source",title:"Build from source",description:"Build from the source",source:"@site/docs/install/build-from-source.md",sourceDirName:"install",slug:"/install/build-from-source",permalink:"/rio/es/docs/next/install/build-from-source",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/install/build-from-source.md",tags:[],version:"current",frontMatter:{title:"Build from source",language:"en"},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/rio/es/docs/next/install/"},next:{title:"FreeBSD",permalink:"/rio/es/docs/next/install/freebsd"}},t={},d=[{value:"Build from the source",id:"build-from-the-source",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Debian/Ubuntu",id:"debianubuntu",level:4},{value:"Arch Linux",id:"arch-linux",level:4},{value:"Fedora",id:"fedora",level:4},{value:"Void Linux",id:"void-linux",level:4},{value:"FreeBSD",id:"freebsd",level:4},{value:"Building",id:"building",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"build-from-the-source",children:"Build from the source"}),"\n",(0,l.jsx)(n.p,{children:"Before compiling Rio terminal, you'll have to first clone the source code:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/raphamorim/rio.git\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Then install the Rust compiler with ",(0,l.jsx)(n.code,{children:"rustup"})," (",(0,l.jsx)(n.a,{href:"https://rustup.rs/",children:"rustup.rs"}),")."]}),"\n",(0,l.jsx)(n.p,{children:"After installation of Rust, ensure you have the correct Rust compiler installed by running:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"rustup override set stable\nrustup update stable\n"})}),"\n",(0,l.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,l.jsx)(n.p,{children:"These are the minimum dependencies required to build Rio terminal, please note that with some setups additional dependencies might be desired."}),"\n",(0,l.jsxs)(n.p,{children:["If you're running Wayland with an Nvidia GPU and you are planning to use Rio with ",(0,l.jsx)(n.code,{children:"OpenGL"})," as primary renderer backend, you'll likely want the ",(0,l.jsx)(n.em,{children:"EGL"})," drivers installed too (these are called ",(0,l.jsx)(n.code,{children:"libegl1-mesa-dev"})," on Ubuntu)."]}),"\n",(0,l.jsx)(n.h4,{id:"debianubuntu",children:"Debian/Ubuntu"}),"\n",(0,l.jsx)(n.p,{children:"If you'd like to build a local version manually, you need a few extra libraries to build Rio. Here's an apt command that should install all of them. If something is still found to be missing, please open an issue. This has been tested on Debian Bookworm."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"apt install cmake pkg-config libfreetype6-dev libfontconfig1-dev libxcb-xfixes0-dev libxkbcommon-dev python3\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arch-linux",children:"Arch Linux"}),"\n",(0,l.jsxs)(n.p,{children:["On Arch Linux, you need a few extra libraries to build Rio. Here's a ",(0,l.jsx)(n.code,{children:"pacman"})," command that should install all of them. If something is still found to be missing, please open an issue."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"pacman -S cmake freetype2 fontconfig pkg-config make libxcb libxkbcommon python\n"})}),"\n",(0,l.jsx)(n.h4,{id:"fedora",children:"Fedora"}),"\n",(0,l.jsxs)(n.p,{children:["On Fedora, you need a few extra libraries to build Rio. Here's a ",(0,l.jsx)(n.code,{children:"dnf"})," command that should install all of them. If something is still found to be missing, please open an issue."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"dnf install cmake freetype-devel fontconfig-devel libxcb-devel libxkbcommon-devel g++\n"})}),"\n",(0,l.jsx)(n.h4,{id:"void-linux",children:"Void Linux"}),"\n",(0,l.jsx)(n.p,{children:"On Void Linux, install following packages before compiling Rio:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"xbps-install cmake freetype-devel expat-devel fontconfig-devel libxcb-devel pkg-config python3\n"})}),"\n",(0,l.jsx)(n.h4,{id:"freebsd",children:"FreeBSD"}),"\n",(0,l.jsxs)(n.p,{children:["On FreeBSD, you need a few extra libraries to build Rio. Here's a ",(0,l.jsx)(n.code,{children:"pkg"})," command that should install all of them. If something is still found to be missing, please open an issue."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"pkg install cmake freetype2 fontconfig pkgconf python3\n"})}),"\n",(0,l.jsx)(n.h3,{id:"building",children:"Building"}),"\n",(0,l.jsx)(n.p,{children:"Linux with X11:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"# Build for X11\ncargo build -p rioterm --release --no-default-features --features=x11\n\n# Running it\ntarget/release/rio\n"})}),"\n",(0,l.jsx)(n.p,{children:"Linux with Wayland:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"# Build for Wayland\ncargo build -p rioterm --release --no-default-features --features=wayland\n\n# Running it\ntarget/release/rio\n"})}),"\n",(0,l.jsx)(n.p,{children:"MacOS:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"make release-macos\n"})}),"\n",(0,l.jsx)(n.p,{children:'After the command execution an application called "Rio.app" will be created inside of a folder "release" (this folder is generated only after the command execution).'}),"\n",(0,l.jsx)(n.p,{children:"Windows:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"cargo build -p rioterm --release\n"})}),"\n",(0,l.jsx)(n.p,{children:'After the command execution an executable will be created called Rio.exe inside of "target/release"'}),"\n",(0,l.jsx)(n.p,{children:'Optionally you can also build and run the terminal with "cargo run".'}),"\n",(0,l.jsxs)(n.p,{children:["If all goes well, this should place a zip file with Rio application inside at ",(0,l.jsx)(n.code,{children:"release"})," (folder created in rio root path after the command execution)."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var l=i(7294);const s={},r=l.createContext(s);function a(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);