"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[3089],{2727:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});n(7294);var r=n(512),a=n(2263),s=n(1667),l=n(5281),o=n(1059),i=n(5999),c=n(2244),d=n(5893);function u(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,d.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,d.jsx)(c.Z,{permalink:n,title:(0,d.jsx)(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,d.jsx)(c.Z,{permalink:r,title:(0,d.jsx)(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}var m=n(197),g=n(3548),h=n(1161);function p(e){let{items:t,component:n=h.Z}=e;return(0,d.jsx)(d.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,d.jsx)(g.n4,{content:t,children:(0,d.jsx)(n,{children:(0,d.jsx)(t,{})})},t.metadata.permalink)}))})}var x=n(5742);function j(e){const t=(0,g.CS)(e);return(0,d.jsx)(x.Z,{children:(0,d.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function f(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,a.Z)(),{blogDescription:r,blogTitle:l,permalink:o}=t,i="/"===o?n:l;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.d,{title:i,description:r}),(0,d.jsx)(m.Z,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:n,sidebar:r}=e;return(0,d.jsxs)(o.Z,{sidebar:r,children:[(0,d.jsx)(p,{items:n}),(0,d.jsx)(u,{metadata:t})]})}function v(e){return(0,d.jsxs)(s.FG,{className:(0,r.Z)(l.k.wrapper.blogPages,l.k.page.blogListPage),children:[(0,d.jsx)(f,{...e}),(0,d.jsx)(j,{...e}),(0,d.jsx)(b,{...e})]})}},1161:(e,t,n)=>{n.d(t,{Z:()=>A});n(7294);var r=n(512),a=n(3548),s=n(5893);function l(e){let{children:t,className:n}=e;return(0,s.jsx)("article",{className:n,children:t})}var o=n(3692);const i={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:l}=(0,a.nO)(),{permalink:c,title:d}=n,u=l?"h1":"h2";return(0,s.jsx)(u,{className:(0,r.Z)(i.title,t),children:l?d:(0,s.jsx)(o.Z,{to:c,children:d})})}var d=n(5999),u=n(8824),m=n(9788);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.c)();return t=>{const n=Math.ceil(t);return e(n,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,s.jsx)(s.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,s.jsx)("time",{dateTime:t,children:n})}function x(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,a.nO)(),{date:l,readingTime:o}=n,i=(0,m.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,r.Z)(g.container,"margin-vert--md",t),children:[(0,s.jsx)(p,{date:l,formattedDate:(c=l,i.format(new Date(c)))}),void 0!==o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{}),(0,s.jsx)(h,{readingTime:o})]})]});var c}var f=n(6788);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:n},assets:l}=(0,a.nO)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),i=1===n.length;return(0,s.jsx)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",o?b.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,s.jsx)("div",{className:(0,r.Z)(!o&&(i?"col col--12":"col col--6"),o?b.imageOnlyAuthorCol:b.authorCol),children:(0,s.jsx)(f.Z,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function Z(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(j,{}),(0,s.jsx)(v,{})]})}var N=n(8780),w=n(4332);function k(e){let{children:t,className:n}=e;const{isBlogPostPage:l}=(0,a.nO)();return(0,s.jsx)("div",{id:l?N.uR:void 0,className:(0,r.Z)("markdown",n),children:(0,s.jsx)(w.Z,{children:t})})}var y=n(5281),O=n(7265),P=n(6233);function T(){return(0,s.jsx)("b",{children:(0,s.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function F(e){const{blogPostTitle:t,...n}=e;return(0,s.jsx)(o.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,s.jsx)(T,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,a.nO)(),{tags:n,title:l,editUrl:o,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&i,m=n.length>0;if(!(m||u||o))return null;if(t){const e=!!(o||d||c);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,s.jsx)("div",{className:(0,r.Z)("row","margin-top--sm",y.k.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(P.Z,{tags:n})})}),e&&(0,s.jsx)(O.Z,{className:(0,r.Z)("margin-top--sm",y.k.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,s.jsx)("div",{className:(0,r.Z)("col",{"col--9":u}),children:(0,s.jsx)(P.Z,{tags:n})}),u&&(0,s.jsx)("div",{className:(0,r.Z)("col text--right",{"col--3":m}),children:(0,s.jsx)(F,{blogPostTitle:l,to:e.permalink})})]})}function A(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,a.nO)();return e?void 0:"margin-bottom--xl"}();return(0,s.jsxs)(l,{className:(0,r.Z)(o,n),children:[(0,s.jsx)(Z,{}),(0,s.jsx)(k,{children:t}),(0,s.jsx)(R,{})]})}},8824:(e,t,n)=>{n.d(t,{c:()=>c});var r=n(7294),a=n(2263);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),s=n.pluralForms.indexOf(a);return r[Math.min(s,r.length-1)]}(n,t,e)}}}}]);