"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[9197],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(o),p=a,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return o?r.createElement(h,n(n({ref:t},m),{},{components:o})):r.createElement(h,n({ref:t},m))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,n[1]=s;for(var c=2;c<i;c++)n[c]=o[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},1112:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(7462),a=(o(7294),o(3905));const i={layout:"post",title:"Rio 0.0.8",date:"2023-07-03 12:34",description:"Support to Microsoft Windows, Homebrew casks and formulas, migration to Corcovado, selection improvements and increase/decrease font-size in a session.",categories:"release windows macos linux"},n=void 0,s={permalink:"/rio/blog/2023/07/10/release-0.0.8",editUrl:"https://github.com/raphamorim/rio/tree/main/docs/blog/2023-07-10-release-0.0.8.md",source:"@site/blog/2023-07-10-release-0.0.8.md",title:"Rio 0.0.8",description:"Support to Microsoft Windows, Homebrew casks and formulas, migration to Corcovado, selection improvements and increase/decrease font-size in a session.",date:"2023-07-03T12:34:00.000Z",formattedDate:"July 3, 2023",tags:[],readingTime:2.385,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Rio 0.0.8",date:"2023-07-03 12:34",description:"Support to Microsoft Windows, Homebrew casks and formulas, migration to Corcovado, selection improvements and increase/decrease font-size in a session.",categories:"release windows macos linux"},prevItem:{title:"Rio 0.0.7",permalink:"/rio/blog/2023/07/07/release-0.0.7"},nextItem:{title:"Release 0.0.6",permalink:"/rio/blog/2023/06/07/release-0.0.6"}},l={authorsImageUrls:[]},c=[{value:"Microsoft Windows",id:"microsoft-windows",level:2},{value:"Homebrew as Cask",id:"homebrew-as-cask",level:2},{value:"Homebrew as Formula",id:"homebrew-as-formula",level:2},{value:"Selection improvements and increase/decrease font-size in a session",id:"selection-improvements-and-increasedecrease-font-size-in-a-session",level:2},{value:"Migration to Corcovado",id:"migration-to-corcovado",level:2},{value:"Changelog of v0.0.8",id:"changelog-of-v008",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),(0,a.kt)("h1",{id:"v008-highlights"},"v0.0.8: Highlights"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support to Microsoft Windows."),(0,a.kt)("li",{parentName:"ul"},"Support to Homebrew as cask ",(0,a.kt)("a",{parentName:"li",href:"https://formulae.brew.sh/cask/rio"},"formulae.brew.sh/cask/rio"),"."),(0,a.kt)("li",{parentName:"ul"},"Support to Homebrew as formula ",(0,a.kt)("a",{parentName:"li",href:"https://formulae.brew.sh/formula/rio"},"formulae.brew.sh/formula/rio"),"."),(0,a.kt)("li",{parentName:"ul"},"Selection improvements and increase/decrease font-size in a session."),(0,a.kt)("li",{parentName:"ul"},"Migration to Corcovado.")),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Rio release 0.0.8 is finally here, there's a lot of updates to cover so let's get started. I also would like to remind you that Rio is still unstable. This release adds a lot of bug fixes and feature additions in order to make Rio terminal stable."),(0,a.kt)("h2",{id:"microsoft-windows"},"Microsoft Windows"),(0,a.kt)("p",null,"Added support to Microsoft Windows."),(0,a.kt)("p",null,"Windows 10:\n",(0,a.kt)("img",{alt:"Demo windows in use",src:o(6243).Z,width:"806",height:"563"})),(0,a.kt)("p",null,"Windows 11:\n",(0,a.kt)("img",{alt:"Demo windows in search",src:o(6243).Z,width:"806",height:"563"})),(0,a.kt)("h2",{id:"homebrew-as-cask"},"Homebrew as Cask"),(0,a.kt)("p",null,"Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple's operating system, macOS."),(0,a.kt)("p",null,"Rio has been added as a cask ",(0,a.kt)("a",{parentName:"p",href:"https://formulae.brew.sh/cask/rio"},"formulae.brew.sh/cask/rio")," to their package source. To install Rio with homebrew you need to run the command below:"),(0,a.kt)("p",null,"{% highlight javascript %}\nbrew update && brew install --cask rio\n{% endhighlight %}"),(0,a.kt)("p",null,"Github reference: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Homebrew/homebrew-cask/pull/149824"},"github.com/Homebrew/homebrew-cask/pull/149824")),(0,a.kt)("h2",{id:"homebrew-as-formula"},"Homebrew as Formula"),(0,a.kt)("p",null,"Rio has been added as a formula ",(0,a.kt)("a",{parentName:"p",href:"https://formulae.brew.sh/formula/rio"},"formulae.brew.sh/formula/rio")," to their package source. To install Rio with homebrew you need to run the command below:"),(0,a.kt)("p",null,"{% highlight javascript %}\nbrew update && brew install rio\n{% endhighlight %}"),(0,a.kt)("p",null,"Github reference: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Homebrew/homebrew-core/pull/134295"},"github.com/Homebrew/homebrew-cask/pull/149824")),(0,a.kt)("h2",{id:"selection-improvements-and-increasedecrease-font-size-in-a-session"},"Selection improvements and increase/decrease font-size in a session"),(0,a.kt)("p",null,"The version v0.0.8 has added the following missing functionalities: Scroll and select, Semantic and line selection and the ability to increase, decrease and reset font size using keyboard shortcut during session coming for Rio terminal."),(0,a.kt)("p",null,"Below you can see a demo with all those functionalities:"),(0,a.kt)("blockquote",{class:"twitter-tweet","data-lang":"en"},(0,a.kt)("p",{lang:"en",dir:"ltr"},"Coming for next Rio terminal version (v0.0.8)",(0,a.kt)("br",null),(0,a.kt)("br",null),"- Scroll and select.",(0,a.kt)("br",null),"- Semantic and line selection.",(0,a.kt)("br",null),"- Ability to in|decrease font size using keyboard shortcut during session coming for Rio terminal",(0,a.kt)("a",{href:"https://t.co/5EuJJzPsB2"},"https://t.co/5EuJJzPsB2")," ",(0,a.kt)("a",{href:"https://twitter.com/hashtag/rust?src=hash&ref_src=twsrc%5Etfw"},"#rust")," ",(0,a.kt)("a",{href:"https://t.co/45Nt3pHtJ3"},"pic.twitter.com/45Nt3pHtJ3")),"\u2014 Raphael Amorim \ud83e\udd80 (@raphamorims) ",(0,a.kt)("a",{href:"https://twitter.com/raphamorims/status/1673705339336761344?ref_src=twsrc%5Etfw"},"June 27, 2023")),(0,a.kt)("h2",{id:"migration-to-corcovado"},"Migration to Corcovado"),(0,a.kt)("p",null,"Rio terminal migrated from Mio to Corcovado. Corcovado is a maintained fork of mio 0.6.x along mio-signal-hook, mio-extras and using Windows API that works in Windows 11. It uses Rust edition 2021 instead of 2018."),(0,a.kt)("p",null,"Corcovado also uses Rust standard library for net and io instead of Mio 0.6.x."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"changelog-of-v008"},"Changelog of v0.0.8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Added generation of ".msi" and ".exe" files to the release pipeline (stable and canary).'),(0,a.kt)("li",{parentName:"ul"},"Support to Microsoft Windows 11."),(0,a.kt)("li",{parentName:"ul"},"Ability to in/decrease font size using keyboard shortcut during session (ref: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/raphamorim/rio/issues/109"},"#109"),")"),(0,a.kt)("li",{parentName:"ul"},"Inverted Canary and Stable icons."),(0,a.kt)("li",{parentName:"ul"},"ANSI mouse reports (e.g: scroll and click working on VIM)."),(0,a.kt)("li",{parentName:"ul"},"Scroll and apply selection."),(0,a.kt)("li",{parentName:"ul"},"Semantic and line selection."),(0,a.kt)("li",{parentName:"ul"},"Rio is available in Homebrew casks and formulas."),(0,a.kt)("li",{parentName:"ul"},"Rio stable versions are notarized now."),(0,a.kt)("li",{parentName:"ul"},"Migration of mio, mio-extras, mio-signal-hook to Corcovado."),(0,a.kt)("li",{parentName:"ul"},'Changed default black color to "#4c4345".'),(0,a.kt)("li",{parentName:"ul"},"Fix mouse position for when selecting text.")))}d.isMDXComponent=!0},6243:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/demo-windows-11-bad66a98a794d3a573fd3456ad7c7ab5.png"}}]);