function Xy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pm={exports:{}},Ia={},Am={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),Zy=Symbol.for("react.portal"),Jy=Symbol.for("react.fragment"),ev=Symbol.for("react.strict_mode"),tv=Symbol.for("react.profiler"),nv=Symbol.for("react.provider"),rv=Symbol.for("react.context"),iv=Symbol.for("react.forward_ref"),sv=Symbol.for("react.suspense"),ov=Symbol.for("react.memo"),av=Symbol.for("react.lazy"),mf=Symbol.iterator;function lv(e){return e===null||typeof e!="object"?null:(e=mf&&e[mf]||e["@@iterator"],typeof e=="function"?e:null)}var Nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm=Object.assign,Rm={};function xi(e,t,n){this.props=e,this.context=t,this.refs=Rm,this.updater=n||Nm}xi.prototype.isReactComponent={};xi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dm(){}Dm.prototype=xi.prototype;function Gu(e,t,n){this.props=e,this.context=t,this.refs=Rm,this.updater=n||Nm}var Wu=Gu.prototype=new Dm;Wu.constructor=Gu;Lm(Wu,xi.prototype);Wu.isPureReactComponent=!0;var gf=Array.isArray,Im=Object.prototype.hasOwnProperty,Qu={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function Om(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Im.call(t,r)&&!Fm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Cs,type:e,key:o,ref:a,props:i,_owner:Qu.current}}function cv(e,t){return{$$typeof:Cs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ku(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cs}function uv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xf=/\/+/g;function hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uv(""+e.key):t.toString(36)}function Ao(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Cs:case Zy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+hl(a,0):r,gf(i)?(n="",e!=null&&(n=e.replace(xf,"$&/")+"/"),Ao(i,t,n,"",function(u){return u})):i!=null&&(Ku(i)&&(i=cv(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(xf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",gf(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+hl(o,l);a+=Ao(o,t,n,c,i)}else if(c=lv(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+hl(o,l++),a+=Ao(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Os(e,t,n){if(e==null)return e;var r=[],i=0;return Ao(e,r,"","",function(o){return t.call(n,o,i++)}),r}function dv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},No={transition:null},fv={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:No,ReactCurrentOwner:Qu};function _m(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Os,forEach:function(e,t,n){Os(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Os(e,function(){t++}),t},toArray:function(e){return Os(e,function(t){return t})||[]},only:function(e){if(!Ku(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=xi;B.Fragment=Jy;B.Profiler=tv;B.PureComponent=Gu;B.StrictMode=ev;B.Suspense=sv;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;B.act=_m;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Qu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Im.call(t,c)&&!Fm.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Cs,type:e.type,key:i,ref:o,props:r,_owner:a}};B.createContext=function(e){return e={$$typeof:rv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nv,_context:e},e.Consumer=e};B.createElement=Om;B.createFactory=function(e){var t=Om.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:iv,render:e}};B.isValidElement=Ku;B.lazy=function(e){return{$$typeof:av,_payload:{_status:-1,_result:e},_init:dv}};B.memo=function(e,t){return{$$typeof:ov,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};B.unstable_act=_m;B.useCallback=function(e,t){return _e.current.useCallback(e,t)};B.useContext=function(e){return _e.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};B.useEffect=function(e,t){return _e.current.useEffect(e,t)};B.useId=function(){return _e.current.useId()};B.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return _e.current.useMemo(e,t)};B.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};B.useRef=function(e){return _e.current.useRef(e)};B.useState=function(e){return _e.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return _e.current.useTransition()};B.version="18.3.1";Am.exports=B;var C=Am.exports;const le=Tm(C),pv=Xy({__proto__:null,default:le},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv=C,mv=Symbol.for("react.element"),gv=Symbol.for("react.fragment"),xv=Object.prototype.hasOwnProperty,yv=hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vv={key:!0,ref:!0,__self:!0,__source:!0};function $m(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)xv.call(t,r)&&!vv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:mv,type:e,key:o,ref:a,props:i,_owner:yv.current}}Ia.Fragment=gv;Ia.jsx=$m;Ia.jsxs=$m;Pm.exports=Ia;var s=Pm.exports,Tc={},Mm={exports:{}},Ze={},zm={exports:{}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,R){var O=N.length;N.push(R);e:for(;0<O;){var I=O-1>>>1,$=N[I];if(0<i($,R))N[I]=R,N[O]=$,O=I;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var R=N[0],O=N.pop();if(O!==R){N[0]=O;e:for(var I=0,$=N.length,tt=$>>>1;I<tt;){var te=2*(I+1)-1,we=N[te],Z=te+1,ke=N[Z];if(0>i(we,O))Z<$&&0>i(ke,we)?(N[I]=ke,N[Z]=O,I=Z):(N[I]=we,N[te]=O,I=te);else if(Z<$&&0>i(ke,O))N[I]=ke,N[Z]=O,I=Z;else break e}}return R}function i(N,R){var O=N.sortIndex-R.sortIndex;return O!==0?O:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],f=1,d=null,m=3,x=!1,S=!1,j=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=N)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function y(N){if(j=!1,h(N),!S)if(n(c)!==null)S=!0,K(w);else{var R=n(u);R!==null&&me(y,R.startTime-N)}}function w(N,R){S=!1,j&&(j=!1,g(T),T=-1),x=!0;var O=m;try{for(h(R),d=n(c);d!==null&&(!(d.expirationTime>R)||N&&!z());){var I=d.callback;if(typeof I=="function"){d.callback=null,m=d.priorityLevel;var $=I(d.expirationTime<=R);R=e.unstable_now(),typeof $=="function"?d.callback=$:d===n(c)&&r(c),h(R)}else r(c);d=n(c)}if(d!==null)var tt=!0;else{var te=n(u);te!==null&&me(y,te.startTime-R),tt=!1}return tt}finally{d=null,m=O,x=!1}}var k=!1,b=null,T=-1,P=5,L=-1;function z(){return!(e.unstable_now()-L<P)}function G(){if(b!==null){var N=e.unstable_now();L=N;var R=!0;try{R=b(!0,N)}finally{R?de():(k=!1,b=null)}}else k=!1}var de;if(typeof p=="function")de=function(){p(G)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,et=ee.port2;ee.port1.onmessage=G,de=function(){et.postMessage(null)}}else de=function(){E(G,0)};function K(N){b=N,k||(k=!0,de())}function me(N,R){T=E(function(){N(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,K(w))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var O=m;m=R;try{return N()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=m;m=N;try{return R()}finally{m=O}},e.unstable_scheduleCallback=function(N,R,O){var I=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?I+O:I):O=I,N){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=O+$,N={id:f++,callback:R,priorityLevel:N,startTime:O,expirationTime:$,sortIndex:-1},O>I?(N.sortIndex=O,t(u,N),n(c)===null&&N===n(u)&&(j?(g(T),T=-1):j=!0,me(y,O-I))):(N.sortIndex=$,t(c,N),S||x||(S=!0,K(w))),N},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(N){var R=m;return function(){var O=m;m=R;try{return N.apply(this,arguments)}finally{m=O}}}})(Bm);zm.exports=Bm;var jv=zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv=C,qe=jv;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,ts={};function vr(e,t){ri(e,t),ri(e+"Capture",t)}function ri(e,t){for(ts[e]=t,e=0;e<t.length;e++)Vm.add(t[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=Object.prototype.hasOwnProperty,wv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},vf={};function kv(e){return Pc.call(vf,e)?!0:Pc.call(yf,e)?!1:wv.test(e)?vf[e]=!0:(yf[e]=!0,!1)}function bv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ev(e,t,n,r){if(t===null||typeof t>"u"||bv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yu=/[\-:]([a-z])/g;function qu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yu,qu);Te[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yu,qu);Te[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yu,qu);Te[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xu(e,t,n,r){var i=Te.hasOwnProperty(t)?Te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ev(t,n,i,r)&&(n=null),r||i===null?kv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var cn=Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_s=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),Fr=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),Um=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),Ju=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Lc=Symbol.for("react.suspense_list"),ed=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),Gm=Symbol.for("react.offscreen"),jf=Symbol.iterator;function ki(e){return e===null||typeof e!="object"?null:(e=jf&&e[jf]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,ml;function Fi(e){if(ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ml=t&&t[1]||""}return`
`+ml+e}var gl=!1;function xl(e,t){if(!e||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fi(e):""}function Cv(e){switch(e.tag){case 5:return Fi(e.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function Rc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fr:return"Fragment";case Ir:return"Portal";case Ac:return"Profiler";case Zu:return"StrictMode";case Nc:return"Suspense";case Lc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hm:return(e.displayName||"Context")+".Consumer";case Um:return(e._context.displayName||"Context")+".Provider";case Ju:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ed:return t=e.displayName||null,t!==null?t:Rc(e.type)||"Memo";case gn:t=e._payload,e=e._init;try{return Rc(e(t))}catch{}}return null}function Tv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rc(t);case 8:return t===Zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pv(e){var t=Wm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $s(e){e._valueTracker||(e._valueTracker=Pv(e))}function Qm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dc(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Km(e,t){t=t.checked,t!=null&&Xu(e,"checked",t,!1)}function Ic(e,t){Km(e,t);var n=_n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fc(e,t.type,_n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fc(e,t,n){(t!=="number"||Ko(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Oi=Array.isArray;function Xr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_n(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Oc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Oi(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_n(n)}}function Ym(e,t){var n=_n(t.value),r=_n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _c(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ms,Xm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ns(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Av=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(e){Av.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bi[t]=Bi[e]})});function Zm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bi.hasOwnProperty(e)&&Bi[e]?(""+t).trim():t+"px"}function Jm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Nv=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $c(e,t){if(t){if(Nv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Mc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zc=null;function td(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bc=null,Zr=null,Jr=null;function Ef(e){if(e=As(e)){if(typeof Bc!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Ma(t),Bc(e.stateNode,e.type,t))}}function eg(e){Zr?Jr?Jr.push(e):Jr=[e]:Zr=e}function tg(){if(Zr){var e=Zr,t=Jr;if(Jr=Zr=null,Ef(e),t)for(e=0;e<t.length;e++)Ef(t[e])}}function ng(e,t){return e(t)}function rg(){}var yl=!1;function ig(e,t,n){if(yl)return e(t,n);yl=!0;try{return ng(e,t,n)}finally{yl=!1,(Zr!==null||Jr!==null)&&(rg(),tg())}}function rs(e,t){var n=e.stateNode;if(n===null)return null;var r=Ma(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Vc=!1;if(rn)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{Vc=!1}function Lv(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Vi=!1,Yo=null,qo=!1,Uc=null,Rv={onError:function(e){Vi=!0,Yo=e}};function Dv(e,t,n,r,i,o,a,l,c){Vi=!1,Yo=null,Lv.apply(Rv,arguments)}function Iv(e,t,n,r,i,o,a,l,c){if(Dv.apply(this,arguments),Vi){if(Vi){var u=Yo;Vi=!1,Yo=null}else throw Error(A(198));qo||(qo=!0,Uc=u)}}function jr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cf(e){if(jr(e)!==e)throw Error(A(188))}function Fv(e){var t=e.alternate;if(!t){if(t=jr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Cf(i),e;if(o===r)return Cf(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function og(e){return e=Fv(e),e!==null?ag(e):null}function ag(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ag(e);if(t!==null)return t;e=e.sibling}return null}var lg=qe.unstable_scheduleCallback,Tf=qe.unstable_cancelCallback,Ov=qe.unstable_shouldYield,_v=qe.unstable_requestPaint,ue=qe.unstable_now,$v=qe.unstable_getCurrentPriorityLevel,nd=qe.unstable_ImmediatePriority,cg=qe.unstable_UserBlockingPriority,Xo=qe.unstable_NormalPriority,Mv=qe.unstable_LowPriority,ug=qe.unstable_IdlePriority,Fa=null,Vt=null;function zv(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Fa,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Uv,Bv=Math.log,Vv=Math.LN2;function Uv(e){return e>>>=0,e===0?32:31-(Bv(e)/Vv|0)|0}var zs=64,Bs=4194304;function _i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=_i(l):(o&=a,o!==0&&(r=_i(o)))}else a=n&~i,a!==0?r=_i(a):o!==0&&(r=_i(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Hv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Nt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Hv(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Hc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dg(){var e=zs;return zs<<=1,!(zs&4194240)&&(zs=64),e}function vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ts(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function Wv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function rd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function fg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pg,id,hg,mg,gg,Gc=!1,Vs=[],bn=null,En=null,Cn=null,is=new Map,ss=new Map,vn=[],Qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(e,t){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":is.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(t.pointerId)}}function Ei(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=As(t),t!==null&&id(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kv(e,t,n,r,i){switch(t){case"focusin":return bn=Ei(bn,e,t,n,r,i),!0;case"dragenter":return En=Ei(En,e,t,n,r,i),!0;case"mouseover":return Cn=Ei(Cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return is.set(o,Ei(is.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ss.set(o,Ei(ss.get(o)||null,e,t,n,r,i)),!0}return!1}function xg(e){var t=ir(e.target);if(t!==null){var n=jr(t);if(n!==null){if(t=n.tag,t===13){if(t=sg(n),t!==null){e.blockedOn=t,gg(e.priority,function(){hg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zc=r,n.target.dispatchEvent(r),zc=null}else return t=As(n),t!==null&&id(t),e.blockedOn=n,!1;t.shift()}return!0}function Af(e,t,n){Lo(e)&&n.delete(t)}function Yv(){Gc=!1,bn!==null&&Lo(bn)&&(bn=null),En!==null&&Lo(En)&&(En=null),Cn!==null&&Lo(Cn)&&(Cn=null),is.forEach(Af),ss.forEach(Af)}function Ci(e,t){e.blockedOn===t&&(e.blockedOn=null,Gc||(Gc=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Yv)))}function os(e){function t(i){return Ci(i,e)}if(0<Vs.length){Ci(Vs[0],e);for(var n=1;n<Vs.length;n++){var r=Vs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&Ci(bn,e),En!==null&&Ci(En,e),Cn!==null&&Ci(Cn,e),is.forEach(t),ss.forEach(t),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)xg(n),n.blockedOn===null&&vn.shift()}var ei=cn.ReactCurrentBatchConfig,Jo=!0;function qv(e,t,n,r){var i=H,o=ei.transition;ei.transition=null;try{H=1,sd(e,t,n,r)}finally{H=i,ei.transition=o}}function Xv(e,t,n,r){var i=H,o=ei.transition;ei.transition=null;try{H=4,sd(e,t,n,r)}finally{H=i,ei.transition=o}}function sd(e,t,n,r){if(Jo){var i=Wc(e,t,n,r);if(i===null)Al(e,t,r,ea,n),Pf(e,r);else if(Kv(i,e,t,n,r))r.stopPropagation();else if(Pf(e,r),t&4&&-1<Qv.indexOf(e)){for(;i!==null;){var o=As(i);if(o!==null&&pg(o),o=Wc(e,t,n,r),o===null&&Al(e,t,r,ea,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Al(e,t,r,null,n)}}var ea=null;function Wc(e,t,n,r){if(ea=null,e=td(r),e=ir(e),e!==null)if(t=jr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ea=e,null}function yg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($v()){case nd:return 1;case cg:return 4;case Xo:case Mv:return 16;case ug:return 536870912;default:return 16}default:return 16}}var Sn=null,od=null,Ro=null;function vg(){if(Ro)return Ro;var e,t=od,n=t.length,r,i="value"in Sn?Sn.value:Sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ro=i.slice(e,1<r?1-r:void 0)}function Do(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Us(){return!0}function Nf(){return!1}function Je(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Us:Nf,this.isPropagationStopped=Nf,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Us)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Us)},persist:function(){},isPersistent:Us}),t}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ad=Je(yi),Ps=se({},yi,{view:0,detail:0}),Zv=Je(Ps),jl,Sl,Ti,Oa=se({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ld,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ti&&(Ti&&e.type==="mousemove"?(jl=e.screenX-Ti.screenX,Sl=e.screenY-Ti.screenY):Sl=jl=0,Ti=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),Lf=Je(Oa),Jv=se({},Oa,{dataTransfer:0}),e1=Je(Jv),t1=se({},Ps,{relatedTarget:0}),wl=Je(t1),n1=se({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),r1=Je(n1),i1=se({},yi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s1=Je(i1),o1=se({},yi,{data:0}),Rf=Je(o1),a1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c1[e])?!!t[e]:!1}function ld(){return u1}var d1=se({},Ps,{key:function(e){if(e.key){var t=a1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ld,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f1=Je(d1),p1=se({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Df=Je(p1),h1=se({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ld}),m1=Je(h1),g1=se({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),x1=Je(g1),y1=se({},Oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),v1=Je(y1),j1=[9,13,27,32],cd=rn&&"CompositionEvent"in window,Ui=null;rn&&"documentMode"in document&&(Ui=document.documentMode);var S1=rn&&"TextEvent"in window&&!Ui,jg=rn&&(!cd||Ui&&8<Ui&&11>=Ui),If=String.fromCharCode(32),Ff=!1;function Sg(e,t){switch(e){case"keyup":return j1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function w1(e,t){switch(e){case"compositionend":return wg(t);case"keypress":return t.which!==32?null:(Ff=!0,If);case"textInput":return e=t.data,e===If&&Ff?null:e;default:return null}}function k1(e,t){if(Or)return e==="compositionend"||!cd&&Sg(e,t)?(e=vg(),Ro=od=Sn=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jg&&t.locale!=="ko"?null:t.data;default:return null}}var b1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!b1[e.type]:t==="textarea"}function kg(e,t,n,r){eg(r),t=ta(t,"onChange"),0<t.length&&(n=new ad("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hi=null,as=null;function E1(e){Ig(e,0)}function _a(e){var t=Mr(e);if(Qm(t))return e}function C1(e,t){if(e==="change")return t}var bg=!1;if(rn){var kl;if(rn){var bl="oninput"in document;if(!bl){var _f=document.createElement("div");_f.setAttribute("oninput","return;"),bl=typeof _f.oninput=="function"}kl=bl}else kl=!1;bg=kl&&(!document.documentMode||9<document.documentMode)}function $f(){Hi&&(Hi.detachEvent("onpropertychange",Eg),as=Hi=null)}function Eg(e){if(e.propertyName==="value"&&_a(as)){var t=[];kg(t,as,e,td(e)),ig(E1,t)}}function T1(e,t,n){e==="focusin"?($f(),Hi=t,as=n,Hi.attachEvent("onpropertychange",Eg)):e==="focusout"&&$f()}function P1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _a(as)}function A1(e,t){if(e==="click")return _a(t)}function N1(e,t){if(e==="input"||e==="change")return _a(t)}function L1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:L1;function ls(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pc.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function Mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,t){var n=Mf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mf(n)}}function Cg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tg(){for(var e=window,t=Ko();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ko(e.document)}return t}function ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function R1(e){var t=Tg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cg(n.ownerDocument.documentElement,n)){if(r!==null&&ud(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zf(n,o);var a=zf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var D1=rn&&"documentMode"in document&&11>=document.documentMode,_r=null,Qc=null,Gi=null,Kc=!1;function Bf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kc||_r==null||_r!==Ko(r)||(r=_r,"selectionStart"in r&&ud(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gi&&ls(Gi,r)||(Gi=r,r=ta(Qc,"onSelect"),0<r.length&&(t=new ad("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_r)))}function Hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $r={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionend:Hs("Transition","TransitionEnd")},El={},Pg={};rn&&(Pg=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function $a(e){if(El[e])return El[e];if(!$r[e])return e;var t=$r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pg)return El[e]=t[n];return e}var Ag=$a("animationend"),Ng=$a("animationiteration"),Lg=$a("animationstart"),Rg=$a("transitionend"),Dg=new Map,Vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){Dg.set(e,t),vr(t,[e])}for(var Cl=0;Cl<Vf.length;Cl++){var Tl=Vf[Cl],I1=Tl.toLowerCase(),F1=Tl[0].toUpperCase()+Tl.slice(1);Bn(I1,"on"+F1)}Bn(Ag,"onAnimationEnd");Bn(Ng,"onAnimationIteration");Bn(Lg,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(Rg,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O1=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function Uf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Iv(r,t,void 0,e),e.currentTarget=null}function Ig(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Uf(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Uf(i,l,u),o=c}}}if(qo)throw e=Uc,qo=!1,Uc=null,e}function Y(e,t){var n=t[Jc];n===void 0&&(n=t[Jc]=new Set);var r=e+"__bubble";n.has(r)||(Fg(t,e,2,!1),n.add(r))}function Pl(e,t,n){var r=0;t&&(r|=4),Fg(n,e,r,t)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function cs(e){if(!e[Gs]){e[Gs]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(O1.has(n)||Pl(n,!1,e),Pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gs]||(t[Gs]=!0,Pl("selectionchange",!1,t))}}function Fg(e,t,n,r){switch(yg(t)){case 1:var i=qv;break;case 4:i=Xv;break;default:i=sd}n=i.bind(null,t,n,e),i=void 0,!Vc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Al(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=ir(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ig(function(){var u=o,f=td(n),d=[];e:{var m=Dg.get(e);if(m!==void 0){var x=ad,S=e;switch(e){case"keypress":if(Do(n)===0)break e;case"keydown":case"keyup":x=f1;break;case"focusin":S="focus",x=wl;break;case"focusout":S="blur",x=wl;break;case"beforeblur":case"afterblur":x=wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=e1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=m1;break;case Ag:case Ng:case Lg:x=r1;break;case Rg:x=x1;break;case"scroll":x=Zv;break;case"wheel":x=v1;break;case"copy":case"cut":case"paste":x=s1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Df}var j=(t&4)!==0,E=!j&&e==="scroll",g=j?m!==null?m+"Capture":null:m;j=[];for(var p=u,h;p!==null;){h=p;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,g!==null&&(y=rs(p,g),y!=null&&j.push(us(p,y,h)))),E)break;p=p.return}0<j.length&&(m=new x(m,S,null,n,f),d.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==zc&&(S=n.relatedTarget||n.fromElement)&&(ir(S)||S[sn]))break e;if((x||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=u,S=S?ir(S):null,S!==null&&(E=jr(S),S!==E||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=u),x!==S)){if(j=Lf,y="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(j=Df,y="onPointerLeave",g="onPointerEnter",p="pointer"),E=x==null?m:Mr(x),h=S==null?m:Mr(S),m=new j(y,p+"leave",x,n,f),m.target=E,m.relatedTarget=h,y=null,ir(f)===u&&(j=new j(g,p+"enter",S,n,f),j.target=h,j.relatedTarget=E,y=j),E=y,x&&S)t:{for(j=x,g=S,p=0,h=j;h;h=kr(h))p++;for(h=0,y=g;y;y=kr(y))h++;for(;0<p-h;)j=kr(j),p--;for(;0<h-p;)g=kr(g),h--;for(;p--;){if(j===g||g!==null&&j===g.alternate)break t;j=kr(j),g=kr(g)}j=null}else j=null;x!==null&&Hf(d,m,x,j,!1),S!==null&&E!==null&&Hf(d,E,S,j,!0)}}e:{if(m=u?Mr(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var w=C1;else if(Of(m))if(bg)w=N1;else{w=P1;var k=T1}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=A1);if(w&&(w=w(e,u))){kg(d,w,n,f);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&Fc(m,"number",m.value)}switch(k=u?Mr(u):window,e){case"focusin":(Of(k)||k.contentEditable==="true")&&(_r=k,Qc=u,Gi=null);break;case"focusout":Gi=Qc=_r=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Bf(d,n,f);break;case"selectionchange":if(D1)break;case"keydown":case"keyup":Bf(d,n,f)}var b;if(cd)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Or?Sg(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(jg&&n.locale!=="ko"&&(Or||T!=="onCompositionStart"?T==="onCompositionEnd"&&Or&&(b=vg()):(Sn=f,od="value"in Sn?Sn.value:Sn.textContent,Or=!0)),k=ta(u,T),0<k.length&&(T=new Rf(T,e,null,n,f),d.push({event:T,listeners:k}),b?T.data=b:(b=wg(n),b!==null&&(T.data=b)))),(b=S1?w1(e,n):k1(e,n))&&(u=ta(u,"onBeforeInput"),0<u.length&&(f=new Rf("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=b))}Ig(d,t)})}function us(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=rs(e,n),o!=null&&r.unshift(us(e,o,i)),o=rs(e,t),o!=null&&r.push(us(e,o,i))),e=e.return}return r}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=rs(n,o),c!=null&&a.unshift(us(n,c,l))):i||(c=rs(n,o),c!=null&&a.push(us(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var _1=/\r\n?/g,$1=/\u0000|\uFFFD/g;function Gf(e){return(typeof e=="string"?e:""+e).replace(_1,`
`).replace($1,"")}function Ws(e,t,n){if(t=Gf(t),Gf(e)!==t&&n)throw Error(A(425))}function na(){}var Yc=null,qc=null;function Xc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zc=typeof setTimeout=="function"?setTimeout:void 0,M1=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,z1=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(e){return Wf.resolve(null).then(e).catch(B1)}:Zc;function B1(e){setTimeout(function(){throw e})}function Nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),os(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);os(t)}function Tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vi=Math.random().toString(36).slice(2),Bt="__reactFiber$"+vi,ds="__reactProps$"+vi,sn="__reactContainer$"+vi,Jc="__reactEvents$"+vi,V1="__reactListeners$"+vi,U1="__reactHandles$"+vi;function ir(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sn]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qf(e);e!==null;){if(n=e[Bt])return n;e=Qf(e)}return t}e=n,n=e.parentNode}return null}function As(e){return e=e[Bt]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Ma(e){return e[ds]||null}var eu=[],zr=-1;function Vn(e){return{current:e}}function X(e){0>zr||(e.current=eu[zr],eu[zr]=null,zr--)}function W(e,t){zr++,eu[zr]=e.current,e.current=t}var $n={},Re=Vn($n),Ve=Vn(!1),fr=$n;function ii(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function ra(){X(Ve),X(Re)}function Kf(e,t,n){if(Re.current!==$n)throw Error(A(168));W(Re,t),W(Ve,n)}function Og(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,Tv(e)||"Unknown",i));return se({},n,r)}function ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,fr=Re.current,W(Re,e),W(Ve,Ve.current),!0}function Yf(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Og(e,t,fr),r.__reactInternalMemoizedMergedChildContext=e,X(Ve),X(Re),W(Re,e)):X(Ve),W(Ve,n)}var qt=null,za=!1,Ll=!1;function _g(e){qt===null?qt=[e]:qt.push(e)}function H1(e){za=!0,_g(e)}function Un(){if(!Ll&&qt!==null){Ll=!0;var e=0,t=H;try{var n=qt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,za=!1}catch(i){throw qt!==null&&(qt=qt.slice(e+1)),lg(nd,Un),i}finally{H=t,Ll=!1}}return null}var Br=[],Vr=0,sa=null,oa=0,gt=[],xt=0,pr=null,Xt=1,Zt="";function Jn(e,t){Br[Vr++]=oa,Br[Vr++]=sa,sa=e,oa=t}function $g(e,t,n){gt[xt++]=Xt,gt[xt++]=Zt,gt[xt++]=pr,pr=e;var r=Xt;e=Zt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var o=32-Nt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Xt=1<<32-Nt(t)+i|n<<i|r,Zt=o+e}else Xt=1<<o|n<<i|r,Zt=e}function dd(e){e.return!==null&&(Jn(e,1),$g(e,1,0))}function fd(e){for(;e===sa;)sa=Br[--Vr],Br[Vr]=null,oa=Br[--Vr],Br[Vr]=null;for(;e===pr;)pr=gt[--xt],gt[xt]=null,Zt=gt[--xt],gt[xt]=null,Xt=gt[--xt],gt[xt]=null}var Ye=null,Ke=null,J=!1,At=null;function Mg(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Ke=Tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pr!==null?{id:Xt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Ke=null,!0):!1;default:return!1}}function tu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nu(e){if(J){var t=Ke;if(t){var n=t;if(!qf(e,t)){if(tu(e))throw Error(A(418));t=Tn(n.nextSibling);var r=Ye;t&&qf(e,t)?Mg(r,n):(e.flags=e.flags&-4097|2,J=!1,Ye=e)}}else{if(tu(e))throw Error(A(418));e.flags=e.flags&-4097|2,J=!1,Ye=e}}}function Xf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function Qs(e){if(e!==Ye)return!1;if(!J)return Xf(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xc(e.type,e.memoizedProps)),t&&(t=Ke)){if(tu(e))throw zg(),Error(A(418));for(;t;)Mg(e,t),t=Tn(t.nextSibling)}if(Xf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=Tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Ye?Tn(e.stateNode.nextSibling):null;return!0}function zg(){for(var e=Ke;e;)e=Tn(e.nextSibling)}function si(){Ke=Ye=null,J=!1}function pd(e){At===null?At=[e]:At.push(e)}var G1=cn.ReactCurrentBatchConfig;function Pi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Ks(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zf(e){var t=e._init;return t(e._payload)}function Bg(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Ln(g,p),g.index=0,g.sibling=null,g}function o(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,p,h,y){return p===null||p.tag!==6?(p=$l(h,g.mode,y),p.return=g,p):(p=i(p,h),p.return=g,p)}function c(g,p,h,y){var w=h.type;return w===Fr?f(g,p,h.props.children,y,h.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===gn&&Zf(w)===p.type)?(y=i(p,h.props),y.ref=Pi(g,p,h),y.return=g,y):(y=zo(h.type,h.key,h.props,null,g.mode,y),y.ref=Pi(g,p,h),y.return=g,y)}function u(g,p,h,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Ml(h,g.mode,y),p.return=g,p):(p=i(p,h.children||[]),p.return=g,p)}function f(g,p,h,y,w){return p===null||p.tag!==7?(p=ur(h,g.mode,y,w),p.return=g,p):(p=i(p,h),p.return=g,p)}function d(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$l(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _s:return h=zo(p.type,p.key,p.props,null,g.mode,h),h.ref=Pi(g,null,p),h.return=g,h;case Ir:return p=Ml(p,g.mode,h),p.return=g,p;case gn:var y=p._init;return d(g,y(p._payload),h)}if(Oi(p)||ki(p))return p=ur(p,g.mode,h,null),p.return=g,p;Ks(g,p)}return null}function m(g,p,h,y){var w=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:l(g,p,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case _s:return h.key===w?c(g,p,h,y):null;case Ir:return h.key===w?u(g,p,h,y):null;case gn:return w=h._init,m(g,p,w(h._payload),y)}if(Oi(h)||ki(h))return w!==null?null:f(g,p,h,y,null);Ks(g,h)}return null}function x(g,p,h,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(h)||null,l(p,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _s:return g=g.get(y.key===null?h:y.key)||null,c(p,g,y,w);case Ir:return g=g.get(y.key===null?h:y.key)||null,u(p,g,y,w);case gn:var k=y._init;return x(g,p,h,k(y._payload),w)}if(Oi(y)||ki(y))return g=g.get(h)||null,f(p,g,y,w,null);Ks(p,y)}return null}function S(g,p,h,y){for(var w=null,k=null,b=p,T=p=0,P=null;b!==null&&T<h.length;T++){b.index>T?(P=b,b=null):P=b.sibling;var L=m(g,b,h[T],y);if(L===null){b===null&&(b=P);break}e&&b&&L.alternate===null&&t(g,b),p=o(L,p,T),k===null?w=L:k.sibling=L,k=L,b=P}if(T===h.length)return n(g,b),J&&Jn(g,T),w;if(b===null){for(;T<h.length;T++)b=d(g,h[T],y),b!==null&&(p=o(b,p,T),k===null?w=b:k.sibling=b,k=b);return J&&Jn(g,T),w}for(b=r(g,b);T<h.length;T++)P=x(b,g,T,h[T],y),P!==null&&(e&&P.alternate!==null&&b.delete(P.key===null?T:P.key),p=o(P,p,T),k===null?w=P:k.sibling=P,k=P);return e&&b.forEach(function(z){return t(g,z)}),J&&Jn(g,T),w}function j(g,p,h,y){var w=ki(h);if(typeof w!="function")throw Error(A(150));if(h=w.call(h),h==null)throw Error(A(151));for(var k=w=null,b=p,T=p=0,P=null,L=h.next();b!==null&&!L.done;T++,L=h.next()){b.index>T?(P=b,b=null):P=b.sibling;var z=m(g,b,L.value,y);if(z===null){b===null&&(b=P);break}e&&b&&z.alternate===null&&t(g,b),p=o(z,p,T),k===null?w=z:k.sibling=z,k=z,b=P}if(L.done)return n(g,b),J&&Jn(g,T),w;if(b===null){for(;!L.done;T++,L=h.next())L=d(g,L.value,y),L!==null&&(p=o(L,p,T),k===null?w=L:k.sibling=L,k=L);return J&&Jn(g,T),w}for(b=r(g,b);!L.done;T++,L=h.next())L=x(b,g,T,L.value,y),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?T:L.key),p=o(L,p,T),k===null?w=L:k.sibling=L,k=L);return e&&b.forEach(function(G){return t(g,G)}),J&&Jn(g,T),w}function E(g,p,h,y){if(typeof h=="object"&&h!==null&&h.type===Fr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case _s:e:{for(var w=h.key,k=p;k!==null;){if(k.key===w){if(w=h.type,w===Fr){if(k.tag===7){n(g,k.sibling),p=i(k,h.props.children),p.return=g,g=p;break e}}else if(k.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===gn&&Zf(w)===k.type){n(g,k.sibling),p=i(k,h.props),p.ref=Pi(g,k,h),p.return=g,g=p;break e}n(g,k);break}else t(g,k);k=k.sibling}h.type===Fr?(p=ur(h.props.children,g.mode,y,h.key),p.return=g,g=p):(y=zo(h.type,h.key,h.props,null,g.mode,y),y.ref=Pi(g,p,h),y.return=g,g=y)}return a(g);case Ir:e:{for(k=h.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(g,p.sibling),p=i(p,h.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Ml(h,g.mode,y),p.return=g,g=p}return a(g);case gn:return k=h._init,E(g,p,k(h._payload),y)}if(Oi(h))return S(g,p,h,y);if(ki(h))return j(g,p,h,y);Ks(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,h),p.return=g,g=p):(n(g,p),p=$l(h,g.mode,y),p.return=g,g=p),a(g)):n(g,p)}return E}var oi=Bg(!0),Vg=Bg(!1),aa=Vn(null),la=null,Ur=null,hd=null;function md(){hd=Ur=la=null}function gd(e){var t=aa.current;X(aa),e._currentValue=t}function ru(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ti(e,t){la=e,hd=Ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(hd!==e)if(e={context:e,memoizedValue:t,next:null},Ur===null){if(la===null)throw Error(A(308));Ur=e,la.dependencies={lanes:0,firstContext:e}}else Ur=Ur.next=e;return t}var sr=null;function xd(e){sr===null?sr=[e]:sr.push(e)}function Ug(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xd(t)):(n.next=i.next,i.next=n),t.interleaved=n,on(e,r)}function on(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function yd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,on(e,n)}return i=r.interleaved,i===null?(t.next=t,xd(r)):(t.next=i.next,i.next=t),r.interleaved=t,on(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rd(e,n)}}function Jf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ca(e,t,n,r){var i=e.updateQueue;xn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(o!==null){var d=i.baseState;a=0,f=u=c=null,l=o;do{var m=l.lane,x=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,j=l;switch(m=t,x=n,j.tag){case 1:if(S=j.payload,typeof S=="function"){d=S.call(x,d,m);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=j.payload,m=typeof S=="function"?S.call(x,d,m):S,m==null)break e;d=se({},d,m);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=x,c=d):f=f.next=x,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(c=d),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);mr|=a,e.lanes=a,e.memoizedState=d}}function ep(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Ns={},Ut=Vn(Ns),fs=Vn(Ns),ps=Vn(Ns);function or(e){if(e===Ns)throw Error(A(174));return e}function vd(e,t){switch(W(ps,t),W(fs,e),W(Ut,Ns),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_c(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_c(t,e)}X(Ut),W(Ut,t)}function ai(){X(Ut),X(fs),X(ps)}function Gg(e){or(ps.current);var t=or(Ut.current),n=_c(t,e.type);t!==n&&(W(fs,e),W(Ut,n))}function jd(e){fs.current===e&&(X(Ut),X(fs))}var ne=Vn(0);function ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rl=[];function Sd(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var Fo=cn.ReactCurrentDispatcher,Dl=cn.ReactCurrentBatchConfig,hr=0,ie=null,ge=null,ye=null,da=!1,Wi=!1,hs=0,W1=0;function Pe(){throw Error(A(321))}function wd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function kd(e,t,n,r,i,o){if(hr=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?q1:X1,e=n(r,i),Wi){o=0;do{if(Wi=!1,hs=0,25<=o)throw Error(A(301));o+=1,ye=ge=null,t.updateQueue=null,Fo.current=Z1,e=n(r,i)}while(Wi)}if(Fo.current=fa,t=ge!==null&&ge.next!==null,hr=0,ye=ge=ie=null,da=!1,t)throw Error(A(300));return e}function bd(){var e=hs!==0;return hs=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ie.memoizedState=ye=e:ye=ye.next=e,ye}function St(){if(ge===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ye===null?ie.memoizedState:ye.next;if(t!==null)ye=t,ge=e;else{if(e===null)throw Error(A(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ye===null?ie.memoizedState=ye=e:ye=ye.next=e}return ye}function ms(e,t){return typeof t=="function"?t(e):t}function Il(e){var t=St(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var f=u.lane;if((hr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=d,a=r):c=c.next=d,ie.lanes|=f,mr|=f}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Dt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,mr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fl(e){var t=St(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Dt(o,t.memoizedState)||(Be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wg(){}function Qg(e,t){var n=ie,r=St(),i=t(),o=!Dt(r.memoizedState,i);if(o&&(r.memoizedState=i,Be=!0),r=r.queue,Ed(qg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,gs(9,Yg.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(A(349));hr&30||Kg(n,t,i)}return i}function Kg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yg(e,t,n,r){t.value=n,t.getSnapshot=r,Xg(t)&&Zg(e)}function qg(e,t,n){return n(function(){Xg(t)&&Zg(e)})}function Xg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Zg(e){var t=on(e,1);t!==null&&Lt(t,e,1,-1)}function tp(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:e},t.queue=e,e=e.dispatch=Y1.bind(null,ie,e),[t.memoizedState,e]}function gs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jg(){return St().memoizedState}function Oo(e,t,n,r){var i=Mt();ie.flags|=e,i.memoizedState=gs(1|t,n,void 0,r===void 0?null:r)}function Ba(e,t,n,r){var i=St();r=r===void 0?null:r;var o=void 0;if(ge!==null){var a=ge.memoizedState;if(o=a.destroy,r!==null&&wd(r,a.deps)){i.memoizedState=gs(t,n,o,r);return}}ie.flags|=e,i.memoizedState=gs(1|t,n,o,r)}function np(e,t){return Oo(8390656,8,e,t)}function Ed(e,t){return Ba(2048,8,e,t)}function ex(e,t){return Ba(4,2,e,t)}function tx(e,t){return Ba(4,4,e,t)}function nx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rx(e,t,n){return n=n!=null?n.concat([e]):null,Ba(4,4,nx.bind(null,t,e),n)}function Cd(){}function ix(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sx(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ox(e,t,n){return hr&21?(Dt(n,t)||(n=dg(),ie.lanes|=n,mr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function Q1(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),t()}finally{H=n,Dl.transition=r}}function ax(){return St().memoizedState}function K1(e,t,n){var r=Nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lx(e))cx(t,n);else if(n=Ug(e,t,n,r),n!==null){var i=Oe();Lt(n,e,r,i),ux(n,t,r)}}function Y1(e,t,n){var r=Nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lx(e))cx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Dt(l,a)){var c=t.interleaved;c===null?(i.next=i,xd(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Ug(e,t,i,r),n!==null&&(i=Oe(),Lt(n,e,r,i),ux(n,t,r))}}function lx(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function cx(e,t){Wi=da=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ux(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rd(e,n)}}var fa={readContext:jt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},q1={readContext:jt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:np,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4194308,4,nx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=K1.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:tp,useDebugValue:Cd,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=tp(!1),t=e[0];return e=Q1.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=Mt();if(J){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Se===null)throw Error(A(349));hr&30||Kg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,np(qg.bind(null,r,o,e),[e]),r.flags|=2048,gs(9,Yg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Se.identifierPrefix;if(J){var n=Zt,r=Xt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=W1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},X1={readContext:jt,useCallback:ix,useContext:jt,useEffect:Ed,useImperativeHandle:rx,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:Il,useRef:Jg,useState:function(){return Il(ms)},useDebugValue:Cd,useDeferredValue:function(e){var t=St();return ox(t,ge.memoizedState,e)},useTransition:function(){var e=Il(ms)[0],t=St().memoizedState;return[e,t]},useMutableSource:Wg,useSyncExternalStore:Qg,useId:ax,unstable_isNewReconciler:!1},Z1={readContext:jt,useCallback:ix,useContext:jt,useEffect:Ed,useImperativeHandle:rx,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:Fl,useRef:Jg,useState:function(){return Fl(ms)},useDebugValue:Cd,useDeferredValue:function(e){var t=St();return ge===null?t.memoizedState=e:ox(t,ge.memoizedState,e)},useTransition:function(){var e=Fl(ms)[0],t=St().memoizedState;return[e,t]},useMutableSource:Wg,useSyncExternalStore:Qg,useId:ax,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Va={isMounted:function(e){return(e=e._reactInternals)?jr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=Nn(e),o=en(r,i);o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(Lt(t,e,i,r),Io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=Nn(e),o=en(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(Lt(t,e,i,r),Io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=Nn(e),i=en(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pn(e,i,r),t!==null&&(Lt(t,e,r,n),Io(t,e,r))}};function rp(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ls(n,r)||!ls(i,o):!0}function dx(e,t,n){var r=!1,i=$n,o=t.contextType;return typeof o=="object"&&o!==null?o=jt(o):(i=Ue(t)?fr:Re.current,r=t.contextTypes,o=(r=r!=null)?ii(e,i):$n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Va,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ip(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Va.enqueueReplaceState(t,t.state,null)}function su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},yd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=jt(o):(o=Ue(t)?fr:Re.current,i.context=ii(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(iu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Va.enqueueReplaceState(i,i.state,null),ca(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function li(e,t){try{var n="",r=t;do n+=Cv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ou(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var J1=typeof WeakMap=="function"?WeakMap:Map;function fx(e,t,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ha||(ha=!0,gu=r),ou(e,t)},n}function px(e,t,n){n=en(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ou(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ou(e,t),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function sp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new J1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=pj.bind(null,e,t,n),t.then(e,e))}function op(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ap(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=en(-1,1),t.tag=2,Pn(n,t,1))),n.lanes|=1),e)}var ej=cn.ReactCurrentOwner,Be=!1;function Fe(e,t,n,r){t.child=e===null?Vg(t,null,n,r):oi(t,e.child,n,r)}function lp(e,t,n,r,i){n=n.render;var o=t.ref;return ti(t,i),r=kd(e,t,n,r,o,i),n=bd(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(J&&n&&dd(t),t.flags|=1,Fe(e,t,r,i),t.child)}function cp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Id(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,hx(e,t,o,r,i)):(e=zo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ls,n(a,r)&&e.ref===t.ref)return an(e,t,i)}return t.flags|=1,e=Ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function hx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ls(o,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,an(e,t,i)}return au(e,t,n,r,i)}function mx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Gr,Qe),Qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Gr,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Gr,Qe),Qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Gr,Qe),Qe|=r;return Fe(e,t,i,n),t.child}function gx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function au(e,t,n,r,i){var o=Ue(n)?fr:Re.current;return o=ii(t,o),ti(t,i),n=kd(e,t,n,r,o,i),r=bd(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(J&&r&&dd(t),t.flags|=1,Fe(e,t,n,i),t.child)}function up(e,t,n,r,i){if(Ue(n)){var o=!0;ia(t)}else o=!1;if(ti(t,i),t.stateNode===null)_o(e,t),dx(t,n,r),su(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=Ue(n)?fr:Re.current,u=ii(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&ip(t,a,r,u),xn=!1;var m=t.memoizedState;a.state=m,ca(t,r,a,i),c=t.memoizedState,l!==r||m!==c||Ve.current||xn?(typeof f=="function"&&(iu(t,n,f,r),c=t.memoizedState),(l=xn||rp(t,n,l,r,m,c,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Hg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Tt(t.type,l),a.props=u,d=t.pendingProps,m=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=jt(c):(c=Ue(n)?fr:Re.current,c=ii(t,c));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||m!==c)&&ip(t,a,r,c),xn=!1,m=t.memoizedState,a.state=m,ca(t,r,a,i);var S=t.memoizedState;l!==d||m!==S||Ve.current||xn?(typeof x=="function"&&(iu(t,n,x,r),S=t.memoizedState),(u=xn||rp(t,n,u,r,m,S,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return lu(e,t,n,r,o,i)}function lu(e,t,n,r,i,o){gx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Yf(t,n,!1),an(e,t,o);r=t.stateNode,ej.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=oi(t,e.child,null,o),t.child=oi(t,null,l,o)):Fe(e,t,l,o),t.memoizedState=r.state,i&&Yf(t,n,!0),t.child}function xx(e){var t=e.stateNode;t.pendingContext?Kf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kf(e,t.context,!1),vd(e,t.containerInfo)}function dp(e,t,n,r,i){return si(),pd(i),t.flags|=256,Fe(e,t,n,r),t.child}var cu={dehydrated:null,treeContext:null,retryLane:0};function uu(e){return{baseLanes:e,cachePool:null,transitions:null}}function yx(e,t,n){var r=t.pendingProps,i=ne.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(ne,i&1),e===null)return nu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ga(a,r,0,null),e=ur(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=uu(n),t.memoizedState=cu,e):Td(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return tj(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ln(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Ln(l,o):(o=ur(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?uu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=cu,r}return o=e.child,e=o.sibling,r=Ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Td(e,t){return t=Ga({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ys(e,t,n,r){return r!==null&&pd(r),oi(t,e.child,null,n),e=Td(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tj(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ol(Error(A(422))),Ys(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ga({mode:"visible",children:r.children},i,0,null),o=ur(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&oi(t,e.child,null,a),t.child.memoizedState=uu(a),t.memoizedState=cu,o);if(!(t.mode&1))return Ys(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(A(419)),r=Ol(o,r,void 0),Ys(e,t,a,r)}if(l=(a&e.childLanes)!==0,Be||l){if(r=Se,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,on(e,i),Lt(r,e,i,-1))}return Dd(),r=Ol(Error(A(421))),Ys(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hj.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ke=Tn(i.nextSibling),Ye=t,J=!0,At=null,e!==null&&(gt[xt++]=Xt,gt[xt++]=Zt,gt[xt++]=pr,Xt=e.id,Zt=e.overflow,pr=t),t=Td(t,r.children),t.flags|=4096,t)}function fp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ru(e.return,t,n)}function _l(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Fe(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fp(e,n,t);else if(e.tag===19)fp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ua(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_l(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ua(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_l(t,!0,n,null,o);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nj(e,t,n){switch(t.tag){case 3:xx(t),si();break;case 5:Gg(t);break;case 1:Ue(t.type)&&ia(t);break;case 4:vd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(aa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?yx(e,t,n):(W(ne,ne.current&1),e=an(e,t,n),e!==null?e.sibling:null);W(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,mx(e,t,n)}return an(e,t,n)}var jx,du,Sx,wx;jx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};du=function(){};Sx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,or(Ut.current);var o=null;switch(n){case"input":i=Dc(e,i),r=Dc(e,r),o=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),o=[];break;case"textarea":i=Oc(e,i),r=Oc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=na)}$c(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ts.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ts.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};wx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ai(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rj(e,t,n){var r=t.pendingProps;switch(fd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ue(t.type)&&ra(),Ae(t),null;case 3:return r=t.stateNode,ai(),X(Ve),X(Re),Sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,At!==null&&(vu(At),At=null))),du(e,t),Ae(t),null;case 5:jd(t);var i=or(ps.current);if(n=t.type,e!==null&&t.stateNode!=null)Sx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ae(t),null}if(e=or(Ut.current),Qs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Bt]=t,r[ds]=o,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<$i.length;i++)Y($i[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Sf(r,o),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Y("invalid",r);break;case"textarea":kf(r,o),Y("invalid",r)}$c(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ws(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ws(r.textContent,l,e),i=["children",""+l]):ts.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Y("scroll",r)}switch(n){case"input":$s(r),wf(r,o,!0);break;case"textarea":$s(r),bf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=na)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Bt]=t,e[ds]=r,jx(e,t,!1,!1),t.stateNode=e;e:{switch(a=Mc(n,r),n){case"dialog":Y("cancel",e),Y("close",e),i=r;break;case"iframe":case"object":case"embed":Y("load",e),i=r;break;case"video":case"audio":for(i=0;i<$i.length;i++)Y($i[i],e);i=r;break;case"source":Y("error",e),i=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=r;break;case"details":Y("toggle",e),i=r;break;case"input":Sf(e,r),i=Dc(e,r),Y("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Y("invalid",e);break;case"textarea":kf(e,r),i=Oc(e,r),Y("invalid",e);break;default:i=r}$c(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Jm(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Xm(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ns(e,c):typeof c=="number"&&ns(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ts.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Y("scroll",e):c!=null&&Xu(e,o,c,a))}switch(n){case"input":$s(e),wf(e,r,!1);break;case"textarea":$s(e),bf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_n(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Xr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Xr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=na)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)wx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=or(ps.current),or(Ut.current),Qs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(o=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:Ws(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ws(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return Ae(t),null;case 13:if(X(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Ke!==null&&t.mode&1&&!(t.flags&128))zg(),si(),t.flags|=98560,o=!1;else if(o=Qs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Bt]=t}else si(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else At!==null&&(vu(At),At=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?xe===0&&(xe=3):Dd())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return ai(),du(e,t),e===null&&cs(t.stateNode.containerInfo),Ae(t),null;case 10:return gd(t.type._context),Ae(t),null;case 17:return Ue(t.type)&&ra(),Ae(t),null;case 19:if(X(ne),o=t.memoizedState,o===null)return Ae(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ai(o,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ua(e),a!==null){for(t.flags|=128,Ai(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>ci&&(t.flags|=128,r=!0,Ai(o,!1),t.lanes=4194304)}else{if(!r)if(e=ua(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ai(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!J)return Ae(t),null}else 2*ue()-o.renderingStartTime>ci&&n!==1073741824&&(t.flags|=128,r=!0,Ai(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=ne.current,W(ne,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Rd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function ij(e,t){switch(fd(t),t.tag){case 1:return Ue(t.type)&&ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ai(),X(Ve),X(Re),Sd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jd(t),null;case 13:if(X(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));si()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ne),null;case 4:return ai(),null;case 10:return gd(t.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var qs=!1,Le=!1,sj=typeof WeakSet=="function"?WeakSet:Set,D=null;function Hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function fu(e,t,n){try{n()}catch(r){oe(e,t,r)}}var pp=!1;function oj(e,t){if(Yc=Jo,e=Tg(),ud(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var x;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(c=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(x=d.firstChild)!==null;)m=d,d=x;for(;;){if(d===e)break t;if(m===n&&++u===i&&(l=a),m===o&&++f===r&&(c=a),(x=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qc={focusedElem:e,selectionRange:n},Jo=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var j=S.memoizedProps,E=S.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?j:Tt(t.type,j),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(y){oe(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return S=pp,pp=!1,S}function Qi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&fu(t,n,o)}i=i.next}while(i!==r)}}function Ua(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kx(e){var t=e.alternate;t!==null&&(e.alternate=null,kx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[ds],delete t[Jc],delete t[V1],delete t[U1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bx(e){return e.tag===5||e.tag===3||e.tag===4}function hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=na));else if(r!==4&&(e=e.child,e!==null))for(hu(e,t,n),e=e.sibling;e!==null;)hu(e,t,n),e=e.sibling}function mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mu(e,t,n),e=e.sibling;e!==null;)mu(e,t,n),e=e.sibling}var Ee=null,Pt=!1;function un(e,t,n){for(n=n.child;n!==null;)Ex(e,t,n),n=n.sibling}function Ex(e,t,n){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Fa,n)}catch{}switch(n.tag){case 5:Le||Hr(n,t);case 6:var r=Ee,i=Pt;Ee=null,un(e,t,n),Ee=r,Pt=i,Ee!==null&&(Pt?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(Pt?(e=Ee,n=n.stateNode,e.nodeType===8?Nl(e.parentNode,n):e.nodeType===1&&Nl(e,n),os(e)):Nl(Ee,n.stateNode));break;case 4:r=Ee,i=Pt,Ee=n.stateNode.containerInfo,Pt=!0,un(e,t,n),Ee=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&fu(n,t,a),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!Le&&(Hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){oe(n,t,l)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,un(e,t,n),Le=r):un(e,t,n);break;default:un(e,t,n)}}function mp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sj),t.forEach(function(r){var i=mj.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ee=l.stateNode,Pt=!1;break e;case 3:Ee=l.stateNode.containerInfo,Pt=!0;break e;case 4:Ee=l.stateNode.containerInfo,Pt=!0;break e}l=l.return}if(Ee===null)throw Error(A(160));Ex(o,a,i),Ee=null,Pt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cx(t,e),t=t.sibling}function Cx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),It(e),r&4){try{Qi(3,e,e.return),Ua(3,e)}catch(j){oe(e,e.return,j)}try{Qi(5,e,e.return)}catch(j){oe(e,e.return,j)}}break;case 1:Et(t,e),It(e),r&512&&n!==null&&Hr(n,n.return);break;case 5:if(Et(t,e),It(e),r&512&&n!==null&&Hr(n,n.return),e.flags&32){var i=e.stateNode;try{ns(i,"")}catch(j){oe(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Km(i,o),Mc(l,a);var u=Mc(l,o);for(a=0;a<c.length;a+=2){var f=c[a],d=c[a+1];f==="style"?Jm(i,d):f==="dangerouslySetInnerHTML"?Xm(i,d):f==="children"?ns(i,d):Xu(i,f,d,u)}switch(l){case"input":Ic(i,o);break;case"textarea":Ym(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Xr(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Xr(i,!!o.multiple,o.defaultValue,!0):Xr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ds]=o}catch(j){oe(e,e.return,j)}}break;case 6:if(Et(t,e),It(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){oe(e,e.return,j)}}break;case 3:if(Et(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{os(t.containerInfo)}catch(j){oe(e,e.return,j)}break;case 4:Et(t,e),It(e);break;case 13:Et(t,e),It(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Nd=ue())),r&4&&mp(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(u=Le)||f,Et(t,e),Le=u):Et(t,e),It(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(D=e,f=e.child;f!==null;){for(d=D=f;D!==null;){switch(m=D,x=m.child,m.tag){case 0:case 11:case 14:case 15:Qi(4,m,m.return);break;case 1:Hr(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(j){oe(r,n,j)}}break;case 5:Hr(m,m.return);break;case 22:if(m.memoizedState!==null){xp(d);continue}}x!==null?(x.return=m,D=x):xp(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,c=d.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Zm("display",a))}catch(j){oe(e,e.return,j)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(j){oe(e,e.return,j)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Et(t,e),It(e),r&4&&mp(e);break;case 21:break;default:Et(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bx(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ns(i,""),r.flags&=-33);var o=hp(e);mu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=hp(e);hu(e,l,a);break;default:throw Error(A(161))}}catch(c){oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function aj(e,t,n){D=e,Tx(e)}function Tx(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||qs;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Le;l=qs;var u=Le;if(qs=a,(Le=c)&&!u)for(D=i;D!==null;)a=D,c=a.child,a.tag===22&&a.memoizedState!==null?yp(i):c!==null?(c.return=a,D=c):yp(i);for(;o!==null;)D=o,Tx(o),o=o.sibling;D=i,qs=l,Le=u}gp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):gp(e)}}function gp(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Ua(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ep(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ep(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&os(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Le||t.flags&512&&pu(t)}catch(m){oe(t,t.return,m)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function xp(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function yp(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ua(4,t)}catch(c){oe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){oe(t,i,c)}}var o=t.return;try{pu(t)}catch(c){oe(t,o,c)}break;case 5:var a=t.return;try{pu(t)}catch(c){oe(t,a,c)}}}catch(c){oe(t,t.return,c)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var lj=Math.ceil,pa=cn.ReactCurrentDispatcher,Pd=cn.ReactCurrentOwner,vt=cn.ReactCurrentBatchConfig,V=0,Se=null,he=null,Ce=0,Qe=0,Gr=Vn(0),xe=0,xs=null,mr=0,Ha=0,Ad=0,Ki=null,ze=null,Nd=0,ci=1/0,Kt=null,ha=!1,gu=null,An=null,Xs=!1,wn=null,ma=0,Yi=0,xu=null,$o=-1,Mo=0;function Oe(){return V&6?ue():$o!==-1?$o:$o=ue()}function Nn(e){return e.mode&1?V&2&&Ce!==0?Ce&-Ce:G1.transition!==null?(Mo===0&&(Mo=dg()),Mo):(e=H,e!==0||(e=window.event,e=e===void 0?16:yg(e.type)),e):1}function Lt(e,t,n,r){if(50<Yi)throw Yi=0,xu=null,Error(A(185));Ts(e,n,r),(!(V&2)||e!==Se)&&(e===Se&&(!(V&2)&&(Ha|=n),xe===4&&jn(e,Ce)),He(e,r),n===1&&V===0&&!(t.mode&1)&&(ci=ue()+500,za&&Un()))}function He(e,t){var n=e.callbackNode;Gv(e,t);var r=Zo(e,e===Se?Ce:0);if(r===0)n!==null&&Tf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tf(n),t===1)e.tag===0?H1(vp.bind(null,e)):_g(vp.bind(null,e)),z1(function(){!(V&6)&&Un()}),n=null;else{switch(fg(r)){case 1:n=nd;break;case 4:n=cg;break;case 16:n=Xo;break;case 536870912:n=ug;break;default:n=Xo}n=Fx(n,Px.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Px(e,t){if($o=-1,Mo=0,V&6)throw Error(A(327));var n=e.callbackNode;if(ni()&&e.callbackNode!==n)return null;var r=Zo(e,e===Se?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var i=V;V|=2;var o=Nx();(Se!==e||Ce!==t)&&(Kt=null,ci=ue()+500,cr(e,t));do try{dj();break}catch(l){Ax(e,l)}while(1);md(),pa.current=o,V=i,he!==null?t=0:(Se=null,Ce=0,t=xe)}if(t!==0){if(t===2&&(i=Hc(e),i!==0&&(r=i,t=yu(e,i))),t===1)throw n=xs,cr(e,0),jn(e,r),He(e,ue()),n;if(t===6)jn(e,r);else{if(i=e.current.alternate,!(r&30)&&!cj(i)&&(t=ga(e,r),t===2&&(o=Hc(e),o!==0&&(r=o,t=yu(e,o))),t===1))throw n=xs,cr(e,0),jn(e,r),He(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:er(e,ze,Kt);break;case 3:if(jn(e,r),(r&130023424)===r&&(t=Nd+500-ue(),10<t)){if(Zo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zc(er.bind(null,e,ze,Kt),t);break}er(e,ze,Kt);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Nt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lj(r/1960))-r,10<r){e.timeoutHandle=Zc(er.bind(null,e,ze,Kt),r);break}er(e,ze,Kt);break;case 5:er(e,ze,Kt);break;default:throw Error(A(329))}}}return He(e,ue()),e.callbackNode===n?Px.bind(null,e):null}function yu(e,t){var n=Ki;return e.current.memoizedState.isDehydrated&&(cr(e,t).flags|=256),e=ga(e,t),e!==2&&(t=ze,ze=n,t!==null&&vu(t)),e}function vu(e){ze===null?ze=e:ze.push.apply(ze,e)}function cj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~Ad,t&=~Ha,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function vp(e){if(V&6)throw Error(A(327));ni();var t=Zo(e,0);if(!(t&1))return He(e,ue()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=Hc(e);r!==0&&(t=r,n=yu(e,r))}if(n===1)throw n=xs,cr(e,0),jn(e,t),He(e,ue()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,ze,Kt),He(e,ue()),null}function Ld(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(ci=ue()+500,za&&Un())}}function gr(e){wn!==null&&wn.tag===0&&!(V&6)&&ni();var t=V;V|=1;var n=vt.transition,r=H;try{if(vt.transition=null,H=1,e)return e()}finally{H=r,vt.transition=n,V=t,!(V&6)&&Un()}}function Rd(){Qe=Gr.current,X(Gr)}function cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,M1(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(fd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ra();break;case 3:ai(),X(Ve),X(Re),Sd();break;case 5:jd(r);break;case 4:ai();break;case 13:X(ne);break;case 19:X(ne);break;case 10:gd(r.type._context);break;case 22:case 23:Rd()}n=n.return}if(Se=e,he=e=Ln(e.current,null),Ce=Qe=t,xe=0,xs=null,Ad=Ha=mr=0,ze=Ki=null,sr!==null){for(t=0;t<sr.length;t++)if(n=sr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}sr=null}return e}function Ax(e,t){do{var n=he;try{if(md(),Fo.current=fa,da){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}da=!1}if(hr=0,ye=ge=ie=null,Wi=!1,hs=0,Pd.current=null,n===null||n.return===null){xe=1,xs=t,he=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Ce,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=op(a);if(x!==null){x.flags&=-257,ap(x,a,l,o,t),x.mode&1&&sp(o,u,t),t=x,c=u;var S=t.updateQueue;if(S===null){var j=new Set;j.add(c),t.updateQueue=j}else S.add(c);break e}else{if(!(t&1)){sp(o,u,t),Dd();break e}c=Error(A(426))}}else if(J&&l.mode&1){var E=op(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ap(E,a,l,o,t),pd(li(c,l));break e}}o=c=li(c,l),xe!==4&&(xe=2),Ki===null?Ki=[o]:Ki.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=fx(o,c,t);Jf(o,g);break e;case 1:l=c;var p=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(An===null||!An.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=px(o,l,t);Jf(o,y);break e}}o=o.return}while(o!==null)}Rx(n)}catch(w){t=w,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function Nx(){var e=pa.current;return pa.current=fa,e===null?fa:e}function Dd(){(xe===0||xe===3||xe===2)&&(xe=4),Se===null||!(mr&268435455)&&!(Ha&268435455)||jn(Se,Ce)}function ga(e,t){var n=V;V|=2;var r=Nx();(Se!==e||Ce!==t)&&(Kt=null,cr(e,t));do try{uj();break}catch(i){Ax(e,i)}while(1);if(md(),V=n,pa.current=r,he!==null)throw Error(A(261));return Se=null,Ce=0,xe}function uj(){for(;he!==null;)Lx(he)}function dj(){for(;he!==null&&!Ov();)Lx(he)}function Lx(e){var t=Ix(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Rx(e):he=t,Pd.current=null}function Rx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ij(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,he=null;return}}else if(n=rj(n,t,Qe),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);xe===0&&(xe=5)}function er(e,t,n){var r=H,i=vt.transition;try{vt.transition=null,H=1,fj(e,t,n,r)}finally{vt.transition=i,H=r}return null}function fj(e,t,n,r){do ni();while(wn!==null);if(V&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Wv(e,o),e===Se&&(he=Se=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xs||(Xs=!0,Fx(Xo,function(){return ni(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=vt.transition,vt.transition=null;var a=H;H=1;var l=V;V|=4,Pd.current=null,oj(e,n),Cx(n,e),R1(qc),Jo=!!Yc,qc=Yc=null,e.current=n,aj(n),_v(),V=l,H=a,vt.transition=o}else e.current=n;if(Xs&&(Xs=!1,wn=e,ma=i),o=e.pendingLanes,o===0&&(An=null),zv(n.stateNode),He(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ha)throw ha=!1,e=gu,gu=null,e;return ma&1&&e.tag!==0&&ni(),o=e.pendingLanes,o&1?e===xu?Yi++:(Yi=0,xu=e):Yi=0,Un(),null}function ni(){if(wn!==null){var e=fg(ma),t=vt.transition,n=H;try{if(vt.transition=null,H=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,ma=0,V&6)throw Error(A(331));var i=V;for(V|=4,D=e.current;D!==null;){var o=D,a=o.child;if(D.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(D=u;D!==null;){var f=D;switch(f.tag){case 0:case 11:case 15:Qi(8,f,o)}var d=f.child;if(d!==null)d.return=f,D=d;else for(;D!==null;){f=D;var m=f.sibling,x=f.return;if(kx(f),f===u){D=null;break}if(m!==null){m.return=x,D=m;break}D=x}}}var S=o.alternate;if(S!==null){var j=S.child;if(j!==null){S.child=null;do{var E=j.sibling;j.sibling=null,j=E}while(j!==null)}}D=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,D=a;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,D=g;break e}D=o.return}}var p=e.current;for(D=p;D!==null;){a=D;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,D=h;else e:for(a=p;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ua(9,l)}}catch(w){oe(l,l.return,w)}if(l===a){D=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,D=y;break e}D=l.return}}if(V=i,Un(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Fa,e)}catch{}r=!0}return r}finally{H=n,vt.transition=t}}return!1}function jp(e,t,n){t=li(n,t),t=fx(e,t,1),e=Pn(e,t,1),t=Oe(),e!==null&&(Ts(e,1,t),He(e,t))}function oe(e,t,n){if(e.tag===3)jp(e,e,n);else for(;t!==null;){if(t.tag===3){jp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){e=li(n,e),e=px(t,e,1),t=Pn(t,e,1),e=Oe(),t!==null&&(Ts(t,1,e),He(t,e));break}}t=t.return}}function pj(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Ce&n)===n&&(xe===4||xe===3&&(Ce&130023424)===Ce&&500>ue()-Nd?cr(e,0):Ad|=n),He(e,t)}function Dx(e,t){t===0&&(e.mode&1?(t=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):t=1);var n=Oe();e=on(e,t),e!==null&&(Ts(e,t,n),He(e,n))}function hj(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dx(e,n)}function mj(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Dx(e,n)}var Ix;Ix=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,nj(e,t,n);Be=!!(e.flags&131072)}else Be=!1,J&&t.flags&1048576&&$g(t,oa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_o(e,t),e=t.pendingProps;var i=ii(t,Re.current);ti(t,n),i=kd(null,t,r,e,i,n);var o=bd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(o=!0,ia(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yd(t),i.updater=Va,t.stateNode=i,i._reactInternals=t,su(t,r,e,n),t=lu(null,t,r,!0,o,n)):(t.tag=0,J&&o&&dd(t),Fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_o(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xj(r),e=Tt(r,e),i){case 0:t=au(null,t,r,e,n);break e;case 1:t=up(null,t,r,e,n);break e;case 11:t=lp(null,t,r,e,n);break e;case 14:t=cp(null,t,r,Tt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),au(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),up(e,t,r,i,n);case 3:e:{if(xx(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Hg(e,t),ca(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=li(Error(A(423)),t),t=dp(e,t,r,n,i);break e}else if(r!==i){i=li(Error(A(424)),t),t=dp(e,t,r,n,i);break e}else for(Ke=Tn(t.stateNode.containerInfo.firstChild),Ye=t,J=!0,At=null,n=Vg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(si(),r===i){t=an(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Gg(t),e===null&&nu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Xc(r,i)?a=null:o!==null&&Xc(r,o)&&(t.flags|=32),gx(e,t),Fe(e,t,a,n),t.child;case 6:return e===null&&nu(t),null;case 13:return yx(e,t,n);case 4:return vd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=oi(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),lp(e,t,r,i,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,W(aa,r._currentValue),r._currentValue=a,o!==null)if(Dt(o.value,a)){if(o.children===i.children&&!Ve.current){t=an(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=en(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ru(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(A(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ru(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ti(t,n),i=jt(i),r=r(i),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,i=Tt(r,t.pendingProps),i=Tt(r.type,i),cp(e,t,r,i,n);case 15:return hx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),_o(e,t),t.tag=1,Ue(r)?(e=!0,ia(t)):e=!1,ti(t,n),dx(t,r,i),su(t,r,i,n),lu(null,t,r,!0,e,n);case 19:return vx(e,t,n);case 22:return mx(e,t,n)}throw Error(A(156,t.tag))};function Fx(e,t){return lg(e,t)}function gj(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new gj(e,t,n,r)}function Id(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xj(e){if(typeof e=="function")return Id(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ju)return 11;if(e===ed)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Id(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Fr:return ur(n.children,i,o,t);case Zu:a=8,i|=8;break;case Ac:return e=yt(12,n,t,i|2),e.elementType=Ac,e.lanes=o,e;case Nc:return e=yt(13,n,t,i),e.elementType=Nc,e.lanes=o,e;case Lc:return e=yt(19,n,t,i),e.elementType=Lc,e.lanes=o,e;case Gm:return Ga(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Um:a=10;break e;case Hm:a=9;break e;case Ju:a=11;break e;case ed:a=14;break e;case gn:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=yt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ur(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Ga(e,t,n,r){return e=yt(22,e,r,t),e.elementType=Gm,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Ml(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yj(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fd(e,t,n,r,i,o,a,l,c){return e=new yj(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=yt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yd(o),e}function vj(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ox(e){if(!e)return $n;e=e._reactInternals;e:{if(jr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Og(e,n,t)}return t}function _x(e,t,n,r,i,o,a,l,c){return e=Fd(n,r,!0,e,i,o,a,l,c),e.context=Ox(null),n=e.current,r=Oe(),i=Nn(n),o=en(r,i),o.callback=t??null,Pn(n,o,i),e.current.lanes=i,Ts(e,i,r),He(e,r),e}function Wa(e,t,n,r){var i=t.current,o=Oe(),a=Nn(i);return n=Ox(n),t.context===null?t.context=n:t.pendingContext=n,t=en(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pn(i,t,a),e!==null&&(Lt(e,i,a,o),Io(e,i,a)),a}function xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Od(e,t){Sp(e,t),(e=e.alternate)&&Sp(e,t)}function jj(){return null}var $x=typeof reportError=="function"?reportError:function(e){console.error(e)};function _d(e){this._internalRoot=e}Qa.prototype.render=_d.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Wa(e,t,null,null)};Qa.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gr(function(){Wa(null,e,null,null)}),t[sn]=null}};function Qa(e){this._internalRoot=e}Qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=mg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&xg(e)}};function $d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wp(){}function Sj(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=xa(a);o.call(u)}}var a=_x(t,r,e,0,null,!1,!1,"",wp);return e._reactRootContainer=a,e[sn]=a.current,cs(e.nodeType===8?e.parentNode:e),gr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=xa(c);l.call(u)}}var c=Fd(e,0,!1,null,null,!1,!1,"",wp);return e._reactRootContainer=c,e[sn]=c.current,cs(e.nodeType===8?e.parentNode:e),gr(function(){Wa(t,c,n,r)}),c}function Ya(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=xa(a);l.call(c)}}Wa(t,a,e,i)}else a=Sj(n,t,e,i,r);return xa(a)}pg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_i(t.pendingLanes);n!==0&&(rd(t,n|1),He(t,ue()),!(V&6)&&(ci=ue()+500,Un()))}break;case 13:gr(function(){var r=on(e,1);if(r!==null){var i=Oe();Lt(r,e,1,i)}}),Od(e,1)}};id=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var n=Oe();Lt(t,e,134217728,n)}Od(e,134217728)}};hg=function(e){if(e.tag===13){var t=Nn(e),n=on(e,t);if(n!==null){var r=Oe();Lt(n,e,t,r)}Od(e,t)}};mg=function(){return H};gg=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Bc=function(e,t,n){switch(t){case"input":if(Ic(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ma(r);if(!i)throw Error(A(90));Qm(r),Ic(r,i)}}}break;case"textarea":Ym(e,n);break;case"select":t=n.value,t!=null&&Xr(e,!!n.multiple,t,!1)}};ng=Ld;rg=gr;var wj={usingClientEntryPoint:!1,Events:[As,Mr,Ma,eg,tg,Ld]},Ni={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kj={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=og(e),e===null?null:e.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||jj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{Fa=Zs.inject(kj),Vt=Zs}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wj;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(t))throw Error(A(200));return vj(e,t,null,n)};Ze.createRoot=function(e,t){if(!$d(e))throw Error(A(299));var n=!1,r="",i=$x;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fd(e,1,!1,null,null,n,!1,r,i),e[sn]=t.current,cs(e.nodeType===8?e.parentNode:e),new _d(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=og(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return gr(e)};Ze.hydrate=function(e,t,n){if(!Ka(t))throw Error(A(200));return Ya(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!$d(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=$x;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=_x(t,null,e,1,n??null,i,!1,o,a),e[sn]=t.current,cs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qa(t)};Ze.render=function(e,t,n){if(!Ka(t))throw Error(A(200));return Ya(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!Ka(e))throw Error(A(40));return e._reactRootContainer?(gr(function(){Ya(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};Ze.unstable_batchedUpdates=Ld;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ka(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Ya(e,t,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function Mx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mx)}catch(e){console.error(e)}}Mx(),Mm.exports=Ze;var bj=Mm.exports,kp=bj;Tc.createRoot=kp.createRoot,Tc.hydrateRoot=kp.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ys.apply(this,arguments)}var kn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kn||(kn={}));const bp="popstate";function Ej(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return ju("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ya(i)}return Tj(t,n,null,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zx(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cj(){return Math.random().toString(36).substr(2,8)}function Ep(e,t){return{usr:e.state,key:e.key,idx:t}}function ju(e,t,n,r){return n===void 0&&(n=null),ys({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ji(t):t,{state:n,key:t&&t.key||r||Cj()})}function ya(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ji(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Tj(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=kn.Pop,c=null,u=f();u==null&&(u=0,a.replaceState(ys({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){l=kn.Pop;let E=f(),g=E==null?null:E-u;u=E,c&&c({action:l,location:j.location,delta:g})}function m(E,g){l=kn.Push;let p=ju(j.location,E,g);n&&n(p,E),u=f()+1;let h=Ep(p,u),y=j.createHref(p);try{a.pushState(h,"",y)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;i.location.assign(y)}o&&c&&c({action:l,location:j.location,delta:1})}function x(E,g){l=kn.Replace;let p=ju(j.location,E,g);n&&n(p,E),u=f();let h=Ep(p,u),y=j.createHref(p);a.replaceState(h,"",y),o&&c&&c({action:l,location:j.location,delta:0})}function S(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:ya(E);return p=p.replace(/ $/,"%20"),ce(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let j={get action(){return l},get location(){return e(i,a)},listen(E){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(bp,d),c=E,()=>{i.removeEventListener(bp,d),c=null}},createHref(E){return t(i,E)},createURL:S,encodeLocation(E){let g=S(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:x,go(E){return a.go(E)}};return j}var Cp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cp||(Cp={}));function Pj(e,t,n){return n===void 0&&(n="/"),Aj(e,t,n,!1)}function Aj(e,t,n,r){let i=typeof t=="string"?ji(t):t,o=ui(i.pathname||"/",n);if(o==null)return null;let a=Bx(e);Nj(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=Bj(o);l=Mj(a[c],u,r)}return l}function Bx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(ce(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Rn([r,c.relativePath]),f=n.concat(c);o.children&&o.children.length>0&&(ce(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bx(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:_j(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Vx(o.path))i(o,a,c)}),t}function Vx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Vx(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Nj(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$j(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lj=/^:[\w-]+$/,Rj=3,Dj=2,Ij=1,Fj=10,Oj=-2,Tp=e=>e==="*";function _j(e,t){let n=e.split("/"),r=n.length;return n.some(Tp)&&(r+=Oj),t&&(r+=Dj),n.filter(i=>!Tp(i)).reduce((i,o)=>i+(Lj.test(o)?Rj:o===""?Ij:Fj),r)}function $j(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Mj(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=va({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),m=c.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=va({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:Rn([o,d.pathname]),pathnameBase:Gj(Rn([o,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(o=Rn([o,d.pathnameBase]))}return a}function va(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=zj(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:x}=f;if(m==="*"){let j=l[d]||"";a=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const S=l[d];return x&&!S?u[m]=void 0:u[m]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function zj(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zx(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Bj(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zx(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ui(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Vj(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ji(e):e;return{pathname:n?n.startsWith("/")?n:Uj(n,t):t,search:Wj(r),hash:Qj(i)}}function Uj(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hj(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ux(e,t){let n=Hj(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hx(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ji(e):(i=ys({},e),ce(!i.pathname||!i.pathname.includes("?"),zl("?","pathname","search",i)),ce(!i.pathname||!i.pathname.includes("#"),zl("#","pathname","hash",i)),ce(!i.search||!i.search.includes("#"),zl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}l=d>=0?t[d]:"/"}let c=Vj(i,l),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Rn=e=>e.join("/").replace(/\/\/+/g,"/"),Gj=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wj=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qj=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Kj(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gx=["post","put","patch","delete"];new Set(Gx);const Yj=["get",...Gx];new Set(Yj);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vs.apply(this,arguments)}const qa=C.createContext(null),Wx=C.createContext(null),Hn=C.createContext(null),Xa=C.createContext(null),Gn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Qx=C.createContext(null);function qj(e,t){let{relative:n}=t===void 0?{}:t;Ls()||ce(!1);let{basename:r,navigator:i}=C.useContext(Hn),{hash:o,pathname:a,search:l}=Za(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Rn([r,a])),i.createHref({pathname:c,search:l,hash:o})}function Ls(){return C.useContext(Xa)!=null}function Si(){return Ls()||ce(!1),C.useContext(Xa).location}function Kx(e){C.useContext(Hn).static||C.useLayoutEffect(e)}function Xj(){let{isDataRoute:e}=C.useContext(Gn);return e?fS():Zj()}function Zj(){Ls()||ce(!1);let e=C.useContext(qa),{basename:t,future:n,navigator:r}=C.useContext(Hn),{matches:i}=C.useContext(Gn),{pathname:o}=Si(),a=JSON.stringify(Ux(i,n.v7_relativeSplatPath)),l=C.useRef(!1);return Kx(()=>{l.current=!0}),C.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=Hx(u,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Rn([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,a,o,e])}const Jj=C.createContext(null);function eS(e){let t=C.useContext(Gn).outlet;return t&&C.createElement(Jj.Provider,{value:e},t)}function Za(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Hn),{matches:i}=C.useContext(Gn),{pathname:o}=Si(),a=JSON.stringify(Ux(i,r.v7_relativeSplatPath));return C.useMemo(()=>Hx(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function tS(e,t){return nS(e,t)}function nS(e,t,n,r){Ls()||ce(!1);let{navigator:i,static:o}=C.useContext(Hn),{matches:a}=C.useContext(Gn),l=a[a.length-1],c=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let f=Si(),d;if(t){var m;let g=typeof t=="string"?ji(t):t;u==="/"||(m=g.pathname)!=null&&m.startsWith(u)||ce(!1),d=g}else d=f;let x=d.pathname||"/",S=x;if(u!=="/"){let g=u.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(g.length).join("/")}let j=!o&&n&&n.matches&&n.matches.length>0?n.matches:Pj(e,{pathname:S}),E=aS(j&&j.map(g=>Object.assign({},g,{params:Object.assign({},c,g.params),pathname:Rn([u,i.encodeLocation?i.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?u:Rn([u,i.encodeLocation?i.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),a,n,r);return t&&E?C.createElement(Xa.Provider,{value:{location:vs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:kn.Pop}},E):E}function rS(){let e=dS(),t=Kj(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const iS=C.createElement(rS,null);class sS extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Gn.Provider,{value:this.props.routeContext},C.createElement(Qx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oS(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(qa);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Gn.Provider,{value:t},r)}function aS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);f>=0||ce(!1),a=a.slice(0,Math.min(a.length,f+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:x}=n,S=d.route.loader&&m[d.route.id]===void 0&&(!x||x[d.route.id]===void 0);if(d.route.lazy||S){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,d,m)=>{let x,S=!1,j=null,E=null;n&&(x=l&&d.route.id?l[d.route.id]:void 0,j=d.route.errorElement||iS,c&&(u<0&&m===0?(pS("route-fallback",!1),S=!0,E=null):u===m&&(S=!0,E=d.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,m+1)),p=()=>{let h;return x?h=j:S?h=E:d.route.Component?h=C.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=f,C.createElement(oS,{match:d,routeContext:{outlet:f,matches:g,isDataRoute:n!=null},children:h})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?C.createElement(sS,{location:n.location,revalidation:n.revalidation,component:j,error:x,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Yx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yx||{}),ja=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ja||{});function lS(e){let t=C.useContext(qa);return t||ce(!1),t}function cS(e){let t=C.useContext(Wx);return t||ce(!1),t}function uS(e){let t=C.useContext(Gn);return t||ce(!1),t}function qx(e){let t=uS(),n=t.matches[t.matches.length-1];return n.route.id||ce(!1),n.route.id}function dS(){var e;let t=C.useContext(Qx),n=cS(ja.UseRouteError),r=qx(ja.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function fS(){let{router:e}=lS(Yx.UseNavigateStable),t=qx(ja.UseNavigateStable),n=C.useRef(!1);return Kx(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,vs({fromRouteId:t},o)))},[e,t])}const Pp={};function pS(e,t,n){!t&&!Pp[e]&&(Pp[e]=!0)}function hS(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function mS(e){return eS(e.context)}function $t(e){ce(!1)}function gS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=kn.Pop,navigator:o,static:a=!1,future:l}=e;Ls()&&ce(!1);let c=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:c,navigator:o,static:a,future:vs({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=ji(r));let{pathname:f="/",search:d="",hash:m="",state:x=null,key:S="default"}=r,j=C.useMemo(()=>{let E=ui(f,c);return E==null?null:{location:{pathname:E,search:d,hash:m,state:x,key:S},navigationType:i}},[c,f,d,m,x,S,i]);return j==null?null:C.createElement(Hn.Provider,{value:u},C.createElement(Xa.Provider,{children:n,value:j}))}function xS(e){let{children:t,location:n}=e;return tS(Su(t),n)}new Promise(()=>{});function Su(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Su(r.props.children,o));return}r.type!==$t&&ce(!1),!r.props.index||!r.props.children||ce(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Su(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sa(){return Sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sa.apply(this,arguments)}function Xx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function yS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vS(e,t){return e.button===0&&(!t||t==="_self")&&!yS(e)}const jS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],SS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],wS="6";try{window.__reactRouterVersion=wS}catch{}const kS=C.createContext({isTransitioning:!1}),bS="startTransition",Ap=pv[bS];function ES(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=Ej({window:i,v5Compat:!0}));let a=o.current,[l,c]=C.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=C.useCallback(d=>{u&&Ap?Ap(()=>c(d)):c(d)},[c,u]);return C.useLayoutEffect(()=>a.listen(f),[a,f]),C.useEffect(()=>hS(r),[r]),C.createElement(gS,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const CS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Md=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:f,viewTransition:d}=t,m=Xx(t,jS),{basename:x}=C.useContext(Hn),S,j=!1;if(typeof u=="string"&&TS.test(u)&&(S=u,CS))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),w=ui(y.pathname,x);y.origin===h.origin&&w!=null?u=w+y.search+y.hash:j=!0}catch{}let E=qj(u,{relative:i}),g=NS(u,{replace:a,state:l,target:c,preventScrollReset:f,relative:i,viewTransition:d});function p(h){r&&r(h),h.defaultPrevented||g(h)}return C.createElement("a",Sa({},m,{href:S||E,onClick:j||o?r:p,ref:n,target:c}))}),PS=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:c,viewTransition:u,children:f}=t,d=Xx(t,SS),m=Za(c,{relative:d.relative}),x=Si(),S=C.useContext(Wx),{navigator:j,basename:E}=C.useContext(Hn),g=S!=null&&LS(m)&&u===!0,p=j.encodeLocation?j.encodeLocation(m).pathname:m.pathname,h=x.pathname,y=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(h=h.toLowerCase(),y=y?y.toLowerCase():null,p=p.toLowerCase()),y&&E&&(y=ui(y,E)||y);const w=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let k=h===p||!a&&h.startsWith(p)&&h.charAt(w)==="/",b=y!=null&&(y===p||!a&&y.startsWith(p)&&y.charAt(p.length)==="/"),T={isActive:k,isPending:b,isTransitioning:g},P=k?r:void 0,L;typeof o=="function"?L=o(T):L=[o,k?"active":null,b?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let z=typeof l=="function"?l(T):l;return C.createElement(Md,Sa({},d,{"aria-current":P,className:L,ref:n,style:z,to:c,viewTransition:u}),typeof f=="function"?f(T):f)});var wu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wu||(wu={}));var Np;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Np||(Np={}));function AS(e){let t=C.useContext(qa);return t||ce(!1),t}function NS(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:l}=t===void 0?{}:t,c=Xj(),u=Si(),f=Za(e,{relative:a});return C.useCallback(d=>{if(vS(d,n)){d.preventDefault();let m=r!==void 0?r:ya(u)===ya(f);c(e,{replace:m,state:i,preventScrollReset:o,relative:a,viewTransition:l})}},[u,c,f,r,i,n,e,o,a,l])}function LS(e,t){t===void 0&&(t={});let n=C.useContext(kS);n==null&&ce(!1);let{basename:r}=AS(wu.useViewTransitionState),i=Za(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=ui(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=ui(n.nextLocation.pathname,r)||n.nextLocation.pathname;return va(i.pathname,a)!=null||va(i.pathname,o)!=null}var je=function(){return je=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},je.apply(this,arguments)};function js(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var q="-ms-",qi="-moz-",U="-webkit-",Zx="comm",Ja="rule",zd="decl",RS="@import",Jx="@keyframes",DS="@layer",e0=Math.abs,Bd=String.fromCharCode,ku=Object.assign;function IS(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function t0(e){return e.trim()}function Yt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Bo(e,t,n){return e.indexOf(t,n)}function ve(e,t){return e.charCodeAt(t)|0}function di(e,t,n){return e.slice(t,n)}function zt(e){return e.length}function n0(e){return e.length}function Mi(e,t){return t.push(e),e}function FS(e,t){return e.map(t).join("")}function Lp(e,t){return e.filter(function(n){return!Yt(n,t)})}var el=1,fi=1,r0=0,wt=0,pe=0,wi="";function tl(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:el,column:fi,length:a,return:"",siblings:l}}function hn(e,t){return ku(tl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function br(e){for(;e.root;)e=hn(e.root,{children:[e]});Mi(e,e.siblings)}function OS(){return pe}function _S(){return pe=wt>0?ve(wi,--wt):0,fi--,pe===10&&(fi=1,el--),pe}function Rt(){return pe=wt<r0?ve(wi,wt++):0,fi++,pe===10&&(fi=1,el++),pe}function dr(){return ve(wi,wt)}function Vo(){return wt}function nl(e,t){return di(wi,e,t)}function bu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $S(e){return el=fi=1,r0=zt(wi=e),wt=0,[]}function MS(e){return wi="",e}function Bl(e){return t0(nl(wt-1,Eu(e===91?e+2:e===40?e+1:e)))}function zS(e){for(;(pe=dr())&&pe<33;)Rt();return bu(e)>2||bu(pe)>3?"":" "}function BS(e,t){for(;--t&&Rt()&&!(pe<48||pe>102||pe>57&&pe<65||pe>70&&pe<97););return nl(e,Vo()+(t<6&&dr()==32&&Rt()==32))}function Eu(e){for(;Rt();)switch(pe){case e:return wt;case 34:case 39:e!==34&&e!==39&&Eu(pe);break;case 40:e===41&&Eu(e);break;case 92:Rt();break}return wt}function VS(e,t){for(;Rt()&&e+pe!==47+10;)if(e+pe===42+42&&dr()===47)break;return"/*"+nl(t,wt-1)+"*"+Bd(e===47?e:Rt())}function US(e){for(;!bu(dr());)Rt();return nl(e,wt)}function HS(e){return MS(Uo("",null,null,null,[""],e=$S(e),0,[0],e))}function Uo(e,t,n,r,i,o,a,l,c){for(var u=0,f=0,d=a,m=0,x=0,S=0,j=1,E=1,g=1,p=0,h="",y=i,w=o,k=r,b=h;E;)switch(S=p,p=Rt()){case 40:if(S!=108&&ve(b,d-1)==58){Bo(b+=M(Bl(p),"&","&\f"),"&\f",e0(u?l[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:b+=Bl(p);break;case 9:case 10:case 13:case 32:b+=zS(S);break;case 92:b+=BS(Vo()-1,7);continue;case 47:switch(dr()){case 42:case 47:Mi(GS(VS(Rt(),Vo()),t,n,c),c);break;default:b+="/"}break;case 123*j:l[u++]=zt(b)*g;case 125*j:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+f:g==-1&&(b=M(b,/\f/g,"")),x>0&&zt(b)-d&&Mi(x>32?Dp(b+";",r,n,d-1,c):Dp(M(b," ","")+";",r,n,d-2,c),c);break;case 59:b+=";";default:if(Mi(k=Rp(b,t,n,u,f,i,l,h,y=[],w=[],d,o),o),p===123)if(f===0)Uo(b,t,k,k,y,o,d,l,w);else switch(m===99&&ve(b,3)===110?100:m){case 100:case 108:case 109:case 115:Uo(e,k,k,r&&Mi(Rp(e,k,k,0,0,i,l,h,i,y=[],d,w),w),i,w,d,l,r?y:w);break;default:Uo(b,k,k,k,[""],w,0,l,w)}}u=f=x=0,j=g=1,h=b="",d=a;break;case 58:d=1+zt(b),x=S;default:if(j<1){if(p==123)--j;else if(p==125&&j++==0&&_S()==125)continue}switch(b+=Bd(p),p*j){case 38:g=f>0?1:(b+="\f",-1);break;case 44:l[u++]=(zt(b)-1)*g,g=1;break;case 64:dr()===45&&(b+=Bl(Rt())),m=dr(),f=d=zt(h=b+=US(Vo())),p++;break;case 45:S===45&&zt(b)==2&&(j=0)}}return o}function Rp(e,t,n,r,i,o,a,l,c,u,f,d){for(var m=i-1,x=i===0?o:[""],S=n0(x),j=0,E=0,g=0;j<r;++j)for(var p=0,h=di(e,m+1,m=e0(E=a[j])),y=e;p<S;++p)(y=t0(E>0?x[p]+" "+h:M(h,/&\f/g,x[p])))&&(c[g++]=y);return tl(e,t,n,i===0?Ja:l,c,u,f,d)}function GS(e,t,n,r){return tl(e,t,n,Zx,Bd(OS()),di(e,2,-2),0,r)}function Dp(e,t,n,r,i){return tl(e,t,n,zd,di(e,0,r),di(e,r+1,-1),r,i)}function i0(e,t,n){switch(IS(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return qi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+qi+e+q+e+e;case 5936:switch(ve(e,t+11)){case 114:return U+e+q+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+q+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+q+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+q+e+e;case 6165:return U+e+q+"flex-"+e+e;case 5187:return U+e+M(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return U+e+q+"flex-item-"+M(e,/flex-|-self/g,"")+(Yt(e,/flex-|baseline/)?"":q+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return U+e+q+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+q+M(e,"shrink","negative")+e;case 5292:return U+e+q+M(e,"basis","preferred-size")+e;case 6060:return U+"box-"+M(e,"-grow","")+U+e+q+M(e,"grow","positive")+e;case 4554:return U+M(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!Yt(e,/flex-|baseline/))return q+"grid-column-align"+di(e,t)+e;break;case 2592:case 3360:return q+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Yt(r.props,/grid-\w+-end/)})?~Bo(e+(n=n[t].value),"span",0)?e:q+M(e,"-start","")+e+q+"grid-row-span:"+(~Bo(n,"span",0)?Yt(n,/\d+/):+Yt(n,/\d+/)-+Yt(e,/\d+/))+";":q+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Yt(r.props,/grid-\w+-start/)})?e:q+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+qi+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Bo(e,"stretch",0)?i0(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,c,u){return q+i+":"+o+u+(a?q+i+"-span:"+(l?c:+c-+o)+u:"")+e});case 4949:if(ve(e,t+6)===121)return M(e,":",":"+U)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ve(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+q+"$2box$3")+e;case 100:return M(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function wa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function WS(e,t,n,r){switch(e.type){case DS:if(e.children.length)break;case RS:case zd:return e.return=e.return||e.value;case Zx:return"";case Jx:return e.return=e.value+"{"+wa(e.children,r)+"}";case Ja:if(!zt(e.value=e.props.join(",")))return""}return zt(n=wa(e.children,r))?e.return=e.value+"{"+n+"}":""}function QS(e){var t=n0(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function KS(e){return function(t){t.root||(t=t.return)&&e(t)}}function YS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case zd:e.return=i0(e.value,e.length,n);return;case Jx:return wa([hn(e,{value:M(e.value,"@","@"+U)})],r);case Ja:if(e.length)return FS(n=e.props,function(i){switch(Yt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":br(hn(e,{props:[M(i,/:(read-\w+)/,":"+qi+"$1")]})),br(hn(e,{props:[i]})),ku(e,{props:Lp(n,r)});break;case"::placeholder":br(hn(e,{props:[M(i,/:(plac\w+)/,":"+U+"input-$1")]})),br(hn(e,{props:[M(i,/:(plac\w+)/,":"+qi+"$1")]})),br(hn(e,{props:[M(i,/:(plac\w+)/,q+"input-$1")]})),br(hn(e,{props:[i]})),ku(e,{props:Lp(n,r)});break}return""})}}var qS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",s0="active",o0="data-styled-version",rl="6.1.16",Vd=`/*!sc*/
`,ka=typeof window<"u"&&"HTMLElement"in window,XS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),ZS={},il=Object.freeze([]),hi=Object.freeze({});function a0(e,t,n){return n===void 0&&(n=hi),e.theme!==n.theme&&e.theme||t||n.theme}var l0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),JS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ew=/(^-|-$)/g;function Ip(e){return e.replace(JS,"-").replace(ew,"")}var tw=/(a)(d)/gi,Js=52,Fp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cu(e){var t,n="";for(t=Math.abs(e);t>Js;t=t/Js|0)n=Fp(t%Js)+n;return(Fp(t%Js)+n).replace(tw,"$1-$2")}var Vl,c0=5381,Wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},u0=function(e){return Wr(c0,e)};function d0(e){return Cu(u0(e)>>>0)}function nw(e){return e.displayName||e.name||"Component"}function Ul(e){return typeof e=="string"&&!0}var f0=typeof Symbol=="function"&&Symbol.for,p0=f0?Symbol.for("react.memo"):60115,rw=f0?Symbol.for("react.forward_ref"):60112,iw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},h0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ow=((Vl={})[rw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vl[p0]=h0,Vl);function Op(e){return("type"in(t=e)&&t.type.$$typeof)===p0?h0:"$$typeof"in e?ow[e.$$typeof]:iw;var t}var aw=Object.defineProperty,lw=Object.getOwnPropertyNames,_p=Object.getOwnPropertySymbols,cw=Object.getOwnPropertyDescriptor,uw=Object.getPrototypeOf,$p=Object.prototype;function m0(e,t,n){if(typeof t!="string"){if($p){var r=uw(t);r&&r!==$p&&m0(e,r,n)}var i=lw(t);_p&&(i=i.concat(_p(t)));for(var o=Op(e),a=Op(t),l=0;l<i.length;++l){var c=i[l];if(!(c in sw||n&&n[c]||a&&c in a||o&&c in o)){var u=cw(t,c);try{aw(e,c,u)}catch{}}}}return e}function xr(e){return typeof e=="function"}function Ud(e){return typeof e=="object"&&"styledComponentId"in e}function ar(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Tu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ss(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Pu(e,t,n){if(n===void 0&&(n=!1),!n&&!Ss(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Pu(e[r],t[r]);else if(Ss(t))for(var r in t)e[r]=Pu(e[r],t[r]);return e}function Hd(e,t){Object.defineProperty(e,"toString",{value:t})}function yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var dw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw yr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(Vd);return n},e}(),Ho=new Map,ba=new Map,Go=1,eo=function(e){if(Ho.has(e))return Ho.get(e);for(;ba.has(Go);)Go++;var t=Go++;return Ho.set(e,t),ba.set(t,e),t},fw=function(e,t){Go=t+1,Ho.set(e,t),ba.set(t,e)},pw="style[".concat(pi,"][").concat(o0,'="').concat(rl,'"]'),hw=new RegExp("^".concat(pi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mw=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},gw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Vd),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var c=l.match(hw);if(c){var u=0|parseInt(c[1],10),f=c[2];u!==0&&(fw(f,u),mw(e,f,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Mp=function(e){for(var t=document.querySelectorAll(pw),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(pi)!==s0&&(gw(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function xw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var g0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(pi,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(pi,s0),r.setAttribute(o0,rl);var a=xw();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},yw=function(){function e(t){this.element=g0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw yr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),vw=function(){function e(t){this.element=g0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),jw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zp=ka,Sw={isServer:!ka,useCSSOMInjection:!XS},Ea=function(){function e(t,n,r){t===void 0&&(t=hi),n===void 0&&(n={});var i=this;this.options=je(je({},Sw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ka&&zp&&(zp=!1,Mp(this)),Hd(this,function(){return function(o){for(var a=o.getTag(),l=a.length,c="",u=function(d){var m=function(g){return ba.get(g)}(d);if(m===void 0)return"continue";var x=o.names.get(m),S=a.getGroup(d);if(x===void 0||!x.size||S.length===0)return"continue";var j="".concat(pi,".g").concat(d,'[id="').concat(m,'"]'),E="";x!==void 0&&x.forEach(function(g){g.length>0&&(E+="".concat(g,","))}),c+="".concat(S).concat(j,'{content:"').concat(E,'"}').concat(Vd)},f=0;f<l;f++)u(f);return c}(i)})}return e.registerId=function(t){return eo(t)},e.prototype.rehydrate=function(){!this.server&&ka&&Mp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new jw(i):r?new yw(i):new vw(i)}(this.options),new dw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(eo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(eo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(eo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ww=/&/g,kw=/^\s*\/\/.*$/gm;function x0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=x0(n.children,t)),n})}function bw(e){var t,n,r,i=e===void 0?hi:e,o=i.options,a=o===void 0?hi:o,l=i.plugins,c=l===void 0?il:l,u=function(m,x,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):m},f=c.slice();f.push(function(m){m.type===Ja&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(ww,n).replace(r,u))}),a.prefix&&f.push(YS),f.push(WS);var d=function(m,x,S,j){x===void 0&&(x=""),S===void 0&&(S=""),j===void 0&&(j="&"),t=j,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var E=m.replace(kw,""),g=HS(S||x?"".concat(S," ").concat(x," { ").concat(E," }"):E);a.namespace&&(g=x0(g,a.namespace));var p=[];return wa(g,QS(f.concat(KS(function(h){return p.push(h)})))),p};return d.hash=c.length?c.reduce(function(m,x){return x.name||yr(15),Wr(m,x.name)},c0).toString():"",d}var Ew=new Ea,Au=bw(),y0=le.createContext({shouldForwardProp:void 0,styleSheet:Ew,stylis:Au});y0.Consumer;le.createContext(void 0);function Nu(){return C.useContext(y0)}var Cw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Au);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Hd(this,function(){throw yr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Au),this.name+t.hash},e}(),Tw=function(e){return e>="A"&&e<="Z"};function Bp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Tw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var v0=function(e){return e==null||e===!1||e===""},j0=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!v0(o)&&(Array.isArray(o)&&o.isCss||xr(o)?r.push("".concat(Bp(i),":"),o,";"):Ss(o)?r.push.apply(r,js(js(["".concat(i," {")],j0(o),!1),["}"],!1)):r.push("".concat(Bp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in qS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dn(e,t,n,r){if(v0(e))return[];if(Ud(e))return[".".concat(e.styledComponentId)];if(xr(e)){if(!xr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Dn(i,t,n,r)}var o;return e instanceof Cw?n?(e.inject(n,r),[e.getName(r)]):[e]:Ss(e)?j0(e):Array.isArray(e)?Array.prototype.concat.apply(il,e.map(function(a){return Dn(a,t,n,r)})):[e.toString()]}function S0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xr(n)&&!Ud(n))return!1}return!0}var Pw=u0(rl),Aw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&S0(t),this.componentId=n,this.baseHash=Wr(Pw,n),this.baseStyle=r,Ea.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ar(i,this.staticRulesId);else{var o=Tu(Dn(this.rules,t,n,r)),a=Cu(Wr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=ar(i,a),this.staticRulesId=a}else{for(var c=Wr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")u+=d;else if(d){var m=Tu(Dn(d,t,n,r));c=Wr(c,m+f),u+=m}}if(u){var x=Cu(c>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),i=ar(i,x)}}return i},e}(),ws=le.createContext(void 0);ws.Consumer;function Nw(e){var t=le.useContext(ws),n=C.useMemo(function(){return function(r,i){if(!r)throw yr(14);if(xr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw yr(8);return i?je(je({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?le.createElement(ws.Provider,{value:n},e.children):null}var Hl={};function Lw(e,t,n){var r=Ud(e),i=e,o=!Ul(e),a=t.attrs,l=a===void 0?il:a,c=t.componentId,u=c===void 0?function(y,w){var k=typeof y!="string"?"sc":Ip(y);Hl[k]=(Hl[k]||0)+1;var b="".concat(k,"-").concat(d0(rl+k+Hl[k]));return w?"".concat(w,"-").concat(b):b}(t.displayName,t.parentComponentId):c,f=t.displayName,d=f===void 0?function(y){return Ul(y)?"styled.".concat(y):"Styled(".concat(nw(y),")")}(e):f,m=t.displayName&&t.componentId?"".concat(Ip(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,S=t.shouldForwardProp;if(r&&i.shouldForwardProp){var j=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;S=function(y,w){return j(y,w)&&E(y,w)}}else S=j}var g=new Aw(n,m,r?i.componentStyle:void 0);function p(y,w){return function(k,b,T){var P=k.attrs,L=k.componentStyle,z=k.defaultProps,G=k.foldedComponentIds,de=k.styledComponentId,ee=k.target,et=le.useContext(ws),K=Nu(),me=k.shouldForwardProp||K.shouldForwardProp,N=a0(b,et,z)||hi,R=function(we,Z,ke){for(var kt,Me=je(je({},Z),{className:void 0,theme:ke}),nt=0;nt<we.length;nt+=1){var be=xr(kt=we[nt])?kt(Me):kt;for(var bt in be)Me[bt]=bt==="className"?ar(Me[bt],be[bt]):bt==="style"?je(je({},Me[bt]),be[bt]):be[bt]}return Z.className&&(Me.className=ar(Me.className,Z.className)),Me}(P,b,N),O=R.as||ee,I={};for(var $ in R)R[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&R.theme===N||($==="forwardedAs"?I.as=R.forwardedAs:me&&!me($,O)||(I[$]=R[$]));var tt=function(we,Z){var ke=Nu(),kt=we.generateAndInjectStyles(Z,ke.styleSheet,ke.stylis);return kt}(L,R),te=ar(G,de);return tt&&(te+=" "+tt),R.className&&(te+=" "+R.className),I[Ul(O)&&!l0.has(O)?"class":"className"]=te,T&&(I.ref=T),C.createElement(O,I)}(h,y,w)}p.displayName=d;var h=le.forwardRef(p);return h.attrs=x,h.componentStyle=g,h.displayName=d,h.shouldForwardProp=S,h.foldedComponentIds=r?ar(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=m,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(w){for(var k=[],b=1;b<arguments.length;b++)k[b-1]=arguments[b];for(var T=0,P=k;T<P.length;T++)Pu(w,P[T],!0);return w}({},i.defaultProps,y):y}}),Hd(h,function(){return".".concat(h.styledComponentId)}),o&&m0(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Vp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Up=function(e){return Object.assign(e,{isCss:!0})};function w0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(xr(e)||Ss(e))return Up(Dn(Vp(il,js([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Dn(r):Up(Dn(Vp(r,t)))}function Lu(e,t,n){if(n===void 0&&(n=hi),!t)throw yr(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,w0.apply(void 0,js([i],o,!1)))};return r.attrs=function(i){return Lu(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Lu(e,t,je(je({},n),i))},r}var k0=function(e){return Lu(Lw,e)},v=k0;l0.forEach(function(e){v[e]=k0(e)});var Rw=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=S0(t),Ea.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Tu(Dn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ea.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Dw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=w0.apply(void 0,js([e],t,!1)),i="sc-global-".concat(d0(JSON.stringify(r))),o=new Rw(r,i),a=function(c){var u=Nu(),f=le.useContext(ws),d=le.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(d,c,u.styleSheet,f,u.stylis),le.useLayoutEffect(function(){if(!u.styleSheet.server)return l(d,c,u.styleSheet,f,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,c,u.styleSheet,f,u.stylis]),null};function l(c,u,f,d,m){if(o.isStatic)o.renderStyles(c,ZS,f,m);else{var x=je(je({},u),{theme:a0(u,d,a.defaultProps)});o.renderStyles(c,x,f,m)}}return le.memo(a)}const Iw=Dw`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({theme:e})=>e.background};
    color: ${({theme:e})=>e.text};
    line-height: 1.6;
    overflow-x: hidden;
    transition: background-color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: ${({theme:e})=>e.text};
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({theme:e})=>e.secondary} ${({theme:e})=>e.background};
  }

  /* For Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.background};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.secondary};
    border-radius: 20px;
    border: 2px solid ${({theme:e})=>e.background};
  }
`,Hp={primary:"#003366",secondary:"#1A1A1A",background:"#FFFFFF",text:"#333333",accent:"#FFC107",codeKeyword:"#C678DD",codeString:"#98C379",lineNumber:"#666666",cardBackground:"#F8F9FA",shadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},Gp={primary:"#000000",secondary:"#1A1A1A",background:"#000000",text:"#FFFFFF",accent:"#FFC107",codeKeyword:"#C678DD",codeString:"#98C379",lineNumber:"#666666",cardBackground:"#1A1A1A",shadow:"0 4px 6px rgba(0, 0, 0, 0.3)"},b0=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),sl=C.createContext({}),ol=C.createContext(null),al=typeof document<"u",Gd=al?C.useLayoutEffect:C.useEffect,E0=C.createContext({strict:!1}),Wd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Fw="framerAppearId",C0="data-"+Wd(Fw);function Ow(e,t,n,r){const{visualElement:i}=C.useContext(sl),o=C.useContext(E0),a=C.useContext(ol),l=C.useContext(b0).reducedMotion,c=C.useRef();r=r||o.renderer,!c.current&&r&&(c.current=r(e,{visualState:t,parent:i,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const u=c.current;C.useInsertionEffect(()=>{u&&u.update(n,a)});const f=C.useRef(!!(n[C0]&&!window.HandoffComplete));return Gd(()=>{u&&(u.render(),f.current&&u.animationState&&u.animationState.animateChanges())}),C.useEffect(()=>{u&&(u.updateFeatures(),!f.current&&u.animationState&&u.animationState.animateChanges(),f.current&&(f.current=!1,window.HandoffComplete=!0))}),u}function Qr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function _w(e,t,n){return C.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Qr(n)&&(n.current=r))},[t])}function ks(e){return typeof e=="string"||Array.isArray(e)}function ll(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Qd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Kd=["initial",...Qd];function cl(e){return ll(e.animate)||Kd.some(t=>ks(e[t]))}function T0(e){return!!(cl(e)||e.variants)}function $w(e,t){if(cl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ks(n)?n:void 0,animate:ks(r)?r:void 0}}return e.inherit!==!1?t:{}}function Mw(e){const{initial:t,animate:n}=$w(e,C.useContext(sl));return C.useMemo(()=>({initial:t,animate:n}),[Wp(t),Wp(n)])}function Wp(e){return Array.isArray(e)?e.join(" "):e}const Qp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},bs={};for(const e in Qp)bs[e]={isEnabled:t=>Qp[e].some(n=>!!t[n])};function zw(e){for(const t in e)bs[t]={...bs[t],...e[t]}}const Yd=C.createContext({}),P0=C.createContext({}),Bw=Symbol.for("motionComponentSymbol");function Vw({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&zw(e);function o(l,c){let u;const f={...C.useContext(b0),...l,layoutId:Uw(l)},{isStatic:d}=f,m=Mw(l),x=r(l,d);if(!d&&al){m.visualElement=Ow(i,x,f,t);const S=C.useContext(P0),j=C.useContext(E0).strict;m.visualElement&&(u=m.visualElement.loadFeatures(f,j,e,S))}return C.createElement(sl.Provider,{value:m},u&&m.visualElement?C.createElement(u,{visualElement:m.visualElement,...f}):null,n(i,l,_w(x,m.visualElement,c),x,d,m.visualElement))}const a=C.forwardRef(o);return a[Bw]=i,a}function Uw({layoutId:e}){const t=C.useContext(Yd).id;return t&&e!==void 0?t+"-"+e:e}function Hw(e){function t(r,i={}){return Vw(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Gw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function qd(e){return typeof e!="string"||e.includes("-")?!1:!!(Gw.indexOf(e)>-1||/[A-Z]/.test(e))}const Ca={};function Ww(e){Object.assign(Ca,e)}const Rs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sr=new Set(Rs);function A0(e,{layout:t,layoutId:n}){return Sr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ca[e]||e==="opacity")}const Ge=e=>!!(e&&e.getVelocity),Qw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Kw=Rs.length;function Yw(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let a=0;a<Kw;a++){const l=Rs[a];if(e[l]!==void 0){const c=Qw[l]||l;o+=`${c}(${e[l]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const N0=e=>t=>typeof t=="string"&&t.startsWith(e),L0=N0("--"),Ru=N0("var(--"),qw=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Xw=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Mn=(e,t,n)=>Math.min(Math.max(n,e),t),wr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Xi={...wr,transform:e=>Mn(0,1,e)},to={...wr,default:1},Zi=e=>Math.round(e*1e5)/1e5,ul=/(-)?([\d]*\.?[\d])+/g,R0=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Zw=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ds(e){return typeof e=="string"}const Is=e=>({test:t=>Ds(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),mn=Is("deg"),Ht=Is("%"),_=Is("px"),Jw=Is("vh"),ek=Is("vw"),Kp={...Ht,parse:e=>Ht.parse(e)/100,transform:e=>Ht.transform(e*100)},Yp={...wr,transform:Math.round},D0={borderWidth:_,borderTopWidth:_,borderRightWidth:_,borderBottomWidth:_,borderLeftWidth:_,borderRadius:_,radius:_,borderTopLeftRadius:_,borderTopRightRadius:_,borderBottomRightRadius:_,borderBottomLeftRadius:_,width:_,maxWidth:_,height:_,maxHeight:_,size:_,top:_,right:_,bottom:_,left:_,padding:_,paddingTop:_,paddingRight:_,paddingBottom:_,paddingLeft:_,margin:_,marginTop:_,marginRight:_,marginBottom:_,marginLeft:_,rotate:mn,rotateX:mn,rotateY:mn,rotateZ:mn,scale:to,scaleX:to,scaleY:to,scaleZ:to,skew:mn,skewX:mn,skewY:mn,distance:_,translateX:_,translateY:_,translateZ:_,x:_,y:_,z:_,perspective:_,transformPerspective:_,opacity:Xi,originX:Kp,originY:Kp,originZ:_,zIndex:Yp,fillOpacity:Xi,strokeOpacity:Xi,numOctaves:Yp};function Xd(e,t,n,r){const{style:i,vars:o,transform:a,transformOrigin:l}=e;let c=!1,u=!1,f=!0;for(const d in t){const m=t[d];if(L0(d)){o[d]=m;continue}const x=D0[d],S=Xw(m,x);if(Sr.has(d)){if(c=!0,a[d]=S,!f)continue;m!==(x.default||0)&&(f=!1)}else d.startsWith("origin")?(u=!0,l[d]=S):i[d]=S}if(t.transform||(c||r?i.transform=Yw(e.transform,n,f,r):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:m="50%",originZ:x=0}=l;i.transformOrigin=`${d} ${m} ${x}`}}const Zd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function I0(e,t,n){for(const r in t)!Ge(t[r])&&!A0(r,n)&&(e[r]=t[r])}function tk({transformTemplate:e},t,n){return C.useMemo(()=>{const r=Zd();return Xd(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function nk(e,t,n){const r=e.style||{},i={};return I0(i,r,e),Object.assign(i,tk(e,t,n)),e.transformValues?e.transformValues(i):i}function rk(e,t,n){const r={},i=nk(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const ik=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ta(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ik.has(e)}let F0=e=>!Ta(e);function sk(e){e&&(F0=t=>t.startsWith("on")?!Ta(t):e(t))}try{sk(require("@emotion/is-prop-valid").default)}catch{}function ok(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(F0(i)||n===!0&&Ta(i)||!t&&!Ta(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function qp(e,t,n){return typeof e=="string"?e:_.transform(t+n*e)}function ak(e,t,n){const r=qp(t,e.x,e.width),i=qp(n,e.y,e.height);return`${r} ${i}`}const lk={offset:"stroke-dashoffset",array:"stroke-dasharray"},ck={offset:"strokeDashoffset",array:"strokeDasharray"};function uk(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?lk:ck;e[o.offset]=_.transform(-r);const a=_.transform(t),l=_.transform(n);e[o.array]=`${a} ${l}`}function Jd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:l=1,pathOffset:c=0,...u},f,d,m){if(Xd(e,u,f,m),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:S,dimensions:j}=e;x.transform&&(j&&(S.transform=x.transform),delete x.transform),j&&(i!==void 0||o!==void 0||S.transform)&&(S.transformOrigin=ak(j,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(x.x=t),n!==void 0&&(x.y=n),r!==void 0&&(x.scale=r),a!==void 0&&uk(x,a,l,c,!1)}const O0=()=>({...Zd(),attrs:{}}),ef=e=>typeof e=="string"&&e.toLowerCase()==="svg";function dk(e,t,n,r){const i=C.useMemo(()=>{const o=O0();return Jd(o,t,{enableHardwareAcceleration:!1},ef(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};I0(o,e.style,e),i.style={...o,...i.style}}return i}function fk(e=!1){return(n,r,i,{latestValues:o},a)=>{const c=(qd(n)?dk:rk)(r,o,a,n),f={...ok(r,typeof n=="string",e),...c,ref:i},{children:d}=r,m=C.useMemo(()=>Ge(d)?d.get():d,[d]);return C.createElement(n,{...f,children:m})}}function _0(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const $0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function M0(e,t,n,r){_0(e,t,void 0,r);for(const i in t.attrs)e.setAttribute($0.has(i)?i:Wd(i),t.attrs[i])}function tf(e,t){const{style:n}=e,r={};for(const i in n)(Ge(n[i])||t.style&&Ge(t.style[i])||A0(i,e))&&(r[i]=n[i]);return r}function z0(e,t){const n=tf(e,t);for(const r in e)if(Ge(e[r])||Ge(t[r])){const i=Rs.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function nf(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function B0(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}const Pa=e=>Array.isArray(e),pk=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),hk=e=>Pa(e)?e[e.length-1]||0:e;function Wo(e){const t=Ge(e)?e.get():e;return pk(t)?t.toValue():t}function mk({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const a={latestValues:gk(r,i,o,e),renderState:t()};return n&&(a.mount=l=>n(r,l,a)),a}const V0=e=>(t,n)=>{const r=C.useContext(sl),i=C.useContext(ol),o=()=>mk(e,t,r,i);return n?o():B0(o)};function gk(e,t,n,r){const i={},o=r(e,{});for(const m in o)i[m]=Wo(o[m]);let{initial:a,animate:l}=e;const c=cl(e),u=T0(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let f=n?n.initial===!1:!1;f=f||a===!1;const d=f?l:a;return d&&typeof d!="boolean"&&!ll(d)&&(Array.isArray(d)?d:[d]).forEach(x=>{const S=nf(e,x);if(!S)return;const{transitionEnd:j,transition:E,...g}=S;for(const p in g){let h=g[p];if(Array.isArray(h)){const y=f?h.length-1:0;h=h[y]}h!==null&&(i[p]=h)}for(const p in j)i[p]=j[p]}),i}const ae=e=>e;class Xp{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function xk(e){let t=new Xp,n=new Xp,r=0,i=!1,o=!1;const a=new WeakSet,l={schedule:(c,u=!1,f=!1)=>{const d=f&&i,m=d?t:n;return u&&a.add(c),m.add(c)&&d&&i&&(r=t.order.length),c},cancel:c=>{n.remove(c),a.delete(c)},process:c=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const f=t.order[u];f(c),a.has(f)&&(l.schedule(f),e())}i=!1,o&&(o=!1,l.process(c))}};return l}const no=["prepare","read","update","preRender","render","postRender"],yk=40;function vk(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=no.reduce((d,m)=>(d[m]=xk(()=>n=!0),d),{}),a=d=>o[d].process(i),l=()=>{const d=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(d-i.timestamp,yk),1),i.timestamp=d,i.isProcessing=!0,no.forEach(a),i.isProcessing=!1,n&&t&&(r=!1,e(l))},c=()=>{n=!0,r=!0,i.isProcessing||e(l)};return{schedule:no.reduce((d,m)=>{const x=o[m];return d[m]=(S,j=!1,E=!1)=>(n||c(),x.schedule(S,j,E)),d},{}),cancel:d=>no.forEach(m=>o[m].cancel(d)),state:i,steps:o}}const{schedule:Q,cancel:ln,state:Ne,steps:Gl}=vk(typeof requestAnimationFrame<"u"?requestAnimationFrame:ae,!0),jk={useVisualState:V0({scrapeMotionValuesFromProps:z0,createRenderState:O0,onMount:(e,t,{renderState:n,latestValues:r})=>{Q.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Q.render(()=>{Jd(n,r,{enableHardwareAcceleration:!1},ef(t.tagName),e.transformTemplate),M0(t,n)})}})},Sk={useVisualState:V0({scrapeMotionValuesFromProps:tf,createRenderState:Zd})};function wk(e,{forwardMotionProps:t=!1},n,r){return{...qd(e)?jk:Sk,preloadedFeatures:n,useRender:fk(t),createVisualElement:r,Component:e}}function Jt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const U0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function dl(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const kk=e=>t=>U0(t)&&e(t,dl(t));function tn(e,t,n,r){return Jt(e,t,kk(n),r)}const bk=(e,t)=>n=>t(e(n)),In=(...e)=>e.reduce(bk);function H0(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Zp=H0("dragHorizontal"),Jp=H0("dragVertical");function G0(e){let t=!1;if(e==="y")t=Jp();else if(e==="x")t=Zp();else{const n=Zp(),r=Jp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function W0(){const e=G0(!0);return e?(e(),!1):!0}let Wn=class{constructor(t){this.isMounted=!1,this.node=t}update(){}};function eh(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,a)=>{if(o.pointerType==="touch"||W0())return;const l=e.getProps();e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",t),l[r]&&Q.update(()=>l[r](o,a))};return tn(e.current,n,i,{passive:!e.getProps()[r]})}class Ek extends Wn{mount(){this.unmount=In(eh(this.node,!0),eh(this.node,!1))}unmount(){}}class Ck extends Wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=In(Jt(this.node.current,"focus",()=>this.onFocus()),Jt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Q0=(e,t)=>t?e===t?!0:Q0(e,t.parentElement):!1;function Wl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,dl(n))}class Tk extends Wn{constructor(){super(...arguments),this.removeStartListeners=ae,this.removeEndListeners=ae,this.removeAccessibleListeners=ae,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=tn(window,"pointerup",(l,c)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:f,globalTapTarget:d}=this.node.getProps();Q.update(()=>{!d&&!Q0(this.node.current,l.target)?f&&f(l,c):u&&u(l,c)})},{passive:!(r.onTap||r.onPointerUp)}),a=tn(window,"pointercancel",(l,c)=>this.cancelPress(l,c),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=In(o,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const a=l=>{l.key!=="Enter"||!this.checkPressEnd()||Wl("up",(c,u)=>{const{onTap:f}=this.node.getProps();f&&Q.update(()=>f(c,u))})};this.removeEndListeners(),this.removeEndListeners=Jt(this.node.current,"keyup",a),Wl("down",(l,c)=>{this.startPress(l,c)})},n=Jt(this.node.current,"keydown",t),r=()=>{this.isPressing&&Wl("cancel",(o,a)=>this.cancelPress(o,a))},i=Jt(this.node.current,"blur",r);this.removeAccessibleListeners=In(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Q.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!W0()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Q.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=tn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Jt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=In(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Du=new WeakMap,Ql=new WeakMap,Pk=e=>{const t=Du.get(e.target);t&&t(e)},Ak=e=>{e.forEach(Pk)};function Nk({root:e,...t}){const n=e||document;Ql.has(n)||Ql.set(n,{});const r=Ql.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Ak,{root:e,...t})),r[i]}function Lk(e,t,n){const r=Nk(t);return Du.set(e,n),r.observe(e),()=>{Du.delete(e),r.unobserve(e)}}const Rk={some:0,all:1};class Dk extends Wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Rk[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),m=u?f:d;m&&m(c)};return Lk(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Ik(t,n))&&this.startObserver()}unmount(){}}function Ik({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Fk={inView:{Feature:Dk},tap:{Feature:Tk},focus:{Feature:Ck},hover:{Feature:Ek}};function K0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Ok(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function _k(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function fl(e,t,n){const r=e.getProps();return nf(r,t,n!==void 0?n:r.custom,Ok(e),_k(e))}let $k=ae,rf=ae;const Fn=e=>e*1e3,nn=e=>e/1e3,Mk={current:!1},Y0=e=>Array.isArray(e)&&typeof e[0]=="number";function q0(e){return!!(!e||typeof e=="string"&&X0[e]||Y0(e)||Array.isArray(e)&&e.every(q0))}const zi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,X0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zi([0,.65,.55,1]),circOut:zi([.55,0,1,.45]),backIn:zi([.31,.01,.66,-.59]),backOut:zi([.33,1.53,.69,.99])};function Z0(e){if(e)return Y0(e)?zi(e):Array.isArray(e)?e.map(Z0):X0[e]}function zk(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:a="loop",ease:l,times:c}={}){const u={[t]:n};c&&(u.offset=c);const f=Z0(l);return Array.isArray(f)&&(u.easing=f),e.animate(u,{delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}function Bk(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const J0=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Vk=1e-7,Uk=12;function Hk(e,t,n,r,i){let o,a,l=0;do a=t+(n-t)/2,o=J0(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>Vk&&++l<Uk);return a}function Fs(e,t,n,r){if(e===t&&n===r)return ae;const i=o=>Hk(o,0,1,e,n);return o=>o===0||o===1?o:J0(i(o),t,r)}const Gk=Fs(.42,0,1,1),Wk=Fs(0,0,.58,1),ey=Fs(.42,0,.58,1),Qk=e=>Array.isArray(e)&&typeof e[0]!="number",ty=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ny=e=>t=>1-e(1-t),sf=e=>1-Math.sin(Math.acos(e)),ry=ny(sf),Kk=ty(sf),iy=Fs(.33,1.53,.69,.99),of=ny(iy),Yk=ty(of),qk=e=>(e*=2)<1?.5*of(e):.5*(2-Math.pow(2,-10*(e-1))),Xk={linear:ae,easeIn:Gk,easeInOut:ey,easeOut:Wk,circIn:sf,circInOut:Kk,circOut:ry,backIn:of,backInOut:Yk,backOut:iy,anticipate:qk},th=e=>{if(Array.isArray(e)){rf(e.length===4);const[t,n,r,i]=e;return Fs(t,n,r,i)}else if(typeof e=="string")return Xk[e];return e},af=(e,t)=>n=>!!(Ds(n)&&Zw.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),sy=(e,t,n)=>r=>{if(!Ds(r))return r;const[i,o,a,l]=r.match(ul);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},Zk=e=>Mn(0,255,e),Kl={...wr,transform:e=>Math.round(Zk(e))},lr={test:af("rgb","red"),parse:sy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Kl.transform(e)+", "+Kl.transform(t)+", "+Kl.transform(n)+", "+Zi(Xi.transform(r))+")"};function Jk(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Iu={test:af("#"),parse:Jk,transform:lr.transform},Kr={test:af("hsl","hue"),parse:sy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ht.transform(Zi(t))+", "+Ht.transform(Zi(n))+", "+Zi(Xi.transform(r))+")"},Ie={test:e=>lr.test(e)||Iu.test(e)||Kr.test(e),parse:e=>lr.test(e)?lr.parse(e):Kr.test(e)?Kr.parse(e):Iu.parse(e),transform:e=>Ds(e)?e:e.hasOwnProperty("red")?lr.transform(e):Kr.transform(e)},re=(e,t,n)=>-n*e+n*t+e;function Yl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function eb({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=Yl(c,l,e+1/3),o=Yl(c,l,e),a=Yl(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}const ql=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},tb=[Iu,lr,Kr],nb=e=>tb.find(t=>t.test(e));function nh(e){const t=nb(e);let n=t.parse(e);return t===Kr&&(n=eb(n)),n}const oy=(e,t)=>{const n=nh(e),r=nh(t),i={...n};return o=>(i.red=ql(n.red,r.red,o),i.green=ql(n.green,r.green,o),i.blue=ql(n.blue,r.blue,o),i.alpha=re(n.alpha,r.alpha,o),lr.transform(i))};function rb(e){var t,n;return isNaN(e)&&Ds(e)&&(((t=e.match(ul))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(R0))===null||n===void 0?void 0:n.length)||0)>0}const ay={regex:qw,countKey:"Vars",token:"${v}",parse:ae},ly={regex:R0,countKey:"Colors",token:"${c}",parse:Ie.parse},cy={regex:ul,countKey:"Numbers",token:"${n}",parse:wr.parse};function Xl(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function Aa(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Xl(n,ay),Xl(n,ly),Xl(n,cy),n}function uy(e){return Aa(e).values}function dy(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Aa(e),o=t.length;return a=>{let l=i;for(let c=0;c<o;c++)c<r?l=l.replace(ay.token,a[c]):c<r+n?l=l.replace(ly.token,Ie.transform(a[c])):l=l.replace(cy.token,Zi(a[c]));return l}}const ib=e=>typeof e=="number"?0:e;function sb(e){const t=uy(e);return dy(e)(t.map(ib))}const zn={test:rb,parse:uy,createTransformer:dy,getAnimatableNone:sb},fy=(e,t)=>n=>`${n>0?t:e}`;function py(e,t){return typeof e=="number"?n=>re(e,t,n):Ie.test(e)?oy(e,t):e.startsWith("var(")?fy(e,t):my(e,t)}const hy=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,a)=>py(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}},ob=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=py(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},my=(e,t)=>{const n=zn.createTransformer(t),r=Aa(e),i=Aa(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?In(hy(r.values,i.values),n):fy(e,t)},Es=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},rh=(e,t)=>n=>re(e,t,n);function ab(e){return typeof e=="number"?rh:typeof e=="string"?Ie.test(e)?oy:my:Array.isArray(e)?hy:typeof e=="object"?ob:rh}function lb(e,t,n){const r=[],i=n||ab(e[0]),o=e.length-1;for(let a=0;a<o;a++){let l=i(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||ae:t;l=In(c,l)}r.push(l)}return r}function gy(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(rf(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=lb(t,r,i),l=a.length,c=u=>{let f=0;if(l>1)for(;f<e.length-2&&!(u<e[f+1]);f++);const d=Es(e[f],e[f+1],u);return a[f](d)};return n?u=>c(Mn(e[0],e[o-1],u)):c}function cb(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Es(0,t,r);e.push(re(n,1,i))}}function ub(e){const t=[0];return cb(t,e.length-1),t}function db(e,t){return e.map(n=>n*t)}function fb(e,t){return e.map(()=>t||ey).splice(0,e.length-1)}function Na({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Qk(r)?r.map(th):th(r),o={done:!1,value:t[0]},a=db(n&&n.length===t.length?n:ub(t),e),l=gy(a,t,{ease:Array.isArray(i)?i:fb(t,i)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}function xy(e,t){return t?e*(1e3/t):0}const pb=5;function yy(e,t,n){const r=Math.max(t-pb,0);return xy(n-e(r),t-r)}const Zl=.001,hb=.01,ih=10,mb=.05,gb=1;function xb({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;$k(e<=Fn(ih));let a=1-t;a=Mn(mb,gb,a),e=Mn(hb,ih,nn(e)),a<1?(i=u=>{const f=u*a,d=f*e,m=f-n,x=Fu(u,a),S=Math.exp(-d);return Zl-m/x*S},o=u=>{const d=u*a*e,m=d*n+n,x=Math.pow(a,2)*Math.pow(u,2)*e,S=Math.exp(-d),j=Fu(Math.pow(u,2),a);return(-i(u)+Zl>0?-1:1)*((m-x)*S)/j}):(i=u=>{const f=Math.exp(-u*e),d=(u-n)*e+1;return-Zl+f*d},o=u=>{const f=Math.exp(-u*e),d=(n-u)*(e*e);return f*d});const l=5/e,c=vb(i,o,l);if(e=Fn(e),isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const yb=12;function vb(e,t,n){let r=n;for(let i=1;i<yb;i++)r=r-e(r)/t(r);return r}function Fu(e,t){return e*Math.sqrt(1-t*t)}const jb=["duration","bounce"],Sb=["stiffness","damping","mass"];function sh(e,t){return t.some(n=>e[n]!==void 0)}function wb(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!sh(e,Sb)&&sh(e,jb)){const n=xb(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function vy({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],a={done:!1,value:i},{stiffness:l,damping:c,mass:u,duration:f,velocity:d,isResolvedFromDuration:m}=wb({...r,velocity:-nn(r.velocity||0)}),x=d||0,S=c/(2*Math.sqrt(l*u)),j=o-i,E=nn(Math.sqrt(l/u)),g=Math.abs(j)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let p;if(S<1){const h=Fu(E,S);p=y=>{const w=Math.exp(-S*E*y);return o-w*((x+S*E*j)/h*Math.sin(h*y)+j*Math.cos(h*y))}}else if(S===1)p=h=>o-Math.exp(-E*h)*(j+(x+E*j)*h);else{const h=E*Math.sqrt(S*S-1);p=y=>{const w=Math.exp(-S*E*y),k=Math.min(h*y,300);return o-w*((x+S*E*j)*Math.sinh(k)+h*j*Math.cosh(k))/h}}return{calculatedDuration:m&&f||null,next:h=>{const y=p(h);if(m)a.done=h>=f;else{let w=x;h!==0&&(S<1?w=yy(p,h,y):w=0);const k=Math.abs(w)<=n,b=Math.abs(o-y)<=t;a.done=k&&b}return a.value=a.done?o:y,a}}}function oh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:f}){const d=e[0],m={done:!1,value:d},x=T=>l!==void 0&&T<l||c!==void 0&&T>c,S=T=>l===void 0?c:c===void 0||Math.abs(l-T)<Math.abs(c-T)?l:c;let j=n*t;const E=d+j,g=a===void 0?E:a(E);g!==E&&(j=g-d);const p=T=>-j*Math.exp(-T/r),h=T=>g+p(T),y=T=>{const P=p(T),L=h(T);m.done=Math.abs(P)<=u,m.value=m.done?g:L};let w,k;const b=T=>{x(m.value)&&(w=T,k=vy({keyframes:[m.value,S(m.value)],velocity:yy(h,T,m.value),damping:i,stiffness:o,restDelta:u,restSpeed:f}))};return b(0),{calculatedDuration:null,next:T=>{let P=!1;return!k&&w===void 0&&(P=!0,y(T),b(T)),w!==void 0&&T>w?k.next(T-w):(!P&&y(T),m)}}}const kb=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Q.update(t,!0),stop:()=>ln(t),now:()=>Ne.isProcessing?Ne.timestamp:performance.now()}},ah=2e4;function lh(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<ah;)t+=n,r=e.next(t);return t>=ah?1/0:t}const bb={decay:oh,inertia:oh,tween:Na,keyframes:Na,spring:vy};function La({autoplay:e=!0,delay:t=0,driver:n=kb,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:l="loop",onPlay:c,onStop:u,onComplete:f,onUpdate:d,...m}){let x=1,S=!1,j,E;const g=()=>{E=new Promise(I=>{j=I})};g();let p;const h=bb[i]||Na;let y;h!==Na&&typeof r[0]!="number"&&(y=gy([0,100],r,{clamp:!1}),r=[0,100]);const w=h({...m,keyframes:r});let k;l==="mirror"&&(k=h({...m,keyframes:[...r].reverse(),velocity:-(m.velocity||0)}));let b="idle",T=null,P=null,L=null;w.calculatedDuration===null&&o&&(w.calculatedDuration=lh(w));const{calculatedDuration:z}=w;let G=1/0,de=1/0;z!==null&&(G=z+a,de=G*(o+1)-a);let ee=0;const et=I=>{if(P===null)return;x>0&&(P=Math.min(P,I)),x<0&&(P=Math.min(I-de/x,P)),T!==null?ee=T:ee=Math.round(I-P)*x;const $=ee-t*(x>=0?1:-1),tt=x>=0?$<0:$>de;ee=Math.max($,0),b==="finished"&&T===null&&(ee=de);let te=ee,we=w;if(o){const Me=Math.min(ee,de)/G;let nt=Math.floor(Me),be=Me%1;!be&&Me>=1&&(be=1),be===1&&nt--,nt=Math.min(nt,o+1),!!(nt%2)&&(l==="reverse"?(be=1-be,a&&(be-=a/G)):l==="mirror"&&(we=k)),te=Mn(0,1,be)*G}const Z=tt?{done:!1,value:r[0]}:we.next(te);y&&(Z.value=y(Z.value));let{done:ke}=Z;!tt&&z!==null&&(ke=x>=0?ee>=de:ee<=0);const kt=T===null&&(b==="finished"||b==="running"&&ke);return d&&d(Z.value),kt&&N(),Z},K=()=>{p&&p.stop(),p=void 0},me=()=>{b="idle",K(),j(),g(),P=L=null},N=()=>{b="finished",f&&f(),K(),j()},R=()=>{if(S)return;p||(p=n(et));const I=p.now();c&&c(),T!==null?P=I-T:(!P||b==="finished")&&(P=I),b==="finished"&&g(),L=P,T=null,b="running",p.start()};e&&R();const O={then(I,$){return E.then(I,$)},get time(){return nn(ee)},set time(I){I=Fn(I),ee=I,T!==null||!p||x===0?T=I:P=p.now()-I/x},get duration(){const I=w.calculatedDuration===null?lh(w):w.calculatedDuration;return nn(I)},get speed(){return x},set speed(I){I===x||!p||(x=I,O.time=nn(ee))},get state(){return b},play:R,pause:()=>{b="paused",T=ee},stop:()=>{S=!0,b!=="idle"&&(b="idle",u&&u(),me())},cancel:()=>{L!==null&&et(L),me()},complete:()=>{b="finished"},sample:I=>(P=0,et(I))};return O}function Eb(e){let t;return()=>(t===void 0&&(t=e()),t)}const Cb=Eb(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Tb=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ro=10,Pb=2e4,Ab=(e,t)=>t.type==="spring"||e==="backgroundColor"||!q0(t.ease);function Nb(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Cb()&&Tb.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let a=!1,l,c,u=!1;const f=()=>{c=new Promise(h=>{l=h})};f();let{keyframes:d,duration:m=300,ease:x,times:S}=i;if(Ab(t,i)){const h=La({...i,repeat:0,delay:0});let y={done:!1,value:d[0]};const w=[];let k=0;for(;!y.done&&k<Pb;)y=h.sample(k),w.push(y.value),k+=ro;S=void 0,d=w,m=k-ro,x="linear"}const j=zk(e.owner.current,t,d,{...i,duration:m,ease:x,times:S}),E=()=>{u=!1,j.cancel()},g=()=>{u=!0,Q.update(E),l(),f()};return j.onfinish=()=>{u||(e.set(Bk(d,i)),r&&r(),g())},{then(h,y){return c.then(h,y)},attachTimeline(h){return j.timeline=h,j.onfinish=null,ae},get time(){return nn(j.currentTime||0)},set time(h){j.currentTime=Fn(h)},get speed(){return j.playbackRate},set speed(h){j.playbackRate=h},get duration(){return nn(m)},play:()=>{a||(j.play(),ln(E))},pause:()=>j.pause(),stop:()=>{if(a=!0,j.playState==="idle")return;const{currentTime:h}=j;if(h){const y=La({...i,autoplay:!1});e.setWithVelocity(y.sample(h-ro).value,y.sample(h).value,ro)}g()},complete:()=>{u||j.finish()},cancel:g}}function Lb({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ae,pause:ae,stop:ae,then:o=>(o(),Promise.resolve()),cancel:ae,complete:ae});return t?La({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const Rb={type:"spring",stiffness:500,damping:25,restSpeed:10},Db=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Ib={type:"keyframes",duration:.8},Fb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ob=(e,{keyframes:t})=>t.length>2?Ib:Sr.has(e)?e.startsWith("scale")?Db(t[1]):Rb:Fb,Ou=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(zn.test(t)||t==="0")&&!t.startsWith("url(")),_b=new Set(["brightness","contrast","saturate","opacity"]);function $b(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(ul)||[];if(!r)return e;const i=n.replace(r,"");let o=_b.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Mb=/([a-z-]*)\(.*?\)/g,_u={...zn,getAnimatableNone:e=>{const t=e.match(Mb);return t?t.map($b).join(" "):e}},zb={...D0,color:Ie,backgroundColor:Ie,outlineColor:Ie,fill:Ie,stroke:Ie,borderColor:Ie,borderTopColor:Ie,borderRightColor:Ie,borderBottomColor:Ie,borderLeftColor:Ie,filter:_u,WebkitFilter:_u},lf=e=>zb[e];function jy(e,t){let n=lf(e);return n!==_u&&(n=zn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Sy=e=>/^0[^.\s]+$/.test(e);function Bb(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Sy(e)}function Vb(e,t,n,r){const i=Ou(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const a=r.from!==void 0?r.from:e.get();let l;const c=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?a:o[u-1]),Bb(o[u])&&c.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(l=o[u]);if(i&&c.length&&l)for(let u=0;u<c.length;u++){const f=c[u];o[f]=jy(t,l)}return o}function Ub({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:l,from:c,elapsed:u,...f}){return!!Object.keys(f).length}function cf(e,t){return e[t]||e.default||e}const Hb={skipAnimations:!1},uf=(e,t,n,r={})=>i=>{const o=cf(r,e)||{},a=o.delay||r.delay||0;let{elapsed:l=0}=r;l=l-Fn(a);const c=Vb(t,e,n,o),u=c[0],f=c[c.length-1],d=Ou(e,u),m=Ou(e,f);let x={keyframes:c,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-l,onUpdate:S=>{t.set(S),o.onUpdate&&o.onUpdate(S)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(Ub(o)||(x={...x,...Ob(e,x)}),x.duration&&(x.duration=Fn(x.duration)),x.repeatDelay&&(x.repeatDelay=Fn(x.repeatDelay)),!d||!m||Mk.current||o.type===!1||Hb.skipAnimations)return Lb(x);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const S=Nb(t,e,x);if(S)return S}return La(x)};function Ra(e){return!!(Ge(e)&&e.add)}const wy=e=>/^\-?\d*\.?\d+$/.test(e);function df(e,t){e.indexOf(t)===-1&&e.push(t)}function ff(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class pf{constructor(){this.subscriptions=[]}add(t){return df(this.subscriptions,t),()=>ff(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Gb=e=>!isNaN(parseFloat(e));class Wb{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:a}=Ne;this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a,Q.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Q.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Gb(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new pf);const r=this.events[t].add(n);return t==="change"?()=>{r(),Q.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?xy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function mi(e,t){return new Wb(e,t)}const ky=e=>t=>t.test(e),Qb={test:e=>e==="auto",parse:e=>e},by=[wr,_,Ht,mn,ek,Jw,Qb],Li=e=>by.find(ky(e)),Kb=[...by,Ie,zn],Yb=e=>Kb.find(ky(e));function qb(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,mi(n))}function Xb(e,t){const n=fl(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const a in o){const l=hk(o[a]);qb(e,a,l)}}function Zb(e,t,n){var r,i;const o=Object.keys(t).filter(l=>!e.hasValue(l)),a=o.length;if(a)for(let l=0;l<a;l++){const c=o[l],u=t[c];let f=null;Array.isArray(u)&&(f=u[0]),f===null&&(f=(i=(r=n[c])!==null&&r!==void 0?r:e.readValue(c))!==null&&i!==void 0?i:t[c]),f!=null&&(typeof f=="string"&&(wy(f)||Sy(f))?f=parseFloat(f):!Yb(f)&&zn.test(u)&&(f=jy(c,u)),e.addValue(c,mi(f,{owner:e})),n[c]===void 0&&(n[c]=f),f!==null&&e.setBaseTarget(c,f))}}function Jb(e,t){return t?(t[e]||t.default||t).from:void 0}function eE(e,t,n){const r={};for(const i in e){const o=Jb(i,t);if(o!==void 0)r[i]=o;else{const a=n.getValue(i);a&&(r[i]=a.get())}}return r}function tE({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function nE(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Ey(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=e.makeTargetAnimatable(t);const c=e.getValue("willChange");r&&(o=r);const u=[],f=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const m=e.getValue(d),x=l[d];if(!m||x===void 0||f&&tE(f,d))continue;const S={delay:n,elapsed:0,...cf(o||{},d)};if(window.HandoffAppearAnimations){const g=e.getProps()[C0];if(g){const p=window.HandoffAppearAnimations(g,d,m,Q);p!==null&&(S.elapsed=p,S.isHandoff=!0)}}let j=!S.isHandoff&&!nE(m,x);if(S.type==="spring"&&(m.getVelocity()||S.velocity)&&(j=!1),m.animation&&(j=!1),j)continue;m.start(uf(d,m,x,e.shouldReduceMotion&&Sr.has(d)?{type:!1}:S));const E=m.animation;Ra(c)&&(c.add(d),E.then(()=>c.remove(d))),u.push(E)}return a&&Promise.all(u).then(()=>{a&&Xb(e,a)}),u}function $u(e,t,n={}){const r=fl(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Ey(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=i;return rE(e,t,u+c,f,d,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function rE(e,t,n=0,r=0,i=1,o){const a=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(iE).forEach((u,f)=>{u.notify("AnimationStart",t),a.push($u(u,t,{...o,delay:n+c(f)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function iE(e,t){return e.sortNodePosition(t)}function sE(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>$u(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=$u(e,t,n);else{const i=typeof t=="function"?fl(e,t,n.custom):t;r=Promise.all(Ey(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const oE=[...Qd].reverse(),aE=Qd.length;function lE(e){return t=>Promise.all(t.map(({animation:n,options:r})=>sE(e,n,r)))}function cE(e){let t=lE(e);const n=dE();let r=!0;const i=(c,u)=>{const f=fl(e,u);if(f){const{transition:d,transitionEnd:m,...x}=f;c={...c,...x,...m}}return c};function o(c){t=c(e)}function a(c,u){const f=e.getProps(),d=e.getVariantContext(!0)||{},m=[],x=new Set;let S={},j=1/0;for(let g=0;g<aE;g++){const p=oE[g],h=n[p],y=f[p]!==void 0?f[p]:d[p],w=ks(y),k=p===u?h.isActive:null;k===!1&&(j=g);let b=y===d[p]&&y!==f[p]&&w;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...S},!h.isActive&&k===null||!y&&!h.prevProp||ll(y)||typeof y=="boolean")continue;let P=uE(h.prevProp,y)||p===u&&h.isActive&&!b&&w||g>j&&w,L=!1;const z=Array.isArray(y)?y:[y];let G=z.reduce(i,{});k===!1&&(G={});const{prevResolvedValues:de={}}=h,ee={...de,...G},et=K=>{P=!0,x.has(K)&&(L=!0,x.delete(K)),h.needsAnimating[K]=!0};for(const K in ee){const me=G[K],N=de[K];if(S.hasOwnProperty(K))continue;let R=!1;Pa(me)&&Pa(N)?R=!K0(me,N):R=me!==N,R?me!==void 0?et(K):x.add(K):me!==void 0&&x.has(K)?et(K):h.protectedKeys[K]=!0}h.prevProp=y,h.prevResolvedValues=G,h.isActive&&(S={...S,...G}),r&&e.blockInitialAnimation&&(P=!1),P&&(!b||L)&&m.push(...z.map(K=>({animation:K,options:{type:p,...c}})))}if(x.size){const g={};x.forEach(p=>{const h=e.getBaseTarget(p);h!==void 0&&(g[p]=h)}),m.push({animation:g})}let E=!!m.length;return r&&(f.initial===!1||f.initial===f.animate)&&!e.manuallyAnimateOnMount&&(E=!1),r=!1,E?t(m):Promise.resolve()}function l(c,u,f){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(x=>{var S;return(S=x.animationState)===null||S===void 0?void 0:S.setActive(c,u)}),n[c].isActive=u;const m=a(f,c);for(const x in n)n[x].protectedKeys={};return m}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n}}function uE(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!K0(t,e):!1}function Qn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function dE(){return{animate:Qn(!0),whileInView:Qn(),whileHover:Qn(),whileTap:Qn(),whileDrag:Qn(),whileFocus:Qn(),exit:Qn()}}class fE extends Wn{constructor(t){super(t),t.animationState||(t.animationState=cE(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),ll(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let pE=0;class hE extends Wn{constructor(){super(...arguments),this.id=pE++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const mE={animation:{Feature:fE},exit:{Feature:hE}},ch=(e,t)=>Math.abs(e-t);function gE(e,t){const n=ch(e.x,t.x),r=ch(e.y,t.y);return Math.sqrt(n**2+r**2)}class Cy{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=ec(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,x=gE(d.offset,{x:0,y:0})>=3;if(!m&&!x)return;const{point:S}=d,{timestamp:j}=Ne;this.history.push({...S,timestamp:j});const{onStart:E,onMove:g}=this.handlers;m||(E&&E(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,d)},this.handlePointerMove=(d,m)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Jl(m,this.transformPagePoint),Q.update(this.updatePoint,!0)},this.handlePointerUp=(d,m)=>{this.end();const{onEnd:x,onSessionEnd:S,resumeAnimation:j}=this.handlers;if(this.dragSnapToOrigin&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const E=ec(d.type==="pointercancel"?this.lastMoveEventInfo:Jl(m,this.transformPagePoint),this.history);this.startEvent&&x&&x(d,E),S&&S(d,E)},!U0(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=dl(t),l=Jl(a,this.transformPagePoint),{point:c}=l,{timestamp:u}=Ne;this.history=[{...c,timestamp:u}];const{onSessionStart:f}=n;f&&f(t,ec(l,this.history)),this.removeListeners=In(tn(this.contextWindow,"pointermove",this.handlePointerMove),tn(this.contextWindow,"pointerup",this.handlePointerUp),tn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),ln(this.updatePoint)}}function Jl(e,t){return t?{point:t(e.point)}:e}function uh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ec({point:e},t){return{point:e,delta:uh(e,Ty(t)),offset:uh(e,xE(t)),velocity:yE(t,.1)}}function xE(e){return e[0]}function Ty(e){return e[e.length-1]}function yE(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Ty(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Fn(t)));)n--;if(!r)return{x:0,y:0};const o=nn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Xe(e){return e.max-e.min}function Mu(e,t=0,n=.01){return Math.abs(e-t)<=n}function dh(e,t,n,r=.5){e.origin=r,e.originPoint=re(t.min,t.max,e.origin),e.scale=Xe(n)/Xe(t),(Mu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=re(n.min,n.max,e.origin)-e.originPoint,(Mu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Ji(e,t,n,r){dh(e.x,t.x,n.x,r?r.originX:void 0),dh(e.y,t.y,n.y,r?r.originY:void 0)}function fh(e,t,n){e.min=n.min+t.min,e.max=e.min+Xe(t)}function vE(e,t,n){fh(e.x,t.x,n.x),fh(e.y,t.y,n.y)}function ph(e,t,n){e.min=t.min-n.min,e.max=e.min+Xe(t)}function es(e,t,n){ph(e.x,t.x,n.x),ph(e.y,t.y,n.y)}function jE(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?re(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?re(n,e,r.max):Math.min(e,n)),e}function hh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function SE(e,{top:t,left:n,bottom:r,right:i}){return{x:hh(e.x,n,i),y:hh(e.y,t,r)}}function mh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function wE(e,t){return{x:mh(e.x,t.x),y:mh(e.y,t.y)}}function kE(e,t){let n=.5;const r=Xe(e),i=Xe(t);return i>r?n=Es(t.min,t.max-r,e.min):r>i&&(n=Es(e.min,e.max-i,t.min)),Mn(0,1,n)}function bE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const zu=.35;function EE(e=zu){return e===!1?e=0:e===!0&&(e=zu),{x:gh(e,"left","right"),y:gh(e,"top","bottom")}}function gh(e,t,n){return{min:xh(e,t),max:xh(e,n)}}function xh(e,t){return typeof e=="number"?e:e[t]||0}const yh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Yr=()=>({x:yh(),y:yh()}),vh=()=>({min:0,max:0}),fe=()=>({x:vh(),y:vh()});function mt(e){return[e("x"),e("y")]}function Py({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function CE({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function TE(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function tc(e){return e===void 0||e===1}function Bu({scale:e,scaleX:t,scaleY:n}){return!tc(e)||!tc(t)||!tc(n)}function tr(e){return Bu(e)||Ay(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Ay(e){return jh(e.x)||jh(e.y)}function jh(e){return e&&e!=="0%"}function Da(e,t,n){const r=e-n,i=t*r;return n+i}function Sh(e,t,n,r,i){return i!==void 0&&(e=Da(e,i,r)),Da(e,n,r)+t}function Vu(e,t=0,n=1,r,i){e.min=Sh(e.min,t,n,r,i),e.max=Sh(e.max,t,n,r,i)}function Ny(e,{x:t,y:n}){Vu(e.x,t.translate,t.scale,t.originPoint),Vu(e.y,n.translate,n.scale,n.originPoint)}function PE(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let l=0;l<i;l++){o=n[l],a=o.projectionDelta;const c=o.instance;c&&c.style&&c.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&qr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Ny(e,a)),r&&tr(o.latestValues)&&qr(e,o.latestValues))}t.x=wh(t.x),t.y=wh(t.y)}function wh(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function yn(e,t){e.min=e.min+t,e.max=e.max+t}function kh(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,a=re(e.min,e.max,o);Vu(e,t[n],t[r],a,t.scale)}const AE=["x","scaleX","originX"],NE=["y","scaleY","originY"];function qr(e,t){kh(e.x,t,AE),kh(e.y,t,NE)}function Ly(e,t){return Py(TE(e.getBoundingClientRect(),t))}function LE(e,t,n){const r=Ly(e,n),{scroll:i}=t;return i&&(yn(r.x,i.offset.x),yn(r.y,i.offset.y)),r}const Ry=({current:e})=>e?e.ownerDocument.defaultView:null,RE=new WeakMap;class DE{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=fe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=f=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(dl(f,"page").point)},o=(f,d)=>{const{drag:m,dragPropagation:x,onDragStart:S}=this.getProps();if(m&&!x&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=G0(m),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),mt(E=>{let g=this.getAxisMotionValue(E).get()||0;if(Ht.test(g)){const{projection:p}=this.visualElement;if(p&&p.layout){const h=p.layout.layoutBox[E];h&&(g=Xe(h)*(parseFloat(g)/100))}}this.originPoint[E]=g}),S&&Q.update(()=>S(f,d),!1,!0);const{animationState:j}=this.visualElement;j&&j.setActive("whileDrag",!0)},a=(f,d)=>{const{dragPropagation:m,dragDirectionLock:x,onDirectionLock:S,onDrag:j}=this.getProps();if(!m&&!this.openGlobalLock)return;const{offset:E}=d;if(x&&this.currentDirection===null){this.currentDirection=IE(E),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",d.point,E),this.updateAxis("y",d.point,E),this.visualElement.render(),j&&j(f,d)},l=(f,d)=>this.stop(f,d),c=()=>mt(f=>{var d;return this.getAnimationState(f)==="paused"&&((d=this.getAxisMotionValue(f).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Cy(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Ry(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&Q.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!io(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=jE(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Qr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=SE(i.layoutBox,n):this.constraints=!1,this.elastic=EE(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&mt(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=bE(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Qr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=LE(r,i.root,this.visualElement.getTransformPagePoint());let a=wE(i.layout.layoutBox,o);if(n){const l=n(CE(a));this.hasMutatedConstraints=!!l,l&&(a=Py(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=mt(f=>{if(!io(f,n,this.currentDirection))return;let d=c&&c[f]||{};a&&(d={min:0,max:0});const m=i?200:1e6,x=i?40:1e7,S={type:"inertia",velocity:r?t[f]:0,bounceStiffness:m,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(f,S)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(uf(t,r,0,n))}stopAnimation(){mt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){mt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){mt(n=>{const{drag:r}=this.getProps();if(!io(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:l}=i.layout.layoutBox[n];o.set(t[n]-re(a,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Qr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};mt(a=>{const l=this.getAxisMotionValue(a);if(l){const c=l.get();i[a]=kE({min:c,max:c},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),mt(a=>{if(!io(a,t,null))return;const l=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];l.set(re(c,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;RE.set(this.visualElement,this);const t=this.visualElement.current,n=tn(t,"pointerdown",c=>{const{drag:u,dragListener:f=!0}=this.getProps();u&&f&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Qr(c)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const a=Jt(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(mt(f=>{const d=this.getAxisMotionValue(f);d&&(this.originPoint[f]+=c[f].translate,d.set(d.get()+c[f].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=zu,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:l}}}function io(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function IE(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class FE extends Wn{constructor(t){super(t),this.removeGroupControls=ae,this.removeListeners=ae,this.controls=new DE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ae}unmount(){this.removeGroupControls(),this.removeListeners()}}const bh=e=>(t,n)=>{e&&Q.update(()=>e(t,n))};class OE extends Wn{constructor(){super(...arguments),this.removePointerDownListener=ae}onPointerDown(t){this.session=new Cy(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ry(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:bh(t),onStart:bh(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&Q.update(()=>i(o,a))}}}mount(){this.removePointerDownListener=tn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function _E(){const e=C.useContext(ol);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=C.useId();return C.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const Qo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Eh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ri={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(_.test(e))e=parseFloat(e);else return e;const n=Eh(e,t.target.x),r=Eh(e,t.target.y);return`${n}% ${r}%`}},$E={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=zn.parse(e);if(i.length>5)return r;const o=zn.createTransformer(e),a=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+a]/=l,i[1+a]/=c;const u=re(l,c,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}};class ME extends le.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;Ww(zE),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Qo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||Q.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Dy(e){const[t,n]=_E(),r=C.useContext(Yd);return le.createElement(ME,{...e,layoutGroup:r,switchLayoutGroup:C.useContext(P0),isPresent:t,safeToRemove:n})}const zE={borderRadius:{...Ri,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ri,borderTopRightRadius:Ri,borderBottomLeftRadius:Ri,borderBottomRightRadius:Ri,boxShadow:$E},Iy=["TopLeft","TopRight","BottomLeft","BottomRight"],BE=Iy.length,Ch=e=>typeof e=="string"?parseFloat(e):e,Th=e=>typeof e=="number"||_.test(e);function VE(e,t,n,r,i,o){i?(e.opacity=re(0,n.opacity!==void 0?n.opacity:1,UE(r)),e.opacityExit=re(t.opacity!==void 0?t.opacity:1,0,HE(r))):o&&(e.opacity=re(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<BE;a++){const l=`border${Iy[a]}Radius`;let c=Ph(t,l),u=Ph(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Th(c)===Th(u)?(e[l]=Math.max(re(Ch(c),Ch(u),r),0),(Ht.test(u)||Ht.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=re(t.rotate||0,n.rotate||0,r))}function Ph(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const UE=Fy(0,.5,ry),HE=Fy(.5,.95,ae);function Fy(e,t,n){return r=>r<e?0:r>t?1:n(Es(e,t,r))}function Ah(e,t){e.min=t.min,e.max=t.max}function rt(e,t){Ah(e.x,t.x),Ah(e.y,t.y)}function Nh(e,t,n,r,i){return e-=t,e=Da(e,1/n,r),i!==void 0&&(e=Da(e,1/i,r)),e}function GE(e,t=0,n=1,r=.5,i,o=e,a=e){if(Ht.test(t)&&(t=parseFloat(t),t=re(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=re(o.min,o.max,r);e===o&&(l-=t),e.min=Nh(e.min,t,n,l,i),e.max=Nh(e.max,t,n,l,i)}function Lh(e,t,[n,r,i],o,a){GE(e,t[n],t[r],t[i],t.scale,o,a)}const WE=["x","scaleX","originX"],QE=["y","scaleY","originY"];function Rh(e,t,n,r){Lh(e.x,t,WE,n?n.x:void 0,r?r.x:void 0),Lh(e.y,t,QE,n?n.y:void 0,r?r.y:void 0)}function Dh(e){return e.translate===0&&e.scale===1}function Oy(e){return Dh(e.x)&&Dh(e.y)}function KE(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function _y(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Ih(e){return Xe(e.x)/Xe(e.y)}class YE{constructor(){this.members=[]}add(t){df(this.members,t),t.scheduleRender()}remove(t){if(ff(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Fh(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:c,rotateX:u,rotateY:f}=n;c&&(r+=`rotate(${c}deg) `),u&&(r+=`rotateX(${u}deg) `),f&&(r+=`rotateY(${f}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const qE=(e,t)=>e.depth-t.depth;class XE{constructor(){this.children=[],this.isDirty=!1}add(t){df(this.children,t),this.isDirty=!0}remove(t){ff(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(qE),this.isDirty=!1,this.children.forEach(t)}}function ZE(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(ln(r),e(o-t))};return Q.read(r,!0),()=>ln(r)}function JE(e){window.MotionDebug&&window.MotionDebug.record(e)}function eC(e){return e instanceof SVGElement&&e.tagName!=="svg"}function tC(e,t,n){const r=Ge(e)?e:mi(e);return r.start(uf("",r,t,n)),r.animation}const Oh=["","X","Y","Z"],nC={visibility:"hidden"},_h=1e3;let rC=0;const nr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function $y({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},l=t==null?void 0:t()){this.id=rC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,nr.totalNodes=nr.resolvedTargetDeltas=nr.recalculatedProjection=0,this.nodes.forEach(oC),this.nodes.forEach(dC),this.nodes.forEach(fC),this.nodes.forEach(aC),JE(nr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new XE)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new pf),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const c=this.eventHandlers.get(a);c&&c.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=eC(a),this.instance=a;const{layoutId:c,layout:u,visualElement:f}=this.options;if(f&&!f.current&&f.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let d;const m=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=ZE(m,250),Qo.hasAnimatedSinceResize&&(Qo.hasAnimatedSinceResize=!1,this.nodes.forEach(Mh))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&f&&(c||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:m,hasRelativeTargetChanged:x,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||f.getDefaultTransition()||xC,{onLayoutAnimationStart:E,onLayoutAnimationComplete:g}=f.getProps(),p=!this.targetLayout||!_y(this.targetLayout,S)||x,h=!m&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||h||m&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,h);const y={...cf(j,"layout"),onPlay:E,onComplete:g};(f.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y)}else m||Mh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ln(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pC),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach($h);return}this.isUpdating||this.nodes.forEach(cC),this.isUpdating=!1,this.nodes.forEach(uC),this.nodes.forEach(iC),this.nodes.forEach(sC),this.clearAllSnapshots();const l=performance.now();Ne.delta=Mn(0,1e3/60,l-Ne.timestamp),Ne.timestamp=l,Ne.isProcessing=!0,Gl.update.process(Ne),Gl.preRender.process(Ne),Gl.render.process(Ne),Ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(lC),this.sharedNodes.forEach(hC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Q.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Q.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=fe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!Oy(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,f=u!==this.prevTransformTemplateValue;a&&(l||tr(this.latestValues)||f)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return a&&(c=this.removeTransform(c)),yC(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return fe();const l=a.measureViewportBox(),{scroll:c}=this.root;return c&&(yn(l.x,c.offset.x),yn(l.y,c.offset.y)),l}removeElementScroll(a){const l=fe();rt(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:d}=u;if(u!==this.root&&f&&d.layoutScroll){if(f.isRoot){rt(l,a);const{scroll:m}=this.root;m&&(yn(l.x,-m.offset.x),yn(l.y,-m.offset.y))}yn(l.x,f.offset.x),yn(l.y,f.offset.y)}}return l}applyTransform(a,l=!1){const c=fe();rt(c,a);for(let u=0;u<this.path.length;u++){const f=this.path[u];!l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&qr(c,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),tr(f.latestValues)&&qr(c,f.latestValues)}return tr(this.latestValues)&&qr(c,this.latestValues),c}removeTransform(a){const l=fe();rt(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!tr(u.latestValues))continue;Bu(u.latestValues)&&u.updateSnapshot();const f=fe(),d=u.measurePageBox();rt(f,d),Rh(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,f)}return tr(this.latestValues)&&Rh(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:m}=this.options;if(!(!this.layout||!(d||m))){if(this.resolvedRelativeTargetAt=Ne.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),es(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=fe(),this.targetWithTransforms=fe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),vE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):rt(this.target,this.layout.layoutBox),Ny(this.target,this.targetDelta)):rt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),es(this.relativeTargetOrigin,this.target,x.target),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}nr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Bu(this.parent.latestValues)||Ay(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Ne.timestamp&&(u=!1),u)return;const{layout:f,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||d))return;rt(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,x=this.treeScale.y;PE(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:S}=l;if(!S){this.projectionTransform&&(this.projectionDelta=Yr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Yr(),this.projectionDeltaWithTransform=Yr());const j=this.projectionTransform;Ji(this.projectionDelta,this.layoutCorrected,S,this.latestValues),this.projectionTransform=Fh(this.projectionDelta,this.treeScale),(this.projectionTransform!==j||this.treeScale.x!==m||this.treeScale.y!==x)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S)),nr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,l=!1){const c=this.snapshot,u=c?c.latestValues:{},f={...this.latestValues},d=Yr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const m=fe(),x=c?c.source:void 0,S=this.layout?this.layout.source:void 0,j=x!==S,E=this.getStack(),g=!E||E.members.length<=1,p=!!(j&&!g&&this.options.crossfade===!0&&!this.path.some(gC));this.animationProgress=0;let h;this.mixTargetDelta=y=>{const w=y/1e3;zh(d.x,a.x,w),zh(d.y,a.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(es(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),mC(this.relativeTarget,this.relativeTargetOrigin,m,w),h&&KE(this.relativeTarget,h)&&(this.isProjectionDirty=!1),h||(h=fe()),rt(h,this.relativeTarget)),j&&(this.animationValues=f,VE(f,u,this.latestValues,w,p,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ln(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Q.update(()=>{Qo.hasAnimatedSinceResize=!0,this.currentAnimation=tC(0,_h,{...a,onUpdate:l=>{this.mixTargetDelta(l),a.onUpdate&&a.onUpdate(l)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_h),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:f}=a;if(!(!l||!c||!u)){if(this!==a&&this.layout&&u&&My(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||fe();const d=Xe(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+d;const m=Xe(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+m}rt(l,c),qr(l,f),Ji(this.projectionDeltaWithTransform,this.layoutCorrected,l,f)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new YE),this.sharedNodes.get(a).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:l}=this.options;return l?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:l}=this.options;return l?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:c}=a;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(l=!0),!l)return;const u={};for(let f=0;f<Oh.length;f++){const d="rotate"+Oh[f];c[d]&&(u[d]=c[d],a.setStaticValue(d,0))}a.render();for(const f in u)a.setStaticValue(f,u[f]);a.scheduleRender()}getProjectionStyles(a){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return nC;const u={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Wo(a==null?void 0:a.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const j={};return this.options.layoutId&&(j.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,j.pointerEvents=Wo(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!tr(this.latestValues)&&(j.transform=f?f({},""):"none",this.hasProjected=!1),j}const m=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=Fh(this.projectionDeltaWithTransform,this.treeScale,m),f&&(u.transform=f(m,u.transform));const{x,y:S}=this.projectionDelta;u.transformOrigin=`${x.origin*100}% ${S.origin*100}% 0`,d.animationValues?u.opacity=d===this?(c=(l=m.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=d===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const j in Ca){if(m[j]===void 0)continue;const{correct:E,applyTo:g}=Ca[j],p=u.transform==="none"?m[j]:E(m[j],d);if(g){const h=g.length;for(let y=0;y<h;y++)u[g[y]]=p}else u[j]=p}return this.options.layoutId&&(u.pointerEvents=d===this?Wo(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach($h),this.root.sharedNodes.clear()}}}function iC(e){e.updateLayout()}function sC(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?mt(d=>{const m=a?n.measuredBox[d]:n.layoutBox[d],x=Xe(m);m.min=r[d].min,m.max=m.min+x}):My(o,n.layoutBox,r)&&mt(d=>{const m=a?n.measuredBox[d]:n.layoutBox[d],x=Xe(r[d]);m.max=m.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+x)});const l=Yr();Ji(l,r,n.layoutBox);const c=Yr();a?Ji(c,e.applyTransform(i,!0),n.measuredBox):Ji(c,r,n.layoutBox);const u=!Oy(l);let f=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:m,layout:x}=d;if(m&&x){const S=fe();es(S,n.layoutBox,m.layoutBox);const j=fe();es(j,r,x.layoutBox),_y(S,j)||(f=!0),d.options.layoutRoot&&(e.relativeTarget=j,e.relativeTargetOrigin=S,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:f})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function oC(e){nr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function aC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function lC(e){e.clearSnapshot()}function $h(e){e.clearMeasurements()}function cC(e){e.isLayoutDirty=!1}function uC(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Mh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function dC(e){e.resolveTargetDelta()}function fC(e){e.calcProjection()}function pC(e){e.resetRotation()}function hC(e){e.removeLeadSnapshot()}function zh(e,t,n){e.translate=re(t.translate,0,n),e.scale=re(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Bh(e,t,n,r){e.min=re(t.min,n.min,r),e.max=re(t.max,n.max,r)}function mC(e,t,n,r){Bh(e.x,t.x,n.x,r),Bh(e.y,t.y,n.y,r)}function gC(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const xC={duration:.45,ease:[.4,0,.1,1]},Vh=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Uh=Vh("applewebkit/")&&!Vh("chrome/")?Math.round:ae;function Hh(e){e.min=Uh(e.min),e.max=Uh(e.max)}function yC(e){Hh(e.x),Hh(e.y)}function My(e,t,n){return e==="position"||e==="preserve-aspect"&&!Mu(Ih(t),Ih(n),.2)}const vC=$y({attachResizeListener:(e,t)=>Jt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),nc={current:void 0},zy=$y({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!nc.current){const e=new vC({});e.mount(window),e.setOptions({layoutScroll:!0}),nc.current=e}return nc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),jC={pan:{Feature:OE},drag:{Feature:FE,ProjectionNode:zy,MeasureLayout:Dy}},SC=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function wC(e){const t=SC.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Uu(e,t,n=1){const[r,i]=wC(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return wy(a)?parseFloat(a):a}else return Ru(i)?Uu(i,t,n+1):i}function kC(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!Ru(o))return;const a=Uu(o,r);a&&i.set(a)});for(const i in t){const o=t[i];if(!Ru(o))continue;const a=Uu(o,r);a&&(t[i]=a,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const bC=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),By=e=>bC.has(e),EC=e=>Object.keys(e).some(By),Gh=e=>e===wr||e===_,Wh=(e,t)=>parseFloat(e.split(", ")[t]),Qh=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return Wh(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?Wh(o[1],e):0}},CC=new Set(["x","y","z"]),TC=Rs.filter(e=>!CC.has(e));function PC(e){const t=[];return TC.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const gi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Qh(4,13),y:Qh(5,14)};gi.translateX=gi.x;gi.translateY=gi.y;const AC=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,l={};a==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{l[u]=gi[u](r,o)}),t.render();const c=t.measureViewportBox();return n.forEach(u=>{const f=t.getValue(u);f&&f.jump(l[u]),e[u]=gi[u](c,o)}),e},NC=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(By);let o=[],a=!1;const l=[];if(i.forEach(c=>{const u=e.getValue(c);if(!e.hasValue(c))return;let f=n[c],d=Li(f);const m=t[c];let x;if(Pa(m)){const S=m.length,j=m[0]===null?1:0;f=m[j],d=Li(f);for(let E=j;E<S&&m[E]!==null;E++)x?rf(Li(m[E])===x):x=Li(m[E])}else x=Li(m);if(d!==x)if(Gh(d)&&Gh(x)){const S=u.get();typeof S=="string"&&u.set(parseFloat(S)),typeof m=="string"?t[c]=parseFloat(m):Array.isArray(m)&&x===_&&(t[c]=m.map(parseFloat))}else d!=null&&d.transform&&(x!=null&&x.transform)&&(f===0||m===0)?f===0?u.set(x.transform(f)):t[c]=d.transform(m):(a||(o=PC(e),a=!0),l.push(c),r[c]=r[c]!==void 0?r[c]:t[c],u.jump(m))}),l.length){const c=l.indexOf("height")>=0?window.pageYOffset:null,u=AC(t,e,l);return o.length&&o.forEach(([f,d])=>{e.getValue(f).set(d)}),e.render(),al&&c!==null&&window.scrollTo({top:c}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function LC(e,t,n,r){return EC(t)?NC(e,t,n,r):{target:t,transitionEnd:r}}const RC=(e,t,n,r)=>{const i=kC(e,t,r);return t=i.target,r=i.transitionEnd,LC(e,t,n,r)},Hu={current:null},Vy={current:!1};function DC(){if(Vy.current=!0,!!al)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Hu.current=e.matches;e.addListener(t),t()}else Hu.current=!1}function IC(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],a=n[i];if(Ge(o))e.addValue(i,o),Ra(r)&&r.add(i);else if(Ge(a))e.addValue(i,mi(o,{owner:e})),Ra(r)&&r.remove(i);else if(a!==o)if(e.hasValue(i)){const l=e.getValue(i);!l.hasAnimated&&l.set(o)}else{const l=e.getStaticValue(i);e.addValue(i,mi(l!==void 0?l:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Kh=new WeakMap,Uy=Object.keys(bs),FC=Uy.length,Yh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],OC=Kd.length;class _C{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Q.render(this.render,!1,!0);const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.isControllingVariants=cl(n),this.isVariantNode=T0(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{});for(const d in f){const m=f[d];l[d]!==void 0&&Ge(m)&&(m.set(l[d],!1),Ra(u)&&u.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Kh.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Vy.current||DC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Hu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Kh.delete(this.current),this.projection&&this.projection.unmount(),ln(this.notifyUpdate),ln(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=Sr.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&Q.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let a,l;for(let c=0;c<FC;c++){const u=Uy[c],{isEnabled:f,Feature:d,ProjectionNode:m,MeasureLayout:x}=bs[u];m&&(a=m),f(n)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),x&&(l=x))}if((this.type==="html"||this.type==="svg")&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:u,drag:f,dragConstraints:d,layoutScroll:m,layoutRoot:x}=n;this.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!f||d&&Qr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:m,layoutRoot:x})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):fe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Yh.length;r++){const i=Yh[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=IC(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<OC;r++){const i=Kd[r],o=this.props[i];(ks(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=mi(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=nf(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ge(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new pf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Hy extends _C{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let a=eE(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),a&&(a=i(a))),o){Zb(this,r,a);const l=RC(this,r,a,n);n=l.transitionEnd,r=l.target}return{transition:t,transitionEnd:n,...r}}}function $C(e){return window.getComputedStyle(e)}class MC extends Hy{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Sr.has(n)){const r=lf(n);return r&&r.default||0}else{const r=$C(t),i=(L0(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Ly(t,n)}build(t,n,r,i){Xd(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return tf(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ge(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){_0(t,n,r,i)}}class zC extends Hy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Sr.has(n)){const r=lf(n);return r&&r.default||0}return n=$0.has(n)?n:Wd(n),t.getAttribute(n)}measureInstanceViewportBox(){return fe()}scrapeMotionValuesFromProps(t,n){return z0(t,n)}build(t,n,r,i){Jd(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){M0(t,n,r,i)}mount(t){this.isSVGTag=ef(t.tagName),super.mount(t)}}const BC=(e,t)=>qd(e)?new zC(t,{enableHardwareAcceleration:!1}):new MC(t,{enableHardwareAcceleration:!0}),VC={layout:{ProjectionNode:zy,MeasureLayout:Dy}},UC={...mE,...Fk,...jC,...VC},We=Hw((e,t)=>wk(e,t,UC,BC));function Gy(){const e=C.useRef(!1);return Gd(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function HC(){const e=Gy(),[t,n]=C.useState(0),r=C.useCallback(()=>{e.current&&n(t+1)},[t]);return[C.useCallback(()=>Q.postRender(r),[r]),t]}class GC extends C.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function WC({children:e,isPresent:t}){const n=C.useId(),r=C.useRef(null),i=C.useRef({width:0,height:0,top:0,left:0});return C.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),C.createElement(GC,{isPresent:t,childRef:r,sizeRef:i},C.cloneElement(e,{ref:r}))}const rc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const l=B0(QC),c=C.useId(),u=C.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:f=>{l.set(f,!0);for(const d of l.values())if(!d)return;r&&r()},register:f=>(l.set(f,!1),()=>l.delete(f))}),o?void 0:[n]);return C.useMemo(()=>{l.forEach((f,d)=>l.set(d,!1))},[n]),C.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),a==="popLayout"&&(e=C.createElement(WC,{isPresent:n},e)),C.createElement(ol.Provider,{value:u},e)};function QC(){return new Map}function KC(e){return C.useEffect(()=>()=>e(),[])}const rr=e=>e.key||"";function YC(e,t){e.forEach(n=>{const r=rr(n);t.set(r,n)})}function qC(e){const t=[];return C.Children.forEach(e,n=>{C.isValidElement(n)&&t.push(n)}),t}const Wy=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{const l=C.useContext(Yd).forceRender||HC()[0],c=Gy(),u=qC(e);let f=u;const d=C.useRef(new Map).current,m=C.useRef(f),x=C.useRef(new Map).current,S=C.useRef(!0);if(Gd(()=>{S.current=!1,YC(u,x),m.current=f}),KC(()=>{S.current=!0,x.clear(),d.clear()}),S.current)return C.createElement(C.Fragment,null,f.map(p=>C.createElement(rc,{key:rr(p),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:a},p)));f=[...f];const j=m.current.map(rr),E=u.map(rr),g=j.length;for(let p=0;p<g;p++){const h=j[p];E.indexOf(h)===-1&&!d.has(h)&&d.set(h,void 0)}return a==="wait"&&d.size&&(f=[]),d.forEach((p,h)=>{if(E.indexOf(h)!==-1)return;const y=x.get(h);if(!y)return;const w=j.indexOf(h);let k=p;if(!k){const b=()=>{d.delete(h);const T=Array.from(x.keys()).filter(P=>!E.includes(P));if(T.forEach(P=>x.delete(P)),m.current=u.filter(P=>{const L=rr(P);return L===h||T.includes(L)}),!d.size){if(c.current===!1)return;l(),r&&r()}};k=C.createElement(rc,{key:rr(y),isPresent:!1,onExitComplete:b,custom:t,presenceAffectsLayout:o,mode:a},y),d.set(h,k)}f.splice(w,0,k)}),f=f.map(p=>{const h=p.key;return d.has(h)?p:C.createElement(rc,{key:rr(p),isPresent:!0,presenceAffectsLayout:o,mode:a},p)}),C.createElement(C.Fragment,null,d.size?f:f.map(p=>C.cloneElement(p)))},XC=({isOpen:e,toggleMenu:t,toggleTheme:n,isDarkTheme:r})=>s.jsxs(s.Fragment,{children:[s.jsx(ZC,{onClick:t,children:s.jsx("i",{className:`fas ${e?"fa-times":"fa-bars"}`})}),s.jsx(Wy,{children:e&&s.jsx(JC,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:s.jsxs(eT,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:20},children:[s.jsxs(tT,{children:[s.jsxs(nT,{children:[s.jsx(rT,{}),s.jsx(iT,{children:"DuckDB"})]}),s.jsx(sT,{onClick:t,children:s.jsx("i",{className:"fas fa-times"})})]}),s.jsxs(oT,{children:[s.jsxs(ic,{href:"#documentation",children:["Documentation",s.jsx("i",{className:"fas fa-chevron-right"})]}),s.jsxs(ic,{href:"#resources",children:["Resources",s.jsx("i",{className:"fas fa-chevron-right"})]}),s.jsxs(ic,{href:"https://github.com/duckdb/duckdb",target:"_blank",children:["GitHub",s.jsx("i",{className:"fas fa-external-link-alt"})]})]}),s.jsxs(aT,{children:[s.jsxs(lT,{onClick:n,children:[s.jsx("i",{className:`fas ${r?"fa-sun":"fa-moon"}`}),"Switch to ",r?"Light":"Dark"," Mode"]}),s.jsx(cT,{children:"Support"})]})]})})})]}),ZC=v.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.text};
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`,JC=v(We.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`,eT=v(We.div)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 75%;
  max-width: 300px;
  background-color: ${({theme:e})=>e.background};
  padding: 20px;
  display: flex;
  flex-direction: column;
`,tT=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`,nT=v.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,rT=v.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.accent};
  border-radius: 50%;
`,iT=v.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme:e})=>e.text};
`,sT=v.button`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.text};
  font-size: 24px;
  cursor: pointer;
`,oT=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,ic=v.a`
  color: ${({theme:e})=>e.text};
  font-size: 18px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  i {
    font-size: 14px;
    opacity: 0.7;
  }
`,aT=v.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,lT=v.button`
  background: transparent;
  border: 1px solid ${({theme:e})=>e.text};
  color: ${({theme:e})=>e.text};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  i {
    font-size: 16px;
  }
`,cT=v.button`
  background-color: ${({theme:e})=>e.accent};
  color: ${({theme:e})=>e.background};
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 700;
`,uT=({toggleTheme:e,isDarkTheme:t})=>{const[n,r]=C.useState(!1),[i,o]=C.useState(!1),a=()=>{r(!n)};return C.useEffect(()=>{const l=()=>{window.scrollY>50?o(!0):o(!1)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),s.jsx(dT,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},scrolled:i,children:s.jsxs("div",{className:"container",children:[s.jsxs(Qy,{href:"/",children:[s.jsx(fT,{}),s.jsx(pT,{children:"DuckDB"})]}),s.jsxs(hT,{children:[s.jsx(qh,{href:"#documentation",children:"Documentation"}),s.jsx(qh,{href:"#resources",children:"Resources"}),s.jsxs(mT,{children:["GitHub ",s.jsx("i",{className:"fas fa-star"})," 278K"]}),s.jsx(gT,{onClick:e,children:s.jsx("i",{className:`fas ${t?"fa-sun":"fa-moon"}`})}),s.jsx(xT,{children:"Support"})]}),s.jsx(XC,{isOpen:n,toggleMenu:a,toggleTheme:e,isDarkTheme:t})]})})},dT=v(We.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({theme:e,scrolled:t})=>t?"rgba(0, 0, 0, 0.85)":"transparent"};
  backdrop-filter: ${({scrolled:e})=>e?"blur(10px)":"none"};
  padding: 10px 20px;
  z-index: 1000;
  border-bottom: 1px solid ${({scrolled:e})=>e?"rgba(255, 255, 255, 0.1)":"transparent"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,Qy=v.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`,fT=v.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.accent};
  border-radius: 50%;
  transition: transform 0.3s ease;

  ${Qy}:hover & {
    transform: scale(1.1);
  }
`,pT=v.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme:e})=>e.text};
`,hT=v.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`,qh=v.a`
  position: relative;
  color: ${({theme:e})=>e.text};
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  transition: opacity 0.2s ease;

  &:after {
    content: '▼';
    font-size: 8px;
    margin-left: 4px;
    vertical-align: middle;
  }

  &:hover {
    opacity: 0.8;
  }
`,mT=v.span`
  color: ${({theme:e})=>e.text};
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;

  i {
    font-size: 18px;
    color: ${({theme:e})=>e.accent};
  }
`,gT=v.button`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.text};
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(30deg);
  }
`,xT=v.button`
  background-color: ${({theme:e})=>e.accent};
  color: ${({theme:e})=>e.background};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,yT=()=>s.jsxs(vT,{children:[s.jsxs(jT,{children:[s.jsx(ST,{children:s.jsxs(We.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsx(wT,{children:"TCP DuckDB Server"}),s.jsx(kT,{children:"A high-performance TCP server for managing and interacting with DuckDB databases over a network"}),s.jsxs(bT,{children:[s.jsxs(sc,{to:"/docs",children:["Get Started",s.jsx("i",{className:"fas fa-arrow-right"})]}),s.jsxs(ET,{href:"https://github.com/yourusername/tcp-duckdb-server",target:"_blank",children:[s.jsx("i",{className:"fab fa-github"}),"View on GitHub"]})]})]})}),s.jsx(CT,{children:s.jsx(We.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.2},children:s.jsx(TT,{children:s.jsx("i",{className:"fas fa-database"})})})})]}),s.jsxs(PT,{children:[s.jsx(Xh,{children:"Key Features"}),s.jsxs(AT,{children:[s.jsxs(Er,{children:[s.jsx(Cr,{children:s.jsx("i",{className:"fas fa-shield-alt"})}),s.jsx(Tr,{children:"User Authentication"}),s.jsx(Pr,{children:"Secure login system with username/password authentication to control access to your databases."})]}),s.jsxs(Er,{children:[s.jsx(Cr,{children:s.jsx("i",{className:"fas fa-database"})}),s.jsx(Tr,{children:"Database Management"}),s.jsx(Pr,{children:"Create and manage multiple databases with granular permissions for different users and use cases."})]}),s.jsxs(Er,{children:[s.jsx(Cr,{children:s.jsx("i",{className:"fas fa-lock"})}),s.jsx(Tr,{children:"Access Control"}),s.jsx(Pr,{children:"Table-level permissions system for fine-grained control over who can access and modify your data."})]}),s.jsxs(Er,{children:[s.jsx(Cr,{children:s.jsx("i",{className:"fas fa-exchange-alt"})}),s.jsx(Tr,{children:"PostgreSQL Integration"}),s.jsx(Pr,{children:"Link with PostgreSQL databases to easily migrate and sync data between different database systems."})]}),s.jsxs(Er,{children:[s.jsx(Cr,{children:s.jsx("i",{className:"fas fa-code"})}),s.jsx(Tr,{children:"Simple Protocol"}),s.jsx(Pr,{children:"Straightforward text-based protocol makes it easy to build client applications in any programming language."})]}),s.jsxs(Er,{children:[s.jsx(Cr,{children:s.jsx("i",{className:"fas fa-bolt"})}),s.jsx(Tr,{children:"High Performance"}),s.jsx(Pr,{children:"Built on DuckDB's in-process analytical database system for lightning-fast query execution on structured data."})]})]})]}),s.jsxs(NT,{children:[s.jsx(Xh,{children:"Use Cases"}),s.jsxs(LT,{children:[s.jsxs(RT,{children:[s.jsxs(Di,{children:[s.jsx("i",{className:"fas fa-check-circle"}),s.jsx("span",{children:"Centralized data analytics for teams"})]}),s.jsxs(Di,{children:[s.jsx("i",{className:"fas fa-check-circle"}),s.jsx("span",{children:"Remote database access for distributed applications"})]}),s.jsxs(Di,{children:[s.jsx("i",{className:"fas fa-check-circle"}),s.jsx("span",{children:"Data warehousing with fine-grained access control"})]}),s.jsxs(Di,{children:[s.jsx("i",{className:"fas fa-check-circle"}),s.jsx("span",{children:"PostgreSQL to DuckDB migration and synchronization"})]}),s.jsxs(Di,{children:[s.jsx("i",{className:"fas fa-check-circle"}),s.jsx("span",{children:"Multi-tenant database solutions"})]})]}),s.jsxs(DT,{children:[s.jsxs(IT,{children:[s.jsx(oc,{style:{backgroundColor:"#FF5F56"}}),s.jsx(oc,{style:{backgroundColor:"#FFBD2E"}}),s.jsx(oc,{style:{backgroundColor:"#27C93F"}}),s.jsx(FT,{children:"Example Connection"})]}),s.jsxs(OT,{children:[s.jsx(Ft,{children:s.jsx("span",{className:"comment",children:"# Connect to the server"})}),s.jsx(Ft,{children:"telnet localhost 9876"}),s.jsx(Ft,{children:s.jsx("span",{className:"comment",children:"# Login as super user"})}),s.jsx(Ft,{children:"login duck superpassword"}),s.jsx(Ft,{children:s.jsx("span",{className:"comment",children:"# Create a new database"})}),s.jsx(Ft,{children:"create database analytics"}),s.jsx(Ft,{children:s.jsx("span",{className:"comment",children:"# Connect to the database"})}),s.jsx(Ft,{children:"connect analytics"}),s.jsx(Ft,{children:s.jsx("span",{className:"comment",children:"# Run a SQL query"})}),s.jsx(Ft,{children:"SELECT * FROM users WHERE active = true;"})]})]})]})]}),s.jsx(_T,{children:s.jsxs($T,{children:[s.jsx(MT,{children:"Ready to Get Started?"}),s.jsx(zT,{children:"Explore our documentation to learn how to install, configure, and use the TCP DuckDB Server."}),s.jsxs(BT,{children:[s.jsxs(sc,{to:"/docs/installation",children:["Installation Guide",s.jsx("i",{className:"fas fa-download"})]}),s.jsxs(sc,{to:"/docs/quick-start",children:["Quick Start",s.jsx("i",{className:"fas fa-play"})]})]})]})}),s.jsxs(VT,{children:[s.jsxs(UT,{children:[s.jsxs(HT,{children:[s.jsxs(GT,{children:[s.jsx("i",{className:"fas fa-database"}),s.jsx("span",{children:"TCP DuckDB Server"})]}),s.jsx(WT,{children:"High-performance TCP server for DuckDB"})]}),s.jsxs(QT,{children:[s.jsxs(Zh,{children:[s.jsx(Jh,{children:"Documentation"}),s.jsx(so,{to:"/docs",children:"Overview"}),s.jsx(so,{to:"/docs/installation",children:"Installation"}),s.jsx(so,{to:"/docs/quick-start",children:"Quick Start"}),s.jsx(so,{to:"/docs/commands",children:"Commands"})]}),s.jsxs(Zh,{children:[s.jsx(Jh,{children:"Resources"}),s.jsx(ac,{href:"https://duckdb.org",target:"_blank",children:"DuckDB Official"}),s.jsx(ac,{href:"https://github.com/yourusername/tcp-duckdb-server",target:"_blank",children:"GitHub"}),s.jsx(ac,{href:"https://github.com/yourusername/tcp-duckdb-server/issues",target:"_blank",children:"Report Issues"})]})]})]}),s.jsxs(KT,{children:["© ",new Date().getFullYear()," TCP DuckDB Server. All rights reserved."]})]})]}),vT=v.div`
  width: 100%;
`,jT=v.section`
  display: flex;
  min-height: calc(100vh - 70px);
  padding: 60px 0;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }
`,ST=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  
  @media (max-width: 992px) {
    padding: 0;
    margin-bottom: 40px;
  }
`,wT=v.h1`
  font-size: 56px;
  font-weight: 800;
  margin: 0 0 20px;
  background: linear-gradient(to right, ${({theme:e})=>e.accent}, #c0f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`,kT=v.p`
  font-size: 22px;
  line-height: 1.6;
  color: ${({theme:e})=>e.text};
  margin: 0 0 30px;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin: 0 auto 30px;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`,bT=v.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,sc=v(Md)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: ${({theme:e})=>e.accent};
  color: #000;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease;
  
  i {
    font-size: 16px;
  }
  
  &:hover {
    background-color: #ffcc29;
  }
`,ET=v.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({theme:e})=>e.text};
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease;
  
  i {
    font-size: 16px;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`,CT=v.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,TT=v.div`
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 193, 7, 0.15) 0%, rgba(255, 193, 7, 0.05) 70%, rgba(255, 193, 7, 0) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    font-size: 180px;
    color: ${({theme:e})=>e.accent};
    opacity: 0.8;
  }
  
  @media (max-width: 1200px) {
    width: 300px;
    height: 300px;
    
    i {
      font-size: 120px;
    }
  }
  
  @media (max-width: 992px) {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    
    i {
      font-size: 100px;
    }
  }
`,Xh=v.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 50px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 30px;
  }
`,PT=v.section`
  padding: 100px 40px;
  background-color: ${({theme:e})=>e.secondary};
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,AT=v.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Er=v.div`
  background-color: ${({theme:e})=>e.background};
  border-radius: 8px;
  padding: 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,Cr=v.div`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 193, 7, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  i {
    font-size: 24px;
    color: ${({theme:e})=>e.accent};
  }
`,Tr=v.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 15px;
`,Pr=v.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({theme:e})=>e.lineNumber};
  margin: 0;
`,NT=v.section`
  padding: 100px 40px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,LT=v.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
  }
`,RT=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 40px;
  
  @media (max-width: 992px) {
    padding-right: 0;
  }
`,Di=v.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  font-size: 18px;
  
  i {
    color: ${({theme:e})=>e.accent};
    font-size: 20px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,DT=v.div`
  flex: 1;
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`,IT=v.div`
  background-color: #2a2a2a;
  padding: 12px 15px;
  display: flex;
  align-items: center;
`,oc=v.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
`,FT=v.div`
  margin-left: 10px;
  font-size: 14px;
  color: #aaa;
`,OT=v.div`
  padding: 20px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
`,Ft=v.div`
  padding: 3px 0;
  color: #d9d9d9;
  
  .comment {
    color: #6a9955;
  }
`,_T=v.section`
  padding: 80px 40px;
  background-color: ${({theme:e})=>e.secondary};
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,$T=v.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`,MT=v.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 20px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`,zT=v.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 30px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,BT=v.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`,VT=v.footer`
  padding: 60px 40px 30px;
  background-color: ${({theme:e})=>e.background};
  
  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`,UT=v.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`,HT=v.div`
  max-width: 300px;
`,GT=v.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  
  i {
    color: ${({theme:e})=>e.accent};
    font-size: 24px;
  }
  
  span {
    font-size: 20px;
    font-weight: 700;
  }
`,WT=v.p`
  color: ${({theme:e})=>e.lineNumber};
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`,QT=v.div`
  display: flex;
  gap: 80px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 30px;
  }
`,Zh=v.div`
  display: flex;
  flex-direction: column;
`,Jh=v.h4`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,so=v(Md)`
  color: ${({theme:e})=>e.lineNumber};
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({theme:e})=>e.accent};
  }
`,ac=v.a`
  color: ${({theme:e})=>e.lineNumber};
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({theme:e})=>e.accent};
  }
`,KT=v.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({theme:e})=>e.lineNumber};
  font-size: 14px;
`,em=({isOpen:e=!0,onClose:t,isMobile:n=!1})=>{const r=Si(),i=[{title:"Introduction",links:[{path:"/docs",label:"Overview",exact:!0}]},{title:"Getting Started",links:[{path:"/docs/installation",label:"Installation"},{path:"/docs/quick-start",label:"Quick Start"}]},{title:"Core Concepts",links:[{path:"/docs/commands",label:"Commands Reference"},{path:"/docs/security",label:"Security & Access Control"},{path:"/docs/postgres-integration",label:"PostgreSQL Integration"},{path:"/docs/troubleshooting",label:"Troubleshooting"}]},{title:"Usage",links:[{path:"/docs/permissions",label:"User Permissions"},{path:"/docs/databases",label:"Database Management"},{path:"/docs/transactions",label:"Transactions"}]},{title:"Advanced",links:[{path:"/docs/performance",label:"Performance"},{path:"/docs/monitoring",label:"Monitoring"},{path:"/docs/troubleshooting",label:"Troubleshooting"}]},{title:"Development",links:[{path:"/docs/client-libraries",label:"Client Libraries"},{path:"/docs/examples",label:"Examples"},{path:"/docs/api-reference",label:"API Reference"}]}],o={open:{x:0,opacity:1},closed:{x:n?"-100%":0,opacity:n?0:1}};return s.jsxs(YT,{initial:n?"closed":"open",animate:e?"open":"closed",variants:o,transition:{duration:.3},isMobile:n,children:[n&&s.jsx(qT,{onClick:t,children:s.jsx("i",{className:"fas fa-times"})}),s.jsxs(XT,{children:[s.jsxs(ZT,{children:[s.jsxs(JT,{children:[s.jsx(e2,{className:"fas fa-database"}),s.jsx(t2,{children:"TCP DuckDB"})]}),s.jsx(n2,{children:"v1.0.0"})]}),s.jsx(r2,{children:i.map((a,l)=>s.jsxs(i2,{children:[s.jsx(s2,{children:a.title}),s.jsx(o2,{children:a.links.map((c,u)=>s.jsx(a2,{children:s.jsx(l2,{to:c.path,end:c.exact,onClick:n?t:void 0,className:({isActive:f})=>f&&r.pathname===c.path?"active":"",children:c.label})},u))})]},l))}),s.jsxs(c2,{children:[s.jsxs(tm,{href:"https://github.com/yourusername/tcp-duckdb-server",target:"_blank",children:[s.jsx("i",{className:"fab fa-github"}),"GitHub"]}),s.jsxs(tm,{href:"https://duckdb.org",target:"_blank",children:[s.jsx("i",{className:"fas fa-external-link-alt"}),"DuckDB Official"]})]})]})]})},YT=v(We.aside)`
  background-color: ${({theme:e})=>e.secondary};
  width: ${e=>e.isMobile?"100%":"280px"};
  height: 100%;
  overflow-y: auto;
  position: ${e=>e.isMobile?"fixed":"relative"};
  top: 0;
  left: 0;
  z-index: 1000;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    border-right: none;
  }
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`,qT=v.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.text};
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  padding: 5px;
  
  &:hover {
    color: ${({theme:e})=>e.accent};
  }
`,XT=v.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,ZT=v.div`
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`,JT=v.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`,e2=v.i`
  color: ${({theme:e})=>e.accent};
  font-size: 20px;
`,t2=v.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`,n2=v.div`
  font-size: 12px;
  color: ${({theme:e})=>e.lineNumber};
`,r2=v.nav`
  flex: 1;
  padding: 20px;
`,i2=v.div`
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,s2=v.h4`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.lineNumber};
  margin: 0 0 10px;
  letter-spacing: 0.5px;
`,o2=v.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,a2=v.li`
  margin-bottom: 2px;
`,l2=v(PS)`
  display: block;
  padding: 8px 10px;
  text-decoration: none;
  color: ${({theme:e})=>e.text};
  font-size: 14px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &.active {
    background-color: ${({theme:e})=>e.accent};
    color: #000;
    font-weight: 500;
  }
`,c2=v.div`
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
`,tm=v.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${({theme:e})=>e.lineNumber};
  font-size: 14px;
  transition: color 0.2s ease;
  
  i {
    font-size: 16px;
  }
  
  &:hover {
    color: ${({theme:e})=>e.accent};
  }
`,u2=()=>{const[e,t]=C.useState(!1),n=()=>{t(!e)};return s.jsxs(d2,{children:[s.jsx(f2,{children:s.jsx(em,{})}),s.jsxs(m2,{onClick:n,children:[s.jsx("i",{className:"fas fa-bars"}),"Menu"]}),s.jsx(Wy,{children:e&&s.jsxs(s.Fragment,{children:[s.jsx(g2,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:n}),s.jsx(em,{isOpen:e,onClose:n,isMobile:!0})]})}),s.jsx(p2,{children:s.jsx(h2,{children:s.jsx(mS,{})})})]})},d2=v.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: calc(100vh - 70px);
  background: ${({theme:e})=>e.background};
`,f2=v.div`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`,p2=v.main`
  flex: 1;
  padding: 40px 0;
  overflow-x: hidden;
`,h2=v.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,m2=v.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({theme:e})=>e.accent};
  color: #000;
  border: none;
  border-radius: 30px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  i {
    font-size: 18px;
  }
`,g2=v(We.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 990;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;var Ky={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,a={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function p(h){return h instanceof c?new c(h.type,p(h.content),h.alias):Array.isArray(h)?h.map(p):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++o}),p.__id},clone:function p(h,y){y=y||{};var w,k;switch(l.util.type(h)){case"Object":if(k=l.util.objId(h),y[k])return y[k];w={},y[k]=w;for(var b in h)h.hasOwnProperty(b)&&(w[b]=p(h[b],y));return w;case"Array":return k=l.util.objId(h),y[k]?y[k]:(w=[],y[k]=w,h.forEach(function(T,P){w[P]=p(T,y)}),w);default:return h}},getLanguage:function(p){for(;p;){var h=i.exec(p.className);if(h)return h[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,h){p.className=p.className.replace(RegExp(i,"gi"),""),p.classList.add("language-"+h)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT"&&1<2)return document.currentScript;try{throw new Error}catch(w){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack)||[])[1];if(p){var h=document.getElementsByTagName("script");for(var y in h)if(h[y].src==p)return h[y]}return null}},isActive:function(p,h,y){for(var w="no-"+h;p;){var k=p.classList;if(k.contains(h))return!0;if(k.contains(w))return!1;p=p.parentElement}return!!y}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(p,h){var y=l.util.clone(l.languages[p]);for(var w in h)y[w]=h[w];return y},insertBefore:function(p,h,y,w){w=w||l.languages;var k=w[p],b={};for(var T in k)if(k.hasOwnProperty(T)){if(T==h)for(var P in y)y.hasOwnProperty(P)&&(b[P]=y[P]);y.hasOwnProperty(T)||(b[T]=k[T])}var L=w[p];return w[p]=b,l.languages.DFS(l.languages,function(z,G){G===L&&z!=p&&(this[z]=b)}),b},DFS:function p(h,y,w,k){k=k||{};var b=l.util.objId;for(var T in h)if(h.hasOwnProperty(T)){y.call(h,T,h[T],w||T);var P=h[T],L=l.util.type(P);L==="Object"&&!k[b(P)]?(k[b(P)]=!0,p(P,y,null,k)):L==="Array"&&!k[b(P)]&&(k[b(P)]=!0,p(P,y,T,k))}}},plugins:{},highlightAll:function(p,h){l.highlightAllUnder(document,p,h)},highlightAllUnder:function(p,h,y){var w={callback:y,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",w),w.elements=Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)),l.hooks.run("before-all-elements-highlight",w);for(var k=0,b;b=w.elements[k++];)l.highlightElement(b,h===!0,w.callback)},highlightElement:function(p,h,y){var w=l.util.getLanguage(p),k=l.languages[w];l.util.setLanguage(p,w);var b=p.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(b,w);var T=p.textContent,P={element:p,language:w,grammar:k,code:T};function L(G){P.highlightedCode=G,l.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,l.hooks.run("after-highlight",P),l.hooks.run("complete",P),y&&y.call(P.element)}if(l.hooks.run("before-sanity-check",P),b=P.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!P.code){l.hooks.run("complete",P),y&&y.call(P.element);return}if(l.hooks.run("before-highlight",P),!P.grammar){L(l.util.encode(P.code));return}if(h&&r.Worker){var z=new Worker(l.filename);z.onmessage=function(G){L(G.data)},z.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else L(l.highlight(P.code,P.grammar,P.language))},highlight:function(p,h,y){var w={code:p,grammar:h,language:y};if(l.hooks.run("before-tokenize",w),!w.grammar)throw new Error('The language "'+w.language+'" has no grammar.');return w.tokens=l.tokenize(w.code,w.grammar),l.hooks.run("after-tokenize",w),c.stringify(l.util.encode(w.tokens),w.language)},tokenize:function(p,h){var y=h.rest;if(y){for(var w in y)h[w]=y[w];delete h.rest}var k=new d;return m(k,k.head,p),f(p,k,h,k.head,0),S(k)},hooks:{all:{},add:function(p,h){var y=l.hooks.all;y[p]=y[p]||[],y[p].push(h)},run:function(p,h){var y=l.hooks.all[p];if(!(!y||!y.length))for(var w=0,k;k=y[w++];)k(h)}},Token:c};r.Prism=l;function c(p,h,y,w){this.type=p,this.content=h,this.alias=y,this.length=(w||"").length|0}c.stringify=function p(h,y){if(typeof h=="string")return h;if(Array.isArray(h)){var w="";return h.forEach(function(L){w+=p(L,y)}),w}var k={type:h.type,content:p(h.content,y),tag:"span",classes:["token",h.type],attributes:{},language:y},b=h.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(k.classes,b):k.classes.push(b)),l.hooks.run("wrap",k);var T="";for(var P in k.attributes)T+=" "+P+'="'+(k.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+k.tag+' class="'+k.classes.join(" ")+'"'+T+">"+k.content+"</"+k.tag+">"};function u(p,h,y,w){p.lastIndex=h;var k=p.exec(y);if(k&&w&&k[1]){var b=k[1].length;k.index+=b,k[0]=k[0].slice(b)}return k}function f(p,h,y,w,k,b){for(var T in y)if(!(!y.hasOwnProperty(T)||!y[T])){var P=y[T];P=Array.isArray(P)?P:[P];for(var L=0;L<P.length;++L){if(b&&b.cause==T+","+L)return;var z=P[L],G=z.inside,de=!!z.lookbehind,ee=!!z.greedy,et=z.alias;if(ee&&!z.pattern.global){var K=z.pattern.toString().match(/[imsuy]*$/)[0];z.pattern=RegExp(z.pattern.source,K+"g")}for(var me=z.pattern||z,N=w.next,R=k;N!==h.tail&&!(b&&R>=b.reach);R+=N.value.length,N=N.next){var O=N.value;if(h.length>p.length)return;if(!(O instanceof c)){var I=1,$;if(ee){if($=u(me,R,p,de),!$||$.index>=p.length)break;var Z=$.index,tt=$.index+$[0].length,te=R;for(te+=N.value.length;Z>=te;)N=N.next,te+=N.value.length;if(te-=N.value.length,R=te,N.value instanceof c)continue;for(var we=N;we!==h.tail&&(te<tt||typeof we.value=="string");we=we.next)I++,te+=we.value.length;I--,O=p.slice(R,te),$.index-=R}else if($=u(me,0,O,de),!$)continue;var Z=$.index,ke=$[0],kt=O.slice(0,Z),Me=O.slice(Z+ke.length),nt=R+O.length;b&&nt>b.reach&&(b.reach=nt);var be=N.prev;kt&&(be=m(h,be,kt),R+=kt.length),x(h,be,I);var bt=new c(T,G?l.tokenize(ke,G):ke,et,ke);if(N=m(h,be,bt),Me&&m(h,N,Me),I>1){var pl={cause:T+","+L,reach:nt};f(p,h,y,N.prev,R,pl),b&&pl.reach>b.reach&&(b.reach=pl.reach)}}}}}}function d(){var p={value:null,prev:null,next:null},h={value:null,prev:p,next:null};p.next=h,this.head=p,this.tail=h,this.length=0}function m(p,h,y){var w=h.next,k={value:y,prev:h,next:w};return h.next=k,w.prev=k,p.length++,k}function x(p,h,y){for(var w=h.next,k=0;k<y&&w!==p.tail;k++)w=w.next;h.next=w,w.prev=h,p.length-=k}function S(p){for(var h=[],y=p.head.next;y!==p.tail;)h.push(y.value),y=y.next;return h}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(p){var h=JSON.parse(p.data),y=h.language,w=h.code,k=h.immediateClose;r.postMessage(l.highlight(w,l.languages[y],y)),k&&r.close()},!1)),l;var j=l.util.currentScript();j&&(l.filename=j.src,j.hasAttribute("data-manual")&&(l.manual=!0));function E(){l.manual||l.highlightAll()}if(!l.manual){var g=document.readyState;g==="loading"||g==="interactive"&&j&&j.defer?document.addEventListener("DOMContentLoaded",E):window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,16)}return l}(t);e.exports&&(e.exports=n),typeof hf<"u"&&(hf.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,o){var a={};a["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};l["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var c={};c[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:l},n.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var o=r.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(j,E){return"✖ Error "+j+" while fetching file: "+E},o="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",c="loading",u="loaded",f="failed",d="pre[data-src]:not(["+l+'="'+u+'"]):not(['+l+'="'+c+'"])';function m(j,E,g){var p=new XMLHttpRequest;p.open("GET",j,!0),p.onreadystatechange=function(){p.readyState==4&&(p.status<400&&p.responseText?E(p.responseText):p.status>=400?g(i(p.status,p.statusText)):g(o))},p.send(null)}function x(j){var E=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(j||"");if(E){var g=Number(E[1]),p=E[2],h=E[3];return p?h?[g,Number(h)]:[g,void 0]:[g,g]}}n.hooks.add("before-highlightall",function(j){j.selector+=", "+d}),n.hooks.add("before-sanity-check",function(j){var E=j.element;if(E.matches(d)){j.code="",E.setAttribute(l,c);var g=E.appendChild(document.createElement("CODE"));g.textContent=r;var p=E.getAttribute("data-src"),h=j.language;if(h==="none"){var y=(/\.(\w+)$/.exec(p)||[,"none"])[1];h=a[y]||y}n.util.setLanguage(g,h),n.util.setLanguage(E,h);var w=n.plugins.autoloader;w&&w.loadLanguages(h),m(p,function(k){E.setAttribute(l,u);var b=x(E.getAttribute("data-range"));if(b){var T=k.split(/\r\n?|\n/g),P=b[0],L=b[1]==null?T.length:b[1];P<0&&(P+=T.length),P=Math.max(0,Math.min(P-1,T.length)),L<0&&(L+=T.length),L=Math.max(0,Math.min(L,T.length)),k=T.slice(P,L).join(`
`),E.hasAttribute("data-start")||E.setAttribute("data-start",String(P+1))}g.textContent=k,n.highlightElement(g)},function(k){E.setAttribute(l,f),g.textContent=k})}}),n.plugins.fileHighlight={highlight:function(E){for(var g=(E||document).querySelectorAll(d),p=0,h;h=g[p++];)n.highlightElement(h)}};var S=!1;n.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ky);var x2=Ky.exports;const y2=Tm(x2);(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=r.variable[1].inside,a=0;a<i.length;a++)o[i[a]]=e.languages.bash[i[a]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),o=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function a(l,c){c=(c||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return l});return RegExp(u,c)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+o+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:a(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:a(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:a(o),lookbehind:!0,greedy:!0},number:{pattern:a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism);var Yy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},nm=le.createContext&&le.createContext(Yy),On=globalThis&&globalThis.__assign||function(){return On=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},On.apply(this,arguments)},v2=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function qy(e){return e&&e.map(function(t,n){return le.createElement(t.tag,On({key:n},t.attr),qy(t.child))})}function j2(e){return function(t){return le.createElement(S2,On({attr:On({},e.attr)},t),qy(e.child))}}function S2(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=v2(e,["attr","size","title"]),l=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),le.createElement("svg",On({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:c,style:On(On({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&le.createElement("title",null,o),e.children)};return nm!==void 0?le.createElement(nm.Consumer,null,function(n){return t(n)}):t(Yy)}function w2(e){return j2({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}}]})(e)}const k2=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/^(login|connect|create|grant|list|migrate|link|start transaction|commit|rollback|sql)(\s+|$)/gm,'<span class="command-keyword">$1</span>$2').replace(/(\[)([^\]]+)(\])/g,'$1<span class="command-parameter">$2</span>$3').replace(/(\s|^)(database|user|table)(\s+)/g,'$1<span class="command-entity">$2</span>$3').replace(/(\s|^)(read|write|select|insert|update|delete)(\s+|$)/g,'$1<span class="command-permission">$2</span>$3'),b2=e=>e.replace(/\b(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|FROM|WHERE|AND|OR|JOIN|LEFT|RIGHT|INNER|OUTER|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET|AS|ON|BETWEEN|LIKE|IN|NOT|IS NULL|IS NOT NULL|CASE|WHEN|THEN|ELSE|END|BEGIN|COMMIT|ROLLBACK)\b/gi,'<span class="sql-keyword">$1</span>'),F=({language:e,code:t,caption:n,showLineNumbers:r=!0})=>{const i=e==="bash"?k2(t):e==="sql"?b2(t):t;C.useEffect(()=>{e!=="bash"&&e!=="sql"&&y2.highlightAll()},[t,e]);const o=()=>{navigator.clipboard.writeText(t)};return s.jsxs(E2,{children:[n&&s.jsx(C2,{children:n}),s.jsxs(T2,{children:[s.jsx(P2,{onClick:o,children:s.jsx(w2,{})}),e==="bash"||e==="sql"?s.jsx("pre",{className:r?"line-numbers":"",children:s.jsx("code",{className:`language-${e}`,dangerouslySetInnerHTML:{__html:i}})}):s.jsx("pre",{className:r?"line-numbers":"",children:s.jsx("code",{className:`language-${e}`,children:t})})]})]})},E2=v.div`
  margin: 20px 0;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({theme:e})=>e.codeBackground||"#1e1e1e"};
`,C2=v.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 8px 15px;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.lineNumber};
`,T2=v.div`
  position: relative;
  
  pre {
    margin: 0 !important;
    padding: 15px !important;
    background-color: ${({theme:e})=>e.codeBackground||"#1e1e1e"} !important;
    border-radius: 0 !important;
    font-family: 'Fira Code', monospace !important;
    font-size: 14px !important;
    line-height: 1.5 !important;
    overflow-x: auto !important;
    
    code {
      font-family: 'Fira Code', monospace !important;
      background: none !important;
      padding: 0 !important;
      border-radius: 0 !important;
      
      .command-keyword {
        color: #ff9e64 !important;
        font-weight: bold !important;
      }
      
      .command-parameter {
        color: #7dcfff !important;
        font-style: italic !important;
      }
      
      .command-entity {
        color: #bb9af7 !important;
      }
      
      .command-permission {
        color: #9ece6a !important;
        font-weight: 500 !important;
      }
      
      .sql-keyword {
        color: #bb9af7 !important;
        font-weight: bold !important;
      }
    }
    
    &.line-numbers {
      padding-left: 3.8em !important;
      
      .line-numbers-rows {
        border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
        
        span {
          &:before {
            color: ${({theme:e})=>e.lineNumber||"rgba(255, 255, 255, 0.4)"} !important;
          }
        }
      }
    }
  }
  
  .token {
    &.comment {
      color: #6a9955 !important;
    }
    
    &.keyword {
      color: #569cd6 !important;
    }
    
    &.function {
      color: #dcdcaa !important;
    }
    
    &.string {
      color: #ce9178 !important;
    }
    
    &.number, &.boolean {
      color: #b5cea8 !important;
    }
    
    &.operator {
      color: #d4d4d4 !important;
    }
    
    &.punctuation {
      color: #d4d4d4 !important;
    }
    
    &.class-name, &.constant {
      color: #4ec9b0 !important;
    }
  }
`,P2=v.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  color: ${({theme:e})=>e.text};
  padding: 4px 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease, background-color 0.2s ease;
  z-index: 10;
  
  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.15);
  }
`,A2=()=>s.jsxs(N2,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[s.jsxs(L2,{children:[s.jsx(R2,{children:"DuckDB Documentation"}),s.jsx(D2,{children:"Everything you need to know about working with the TCP DuckDB Server"})]}),s.jsxs(lc,{children:[s.jsx(cc,{children:"What is TCP DuckDB Server?"}),s.jsx(uc,{children:"TCP DuckDB Server is a robust TCP server implementation that enables management and interaction with DuckDB databases over a network. It provides functionality for user authentication, database operations, and access control."}),s.jsx(uc,{children:"Built for performance and security, TCP DuckDB Server allows multiple clients to connect to and work with DuckDB databases remotely, making it ideal for data analytics applications where centralized database management is required."})]}),s.jsxs(lc,{children:[s.jsx(cc,{children:"Key Features"}),s.jsxs(I2,{children:[s.jsxs(oo,{children:[s.jsx(ao,{children:s.jsx("i",{className:"fas fa-shield-alt"})}),s.jsx(lo,{children:"User Authentication"}),s.jsx(co,{children:"Secure login system with username/password authentication"})]}),s.jsxs(oo,{children:[s.jsx(ao,{children:s.jsx("i",{className:"fas fa-database"})}),s.jsx(lo,{children:"Database Management"}),s.jsx(co,{children:"Create and manage multiple databases with granular permissions"})]}),s.jsxs(oo,{children:[s.jsx(ao,{children:s.jsx("i",{className:"fas fa-table"})}),s.jsx(lo,{children:"Access Control"}),s.jsx(co,{children:"Table-level permissions for fine-grained control over data access"})]}),s.jsxs(oo,{children:[s.jsx(ao,{children:s.jsx("i",{className:"fas fa-exchange-alt"})}),s.jsx(lo,{children:"PostgreSQL Integration"}),s.jsx(co,{children:"Seamlessly link and migrate data from PostgreSQL databases"})]})]})]}),s.jsxs(lc,{children:[s.jsx(cc,{children:"Quick Example"}),s.jsx(uc,{children:"Here's a simple example of how to interact with the TCP DuckDB Server:"}),s.jsx(F,{language:"bash",code:`# Login as a super user
login duck superpassword

# Create a new database
create database analytics

# Connect to the database
connect analytics

# Execute a SQL query
SELECT * FROM users WHERE active = true;`,caption:"Basic interaction with TCP DuckDB Server"}),s.jsxs(F2,{children:[s.jsx("i",{className:"fas fa-info-circle"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Note:"})," The super user is ",s.jsx("code",{children:"duck"})," with the default password ",s.jsx("code",{children:"duck"}),". It's recommended to change this password immediately after setting up your server."]})]})]}),s.jsxs(O2,{children:[s.jsx(_2,{children:"Next Steps"}),s.jsxs($2,{children:[s.jsxs(rm,{to:"/docs/installation",children:[s.jsx("i",{className:"fas fa-download"}),"Installation Guide"]}),s.jsxs(rm,{to:"/docs/quick-start",children:[s.jsx("i",{className:"fas fa-play"}),"Quick Start Tutorial"]})]})]})]}),N2=v(We.div)`
  width: 100%;
`,L2=v.header`
  margin-bottom: 40px;
`,R2=v.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 10px;
`,D2=v.p`
  font-size: 18px;
  color: ${({theme:e})=>e.lineNumber};
  margin: 0;
`,lc=v.section`
  margin-bottom: 40px;
`,cc=v.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,uc=v.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,I2=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,oo=v.div`
  background-color: ${({theme:e})=>e.secondary};
  padding: 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,ao=v.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 193, 7, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  
  i {
    font-size: 20px;
    color: ${({theme:e})=>e.accent};
  }
`,lo=v.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px;
`,co=v.p`
  font-size: 14px;
  margin: 0;
  color: ${({theme:e})=>e.lineNumber};
`,F2=v.div`
  background-color: rgba(255, 193, 7, 0.1);
  border-left: 4px solid ${({theme:e})=>e.accent};
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: ${({theme:e})=>e.accent};
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
  }
`,O2=v.div`
  margin-top: 60px;
  background-color: ${({theme:e})=>e.secondary};
  padding: 25px;
  border-radius: 8px;
`,_2=v.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 20px;
`,$2=v.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,rm=v.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 15px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({theme:e})=>e.text};
  flex: 1;
  transition: background-color 0.2s ease;
  
  i {
    color: ${({theme:e})=>e.accent};
    font-size: 18px;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,M2=()=>s.jsxs(z2,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[s.jsx(B2,{children:"Installation"}),s.jsx(V2,{children:"Get up and running with TCP DuckDB Server"}),s.jsxs(uo,{children:[s.jsx(fo,{children:"Prerequisites"}),s.jsx(po,{children:"Before installing TCP DuckDB Server, make sure you have the following prerequisites installed:"}),s.jsxs(U2,{children:[s.jsxs(dc,{children:[s.jsx(fc,{children:s.jsx("i",{className:"fab fa-golang"})}),s.jsxs(pc,{children:[s.jsx(hc,{children:"Go 1.16 or higher"}),s.jsxs(mc,{children:["TCP DuckDB Server is written in Go. You can download Go from ",s.jsx(gc,{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer",children:"golang.org"}),"."]})]})]}),s.jsxs(dc,{children:[s.jsx(fc,{children:s.jsx("i",{className:"fas fa-database"})}),s.jsxs(pc,{children:[s.jsx(hc,{children:"DuckDB"}),s.jsxs(mc,{children:["Make sure you have DuckDB installed. You can download it from ",s.jsx(gc,{href:"https://duckdb.org/docs/installation/",target:"_blank",rel:"noopener noreferrer",children:"duckdb.org"}),"."]})]})]}),s.jsxs(dc,{children:[s.jsx(fc,{children:s.jsx("i",{className:"fas fa-code-branch"})}),s.jsxs(pc,{children:[s.jsx(hc,{children:"Git"}),s.jsxs(mc,{children:["Git is required to clone the repository. Download it from ",s.jsx(gc,{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer",children:"git-scm.com"}),"."]})]})]})]})]}),s.jsxs(uo,{children:[s.jsx(fo,{children:"Installation Steps"}),s.jsxs(ho,{children:[s.jsx(mo,{children:"1"}),s.jsxs(go,{children:[s.jsx(xo,{children:"Clone the Repository"}),s.jsx(yo,{children:"Clone the TCP DuckDB Server repository from GitHub:"}),s.jsx(F,{language:"bash",code:`git clone https://github.com/yourusername/tcp-duckdb-server.git
cd tcp-duckdb-server`})]})]}),s.jsxs(ho,{children:[s.jsx(mo,{children:"2"}),s.jsxs(go,{children:[s.jsx(xo,{children:"Build the Server"}),s.jsx(yo,{children:"Compile the TCP DuckDB Server using Go:"}),s.jsx(F,{language:"bash",code:"go build -o tcp-duckdb-server"})]})]}),s.jsxs(ho,{children:[s.jsx(mo,{children:"3"}),s.jsxs(go,{children:[s.jsx(xo,{children:"Configure the Server"}),s.jsx(yo,{children:"Create a configuration file or use command-line flags to configure the server:"}),s.jsx(F,{language:"bash",code:`# Create a config directory
mkdir -p ~/.tcp-duckdb-server

# Create a basic config file (optional)
cat > ~/.tcp-duckdb-server/config.json << EOF
{
  "port": 9876,
  "data_directory": "/path/to/data",
  "log_level": "info"
}
EOF`})]})]}),s.jsxs(ho,{children:[s.jsx(mo,{children:"4"}),s.jsxs(go,{children:[s.jsx(xo,{children:"Run the Server"}),s.jsx(yo,{children:"Start the TCP DuckDB Server:"}),s.jsx(F,{language:"bash",code:`# Using the default configuration
./tcp-duckdb-server

# Or with command-line flags
./tcp-duckdb-server --port 9876 --data-dir /path/to/data --log-level info`}),s.jsxs(H2,{children:[s.jsx("i",{className:"fas fa-check-circle"}),"If everything is set up correctly, you should see the server starting up and listening on the specified port."]})]})]})]}),s.jsxs(uo,{children:[s.jsx(fo,{children:"Docker Installation"}),s.jsx(po,{children:"Alternatively, you can run TCP DuckDB Server using Docker:"}),s.jsx(F,{language:"bash",code:`# Pull the Docker image
docker pull yourusername/tcp-duckdb-server:latest

# Run the container
docker run -d \\
  -p 9876:9876 \\
  -v /path/to/data:/data \\
  --name tcp-duckdb-server \\
  yourusername/tcp-duckdb-server:latest`,caption:"Docker installation commands"})]}),s.jsxs(uo,{children:[s.jsx(fo,{children:"Verifying the Installation"}),s.jsx(po,{children:"To verify that the TCP DuckDB Server is running correctly, you can use a simple telnet connection:"}),s.jsx(F,{language:"bash",code:"telnet localhost 9876"}),s.jsx(po,{children:"If the connection is successful, you should be able to authenticate with the server:"}),s.jsx(F,{language:"bash",code:"login duck duck  # Default username and password"}),s.jsxs(G2,{children:[s.jsx("i",{className:"fas fa-exclamation-triangle"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Security Note:"})," Make sure to change the default username and password after installation. The default credentials are intended for initial setup only and should not be used in production."]})]})]}),s.jsxs(W2,{children:[s.jsxs(im,{to:"/docs",children:[s.jsx("i",{className:"fas fa-arrow-left"}),"Back to Overview"]}),s.jsxs(im,{to:"/docs/quick-start",children:["Next: Quick Start",s.jsx("i",{className:"fas fa-arrow-right"})]})]})]}),z2=v(We.div)`
  width: 100%;
`,B2=v.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 10px;
`,V2=v.p`
  font-size: 18px;
  color: ${({theme:e})=>e.lineNumber};
  margin: 0 0 40px;
`,uo=v.section`
  margin-bottom: 40px;
`,fo=v.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,po=v.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,U2=v.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
`,dc=v.div`
  display: flex;
  gap: 15px;
  padding: 20px;
  background-color: ${({theme:e})=>e.secondary};
  border-radius: 8px;
`,fc=v.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 193, 7, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    font-size: 20px;
    color: ${({theme:e})=>e.accent};
  }
`,pc=v.div`
  flex: 1;
`,hc=v.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px;
`,mc=v.p`
  font-size: 14px;
  color: ${({theme:e})=>e.lineNumber};
  margin: 0;
`,gc=v.a`
  color: ${({theme:e})=>e.accent};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,ho=v.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`,mo=v.div`
  width: 36px;
  height: 36px;
  background-color: ${({theme:e})=>e.accent};
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
`,go=v.div`
  flex: 1;
`,xo=v.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px;
`,yo=v.p`
  font-size: 16px;
  margin: 0 0 15px;
`,H2=v.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  padding: 10px 15px;
  background-color: rgba(40, 167, 69, 0.1);
  border-radius: 4px;
  
  i {
    color: #28a745;
    font-size: 18px;
  }
`,G2=v.div`
  background-color: rgba(255, 193, 7, 0.1);
  border-left: 4px solid ${({theme:e})=>e.accent};
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: ${({theme:e})=>e.accent};
  }
`,W2=v.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,im=v.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.secondary};
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({theme:e})=>e.text};
  transition: background-color 0.2s ease;
  
  i {
    color: ${({theme:e})=>e.accent};
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,Q2=()=>s.jsxs(K2,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[s.jsx(Y2,{children:"Quick Start"}),s.jsx(q2,{children:"Learn how to use TCP DuckDB Server in minutes"}),s.jsxs(Kn,{children:[s.jsx(Yn,{children:"Starting the Server"}),s.jsx(Gt,{children:"After installing TCP DuckDB Server, you can start it with default settings:"}),s.jsx(F,{language:"bash",code:"./tcp-duckdb-server"}),s.jsx(Gt,{children:"The server will start and listen on the default port 9876. You should see output similar to:"}),s.jsxs(sm,{children:[s.jsx(Ar,{children:"2023-11-15 10:30:45 INFO Starting TCP DuckDB Server v1.0.0"}),s.jsx(Ar,{children:"2023-11-15 10:30:45 INFO Loading configuration..."}),s.jsx(Ar,{children:"2023-11-15 10:30:45 INFO Database directory: /home/user/.tcp-duckdb-server/data"}),s.jsx(Ar,{children:"2023-11-15 10:30:45 INFO Server listening on 0.0.0.0:9876"})]})]}),s.jsxs(Kn,{children:[s.jsx(Yn,{children:"Connecting to the Server"}),s.jsx(Gt,{children:"You can connect to the TCP DuckDB Server using telnet or netcat:"}),s.jsx(F,{language:"bash",code:"telnet localhost 9876"}),s.jsx(Gt,{children:"Once connected, you'll see a welcome message and prompt:"}),s.jsxs(sm,{children:[s.jsx(Ar,{children:"Welcome to TCP DuckDB Server v1.0.0"}),s.jsx(Ar,{children:"Please authenticate using the login command"})]})]}),s.jsxs(Kn,{children:[s.jsx(Yn,{children:"Authentication"}),s.jsx(Gt,{children:"Authenticate with the server using the default superuser account:"}),s.jsx(F,{language:"bash",code:"login duck duck"}),s.jsxs(X2,{children:[s.jsx("i",{className:"fas fa-check-circle"}),"Authentication successful! You now have super user privileges."]}),s.jsxs(Z2,{children:[s.jsx("i",{className:"fas fa-lightbulb"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Tip:"})," For production use, create a new user with appropriate permissions and disable or change the default superuser password."]})]})]}),s.jsxs(Kn,{children:[s.jsx(Yn,{children:"Basic Commands"}),s.jsx(Gt,{children:"Here are some basic commands to get you started:"}),s.jsxs(eP,{children:[s.jsxs(om,{children:[s.jsx(am,{children:"Database Management"}),s.jsxs(lm,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Command"}),s.jsx("th",{children:"Description"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"create database <name>"})}),s.jsx("td",{children:"Create a new database"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"list databases"})}),s.jsx("td",{children:"List all available databases"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"connect <database>"})}),s.jsx("td",{children:"Connect to a specific database"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"drop database <name>"})}),s.jsx("td",{children:"Delete a database"})]})]})]})]}),s.jsxs(om,{children:[s.jsx(am,{children:"User Management"}),s.jsxs(lm,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Command"}),s.jsx("th",{children:"Description"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"create user <name> <password>"})}),s.jsx("td",{children:"Create a new user"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"list users"})}),s.jsx("td",{children:"List all users"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"grant <user> <database> <permission>"})}),s.jsx("td",{children:"Grant permissions to a user"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"revoke <user> <database> <permission>"})}),s.jsx("td",{children:"Revoke permissions from a user"})]})]})]})]})]})]}),s.jsxs(Kn,{children:[s.jsx(Yn,{children:"Executing SQL Queries"}),s.jsx(Gt,{children:"After connecting to a database, you can execute SQL queries directly:"}),s.jsxs(xc,{children:[s.jsx(yc,{children:"1"}),s.jsxs(vc,{children:[s.jsx(jc,{children:"Create a new database and connect to it"}),s.jsx(F,{language:"bash",code:`create database demo
connect demo`})]})]}),s.jsxs(xc,{children:[s.jsx(yc,{children:"2"}),s.jsxs(vc,{children:[s.jsx(jc,{children:"Create a table and insert data"}),s.jsx(F,{language:"sql",code:`CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, name, email) VALUES 
(1, 'John Doe', 'john@example.com'),
(2, 'Jane Smith', 'jane@example.com');`})]})]}),s.jsxs(xc,{children:[s.jsx(yc,{children:"3"}),s.jsxs(vc,{children:[s.jsx(jc,{children:"Query the data"}),s.jsx(F,{language:"sql",code:"SELECT * FROM users;"}),s.jsxs(tP,{children:[s.jsxs(Sc,{children:[s.jsx(it,{children:"id"}),s.jsx(it,{children:"name"}),s.jsx(it,{children:"email"}),s.jsx(it,{children:"created_at"})]}),s.jsxs(Sc,{children:[s.jsx(it,{children:"1"}),s.jsx(it,{children:"John Doe"}),s.jsx(it,{children:"john@example.com"}),s.jsx(it,{children:"2023-11-15 10:42:15"})]}),s.jsxs(Sc,{children:[s.jsx(it,{children:"2"}),s.jsx(it,{children:"Jane Smith"}),s.jsx(it,{children:"jane@example.com"}),s.jsx(it,{children:"2023-11-15 10:42:15"})]})]})]})]})]}),s.jsxs(Kn,{children:[s.jsx(Yn,{children:"Client Applications"}),s.jsx(Gt,{children:"You can interact with the TCP DuckDB Server from your own applications. Here's a simple example using Go:"}),s.jsx(F,{language:"go",code:`package main

import (
	"bufio"
	"fmt"
	"net"
	"strings"
)

func main() {
	// Connect to the TCP DuckDB server
	conn, err := net.Dial("tcp", "localhost:9876")
	if err != nil {
		fmt.Println("Error connecting:", err)
		return
	}
	defer conn.Close()

	// Create a reader for server responses
	reader := bufio.NewReader(conn)

	// Read the welcome message
	welcome, _ := reader.ReadString('\\n')
	fmt.Print(welcome)

	// Authenticate
	fmt.Fprintf(conn, "login duck duck\\n")
	authResp, _ := reader.ReadString('\\n')
	fmt.Print(authResp)

	// Create a database
	fmt.Fprintf(conn, "create database goexample\\n")
	createResp, _ := reader.ReadString('\\n')
	fmt.Print(createResp)

	// Connect to the database
	fmt.Fprintf(conn, "connect goexample\\n")
	connectResp, _ := reader.ReadString('\\n')
	fmt.Print(connectResp)

	// Execute a query
	query := "CREATE TABLE test (id INTEGER, name VARCHAR(100));"
	fmt.Fprintf(conn, "%s\\n", query)
	queryResp, _ := reader.ReadString('\\n')
	fmt.Print(queryResp)

	// Insert data
	insert := "INSERT INTO test VALUES (1, 'Test Data');"
	fmt.Fprintf(conn, "%s\\n", insert)
	insertResp, _ := reader.ReadString('\\n')
	fmt.Print(insertResp)

	// Query data
	fmt.Fprintf(conn, "SELECT * FROM test;\\n")
	
	// Read the results until we get the prompt again
	var result strings.Builder
	for {
		line, _ := reader.ReadString('\\n')
		result.WriteString(line)
		if strings.Contains(line, "rows in set") {
			break
		}
	}
	fmt.Print(result.String())
}
`,caption:"Example Go client to interact with TCP DuckDB Server"}),s.jsxs(J2,{children:[s.jsx("i",{className:"fas fa-info-circle"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Note:"})," This is a simple example. In production, you'll want to implement error handling, secure password management, and connection pooling."]})]})]}),s.jsxs(Kn,{children:[s.jsx(Yn,{children:"Next Steps"}),s.jsx(Gt,{children:"Now that you've gotten started with TCP DuckDB Server, you can:"}),s.jsxs(nP,{children:[s.jsxs(wc,{to:"/docs/configuration",children:[s.jsx(kc,{children:s.jsx("i",{className:"fas fa-cogs"})}),s.jsxs(bc,{children:[s.jsx(Ec,{children:"Configure Your Server"}),s.jsx(Cc,{children:"Learn how to configure TCP DuckDB Server for production use with custom settings for performance and security."})]})]}),s.jsxs(wc,{to:"/docs/protocol",children:[s.jsx(kc,{children:s.jsx("i",{className:"fas fa-exchange-alt"})}),s.jsxs(bc,{children:[s.jsx(Ec,{children:"Understand the Protocol"}),s.jsx(Cc,{children:"Dive deeper into the TCP protocol used by the server to build more sophisticated client applications."})]})]}),s.jsxs(wc,{to:"/docs/examples",children:[s.jsx(kc,{children:s.jsx("i",{className:"fas fa-code"})}),s.jsxs(bc,{children:[s.jsx(Ec,{children:"Explore Examples"}),s.jsx(Cc,{children:"Browse through real-world examples and use cases for TCP DuckDB Server."})]})]})]})]}),s.jsxs(rP,{children:[s.jsxs(cm,{to:"/docs/installation",children:[s.jsx("i",{className:"fas fa-arrow-left"}),"Back to Installation"]}),s.jsxs(cm,{to:"/docs/configuration",children:["Next: Configuration",s.jsx("i",{className:"fas fa-arrow-right"})]})]})]}),K2=v(We.div)`
  width: 100%;
`,Y2=v.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 10px;
`,q2=v.p`
  font-size: 18px;
  color: ${({theme:e})=>e.lineNumber};
  margin: 0 0 40px;
`,Kn=v.section`
  margin-bottom: 40px;
`,Yn=v.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Gt=v.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,sm=v.div`
  background-color: #1a1a1a;
  border-radius: 6px;
  padding: 15px;
  margin: 20px 0;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
`,Ar=v.div`
  padding: 3px 0;
  color: #d9d9d9;
`,X2=v.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  padding: 15px;
  background-color: rgba(40, 167, 69, 0.1);
  border-radius: 4px;
  
  i {
    color: #28a745;
    font-size: 18px;
  }
`,Z2=v.div`
  background-color: rgba(23, 162, 184, 0.1);
  border-left: 4px solid #17a2b8;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: #17a2b8;
  }
`,J2=v.div`
  background-color: rgba(255, 193, 7, 0.1);
  border-left: 4px solid ${({theme:e})=>e.accent};
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: ${({theme:e})=>e.accent};
  }
`,eP=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,om=v.div`
  background-color: ${({theme:e})=>e.secondary};
  border-radius: 8px;
  overflow: hidden;
`,am=v.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 12px 15px;
  font-weight: 600;
  font-size: 16px;
`,lm=v.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  th {
    font-weight: 600;
    color: ${({theme:e})=>e.lineNumber};
    font-size: 14px;
  }
  
  td {
    font-size: 14px;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
  }
`,xc=v.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`,yc=v.div`
  width: 36px;
  height: 36px;
  background-color: ${({theme:e})=>e.accent};
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
`,vc=v.div`
  flex: 1;
`,jc=v.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 15px;
`,tP=v.div`
  background-color: #1a1a1a;
  border-radius: 6px;
  margin: 20px 0;
  overflow: hidden;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
`,Sc=v.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:first-child {
    background-color: rgba(255, 255, 255, 0.05);
    font-weight: 600;
  }
  
  &:last-child {
    border-bottom: none;
  }
`,it=v.div`
  padding: 10px 15px;
  flex: 1;
`,nP=v.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,wc=v.a`
  display: flex;
  gap: 15px;
  padding: 20px;
  background-color: ${({theme:e})=>e.secondary};
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`,kc=v.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 193, 7, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    font-size: 20px;
    color: ${({theme:e})=>e.accent};
  }
`,bc=v.div`
  flex: 1;
`,Ec=v.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
`,Cc=v.p`
  font-size: 14px;
  color: ${({theme:e})=>e.lineNumber};
  margin: 0;
`,rP=v.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,cm=v.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.secondary};
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({theme:e})=>e.text};
  transition: background-color 0.2s ease;
  
  i {
    color: ${({theme:e})=>e.accent};
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,iP=()=>s.jsxs(sP,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[s.jsx(oP,{children:"Commands Reference"}),s.jsx(aP,{children:"Complete list of commands available in TCP DuckDB Server"}),s.jsxs(qn,{children:[s.jsx(dn,{children:"Authentication"}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"login"}),s.jsx(lt,{children:"Authentication"})]}),s.jsx(ct,{children:"Authenticate to access the server. All users must authenticate before they can perform any operations."}),s.jsx(ut,{children:s.jsx(F,{language:"bash",code:"login [username] [password]",caption:"Syntax"})}),s.jsxs(fn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Parameter"}),s.jsx("th",{children:"Description"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"username"}),s.jsx("td",{children:"Your username"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"password"}),s.jsx("td",{children:"Your password"})]})]})]}),s.jsx(Ot,{children:s.jsx(F,{language:"bash",code:"login duck superpassword",caption:"Example"})}),s.jsxs(cP,{children:[s.jsx("i",{className:"fas fa-exclamation-triangle"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Important:"})," The super user is ",s.jsx("code",{children:"duck"})," with the default password ",s.jsx("code",{children:"duck"}),". It is crucial to change this password immediately after setting up your project for security purposes."]})]})]})]}),s.jsxs(qn,{children:[s.jsx(dn,{children:"Database Management"}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"create database"}),s.jsx(lt,{children:"Super User"})]}),s.jsx(ct,{children:"Create a new database. This command requires super user privileges."}),s.jsx(ut,{children:s.jsx(F,{language:"bash",code:"create database [database_name]",caption:"Syntax"})}),s.jsxs(fn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Parameter"}),s.jsx("th",{children:"Description"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"database_name"}),s.jsx("td",{children:"Name for the new database"})]})})]}),s.jsx(Ot,{children:s.jsx(F,{language:"bash",code:"create database mydb",caption:"Example"})})]}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"connect"}),s.jsx(lt,{children:"Database"})]}),s.jsx(ct,{children:"Connect to a database to execute queries. You must have permission to access the specified database."}),s.jsx(ut,{children:s.jsx(F,{language:"bash",code:"connect [database_name]",caption:"Syntax"})}),s.jsxs(fn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Parameter"}),s.jsx("th",{children:"Description"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"database_name"}),s.jsx("td",{children:"Name of the database to connect to"})]})})]}),s.jsx(Ot,{children:s.jsx(F,{language:"bash",code:"connect mydb",caption:"Example"})}),s.jsxs(uP,{children:[s.jsx("i",{className:"fas fa-info-circle"}),s.jsxs("div",{children:["After connecting to a database, you can execute SQL queries directly or use transaction commands like ",s.jsx("code",{children:"start transaction"}),", ",s.jsx("code",{children:"commit"}),", and ",s.jsx("code",{children:"rollback"}),"."]})]})]})]}),s.jsxs(qn,{children:[s.jsx(dn,{children:"User Management"}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"create user"}),s.jsx(lt,{children:"Super User"})]}),s.jsx(ct,{children:"Create a new user account. This command requires super user privileges."}),s.jsx(ut,{children:s.jsx(F,{language:"bash",code:"create user [username] [password]",caption:"Syntax"})}),s.jsxs(fn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Parameter"}),s.jsx("th",{children:"Description"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"username"}),s.jsx("td",{children:"Username for the new user"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"password"}),s.jsx("td",{children:"Password for the new user"})]})]})]}),s.jsx(Ot,{children:s.jsx(F,{language:"bash",code:"create user john pass123",caption:"Example"})}),s.jsxs(dP,{children:[s.jsx("i",{className:"fas fa-shield-alt"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Security Note:"})," Ensure you use strong passwords in production environments. Consider implementing password policies according to your security requirements."]})]})]})]}),s.jsxs(qn,{children:[s.jsx(dn,{children:"Permissions"}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"grant database"}),s.jsx(lt,{children:"Super User"})]}),s.jsx(ct,{children:"Grant database-level access permissions to users. This command requires super user privileges."}),s.jsx(ut,{children:s.jsx(F,{language:"bash",code:"grant database [database_name] [username] [access_type]",caption:"Syntax"})}),s.jsxs(fn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Parameter"}),s.jsx("th",{children:"Description"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"database_name"}),s.jsx("td",{children:"Name of the database to grant access to"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"username"}),s.jsx("td",{children:"Username of the user to grant access to"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"access_type"}),s.jsxs("td",{children:["Type of access to grant: ",s.jsx("code",{children:"read"})," or ",s.jsx("code",{children:"write"})]})]})]})]}),s.jsx(Ot,{children:s.jsx(F,{language:"bash",code:"grant database mydb john read",caption:"Example"})})]}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"grant table"}),s.jsx(lt,{children:"Super User"})]}),s.jsx(ct,{children:"Grant table-level access permissions to users. This command requires super user privileges."}),s.jsx(ut,{children:s.jsx(F,{language:"bash",code:"grant table [database_name] [table_name] [username] [access_type...]",caption:"Syntax"})}),s.jsxs(fn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Parameter"}),s.jsx("th",{children:"Description"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"database_name"}),s.jsx("td",{children:"Name of the database containing the table"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"table_name"}),s.jsx("td",{children:"Name of the table to grant access to"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"username"}),s.jsx("td",{children:"Username of the user to grant access to"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"access_type..."}),s.jsxs("td",{children:["Types of access to grant: ",s.jsx("code",{children:"select"}),", ",s.jsx("code",{children:"update"}),", ",s.jsx("code",{children:"insert"}),", or ",s.jsx("code",{children:"delete"})," (multiple can be specified)"]})]})]})]}),s.jsx(Ot,{children:s.jsx(F,{language:"bash",code:"grant table mydb users john select insert",caption:"Example"})})]})]}),s.jsxs(qn,{children:[s.jsx(dn,{children:"SQL Execution"}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"SQL Query"}),s.jsx(lt,{children:"SQL"})]}),s.jsx(ct,{children:"Execute a SQL query on the currently connected database. Standard SQL syntax is supported."}),s.jsx(ut,{children:s.jsx(F,{language:"sql",code:"[Any valid SQL statement]",caption:"Syntax"})}),s.jsx(Ot,{children:s.jsx(F,{language:"sql",code:`SELECT * FROM users;
INSERT INTO users (id, name) VALUES (1, 'John');
UPDATE users SET active = true WHERE id = 1;
DELETE FROM users WHERE id = 2;`,caption:"Example Queries"})})]}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"Transactions"}),s.jsx(lt,{children:"SQL"})]}),s.jsx(ct,{children:"Execute multiple SQL statements in a transaction block for atomic operations."}),s.jsx(ut,{children:s.jsx(F,{language:"sql",code:`start transaction
[SQL statement 1]
[SQL statement 2]
...
commit
-- or rollback to undo changes`,caption:"Syntax"})}),s.jsx(Ot,{children:s.jsx(F,{language:"sql",code:`start transaction
INSERT INTO users (id, name) VALUES (1, 'John');
UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
INSERT INTO transactions (user_id, amount) VALUES (1, -100);
commit`,caption:"Transaction Example"})})]})]}),s.jsxs(qn,{children:[s.jsx(dn,{children:"PostgreSQL Integration"}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"link"}),s.jsx(lt,{children:"Super User"})]}),s.jsx(ct,{children:"Link DuckDB with a PostgreSQL database. This command requires super user privileges. The command establishes a connection between DuckDB and PostgreSQL by reading the PostgreSQL table schemas and recreating them in DuckDB, then copying all data."}),s.jsx(ut,{children:s.jsx(F,{language:"bash",code:"link [database_name] [postgresql_connection_string]",caption:"Syntax"})}),s.jsxs(fn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Parameter"}),s.jsx("th",{children:"Description"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"database_name"}),s.jsx("td",{children:"Name of the DuckDB database to link"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"postgresql_connection_string"}),s.jsx("td",{children:'PostgreSQL connection string (e.g., "postgresql://user:password@localhost:5432/pgdb")'})]})]})]}),s.jsx(Ot,{children:s.jsx(F,{language:"bash",code:'link mydb "postgresql://user:password@localhost:5432/pgdb"',caption:"Example"})})]}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"migrate"}),s.jsx(lt,{children:"Super User"})]}),s.jsx(ct,{children:"Maintain synchronization between the linked DuckDB and PostgreSQL databases. This command reads the PostgreSQL audit table to keep the DuckDB database in sync with PostgreSQL changes."}),s.jsx(ut,{children:s.jsx(F,{language:"bash",code:"migrate [database_name]",caption:"Syntax"})}),s.jsxs(fn,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Parameter"}),s.jsx("th",{children:"Description"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"database_name"}),s.jsx("td",{children:"Name of the linked DuckDB database to migrate"})]})})]}),s.jsx(Ot,{children:s.jsx(F,{language:"bash",code:"migrate mydb",caption:"Example"})})]})]}),s.jsxs(qn,{children:[s.jsx(dn,{children:"Utility Commands"}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"list databases"}),s.jsx(lt,{children:"Utility"})]}),s.jsx(ct,{children:"List all available databases that the current user has access to."}),s.jsx(ut,{children:s.jsx(F,{language:"bash",code:"list databases",caption:"Syntax"})})]}),s.jsxs(st,{isHighlighted:!0,children:[s.jsxs(ot,{children:[s.jsx(at,{children:"list users"}),s.jsx(lt,{children:"Super User"})]}),s.jsx(ct,{children:"List all users in the system. This command requires super user privileges."}),s.jsx(ut,{children:s.jsx(F,{language:"bash",code:"list users",caption:"Syntax"})})]})]}),s.jsxs(fP,{children:[s.jsx(dn,{children:"Comprehensive Example"}),s.jsx(lP,{children:"Here's a full example demonstrating the sequence of commands for a typical usage scenario:"}),s.jsx(F,{language:"bash",code:`# Login as super user
login duck superpassword

# Create a new database
create database mydb

# Create a regular user
create user analyst pass123

# Grant database access
grant database mydb analyst read

# Grant table access
grant table mydb customers analyst select

# Connect to the database as super user
connect mydb

# Create tables and insert data
CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO customers VALUES (1, 'John Doe', 'john@example.com');
INSERT INTO customers VALUES (2, 'Jane Smith', 'jane@example.com');

# Now, assume the analyst logs in
# (this would be in a separate session)
login analyst pass123

# Connect to the database they have access to
connect mydb

# Query the data they have permission to see
SELECT * FROM customers;`,caption:"Complete usage example"})]}),s.jsxs(pP,{children:[s.jsxs(um,{to:"/docs/quick-start",children:[s.jsx("i",{className:"fas fa-arrow-left"}),"Back to Quick Start"]}),s.jsxs(um,{to:"/docs/permissions",children:["Next: User Permissions",s.jsx("i",{className:"fas fa-arrow-right"})]})]})]}),sP=v(We.div)`
  width: 100%;
`,oP=v.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 10px;
`,aP=v.p`
  font-size: 18px;
  color: ${({theme:e})=>e.lineNumber};
  margin: 0 0 40px;
`,qn=v.section`
  margin-bottom: 60px;
`,dn=v.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,lP=v.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,st=v.div`
  background: ${({theme:e,isHighlighted:t})=>t?`linear-gradient(135deg, ${e.secondary}, rgba(255, 193, 7, 0.1))`:e.secondary};
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 30px;
  border-left: ${({isHighlighted:e})=>e?"4px solid #FFC107":"none"};
  box-shadow: ${({isHighlighted:e})=>e?"0 4px 20px rgba(255, 193, 7, 0.15)":"none"};
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${({isHighlighted:e})=>e&&`
    &::before {
      content: "⭐ Main Command";
      position: absolute;
      top: -10px;
      right: 20px;
      background-color: #FFC107;
      color: #000;
      font-size: 12px;
      font-weight: bold;
      padding: 3px 8px;
      border-radius: 4px;
    }
  `}
`,ot=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`,at=v.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.accent};
  font-family: 'Fira Code', monospace;
  text-shadow: 0 0 8px rgba(255, 193, 7, 0.3);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${({theme:e})=>e.accent}, transparent);
  }
`,lt=v.span`
  background-color: rgba(255, 193, 7, 0.15);
  color: ${({theme:e})=>e.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ct=v.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,ut=v.div`
  margin-bottom: 20px;
  position: relative;
  
  &::before {
    content: 'Command';
    position: absolute;
    top: 8px;
    right: 45px;
    font-size: 11px;
    text-transform: uppercase;
    color: ${({theme:e})=>e.accent};
    font-weight: 700;
    letter-spacing: 0.5px;
    z-index: 5;
  }
  
  pre {
    border-left: 2px solid ${({theme:e})=>e.accent} !important;
  }
  
  code.language-bash {
    .token.function {
      color: #ff9e64 !important;
      font-weight: bold;
    }
    
    .token.parameter {
      font-style: italic;
      color: #7dcfff !important;
    }
  }
  
  code.language-sql {
    .token.keyword {
      color: #bb9af7 !important;
      font-weight: bold;
    }
  }
`,fn=v.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  th {
    font-weight: 600;
    color: ${({theme:e})=>e.lineNumber};
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.03);
  }
  
  td {
    font-size: 14px;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
  }
`,Ot=v.div`
  margin-top: 20px;
`,cP=v.div`
  background-color: rgba(255, 193, 7, 0.1);
  border-left: 4px solid ${({theme:e})=>e.accent};
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0 0;
  
  i {
    font-size: 20px;
    color: ${({theme:e})=>e.accent};
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
  }
`,uP=v.div`
  background-color: rgba(0, 123, 255, 0.1);
  border-left: 4px solid #0d6efd;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0 0;
  
  i {
    font-size: 20px;
    color: #0d6efd;
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
  }
`,dP=v.div`
  background-color: rgba(220, 53, 69, 0.1);
  border-left: 4px solid #dc3545;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0 0;
  
  i {
    font-size: 20px;
    color: #dc3545;
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
  }
`,fP=v.section`
  margin-bottom: 60px;
  background-color: ${({theme:e})=>e.secondary};
  border-radius: 8px;
  padding: 30px;
`,pP=v.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,um=v.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.secondary};
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({theme:e})=>e.text};
  transition: background-color 0.2s ease;
  
  i {
    color: ${({theme:e})=>e.accent};
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,hP=()=>s.jsxs(mP,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[s.jsx(gP,{children:"Security & Access Control"}),s.jsx(xP,{children:"Understand the security model and access control features of TCP DuckDB Server"}),s.jsxs(Xn,{children:[s.jsx(Zn,{children:"Security Model"}),s.jsx(_t,{children:"TCP DuckDB Server implements a comprehensive security model that includes authentication, role-based access control, and permission management at both database and table levels. This multi-layered approach ensures that data is accessed only by authorized users with appropriate permissions."}),s.jsxs(yP,{children:[s.jsx(vP,{children:"Security Layers"}),s.jsxs(jP,{children:[s.jsxs(jo,{className:"auth",children:[s.jsx("i",{className:"fas fa-lock"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Authentication"}),s.jsx("p",{children:"User identity verification"})]})]}),s.jsx("i",{className:"fas fa-arrow-down"}),s.jsxs(jo,{className:"user",children:[s.jsx("i",{className:"fas fa-user-shield"}),s.jsxs("div",{children:[s.jsx("h3",{children:"User Management"}),s.jsx("p",{children:"User accounts & roles"})]})]}),s.jsx("i",{className:"fas fa-arrow-down"}),s.jsxs(jo,{className:"db",children:[s.jsx("i",{className:"fas fa-database"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Database-level Permissions"}),s.jsx("p",{children:"Read/write access to databases"})]})]}),s.jsx("i",{className:"fas fa-arrow-down"}),s.jsxs(jo,{className:"table",children:[s.jsx("i",{className:"fas fa-table"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Table-level Permissions"}),s.jsx("p",{children:"Granular table operation permissions"})]})]})]})]})]}),s.jsxs(Xn,{children:[s.jsx(Zn,{children:"Authentication"}),s.jsx(_t,{children:"Every user must authenticate before performing any operation on the TCP DuckDB Server. Authentication is handled via the login command with a username and password."}),s.jsx(F,{language:"bash",code:"login [username] [password]",caption:"Authentication command syntax"}),s.jsxs(_t,{children:["The default super user account is ",s.jsx(vo,{children:"duck"})," with password ",s.jsx(vo,{children:"duck"}),". For security reasons, this password should be changed immediately in production environments."]}),s.jsxs(ym,{children:[s.jsx("i",{className:"fas fa-exclamation-triangle"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Security Warning:"})," The default credentials should never be used in production. Always change the default password before deploying your server to a production environment."]})]})]}),s.jsxs(Xn,{children:[s.jsx(Zn,{children:"User Types & Roles"}),s.jsx(_t,{children:"TCP DuckDB Server distinguishes between different user types with varying privileges:"}),s.jsxs(SP,{children:[s.jsxs(dm,{children:[s.jsx(fm,{className:"super",children:s.jsx("i",{className:"fas fa-crown"})}),s.jsxs(pm,{children:[s.jsx(hm,{children:"Super User"}),s.jsx(mm,{children:"Has full administrative access to the server. Can create databases, manage users, assign permissions, and perform all operations."}),s.jsxs(gm,{children:[s.jsx(pn,{children:"Create databases"}),s.jsx(pn,{children:"Create users"}),s.jsx(pn,{children:"Grant permissions"}),s.jsx(pn,{children:"Link databases"}),s.jsx(pn,{children:"Access all databases"})]})]})]}),s.jsxs(dm,{children:[s.jsx(fm,{className:"regular",children:s.jsx("i",{className:"fas fa-user"})}),s.jsxs(pm,{children:[s.jsx(hm,{children:"Regular User"}),s.jsx(mm,{children:"Standard user with access to specific databases and tables based on granted permissions. Cannot perform administrative functions."}),s.jsxs(gm,{children:[s.jsx(pn,{children:"Connect to permitted databases"}),s.jsx(pn,{children:"Execute queries on permitted tables"}),s.jsx(pn,{children:"Create and modify data (if granted write permission)"})]})]})]})]})]}),s.jsxs(Xn,{children:[s.jsx(Zn,{children:"Database-Level Permissions"}),s.jsx(_t,{children:"Database permissions control which databases a user can access and what operations they can perform."}),s.jsxs(xm,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Permission"}),s.jsx("th",{children:"Description"}),s.jsx("th",{children:"Command"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(Nr,{children:"read"})}),s.jsx("td",{children:"Allows the user to connect to the database and execute SELECT queries on tables they have permission to access."}),s.jsx("td",{children:s.jsx(vo,{children:"grant database [db_name] [username] read"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(Nr,{children:"write"})}),s.jsx("td",{children:"Allows all read operations, plus the ability to execute INSERT, UPDATE, and DELETE operations on tables they have permission to modify."}),s.jsx("td",{children:s.jsx(vo,{children:"grant database [db_name] [username] write"})})]})]})]}),s.jsx(_t,{children:"Example of granting database access:"}),s.jsx(F,{language:"bash",code:`# Grant read-only access to the 'analytics' database for user 'john'
grant database analytics john read

# Grant read-write access to the 'app_data' database for user 'admin'
grant database app_data admin write`,caption:"Database permission examples"})]}),s.jsxs(Xn,{children:[s.jsx(Zn,{children:"Table-Level Permissions"}),s.jsx(_t,{children:"Table permissions provide more granular control over which operations a user can perform on specific tables."}),s.jsxs(xm,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Permission"}),s.jsx("th",{children:"Description"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(Nr,{children:"select"})}),s.jsx("td",{children:"Allows the user to execute SELECT queries on the table."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(Nr,{children:"insert"})}),s.jsx("td",{children:"Allows the user to execute INSERT statements on the table."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(Nr,{children:"update"})}),s.jsx("td",{children:"Allows the user to execute UPDATE statements on the table."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(Nr,{children:"delete"})}),s.jsx("td",{children:"Allows the user to execute DELETE statements on the table."})]})]})]}),s.jsx(_t,{children:"Table permissions are granted using the following syntax:"}),s.jsx(F,{language:"bash",code:"grant table [database_name] [table_name] [username] [permission(s)]",caption:"Table permission syntax"}),s.jsx(_t,{children:"Examples of granting table permissions:"}),s.jsx(F,{language:"bash",code:`# Grant SELECT permission on the 'customers' table to user 'analyst'
grant table crm customers analyst select

# Grant SELECT and INSERT permissions on the 'orders' table to user 'sales_rep'
grant table crm orders sales_rep select insert

# Grant all permissions on the 'products' table to user 'inventory_manager'
grant table inventory products inventory_manager select insert update delete`,caption:"Table permission examples"}),s.jsxs(wP,{children:[s.jsx("i",{className:"fas fa-info-circle"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Permission Inheritance:"})," Table permissions do not automatically inherit from database permissions. You must explicitly grant both database-level access and table-level permissions."]})]})]}),s.jsxs(Xn,{children:[s.jsx(Zn,{children:"Security Best Practices"}),s.jsxs(kP,{children:[s.jsxs(Ii,{children:[s.jsx("i",{className:"fas fa-key"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Change Default Credentials"}),s.jsx("p",{children:"Immediately change the default super user password after installation."})]})]}),s.jsxs(Ii,{children:[s.jsx("i",{className:"fas fa-lock"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Principle of Least Privilege"}),s.jsx("p",{children:"Grant users only the permissions they need to perform their specific tasks."})]})]}),s.jsxs(Ii,{children:[s.jsx("i",{className:"fas fa-user-secret"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Regular Permission Audits"}),s.jsx("p",{children:"Periodically review user permissions to ensure they remain appropriate."})]})]}),s.jsxs(Ii,{children:[s.jsx("i",{className:"fas fa-network-wired"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Network Security"}),s.jsx("p",{children:"Run the server behind a firewall and consider using SSL/TLS for encryption."})]})]}),s.jsxs(Ii,{children:[s.jsx("i",{className:"fas fa-user-times"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Remove Unused Accounts"}),s.jsx("p",{children:"Regularly remove user accounts that are no longer needed."})]})]})]}),s.jsxs(ym,{children:[s.jsx("i",{className:"fas fa-shield-alt"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Production Deployment:"})," For production environments, consider additional security measures like running the server in a restricted environment, implementing IP-based access controls, and setting up monitoring for unauthorized access attempts."]})]})]}),s.jsxs(Xn,{children:[s.jsx(Zn,{children:"Implementing a Security Policy"}),s.jsx(_t,{children:"Here's an example security setup for a typical organization with different user roles:"}),s.jsx(F,{language:"bash",code:`# Login as super user
login duck secure_password

# Create databases for different purposes
create database analytics
create database customer_data
create database internal_ops

# Create users with different roles
create user data_analyst secure_pwd_1
create user marketing_user secure_pwd_2
create user sales_user secure_pwd_3
create user it_admin secure_pwd_4

# Grant database-level permissions
grant database analytics data_analyst read
grant database analytics marketing_user read
grant database customer_data sales_user read
grant database customer_data marketing_user read
grant database internal_ops it_admin write

# Grant table-level permissions
grant table analytics web_traffic data_analyst select
grant table analytics campaigns marketing_user select insert update
grant table customer_data contacts sales_user select insert update
grant table customer_data purchase_history sales_user select`,caption:"Example security policy implementation"})]}),s.jsxs(bP,{children:[s.jsxs(vm,{to:"/docs/commands",children:[s.jsx("i",{className:"fas fa-arrow-left"}),"Back to Commands"]}),s.jsxs(vm,{to:"/docs/postgres-integration",children:["Next: PostgreSQL Integration",s.jsx("i",{className:"fas fa-arrow-right"})]})]})]}),mP=v(We.div)`
  width: 100%;
`,gP=v.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 10px;
`,xP=v.p`
  font-size: 18px;
  color: ${({theme:e})=>e.lineNumber};
  margin: 0 0 40px;
`,Xn=v.section`
  margin-bottom: 60px;
`,Zn=v.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,_t=v.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,vo=v.code`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2px 5px;
  border-radius: 3px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
`,yP=v.div`
  background-color: ${({theme:e})=>e.secondary};
  border-radius: 8px;
  padding: 30px;
  margin: 30px 0;
`,vP=v.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 25px;
  text-align: center;
`,jP=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  
  .fas.fa-arrow-down {
    color: ${({theme:e})=>e.accent};
    font-size: 18px;
  }
`,jo=v.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 15px 25px;
  width: 100%;
  max-width: 450px;
  
  i {
    font-size: 24px;
  }
  
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 5px;
  }
  
  p {
    font-size: 14px;
    margin: 0;
    color: ${({theme:e})=>e.lineNumber};
  }
  
  &.auth {
    border: 1px solid #dc3545;
    i { color: #dc3545; }
  }
  
  &.user {
    border: 1px solid #fd7e14;
    i { color: #fd7e14; }
  }
  
  &.db {
    border: 1px solid #0d6efd;
    i { color: #0d6efd; }
  }
  
  &.table {
    border: 1px solid #198754;
    i { color: #198754; }
  }
`,SP=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
  margin: 30px 0;
`,dm=v.div`
  background-color: ${({theme:e})=>e.secondary};
  border-radius: 8px;
  padding: 25px;
  display: flex;
  gap: 20px;
`,fm=v.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  i {
    font-size: 28px;
  }
  
  &.super {
    background-color: rgba(255, 193, 7, 0.15);
    i { color: #ffc107; }
  }
  
  &.regular {
    background-color: rgba(13, 110, 253, 0.15);
    i { color: #0d6efd; }
  }
`,pm=v.div`
  flex-grow: 1;
`,hm=v.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px;
`,mm=v.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 15px;
  color: ${({theme:e})=>e.text};
`,gm=v.ul`
  margin: 0;
  padding: 0 0 0 18px;
  list-style-type: disc;
  
  li {
    font-size: 14px;
    margin-bottom: 5px;
    color: ${({theme:e})=>e.lineNumber};
  }
`,pn=v.li``,xm=v.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  th {
    font-weight: 600;
    color: ${({theme:e})=>e.lineNumber};
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.03);
  }
  
  td {
    font-size: 14px;
    vertical-align: top;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
`,Nr=v.span`
  background-color: rgba(255, 193, 7, 0.15);
  color: ${({theme:e})=>e.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
  text-transform: uppercase;
`,ym=v.div`
  background-color: rgba(220, 53, 69, 0.1);
  border-left: 4px solid #dc3545;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: #dc3545;
  }
`,wP=v.div`
  background-color: rgba(13, 110, 253, 0.1);
  border-left: 4px solid #0d6efd;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: #0d6efd;
  }
`,kP=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 25px 0;
`,Ii=v.div`
  background-color: ${({theme:e})=>e.secondary};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  gap: 15px;
  
  i {
    font-size: 24px;
    color: ${({theme:e})=>e.accent};
  }
  
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px;
  }
  
  p {
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    color: ${({theme:e})=>e.lineNumber};
  }
`,bP=v.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,vm=v.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.secondary};
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({theme:e})=>e.text};
  transition: background-color 0.2s ease;
  
  i {
    color: ${({theme:e})=>e.accent};
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,EP=()=>s.jsxs(CP,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[s.jsx(TP,{children:"PostgreSQL Integration"}),s.jsx(PP,{children:"Seamlessly integrate PostgreSQL databases with TCP DuckDB Server"}),s.jsxs(Wt,{children:[s.jsx(Qt,{children:"Overview"}),s.jsx(Ct,{children:"TCP DuckDB Server offers robust integration with PostgreSQL databases, allowing you to leverage the speed and analytical capabilities of DuckDB on top of your existing PostgreSQL data. This integration enables you to:"}),s.jsxs(AP,{children:[s.jsxs(So,{children:[s.jsx("i",{className:"fas fa-bolt"}),s.jsxs("div",{children:[s.jsx(wo,{children:"Accelerate Analytics"}),s.jsx(ko,{children:"Run analytical queries against PostgreSQL data at DuckDB speeds"})]})]}),s.jsxs(So,{children:[s.jsx("i",{className:"fas fa-sync-alt"}),s.jsxs("div",{children:[s.jsx(wo,{children:"Maintain Synchronization"}),s.jsx(ko,{children:"Keep your DuckDB copy in sync with PostgreSQL changes"})]})]}),s.jsxs(So,{children:[s.jsx("i",{className:"fas fa-database"}),s.jsxs("div",{children:[s.jsx(wo,{children:"Single Source of Truth"}),s.jsx(ko,{children:"Use PostgreSQL as your primary database while gaining DuckDB's analytical power"})]})]}),s.jsxs(So,{children:[s.jsx("i",{className:"fas fa-shield-alt"}),s.jsxs("div",{children:[s.jsx(wo,{children:"Preserve Security Model"}),s.jsx(ko,{children:"Maintain the same security and access controls"})]})]})]})]}),s.jsxs(Wt,{children:[s.jsx(Qt,{children:"How It Works"}),s.jsx(Ct,{children:"The PostgreSQL integration operates through a two-step process: linking and migration."}),s.jsxs(NP,{children:[s.jsx(LP,{children:"PostgreSQL Integration Workflow"}),s.jsxs(RP,{children:[s.jsxs(Sm,{children:[s.jsx(wm,{children:"1"}),s.jsxs(km,{children:[s.jsx("h3",{children:"Initial Linking"}),s.jsxs("p",{children:["When you execute the ",s.jsx("code",{children:"link"})," command, TCP DuckDB Server:"]}),s.jsxs("ul",{children:[s.jsx("li",{children:"Connects to your PostgreSQL database using the provided connection string"}),s.jsx("li",{children:"Reads the schema of all tables in the PostgreSQL database"}),s.jsx("li",{children:"Creates corresponding tables in the specified DuckDB database"}),s.jsx("li",{children:"Copies all data from PostgreSQL to DuckDB"}),s.jsx("li",{children:"Sets up tracking to monitor future changes"})]})]})]}),s.jsx(DP,{children:s.jsx("i",{className:"fas fa-arrow-down"})}),s.jsxs(Sm,{children:[s.jsx(wm,{children:"2"}),s.jsxs(km,{children:[s.jsx("h3",{children:"Ongoing Synchronization"}),s.jsxs("p",{children:["After the initial link, you can use the ",s.jsx("code",{children:"migrate"})," command to:"]}),s.jsxs("ul",{children:[s.jsx("li",{children:"Read the audit log from PostgreSQL to identify changes since the last sync"}),s.jsx("li",{children:"Apply those changes to the DuckDB copy"}),s.jsx("li",{children:"Keep both databases in sync with minimal latency"})]})]})]})]})]})]}),s.jsxs(Wt,{children:[s.jsx(Qt,{children:"Requirements"}),s.jsx(Ct,{children:"To use the PostgreSQL integration features, you'll need:"}),s.jsxs(IP,{children:[s.jsxs(bo,{children:[s.jsx("i",{className:"fas fa-check-circle"}),s.jsx("div",{children:"A PostgreSQL database (version 10 or higher)"})]}),s.jsxs(bo,{children:[s.jsx("i",{className:"fas fa-check-circle"}),s.jsx("div",{children:"TCP DuckDB Server with super user privileges"})]}),s.jsxs(bo,{children:[s.jsx("i",{className:"fas fa-check-circle"}),s.jsx("div",{children:"Network connectivity between the TCP DuckDB Server and the PostgreSQL server"})]}),s.jsxs(bo,{children:[s.jsx("i",{className:"fas fa-check-circle"}),s.jsx("div",{children:"PostgreSQL user with read permissions on all tables you want to synchronize"})]})]}),s.jsxs(OP,{children:[s.jsx("i",{className:"fas fa-info-circle"}),s.jsxs("div",{children:[s.jsx("strong",{children:"PostgreSQL Audit Table:"})," For the ",s.jsx("code",{children:"migrate"})," feature to work properly, your PostgreSQL database should have auditing enabled. The TCP DuckDB Server looks for changes in an audit table to track modifications made in PostgreSQL."]})]})]}),s.jsxs(Wt,{children:[s.jsx(Qt,{children:"Linking a PostgreSQL Database"}),s.jsxs(Ct,{children:["To link a PostgreSQL database to DuckDB, you'll use the ",s.jsx(jm,{children:"link"})," command:"]}),s.jsx(F,{language:"bash",code:"link [database_name] [postgresql_connection_string]",caption:"Command syntax"}),s.jsxs(bm,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Parameter"}),s.jsx("th",{children:"Description"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"database_name"}),s.jsx("td",{children:"The name of the DuckDB database to create or use for the linked data"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"postgresql_connection_string"}),s.jsxs("td",{children:["A standard PostgreSQL connection string including host, port, database, username, and password",s.jsx("br",{}),s.jsx("em",{children:"Example:"})," ",s.jsx("code",{children:"postgresql://username:password@localhost:5432/dbname"})]})]})]})]}),s.jsx(Ct,{children:"Here's an example of linking a PostgreSQL database:"}),s.jsx(F,{language:"bash",code:`# First, login as super user
login duck secure_password

# Link a PostgreSQL database to a new DuckDB database named "analytics"
link analytics "postgresql://analyst:pass123@db.example.com:5432/production_data"`,caption:"Example usage"}),s.jsxs(FP,{children:[s.jsx("i",{className:"fas fa-exclamation-triangle"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Initial Link Performance:"})," The initial linking process copies all data from PostgreSQL to DuckDB, which can take some time for large databases. Plan this operation during off-peak hours for production databases."]})]})]}),s.jsxs(Wt,{children:[s.jsx(Qt,{children:"Keeping Databases in Sync"}),s.jsxs(Ct,{children:["After the initial link, you can keep the DuckDB database synchronized with the PostgreSQL database using the ",s.jsx(jm,{children:"migrate"})," command:"]}),s.jsx(F,{language:"bash",code:"migrate [database_name]",caption:"Command syntax"}),s.jsxs(bm,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Parameter"}),s.jsx("th",{children:"Description"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"database_name"}),s.jsx("td",{children:"The name of the DuckDB database that is linked to PostgreSQL"})]})})]}),s.jsx(Ct,{children:"Here's an example of migrating changes:"}),s.jsx(F,{language:"bash",code:`# First, login as super user
login duck secure_password

# Synchronize the "analytics" database with PostgreSQL changes
migrate analytics`,caption:"Example usage"}),s.jsxs(_P,{children:[s.jsx("i",{className:"fas fa-lightbulb"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Automation Tip:"})," Consider scheduling regular migrations using a cron job or similar scheduling tool to keep your DuckDB database continuously synchronized with PostgreSQL."]})]})]}),s.jsxs(Wt,{children:[s.jsx(Qt,{children:"Working with Linked Data"}),s.jsx(Ct,{children:"Once a PostgreSQL database is linked, you can work with the data just like any other DuckDB database:"}),s.jsx(F,{language:"bash",code:`# Connect to the linked database
connect analytics

# Run analytical queries
SELECT 
  date_trunc('month', order_date) AS month,
  category,
  SUM(amount) AS total_sales,
  COUNT(*) AS num_orders,
  AVG(amount) AS avg_order_value
FROM orders
GROUP BY month, category
ORDER BY month, total_sales DESC;`,caption:"Example queries on linked data"}),s.jsx(Ct,{children:"All the performance benefits of DuckDB are available on your linked PostgreSQL data, making complex analytical queries run significantly faster."})]}),s.jsxs(Wt,{children:[s.jsx(Qt,{children:"Security Considerations"}),s.jsx(Ct,{children:"When using the PostgreSQL integration, keep these security considerations in mind:"}),s.jsxs($P,{children:[s.jsxs(Eo,{children:[s.jsx("i",{className:"fas fa-lock"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Connection String Security"}),s.jsx("p",{children:"The PostgreSQL connection string contains sensitive credentials. Ensure you're in a secure environment when executing the link command."})]})]}),s.jsxs(Eo,{children:[s.jsx("i",{className:"fas fa-user-lock"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Principle of Least Privilege"}),s.jsx("p",{children:"Use a PostgreSQL user with only the necessary permissions for the tables you need to access."})]})]}),s.jsxs(Eo,{children:[s.jsx("i",{className:"fas fa-user-shield"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Access Control"}),s.jsx("p",{children:"Apply appropriate access controls to the linked DuckDB database to maintain the same security level as your PostgreSQL database."})]})]}),s.jsxs(Eo,{children:[s.jsx("i",{className:"fas fa-network-wired"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Network Security"}),s.jsx("p",{children:"Ensure network communication between TCP DuckDB Server and PostgreSQL is secure, preferably using SSL/TLS encryption."})]})]})]})]}),s.jsxs(Wt,{children:[s.jsx(Qt,{children:"Best Practices"}),s.jsxs(MP,{children:[s.jsxs(Co,{children:[s.jsx(To,{children:s.jsx("i",{className:"fas fa-clock"})}),s.jsxs(Po,{children:[s.jsx("h3",{children:"Regular Synchronization"}),s.jsx("p",{children:"Set up a schedule for running the migrate command based on your data change frequency and analytics needs."})]})]}),s.jsxs(Co,{children:[s.jsx(To,{children:s.jsx("i",{className:"fas fa-filter"})}),s.jsxs(Po,{children:[s.jsx("h3",{children:"Selective Linking"}),s.jsx("p",{children:"Only link the tables you need for analytics to minimize resource usage and synchronization time."})]})]}),s.jsxs(Co,{children:[s.jsx(To,{children:s.jsx("i",{className:"fas fa-compress-arrows-alt"})}),s.jsxs(Po,{children:[s.jsx("h3",{children:"Consider Data Volume"}),s.jsx("p",{children:"For very large PostgreSQL databases, consider linking only specific tables or using schema-level filtering."})]})]}),s.jsxs(Co,{children:[s.jsx(To,{children:s.jsx("i",{className:"fas fa-tachometer-alt"})}),s.jsxs(Po,{children:[s.jsx("h3",{children:"Monitor Performance"}),s.jsx("p",{children:"Keep an eye on both PostgreSQL and DuckDB server performance during migration operations."})]})]})]})]}),s.jsxs(Wt,{children:[s.jsx(Qt,{children:"Complete Example"}),s.jsx(Ct,{children:"Here's a comprehensive example demonstrating the PostgreSQL integration workflow:"}),s.jsx(F,{language:"bash",code:`# Login as super user
login duck secure_password

# Create a new DuckDB database linked to PostgreSQL
link sales_analytics "postgresql://analyst:pass123@db.example.com:5432/sales_data"

# The link command has now copied all tables and data from PostgreSQL to DuckDB

# Connect to the linked database
connect sales_analytics

# Run an analytical query that would be slow in PostgreSQL but fast in DuckDB
SELECT 
  customer_region,
  product_category,
  COUNT(*) as num_transactions,
  SUM(amount) as total_revenue,
  AVG(amount) as avg_transaction_value
FROM transactions
JOIN customers ON transactions.customer_id = customers.id
JOIN products ON transactions.product_id = products.id
WHERE transaction_date BETWEEN '2023-01-01' AND '2023-12-31'
GROUP BY customer_region, product_category
ORDER BY total_revenue DESC;

# Later, after changes have occurred in PostgreSQL, synchronize the data
migrate sales_analytics

# Now run queries on the updated data
SELECT * FROM new_transactions WHERE transaction_date = CURRENT_DATE;`,caption:"Complete PostgreSQL integration example"})]}),s.jsxs(zP,{children:[s.jsxs(Em,{to:"/docs/security",children:[s.jsx("i",{className:"fas fa-arrow-left"}),"Back to Security"]}),s.jsxs(Em,{to:"/docs/troubleshooting",children:["Next: Troubleshooting",s.jsx("i",{className:"fas fa-arrow-right"})]})]})]}),CP=v(We.div)`
  width: 100%;
`,TP=v.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 10px;
`,PP=v.p`
  font-size: 18px;
  color: ${({theme:e})=>e.lineNumber};
  margin: 0 0 40px;
`,Wt=v.section`
  margin-bottom: 60px;
`,Qt=v.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Ct=v.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,jm=v.code`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2px 5px;
  border-radius: 3px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
`,AP=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
`,So=v.div`
  background-color: ${({theme:e})=>e.secondary};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  
  i {
    font-size: 24px;
    color: ${({theme:e})=>e.accent};
  }
`,wo=v.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
`,ko=v.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: ${({theme:e})=>e.lineNumber};
`,NP=v.div`
  background-color: ${({theme:e})=>e.secondary};
  border-radius: 8px;
  padding: 30px;
  margin: 30px 0;
`,LP=v.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 25px;
  text-align: center;
`,RP=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Sm=v.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 600px;
`,wm=v.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({theme:e})=>e.accent};
  color: ${({theme:e})=>e.background};
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,km=v.div`
  flex-grow: 1;
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 10px;
  }
  
  p {
    font-size: 14px;
    line-height: 1.6;
    margin: 0 0 10px;
  }
  
  ul {
    margin: 0;
    padding: 0 0 0 18px;
    
    li {
      font-size: 14px;
      margin-bottom: 5px;
      color: ${({theme:e})=>e.lineNumber};
    }
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
  }
`,DP=v.div`
  color: ${({theme:e})=>e.accent};
  font-size: 24px;
`,IP=v.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 25px 0;
`,bo=v.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  i {
    color: #28a745;
    font-size: 20px;
  }
  
  div {
    font-size: 16px;
  }
`,bm=v.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  th {
    font-weight: 600;
    color: ${({theme:e})=>e.lineNumber};
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.03);
  }
  
  td {
    font-size: 14px;
    vertical-align: top;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
  }
`,FP=v.div`
  background-color: rgba(255, 193, 7, 0.1);
  border-left: 4px solid #ffc107;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: #ffc107;
  }
`,OP=v.div`
  background-color: rgba(13, 110, 253, 0.1);
  border-left: 4px solid #0d6efd;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: #0d6efd;
  }
`,_P=v.div`
  background-color: rgba(40, 167, 69, 0.1);
  border-left: 4px solid #28a745;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: #28a745;
  }
`,$P=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
`,Eo=v.div`
  background-color: ${({theme:e})=>e.secondary};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  gap: 15px;
  
  i {
    font-size: 24px;
    color: #dc3545;
  }
  
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px;
  }
  
  p {
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    color: ${({theme:e})=>e.lineNumber};
  }
`,MP=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 25px 0;
`,Co=v.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`,To=v.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  i {
    font-size: 20px;
    color: ${({theme:e})=>e.accent};
  }
`,Po=v.div`
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px;
  }
  
  p {
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    color: ${({theme:e})=>e.lineNumber};
  }
`,zP=v.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,Em=v.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.secondary};
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({theme:e})=>e.text};
  transition: background-color 0.2s ease;
  
  i {
    color: ${({theme:e})=>e.accent};
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,BP=()=>s.jsxs(VP,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[s.jsx(UP,{children:"Troubleshooting"}),s.jsx(HP,{children:"Solutions for common issues with TCP DuckDB Server"}),s.jsxs(Lr,{children:[s.jsx(Rr,{children:"Connection Issues"}),s.jsx(GP,{children:"If you're having trouble connecting to the TCP DuckDB Server, try these solutions:"}),s.jsxs(Dr,{children:[s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Connection Refused"})]}),s.jsx(pt,{children:s.jsxs("p",{children:["Error message: ",s.jsx(De,{children:"Connection refused"})," when trying to connect to the server."]})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsxs("li",{children:["Verify the server is running with ",s.jsx(De,{children:"ps aux | grep duckdb"})]}),s.jsxs("li",{children:["Check if the server is listening on the expected port with ",s.jsx(De,{children:"netstat -tuln | grep 9876"})]}),s.jsx("li",{children:"Ensure no firewall is blocking the connection"}),s.jsx("li",{children:"Confirm you're using the correct hostname and port"})]})]})]}),s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Connection Timeout"})]}),s.jsx(pt,{children:s.jsx("p",{children:"The connection attempt times out without any response from the server."})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsx("li",{children:"Check network connectivity between client and server"}),s.jsx("li",{children:"Verify the server is not overloaded (high CPU/memory usage)"}),s.jsx("li",{children:"Ensure the server's network interface is properly configured"}),s.jsx("li",{children:"Try connecting from the same machine to eliminate network issues"})]})]})]})]})]}),s.jsxs(Lr,{children:[s.jsx(Rr,{children:"Authentication Problems"}),s.jsxs(Dr,{children:[s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Invalid Credentials"})]}),s.jsx(pt,{children:s.jsxs("p",{children:["Error message: ",s.jsx(De,{children:"Invalid username or password"})," when trying to log in."]})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsx("li",{children:"Double-check username and password for typos"}),s.jsxs("li",{children:["Ensure the user account exists (super user can run ",s.jsx(De,{children:"list users"}),")"]}),s.jsx("li",{children:"If you've forgotten the super user password, you may need to reset it by restarting the server with appropriate flags"})]}),s.jsx(F,{language:"bash",code:`# Example of correct login
login duck superpassword`,caption:"Correct login syntax"})]})]}),s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Session Expired"})]}),s.jsx(pt,{children:s.jsx("p",{children:"You were previously authenticated, but now commands fail with authorization errors."})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsx("li",{children:"Sessions may expire after a period of inactivity"}),s.jsx("li",{children:"Simply log in again with your credentials"}),s.jsx("li",{children:"If the issue persists, the server might be restarting periodically"})]})]})]})]})]}),s.jsxs(Lr,{children:[s.jsx(Rr,{children:"Permission Errors"}),s.jsxs(Dr,{children:[s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Access Denied to Database"})]}),s.jsx(pt,{children:s.jsxs("p",{children:["Error message: ",s.jsx(De,{children:"Access denied: no permission to access database [database_name]"})]})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsx("li",{children:"Ensure you have been granted access to the database"}),s.jsx("li",{children:"Have a super user check granted permissions"}),s.jsx("li",{children:"Super user can grant access with:"})]}),s.jsx(F,{language:"bash",code:`# Grant read access to database
grant database mydb username read

# Grant write access to database
grant database mydb username write`,caption:"Granting database access"})]})]}),s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Table Operation Not Permitted"})]}),s.jsx(pt,{children:s.jsxs("p",{children:["Error message: ",s.jsx(De,{children:"Operation not permitted: insufficient privileges for table [table_name]"})]})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsx("li",{children:"You need specific table-level permissions for the operation"}),s.jsxs("li",{children:["For SELECT operations, you need ",s.jsx(De,{children:"select"})," permission"]}),s.jsxs("li",{children:["For INSERT operations, you need ",s.jsx(De,{children:"insert"})," permission"]}),s.jsxs("li",{children:["For UPDATE operations, you need ",s.jsx(De,{children:"update"})," permission"]}),s.jsxs("li",{children:["For DELETE operations, you need ",s.jsx(De,{children:"delete"})," permission"]}),s.jsx("li",{children:"Super user can grant table permissions with:"})]}),s.jsx(F,{language:"bash",code:`# Grant select and insert permissions on a table
grant table mydb users username select insert`,caption:"Granting table permissions"})]})]})]})]}),s.jsxs(Lr,{children:[s.jsx(Rr,{children:"PostgreSQL Integration Issues"}),s.jsxs(Dr,{children:[s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Link Command Fails"})]}),s.jsx(pt,{children:s.jsx("p",{children:"Error when attempting to link a PostgreSQL database."})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsx("li",{children:"Verify the PostgreSQL connection string is correct"}),s.jsx("li",{children:"Ensure the PostgreSQL server is running and accessible"}),s.jsx("li",{children:"Check that the PostgreSQL user has sufficient permissions"}),s.jsx("li",{children:"Verify PostgreSQL version compatibility (requires version 10+)"}),s.jsx("li",{children:"Check proper syntax:"})]}),s.jsx(F,{language:"bash",code:`# Correct link command syntax
link mydb "postgresql://user:password@hostname:5432/database_name"`,caption:"Linking PostgreSQL database"})]})]}),s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Migration Issues"})]}),s.jsx(pt,{children:s.jsxs("p",{children:["The ",s.jsx(De,{children:"migrate"})," command fails or doesn't sync changes."]})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsx("li",{children:"Ensure the PostgreSQL audit table is properly configured"}),s.jsx("li",{children:"Check that the PostgreSQL connection is still active"}),s.jsx("li",{children:"Verify that changes have actually been made in PostgreSQL"}),s.jsx("li",{children:"For large datasets, migration might take time - be patient"}),s.jsx("li",{children:"If the audit trail is broken, you may need to re-link the database"})]})]})]})]})]}),s.jsxs(Lr,{children:[s.jsx(Rr,{children:"SQL Execution Errors"}),s.jsxs(Dr,{children:[s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Syntax Errors"})]}),s.jsx(pt,{children:s.jsx("p",{children:"SQL query fails with syntax errors."})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsx("li",{children:"Double-check the SQL syntax"}),s.jsx("li",{children:"Ensure SQL statements end with a semicolon (;)"}),s.jsx("li",{children:"Verify table and column names are correct"}),s.jsx("li",{children:"Check that the SQL syntax is compatible with DuckDB"})]}),s.jsx(F,{language:"sql",code:`-- Correct SQL syntax examples
SELECT * FROM users WHERE active = true;

INSERT INTO users (username, email) VALUES ('john', 'john@example.com');

UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE username = 'john';`,caption:"Correct SQL syntax examples"})]})]}),s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Transaction Errors"})]}),s.jsx(pt,{children:s.jsx("p",{children:"Problems with starting, committing, or rolling back transactions."})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsxs("li",{children:["Ensure transactions are properly started with ",s.jsx(De,{children:"start transaction"})]}),s.jsxs("li",{children:["All transactions must be ended with either ",s.jsx(De,{children:"commit"})," or ",s.jsx(De,{children:"rollback"})]}),s.jsx("li",{children:"You cannot have nested transactions"}),s.jsx("li",{children:"Check for proper transaction syntax:"})]}),s.jsx(F,{language:"sql",code:`-- Correct transaction syntax
start transaction
INSERT INTO accounts (id, balance) VALUES (101, 1000);
UPDATE accounts SET balance = balance - 100 WHERE id = 101;
INSERT INTO transactions (account_id, amount) VALUES (101, -100);
commit

-- If you need to cancel the changes:
-- rollback`,caption:"Transaction syntax example"})]})]})]})]}),s.jsxs(Lr,{children:[s.jsx(Rr,{children:"Server Administration"}),s.jsxs(Dr,{children:[s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Server Crashes"})]}),s.jsx(pt,{children:s.jsx("p",{children:"The TCP DuckDB Server crashes unexpectedly."})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsx("li",{children:"Check server logs for error messages"}),s.jsx("li",{children:"Verify there's enough disk space for database files"}),s.jsx("li",{children:"Ensure enough memory is available for DuckDB operations"}),s.jsx("li",{children:"Monitor for corrupt database files"}),s.jsx("li",{children:"For production use, consider implementing monitoring and auto-restart"})]})]})]}),s.jsxs(dt,{children:[s.jsxs(ft,{children:[s.jsx("i",{className:"fas fa-exclamation-circle"}),s.jsx("h3",{children:"Performance Degradation"})]}),s.jsx(pt,{children:s.jsx("p",{children:"The server becomes slow or unresponsive over time."})}),s.jsxs(ht,{children:[s.jsx("h4",{children:"Solutions:"}),s.jsxs("ol",{children:[s.jsx("li",{children:"Monitor system resources (CPU, memory, disk I/O)"}),s.jsx("li",{children:"Check for very large result sets that might exhaust memory"}),s.jsx("li",{children:"Look for inefficient queries that could be optimized"}),s.jsx("li",{children:"Consider implementing connection pooling for high-concurrency scenarios"}),s.jsx("li",{children:"For very large databases, ensure server hardware meets requirements"})]}),s.jsxs(WP,{children:[s.jsx("i",{className:"fas fa-lightbulb"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Performance Tip:"})," DuckDB is optimized for analytical workloads. For transactional workloads with many small updates, consider using PostgreSQL directly and only using DuckDB for analytics."]})]})]})]})]})]}),s.jsxs(QP,{children:[s.jsxs(Cm,{to:"/docs/postgres-integration",children:[s.jsx("i",{className:"fas fa-arrow-left"}),"Back to PostgreSQL Integration"]}),s.jsxs(Cm,{to:"/docs/client-libraries",children:["Next: Client Libraries",s.jsx("i",{className:"fas fa-arrow-right"})]})]})]}),VP=v(We.div)`
  width: 100%;
`,UP=v.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 10px;
`,HP=v.p`
  font-size: 18px;
  color: ${({theme:e})=>e.lineNumber};
  margin: 0 0 40px;
`,Lr=v.section`
  margin-bottom: 60px;
`,Rr=v.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,GP=v.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,De=v.code`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2px 5px;
  border-radius: 3px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
`,Dr=v.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,dt=v.div`
  background-color: ${({theme:e})=>e.secondary};
  border-radius: 8px;
  padding: 25px;
`,ft=v.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  
  i {
    color: #dc3545;
    font-size: 24px;
  }
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }
`,pt=v.div`
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
  }
`,ht=v.div`
  h4 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 15px;
    color: ${({theme:e})=>e.accent};
  }
  
  ol, ul {
    margin: 0 0 20px;
    padding-left: 25px;
    
    li {
      margin-bottom: 10px;
      font-size: 15px;
      line-height: 1.5;
    }
  }
`,WP=v.div`
  background-color: rgba(40, 167, 69, 0.1);
  border-left: 4px solid #28a745;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0 0;
  
  i {
    font-size: 20px;
    color: #28a745;
  }
  
  strong {
    display: block;
    margin-bottom: 5px;
  }
`,QP=v.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,Cm=v.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({theme:e})=>e.secondary};
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({theme:e})=>e.text};
  transition: background-color 0.2s ease;
  
  i {
    color: ${({theme:e})=>e.accent};
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,KP=()=>{const[e,t]=C.useState(!0),n=()=>{t(!e)};return s.jsxs(Nw,{theme:e?Gp:Hp,children:[s.jsx(Iw,{theme:e?Gp:Hp}),s.jsxs(ES,{basename:"/tcpDuckdbWeb",children:[s.jsx(uT,{toggleTheme:n,isDarkTheme:e}),s.jsxs(xS,{children:[s.jsx($t,{path:"/",element:s.jsx(yT,{})}),s.jsxs($t,{path:"/docs",element:s.jsx(u2,{}),children:[s.jsx($t,{index:!0,element:s.jsx(A2,{})}),s.jsx($t,{path:"installation",element:s.jsx(M2,{})}),s.jsx($t,{path:"quick-start",element:s.jsx(Q2,{})}),s.jsx($t,{path:"commands",element:s.jsx(iP,{})}),s.jsx($t,{path:"security",element:s.jsx(hP,{})}),s.jsx($t,{path:"postgres-integration",element:s.jsx(EP,{})}),s.jsx($t,{path:"troubleshooting",element:s.jsx(BP,{})})]})]})]})]})};Tc.createRoot(document.getElementById("root")).render(s.jsx(le.StrictMode,{children:s.jsx(KP,{})}));
