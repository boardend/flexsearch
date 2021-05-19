/**!
 * FlexSearch.js v0.7.0-beta (Light)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
(function(){'use strict';const u=/[\W_]+/;function v(a){if(a=a.toLowerCase())if(a&&this.o&&(a=y(a,this.o)),this.A&&1<a.length&&(a=y(a,this.A)),a&&(u||""===u)&&(a=a.split(u),this.filter)){var c=this.filter;const d=a.length,b=[];for(let e=0,g=0;e<d;e++){const f=a[e];f&&!c[f]&&(b[g++]=f)}a=b}return a};function z(a,c){return"undefined"!==typeof a?a:c}function A(a){const c=Array(a);for(let d=0;d<a;d++)c[d]=B();return c}function B(){return Object.create(null)}function C(a,c){return c.length-a.length};function D(a,c){const d=Object.keys(a),b=d.length,e=[];let g="",f=0;for(let h=0,k,l;h<b;h++)k=d[h],(l=a[k])?(e[f++]=new RegExp(c?"(?!\\b)"+k+"(\\b|_)":k,"g"),e[f++]=l):g+=(g?"|":"")+k;g&&(e[f++]=new RegExp(c?"(?!\\b)("+g+")(\\b|_)":"("+g+")","g"),e[f]="");return e}function y(a,c){for(let d=0,b=c.length;d<b&&(a=a.replace(c[d],c[d+1]),a);d+=2);return a};const E={},F={};function G(a,c,d,b){const e=a.length;let g=[],f=B(),h=0;b&&(b=[]);for(let k=0;k<e;k++){const l=a[k],r=l.length,n=B();let p=!k;for(let m=0;m<r;m++){const t=l[m],q=t.length;if(q){b&&(b[m]=[]);for(let w=0,H=0,x;w<q;w++)if(x=t[w],!k)n[x]=1;else if(f[x]){if(k===e-1)if(d)d--;else{if(g[h++]=x,h===c)return g}else b&&H<c&&(b[m][H++]=x),n[x]=1;p=!0}}}if(!p&&!b)return[];f=n}if(b)for(let k=b.length-1,l,r;0<=k;k--)if(r=(l=b[k])&&l.length){if(h+r>=c)return g.concat(l.slice(0,c-h));g=g.concat(l);h+=r}return g};function I(a,c){if(!(this instanceof I))return new I(a);let d;if(a){var b=a.charset;d=a.lang;"string"===typeof b&&(-1===b.indexOf(":")&&(b+=":default"),b=F[b]);"string"===typeof d&&(d=E[d])}else a={};let e,g,f,h=a.context||{};this.encode=a.encode||b&&b.encode||v;this.register=c||B();e=a.resolution||9;g=a.threshold||0;g>=e&&(g=e-1);this.i=e;this.s=g;this.F=c=b&&b.G||a.tokenize||"strict";this.m="strict"===c&&h.depth;this.v=z(h.bidirectional,!0);this.g=f="memory"===a.optimize;this.C=z(a.fastupdate,!0);
this.h=a.minlength||1;this.j=f?A(e-g):B();e=h.resolution||e;g=h.threshold||g;g>=e&&(g=e-1);this.l=e;this.D=g;this.B=f?A(e-g):B();this.u=b&&b.u||a.rtl;this.o=(c=a.matcher||d&&d.o)&&D(c,!1);this.A=(c=a.stemmer||d&&d.A)&&D(c,!0);if(a=c=a.filter||d&&d.filter){a=c;b=B();for(let k=0,l=a.length;k<l;k++)b[a[k]]=1;a=b}this.filter=a}I.prototype.append=function(a,c){return this.add(a,c,!0)};
I.prototype.add=function(a,c,d){if(this.register[a]&&!d)return this.update(a,c);if(c&&(a||0===a)){c=this.encode(c);const l=c.length;if(l){const r=this.m,n=this.i-this.s,p=B(),m=B();for(let t=0;t<l;t++){let q=c[this.u?l-1-t:t];var b=q.length;if(q&&b>=this.h&&(r||!p[q])){var e=Math.min(this.i/l*t|0,t);if(e<n){var g="";switch(this.F){case "full":if(3<b){for(var f=0;f<b;f++){var h=f?Math.min(e/2+this.i/b*f/2|0,e+f):e;if(h<n)for(var k=b;k>f;k--)g=q.substring(f,k),g.length>=this.h&&J(this,p,g,h,a,d)}break}case "reverse":if(2<
b){for(f=b-1;0<f;f--)g=q[f]+g,g.length>=this.h&&J(this,p,g,e,a,d);g=""}case "forward":if(1<b)for(f=0;f<b;f++)g+=q[f],g.length>=this.h&&J(this,p,g,e,a,d);break;default:if(J(this,p,q,e,a,d),r&&1<l&&t<l-1)for(b=this.l-this.D,e=B(),g=q,f=Math.min(r+1,l-t),e[g]=1,h=1;h<f;h++)if((q=c[this.u?l-1-t-h:t+h])&&q.length>=this.h&&!e[q]){if(e[q]=1,k=Math.min((this.l-f)/l*t+h|0,t+(h-1)),k<b){const w=this.v&&q>g;J(this,m,w?g:q,k,a,d,w?q:g)}}else f=Math.min(f+1,l-t)}}}}this.C||(this.register[a]=1)}}return this};
function J(a,c,d,b,e,g,f){let h=f?a.B:a.j;if(!c[d]||f&&!c[d][f])a.g&&(h=h[b]),f?(c[d]||(c[d]=B()),c[d][f]=1,h=h[f]||(h[f]=B())):c[d]=1,h=h[d]||(h[d]=[]),a.g||(h=h[b]||(h[b]=[])),g&&-1!==h.indexOf(e)||(h[h.length]=e,a.C&&(a=a.register[e]||(a.register[e]=[]),a[a.length]=h))}
I.prototype.search=function(a,c,d){"object"===typeof a?(d=a,a=d.query):"object"===typeof c&&(d=c);let b=[],e;var g=this.s;let f,h=0;if(d){c=d.limit;h=d.offset||0;g=z(d.threshold,g);var k=d.context;f=!1}if(a&&(a=this.encode(a),e=a.length,1<e)){d=B();var l=[];for(let n=0,p=0,m;n<e;n++)if((m=a[n])&&m.length>=this.h&&!d[m])if(this.g||f||this.j[m])l[p++]=m,d[m]=1;else return b;a=l;e=a.length}if(!e)return b;c||(c=100);d=this.i-g;g=this.l-g;k=this.m&&1<e&&!1!==k;l=0;let r;k?(r=a[0],l=1):1<e&&a.sort(C);for(let n,
p;l<e;l++){p=a[l];k?(n=K(this,b,f,g,c,2===e,p,r),f&&!1===n&&b.length||(r=p)):n=K(this,b,f,d,c,1===e,p);if(n)return n;if(f&&l===e-1){let m=b.length;if(!m){if(k){k=0;l=-1;continue}return b}if(1===m)return b=b[0],b=1===b.length?b[0]:[].concat.apply([],b),b.length>c?b.slice(0,c):b}}return G(b,c,h,f)};function L(a,c,d,b){d?(b=b&&c>d,a=(a=a[b?c:d])&&a[b?d:c]):a=a[c];return a}
function K(a,c,d,b,e,g,f,h){let k=[],l=h?a.B:a.j;a.g||(l=L(l,f,h,a.v));if(l){let r=0;b=Math.min(l.length,b);for(let n=0,p=0,m;n<b&&!(m=l[n],a.g&&(m=L(m,f,h,a.v)),m&&(k[r++]=m,g&&(p+=m.length,p>=e)));n++);if(r){if(g)return k=1===r?k[0]:[].concat.apply([],k),k.length>e?k.slice(0,e):k;c[c.length]=k;return}}return!d&&k}I.prototype.contain=function(a){return!!this.register[a]};I.prototype.update=function(a,c){return this.remove(a).add(a,c)};
I.prototype.remove=function(a,c){const d=this.register[a];if(d){if(this.C)for(let b=0,e;b<d.length;b++)e=d[b],e.splice(e.indexOf(a),1);else M(this.j,a,this.i-this.s,this.g),this.m&&M(this.B,a,this.l-this.D,this.g);c||delete this.register[a]}return this};
function M(a,c,d,b,e){let g=0;if(a.constructor===Array)if(e)c=a.indexOf(c),-1!==c?1<a.length&&(a.splice(c,1),g++):g++;else{e=Math.min(a.length,d);for(let f=0,h;f<e;f++)if(h=a[f])g=M(h,c,d,b,e),b||g||delete a[f]}else for(let f in a)(g=M(a[f],c,d,b,e))||delete a[f];return g};window.FlexSearch={Index:I,Document:null,registerCharset:function(a,c){F[a]=c},registerLanguage:function(a,c){E[a]=c}};}).call(this);
