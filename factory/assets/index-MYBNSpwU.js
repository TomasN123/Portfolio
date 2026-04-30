(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function j1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Px={exports:{}},Kf={},Lx={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu=Symbol.for("react.element"),$1=Symbol.for("react.portal"),K1=Symbol.for("react.fragment"),Z1=Symbol.for("react.strict_mode"),J1=Symbol.for("react.profiler"),Q1=Symbol.for("react.provider"),eE=Symbol.for("react.context"),tE=Symbol.for("react.forward_ref"),nE=Symbol.for("react.suspense"),iE=Symbol.for("react.memo"),rE=Symbol.for("react.lazy"),Hg=Symbol.iterator;function sE(n){return n===null||typeof n!="object"?null:(n=Hg&&n[Hg]||n["@@iterator"],typeof n=="function"?n:null)}var Dx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nx=Object.assign,Ix={};function $a(n,e,t){this.props=n,this.context=e,this.refs=Ix,this.updater=t||Dx}$a.prototype.isReactComponent={};$a.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};$a.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Ux(){}Ux.prototype=$a.prototype;function Km(n,e,t){this.props=n,this.context=e,this.refs=Ix,this.updater=t||Dx}var Zm=Km.prototype=new Ux;Zm.constructor=Km;Nx(Zm,$a.prototype);Zm.isPureReactComponent=!0;var Wg=Array.isArray,Fx=Object.prototype.hasOwnProperty,Jm={current:null},Ox={key:!0,ref:!0,__self:!0,__source:!0};function kx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fx.call(e,i)&&!Ox.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bu,type:n,key:s,ref:o,props:r,_owner:Jm.current}}function oE(n,e){return{$$typeof:bu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Qm(n){return typeof n=="object"&&n!==null&&n.$$typeof===bu}function aE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Xg=/\/+/g;function Ph(n,e){return typeof n=="object"&&n!==null&&n.key!=null?aE(""+n.key):e.toString(36)}function Vc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case bu:case $1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ph(o,0):i,Wg(r)?(t="",n!=null&&(t=n.replace(Xg,"$&/")+"/"),Vc(r,e,t,"",function(u){return u})):r!=null&&(Qm(r)&&(r=oE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Xg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Wg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ph(s,a);o+=Vc(s,e,t,l,r)}else if(l=sE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ph(s,a++),o+=Vc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yu(n,e,t){if(n==null)return n;var i=[],r=0;return Vc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function lE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var qn={current:null},Gc={transition:null},uE={ReactCurrentDispatcher:qn,ReactCurrentBatchConfig:Gc,ReactCurrentOwner:Jm};function zx(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:Yu,forEach:function(n,e,t){Yu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Yu(n,function(){e++}),e},toArray:function(n){return Yu(n,function(e){return e})||[]},only:function(n){if(!Qm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};lt.Component=$a;lt.Fragment=K1;lt.Profiler=J1;lt.PureComponent=Km;lt.StrictMode=Z1;lt.Suspense=nE;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uE;lt.act=zx;lt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Nx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Fx.call(e,l)&&!Ox.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:bu,type:n.type,key:r,ref:s,props:i,_owner:o}};lt.createContext=function(n){return n={$$typeof:eE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Q1,_context:n},n.Consumer=n};lt.createElement=kx;lt.createFactory=function(n){var e=kx.bind(null,n);return e.type=n,e};lt.createRef=function(){return{current:null}};lt.forwardRef=function(n){return{$$typeof:tE,render:n}};lt.isValidElement=Qm;lt.lazy=function(n){return{$$typeof:rE,_payload:{_status:-1,_result:n},_init:lE}};lt.memo=function(n,e){return{$$typeof:iE,type:n,compare:e===void 0?null:e}};lt.startTransition=function(n){var e=Gc.transition;Gc.transition={};try{n()}finally{Gc.transition=e}};lt.unstable_act=zx;lt.useCallback=function(n,e){return qn.current.useCallback(n,e)};lt.useContext=function(n){return qn.current.useContext(n)};lt.useDebugValue=function(){};lt.useDeferredValue=function(n){return qn.current.useDeferredValue(n)};lt.useEffect=function(n,e){return qn.current.useEffect(n,e)};lt.useId=function(){return qn.current.useId()};lt.useImperativeHandle=function(n,e,t){return qn.current.useImperativeHandle(n,e,t)};lt.useInsertionEffect=function(n,e){return qn.current.useInsertionEffect(n,e)};lt.useLayoutEffect=function(n,e){return qn.current.useLayoutEffect(n,e)};lt.useMemo=function(n,e){return qn.current.useMemo(n,e)};lt.useReducer=function(n,e,t){return qn.current.useReducer(n,e,t)};lt.useRef=function(n){return qn.current.useRef(n)};lt.useState=function(n){return qn.current.useState(n)};lt.useSyncExternalStore=function(n,e,t){return qn.current.useSyncExternalStore(n,e,t)};lt.useTransition=function(){return qn.current.useTransition()};lt.version="18.3.1";Lx.exports=lt;var In=Lx.exports;const cE=j1(In);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE=In,hE=Symbol.for("react.element"),dE=Symbol.for("react.fragment"),pE=Object.prototype.hasOwnProperty,mE=fE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gE={key:!0,ref:!0,__self:!0,__source:!0};function Bx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)pE.call(e,i)&&!gE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hE,type:n,key:s,ref:o,props:r,_owner:mE.current}}Kf.Fragment=dE;Kf.jsx=Bx;Kf.jsxs=Bx;Px.exports=Kf;var rt=Px.exports,qd={},Vx={exports:{}},Ci={},Gx={exports:{}},Hx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(k,Y){var $=k.length;k.push(Y);e:for(;0<$;){var J=$-1>>>1,ee=k[J];if(0<r(ee,Y))k[J]=Y,k[$]=ee,$=J;else break e}}function t(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var Y=k[0],$=k.pop();if($!==Y){k[0]=$;e:for(var J=0,ee=k.length,Be=ee>>>1;J<Be;){var Me=2*(J+1)-1,pe=k[Me],K=Me+1,Se=k[K];if(0>r(pe,$))K<ee&&0>r(Se,pe)?(k[J]=Se,k[K]=$,J=K):(k[J]=pe,k[Me]=$,J=Me);else if(K<ee&&0>r(Se,$))k[J]=Se,k[K]=$,J=K;else break e}}return Y}function r(k,Y){var $=k.sortIndex-Y.sortIndex;return $!==0?$:k.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,m=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(k){for(var Y=t(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=k)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=t(u)}}function S(k){if(v=!1,x(k),!m)if(t(l)!==null)m=!0,B(T);else{var Y=t(u);Y!==null&&F(S,Y.startTime-k)}}function T(k,Y){m=!1,v&&(v=!1,d(y),y=-1),p=!0;var $=h;try{for(x(Y),f=t(l);f!==null&&(!(f.expirationTime>Y)||k&&!P());){var J=f.callback;if(typeof J=="function"){f.callback=null,h=f.priorityLevel;var ee=J(f.expirationTime<=Y);Y=n.unstable_now(),typeof ee=="function"?f.callback=ee:f===t(l)&&i(l),x(Y)}else i(l);f=t(l)}if(f!==null)var Be=!0;else{var Me=t(u);Me!==null&&F(S,Me.startTime-Y),Be=!1}return Be}finally{f=null,h=$,p=!1}}var E=!1,A=null,y=-1,w=5,b=-1;function P(){return!(n.unstable_now()-b<w)}function I(){if(A!==null){var k=n.unstable_now();b=k;var Y=!0;try{Y=A(!0,k)}finally{Y?z():(E=!1,A=null)}}else E=!1}var z;if(typeof g=="function")z=function(){g(I)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,D=H.port2;H.port1.onmessage=I,z=function(){D.postMessage(null)}}else z=function(){_(I,0)};function B(k){A=k,E||(E=!0,z())}function F(k,Y){y=_(function(){k(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(k){k.callback=null},n.unstable_continueExecution=function(){m||p||(m=!0,B(T))},n.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<k?Math.floor(1e3/k):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(k){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var $=h;h=Y;try{return k()}finally{h=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(k,Y){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var $=h;h=k;try{return Y()}finally{h=$}},n.unstable_scheduleCallback=function(k,Y,$){var J=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?J+$:J):$=J,k){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=$+ee,k={id:c++,callback:Y,priorityLevel:k,startTime:$,expirationTime:ee,sortIndex:-1},$>J?(k.sortIndex=$,e(u,k),t(l)===null&&k===t(u)&&(v?(d(y),y=-1):v=!0,F(S,$-J))):(k.sortIndex=ee,e(l,k),m||p||(m=!0,B(T))),k},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(k){var Y=h;return function(){var $=h;h=Y;try{return k.apply(this,arguments)}finally{h=$}}}})(Hx);Gx.exports=Hx;var _E=Gx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vE=In,Ti=_E;function he(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wx=new Set,Zl={};function Po(n,e){Da(n,e),Da(n+"Capture",e)}function Da(n,e){for(Zl[n]=e,n=0;n<e.length;n++)Wx.add(e[n])}var qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jd=Object.prototype.hasOwnProperty,xE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yg={},qg={};function yE(n){return jd.call(qg,n)?!0:jd.call(Yg,n)?!1:xE.test(n)?qg[n]=!0:(Yg[n]=!0,!1)}function SE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function ME(n,e,t,i){if(e===null||typeof e>"u"||SE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Rn[n]=new jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Rn[e]=new jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Rn[n]=new jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Rn[n]=new jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Rn[n]=new jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Rn[n]=new jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Rn[n]=new jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Rn[n]=new jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Rn[n]=new jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var e0=/[\-:]([a-z])/g;function t0(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(e0,t0);Rn[e]=new jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(e0,t0);Rn[e]=new jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(e0,t0);Rn[e]=new jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Rn[n]=new jn(n,1,!1,n.toLowerCase(),null,!1,!1)});Rn.xlinkHref=new jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Rn[n]=new jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function n0(n,e,t,i){var r=Rn.hasOwnProperty(e)?Rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ME(e,t,r,i)&&(t=null),i||r===null?yE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ts=vE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qu=Symbol.for("react.element"),sa=Symbol.for("react.portal"),oa=Symbol.for("react.fragment"),i0=Symbol.for("react.strict_mode"),$d=Symbol.for("react.profiler"),Xx=Symbol.for("react.provider"),Yx=Symbol.for("react.context"),r0=Symbol.for("react.forward_ref"),Kd=Symbol.for("react.suspense"),Zd=Symbol.for("react.suspense_list"),s0=Symbol.for("react.memo"),ms=Symbol.for("react.lazy"),qx=Symbol.for("react.offscreen"),jg=Symbol.iterator;function cl(n){return n===null||typeof n!="object"?null:(n=jg&&n[jg]||n["@@iterator"],typeof n=="function"?n:null)}var $t=Object.assign,Lh;function Al(n){if(Lh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Lh=e&&e[1]||""}return`
`+Lh+n}var Dh=!1;function Nh(n,e){if(!n||Dh)return"";Dh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Dh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Al(n):""}function EE(n){switch(n.tag){case 5:return Al(n.type);case 16:return Al("Lazy");case 13:return Al("Suspense");case 19:return Al("SuspenseList");case 0:case 2:case 15:return n=Nh(n.type,!1),n;case 11:return n=Nh(n.type.render,!1),n;case 1:return n=Nh(n.type,!0),n;default:return""}}function Jd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case oa:return"Fragment";case sa:return"Portal";case $d:return"Profiler";case i0:return"StrictMode";case Kd:return"Suspense";case Zd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Yx:return(n.displayName||"Context")+".Consumer";case Xx:return(n._context.displayName||"Context")+".Provider";case r0:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case s0:return e=n.displayName||null,e!==null?e:Jd(n.type)||"Memo";case ms:e=n._payload,n=n._init;try{return Jd(n(e))}catch{}}return null}function TE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jd(e);case 8:return e===i0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function jx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wE(n){var e=jx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ju(n){n._valueTracker||(n._valueTracker=wE(n))}function $x(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=jx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function uf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Qd(n,e){var t=e.checked;return $t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function $g(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Fs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kx(n,e){e=e.checked,e!=null&&n0(n,"checked",e,!1)}function ep(n,e){Kx(n,e);var t=Fs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?tp(n,e.type,t):e.hasOwnProperty("defaultValue")&&tp(n,e.type,Fs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Kg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function tp(n,e,t){(e!=="number"||uf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Cl=Array.isArray;function ya(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Fs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function np(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return $t({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Zg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(he(92));if(Cl(t)){if(1<t.length)throw Error(he(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Fs(t)}}function Zx(n,e){var t=Fs(e.value),i=Fs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Jg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Jx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ip(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Jx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $u,Qx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for($u=$u||document.createElement("div"),$u.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$u.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Jl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ul={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AE=["Webkit","ms","Moz","O"];Object.keys(Ul).forEach(function(n){AE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ul[e]=Ul[n]})});function ey(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ul.hasOwnProperty(n)&&Ul[n]?(""+e).trim():e+"px"}function ty(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=ey(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var CE=$t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rp(n,e){if(e){if(CE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function sp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=null;function o0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ap=null,Sa=null,Ma=null;function Qg(n){if(n=Du(n)){if(typeof ap!="function")throw Error(he(280));var e=n.stateNode;e&&(e=th(e),ap(n.stateNode,n.type,e))}}function ny(n){Sa?Ma?Ma.push(n):Ma=[n]:Sa=n}function iy(){if(Sa){var n=Sa,e=Ma;if(Ma=Sa=null,Qg(n),e)for(n=0;n<e.length;n++)Qg(e[n])}}function ry(n,e){return n(e)}function sy(){}var Ih=!1;function oy(n,e,t){if(Ih)return n(e,t);Ih=!0;try{return ry(n,e,t)}finally{Ih=!1,(Sa!==null||Ma!==null)&&(sy(),iy())}}function Ql(n,e){var t=n.stateNode;if(t===null)return null;var i=th(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(he(231,e,typeof t));return t}var lp=!1;if(qr)try{var fl={};Object.defineProperty(fl,"passive",{get:function(){lp=!0}}),window.addEventListener("test",fl,fl),window.removeEventListener("test",fl,fl)}catch{lp=!1}function RE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Fl=!1,cf=null,ff=!1,up=null,bE={onError:function(n){Fl=!0,cf=n}};function PE(n,e,t,i,r,s,o,a,l){Fl=!1,cf=null,RE.apply(bE,arguments)}function LE(n,e,t,i,r,s,o,a,l){if(PE.apply(this,arguments),Fl){if(Fl){var u=cf;Fl=!1,cf=null}else throw Error(he(198));ff||(ff=!0,up=u)}}function Lo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function ay(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function e_(n){if(Lo(n)!==n)throw Error(he(188))}function DE(n){var e=n.alternate;if(!e){if(e=Lo(n),e===null)throw Error(he(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return e_(r),n;if(s===i)return e_(r),e;s=s.sibling}throw Error(he(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(he(189))}}if(t.alternate!==i)throw Error(he(190))}if(t.tag!==3)throw Error(he(188));return t.stateNode.current===t?n:e}function ly(n){return n=DE(n),n!==null?uy(n):null}function uy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=uy(n);if(e!==null)return e;n=n.sibling}return null}var cy=Ti.unstable_scheduleCallback,t_=Ti.unstable_cancelCallback,NE=Ti.unstable_shouldYield,IE=Ti.unstable_requestPaint,tn=Ti.unstable_now,UE=Ti.unstable_getCurrentPriorityLevel,a0=Ti.unstable_ImmediatePriority,fy=Ti.unstable_UserBlockingPriority,hf=Ti.unstable_NormalPriority,FE=Ti.unstable_LowPriority,hy=Ti.unstable_IdlePriority,Zf=null,Er=null;function OE(n){if(Er&&typeof Er.onCommitFiberRoot=="function")try{Er.onCommitFiberRoot(Zf,n,void 0,(n.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:BE,kE=Math.log,zE=Math.LN2;function BE(n){return n>>>=0,n===0?32:31-(kE(n)/zE|0)|0}var Ku=64,Zu=4194304;function Rl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function df(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Rl(a):(s&=o,s!==0&&(i=Rl(s)))}else o=t&~r,o!==0?i=Rl(o):s!==0&&(i=Rl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-er(e),r=1<<t,i|=n[t],e&=~r;return i}function VE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-er(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=VE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function cp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function dy(){var n=Ku;return Ku<<=1,!(Ku&4194240)&&(Ku=64),n}function Uh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Pu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-er(e),n[e]=t}function HE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-er(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function l0(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-er(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var At=0;function py(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var my,u0,gy,_y,vy,fp=!1,Ju=[],As=null,Cs=null,Rs=null,eu=new Map,tu=new Map,_s=[],WE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function n_(n,e){switch(n){case"focusin":case"focusout":As=null;break;case"dragenter":case"dragleave":Cs=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":eu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":tu.delete(e.pointerId)}}function hl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Du(e),e!==null&&u0(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function XE(n,e,t,i,r){switch(e){case"focusin":return As=hl(As,n,e,t,i,r),!0;case"dragenter":return Cs=hl(Cs,n,e,t,i,r),!0;case"mouseover":return Rs=hl(Rs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return eu.set(s,hl(eu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,tu.set(s,hl(tu.get(s)||null,n,e,t,i,r)),!0}return!1}function xy(n){var e=lo(n.target);if(e!==null){var t=Lo(e);if(t!==null){if(e=t.tag,e===13){if(e=ay(t),e!==null){n.blockedOn=e,vy(n.priority,function(){gy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Hc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=hp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);op=i,t.target.dispatchEvent(i),op=null}else return e=Du(t),e!==null&&u0(e),n.blockedOn=t,!1;e.shift()}return!0}function i_(n,e,t){Hc(n)&&t.delete(e)}function YE(){fp=!1,As!==null&&Hc(As)&&(As=null),Cs!==null&&Hc(Cs)&&(Cs=null),Rs!==null&&Hc(Rs)&&(Rs=null),eu.forEach(i_),tu.forEach(i_)}function dl(n,e){n.blockedOn===e&&(n.blockedOn=null,fp||(fp=!0,Ti.unstable_scheduleCallback(Ti.unstable_NormalPriority,YE)))}function nu(n){function e(r){return dl(r,n)}if(0<Ju.length){dl(Ju[0],n);for(var t=1;t<Ju.length;t++){var i=Ju[t];i.blockedOn===n&&(i.blockedOn=null)}}for(As!==null&&dl(As,n),Cs!==null&&dl(Cs,n),Rs!==null&&dl(Rs,n),eu.forEach(e),tu.forEach(e),t=0;t<_s.length;t++)i=_s[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<_s.length&&(t=_s[0],t.blockedOn===null);)xy(t),t.blockedOn===null&&_s.shift()}var Ea=ts.ReactCurrentBatchConfig,pf=!0;function qE(n,e,t,i){var r=At,s=Ea.transition;Ea.transition=null;try{At=1,c0(n,e,t,i)}finally{At=r,Ea.transition=s}}function jE(n,e,t,i){var r=At,s=Ea.transition;Ea.transition=null;try{At=4,c0(n,e,t,i)}finally{At=r,Ea.transition=s}}function c0(n,e,t,i){if(pf){var r=hp(n,e,t,i);if(r===null)Xh(n,e,i,mf,t),n_(n,i);else if(XE(r,n,e,t,i))i.stopPropagation();else if(n_(n,i),e&4&&-1<WE.indexOf(n)){for(;r!==null;){var s=Du(r);if(s!==null&&my(s),s=hp(n,e,t,i),s===null&&Xh(n,e,i,mf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xh(n,e,i,null,t)}}var mf=null;function hp(n,e,t,i){if(mf=null,n=o0(i),n=lo(n),n!==null)if(e=Lo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=ay(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return mf=n,null}function yy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UE()){case a0:return 1;case fy:return 4;case hf:case FE:return 16;case hy:return 536870912;default:return 16}default:return 16}}var ys=null,f0=null,Wc=null;function Sy(){if(Wc)return Wc;var n,e=f0,t=e.length,i,r="value"in ys?ys.value:ys.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Wc=r.slice(n,1<i?1-i:void 0)}function Xc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Qu(){return!0}function r_(){return!1}function Ri(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qu:r_,this.isPropagationStopped=r_,this}return $t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qu)},persist:function(){},isPersistent:Qu}),e}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},h0=Ri(Ka),Lu=$t({},Ka,{view:0,detail:0}),$E=Ri(Lu),Fh,Oh,pl,Jf=$t({},Lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:d0,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pl&&(pl&&n.type==="mousemove"?(Fh=n.screenX-pl.screenX,Oh=n.screenY-pl.screenY):Oh=Fh=0,pl=n),Fh)},movementY:function(n){return"movementY"in n?n.movementY:Oh}}),s_=Ri(Jf),KE=$t({},Jf,{dataTransfer:0}),ZE=Ri(KE),JE=$t({},Lu,{relatedTarget:0}),kh=Ri(JE),QE=$t({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),eT=Ri(QE),tT=$t({},Ka,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),nT=Ri(tT),iT=$t({},Ka,{data:0}),o_=Ri(iT),rT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=oT[n])?!!e[n]:!1}function d0(){return aT}var lT=$t({},Lu,{key:function(n){if(n.key){var e=rT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Xc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?sT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:d0,charCode:function(n){return n.type==="keypress"?Xc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),uT=Ri(lT),cT=$t({},Jf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),a_=Ri(cT),fT=$t({},Lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:d0}),hT=Ri(fT),dT=$t({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),pT=Ri(dT),mT=$t({},Jf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gT=Ri(mT),_T=[9,13,27,32],p0=qr&&"CompositionEvent"in window,Ol=null;qr&&"documentMode"in document&&(Ol=document.documentMode);var vT=qr&&"TextEvent"in window&&!Ol,My=qr&&(!p0||Ol&&8<Ol&&11>=Ol),l_=" ",u_=!1;function Ey(n,e){switch(n){case"keyup":return _T.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ty(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var aa=!1;function xT(n,e){switch(n){case"compositionend":return Ty(e);case"keypress":return e.which!==32?null:(u_=!0,l_);case"textInput":return n=e.data,n===l_&&u_?null:n;default:return null}}function yT(n,e){if(aa)return n==="compositionend"||!p0&&Ey(n,e)?(n=Sy(),Wc=f0=ys=null,aa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return My&&e.locale!=="ko"?null:e.data;default:return null}}var ST={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function c_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!ST[n.type]:e==="textarea"}function wy(n,e,t,i){ny(i),e=gf(e,"onChange"),0<e.length&&(t=new h0("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var kl=null,iu=null;function MT(n){Fy(n,0)}function Qf(n){var e=ca(n);if($x(e))return n}function ET(n,e){if(n==="change")return e}var Ay=!1;if(qr){var zh;if(qr){var Bh="oninput"in document;if(!Bh){var f_=document.createElement("div");f_.setAttribute("oninput","return;"),Bh=typeof f_.oninput=="function"}zh=Bh}else zh=!1;Ay=zh&&(!document.documentMode||9<document.documentMode)}function h_(){kl&&(kl.detachEvent("onpropertychange",Cy),iu=kl=null)}function Cy(n){if(n.propertyName==="value"&&Qf(iu)){var e=[];wy(e,iu,n,o0(n)),oy(MT,e)}}function TT(n,e,t){n==="focusin"?(h_(),kl=e,iu=t,kl.attachEvent("onpropertychange",Cy)):n==="focusout"&&h_()}function wT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Qf(iu)}function AT(n,e){if(n==="click")return Qf(e)}function CT(n,e){if(n==="input"||n==="change")return Qf(e)}function RT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var nr=typeof Object.is=="function"?Object.is:RT;function ru(n,e){if(nr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!jd.call(e,r)||!nr(n[r],e[r]))return!1}return!0}function d_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function p_(n,e){var t=d_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=d_(t)}}function Ry(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ry(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function by(){for(var n=window,e=uf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=uf(n.document)}return e}function m0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function bT(n){var e=by(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ry(t.ownerDocument.documentElement,t)){if(i!==null&&m0(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=p_(t,s);var o=p_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var PT=qr&&"documentMode"in document&&11>=document.documentMode,la=null,dp=null,zl=null,pp=!1;function m_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pp||la==null||la!==uf(i)||(i=la,"selectionStart"in i&&m0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zl&&ru(zl,i)||(zl=i,i=gf(dp,"onSelect"),0<i.length&&(e=new h0("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=la)))}function ec(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ua={animationend:ec("Animation","AnimationEnd"),animationiteration:ec("Animation","AnimationIteration"),animationstart:ec("Animation","AnimationStart"),transitionend:ec("Transition","TransitionEnd")},Vh={},Py={};qr&&(Py=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function eh(n){if(Vh[n])return Vh[n];if(!ua[n])return n;var e=ua[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Py)return Vh[n]=e[t];return n}var Ly=eh("animationend"),Dy=eh("animationiteration"),Ny=eh("animationstart"),Iy=eh("transitionend"),Uy=new Map,g_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gs(n,e){Uy.set(n,e),Po(e,[n])}for(var Gh=0;Gh<g_.length;Gh++){var Hh=g_[Gh],LT=Hh.toLowerCase(),DT=Hh[0].toUpperCase()+Hh.slice(1);Gs(LT,"on"+DT)}Gs(Ly,"onAnimationEnd");Gs(Dy,"onAnimationIteration");Gs(Ny,"onAnimationStart");Gs("dblclick","onDoubleClick");Gs("focusin","onFocus");Gs("focusout","onBlur");Gs(Iy,"onTransitionEnd");Da("onMouseEnter",["mouseout","mouseover"]);Da("onMouseLeave",["mouseout","mouseover"]);Da("onPointerEnter",["pointerout","pointerover"]);Da("onPointerLeave",["pointerout","pointerover"]);Po("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Po("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Po("onBeforeInput",["compositionend","keypress","textInput","paste"]);Po("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Po("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Po("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NT=new Set("cancel close invalid load scroll toggle".split(" ").concat(bl));function __(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,LE(i,e,void 0,n),n.currentTarget=null}function Fy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;__(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;__(r,a,u),s=l}}}if(ff)throw n=up,ff=!1,up=null,n}function It(n,e){var t=e[xp];t===void 0&&(t=e[xp]=new Set);var i=n+"__bubble";t.has(i)||(Oy(e,n,2,!1),t.add(i))}function Wh(n,e,t){var i=0;e&&(i|=4),Oy(t,n,i,e)}var tc="_reactListening"+Math.random().toString(36).slice(2);function su(n){if(!n[tc]){n[tc]=!0,Wx.forEach(function(t){t!=="selectionchange"&&(NT.has(t)||Wh(t,!1,n),Wh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[tc]||(e[tc]=!0,Wh("selectionchange",!1,e))}}function Oy(n,e,t,i){switch(yy(e)){case 1:var r=qE;break;case 4:r=jE;break;default:r=c0}t=r.bind(null,e,t,n),r=void 0,!lp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Xh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=lo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}oy(function(){var u=s,c=o0(t),f=[];e:{var h=Uy.get(n);if(h!==void 0){var p=h0,m=n;switch(n){case"keypress":if(Xc(t)===0)break e;case"keydown":case"keyup":p=uT;break;case"focusin":m="focus",p=kh;break;case"focusout":m="blur",p=kh;break;case"beforeblur":case"afterblur":p=kh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=s_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ZE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=hT;break;case Ly:case Dy:case Ny:p=eT;break;case Iy:p=pT;break;case"scroll":p=$E;break;case"wheel":p=gT;break;case"copy":case"cut":case"paste":p=nT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=a_}var v=(e&4)!==0,_=!v&&n==="scroll",d=v?h!==null?h+"Capture":null:h;v=[];for(var g=u,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=Ql(g,d),S!=null&&v.push(ou(g,S,x)))),_)break;g=g.return}0<v.length&&(h=new p(h,m,null,t,c),f.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==op&&(m=t.relatedTarget||t.fromElement)&&(lo(m)||m[jr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=u,m=m?lo(m):null,m!==null&&(_=Lo(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(v=s_,S="onMouseLeave",d="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(v=a_,S="onPointerLeave",d="onPointerEnter",g="pointer"),_=p==null?h:ca(p),x=m==null?h:ca(m),h=new v(S,g+"leave",p,t,c),h.target=_,h.relatedTarget=x,S=null,lo(c)===u&&(v=new v(d,g+"enter",m,t,c),v.target=x,v.relatedTarget=_,S=v),_=S,p&&m)t:{for(v=p,d=m,g=0,x=v;x;x=Go(x))g++;for(x=0,S=d;S;S=Go(S))x++;for(;0<g-x;)v=Go(v),g--;for(;0<x-g;)d=Go(d),x--;for(;g--;){if(v===d||d!==null&&v===d.alternate)break t;v=Go(v),d=Go(d)}v=null}else v=null;p!==null&&v_(f,h,p,v,!1),m!==null&&_!==null&&v_(f,_,m,v,!0)}}e:{if(h=u?ca(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=ET;else if(c_(h))if(Ay)T=CT;else{T=wT;var E=TT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=AT);if(T&&(T=T(n,u))){wy(f,T,t,c);break e}E&&E(n,h,u),n==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&tp(h,"number",h.value)}switch(E=u?ca(u):window,n){case"focusin":(c_(E)||E.contentEditable==="true")&&(la=E,dp=u,zl=null);break;case"focusout":zl=dp=la=null;break;case"mousedown":pp=!0;break;case"contextmenu":case"mouseup":case"dragend":pp=!1,m_(f,t,c);break;case"selectionchange":if(PT)break;case"keydown":case"keyup":m_(f,t,c)}var A;if(p0)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else aa?Ey(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(My&&t.locale!=="ko"&&(aa||y!=="onCompositionStart"?y==="onCompositionEnd"&&aa&&(A=Sy()):(ys=c,f0="value"in ys?ys.value:ys.textContent,aa=!0)),E=gf(u,y),0<E.length&&(y=new o_(y,n,null,t,c),f.push({event:y,listeners:E}),A?y.data=A:(A=Ty(t),A!==null&&(y.data=A)))),(A=vT?xT(n,t):yT(n,t))&&(u=gf(u,"onBeforeInput"),0<u.length&&(c=new o_("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=A))}Fy(f,e)})}function ou(n,e,t){return{instance:n,listener:e,currentTarget:t}}function gf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ql(n,t),s!=null&&i.unshift(ou(n,s,r)),s=Ql(n,e),s!=null&&i.push(ou(n,s,r))),n=n.return}return i}function Go(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function v_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ql(t,s),l!=null&&o.unshift(ou(t,l,a))):r||(l=Ql(t,s),l!=null&&o.push(ou(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var IT=/\r\n?/g,UT=/\u0000|\uFFFD/g;function x_(n){return(typeof n=="string"?n:""+n).replace(IT,`
`).replace(UT,"")}function nc(n,e,t){if(e=x_(e),x_(n)!==e&&t)throw Error(he(425))}function _f(){}var mp=null,gp=null;function _p(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vp=typeof setTimeout=="function"?setTimeout:void 0,FT=typeof clearTimeout=="function"?clearTimeout:void 0,y_=typeof Promise=="function"?Promise:void 0,OT=typeof queueMicrotask=="function"?queueMicrotask:typeof y_<"u"?function(n){return y_.resolve(null).then(n).catch(kT)}:vp;function kT(n){setTimeout(function(){throw n})}function Yh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),nu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);nu(e)}function bs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function S_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Za=Math.random().toString(36).slice(2),vr="__reactFiber$"+Za,au="__reactProps$"+Za,jr="__reactContainer$"+Za,xp="__reactEvents$"+Za,zT="__reactListeners$"+Za,BT="__reactHandles$"+Za;function lo(n){var e=n[vr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[jr]||t[vr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=S_(n);n!==null;){if(t=n[vr])return t;n=S_(n)}return e}n=t,t=n.parentNode}return null}function Du(n){return n=n[vr]||n[jr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ca(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(he(33))}function th(n){return n[au]||null}var yp=[],fa=-1;function Hs(n){return{current:n}}function Ut(n){0>fa||(n.current=yp[fa],yp[fa]=null,fa--)}function Nt(n,e){fa++,yp[fa]=n.current,n.current=e}var Os={},Vn=Hs(Os),ei=Hs(!1),So=Os;function Na(n,e){var t=n.type.contextTypes;if(!t)return Os;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ti(n){return n=n.childContextTypes,n!=null}function vf(){Ut(ei),Ut(Vn)}function M_(n,e,t){if(Vn.current!==Os)throw Error(he(168));Nt(Vn,e),Nt(ei,t)}function ky(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,TE(n)||"Unknown",r));return $t({},t,i)}function xf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Os,So=Vn.current,Nt(Vn,n),Nt(ei,ei.current),!0}function E_(n,e,t){var i=n.stateNode;if(!i)throw Error(he(169));t?(n=ky(n,e,So),i.__reactInternalMemoizedMergedChildContext=n,Ut(ei),Ut(Vn),Nt(Vn,n)):Ut(ei),Nt(ei,t)}var kr=null,nh=!1,qh=!1;function zy(n){kr===null?kr=[n]:kr.push(n)}function VT(n){nh=!0,zy(n)}function Ws(){if(!qh&&kr!==null){qh=!0;var n=0,e=At;try{var t=kr;for(At=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}kr=null,nh=!1}catch(r){throw kr!==null&&(kr=kr.slice(n+1)),cy(a0,Ws),r}finally{At=e,qh=!1}}return null}var ha=[],da=0,yf=null,Sf=0,Ii=[],Ui=0,Mo=null,Vr=1,Gr="";function no(n,e){ha[da++]=Sf,ha[da++]=yf,yf=n,Sf=e}function By(n,e,t){Ii[Ui++]=Vr,Ii[Ui++]=Gr,Ii[Ui++]=Mo,Mo=n;var i=Vr;n=Gr;var r=32-er(i)-1;i&=~(1<<r),t+=1;var s=32-er(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vr=1<<32-er(e)+r|t<<r|i,Gr=s+n}else Vr=1<<s|t<<r|i,Gr=n}function g0(n){n.return!==null&&(no(n,1),By(n,1,0))}function _0(n){for(;n===yf;)yf=ha[--da],ha[da]=null,Sf=ha[--da],ha[da]=null;for(;n===Mo;)Mo=Ii[--Ui],Ii[Ui]=null,Gr=Ii[--Ui],Ii[Ui]=null,Vr=Ii[--Ui],Ii[Ui]=null}var Mi=null,xi=null,zt=!1,Ji=null;function Vy(n,e){var t=ki(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function T_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Mi=n,xi=bs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Mi=n,xi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Mo!==null?{id:Vr,overflow:Gr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ki(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Mi=n,xi=null,!0):!1;default:return!1}}function Sp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mp(n){if(zt){var e=xi;if(e){var t=e;if(!T_(n,e)){if(Sp(n))throw Error(he(418));e=bs(t.nextSibling);var i=Mi;e&&T_(n,e)?Vy(i,t):(n.flags=n.flags&-4097|2,zt=!1,Mi=n)}}else{if(Sp(n))throw Error(he(418));n.flags=n.flags&-4097|2,zt=!1,Mi=n}}}function w_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Mi=n}function ic(n){if(n!==Mi)return!1;if(!zt)return w_(n),zt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!_p(n.type,n.memoizedProps)),e&&(e=xi)){if(Sp(n))throw Gy(),Error(he(418));for(;e;)Vy(n,e),e=bs(e.nextSibling)}if(w_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(he(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){xi=bs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}xi=null}}else xi=Mi?bs(n.stateNode.nextSibling):null;return!0}function Gy(){for(var n=xi;n;)n=bs(n.nextSibling)}function Ia(){xi=Mi=null,zt=!1}function v0(n){Ji===null?Ji=[n]:Ji.push(n)}var GT=ts.ReactCurrentBatchConfig;function ml(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(he(309));var i=t.stateNode}if(!i)throw Error(he(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(he(284));if(!t._owner)throw Error(he(290,n))}return n}function rc(n,e){throw n=Object.prototype.toString.call(e),Error(he(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function A_(n){var e=n._init;return e(n._payload)}function Hy(n){function e(d,g){if(n){var x=d.deletions;x===null?(d.deletions=[g],d.flags|=16):x.push(g)}}function t(d,g){if(!n)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=Ns(d,g),d.index=0,d.sibling=null,d}function s(d,g,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<g?(d.flags|=2,g):x):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,g,x,S){return g===null||g.tag!==6?(g=ed(x,d.mode,S),g.return=d,g):(g=r(g,x),g.return=d,g)}function l(d,g,x,S){var T=x.type;return T===oa?c(d,g,x.props.children,S,x.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ms&&A_(T)===g.type)?(S=r(g,x.props),S.ref=ml(d,g,x),S.return=d,S):(S=Jc(x.type,x.key,x.props,null,d.mode,S),S.ref=ml(d,g,x),S.return=d,S)}function u(d,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=td(x,d.mode,S),g.return=d,g):(g=r(g,x.children||[]),g.return=d,g)}function c(d,g,x,S,T){return g===null||g.tag!==7?(g=go(x,d.mode,S,T),g.return=d,g):(g=r(g,x),g.return=d,g)}function f(d,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ed(""+g,d.mode,x),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qu:return x=Jc(g.type,g.key,g.props,null,d.mode,x),x.ref=ml(d,null,g),x.return=d,x;case sa:return g=td(g,d.mode,x),g.return=d,g;case ms:var S=g._init;return f(d,S(g._payload),x)}if(Cl(g)||cl(g))return g=go(g,d.mode,x,null),g.return=d,g;rc(d,g)}return null}function h(d,g,x,S){var T=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(d,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qu:return x.key===T?l(d,g,x,S):null;case sa:return x.key===T?u(d,g,x,S):null;case ms:return T=x._init,h(d,g,T(x._payload),S)}if(Cl(x)||cl(x))return T!==null?null:c(d,g,x,S,null);rc(d,x)}return null}function p(d,g,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,a(g,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qu:return d=d.get(S.key===null?x:S.key)||null,l(g,d,S,T);case sa:return d=d.get(S.key===null?x:S.key)||null,u(g,d,S,T);case ms:var E=S._init;return p(d,g,x,E(S._payload),T)}if(Cl(S)||cl(S))return d=d.get(x)||null,c(g,d,S,T,null);rc(g,S)}return null}function m(d,g,x,S){for(var T=null,E=null,A=g,y=g=0,w=null;A!==null&&y<x.length;y++){A.index>y?(w=A,A=null):w=A.sibling;var b=h(d,A,x[y],S);if(b===null){A===null&&(A=w);break}n&&A&&b.alternate===null&&e(d,A),g=s(b,g,y),E===null?T=b:E.sibling=b,E=b,A=w}if(y===x.length)return t(d,A),zt&&no(d,y),T;if(A===null){for(;y<x.length;y++)A=f(d,x[y],S),A!==null&&(g=s(A,g,y),E===null?T=A:E.sibling=A,E=A);return zt&&no(d,y),T}for(A=i(d,A);y<x.length;y++)w=p(A,d,y,x[y],S),w!==null&&(n&&w.alternate!==null&&A.delete(w.key===null?y:w.key),g=s(w,g,y),E===null?T=w:E.sibling=w,E=w);return n&&A.forEach(function(P){return e(d,P)}),zt&&no(d,y),T}function v(d,g,x,S){var T=cl(x);if(typeof T!="function")throw Error(he(150));if(x=T.call(x),x==null)throw Error(he(151));for(var E=T=null,A=g,y=g=0,w=null,b=x.next();A!==null&&!b.done;y++,b=x.next()){A.index>y?(w=A,A=null):w=A.sibling;var P=h(d,A,b.value,S);if(P===null){A===null&&(A=w);break}n&&A&&P.alternate===null&&e(d,A),g=s(P,g,y),E===null?T=P:E.sibling=P,E=P,A=w}if(b.done)return t(d,A),zt&&no(d,y),T;if(A===null){for(;!b.done;y++,b=x.next())b=f(d,b.value,S),b!==null&&(g=s(b,g,y),E===null?T=b:E.sibling=b,E=b);return zt&&no(d,y),T}for(A=i(d,A);!b.done;y++,b=x.next())b=p(A,d,y,b.value,S),b!==null&&(n&&b.alternate!==null&&A.delete(b.key===null?y:b.key),g=s(b,g,y),E===null?T=b:E.sibling=b,E=b);return n&&A.forEach(function(I){return e(d,I)}),zt&&no(d,y),T}function _(d,g,x,S){if(typeof x=="object"&&x!==null&&x.type===oa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case qu:e:{for(var T=x.key,E=g;E!==null;){if(E.key===T){if(T=x.type,T===oa){if(E.tag===7){t(d,E.sibling),g=r(E,x.props.children),g.return=d,d=g;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ms&&A_(T)===E.type){t(d,E.sibling),g=r(E,x.props),g.ref=ml(d,E,x),g.return=d,d=g;break e}t(d,E);break}else e(d,E);E=E.sibling}x.type===oa?(g=go(x.props.children,d.mode,S,x.key),g.return=d,d=g):(S=Jc(x.type,x.key,x.props,null,d.mode,S),S.ref=ml(d,g,x),S.return=d,d=S)}return o(d);case sa:e:{for(E=x.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(d,g.sibling),g=r(g,x.children||[]),g.return=d,d=g;break e}else{t(d,g);break}else e(d,g);g=g.sibling}g=td(x,d.mode,S),g.return=d,d=g}return o(d);case ms:return E=x._init,_(d,g,E(x._payload),S)}if(Cl(x))return m(d,g,x,S);if(cl(x))return v(d,g,x,S);rc(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(d,g.sibling),g=r(g,x),g.return=d,d=g):(t(d,g),g=ed(x,d.mode,S),g.return=d,d=g),o(d)):t(d,g)}return _}var Ua=Hy(!0),Wy=Hy(!1),Mf=Hs(null),Ef=null,pa=null,x0=null;function y0(){x0=pa=Ef=null}function S0(n){var e=Mf.current;Ut(Mf),n._currentValue=e}function Ep(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ta(n,e){Ef=n,x0=pa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function Hi(n){var e=n._currentValue;if(x0!==n)if(n={context:n,memoizedValue:e,next:null},pa===null){if(Ef===null)throw Error(he(308));pa=n,Ef.dependencies={lanes:0,firstContext:n}}else pa=pa.next=n;return e}var uo=null;function M0(n){uo===null?uo=[n]:uo.push(n)}function Xy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,M0(e)):(t.next=r.next,r.next=t),e.interleaved=t,$r(n,i)}function $r(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var gs=!1;function E0(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ps(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,_t&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$r(n,t)}return r=i.interleaved,r===null?(e.next=e,M0(i)):(e.next=r.next,r.next=e),i.interleaved=e,$r(n,t)}function Yc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,l0(n,t)}}function C_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Tf(n,e,t,i){var r=n.updateQueue;gs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,v=a;switch(h=e,p=t,v.tag){case 1:if(m=v.payload,typeof m=="function"){f=m.call(p,f,h);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,h=typeof m=="function"?m.call(p,f,h):m,h==null)break e;f=$t({},f,h);break e;case 2:gs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);To|=o,n.lanes=o,n.memoizedState=f}}function R_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var Nu={},Tr=Hs(Nu),lu=Hs(Nu),uu=Hs(Nu);function co(n){if(n===Nu)throw Error(he(174));return n}function T0(n,e){switch(Nt(uu,e),Nt(lu,n),Nt(Tr,Nu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ip(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ip(e,n)}Ut(Tr),Nt(Tr,e)}function Fa(){Ut(Tr),Ut(lu),Ut(uu)}function qy(n){co(uu.current);var e=co(Tr.current),t=ip(e,n.type);e!==t&&(Nt(lu,n),Nt(Tr,t))}function w0(n){lu.current===n&&(Ut(Tr),Ut(lu))}var Wt=Hs(0);function wf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jh=[];function A0(){for(var n=0;n<jh.length;n++)jh[n]._workInProgressVersionPrimary=null;jh.length=0}var qc=ts.ReactCurrentDispatcher,$h=ts.ReactCurrentBatchConfig,Eo=0,jt=null,ln=null,yn=null,Af=!1,Bl=!1,cu=0,HT=0;function Pn(){throw Error(he(321))}function C0(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!nr(n[t],e[t]))return!1;return!0}function R0(n,e,t,i,r,s){if(Eo=s,jt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qc.current=n===null||n.memoizedState===null?qT:jT,n=t(i,r),Bl){s=0;do{if(Bl=!1,cu=0,25<=s)throw Error(he(301));s+=1,yn=ln=null,e.updateQueue=null,qc.current=$T,n=t(i,r)}while(Bl)}if(qc.current=Cf,e=ln!==null&&ln.next!==null,Eo=0,yn=ln=jt=null,Af=!1,e)throw Error(he(300));return n}function b0(){var n=cu!==0;return cu=0,n}function pr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?jt.memoizedState=yn=n:yn=yn.next=n,yn}function Wi(){if(ln===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var e=yn===null?jt.memoizedState:yn.next;if(e!==null)yn=e,ln=n;else{if(n===null)throw Error(he(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},yn===null?jt.memoizedState=yn=n:yn=yn.next=n}return yn}function fu(n,e){return typeof e=="function"?e(n):e}function Kh(n){var e=Wi(),t=e.queue;if(t===null)throw Error(he(311));t.lastRenderedReducer=n;var i=ln,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Eo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,jt.lanes|=c,To|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,nr(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,jt.lanes|=s,To|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Zh(n){var e=Wi(),t=e.queue;if(t===null)throw Error(he(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);nr(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function jy(){}function $y(n,e){var t=jt,i=Wi(),r=e(),s=!nr(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,P0(Jy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||yn!==null&&yn.memoizedState.tag&1){if(t.flags|=2048,hu(9,Zy.bind(null,t,i,r,e),void 0,null),Sn===null)throw Error(he(349));Eo&30||Ky(t,e,r)}return r}function Ky(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Zy(n,e,t,i){e.value=t,e.getSnapshot=i,Qy(e)&&eS(n)}function Jy(n,e,t){return t(function(){Qy(e)&&eS(n)})}function Qy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!nr(n,t)}catch{return!0}}function eS(n){var e=$r(n,1);e!==null&&tr(e,n,1,-1)}function b_(n){var e=pr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fu,lastRenderedState:n},e.queue=n,n=n.dispatch=YT.bind(null,jt,n),[e.memoizedState,n]}function hu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function tS(){return Wi().memoizedState}function jc(n,e,t,i){var r=pr();jt.flags|=n,r.memoizedState=hu(1|e,t,void 0,i===void 0?null:i)}function ih(n,e,t,i){var r=Wi();i=i===void 0?null:i;var s=void 0;if(ln!==null){var o=ln.memoizedState;if(s=o.destroy,i!==null&&C0(i,o.deps)){r.memoizedState=hu(e,t,s,i);return}}jt.flags|=n,r.memoizedState=hu(1|e,t,s,i)}function P_(n,e){return jc(8390656,8,n,e)}function P0(n,e){return ih(2048,8,n,e)}function nS(n,e){return ih(4,2,n,e)}function iS(n,e){return ih(4,4,n,e)}function rS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function sS(n,e,t){return t=t!=null?t.concat([n]):null,ih(4,4,rS.bind(null,e,n),t)}function L0(){}function oS(n,e){var t=Wi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&C0(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function aS(n,e){var t=Wi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&C0(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function lS(n,e,t){return Eo&21?(nr(t,e)||(t=dy(),jt.lanes|=t,To|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function WT(n,e){var t=At;At=t!==0&&4>t?t:4,n(!0);var i=$h.transition;$h.transition={};try{n(!1),e()}finally{At=t,$h.transition=i}}function uS(){return Wi().memoizedState}function XT(n,e,t){var i=Ds(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},cS(n))fS(e,t);else if(t=Xy(n,e,t,i),t!==null){var r=Yn();tr(t,n,i,r),hS(t,e,i)}}function YT(n,e,t){var i=Ds(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(cS(n))fS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,nr(a,o)){var l=e.interleaved;l===null?(r.next=r,M0(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Xy(n,e,r,i),t!==null&&(r=Yn(),tr(t,n,i,r),hS(t,e,i))}}function cS(n){var e=n.alternate;return n===jt||e!==null&&e===jt}function fS(n,e){Bl=Af=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function hS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,l0(n,t)}}var Cf={readContext:Hi,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},qT={readContext:Hi,useCallback:function(n,e){return pr().memoizedState=[n,e===void 0?null:e],n},useContext:Hi,useEffect:P_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,jc(4194308,4,rS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return jc(4194308,4,n,e)},useInsertionEffect:function(n,e){return jc(4,2,n,e)},useMemo:function(n,e){var t=pr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=pr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=XT.bind(null,jt,n),[i.memoizedState,n]},useRef:function(n){var e=pr();return n={current:n},e.memoizedState=n},useState:b_,useDebugValue:L0,useDeferredValue:function(n){return pr().memoizedState=n},useTransition:function(){var n=b_(!1),e=n[0];return n=WT.bind(null,n[1]),pr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=jt,r=pr();if(zt){if(t===void 0)throw Error(he(407));t=t()}else{if(t=e(),Sn===null)throw Error(he(349));Eo&30||Ky(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,P_(Jy.bind(null,i,s,n),[n]),i.flags|=2048,hu(9,Zy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=pr(),e=Sn.identifierPrefix;if(zt){var t=Gr,i=Vr;t=(i&~(1<<32-er(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=cu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=HT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},jT={readContext:Hi,useCallback:oS,useContext:Hi,useEffect:P0,useImperativeHandle:sS,useInsertionEffect:nS,useLayoutEffect:iS,useMemo:aS,useReducer:Kh,useRef:tS,useState:function(){return Kh(fu)},useDebugValue:L0,useDeferredValue:function(n){var e=Wi();return lS(e,ln.memoizedState,n)},useTransition:function(){var n=Kh(fu)[0],e=Wi().memoizedState;return[n,e]},useMutableSource:jy,useSyncExternalStore:$y,useId:uS,unstable_isNewReconciler:!1},$T={readContext:Hi,useCallback:oS,useContext:Hi,useEffect:P0,useImperativeHandle:sS,useInsertionEffect:nS,useLayoutEffect:iS,useMemo:aS,useReducer:Zh,useRef:tS,useState:function(){return Zh(fu)},useDebugValue:L0,useDeferredValue:function(n){var e=Wi();return ln===null?e.memoizedState=n:lS(e,ln.memoizedState,n)},useTransition:function(){var n=Zh(fu)[0],e=Wi().memoizedState;return[n,e]},useMutableSource:jy,useSyncExternalStore:$y,useId:uS,unstable_isNewReconciler:!1};function Ki(n,e){if(n&&n.defaultProps){e=$t({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Tp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:$t({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var rh={isMounted:function(n){return(n=n._reactInternals)?Lo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Yn(),r=Ds(n),s=Wr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ps(n,s,r),e!==null&&(tr(e,n,r,i),Yc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Yn(),r=Ds(n),s=Wr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ps(n,s,r),e!==null&&(tr(e,n,r,i),Yc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Yn(),i=Ds(n),r=Wr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ps(n,r,i),e!==null&&(tr(e,n,i,t),Yc(e,n,i))}};function L_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ru(t,i)||!ru(r,s):!0}function dS(n,e,t){var i=!1,r=Os,s=e.contextType;return typeof s=="object"&&s!==null?s=Hi(s):(r=ti(e)?So:Vn.current,i=e.contextTypes,s=(i=i!=null)?Na(n,r):Os),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function D_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&rh.enqueueReplaceState(e,e.state,null)}function wp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},E0(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hi(s):(s=ti(e)?So:Vn.current,r.context=Na(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&rh.enqueueReplaceState(r,r.state,null),Tf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Oa(n,e){try{var t="",i=e;do t+=EE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Jh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ap(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var KT=typeof WeakMap=="function"?WeakMap:Map;function pS(n,e,t){t=Wr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){bf||(bf=!0,Fp=i),Ap(n,e)},t}function mS(n,e,t){t=Wr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ap(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ap(n,e),typeof i!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function N_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new KT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=cw.bind(null,n,e,t),e.then(n,n))}function I_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function U_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Wr(-1,1),e.tag=2,Ps(t,e,1))),t.lanes|=1),n)}var ZT=ts.ReactCurrentOwner,Qn=!1;function Xn(n,e,t,i){e.child=n===null?Wy(e,null,t,i):Ua(e,n.child,t,i)}function F_(n,e,t,i,r){t=t.render;var s=e.ref;return Ta(e,r),i=R0(n,e,t,i,s,r),t=b0(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Kr(n,e,r)):(zt&&t&&g0(e),e.flags|=1,Xn(n,e,i,r),e.child)}function O_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!z0(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,gS(n,e,s,i,r)):(n=Jc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ru,t(o,i)&&n.ref===e.ref)return Kr(n,e,r)}return e.flags|=1,n=Ns(s,i),n.ref=e.ref,n.return=e,e.child=n}function gS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ru(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,Kr(n,e,r)}return Cp(n,e,t,i,r)}function _S(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(ga,mi),mi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Nt(ga,mi),mi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Nt(ga,mi),mi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Nt(ga,mi),mi|=i;return Xn(n,e,r,t),e.child}function vS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Cp(n,e,t,i,r){var s=ti(t)?So:Vn.current;return s=Na(e,s),Ta(e,r),t=R0(n,e,t,i,s,r),i=b0(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Kr(n,e,r)):(zt&&i&&g0(e),e.flags|=1,Xn(n,e,t,r),e.child)}function k_(n,e,t,i,r){if(ti(t)){var s=!0;xf(e)}else s=!1;if(Ta(e,r),e.stateNode===null)$c(n,e),dS(e,t,i),wp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Hi(u):(u=ti(t)?So:Vn.current,u=Na(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&D_(e,o,i,u),gs=!1;var h=e.memoizedState;o.state=h,Tf(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ei.current||gs?(typeof c=="function"&&(Tp(e,t,c,i),l=e.memoizedState),(a=gs||L_(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Yy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ki(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Hi(l):(l=ti(t)?So:Vn.current,l=Na(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&D_(e,o,i,l),gs=!1,h=e.memoizedState,o.state=h,Tf(e,i,o,r);var m=e.memoizedState;a!==f||h!==m||ei.current||gs?(typeof p=="function"&&(Tp(e,t,p,i),m=e.memoizedState),(u=gs||L_(e,t,u,i,h,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Rp(n,e,t,i,s,r)}function Rp(n,e,t,i,r,s){vS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&E_(e,t,!1),Kr(n,e,s);i=e.stateNode,ZT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ua(e,n.child,null,s),e.child=Ua(e,null,a,s)):Xn(n,e,a,s),e.memoizedState=i.state,r&&E_(e,t,!0),e.child}function xS(n){var e=n.stateNode;e.pendingContext?M_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&M_(n,e.context,!1),T0(n,e.containerInfo)}function z_(n,e,t,i,r){return Ia(),v0(r),e.flags|=256,Xn(n,e,t,i),e.child}var bp={dehydrated:null,treeContext:null,retryLane:0};function Pp(n){return{baseLanes:n,cachePool:null,transitions:null}}function yS(n,e,t){var i=e.pendingProps,r=Wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Nt(Wt,r&1),n===null)return Mp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ah(o,i,0,null),n=go(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Pp(t),e.memoizedState=bp,n):D0(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return JT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ns(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ns(a,s):(s=go(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Pp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=bp,i}return s=n.child,n=s.sibling,i=Ns(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function D0(n,e){return e=ah({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function sc(n,e,t,i){return i!==null&&v0(i),Ua(e,n.child,null,t),n=D0(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function JT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Jh(Error(he(422))),sc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ah({mode:"visible",children:i.children},r,0,null),s=go(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ua(e,n.child,null,o),e.child.memoizedState=Pp(o),e.memoizedState=bp,s);if(!(e.mode&1))return sc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(he(419)),i=Jh(s,i,void 0),sc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=Sn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$r(n,r),tr(i,n,r,-1))}return k0(),i=Jh(Error(he(421))),sc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=fw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,xi=bs(r.nextSibling),Mi=e,zt=!0,Ji=null,n!==null&&(Ii[Ui++]=Vr,Ii[Ui++]=Gr,Ii[Ui++]=Mo,Vr=n.id,Gr=n.overflow,Mo=e),e=D0(e,i.children),e.flags|=4096,e)}function B_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ep(n.return,e,t)}function Qh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function SS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xn(n,e,i.children,t),i=Wt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&B_(n,t,e);else if(n.tag===19)B_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Nt(Wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&wf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Qh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&wf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Qh(e,!0,t,null,s);break;case"together":Qh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $c(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Kr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),To|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(he(153));if(e.child!==null){for(n=e.child,t=Ns(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ns(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function QT(n,e,t){switch(e.tag){case 3:xS(e),Ia();break;case 5:qy(e);break;case 1:ti(e.type)&&xf(e);break;case 4:T0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Nt(Mf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Nt(Wt,Wt.current&1),e.flags|=128,null):t&e.child.childLanes?yS(n,e,t):(Nt(Wt,Wt.current&1),n=Kr(n,e,t),n!==null?n.sibling:null);Nt(Wt,Wt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return SS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Nt(Wt,Wt.current),i)break;return null;case 22:case 23:return e.lanes=0,_S(n,e,t)}return Kr(n,e,t)}var MS,Lp,ES,TS;MS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Lp=function(){};ES=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,co(Tr.current);var s=null;switch(t){case"input":r=Qd(n,r),i=Qd(n,i),s=[];break;case"select":r=$t({},r,{value:void 0}),i=$t({},i,{value:void 0}),s=[];break;case"textarea":r=np(n,r),i=np(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=_f)}rp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&It("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};TS=function(n,e,t,i){t!==i&&(e.flags|=4)};function gl(n,e){if(!zt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Ln(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function ew(n,e,t){var i=e.pendingProps;switch(_0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(e),null;case 1:return ti(e.type)&&vf(),Ln(e),null;case 3:return i=e.stateNode,Fa(),Ut(ei),Ut(Vn),A0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ic(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ji!==null&&(zp(Ji),Ji=null))),Lp(n,e),Ln(e),null;case 5:w0(e);var r=co(uu.current);if(t=e.type,n!==null&&e.stateNode!=null)ES(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return Ln(e),null}if(n=co(Tr.current),ic(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[vr]=e,i[au]=s,n=(e.mode&1)!==0,t){case"dialog":It("cancel",i),It("close",i);break;case"iframe":case"object":case"embed":It("load",i);break;case"video":case"audio":for(r=0;r<bl.length;r++)It(bl[r],i);break;case"source":It("error",i);break;case"img":case"image":case"link":It("error",i),It("load",i);break;case"details":It("toggle",i);break;case"input":$g(i,s),It("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},It("invalid",i);break;case"textarea":Zg(i,s),It("invalid",i)}rp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&nc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nc(i.textContent,a,n),r=["children",""+a]):Zl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&It("scroll",i)}switch(t){case"input":ju(i),Kg(i,s,!0);break;case"textarea":ju(i),Jg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_f)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Jx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[vr]=e,n[au]=i,MS(n,e,!1,!1),e.stateNode=n;e:{switch(o=sp(t,i),t){case"dialog":It("cancel",n),It("close",n),r=i;break;case"iframe":case"object":case"embed":It("load",n),r=i;break;case"video":case"audio":for(r=0;r<bl.length;r++)It(bl[r],n);r=i;break;case"source":It("error",n),r=i;break;case"img":case"image":case"link":It("error",n),It("load",n),r=i;break;case"details":It("toggle",n),r=i;break;case"input":$g(n,i),r=Qd(n,i),It("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=$t({},i,{value:void 0}),It("invalid",n);break;case"textarea":Zg(n,i),r=np(n,i),It("invalid",n);break;default:r=i}rp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ty(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Jl(n,l):typeof l=="number"&&Jl(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&It("scroll",n):l!=null&&n0(n,s,l,o))}switch(t){case"input":ju(n),Kg(n,i,!1);break;case"textarea":ju(n),Jg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Fs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ya(n,!!i.multiple,s,!1):i.defaultValue!=null&&ya(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=_f)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ln(e),null;case 6:if(n&&e.stateNode!=null)TS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(t=co(uu.current),co(Tr.current),ic(e)){if(i=e.stateNode,t=e.memoizedProps,i[vr]=e,(s=i.nodeValue!==t)&&(n=Mi,n!==null))switch(n.tag){case 3:nc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&nc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[vr]=e,e.stateNode=i}return Ln(e),null;case 13:if(Ut(Wt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&xi!==null&&e.mode&1&&!(e.flags&128))Gy(),Ia(),e.flags|=98560,s=!1;else if(s=ic(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(he(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(he(317));s[vr]=e}else Ia(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ln(e),s=!1}else Ji!==null&&(zp(Ji),Ji=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Wt.current&1?un===0&&(un=3):k0())),e.updateQueue!==null&&(e.flags|=4),Ln(e),null);case 4:return Fa(),Lp(n,e),n===null&&su(e.stateNode.containerInfo),Ln(e),null;case 10:return S0(e.type._context),Ln(e),null;case 17:return ti(e.type)&&vf(),Ln(e),null;case 19:if(Ut(Wt),s=e.memoizedState,s===null)return Ln(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)gl(s,!1);else{if(un!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=wf(n),o!==null){for(e.flags|=128,gl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Nt(Wt,Wt.current&1|2),e.child}n=n.sibling}s.tail!==null&&tn()>ka&&(e.flags|=128,i=!0,gl(s,!1),e.lanes=4194304)}else{if(!i)if(n=wf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),gl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!zt)return Ln(e),null}else 2*tn()-s.renderingStartTime>ka&&t!==1073741824&&(e.flags|=128,i=!0,gl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tn(),e.sibling=null,t=Wt.current,Nt(Wt,i?t&1|2:t&1),e):(Ln(e),null);case 22:case 23:return O0(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mi&1073741824&&(Ln(e),e.subtreeFlags&6&&(e.flags|=8192)):Ln(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function tw(n,e){switch(_0(e),e.tag){case 1:return ti(e.type)&&vf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Fa(),Ut(ei),Ut(Vn),A0(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return w0(e),null;case 13:if(Ut(Wt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(he(340));Ia()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ut(Wt),null;case 4:return Fa(),null;case 10:return S0(e.type._context),null;case 22:case 23:return O0(),null;case 24:return null;default:return null}}var oc=!1,Fn=!1,nw=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function ma(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Kt(n,e,i)}else t.current=null}function Dp(n,e,t){try{t()}catch(i){Kt(n,e,i)}}var V_=!1;function iw(n,e){if(mp=pf,n=by(),m0(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(gp={focusedElem:n,selectionRange:t},pf=!1,Ne=e;Ne!==null;)if(e=Ne,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ne=n;else for(;Ne!==null;){e=Ne;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,_=m.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ki(e.type,v),_);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(S){Kt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ne=n;break}Ne=e.return}return m=V_,V_=!1,m}function Vl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Dp(e,t,s)}r=r.next}while(r!==i)}}function sh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Np(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function wS(n){var e=n.alternate;e!==null&&(n.alternate=null,wS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[vr],delete e[au],delete e[xp],delete e[zT],delete e[BT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function AS(n){return n.tag===5||n.tag===3||n.tag===4}function G_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||AS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ip(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=_f));else if(i!==4&&(n=n.child,n!==null))for(Ip(n,e,t),n=n.sibling;n!==null;)Ip(n,e,t),n=n.sibling}function Up(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Up(n,e,t),n=n.sibling;n!==null;)Up(n,e,t),n=n.sibling}var Tn=null,Zi=!1;function as(n,e,t){for(t=t.child;t!==null;)CS(n,e,t),t=t.sibling}function CS(n,e,t){if(Er&&typeof Er.onCommitFiberUnmount=="function")try{Er.onCommitFiberUnmount(Zf,t)}catch{}switch(t.tag){case 5:Fn||ma(t,e);case 6:var i=Tn,r=Zi;Tn=null,as(n,e,t),Tn=i,Zi=r,Tn!==null&&(Zi?(n=Tn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Tn.removeChild(t.stateNode));break;case 18:Tn!==null&&(Zi?(n=Tn,t=t.stateNode,n.nodeType===8?Yh(n.parentNode,t):n.nodeType===1&&Yh(n,t),nu(n)):Yh(Tn,t.stateNode));break;case 4:i=Tn,r=Zi,Tn=t.stateNode.containerInfo,Zi=!0,as(n,e,t),Tn=i,Zi=r;break;case 0:case 11:case 14:case 15:if(!Fn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dp(t,e,o),r=r.next}while(r!==i)}as(n,e,t);break;case 1:if(!Fn&&(ma(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Kt(t,e,a)}as(n,e,t);break;case 21:as(n,e,t);break;case 22:t.mode&1?(Fn=(i=Fn)||t.memoizedState!==null,as(n,e,t),Fn=i):as(n,e,t);break;default:as(n,e,t)}}function H_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new nw),e.forEach(function(i){var r=hw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Yi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tn=a.stateNode,Zi=!1;break e;case 3:Tn=a.stateNode.containerInfo,Zi=!0;break e;case 4:Tn=a.stateNode.containerInfo,Zi=!0;break e}a=a.return}if(Tn===null)throw Error(he(160));CS(s,o,r),Tn=null,Zi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Kt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)RS(e,n),e=e.sibling}function RS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Yi(e,n),fr(n),i&4){try{Vl(3,n,n.return),sh(3,n)}catch(v){Kt(n,n.return,v)}try{Vl(5,n,n.return)}catch(v){Kt(n,n.return,v)}}break;case 1:Yi(e,n),fr(n),i&512&&t!==null&&ma(t,t.return);break;case 5:if(Yi(e,n),fr(n),i&512&&t!==null&&ma(t,t.return),n.flags&32){var r=n.stateNode;try{Jl(r,"")}catch(v){Kt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Kx(r,s),sp(a,o);var u=sp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?ty(r,f):c==="dangerouslySetInnerHTML"?Qx(r,f):c==="children"?Jl(r,f):n0(r,c,f,u)}switch(a){case"input":ep(r,s);break;case"textarea":Zx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ya(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ya(r,!!s.multiple,s.defaultValue,!0):ya(r,!!s.multiple,s.multiple?[]:"",!1))}r[au]=s}catch(v){Kt(n,n.return,v)}}break;case 6:if(Yi(e,n),fr(n),i&4){if(n.stateNode===null)throw Error(he(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Kt(n,n.return,v)}}break;case 3:if(Yi(e,n),fr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{nu(e.containerInfo)}catch(v){Kt(n,n.return,v)}break;case 4:Yi(e,n),fr(n);break;case 13:Yi(e,n),fr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(U0=tn())),i&4&&H_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Fn=(u=Fn)||c,Yi(e,n),Fn=u):Yi(e,n),fr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ne=n,c=n.child;c!==null;){for(f=Ne=c;Ne!==null;){switch(h=Ne,p=h.child,h.tag){case 0:case 11:case 14:case 15:Vl(4,h,h.return);break;case 1:ma(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Kt(i,t,v)}}break;case 5:ma(h,h.return);break;case 22:if(h.memoizedState!==null){X_(f);continue}}p!==null?(p.return=h,Ne=p):X_(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ey("display",o))}catch(v){Kt(n,n.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Kt(n,n.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yi(e,n),fr(n),i&4&&H_(n);break;case 21:break;default:Yi(e,n),fr(n)}}function fr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(AS(t)){var i=t;break e}t=t.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Jl(r,""),i.flags&=-33);var s=G_(n);Up(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=G_(n);Ip(n,a,o);break;default:throw Error(he(161))}}catch(l){Kt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function rw(n,e,t){Ne=n,bS(n)}function bS(n,e,t){for(var i=(n.mode&1)!==0;Ne!==null;){var r=Ne,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||oc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Fn;a=oc;var u=Fn;if(oc=o,(Fn=l)&&!u)for(Ne=r;Ne!==null;)o=Ne,l=o.child,o.tag===22&&o.memoizedState!==null?Y_(r):l!==null?(l.return=o,Ne=l):Y_(r);for(;s!==null;)Ne=s,bS(s),s=s.sibling;Ne=r,oc=a,Fn=u}W_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ne=s):W_(n)}}function W_(n){for(;Ne!==null;){var e=Ne;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fn||sh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Fn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ki(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&R_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}R_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&nu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}Fn||e.flags&512&&Np(e)}catch(h){Kt(e,e.return,h)}}if(e===n){Ne=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ne=t;break}Ne=e.return}}function X_(n){for(;Ne!==null;){var e=Ne;if(e===n){Ne=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ne=t;break}Ne=e.return}}function Y_(n){for(;Ne!==null;){var e=Ne;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{sh(4,e)}catch(l){Kt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Kt(e,r,l)}}var s=e.return;try{Np(e)}catch(l){Kt(e,s,l)}break;case 5:var o=e.return;try{Np(e)}catch(l){Kt(e,o,l)}}}catch(l){Kt(e,e.return,l)}if(e===n){Ne=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ne=a;break}Ne=e.return}}var sw=Math.ceil,Rf=ts.ReactCurrentDispatcher,N0=ts.ReactCurrentOwner,Vi=ts.ReactCurrentBatchConfig,_t=0,Sn=null,on=null,An=0,mi=0,ga=Hs(0),un=0,du=null,To=0,oh=0,I0=0,Gl=null,Zn=null,U0=0,ka=1/0,Fr=null,bf=!1,Fp=null,Ls=null,ac=!1,Ss=null,Pf=0,Hl=0,Op=null,Kc=-1,Zc=0;function Yn(){return _t&6?tn():Kc!==-1?Kc:Kc=tn()}function Ds(n){return n.mode&1?_t&2&&An!==0?An&-An:GT.transition!==null?(Zc===0&&(Zc=dy()),Zc):(n=At,n!==0||(n=window.event,n=n===void 0?16:yy(n.type)),n):1}function tr(n,e,t,i){if(50<Hl)throw Hl=0,Op=null,Error(he(185));Pu(n,t,i),(!(_t&2)||n!==Sn)&&(n===Sn&&(!(_t&2)&&(oh|=t),un===4&&vs(n,An)),ni(n,i),t===1&&_t===0&&!(e.mode&1)&&(ka=tn()+500,nh&&Ws()))}function ni(n,e){var t=n.callbackNode;GE(n,e);var i=df(n,n===Sn?An:0);if(i===0)t!==null&&t_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&t_(t),e===1)n.tag===0?VT(q_.bind(null,n)):zy(q_.bind(null,n)),OT(function(){!(_t&6)&&Ws()}),t=null;else{switch(py(i)){case 1:t=a0;break;case 4:t=fy;break;case 16:t=hf;break;case 536870912:t=hy;break;default:t=hf}t=OS(t,PS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function PS(n,e){if(Kc=-1,Zc=0,_t&6)throw Error(he(327));var t=n.callbackNode;if(wa()&&n.callbackNode!==t)return null;var i=df(n,n===Sn?An:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Lf(n,i);else{e=i;var r=_t;_t|=2;var s=DS();(Sn!==n||An!==e)&&(Fr=null,ka=tn()+500,mo(n,e));do try{lw();break}catch(a){LS(n,a)}while(!0);y0(),Rf.current=s,_t=r,on!==null?e=0:(Sn=null,An=0,e=un)}if(e!==0){if(e===2&&(r=cp(n),r!==0&&(i=r,e=kp(n,r))),e===1)throw t=du,mo(n,0),vs(n,i),ni(n,tn()),t;if(e===6)vs(n,i);else{if(r=n.current.alternate,!(i&30)&&!ow(r)&&(e=Lf(n,i),e===2&&(s=cp(n),s!==0&&(i=s,e=kp(n,s))),e===1))throw t=du,mo(n,0),vs(n,i),ni(n,tn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:io(n,Zn,Fr);break;case 3:if(vs(n,i),(i&130023424)===i&&(e=U0+500-tn(),10<e)){if(df(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Yn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=vp(io.bind(null,n,Zn,Fr),e);break}io(n,Zn,Fr);break;case 4:if(vs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-er(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=tn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sw(i/1960))-i,10<i){n.timeoutHandle=vp(io.bind(null,n,Zn,Fr),i);break}io(n,Zn,Fr);break;case 5:io(n,Zn,Fr);break;default:throw Error(he(329))}}}return ni(n,tn()),n.callbackNode===t?PS.bind(null,n):null}function kp(n,e){var t=Gl;return n.current.memoizedState.isDehydrated&&(mo(n,e).flags|=256),n=Lf(n,e),n!==2&&(e=Zn,Zn=t,e!==null&&zp(e)),n}function zp(n){Zn===null?Zn=n:Zn.push.apply(Zn,n)}function ow(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!nr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vs(n,e){for(e&=~I0,e&=~oh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-er(e),i=1<<t;n[t]=-1,e&=~i}}function q_(n){if(_t&6)throw Error(he(327));wa();var e=df(n,0);if(!(e&1))return ni(n,tn()),null;var t=Lf(n,e);if(n.tag!==0&&t===2){var i=cp(n);i!==0&&(e=i,t=kp(n,i))}if(t===1)throw t=du,mo(n,0),vs(n,e),ni(n,tn()),t;if(t===6)throw Error(he(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,io(n,Zn,Fr),ni(n,tn()),null}function F0(n,e){var t=_t;_t|=1;try{return n(e)}finally{_t=t,_t===0&&(ka=tn()+500,nh&&Ws())}}function wo(n){Ss!==null&&Ss.tag===0&&!(_t&6)&&wa();var e=_t;_t|=1;var t=Vi.transition,i=At;try{if(Vi.transition=null,At=1,n)return n()}finally{At=i,Vi.transition=t,_t=e,!(_t&6)&&Ws()}}function O0(){mi=ga.current,Ut(ga)}function mo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,FT(t)),on!==null)for(t=on.return;t!==null;){var i=t;switch(_0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vf();break;case 3:Fa(),Ut(ei),Ut(Vn),A0();break;case 5:w0(i);break;case 4:Fa();break;case 13:Ut(Wt);break;case 19:Ut(Wt);break;case 10:S0(i.type._context);break;case 22:case 23:O0()}t=t.return}if(Sn=n,on=n=Ns(n.current,null),An=mi=e,un=0,du=null,I0=oh=To=0,Zn=Gl=null,uo!==null){for(e=0;e<uo.length;e++)if(t=uo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}uo=null}return n}function LS(n,e){do{var t=on;try{if(y0(),qc.current=Cf,Af){for(var i=jt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Af=!1}if(Eo=0,yn=ln=jt=null,Bl=!1,cu=0,N0.current=null,t===null||t.return===null){un=1,du=e,on=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=An,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=I_(o);if(p!==null){p.flags&=-257,U_(p,o,a,s,e),p.mode&1&&N_(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){N_(s,u,e),k0();break e}l=Error(he(426))}}else if(zt&&a.mode&1){var _=I_(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),U_(_,o,a,s,e),v0(Oa(l,a));break e}}s=l=Oa(l,a),un!==4&&(un=2),Gl===null?Gl=[s]:Gl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=pS(s,l,e);C_(s,d);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ls===null||!Ls.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=mS(s,a,e);C_(s,S);break e}}s=s.return}while(s!==null)}IS(t)}catch(T){e=T,on===t&&t!==null&&(on=t=t.return);continue}break}while(!0)}function DS(){var n=Rf.current;return Rf.current=Cf,n===null?Cf:n}function k0(){(un===0||un===3||un===2)&&(un=4),Sn===null||!(To&268435455)&&!(oh&268435455)||vs(Sn,An)}function Lf(n,e){var t=_t;_t|=2;var i=DS();(Sn!==n||An!==e)&&(Fr=null,mo(n,e));do try{aw();break}catch(r){LS(n,r)}while(!0);if(y0(),_t=t,Rf.current=i,on!==null)throw Error(he(261));return Sn=null,An=0,un}function aw(){for(;on!==null;)NS(on)}function lw(){for(;on!==null&&!NE();)NS(on)}function NS(n){var e=FS(n.alternate,n,mi);n.memoizedProps=n.pendingProps,e===null?IS(n):on=e,N0.current=null}function IS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=tw(t,e),t!==null){t.flags&=32767,on=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,on=null;return}}else if(t=ew(t,e,mi),t!==null){on=t;return}if(e=e.sibling,e!==null){on=e;return}on=e=n}while(e!==null);un===0&&(un=5)}function io(n,e,t){var i=At,r=Vi.transition;try{Vi.transition=null,At=1,uw(n,e,t,i)}finally{Vi.transition=r,At=i}return null}function uw(n,e,t,i){do wa();while(Ss!==null);if(_t&6)throw Error(he(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(he(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(HE(n,s),n===Sn&&(on=Sn=null,An=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ac||(ac=!0,OS(hf,function(){return wa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Vi.transition,Vi.transition=null;var o=At;At=1;var a=_t;_t|=4,N0.current=null,iw(n,t),RS(t,n),bT(gp),pf=!!mp,gp=mp=null,n.current=t,rw(t),IE(),_t=a,At=o,Vi.transition=s}else n.current=t;if(ac&&(ac=!1,Ss=n,Pf=r),s=n.pendingLanes,s===0&&(Ls=null),OE(t.stateNode),ni(n,tn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(bf)throw bf=!1,n=Fp,Fp=null,n;return Pf&1&&n.tag!==0&&wa(),s=n.pendingLanes,s&1?n===Op?Hl++:(Hl=0,Op=n):Hl=0,Ws(),null}function wa(){if(Ss!==null){var n=py(Pf),e=Vi.transition,t=At;try{if(Vi.transition=null,At=16>n?16:n,Ss===null)var i=!1;else{if(n=Ss,Ss=null,Pf=0,_t&6)throw Error(he(331));var r=_t;for(_t|=4,Ne=n.current;Ne!==null;){var s=Ne,o=s.child;if(Ne.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ne=u;Ne!==null;){var c=Ne;switch(c.tag){case 0:case 11:case 15:Vl(8,c,s)}var f=c.child;if(f!==null)f.return=c,Ne=f;else for(;Ne!==null;){c=Ne;var h=c.sibling,p=c.return;if(wS(c),c===u){Ne=null;break}if(h!==null){h.return=p,Ne=h;break}Ne=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}Ne=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ne=o;else e:for(;Ne!==null;){if(s=Ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vl(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ne=d;break e}Ne=s.return}}var g=n.current;for(Ne=g;Ne!==null;){o=Ne;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ne=x;else e:for(o=g;Ne!==null;){if(a=Ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sh(9,a)}}catch(T){Kt(a,a.return,T)}if(a===o){Ne=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ne=S;break e}Ne=a.return}}if(_t=r,Ws(),Er&&typeof Er.onPostCommitFiberRoot=="function")try{Er.onPostCommitFiberRoot(Zf,n)}catch{}i=!0}return i}finally{At=t,Vi.transition=e}}return!1}function j_(n,e,t){e=Oa(t,e),e=pS(n,e,1),n=Ps(n,e,1),e=Yn(),n!==null&&(Pu(n,1,e),ni(n,e))}function Kt(n,e,t){if(n.tag===3)j_(n,n,t);else for(;e!==null;){if(e.tag===3){j_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ls===null||!Ls.has(i))){n=Oa(t,n),n=mS(e,n,1),e=Ps(e,n,1),n=Yn(),e!==null&&(Pu(e,1,n),ni(e,n));break}}e=e.return}}function cw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Yn(),n.pingedLanes|=n.suspendedLanes&t,Sn===n&&(An&t)===t&&(un===4||un===3&&(An&130023424)===An&&500>tn()-U0?mo(n,0):I0|=t),ni(n,e)}function US(n,e){e===0&&(n.mode&1?(e=Zu,Zu<<=1,!(Zu&130023424)&&(Zu=4194304)):e=1);var t=Yn();n=$r(n,e),n!==null&&(Pu(n,e,t),ni(n,t))}function fw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),US(n,t)}function hw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),US(n,t)}var FS;FS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ei.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,QT(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,zt&&e.flags&1048576&&By(e,Sf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$c(n,e),n=e.pendingProps;var r=Na(e,Vn.current);Ta(e,t),r=R0(null,e,i,n,r,t);var s=b0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ti(i)?(s=!0,xf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,E0(e),r.updater=rh,e.stateNode=r,r._reactInternals=e,wp(e,i,n,t),e=Rp(null,e,i,!0,s,t)):(e.tag=0,zt&&s&&g0(e),Xn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch($c(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=pw(i),n=Ki(i,n),r){case 0:e=Cp(null,e,i,n,t);break e;case 1:e=k_(null,e,i,n,t);break e;case 11:e=F_(null,e,i,n,t);break e;case 14:e=O_(null,e,i,Ki(i.type,n),t);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),Cp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),k_(n,e,i,r,t);case 3:e:{if(xS(e),n===null)throw Error(he(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yy(n,e),Tf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Oa(Error(he(423)),e),e=z_(n,e,i,t,r);break e}else if(i!==r){r=Oa(Error(he(424)),e),e=z_(n,e,i,t,r);break e}else for(xi=bs(e.stateNode.containerInfo.firstChild),Mi=e,zt=!0,Ji=null,t=Wy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ia(),i===r){e=Kr(n,e,t);break e}Xn(n,e,i,t)}e=e.child}return e;case 5:return qy(e),n===null&&Mp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,_p(i,r)?o=null:s!==null&&_p(i,s)&&(e.flags|=32),vS(n,e),Xn(n,e,o,t),e.child;case 6:return n===null&&Mp(e),null;case 13:return yS(n,e,t);case 4:return T0(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ua(e,null,i,t):Xn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),F_(n,e,i,r,t);case 7:return Xn(n,e,e.pendingProps,t),e.child;case 8:return Xn(n,e,e.pendingProps.children,t),e.child;case 12:return Xn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Nt(Mf,i._currentValue),i._currentValue=o,s!==null)if(nr(s.value,o)){if(s.children===r.children&&!ei.current){e=Kr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ep(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(he(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ep(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ta(e,t),r=Hi(r),i=i(r),e.flags|=1,Xn(n,e,i,t),e.child;case 14:return i=e.type,r=Ki(i,e.pendingProps),r=Ki(i.type,r),O_(n,e,i,r,t);case 15:return gS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ki(i,r),$c(n,e),e.tag=1,ti(i)?(n=!0,xf(e)):n=!1,Ta(e,t),dS(e,i,r),wp(e,i,r,t),Rp(null,e,i,!0,n,t);case 19:return SS(n,e,t);case 22:return _S(n,e,t)}throw Error(he(156,e.tag))};function OS(n,e){return cy(n,e)}function dw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(n,e,t,i){return new dw(n,e,t,i)}function z0(n){return n=n.prototype,!(!n||!n.isReactComponent)}function pw(n){if(typeof n=="function")return z0(n)?1:0;if(n!=null){if(n=n.$$typeof,n===r0)return 11;if(n===s0)return 14}return 2}function Ns(n,e){var t=n.alternate;return t===null?(t=ki(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Jc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")z0(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case oa:return go(t.children,r,s,e);case i0:o=8,r|=8;break;case $d:return n=ki(12,t,e,r|2),n.elementType=$d,n.lanes=s,n;case Kd:return n=ki(13,t,e,r),n.elementType=Kd,n.lanes=s,n;case Zd:return n=ki(19,t,e,r),n.elementType=Zd,n.lanes=s,n;case qx:return ah(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Xx:o=10;break e;case Yx:o=9;break e;case r0:o=11;break e;case s0:o=14;break e;case ms:o=16,i=null;break e}throw Error(he(130,n==null?n:typeof n,""))}return e=ki(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function go(n,e,t,i){return n=ki(7,n,i,e),n.lanes=t,n}function ah(n,e,t,i){return n=ki(22,n,i,e),n.elementType=qx,n.lanes=t,n.stateNode={isHidden:!1},n}function ed(n,e,t){return n=ki(6,n,null,e),n.lanes=t,n}function td(n,e,t){return e=ki(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function mw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uh(0),this.expirationTimes=Uh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function B0(n,e,t,i,r,s,o,a,l){return n=new mw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ki(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},E0(s),n}function gw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function kS(n){if(!n)return Os;n=n._reactInternals;e:{if(Lo(n)!==n||n.tag!==1)throw Error(he(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ti(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(n.tag===1){var t=n.type;if(ti(t))return ky(n,t,e)}return e}function zS(n,e,t,i,r,s,o,a,l){return n=B0(t,i,!0,n,r,s,o,a,l),n.context=kS(null),t=n.current,i=Yn(),r=Ds(t),s=Wr(i,r),s.callback=e??null,Ps(t,s,r),n.current.lanes=r,Pu(n,r,i),ni(n,i),n}function lh(n,e,t,i){var r=e.current,s=Yn(),o=Ds(r);return t=kS(t),e.context===null?e.context=t:e.pendingContext=t,e=Wr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ps(r,e,o),n!==null&&(tr(n,r,o,s),Yc(n,r,o)),o}function Df(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function V0(n,e){$_(n,e),(n=n.alternate)&&$_(n,e)}function _w(){return null}var BS=typeof reportError=="function"?reportError:function(n){console.error(n)};function G0(n){this._internalRoot=n}uh.prototype.render=G0.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(he(409));lh(n,e,null,null)};uh.prototype.unmount=G0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;wo(function(){lh(null,n,null,null)}),e[jr]=null}};function uh(n){this._internalRoot=n}uh.prototype.unstable_scheduleHydration=function(n){if(n){var e=_y();n={blockedOn:null,target:n,priority:e};for(var t=0;t<_s.length&&e!==0&&e<_s[t].priority;t++);_s.splice(t,0,n),t===0&&xy(n)}};function H0(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ch(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function K_(){}function vw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Df(o);s.call(u)}}var o=zS(e,i,n,0,null,!1,!1,"",K_);return n._reactRootContainer=o,n[jr]=o.current,su(n.nodeType===8?n.parentNode:n),wo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Df(l);a.call(u)}}var l=B0(n,0,!1,null,null,!1,!1,"",K_);return n._reactRootContainer=l,n[jr]=l.current,su(n.nodeType===8?n.parentNode:n),wo(function(){lh(e,l,t,i)}),l}function fh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Df(o);a.call(l)}}lh(e,o,n,r)}else o=vw(t,e,n,r,i);return Df(o)}my=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Rl(e.pendingLanes);t!==0&&(l0(e,t|1),ni(e,tn()),!(_t&6)&&(ka=tn()+500,Ws()))}break;case 13:wo(function(){var i=$r(n,1);if(i!==null){var r=Yn();tr(i,n,1,r)}}),V0(n,1)}};u0=function(n){if(n.tag===13){var e=$r(n,134217728);if(e!==null){var t=Yn();tr(e,n,134217728,t)}V0(n,134217728)}};gy=function(n){if(n.tag===13){var e=Ds(n),t=$r(n,e);if(t!==null){var i=Yn();tr(t,n,e,i)}V0(n,e)}};_y=function(){return At};vy=function(n,e){var t=At;try{return At=n,e()}finally{At=t}};ap=function(n,e,t){switch(e){case"input":if(ep(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=th(i);if(!r)throw Error(he(90));$x(i),ep(i,r)}}}break;case"textarea":Zx(n,t);break;case"select":e=t.value,e!=null&&ya(n,!!t.multiple,e,!1)}};ry=F0;sy=wo;var xw={usingClientEntryPoint:!1,Events:[Du,ca,th,ny,iy,F0]},_l={findFiberByHostInstance:lo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yw={bundleType:_l.bundleType,version:_l.version,rendererPackageName:_l.rendererPackageName,rendererConfig:_l.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ts.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ly(n),n===null?null:n.stateNode},findFiberByHostInstance:_l.findFiberByHostInstance||_w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Zf=lc.inject(yw),Er=lc}catch{}}Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xw;Ci.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!H0(e))throw Error(he(200));return gw(n,e,null,t)};Ci.createRoot=function(n,e){if(!H0(n))throw Error(he(299));var t=!1,i="",r=BS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=B0(n,1,!1,null,null,t,!1,i,r),n[jr]=e.current,su(n.nodeType===8?n.parentNode:n),new G0(e)};Ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(he(188)):(n=Object.keys(n).join(","),Error(he(268,n)));return n=ly(e),n=n===null?null:n.stateNode,n};Ci.flushSync=function(n){return wo(n)};Ci.hydrate=function(n,e,t){if(!ch(e))throw Error(he(200));return fh(null,n,e,!0,t)};Ci.hydrateRoot=function(n,e,t){if(!H0(n))throw Error(he(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=BS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=zS(e,null,n,1,t??null,r,!1,s,o),n[jr]=e.current,su(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new uh(e)};Ci.render=function(n,e,t){if(!ch(e))throw Error(he(200));return fh(null,n,e,!1,t)};Ci.unmountComponentAtNode=function(n){if(!ch(n))throw Error(he(40));return n._reactRootContainer?(wo(function(){fh(null,null,n,!1,function(){n._reactRootContainer=null,n[jr]=null})}),!0):!1};Ci.unstable_batchedUpdates=F0;Ci.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ch(t))throw Error(he(200));if(n==null||n._reactInternals===void 0)throw Error(he(38));return fh(n,e,t,!1,i)};Ci.version="18.3.1-next-f1338f8080-20240426";function VS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(VS)}catch(n){console.error(n)}}VS(),Vx.exports=Ci;var Sw=Vx.exports,Z_=Sw;qd.createRoot=Z_.createRoot,qd.hydrateRoot=Z_.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const W0="184",Mw=0,J_=1,Ew=2,Qc=1,Tw=2,Pl=3,ks=0,ii=1,Br=2,Xr=0,Aa=1,Nf=2,Q_=3,ev=4,ww=5,oo=100,Aw=101,Cw=102,Rw=103,bw=104,Pw=200,Lw=201,Dw=202,Nw=203,Bp=204,Vp=205,Iw=206,Uw=207,Fw=208,Ow=209,kw=210,zw=211,Bw=212,Vw=213,Gw=214,Gp=0,Hp=1,Wp=2,za=3,Xp=4,Yp=5,qp=6,jp=7,GS=0,Hw=1,Ww=2,wr=0,HS=1,WS=2,XS=3,YS=4,qS=5,jS=6,$S=7,KS=300,Ao=301,Ba=302,nd=303,id=304,hh=306,$p=1e3,Hr=1001,Kp=1002,wn=1003,Xw=1004,uc=1005,kn=1006,rd=1007,fo=1008,_i=1009,ZS=1010,JS=1011,pu=1012,X0=1013,Cr=1014,yr=1015,Zr=1016,Y0=1017,q0=1018,mu=1020,QS=35902,eM=35899,tM=1021,nM=1022,Qi=1023,Jr=1026,ho=1027,iM=1028,j0=1029,Co=1030,$0=1031,K0=1033,ef=33776,tf=33777,nf=33778,rf=33779,Zp=35840,Jp=35841,Qp=35842,em=35843,tm=36196,nm=37492,im=37496,rm=37488,sm=37489,If=37490,om=37491,am=37808,lm=37809,um=37810,cm=37811,fm=37812,hm=37813,dm=37814,pm=37815,mm=37816,gm=37817,_m=37818,vm=37819,xm=37820,ym=37821,Sm=36492,Mm=36494,Em=36495,Tm=36283,wm=36284,Uf=36285,Am=36286,Yw=3200,tv=0,qw=1,xs="",Ni="srgb",Ff="srgb-linear",Of="linear",wt="srgb",Ho=7680,nv=519,jw=512,$w=513,Kw=514,Z0=515,Zw=516,Jw=517,J0=518,Qw=519,iv=35044,rv="300 es",Sr=2e3,gu=2001;function eA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function kf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tA(){const n=kf("canvas");return n.style.display="block",n}const sv={};function ov(...n){const e="THREE."+n.shift();console.log(e,...n)}function rM(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=rM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function mt(...n){n=rM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Cm(...n){const e=n.join(" ");e in sv||(sv[e]=!0,We(...n))}function nA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const iA={[Gp]:Hp,[Wp]:qp,[Xp]:jp,[za]:Yp,[Hp]:Gp,[qp]:Wp,[jp]:Xp,[Yp]:za};class Do{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let av=1234567;const Ca=Math.PI/180,_u=180/Math.PI;function No(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function Q0(n,e){return(n%e+e)%e}function rA(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function sA(n,e,t){return n!==e?(t-n)/(e-n):0}function Wl(n,e,t){return(1-t)*n+t*e}function oA(n,e,t,i){return Wl(n,e,1-Math.exp(-t*i))}function aA(n,e=1){return e-Math.abs(Q0(n,e*2)-e)}function lA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function uA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function cA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fA(n,e){return n+Math.random()*(e-n)}function hA(n){return n*(.5-Math.random())}function dA(n){n!==void 0&&(av=n);let e=av+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pA(n){return n*Ca}function mA(n){return n*_u}function gA(n){return(n&n-1)===0&&n!==0}function _A(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xA(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*m,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*m,a*u);break;case"ZYZ":n.set(l*m,l*p,a*c,a*u);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ra(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Dt={DEG2RAD:Ca,RAD2DEG:_u,generateUUID:No,clamp:ot,euclideanModulo:Q0,mapLinear:rA,inverseLerp:sA,lerp:Wl,damp:oA,pingpong:aA,smoothstep:lA,smootherstep:uA,randInt:cA,randFloat:fA,randFloatSpread:hA,seededRandom:dA,degToRad:pA,radToDeg:mA,isPowerOfTwo:gA,ceilPowerOfTwo:_A,floorPowerOfTwo:vA,setQuaternionFromProperEuler:xA,normalize:Hn,denormalize:ra},Rg=class Rg{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rg.prototype.isVector2=!0;let Re=Rg;class Ja{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],h=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];if(f!==v||l!==h||u!==p||c!==m){let _=l*h+u*p+c*m+f*v;_<0&&(h=-h,p=-p,m=-m,v=-v,_=-_);let d=1-a;if(_<.9995){const g=Math.acos(_),x=Math.sin(g);d=Math.sin(d*g)/x,a=Math.sin(a*g)/x,l=l*d+h*a,u=u*d+p*a,c=c*d+m*a,f=f*d+v*a}else{l=l*d+h*a,u=u*d+p*a,c=c*d+m*a,f=f*d+v*a;const g=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=g,u*=g,c*=g,f*=g}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+c*f+l*p-u*h,e[t+1]=l*m+c*h+u*f-a*p,e[t+2]=u*m+c*p+a*h-l*f,e[t+3]=c*m-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*m,this._y=u*p*f-h*c*m,this._z=u*c*m+h*p*f,this._w=u*c*f-h*p*m;break;case"YXZ":this._x=h*c*f+u*p*m,this._y=u*p*f-h*c*m,this._z=u*c*m-h*p*f,this._w=u*c*f+h*p*m;break;case"ZXY":this._x=h*c*f-u*p*m,this._y=u*p*f+h*c*m,this._z=u*c*m+h*p*f,this._w=u*c*f-h*p*m;break;case"ZYX":this._x=h*c*f-u*p*m,this._y=u*p*f+h*c*m,this._z=u*c*m-h*p*f,this._w=u*c*f+h*p*m;break;case"YZX":this._x=h*c*f+u*p*m,this._y=u*p*f+h*c*m,this._z=u*c*m-h*p*f,this._w=u*c*f-h*p*m;break;case"XZY":this._x=h*c*f-u*p*m,this._y=u*p*f-h*c*m,this._z=u*c*m+h*p*f,this._w=u*c*f+h*p*m;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bg=class bg{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sd.copy(this).projectOnVector(e),this.sub(sd)}reflect(e){return this.sub(sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bg.prototype.isVector3=!0;let N=bg;const sd=new N,lv=new Ja,Pg=class Pg{constructor(e,t,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],m=i[8],v=r[0],_=r[3],d=r[6],g=r[1],x=r[4],S=r[7],T=r[2],E=r[5],A=r[8];return s[0]=o*v+a*g+l*T,s[3]=o*_+a*x+l*E,s[6]=o*d+a*S+l*A,s[1]=u*v+c*g+f*T,s[4]=u*_+c*x+f*E,s[7]=u*d+c*S+f*A,s[2]=h*v+p*g+m*T,s[5]=h*_+p*x+m*E,s[8]=h*d+p*S+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,m=t*f+i*h+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(od.makeScale(e,t)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,t){return this.premultiply(od.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pg.prototype.isMatrix3=!0;let et=Pg;const od=new et,uv=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cv=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yA(){const n={enabled:!0,workingColorSpace:Ff,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(r.r=Yr(r.r),r.g=Yr(r.g),r.b=Yr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(r.r=Ra(r.r),r.g=Ra(r.g),r.b=Ra(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xs?Of:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Cm("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Cm("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ff]:{primaries:e,whitePoint:i,transfer:Of,toXYZ:uv,fromXYZ:cv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:uv,fromXYZ:cv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),n}const ht=yA();function Yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ra(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wo;class SA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wo===void 0&&(Wo=kf("canvas")),Wo.width=e.width,Wo.height=e.height;const r=Wo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yr(t[i]/255)*255):t[i]=Yr(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MA=0;class eg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ad(r[o].image)):s.push(ad(r[o]))}else s=ad(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ad(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?SA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let EA=0;const ld=new N;class zn extends Do{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,i=Hr,r=Hr,s=kn,o=fo,a=Qi,l=_i,u=zn.DEFAULT_ANISOTROPY,c=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=No(),this.name="",this.source=new eg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==KS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $p:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case Kp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $p:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case Kp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=KS;zn.DEFAULT_ANISOTROPY=1;const Lg=class Lg{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],m=l[9],v=l[2],_=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+v)<.1&&Math.abs(m+_)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,T=(d+1)/2,E=(c+h)/4,A=(f+v)/4,y=(m+_)/4;return x>S&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=A/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=y/s),this.set(i,r,s,t),this}let g=Math.sqrt((_-m)*(_-m)+(f-v)*(f-v)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(_-m)/g,this.y=(f-v)/g,this.z=(h-c)/g,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lg.prototype.isVector4=!0;let Zt=Lg;class TA extends Do{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new zn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new eg(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends TA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sM extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wA extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $f=class $f{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,m,v,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,m,v,_)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,m,v,_){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=m,d[11]=v,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $f().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Xo.setFromMatrixColumn(e,0).length(),s=1/Xo.setFromMatrixColumn(e,1).length(),o=1/Xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,m=a*c,v=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+m*u,t[5]=h-v*u,t[9]=-a*l,t[2]=v-h*u,t[6]=m+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,m=u*c,v=u*f;t[0]=h+v*a,t[4]=m*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-m,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,m=u*c,v=u*f;t[0]=h-v*a,t[4]=-o*f,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*c,t[9]=v-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,m=a*c,v=a*f;t[0]=l*c,t[4]=m*u-p,t[8]=h*u+v,t[1]=l*f,t[5]=v*u+h,t[9]=p*u-m,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,m=a*l,v=a*u;t[0]=l*c,t[4]=v-h*f,t[8]=m*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+m,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*u,m=a*l,v=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+v,t[5]=o*c,t[9]=p*f-m,t[2]=m*f-p,t[6]=a*c,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AA,e,CA)}lookAt(e,t,i){const r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),ls.crossVectors(i,di),ls.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),ls.crossVectors(i,di)),ls.normalize(),cc.crossVectors(di,ls),r[0]=ls.x,r[4]=cc.x,r[8]=di.x,r[1]=ls.y,r[5]=cc.y,r[9]=di.y,r[2]=ls.z,r[6]=cc.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],m=i[2],v=i[6],_=i[10],d=i[14],g=i[3],x=i[7],S=i[11],T=i[15],E=r[0],A=r[4],y=r[8],w=r[12],b=r[1],P=r[5],I=r[9],z=r[13],H=r[2],D=r[6],B=r[10],F=r[14],k=r[3],Y=r[7],$=r[11],J=r[15];return s[0]=o*E+a*b+l*H+u*k,s[4]=o*A+a*P+l*D+u*Y,s[8]=o*y+a*I+l*B+u*$,s[12]=o*w+a*z+l*F+u*J,s[1]=c*E+f*b+h*H+p*k,s[5]=c*A+f*P+h*D+p*Y,s[9]=c*y+f*I+h*B+p*$,s[13]=c*w+f*z+h*F+p*J,s[2]=m*E+v*b+_*H+d*k,s[6]=m*A+v*P+_*D+d*Y,s[10]=m*y+v*I+_*B+d*$,s[14]=m*w+v*z+_*F+d*J,s[3]=g*E+x*b+S*H+T*k,s[7]=g*A+x*P+S*D+T*Y,s[11]=g*y+x*I+S*B+T*$,s[15]=g*w+x*z+S*F+T*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],m=e[3],v=e[7],_=e[11],d=e[15],g=l*p-u*h,x=a*p-u*f,S=a*h-l*f,T=o*p-u*c,E=o*h-l*c,A=o*f-a*c;return t*(v*g-_*x+d*S)-i*(m*g-_*T+d*E)+r*(m*x-v*T+d*A)-s*(m*S-v*E+_*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],m=e[12],v=e[13],_=e[14],d=e[15],g=t*a-i*o,x=t*l-r*o,S=t*u-s*o,T=i*l-r*a,E=i*u-s*a,A=r*u-s*l,y=c*v-f*m,w=c*_-h*m,b=c*d-p*m,P=f*_-h*v,I=f*d-p*v,z=h*d-p*_,H=g*z-x*I+S*P+T*b-E*w+A*y;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/H;return e[0]=(a*z-l*I+u*P)*D,e[1]=(r*I-i*z-s*P)*D,e[2]=(v*A-_*E+d*T)*D,e[3]=(h*E-f*A-p*T)*D,e[4]=(l*b-o*z-u*w)*D,e[5]=(t*z-r*b+s*w)*D,e[6]=(_*S-m*A-d*x)*D,e[7]=(c*A-h*S+p*x)*D,e[8]=(o*I-a*b+u*y)*D,e[9]=(i*b-t*I-s*y)*D,e[10]=(m*E-v*S+d*g)*D,e[11]=(f*S-c*E-p*g)*D,e[12]=(a*w-o*P-l*y)*D,e[13]=(t*P-i*w+r*y)*D,e[14]=(v*x-m*T-_*g)*D,e[15]=(c*T-f*x+h*g)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,m=s*f,v=o*c,_=o*f,d=a*f,g=l*u,x=l*c,S=l*f,T=i.x,E=i.y,A=i.z;return r[0]=(1-(v+d))*T,r[1]=(p+S)*T,r[2]=(m-x)*T,r[3]=0,r[4]=(p-S)*E,r[5]=(1-(h+d))*E,r[6]=(_+g)*E,r[7]=0,r[8]=(m+x)*A,r[9]=(_-g)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Xo.set(r[0],r[1],r[2]).length();const a=Xo.set(r[4],r[5],r[6]).length(),l=Xo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),qi.copy(this);const u=1/o,c=1/a,f=1/l;return qi.elements[0]*=u,qi.elements[1]*=u,qi.elements[2]*=u,qi.elements[4]*=c,qi.elements[5]*=c,qi.elements[6]*=c,qi.elements[8]*=f,qi.elements[9]*=f,qi.elements[10]*=f,t.setFromRotationMatrix(qi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Sr,l=!1){const u=this.elements,c=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let m,v;if(l)m=s/(o-s),v=o*s/(o-s);else if(a===Sr)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===gu)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Sr,l=!1){const u=this.elements,c=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let m,v;if(l)m=1/(o-s),v=o/(o-s);else if(a===Sr)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===gu)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};$f.prototype.isMatrix4=!0;let Vt=$f;const Xo=new N,qi=new Vt,AA=new N(0,0,0),CA=new N(1,1,1),ls=new N,cc=new N,di=new N,fv=new Vt,hv=new Ja;class Ro{constructor(e=0,t=0,i=0,r=Ro.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hv.setFromEuler(this),this.setFromQuaternion(hv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ro.DEFAULT_ORDER="XYZ";class oM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RA=0;const dv=new N,Yo=new Ja,Lr=new Vt,fc=new N,vl=new N,bA=new N,PA=new Ja,pv=new N(1,0,0),mv=new N(0,1,0),gv=new N(0,0,1),_v={type:"added"},LA={type:"removed"},qo={type:"childadded",child:null},ud={type:"childremoved",child:null};class cn extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RA++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new N,t=new Ro,i=new Ja,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new et}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yo.setFromAxisAngle(e,t),this.quaternion.multiply(Yo),this}rotateOnWorldAxis(e,t){return Yo.setFromAxisAngle(e,t),this.quaternion.premultiply(Yo),this}rotateX(e){return this.rotateOnAxis(pv,e)}rotateY(e){return this.rotateOnAxis(mv,e)}rotateZ(e){return this.rotateOnAxis(gv,e)}translateOnAxis(e,t){return dv.copy(e).applyQuaternion(this.quaternion),this.position.add(dv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pv,e)}translateY(e){return this.translateOnAxis(mv,e)}translateZ(e){return this.translateOnAxis(gv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Lr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fc.copy(e):fc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lr.lookAt(vl,fc,this.up):Lr.lookAt(fc,vl,this.up),this.quaternion.setFromRotationMatrix(Lr),r&&(Lr.extractRotation(r.matrixWorld),Yo.setFromRotationMatrix(Lr),this.quaternion.premultiply(Yo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_v),qo.child=e,this.dispatchEvent(qo),qo.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LA),ud.child=e,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_v),qo.child=e,this.dispatchEvent(qo),qo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,bA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,PA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}cn.DEFAULT_UP=new N(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xn extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DA={type:"move"};class cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),d=this._getHandJoint(u,v);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,m=.005;u.inputState.pinching&&h>p+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const aM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},hc={h:0,s:0,l:0};function fd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=Q0(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=fd(o,s,e+1/3),this.g=fd(o,s,e),this.b=fd(o,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Ni){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ni){const i=aM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return ht.workingToColorSpace(Nn.copy(this),e),Math.round(ot(Nn.r*255,0,255))*65536+Math.round(ot(Nn.g*255,0,255))*256+Math.round(ot(Nn.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,s=Nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Ni){ht.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,i=Nn.g,r=Nn.b;return e!==Ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(hc);const i=Wl(us.h,hc.h,t),r=Wl(us.s,hc.s,t),s=Wl(us.l,hc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new it;it.NAMES=aM;class tg{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=t}clone(){return new tg(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class NA extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ro,this.environmentIntensity=1,this.environmentRotation=new Ro,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ji=new N,Dr=new N,hd=new N,Nr=new N,jo=new N,$o=new N,vv=new N,dd=new N,pd=new N,md=new N,gd=new Zt,_d=new Zt,vd=new Zt;class Oi{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ji.subVectors(e,t),r.cross(ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ji.subVectors(r,t),Dr.subVectors(i,t),hd.subVectors(e,t);const o=ji.dot(ji),a=ji.dot(Dr),l=ji.dot(hd),u=Dr.dot(Dr),c=Dr.dot(hd),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,m=(o*c-a*l)*h;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nr)===null?!1:Nr.x>=0&&Nr.y>=0&&Nr.x+Nr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nr.x),l.addScaledVector(o,Nr.y),l.addScaledVector(a,Nr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return gd.setScalar(0),_d.setScalar(0),vd.setScalar(0),gd.fromBufferAttribute(e,t),_d.fromBufferAttribute(e,i),vd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(gd,s.x),o.addScaledVector(_d,s.y),o.addScaledVector(vd,s.z),o}static isFrontFacing(e,t,i,r){return ji.subVectors(i,t),Dr.subVectors(e,t),ji.cross(Dr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),ji.cross(Dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Oi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;jo.subVectors(r,i),$o.subVectors(s,i),dd.subVectors(e,i);const l=jo.dot(dd),u=$o.dot(dd);if(l<=0&&u<=0)return t.copy(i);pd.subVectors(e,r);const c=jo.dot(pd),f=$o.dot(pd);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(jo,o);md.subVectors(e,s);const p=jo.dot(md),m=$o.dot(md);if(m>=0&&p<=m)return t.copy(s);const v=p*u-l*m;if(v<=0&&u>=0&&m<=0)return a=u/(u-m),t.copy(i).addScaledVector($o,a);const _=c*m-p*f;if(_<=0&&f-c>=0&&p-m>=0)return vv.subVectors(s,r),a=(f-c)/(f-c+(p-m)),t.copy(r).addScaledVector(vv,a);const d=1/(_+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(jo,o).addScaledVector($o,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Iu{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$i):$i.fromBufferAttribute(s,o),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dc.copy(i.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xl),pc.subVectors(this.max,xl),Ko.subVectors(e.a,xl),Zo.subVectors(e.b,xl),Jo.subVectors(e.c,xl),cs.subVectors(Zo,Ko),fs.subVectors(Jo,Zo),$s.subVectors(Ko,Jo);let t=[0,-cs.z,cs.y,0,-fs.z,fs.y,0,-$s.z,$s.y,cs.z,0,-cs.x,fs.z,0,-fs.x,$s.z,0,-$s.x,-cs.y,cs.x,0,-fs.y,fs.x,0,-$s.y,$s.x,0];return!xd(t,Ko,Zo,Jo,pc)||(t=[1,0,0,0,1,0,0,0,1],!xd(t,Ko,Zo,Jo,pc))?!1:(mc.crossVectors(cs,fs),t=[mc.x,mc.y,mc.z],xd(t,Ko,Zo,Jo,pc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ir=[new N,new N,new N,new N,new N,new N,new N,new N],$i=new N,dc=new Iu,Ko=new N,Zo=new N,Jo=new N,cs=new N,fs=new N,$s=new N,xl=new N,pc=new N,mc=new N,Ks=new N;function xd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ks.fromArray(n,s);const a=r.x*Math.abs(Ks.x)+r.y*Math.abs(Ks.y)+r.z*Math.abs(Ks.z),l=e.dot(Ks),u=t.dot(Ks),c=i.dot(Ks);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const rn=new N,gc=new Re;let IA=0;class Gi extends Do{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=iv,this.updateRanges=[],this.gpuType=yr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXY(t,gc.x,gc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ra(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ra(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ra(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ra(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ra(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),r=Hn(r,this.array),s=Hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class lM extends Gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class uM extends Gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends Gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const UA=new Iu,yl=new N,yd=new N;class Uu{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):UA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yl.subVectors(e,this.center);const t=yl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yl.copy(e.center).add(yd)),this.expandByPoint(yl.copy(e.center).sub(yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let FA=0;const Li=new Vt,Sd=new cn,Qo=new N,pi=new Iu,Sl=new Iu,vn=new N;class nn extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eA(e)?uM:lM)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,i){return Li.makeTranslation(e,t,i),this.applyMatrix4(Li),this}scale(e,t,i){return Li.makeScale(e,t,i),this.applyMatrix4(Li),this}lookAt(e){return Sd.lookAt(e),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Iu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Sl.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(pi.min,Sl.min),pi.expandByPoint(vn),vn.addVectors(pi.max,Sl.max),pi.expandByPoint(vn)):(pi.expandByPoint(Sl.min),pi.expandByPoint(Sl.max))}pi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)vn.fromBufferAttribute(a,u),l&&(Qo.fromBufferAttribute(e,u),vn.add(Qo)),r=Math.max(r,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new N,l[y]=new N;const u=new N,c=new N,f=new N,h=new Re,p=new Re,m=new Re,v=new N,_=new N;function d(y,w,b){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,b),h.fromBufferAttribute(s,y),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,b),c.sub(u),f.sub(u),p.sub(h),m.sub(h);const P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(P),_.copy(f).multiplyScalar(p.x).addScaledVector(c,-m.x).multiplyScalar(P),a[y].add(v),a[w].add(v),a[b].add(v),l[y].add(_),l[w].add(_),l[b].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,w=g.length;y<w;++y){const b=g[y],P=b.start,I=b.count;for(let z=P,H=P+I;z<H;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new N,S=new N,T=new N,E=new N;function A(y){T.fromBufferAttribute(r,y),E.copy(T);const w=a[y];x.copy(w),x.sub(T.multiplyScalar(T.dot(w))).normalize(),S.crossVectors(E,w);const P=S.dot(l[y])<0?-1:1;o.setXYZW(y,x.x,x.y,x.z,P)}for(let y=0,w=g.length;y<w;++y){const b=g[y],P=b.start,I=b.count;for(let z=P,H=P+I;z<H;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const m=e.getX(h+0),v=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,m=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*c;for(let d=0;d<c;d++)h[m++]=u[p++]}return new Gi(h,c,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let OA=0;class Qa extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OA++}),this.uuid=No(),this.name="",this.type="Material",this.blending=Aa,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bp,this.blendDst=Vp,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Aa&&(i.blending=this.blending),this.side!==ks&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bp&&(i.blendSrc=this.blendSrc),this.blendDst!==Vp&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ho&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ho&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ho&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ur=new N,Md=new N,_c=new N,hs=new N,Ed=new N,vc=new N,Td=new N;class ng{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ur.copy(this.origin).addScaledVector(this.direction,t),Ur.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Md.copy(e).add(t).multiplyScalar(.5),_c.copy(t).sub(e).normalize(),hs.copy(this.origin).sub(Md);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_c),a=hs.dot(this.direction),l=-hs.dot(_c),u=hs.lengthSq(),c=Math.abs(1-o*o);let f,h,p,m;if(c>0)if(f=o*l-a,h=o*a-l,m=s*c,f>=0)if(h>=-m)if(h<=m){const v=1/c;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-m?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Md).addScaledVector(_c,h),p}intersectSphere(e,t){Ur.subVectors(e.center,this.origin);const i=Ur.dot(this.direction),r=Ur.dot(Ur)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ur)!==null}intersectTriangle(e,t,i,r,s){Ed.subVectors(t,e),vc.subVectors(i,e),Td.crossVectors(Ed,vc);let o=this.direction.dot(Td),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hs.subVectors(this.origin,e);const l=a*this.direction.dot(vc.crossVectors(hs,vc));if(l<0)return null;const u=a*this.direction.dot(Ed.cross(hs));if(u<0||l+u>o)return null;const c=-a*hs.dot(Td);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt extends Qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ro,this.combine=GS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xv=new Vt,Zs=new ng,xc=new Uu,yv=new N,yc=new N,Sc=new N,Mc=new N,wd=new N,Ec=new N,Sv=new N,Tc=new N;class Et extends cn{constructor(e=new nn,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ec.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(wd.fromBufferAttribute(f,e),o?Ec.addScaledVector(wd,c):Ec.addScaledVector(wd.sub(t),c))}t.add(Ec)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(s),Zs.copy(e.ray).recast(e.near),!(xc.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(xc,yv)===null||Zs.origin.distanceToSquared(yv)>(e.far-e.near)**2))&&(xv.copy(s).invert(),Zs.copy(e.ray).applyMatrix4(xv),!(i.boundingBox!==null&&Zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const _=h[m],d=o[_.materialIndex],g=Math.max(_.start,p.start),x=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let S=g,T=x;S<T;S+=3){const E=a.getX(S),A=a.getX(S+1),y=a.getX(S+2);r=wc(this,d,e,i,u,c,f,E,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let _=m,d=v;_<d;_+=3){const g=a.getX(_),x=a.getX(_+1),S=a.getX(_+2);r=wc(this,o,e,i,u,c,f,g,x,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const _=h[m],d=o[_.materialIndex],g=Math.max(_.start,p.start),x=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=g,T=x;S<T;S+=3){const E=S,A=S+1,y=S+2;r=wc(this,d,e,i,u,c,f,E,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let _=m,d=v;_<d;_+=3){const g=_,x=_+1,S=_+2;r=wc(this,o,e,i,u,c,f,g,x,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function kA(n,e,t,i,r,s,o,a){let l;if(e.side===ii?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ks,a),l===null)return null;Tc.copy(a),Tc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Tc);return u<t.near||u>t.far?null:{distance:u,point:Tc.clone(),object:n}}function wc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,yc),n.getVertexPosition(l,Sc),n.getVertexPosition(u,Mc);const c=kA(n,e,t,i,yc,Sc,Mc,Sv);if(c){const f=new N;Oi.getBarycoord(Sv,yc,Sc,Mc,f),r&&(c.uv=Oi.getInterpolatedAttribute(r,a,l,u,f,new Re)),s&&(c.uv1=Oi.getInterpolatedAttribute(s,a,l,u,f,new Re)),o&&(c.normal=Oi.getInterpolatedAttribute(o,a,l,u,f,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new N,materialIndex:0};Oi.getNormal(yc,Sc,Mc,h.normal),c.face=h,c.barycoord=f}return c}class zA extends zn{constructor(e=null,t=1,i=1,r,s,o,a,l,u=wn,c=wn,f,h){super(null,o,a,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=new N,BA=new N,VA=new et;class ro{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ad.subVectors(i,t).cross(BA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Ad),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||VA.getNormalMatrix(e),r=this.coplanarPoint(Ad).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new Uu,GA=new Re(.5,.5),Ac=new N;class ig{constructor(e=new ro,t=new ro,i=new ro,r=new ro,s=new ro,o=new ro){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],f=s[5],h=s[6],p=s[7],m=s[8],v=s[9],_=s[10],d=s[11],g=s[12],x=s[13],S=s[14],T=s[15];if(r[0].setComponents(u-o,p-c,d-m,T-g).normalize(),r[1].setComponents(u+o,p+c,d+m,T+g).normalize(),r[2].setComponents(u+a,p+f,d+v,T+x).normalize(),r[3].setComponents(u-a,p-f,d-v,T-x).normalize(),i)r[4].setComponents(l,h,_,S).normalize(),r[5].setComponents(u-l,p-h,d-_,T-S).normalize();else if(r[4].setComponents(u-l,p-h,d-_,T-S).normalize(),t===Sr)r[5].setComponents(u+l,p+h,d+_,T+S).normalize();else if(t===gu)r[5].setComponents(l,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);const t=GA.distanceTo(e.center);return Js.radius=.7071067811865476+t,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ac.x=r.normal.x>0?e.max.x:e.min.x,Ac.y=r.normal.y>0?e.max.y:e.min.y,Ac.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mr extends Qa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zf=new N,Bf=new N,Mv=new Vt,Ml=new ng,Cc=new Uu,Cd=new N,Ev=new N;class cM extends cn{constructor(e=new nn,t=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)zf.fromBufferAttribute(t,r-1),Bf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=zf.distanceTo(Bf);e.setAttribute("lineDistance",new Ct(i,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(r),Cc.radius+=s,e.ray.intersectsSphere(Cc)===!1)return;Mv.copy(r).invert(),Ml.copy(e.ray).applyMatrix4(Mv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=p,_=m-1;v<_;v+=u){const d=c.getX(v),g=c.getX(v+1),x=Rc(this,e,Ml,l,d,g,v);x&&t.push(x)}if(this.isLineLoop){const v=c.getX(m-1),_=c.getX(p),d=Rc(this,e,Ml,l,v,_,m-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=p,_=m-1;v<_;v+=u){const d=Rc(this,e,Ml,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=Rc(this,e,Ml,l,m-1,p,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rc(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(zf.fromBufferAttribute(a,r),Bf.fromBufferAttribute(a,s),t.distanceSqToSegment(zf,Bf,Cd,Ev)>i)return;Cd.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Cd);if(!(u<e.near||u>e.far))return{distance:u,point:Ev.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Tv=new N,wv=new N;class ps extends cM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Tv.fromBufferAttribute(t,r),wv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Tv.distanceTo(wv);e.setAttribute("lineDistance",new Ct(i,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rm extends Qa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Av=new Vt,bm=new ng,bc=new Uu,Pc=new N;class Cv extends cn{constructor(e=new nn,t=new Rm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(r),bc.radius+=s,e.ray.intersectsSphere(bc)===!1)return;Av.copy(r).invert(),bm.copy(e.ray).applyMatrix4(Av);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=h,v=p;m<v;m++){const _=u.getX(m);Pc.fromBufferAttribute(f,_),Rv(Pc,_,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let m=h,v=p;m<v;m++)Pc.fromBufferAttribute(f,m),Rv(Pc,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rv(n,e,t,i,r,s,o){const a=bm.distanceSqToPoint(n);if(a<t){const l=new N;bm.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fM extends zn{constructor(e=[],t=Ao,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HA extends zn{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Va extends zn{constructor(e,t,i=Cr,r,s,o,a=wn,l=wn,u,c=Jr,f=1){if(c!==Jr&&c!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class WA extends Va{constructor(e,t=Cr,i=Ao,r,s,o=wn,a=wn,l,u=Jr){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,r,s,o,a,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hM extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Un extends nn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(f,2));function m(v,_,d,g,x,S,T,E,A,y,w){const b=S/A,P=T/y,I=S/2,z=T/2,H=E/2,D=A+1,B=y+1;let F=0,k=0;const Y=new N;for(let $=0;$<B;$++){const J=$*P-z;for(let ee=0;ee<D;ee++){const Be=ee*b-I;Y[v]=Be*g,Y[_]=J*x,Y[d]=H,u.push(Y.x,Y.y,Y.z),Y[v]=0,Y[_]=0,Y[d]=E>0?1:-1,c.push(Y.x,Y.y,Y.z),f.push(ee/A),f.push(1-$/y),F+=1}}for(let $=0;$<y;$++)for(let J=0;J<A;J++){const ee=h+J+D*$,Be=h+J+D*($+1),Me=h+(J+1)+D*($+1),pe=h+(J+1)+D*$;l.push(ee,Be,pe),l.push(Be,Me,pe),k+=6}a.addGroup(p,k,w),p+=k,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kn extends nn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],h=[],p=[];let m=0;const v=[],_=i/2;let d=0;g(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new Ct(f,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(p,2));function g(){const S=new N,T=new N;let E=0;const A=(t-e)/i;for(let y=0;y<=s;y++){const w=[],b=y/s,P=b*(t-e)+e;for(let I=0;I<=r;I++){const z=I/r,H=z*l+a,D=Math.sin(H),B=Math.cos(H);T.x=P*D,T.y=-b*i+_,T.z=P*B,f.push(T.x,T.y,T.z),S.set(D,A,B).normalize(),h.push(S.x,S.y,S.z),p.push(z,1-b),w.push(m++)}v.push(w)}for(let y=0;y<r;y++)for(let w=0;w<s;w++){const b=v[w][y],P=v[w+1][y],I=v[w+1][y+1],z=v[w][y+1];(e>0||w!==0)&&(c.push(b,P,z),E+=3),(t>0||w!==s-1)&&(c.push(P,I,z),E+=3)}u.addGroup(d,E,0),d+=E}function x(S){const T=m,E=new Re,A=new N;let y=0;const w=S===!0?e:t,b=S===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,_*b,0),h.push(0,b,0),p.push(.5,.5),m++;const P=m;for(let I=0;I<=r;I++){const H=I/r*l+a,D=Math.cos(H),B=Math.sin(H);A.x=w*B,A.y=_*b,A.z=w*D,f.push(A.x,A.y,A.z),h.push(0,b,0),E.x=D*.5+.5,E.y=B*.5*b+.5,p.push(E.x,E.y),m++}for(let I=0;I<r;I++){const z=T+I,H=P+I;S===!0?c.push(H,H+1,z):c.push(H+1,H,z),y+=3}u.addGroup(d,y,S===!0?1:2),d+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dh extends nn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(s.slice(),3)),this.setAttribute("uv",new Ct(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new N,S=new N,T=new N;for(let E=0;E<t.length;E+=3)p(t[E+0],x),p(t[E+1],S),p(t[E+2],T),l(x,S,T,g)}function l(g,x,S,T){const E=T+1,A=[];for(let y=0;y<=E;y++){A[y]=[];const w=g.clone().lerp(S,y/E),b=x.clone().lerp(S,y/E),P=E-y;for(let I=0;I<=P;I++)I===0&&y===E?A[y][I]=w:A[y][I]=w.clone().lerp(b,I/P)}for(let y=0;y<E;y++)for(let w=0;w<2*(E-y)-1;w++){const b=Math.floor(w/2);w%2===0?(h(A[y][b+1]),h(A[y+1][b]),h(A[y][b])):(h(A[y][b+1]),h(A[y+1][b+1]),h(A[y+1][b]))}}function u(g){const x=new N;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(g),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function c(){const g=new N;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const S=_(g)/2/Math.PI+.5,T=d(g)/Math.PI+.5;o.push(S,1-T)}m(),f()}function f(){for(let g=0;g<o.length;g+=6){const x=o[g+0],S=o[g+2],T=o[g+4],E=Math.max(x,S,T),A=Math.min(x,S,T);E>.9&&A<.1&&(x<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),T<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,x){const S=g*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function m(){const g=new N,x=new N,S=new N,T=new N,E=new Re,A=new Re,y=new Re;for(let w=0,b=0;w<s.length;w+=9,b+=6){g.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),E.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),y.set(o[b+4],o[b+5]),T.copy(g).add(x).add(S).divideScalar(3);const P=_(T);v(E,b+0,g,P),v(A,b+2,x,P),v(y,b+4,S,P)}}function v(g,x,S,T){T<0&&g.x===1&&(o[x]=g.x-1),S.x===0&&S.z===0&&(o[x]=T/2/Math.PI+.5)}function _(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.vertices,e.indices,e.radius,e.detail)}}const Lc=new N,Dc=new N,Rd=new N,Nc=new Oi;class Qs extends nn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Ca*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],c=["a","b","c"],f=new Array(3),h={},p=[];for(let m=0;m<l;m+=3){o?(u[0]=o.getX(m),u[1]=o.getX(m+1),u[2]=o.getX(m+2)):(u[0]=m,u[1]=m+1,u[2]=m+2);const{a:v,b:_,c:d}=Nc;if(v.fromBufferAttribute(a,u[0]),_.fromBufferAttribute(a,u[1]),d.fromBufferAttribute(a,u[2]),Nc.getNormal(Rd),f[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let g=0;g<3;g++){const x=(g+1)%3,S=f[g],T=f[x],E=Nc[c[g]],A=Nc[c[x]],y=`${S}_${T}`,w=`${T}_${S}`;w in h&&h[w]?(Rd.dot(h[w].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(A.x,A.y,A.z)),h[w]=null):y in h||(h[y]={index0:u[g],index1:u[x],normal:Rd.clone()})}}for(const m in h)if(h[m]){const{index0:v,index1:_}=h[m];Lc.fromBufferAttribute(a,v),Dc.fromBufferAttribute(a,_),p.push(Lc.x,Lc.y,Lc.z),p.push(Dc.x,Dc.y,Dc.z)}this.setAttribute("position",new Ct(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Pr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,p=(o-c)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Re:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new N,r=[],s=[],o=[],a=new N,l=new Vt;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new N)}s[0]=new N,o[0]=new N;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ot(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ot(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rg extends Pr{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=u-this.aY;l=h*c-p*f+this.aX,u=h*f+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class XA extends rg{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sg(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,p*=c,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const bv=new N,Pv=new N,bd=new sg,Pd=new sg,Ld=new sg;class YA extends Pr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new N){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Pv.subVectors(r[0],r[1]).add(r[0]),u=Pv);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(bv.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=bv),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(c),p);v<1e-4&&(v=1),m<1e-4&&(m=v),_<1e-4&&(_=v),bd.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,m,v,_),Pd.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,m,v,_),Ld.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,m,v,_)}else this.curveType==="catmullrom"&&(bd.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),Pd.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),Ld.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(bd.calc(l),Pd.calc(l),Ld.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lv(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function qA(n,e){const t=1-n;return t*t*e}function jA(n,e){return 2*(1-n)*n*e}function $A(n,e){return n*n*e}function Xl(n,e,t,i){return qA(n,e)+jA(n,t)+$A(n,i)}function KA(n,e){const t=1-n;return t*t*t*e}function ZA(n,e){const t=1-n;return 3*t*t*n*e}function JA(n,e){return 3*(1-n)*n*n*e}function QA(n,e){return n*n*n*e}function Yl(n,e,t,i,r){return KA(n,e)+ZA(n,t)+JA(n,i)+QA(n,r)}class dM extends Pr{constructor(e=new Re,t=new Re,i=new Re,r=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Re){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Yl(e,r.x,s.x,o.x,a.x),Yl(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class eC extends Pr{constructor(e=new N,t=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new N){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Yl(e,r.x,s.x,o.x,a.x),Yl(e,r.y,s.y,o.y,a.y),Yl(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pM extends Pr{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tC extends Pr{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mM extends Pr{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Xl(e,r.x,s.x,o.x),Xl(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nC extends Pr{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Xl(e,r.x,s.x,o.x),Xl(e,r.y,s.y,o.y),Xl(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gM extends Pr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Lv(a,l.x,u.x,c.x,f.x),Lv(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Re().fromArray(r))}return this}}var Pm=Object.freeze({__proto__:null,ArcCurve:XA,CatmullRomCurve3:YA,CubicBezierCurve:dM,CubicBezierCurve3:eC,EllipseCurve:rg,LineCurve:pM,LineCurve3:tC,QuadraticBezierCurve:mM,QuadraticBezierCurve3:nC,SplineCurve:gM});class iC extends Pr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pm[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Pm[r.type]().fromJSON(r))}return this}}class Dv extends iC{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new pM(this.currentPoint.clone(),new Re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new mM(this.currentPoint.clone(),new Re(e,t),new Re(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new dM(this.currentPoint.clone(),new Re(e,t),new Re(i,r),new Re(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new gM(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new rg(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Lm extends Dv{constructor(e){super(e),this.uuid=No(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Dv().fromJSON(r))}return this}}function rC(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=_M(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(i&&(s=uC(n,e,s,t)),n.length>80*t){a=n[0],l=n[1];let c=a,f=l;for(let h=t;h<r;h+=t){const p=n[h],m=n[h+1];p<a&&(a=p),m<l&&(l=m),p>c&&(c=p),m>f&&(f=m)}u=Math.max(c-a,f-l),u=u!==0?32767/u:0}return vu(s,o,t,a,l,u,0),o}function _M(n,e,t,i,r){let s;if(r===yC(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Nv(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Nv(o/i|0,n[o],n[o+1],s);return s&&Ga(s,s.next)&&(yu(s),s=s.next),s}function bo(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ga(t,t.next)||Yt(t.prev,t,t.next)===0)){if(yu(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function vu(n,e,t,i,r,s,o){if(!n)return;!o&&s&&pC(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,u=n.next;if(s?oC(n,i,r,s):sC(n)){e.push(l.i,n.i,u.i),yu(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=aC(bo(n),e),vu(n,e,t,i,r,s,2)):o===2&&lC(n,e,t,i,r,s):vu(bo(n),e,t,i,r,s,1);break}}}function sC(n){const e=n.prev,t=n,i=n.next;if(Yt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=Math.min(r,s,o),f=Math.min(a,l,u),h=Math.max(r,s,o),p=Math.max(a,l,u);let m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=h&&m.y>=f&&m.y<=p&&Ll(r,a,s,l,o,u,m.x,m.y)&&Yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function oC(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Yt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,h=o.y,p=Math.min(a,l,u),m=Math.min(c,f,h),v=Math.max(a,l,u),_=Math.max(c,f,h),d=Dm(p,m,e,t,i),g=Dm(v,_,e,t,i);let x=n.prevZ,S=n.nextZ;for(;x&&x.z>=d&&S&&S.z<=g;){if(x.x>=p&&x.x<=v&&x.y>=m&&x.y<=_&&x!==r&&x!==o&&Ll(a,c,l,f,u,h,x.x,x.y)&&Yt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=v&&S.y>=m&&S.y<=_&&S!==r&&S!==o&&Ll(a,c,l,f,u,h,S.x,S.y)&&Yt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=v&&x.y>=m&&x.y<=_&&x!==r&&x!==o&&Ll(a,c,l,f,u,h,x.x,x.y)&&Yt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=g;){if(S.x>=p&&S.x<=v&&S.y>=m&&S.y<=_&&S!==r&&S!==o&&Ll(a,c,l,f,u,h,S.x,S.y)&&Yt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function aC(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Ga(i,r)&&xM(i,t,t.next,r)&&xu(i,r)&&xu(r,i)&&(e.push(i.i,t.i,r.i),yu(t),yu(t.next),t=n=r),t=t.next}while(t!==n);return bo(t)}function lC(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_C(o,a)){let l=yM(o,a);o=bo(o,o.next),l=bo(l,l.next),vu(o,e,t,i,r,s,0),vu(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function uC(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=_M(n,a,l,i,!1);u===u.next&&(u.steiner=!0),r.push(gC(u))}r.sort(cC);for(let s=0;s<r.length;s++)t=fC(r[s],t);return t}function cC(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function fC(n,e){const t=hC(n,e);if(!t)return e;const i=yM(t,n);return bo(i,i.next),bo(t,t.next)}function hC(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Ga(n,t))return t;do{if(Ga(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,u=o.y;let c=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&vM(r<u?i:s,r,l,u,r<u?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);xu(t,n)&&(f<c||f===c&&(t.x>o.x||t.x===o.x&&dC(o,t)))&&(o=t,c=f)}t=t.next}while(t!==a);return o}function dC(n,e){return Yt(n.prev,n,e.prev)<0&&Yt(e.next,n,n.next)<0}function pC(n,e,t,i){let r=n;do r.z===0&&(r.z=Dm(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,mC(r)}function mC(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Dm(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function gC(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function vM(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Ll(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&vM(n,e,t,i,r,s,o,a)}function _C(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!vC(n,e)&&(xu(n,e)&&xu(e,n)&&xC(n,e)&&(Yt(n.prev,n,e.prev)||Yt(n,e.prev,e))||Ga(n,e)&&Yt(n.prev,n,n.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ga(n,e){return n.x===e.x&&n.y===e.y}function xM(n,e,t,i){const r=Uc(Yt(n,e,t)),s=Uc(Yt(n,e,i)),o=Uc(Yt(t,i,n)),a=Uc(Yt(t,i,e));return!!(r!==s&&o!==a||r===0&&Ic(n,t,e)||s===0&&Ic(n,i,e)||o===0&&Ic(t,n,i)||a===0&&Ic(t,e,i))}function Ic(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Uc(n){return n>0?1:n<0?-1:0}function vC(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&xM(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function xu(n,e){return Yt(n.prev,n,n.next)<0?Yt(n,e,n.next)>=0&&Yt(n,n.prev,e)>=0:Yt(n,e,n.prev)<0||Yt(n,n.next,e)<0}function xC(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function yM(n,e){const t=Nm(n.i,n.x,n.y),i=Nm(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Nv(n,e,t,i){const r=Nm(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function yu(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nm(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yC(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class SC{static triangulate(e,t,i=2){return rC(e,t,i)}}class _a{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return _a.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Iv(e),Uv(i,e);let o=e.length;t.forEach(Iv);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Uv(i,t[l]);const a=SC.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Iv(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Uv(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Vf extends nn{constructor(e=new Lm([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Ct(r,3)),this.setAttribute("uv",new Ct(s,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:MC;let x,S=!1,T,E,A,y;if(d){x=d.getSpacedPoints(c),S=!0,h=!1;const ne=d.isCatmullRomCurve3?d.closed:!1;T=d.computeFrenetFrames(c,ne),E=new N,A=new N,y=new N}h||(_=0,p=0,m=0,v=0);const w=a.extractPoints(u);let b=w.shape;const P=w.holes;if(!_a.isClockWise(b)){b=b.reverse();for(let ne=0,ce=P.length;ne<ce;ne++){const ie=P[ne];_a.isClockWise(ie)&&(P[ne]=ie.reverse())}}function z(ne){const ie=10000000000000001e-36;let Ee=ne[0];for(let ye=1;ye<=ne.length;ye++){const Ye=ye%ne.length,L=ne[Ye],je=L.x-Ee.x,Ie=L.y-Ee.y,He=je*je+Ie*Ie,fe=Math.max(Math.abs(L.x),Math.abs(L.y),Math.abs(Ee.x),Math.abs(Ee.y)),pt=ie*fe*fe;if(He<=pt){ne.splice(Ye,1),ye--;continue}Ee=L}}z(b),P.forEach(z);const H=P.length,D=b;for(let ne=0;ne<H;ne++){const ce=P[ne];b=b.concat(ce)}function B(ne,ce,ie){return ce||mt("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ce,ie)}const F=b.length;function k(ne,ce,ie){let Ee,ye,Ye;const L=ne.x-ce.x,je=ne.y-ce.y,Ie=ie.x-ne.x,He=ie.y-ne.y,fe=L*L+je*je,pt=L*He-je*Ie;if(Math.abs(pt)>Number.EPSILON){const R=Math.sqrt(fe),M=Math.sqrt(Ie*Ie+He*He),V=ce.x-je/R,j=ce.y+L/R,re=ie.x-He/M,ue=ie.y+Ie/M,_e=((re-V)*He-(ue-j)*Ie)/(L*He-je*Ie);Ee=V+L*_e-ne.x,ye=j+je*_e-ne.y;const q=Ee*Ee+ye*ye;if(q<=2)return new Re(Ee,ye);Ye=Math.sqrt(q/2)}else{let R=!1;L>Number.EPSILON?Ie>Number.EPSILON&&(R=!0):L<-Number.EPSILON?Ie<-Number.EPSILON&&(R=!0):Math.sign(je)===Math.sign(He)&&(R=!0),R?(Ee=-je,ye=L,Ye=Math.sqrt(fe)):(Ee=L,ye=je,Ye=Math.sqrt(fe/2))}return new Re(Ee/Ye,ye/Ye)}const Y=[];for(let ne=0,ce=D.length,ie=ce-1,Ee=ne+1;ne<ce;ne++,ie++,Ee++)ie===ce&&(ie=0),Ee===ce&&(Ee=0),Y[ne]=k(D[ne],D[ie],D[Ee]);const $=[];let J,ee=Y.concat();for(let ne=0,ce=H;ne<ce;ne++){const ie=P[ne];J=[];for(let Ee=0,ye=ie.length,Ye=ye-1,L=Ee+1;Ee<ye;Ee++,Ye++,L++)Ye===ye&&(Ye=0),L===ye&&(L=0),J[Ee]=k(ie[Ee],ie[Ye],ie[L]);$.push(J),ee=ee.concat(J)}let Be;if(_===0)Be=_a.triangulateShape(D,P);else{const ne=[],ce=[];for(let ie=0;ie<_;ie++){const Ee=ie/_,ye=p*Math.cos(Ee*Math.PI/2),Ye=m*Math.sin(Ee*Math.PI/2)+v;for(let L=0,je=D.length;L<je;L++){const Ie=B(D[L],Y[L],Ye);Ue(Ie.x,Ie.y,-ye),Ee===0&&ne.push(Ie)}for(let L=0,je=H;L<je;L++){const Ie=P[L];J=$[L];const He=[];for(let fe=0,pt=Ie.length;fe<pt;fe++){const R=B(Ie[fe],J[fe],Ye);Ue(R.x,R.y,-ye),Ee===0&&He.push(R)}Ee===0&&ce.push(He)}}Be=_a.triangulateShape(ne,ce)}const Me=Be.length,pe=m+v;for(let ne=0;ne<F;ne++){const ce=h?B(b[ne],ee[ne],pe):b[ne];S?(A.copy(T.normals[0]).multiplyScalar(ce.x),E.copy(T.binormals[0]).multiplyScalar(ce.y),y.copy(x[0]).add(A).add(E),Ue(y.x,y.y,y.z)):Ue(ce.x,ce.y,0)}for(let ne=1;ne<=c;ne++)for(let ce=0;ce<F;ce++){const ie=h?B(b[ce],ee[ce],pe):b[ce];S?(A.copy(T.normals[ne]).multiplyScalar(ie.x),E.copy(T.binormals[ne]).multiplyScalar(ie.y),y.copy(x[ne]).add(A).add(E),Ue(y.x,y.y,y.z)):Ue(ie.x,ie.y,f/c*ne)}for(let ne=_-1;ne>=0;ne--){const ce=ne/_,ie=p*Math.cos(ce*Math.PI/2),Ee=m*Math.sin(ce*Math.PI/2)+v;for(let ye=0,Ye=D.length;ye<Ye;ye++){const L=B(D[ye],Y[ye],Ee);Ue(L.x,L.y,f+ie)}for(let ye=0,Ye=P.length;ye<Ye;ye++){const L=P[ye];J=$[ye];for(let je=0,Ie=L.length;je<Ie;je++){const He=B(L[je],J[je],Ee);S?Ue(He.x,He.y+x[c-1].y,x[c-1].x+ie):Ue(He.x,He.y,f+ie)}}}K(),Se();function K(){const ne=r.length/3;if(h){let ce=0,ie=F*ce;for(let Ee=0;Ee<Me;Ee++){const ye=Be[Ee];Ge(ye[2]+ie,ye[1]+ie,ye[0]+ie)}ce=c+_*2,ie=F*ce;for(let Ee=0;Ee<Me;Ee++){const ye=Be[Ee];Ge(ye[0]+ie,ye[1]+ie,ye[2]+ie)}}else{for(let ce=0;ce<Me;ce++){const ie=Be[ce];Ge(ie[2],ie[1],ie[0])}for(let ce=0;ce<Me;ce++){const ie=Be[ce];Ge(ie[0]+F*c,ie[1]+F*c,ie[2]+F*c)}}i.addGroup(ne,r.length/3-ne,0)}function Se(){const ne=r.length/3;let ce=0;me(D,ce),ce+=D.length;for(let ie=0,Ee=P.length;ie<Ee;ie++){const ye=P[ie];me(ye,ce),ce+=ye.length}i.addGroup(ne,r.length/3-ne,1)}function me(ne,ce){let ie=ne.length;for(;--ie>=0;){const Ee=ie;let ye=ie-1;ye<0&&(ye=ne.length-1);for(let Ye=0,L=c+_*2;Ye<L;Ye++){const je=F*Ye,Ie=F*(Ye+1),He=ce+Ee+je,fe=ce+ye+je,pt=ce+ye+Ie,R=ce+Ee+Ie;Ve(He,fe,pt,R)}}}function Ue(ne,ce,ie){l.push(ne),l.push(ce),l.push(ie)}function Ge(ne,ce,ie){ut(ne),ut(ce),ut(ie);const Ee=r.length/3,ye=g.generateTopUV(i,r,Ee-3,Ee-2,Ee-1);Xe(ye[0]),Xe(ye[1]),Xe(ye[2])}function Ve(ne,ce,ie,Ee){ut(ne),ut(ce),ut(Ee),ut(ce),ut(ie),ut(Ee);const ye=r.length/3,Ye=g.generateSideWallUV(i,r,ye-6,ye-3,ye-2,ye-1);Xe(Ye[0]),Xe(Ye[1]),Xe(Ye[3]),Xe(Ye[1]),Xe(Ye[2]),Xe(Ye[3])}function ut(ne){r.push(l[ne*3+0]),r.push(l[ne*3+1]),r.push(l[ne*3+2])}function Xe(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return EC(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Pm[r.type]().fromJSON(r)),new Vf(i,e.options)}}const MC={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new Re(s,o),new Re(a,l),new Re(u,c)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],m=e[r*3+2],v=e[s*3],_=e[s*3+1],d=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new Re(o,1-l),new Re(u,1-f),new Re(h,1-m),new Re(v,1-d)]:[new Re(a,1-l),new Re(c,1-f),new Re(p,1-m),new Re(_,1-d)]}};function EC(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class og extends dh{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new og(e.radius,e.detail)}}class ag extends dh{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ag(e.radius,e.detail)}}class Fu extends nn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],m=[],v=[],_=[];for(let d=0;d<c;d++){const g=d*h-o;for(let x=0;x<u;x++){const S=x*f-s;m.push(S,-g,0),v.push(0,0,1),_.push(x/a),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const x=g+u*d,S=g+u*(d+1),T=g+1+u*(d+1),E=g+1+u*d;p.push(x,S,E),p.push(S,T,E)}this.setIndex(p),this.setAttribute("position",new Ct(m,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.width,e.height,e.widthSegments,e.heightSegments)}}class ql extends nn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new N,h=new N,p=[],m=[],v=[],_=[];for(let d=0;d<=i;d++){const g=[],x=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const E=T/t;f.x=-e*Math.cos(r+E*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+E*s)*Math.sin(o+x*a),m.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),_.push(E+S,1-x),g.push(u++)}c.push(g)}for(let d=0;d<i;d++)for(let g=0;g<t;g++){const x=c[d][g+1],S=c[d][g],T=c[d+1][g],E=c[d+1][g+1];(d!==0||o>0)&&p.push(x,S,E),(d!==i-1||l<Math.PI)&&p.push(S,T,E)}this.setIndex(p),this.setAttribute("position",new Ct(m,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lg extends nn{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],u=[],c=[],f=new N,h=new N,p=new N,m=new N,v=new N,_=new N,d=new N;for(let x=0;x<=i;++x){const S=x/i*s*Math.PI*2;g(S,s,o,e,p),g(S+.01,s,o,e,m),_.subVectors(m,p),d.addVectors(m,p),v.crossVectors(_,d),d.crossVectors(v,_),v.normalize(),d.normalize();for(let T=0;T<=r;++T){const E=T/r*Math.PI*2,A=-t*Math.cos(E),y=t*Math.sin(E);f.x=p.x+(A*d.x+y*v.x),f.y=p.y+(A*d.y+y*v.y),f.z=p.z+(A*d.z+y*v.z),l.push(f.x,f.y,f.z),h.subVectors(f,p).normalize(),u.push(h.x,h.y,h.z),c.push(x/i),c.push(T/r)}}for(let x=1;x<=i;x++)for(let S=1;S<=r;S++){const T=(r+1)*(x-1)+(S-1),E=(r+1)*x+(S-1),A=(r+1)*x+S,y=(r+1)*(x-1)+S;a.push(T,E,y),a.push(E,A,y)}this.setIndex(a),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(c,2));function g(x,S,T,E,A){const y=Math.cos(x),w=Math.sin(x),b=T/S*x,P=Math.cos(b);A.x=E*(2+P)*.5*y,A.y=E*(2+P)*w*.5,A.z=E*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lg(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Ha(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Fv(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Fv(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Wn(n){const e={};for(let t=0;t<n.length;t++){const i=Ha(n[t]);for(const r in i)e[r]=i[r]}return e}function Fv(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function TC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function SM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const wC={clone:Ha,merge:Wn};var AC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends Qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AC,this.fragmentShader=CC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ha(e.uniforms),this.uniformsGroups=TC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class RC extends Rr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bC extends Qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PC extends Qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class MM extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Dd=new Vt,Ov=new N,kv=new N;class LC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ig,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ov.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ov),kv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kv),t.updateMatrixWorld(),Dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===gu||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fc=new N,Oc=new Ja,hr=new N;class EM extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fc,Oc,hr),hr.x===1&&hr.y===1&&hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Oc,hr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Fc,Oc,hr),hr.x===1&&hr.y===1&&hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Oc,hr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ds=new N,zv=new Re,Bv=new Re;class Fi extends EM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_u*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _u*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,zv,Bv),t.subVectors(Bv,zv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ug extends EM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class DC extends LC{constructor(){super(new ug(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class NC extends MM{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new DC}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class IC extends MM{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ea=-90,ta=1;class UC extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fi(ea,ta,e,t);r.layers=this.layers,this.add(r);const s=new Fi(ea,ta,e,t);s.layers=this.layers,this.add(s);const o=new Fi(ea,ta,e,t);o.layers=this.layers,this.add(o);const a=new Fi(ea,ta,e,t);a.layers=this.layers,this.add(a);const l=new Fi(ea,ta,e,t);l.layers=this.layers,this.add(l);const u=new Fi(ea,ta,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Sr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class FC extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dg=class Dg{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Dg.prototype.isMatrix2=!0;let Vv=Dg;class OC extends ps{constructor(e=10,t=10,i=4473924,r=8947848){i=new it(i),r=new it(r);const s=t/2,o=e/t,a=e/2,l=[],u=[];for(let h=0,p=0,m=-a;h<=t;h++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const v=h===s?i:r;v.toArray(u,p),p+=3,v.toArray(u,p),p+=3,v.toArray(u,p),p+=3,v.toArray(u,p),p+=3}const c=new nn;c.setAttribute("position",new Ct(l,3)),c.setAttribute("color",new Ct(u,3));const f=new mr({vertexColors:!0,toneMapped:!1});super(c,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Gv(n,e,t,i){const r=kC(i);switch(t){case tM:return n*e;case iM:return n*e/r.components*r.byteLength;case j0:return n*e/r.components*r.byteLength;case Co:return n*e*2/r.components*r.byteLength;case $0:return n*e*2/r.components*r.byteLength;case nM:return n*e*3/r.components*r.byteLength;case Qi:return n*e*4/r.components*r.byteLength;case K0:return n*e*4/r.components*r.byteLength;case ef:case tf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nf:case rf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jp:case em:return Math.max(n,16)*Math.max(e,8)/4;case Zp:case Qp:return Math.max(n,8)*Math.max(e,8)/2;case tm:case nm:case rm:case sm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case im:case If:case om:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case am:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case um:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _m:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ym:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sm:case Mm:case Em:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tm:case wm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Uf:case Am:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kC(n){switch(n){case _i:case ZS:return{byteLength:1,components:1};case pu:case JS:case Zr:return{byteLength:2,components:1};case Y0:case q0:return{byteLength:2,components:4};case Cr:case X0:case yr:return{byteLength:4,components:1};case QS:case eM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:W0}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=W0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function TM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function zC(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,m)=>p.start-m.start);let h=0;for(let p=1;p<f.length;p++){const m=f[h],v=f[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,m=f.length;p<m;p++){const v=f[p];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var BC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$C=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gR="gl_FragColor = linearToOutputTexel( gl_FragColor );",_R=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,SR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ER=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,DR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GR=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,HR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$R=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ub=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,db=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ub=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:BC,alphahash_pars_fragment:VC,alphamap_fragment:GC,alphamap_pars_fragment:HC,alphatest_fragment:WC,alphatest_pars_fragment:XC,aomap_fragment:YC,aomap_pars_fragment:qC,batching_pars_vertex:jC,batching_vertex:$C,begin_vertex:KC,beginnormal_vertex:ZC,bsdfs:JC,iridescence_fragment:QC,bumpmap_pars_fragment:eR,clipping_planes_fragment:tR,clipping_planes_pars_fragment:nR,clipping_planes_pars_vertex:iR,clipping_planes_vertex:rR,color_fragment:sR,color_pars_fragment:oR,color_pars_vertex:aR,color_vertex:lR,common:uR,cube_uv_reflection_fragment:cR,defaultnormal_vertex:fR,displacementmap_pars_vertex:hR,displacementmap_vertex:dR,emissivemap_fragment:pR,emissivemap_pars_fragment:mR,colorspace_fragment:gR,colorspace_pars_fragment:_R,envmap_fragment:vR,envmap_common_pars_fragment:xR,envmap_pars_fragment:yR,envmap_pars_vertex:SR,envmap_physical_pars_fragment:DR,envmap_vertex:MR,fog_vertex:ER,fog_pars_vertex:TR,fog_fragment:wR,fog_pars_fragment:AR,gradientmap_pars_fragment:CR,lightmap_pars_fragment:RR,lights_lambert_fragment:bR,lights_lambert_pars_fragment:PR,lights_pars_begin:LR,lights_toon_fragment:NR,lights_toon_pars_fragment:IR,lights_phong_fragment:UR,lights_phong_pars_fragment:FR,lights_physical_fragment:OR,lights_physical_pars_fragment:kR,lights_fragment_begin:zR,lights_fragment_maps:BR,lights_fragment_end:VR,lightprobes_pars_fragment:GR,logdepthbuf_fragment:HR,logdepthbuf_pars_fragment:WR,logdepthbuf_pars_vertex:XR,logdepthbuf_vertex:YR,map_fragment:qR,map_pars_fragment:jR,map_particle_fragment:$R,map_particle_pars_fragment:KR,metalnessmap_fragment:ZR,metalnessmap_pars_fragment:JR,morphinstance_vertex:QR,morphcolor_vertex:eb,morphnormal_vertex:tb,morphtarget_pars_vertex:nb,morphtarget_vertex:ib,normal_fragment_begin:rb,normal_fragment_maps:sb,normal_pars_fragment:ob,normal_pars_vertex:ab,normal_vertex:lb,normalmap_pars_fragment:ub,clearcoat_normal_fragment_begin:cb,clearcoat_normal_fragment_maps:fb,clearcoat_pars_fragment:hb,iridescence_pars_fragment:db,opaque_fragment:pb,packing:mb,premultiplied_alpha_fragment:gb,project_vertex:_b,dithering_fragment:vb,dithering_pars_fragment:xb,roughnessmap_fragment:yb,roughnessmap_pars_fragment:Sb,shadowmap_pars_fragment:Mb,shadowmap_pars_vertex:Eb,shadowmap_vertex:Tb,shadowmask_pars_fragment:wb,skinbase_vertex:Ab,skinning_pars_vertex:Cb,skinning_vertex:Rb,skinnormal_vertex:bb,specularmap_fragment:Pb,specularmap_pars_fragment:Lb,tonemapping_fragment:Db,tonemapping_pars_fragment:Nb,transmission_fragment:Ib,transmission_pars_fragment:Ub,uv_pars_fragment:Fb,uv_pars_vertex:Ob,uv_vertex:kb,worldpos_vertex:zb,background_vert:Bb,background_frag:Vb,backgroundCube_vert:Gb,backgroundCube_frag:Hb,cube_vert:Wb,cube_frag:Xb,depth_vert:Yb,depth_frag:qb,distance_vert:jb,distance_frag:$b,equirect_vert:Kb,equirect_frag:Zb,linedashed_vert:Jb,linedashed_frag:Qb,meshbasic_vert:e2,meshbasic_frag:t2,meshlambert_vert:n2,meshlambert_frag:i2,meshmatcap_vert:r2,meshmatcap_frag:s2,meshnormal_vert:o2,meshnormal_frag:a2,meshphong_vert:l2,meshphong_frag:u2,meshphysical_vert:c2,meshphysical_frag:f2,meshtoon_vert:h2,meshtoon_frag:d2,points_vert:p2,points_frag:m2,shadow_vert:g2,shadow_frag:_2,sprite_vert:v2,sprite_frag:x2},Ce={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},_r={basic:{uniforms:Wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Wn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Wn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new it(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Wn([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Wn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Wn([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Wn([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Wn([Ce.common,Ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Wn([Ce.lights,Ce.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};_r.physical={uniforms:Wn([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const kc={r:0,b:0,g:0},y2=new Vt,wM=new et;wM.set(-1,0,0,0,1,0,0,0,1);function S2(n,e,t,i,r,s){const o=new it(0);let a=r===!0?0:1,l,u,c=null,f=0,h=null;function p(g){let x=g.isScene===!0?g.background:null;if(x&&x.isTexture){const S=g.backgroundBlurriness>0;x=e.get(x,S)}return x}function m(g){let x=!1;const S=p(g);S===null?_(o,a):S&&S.isColor&&(_(S,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(g,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===hh)?(u===void 0&&(u=new Et(new Un(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:Ha(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(y2.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(wM),u.material.toneMapped=ht.getTransfer(S.colorSpace)!==wt,(c!==S||f!==S.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,c=S,f=S.version,h=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Et(new Fu(2,2),new Rr({name:"BackgroundMaterial",uniforms:Ha(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ht.getTransfer(S.colorSpace)!==wt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||f!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,c=S,f=S.version,h=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,x){g.getRGB(kc,SM(n)),t.buffers.color.setClear(kc.r,kc.g,kc.b,x,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,x=1){o.set(g),a=x,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,_(o,a)},render:m,addToRenderList:v,dispose:d}}function M2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(P,I,z,H,D){let B=!1;const F=f(P,H,z,I);s!==F&&(s=F,u(s.object)),B=p(P,H,z,D),B&&m(P,H,z,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(P,I,z,H),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function u(P){return n.bindVertexArray(P)}function c(P){return n.deleteVertexArray(P)}function f(P,I,z,H){const D=H.wireframe===!0;let B=i[I.id];B===void 0&&(B={},i[I.id]=B);const F=P.isInstancedMesh===!0?P.id:0;let k=B[F];k===void 0&&(k={},B[F]=k);let Y=k[z.id];Y===void 0&&(Y={},k[z.id]=Y);let $=Y[D];return $===void 0&&($=h(l()),Y[D]=$),$}function h(P){const I=[],z=[],H=[];for(let D=0;D<t;D++)I[D]=0,z[D]=0,H[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:H,object:P,attributes:{},index:null}}function p(P,I,z,H){const D=s.attributes,B=I.attributes;let F=0;const k=z.getAttributes();for(const Y in k)if(k[Y].location>=0){const J=D[Y];let ee=B[Y];if(ee===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),J===void 0||J.attribute!==ee||ee&&J.data!==ee.data)return!0;F++}return s.attributesNum!==F||s.index!==H}function m(P,I,z,H){const D={},B=I.attributes;let F=0;const k=z.getAttributes();for(const Y in k)if(k[Y].location>=0){let J=B[Y];J===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const ee={};ee.attribute=J,J&&J.data&&(ee.data=J.data),D[Y]=ee,F++}s.attributes=D,s.attributesNum=F,s.index=H}function v(){const P=s.newAttributes;for(let I=0,z=P.length;I<z;I++)P[I]=0}function _(P){d(P,0)}function d(P,I){const z=s.newAttributes,H=s.enabledAttributes,D=s.attributeDivisors;z[P]=1,H[P]===0&&(n.enableVertexAttribArray(P),H[P]=1),D[P]!==I&&(n.vertexAttribDivisor(P,I),D[P]=I)}function g(){const P=s.newAttributes,I=s.enabledAttributes;for(let z=0,H=I.length;z<H;z++)I[z]!==P[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function x(P,I,z,H,D,B,F){F===!0?n.vertexAttribIPointer(P,I,z,D,B):n.vertexAttribPointer(P,I,z,H,D,B)}function S(P,I,z,H){v();const D=H.attributes,B=z.getAttributes(),F=I.defaultAttributeValues;for(const k in B){const Y=B[k];if(Y.location>=0){let $=D[k];if($===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){const J=$.normalized,ee=$.itemSize,Be=e.get($);if(Be===void 0)continue;const Me=Be.buffer,pe=Be.type,K=Be.bytesPerElement,Se=pe===n.INT||pe===n.UNSIGNED_INT||$.gpuType===X0;if($.isInterleavedBufferAttribute){const me=$.data,Ue=me.stride,Ge=$.offset;if(me.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Y.locationSize;Ve++)d(Y.location+Ve,me.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ve=0;Ve<Y.locationSize;Ve++)_(Y.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Ve=0;Ve<Y.locationSize;Ve++)x(Y.location+Ve,ee/Y.locationSize,pe,J,Ue*K,(Ge+ee/Y.locationSize*Ve)*K,Se)}else{if($.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)d(Y.location+me,$.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let me=0;me<Y.locationSize;me++)_(Y.location+me);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let me=0;me<Y.locationSize;me++)x(Y.location+me,ee/Y.locationSize,pe,J,ee*K,ee/Y.locationSize*me*K,Se)}}else if(F!==void 0){const J=F[k];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(Y.location,J);break;case 3:n.vertexAttrib3fv(Y.location,J);break;case 4:n.vertexAttrib4fv(Y.location,J);break;default:n.vertexAttrib1fv(Y.location,J)}}}}g()}function T(){w();for(const P in i){const I=i[P];for(const z in I){const H=I[z];for(const D in H){const B=H[D];for(const F in B)c(B[F].object),delete B[F];delete H[D]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const z in I){const H=I[z];for(const D in H){const B=H[D];for(const F in B)c(B[F].object),delete B[F];delete H[D]}}delete i[P.id]}function A(P){for(const I in i){const z=i[I];for(const H in z){const D=z[H];if(D[P.id]===void 0)continue;const B=D[P.id];for(const F in B)c(B[F].object),delete B[F];delete D[P.id]}}}function y(P){for(const I in i){const z=i[I],H=P.isInstancedMesh===!0?P.id:0,D=z[H];if(D!==void 0){for(const B in D){const F=D[B];for(const k in F)c(F[k].object),delete F[k];delete D[B]}delete z[H],Object.keys(z).length===0&&delete i[I]}}}function w(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:_,disableUnusedAttributes:g}}function E2(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let h=0;for(let p=0;p<c;p++)h+=u[p];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function T2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Qi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const y=A===Zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==_i&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==yr&&!y)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(We("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,maxSamples:T,samples:E}}function w2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ro,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const m=f.clippingPlanes,v=f.clipIntersection,_=f.clipShadows,d=n.get(f);if(!r||m===null||m.length===0||s&&!_)s?c(null):u();else{const g=s?0:i,x=g*4;let S=d.clippingState||null;l.value=S,S=c(m,h,x,p);for(let T=0;T!==x;++T)S[T]=t[T];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,m){const v=f!==null?f.length:0;let _=null;if(v!==0){if(_=l.value,m!==!0||_===null){const d=p+v*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(_===null||_.length<d)&&(_=new Float32Array(d));for(let x=0,S=p;x!==v;++x,S+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}const Ms=4,Hv=[.125,.215,.35,.446,.526,.582],ao=20,A2=256,El=new ug,Wv=new it;let Nd=null,Id=0,Ud=0,Fd=!1;const C2=new N;class Xv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=C2}=s;Nd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Id,Ud),this._renderer.xr.enabled=Fd,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===Ba?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Zr,format:Qi,colorSpace:Ff,depthBuffer:!1},r=Yv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=R2(s)),this._blurMaterial=P2(s,e,t),this._ggxMaterial=b2(s,e,t)}return r}_compileMaterial(e){const t=new Et(new nn,e);this._renderer.compile(t,El)}_sceneToCubeUV(e,t,i,r,s){const l=new Fi(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Wv),f.toneMapping=wr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new Un,new Qt({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,_=v.material;let d=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,d=!0):(_.color.copy(Wv),d=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const T=this._cubeSize;na(r,S*T,x>2?T:0,T,T),f.setRenderTarget(r),d&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ao||e.mapping===Ba;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;na(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,El)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),h=0+u*1.25,p=f*h,{_lodMax:m}=this,v=this._sizeLods[i],_=3*v*(i>m-Ms?i-m+Ms:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,na(s,_,d,3*v,2*v),r.setRenderTarget(s),r.render(a,El),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,na(e,_,d,3*v,2*v),r.setRenderTarget(e),r.render(a,El)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");const c=3,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ao-1),v=s/m,_=isFinite(s)?1+Math.floor(c*v):ao;_>ao&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ao}`);const d=[];let g=0;for(let A=0;A<ao;++A){const y=A/v,w=Math.exp(-y*y/2);d.push(w),A===0?g+=w:A<_&&(g+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/g;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=m,h.mipInt.value=x-i;const S=this._sizeLods[r],T=3*S*(r>x-Ms?r-x+Ms:0),E=4*(this._cubeSize-S);na(t,T,E,3*S,2*S),l.setRenderTarget(t),l.render(f,El)}}function R2(n){const e=[],t=[],i=[];let r=n;const s=n-Ms+1+Hv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ms?l=Hv[o-n+Ms-1]:o===0&&(l=0),t.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,m=6,v=3,_=2,d=1,g=new Float32Array(v*m*p),x=new Float32Array(_*m*p),S=new Float32Array(d*m*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,y=E>2?0:-1,w=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];g.set(w,v*m*E),x.set(h,_*m*E);const b=[E,E,E,E,E,E];S.set(b,d*m*E)}const T=new nn;T.setAttribute("position",new Gi(g,v)),T.setAttribute("uv",new Gi(x,_)),T.setAttribute("faceIndex",new Gi(S,d)),i.push(new Et(T,null)),r>Ms&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Yv(n,e,t){const i=new Ar(n,e,t);return i.texture.mapping=hh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function na(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function b2(n,e,t){return new Rr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:A2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ph(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function P2(n,e,t){const i=new Float32Array(ao),r=new N(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:ao,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function qv(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function jv(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class AM extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fM(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Un(5,5,5),s=new Rr({name:"CubemapFromEquirect",uniforms:Ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:Xr});s.uniforms.tEquirect.value=t;const o=new Et(r,s),a=t.minFilter;return t.minFilter===fo&&(t.minFilter=kn),new UC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function L2(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===nd||p===id)if(e.has(h)){const m=e.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const v=new AM(m.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",u),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const p=h.mapping,m=p===nd||p===id,v=p===Ao||p===Ba;if(m||v){let _=t.get(h);const d=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Xv(n)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const g=h.image;return m&&g&&g.height>0||v&&g&&l(g)?(i===null&&(i=new Xv(n)),_=m?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function a(h,p){return p===nd?h.mapping=Ao:p===id&&(h.mapping=Ba),h}function l(h){let p=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function D2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Cm("WebGLRenderer: "+i+" extension not supported."),r}}}function N2(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,m=f.attributes.position;let v=0;if(m===void 0)return;if(p!==null){const g=p.array;v=p.version;for(let x=0,S=g.length;x<S;x+=3){const T=g[x+0],E=g[x+1],A=g[x+2];h.push(T,E,E,A,A,T)}}else{const g=m.array;v=m.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const T=x+0,E=x+1,A=x+2;h.push(T,E,E,A,A,T)}}const _=new(m.count>=65535?uM:lM)(h,1);_.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,_)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function I2(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function u(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*o,p),t.update(h,i,p))}function c(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let v=0;for(let _=0;_<p;_++)v+=h[_];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function U2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function F2(n,e,t){const i=new WeakMap,r=new Zt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let T=a.attributes.position.count*S,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*E*4*f),y=new sM(A,T,E,f);y.type=yr,y.needsUpdate=!0;const w=S*4;for(let P=0;P<f;P++){const I=d[P],z=g[P],H=x[P],D=T*E*4*P;for(let B=0;B<I.count;B++){const F=B*w;m===!0&&(r.fromBufferAttribute(I,B),A[D+F+0]=r.x,A[D+F+1]=r.y,A[D+F+2]=r.z,A[D+F+3]=0),v===!0&&(r.fromBufferAttribute(z,B),A[D+F+4]=r.x,A[D+F+5]=r.y,A[D+F+6]=r.z,A[D+F+7]=0),_===!0&&(r.fromBufferAttribute(H,B),A[D+F+8]=r.x,A[D+F+9]=r.y,A[D+F+10]=r.z,A[D+F+11]=H.itemSize===4?r.w:1)}}h={count:f,texture:y,size:new Re(T,E)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<u.length;_++)m+=u[_];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function O2(n,e,t,i,r){let s=new WeakMap;function o(u){const c=r.render.frame,f=u.geometry,h=e.get(u,f);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const k2={[HS]:"LINEAR_TONE_MAPPING",[WS]:"REINHARD_TONE_MAPPING",[XS]:"CINEON_TONE_MAPPING",[YS]:"ACES_FILMIC_TONE_MAPPING",[jS]:"AGX_TONE_MAPPING",[$S]:"NEUTRAL_TONE_MAPPING",[qS]:"CUSTOM_TONE_MAPPING"};function z2(n,e,t,i,r){const s=new Ar(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Va(e,t):void 0}),o=new Ar(e,t,{type:Zr,depthBuffer:!1,stencilBuffer:!1}),a=new nn;a.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ct([0,2,0,0,2,0],2));const l=new RC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Et(a,l),c=new ug(-1,1,1,-1,0,1);let f=null,h=null,p=!1,m,v=null,_=[],d=!1;this.setSize=function(g,x){s.setSize(g,x),o.setSize(g,x);for(let S=0;S<_.length;S++){const T=_[S];T.setSize&&T.setSize(g,x)}},this.setEffects=function(g){_=g,d=_.length>0&&_[0].isRenderPass===!0;const x=s.width,S=s.height;for(let T=0;T<_.length;T++){const E=_[T];E.setSize&&E.setSize(x,S)}},this.begin=function(g,x){if(p||g.toneMapping===wr&&_.length===0)return!1;if(v=x,x!==null){const S=x.width,T=x.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return d===!1&&g.setRenderTarget(s),m=g.toneMapping,g.toneMapping=wr,!0},this.hasRenderPass=function(){return d},this.end=function(g,x){g.toneMapping=m,p=!0;let S=s,T=o;for(let E=0;E<_.length;E++){const A=_[E];if(A.enabled!==!1&&(A.render(g,T,S,x),A.needsSwap!==!1)){const y=S;S=T,T=y}}if(f!==g.outputColorSpace||h!==g.toneMapping){f=g.outputColorSpace,h=g.toneMapping,l.defines={},ht.getTransfer(f)===wt&&(l.defines.SRGB_TRANSFER="");const E=k2[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(v),g.render(u,c),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const CM=new zn,Im=new Va(1,1),RM=new sM,bM=new wA,PM=new fM,$v=[],Kv=[],Zv=new Float32Array(16),Jv=new Float32Array(9),Qv=new Float32Array(4);function el(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=$v[r];if(s===void 0&&(s=new Float32Array(r),$v[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function mh(n,e){let t=Kv[e];t===void 0&&(t=new Int32Array(e),Kv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function B2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function V2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function G2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function H2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function W2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;Qv.set(i),n.uniformMatrix2fv(this.addr,!1,Qv),hn(t,i)}}function X2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;Jv.set(i),n.uniformMatrix3fv(this.addr,!1,Jv),hn(t,i)}}function Y2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;Zv.set(i),n.uniformMatrix4fv(this.addr,!1,Zv),hn(t,i)}}function q2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function j2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function $2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function K2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function Z2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function J2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function Q2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function eP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function tP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Im.compareFunction=t.isReversedDepthBuffer()?J0:Z0,s=Im):s=CM,t.setTexture2D(e||s,r)}function nP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bM,r)}function iP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||PM,r)}function rP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||RM,r)}function sP(n){switch(n){case 5126:return B2;case 35664:return V2;case 35665:return G2;case 35666:return H2;case 35674:return W2;case 35675:return X2;case 35676:return Y2;case 5124:case 35670:return q2;case 35667:case 35671:return j2;case 35668:case 35672:return $2;case 35669:case 35673:return K2;case 5125:return Z2;case 36294:return J2;case 36295:return Q2;case 36296:return eP;case 35678:case 36198:case 36298:case 36306:case 35682:return tP;case 35679:case 36299:case 36307:return nP;case 35680:case 36300:case 36308:case 36293:return iP;case 36289:case 36303:case 36311:case 36292:return rP}}function oP(n,e){n.uniform1fv(this.addr,e)}function aP(n,e){const t=el(e,this.size,2);n.uniform2fv(this.addr,t)}function lP(n,e){const t=el(e,this.size,3);n.uniform3fv(this.addr,t)}function uP(n,e){const t=el(e,this.size,4);n.uniform4fv(this.addr,t)}function cP(n,e){const t=el(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fP(n,e){const t=el(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hP(n,e){const t=el(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dP(n,e){n.uniform1iv(this.addr,e)}function pP(n,e){n.uniform2iv(this.addr,e)}function mP(n,e){n.uniform3iv(this.addr,e)}function gP(n,e){n.uniform4iv(this.addr,e)}function _P(n,e){n.uniform1uiv(this.addr,e)}function vP(n,e){n.uniform2uiv(this.addr,e)}function xP(n,e){n.uniform3uiv(this.addr,e)}function yP(n,e){n.uniform4uiv(this.addr,e)}function SP(n,e,t){const i=this.cache,r=e.length,s=mh(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Im:o=CM;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function MP(n,e,t){const i=this.cache,r=e.length,s=mh(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||bM,s[o])}function EP(n,e,t){const i=this.cache,r=e.length,s=mh(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||PM,s[o])}function TP(n,e,t){const i=this.cache,r=e.length,s=mh(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||RM,s[o])}function wP(n){switch(n){case 5126:return oP;case 35664:return aP;case 35665:return lP;case 35666:return uP;case 35674:return cP;case 35675:return fP;case 35676:return hP;case 5124:case 35670:return dP;case 35667:case 35671:return pP;case 35668:case 35672:return mP;case 35669:case 35673:return gP;case 5125:return _P;case 36294:return vP;case 36295:return xP;case 36296:return yP;case 35678:case 36198:case 36298:case 36306:case 35682:return SP;case 35679:case 36299:case 36307:return MP;case 35680:case 36300:case 36308:case 36293:return EP;case 36289:case 36303:case 36311:case 36292:return TP}}class AP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sP(t.type)}}class CP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wP(t.type)}}class RP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function ex(n,e){n.seq.push(e),n.map[e.id]=e}function bP(n,e,t){const i=n.name,r=i.length;for(Od.lastIndex=0;;){const s=Od.exec(i),o=Od.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ex(t,u===void 0?new AP(a,n,e):new CP(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new RP(a),ex(t,f)),t=f}}}class sf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);bP(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function tx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const PP=37297;let LP=0;function DP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const nx=new et;function NP(n){ht._getMatrix(nx,ht.workingColorSpace,n);const e=`mat3( ${nx.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case Of:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ix(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+DP(n.getShaderSource(e),a)}else return s}function IP(n,e){const t=NP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const UP={[HS]:"Linear",[WS]:"Reinhard",[XS]:"Cineon",[YS]:"ACESFilmic",[jS]:"AgX",[$S]:"Neutral",[qS]:"Custom"};function FP(n,e){const t=UP[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zc=new N;function OP(){ht.getLuminanceCoefficients(zc);const n=zc.x.toFixed(4),e=zc.y.toFixed(4),t=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function zP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Dl(n){return n!==""}function rx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Um(n){return n.replace(VP,HP)}const GP=new Map;function HP(n,e){let t=nt[e];if(t===void 0){const i=GP.get(e);if(i!==void 0)t=nt[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Um(t)}const WP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ox(n){return n.replace(WP,XP)}function XP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ax(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const YP={[Qc]:"SHADOWMAP_TYPE_PCF",[Pl]:"SHADOWMAP_TYPE_VSM"};function qP(n){return YP[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jP={[Ao]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE",[hh]:"ENVMAP_TYPE_CUBE_UV"};function $P(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":jP[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const KP={[Ba]:"ENVMAP_MODE_REFRACTION"};function ZP(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":KP[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JP={[GS]:"ENVMAP_BLENDING_MULTIPLY",[Hw]:"ENVMAP_BLENDING_MIX",[Ww]:"ENVMAP_BLENDING_ADD"};function QP(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":JP[n.combine]||"ENVMAP_BLENDING_NONE"}function e3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function t3(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qP(t),u=$P(t),c=ZP(t),f=QP(t),h=e3(t),p=kP(t),m=zP(s),v=r.createProgram();let _,d,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Dl).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Dl).join(`
`),d.length>0&&(d+=`
`)):(_=[ax(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),d=[ax(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wr?"#define TONE_MAPPING":"",t.toneMapping!==wr?nt.tonemapping_pars_fragment:"",t.toneMapping!==wr?FP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,IP("linearToOutputTexel",t.outputColorSpace),OP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dl).join(`
`)),o=Um(o),o=rx(o,t),o=sx(o,t),a=Um(a),a=rx(a,t),a=sx(a,t),o=ox(o),a=ox(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",t.glslVersion===rv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=g+_+o,S=g+d+a,T=tx(r,r.VERTEX_SHADER,x),E=tx(r,r.FRAGMENT_SHADER,S);r.attachShader(v,T),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(P){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(T)||"",H=r.getShaderInfoLog(E)||"",D=I.trim(),B=z.trim(),F=H.trim();let k=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,E);else{const $=ix(r,T,"vertex"),J=ix(r,E,"fragment");mt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+$+`
`+J)}else D!==""?We("WebGLProgram: Program Info Log:",D):(B===""||F==="")&&(Y=!1);Y&&(P.diagnostics={runnable:k,programLog:D,vertexShader:{log:B,prefix:_},fragmentShader:{log:F,prefix:d}})}r.deleteShader(T),r.deleteShader(E),y=new sf(r,v),w=BP(r,v)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,PP)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LP++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let n3=0;class i3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new r3(e),t.set(e,i)),i}}class r3{constructor(e){this.id=n3++,this.code=e,this.usedTimes=0}}function s3(n){return n===Co||n===If||n===Uf}function o3(n,e,t,i,r,s){const o=new oM,a=new i3,l=new Set,u=[],c=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,w,b,P,I,z){const H=P.fog,D=I.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=e.get(y.envMap||B,F),Y=k&&k.mapping===hh?k.image.height:null,$=p[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&We("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ee=J!==void 0?J.length:0;let Be=0;D.morphAttributes.position!==void 0&&(Be=1),D.morphAttributes.normal!==void 0&&(Be=2),D.morphAttributes.color!==void 0&&(Be=3);let Me,pe,K,Se;if($){const Ze=_r[$];Me=Ze.vertexShader,pe=Ze.fragmentShader}else Me=y.vertexShader,pe=y.fragmentShader,a.update(y),K=a.getVertexShaderID(y),Se=a.getFragmentShaderID(y);const me=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),Ge=I.isInstancedMesh===!0,Ve=I.isBatchedMesh===!0,ut=!!y.map,Xe=!!y.matcap,ne=!!k,ce=!!y.aoMap,ie=!!y.lightMap,Ee=!!y.bumpMap,ye=!!y.normalMap,Ye=!!y.displacementMap,L=!!y.emissiveMap,je=!!y.metalnessMap,Ie=!!y.roughnessMap,He=y.anisotropy>0,fe=y.clearcoat>0,pt=y.dispersion>0,R=y.iridescence>0,M=y.sheen>0,V=y.transmission>0,j=He&&!!y.anisotropyMap,re=fe&&!!y.clearcoatMap,ue=fe&&!!y.clearcoatNormalMap,_e=fe&&!!y.clearcoatRoughnessMap,q=R&&!!y.iridescenceMap,Q=R&&!!y.iridescenceThicknessMap,Te=M&&!!y.sheenColorMap,Pe=M&&!!y.sheenRoughnessMap,xe=!!y.specularMap,ge=!!y.specularColorMap,$e=!!y.specularIntensityMap,Ke=V&&!!y.transmissionMap,st=V&&!!y.thicknessMap,U=!!y.gradientMap,de=!!y.alphaMap,Z=y.alphaTest>0,be=!!y.alphaHash,ve=!!y.extensions;let se=wr;y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(se=n.toneMapping);const Oe={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:Me,fragmentShader:pe,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Ve,batchingColor:Ve&&I._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&I.instanceColor!==null,instancingMorph:Ge&&I.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ut,matcap:Xe,envMap:ne,envMapMode:ne&&k.mapping,envMapCubeUVHeight:Y,aoMap:ce,lightMap:ie,bumpMap:Ee,normalMap:ye,displacementMap:Ye,emissiveMap:L,normalMapObjectSpace:ye&&y.normalMapType===qw,normalMapTangentSpace:ye&&y.normalMapType===tv,packedNormalMap:ye&&y.normalMapType===tv&&s3(y.normalMap.format),metalnessMap:je,roughnessMap:Ie,anisotropy:He,anisotropyMap:j,clearcoat:fe,clearcoatMap:re,clearcoatNormalMap:ue,clearcoatRoughnessMap:_e,dispersion:pt,iridescence:R,iridescenceMap:q,iridescenceThicknessMap:Q,sheen:M,sheenColorMap:Te,sheenRoughnessMap:Pe,specularMap:xe,specularColorMap:ge,specularIntensityMap:$e,transmission:V,transmissionMap:Ke,thicknessMap:st,gradientMap:U,opaque:y.transparent===!1&&y.blending===Aa&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:Z,alphaHash:be,combine:y.combine,mapUv:ut&&m(y.map.channel),aoMapUv:ce&&m(y.aoMap.channel),lightMapUv:ie&&m(y.lightMap.channel),bumpMapUv:Ee&&m(y.bumpMap.channel),normalMapUv:ye&&m(y.normalMap.channel),displacementMapUv:Ye&&m(y.displacementMap.channel),emissiveMapUv:L&&m(y.emissiveMap.channel),metalnessMapUv:je&&m(y.metalnessMap.channel),roughnessMapUv:Ie&&m(y.roughnessMap.channel),anisotropyMapUv:j&&m(y.anisotropyMap.channel),clearcoatMapUv:re&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&m(y.sheenRoughnessMap.channel),specularMapUv:xe&&m(y.specularMap.channel),specularColorMapUv:ge&&m(y.specularColorMap.channel),specularIntensityMapUv:$e&&m(y.specularIntensityMap.channel),transmissionMapUv:Ke&&m(y.transmissionMap.channel),thicknessMapUv:st&&m(y.thicknessMap.channel),alphaMapUv:de&&m(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ye||He),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(ut||de),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&ye===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ue,skinning:I.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Be,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:ut&&y.map.isVideoTexture===!0&&ht.getTransfer(y.map.colorSpace)===wt,decodeVideoTextureEmissive:L&&y.emissiveMap.isVideoTexture===!0&&ht.getTransfer(y.emissiveMap.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Br,flipSided:y.side===ii,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ve&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&y.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function _(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)w.push(b),w.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(d(w,y),g(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function d(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function g(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function x(y){const w=p[y.type];let b;if(w){const P=_r[w];b=wC.clone(P.uniforms)}else b=y.uniforms;return b}function S(y,w){let b=c.get(w);return b!==void 0?++b.usedTimes:(b=new t3(n,w,y,r),u.push(b),c.set(w,b)),b}function T(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function A(){a.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:A}}function a3(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function l3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function lx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ux(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,m,v,_,d){let g=n[e];return g===void 0?(g={id:h.id,object:h,geometry:p,material:m,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:_,group:d},n[e]=g):(g.id=h.id,g.object=h,g.geometry=p,g.material=m,g.materialVariant=o(h),g.groupOrder=v,g.renderOrder=h.renderOrder,g.z=_,g.group=d),e++,g}function l(h,p,m,v,_,d){const g=a(h,p,m,v,_,d);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function u(h,p,m,v,_,d){const g=a(h,p,m,v,_,d);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function c(h,p){t.length>1&&t.sort(h||l3),i.length>1&&i.sort(p||lx),r.length>1&&r.sort(p||lx)}function f(){for(let h=e,p=n.length;h<p;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:f,sort:c}}function u3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ux,n.set(i,[o])):r>=s.length?(o=new ux,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function c3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new it};break;case"SpotLight":t={position:new N,direction:new N,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function f3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let h3=0;function d3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function p3(n){const e=new c3,t=f3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new Vt,o=new Vt;function a(u){let c=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,m=0,v=0,_=0,d=0,g=0,x=0,S=0,T=0,E=0,A=0;u.sort(d3);for(let w=0,b=u.length;w<b;w++){const P=u[w],I=P.color,z=P.intensity,H=P.distance;let D=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Co?D=P.shadow.map.texture:D=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=I.r*z,f+=I.g*z,h+=I.b*z;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],z);A++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,k=t.get(P);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=B,p++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(I).multiplyScalar(z),B.distance=H,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[v]=B;const F=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,F.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[v]=F.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=D,S++}v++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(I).multiplyScalar(z),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=B,_++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const F=P.shadow,k=t.get(P);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,i.pointShadow[m]=k,i.pointShadowMap[m]=D,i.pointShadowMatrix[m]=P.shadow.matrix,x++}i.point[m]=B,m++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(z),B.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[d]=B,d++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const y=i.hash;(y.directionalLength!==p||y.pointLength!==m||y.spotLength!==v||y.rectAreaLength!==_||y.hemiLength!==d||y.numDirectionalShadows!==g||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==T||y.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=m,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,y.directionalLength=p,y.pointLength=m,y.spotLength=v,y.rectAreaLength=_,y.hemiLength=d,y.numDirectionalShadows=g,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=T,y.numLightProbes=A,i.version=h3++)}function l(u,c){let f=0,h=0,p=0,m=0,v=0;const _=c.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){const x=u[d];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),p++}else if(x.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),h++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:i}}function cx(n){const e=new p3(n),t=[],i=[],r=[];function s(h){f.camera=h,t.length=0,i.length=0,r.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){r.push(h)}function u(){e.setup(t)}function c(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function m3(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new cx(n),e.set(r,[a])):s>=o.length?(a=new cx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const g3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v3=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],x3=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],fx=new Vt,Tl=new N,kd=new N;function y3(n,e,t){let i=new ig;const r=new Re,s=new Re,o=new Zt,a=new bC,l=new PC,u={},c=t.maxTextureSize,f={[ks]:ii,[ii]:ks,[Br]:Br},h=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:g3,fragmentShader:_3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const m=new nn;m.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(m,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let d=this.type;this.render=function(E,A,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;this.type===Tw&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qc);const w=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Xr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=d!==this.type;z&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(D=>D.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,D=E.length;H<D;H++){const B=E[H],F=B.shadow;if(F===void 0){We("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const k=F.getFrameExtents();r.multiply(k),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/k.x),r.x=s.x*k.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/k.y),r.y=s.y*k.y,F.mapSize.y=s.y));const Y=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Y,F.map===null||z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Pl){if(B.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ar(r.x,r.y,{format:Co,type:Zr,minFilter:kn,magFilter:kn,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new Va(r.x,r.y,yr),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=Jr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=wn,F.map.depthTexture.magFilter=wn}else B.isPointLight?(F.map=new AM(r.x),F.map.depthTexture=new WA(r.x,Cr)):(F.map=new Ar(r.x,r.y),F.map.depthTexture=new Va(r.x,r.y,Cr)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=Jr,this.type===Qc?(F.map.depthTexture.compareFunction=Y?J0:Z0,F.map.depthTexture.minFilter=kn,F.map.depthTexture.magFilter=kn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=wn,F.map.depthTexture.magFilter=wn);F.camera.updateProjectionMatrix()}const $=F.map.isWebGLCubeRenderTarget?6:1;for(let J=0;J<$;J++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,J),n.clear();else{J===0&&(n.setRenderTarget(F.map),n.clear());const ee=F.getViewport(J);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),I.viewport(o)}if(B.isPointLight){const ee=F.camera,Be=F.matrix,Me=B.distance||ee.far;Me!==ee.far&&(ee.far=Me,ee.updateProjectionMatrix()),Tl.setFromMatrixPosition(B.matrixWorld),ee.position.copy(Tl),kd.copy(ee.position),kd.add(v3[J]),ee.up.copy(x3[J]),ee.lookAt(kd),ee.updateMatrixWorld(),Be.makeTranslation(-Tl.x,-Tl.y,-Tl.z),fx.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),F._frustum.setFromProjectionMatrix(fx,ee.coordinateSystem,ee.reversedDepth)}else F.updateMatrices(B);i=F.getFrustum(),S(A,y,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===Pl&&g(F,y),F.needsUpdate=!1}d=this.type,_.needsUpdate=!1,n.setRenderTarget(w,b,P)};function g(E,A){const y=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ar(r.x,r.y,{format:Co,type:Zr})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,y,h,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,y,p,v,null)}function x(E,A,y,w){let b=null;const P=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=y.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=b.uuid,z=A.uuid;let H=u[I];H===void 0&&(H={},u[I]=H);let D=H[z];D===void 0&&(D=b.clone(),H[z]=D,A.addEventListener("dispose",T)),b=D}if(b.visible=A.visible,b.wireframe=A.wireframe,w===Pl?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=n.properties.get(b);I.light=y}return b}function S(E,A,y,w,b){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Pl)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const z=e.update(E),H=E.material;if(Array.isArray(H)){const D=z.groups;for(let B=0,F=D.length;B<F;B++){const k=D[B],Y=H[k.materialIndex];if(Y&&Y.visible){const $=x(E,Y,w,b);E.onBeforeShadow(n,E,A,y,z,$,k),n.renderBufferDirect(y,null,z,$,E,k),E.onAfterShadow(n,E,A,y,z,$,k)}}}else if(H.visible){const D=x(E,H,w,b);E.onBeforeShadow(n,E,A,y,z,D,null),n.renderBufferDirect(y,null,z,D,E,null),E.onAfterShadow(n,E,A,y,z,D,null)}}const I=E.children;for(let z=0,H=I.length;z<H;z++)S(I[z],A,y,w,b)}function T(E){E.target.removeEventListener("dispose",T);for(const y in u){const w=u[y],b=E.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function S3(n,e){function t(){let U=!1;const de=new Zt;let Z=null;const be=new Zt(0,0,0,0);return{setMask:function(ve){Z!==ve&&!U&&(n.colorMask(ve,ve,ve,ve),Z=ve)},setLocked:function(ve){U=ve},setClear:function(ve,se,Oe,Ze,Ft){Ft===!0&&(ve*=Ze,se*=Ze,Oe*=Ze),de.set(ve,se,Oe,Ze),be.equals(de)===!1&&(n.clearColor(ve,se,Oe,Ze),be.copy(de))},reset:function(){U=!1,Z=null,be.set(-1,0,0,0)}}}function i(){let U=!1,de=!1,Z=null,be=null,ve=null;return{setReversed:function(se){if(de!==se){const Oe=e.get("EXT_clip_control");se?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),de=se;const Ze=ve;ve=null,this.setClear(Ze)}},getReversed:function(){return de},setTest:function(se){se?me(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(se){Z!==se&&!U&&(n.depthMask(se),Z=se)},setFunc:function(se){if(de&&(se=iA[se]),be!==se){switch(se){case Gp:n.depthFunc(n.NEVER);break;case Hp:n.depthFunc(n.ALWAYS);break;case Wp:n.depthFunc(n.LESS);break;case za:n.depthFunc(n.LEQUAL);break;case Xp:n.depthFunc(n.EQUAL);break;case Yp:n.depthFunc(n.GEQUAL);break;case qp:n.depthFunc(n.GREATER);break;case jp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=se}},setLocked:function(se){U=se},setClear:function(se){ve!==se&&(ve=se,de&&(se=1-se),n.clearDepth(se))},reset:function(){U=!1,Z=null,be=null,ve=null,de=!1}}}function r(){let U=!1,de=null,Z=null,be=null,ve=null,se=null,Oe=null,Ze=null,Ft=null;return{setTest:function(vt){U||(vt?me(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(vt){de!==vt&&!U&&(n.stencilMask(vt),de=vt)},setFunc:function(vt,$n,Gn){(Z!==vt||be!==$n||ve!==Gn)&&(n.stencilFunc(vt,$n,Gn),Z=vt,be=$n,ve=Gn)},setOp:function(vt,$n,Gn){(se!==vt||Oe!==$n||Ze!==Gn)&&(n.stencilOp(vt,$n,Gn),se=vt,Oe=$n,Ze=Gn)},setLocked:function(vt){U=vt},setClear:function(vt){Ft!==vt&&(n.clearStencil(vt),Ft=vt)},reset:function(){U=!1,de=null,Z=null,be=null,ve=null,se=null,Oe=null,Ze=null,Ft=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h={},p=new WeakMap,m=[],v=null,_=!1,d=null,g=null,x=null,S=null,T=null,E=null,A=null,y=new it(0,0,0),w=0,b=!1,P=null,I=null,z=null,H=null,D=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),F=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),F=k>=2);let $=null,J={};const ee=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Me=new Zt().fromArray(ee),pe=new Zt().fromArray(Be);function K(U,de,Z,be){const ve=new Uint8Array(4),se=n.createTexture();n.bindTexture(U,se),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<Z;Oe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(de+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return se}const Se={};Se[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(za),Ee(!1),ye(J_),me(n.CULL_FACE),ce(Xr);function me(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function Ue(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Ge(U,de){return h[U]!==de?(n.bindFramebuffer(U,de),h[U]=de,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Ve(U,de){let Z=m,be=!1;if(U){Z=p.get(de),Z===void 0&&(Z=[],p.set(de,Z));const ve=U.textures;if(Z.length!==ve.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Oe=ve.length;se<Oe;se++)Z[se]=n.COLOR_ATTACHMENT0+se;Z.length=ve.length,be=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,be=!0);be&&n.drawBuffers(Z)}function ut(U){return v!==U?(n.useProgram(U),v=U,!0):!1}const Xe={[oo]:n.FUNC_ADD,[Aw]:n.FUNC_SUBTRACT,[Cw]:n.FUNC_REVERSE_SUBTRACT};Xe[Rw]=n.MIN,Xe[bw]=n.MAX;const ne={[Pw]:n.ZERO,[Lw]:n.ONE,[Dw]:n.SRC_COLOR,[Bp]:n.SRC_ALPHA,[kw]:n.SRC_ALPHA_SATURATE,[Fw]:n.DST_COLOR,[Iw]:n.DST_ALPHA,[Nw]:n.ONE_MINUS_SRC_COLOR,[Vp]:n.ONE_MINUS_SRC_ALPHA,[Ow]:n.ONE_MINUS_DST_COLOR,[Uw]:n.ONE_MINUS_DST_ALPHA,[zw]:n.CONSTANT_COLOR,[Bw]:n.ONE_MINUS_CONSTANT_COLOR,[Vw]:n.CONSTANT_ALPHA,[Gw]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(U,de,Z,be,ve,se,Oe,Ze,Ft,vt){if(U===Xr){_===!0&&(Ue(n.BLEND),_=!1);return}if(_===!1&&(me(n.BLEND),_=!0),U!==ww){if(U!==d||vt!==b){if((g!==oo||T!==oo)&&(n.blendEquation(n.FUNC_ADD),g=oo,T=oo),vt)switch(U){case Aa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nf:n.blendFunc(n.ONE,n.ONE);break;case Q_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ev:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:mt("WebGLState: Invalid blending: ",U);break}else switch(U){case Aa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Q_:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ev:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",U);break}x=null,S=null,E=null,A=null,y.set(0,0,0),w=0,d=U,b=vt}return}ve=ve||de,se=se||Z,Oe=Oe||be,(de!==g||ve!==T)&&(n.blendEquationSeparate(Xe[de],Xe[ve]),g=de,T=ve),(Z!==x||be!==S||se!==E||Oe!==A)&&(n.blendFuncSeparate(ne[Z],ne[be],ne[se],ne[Oe]),x=Z,S=be,E=se,A=Oe),(Ze.equals(y)===!1||Ft!==w)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Ft),y.copy(Ze),w=Ft),d=U,b=!1}function ie(U,de){U.side===Br?Ue(n.CULL_FACE):me(n.CULL_FACE);let Z=U.side===ii;de&&(Z=!Z),Ee(Z),U.blending===Aa&&U.transparent===!1?ce(Xr):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const be=U.stencilWrite;a.setTest(be),be&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),L(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(U){P!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),P=U)}function ye(U){U!==Mw?(me(n.CULL_FACE),U!==I&&(U===J_?n.cullFace(n.BACK):U===Ew?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),I=U}function Ye(U){U!==z&&(F&&n.lineWidth(U),z=U)}function L(U,de,Z){U?(me(n.POLYGON_OFFSET_FILL),(H!==de||D!==Z)&&(H=de,D=Z,o.getReversed()&&(de=-de),n.polygonOffset(de,Z))):Ue(n.POLYGON_OFFSET_FILL)}function je(U){U?me(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function Ie(U){U===void 0&&(U=n.TEXTURE0+B-1),$!==U&&(n.activeTexture(U),$=U)}function He(U,de,Z){Z===void 0&&($===null?Z=n.TEXTURE0+B-1:Z=$);let be=J[Z];be===void 0&&(be={type:void 0,texture:void 0},J[Z]=be),(be.type!==U||be.texture!==de)&&($!==Z&&(n.activeTexture(Z),$=Z),n.bindTexture(U,de||Se[U]),be.type=U,be.texture=de)}function fe(){const U=J[$];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function pt(){try{n.compressedTexImage2D(...arguments)}catch(U){mt("WebGLState:",U)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(U){mt("WebGLState:",U)}}function M(){try{n.texSubImage2D(...arguments)}catch(U){mt("WebGLState:",U)}}function V(){try{n.texSubImage3D(...arguments)}catch(U){mt("WebGLState:",U)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(U){mt("WebGLState:",U)}}function re(){try{n.compressedTexSubImage3D(...arguments)}catch(U){mt("WebGLState:",U)}}function ue(){try{n.texStorage2D(...arguments)}catch(U){mt("WebGLState:",U)}}function _e(){try{n.texStorage3D(...arguments)}catch(U){mt("WebGLState:",U)}}function q(){try{n.texImage2D(...arguments)}catch(U){mt("WebGLState:",U)}}function Q(){try{n.texImage3D(...arguments)}catch(U){mt("WebGLState:",U)}}function Te(U){return f[U]!==void 0?f[U]:n.getParameter(U)}function Pe(U,de){f[U]!==de&&(n.pixelStorei(U,de),f[U]=de)}function xe(U){Me.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Me.copy(U))}function ge(U){pe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function $e(U,de){let Z=u.get(de);Z===void 0&&(Z=new WeakMap,u.set(de,Z));let be=Z.get(U);be===void 0&&(be=n.getUniformBlockIndex(de,U.name),Z.set(U,be))}function Ke(U,de){const be=u.get(de).get(U);l.get(de)!==be&&(n.uniformBlockBinding(de,be,U.__bindingPointIndex),l.set(de,be))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},f={},$=null,J={},h={},p=new WeakMap,m=[],v=null,_=!1,d=null,g=null,x=null,S=null,T=null,E=null,A=null,y=new it(0,0,0),w=0,b=!1,P=null,I=null,z=null,H=null,D=null,Me.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:me,disable:Ue,bindFramebuffer:Ge,drawBuffers:Ve,useProgram:ut,setBlending:ce,setMaterial:ie,setFlipSided:Ee,setCullFace:ye,setLineWidth:Ye,setPolygonOffset:L,setScissorTest:je,activeTexture:Ie,bindTexture:He,unbindTexture:fe,compressedTexImage2D:pt,compressedTexImage3D:R,texImage2D:q,texImage3D:Q,pixelStorei:Pe,getParameter:Te,updateUBOMapping:$e,uniformBlockBinding:Ke,texStorage2D:ue,texStorage3D:_e,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:j,compressedTexSubImage3D:re,scissor:xe,viewport:ge,reset:st}}function M3(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Re,c=new WeakMap,f=new Set;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return m?new OffscreenCanvas(R,M):kf("canvas")}function _(R,M,V){let j=1;const re=pt(R);if((re.width>V||re.height>V)&&(j=V/Math.max(re.width,re.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(j*re.width),_e=Math.floor(j*re.height);h===void 0&&(h=v(ue,_e));const q=M?v(ue,_e):h;return q.width=ue,q.height=_e,q.getContext("2d").drawImage(R,0,0,ue,_e),We("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ue+"x"+_e+")."),q}else return"data"in R&&We("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function d(R){return R.generateMipmaps}function g(R){n.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,M,V,j,re,ue=!1){if(R!==null){if(n[R]!==void 0)return n[R];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let _e;j&&(_e=e.get("EXT_texture_norm16"),_e||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=M;if(M===n.RED&&(V===n.FLOAT&&(q=n.R32F),V===n.HALF_FLOAT&&(q=n.R16F),V===n.UNSIGNED_BYTE&&(q=n.R8),V===n.UNSIGNED_SHORT&&_e&&(q=_e.R16_EXT),V===n.SHORT&&_e&&(q=_e.R16_SNORM_EXT)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.R8UI),V===n.UNSIGNED_SHORT&&(q=n.R16UI),V===n.UNSIGNED_INT&&(q=n.R32UI),V===n.BYTE&&(q=n.R8I),V===n.SHORT&&(q=n.R16I),V===n.INT&&(q=n.R32I)),M===n.RG&&(V===n.FLOAT&&(q=n.RG32F),V===n.HALF_FLOAT&&(q=n.RG16F),V===n.UNSIGNED_BYTE&&(q=n.RG8),V===n.UNSIGNED_SHORT&&_e&&(q=_e.RG16_EXT),V===n.SHORT&&_e&&(q=_e.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RG8UI),V===n.UNSIGNED_SHORT&&(q=n.RG16UI),V===n.UNSIGNED_INT&&(q=n.RG32UI),V===n.BYTE&&(q=n.RG8I),V===n.SHORT&&(q=n.RG16I),V===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(q=n.RGB16UI),V===n.UNSIGNED_INT&&(q=n.RGB32UI),V===n.BYTE&&(q=n.RGB8I),V===n.SHORT&&(q=n.RGB16I),V===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),V===n.UNSIGNED_INT&&(q=n.RGBA32UI),V===n.BYTE&&(q=n.RGBA8I),V===n.SHORT&&(q=n.RGBA16I),V===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(V===n.UNSIGNED_SHORT&&_e&&(q=_e.RGB16_EXT),V===n.SHORT&&_e&&(q=_e.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){const Q=ue?Of:ht.getTransfer(re);V===n.FLOAT&&(q=n.RGBA32F),V===n.HALF_FLOAT&&(q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(q=Q===wt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&_e&&(q=_e.RGBA16_EXT),V===n.SHORT&&_e&&(q=_e.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(R,M){let V;return R?M===null||M===Cr||M===mu?V=n.DEPTH24_STENCIL8:M===yr?V=n.DEPTH32F_STENCIL8:M===pu&&(V=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Cr||M===mu?V=n.DEPTH_COMPONENT24:M===yr?V=n.DEPTH_COMPONENT32F:M===pu&&(V=n.DEPTH_COMPONENT16),V}function E(R,M){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==kn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),w(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&f.delete(M)}function y(R){const M=R.target;M.removeEventListener("dispose",y),P(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const V=R.source,j=p.get(V);if(j){const re=j[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(R),Object.keys(j).length===0&&p.delete(V)}i.remove(R)}function b(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const V=R.source,j=p.get(V);delete j[M.__cacheKey],o.memory.textures--}function P(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let re=0;re<M.__webglFramebuffer[j].length;re++)n.deleteFramebuffer(M.__webglFramebuffer[j][re]);else n.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)n.deleteFramebuffer(M.__webglFramebuffer[j]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=R.textures;for(let j=0,re=V.length;j<re;j++){const ue=i.get(V[j]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(V[j])}i.remove(R)}let I=0;function z(){I=0}function H(){return I}function D(R){I=R}function B(){const R=I;return R>=r.maxTextures&&We("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function F(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function k(R,M){const V=i.get(R);if(R.isVideoTexture&&He(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const j=R.image;if(j===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(V,R,M);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function Y(R,M){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Ue(V,R,M);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function $(R,M){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Ue(V,R,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function J(R,M){const V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Ge(V,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const ee={[$p]:n.REPEAT,[Hr]:n.CLAMP_TO_EDGE,[Kp]:n.MIRRORED_REPEAT},Be={[wn]:n.NEAREST,[Xw]:n.NEAREST_MIPMAP_NEAREST,[uc]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[rd]:n.LINEAR_MIPMAP_NEAREST,[fo]:n.LINEAR_MIPMAP_LINEAR},Me={[jw]:n.NEVER,[Qw]:n.ALWAYS,[$w]:n.LESS,[Z0]:n.LEQUAL,[Kw]:n.EQUAL,[J0]:n.GEQUAL,[Zw]:n.GREATER,[Jw]:n.NOTEQUAL};function pe(R,M){if(M.type===yr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===kn||M.magFilter===rd||M.magFilter===uc||M.magFilter===fo||M.minFilter===kn||M.minFilter===rd||M.minFilter===uc||M.minFilter===fo)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ee[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ee[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ee[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Be[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Be[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==uc&&M.minFilter!==fo||M.type===yr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function K(R,M){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const j=M.source;let re=p.get(j);re===void 0&&(re={},p.set(j,re));const ue=F(M);if(ue!==R.__cacheKey){re[ue]===void 0&&(re[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[ue].usedTimes++;const _e=re[R.__cacheKey];_e!==void 0&&(re[R.__cacheKey].usedTimes--,_e.usedTimes===0&&b(M)),R.__cacheKey=ue,R.__webglTexture=re[ue].texture}return V}function Se(R,M,V){return Math.floor(Math.floor(R/V)/M)}function me(R,M,V,j){const ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,V,j,M.data);else{ue.sort((Pe,xe)=>Pe.start-xe.start);let _e=0;for(let Pe=1;Pe<ue.length;Pe++){const xe=ue[_e],ge=ue[Pe],$e=xe.start+xe.count,Ke=Se(ge.start,M.width,4),st=Se(xe.start,M.width,4);ge.start<=$e+1&&Ke===st&&Se(ge.start+ge.count-1,M.width,4)===Ke?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++_e,ue[_e]=ge)}ue.length=_e+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),Te=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Pe=0,xe=ue.length;Pe<xe;Pe++){const ge=ue[Pe],$e=Math.floor(ge.start/4),Ke=Math.ceil(ge.count/4),st=$e%M.width,U=Math.floor($e/M.width),de=Ke,Z=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,st,U,de,Z,V,j,M.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function Ue(R,M,V){let j=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=n.TEXTURE_3D);const re=K(R,M),ue=M.source;t.bindTexture(j,R.__webglTexture,n.TEXTURE0+V);const _e=i.get(ue);if(ue.version!==_e.__version||re===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Z=ht.getPrimaries(ht.workingColorSpace),be=M.colorSpace===xs?null:ht.getPrimaries(M.colorSpace),ve=M.colorSpace===xs||Z===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=_(M.image,!1,r.maxTextureSize);Q=fe(M,Q);const Te=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type);let xe=S(M.internalFormat,Te,Pe,M.normalized,M.colorSpace,M.isVideoTexture);pe(j,M);let ge;const $e=M.mipmaps,Ke=M.isVideoTexture!==!0,st=_e.__version===void 0||re===!0,U=ue.dataReady,de=E(M,Q);if(M.isDepthTexture)xe=T(M.format===ho,M.type),st&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,xe,Q.width,Q.height,0,Te,Pe,null));else if(M.isDataTexture)if($e.length>0){Ke&&st&&t.texStorage2D(n.TEXTURE_2D,de,xe,$e[0].width,$e[0].height);for(let Z=0,be=$e.length;Z<be;Z++)ge=$e[Z],Ke?U&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ge.width,ge.height,Te,Pe,ge.data):t.texImage2D(n.TEXTURE_2D,Z,xe,ge.width,ge.height,0,Te,Pe,ge.data);M.generateMipmaps=!1}else Ke?(st&&t.texStorage2D(n.TEXTURE_2D,de,xe,Q.width,Q.height),U&&me(M,Q,Te,Pe)):t.texImage2D(n.TEXTURE_2D,0,xe,Q.width,Q.height,0,Te,Pe,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,xe,$e[0].width,$e[0].height,Q.depth);for(let Z=0,be=$e.length;Z<be;Z++)if(ge=$e[Z],M.format!==Qi)if(Te!==null)if(Ke){if(U)if(M.layerUpdates.size>0){const ve=Gv(ge.width,ge.height,M.format,M.type);for(const se of M.layerUpdates){const Oe=ge.data.subarray(se*ve/ge.data.BYTES_PER_ELEMENT,(se+1)*ve/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,se,ge.width,ge.height,1,Te,Oe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ge.width,ge.height,Q.depth,Te,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,xe,ge.width,ge.height,Q.depth,0,ge.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ge.width,ge.height,Q.depth,Te,Pe,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,xe,ge.width,ge.height,Q.depth,0,Te,Pe,ge.data)}else{Ke&&st&&t.texStorage2D(n.TEXTURE_2D,de,xe,$e[0].width,$e[0].height);for(let Z=0,be=$e.length;Z<be;Z++)ge=$e[Z],M.format!==Qi?Te!==null?Ke?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,ge.width,ge.height,Te,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,xe,ge.width,ge.height,0,ge.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?U&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ge.width,ge.height,Te,Pe,ge.data):t.texImage2D(n.TEXTURE_2D,Z,xe,ge.width,ge.height,0,Te,Pe,ge.data)}else if(M.isDataArrayTexture)if(Ke){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,xe,Q.width,Q.height,Q.depth),U)if(M.layerUpdates.size>0){const Z=Gv(Q.width,Q.height,M.format,M.type);for(const be of M.layerUpdates){const ve=Q.data.subarray(be*Z/Q.data.BYTES_PER_ELEMENT,(be+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,be,Q.width,Q.height,1,Te,Pe,ve)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Te,Pe,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,Te,Pe,Q.data);else if(M.isData3DTexture)Ke?(st&&t.texStorage3D(n.TEXTURE_3D,de,xe,Q.width,Q.height,Q.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Te,Pe,Q.data)):t.texImage3D(n.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,Te,Pe,Q.data);else if(M.isFramebufferTexture){if(st)if(Ke)t.texStorage2D(n.TEXTURE_2D,de,xe,Q.width,Q.height);else{let Z=Q.width,be=Q.height;for(let ve=0;ve<de;ve++)t.texImage2D(n.TEXTURE_2D,ve,xe,Z,be,0,Te,Pe,null),Z>>=1,be>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),Q.parentNode!==Z){Z.appendChild(Q),f.add(M),Z.onpaint=Ze=>{const Ft=Ze.changedElements;for(const vt of f)Ft.includes(vt.image)&&(vt.needsUpdate=!0)},Z.requestPaint();return}const be=0,ve=n.RGBA,se=n.RGBA,Oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,be,ve,se,Oe,Q),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(Ke&&st){const Z=pt($e[0]);t.texStorage2D(n.TEXTURE_2D,de,xe,Z.width,Z.height)}for(let Z=0,be=$e.length;Z<be;Z++)ge=$e[Z],Ke?U&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Te,Pe,ge):t.texImage2D(n.TEXTURE_2D,Z,xe,Te,Pe,ge);M.generateMipmaps=!1}else if(Ke){if(st){const Z=pt(Q);t.texStorage2D(n.TEXTURE_2D,de,xe,Z.width,Z.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Pe,Q)}else t.texImage2D(n.TEXTURE_2D,0,xe,Te,Pe,Q);d(M)&&g(j),_e.__version=ue.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ge(R,M,V){if(M.image.length!==6)return;const j=K(R,M),re=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const ue=i.get(re);if(re.version!==ue.__version||j===!0){t.activeTexture(n.TEXTURE0+V);const _e=ht.getPrimaries(ht.workingColorSpace),q=M.colorSpace===xs?null:ht.getPrimaries(M.colorSpace),Q=M.colorSpace===xs||_e===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const Te=M.isCompressedTexture||M.image[0].isCompressedTexture,Pe=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!Te&&!Pe?xe[se]=_(M.image[se],!0,r.maxCubemapSize):xe[se]=Pe?M.image[se].image:M.image[se],xe[se]=fe(M,xe[se]);const ge=xe[0],$e=s.convert(M.format,M.colorSpace),Ke=s.convert(M.type),st=S(M.internalFormat,$e,Ke,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,de=ue.__version===void 0||j===!0,Z=re.dataReady;let be=E(M,ge);pe(n.TEXTURE_CUBE_MAP,M);let ve;if(Te){U&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,st,ge.width,ge.height);for(let se=0;se<6;se++){ve=xe[se].mipmaps;for(let Oe=0;Oe<ve.length;Oe++){const Ze=ve[Oe];M.format!==Qi?$e!==null?U?Z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,Ze.width,Ze.height,$e,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,st,Ze.width,Ze.height,0,Ze.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,Ze.width,Ze.height,$e,Ke,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,st,Ze.width,Ze.height,0,$e,Ke,Ze.data)}}}else{if(ve=M.mipmaps,U&&de){ve.length>0&&be++;const se=pt(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,st,se.width,se.height)}for(let se=0;se<6;se++)if(Pe){U?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,$e,Ke,xe[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,st,xe[se].width,xe[se].height,0,$e,Ke,xe[se].data);for(let Oe=0;Oe<ve.length;Oe++){const Ft=ve[Oe].image[se].image;U?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,Ft.width,Ft.height,$e,Ke,Ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,st,Ft.width,Ft.height,0,$e,Ke,Ft.data)}}else{U?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,$e,Ke,xe[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,st,$e,Ke,xe[se]);for(let Oe=0;Oe<ve.length;Oe++){const Ze=ve[Oe];U?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,$e,Ke,Ze.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,st,$e,Ke,Ze.image[se])}}}d(M)&&g(n.TEXTURE_CUBE_MAP),ue.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ve(R,M,V,j,re,ue){const _e=s.convert(V.format,V.colorSpace),q=s.convert(V.type),Q=S(V.internalFormat,_e,q,V.normalized,V.colorSpace),Te=i.get(M),Pe=i.get(V);if(Pe.__renderTarget=M,!Te.__hasExternalTextures){const xe=Math.max(1,M.width>>ue),ge=Math.max(1,M.height>>ue);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ue,Q,xe,ge,M.depth,0,_e,q,null):t.texImage2D(re,ue,Q,xe,ge,0,_e,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ie(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,re,Pe.__webglTexture,0,je(M)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,re,Pe.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(R,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const j=M.depthTexture,re=j&&j.isDepthTexture?j.type:null,ue=T(M.stencilBuffer,re),_e=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je(M),ue,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,je(M),ue,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ue,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,R)}else{const j=M.textures;for(let re=0;re<j.length;re++){const ue=j[re],_e=s.convert(ue.format,ue.colorSpace),q=s.convert(ue.type),Q=S(ue.internalFormat,_e,q,ue.normalized,ue.colorSpace);Ie(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je(M),Q,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,je(M),Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(R,M,V){const j=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(M.depthTexture);if(re.__renderTarget=M,(!re.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(re.__webglInit===void 0&&(re.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),re.__webglTexture===void 0){re.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),pe(n.TEXTURE_CUBE_MAP,M.depthTexture);const Te=s.convert(M.depthTexture.format),Pe=s.convert(M.depthTexture.type);let xe;M.depthTexture.format===Jr?xe=n.DEPTH_COMPONENT24:M.depthTexture.format===ho&&(xe=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,M.width,M.height,0,Te,Pe,null)}}else k(M.depthTexture,0);const ue=re.__webglTexture,_e=je(M),q=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,Q=M.depthTexture.format===ho?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Jr)Ie(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,q,ue,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Q,q,ue,0);else if(M.depthTexture.format===ho)Ie(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,q,ue,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Q,q,ue,0);else throw new Error("Unknown depthTexture format")}function ne(R){const M=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",re)};j.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=j}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let j=0;j<6;j++)Xe(M.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?Xe(M.__webglFramebuffer[0],R,0):Xe(M.__webglFramebuffer,R,0)}else if(V){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=n.createRenderbuffer(),ut(M.__webglDepthbuffer[j],R,!1);else{const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,ue)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ut(M.__webglDepthbuffer,R,!1);else{const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(R,M,V){const j=i.get(R);M!==void 0&&Ve(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ne(R)}function ie(R){const M=R.texture,V=i.get(R),j=i.get(M);R.addEventListener("dispose",y);const re=R.textures,ue=R.isWebGLCubeRenderTarget===!0,_e=re.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=M.version,o.memory.textures++),ue){V.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[q]=[];for(let Q=0;Q<M.mipmaps.length;Q++)V.__webglFramebuffer[q][Q]=n.createFramebuffer()}else V.__webglFramebuffer[q]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)V.__webglFramebuffer[q]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(_e)for(let q=0,Q=re.length;q<Q;q++){const Te=i.get(re[q]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Ie(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let q=0;q<re.length;q++){const Q=re[q];V.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[q]);const Te=s.convert(Q.format,Q.colorSpace),Pe=s.convert(Q.type),xe=S(Q.internalFormat,Te,Pe,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),ge=je(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,xe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,V.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),pe(n.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ve(V.__webglFramebuffer[q][Q],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Q);else Ve(V.__webglFramebuffer[q],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);d(M)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let q=0,Q=re.length;q<Q;q++){const Te=re[q],Pe=i.get(Te);let xe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,Pe.__webglTexture),pe(xe,Te),Ve(V.__webglFramebuffer,R,Te,n.COLOR_ATTACHMENT0+q,xe,0),d(Te)&&g(xe)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,j.__webglTexture),pe(q,M),M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ve(V.__webglFramebuffer[Q],R,M,n.COLOR_ATTACHMENT0,q,Q);else Ve(V.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,q,0);d(M)&&g(q),t.unbindTexture()}R.depthBuffer&&ne(R)}function Ee(R){const M=R.textures;for(let V=0,j=M.length;V<j;V++){const re=M[V];if(d(re)){const ue=x(R),_e=i.get(re).__webglTexture;t.bindTexture(ue,_e),g(ue),t.unbindTexture()}}}const ye=[],Ye=[];function L(R){if(R.samples>0){if(Ie(R)===!1){const M=R.textures,V=R.width,j=R.height;let re=n.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(R),q=M.length>1;if(q)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Te]);const Pe=i.get(M[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,V,j,0,0,V,j,re,n.NEAREST),l===!0&&(ye.length=0,Ye.length=0,ye.push(n.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ye.push(ue),Ye.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Te]);const Pe=i.get(M[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function je(R){return Math.min(r.maxSamples,R.samples)}function Ie(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function He(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function fe(R,M){const V=R.colorSpace,j=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Ff&&V!==xs&&(ht.getTransfer(V)===wt?(j!==Qi||re!==_i)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",V)),M}function pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.getTextureUnits=H,this.setTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=$,this.setTextureCube=J,this.rebindTextures=ce,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function E3(n,e){function t(i,r=xs){let s;const o=ht.getTransfer(r);if(i===_i)return n.UNSIGNED_BYTE;if(i===Y0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===q0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===QS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===eM)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ZS)return n.BYTE;if(i===JS)return n.SHORT;if(i===pu)return n.UNSIGNED_SHORT;if(i===X0)return n.INT;if(i===Cr)return n.UNSIGNED_INT;if(i===yr)return n.FLOAT;if(i===Zr)return n.HALF_FLOAT;if(i===tM)return n.ALPHA;if(i===nM)return n.RGB;if(i===Qi)return n.RGBA;if(i===Jr)return n.DEPTH_COMPONENT;if(i===ho)return n.DEPTH_STENCIL;if(i===iM)return n.RED;if(i===j0)return n.RED_INTEGER;if(i===Co)return n.RG;if(i===$0)return n.RG_INTEGER;if(i===K0)return n.RGBA_INTEGER;if(i===ef||i===tf||i===nf||i===rf)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ef)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ef)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zp||i===Jp||i===Qp||i===em)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===em)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tm||i===nm||i===im||i===rm||i===sm||i===If||i===om)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===tm||i===nm)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===im)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===rm)return s.COMPRESSED_R11_EAC;if(i===sm)return s.COMPRESSED_SIGNED_R11_EAC;if(i===If)return s.COMPRESSED_RG11_EAC;if(i===om)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===am||i===lm||i===um||i===cm||i===fm||i===hm||i===dm||i===pm||i===mm||i===gm||i===_m||i===vm||i===xm||i===ym)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===am)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===um)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_m)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ym)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sm||i===Mm||i===Em)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sm)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Em)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tm||i===wm||i===Uf||i===Am)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tm)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Am)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mu?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const T3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new hM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rr({vertexShader:T3,fragmentShader:w3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Fu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C3 extends Do{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,m=null;const v=typeof XRWebGLBinding<"u",_=new A3,d={},g=t.getContextAttributes();let x=null,S=null;const T=[],E=[],A=new Re;let y=null;const w=new Fi;w.viewport=new Zt;const b=new Fi;b.viewport=new Zt;const P=[w,b],I=new FC;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Se=T[K];return Se===void 0&&(Se=new cd,T[K]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(K){let Se=T[K];return Se===void 0&&(Se=new cd,T[K]=Se),Se.getGripSpace()},this.getHand=function(K){let Se=T[K];return Se===void 0&&(Se=new cd,T[K]=Se),Se.getHandSpace()};function D(K){const Se=E.indexOf(K.inputSource);if(Se===-1)return;const me=T[Se];me!==void 0&&(me.update(K.inputSource,K.frame,u||o),me.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",F);for(let K=0;K<T.length;K++){const Se=E[K];Se!==null&&(E[K]=null,T[K].disconnect(Se))}z=null,H=null,_.reset();for(const K in d)delete d[K];e.setRenderTarget(x),p=null,h=null,f=null,r=null,S=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",B),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,Ge=null;g.depth&&(Ge=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=g.stencil?ho:Jr,Ue=g.stencil?mu:Cr);const Ve={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Ar(h.textureWidth,h.textureHeight,{format:Qi,type:_i,depthTexture:new Va(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ar(p.framebufferWidth,p.framebufferHeight,{format:Qi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(K){for(let Se=0;Se<K.removed.length;Se++){const me=K.removed[Se],Ue=E.indexOf(me);Ue>=0&&(E[Ue]=null,T[Ue].disconnect(me))}for(let Se=0;Se<K.added.length;Se++){const me=K.added[Se];let Ue=E.indexOf(me);if(Ue===-1){for(let Ve=0;Ve<T.length;Ve++)if(Ve>=E.length){E.push(me),Ue=Ve;break}else if(E[Ve]===null){E[Ve]=me,Ue=Ve;break}if(Ue===-1)break}const Ge=T[Ue];Ge&&Ge.connect(me)}}const k=new N,Y=new N;function $(K,Se,me){k.setFromMatrixPosition(Se.matrixWorld),Y.setFromMatrixPosition(me.matrixWorld);const Ue=k.distanceTo(Y),Ge=Se.projectionMatrix.elements,Ve=me.projectionMatrix.elements,ut=Ge[14]/(Ge[10]-1),Xe=Ge[14]/(Ge[10]+1),ne=(Ge[9]+1)/Ge[5],ce=(Ge[9]-1)/Ge[5],ie=(Ge[8]-1)/Ge[0],Ee=(Ve[8]+1)/Ve[0],ye=ut*ie,Ye=ut*Ee,L=Ue/(-ie+Ee),je=L*-ie;if(Se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(je),K.translateZ(L),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ge[10]===-1)K.projectionMatrix.copy(Se.projectionMatrix),K.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const Ie=ut+L,He=Xe+L,fe=ye-je,pt=Ye+(Ue-je),R=ne*Xe/He*Ie,M=ce*Xe/He*Ie;K.projectionMatrix.makePerspective(fe,pt,R,M,Ie,He),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,Se){Se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let Se=K.near,me=K.far;_.texture!==null&&(_.depthNear>0&&(Se=_.depthNear),_.depthFar>0&&(me=_.depthFar)),I.near=b.near=w.near=Se,I.far=b.far=w.far=me,(z!==I.near||H!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,H=I.far),I.layers.mask=K.layers.mask|6,w.layers.mask=I.layers.mask&-5,b.layers.mask=I.layers.mask&-3;const Ue=K.parent,Ge=I.cameras;J(I,Ue);for(let Ve=0;Ve<Ge.length;Ve++)J(Ge[Ve],Ue);Ge.length===2?$(I,w,b):I.projectionMatrix.copy(w.projectionMatrix),ee(K,I,Ue)};function ee(K,Se,me){me===null?K.matrix.copy(Se.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(Se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Se.projectionMatrix),K.projectionMatrixInverse.copy(Se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_u*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(K){return d[K]};let Be=null;function Me(K,Se){if(c=Se.getViewerPose(u||o),m=Se,c!==null){const me=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ue=!1;me.length!==I.cameras.length&&(I.cameras.length=0,Ue=!0);for(let Xe=0;Xe<me.length;Xe++){const ne=me[Xe];let ce=null;if(p!==null)ce=p.getViewport(ne);else{const Ee=f.getViewSubImage(h,ne);ce=Ee.viewport,Xe===0&&(e.setRenderTargetTextures(S,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(S))}let ie=P[Xe];ie===void 0&&(ie=new Fi,ie.layers.enable(Xe),ie.viewport=new Zt,P[Xe]=ie),ie.matrix.fromArray(ne.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ne.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ce.x,ce.y,ce.width,ce.height),Xe===0&&(I.matrix.copy(ie.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ue===!0&&I.cameras.push(ie)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Xe=f.getDepthInformation(me[0]);Xe&&Xe.isValid&&Xe.texture&&_.init(Xe,r.renderState)}if(Ge&&Ge.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Xe=0;Xe<me.length;Xe++){const ne=me[Xe].camera;if(ne){let ce=d[ne];ce||(ce=new hM,d[ne]=ce);const ie=f.getCameraImage(ne);ce.sourceTexture=ie}}}}for(let me=0;me<T.length;me++){const Ue=E[me],Ge=T[me];Ue!==null&&Ge!==void 0&&Ge.update(Ue,Se,u||o)}Be&&Be(K,Se),Se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Se}),m=null}const pe=new TM;pe.setAnimationLoop(Me),this.setAnimationLoop=function(K){Be=K},this.dispose=function(){}}}const R3=new Vt,LM=new et;LM.set(-1,0,0,0,1,0,0,0,1);function b3(n,e){function t(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function i(_,d){d.color.getRGB(_.fogColor.value,SM(n)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,g,x,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(_,d):d.isMeshLambertMaterial?(s(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(_,d),f(_,d)):d.isMeshPhongMaterial?(s(_,d),c(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(_,d),h(_,d),d.isMeshPhysicalMaterial&&p(_,d,S)):d.isMeshMatcapMaterial?(s(_,d),m(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),v(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(o(_,d),d.isLineDashedMaterial&&a(_,d)):d.isPointsMaterial?l(_,d,g,x):d.isSpriteMaterial?u(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,t(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===ii&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,t(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===ii&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,t(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,t(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const g=e.get(d),x=g.envMap,S=g.envMapRotation;x&&(_.envMap.value=x,_.envMapRotation.value.setFromMatrix4(R3.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(LM),_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,_.aoMapTransform))}function o(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform))}function a(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,g,x){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*g,_.scale.value=x*.5,d.map&&(_.map.value=d.map,t(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function f(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function h(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function p(_,d,g){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ii&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,d){d.matcap&&(_.matcap.value=d.matcap)}function v(_,d){const g=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function P3(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function u(g,x){let S=r[g.id];S===void 0&&(m(g),S=c(g),r[g.id]=S,g.addEventListener("dispose",_));const T=x.program;i.updateUBOMapping(g,T);const E=e.render.frame;s[g.id]!==E&&(h(g),s[g.id]=E)}function c(g){const x=f();g.__bindingPointIndex=x;const S=n.createBuffer(),T=g.__size,E=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],S=g.uniforms,T=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,A=S.length;E<A;E++){const y=Array.isArray(S[E])?S[E]:[S[E]];for(let w=0,b=y.length;w<b;w++){const P=y[w];if(p(P,E,w,T)===!0){const I=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let D=0;D<z.length;D++){const B=z[D],F=v(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,I+H,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):ArrayBuffer.isView(B)?P.__data.set(new B.constructor(B.buffer,B.byteOffset,P.__data.length)):(B.toArray(P.__data,H),H+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,x,S,T){const E=g.value,A=x+"_"+S;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:ArrayBuffer.isView(E)?T[A]=E.slice():T[A]=E.clone(),!0;{const y=T[A];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return T[A]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(y.equals(E)===!1)return y.copy(E),!0}}return!1}function m(g){const x=g.uniforms;let S=0;const T=16;for(let A=0,y=x.length;A<y;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,P=w.length;b<P;b++){const I=w[b],z=Array.isArray(I.value)?I.value:[I.value];for(let H=0,D=z.length;H<D;H++){const B=z[H],F=v(B),k=S%T,Y=k%F.boundary,$=k+Y;S+=Y,$!==0&&T-$<F.storage&&(S+=T-$),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=F.storage}}}const E=S%T;return E>0&&(S+=T-E),g.__size=S,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(x.boundary=16,x.storage=g.byteLength):We("WebGLRenderer: Unsupported uniform value type.",g),x}function _(g){const x=g.target;x.removeEventListener("dispose",_);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}const L3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dr=null;function D3(){return dr===null&&(dr=new zA(L3,16,16,Co,Zr),dr.name="DFG_LUT",dr.minFilter=kn,dr.magFilter=kn,dr.wrapS=Hr,dr.wrapT=Hr,dr.generateMipmaps=!1,dr.needsUpdate=!0),dr}class N3{constructor(e={}){const{canvas:t=tA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=_i}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=p,_=new Set([K0,$0,j0]),d=new Set([_i,Cr,pu,mu,Y0,q0]),g=new Uint32Array(4),x=new Int32Array(4),S=new N;let T=null,E=null;const A=[],y=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,I=null;this._outputColorSpace=Ni;let z=0,H=0,D=null,B=-1,F=null;const k=new Zt,Y=new Zt;let $=null;const J=new it(0);let ee=0,Be=t.width,Me=t.height,pe=1,K=null,Se=null;const me=new Zt(0,0,Be,Me),Ue=new Zt(0,0,Be,Me);let Ge=!1;const Ve=new ig;let ut=!1,Xe=!1;const ne=new Vt,ce=new N,ie=new Zt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Ye(){return D===null?pe:1}let L=i;function je(C,O){return t.getContext(C,O)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${W0}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),L===null){const O="webgl2";if(L=je(O,C),L===null)throw je(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw mt("WebGLRenderer: "+C.message),C}let Ie,He,fe,pt,R,M,V,j,re,ue,_e,q,Q,Te,Pe,xe,ge,$e,Ke,st,U,de,Z;function be(){Ie=new D2(L),Ie.init(),U=new E3(L,Ie),He=new T2(L,Ie,e,U),fe=new S3(L,Ie),He.reversedDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),pt=new U2(L),R=new a3,M=new M3(L,Ie,fe,R,He,U,pt),V=new L2(b),j=new zC(L),de=new M2(L,j),re=new N2(L,j,pt,de),ue=new O2(L,re,j,de,pt),$e=new F2(L,He,M),Pe=new w2(R),_e=new o3(b,V,Ie,He,de,Pe),q=new b3(b,R),Q=new u3,Te=new m3(Ie),ge=new S2(b,V,fe,ue,m,l),xe=new y3(b,ue,He),Z=new P3(L,pt,He,fe),Ke=new E2(L,Ie,pt),st=new I2(L,Ie,pt),pt.programs=_e.programs,b.capabilities=He,b.extensions=Ie,b.properties=R,b.renderLists=Q,b.shadowMap=xe,b.state=fe,b.info=pt}be(),v!==_i&&(w=new z2(v,t.width,t.height,r,s));const ve=new C3(b,L);this.xr=ve,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=Ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(C){C!==void 0&&(pe=C,this.setSize(Be,Me,!1))},this.getSize=function(C){return C.set(Be,Me)},this.setSize=function(C,O,X=!0){if(ve.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=C,Me=O,t.width=Math.floor(C*pe),t.height=Math.floor(O*pe),X===!0&&(t.style.width=C+"px",t.style.height=O+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(Be*pe,Me*pe).floor()},this.setDrawingBufferSize=function(C,O,X){Be=C,Me=O,pe=X,t.width=Math.floor(C*X),t.height=Math.floor(O*X),this.setViewport(0,0,C,O)},this.setEffects=function(C){if(v===_i){mt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let O=0;O<C.length;O++)if(C[O].isOutputPass===!0){We("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(me)},this.setViewport=function(C,O,X,G){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,O,X,G),fe.viewport(k.copy(me).multiplyScalar(pe).round())},this.getScissor=function(C){return C.copy(Ue)},this.setScissor=function(C,O,X,G){C.isVector4?Ue.set(C.x,C.y,C.z,C.w):Ue.set(C,O,X,G),fe.scissor(Y.copy(Ue).multiplyScalar(pe).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(C){fe.setScissorTest(Ge=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){Se=C},this.getClearColor=function(C){return C.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(C=!0,O=!0,X=!0){let G=0;if(C){let W=!1;if(D!==null){const Ae=D.texture.format;W=_.has(Ae)}if(W){const Ae=D.texture.type,Le=d.has(Ae),we=ge.getClearColor(),Fe=ge.getClearAlpha(),ze=we.r,Je=we.g,tt=we.b;Le?(g[0]=ze,g[1]=Je,g[2]=tt,g[3]=Fe,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=ze,x[1]=Je,x[2]=tt,x[3]=Fe,L.clearBufferiv(L.COLOR,0,x))}else G|=L.COLOR_BUFFER_BIT}O&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),ge.dispose(),Q.dispose(),Te.dispose(),R.dispose(),V.dispose(),ue.dispose(),de.dispose(),Z.dispose(),_e.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Uo),ve.removeEventListener("sessionend",nl),ir.stop()};function se(C){C.preventDefault(),ov("WebGLRenderer: Context Lost."),P=!0}function Oe(){ov("WebGLRenderer: Context Restored."),P=!1;const C=pt.autoReset,O=xe.enabled,X=xe.autoUpdate,G=xe.needsUpdate,W=xe.type;be(),pt.autoReset=C,xe.enabled=O,xe.autoUpdate=X,xe.needsUpdate=G,xe.type=W}function Ze(C){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ft(C){const O=C.target;O.removeEventListener("dispose",Ft),vt(O)}function vt(C){$n(C),R.remove(C)}function $n(C){const O=R.get(C).programs;O!==void 0&&(O.forEach(function(X){_e.releaseProgram(X)}),C.isShaderMaterial&&_e.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,X,G,W,Ae){O===null&&(O=Ee);const Le=W.isMesh&&W.matrixWorld.determinant()<0,we=sl(C,O,X,G,W);fe.setMaterial(G,Le);let Fe=X.index,ze=1;if(G.wireframe===!0){if(Fe=re.getWireframeAttribute(X),Fe===void 0)return;ze=2}const Je=X.drawRange,tt=X.attributes.position;let ke=Je.start*ze,xt=(Je.start+Je.count)*ze;Ae!==null&&(ke=Math.max(ke,Ae.start*ze),xt=Math.min(xt,(Ae.start+Ae.count)*ze)),Fe!==null?(ke=Math.max(ke,0),xt=Math.min(xt,Fe.count)):tt!=null&&(ke=Math.max(ke,0),xt=Math.min(xt,tt.count));const Ot=xt-ke;if(Ot<0||Ot===1/0)return;de.setup(W,G,we,X,Fe);let Pt,Mt=Ke;if(Fe!==null&&(Pt=j.get(Fe),Mt=st,Mt.setIndex(Pt)),W.isMesh)G.wireframe===!0?(fe.setLineWidth(G.wireframeLinewidth*Ye()),Mt.setMode(L.LINES)):Mt.setMode(L.TRIANGLES);else if(W.isLine){let dn=G.linewidth;dn===void 0&&(dn=1),fe.setLineWidth(dn*Ye()),W.isLineSegments?Mt.setMode(L.LINES):W.isLineLoop?Mt.setMode(L.LINE_LOOP):Mt.setMode(L.LINE_STRIP)}else W.isPoints?Mt.setMode(L.POINTS):W.isSprite&&Mt.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))Mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const dn=W._multiDrawStarts,De=W._multiDrawCounts,pn=W._multiDrawCount,at=Fe?j.get(Fe).bytesPerElement:1,bn=R.get(G).currentProgram.getUniforms();for(let bi=0;bi<pn;bi++)bn.setValue(L,"_gl_DrawID",bi),Mt.render(dn[bi]/at,De[bi])}else if(W.isInstancedMesh)Mt.renderInstances(ke,Ot,W.count);else if(X.isInstancedBufferGeometry){const dn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,De=Math.min(X.instanceCount,dn);Mt.renderInstances(ke,Ot,De)}else Mt.render(ke,Ot)};function Gn(C,O,X){C.transparent===!0&&C.side===Br&&C.forceSinglePass===!1?(C.side=ii,C.needsUpdate=!0,rr(C,O,X),C.side=ks,C.needsUpdate=!0,rr(C,O,X),C.side=Br):rr(C,O,X)}this.compile=function(C,O,X=null){X===null&&(X=C),E=Te.get(X),E.init(O),y.push(E),X.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),C!==X&&C.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights();const G=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){const we=Ae[Le];Gn(we,X,W),G.add(we)}else Gn(Ae,X,W),G.add(Ae)}),E=y.pop(),G},this.compileAsync=function(C,O,X=null){const G=this.compile(C,O,X);return new Promise(W=>{function Ae(){if(G.forEach(function(Le){R.get(Le).currentProgram.isReady()&&G.delete(Le)}),G.size===0){W(C);return}setTimeout(Ae,10)}Ie.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let ns=null;function tl(C){ns&&ns(C)}function Uo(){ir.stop()}function nl(){ir.start()}const ir=new TM;ir.setAnimationLoop(tl),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(C){ns=C,ve.setAnimationLoop(C),C===null?ir.stop():ir.start()},ve.addEventListener("sessionstart",Uo),ve.addEventListener("sessionend",nl),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(C,O);const X=ve.enabled===!0&&ve.isPresenting===!0,G=w!==null&&(D===null||X)&&w.begin(b,D);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,O,D),E=Te.get(C,y.length),E.init(O),E.state.textureUnits=M.getTextureUnits(),y.push(E),ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ve.setFromProjectionMatrix(ne,Sr,O.reversedDepth),Xe=this.localClippingEnabled,ut=Pe.init(this.clippingPlanes,Xe),T=Q.get(C,A.length),T.init(),A.push(T),ve.enabled===!0&&ve.isPresenting===!0){const Le=b.xr.getDepthSensingMesh();Le!==null&&Fo(Le,O,-1/0,b.sortObjects)}Fo(C,O,0,b.sortObjects),T.finish(),b.sortObjects===!0&&T.sort(K,Se),ye=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,ye&&ge.addToRenderList(T,C),this.info.render.frame++,ut===!0&&Pe.beginShadows();const W=E.state.shadowsArray;if(xe.render(W,C,O),ut===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&w.hasRenderPass())===!1){const Le=T.opaque,we=T.transmissive;if(E.setupLights(),O.isArrayCamera){const Fe=O.cameras;if(we.length>0)for(let ze=0,Je=Fe.length;ze<Je;ze++){const tt=Fe[ze];Oo(Le,we,C,tt)}ye&&ge.render(C);for(let ze=0,Je=Fe.length;ze<Je;ze++){const tt=Fe[ze];En(T,C,tt,tt.viewport)}}else we.length>0&&Oo(Le,we,C,O),ye&&ge.render(C),En(T,C,O)}D!==null&&H===0&&(M.updateMultisampleRenderTarget(D),M.updateRenderTargetMipmap(D)),G&&w.end(b),C.isScene===!0&&C.onAfterRender(b,C,O),de.resetDefaultState(),B=-1,F=null,y.pop(),y.length>0?(E=y[y.length-1],M.setTextureUnits(E.state.textureUnits),ut===!0&&Pe.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,I!==null&&I.renderEnd()};function Fo(C,O,X,G){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLightProbeGrid)E.pushLightProbeGrid(C);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ve.intersectsSprite(C)){G&&ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ne);const Le=ue.update(C),we=C.material;we.visible&&T.push(C,Le,we,X,ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ve.intersectsObject(C))){const Le=ue.update(C),we=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ie.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ie.copy(Le.boundingSphere.center)),ie.applyMatrix4(C.matrixWorld).applyMatrix4(ne)),Array.isArray(we)){const Fe=Le.groups;for(let ze=0,Je=Fe.length;ze<Je;ze++){const tt=Fe[ze],ke=we[tt.materialIndex];ke&&ke.visible&&T.push(C,Le,ke,X,ie.z,tt)}}else we.visible&&T.push(C,Le,we,X,ie.z,null)}}const Ae=C.children;for(let Le=0,we=Ae.length;Le<we;Le++)Fo(Ae[Le],O,X,G)}function En(C,O,X,G){const{opaque:W,transmissive:Ae,transparent:Le}=C;E.setupLightsView(X),ut===!0&&Pe.setGlobalState(b.clippingPlanes,X),G&&fe.viewport(k.copy(G)),W.length>0&&is(W,O,X),Ae.length>0&&is(Ae,O,X),Le.length>0&&is(Le,O,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Oo(C,O,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const ke=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Ar(1,1,{generateMipmaps:!0,type:ke?Zr:_i,minFilter:fo,samples:Math.max(4,He.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const Ae=E.state.transmissionRenderTarget[G.id],Le=G.viewport||k;Ae.setSize(Le.z*b.transmissionResolutionScale,Le.w*b.transmissionResolutionScale);const we=b.getRenderTarget(),Fe=b.getActiveCubeFace(),ze=b.getActiveMipmapLevel();b.setRenderTarget(Ae),b.getClearColor(J),ee=b.getClearAlpha(),ee<1&&b.setClearColor(16777215,.5),b.clear(),ye&&ge.render(X);const Je=b.toneMapping;b.toneMapping=wr;const tt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),ut===!0&&Pe.setGlobalState(b.clippingPlanes,G),is(C,X,G),M.updateMultisampleRenderTarget(Ae),M.updateRenderTargetMipmap(Ae),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let xt=0,Ot=O.length;xt<Ot;xt++){const Pt=O[xt],{object:Mt,geometry:dn,material:De,group:pn}=Pt;if(De.side===Br&&Mt.layers.test(G.layers)){const at=De.side;De.side=ii,De.needsUpdate=!0,xh(Mt,X,G,dn,De,pn),De.side=at,De.needsUpdate=!0,ke=!0}}ke===!0&&(M.updateMultisampleRenderTarget(Ae),M.updateRenderTargetMipmap(Ae))}b.setRenderTarget(we,Fe,ze),b.setClearColor(J,ee),tt!==void 0&&(G.viewport=tt),b.toneMapping=Je}function is(C,O,X){const G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Ae=C.length;W<Ae;W++){const Le=C[W],{object:we,geometry:Fe,group:ze}=Le;let Je=Le.material;Je.allowOverride===!0&&G!==null&&(Je=G),we.layers.test(X.layers)&&xh(we,O,X,Fe,Je,ze)}}function xh(C,O,X,G,W,Ae){C.onBeforeRender(b,O,X,G,W,Ae),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(b,O,X,G,C,Ae),W.transparent===!0&&W.side===Br&&W.forceSinglePass===!1?(W.side=ii,W.needsUpdate=!0,b.renderBufferDirect(X,O,G,W,C,Ae),W.side=ks,W.needsUpdate=!0,b.renderBufferDirect(X,O,G,W,C,Ae),W.side=Br):b.renderBufferDirect(X,O,G,W,C,Ae),C.onAfterRender(b,O,X,G,W,Ae)}function rr(C,O,X){O.isScene!==!0&&(O=Ee);const G=R.get(C),W=E.state.lights,Ae=E.state.shadowsArray,Le=W.state.version,we=_e.getParameters(C,W.state,Ae,O,X,E.state.lightProbeGridArray),Fe=_e.getProgramCacheKey(we);let ze=G.programs;G.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Je=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;G.envMap=V.get(C.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,ze===void 0&&(C.addEventListener("dispose",Ft),ze=new Map,G.programs=ze);let tt=ze.get(Fe);if(tt!==void 0){if(G.currentProgram===tt&&G.lightsStateVersion===Le)return rl(C,we),tt}else we.uniforms=_e.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,X,we),C.onBeforeCompile(we,b),tt=_e.acquireProgram(we,Fe),ze.set(Fe,tt),G.uniforms=we.uniforms;const ke=G.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=Pe.uniform),rl(C,we),G.needsLights=ol(C),G.lightsStateVersion=Le,G.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=tt,G.uniformsList=null,tt}function il(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=sf.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function rl(C,O){const X=R.get(C);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function ku(C,O){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let X=0,G=C.length;X<G;X++){const W=C[X];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function sl(C,O,X,G,W){O.isScene!==!0&&(O=Ee),M.resetTextureUnits();const Ae=O.fog,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,we=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ht.workingColorSpace,Fe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,ze=V.get(G.envMap||Le,Fe),Je=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,tt=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ke=!!X.morphAttributes.position,xt=!!X.morphAttributes.normal,Ot=!!X.morphAttributes.color;let Pt=wr;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Pt=b.toneMapping);const Mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dn=Mt!==void 0?Mt.length:0,De=R.get(G),pn=E.state.lights;if(ut===!0&&(Xe===!0||C!==F)){const Tt=C===F&&G.id===B;Pe.setState(G,C,Tt)}let at=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==pn.state.version||De.outputColorSpace!==we||W.isBatchedMesh&&De.batching===!1||!W.isBatchedMesh&&De.batching===!0||W.isBatchedMesh&&De.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&De.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||W.isInstancedMesh&&De.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&De.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&De.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&De.instancingMorph===!1&&W.morphTexture!==null||De.envMap!==ze||G.fog===!0&&De.fog!==Ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Pe.numPlanes||De.numIntersection!==Pe.numIntersection)||De.vertexAlphas!==Je||De.vertexTangents!==tt||De.morphTargets!==ke||De.morphNormals!==xt||De.morphColors!==Ot||De.toneMapping!==Pt||De.morphTargetsCount!==dn||!!De.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,De.__version=G.version);let bn=De.currentProgram;at===!0&&(bn=rr(G,O,W),I&&G.isNodeMaterial&&I.onUpdateProgram(G,bn,De));let bi=!1,Pi=!1,Xi=!1;const yt=bn.getUniforms(),kt=De.uniforms;if(fe.useProgram(bn.program)&&(bi=!0,Pi=!0,Xi=!0),G.id!==B&&(B=G.id,Pi=!0),De.needsLights){const Tt=ku(E.state.lightProbeGridArray,W);De.lightProbeGrid!==Tt&&(De.lightProbeGrid=Tt,Pi=!0)}if(bi||F!==C){fe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),yt.setValue(L,"projectionMatrix",C.projectionMatrix),yt.setValue(L,"viewMatrix",C.matrixWorldInverse);const ui=yt.map.cameraPosition;ui!==void 0&&ui.setValue(L,ce.setFromMatrixPosition(C.matrixWorld)),He.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&yt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),F!==C&&(F=C,Pi=!0,Xi=!0)}if(De.needsLights&&(pn.state.directionalShadowMap.length>0&&yt.setValue(L,"directionalShadowMap",pn.state.directionalShadowMap,M),pn.state.spotShadowMap.length>0&&yt.setValue(L,"spotShadowMap",pn.state.spotShadowMap,M),pn.state.pointShadowMap.length>0&&yt.setValue(L,"pointShadowMap",pn.state.pointShadowMap,M)),W.isSkinnedMesh){yt.setOptional(L,W,"bindMatrix"),yt.setOptional(L,W,"bindMatrixInverse");const Tt=W.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),yt.setValue(L,"boneTexture",Tt.boneTexture,M))}W.isBatchedMesh&&(yt.setOptional(L,W,"batchingTexture"),yt.setValue(L,"batchingTexture",W._matricesTexture,M),yt.setOptional(L,W,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",W._indirectTexture,M),yt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",W._colorsTexture,M));const sr=X.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&$e.update(W,X,bn),(Pi||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,yt.setValue(L,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(kt.envMapIntensity.value=O.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=D3()),Pi){if(yt.setValue(L,"toneMappingExposure",b.toneMappingExposure),De.needsLights&&ko(kt,Xi),Ae&&G.fog===!0&&q.refreshFogUniforms(kt,Ae),q.refreshMaterialUniforms(kt,G,pe,Me,E.state.transmissionRenderTarget[C.id]),De.needsLights&&De.lightProbeGrid){const Tt=De.lightProbeGrid;kt.probesSH.value=Tt.texture,kt.probesMin.value.copy(Tt.boundingBox.min),kt.probesMax.value.copy(Tt.boundingBox.max),kt.probesResolution.value.copy(Tt.resolution)}sf.upload(L,il(De),kt,M)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(sf.upload(L,il(De),kt,M),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&yt.setValue(L,"center",W.center),yt.setValue(L,"modelViewMatrix",W.modelViewMatrix),yt.setValue(L,"normalMatrix",W.normalMatrix),yt.setValue(L,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const Tt=G.uniformsGroups;for(let ui=0,ci=Tt.length;ui<ci;ui++){const al=Tt[ui];Z.update(al,bn),Z.bind(al,bn)}}return bn}function ko(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function ol(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,O,X){const G=R.get(C);G.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),R.get(C.texture).__webglTexture=O,R.get(C.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,O){const X=R.get(C);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const zu=L.createFramebuffer();this.setRenderTarget=function(C,O=0,X=0){D=C,z=O,H=X;let G=null,W=!1,Ae=!1;if(C){const we=R.get(C);if(we.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(L.FRAMEBUFFER,we.__webglFramebuffer),k.copy(C.viewport),Y.copy(C.scissor),$=C.scissorTest,fe.viewport(k),fe.scissor(Y),fe.setScissorTest($),B=-1;return}else if(we.__webglFramebuffer===void 0)M.setupRenderTarget(C);else if(we.__hasExternalTextures)M.rebindTextures(C,R.get(C.texture).__webglTexture,R.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Je=C.depthTexture;if(we.__boundDepthTexture!==Je){if(Je!==null&&R.has(Je)&&(C.width!==Je.image.width||C.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(C)}}const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ae=!0);const ze=R.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?G=ze[O][X]:G=ze[O],W=!0):C.samples>0&&M.useMultisampledRTT(C)===!1?G=R.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?G=ze[X]:G=ze,k.copy(C.viewport),Y.copy(C.scissor),$=C.scissorTest}else k.copy(me).multiplyScalar(pe).floor(),Y.copy(Ue).multiplyScalar(pe).floor(),$=Ge;if(X!==0&&(G=zu),fe.bindFramebuffer(L.FRAMEBUFFER,G)&&fe.drawBuffers(C,G),fe.viewport(k),fe.scissor(Y),fe.setScissorTest($),W){const we=R.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,X)}else if(Ae){const we=O;for(let Fe=0;Fe<C.textures.length;Fe++){const ze=R.get(C.textures[Fe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,X,we)}}else if(C!==null&&X!==0){const we=R.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,X)}B=-1},this.readRenderTargetPixels=function(C,O,X,G,W,Ae,Le,we=0){if(!(C&&C.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=R.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){fe.bindFramebuffer(L.FRAMEBUFFER,Fe);try{const ze=C.textures[we],Je=ze.format,tt=ze.type;if(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),!He.textureFormatReadable(Je)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(tt)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-G&&X>=0&&X<=C.height-W&&L.readPixels(O,X,G,W,U.convert(Je),U.convert(tt),Ae)}finally{const ze=D!==null?R.get(D).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,O,X,G,W,Ae,Le,we=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=R.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(O>=0&&O<=C.width-G&&X>=0&&X<=C.height-W){fe.bindFramebuffer(L.FRAMEBUFFER,Fe);const ze=C.textures[we],Je=ze.format,tt=ze.type;if(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),!He.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,Ae.byteLength,L.STREAM_READ),L.readPixels(O,X,G,W,U.convert(Je),U.convert(tt),0);const xt=D!==null?R.get(D).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,xt);const Ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await nA(L,Ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ae),L.deleteBuffer(ke),L.deleteSync(Ot),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,O=null,X=0){const G=Math.pow(2,-X),W=Math.floor(C.image.width*G),Ae=Math.floor(C.image.height*G),Le=O!==null?O.x:0,we=O!==null?O.y:0;M.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Le,we,W,Ae),fe.unbindTexture()};const Bu=L.createFramebuffer(),Vu=L.createFramebuffer();this.copyTextureToTexture=function(C,O,X=null,G=null,W=0,Ae=0){let Le,we,Fe,ze,Je,tt,ke,xt,Ot;const Pt=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(X!==null)Le=X.max.x-X.min.x,we=X.max.y-X.min.y,Fe=X.isBox3?X.max.z-X.min.z:1,ze=X.min.x,Je=X.min.y,tt=X.isBox3?X.min.z:0;else{const kt=Math.pow(2,-W);Le=Math.floor(Pt.width*kt),we=Math.floor(Pt.height*kt),C.isDataArrayTexture?Fe=Pt.depth:C.isData3DTexture?Fe=Math.floor(Pt.depth*kt):Fe=1,ze=0,Je=0,tt=0}G!==null?(ke=G.x,xt=G.y,Ot=G.z):(ke=0,xt=0,Ot=0);const Mt=U.convert(O.format),dn=U.convert(O.type);let De;O.isData3DTexture?(M.setTexture3D(O,0),De=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(M.setTexture2DArray(O,0),De=L.TEXTURE_2D_ARRAY):(M.setTexture2D(O,0),De=L.TEXTURE_2D),fe.activeTexture(L.TEXTURE0),fe.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),fe.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),fe.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const pn=fe.getParameter(L.UNPACK_ROW_LENGTH),at=fe.getParameter(L.UNPACK_IMAGE_HEIGHT),bn=fe.getParameter(L.UNPACK_SKIP_PIXELS),bi=fe.getParameter(L.UNPACK_SKIP_ROWS),Pi=fe.getParameter(L.UNPACK_SKIP_IMAGES);fe.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),fe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),fe.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),fe.pixelStorei(L.UNPACK_SKIP_ROWS,Je),fe.pixelStorei(L.UNPACK_SKIP_IMAGES,tt);const Xi=C.isDataArrayTexture||C.isData3DTexture,yt=O.isDataArrayTexture||O.isData3DTexture;if(C.isDepthTexture){const kt=R.get(C),sr=R.get(O),Tt=R.get(kt.__renderTarget),ui=R.get(sr.__renderTarget);fe.bindFramebuffer(L.READ_FRAMEBUFFER,Tt.__webglFramebuffer),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let ci=0;ci<Fe;ci++)Xi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,R.get(C).__webglTexture,W,tt+ci),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,R.get(O).__webglTexture,Ae,Ot+ci)),L.blitFramebuffer(ze,Je,Le,we,ke,xt,Le,we,L.DEPTH_BUFFER_BIT,L.NEAREST);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||C.isRenderTargetTexture||R.has(C)){const kt=R.get(C),sr=R.get(O);fe.bindFramebuffer(L.READ_FRAMEBUFFER,Bu),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vu);for(let Tt=0;Tt<Fe;Tt++)Xi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,W,tt+Tt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,W),yt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sr.__webglTexture,Ae,Ot+Tt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sr.__webglTexture,Ae),W!==0?L.blitFramebuffer(ze,Je,Le,we,ke,xt,Le,we,L.COLOR_BUFFER_BIT,L.NEAREST):yt?L.copyTexSubImage3D(De,Ae,ke,xt,Ot+Tt,ze,Je,Le,we):L.copyTexSubImage2D(De,Ae,ke,xt,ze,Je,Le,we);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else yt?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(De,Ae,ke,xt,Ot,Le,we,Fe,Mt,dn,Pt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(De,Ae,ke,xt,Ot,Le,we,Fe,Mt,Pt.data):L.texSubImage3D(De,Ae,ke,xt,Ot,Le,we,Fe,Mt,dn,Pt):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ae,ke,xt,Le,we,Mt,dn,Pt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ae,ke,xt,Pt.width,Pt.height,Mt,Pt.data):L.texSubImage2D(L.TEXTURE_2D,Ae,ke,xt,Le,we,Mt,dn,Pt);fe.pixelStorei(L.UNPACK_ROW_LENGTH,pn),fe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at),fe.pixelStorei(L.UNPACK_SKIP_PIXELS,bn),fe.pixelStorei(L.UNPACK_SKIP_ROWS,bi),fe.pixelStorei(L.UNPACK_SKIP_IMAGES,Pi),Ae===0&&O.generateMipmaps&&L.generateMipmap(De),fe.unbindTexture()},this.initRenderTarget=function(C){R.get(C).__webglFramebuffer===void 0&&M.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?M.setTextureCube(C,0):C.isData3DTexture?M.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?M.setTexture2DArray(C,0):M.setTexture2D(C,0),fe.unbindTexture()},this.resetState=function(){z=0,H=0,D=null,fe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}function Or(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function DM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Su={duration:.5,overwrite:!1,delay:0},cg,Cn,Bt,zi=1e8,bt=1/zi,Fm=Math.PI*2,I3=Fm/4,U3=0,NM=Math.sqrt,F3=Math.cos,O3=Math.sin,Mn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},Qr=function(e){return typeof e=="number"},fg=function(e){return typeof e>"u"},br=function(e){return typeof e=="object"},ri=function(e){return e!==!1},hg=function(){return typeof window<"u"},Bc=function(e){return Jt(e)||Mn(e)},IM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,k3=/random\([^)]+\)/g,z3=/,\s*/g,hx=/(?:-?\.?\d|\.)+/gi,UM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,va=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,FM=/[+-]=-?[.\d]+/,B3=/[^,'"\[\]\s]+/gi,V3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,gr,Om,dg,wi={},Gf={},OM,kM=function(e){return(Gf=Wa(e,wi))&&li},pg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Mu=function(e,t){return!t&&console.warn(e)},zM=function(e,t){return e&&(wi[e]=t)&&Gf&&(Gf[e]=t)||wi},Eu=function(){return 0},G3={suppressEvents:!0,isStart:!0,kill:!1},of={suppressEvents:!0,kill:!1},H3={suppressEvents:!0},mg={},Is=[],km={},BM,gi={},Bd={},dx=30,af=[],gg="",_g=function(e){var t=e[0],i,r;if(br(t)||Jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=af.length;r--&&!af[r].targetTest(t););i=af[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new l1(e[r],i)))||e.splice(r,1);return e},_o=function(e){return e._gsap||_g(Bi(e))[0]._gsap},VM=function(e,t,i){return(i=e[t])&&Jt(i)?e[t]():fg(i)&&e.getAttribute&&e.getAttribute(t)||i},si=function(e,t){return(e=e.split(",")).forEach(t)||e},en=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},ba=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},W3=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Hf=function(){var e=Is.length,t=Is.slice(0),i,r;for(km={},Is.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},vg=function(e){return!!(e._initted||e._startAt||e.add)},GM=function(e,t,i,r){Is.length&&!Cn&&Hf(),e.render(t,i,!!(Cn&&t<0&&vg(e))),Is.length&&!Cn&&Hf()},HM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(B3).length<2?t:Mn(e)?e.trim():e},WM=function(e){return e},Ai=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},X3=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Wa=function(e,t){for(var i in t)e[i]=t[i];return e},px=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=br(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Wf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},jl=function(e){var t=e.parent||Xt,i=e.keyframes?X3(Bn(e.keyframes)):Ai;if(ri(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Y3=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},XM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},gh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},q3=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},zm=function(e,t,i,r){return e._startAt&&(Cn?e._startAt.revert(of):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},j3=function n(e){return!e||e._ts&&n(e.parent)},mx=function(e){return e._repeat?Xa(e._tTime,e=e.duration()+e._rDelay)*e:0},Xa=function(e,t){var i=Math.floor(e=Ht(e/t));return e&&i===e?i-1:i},Xf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_h=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},vh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ht(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_h(e),i._dirty||vo(i,e)),e},YM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Xf(e.rawTime(),t),(!t._dur||Ou(0,t.totalDuration(),i)-t._tTime>bt)&&t.render(i,!0)),vo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-bt}},xr=function(e,t,i,r){return t.parent&&zs(t),t._start=Ht((Qr(i)?i:i||e!==Xt?Di(e,i,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),XM(e,t,"_first","_last",e._sort?"_start":0),Bm(t)||(e._recent=t),r||YM(e,t),e._ts<0&&vh(e,e._tTime),e},qM=function(e,t){return(wi.ScrollTrigger||pg("scrollTrigger",t))&&wi.ScrollTrigger.create(t,e)},jM=function(e,t,i,r,s){if(yg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&BM!==vi.frame)return Is.push(e),e._lazy=[s,r],1},$3=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Bm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},K3=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&$3(e)&&!(!e._initted&&Bm(e))||(e._ts<0||e._dp._ts<0)&&!Bm(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Ou(0,e._tDur,t),c=Xa(l,a),e._yoyo&&c&1&&(o=1-o),c!==Xa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Cn||r||e._zTime===bt||!t&&e._zTime){if(!e._initted&&jM(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?bt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&zm(e,t,i,!0),e._onUpdate&&!i&&yi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zs(e,1),!i&&!Cn&&(yi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Z3=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ya=function(e,t,i,r){var s=e._repeat,o=Ht(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ht(o*(s+1)+e._rDelay*s):o,a>0&&!r&&vh(e,e._tTime=e._tDur*a),e.parent&&_h(e),i||vo(e.parent,e),e},gx=function(e){return e instanceof Jn?vo(e):Ya(e,e._dur)},J3={_start:0,endTime:Eu,totalDuration:Eu},Di=function n(e,t,i){var r=e.labels,s=e._recent||J3,o=e.duration()>=zi?s.endTime(!1):e._dur,a,l,u;return Mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Bn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},$l=function(e,t,i){var r=Qr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new sn(t[0],o,t[s+1])},Xs=function(e,t){return e||e===0?t(e):t},Ou=function(e,t,i){return i<e?e:i>t?t:i},On=function(e,t){return!Mn(e)||!(t=V3.exec(e))?"":t[1]},Q3=function(e,t,i){return Xs(i,function(r){return Ou(e,t,r)})},Vm=[].slice,$M=function(e,t){return e&&br(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&br(e[0]))&&!e.nodeType&&e!==gr},eL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Mn(r)&&!t||$M(r,1)?(s=i).push.apply(s,Bi(r)):i.push(r)})||i},Bi=function(e,t,i){return Bt&&!t&&Bt.selector?Bt.selector(e):Mn(e)&&!i&&(Om||!qa())?Vm.call((t||dg).querySelectorAll(e),0):Bn(e)?eL(e,i):$M(e)?Vm.call(e,0):e?[e]:[]},Gm=function(e){return e=Bi(e)[0]||Mu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bi(t,i.querySelectorAll?i:i===e?Mu("Invalid scope")||dg.createElement("div"):e)}},KM=function(e){return e.sort(function(){return .5-Math.random()})},ZM=function(e){if(Jt(e))return e;var t=br(e)?e:{each:e},i=xo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Mn(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,m){var v=(m||t).length,_=o[v],d,g,x,S,T,E,A,y,w;if(!_){if(w=t.grid==="auto"?0:(t.grid||[1,zi])[1],!w){for(A=-zi;A<(A=m[w++].getBoundingClientRect().left)&&w<v;);w<v&&w--}for(_=o[v]=[],d=l?Math.min(w,v)*c-.5:r%w,g=w===zi?0:l?v*f/w-.5:r/w|0,A=0,y=zi,E=0;E<v;E++)x=E%w-d,S=g-(E/w|0),_[E]=T=u?Math.abs(u==="y"?S:x):NM(x*x+S*S),T>A&&(A=T),T<y&&(y=T);r==="random"&&KM(_),_.max=A-y,_.min=y,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(w>v?v-1:u?u==="y"?v/w:w:Math.max(w,v/w))||0)*(r==="edges"?-1:1),_.b=v<0?s-v:s,_.u=On(t.amount||t.each)||0,i=i&&v<0?dL(i):i}return v=(_[h]-_.min)/_.max||0,Ht(_.b+(i?i(v):v)*_.v)+_.u}},Hm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ht(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Qr(i)?0:On(i))}},JM=function(e,t){var i=Bn(e),r,s;return!i&&br(e)&&(r=i=e.radius||zi,e.values?(e=Bi(e.values),(s=!Qr(e[0]))&&(r*=r)):e=Hm(e.increment)),Xs(t,i?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=zi,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||Qr(o)?c:c+On(o)}:Hm(e))},QM=function(e,t,i,r){return Xs(Bn(e)?!t:i===!0?!!(i=0):!r,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},tL=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},nL=function(e,t){return function(i){return e(parseFloat(i))+(t||On(i))}},iL=function(e,t,i){return t1(e,t,0,1,i)},e1=function(e,t,i){return Xs(i,function(r){return e[~~t(r)]})},rL=function n(e,t,i){var r=t-e;return Bn(e)?e1(e,n(0,e.length),t):Xs(i,function(s){return(r+(s-e)%r)%r+e})},sL=function n(e,t,i){var r=t-e,s=r*2;return Bn(e)?e1(e,n(0,e.length-1),t):Xs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Tu=function(e){return e.replace(k3,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(z3);return QM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},t1=function(e,t,i,r,s){var o=t-e,a=r-i;return Xs(s,function(l){return i+((l-e)/o*a||0)})},oL=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Mn(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(m){m*=f;var v=Math.min(h,~~m);return c[v](m-v)},i=t}else r||(e=Wa(Bn(e)?[]:{},e));if(!c){for(l in t)xg.call(a,e,l,"get",t[l]);s=function(m){return Eg(m,a)||(o?e.p:e)}}}return Xs(i,s)},_x=function(e,t,i){var r=e.labels,s=zi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yi=function(e,t,i){var r=e.vars,s=r[t],o=Bt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Is.length&&Hf(),a&&(Bt=a),c=l?s.apply(u,l):s.call(u),Bt=o,c},Nl=function(e){return zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Cn),e.progress()<1&&yi(e,"onInterrupt"),e},xa,n1=[],i1=function(e){if(e)if(e=!e.name&&e.default||e,hg()||e.headless){var t=e.name,i=Jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Eu,render:Eg,add:xg,kill:EL,modifier:ML,rawVars:0},o={targetTest:0,get:0,getSetter:Mg,aliases:{},register:0};if(qa(),e!==r){if(gi[t])return;Ai(r,Ai(Wf(e,s),o)),Wa(r.prototype,Wa(s,Wf(e,o))),gi[r.prop=t]=r,e.targetTest&&(af.push(r),mg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}zM(t,r),e.register&&e.register(li,r,oi)}else n1.push(e)},Rt=255,Il={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},Vd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Rt+.5|0},r1=function(e,t,i){var r=e?Qr(e)?[e>>16,e>>8&Rt,e&Rt]:0:Il.black,s,o,a,l,u,c,f,h,p,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Il[e])r=Il[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(hx),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Vd(l+1/3,s,o),r[1]=Vd(l,s,o),r[2]=Vd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(UM),i&&r.length<4&&(r[3]=1),r}else r=e.match(hx)||Il.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Rt,o=r[1]/Rt,a=r[2]/Rt,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},s1=function(e){var t=[],i=[],r=-1;return e.split(Us).forEach(function(s){var o=s.match(va)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},vx=function(e,t,i){var r="",s=(e+r).match(Us),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=r1(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=s1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Us,"1").split(va),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Us),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Us=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Il)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),aL=/hsl[a]?\(/,o1=function(e){var t=e.join(" "),i;if(Us.lastIndex=0,Us.test(t))return i=aL.test(t),e[1]=vx(e[1],i),e[0]=vx(e[0],i,s1(e[1])),!0},wu,vi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,m=function v(_){var d=n()-r,g=_===!0,x,S,T,E;if((d>e||d<0)&&(i+=d-t),r+=d,T=r-i,x=T-o,(x>0||g)&&(E=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,o+=x+(x>=s?4:s-x),S=1),g||(l=u(v)),S)for(p=0;p<a.length;p++)a[p](T,h,E,_)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){OM&&(!Om&&hg()&&(gr=Om=window,dg=gr.document||{},wi.gsap=li,(gr.gsapVersions||(gr.gsapVersions=[])).push(li.version),kM(Gf||gr.GreenSockGlobals||!gr.gsap&&gr||{}),n1.forEach(i1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(_){return setTimeout(_,o-f.time*1e3+1|0)},wu=1,m(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),wu=0,u=Eu},lagSmoothing:function(_,d){e=_||1/0,t=Math.min(d||33,e)},fps:function(_){s=1e3/(_||240),o=f.time*1e3+s},add:function(_,d,g){var x=d?function(S,T,E,A){_(S,T,E,A),f.remove(x)}:_;return f.remove(_),a[g?"unshift":"push"](x),qa(),x},remove:function(_,d){~(d=a.indexOf(_))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),qa=function(){return!wu&&vi.wake()},dt={},lL=/^[\d.\-M][\d.\-,\s]/,uL=/["']/g,cL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(uL,"").trim():+u,r=l.substr(a+1).trim();return t},fL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},hL=function(e){var t=(e+"").split("("),i=dt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[cL(t[1])]:fL(e).split(",").map(HM)):dt._CE&&lL.test(e)?dt._CE("",e):i},dL=function(e){return function(t){return 1-e(1-t)}},xo=function(e,t){return e&&(Jt(e)?e:dt[e]||hL(e))||t},Io=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return si(e,function(a){dt[a]=wi[a]=s,dt[o=a.toLowerCase()]=i;for(var l in s)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=s[l]}),s},a1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Gd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Fm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*O3((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:a1(a);return s=Fm/s,l.config=function(u,c){return n(e,u,c)},l},Hd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:a1(i);return r.config=function(s){return n(e,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Io(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;Io("Elastic",Gd("in"),Gd("out"),Gd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Io("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Io("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Io("Circ",function(n){return-(NM(1-n*n)-1)});Io("Sine",function(n){return n===1?1:-F3(n*I3)+1});Io("Back",Hd("in"),Hd("out"),Hd());dt.SteppedEase=dt.steps=wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((r*Ou(0,o,a)|0)+s)*i}}};Su.ease=dt["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return gg+=n+","+n+"Params,"});var l1=function(e,t){this.id=U3++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:VM,this.set=t?t.getSetter:Mg},Au=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ya(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),wu||vi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ya(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(qa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vh(this,i),!s._dp||s.parent||YM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&xr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),GM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+mx(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+mx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Xa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Xf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-bt?0:this._rts,this.totalTime(Ou(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),_h(this),q3(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ht(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&xr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=H3);var r=Cn;return Cn=i,vg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Cn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,gx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,gx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Di(this,i),ri(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ri(r)),this._dur||(this._zTime=-bt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-bt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Jt(i)?i:WM,l=function(){var c=r.then;r.then=null,s&&s(),Jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Nl(this)},n}();Ai(Au.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Jn=function(n){DM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ri(i.sortChildren),Xt&&xr(i.parent||Xt,Or(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&qM(Or(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return $l(0,arguments,this),this},t.from=function(r,s,o){return $l(1,arguments,this),this},t.fromTo=function(r,s,o,a){return $l(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,jl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new sn(r,s,Di(this,o),1),this},t.call=function(r,s,o){return xr(this,sn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new sn(r,o,Di(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,jl(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,jl(a).immediateRender=ri(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ht(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,m,v,_,d,g,x,S,T,E,A;if(this!==Xt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,S=this._start,x=this._ts,d=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(h=Ht(c%_),c===l?(v=this._repeat,h=u):(T=Ht(c/_),v=~~T,v&&v===T&&(h=u,v--),h>u&&(h=u)),T=Xa(this._tTime,_),!a&&this._tTime&&T!==v&&this._tTime-T*_-this._dur<=0&&(T=v),E&&v&1&&(h=u-h,A=1),v!==T&&!this._lock){var y=E&&T&1,w=y===(E&&v&1);if(v<T&&(y=!y),a=y?0:c%u?u:c,this._lock=1,this.render(a||(A?0:Ht(v*_)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=v),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,a=y?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=Z3(this,Ht(a),Ht(h)),g&&(c-=h-(h=g._start))),this._tTime=c,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(yi(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(m=p._next,(p._act||h>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){g=0,m&&(c+=this._zTime=-bt);break}}p=m}else{p=this._last;for(var b=r<0?r:h;p;){if(m=p._prev,(p._act||b<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,s,o||Cn&&vg(p)),h!==this._time||!this._ts&&!d){g=0,m&&(c+=this._zTime=b?-bt:bt);break}}p=m}}if(g&&!s&&(this.pause(),g.render(h>=a?0:-bt)._zTime=h>=a?1:-1,this._ts))return this._start=S,_h(this),this.render(r,s,o);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&zs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(yi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Qr(s)||(s=Di(this,s,r)),!(r instanceof Au)){if(Bn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Mn(r))return this.addLabel(r,s);if(Jt(r))r=sn.delayedCall(0,r);else return this}return this!==r?xr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-zi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof sn?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Mn(r)?this.removeLabel(r):Jt(r)?this.killTweensOf(r):(r.parent===this&&gh(this,r),r===this._recent&&(this._recent=this._last),vo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(vi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Di(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=sn.delayedCall(0,s||Eu,o);return a.data="isPause",this._hasPause=1,xr(this,a,Di(this,r))},t.removePause=function(r){var s=this._first;for(r=Di(this,r);s;)s._start===r&&s.data==="isPause"&&zs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Es!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Bi(r),l=this._first,u=Qr(s),c;l;)l instanceof sn?W3(l._targets,a)&&(u?(!Es||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Di(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,m=sn.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!p){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());m._dur!==_&&Ya(m,_,0,1).render(m._time,!0,!0),p=1}c&&c.apply(m,f||[])}},s));return h?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ai({startAt:{time:Di(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),_x(this,Di(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),_x(this,Di(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ht(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return vo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),vo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=zi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ht(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ya(o,o===Xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Xt._ts&&(GM(Xt,Xf(r,Xt)),BM=vi.frame),vi.frame>=dx){dx+=Ei.autoSleep||120;var s=Xt._first;if((!s||!s._ts)&&Ei.autoSleep&&vi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vi.sleep()}}},e}(Au);Ai(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var pL=function(e,t,i,r,s,o,a){var l=new oi(this._pt,e,t,0,1,p1,null,s),u=0,c=0,f,h,p,m,v,_,d,g;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Tu(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),h=i.match(zd)||[];f=zd.exec(r);)m=f[0],v=r.substring(u,f.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),m!==h[c++]&&(_=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:v||c===1?v:",",s:_,c:m.charAt(1)==="="?ba(_,m)-_:parseFloat(m)-_,m:p&&p<4?Math.round:0},u=zd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(FM.test(r)||d)&&(l.e=0),this._pt=l,l},xg=function(e,t,i,r,s,o,a,l,u,c){Jt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Jt(f)?u?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Jt(f)?u?xL:h1:Sg,m;if(Mn(r)&&(~r.indexOf("random(")&&(r=Tu(r)),r.charAt(1)==="="&&(m=ba(h,r)+(On(h)||0),(m||m===0)&&(r=m))),!c||h!==r||Wm)return!isNaN(h*r)&&r!==""?(m=new oi(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?SL:d1,0,p),u&&(m.fp=u),a&&m.modifier(a,this,e),this._pt=m):(!f&&!(t in e)&&pg(t,r),pL.call(this,e,t,h,r,p,l||Ei.stringFilter,u))},mL=function(e,t,i,r,s){if(Jt(e)&&(e=Kl(e,s,t,i,r)),!br(e)||e.style&&e.nodeType||Bn(e)||IM(e))return Mn(e)?Kl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Kl(e[a],s,t,i,r);return o},u1=function(e,t,i,r,s,o){var a,l,u,c;if(gi[e]&&(a=new gi[e]).init(s,a.rawVars?t[e]:mL(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new oi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==xa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Es,Wm,yg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,m=e._dur,v=e._startAt,_=e._targets,d=e.parent,g=d&&d.data==="nested"?d.vars.targets:_,x=e._overwrite==="auto"&&!cg,S=e.timeline,T=r.easeReverse||f,E,A,y,w,b,P,I,z,H,D,B,F,k;if(S&&(!h||!s)&&(s="none"),e._ease=xo(s,Su.ease),e._rEase=T&&(xo(T)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||h&&!r.stagger){if(z=_[0]?_o(_[0]).harness:0,F=z&&r[z.prop],E=Wf(r,mg),v&&(v._zTime<0&&v.progress(1),t<0&&c&&a&&!p?v.render(-1,!0):v.revert(c&&m?of:G3),v._lazy=0),o){if(zs(e._startAt=sn.set(_,Ai({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!v&&ri(l),startAt:null,delay:0,onUpdate:u&&function(){return yi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn||!a&&!p)&&e._startAt.revert(of),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&m&&!v){if(t&&(a=!1),y=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!v&&ri(l),immediateRender:a,stagger:0,parent:d},E),F&&(y[z.prop]=F),zs(e._startAt=sn.set(_,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn?e._startAt.revert(of):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ri(l)||l&&!m,A=0;A<_.length;A++){if(b=_[A],I=b._gsap||_g(_)[A]._gsap,e._ptLookup[A]=D={},km[I.id]&&Is.length&&Hf(),B=g===_?A:g.indexOf(b),z&&(H=new z).init(b,F||E,e,B,g)!==!1&&(e._pt=w=new oi(e._pt,b,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(Y){D[Y]=w}),H.priority&&(P=1)),!z||F)for(y in E)gi[y]&&(H=u1(y,E,e,B,b,g))?H.priority&&(P=1):D[y]=w=xg.call(e,b,y,"get",E[y],B,g,0,r.stringFilter);e._op&&e._op[A]&&e.kill(b,e._op[A]),x&&e._pt&&(Es=e,Xt.killTweensOf(b,D,e.globalTime(t)),k=!e.parent,Es=0),e._pt&&l&&(km[I.id]=1)}P&&m1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!k,h&&t<=0&&S.render(zi,!0,!0)},gL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Wm=1,e.vars[t]="+=0",yg(e,a),Wm=0,l?Mu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=en(i)+On(f.e)),f.b&&(f.b=c.s+On(f.b))},_L=function(e,t){var i=e[0]?_o(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Wa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},vL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Bn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Kl=function(e,t,i,r,s){return Jt(e)?e.call(t,i,r,s):Mn(e)&&~e.indexOf("random(")?Tu(e):e},c1=gg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",f1={};si(c1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return f1[n]=1});var sn=function(n){DM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:jl(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,m=l.keyframes,v=l.defaults,_=l.scrollTrigger,d=r.parent||Xt,g=(Bn(i)||IM(i)?Qr(i[0]):"length"in r)?[i]:Bi(i),x,S,T,E,A,y,w,b;if(a._targets=g.length?_g(g):Mu("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,m||h||Bc(u)||Bc(c)){r=a.vars;var P=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Jn({data:"nested",defaults:v||{},targets:d&&d.data==="nested"?d.vars.targets:g}),x.kill(),x.parent=x._dp=Or(a),x._start=0,h||Bc(u)||Bc(c)){if(E=g.length,w=h&&ZM(h),br(h))for(A in h)~c1.indexOf(A)&&(b||(b={}),b[A]=h[A]);for(S=0;S<E;S++)T=Wf(r,f1),T.stagger=0,P&&(T.easeReverse=P),b&&Wa(T,b),y=g[S],T.duration=+Kl(u,Or(a),S,y,g),T.delay=(+Kl(c,Or(a),S,y,g)||0)-a._delay,!h&&E===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),x.to(y,T,w?w(S,y,g):0),x._ease=dt.none;x.duration()?u=c=0:a.timeline=0}else if(m){jl(Ai(x.vars.defaults,{ease:"none"})),x._ease=xo(m.ease||r.ease||"none");var I=0,z,H,D;if(Bn(m))m.forEach(function(B){return x.to(g,B,">")}),x.duration();else{T={};for(A in m)A==="ease"||A==="easeEach"||vL(A,m[A],T,m.easeEach);for(A in T)for(z=T[A].sort(function(B,F){return B.t-F.t}),I=0,S=0;S<z.length;S++)H=z[S],D={ease:H.e,duration:(H.t-(S?z[S-1].t:0))/100*u},D[A]=H.v,x.to(g,D,I),I+=D.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!cg&&(Es=Or(a),Xt.killTweensOf(g),Es=0),xr(d,Or(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!m&&a._start===Ht(d._time)&&ri(f)&&j3(Or(a))&&d.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-c)||0)),_&&qM(Or(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-bt&&!c?l:r<bt?0:r,h,p,m,v,_,d,g,x;if(!u)K3(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,x=this.timeline,this._repeat){if(v=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(v*100+r,s,o);if(h=Ht(f%v),f===l?(m=this._repeat,h=u):(_=Ht(f/v),m=~~_,m&&m===_?(h=u,m--):h>u&&(h=u)),d=this._yoyo&&m&1,d&&(h=u-h),_=Xa(this._tTime,v),h===a&&!o&&this._initted&&m===_)return this._tTime=f,this;m!==_&&this.vars.repeatRefresh&&!d&&!this._lock&&h!==v&&this._initted&&(this._lock=o=1,this.render(Ht(v*m),!0).invalidate()._lock=0)}if(!this._initted){if(jM(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==_))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=h<a;if(S!==this._inv){var T=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(S?-1:1)/T:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(h/u);if(this._from&&(this.ratio=g=1-g),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!_&&(yi(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&zm(this,r,s,o),yi(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&zm(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&zs(this,1),!s&&!(c&&!a)&&(f||a||d)&&(yi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){wu||vi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||yg(this,u),c=this._ease(u/this._dur),gL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(vh(this,0),this.parent||XM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Nl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Es&&Es.vars.overwrite!==!0)._first||Nl(this),this.parent&&o!==this.timeline.totalDuration()&&Ya(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Bi(r):a,u=this._ptLookup,c=this._pt,f,h,p,m,v,_,d;if((!s||s==="all")&&Y3(a,l))return s==="all"&&(this._pt=0),Nl(this);for(f=this._op=this._op||[],s!=="all"&&(Mn(s)&&(v={},si(s,function(g){return v[g]=1}),s=v),s=_L(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,m=h,p={}):(p=f[d]=f[d]||{},m=s);for(v in m)_=h&&h[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&gh(this,_,"_pt"),delete h[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&c&&Nl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return $l(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return $l(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Xt.killTweensOf(r,s,o)},e}(Au);Ai(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(n){sn[n]=function(){var e=new Jn,t=Vm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Sg=function(e,t,i){return e[t]=i},h1=function(e,t,i){return e[t](i)},xL=function(e,t,i,r){return e[t](r.fp,i)},yL=function(e,t,i){return e.setAttribute(t,i)},Mg=function(e,t){return Jt(e[t])?h1:fg(e[t])&&e.setAttribute?yL:Sg},d1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},SL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},p1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Eg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},ML=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},EL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?gh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},TL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},m1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},oi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||d1,this.d=l||this,this.set=u||Sg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=TL,this.m=i,this.mt=s,this.tween=r},n}();si(gg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return mg[n]=1});wi.TweenMax=wi.TweenLite=sn;wi.TimelineLite=wi.TimelineMax=Jn;Xt=new Jn({sortChildren:!1,defaults:Su,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=o1;var yo=[],lf={},wL=[],xx=0,AL=0,Wd=function(e){return(lf[e]||wL).map(function(t){return t()})},Xm=function(){var e=Date.now(),t=[];e-xx>2&&(Wd("matchMediaInit"),yo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=gr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Wd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),xx=e,Wd("matchMedia"))},g1=function(){function n(t,i){this.selector=i&&Gm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=AL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Jt(i)&&(s=r,r=i,i=Jt);var o=this,a=function(){var u=Bt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Gm(s)),Bt=o,f=r.apply(o,arguments),Jt(f)&&o._r.push(f),Bt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Bt;Bt=null,i(this),Bt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof sn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Jn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof sn)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=yo.length;o--;)yo[o].id===this.id&&yo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),CL=function(){function n(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){br(i)||(i={matches:i});var o=new g1(0,s||this.scope),a=o.conditions={},l,u,c;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=gr.matchMedia(i[u]),l&&(yo.indexOf(o)<0&&yo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Xm):l.addEventListener("change",Xm)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Yf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return i1(r)})},timeline:function(e){return new Jn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Mn(e)&&(e=Bi(e)[0]);var s=_o(e||{}).get,o=i?WM:HM;return i==="native"&&(i=""),e&&(t?o((gi[t]&&gi[t].get||s)(e,t,i,r)):function(a,l,u){return o((gi[a]&&gi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Bi(e),e.length>1){var r=e.map(function(c){return li.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=gi[t],a=_o(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;xa._pt=0,f.init(e,i?c+i:c,xa,0,[e]),f.render(1,f),xa._pt&&Eg(1,xa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=li.to(e,Ai((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xo(e.ease,Su.ease)),px(Su,e||{})},config:function(e){return px(Ei,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!gi[a]&&!wi[a]&&Mu(t+" effect requires "+a+" plugin.")}),Bd[t]=function(a,l,u){return i(Bi(a),Ai(l||{},s),u)},o&&(Jn.prototype[t]=function(a,l,u){return this.add(Bd[t](a,br(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){dt[e]=xo(t)},parseEase:function(e,t){return arguments.length?xo(e,t):dt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Jn(e),r,s;for(i.smoothChildTiming=ri(e.smoothChildTiming),Xt.remove(i),i._dp=0,i._time=i._tTime=Xt._time,r=Xt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof sn&&r.vars.onComplete===r._targets[0]))&&xr(i,r,r._start-r._delay),r=s;return xr(Xt,i,0),i},context:function(e,t){return e?new g1(e,t):Bt},matchMedia:function(e){return new CL(e)},matchMediaRefresh:function(){return yo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Xm()},addEventListener:function(e,t){var i=lf[e]||(lf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=lf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:rL,wrapYoyo:sL,distribute:ZM,random:QM,snap:JM,normalize:iL,getUnit:On,clamp:Q3,splitColor:r1,toArray:Bi,selector:Gm,mapRange:t1,pipe:tL,unitize:nL,interpolate:oL,shuffle:KM},install:kM,effects:Bd,ticker:vi,updateRoot:Jn.updateRoot,plugins:gi,globalTimeline:Xt,core:{PropTween:oi,globals:zM,Tween:sn,Timeline:Jn,Animation:Au,getCache:_o,_removeLinkedListItem:gh,reverting:function(){return Cn},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return cg=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Yf[n]=sn[n]});vi.add(Jn.updateRoot);xa=Yf.to({},{duration:0});var RL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},bL=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=RL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Xd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Mn(s)&&(l={},si(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}bL(a,s)}}}},li=Yf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Cn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Xd("roundProps",Hm),Xd("modifiers"),Xd("snap",JM))||Yf;sn.version=Jn.version=li.version="3.15.0";OM=1;hg()&&qa();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yx,Ts,Pa,Tg,po,Sx,wg,PL=function(){return typeof window<"u"},es={},so=180/Math.PI,La=Math.PI/180,ia=Math.atan2,Mx=1e8,Ag=/([A-Z])/g,LL=/(left|right|width|margin|padding|x)/i,DL=/[\s,\(]\S/,Mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ym=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},NL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},UL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},FL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},_1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},v1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},OL=function(e,t,i){return e.style[t]=i},kL=function(e,t,i){return e.style.setProperty(t,i)},zL=function(e,t,i){return e._gsap[t]=i},BL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},VL=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},GL=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},qt="transform",ai=qt+"Origin",HL=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in es&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=zr(r,a)}):this.tfm[e]=o.x?o[e]:zr(r,e),e===ai&&(this.tfm.zOrigin=o.zOrigin);else return Mr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(qt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=qt}(s||t)&&this.props.push(e,t,s[e])},x1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},WL=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ag,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=wg(),(!s||!s.isStart)&&!i[qt]&&(x1(i),r.zOrigin&&i[ai]&&(i[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},y1=function(e,t){var i={target:e,props:[],revert:WL,save:HL};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},S1,qm=function(e,t){var i=Ts.createElementNS?Ts.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ts.createElement(e);return i&&i.style?i:Ts.createElement(e)},Si=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ag,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ja(t)||t,1)||""},Ex="O,Moz,ms,Ms,Webkit".split(","),ja=function(e,t,i){var r=t||po,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ex[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ex[o]:"")+e},jm=function(){PL()&&window.document&&(yx=window,Ts=yx.document,Pa=Ts.documentElement,po=qm("div")||{style:{}},qm("div"),qt=ja(qt),ai=qt+"Origin",po.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",S1=!!ja("perspective"),wg=li.core.reverting,Tg=1)},Tx=function(e){var t=e.ownerSVGElement,i=qm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Pa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Pa.removeChild(i),s},wx=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},M1=function(e){var t,i;try{t=e.getBBox()}catch{t=Tx(e),i=1}return t&&(t.width||t.height)||i||(t=Tx(e)),t&&!t.width&&!t.x&&!t.y?{x:+wx(e,["x","cx","x1"])||0,y:+wx(e,["y","cy","y1"])||0,width:0,height:0}:t},E1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&M1(e))},Bs=function(e,t){if(t){var i=e.style,r;t in es&&t!==ai&&(t=qt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Ag,"-$1").toLowerCase())):i.removeAttribute(t)}},ws=function(e,t,i,r,s,o){var a=new oi(e._pt,t,i,0,1,o?v1:_1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Ax={deg:1,rad:1,turn:1},XL={grid:1,flex:1},Vs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=po.style,l=LL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",m,v,_,d;if(r===o||!s||Ax[r]||Ax[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&E1(e),(p||o==="%")&&(es[t]||~t.indexOf("adius")))return m=d?e.getBBox()[l?"width":"height"]:e[c],en(p?s/m*f:s/100*m);if(a[l?"width":"height"]=f+(h?o:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Ts||!v.appendChild)&&(v=Ts.body),_=v._gsap,_&&p&&_.width&&l&&_.time===vi.time&&!_.uncache)return en(s/_.width*f);if(p&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=f+r,m=e[c],g?e.style[t]=g:Bs(e,t)}else(p||o==="%")&&!XL[Si(v,"display")]&&(a.position=Si(e,"position")),v===e&&(a.position="static"),v.appendChild(po),m=po[c],v.removeChild(po),a.position="absolute";return l&&p&&(_=_o(v),_.time=vi.time,_.width=v[c]),en(h?m*s/f:m&&s?f/m*s:0)},zr=function(e,t,i,r){var s;return Tg||jm(),t in Mr&&t!=="transform"&&(t=Mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),es[t]&&t!=="transform"?(s=Ru(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:jf(Si(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=qf[t]&&qf[t](e,t,i)||Si(e,t)||VM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Vs(e,t,s,i)+i:s},YL=function(e,t,i,r){if(!i||i==="none"){var s=ja(t,e,1),o=s&&Si(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Si(e,"borderTopColor"))}var a=new oi(this._pt,e.style,t,0,1,p1),l=0,u=0,c,f,h,p,m,v,_,d,g,x,S,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Si(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=Si(e,t)||r,v?e.style[t]=v:Bs(e,t)),c=[i,r],o1(c),i=c[0],r=c[1],h=i.match(va)||[],T=r.match(va)||[],T.length){for(;f=va.exec(r);)_=f[0],g=r.substring(l,f.index),m?m=(m+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(m=1),_!==(v=h[u++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),_.charAt(1)==="="&&(_=ba(p,_)+S),d=parseFloat(_),x=_.substr((d+"").length),l=va.lastIndex-x.length,x||(x=x||Ei.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=Vs(e,t,v,x)||0),a._pt={_next:a._pt,p:g||u===1?g:",",s:p,c:d-p,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?v1:_1;return FM.test(r)&&(a.e=0),this._pt=a,a},Cx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qL=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Cx[i]||i,t[1]=Cx[r]||r,t.join(" ")},jL=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],es[a]&&(l=1,a=a==="transformOrigin"?ai:qt),Bs(i,a);l&&(Bs(i,qt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ru(i,1),o.uncache=1,x1(r)))}},qf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new oi(e._pt,t,i,0,0,jL);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Cu=[1,0,0,1,0,0],T1={},w1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Rx=function(e){var t=Si(e,qt);return w1(t)?Cu:t.substr(7).match(UM).map(en)},Cg=function(e,t){var i=e._gsap||_o(e),r=e.style,s=Rx(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Cu:s):(s===Cu&&!e.offsetParent&&e!==Pa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Pa.appendChild(e)),s=Rx(e),l?r.display=l:Bs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Pa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$m=function(e,t,i,r,s,o){var a=e._gsap,l=s||Cg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],m=l[1],v=l[2],_=l[3],d=l[4],g=l[5],x=t.split(" "),S=parseFloat(x[0])||0,T=parseFloat(x[1])||0,E,A,y,w;i?l!==Cu&&(A=p*_-m*v)&&(y=S*(_/A)+T*(-v/A)+(v*g-_*d)/A,w=S*(-m/A)+T*(p/A)-(p*g-m*d)/A,S=y,T=w):(E=M1(e),S=E.x+(~x[0].indexOf("%")?S/100*E.width:S),T=E.y+(~(x[1]||x[0]).indexOf("%")?T/100*E.height:T)),r||r!==!1&&a.smooth?(d=S-u,g=T-c,a.xOffset=f+(d*p+g*v)-d,a.yOffset=h+(d*m+g*_)-g):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ai]="0px 0px",o&&(ws(o,a,"xOrigin",u,S),ws(o,a,"yOrigin",c,T),ws(o,a,"xOffset",f,a.xOffset),ws(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},Ru=function(e,t){var i=e._gsap||new l1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Si(e,ai)||"0",c,f,h,p,m,v,_,d,g,x,S,T,E,A,y,w,b,P,I,z,H,D,B,F,k,Y,$,J,ee,Be,Me,pe;return c=f=h=v=_=d=g=x=S=0,p=m=1,i.svg=!!(e.getCTM&&E1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qt]!=="none"?l[qt]:"")),r.scale=r.rotate=r.translate="none"),A=Cg(e,i.svg),i.svg&&(i.uncache?(k=e.getBBox(),u=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),$m(e,F||u,!!F||i.originIsAbsolute,i.smooth!==!1,A)),T=i.xOrigin||0,E=i.yOrigin||0,A!==Cu&&(P=A[0],I=A[1],z=A[2],H=A[3],c=D=A[4],f=B=A[5],A.length===6?(p=Math.sqrt(P*P+I*I),m=Math.sqrt(H*H+z*z),v=P||I?ia(I,P)*so:0,g=z||H?ia(z,H)*so+v:0,g&&(m*=Math.abs(Math.cos(g*La))),i.svg&&(c-=T-(T*P+E*z),f-=E-(T*I+E*H))):(pe=A[6],Be=A[7],$=A[8],J=A[9],ee=A[10],Me=A[11],c=A[12],f=A[13],h=A[14],y=ia(pe,ee),_=y*so,y&&(w=Math.cos(-y),b=Math.sin(-y),F=D*w+$*b,k=B*w+J*b,Y=pe*w+ee*b,$=D*-b+$*w,J=B*-b+J*w,ee=pe*-b+ee*w,Me=Be*-b+Me*w,D=F,B=k,pe=Y),y=ia(-z,ee),d=y*so,y&&(w=Math.cos(-y),b=Math.sin(-y),F=P*w-$*b,k=I*w-J*b,Y=z*w-ee*b,Me=H*b+Me*w,P=F,I=k,z=Y),y=ia(I,P),v=y*so,y&&(w=Math.cos(y),b=Math.sin(y),F=P*w+I*b,k=D*w+B*b,I=I*w-P*b,B=B*w-D*b,P=F,D=k),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,d=180-d),p=en(Math.sqrt(P*P+I*I+z*z)),m=en(Math.sqrt(B*B+pe*pe)),y=ia(D,B),g=Math.abs(y)>2e-4?y*so:0,S=Me?1/(Me<0?-Me:Me):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!w1(Si(e,qt)),F&&e.setAttribute("transform",F))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(p*=-1,g+=v<=0?180:-180,v+=v<=0?180:-180):(m*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=en(p),i.scaleY=en(m),i.rotation=en(v)+a,i.rotationX=en(_)+a,i.rotationY=en(d)+a,i.skewX=g+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ai]=jf(u)),i.xOffset=i.yOffset=0,i.force3D=Ei.force3D,i.renderTransform=i.svg?KL:S1?A1:$L,i.uncache=0,i},jf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Yd=function(e,t,i){var r=On(t);return en(parseFloat(t)+parseFloat(Vs(e,"x",i+"px",r)))+r},$L=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,A1(e,t)},eo="0deg",wl="0px",to=") ",A1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,m=i.scaleX,v=i.scaleY,_=i.transformPerspective,d=i.force3D,g=i.target,x=i.zOrigin,S="",T=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==eo||c!==eo)){var E=parseFloat(c)*La,A=Math.sin(E),y=Math.cos(E),w;E=parseFloat(f)*La,w=Math.cos(E),o=Yd(g,o,A*w*-x),a=Yd(g,a,-Math.sin(E)*-x),l=Yd(g,l,y*w*-x+x)}_!==wl&&(S+="perspective("+_+to),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(T||o!==wl||a!==wl||l!==wl)&&(S+=l!==wl||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+to),u!==eo&&(S+="rotate("+u+to),c!==eo&&(S+="rotateY("+c+to),f!==eo&&(S+="rotateX("+f+to),(h!==eo||p!==eo)&&(S+="skew("+h+", "+p+to),(m!==1||v!==1)&&(S+="scale("+m+", "+v+to),g.style[qt]=S||"translate(0, 0)"},KL=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,m=i.xOrigin,v=i.yOrigin,_=i.xOffset,d=i.yOffset,g=i.forceCSS,x=parseFloat(o),S=parseFloat(a),T,E,A,y,w;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=La,u*=La,T=Math.cos(l)*f,E=Math.sin(l)*f,A=Math.sin(l-u)*-h,y=Math.cos(l-u)*h,u&&(c*=La,w=Math.tan(u-c),w=Math.sqrt(1+w*w),A*=w,y*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),T*=w,E*=w)),T=en(T),E=en(E),A=en(A),y=en(y)):(T=f,y=h,E=A=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Vs(p,"x",o,"px"),S=Vs(p,"y",a,"px")),(m||v||_||d)&&(x=en(x+m-(m*T+v*A)+_),S=en(S+v-(m*E+v*y)+d)),(r||s)&&(w=p.getBBox(),x=en(x+r/100*w.width),S=en(S+s/100*w.height)),w="matrix("+T+","+E+","+A+","+y+","+x+","+S+")",p.setAttribute("transform",w),g&&(p.style[qt]=w)},ZL=function(e,t,i,r,s){var o=360,a=Mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?so:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Mx)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Mx)%o-~~(u/o)*o)),e._pt=h=new oi(e._pt,t,i,r,u,NL),h.e=c,h.u="deg",e._props.push(i),h},bx=function(e,t){for(var i in t)e[i]=t[i];return e},JL=function(e,t,i){var r=bx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,m;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[qt]=t,a=Ru(i,1),Bs(i,qt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[qt],o[qt]=t,a=Ru(i,1),o[qt]=u);for(l in es)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=On(u),m=On(c),f=p!==m?Vs(i,l,u,m):parseFloat(u),h=parseFloat(c),e._pt=new oi(e._pt,a,l,f,h-f,Ym),e._pt.u=m||0,e._props.push(l));bx(a,r)};si("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});qf[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(m){return zr(a,m,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(m,v){return p[m]=h[v]=h[v]||h[(v-1)/2|0]}),a.init(l,p,f)}});var C1={name:"css",register:jm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,m,v,_,d,g,x,S,T,E,A,y,w;Tg||jm(),this.styles=this.styles||y1(e),y=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(c=t[v],!(gi[v]&&u1(v,t,i,r,e,s)))){if(p=typeof c,m=qf[v],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Tu(c)),m)m(this,e,v,c,i)&&(A=1);else if(v.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(v)+"").trim(),c+="",Us.lastIndex=0,Us.test(u)||(_=On(u),d=On(c),d?_!==d&&(u=Vs(e,v,u,d)+d):_&&(c+=_)),this.add(a,"setProperty",u,c,r,s,0,0,v),o.push(v),y.push(v,0,a[v]);else if(p!=="undefined"){if(l&&v in l?(u=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Mn(u)&&~u.indexOf("random(")&&(u=Tu(u)),On(u+"")||u==="auto"||(u+=Ei.units[v]||On(zr(e,v))||""),(u+"").charAt(1)==="="&&(u=zr(e,v))):u=zr(e,v),h=parseFloat(u),g=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),f=parseFloat(c),v in Mr&&(v==="autoAlpha"&&(h===1&&zr(e,"visibility")==="hidden"&&f&&(h=0),y.push("visibility",0,a.visibility),ws(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),v!=="scale"&&v!=="transform"&&(v=Mr[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in es,x){if(this.styles.save(v),w=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Si(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=c,c=Si(e,"perspective"),b?e.style.perspective=b:Bs(e,"perspective")}f=parseFloat(c)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ru(e,t.parseTransform),E=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new oi(this._pt,a,qt,0,1,T.renderTransform,T,0,-1),S.dep=1),v==="scale")this._pt=new oi(this._pt,T,"scaleY",T.scaleY,(g?ba(T.scaleY,g+f):f)-T.scaleY||0,Ym),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(ai,0,a[ai]),c=qL(c),T.svg?$m(e,c,0,E,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==T.zOrigin&&ws(this,T,"zOrigin",T.zOrigin,d),ws(this,a,v,jf(u),jf(c)));continue}else if(v==="svgOrigin"){$m(e,c,1,E,0,this);continue}else if(v in T1){ZL(this,T,v,h,g?ba(h,g+c):c);continue}else if(v==="smoothOrigin"){ws(this,T,"smooth",T.smooth,c);continue}else if(v==="force3D"){T[v]=c;continue}else if(v==="transform"){JL(this,c,e);continue}}else v in a||(v=ja(v)||v);if(x||(f||f===0)&&(h||h===0)&&!DL.test(c)&&v in a)_=(u+"").substr((h+"").length),f||(f=0),d=On(c)||(v in Ei.units?Ei.units[v]:_),_!==d&&(h=Vs(e,v,u,d)),this._pt=new oi(this._pt,x?T:a,v,h,(g?ba(h,g+f):f)-h,!x&&(d==="px"||v==="zIndex")&&t.autoRound!==!1?FL:Ym),this._pt.u=d||0,x&&w!==c?(this._pt.b=u,this._pt.e=w,this._pt.r=UL):_!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=IL);else if(v in a)YL.call(this,e,v,u,g?g+c:c);else if(v in e)this.add(e,v,u||e[v],g?g+c:c,r,s);else if(v!=="parseTransform"){pg(v,c);continue}x||(v in a?y.push(v,0,a[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,u||e[v])),o.push(v)}}A&&m1(this)},render:function(e,t){if(t.tween._time||!wg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zr,aliases:Mr,getSetter:function(e,t,i){var r=Mr[t];return r&&r.indexOf(",")<0&&(t=r),t in es&&t!==ai&&(e._gsap.x||zr(e,"x"))?i&&Sx===i?t==="scale"?BL:zL:(Sx=i||{})&&(t==="scale"?VL:GL):e.style&&!fg(e.style[t])?OL:~t.indexOf("-")?kL:Mg(e,t)},core:{_removeProperty:Bs,_getMatrix:Cg}};li.utils.checkPrefix=ja;li.core.getStyleSaver=y1;(function(n,e,t,i){var r=si(n+","+e+","+t,function(s){es[s]=1});si(e,function(s){Ei.units[s]="deg",T1[s]=1}),Mr[r[13]]=n+","+e,si(i,function(s){var o=s.split(":");Mr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ei.units[n]="px"});li.registerPlugin(C1);var R1=li.registerPlugin(C1)||li;R1.core.Tween;const QL={background:"#08060f",idle:3811932,idleEdge:5914506,active:11700735,activeEdge:14731519,hot:13936127,accent:9068511,ground:1182244,particle:13145599,hudPrimary:"#E8DFFF",hudAccent:"#B289FF",hudMuted:"#8a5fdf"};function eD({height:n=600,palette:e={},showHUD:t=!0,showTitle:i=!0,titleKicker:r="MES · DevOps · Industry 4.0",titleText:s="Autonomous production line orchestrated from CI/CD pipeline",enableOrbit:o=!0,orbitSpeed:a=.04,pixelRatioCap:l=2,className:u="",style:c={}}){const f={...QL,...e},h=In.useRef(null),p=In.useRef(null),m={oee:In.useRef(null),thr:In.useRef(null),lat:In.useRef(null),phase:In.useRef(null),phaseDetail:In.useRef(null),log:In.useRef(null),sparkPath:In.useRef(null),sparkArea:In.useRef(null)},[v,_]=In.useState(!1);return In.useEffect(()=>_(!0),[]),In.useEffect(()=>{if(!v||!p.current)return;const d=p.current;let g=d.clientWidth,x=d.clientHeight;const S=-3,T=3,E=-14,A=4,y=8,w=18,b=6,P=new N(A-.8,1,S),I=new N(y+.6,1.1,T),z=new NA;z.fog=new tg(parseInt(f.background.replace("#",""),16),.018);const H=new Fi(35,g/x,.1,500),D=new N3({antialias:!0,alpha:!0});D.setPixelRatio(Math.min(window.devicePixelRatio,l)),D.setSize(g,x),D.setClearColor(0,0),d.appendChild(D.domElement);const B=new Fu(80,80,40,40),F=new Qt({color:f.ground,transparent:!0,opacity:.6}),k=new Et(B,F);k.rotation.x=-Math.PI/2,k.position.y=-.01,z.add(k);const Y=new OC(80,40,6963135,2759242);Y.material.transparent=!0,Y.material.opacity=.25,z.add(Y),z.add(new IC(8413376,.6));const $=new NC(f.active,.4);$.position.set(10,20,10),z.add($);const J=[];function ee(ae,te,oe,le={}){const qe=new Un(ae,te,oe),ct=new Qt({color:le.fill??f.idle,transparent:!0,opacity:le.fillOpacity??.35}),Qe=new Et(qe,ct),Gt=new Qs(qe),ft=new mr({color:le.edge??f.idleEdge,transparent:!0,opacity:le.edgeOpacity??.9}),gt=new ps(Gt,ft),_n=new xn;return _n.add(Qe),_n.add(gt),_n.userData={fillMat:ct,edgeMat:ft},J.push(qe,Gt,ct,ft),_n}function Be(ae,te,oe={}){const le=new Kn(ae,ae,te,12),qe=new Qt({color:oe.fill??f.idle,transparent:!0,opacity:oe.fillOpacity??.35}),ct=new Et(le,qe),Qe=new Qs(le),Gt=new mr({color:oe.edge??f.idleEdge,transparent:!0,opacity:oe.edgeOpacity??.9}),ft=new ps(Qe,Gt),gt=new xn;return gt.add(ct),gt.add(ft),gt.userData={fillMat:qe,edgeMat:Gt},J.push(le,Qe,qe,Gt),gt}const Me=[],pe=new xn;z.add(pe),[-12].forEach(ae=>{const te=new Lm;te.moveTo(0,0),te.lineTo(3.5,0),te.lineTo(3.5,.4),te.lineTo(1,.4),te.lineTo(1,2.2),te.lineTo(3.4,2.2),te.lineTo(3.4,2.8),te.lineTo(0,2.8),te.lineTo(0,0);const oe={depth:2.4,bevelEnabled:!1},le=new Vf(te,oe);le.center();const qe=new Qt({color:2759242,transparent:!0,opacity:.35}),ct=new Et(le,qe),Qe=new Qs(le),Gt=new mr({color:f.idleEdge,transparent:!0,opacity:.9}),ft=new ps(Qe,Gt),gt=new xn;gt.add(ct),gt.add(ft),gt.rotation.y=-Math.PI/2,gt.position.set(ae,1.4,-3.45),gt.userData={fillMat:qe,edgeMat:Gt},pe.add(gt),Me.push(gt),J.push(le,Qe,qe,Gt);const _n=ee(.25,1,.25,{fill:f.active,edge:f.activeEdge,fillOpacity:.3}),cr=2.2;_n.position.set(ae,cr,-3),_n.userData.toolhead=!0,_n.userData.baseY=cr,pe.add(_n),Me.push(_n);const an=ee(1,.4,.1,{fill:f.active,edge:f.activeEdge,fillOpacity:.2});an.position.set(ae,1.8,-4.25),pe.add(an),Me.push(an)});const K=A-E,Se=(E+A)/2,me=new Un(K,.2,1.4),Ue=new Qt({color:2759242,transparent:!0}),Ge=new Et(me,Ue);Ge.position.set(Se,.7,S),pe.add(Ge);const Ve=new Qs(me),ut=new mr({color:f.idleEdge,transparent:!0,opacity:.8}),Xe=new ps(Ve,ut);Xe.position.copy(Ge.position),pe.add(Xe),J.push(me,Ve,Ue,ut);for(let ae=E+.5;ae<=A;ae+=4.2){const te=Be(.1,.6,{fill:3811932,fillOpacity:.8});te.position.set(ae,.3,S),pe.add(te)}const ne=w-y,ce=(y+w)/2,ie=new Un(ne,.2,1.2),Ee=new Qt({color:2759242,transparent:!0,opacity:.7}),ye=new Et(ie,Ee);ye.position.set(ce,.7,T),pe.add(ye);const Ye=new Qs(ie),L=new mr({color:f.idleEdge,transparent:!0,opacity:.8}),je=new ps(Ye,L);je.position.copy(ye.position),pe.add(je),J.push(ie,Ye,Ee,L);for(let ae=y+.5;ae<=w-1;ae+=4){const te=Be(.1,.7,{fill:3811932,fillOpacity:.8});te.position.set(ae,.35,T),pe.add(te)}const Ie=3,He=[];for(let ae=0;ae<Ie;ae++){const te=ee(.6,.6,.6,{fill:f.hot,edge:f.activeEdge,fillOpacity:.5}),oe=E+ae*(K/Ie);te.position.set(oe,1.1,S);const le=new Un(.26,.015,.26),qe=new Qt({color:16777215,transparent:!0,opacity:.92}),ct=new Et(le,qe);ct.position.set(0,.31,0);const Qe=oe>-12;ct.visible=Qe,te.add(ct),J.push(le,qe),pe.add(te),He.push({mesh:te,state:"on_belt1",belt2X:0,label:ct,shrunk:!1})}const fe=Be(.7,.4,{fill:f.active,edge:f.activeEdge,fillOpacity:.3});fe.position.set(b,.2,0),pe.add(fe),Me.push(fe);const pt=Be(.25,1.5,{fill:f.active,edge:f.activeEdge});pt.position.set(b,1.15,0),pe.add(pt),Me.push(pt);const R=new xn;R.position.set(b,1.9,0),pe.add(R);const M=new xn;R.add(M);const V=ee(2.2,.28,.28,{fill:f.active,edge:f.activeEdge});V.position.set(1.1,0,0),M.add(V),Me.push(V);const j=new xn;j.position.set(2.2,0,0),M.add(j);const re=ee(1.8,.24,.24,{fill:f.active,edge:f.activeEdge});re.position.set(.9,0,0),j.add(re),Me.push(re);const ue=new xn;ue.position.set(1.8,0,0),ue.rotation.order="ZYX",j.add(ue);const _e=ee(.8,.15,.3,{fill:f.active,edge:f.activeEdge});ue.add(_e),Me.push(_e);const q=ee(.08,.35,.15,{fill:f.hot,edge:f.activeEdge,fillOpacity:.4});q.position.set(-.35,-.25,0),ue.add(q),Me.push(q);const Q=ee(.08,.35,.15,{fill:f.hot,edge:f.activeEdge,fillOpacity:.4});Q.position.set(.35,-.25,0),ue.add(Q),Me.push(Q);const Te=new cn;Te.position.set(0,-.4,0),ue.add(Te);const Pe=ee(2.5,1.8,2.5);Pe.position.set(-4,.9,3),pe.add(Pe),Me.push(Pe);const xe=new Kn(.03,.03,1.5,6),ge=new Qt({color:f.hot,transparent:!0,opacity:0}),$e=new Et(xe,ge);$e.position.set(-4,2.4,3),pe.add($e),J.push(xe,ge);const Ke=ee(2.8,2.2,2.2);Ke.position.set(w+1.5,1.1,T),pe.add(Ke),Me.push(Ke);const st=ee(1.5,.4,1.5,{fill:f.active,edge:f.activeEdge,fillOpacity:.3});st.position.set(w+1.5,2,T),st.userData.press=!0,st.userData.baseY=2,pe.add(st),Me.push(st);const U=10.7,de={fill:1707822,edge:f.idleEdge,fillOpacity:.92},Z=ee(2.8,.38,2.1,de);Z.position.set(U,2.1,T),pe.add(Z),Me.push(Z);const be=ee(2.8,1.35,.22,de);be.position.set(U,1.23,T-.94),pe.add(be),Me.push(be);const ve=ee(2.8,1.35,.22,de);ve.position.set(U,1.23,T+.94),pe.add(ve),Me.push(ve);const se=ee(.3,.55,2.1,de);se.position.set(U-1.4,1.93,T),pe.add(se),Me.push(se);const Oe=ee(.3,.55,2.1,de);Oe.position.set(U+1.4,1.93,T),pe.add(Oe),Me.push(Oe);const Ze=new Un(2.5,1.2,1.6),Ft=new Qt({color:65540}),vt=new Et(Ze,Ft);vt.position.set(U,1.22,T),vt.renderOrder=0,pe.add(vt),J.push(Ze,Ft);const $n=-2.6,Gn=3,ns=1.5,tl=ee(.38,.06,.08,{fill:1707822,edge:f.idleEdge,fillOpacity:.95});tl.position.set($n-.19,ns,Gn),pe.add(tl),Me.push(tl);const Uo=ee(.06,.44,.56,{fill:854048,edge:f.idleEdge,fillOpacity:.98});Uo.position.set($n,ns,Gn),pe.add(Uo),Me.push(Uo);const nl=new Un(.01,.32,.42),ir=new Qt({color:f.active,transparent:!0,opacity:.55}),Fo=new Et(nl,ir);Fo.position.set($n+.04,ns,Gn),pe.add(Fo),J.push(nl,ir),[-.12,0,.12].forEach((ae,te)=>{const oe=new Un(.012,.055,.055),le=new Qt({color:te===0?65416:te===1?f.hot:4491519,transparent:!0,opacity:.9}),qe=new Et(oe,le);qe.position.set($n+.04,ns-.22,Gn+ae),pe.add(qe),J.push(oe,le)});const En=new xn,Oo=ee(1.2,.15,1.6,{fill:657930,fillOpacity:.9,edge:f.activeEdge});Oo.position.y=.15,En.add(Oo),Me.push(Oo);const is=ee(1,.35,1.4,{fill:f.hot,edge:f.activeEdge,fillOpacity:.5});is.position.y=.4,En.add(is),Me.push(is),[[-.55,.15,.5],[.55,.15,.5],[-.55,.15,-.5],[.55,.15,-.5]].forEach(([ae,te,oe])=>{const le=Be(.15,.1,{fill:0,edge:f.activeEdge,fillOpacity:.9});le.rotation.z=Math.PI/2,le.position.set(ae,te,oe),En.add(le)});const rr=ee(.6,.4,.6,{fill:f.active,edge:f.activeEdge,fillOpacity:.3});rr.position.y=.825,En.add(rr),Me.push(rr);const il=new Un(.26,.015,.26),rl=new Qt({color:16777215,transparent:!0,opacity:.92}),ku=new Et(il,rl);ku.position.set(0,.21,0),rr.add(ku),J.push(il,rl);const sl=new ql(.07,8,8),ko=new Qt({color:f.hot}),ol=new Et(sl,ko);ol.position.set(.35,.4,.72),En.add(ol);const zu=new Et(sl,ko);zu.position.set(-.35,.4,.72),En.add(zu);const Bu=ee(.4,.1,.2,{fill:0,edge:f.activeEdge});Bu.position.set(0,.25,.75),En.add(Bu);const Vu=Be(.02,.4,{fill:0,edge:f.activeEdge,fillOpacity:.9});Vu.position.set(-.4,.75,-.5),En.add(Vu);const C=new ql(.05,8,8),O=new Et(C,ko);O.position.set(-.4,.95,-.5),En.add(O),J.push(C),En.position.set(-14,0,0),pe.add(En),J.push(sl,ko);function X(ae,te,oe=0){const le=new xn,qe=3811932,ct=f.activeEdge;function Qe(Rh,Y1=.82,q1=.32){const Bg=new Qt({color:qe,transparent:!0,opacity:Y1}),Vg=new Qs(Rh),Gg=new mr({color:ct,transparent:!0,opacity:q1}),bh=new xn;return bh.add(new Et(Rh,Bg)),bh.add(new ps(Vg,Gg)),J.push(Rh,Bg,Vg,Gg),bh}const Gt=Qe(new Un(.15,.07,.26));Gt.position.set(-.15,.035,.07),le.add(Gt);const ft=Qe(new Un(.15,.07,.26));ft.position.set(.15,.035,.07),le.add(ft);const gt=Qe(new Kn(.065,.07,.48,8));gt.position.set(-.15,.31,0),le.add(gt);const _n=Qe(new Kn(.065,.07,.48,8));_n.position.set(.15,.31,0),le.add(_n);const cr=Qe(new Kn(.09,.075,.46,8));cr.position.set(-.14,.78,0),le.add(cr);const an=Qe(new Kn(.09,.075,.46,8));an.position.set(.14,.78,0),le.add(an);const Wu=Qe(new Un(.44,.7,.26),.85,.38);Wu.position.y=1.36,le.add(Wu);const Xu=Qe(new Kn(.08,.1,.18,8));Xu.position.y=1.8,le.add(Xu);const ul=Qe(new ql(.2,10,7),.9,.3);ul.position.y=2.09,le.add(ul);const Bo=Qe(new Kn(.065,.06,.42,8));Bo.position.set(-.27,1.5,0),Bo.rotation.z=-.22,le.add(Bo);const js=Qe(new Kn(.065,.06,.42,8));js.position.set(.27,1.5,0),js.rotation.z=.22,le.add(js);const Vo=Qe(new Kn(.055,.05,.38,8));Vo.position.set(-.37,1.12,0),Vo.rotation.z=-.28,le.add(Vo);const Ch=Qe(new Kn(.055,.05,.38,8));return Ch.position.set(.37,1.12,0),Ch.rotation.z=.28,le.add(Ch),le.position.set(ae,0,te),le.rotation.y=oe,le}pe.add(X(-8,-1.2,Math.PI)),pe.add(X(-2,3,-Math.PI/2));const G=new xn;G.position.set(0,10,0),z.add(G);const W=new lg(1.2,.28,80,12,2,3),Ae=new Qt({color:f.active,wireframe:!0,transparent:!0,opacity:.7}),Le=new Et(W,Ae);G.add(Le),J.push(W,Ae);const we=new og(2,1),Fe=new Qt({color:f.activeEdge,wireframe:!0,transparent:!0,opacity:.2}),ze=new Et(we,Fe);G.add(ze),J.push(we,Fe);const Je=[];for(let ae=0;ae<5;ae++){const te=new ag(.18,0),oe=new Qt({color:f.hot,transparent:!0,opacity:.8}),le=new Et(te,oe);le.userData={angle:ae/5*Math.PI*2,radius:3+Math.random()*.5,speed:.3+Math.random()*.2,yOff:Math.random()*.5},G.add(le),Je.push(le),J.push(te,oe)}let tt=new xn,ke;[-5].forEach(ae=>{const te=new Lm;te.moveTo(0,0),te.lineTo(.4,0),te.lineTo(.4,2.4),te.lineTo(2.6,2.4),te.lineTo(2.6,0),te.lineTo(3,0),te.lineTo(3,2.8),te.lineTo(0,2.8),te.lineTo(0,0);const oe={depth:.5,bevelEnabled:!1},le=new Vf(te,oe);le.center();const qe=new Qt({color:f.idle,transparent:!0,opacity:.35}),ct=new Et(le,qe),Qe=new Qs(le),Gt=new mr({color:f.idleEdge,transparent:!0,opacity:.9}),ft=new ps(Qe,Gt),gt=new xn;gt.add(ct),gt.add(ft),gt.userData={fillMat:qe,edgeMat:Gt},gt.rotation.y=Math.PI/2,gt.position.set(ae,1.4,-3),pe.add(gt),Me.push(gt);const _n=5,cr=.35,an=(_n-1)*cr,Wu=-an/2,Xu=1.6,ul=new Kn(.008,.008,Xu,8);ke=new Qt({color:16711680,transparent:!0,opacity:.7});for(let js=0;js<_n;js++){const Vo=new Et(ul,ke);Vo.position.set(Wu+js*cr,.2,0),tt.add(Vo)}gt.add(tt);const Bo=ee(an+.2,.05,.2,{fill:16711680});Bo.position.set(0,1,0),gt.add(Bo),J.push(le,Qe,qe,Gt,ul,ke)});const xt=[new N(-12,2.2,-5),new N(b,1.9,0),new N(-4,.9,3),new N(w+1.5,1.1,T),new N(-5,2.4,-3)],Ot=xt.length,Pt=40,Mt=Ot*Pt,dn=new Float32Array(Mt*3),De=[];for(let ae=0;ae<Ot;ae++)for(let te=0;te<Pt;te++)De.push({stream:ae,progress:te/Pt,offset:(Math.random()-.5)*.3});const pn=new nn;pn.setAttribute("position",new Gi(dn,3));const at=(()=>{const ae=document.createElement("canvas");ae.width=64,ae.height=64;const te=ae.getContext("2d"),oe=te.createRadialGradient(32,32,0,32,32,32);return oe.addColorStop(0,"rgba(220,180,255,1)"),oe.addColorStop(.4,"rgba(180,130,255,0.7)"),oe.addColorStop(1,"rgba(140,80,255,0)"),te.fillStyle=oe,te.fillRect(0,0,64,64),new HA(ae)})(),bn=new Rm({size:.5,map:at,transparent:!0,opacity:1,blending:Nf,depthWrite:!1,color:f.particle}),bi=new Cv(pn,bn);z.add(bi),J.push(pn,bn,at);const Pi=200,Xi=new Float32Array(Pi*3);for(let ae=0;ae<Pi;ae++)Xi[ae*3]=(Math.random()-.5)*60,Xi[ae*3+1]=Math.random()*12,Xi[ae*3+2]=(Math.random()-.5)*40;const yt=new nn;yt.setAttribute("position",new Gi(Xi,3));const kt=new Rm({size:.08,map:at,color:f.accent,transparent:!0,opacity:.5,blending:Nf,depthWrite:!1}),sr=new Cv(yt,kt);z.add(sr),J.push(yt,kt);const Tt=new mr({color:f.active,transparent:!0,opacity:.15});J.push(Tt),xt.forEach(ae=>{const te=new nn().setFromPoints([new N(0,10,0),ae]);z.add(new cM(te,Tt)),J.push(te)});const ui=30;let ci=Math.PI*.5;const al=15;H.position.set(Math.cos(ci)*ui,al,Math.sin(ci)*ui),H.lookAt(2,1.5,0);const St={phase:"optimize",activation:1,oee:70,throughput:280,latency:52,deployProgress:1,running:1},Gu=Array(40).fill(60);function b1(){if(!m.sparkPath.current||!m.sparkArea.current)return;const ae=Gu.map((te,oe)=>{const le=oe/(Gu.length-1)*180,qe=28-(te-50)/50*26;return`${le.toFixed(1)} ${qe.toFixed(1)}`});m.sparkPath.current.setAttribute("d","M"+ae.join(" L")),m.sparkArea.current.setAttribute("d",`M0 28 L${ae.join(" L")} L180 28 Z`)}function rs(ae){if(!m.log.current)return;const te=new Date().toTimeString().slice(0,8),oe=document.createElement("div");for(oe.className="sfh-log-line sfh-log-new",oe.innerHTML=`<span class="sfh-log-tag">${te}</span>${ae}`,m.log.current.insertBefore(oe,m.log.current.firstChild);m.log.current.children.length>4;)m.log.current.removeChild(m.log.current.lastChild)}rs("pipeline idle · awaiting trigger");const Lt=R1.timeline({repeat:-1});Lt.call(()=>{St.phase="optimize",m.phase.current&&(m.phase.current.textContent="Optimization"),m.phaseDetail.current&&(m.phaseDetail.current.textContent="Live tuning · OEE climbing")}),Lt.to(St,{oee:85,duration:3,ease:"power1.inOut"}),Lt.to(St,{throughput:540,duration:3,ease:"power1.inOut"},"<"),Lt.to(St,{latency:32,duration:3,ease:"power1.inOut"},"<"),Lt.call(()=>rs("▲ cycle time reduced 18%")),Lt.to(St,{oee:94,duration:3,ease:"power1.inOut"}),Lt.to(St,{throughput:740,duration:3,ease:"power1.inOut"},"<"),Lt.to(St,{latency:22,duration:3,ease:"power1.inOut"},"<"),Lt.call(()=>rs("▲ bottleneck resolved · line 2")),Lt.to(St,{oee:98,duration:2,ease:"power1.out"}),Lt.to(St,{throughput:847,duration:2,ease:"power1.out"},"<"),Lt.to(St,{latency:18,duration:2,ease:"power1.out"},"<"),Lt.call(()=>rs("● system stable · 98% OEE")),Lt.to({},{duration:4}),Lt.call(()=>rs("● throughput maximized")),Lt.to({},{duration:1}),Lt.call(()=>{St.phase="reset",m.phase.current&&(m.phase.current.textContent="Shutdown"),m.phaseDetail.current&&(m.phaseDetail.current.textContent="Graceful shutdown"),rs("↻ shutting down production line")}),Lt.to(St,{activation:0,running:0,oee:0,throughput:0,latency:200,deployProgress:0,duration:3,ease:"power2.inOut"}),Lt.to({},{duration:2}),Lt.call(()=>{St.phase="optimize",m.phase.current&&(m.phase.current.textContent="Activation"),m.phaseDetail.current&&(m.phaseDetail.current.textContent="Machines warming up"),rs("→ restarting production line")}),Lt.to(St,{activation:1,running:1,oee:70,throughput:280,latency:52,deployProgress:1,duration:4,ease:"power2.inOut"}),Lt.call(()=>rs("✓ line running · 70% OEE")),Lt.to({},{duration:1});let yh=performance.now(),Ng=0,Sh=0,Mh=0;const or=-12,Hu=2.2,P1=1.5;let Ys="idle",qs=0,ar=null;const Ig=new it,Ug=new it,L1=new it(f.idle),D1=new it(f.active),N1=new it(f.idleEdge),I1=new it(f.activeEdge);function U1(){const ae=St.activation;Ig.copy(L1).lerp(D1,ae),Ug.copy(N1).lerp(I1,ae);const te=.25+ae*.35,oe=.6+ae*.35;Me.forEach(le=>{le.userData&&le.userData.fillMat&&(le.userData.fillMat.color.copy(Ig),le.userData.fillMat.opacity=te,le.userData.edgeMat&&(le.userData.edgeMat.color.copy(Ug),le.userData.edgeMat.opacity=oe))}),Ue.opacity=1,Ee.opacity=1,ge.opacity=ae*.9,ke&&(ke.opacity=.1+ae*.7),ol.material.color.setHSL(.75,.8,.5+Math.sin(Sh*4)*.2*ae)}function F1(ae){const te=pn.attributes.position,oe=St.deployProgress,le=St.activation;for(let qe=0;qe<Mt;qe++){const ct=De[qe],Qe=xt[ct.stream];if(ct.progress+=ae*(.3+oe*.5)*(.8+ct.stream*.1),ct.progress>1&&(ct.progress-=1),!(ct.progress>(1-oe)*.3||St.phase==="activate"||St.phase==="optimize")){te.array[qe*3]=999;continue}const ft=ct.progress,gt=Qe.x*.5,_n=7,cr=Qe.z*.5,an=1-ft;te.array[qe*3]=an*an*0+2*an*ft*gt+ft*ft*Qe.x+ct.offset,te.array[qe*3+1]=an*an*10+2*an*ft*_n+ft*ft*Qe.y,te.array[qe*3+2]=an*an*0+2*an*ft*cr+ft*ft*Qe.z+ct.offset}te.needsUpdate=!0,bn.opacity=.4+Math.max(oe,le)*.6}function O1(){if(St.activation<.05)return 0;const ae=Math.max(0,(St.oee-60)/38);return St.activation*(.6+ae*2.4)}const k1=-1.55,z1=-1.55,Eh=Math.atan2(P.x-b,P.z-0)+k1,Th=Math.atan2(I.x-b,I.z-0)+z1,ll=(Eh+Th)/2;let lr="waiting",fi=0,hi=null,ur=ll,zo=ll,wh=new N;R.rotation.y=ur;const Fg=0,ss=.5;let mn=ss;const os=-.8,Og=-.15;let gn=os;function B1(ae){if(St.running<.1){M.rotation.z=Dt.lerp(M.rotation.z,ss,.05),j.rotation.z=Dt.lerp(j.rotation.z,os,.05);return}fi+=ae;const te=zo-ur,oe=ae*3;switch(Math.abs(te)>.01?(ur+=Math.sign(te)*Math.min(Math.abs(te),oe),R.rotation.y=ur):(ur=zo,R.rotation.y=ur),lr){case"waiting":{mn=Dt.lerp(mn,ss,.1),gn=Dt.lerp(gn,os,.1),zo=ll;const le=He.find(qe=>qe.state==="on_belt1"&&qe.mesh.position.x>=P.x-.5);le&&(hi=le,lr="turning_to_pick",zo=Eh);break}case"turning_to_pick":{mn=Dt.lerp(mn,ss,.1),gn=Dt.lerp(gn,os,.1),Math.abs(ur-Eh)<.05&&(lr="picking_down",fi=0);break}case"picking_down":{if(mn=Dt.lerp(mn,Fg,.15),gn=Dt.lerp(gn,Og,.15),fi>.5){if(hi){hi.state="picked";const le=new N;Te.getWorldPosition(le),wh.copy(hi.mesh.position).sub(le)}lr="picking_up",fi=0}break}case"picking_up":{mn=Dt.lerp(mn,ss,.15),gn=Dt.lerp(gn,os,.15),fi>.4&&(lr="rotating",zo=Th,fi=0);break}case"rotating":{mn=Dt.lerp(mn,ss,.1),gn=Dt.lerp(gn,os,.1),Math.abs(ur-Th)<.05&&(lr="placing_down",fi=0);break}case"placing_down":{mn=Dt.lerp(mn,Fg,.15),gn=Dt.lerp(gn,Og,.15),fi>.5&&(hi&&(hi.state="on_belt2",hi.belt2X=0,hi.mesh.position.copy(I),hi=null),lr="placing_up",fi=0);break}case"placing_up":{mn=Dt.lerp(mn,ss,.15),gn=Dt.lerp(gn,os,.15),fi>.3&&(lr="returning",zo=ll,fi=0);break}case"returning":{mn=Dt.lerp(mn,ss,.1),gn=Dt.lerp(gn,os,.1),Math.abs(ur-ll)<.05&&(lr="waiting",fi=0);break}}if(M.rotation.z=mn,j.rotation.z=gn,ue.rotation.y=-ur+Math.PI/2,ue.rotation.z=-(mn+gn),hi&&hi.state==="picked"){const le=new N;if(Te.getWorldPosition(le),lr==="placing_down"){const qe=Math.min(fi/.5,1);hi.mesh.position.copy(le).lerp(I,qe*qe)}else wh.lerp(new N(0,0,0),.1),hi.mesh.position.copy(le).add(wh)}}function V1(ae){const te=O1();Ng+=ae*te,He.forEach((oe,le)=>{if(oe.state==="on_belt1")oe.mesh.position.x>=or-.6&&oe.mesh.position.x<or+.6&&Ys!=="idle"?oe.mesh.position.x=Math.min(oe.mesh.position.x,or-.05):oe.mesh.position.x+=ae*te,oe.mesh.position.y=1.1+Math.sin(Ng*2+le*2)*.015*St.activation,oe.mesh.position.x>=P.x&&(oe.mesh.position.x=P.x,oe.mesh.position.z=P.z);else if(oe.state==="being_pressed")oe.mesh.position.x<or&&(oe.mesh.position.x+=ae*te,oe.mesh.position.x>or&&(oe.mesh.position.x=or)),oe.mesh.position.y=1.1,oe.mesh.position.z=S;else if(oe.state==="on_belt2"&&(oe.belt2X+=ae*te,oe.mesh.position.x=I.x+oe.belt2X,oe.mesh.position.z=T,!oe.shrunk&&oe.mesh.position.x>U+1.2&&(oe.shrunk=!0,oe.mesh.scale.set(1,.667,1)),oe.mesh.position.y=oe.shrunk?1.2:1.1,oe.mesh.position.x>w+.3)){const qe=He.filter(Qe=>Qe.state==="on_belt1");let ct=E;if(qe.length>0){const Qe=Math.min(...qe.map(Gt=>Gt.mesh.position.x));ct=Math.min(Qe-K/Ie,E)}oe.state="on_belt1",oe.mesh.position.set(ct,1.1,S),oe.mesh.scale.set(1,1,1),oe.shrunk=!1,oe.label.visible=!1}})}function G1(ae){const te=performance.now()*.001;Me.forEach(le=>{le.userData&&le.userData.press&&(le.position.y=le.userData.baseY-Math.abs(Math.sin(te*1.5))*.5*St.running)});const oe=Me.find(le=>le.userData&&le.userData.toolhead);if(oe){if(St.running<.1){oe.position.y=Hu,Ys="idle",ar=null;return}switch(qs+=ae,Ys){case"idle":{oe.position.y=Dt.lerp(oe.position.y,Hu,.1);const le=He.find(qe=>qe.state==="on_belt1"&&qe.mesh.position.x>=or-.55&&qe.mesh.position.x<or-.05);le&&(le.state="being_pressed",ar=le,Ys="arriving",qs=0);break}case"arriving":oe.position.y=Dt.lerp(oe.position.y,Hu,.1),ar&&ar.mesh.position.x>=or-.05&&(ar.mesh.position.x=or,Ys="pressing",qs=0);break;case"pressing":oe.position.y=Dt.lerp(oe.position.y,P1,.16),qs>.7&&(ar&&(ar.label.visible=!0),Ys="releasing",qs=0);break;case"releasing":oe.position.y=Dt.lerp(oe.position.y,Hu,.11),qs>.65&&(ar&&(ar.state="on_belt1",ar=null),Ys="idle",qs=0);break}}}function H1(ae){Sh+=ae*St.activation;const te=15,oe=Sh%te/te;let le=0,qe=5.8,ct=-Math.PI/2,Qe=!1,Gt=!0;if(oe<.25){const ft=oe/.25;le=Dt.lerp(35,19.5,ft),ct=-Math.PI/2,Qe=!1}else if(oe<.35){le=19.5;const ft=(oe-.25)/.1,gt=ft*ft*(3-2*ft);ct=Dt.lerp(-Math.PI/2,-Math.PI,gt),Qe=!1}else if(oe<.45)le=19.5,ct=-Math.PI,Qe=oe>.4;else if(oe<.55){le=19.5;const ft=(oe-.45)/.1,gt=ft*ft*(3-2*ft);ct=Dt.lerp(-Math.PI,-Math.PI/2,gt),Qe=!0}else if(oe<.85){const ft=(oe-.55)/.3;le=Dt.lerp(19.5,-35,ft),ct=-Math.PI/2,Qe=!0}else Gt=!1,Qe=!1;Gt?(En.position.set(le,0,qe),En.rotation.y=ct,rr.visible=Qe):En.position.set(0,-999,0)}function W1(){const ae=performance.now()*.001;Le.rotation.y=ae*.3,Le.rotation.x=ae*.15,ze.rotation.y=-ae*.1,G.position.y=10+Math.sin(ae*.6)*.3,Je.forEach(te=>{te.userData.angle+=.016*te.userData.speed,te.position.x=Math.cos(te.userData.angle)*te.userData.radius,te.position.z=Math.sin(te.userData.angle)*te.userData.radius,te.position.y=Math.sin(te.userData.angle*2+te.userData.yOff)*.5,te.rotation.x=te.userData.angle,te.rotation.y=te.userData.angle*.7})}function X1(){m.oee.current&&(m.oee.current.textContent=St.oee.toFixed(0)),m.thr.current&&(m.thr.current.textContent=Math.round(St.throughput)),m.lat.current&&(m.lat.current.textContent=St.latency.toFixed(0)),Gu.push(St.oee),Gu.shift(),b1()}function Ah(){const ae=performance.now(),te=Math.min(.05,(ae-yh)/1e3);yh=ae,o&&(ci+=te*a,H.position.x=Math.cos(ci)*ui,H.position.z=Math.sin(ci)*ui,H.position.y=al+Math.sin(ci*.5)*1.5,H.lookAt(2,1.5,0)),U1(),F1(te),G1(te),B1(te),V1(te),H1(te),W1(),X1();const oe=yt.attributes.position;for(let le=0;le<Pi;le++)oe.array[le*3+1]+=te*.1,oe.array[le*3+1]>12&&(oe.array[le*3+1]=0);oe.needsUpdate=!0,D.render(z,H),Mh=requestAnimationFrame(Ah)}Ah();const kg=new ResizeObserver(()=>{g=d.clientWidth,x=d.clientHeight,H.aspect=g/x,H.updateProjectionMatrix(),D.setSize(g,x)});kg.observe(d);const zg=()=>{document.hidden?(Lt.pause(),cancelAnimationFrame(Mh)):(Lt.resume(),yh=performance.now(),Ah())};return document.addEventListener("visibilitychange",zg),()=>{cancelAnimationFrame(Mh),document.removeEventListener("visibilitychange",zg),kg.disconnect(),Lt.kill(),J.forEach(ae=>{ae&&typeof ae.dispose=="function"&&ae.dispose()}),z.traverse(ae=>{ae.geometry&&typeof ae.geometry.dispose=="function"&&ae.geometry.dispose(),ae.material&&(Array.isArray(ae.material)?ae.material.forEach(te=>te.dispose&&te.dispose()):typeof ae.material.dispose=="function"&&ae.material.dispose())}),D.dispose(),D.domElement&&D.domElement.parentNode&&D.domElement.parentNode.removeChild(D.domElement)}},[v,o,a,l]),rt.jsxs("div",{ref:h,className:`sfh-root ${u}`,style:{position:"relative",width:"100%",height:typeof n=="number"?`${n}px`:n,background:f.background,borderRadius:12,overflow:"hidden",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',...c},children:[rt.jsx("style",{children:`
        .sfh-root .sfh-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(140,80,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(140,80,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
        }
        .sfh-root .sfh-overlay {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(5,0,20,0.7) 100%);
        }
        .sfh-root .sfh-hud {
          position: absolute; inset: 0; pointer-events: none;
          color: ${f.hudPrimary};
        }
        .sfh-root .sfh-card {
          position: absolute;
          background: rgba(20,10,40,0.55);
          border: 1px solid rgba(180,130,255,0.35);
          border-radius: 8px;
          padding: 10px 14px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 0 20px rgba(140,80,255,0.15);
        }
        .sfh-root .sfh-label {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${f.hudAccent};
          opacity: 0.85;
          margin-bottom: 4px;
        }
        .sfh-root .sfh-value {
          font-size: 22px;
          font-weight: 300;
          color: #fff;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.5px;
        }
        .sfh-root .sfh-unit {
          font-size: 12px;
          color: ${f.hudAccent};
          margin-left: 2px;
        }
        .sfh-root .sfh-title {
          top: 20px; left: 24px; max-width: 260px;
          background: transparent; border: none; box-shadow: none; padding: 0;
        }
        .sfh-root .sfh-title .t1 {
          font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
          color: ${f.hudAccent}; opacity: 0.9; margin-bottom: 6px;
        }
        .sfh-root .sfh-title .t2 {
          font-size: 15px; font-weight: 400; color: #fff; line-height: 1.4;
        }
        .sfh-root .sfh-phase { top: 20px; right: 24px; min-width: 160px; text-align: right; }
        .sfh-root .sfh-phase-dot {
          display: inline-block; width: 7px; height: 7px; border-radius: 50%;
          background: #C895FF; box-shadow: 0 0 10px #C895FF;
          margin-right: 6px; vertical-align: middle;
          animation: sfh-pulse 1.4s ease-in-out infinite;
        }
        @keyframes sfh-pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .sfh-root .sfh-oee { bottom: 24px; left: 24px; min-width: 180px; }
        .sfh-root .sfh-thr { bottom: 24px; left: 228px; min-width: 160px; }
        .sfh-root .sfh-lat { bottom: 24px; left: 410px; min-width: 140px; }
        .sfh-root .sfh-log {
          bottom: 24px; right: 24px; min-width: 240px;
          font-family: 'SF Mono', Menlo, Consolas, monospace;
          font-size: 11px; line-height: 1.7;
        }
        .sfh-root .sfh-log-line { color: #D9C6FF; opacity: 0.9; }
        .sfh-root .sfh-log-tag { color: ${f.hudMuted}; margin-right: 6px; }
        .sfh-root .sfh-log-new { animation: sfh-logIn 0.4s ease-out; }
        @keyframes sfh-logIn {
          from { opacity: 0; transform: translateX(6px); }
          to { opacity: 0.9; transform: translateX(0); }
        }
        .sfh-root .sfh-spark { width: 100%; height: 28px; margin-top: 6px; }

        @media (max-width: 720px) {
          .sfh-root .sfh-hud { display: none; }
        }
      `}),rt.jsx("div",{className:"sfh-grid-bg"}),rt.jsx("div",{ref:p,style:{position:"absolute",inset:0}}),rt.jsx("div",{className:"sfh-overlay"}),t&&rt.jsxs("div",{className:"sfh-hud",children:[i&&rt.jsxs("div",{className:"sfh-card sfh-title",children:[rt.jsx("div",{className:"t1",children:r}),rt.jsx("div",{className:"t2",children:s})]}),rt.jsxs("div",{className:"sfh-card sfh-phase",children:[rt.jsxs("div",{className:"sfh-label",children:[rt.jsx("span",{className:"sfh-phase-dot"}),rt.jsx("span",{ref:m.phase,children:"Initializing"})]}),rt.jsx("div",{className:"sfh-value",style:{fontSize:13,fontWeight:400},ref:m.phaseDetail,children:"Awaiting deployment"})]}),rt.jsxs("div",{className:"sfh-card sfh-oee",children:[rt.jsx("div",{className:"sfh-label",children:"OEE"}),rt.jsxs("div",{className:"sfh-value",children:[rt.jsx("span",{ref:m.oee,children:"60"}),rt.jsx("span",{className:"sfh-unit",children:"%"})]}),rt.jsxs("svg",{className:"sfh-spark",viewBox:"0 0 180 28",preserveAspectRatio:"none",children:[rt.jsx("path",{ref:m.sparkPath,d:"M0 20 L180 20",fill:"none",stroke:f.hudAccent,strokeWidth:"1.5",strokeLinejoin:"round"}),rt.jsx("path",{ref:m.sparkArea,d:"M0 28 L0 20 L180 20 L180 28 Z",fill:"rgba(178,137,255,0.15)"})]})]}),rt.jsxs("div",{className:"sfh-card sfh-thr",children:[rt.jsx("div",{className:"sfh-label",children:"Throughput"}),rt.jsxs("div",{className:"sfh-value",children:[rt.jsx("span",{ref:m.thr,children:"0"}),rt.jsx("span",{className:"sfh-unit",children:"u/h"})]})]}),rt.jsxs("div",{className:"sfh-card sfh-lat",children:[rt.jsx("div",{className:"sfh-label",children:"Latency"}),rt.jsxs("div",{className:"sfh-value",children:[rt.jsx("span",{ref:m.lat,children:"—"}),rt.jsx("span",{className:"sfh-unit",children:"ms"})]})]}),rt.jsxs("div",{className:"sfh-card sfh-log",children:[rt.jsx("div",{className:"sfh-label",children:"System log"}),rt.jsx("div",{ref:m.log})]})]})]})}function tD(){return rt.jsx("div",{style:{width:"100vw",height:"100vh",margin:0,padding:0},children:rt.jsx(eD,{})})}qd.createRoot(document.getElementById("root")).render(rt.jsx(cE.StrictMode,{children:rt.jsx(tD,{})}));
