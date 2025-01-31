"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[3503],{162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"features/shell-integration","title":"Shell integration","description":"Rio supports integrating with the shell through the following means:","source":"@site/docs/features/shell-integration.md","sourceDirName":"features","slug":"/features/shell-integration","permalink":"/rio/ja/docs/features/shell-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/raphamorim/rio/tree/main/docs/docs/features/shell-integration.md","tags":[],"version":"current","frontMatter":{"title":"Shell integration","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"Rio is Fast","permalink":"/rio/ja/docs/features/rio-is-fast"},"next":{"title":"Sixel protocol","permalink":"/rio/ja/docs/features/sixel-protocol"}}');var i=n(4848),o=n(8453);const s={title:"Shell integration",language:"en"},a=void 0,l={},c=[{value:"Title integration",id:"title-integration",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Rio supports integrating with the shell through the following means:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"OSC 7 Escape sequences to advise the terminal of the working directory."}),"\n",(0,i.jsx)(t.li,{children:"OSC 133 Escape sequence to define Input, Output and Prompt zones."}),"\n",(0,i.jsx)(t.li,{children:"OSC 1337 Escape sequences to set user vars for tracking additional shell state."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"OSC is escape sequence jargon for Operating System Command."}),"\n",(0,i.jsx)(t.h2,{id:"title-integration",children:"Title integration"}),"\n",(0,i.jsx)(t.p,{children:"Programs notify Rio of the current working directory and document by sending it commands. You may need to configure your shell or other programs to enable this behavior."}),"\n",(0,i.jsx)(t.p,{children:"The working directory and location of the current document may be set using the Operating System Command (OSC) escape sequence:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"ESC ] Ps ; Pt BEL\n"})}),"\n",(0,i.jsx)(t.p,{children:"The parameter Ps is either 6 (document) or 7 (working directory) and Pt is a \u201cfile:\u201d URL. The URL should include a hostname to disambiguate local and remote paths, and characters must be percent-encoded as appropriate."}),"\n",(0,i.jsx)(t.p,{children:"When both the working directory and document are set only the document is displayed."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);