"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[3731],{2240:(d,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>x});const c=JSON.parse('{"id":"escape-sequence-support","title":"Escape Sequence Support","description":"This list includes all escape sequences Rio currently supports.","source":"@site/docs/escape-sequence-support.md","sourceDirName":".","slug":"/escape-sequence-support","permalink":"/rio/zh-hans/docs/escape-sequence-support","draft":false,"unlisted":false,"editUrl":"https://github.com/raphamorim/rio/tree/main/docs/docs/escape-sequence-support.md","tags":[],"version":"current","frontMatter":{"title":"Escape Sequence Support","language":"en"},"sidebar":"tutorialSidebar","previous":{"title":"Default key bindings","permalink":"/rio/zh-hans/docs/default-key-bindings"},"next":{"title":"Features","permalink":"/rio/zh-hans/docs/features/"}}');var r=s(4848),n=s(8453);const t={title:"Escape Sequence Support",language:"en"},l=void 0,i={},x=[{value:"Legend",id:"legend",level:3},{value:"ESC codes - <code>ESC</code>",id:"esc-codes---esc",level:3},{value:"CSI (Control Sequence Introducer) - <code>ESC [</code>",id:"csi-control-sequence-introducer---esc-",level:3},{value:"OSC (Operating System Command) - <code>ESC ]</code>",id:"osc-operating-system-command---esc-",level:3},{value:"DCS (Device Control String) - <code>ESC P</code>",id:"dcs-device-control-string---esc-p",level:3}];function j(d){const e={code:"code",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...d.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"This list includes all escape sequences Rio currently supports."}),"\n",(0,r.jsx)(e.h3,{id:"legend",children:"Legend"}),"\n",(0,r.jsxs)(e.p,{children:["The available statuses are ",(0,r.jsx)(e.code,{children:"PARTIAL"}),", ",(0,r.jsx)(e.code,{children:"IMPLEMENTED"})," and ",(0,r.jsx)(e.code,{children:"REJECTED"}),". While a\nstatus of ",(0,r.jsx)(e.code,{children:"PARTIAL"})," means there is still work left to be done, a status of\n",(0,r.jsx)(e.code,{children:"IMPLEMENTED"})," for something partially implemented means all other features were\nrejected."]}),"\n",(0,r.jsxs)(e.p,{children:["All whitespace in escape sequences is solely for formatting purposes and all\nrelevant spaces are denoted as ",(0,r.jsx)(e.code,{children:"SP"}),". The escape parameters are omitted for\nbrevity."]}),"\n",(0,r.jsxs)(e.h3,{id:"esc-codes---esc",children:["ESC codes - ",(0,r.jsx)(e.code,{children:"ESC"})]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"ESCAPE"}),(0,r.jsx)(e.th,{children:"STATUS"}),(0,r.jsx)(e.th,{children:"NOTE"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC ("})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsxs)(e.td,{children:["Only charsets ",(0,r.jsx)(e.code,{children:"B"})," and ",(0,r.jsx)(e.code,{children:"0"})," are supported"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC )"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsxs)(e.td,{children:["Only charsets ",(0,r.jsx)(e.code,{children:"B"})," and ",(0,r.jsx)(e.code,{children:"0"})," are supported"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC *"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsxs)(e.td,{children:["Only charsets ",(0,r.jsx)(e.code,{children:"B"})," and ",(0,r.jsx)(e.code,{children:"0"})," are supported"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC +"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsxs)(e.td,{children:["Only charsets ",(0,r.jsx)(e.code,{children:"B"})," and ",(0,r.jsx)(e.code,{children:"0"})," are supported"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC ="})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC >"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC 7"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC 8"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC # 8"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC D"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC E"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC H"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC M"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ESC Z"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsxs)(e.h3,{id:"csi-control-sequence-introducer---esc-",children:["CSI (Control Sequence Introducer) - ",(0,r.jsx)(e.code,{children:"ESC ["})]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"ESCAPE"}),(0,r.jsx)(e.th,{children:"STATUS"}),(0,r.jsx)(e.th,{children:"NOTE"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI ` "})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI @"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI A"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI a"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI B"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI b"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI C"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI c"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI D"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI d"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI E"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI e"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI F"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI f"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI G"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI g"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI H"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI h"})}),(0,r.jsx)(e.td,{children:"PARTIAL"}),(0,r.jsxs)(e.td,{children:["Only modes ",(0,r.jsx)(e.code,{children:"4"})," and ",(0,r.jsx)(e.code,{children:"20"})," are supported"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI ? h"})}),(0,r.jsx)(e.td,{children:"PARTIAL"}),(0,r.jsx)(e.td,{children:"Supported modes:"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"1"}),", ",(0,r.jsx)(e.code,{children:"3"}),", ",(0,r.jsx)(e.code,{children:"6"}),", ",(0,r.jsx)(e.code,{children:"7"}),", ",(0,r.jsx)(e.code,{children:"12"}),", ",(0,r.jsx)(e.code,{children:"25"}),", ",(0,r.jsx)(e.code,{children:"1000"}),", ",(0,r.jsx)(e.code,{children:"1002"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"1004"}),", ",(0,r.jsx)(e.code,{children:"1005"}),", ",(0,r.jsx)(e.code,{children:"1006"}),", ",(0,r.jsx)(e.code,{children:"1007"}),", ",(0,r.jsx)(e.code,{children:"1042"}),", ",(0,r.jsx)(e.code,{children:"1049"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"2004"})," ",(0,r.jsx)(e.code,{children:"2026"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI I"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI J"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI K"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI L"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI l"})}),(0,r.jsx)(e.td,{children:"PARTIAL"}),(0,r.jsxs)(e.td,{children:["See ",(0,r.jsx)(e.code,{children:"CSI h"})," for supported modes"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI ? l"})}),(0,r.jsx)(e.td,{children:"PARTIAL"}),(0,r.jsxs)(e.td,{children:["See ",(0,r.jsx)(e.code,{children:"CSI ? h"})," for supported modes"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI M"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI m"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{children:"Supported parameters:"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"0"}),"-",(0,r.jsx)(e.code,{children:"9"}),", ",(0,r.jsx)(e.code,{children:"21"}),"-",(0,r.jsx)(e.code,{children:"25"}),", ",(0,r.jsx)(e.code,{children:"27"}),"-",(0,r.jsx)(e.code,{children:"49"}),", ",(0,r.jsx)(e.code,{children:"58"}),", ",(0,r.jsx)(e.code,{children:"59"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"90"}),"-",(0,r.jsx)(e.code,{children:"97"}),", ",(0,r.jsx)(e.code,{children:"100"}),"-",(0,r.jsx)(e.code,{children:"107"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"REJECTED"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"11"}),"-",(0,r.jsx)(e.code,{children:"19"}),", ",(0,r.jsx)(e.code,{children:"51"}),"-",(0,r.jsx)(e.code,{children:"55"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI n"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI P"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI SP q"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI r"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI S"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI s"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI T"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI t"})}),(0,r.jsx)(e.td,{children:"PARTIAL"}),(0,r.jsxs)(e.td,{children:["Only parameters ",(0,r.jsx)(e.code,{children:"14"}),", ",(0,r.jsx)(e.code,{children:"16"}),", ",(0,r.jsx)(e.code,{children:"18"}),", ",(0,r.jsx)(e.code,{children:"22"})," and ",(0,r.jsx)(e.code,{children:"23"})," are supported"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"REJECTED"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"1"}),"-",(0,r.jsx)(e.code,{children:"13"}),", ",(0,r.jsx)(e.code,{children:"15"}),", ",(0,r.jsx)(e.code,{children:"19"}),"-",(0,r.jsx)(e.code,{children:"21"}),", ",(0,r.jsx)(e.code,{children:"24"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI u"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI ? u"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI = u"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI < u"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI > u"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI X"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CSI Z"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsxs)(e.h3,{id:"osc-operating-system-command---esc-",children:["OSC (Operating System Command) - ",(0,r.jsx)(e.code,{children:"ESC ]"})]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"ESCAPE"}),(0,r.jsx)(e.th,{children:"STATUS"}),(0,r.jsx)(e.th,{children:"NOTE"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 0"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{children:"Icon names are not supported"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 1"})}),(0,r.jsx)(e.td,{children:"REJECTED"}),(0,r.jsx)(e.td,{children:"Icon names are not supported"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 2"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 4"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 8"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 10"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 11"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 12"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 50"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsxs)(e.td,{children:["Only ",(0,r.jsx)(e.code,{children:"CursorShape"})," is supported"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 52"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{children:"Only Clipboard and primary selection supported"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 104"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 110"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 111"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"OSC 112"})}),(0,r.jsx)(e.td,{children:"IMPLEMENTED"}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsxs)(e.h3,{id:"dcs-device-control-string---esc-p",children:["DCS (Device Control String) - ",(0,r.jsx)(e.code,{children:"ESC P"})]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"ESCAPE"}),(0,r.jsx)(e.th,{children:"STATUS"}),(0,r.jsx)(e.th,{children:"NOTE"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"DCS = s"})}),(0,r.jsx)(e.td,{children:"REJECTED"}),(0,r.jsx)(e.td,{children:"CSI ? 2026 h/l are used instead"})]})})]})]})}function h(d={}){const{wrapper:e}={...(0,n.R)(),...d.components};return e?(0,r.jsx)(e,{...d,children:(0,r.jsx)(j,{...d})}):j(d)}},8453:(d,e,s)=>{s.d(e,{R:()=>t,x:()=>l});var c=s(6540);const r={},n=c.createContext(r);function t(d){const e=c.useContext(n);return c.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function l(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(r):d.components||r:t(d.components),c.createElement(n.Provider,{value:e},d.children)}}}]);