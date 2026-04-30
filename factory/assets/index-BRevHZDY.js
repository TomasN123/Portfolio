(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function cE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hx={exports:{}},nh={},Wx={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=Symbol.for("react.element"),fE=Symbol.for("react.portal"),hE=Symbol.for("react.fragment"),dE=Symbol.for("react.strict_mode"),pE=Symbol.for("react.profiler"),mE=Symbol.for("react.provider"),gE=Symbol.for("react.context"),_E=Symbol.for("react.forward_ref"),vE=Symbol.for("react.suspense"),xE=Symbol.for("react.memo"),yE=Symbol.for("react.lazy"),i_=Symbol.iterator;function SE(n){return n===null||typeof n!="object"?null:(n=i_&&n[i_]||n["@@iterator"],typeof n=="function"?n:null)}var Xx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yx=Object.assign,qx={};function tl(n,e,t){this.props=n,this.context=e,this.refs=qx,this.updater=t||Xx}tl.prototype.isReactComponent={};tl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};tl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function jx(){}jx.prototype=tl.prototype;function n0(n,e,t){this.props=n,this.context=e,this.refs=qx,this.updater=t||Xx}var i0=n0.prototype=new jx;i0.constructor=n0;Yx(i0,tl.prototype);i0.isPureReactComponent=!0;var r_=Array.isArray,$x=Object.prototype.hasOwnProperty,r0={current:null},Kx={key:!0,ref:!0,__self:!0,__source:!0};function Zx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$x.call(e,i)&&!Kx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Du,type:n,key:s,ref:o,props:r,_owner:r0.current}}function ME(n,e){return{$$typeof:Du,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function s0(n){return typeof n=="object"&&n!==null&&n.$$typeof===Du}function EE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var s_=/\/+/g;function Fh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?EE(""+n.key):e.toString(36)}function qc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Du:case fE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Fh(o,0):i,r_(r)?(t="",n!=null&&(t=n.replace(s_,"$&/")+"/"),qc(r,e,t,"",function(u){return u})):r!=null&&(s0(r)&&(r=ME(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(s_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",r_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Fh(s,a);o+=qc(s,e,t,l,r)}else if(l=SE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Fh(s,a++),o+=qc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ju(n,e,t){if(n==null)return n;var i=[],r=0;return qc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function TE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var jn={current:null},jc={transition:null},wE={ReactCurrentDispatcher:jn,ReactCurrentBatchConfig:jc,ReactCurrentOwner:r0};function Jx(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:Ju,forEach:function(n,e,t){Ju(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ju(n,function(){e++}),e},toArray:function(n){return Ju(n,function(e){return e})||[]},only:function(n){if(!s0(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};lt.Component=tl;lt.Fragment=hE;lt.Profiler=pE;lt.PureComponent=n0;lt.StrictMode=dE;lt.Suspense=vE;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wE;lt.act=Jx;lt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Yx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=r0.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)$x.call(e,l)&&!Kx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Du,type:n.type,key:r,ref:s,props:i,_owner:o}};lt.createContext=function(n){return n={$$typeof:gE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:mE,_context:n},n.Consumer=n};lt.createElement=Zx;lt.createFactory=function(n){var e=Zx.bind(null,n);return e.type=n,e};lt.createRef=function(){return{current:null}};lt.forwardRef=function(n){return{$$typeof:_E,render:n}};lt.isValidElement=s0;lt.lazy=function(n){return{$$typeof:yE,_payload:{_status:-1,_result:n},_init:TE}};lt.memo=function(n,e){return{$$typeof:xE,type:n,compare:e===void 0?null:e}};lt.startTransition=function(n){var e=jc.transition;jc.transition={};try{n()}finally{jc.transition=e}};lt.unstable_act=Jx;lt.useCallback=function(n,e){return jn.current.useCallback(n,e)};lt.useContext=function(n){return jn.current.useContext(n)};lt.useDebugValue=function(){};lt.useDeferredValue=function(n){return jn.current.useDeferredValue(n)};lt.useEffect=function(n,e){return jn.current.useEffect(n,e)};lt.useId=function(){return jn.current.useId()};lt.useImperativeHandle=function(n,e,t){return jn.current.useImperativeHandle(n,e,t)};lt.useInsertionEffect=function(n,e){return jn.current.useInsertionEffect(n,e)};lt.useLayoutEffect=function(n,e){return jn.current.useLayoutEffect(n,e)};lt.useMemo=function(n,e){return jn.current.useMemo(n,e)};lt.useReducer=function(n,e,t){return jn.current.useReducer(n,e,t)};lt.useRef=function(n){return jn.current.useRef(n)};lt.useState=function(n){return jn.current.useState(n)};lt.useSyncExternalStore=function(n,e,t){return jn.current.useSyncExternalStore(n,e,t)};lt.useTransition=function(){return jn.current.useTransition()};lt.version="18.3.1";Wx.exports=lt;var Un=Wx.exports;const AE=cE(Un);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CE=Un,RE=Symbol.for("react.element"),bE=Symbol.for("react.fragment"),PE=Object.prototype.hasOwnProperty,LE=CE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DE={key:!0,ref:!0,__self:!0,__source:!0};function Qx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)PE.call(e,i)&&!DE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:RE,type:n,key:s,ref:o,props:r,_owner:LE.current}}nh.Fragment=bE;nh.jsx=Qx;nh.jsxs=Qx;Hx.exports=nh;var at=Hx.exports,ep={},ey={exports:{}},Ci={},ty={exports:{}},ny={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,V){var j=U.length;U.push(V);e:for(;0<j;){var $=j-1>>>1,K=U[$];if(0<r(K,V))U[$]=V,U[j]=K,j=$;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var V=U[0],j=U.pop();if(j!==V){U[0]=j;e:for(var $=0,K=U.length,Ge=K>>>1;$<Ge;){var He=2*($+1)-1,ke=U[He],Z=He+1,xe=U[Z];if(0>r(ke,j))Z<K&&0>r(xe,ke)?(U[$]=xe,U[Z]=j,$=Z):(U[$]=ke,U[He]=j,$=He);else if(Z<K&&0>r(xe,j))U[$]=xe,U[Z]=j,$=Z;else break e}}return V}function r(U,V){var j=U.sortIndex-V.sortIndex;return j!==0?j:U.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,g=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var V=t(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=U)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=t(u)}}function S(U){if(v=!1,x(U),!g)if(t(l)!==null)g=!0,B(T);else{var V=t(u);V!==null&&O(S,V.startTime-U)}}function T(U,V){g=!1,v&&(v=!1,d(y),y=-1),p=!0;var j=f;try{for(x(V),h=t(l);h!==null&&(!(h.expirationTime>V)||U&&!P());){var $=h.callback;if(typeof $=="function"){h.callback=null,f=h.priorityLevel;var K=$(h.expirationTime<=V);V=n.unstable_now(),typeof K=="function"?h.callback=K:h===t(l)&&i(l),x(V)}else i(l);h=t(l)}if(h!==null)var Ge=!0;else{var He=t(u);He!==null&&O(S,He.startTime-V),Ge=!1}return Ge}finally{h=null,f=j,p=!1}}var M=!1,w=null,y=-1,A=5,b=-1;function P(){return!(n.unstable_now()-b<A)}function I(){if(w!==null){var U=n.unstable_now();b=U;var V=!0;try{V=w(!0,U)}finally{V?G():(M=!1,w=null)}}else M=!1}var G;if(typeof m=="function")G=function(){m(I)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,N=X.port2;X.port1.onmessage=I,G=function(){N.postMessage(null)}}else G=function(){_(I,0)};function B(U){w=U,M||(M=!0,G())}function O(U,V){y=_(function(){U(n.unstable_now())},V)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,B(T))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var j=f;f=V;try{return U()}finally{f=j}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var j=f;f=U;try{return V()}finally{f=j}},n.unstable_scheduleCallback=function(U,V,j){var $=n.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?$+j:$):j=$,U){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=j+K,U={id:c++,callback:V,priorityLevel:U,startTime:j,expirationTime:K,sortIndex:-1},j>$?(U.sortIndex=j,e(u,U),t(l)===null&&U===t(u)&&(v?(d(y),y=-1):v=!0,O(S,j-$))):(U.sortIndex=K,e(l,U),g||p||(g=!0,B(T))),U},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(U){var V=f;return function(){var j=f;f=V;try{return U.apply(this,arguments)}finally{f=j}}}})(ny);ty.exports=ny;var NE=ty.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IE=Un,Ti=NE;function fe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iy=new Set,eu={};function Fo(n,e){ka(n,e),ka(n+"Capture",e)}function ka(n,e){for(eu[n]=e,n=0;n<e.length;n++)iy.add(e[n])}var Yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tp=Object.prototype.hasOwnProperty,UE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,o_={},a_={};function FE(n){return tp.call(a_,n)?!0:tp.call(o_,n)?!1:UE.test(n)?a_[n]=!0:(o_[n]=!0,!1)}function OE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function kE(n,e,t,i){if(e===null||typeof e>"u"||OE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $n(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){bn[n]=new $n(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];bn[e]=new $n(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){bn[n]=new $n(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){bn[n]=new $n(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){bn[n]=new $n(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){bn[n]=new $n(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){bn[n]=new $n(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){bn[n]=new $n(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){bn[n]=new $n(n,5,!1,n.toLowerCase(),null,!1,!1)});var o0=/[\-:]([a-z])/g;function a0(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(o0,a0);bn[e]=new $n(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(o0,a0);bn[e]=new $n(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(o0,a0);bn[e]=new $n(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){bn[n]=new $n(n,1,!1,n.toLowerCase(),null,!1,!1)});bn.xlinkHref=new $n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){bn[n]=new $n(n,1,!1,n.toLowerCase(),null,!0,!0)});function l0(n,e,t,i){var r=bn.hasOwnProperty(e)?bn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kE(e,t,r,i)&&(t=null),i||r===null?FE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var es=IE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qu=Symbol.for("react.element"),ca=Symbol.for("react.portal"),fa=Symbol.for("react.fragment"),u0=Symbol.for("react.strict_mode"),np=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),sy=Symbol.for("react.context"),c0=Symbol.for("react.forward_ref"),ip=Symbol.for("react.suspense"),rp=Symbol.for("react.suspense_list"),f0=Symbol.for("react.memo"),gs=Symbol.for("react.lazy"),oy=Symbol.for("react.offscreen"),l_=Symbol.iterator;function dl(n){return n===null||typeof n!="object"?null:(n=l_&&n[l_]||n["@@iterator"],typeof n=="function"?n:null)}var Zt=Object.assign,Oh;function bl(n){if(Oh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Oh=e&&e[1]||""}return`
`+Oh+n}var kh=!1;function Bh(n,e){if(!n||kh)return"";kh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{kh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?bl(n):""}function BE(n){switch(n.tag){case 5:return bl(n.type);case 16:return bl("Lazy");case 13:return bl("Suspense");case 19:return bl("SuspenseList");case 0:case 2:case 15:return n=Bh(n.type,!1),n;case 11:return n=Bh(n.type.render,!1),n;case 1:return n=Bh(n.type,!0),n;default:return""}}function sp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case fa:return"Fragment";case ca:return"Portal";case np:return"Profiler";case u0:return"StrictMode";case ip:return"Suspense";case rp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case sy:return(n.displayName||"Context")+".Consumer";case ry:return(n._context.displayName||"Context")+".Provider";case c0:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case f0:return e=n.displayName||null,e!==null?e:sp(n.type)||"Memo";case gs:e=n._payload,n=n._init;try{return sp(n(e))}catch{}}return null}function zE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sp(e);case 8:return e===u0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Os(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ay(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VE(n){var e=ay(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ec(n){n._valueTracker||(n._valueTracker=VE(n))}function ly(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ay(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function gf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function op(n,e){var t=e.checked;return Zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function u_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Os(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uy(n,e){e=e.checked,e!=null&&l0(n,"checked",e,!1)}function ap(n,e){uy(n,e);var t=Os(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?lp(n,e.type,t):e.hasOwnProperty("defaultValue")&&lp(n,e.type,Os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function c_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function lp(n,e,t){(e!=="number"||gf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Pl=Array.isArray;function Aa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Os(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function up(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return Zt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function f_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(fe(92));if(Pl(t)){if(1<t.length)throw Error(fe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Os(t)}}function cy(n,e){var t=Os(e.value),i=Os(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function h_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function fy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?fy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var tc,hy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function tu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var kl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GE=["Webkit","ms","Moz","O"];Object.keys(kl).forEach(function(n){GE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),kl[e]=kl[n]})});function dy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||kl.hasOwnProperty(n)&&kl[n]?(""+e).trim():e+"px"}function py(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=dy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var HE=Zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fp(n,e){if(e){if(HE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function hp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dp=null;function h0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pp=null,Ca=null,Ra=null;function d_(n){if(n=Uu(n)){if(typeof pp!="function")throw Error(fe(280));var e=n.stateNode;e&&(e=ah(e),pp(n.stateNode,n.type,e))}}function my(n){Ca?Ra?Ra.push(n):Ra=[n]:Ca=n}function gy(){if(Ca){var n=Ca,e=Ra;if(Ra=Ca=null,d_(n),e)for(n=0;n<e.length;n++)d_(e[n])}}function _y(n,e){return n(e)}function vy(){}var zh=!1;function xy(n,e,t){if(zh)return n(e,t);zh=!0;try{return _y(n,e,t)}finally{zh=!1,(Ca!==null||Ra!==null)&&(vy(),gy())}}function nu(n,e){var t=n.stateNode;if(t===null)return null;var i=ah(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(fe(231,e,typeof t));return t}var mp=!1;if(Yr)try{var pl={};Object.defineProperty(pl,"passive",{get:function(){mp=!0}}),window.addEventListener("test",pl,pl),window.removeEventListener("test",pl,pl)}catch{mp=!1}function WE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Bl=!1,_f=null,vf=!1,gp=null,XE={onError:function(n){Bl=!0,_f=n}};function YE(n,e,t,i,r,s,o,a,l){Bl=!1,_f=null,WE.apply(XE,arguments)}function qE(n,e,t,i,r,s,o,a,l){if(YE.apply(this,arguments),Bl){if(Bl){var u=_f;Bl=!1,_f=null}else throw Error(fe(198));vf||(vf=!0,gp=u)}}function Oo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function yy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function p_(n){if(Oo(n)!==n)throw Error(fe(188))}function jE(n){var e=n.alternate;if(!e){if(e=Oo(n),e===null)throw Error(fe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return p_(r),n;if(s===i)return p_(r),e;s=s.sibling}throw Error(fe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(fe(189))}}if(t.alternate!==i)throw Error(fe(190))}if(t.tag!==3)throw Error(fe(188));return t.stateNode.current===t?n:e}function Sy(n){return n=jE(n),n!==null?My(n):null}function My(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=My(n);if(e!==null)return e;n=n.sibling}return null}var Ey=Ti.unstable_scheduleCallback,m_=Ti.unstable_cancelCallback,$E=Ti.unstable_shouldYield,KE=Ti.unstable_requestPaint,rn=Ti.unstable_now,ZE=Ti.unstable_getCurrentPriorityLevel,d0=Ti.unstable_ImmediatePriority,Ty=Ti.unstable_UserBlockingPriority,xf=Ti.unstable_NormalPriority,JE=Ti.unstable_LowPriority,wy=Ti.unstable_IdlePriority,ih=null,Sr=null;function QE(n){if(Sr&&typeof Sr.onCommitFiberRoot=="function")try{Sr.onCommitFiberRoot(ih,n,void 0,(n.current.flags&128)===128)}catch{}}var tr=Math.clz32?Math.clz32:nT,eT=Math.log,tT=Math.LN2;function nT(n){return n>>>=0,n===0?32:31-(eT(n)/tT|0)|0}var nc=64,ic=4194304;function Ll(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ll(a):(s&=o,s!==0&&(i=Ll(s)))}else o=t&~r,o!==0?i=Ll(o):s!==0&&(i=Ll(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-tr(e),r=1<<t,i|=n[t],e&=~r;return i}function iT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-tr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=iT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function _p(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ay(){var n=nc;return nc<<=1,!(nc&4194240)&&(nc=64),n}function Vh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Nu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-tr(e),n[e]=t}function sT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-tr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function p0(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-tr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var At=0;function Cy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ry,m0,by,Py,Ly,vp=!1,rc=[],Cs=null,Rs=null,bs=null,iu=new Map,ru=new Map,vs=[],oT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function g_(n,e){switch(n){case"focusin":case"focusout":Cs=null;break;case"dragenter":case"dragleave":Rs=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":iu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ru.delete(e.pointerId)}}function ml(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Uu(e),e!==null&&m0(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function aT(n,e,t,i,r){switch(e){case"focusin":return Cs=ml(Cs,n,e,t,i,r),!0;case"dragenter":return Rs=ml(Rs,n,e,t,i,r),!0;case"mouseover":return bs=ml(bs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return iu.set(s,ml(iu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ru.set(s,ml(ru.get(s)||null,n,e,t,i,r)),!0}return!1}function Dy(n){var e=mo(n.target);if(e!==null){var t=Oo(e);if(t!==null){if(e=t.tag,e===13){if(e=yy(t),e!==null){n.blockedOn=e,Ly(n.priority,function(){by(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $c(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=xp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);dp=i,t.target.dispatchEvent(i),dp=null}else return e=Uu(t),e!==null&&m0(e),n.blockedOn=t,!1;e.shift()}return!0}function __(n,e,t){$c(n)&&t.delete(e)}function lT(){vp=!1,Cs!==null&&$c(Cs)&&(Cs=null),Rs!==null&&$c(Rs)&&(Rs=null),bs!==null&&$c(bs)&&(bs=null),iu.forEach(__),ru.forEach(__)}function gl(n,e){n.blockedOn===e&&(n.blockedOn=null,vp||(vp=!0,Ti.unstable_scheduleCallback(Ti.unstable_NormalPriority,lT)))}function su(n){function e(r){return gl(r,n)}if(0<rc.length){gl(rc[0],n);for(var t=1;t<rc.length;t++){var i=rc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Cs!==null&&gl(Cs,n),Rs!==null&&gl(Rs,n),bs!==null&&gl(bs,n),iu.forEach(e),ru.forEach(e),t=0;t<vs.length;t++)i=vs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<vs.length&&(t=vs[0],t.blockedOn===null);)Dy(t),t.blockedOn===null&&vs.shift()}var ba=es.ReactCurrentBatchConfig,Sf=!0;function uT(n,e,t,i){var r=At,s=ba.transition;ba.transition=null;try{At=1,g0(n,e,t,i)}finally{At=r,ba.transition=s}}function cT(n,e,t,i){var r=At,s=ba.transition;ba.transition=null;try{At=4,g0(n,e,t,i)}finally{At=r,ba.transition=s}}function g0(n,e,t,i){if(Sf){var r=xp(n,e,t,i);if(r===null)Zh(n,e,i,Mf,t),g_(n,i);else if(aT(r,n,e,t,i))i.stopPropagation();else if(g_(n,i),e&4&&-1<oT.indexOf(n)){for(;r!==null;){var s=Uu(r);if(s!==null&&Ry(s),s=xp(n,e,t,i),s===null&&Zh(n,e,i,Mf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zh(n,e,i,null,t)}}var Mf=null;function xp(n,e,t,i){if(Mf=null,n=h0(i),n=mo(n),n!==null)if(e=Oo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=yy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Mf=n,null}function Ny(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZE()){case d0:return 1;case Ty:return 4;case xf:case JE:return 16;case wy:return 536870912;default:return 16}default:return 16}}var Ss=null,_0=null,Kc=null;function Iy(){if(Kc)return Kc;var n,e=_0,t=e.length,i,r="value"in Ss?Ss.value:Ss.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Kc=r.slice(n,1<i?1-i:void 0)}function Zc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function sc(){return!0}function v_(){return!1}function Ri(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sc:v_,this.isPropagationStopped=v_,this}return Zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},v0=Ri(nl),Iu=Zt({},nl,{view:0,detail:0}),fT=Ri(Iu),Gh,Hh,_l,rh=Zt({},Iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:x0,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_l&&(_l&&n.type==="mousemove"?(Gh=n.screenX-_l.screenX,Hh=n.screenY-_l.screenY):Hh=Gh=0,_l=n),Gh)},movementY:function(n){return"movementY"in n?n.movementY:Hh}}),x_=Ri(rh),hT=Zt({},rh,{dataTransfer:0}),dT=Ri(hT),pT=Zt({},Iu,{relatedTarget:0}),Wh=Ri(pT),mT=Zt({},nl,{animationName:0,elapsedTime:0,pseudoElement:0}),gT=Ri(mT),_T=Zt({},nl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vT=Ri(_T),xT=Zt({},nl,{data:0}),y_=Ri(xT),yT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ST={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ET(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=MT[n])?!!e[n]:!1}function x0(){return ET}var TT=Zt({},Iu,{key:function(n){if(n.key){var e=yT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Zc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ST[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:x0,charCode:function(n){return n.type==="keypress"?Zc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Zc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wT=Ri(TT),AT=Zt({},rh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S_=Ri(AT),CT=Zt({},Iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:x0}),RT=Ri(CT),bT=Zt({},nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),PT=Ri(bT),LT=Zt({},rh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),DT=Ri(LT),NT=[9,13,27,32],y0=Yr&&"CompositionEvent"in window,zl=null;Yr&&"documentMode"in document&&(zl=document.documentMode);var IT=Yr&&"TextEvent"in window&&!zl,Uy=Yr&&(!y0||zl&&8<zl&&11>=zl),M_=" ",E_=!1;function Fy(n,e){switch(n){case"keyup":return NT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ha=!1;function UT(n,e){switch(n){case"compositionend":return Oy(e);case"keypress":return e.which!==32?null:(E_=!0,M_);case"textInput":return n=e.data,n===M_&&E_?null:n;default:return null}}function FT(n,e){if(ha)return n==="compositionend"||!y0&&Fy(n,e)?(n=Iy(),Kc=_0=Ss=null,ha=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uy&&e.locale!=="ko"?null:e.data;default:return null}}var OT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!OT[n.type]:e==="textarea"}function ky(n,e,t,i){my(i),e=Ef(e,"onChange"),0<e.length&&(t=new v0("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Vl=null,ou=null;function kT(n){$y(n,0)}function sh(n){var e=ma(n);if(ly(e))return n}function BT(n,e){if(n==="change")return e}var By=!1;if(Yr){var Xh;if(Yr){var Yh="oninput"in document;if(!Yh){var w_=document.createElement("div");w_.setAttribute("oninput","return;"),Yh=typeof w_.oninput=="function"}Xh=Yh}else Xh=!1;By=Xh&&(!document.documentMode||9<document.documentMode)}function A_(){Vl&&(Vl.detachEvent("onpropertychange",zy),ou=Vl=null)}function zy(n){if(n.propertyName==="value"&&sh(ou)){var e=[];ky(e,ou,n,h0(n)),xy(kT,e)}}function zT(n,e,t){n==="focusin"?(A_(),Vl=e,ou=t,Vl.attachEvent("onpropertychange",zy)):n==="focusout"&&A_()}function VT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sh(ou)}function GT(n,e){if(n==="click")return sh(e)}function HT(n,e){if(n==="input"||n==="change")return sh(e)}function WT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ir=typeof Object.is=="function"?Object.is:WT;function au(n,e){if(ir(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!tp.call(e,r)||!ir(n[r],e[r]))return!1}return!0}function C_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function R_(n,e){var t=C_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=C_(t)}}function Vy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Vy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Gy(){for(var n=window,e=gf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=gf(n.document)}return e}function S0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function XT(n){var e=Gy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Vy(t.ownerDocument.documentElement,t)){if(i!==null&&S0(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=R_(t,s);var o=R_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var YT=Yr&&"documentMode"in document&&11>=document.documentMode,da=null,yp=null,Gl=null,Sp=!1;function b_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Sp||da==null||da!==gf(i)||(i=da,"selectionStart"in i&&S0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Gl&&au(Gl,i)||(Gl=i,i=Ef(yp,"onSelect"),0<i.length&&(e=new v0("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=da)))}function oc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var pa={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},qh={},Hy={};Yr&&(Hy=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function oh(n){if(qh[n])return qh[n];if(!pa[n])return n;var e=pa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Hy)return qh[n]=e[t];return n}var Wy=oh("animationend"),Xy=oh("animationiteration"),Yy=oh("animationstart"),qy=oh("transitionend"),jy=new Map,P_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hs(n,e){jy.set(n,e),Fo(e,[n])}for(var jh=0;jh<P_.length;jh++){var $h=P_[jh],qT=$h.toLowerCase(),jT=$h[0].toUpperCase()+$h.slice(1);Hs(qT,"on"+jT)}Hs(Wy,"onAnimationEnd");Hs(Xy,"onAnimationIteration");Hs(Yy,"onAnimationStart");Hs("dblclick","onDoubleClick");Hs("focusin","onFocus");Hs("focusout","onBlur");Hs(qy,"onTransitionEnd");ka("onMouseEnter",["mouseout","mouseover"]);ka("onMouseLeave",["mouseout","mouseover"]);ka("onPointerEnter",["pointerout","pointerover"]);ka("onPointerLeave",["pointerout","pointerover"]);Fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$T=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dl));function L_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,qE(i,e,void 0,n),n.currentTarget=null}function $y(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;L_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;L_(r,a,u),s=l}}}if(vf)throw n=gp,vf=!1,gp=null,n}function Ft(n,e){var t=e[Ap];t===void 0&&(t=e[Ap]=new Set);var i=n+"__bubble";t.has(i)||(Ky(e,n,2,!1),t.add(i))}function Kh(n,e,t){var i=0;e&&(i|=4),Ky(t,n,i,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function lu(n){if(!n[ac]){n[ac]=!0,iy.forEach(function(t){t!=="selectionchange"&&($T.has(t)||Kh(t,!1,n),Kh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ac]||(e[ac]=!0,Kh("selectionchange",!1,e))}}function Ky(n,e,t,i){switch(Ny(e)){case 1:var r=uT;break;case 4:r=cT;break;default:r=g0}t=r.bind(null,e,t,n),r=void 0,!mp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Zh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=mo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xy(function(){var u=s,c=h0(t),h=[];e:{var f=jy.get(n);if(f!==void 0){var p=v0,g=n;switch(n){case"keypress":if(Zc(t)===0)break e;case"keydown":case"keyup":p=wT;break;case"focusin":g="focus",p=Wh;break;case"focusout":g="blur",p=Wh;break;case"beforeblur":case"afterblur":p=Wh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=x_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=RT;break;case Wy:case Xy:case Yy:p=gT;break;case qy:p=PT;break;case"scroll":p=fT;break;case"wheel":p=DT;break;case"copy":case"cut":case"paste":p=vT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=S_}var v=(e&4)!==0,_=!v&&n==="scroll",d=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=nu(m,d),S!=null&&v.push(uu(m,S,x)))),_)break;m=m.return}0<v.length&&(f=new p(f,g,null,t,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==dp&&(g=t.relatedTarget||t.fromElement)&&(mo(g)||g[qr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?mo(g):null,g!==null&&(_=Oo(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=x_,S="onMouseLeave",d="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(v=S_,S="onPointerLeave",d="onPointerEnter",m="pointer"),_=p==null?f:ma(p),x=g==null?f:ma(g),f=new v(S,m+"leave",p,t,c),f.target=_,f.relatedTarget=x,S=null,mo(c)===u&&(v=new v(d,m+"enter",g,t,c),v.target=x,v.relatedTarget=_,S=v),_=S,p&&g)t:{for(v=p,d=g,m=0,x=v;x;x=qo(x))m++;for(x=0,S=d;S;S=qo(S))x++;for(;0<m-x;)v=qo(v),m--;for(;0<x-m;)d=qo(d),x--;for(;m--;){if(v===d||d!==null&&v===d.alternate)break t;v=qo(v),d=qo(d)}v=null}else v=null;p!==null&&D_(h,f,p,v,!1),g!==null&&_!==null&&D_(h,_,g,v,!0)}}e:{if(f=u?ma(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=BT;else if(T_(f))if(By)T=HT;else{T=VT;var M=zT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=GT);if(T&&(T=T(n,u))){ky(h,T,t,c);break e}M&&M(n,f,u),n==="focusout"&&(M=f._wrapperState)&&M.controlled&&f.type==="number"&&lp(f,"number",f.value)}switch(M=u?ma(u):window,n){case"focusin":(T_(M)||M.contentEditable==="true")&&(da=M,yp=u,Gl=null);break;case"focusout":Gl=yp=da=null;break;case"mousedown":Sp=!0;break;case"contextmenu":case"mouseup":case"dragend":Sp=!1,b_(h,t,c);break;case"selectionchange":if(YT)break;case"keydown":case"keyup":b_(h,t,c)}var w;if(y0)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ha?Fy(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Uy&&t.locale!=="ko"&&(ha||y!=="onCompositionStart"?y==="onCompositionEnd"&&ha&&(w=Iy()):(Ss=c,_0="value"in Ss?Ss.value:Ss.textContent,ha=!0)),M=Ef(u,y),0<M.length&&(y=new y_(y,n,null,t,c),h.push({event:y,listeners:M}),w?y.data=w:(w=Oy(t),w!==null&&(y.data=w)))),(w=IT?UT(n,t):FT(n,t))&&(u=Ef(u,"onBeforeInput"),0<u.length&&(c=new y_("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=w))}$y(h,e)})}function uu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ef(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=nu(n,t),s!=null&&i.unshift(uu(n,s,r)),s=nu(n,e),s!=null&&i.push(uu(n,s,r))),n=n.return}return i}function qo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function D_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=nu(t,s),l!=null&&o.unshift(uu(t,l,a))):r||(l=nu(t,s),l!=null&&o.push(uu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var KT=/\r\n?/g,ZT=/\u0000|\uFFFD/g;function N_(n){return(typeof n=="string"?n:""+n).replace(KT,`
`).replace(ZT,"")}function lc(n,e,t){if(e=N_(e),N_(n)!==e&&t)throw Error(fe(425))}function Tf(){}var Mp=null,Ep=null;function Tp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wp=typeof setTimeout=="function"?setTimeout:void 0,JT=typeof clearTimeout=="function"?clearTimeout:void 0,I_=typeof Promise=="function"?Promise:void 0,QT=typeof queueMicrotask=="function"?queueMicrotask:typeof I_<"u"?function(n){return I_.resolve(null).then(n).catch(ew)}:wp;function ew(n){setTimeout(function(){throw n})}function Jh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),su(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);su(e)}function Ps(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function U_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var il=Math.random().toString(36).slice(2),gr="__reactFiber$"+il,cu="__reactProps$"+il,qr="__reactContainer$"+il,Ap="__reactEvents$"+il,tw="__reactListeners$"+il,nw="__reactHandles$"+il;function mo(n){var e=n[gr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[qr]||t[gr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=U_(n);n!==null;){if(t=n[gr])return t;n=U_(n)}return e}n=t,t=n.parentNode}return null}function Uu(n){return n=n[gr]||n[qr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ma(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(fe(33))}function ah(n){return n[cu]||null}var Cp=[],ga=-1;function Ws(n){return{current:n}}function Ot(n){0>ga||(n.current=Cp[ga],Cp[ga]=null,ga--)}function Nt(n,e){ga++,Cp[ga]=n.current,n.current=e}var ks={},Gn=Ws(ks),ei=Ws(!1),Co=ks;function Ba(n,e){var t=n.type.contextTypes;if(!t)return ks;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ti(n){return n=n.childContextTypes,n!=null}function wf(){Ot(ei),Ot(Gn)}function F_(n,e,t){if(Gn.current!==ks)throw Error(fe(168));Nt(Gn,e),Nt(ei,t)}function Zy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,zE(n)||"Unknown",r));return Zt({},t,i)}function Af(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ks,Co=Gn.current,Nt(Gn,n),Nt(ei,ei.current),!0}function O_(n,e,t){var i=n.stateNode;if(!i)throw Error(fe(169));t?(n=Zy(n,e,Co),i.__reactInternalMemoizedMergedChildContext=n,Ot(ei),Ot(Gn),Nt(Gn,n)):Ot(ei),Nt(ei,t)}var Or=null,lh=!1,Qh=!1;function Jy(n){Or===null?Or=[n]:Or.push(n)}function iw(n){lh=!0,Jy(n)}function Xs(){if(!Qh&&Or!==null){Qh=!0;var n=0,e=At;try{var t=Or;for(At=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Or=null,lh=!1}catch(r){throw Or!==null&&(Or=Or.slice(n+1)),Ey(d0,Xs),r}finally{At=e,Qh=!1}}return null}var _a=[],va=0,Cf=null,Rf=0,Fi=[],Oi=0,Ro=null,zr=1,Vr="";function lo(n,e){_a[va++]=Rf,_a[va++]=Cf,Cf=n,Rf=e}function Qy(n,e,t){Fi[Oi++]=zr,Fi[Oi++]=Vr,Fi[Oi++]=Ro,Ro=n;var i=zr;n=Vr;var r=32-tr(i)-1;i&=~(1<<r),t+=1;var s=32-tr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zr=1<<32-tr(e)+r|t<<r|i,Vr=s+n}else zr=1<<s|t<<r|i,Vr=n}function M0(n){n.return!==null&&(lo(n,1),Qy(n,1,0))}function E0(n){for(;n===Cf;)Cf=_a[--va],_a[va]=null,Rf=_a[--va],_a[va]=null;for(;n===Ro;)Ro=Fi[--Oi],Fi[Oi]=null,Vr=Fi[--Oi],Fi[Oi]=null,zr=Fi[--Oi],Fi[Oi]=null}var Si=null,vi=null,Vt=!1,Qi=null;function eS(n,e){var t=zi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function k_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Si=n,vi=Ps(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Si=n,vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ro!==null?{id:zr,overflow:Vr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=zi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Si=n,vi=null,!0):!1;default:return!1}}function Rp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bp(n){if(Vt){var e=vi;if(e){var t=e;if(!k_(n,e)){if(Rp(n))throw Error(fe(418));e=Ps(t.nextSibling);var i=Si;e&&k_(n,e)?eS(i,t):(n.flags=n.flags&-4097|2,Vt=!1,Si=n)}}else{if(Rp(n))throw Error(fe(418));n.flags=n.flags&-4097|2,Vt=!1,Si=n}}}function B_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Si=n}function uc(n){if(n!==Si)return!1;if(!Vt)return B_(n),Vt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Tp(n.type,n.memoizedProps)),e&&(e=vi)){if(Rp(n))throw tS(),Error(fe(418));for(;e;)eS(n,e),e=Ps(e.nextSibling)}if(B_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(fe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vi=Ps(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vi=null}}else vi=Si?Ps(n.stateNode.nextSibling):null;return!0}function tS(){for(var n=vi;n;)n=Ps(n.nextSibling)}function za(){vi=Si=null,Vt=!1}function T0(n){Qi===null?Qi=[n]:Qi.push(n)}var rw=es.ReactCurrentBatchConfig;function vl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(fe(309));var i=t.stateNode}if(!i)throw Error(fe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(fe(284));if(!t._owner)throw Error(fe(290,n))}return n}function cc(n,e){throw n=Object.prototype.toString.call(e),Error(fe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function z_(n){var e=n._init;return e(n._payload)}function nS(n){function e(d,m){if(n){var x=d.deletions;x===null?(d.deletions=[m],d.flags|=16):x.push(m)}}function t(d,m){if(!n)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=Is(d,m),d.index=0,d.sibling=null,d}function s(d,m,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<m?(d.flags|=2,m):x):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,m,x,S){return m===null||m.tag!==6?(m=od(x,d.mode,S),m.return=d,m):(m=r(m,x),m.return=d,m)}function l(d,m,x,S){var T=x.type;return T===fa?c(d,m,x.props.children,S,x.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gs&&z_(T)===m.type)?(S=r(m,x.props),S.ref=vl(d,m,x),S.return=d,S):(S=sf(x.type,x.key,x.props,null,d.mode,S),S.ref=vl(d,m,x),S.return=d,S)}function u(d,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=ad(x,d.mode,S),m.return=d,m):(m=r(m,x.children||[]),m.return=d,m)}function c(d,m,x,S,T){return m===null||m.tag!==7?(m=Mo(x,d.mode,S,T),m.return=d,m):(m=r(m,x),m.return=d,m)}function h(d,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=od(""+m,d.mode,x),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qu:return x=sf(m.type,m.key,m.props,null,d.mode,x),x.ref=vl(d,null,m),x.return=d,x;case ca:return m=ad(m,d.mode,x),m.return=d,m;case gs:var S=m._init;return h(d,S(m._payload),x)}if(Pl(m)||dl(m))return m=Mo(m,d.mode,x,null),m.return=d,m;cc(d,m)}return null}function f(d,m,x,S){var T=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(d,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qu:return x.key===T?l(d,m,x,S):null;case ca:return x.key===T?u(d,m,x,S):null;case gs:return T=x._init,f(d,m,T(x._payload),S)}if(Pl(x)||dl(x))return T!==null?null:c(d,m,x,S,null);cc(d,x)}return null}function p(d,m,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,a(m,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qu:return d=d.get(S.key===null?x:S.key)||null,l(m,d,S,T);case ca:return d=d.get(S.key===null?x:S.key)||null,u(m,d,S,T);case gs:var M=S._init;return p(d,m,x,M(S._payload),T)}if(Pl(S)||dl(S))return d=d.get(x)||null,c(m,d,S,T,null);cc(m,S)}return null}function g(d,m,x,S){for(var T=null,M=null,w=m,y=m=0,A=null;w!==null&&y<x.length;y++){w.index>y?(A=w,w=null):A=w.sibling;var b=f(d,w,x[y],S);if(b===null){w===null&&(w=A);break}n&&w&&b.alternate===null&&e(d,w),m=s(b,m,y),M===null?T=b:M.sibling=b,M=b,w=A}if(y===x.length)return t(d,w),Vt&&lo(d,y),T;if(w===null){for(;y<x.length;y++)w=h(d,x[y],S),w!==null&&(m=s(w,m,y),M===null?T=w:M.sibling=w,M=w);return Vt&&lo(d,y),T}for(w=i(d,w);y<x.length;y++)A=p(w,d,y,x[y],S),A!==null&&(n&&A.alternate!==null&&w.delete(A.key===null?y:A.key),m=s(A,m,y),M===null?T=A:M.sibling=A,M=A);return n&&w.forEach(function(P){return e(d,P)}),Vt&&lo(d,y),T}function v(d,m,x,S){var T=dl(x);if(typeof T!="function")throw Error(fe(150));if(x=T.call(x),x==null)throw Error(fe(151));for(var M=T=null,w=m,y=m=0,A=null,b=x.next();w!==null&&!b.done;y++,b=x.next()){w.index>y?(A=w,w=null):A=w.sibling;var P=f(d,w,b.value,S);if(P===null){w===null&&(w=A);break}n&&w&&P.alternate===null&&e(d,w),m=s(P,m,y),M===null?T=P:M.sibling=P,M=P,w=A}if(b.done)return t(d,w),Vt&&lo(d,y),T;if(w===null){for(;!b.done;y++,b=x.next())b=h(d,b.value,S),b!==null&&(m=s(b,m,y),M===null?T=b:M.sibling=b,M=b);return Vt&&lo(d,y),T}for(w=i(d,w);!b.done;y++,b=x.next())b=p(w,d,y,b.value,S),b!==null&&(n&&b.alternate!==null&&w.delete(b.key===null?y:b.key),m=s(b,m,y),M===null?T=b:M.sibling=b,M=b);return n&&w.forEach(function(I){return e(d,I)}),Vt&&lo(d,y),T}function _(d,m,x,S){if(typeof x=="object"&&x!==null&&x.type===fa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Qu:e:{for(var T=x.key,M=m;M!==null;){if(M.key===T){if(T=x.type,T===fa){if(M.tag===7){t(d,M.sibling),m=r(M,x.props.children),m.return=d,d=m;break e}}else if(M.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gs&&z_(T)===M.type){t(d,M.sibling),m=r(M,x.props),m.ref=vl(d,M,x),m.return=d,d=m;break e}t(d,M);break}else e(d,M);M=M.sibling}x.type===fa?(m=Mo(x.props.children,d.mode,S,x.key),m.return=d,d=m):(S=sf(x.type,x.key,x.props,null,d.mode,S),S.ref=vl(d,m,x),S.return=d,d=S)}return o(d);case ca:e:{for(M=x.key;m!==null;){if(m.key===M)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){t(d,m.sibling),m=r(m,x.children||[]),m.return=d,d=m;break e}else{t(d,m);break}else e(d,m);m=m.sibling}m=ad(x,d.mode,S),m.return=d,d=m}return o(d);case gs:return M=x._init,_(d,m,M(x._payload),S)}if(Pl(x))return g(d,m,x,S);if(dl(x))return v(d,m,x,S);cc(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(t(d,m.sibling),m=r(m,x),m.return=d,d=m):(t(d,m),m=od(x,d.mode,S),m.return=d,d=m),o(d)):t(d,m)}return _}var Va=nS(!0),iS=nS(!1),bf=Ws(null),Pf=null,xa=null,w0=null;function A0(){w0=xa=Pf=null}function C0(n){var e=bf.current;Ot(bf),n._currentValue=e}function Pp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Pa(n,e){Pf=n,w0=xa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function Wi(n){var e=n._currentValue;if(w0!==n)if(n={context:n,memoizedValue:e,next:null},xa===null){if(Pf===null)throw Error(fe(308));xa=n,Pf.dependencies={lanes:0,firstContext:n}}else xa=xa.next=n;return e}var go=null;function R0(n){go===null?go=[n]:go.push(n)}function rS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,R0(e)):(t.next=r.next,r.next=t),e.interleaved=t,jr(n,i)}function jr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var _s=!1;function b0(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ls(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,vt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,jr(n,t)}return r=i.interleaved,r===null?(e.next=e,R0(i)):(e.next=r.next,r.next=e),i.interleaved=e,jr(n,t)}function Jc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,p0(n,t)}}function V_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Lf(n,e,t,i){var r=n.updateQueue;_s=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,v=a;switch(f=e,p=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=Zt({},h,f);break e;case 2:_s=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Po|=o,n.lanes=o,n.memoizedState=h}}function G_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var Fu={},Mr=Ws(Fu),fu=Ws(Fu),hu=Ws(Fu);function _o(n){if(n===Fu)throw Error(fe(174));return n}function P0(n,e){switch(Nt(hu,e),Nt(fu,n),Nt(Mr,Fu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=cp(e,n)}Ot(Mr),Nt(Mr,e)}function Ga(){Ot(Mr),Ot(fu),Ot(hu)}function oS(n){_o(hu.current);var e=_o(Mr.current),t=cp(e,n.type);e!==t&&(Nt(fu,n),Nt(Mr,t))}function L0(n){fu.current===n&&(Ot(Mr),Ot(fu))}var Xt=Ws(0);function Df(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ed=[];function D0(){for(var n=0;n<ed.length;n++)ed[n]._workInProgressVersionPrimary=null;ed.length=0}var Qc=es.ReactCurrentDispatcher,td=es.ReactCurrentBatchConfig,bo=0,Kt=null,cn=null,xn=null,Nf=!1,Hl=!1,du=0,sw=0;function Ln(){throw Error(fe(321))}function N0(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ir(n[t],e[t]))return!1;return!0}function I0(n,e,t,i,r,s){if(bo=s,Kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qc.current=n===null||n.memoizedState===null?uw:cw,n=t(i,r),Hl){s=0;do{if(Hl=!1,du=0,25<=s)throw Error(fe(301));s+=1,xn=cn=null,e.updateQueue=null,Qc.current=fw,n=t(i,r)}while(Hl)}if(Qc.current=If,e=cn!==null&&cn.next!==null,bo=0,xn=cn=Kt=null,Nf=!1,e)throw Error(fe(300));return n}function U0(){var n=du!==0;return du=0,n}function hr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Kt.memoizedState=xn=n:xn=xn.next=n,xn}function Xi(){if(cn===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var e=xn===null?Kt.memoizedState:xn.next;if(e!==null)xn=e,cn=n;else{if(n===null)throw Error(fe(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},xn===null?Kt.memoizedState=xn=n:xn=xn.next=n}return xn}function pu(n,e){return typeof e=="function"?e(n):e}function nd(n){var e=Xi(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=cn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((bo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Kt.lanes|=c,Po|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ir(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Kt.lanes|=s,Po|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function id(n){var e=Xi(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ir(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function aS(){}function lS(n,e){var t=Kt,i=Xi(),r=e(),s=!ir(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,F0(fS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||xn!==null&&xn.memoizedState.tag&1){if(t.flags|=2048,mu(9,cS.bind(null,t,i,r,e),void 0,null),yn===null)throw Error(fe(349));bo&30||uS(t,e,r)}return r}function uS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Kt.updateQueue,e===null?(e={lastEffect:null,stores:null},Kt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function cS(n,e,t,i){e.value=t,e.getSnapshot=i,hS(e)&&dS(n)}function fS(n,e,t){return t(function(){hS(e)&&dS(n)})}function hS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ir(n,t)}catch{return!0}}function dS(n){var e=jr(n,1);e!==null&&nr(e,n,1,-1)}function H_(n){var e=hr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pu,lastRenderedState:n},e.queue=n,n=n.dispatch=lw.bind(null,Kt,n),[e.memoizedState,n]}function mu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Kt.updateQueue,e===null?(e={lastEffect:null,stores:null},Kt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function pS(){return Xi().memoizedState}function ef(n,e,t,i){var r=hr();Kt.flags|=n,r.memoizedState=mu(1|e,t,void 0,i===void 0?null:i)}function uh(n,e,t,i){var r=Xi();i=i===void 0?null:i;var s=void 0;if(cn!==null){var o=cn.memoizedState;if(s=o.destroy,i!==null&&N0(i,o.deps)){r.memoizedState=mu(e,t,s,i);return}}Kt.flags|=n,r.memoizedState=mu(1|e,t,s,i)}function W_(n,e){return ef(8390656,8,n,e)}function F0(n,e){return uh(2048,8,n,e)}function mS(n,e){return uh(4,2,n,e)}function gS(n,e){return uh(4,4,n,e)}function _S(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function vS(n,e,t){return t=t!=null?t.concat([n]):null,uh(4,4,_S.bind(null,e,n),t)}function O0(){}function xS(n,e){var t=Xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&N0(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function yS(n,e){var t=Xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&N0(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function SS(n,e,t){return bo&21?(ir(t,e)||(t=Ay(),Kt.lanes|=t,Po|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function ow(n,e){var t=At;At=t!==0&&4>t?t:4,n(!0);var i=td.transition;td.transition={};try{n(!1),e()}finally{At=t,td.transition=i}}function MS(){return Xi().memoizedState}function aw(n,e,t){var i=Ns(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ES(n))TS(e,t);else if(t=rS(n,e,t,i),t!==null){var r=qn();nr(t,n,i,r),wS(t,e,i)}}function lw(n,e,t){var i=Ns(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ES(n))TS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ir(a,o)){var l=e.interleaved;l===null?(r.next=r,R0(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=rS(n,e,r,i),t!==null&&(r=qn(),nr(t,n,i,r),wS(t,e,i))}}function ES(n){var e=n.alternate;return n===Kt||e!==null&&e===Kt}function TS(n,e){Hl=Nf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function wS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,p0(n,t)}}var If={readContext:Wi,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},uw={readContext:Wi,useCallback:function(n,e){return hr().memoizedState=[n,e===void 0?null:e],n},useContext:Wi,useEffect:W_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ef(4194308,4,_S.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ef(4194308,4,n,e)},useInsertionEffect:function(n,e){return ef(4,2,n,e)},useMemo:function(n,e){var t=hr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=hr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=aw.bind(null,Kt,n),[i.memoizedState,n]},useRef:function(n){var e=hr();return n={current:n},e.memoizedState=n},useState:H_,useDebugValue:O0,useDeferredValue:function(n){return hr().memoizedState=n},useTransition:function(){var n=H_(!1),e=n[0];return n=ow.bind(null,n[1]),hr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Kt,r=hr();if(Vt){if(t===void 0)throw Error(fe(407));t=t()}else{if(t=e(),yn===null)throw Error(fe(349));bo&30||uS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,W_(fS.bind(null,i,s,n),[n]),i.flags|=2048,mu(9,cS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=hr(),e=yn.identifierPrefix;if(Vt){var t=Vr,i=zr;t=(i&~(1<<32-tr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=du++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=sw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},cw={readContext:Wi,useCallback:xS,useContext:Wi,useEffect:F0,useImperativeHandle:vS,useInsertionEffect:mS,useLayoutEffect:gS,useMemo:yS,useReducer:nd,useRef:pS,useState:function(){return nd(pu)},useDebugValue:O0,useDeferredValue:function(n){var e=Xi();return SS(e,cn.memoizedState,n)},useTransition:function(){var n=nd(pu)[0],e=Xi().memoizedState;return[n,e]},useMutableSource:aS,useSyncExternalStore:lS,useId:MS,unstable_isNewReconciler:!1},fw={readContext:Wi,useCallback:xS,useContext:Wi,useEffect:F0,useImperativeHandle:vS,useInsertionEffect:mS,useLayoutEffect:gS,useMemo:yS,useReducer:id,useRef:pS,useState:function(){return id(pu)},useDebugValue:O0,useDeferredValue:function(n){var e=Xi();return cn===null?e.memoizedState=n:SS(e,cn.memoizedState,n)},useTransition:function(){var n=id(pu)[0],e=Xi().memoizedState;return[n,e]},useMutableSource:aS,useSyncExternalStore:lS,useId:MS,unstable_isNewReconciler:!1};function Zi(n,e){if(n&&n.defaultProps){e=Zt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Lp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Zt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ch={isMounted:function(n){return(n=n._reactInternals)?Oo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=qn(),r=Ns(n),s=Hr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ls(n,s,r),e!==null&&(nr(e,n,r,i),Jc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=qn(),r=Ns(n),s=Hr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ls(n,s,r),e!==null&&(nr(e,n,r,i),Jc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=qn(),i=Ns(n),r=Hr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ls(n,r,i),e!==null&&(nr(e,n,i,t),Jc(e,n,i))}};function X_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!au(t,i)||!au(r,s):!0}function AS(n,e,t){var i=!1,r=ks,s=e.contextType;return typeof s=="object"&&s!==null?s=Wi(s):(r=ti(e)?Co:Gn.current,i=e.contextTypes,s=(i=i!=null)?Ba(n,r):ks),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ch,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Y_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ch.enqueueReplaceState(e,e.state,null)}function Dp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},b0(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wi(s):(s=ti(e)?Co:Gn.current,r.context=Ba(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ch.enqueueReplaceState(r,r.state,null),Lf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ha(n,e){try{var t="",i=e;do t+=BE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function rd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Np(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var hw=typeof WeakMap=="function"?WeakMap:Map;function CS(n,e,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ff||(Ff=!0,Hp=i),Np(n,e)},t}function RS(n,e,t){t=Hr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Np(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Np(n,e),typeof i!="function"&&(Ds===null?Ds=new Set([this]):Ds.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function q_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new hw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Aw.bind(null,n,e,t),e.then(n,n))}function j_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function $_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hr(-1,1),e.tag=2,Ls(t,e,1))),t.lanes|=1),n)}var dw=es.ReactCurrentOwner,Qn=!1;function Yn(n,e,t,i){e.child=n===null?iS(e,null,t,i):Va(e,n.child,t,i)}function K_(n,e,t,i,r){t=t.render;var s=e.ref;return Pa(e,r),i=I0(n,e,t,i,s,r),t=U0(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$r(n,e,r)):(Vt&&t&&M0(e),e.flags|=1,Yn(n,e,i,r),e.child)}function Z_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!X0(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,bS(n,e,s,i,r)):(n=sf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:au,t(o,i)&&n.ref===e.ref)return $r(n,e,r)}return e.flags|=1,n=Is(s,i),n.ref=e.ref,n.return=e,e.child=n}function bS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(au(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,$r(n,e,r)}return Ip(n,e,t,i,r)}function PS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Sa,pi),pi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Nt(Sa,pi),pi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Nt(Sa,pi),pi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Nt(Sa,pi),pi|=i;return Yn(n,e,r,t),e.child}function LS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ip(n,e,t,i,r){var s=ti(t)?Co:Gn.current;return s=Ba(e,s),Pa(e,r),t=I0(n,e,t,i,s,r),i=U0(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$r(n,e,r)):(Vt&&i&&M0(e),e.flags|=1,Yn(n,e,t,r),e.child)}function J_(n,e,t,i,r){if(ti(t)){var s=!0;Af(e)}else s=!1;if(Pa(e,r),e.stateNode===null)tf(n,e),AS(e,t,i),Dp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Wi(u):(u=ti(t)?Co:Gn.current,u=Ba(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Y_(e,o,i,u),_s=!1;var f=e.memoizedState;o.state=f,Lf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||ei.current||_s?(typeof c=="function"&&(Lp(e,t,c,i),l=e.memoizedState),(a=_s||X_(e,t,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,sS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Zi(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Wi(l):(l=ti(t)?Co:Gn.current,l=Ba(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Y_(e,o,i,l),_s=!1,f=e.memoizedState,o.state=f,Lf(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||ei.current||_s?(typeof p=="function"&&(Lp(e,t,p,i),g=e.memoizedState),(u=_s||X_(e,t,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Up(n,e,t,i,s,r)}function Up(n,e,t,i,r,s){LS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&O_(e,t,!1),$r(n,e,s);i=e.stateNode,dw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Va(e,n.child,null,s),e.child=Va(e,null,a,s)):Yn(n,e,a,s),e.memoizedState=i.state,r&&O_(e,t,!0),e.child}function DS(n){var e=n.stateNode;e.pendingContext?F_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&F_(n,e.context,!1),P0(n,e.containerInfo)}function Q_(n,e,t,i,r){return za(),T0(r),e.flags|=256,Yn(n,e,t,i),e.child}var Fp={dehydrated:null,treeContext:null,retryLane:0};function Op(n){return{baseLanes:n,cachePool:null,transitions:null}}function NS(n,e,t){var i=e.pendingProps,r=Xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Nt(Xt,r&1),n===null)return bp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dh(o,i,0,null),n=Mo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Op(t),e.memoizedState=Fp,n):k0(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Is(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Is(a,s):(s=Mo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Op(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Fp,i}return s=n.child,n=s.sibling,i=Is(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function k0(n,e){return e=dh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function fc(n,e,t,i){return i!==null&&T0(i),Va(e,n.child,null,t),n=k0(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function pw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=rd(Error(fe(422))),fc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=dh({mode:"visible",children:i.children},r,0,null),s=Mo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Va(e,n.child,null,o),e.child.memoizedState=Op(o),e.memoizedState=Fp,s);if(!(e.mode&1))return fc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(fe(419)),i=rd(s,i,void 0),fc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=yn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,jr(n,r),nr(i,n,r,-1))}return W0(),i=rd(Error(fe(421))),fc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Cw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vi=Ps(r.nextSibling),Si=e,Vt=!0,Qi=null,n!==null&&(Fi[Oi++]=zr,Fi[Oi++]=Vr,Fi[Oi++]=Ro,zr=n.id,Vr=n.overflow,Ro=e),e=k0(e,i.children),e.flags|=4096,e)}function ev(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Pp(n.return,e,t)}function sd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function IS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yn(n,e,i.children,t),i=Xt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ev(n,t,e);else if(n.tag===19)ev(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Nt(Xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Df(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),sd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Df(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}sd(e,!0,t,null,s);break;case"together":sd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function $r(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Po|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(fe(153));if(e.child!==null){for(n=e.child,t=Is(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Is(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function mw(n,e,t){switch(e.tag){case 3:DS(e),za();break;case 5:oS(e);break;case 1:ti(e.type)&&Af(e);break;case 4:P0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Nt(bf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Nt(Xt,Xt.current&1),e.flags|=128,null):t&e.child.childLanes?NS(n,e,t):(Nt(Xt,Xt.current&1),n=$r(n,e,t),n!==null?n.sibling:null);Nt(Xt,Xt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return IS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Nt(Xt,Xt.current),i)break;return null;case 22:case 23:return e.lanes=0,PS(n,e,t)}return $r(n,e,t)}var US,kp,FS,OS;US=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};kp=function(){};FS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,_o(Mr.current);var s=null;switch(t){case"input":r=op(n,r),i=op(n,i),s=[];break;case"select":r=Zt({},r,{value:void 0}),i=Zt({},i,{value:void 0}),s=[];break;case"textarea":r=up(n,r),i=up(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Tf)}fp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(eu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(eu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ft("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};OS=function(n,e,t,i){t!==i&&(e.flags|=4)};function xl(n,e){if(!Vt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Dn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function gw(n,e,t){var i=e.pendingProps;switch(E0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(e),null;case 1:return ti(e.type)&&wf(),Dn(e),null;case 3:return i=e.stateNode,Ga(),Ot(ei),Ot(Gn),D0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(uc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qi!==null&&(Yp(Qi),Qi=null))),kp(n,e),Dn(e),null;case 5:L0(e);var r=_o(hu.current);if(t=e.type,n!==null&&e.stateNode!=null)FS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return Dn(e),null}if(n=_o(Mr.current),uc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[gr]=e,i[cu]=s,n=(e.mode&1)!==0,t){case"dialog":Ft("cancel",i),Ft("close",i);break;case"iframe":case"object":case"embed":Ft("load",i);break;case"video":case"audio":for(r=0;r<Dl.length;r++)Ft(Dl[r],i);break;case"source":Ft("error",i);break;case"img":case"image":case"link":Ft("error",i),Ft("load",i);break;case"details":Ft("toggle",i);break;case"input":u_(i,s),Ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ft("invalid",i);break;case"textarea":f_(i,s),Ft("invalid",i)}fp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",""+a]):eu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ft("scroll",i)}switch(t){case"input":ec(i),c_(i,s,!0);break;case"textarea":ec(i),h_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[gr]=e,n[cu]=i,US(n,e,!1,!1),e.stateNode=n;e:{switch(o=hp(t,i),t){case"dialog":Ft("cancel",n),Ft("close",n),r=i;break;case"iframe":case"object":case"embed":Ft("load",n),r=i;break;case"video":case"audio":for(r=0;r<Dl.length;r++)Ft(Dl[r],n);r=i;break;case"source":Ft("error",n),r=i;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),r=i;break;case"details":Ft("toggle",n),r=i;break;case"input":u_(n,i),r=op(n,i),Ft("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Zt({},i,{value:void 0}),Ft("invalid",n);break;case"textarea":f_(n,i),r=up(n,i),Ft("invalid",n);break;default:r=i}fp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?py(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&tu(n,l):typeof l=="number"&&tu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ft("scroll",n):l!=null&&l0(n,s,l,o))}switch(t){case"input":ec(n),c_(n,i,!1);break;case"textarea":ec(n),h_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Os(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Aa(n,!!i.multiple,s,!1):i.defaultValue!=null&&Aa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Tf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dn(e),null;case 6:if(n&&e.stateNode!=null)OS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(t=_o(hu.current),_o(Mr.current),uc(e)){if(i=e.stateNode,t=e.memoizedProps,i[gr]=e,(s=i.nodeValue!==t)&&(n=Si,n!==null))switch(n.tag){case 3:lc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&lc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[gr]=e,e.stateNode=i}return Dn(e),null;case 13:if(Ot(Xt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&vi!==null&&e.mode&1&&!(e.flags&128))tS(),za(),e.flags|=98560,s=!1;else if(s=uc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[gr]=e}else za(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dn(e),s=!1}else Qi!==null&&(Yp(Qi),Qi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Xt.current&1?fn===0&&(fn=3):W0())),e.updateQueue!==null&&(e.flags|=4),Dn(e),null);case 4:return Ga(),kp(n,e),n===null&&lu(e.stateNode.containerInfo),Dn(e),null;case 10:return C0(e.type._context),Dn(e),null;case 17:return ti(e.type)&&wf(),Dn(e),null;case 19:if(Ot(Xt),s=e.memoizedState,s===null)return Dn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)xl(s,!1);else{if(fn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Df(n),o!==null){for(e.flags|=128,xl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Nt(Xt,Xt.current&1|2),e.child}n=n.sibling}s.tail!==null&&rn()>Wa&&(e.flags|=128,i=!0,xl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Df(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),xl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Vt)return Dn(e),null}else 2*rn()-s.renderingStartTime>Wa&&t!==1073741824&&(e.flags|=128,i=!0,xl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rn(),e.sibling=null,t=Xt.current,Nt(Xt,i?t&1|2:t&1),e):(Dn(e),null);case 22:case 23:return H0(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pi&1073741824&&(Dn(e),e.subtreeFlags&6&&(e.flags|=8192)):Dn(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function _w(n,e){switch(E0(e),e.tag){case 1:return ti(e.type)&&wf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ga(),Ot(ei),Ot(Gn),D0(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return L0(e),null;case 13:if(Ot(Xt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));za()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ot(Xt),null;case 4:return Ga(),null;case 10:return C0(e.type._context),null;case 22:case 23:return H0(),null;case 24:return null;default:return null}}var hc=!1,On=!1,vw=typeof WeakSet=="function"?WeakSet:Set,Le=null;function ya(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Qt(n,e,i)}else t.current=null}function Bp(n,e,t){try{t()}catch(i){Qt(n,e,i)}}var tv=!1;function xw(n,e){if(Mp=Sf,n=Gy(),S0(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ep={focusedElem:n,selectionRange:t},Sf=!1,Le=e;Le!==null;)if(e=Le,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Le=n;else for(;Le!==null;){e=Le;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,_=g.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:Zi(e.type,v),_);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(S){Qt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}return g=tv,tv=!1,g}function Wl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Bp(e,t,s)}r=r.next}while(r!==i)}}function fh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function zp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function kS(n){var e=n.alternate;e!==null&&(n.alternate=null,kS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[gr],delete e[cu],delete e[Ap],delete e[tw],delete e[nw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function BS(n){return n.tag===5||n.tag===3||n.tag===4}function nv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||BS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Tf));else if(i!==4&&(n=n.child,n!==null))for(Vp(n,e,t),n=n.sibling;n!==null;)Vp(n,e,t),n=n.sibling}function Gp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Gp(n,e,t),n=n.sibling;n!==null;)Gp(n,e,t),n=n.sibling}var wn=null,Ji=!1;function ls(n,e,t){for(t=t.child;t!==null;)zS(n,e,t),t=t.sibling}function zS(n,e,t){if(Sr&&typeof Sr.onCommitFiberUnmount=="function")try{Sr.onCommitFiberUnmount(ih,t)}catch{}switch(t.tag){case 5:On||ya(t,e);case 6:var i=wn,r=Ji;wn=null,ls(n,e,t),wn=i,Ji=r,wn!==null&&(Ji?(n=wn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):wn.removeChild(t.stateNode));break;case 18:wn!==null&&(Ji?(n=wn,t=t.stateNode,n.nodeType===8?Jh(n.parentNode,t):n.nodeType===1&&Jh(n,t),su(n)):Jh(wn,t.stateNode));break;case 4:i=wn,r=Ji,wn=t.stateNode.containerInfo,Ji=!0,ls(n,e,t),wn=i,Ji=r;break;case 0:case 11:case 14:case 15:if(!On&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bp(t,e,o),r=r.next}while(r!==i)}ls(n,e,t);break;case 1:if(!On&&(ya(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Qt(t,e,a)}ls(n,e,t);break;case 21:ls(n,e,t);break;case 22:t.mode&1?(On=(i=On)||t.memoizedState!==null,ls(n,e,t),On=i):ls(n,e,t);break;default:ls(n,e,t)}}function iv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new vw),e.forEach(function(i){var r=Rw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function qi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:wn=a.stateNode,Ji=!1;break e;case 3:wn=a.stateNode.containerInfo,Ji=!0;break e;case 4:wn=a.stateNode.containerInfo,Ji=!0;break e}a=a.return}if(wn===null)throw Error(fe(160));zS(s,o,r),wn=null,Ji=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Qt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)VS(e,n),e=e.sibling}function VS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(qi(e,n),ur(n),i&4){try{Wl(3,n,n.return),fh(3,n)}catch(v){Qt(n,n.return,v)}try{Wl(5,n,n.return)}catch(v){Qt(n,n.return,v)}}break;case 1:qi(e,n),ur(n),i&512&&t!==null&&ya(t,t.return);break;case 5:if(qi(e,n),ur(n),i&512&&t!==null&&ya(t,t.return),n.flags&32){var r=n.stateNode;try{tu(r,"")}catch(v){Qt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uy(r,s),hp(a,o);var u=hp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?py(r,h):c==="dangerouslySetInnerHTML"?hy(r,h):c==="children"?tu(r,h):l0(r,c,h,u)}switch(a){case"input":ap(r,s);break;case"textarea":cy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Aa(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Aa(r,!!s.multiple,s.defaultValue,!0):Aa(r,!!s.multiple,s.multiple?[]:"",!1))}r[cu]=s}catch(v){Qt(n,n.return,v)}}break;case 6:if(qi(e,n),ur(n),i&4){if(n.stateNode===null)throw Error(fe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Qt(n,n.return,v)}}break;case 3:if(qi(e,n),ur(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{su(e.containerInfo)}catch(v){Qt(n,n.return,v)}break;case 4:qi(e,n),ur(n);break;case 13:qi(e,n),ur(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(V0=rn())),i&4&&iv(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(On=(u=On)||c,qi(e,n),On=u):qi(e,n),ur(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Le=n,c=n.child;c!==null;){for(h=Le=c;Le!==null;){switch(f=Le,p=f.child,f.tag){case 0:case 11:case 14:case 15:Wl(4,f,f.return);break;case 1:ya(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Qt(i,t,v)}}break;case 5:ya(f,f.return);break;case 22:if(f.memoizedState!==null){sv(h);continue}}p!==null?(p.return=f,Le=p):sv(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dy("display",o))}catch(v){Qt(n,n.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Qt(n,n.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qi(e,n),ur(n),i&4&&iv(n);break;case 21:break;default:qi(e,n),ur(n)}}function ur(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(BS(t)){var i=t;break e}t=t.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(tu(r,""),i.flags&=-33);var s=nv(n);Gp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=nv(n);Vp(n,a,o);break;default:throw Error(fe(161))}}catch(l){Qt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function yw(n,e,t){Le=n,GS(n)}function GS(n,e,t){for(var i=(n.mode&1)!==0;Le!==null;){var r=Le,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||hc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||On;a=hc;var u=On;if(hc=o,(On=l)&&!u)for(Le=r;Le!==null;)o=Le,l=o.child,o.tag===22&&o.memoizedState!==null?ov(r):l!==null?(l.return=o,Le=l):ov(r);for(;s!==null;)Le=s,GS(s),s=s.sibling;Le=r,hc=a,On=u}rv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Le=s):rv(n)}}function rv(n){for(;Le!==null;){var e=Le;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:On||fh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!On)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Zi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&G_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}G_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&su(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}On||e.flags&512&&zp(e)}catch(f){Qt(e,e.return,f)}}if(e===n){Le=null;break}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}}function sv(n){for(;Le!==null;){var e=Le;if(e===n){Le=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Le=t;break}Le=e.return}}function ov(n){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{fh(4,e)}catch(l){Qt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Qt(e,r,l)}}var s=e.return;try{zp(e)}catch(l){Qt(e,s,l)}break;case 5:var o=e.return;try{zp(e)}catch(l){Qt(e,o,l)}}}catch(l){Qt(e,e.return,l)}if(e===n){Le=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Le=a;break}Le=e.return}}var Sw=Math.ceil,Uf=es.ReactCurrentDispatcher,B0=es.ReactCurrentOwner,Hi=es.ReactCurrentBatchConfig,vt=0,yn=null,an=null,Cn=0,pi=0,Sa=Ws(0),fn=0,gu=null,Po=0,hh=0,z0=0,Xl=null,Zn=null,V0=0,Wa=1/0,Ur=null,Ff=!1,Hp=null,Ds=null,dc=!1,Ms=null,Of=0,Yl=0,Wp=null,nf=-1,rf=0;function qn(){return vt&6?rn():nf!==-1?nf:nf=rn()}function Ns(n){return n.mode&1?vt&2&&Cn!==0?Cn&-Cn:rw.transition!==null?(rf===0&&(rf=Ay()),rf):(n=At,n!==0||(n=window.event,n=n===void 0?16:Ny(n.type)),n):1}function nr(n,e,t,i){if(50<Yl)throw Yl=0,Wp=null,Error(fe(185));Nu(n,t,i),(!(vt&2)||n!==yn)&&(n===yn&&(!(vt&2)&&(hh|=t),fn===4&&xs(n,Cn)),ni(n,i),t===1&&vt===0&&!(e.mode&1)&&(Wa=rn()+500,lh&&Xs()))}function ni(n,e){var t=n.callbackNode;rT(n,e);var i=yf(n,n===yn?Cn:0);if(i===0)t!==null&&m_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&m_(t),e===1)n.tag===0?iw(av.bind(null,n)):Jy(av.bind(null,n)),QT(function(){!(vt&6)&&Xs()}),t=null;else{switch(Cy(i)){case 1:t=d0;break;case 4:t=Ty;break;case 16:t=xf;break;case 536870912:t=wy;break;default:t=xf}t=KS(t,HS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function HS(n,e){if(nf=-1,rf=0,vt&6)throw Error(fe(327));var t=n.callbackNode;if(La()&&n.callbackNode!==t)return null;var i=yf(n,n===yn?Cn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=kf(n,i);else{e=i;var r=vt;vt|=2;var s=XS();(yn!==n||Cn!==e)&&(Ur=null,Wa=rn()+500,So(n,e));do try{Tw();break}catch(a){WS(n,a)}while(!0);A0(),Uf.current=s,vt=r,an!==null?e=0:(yn=null,Cn=0,e=fn)}if(e!==0){if(e===2&&(r=_p(n),r!==0&&(i=r,e=Xp(n,r))),e===1)throw t=gu,So(n,0),xs(n,i),ni(n,rn()),t;if(e===6)xs(n,i);else{if(r=n.current.alternate,!(i&30)&&!Mw(r)&&(e=kf(n,i),e===2&&(s=_p(n),s!==0&&(i=s,e=Xp(n,s))),e===1))throw t=gu,So(n,0),xs(n,i),ni(n,rn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:uo(n,Zn,Ur);break;case 3:if(xs(n,i),(i&130023424)===i&&(e=V0+500-rn(),10<e)){if(yf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){qn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=wp(uo.bind(null,n,Zn,Ur),e);break}uo(n,Zn,Ur);break;case 4:if(xs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-tr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=rn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sw(i/1960))-i,10<i){n.timeoutHandle=wp(uo.bind(null,n,Zn,Ur),i);break}uo(n,Zn,Ur);break;case 5:uo(n,Zn,Ur);break;default:throw Error(fe(329))}}}return ni(n,rn()),n.callbackNode===t?HS.bind(null,n):null}function Xp(n,e){var t=Xl;return n.current.memoizedState.isDehydrated&&(So(n,e).flags|=256),n=kf(n,e),n!==2&&(e=Zn,Zn=t,e!==null&&Yp(e)),n}function Yp(n){Zn===null?Zn=n:Zn.push.apply(Zn,n)}function Mw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ir(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xs(n,e){for(e&=~z0,e&=~hh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-tr(e),i=1<<t;n[t]=-1,e&=~i}}function av(n){if(vt&6)throw Error(fe(327));La();var e=yf(n,0);if(!(e&1))return ni(n,rn()),null;var t=kf(n,e);if(n.tag!==0&&t===2){var i=_p(n);i!==0&&(e=i,t=Xp(n,i))}if(t===1)throw t=gu,So(n,0),xs(n,e),ni(n,rn()),t;if(t===6)throw Error(fe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,uo(n,Zn,Ur),ni(n,rn()),null}function G0(n,e){var t=vt;vt|=1;try{return n(e)}finally{vt=t,vt===0&&(Wa=rn()+500,lh&&Xs())}}function Lo(n){Ms!==null&&Ms.tag===0&&!(vt&6)&&La();var e=vt;vt|=1;var t=Hi.transition,i=At;try{if(Hi.transition=null,At=1,n)return n()}finally{At=i,Hi.transition=t,vt=e,!(vt&6)&&Xs()}}function H0(){pi=Sa.current,Ot(Sa)}function So(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,JT(t)),an!==null)for(t=an.return;t!==null;){var i=t;switch(E0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wf();break;case 3:Ga(),Ot(ei),Ot(Gn),D0();break;case 5:L0(i);break;case 4:Ga();break;case 13:Ot(Xt);break;case 19:Ot(Xt);break;case 10:C0(i.type._context);break;case 22:case 23:H0()}t=t.return}if(yn=n,an=n=Is(n.current,null),Cn=pi=e,fn=0,gu=null,z0=hh=Po=0,Zn=Xl=null,go!==null){for(e=0;e<go.length;e++)if(t=go[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}go=null}return n}function WS(n,e){do{var t=an;try{if(A0(),Qc.current=If,Nf){for(var i=Kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nf=!1}if(bo=0,xn=cn=Kt=null,Hl=!1,du=0,B0.current=null,t===null||t.return===null){fn=1,gu=e,an=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Cn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=j_(o);if(p!==null){p.flags&=-257,$_(p,o,a,s,e),p.mode&1&&q_(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){q_(s,u,e),W0();break e}l=Error(fe(426))}}else if(Vt&&a.mode&1){var _=j_(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),$_(_,o,a,s,e),T0(Ha(l,a));break e}}s=l=Ha(l,a),fn!==4&&(fn=2),Xl===null?Xl=[s]:Xl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=CS(s,l,e);V_(s,d);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ds===null||!Ds.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=RS(s,a,e);V_(s,S);break e}}s=s.return}while(s!==null)}qS(t)}catch(T){e=T,an===t&&t!==null&&(an=t=t.return);continue}break}while(!0)}function XS(){var n=Uf.current;return Uf.current=If,n===null?If:n}function W0(){(fn===0||fn===3||fn===2)&&(fn=4),yn===null||!(Po&268435455)&&!(hh&268435455)||xs(yn,Cn)}function kf(n,e){var t=vt;vt|=2;var i=XS();(yn!==n||Cn!==e)&&(Ur=null,So(n,e));do try{Ew();break}catch(r){WS(n,r)}while(!0);if(A0(),vt=t,Uf.current=i,an!==null)throw Error(fe(261));return yn=null,Cn=0,fn}function Ew(){for(;an!==null;)YS(an)}function Tw(){for(;an!==null&&!$E();)YS(an)}function YS(n){var e=$S(n.alternate,n,pi);n.memoizedProps=n.pendingProps,e===null?qS(n):an=e,B0.current=null}function qS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=_w(t,e),t!==null){t.flags&=32767,an=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,an=null;return}}else if(t=gw(t,e,pi),t!==null){an=t;return}if(e=e.sibling,e!==null){an=e;return}an=e=n}while(e!==null);fn===0&&(fn=5)}function uo(n,e,t){var i=At,r=Hi.transition;try{Hi.transition=null,At=1,ww(n,e,t,i)}finally{Hi.transition=r,At=i}return null}function ww(n,e,t,i){do La();while(Ms!==null);if(vt&6)throw Error(fe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(fe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(sT(n,s),n===yn&&(an=yn=null,Cn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||dc||(dc=!0,KS(xf,function(){return La(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Hi.transition,Hi.transition=null;var o=At;At=1;var a=vt;vt|=4,B0.current=null,xw(n,t),VS(t,n),XT(Ep),Sf=!!Mp,Ep=Mp=null,n.current=t,yw(t),KE(),vt=a,At=o,Hi.transition=s}else n.current=t;if(dc&&(dc=!1,Ms=n,Of=r),s=n.pendingLanes,s===0&&(Ds=null),QE(t.stateNode),ni(n,rn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ff)throw Ff=!1,n=Hp,Hp=null,n;return Of&1&&n.tag!==0&&La(),s=n.pendingLanes,s&1?n===Wp?Yl++:(Yl=0,Wp=n):Yl=0,Xs(),null}function La(){if(Ms!==null){var n=Cy(Of),e=Hi.transition,t=At;try{if(Hi.transition=null,At=16>n?16:n,Ms===null)var i=!1;else{if(n=Ms,Ms=null,Of=0,vt&6)throw Error(fe(331));var r=vt;for(vt|=4,Le=n.current;Le!==null;){var s=Le,o=s.child;if(Le.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Le=u;Le!==null;){var c=Le;switch(c.tag){case 0:case 11:case 15:Wl(8,c,s)}var h=c.child;if(h!==null)h.return=c,Le=h;else for(;Le!==null;){c=Le;var f=c.sibling,p=c.return;if(kS(c),c===u){Le=null;break}if(f!==null){f.return=p,Le=f;break}Le=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}Le=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Le=o;else e:for(;Le!==null;){if(s=Le,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wl(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Le=d;break e}Le=s.return}}var m=n.current;for(Le=m;Le!==null;){o=Le;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Le=x;else e:for(o=m;Le!==null;){if(a=Le,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fh(9,a)}}catch(T){Qt(a,a.return,T)}if(a===o){Le=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Le=S;break e}Le=a.return}}if(vt=r,Xs(),Sr&&typeof Sr.onPostCommitFiberRoot=="function")try{Sr.onPostCommitFiberRoot(ih,n)}catch{}i=!0}return i}finally{At=t,Hi.transition=e}}return!1}function lv(n,e,t){e=Ha(t,e),e=CS(n,e,1),n=Ls(n,e,1),e=qn(),n!==null&&(Nu(n,1,e),ni(n,e))}function Qt(n,e,t){if(n.tag===3)lv(n,n,t);else for(;e!==null;){if(e.tag===3){lv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ds===null||!Ds.has(i))){n=Ha(t,n),n=RS(e,n,1),e=Ls(e,n,1),n=qn(),e!==null&&(Nu(e,1,n),ni(e,n));break}}e=e.return}}function Aw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=qn(),n.pingedLanes|=n.suspendedLanes&t,yn===n&&(Cn&t)===t&&(fn===4||fn===3&&(Cn&130023424)===Cn&&500>rn()-V0?So(n,0):z0|=t),ni(n,e)}function jS(n,e){e===0&&(n.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var t=qn();n=jr(n,e),n!==null&&(Nu(n,e,t),ni(n,t))}function Cw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),jS(n,t)}function Rw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),jS(n,t)}var $S;$S=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ei.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,mw(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,Vt&&e.flags&1048576&&Qy(e,Rf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tf(n,e),n=e.pendingProps;var r=Ba(e,Gn.current);Pa(e,t),r=I0(null,e,i,n,r,t);var s=U0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ti(i)?(s=!0,Af(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,b0(e),r.updater=ch,e.stateNode=r,r._reactInternals=e,Dp(e,i,n,t),e=Up(null,e,i,!0,s,t)):(e.tag=0,Vt&&s&&M0(e),Yn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(tf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Pw(i),n=Zi(i,n),r){case 0:e=Ip(null,e,i,n,t);break e;case 1:e=J_(null,e,i,n,t);break e;case 11:e=K_(null,e,i,n,t);break e;case 14:e=Z_(null,e,i,Zi(i.type,n),t);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),Ip(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),J_(n,e,i,r,t);case 3:e:{if(DS(e),n===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,sS(n,e),Lf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ha(Error(fe(423)),e),e=Q_(n,e,i,t,r);break e}else if(i!==r){r=Ha(Error(fe(424)),e),e=Q_(n,e,i,t,r);break e}else for(vi=Ps(e.stateNode.containerInfo.firstChild),Si=e,Vt=!0,Qi=null,t=iS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(za(),i===r){e=$r(n,e,t);break e}Yn(n,e,i,t)}e=e.child}return e;case 5:return oS(e),n===null&&bp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Tp(i,r)?o=null:s!==null&&Tp(i,s)&&(e.flags|=32),LS(n,e),Yn(n,e,o,t),e.child;case 6:return n===null&&bp(e),null;case 13:return NS(n,e,t);case 4:return P0(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Va(e,null,i,t):Yn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),K_(n,e,i,r,t);case 7:return Yn(n,e,e.pendingProps,t),e.child;case 8:return Yn(n,e,e.pendingProps.children,t),e.child;case 12:return Yn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Nt(bf,i._currentValue),i._currentValue=o,s!==null)if(ir(s.value,o)){if(s.children===r.children&&!ei.current){e=$r(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Pp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(fe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Pp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Pa(e,t),r=Wi(r),i=i(r),e.flags|=1,Yn(n,e,i,t),e.child;case 14:return i=e.type,r=Zi(i,e.pendingProps),r=Zi(i.type,r),Z_(n,e,i,r,t);case 15:return bS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),tf(n,e),e.tag=1,ti(i)?(n=!0,Af(e)):n=!1,Pa(e,t),AS(e,i,r),Dp(e,i,r,t),Up(null,e,i,!0,n,t);case 19:return IS(n,e,t);case 22:return PS(n,e,t)}throw Error(fe(156,e.tag))};function KS(n,e){return Ey(n,e)}function bw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(n,e,t,i){return new bw(n,e,t,i)}function X0(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Pw(n){if(typeof n=="function")return X0(n)?1:0;if(n!=null){if(n=n.$$typeof,n===c0)return 11;if(n===f0)return 14}return 2}function Is(n,e){var t=n.alternate;return t===null?(t=zi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function sf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")X0(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case fa:return Mo(t.children,r,s,e);case u0:o=8,r|=8;break;case np:return n=zi(12,t,e,r|2),n.elementType=np,n.lanes=s,n;case ip:return n=zi(13,t,e,r),n.elementType=ip,n.lanes=s,n;case rp:return n=zi(19,t,e,r),n.elementType=rp,n.lanes=s,n;case oy:return dh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ry:o=10;break e;case sy:o=9;break e;case c0:o=11;break e;case f0:o=14;break e;case gs:o=16,i=null;break e}throw Error(fe(130,n==null?n:typeof n,""))}return e=zi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Mo(n,e,t,i){return n=zi(7,n,i,e),n.lanes=t,n}function dh(n,e,t,i){return n=zi(22,n,i,e),n.elementType=oy,n.lanes=t,n.stateNode={isHidden:!1},n}function od(n,e,t){return n=zi(6,n,null,e),n.lanes=t,n}function ad(n,e,t){return e=zi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Lw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vh(0),this.expirationTimes=Vh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Y0(n,e,t,i,r,s,o,a,l){return n=new Lw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},b0(s),n}function Dw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ca,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ZS(n){if(!n)return ks;n=n._reactInternals;e:{if(Oo(n)!==n||n.tag!==1)throw Error(fe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ti(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(n.tag===1){var t=n.type;if(ti(t))return Zy(n,t,e)}return e}function JS(n,e,t,i,r,s,o,a,l){return n=Y0(t,i,!0,n,r,s,o,a,l),n.context=ZS(null),t=n.current,i=qn(),r=Ns(t),s=Hr(i,r),s.callback=e??null,Ls(t,s,r),n.current.lanes=r,Nu(n,r,i),ni(n,i),n}function ph(n,e,t,i){var r=e.current,s=qn(),o=Ns(r);return t=ZS(t),e.context===null?e.context=t:e.pendingContext=t,e=Hr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ls(r,e,o),n!==null&&(nr(n,r,o,s),Jc(n,r,o)),o}function Bf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function uv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function q0(n,e){uv(n,e),(n=n.alternate)&&uv(n,e)}function Nw(){return null}var QS=typeof reportError=="function"?reportError:function(n){console.error(n)};function j0(n){this._internalRoot=n}mh.prototype.render=j0.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(fe(409));ph(n,e,null,null)};mh.prototype.unmount=j0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Lo(function(){ph(null,n,null,null)}),e[qr]=null}};function mh(n){this._internalRoot=n}mh.prototype.unstable_scheduleHydration=function(n){if(n){var e=Py();n={blockedOn:null,target:n,priority:e};for(var t=0;t<vs.length&&e!==0&&e<vs[t].priority;t++);vs.splice(t,0,n),t===0&&Dy(n)}};function $0(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function cv(){}function Iw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Bf(o);s.call(u)}}var o=JS(e,i,n,0,null,!1,!1,"",cv);return n._reactRootContainer=o,n[qr]=o.current,lu(n.nodeType===8?n.parentNode:n),Lo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Bf(l);a.call(u)}}var l=Y0(n,0,!1,null,null,!1,!1,"",cv);return n._reactRootContainer=l,n[qr]=l.current,lu(n.nodeType===8?n.parentNode:n),Lo(function(){ph(e,l,t,i)}),l}function _h(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Bf(o);a.call(l)}}ph(e,o,n,r)}else o=Iw(t,e,n,r,i);return Bf(o)}Ry=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ll(e.pendingLanes);t!==0&&(p0(e,t|1),ni(e,rn()),!(vt&6)&&(Wa=rn()+500,Xs()))}break;case 13:Lo(function(){var i=jr(n,1);if(i!==null){var r=qn();nr(i,n,1,r)}}),q0(n,1)}};m0=function(n){if(n.tag===13){var e=jr(n,134217728);if(e!==null){var t=qn();nr(e,n,134217728,t)}q0(n,134217728)}};by=function(n){if(n.tag===13){var e=Ns(n),t=jr(n,e);if(t!==null){var i=qn();nr(t,n,e,i)}q0(n,e)}};Py=function(){return At};Ly=function(n,e){var t=At;try{return At=n,e()}finally{At=t}};pp=function(n,e,t){switch(e){case"input":if(ap(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=ah(i);if(!r)throw Error(fe(90));ly(i),ap(i,r)}}}break;case"textarea":cy(n,t);break;case"select":e=t.value,e!=null&&Aa(n,!!t.multiple,e,!1)}};_y=G0;vy=Lo;var Uw={usingClientEntryPoint:!1,Events:[Uu,ma,ah,my,gy,G0]},yl={findFiberByHostInstance:mo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fw={bundleType:yl.bundleType,version:yl.version,rendererPackageName:yl.rendererPackageName,rendererConfig:yl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:es.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Sy(n),n===null?null:n.stateNode},findFiberByHostInstance:yl.findFiberByHostInstance||Nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{ih=pc.inject(Fw),Sr=pc}catch{}}Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw;Ci.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$0(e))throw Error(fe(200));return Dw(n,e,null,t)};Ci.createRoot=function(n,e){if(!$0(n))throw Error(fe(299));var t=!1,i="",r=QS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Y0(n,1,!1,null,null,t,!1,i,r),n[qr]=e.current,lu(n.nodeType===8?n.parentNode:n),new j0(e)};Ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(fe(188)):(n=Object.keys(n).join(","),Error(fe(268,n)));return n=Sy(e),n=n===null?null:n.stateNode,n};Ci.flushSync=function(n){return Lo(n)};Ci.hydrate=function(n,e,t){if(!gh(e))throw Error(fe(200));return _h(null,n,e,!0,t)};Ci.hydrateRoot=function(n,e,t){if(!$0(n))throw Error(fe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=QS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=JS(e,null,n,1,t??null,r,!1,s,o),n[qr]=e.current,lu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new mh(e)};Ci.render=function(n,e,t){if(!gh(e))throw Error(fe(200));return _h(null,n,e,!1,t)};Ci.unmountComponentAtNode=function(n){if(!gh(n))throw Error(fe(40));return n._reactRootContainer?(Lo(function(){_h(null,null,n,!1,function(){n._reactRootContainer=null,n[qr]=null})}),!0):!1};Ci.unstable_batchedUpdates=G0;Ci.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!gh(t))throw Error(fe(200));if(n==null||n._reactInternals===void 0)throw Error(fe(38));return _h(n,e,t,!1,i)};Ci.version="18.3.1-next-f1338f8080-20240426";function eM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eM)}catch(n){console.error(n)}}eM(),ey.exports=Ci;var Ow=ey.exports,fv=Ow;ep.createRoot=fv.createRoot,ep.hydrateRoot=fv.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const K0="184",kw=0,hv=1,Bw=2,of=1,zw=2,Nl=3,Bs=0,ii=1,Br=2,Wr=0,Da=1,ql=2,dv=3,pv=4,Vw=5,ho=100,Gw=101,Hw=102,Ww=103,Xw=104,Yw=200,qw=201,jw=202,$w=203,qp=204,jp=205,Kw=206,Zw=207,Jw=208,Qw=209,eA=210,tA=211,nA=212,iA=213,rA=214,$p=0,Kp=1,Zp=2,Xa=3,Jp=4,Qp=5,em=6,tm=7,tM=0,sA=1,oA=2,Er=0,nM=1,iM=2,rM=3,sM=4,oM=5,aM=6,lM=7,uM=300,Do=301,Ya=302,ld=303,ud=304,vh=306,nm=1e3,Gr=1001,im=1002,An=1003,aA=1004,mc=1005,Bn=1006,cd=1007,vo=1008,gi=1009,cM=1010,fM=1011,_u=1012,Z0=1013,wr=1014,vr=1015,Kr=1016,J0=1017,Q0=1018,vu=1020,hM=35902,dM=35899,pM=1021,mM=1022,er=1023,Zr=1026,xo=1027,gM=1028,eg=1029,No=1030,tg=1031,ng=1033,af=33776,lf=33777,uf=33778,cf=33779,rm=35840,sm=35841,om=35842,am=35843,lm=36196,um=37492,cm=37496,fm=37488,hm=37489,zf=37490,dm=37491,pm=37808,mm=37809,gm=37810,_m=37811,vm=37812,xm=37813,ym=37814,Sm=37815,Mm=37816,Em=37817,Tm=37818,wm=37819,Am=37820,Cm=37821,Rm=36492,bm=36494,Pm=36495,Lm=36283,Dm=36284,Vf=36285,Nm=36286,lA=3200,mv=0,uA=1,ys="",Ui="srgb",Gf="srgb-linear",Hf="linear",wt="srgb",jo=7680,gv=519,cA=512,fA=513,hA=514,ig=515,dA=516,pA=517,rg=518,mA=519,_v=35044,vv="300 es",xr=2e3,xu=2001;function gA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _A(){const n=Wf("canvas");return n.style.display="block",n}const xv={};function yv(...n){const e="THREE."+n.shift();console.log(e,...n)}function _M(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=_M(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function gt(...n){n=_M(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Im(...n){const e=n.join(" ");e in xv||(xv[e]=!0,je(...n))}function vA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const xA={[$p]:Kp,[Zp]:em,[Jp]:tm,[Xa]:Qp,[Kp]:$p,[em]:Zp,[tm]:Jp,[Qp]:Xa};class ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sv=1234567;const Na=Math.PI/180,yu=180/Math.PI;function Bo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function sg(n,e){return(n%e+e)%e}function yA(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function SA(n,e,t){return n!==e?(t-n)/(e-n):0}function jl(n,e,t){return(1-t)*n+t*e}function MA(n,e,t,i){return jl(n,e,1-Math.exp(-t*i))}function EA(n,e=1){return e-Math.abs(sg(n,e*2)-e)}function TA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function wA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function AA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function CA(n,e){return n+Math.random()*(e-n)}function RA(n){return n*(.5-Math.random())}function bA(n){n!==void 0&&(Sv=n);let e=Sv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function PA(n){return n*Na}function LA(n){return n*yu}function DA(n){return(n&n-1)===0&&n!==0}function NA(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function IA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function UA(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*h,l*f,a*u);break;case"YZY":n.set(l*f,a*c,l*h,a*u);break;case"ZXZ":n.set(l*h,l*f,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*p,a*c,a*u);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ua(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Dt={DEG2RAD:Na,RAD2DEG:yu,generateUUID:Bo,clamp:ot,euclideanModulo:sg,mapLinear:yA,inverseLerp:SA,lerp:jl,damp:MA,pingpong:EA,smoothstep:TA,smootherstep:wA,randInt:AA,randFloat:CA,randFloatSpread:RA,seededRandom:bA,degToRad:PA,radToDeg:LA,isPowerOfTwo:DA,ceilPowerOfTwo:NA,floorPowerOfTwo:IA,setQuaternionFromProperEuler:UA,normalize:Hn,denormalize:ua},Ug=class Ug{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ug.prototype.isVector2=!0;let Ae=Ug;class rl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(h!==v||l!==f||u!==p||c!==g){let _=l*f+u*p+c*g+h*v;_<0&&(f=-f,p=-p,g=-g,v=-v,_=-_);let d=1-a;if(_<.9995){const m=Math.acos(_),x=Math.sin(m);d=Math.sin(d*m)/x,a=Math.sin(a*m)/x,l=l*d+f*a,u=u*d+p*a,c=c*d+g*a,h=h*d+v*a}else{l=l*d+f*a,u=u*d+p*a,c=c*d+g*a,h=h*d+v*a;const m=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=m,u*=m,c*=m,h*=m}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*h+l*p-u*f,e[t+1]=l*g+c*f+u*h-a*p,e[t+2]=u*g+c*p+a*f-l*h,e[t+3]=c*g-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fg=class Fg{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fd.copy(this).projectOnVector(e),this.sub(fd)}reflect(e){return this.sub(fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fg.prototype.isVector3=!0;let D=Fg;const fd=new D,Mv=new rl,Og=class Og{constructor(e,t,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=r[0],_=r[3],d=r[6],m=r[1],x=r[4],S=r[7],T=r[2],M=r[5],w=r[8];return s[0]=o*v+a*m+l*T,s[3]=o*_+a*x+l*M,s[6]=o*d+a*S+l*w,s[1]=u*v+c*m+h*T,s[4]=u*_+c*x+h*M,s[7]=u*d+c*S+h*w,s[2]=f*v+p*m+g*T,s[5]=f*_+p*x+g*M,s[8]=f*d+p*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,p=u*s-o*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hd.makeScale(e,t)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,t){return this.premultiply(hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Og.prototype.isMatrix3=!0;let tt=Og;const hd=new tt,Ev=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tv=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FA(){const n={enabled:!0,workingColorSpace:Gf,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(r.r=Xr(r.r),r.g=Xr(r.g),r.b=Xr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(r.r=Ia(r.r),r.g=Ia(r.g),r.b=Ia(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ys?Hf:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Im("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Im("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gf]:{primaries:e,whitePoint:i,transfer:Hf,toXYZ:Ev,fromXYZ:Tv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:Ev,fromXYZ:Tv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),n}const dt=FA();function Xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ia(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $o;class OA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$o===void 0&&($o=Wf("canvas")),$o.width=e.width,$o.height=e.height;const r=$o.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$o}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xr(t[i]/255)*255):t[i]=Xr(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kA=0;class og{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dd(r[o].image)):s.push(dd(r[o]))}else s=dd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function dd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?OA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let BA=0;const pd=new D;class zn extends ko{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,i=Gr,r=Gr,s=Bn,o=vo,a=er,l=gi,u=zn.DEFAULT_ANISOTROPY,c=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=Bo(),this.name="",this.source=new og(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nm:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case im:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nm:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case im:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=uM;zn.DEFAULT_ANISOTROPY=1;const kg=class kg{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],_=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+_)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,T=(d+1)/2,M=(c+f)/4,w=(h+v)/4,y=(g+_)/4;return x>S&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=M/i,s=w/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=M/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=y/s),this.set(i,r,s,t),this}let m=Math.sqrt((_-g)*(_-g)+(h-v)*(h-v)+(f-c)*(f-c));return Math.abs(m)<.001&&(m=1),this.x=(_-g)/m,this.y=(h-v)/m,this.z=(f-c)/m,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kg.prototype.isVector4=!0;let en=kg;class zA extends ko{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new zn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new og(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends zA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vM extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VA extends zn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const th=class th{constructor(e,t,i,r,s,o,a,l,u,c,h,f,p,g,v,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,f,p,g,v,_)}set(e,t,i,r,s,o,a,l,u,c,h,f,p,g,v,_){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new th().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ko.setFromMatrixColumn(e,0).length(),s=1/Ko.setFromMatrixColumn(e,1).length(),o=1/Ko.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*h,g=a*c,v=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+g*u,t[5]=f-v*u,t[9]=-a*l,t[2]=v-f*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,g=u*c,v=u*h;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,g=u*c,v=u*h;t[0]=f-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=v-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*h,g=a*c,v=a*h;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+v,t[1]=l*h,t[5]=v*u+f,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+v,t[5]=o*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*c,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GA,e,HA)}lookAt(e,t,i){const r=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),us.crossVectors(i,hi),us.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),us.crossVectors(i,hi)),us.normalize(),gc.crossVectors(hi,us),r[0]=us.x,r[4]=gc.x,r[8]=hi.x,r[1]=us.y,r[5]=gc.y,r[9]=hi.y,r[2]=us.z,r[6]=gc.z,r[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],_=i[10],d=i[14],m=i[3],x=i[7],S=i[11],T=i[15],M=r[0],w=r[4],y=r[8],A=r[12],b=r[1],P=r[5],I=r[9],G=r[13],X=r[2],N=r[6],B=r[10],O=r[14],U=r[3],V=r[7],j=r[11],$=r[15];return s[0]=o*M+a*b+l*X+u*U,s[4]=o*w+a*P+l*N+u*V,s[8]=o*y+a*I+l*B+u*j,s[12]=o*A+a*G+l*O+u*$,s[1]=c*M+h*b+f*X+p*U,s[5]=c*w+h*P+f*N+p*V,s[9]=c*y+h*I+f*B+p*j,s[13]=c*A+h*G+f*O+p*$,s[2]=g*M+v*b+_*X+d*U,s[6]=g*w+v*P+_*N+d*V,s[10]=g*y+v*I+_*B+d*j,s[14]=g*A+v*G+_*O+d*$,s[3]=m*M+x*b+S*X+T*U,s[7]=m*w+x*P+S*N+T*V,s[11]=m*y+x*I+S*B+T*j,s[15]=m*A+x*G+S*O+T*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],_=e[11],d=e[15],m=l*p-u*f,x=a*p-u*h,S=a*f-l*h,T=o*p-u*c,M=o*f-l*c,w=o*h-a*c;return t*(v*m-_*x+d*S)-i*(g*m-_*T+d*M)+r*(g*x-v*T+d*w)-s*(g*S-v*M+_*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],_=e[14],d=e[15],m=t*a-i*o,x=t*l-r*o,S=t*u-s*o,T=i*l-r*a,M=i*u-s*a,w=r*u-s*l,y=c*v-h*g,A=c*_-f*g,b=c*d-p*g,P=h*_-f*v,I=h*d-p*v,G=f*d-p*_,X=m*G-x*I+S*P+T*b-M*A+w*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/X;return e[0]=(a*G-l*I+u*P)*N,e[1]=(r*I-i*G-s*P)*N,e[2]=(v*w-_*M+d*T)*N,e[3]=(f*M-h*w-p*T)*N,e[4]=(l*b-o*G-u*A)*N,e[5]=(t*G-r*b+s*A)*N,e[6]=(_*S-g*w-d*x)*N,e[7]=(c*w-f*S+p*x)*N,e[8]=(o*I-a*b+u*y)*N,e[9]=(i*b-t*I-s*y)*N,e[10]=(g*M-v*S+d*m)*N,e[11]=(h*S-c*M-p*m)*N,e[12]=(a*A-o*P-l*y)*N,e[13]=(t*P-i*A+r*y)*N,e[14]=(v*x-g*T-_*m)*N,e[15]=(c*T-h*x+f*m)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,p=s*c,g=s*h,v=o*c,_=o*h,d=a*h,m=l*u,x=l*c,S=l*h,T=i.x,M=i.y,w=i.z;return r[0]=(1-(v+d))*T,r[1]=(p+S)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(p-S)*M,r[5]=(1-(f+d))*M,r[6]=(_+m)*M,r[7]=0,r[8]=(g+x)*w,r[9]=(_-m)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Ko.set(r[0],r[1],r[2]).length();const a=Ko.set(r[4],r[5],r[6]).length(),l=Ko.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ji.copy(this);const u=1/o,c=1/a,h=1/l;return ji.elements[0]*=u,ji.elements[1]*=u,ji.elements[2]*=u,ji.elements[4]*=c,ji.elements[5]*=c,ji.elements[6]*=c,ji.elements[8]*=h,ji.elements[9]*=h,ji.elements[10]*=h,t.setFromRotationMatrix(ji),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=xr,l=!1){const u=this.elements,c=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===xr)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===xu)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=xr,l=!1){const u=this.elements,c=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===xr)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===xu)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};th.prototype.isMatrix4=!0;let Ht=th;const Ko=new D,ji=new Ht,GA=new D(0,0,0),HA=new D(1,1,1),us=new D,gc=new D,hi=new D,wv=new Ht,Av=new rl;class Io{constructor(e=0,t=0,i=0,r=Io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Av.setFromEuler(this),this.setFromQuaternion(Av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Io.DEFAULT_ORDER="XYZ";class xM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WA=0;const Cv=new D,Zo=new rl,Pr=new Ht,_c=new D,Sl=new D,XA=new D,YA=new rl,Rv=new D(1,0,0),bv=new D(0,1,0),Pv=new D(0,0,1),Lv={type:"added"},qA={type:"removed"},Jo={type:"childadded",child:null},md={type:"childremoved",child:null};class hn extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WA++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new D,t=new Io,i=new rl,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new tt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(Rv,e)}rotateY(e){return this.rotateOnAxis(bv,e)}rotateZ(e){return this.rotateOnAxis(Pv,e)}translateOnAxis(e,t){return Cv.copy(e).applyQuaternion(this.quaternion),this.position.add(Cv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rv,e)}translateY(e){return this.translateOnAxis(bv,e)}translateZ(e){return this.translateOnAxis(Pv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_c.copy(e):_c.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(Sl,_c,this.up):Pr.lookAt(_c,Sl,this.up),this.quaternion.setFromRotationMatrix(Pr),r&&(Pr.extractRotation(r.matrixWorld),Zo.setFromRotationMatrix(Pr),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lv),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qA),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lv),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,e,XA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,YA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new D(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vn extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jA={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),d=this._getHandJoint(u,v);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},vc={h:0,s:0,l:0};function _d(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=sg(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=_d(o,s,e+1/3),this.g=_d(o,s,e),this.b=_d(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ui){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ui){const i=yM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ui){return dt.workingToColorSpace(In.copy(this),e),Math.round(ot(In.r*255,0,255))*65536+Math.round(ot(In.g*255,0,255))*256+Math.round(ot(In.b*255,0,255))}getHexString(e=Ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(In.copy(this),t);const i=In.r,r=In.g,s=In.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Ui){dt.workingToColorSpace(In.copy(this),e);const t=In.r,i=In.g,r=In.b;return e!==Ui?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(vc);const i=jl(cs.h,vc.h,t),r=jl(cs.s,vc.s,t),s=jl(cs.l,vc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new rt;rt.NAMES=yM;class ag{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(e),this.density=t}clone(){return new ag(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $A extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Io,this.environmentIntensity=1,this.environmentRotation=new Io,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $i=new D,Lr=new D,vd=new D,Dr=new D,Qo=new D,ea=new D,Dv=new D,xd=new D,yd=new D,Sd=new D,Md=new en,Ed=new en,Td=new en;class Bi{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$i.subVectors(e,t),r.cross($i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$i.subVectors(r,t),Lr.subVectors(i,t),vd.subVectors(e,t);const o=$i.dot($i),a=$i.dot(Lr),l=$i.dot(vd),u=Lr.dot(Lr),c=Lr.dot(vd),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dr)===null?!1:Dr.x>=0&&Dr.y>=0&&Dr.x+Dr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dr.x),l.addScaledVector(o,Dr.y),l.addScaledVector(a,Dr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Md.setScalar(0),Ed.setScalar(0),Td.setScalar(0),Md.fromBufferAttribute(e,t),Ed.fromBufferAttribute(e,i),Td.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Md,s.x),o.addScaledVector(Ed,s.y),o.addScaledVector(Td,s.z),o}static isFrontFacing(e,t,i,r){return $i.subVectors(i,t),Lr.subVectors(e,t),$i.cross(Lr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Lr.subVectors(this.a,this.b),$i.cross(Lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Bi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Qo.subVectors(r,i),ea.subVectors(s,i),xd.subVectors(e,i);const l=Qo.dot(xd),u=ea.dot(xd);if(l<=0&&u<=0)return t.copy(i);yd.subVectors(e,r);const c=Qo.dot(yd),h=ea.dot(yd);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Qo,o);Sd.subVectors(e,s);const p=Qo.dot(Sd),g=ea.dot(Sd);if(g>=0&&p<=g)return t.copy(s);const v=p*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(ea,a);const _=c*g-p*h;if(_<=0&&h-c>=0&&p-g>=0)return Dv.subVectors(s,r),a=(h-c)/(h-c+(p-g)),t.copy(r).addScaledVector(Dv,a);const d=1/(_+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(Qo,o).addScaledVector(ea,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ou{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ki):Ki.fromBufferAttribute(s,o),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xc.copy(i.boundingBox)),xc.applyMatrix4(e.matrixWorld),this.union(xc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),yc.subVectors(this.max,Ml),ta.subVectors(e.a,Ml),na.subVectors(e.b,Ml),ia.subVectors(e.c,Ml),fs.subVectors(na,ta),hs.subVectors(ia,na),to.subVectors(ta,ia);let t=[0,-fs.z,fs.y,0,-hs.z,hs.y,0,-to.z,to.y,fs.z,0,-fs.x,hs.z,0,-hs.x,to.z,0,-to.x,-fs.y,fs.x,0,-hs.y,hs.x,0,-to.y,to.x,0];return!wd(t,ta,na,ia,yc)||(t=[1,0,0,0,1,0,0,0,1],!wd(t,ta,na,ia,yc))?!1:(Sc.crossVectors(fs,hs),t=[Sc.x,Sc.y,Sc.z],wd(t,ta,na,ia,yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nr=[new D,new D,new D,new D,new D,new D,new D,new D],Ki=new D,xc=new Ou,ta=new D,na=new D,ia=new D,fs=new D,hs=new D,to=new D,Ml=new D,yc=new D,Sc=new D,no=new D;function wd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){no.fromArray(n,s);const a=r.x*Math.abs(no.x)+r.y*Math.abs(no.y)+r.z*Math.abs(no.z),l=e.dot(no),u=t.dot(no),c=i.dot(no);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const sn=new D,Mc=new Ae;let KA=0;class Mi extends ko{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_v,this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mc.fromBufferAttribute(this,t),Mc.applyMatrix3(e),this.setXY(t,Mc.x,Mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ua(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),r=Hn(r,this.array),s=Hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_v&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class SM extends Mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class MM extends Mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends Mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ZA=new Ou,El=new D,Ad=new D;class ku{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ZA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;El.subVectors(e,this.center);const t=El.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(El,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(El.copy(e.center).add(Ad)),this.expandByPoint(El.copy(e.center).sub(Ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let JA=0;const Ni=new Ht,Cd=new hn,ra=new D,di=new Ou,Tl=new Ou,_n=new D;class $t extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gA(e)?MM:SM)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,i){return Ni.makeTranslation(e,t,i),this.applyMatrix4(Ni),this}scale(e,t,i){return Ni.makeScale(e,t,i),this.applyMatrix4(Ni),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ou);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ku);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Tl.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(di.min,Tl.min),di.expandByPoint(_n),_n.addVectors(di.max,Tl.max),di.expandByPoint(_n)):(di.expandByPoint(Tl.min),di.expandByPoint(Tl.max))}di.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_n.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_n));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)_n.fromBufferAttribute(a,u),l&&(ra.fromBufferAttribute(e,u),_n.add(ra)),r=Math.max(r,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new D,l[y]=new D;const u=new D,c=new D,h=new D,f=new Ae,p=new Ae,g=new Ae,v=new D,_=new D;function d(y,A,b){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,b),c.sub(u),h.sub(u),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),_.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),a[y].add(v),a[A].add(v),a[b].add(v),l[y].add(_),l[A].add(_),l[b].add(_))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let y=0,A=m.length;y<A;++y){const b=m[y],P=b.start,I=b.count;for(let G=P,X=P+I;G<X;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const x=new D,S=new D,T=new D,M=new D;function w(y){T.fromBufferAttribute(r,y),M.copy(T);const A=a[y];x.copy(A),x.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(M,A);const P=S.dot(l[y])<0?-1:1;o.setXYZW(y,x.x,x.y,x.z,P)}for(let y=0,A=m.length;y<A;++y){const b=m[y],P=b.start,I=b.count;for(let G=P,X=P+I;G<X;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,c=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new Mi(f,c,h)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let QA=0;class sl extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Da,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qp,this.blendDst=jp,this.blendEquation=ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Da&&(i.blending=this.blending),this.side!==Bs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qp&&(i.blendSrc=this.blendSrc),this.blendDst!==jp&&(i.blendDst=this.blendDst),this.blendEquation!==ho&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ir=new D,Rd=new D,Ec=new D,ds=new D,bd=new D,Tc=new D,Pd=new D;class lg{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Rd.copy(e).add(t).multiplyScalar(.5),Ec.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(Rd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ec),a=ds.dot(this.direction),l=-ds.dot(Ec),u=ds.lengthSq(),c=Math.abs(1-o*o);let h,f,p,g;if(c>0)if(h=o*l-a,f=o*a-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const v=1/c;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Rd).addScaledVector(Ec,f),p}intersectSphere(e,t){Ir.subVectors(e.center,this.origin);const i=Ir.dot(this.direction),r=Ir.dot(Ir)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,i,r,s){bd.subVectors(t,e),Tc.subVectors(i,e),Pd.crossVectors(bd,Tc);let o=this.direction.dot(Pd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ds.subVectors(this.origin,e);const l=a*this.direction.dot(Tc.crossVectors(ds,Tc));if(l<0)return null;const u=a*this.direction.dot(bd.cross(ds));if(u<0||l+u>o)return null;const c=-a*ds.dot(Pd);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt extends sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Io,this.combine=tM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nv=new Ht,io=new lg,wc=new ku,Iv=new D,Ac=new D,Cc=new D,Rc=new D,Ld=new D,bc=new D,Uv=new D,Pc=new D;class _t extends hn{constructor(e=new $t,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Ld.fromBufferAttribute(h,e),o?bc.addScaledVector(Ld,c):bc.addScaledVector(Ld.sub(t),c))}t.add(bc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(s),io.copy(e.ray).recast(e.near),!(wc.containsPoint(io.origin)===!1&&(io.intersectSphere(wc,Iv)===null||io.origin.distanceToSquared(Iv)>(e.far-e.near)**2))&&(Nv.copy(s).invert(),io.copy(e.ray).applyMatrix4(Nv),!(i.boundingBox!==null&&io.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,io)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const _=f[g],d=o[_.materialIndex],m=Math.max(_.start,p.start),x=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let S=m,T=x;S<T;S+=3){const M=a.getX(S),w=a.getX(S+1),y=a.getX(S+2);r=Lc(this,d,e,i,u,c,h,M,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let _=g,d=v;_<d;_+=3){const m=a.getX(_),x=a.getX(_+1),S=a.getX(_+2);r=Lc(this,o,e,i,u,c,h,m,x,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const _=f[g],d=o[_.materialIndex],m=Math.max(_.start,p.start),x=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=m,T=x;S<T;S+=3){const M=S,w=S+1,y=S+2;r=Lc(this,d,e,i,u,c,h,M,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let _=g,d=v;_<d;_+=3){const m=_,x=_+1,S=_+2;r=Lc(this,o,e,i,u,c,h,m,x,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function eC(n,e,t,i,r,s,o,a){let l;if(e.side===ii?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Bs,a),l===null)return null;Pc.copy(a),Pc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Pc);return u<t.near||u>t.far?null:{distance:u,point:Pc.clone(),object:n}}function Lc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ac),n.getVertexPosition(l,Cc),n.getVertexPosition(u,Rc);const c=eC(n,e,t,i,Ac,Cc,Rc,Uv);if(c){const h=new D;Bi.getBarycoord(Uv,Ac,Cc,Rc,h),r&&(c.uv=Bi.getInterpolatedAttribute(r,a,l,u,h,new Ae)),s&&(c.uv1=Bi.getInterpolatedAttribute(s,a,l,u,h,new Ae)),o&&(c.normal=Bi.getInterpolatedAttribute(o,a,l,u,h,new D),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new D,materialIndex:0};Bi.getNormal(Ac,Cc,Rc,f.normal),c.face=f,c.barycoord=h}return c}class tC extends zn{constructor(e=null,t=1,i=1,r,s,o,a,l,u=An,c=An,h,f){super(null,o,a,l,u,c,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dd=new D,nC=new D,iC=new tt;class co{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Dd.subVectors(i,t).cross(nC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Dd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||iC.getNormalMatrix(e),r=this.coplanarPoint(Dd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new ku,rC=new Ae(.5,.5),Dc=new D;class ug{constructor(e=new co,t=new co,i=new co,r=new co,s=new co,o=new co){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],h=s[5],f=s[6],p=s[7],g=s[8],v=s[9],_=s[10],d=s[11],m=s[12],x=s[13],S=s[14],T=s[15];if(r[0].setComponents(u-o,p-c,d-g,T-m).normalize(),r[1].setComponents(u+o,p+c,d+g,T+m).normalize(),r[2].setComponents(u+a,p+h,d+v,T+x).normalize(),r[3].setComponents(u-a,p-h,d-v,T-x).normalize(),i)r[4].setComponents(l,f,_,S).normalize(),r[5].setComponents(u-l,p-f,d-_,T-S).normalize();else if(r[4].setComponents(u-l,p-f,d-_,T-S).normalize(),t===xr)r[5].setComponents(u+l,p+f,d+_,T+S).normalize();else if(t===xu)r[5].setComponents(l,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ro.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(e){ro.center.set(0,0,0);const t=rC.distanceTo(e.center);return ro.radius=.7071067811865476+t,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Dc.x=r.normal.x>0?e.max.x:e.min.x,Dc.y=r.normal.y>0?e.max.y:e.min.y,Dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dr extends sl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xf=new D,Yf=new D,Fv=new Ht,wl=new lg,Nc=new ku,Nd=new D,Ov=new D;class EM extends hn{constructor(e=new $t,t=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Xf.fromBufferAttribute(t,r-1),Yf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Xf.distanceTo(Yf);e.setAttribute("lineDistance",new Et(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(r),Nc.radius+=s,e.ray.intersectsSphere(Nc)===!1)return;Fv.copy(r).invert(),wl.copy(e.ray).applyMatrix4(Fv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let v=p,_=g-1;v<_;v+=u){const d=c.getX(v),m=c.getX(v+1),x=Ic(this,e,wl,l,d,m,v);x&&t.push(x)}if(this.isLineLoop){const v=c.getX(g-1),_=c.getX(p),d=Ic(this,e,wl,l,v,_,g-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,_=g-1;v<_;v+=u){const d=Ic(this,e,wl,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=Ic(this,e,wl,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ic(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Xf.fromBufferAttribute(a,r),Yf.fromBufferAttribute(a,s),t.distanceSqToSegment(Xf,Yf,Nd,Ov)>i)return;Nd.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Nd);if(!(u<e.near||u>e.far))return{distance:u,point:Ov.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const kv=new D,Bv=new D;class ms extends EM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)kv.fromBufferAttribute(t,r),Bv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+kv.distanceTo(Bv);e.setAttribute("lineDistance",new Et(i,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ff extends sl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zv=new Ht,Um=new lg,Uc=new ku,Fc=new D;class Id extends hn{constructor(e=new $t,t=new ff){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(r),Uc.radius+=s,e.ray.intersectsSphere(Uc)===!1)return;zv.copy(r).invert(),Um.copy(e.ray).applyMatrix4(zv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,v=p;g<v;g++){const _=u.getX(g);Fc.fromBufferAttribute(h,_),Vv(Fc,_,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,v=p;g<v;g++)Fc.fromBufferAttribute(h,g),Vv(Fc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vv(n,e,t,i,r,s,o){const a=Um.distanceSqToPoint(n);if(a<t){const l=new D;Um.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class TM extends zn{constructor(e=[],t=Do,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sC extends zn{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qa extends zn{constructor(e,t,i=wr,r,s,o,a=An,l=An,u,c=Zr,h=1){if(c!==Zr&&c!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new og(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class oC extends qa{constructor(e,t=wr,i=Do,r,s,o=An,a=An,l,u=Zr){const c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,s,o,a,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wM extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fn extends $t{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2));function g(v,_,d,m,x,S,T,M,w,y,A){const b=S/w,P=T/y,I=S/2,G=T/2,X=M/2,N=w+1,B=y+1;let O=0,U=0;const V=new D;for(let j=0;j<B;j++){const $=j*P-G;for(let K=0;K<N;K++){const Ge=K*b-I;V[v]=Ge*m,V[_]=$*x,V[d]=X,u.push(V.x,V.y,V.z),V[v]=0,V[_]=0,V[d]=M>0?1:-1,c.push(V.x,V.y,V.z),h.push(K/w),h.push(1-j/y),O+=1}}for(let j=0;j<y;j++)for(let $=0;$<w;$++){const K=f+$+N*j,Ge=f+$+N*(j+1),He=f+($+1)+N*(j+1),ke=f+($+1)+N*j;l.push(K,Ge,ke),l.push(Ge,He,ke),U+=6}a.addGroup(p,U,A),p+=U,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wn extends $t{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],f=[],p=[];let g=0;const v=[],_=i/2;let d=0;m(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(p,2));function m(){const S=new D,T=new D;let M=0;const w=(t-e)/i;for(let y=0;y<=s;y++){const A=[],b=y/s,P=b*(t-e)+e;for(let I=0;I<=r;I++){const G=I/r,X=G*l+a,N=Math.sin(X),B=Math.cos(X);T.x=P*N,T.y=-b*i+_,T.z=P*B,h.push(T.x,T.y,T.z),S.set(N,w,B).normalize(),f.push(S.x,S.y,S.z),p.push(G,1-b),A.push(g++)}v.push(A)}for(let y=0;y<r;y++)for(let A=0;A<s;A++){const b=v[A][y],P=v[A+1][y],I=v[A+1][y+1],G=v[A][y+1];(e>0||A!==0)&&(c.push(b,P,G),M+=3),(t>0||A!==s-1)&&(c.push(P,I,G),M+=3)}u.addGroup(d,M,0),d+=M}function x(S){const T=g,M=new Ae,w=new D;let y=0;const A=S===!0?e:t,b=S===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,_*b,0),f.push(0,b,0),p.push(.5,.5),g++;const P=g;for(let I=0;I<=r;I++){const X=I/r*l+a,N=Math.cos(X),B=Math.sin(X);w.x=A*B,w.y=_*b,w.z=A*N,h.push(w.x,w.y,w.z),f.push(0,b,0),M.x=N*.5+.5,M.y=B*.5*b+.5,p.push(M.x,M.y),g++}for(let I=0;I<r;I++){const G=T+I,X=P+I;S===!0?c.push(X,X+1,G):c.push(X+1,X,G),y+=3}u.addGroup(d,y,S===!0?1:2),d+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xh extends $t{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(s.slice(),3)),this.setAttribute("uv",new Et(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const x=new D,S=new D,T=new D;for(let M=0;M<t.length;M+=3)p(t[M+0],x),p(t[M+1],S),p(t[M+2],T),l(x,S,T,m)}function l(m,x,S,T){const M=T+1,w=[];for(let y=0;y<=M;y++){w[y]=[];const A=m.clone().lerp(S,y/M),b=x.clone().lerp(S,y/M),P=M-y;for(let I=0;I<=P;I++)I===0&&y===M?w[y][I]=A:w[y][I]=A.clone().lerp(b,I/P)}for(let y=0;y<M;y++)for(let A=0;A<2*(M-y)-1;A++){const b=Math.floor(A/2);A%2===0?(f(w[y][b+1]),f(w[y+1][b]),f(w[y][b])):(f(w[y][b+1]),f(w[y+1][b+1]),f(w[y+1][b]))}}function u(m){const x=new D;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(m),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function c(){const m=new D;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];const S=_(m)/2/Math.PI+.5,T=d(m)/Math.PI+.5;o.push(S,1-T)}g(),h()}function h(){for(let m=0;m<o.length;m+=6){const x=o[m+0],S=o[m+2],T=o[m+4],M=Math.max(x,S,T),w=Math.min(x,S,T);M>.9&&w<.1&&(x<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),T<.2&&(o[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function p(m,x){const S=m*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){const m=new D,x=new D,S=new D,T=new D,M=new Ae,w=new Ae,y=new Ae;for(let A=0,b=0;A<s.length;A+=9,b+=6){m.set(s[A+0],s[A+1],s[A+2]),x.set(s[A+3],s[A+4],s[A+5]),S.set(s[A+6],s[A+7],s[A+8]),M.set(o[b+0],o[b+1]),w.set(o[b+2],o[b+3]),y.set(o[b+4],o[b+5]),T.copy(m).add(x).add(S).divideScalar(3);const P=_(T);v(M,b+0,m,P),v(w,b+2,x,P),v(y,b+4,S,P)}}function v(m,x,S,T){T<0&&m.x===1&&(o[x]=m.x-1),S.x===0&&S.z===0&&(o[x]=T/2/Math.PI+.5)}function _(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.vertices,e.indices,e.radius,e.detail)}}const Oc=new D,kc=new D,Ud=new D,Bc=new Bi;class so extends $t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Na*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],c=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(u[0]=o.getX(g),u[1]=o.getX(g+1),u[2]=o.getX(g+2)):(u[0]=g,u[1]=g+1,u[2]=g+2);const{a:v,b:_,c:d}=Bc;if(v.fromBufferAttribute(a,u[0]),_.fromBufferAttribute(a,u[1]),d.fromBufferAttribute(a,u[2]),Bc.getNormal(Ud),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){const x=(m+1)%3,S=h[m],T=h[x],M=Bc[c[m]],w=Bc[c[x]],y=`${S}_${T}`,A=`${T}_${S}`;A in f&&f[A]?(Ud.dot(f[A].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(w.x,w.y,w.z)),f[A]=null):y in f||(f[y]={index0:u[m],index1:u[x],normal:Ud.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:_}=f[g];Oc.fromBufferAttribute(a,v),kc.fromBufferAttribute(a,_),p.push(Oc.x,Oc.y,Oc.z),p.push(kc.x,kc.y,kc.z)}this.setAttribute("position",new Et(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],f=i[r+1]-c,p=(o-c)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ae:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new D,r=[],s=[],o=[],a=new D,l=new Ht;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ot(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ot(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cg extends Rr{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=u-this.aY;l=f*c-p*h+this.aX,u=f*h+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class aC extends cg{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fg(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,h){let f=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+h)+(l-a)/h;f*=c,p*=c,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Gv=new D,Hv=new D,Fd=new fg,Od=new fg,kd=new fg;class lC extends Rr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Hv.subVectors(r[0],r[1]).add(r[0]),u=Hv);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Gv.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Gv),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(c),p);v<1e-4&&(v=1),g<1e-4&&(g=v),_<1e-4&&(_=v),Fd.initNonuniformCatmullRom(u.x,h.x,f.x,c.x,g,v,_),Od.initNonuniformCatmullRom(u.y,h.y,f.y,c.y,g,v,_),kd.initNonuniformCatmullRom(u.z,h.z,f.z,c.z,g,v,_)}else this.curveType==="catmullrom"&&(Fd.initCatmullRom(u.x,h.x,f.x,c.x,this.tension),Od.initCatmullRom(u.y,h.y,f.y,c.y,this.tension),kd.initCatmullRom(u.z,h.z,f.z,c.z,this.tension));return i.set(Fd.calc(l),Od.calc(l),kd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wv(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function uC(n,e){const t=1-n;return t*t*e}function cC(n,e){return 2*(1-n)*n*e}function fC(n,e){return n*n*e}function $l(n,e,t,i){return uC(n,e)+cC(n,t)+fC(n,i)}function hC(n,e){const t=1-n;return t*t*t*e}function dC(n,e){const t=1-n;return 3*t*t*n*e}function pC(n,e){return 3*(1-n)*n*n*e}function mC(n,e){return n*n*n*e}function Kl(n,e,t,i,r){return hC(n,e)+dC(n,t)+pC(n,i)+mC(n,r)}class AM extends Rr{constructor(e=new Ae,t=new Ae,i=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ae){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Kl(e,r.x,s.x,o.x,a.x),Kl(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gC extends Rr{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Kl(e,r.x,s.x,o.x,a.x),Kl(e,r.y,s.y,o.y,a.y),Kl(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CM extends Rr{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _C extends Rr{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class RM extends Rr{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set($l(e,r.x,s.x,o.x),$l(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vC extends Rr{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set($l(e,r.x,s.x,o.x),$l(e,r.y,s.y,o.y),$l(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bM extends Rr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Wv(a,l.x,u.x,c.x,h.x),Wv(a,l.y,u.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ae().fromArray(r))}return this}}var Fm=Object.freeze({__proto__:null,ArcCurve:aC,CatmullRomCurve3:lC,CubicBezierCurve:AM,CubicBezierCurve3:gC,EllipseCurve:cg,LineCurve:CM,LineCurve3:_C,QuadraticBezierCurve:RM,QuadraticBezierCurve3:vC,SplineCurve:bM});class xC extends Rr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fm[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Fm[r.type]().fromJSON(r))}return this}}class Xv extends xC{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new CM(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new RM(this.currentPoint.clone(),new Ae(e,t),new Ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new AM(this.currentPoint.clone(),new Ae(e,t),new Ae(i,r),new Ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new bM(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new cg(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Om extends Xv{constructor(e){super(e),this.uuid=Bo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Xv().fromJSON(r))}return this}}function yC(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=PM(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(i&&(s=wC(n,e,s,t)),n.length>80*t){a=n[0],l=n[1];let c=a,h=l;for(let f=t;f<r;f+=t){const p=n[f],g=n[f+1];p<a&&(a=p),g<l&&(l=g),p>c&&(c=p),g>h&&(h=g)}u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Su(s,o,t,a,l,u,0),o}function PM(n,e,t,i,r){let s;if(r===FC(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Yv(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Yv(o/i|0,n[o],n[o+1],s);return s&&ja(s,s.next)&&(Eu(s),s=s.next),s}function Uo(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ja(t,t.next)||qt(t.prev,t,t.next)===0)){if(Eu(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Su(n,e,t,i,r,s,o){if(!n)return;!o&&s&&PC(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,u=n.next;if(s?MC(n,i,r,s):SC(n)){e.push(l.i,n.i,u.i),Eu(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=EC(Uo(n),e),Su(n,e,t,i,r,s,2)):o===2&&TC(n,e,t,i,r,s):Su(Uo(n),e,t,i,r,s,1);break}}}function SC(n){const e=n.prev,t=n,i=n.next;if(qt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=Math.min(r,s,o),h=Math.min(a,l,u),f=Math.max(r,s,o),p=Math.max(a,l,u);let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=f&&g.y>=h&&g.y<=p&&Il(r,a,s,l,o,u,g.x,g.y)&&qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function MC(n,e,t,i){const r=n.prev,s=n,o=n.next;if(qt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,h=s.y,f=o.y,p=Math.min(a,l,u),g=Math.min(c,h,f),v=Math.max(a,l,u),_=Math.max(c,h,f),d=km(p,g,e,t,i),m=km(v,_,e,t,i);let x=n.prevZ,S=n.nextZ;for(;x&&x.z>=d&&S&&S.z<=m;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=_&&x!==r&&x!==o&&Il(a,c,l,h,u,f,x.x,x.y)&&qt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=v&&S.y>=g&&S.y<=_&&S!==r&&S!==o&&Il(a,c,l,h,u,f,S.x,S.y)&&qt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=_&&x!==r&&x!==o&&Il(a,c,l,h,u,f,x.x,x.y)&&qt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=m;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=_&&S!==r&&S!==o&&Il(a,c,l,h,u,f,S.x,S.y)&&qt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function EC(n,e){let t=n;do{const i=t.prev,r=t.next.next;!ja(i,r)&&DM(i,t,t.next,r)&&Mu(i,r)&&Mu(r,i)&&(e.push(i.i,t.i,r.i),Eu(t),Eu(t.next),t=n=r),t=t.next}while(t!==n);return Uo(t)}function TC(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&NC(o,a)){let l=NM(o,a);o=Uo(o,o.next),l=Uo(l,l.next),Su(o,e,t,i,r,s,0),Su(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function wC(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=PM(n,a,l,i,!1);u===u.next&&(u.steiner=!0),r.push(DC(u))}r.sort(AC);for(let s=0;s<r.length;s++)t=CC(r[s],t);return t}function AC(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function CC(n,e){const t=RC(n,e);if(!t)return e;const i=NM(t,n);return Uo(i,i.next),Uo(t,t.next)}function RC(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(ja(n,t))return t;do{if(ja(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,u=o.y;let c=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&LM(r<u?i:s,r,l,u,r<u?s:i,r,t.x,t.y)){const h=Math.abs(r-t.y)/(i-t.x);Mu(t,n)&&(h<c||h===c&&(t.x>o.x||t.x===o.x&&bC(o,t)))&&(o=t,c=h)}t=t.next}while(t!==a);return o}function bC(n,e){return qt(n.prev,n,e.prev)<0&&qt(e.next,n,n.next)<0}function PC(n,e,t,i){let r=n;do r.z===0&&(r.z=km(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,LC(r)}function LC(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function km(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function DC(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function LM(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Il(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&LM(n,e,t,i,r,s,o,a)}function NC(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!IC(n,e)&&(Mu(n,e)&&Mu(e,n)&&UC(n,e)&&(qt(n.prev,n,e.prev)||qt(n,e.prev,e))||ja(n,e)&&qt(n.prev,n,n.next)>0&&qt(e.prev,e,e.next)>0)}function qt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ja(n,e){return n.x===e.x&&n.y===e.y}function DM(n,e,t,i){const r=Vc(qt(n,e,t)),s=Vc(qt(n,e,i)),o=Vc(qt(t,i,n)),a=Vc(qt(t,i,e));return!!(r!==s&&o!==a||r===0&&zc(n,t,e)||s===0&&zc(n,i,e)||o===0&&zc(t,n,i)||a===0&&zc(t,e,i))}function zc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Vc(n){return n>0?1:n<0?-1:0}function IC(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&DM(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Mu(n,e){return qt(n.prev,n,n.next)<0?qt(n,e,n.next)>=0&&qt(n,n.prev,e)>=0:qt(n,e,n.prev)<0||qt(n,n.next,e)<0}function UC(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function NM(n,e){const t=Bm(n.i,n.x,n.y),i=Bm(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Yv(n,e,t,i){const r=Bm(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Eu(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bm(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function FC(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class OC{static triangulate(e,t,i=2){return yC(e,t,i)}}class Ma{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ma.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];qv(e),jv(i,e);let o=e.length;t.forEach(qv);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,jv(i,t[l]);const a=OC.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function qv(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function jv(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class qf extends $t{constructor(e=new Om([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Et(r,3)),this.setAttribute("uv",new Et(s,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:kC;let x,S=!1,T,M,w,y;if(d){x=d.getSpacedPoints(c),S=!0,f=!1;const re=d.isCatmullRomCurve3?d.closed:!1;T=d.computeFrenetFrames(c,re),M=new D,w=new D,y=new D}f||(_=0,p=0,g=0,v=0);const A=a.extractPoints(u);let b=A.shape;const P=A.holes;if(!Ma.isClockWise(b)){b=b.reverse();for(let re=0,ce=P.length;re<ce;re++){const se=P[re];Ma.isClockWise(se)&&(P[re]=se.reverse())}}function G(re){const se=10000000000000001e-36;let Me=re[0];for(let ye=1;ye<=re.length;ye++){const Ke=ye%re.length,L=re[Ke],Ze=L.x-Me.x,De=L.y-Me.y,We=Ze*Ze+De*De,ue=Math.max(Math.abs(L.x),Math.abs(L.y),Math.abs(Me.x),Math.abs(Me.y)),mt=se*ue*ue;if(We<=mt){re.splice(Ke,1),ye--;continue}Me=L}}G(b),P.forEach(G);const X=P.length,N=b;for(let re=0;re<X;re++){const ce=P[re];b=b.concat(ce)}function B(re,ce,se){return ce||gt("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ce,se)}const O=b.length;function U(re,ce,se){let Me,ye,Ke;const L=re.x-ce.x,Ze=re.y-ce.y,De=se.x-re.x,We=se.y-re.y,ue=L*L+Ze*Ze,mt=L*We-Ze*De;if(Math.abs(mt)>Number.EPSILON){const R=Math.sqrt(ue),E=Math.sqrt(De*De+We*We),z=ce.x-Ze/R,Q=ce.y+L/R,oe=se.x-We/E,he=se.y+De/E,pe=((oe-z)*We-(he-Q)*De)/(L*We-Ze*De);Me=z+L*pe-re.x,ye=Q+Ze*pe-re.y;const q=Me*Me+ye*ye;if(q<=2)return new Ae(Me,ye);Ke=Math.sqrt(q/2)}else{let R=!1;L>Number.EPSILON?De>Number.EPSILON&&(R=!0):L<-Number.EPSILON?De<-Number.EPSILON&&(R=!0):Math.sign(Ze)===Math.sign(We)&&(R=!0),R?(Me=-Ze,ye=L,Ke=Math.sqrt(ue)):(Me=L,ye=Ze,Ke=Math.sqrt(ue/2))}return new Ae(Me/Ke,ye/Ke)}const V=[];for(let re=0,ce=N.length,se=ce-1,Me=re+1;re<ce;re++,se++,Me++)se===ce&&(se=0),Me===ce&&(Me=0),V[re]=U(N[re],N[se],N[Me]);const j=[];let $,K=V.concat();for(let re=0,ce=X;re<ce;re++){const se=P[re];$=[];for(let Me=0,ye=se.length,Ke=ye-1,L=Me+1;Me<ye;Me++,Ke++,L++)Ke===ye&&(Ke=0),L===ye&&(L=0),$[Me]=U(se[Me],se[Ke],se[L]);j.push($),K=K.concat($)}let Ge;if(_===0)Ge=Ma.triangulateShape(N,P);else{const re=[],ce=[];for(let se=0;se<_;se++){const Me=se/_,ye=p*Math.cos(Me*Math.PI/2),Ke=g*Math.sin(Me*Math.PI/2)+v;for(let L=0,Ze=N.length;L<Ze;L++){const De=B(N[L],V[L],Ke);Fe(De.x,De.y,-ye),Me===0&&re.push(De)}for(let L=0,Ze=X;L<Ze;L++){const De=P[L];$=j[L];const We=[];for(let ue=0,mt=De.length;ue<mt;ue++){const R=B(De[ue],$[ue],Ke);Fe(R.x,R.y,-ye),Me===0&&We.push(R)}Me===0&&ce.push(We)}}Ge=Ma.triangulateShape(re,ce)}const He=Ge.length,ke=g+v;for(let re=0;re<O;re++){const ce=f?B(b[re],K[re],ke):b[re];S?(w.copy(T.normals[0]).multiplyScalar(ce.x),M.copy(T.binormals[0]).multiplyScalar(ce.y),y.copy(x[0]).add(w).add(M),Fe(y.x,y.y,y.z)):Fe(ce.x,ce.y,0)}for(let re=1;re<=c;re++)for(let ce=0;ce<O;ce++){const se=f?B(b[ce],K[ce],ke):b[ce];S?(w.copy(T.normals[re]).multiplyScalar(se.x),M.copy(T.binormals[re]).multiplyScalar(se.y),y.copy(x[re]).add(w).add(M),Fe(y.x,y.y,y.z)):Fe(se.x,se.y,h/c*re)}for(let re=_-1;re>=0;re--){const ce=re/_,se=p*Math.cos(ce*Math.PI/2),Me=g*Math.sin(ce*Math.PI/2)+v;for(let ye=0,Ke=N.length;ye<Ke;ye++){const L=B(N[ye],V[ye],Me);Fe(L.x,L.y,h+se)}for(let ye=0,Ke=P.length;ye<Ke;ye++){const L=P[ye];$=j[ye];for(let Ze=0,De=L.length;Ze<De;Ze++){const We=B(L[Ze],$[Ze],Me);S?Fe(We.x,We.y+x[c-1].y,x[c-1].x+se):Fe(We.x,We.y,h+se)}}}Z(),xe();function Z(){const re=r.length/3;if(f){let ce=0,se=O*ce;for(let Me=0;Me<He;Me++){const ye=Ge[Me];Ye(ye[2]+se,ye[1]+se,ye[0]+se)}ce=c+_*2,se=O*ce;for(let Me=0;Me<He;Me++){const ye=Ge[Me];Ye(ye[0]+se,ye[1]+se,ye[2]+se)}}else{for(let ce=0;ce<He;ce++){const se=Ge[ce];Ye(se[2],se[1],se[0])}for(let ce=0;ce<He;ce++){const se=Ge[ce];Ye(se[0]+O*c,se[1]+O*c,se[2]+O*c)}}i.addGroup(re,r.length/3-re,0)}function xe(){const re=r.length/3;let ce=0;ge(N,ce),ce+=N.length;for(let se=0,Me=P.length;se<Me;se++){const ye=P[se];ge(ye,ce),ce+=ye.length}i.addGroup(re,r.length/3-re,1)}function ge(re,ce){let se=re.length;for(;--se>=0;){const Me=se;let ye=se-1;ye<0&&(ye=re.length-1);for(let Ke=0,L=c+_*2;Ke<L;Ke++){const Ze=O*Ke,De=O*(Ke+1),We=ce+Me+Ze,ue=ce+ye+Ze,mt=ce+ye+De,R=ce+Me+De;Xe(We,ue,mt,R)}}}function Fe(re,ce,se){l.push(re),l.push(ce),l.push(se)}function Ye(re,ce,se){ht(re),ht(ce),ht(se);const Me=r.length/3,ye=m.generateTopUV(i,r,Me-3,Me-2,Me-1);$e(ye[0]),$e(ye[1]),$e(ye[2])}function Xe(re,ce,se,Me){ht(re),ht(ce),ht(Me),ht(ce),ht(se),ht(Me);const ye=r.length/3,Ke=m.generateSideWallUV(i,r,ye-6,ye-3,ye-2,ye-1);$e(Ke[0]),$e(Ke[1]),$e(Ke[3]),$e(Ke[1]),$e(Ke[2]),$e(Ke[3])}function ht(re){r.push(l[re*3+0]),r.push(l[re*3+1]),r.push(l[re*3+2])}function $e(re){s.push(re.x),s.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return BC(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Fm[r.type]().fromJSON(r)),new qf(i,e.options)}}const kC={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new Ae(s,o),new Ae(a,l),new Ae(u,c)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],h=e[i*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[s*3],_=e[s*3+1],d=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new Ae(o,1-l),new Ae(u,1-h),new Ae(f,1-g),new Ae(v,1-d)]:[new Ae(a,1-l),new Ae(c,1-h),new Ae(p,1-g),new Ae(_,1-d)]}};function BC(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class hg extends xh{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hg(e.radius,e.detail)}}class dg extends xh{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dg(e.radius,e.detail)}}class Bu extends $t{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=t/l,p=[],g=[],v=[],_=[];for(let d=0;d<c;d++){const m=d*f-o;for(let x=0;x<u;x++){const S=x*h-s;g.push(S,-m,0),v.push(0,0,1),_.push(x/a),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){const x=m+u*d,S=m+u*(d+1),T=m+1+u*(d+1),M=m+1+u*d;p.push(x,S,M),p.push(S,T,M)}this.setIndex(p),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ea extends $t{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new D,f=new D,p=[],g=[],v=[],_=[];for(let d=0;d<=i;d++){const m=[],x=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const M=T/t;h.x=-e*Math.cos(r+M*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+M*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),_.push(M+S,1-x),m.push(u++)}c.push(m)}for(let d=0;d<i;d++)for(let m=0;m<t;m++){const x=c[d][m+1],S=c[d][m],T=c[d+1][m],M=c[d+1][m+1];(d!==0||o>0)&&p.push(x,S,M),(d!==i-1||l<Math.PI)&&p.push(S,T,M)}this.setIndex(p),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pg extends $t{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],u=[],c=[],h=[],f=new D,p=new D,g=new D;for(let v=0;v<=i;v++){const _=o+v/i*a;for(let d=0;d<=r;d++){const m=d/r*s;p.x=(e+t*Math.cos(_))*Math.cos(m),p.y=(e+t*Math.cos(_))*Math.sin(m),p.z=t*Math.sin(_),u.push(p.x,p.y,p.z),f.x=e*Math.cos(m),f.y=e*Math.sin(m),g.subVectors(p,f).normalize(),c.push(g.x,g.y,g.z),h.push(d/r),h.push(v/i)}}for(let v=1;v<=i;v++)for(let _=1;_<=r;_++){const d=(r+1)*v+_-1,m=(r+1)*(v-1)+_-1,x=(r+1)*(v-1)+_,S=(r+1)*v+_;l.push(d,m,S),l.push(m,x,S)}this.setIndex(l),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pg(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mg extends $t{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],u=[],c=[],h=new D,f=new D,p=new D,g=new D,v=new D,_=new D,d=new D;for(let x=0;x<=i;++x){const S=x/i*s*Math.PI*2;m(S,s,o,e,p),m(S+.01,s,o,e,g),_.subVectors(g,p),d.addVectors(g,p),v.crossVectors(_,d),d.crossVectors(v,_),v.normalize(),d.normalize();for(let T=0;T<=r;++T){const M=T/r*Math.PI*2,w=-t*Math.cos(M),y=t*Math.sin(M);h.x=p.x+(w*d.x+y*v.x),h.y=p.y+(w*d.y+y*v.y),h.z=p.z+(w*d.z+y*v.z),l.push(h.x,h.y,h.z),f.subVectors(h,p).normalize(),u.push(f.x,f.y,f.z),c.push(x/i),c.push(T/r)}}for(let x=1;x<=i;x++)for(let S=1;S<=r;S++){const T=(r+1)*(x-1)+(S-1),M=(r+1)*x+(S-1),w=(r+1)*x+S,y=(r+1)*(x-1)+S;a.push(T,M,y),a.push(M,w,y)}this.setIndex(a),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(c,2));function m(x,S,T,M,w){const y=Math.cos(x),A=Math.sin(x),b=T/S*x,P=Math.cos(b);w.x=M*(2+P)*.5*y,w.y=M*(2+P)*A*.5,w.z=M*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mg(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function $a(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if($v(r))r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if($v(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Xn(n){const e={};for(let t=0;t<n.length;t++){const i=$a(n[t]);for(const r in i)e[r]=i[r]}return e}function $v(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function zC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function IM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const VC={clone:$a,merge:Xn};var GC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GC,this.fragmentShader=HC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$a(e.uniforms),this.uniformsGroups=zC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class WC extends Ar{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class XC extends sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YC extends sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class UM extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Bd=new Ht,Kv=new D,Zv=new D;class qC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ug,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kv),Zv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zv),t.updateMatrixWorld(),Bd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===xu||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gc=new D,Hc=new rl,cr=new D;class FM extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=xr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gc,Hc,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Hc,cr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Gc,Hc,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Hc,cr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ps=new D,Jv=new Ae,Qv=new Ae;class ki extends FM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yu*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,Jv,Qv),t.subVectors(Qv,Jv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Na*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class gg extends FM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jC extends qC{constructor(){super(new gg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $C extends UM{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new jC}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class KC extends UM{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const sa=-90,oa=1;class ZC extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ki(sa,oa,e,t);r.layers=this.layers,this.add(r);const s=new ki(sa,oa,e,t);s.layers=this.layers,this.add(s);const o=new ki(sa,oa,e,t);o.layers=this.layers,this.add(o);const a=new ki(sa,oa,e,t);a.layers=this.layers,this.add(a);const l=new ki(sa,oa,e,t);l.layers=this.layers,this.add(l);const u=new ki(sa,oa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===xr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class JC extends ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Bg=class Bg{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Bg.prototype.isMatrix2=!0;let ex=Bg;class QC extends ms{constructor(e=10,t=10,i=4473924,r=8947848){i=new rt(i),r=new rt(r);const s=t/2,o=e/t,a=e/2,l=[],u=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=f===s?i:r;v.toArray(u,p),p+=3,v.toArray(u,p),p+=3,v.toArray(u,p),p+=3,v.toArray(u,p),p+=3}const c=new $t;c.setAttribute("position",new Et(l,3)),c.setAttribute("color",new Et(u,3));const h=new dr({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function tx(n,e,t,i){const r=eR(i);switch(t){case pM:return n*e;case gM:return n*e/r.components*r.byteLength;case eg:return n*e/r.components*r.byteLength;case No:return n*e*2/r.components*r.byteLength;case tg:return n*e*2/r.components*r.byteLength;case mM:return n*e*3/r.components*r.byteLength;case er:return n*e*4/r.components*r.byteLength;case ng:return n*e*4/r.components*r.byteLength;case af:case lf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uf:case cf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sm:case am:return Math.max(n,16)*Math.max(e,8)/4;case rm:case om:return Math.max(n,8)*Math.max(e,8)/2;case lm:case um:case fm:case hm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cm:case zf:case dm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _m:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ym:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Em:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Am:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rm:case bm:case Pm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lm:case Dm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vf:case Nm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eR(n){switch(n){case gi:case cM:return{byteLength:1,components:1};case _u:case fM:case Kr:return{byteLength:2,components:1};case J0:case Q0:return{byteLength:2,components:4};case wr:case Z0:case vr:return{byteLength:4,components:1};case hM:case dM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:K0}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=K0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function OM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function tR(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var nR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iR=`#ifdef USE_ALPHAHASH
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
#endif`,rR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lR=`#ifdef USE_AOMAP
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
#endif`,uR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cR=`#ifdef USE_BATCHING
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
#endif`,fR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mR=`#ifdef USE_IRIDESCENCE
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
#endif`,gR=`#ifdef USE_BUMPMAP
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
#endif`,_R=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,MR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ER=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wR=`#define PI 3.141592653589793
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
} // validated`,AR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CR=`vec3 transformedNormal = objectNormal;
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
#endif`,RR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DR="gl_FragColor = linearToOutputTexel( gl_FragColor );",NR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IR=`#ifdef USE_ENVMAP
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
#endif`,UR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,FR=`#ifdef USE_ENVMAP
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
#endif`,OR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kR=`#ifdef USE_ENVMAP
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
#endif`,BR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HR=`#ifdef USE_GRADIENTMAP
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
}`,WR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jR=`#ifdef USE_ENVMAP
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
#endif`,$R=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QR=`PhysicalMaterial material;
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
#endif`,e2=`uniform sampler2D dfgLUT;
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
}`,t2=`
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
#endif`,n2=`#if defined( RE_IndirectDiffuse )
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
#endif`,i2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,s2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h2=`#if defined( USE_POINTS_UV )
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
#endif`,d2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v2=`#ifdef USE_MORPHTARGETS
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
#endif`,x2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w2=`#ifdef USE_NORMALMAP
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
#endif`,A2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V2=`float getShadowMask() {
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
}`,G2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H2=`#ifdef USE_SKINNING
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
#endif`,W2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X2=`#ifdef USE_SKINNING
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
#endif`,Y2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K2=`#ifdef USE_TRANSMISSION
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
#endif`,Z2=`#ifdef USE_TRANSMISSION
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
#endif`,J2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ib=`uniform sampler2D t2D;
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
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`#include <common>
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
}`,ub=`#if DEPTH_PACKING == 3200
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
}`,cb=`#define DISTANCE
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
}`,fb=`#define DISTANCE
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`uniform float scale;
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#include <common>
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
}`,_b=`uniform vec3 diffuse;
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
}`,vb=`#define LAMBERT
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
}`,xb=`#define LAMBERT
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
}`,yb=`#define MATCAP
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
}`,Sb=`#define MATCAP
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
}`,Mb=`#define NORMAL
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
}`,Eb=`#define NORMAL
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
}`,Tb=`#define PHONG
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
}`,wb=`#define PHONG
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
}`,Ab=`#define STANDARD
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
}`,Cb=`#define STANDARD
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
}`,Rb=`#define TOON
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
}`,bb=`#define TOON
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
}`,Pb=`uniform float size;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Db=`#include <common>
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
}`,Nb=`uniform vec3 color;
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
}`,Ib=`uniform float rotation;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:nR,alphahash_pars_fragment:iR,alphamap_fragment:rR,alphamap_pars_fragment:sR,alphatest_fragment:oR,alphatest_pars_fragment:aR,aomap_fragment:lR,aomap_pars_fragment:uR,batching_pars_vertex:cR,batching_vertex:fR,begin_vertex:hR,beginnormal_vertex:dR,bsdfs:pR,iridescence_fragment:mR,bumpmap_pars_fragment:gR,clipping_planes_fragment:_R,clipping_planes_pars_fragment:vR,clipping_planes_pars_vertex:xR,clipping_planes_vertex:yR,color_fragment:SR,color_pars_fragment:MR,color_pars_vertex:ER,color_vertex:TR,common:wR,cube_uv_reflection_fragment:AR,defaultnormal_vertex:CR,displacementmap_pars_vertex:RR,displacementmap_vertex:bR,emissivemap_fragment:PR,emissivemap_pars_fragment:LR,colorspace_fragment:DR,colorspace_pars_fragment:NR,envmap_fragment:IR,envmap_common_pars_fragment:UR,envmap_pars_fragment:FR,envmap_pars_vertex:OR,envmap_physical_pars_fragment:jR,envmap_vertex:kR,fog_vertex:BR,fog_pars_vertex:zR,fog_fragment:VR,fog_pars_fragment:GR,gradientmap_pars_fragment:HR,lightmap_pars_fragment:WR,lights_lambert_fragment:XR,lights_lambert_pars_fragment:YR,lights_pars_begin:qR,lights_toon_fragment:$R,lights_toon_pars_fragment:KR,lights_phong_fragment:ZR,lights_phong_pars_fragment:JR,lights_physical_fragment:QR,lights_physical_pars_fragment:e2,lights_fragment_begin:t2,lights_fragment_maps:n2,lights_fragment_end:i2,lightprobes_pars_fragment:r2,logdepthbuf_fragment:s2,logdepthbuf_pars_fragment:o2,logdepthbuf_pars_vertex:a2,logdepthbuf_vertex:l2,map_fragment:u2,map_pars_fragment:c2,map_particle_fragment:f2,map_particle_pars_fragment:h2,metalnessmap_fragment:d2,metalnessmap_pars_fragment:p2,morphinstance_vertex:m2,morphcolor_vertex:g2,morphnormal_vertex:_2,morphtarget_pars_vertex:v2,morphtarget_vertex:x2,normal_fragment_begin:y2,normal_fragment_maps:S2,normal_pars_fragment:M2,normal_pars_vertex:E2,normal_vertex:T2,normalmap_pars_fragment:w2,clearcoat_normal_fragment_begin:A2,clearcoat_normal_fragment_maps:C2,clearcoat_pars_fragment:R2,iridescence_pars_fragment:b2,opaque_fragment:P2,packing:L2,premultiplied_alpha_fragment:D2,project_vertex:N2,dithering_fragment:I2,dithering_pars_fragment:U2,roughnessmap_fragment:F2,roughnessmap_pars_fragment:O2,shadowmap_pars_fragment:k2,shadowmap_pars_vertex:B2,shadowmap_vertex:z2,shadowmask_pars_fragment:V2,skinbase_vertex:G2,skinning_pars_vertex:H2,skinning_vertex:W2,skinnormal_vertex:X2,specularmap_fragment:Y2,specularmap_pars_fragment:q2,tonemapping_fragment:j2,tonemapping_pars_fragment:$2,transmission_fragment:K2,transmission_pars_fragment:Z2,uv_pars_fragment:J2,uv_pars_vertex:Q2,uv_vertex:eb,worldpos_vertex:tb,background_vert:nb,background_frag:ib,backgroundCube_vert:rb,backgroundCube_frag:sb,cube_vert:ob,cube_frag:ab,depth_vert:lb,depth_frag:ub,distance_vert:cb,distance_frag:fb,equirect_vert:hb,equirect_frag:db,linedashed_vert:pb,linedashed_frag:mb,meshbasic_vert:gb,meshbasic_frag:_b,meshlambert_vert:vb,meshlambert_frag:xb,meshmatcap_vert:yb,meshmatcap_frag:Sb,meshnormal_vert:Mb,meshnormal_frag:Eb,meshphong_vert:Tb,meshphong_frag:wb,meshphysical_vert:Ab,meshphysical_frag:Cb,meshtoon_vert:Rb,meshtoon_frag:bb,points_vert:Pb,points_frag:Lb,shadow_vert:Db,shadow_frag:Nb,sprite_vert:Ib,sprite_frag:Ub},we={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},mr={basic:{uniforms:Xn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Xn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Xn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Xn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Xn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new rt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Xn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Xn([we.points,we.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Xn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Xn([we.common,we.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Xn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Xn([we.sprite,we.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Xn([we.common,we.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Xn([we.lights,we.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};mr.physical={uniforms:Xn([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Wc={r:0,b:0,g:0},Fb=new Ht,kM=new tt;kM.set(-1,0,0,0,1,0,0,0,1);function Ob(n,e,t,i,r,s){const o=new rt(0);let a=r===!0?0:1,l,u,c=null,h=0,f=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const S=m.backgroundBlurriness>0;x=e.get(x,S)}return x}function g(m){let x=!1;const S=p(m);S===null?_(o,a):S&&S.isColor&&(_(S,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(m,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===vh)?(u===void 0&&(u=new _t(new Fn(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:$a(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fb.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(kM),u.material.toneMapped=dt.getTransfer(S.colorSpace)!==wt,(c!==S||h!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=S,h=S.version,f=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new _t(new Bu(2,2),new Ar({name:"BackgroundMaterial",uniforms:$a(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=dt.getTransfer(S.colorSpace)!==wt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||h!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=S,h=S.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,x){m.getRGB(Wc,IM(n)),t.buffers.color.setClear(Wc.r,Wc.g,Wc.b,x,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),a=x,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,_(o,a)},render:g,addToRenderList:v,dispose:d}}function kb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(P,I,G,X,N){let B=!1;const O=h(P,X,G,I);s!==O&&(s=O,u(s.object)),B=p(P,X,G,N),B&&g(P,X,G,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(P,I,G,X),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function u(P){return n.bindVertexArray(P)}function c(P){return n.deleteVertexArray(P)}function h(P,I,G,X){const N=X.wireframe===!0;let B=i[I.id];B===void 0&&(B={},i[I.id]=B);const O=P.isInstancedMesh===!0?P.id:0;let U=B[O];U===void 0&&(U={},B[O]=U);let V=U[G.id];V===void 0&&(V={},U[G.id]=V);let j=V[N];return j===void 0&&(j=f(l()),V[N]=j),j}function f(P){const I=[],G=[],X=[];for(let N=0;N<t;N++)I[N]=0,G[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:X,object:P,attributes:{},index:null}}function p(P,I,G,X){const N=s.attributes,B=I.attributes;let O=0;const U=G.getAttributes();for(const V in U)if(U[V].location>=0){const $=N[V];let K=B[V];if(K===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),$===void 0||$.attribute!==K||K&&$.data!==K.data)return!0;O++}return s.attributesNum!==O||s.index!==X}function g(P,I,G,X){const N={},B=I.attributes;let O=0;const U=G.getAttributes();for(const V in U)if(U[V].location>=0){let $=B[V];$===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&($=P.instanceColor));const K={};K.attribute=$,$&&$.data&&(K.data=$.data),N[V]=K,O++}s.attributes=N,s.attributesNum=O,s.index=X}function v(){const P=s.newAttributes;for(let I=0,G=P.length;I<G;I++)P[I]=0}function _(P){d(P,0)}function d(P,I){const G=s.newAttributes,X=s.enabledAttributes,N=s.attributeDivisors;G[P]=1,X[P]===0&&(n.enableVertexAttribArray(P),X[P]=1),N[P]!==I&&(n.vertexAttribDivisor(P,I),N[P]=I)}function m(){const P=s.newAttributes,I=s.enabledAttributes;for(let G=0,X=I.length;G<X;G++)I[G]!==P[G]&&(n.disableVertexAttribArray(G),I[G]=0)}function x(P,I,G,X,N,B,O){O===!0?n.vertexAttribIPointer(P,I,G,N,B):n.vertexAttribPointer(P,I,G,X,N,B)}function S(P,I,G,X){v();const N=X.attributes,B=G.getAttributes(),O=I.defaultAttributeValues;for(const U in B){const V=B[U];if(V.location>=0){let j=N[U];if(j===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){const $=j.normalized,K=j.itemSize,Ge=e.get(j);if(Ge===void 0)continue;const He=Ge.buffer,ke=Ge.type,Z=Ge.bytesPerElement,xe=ke===n.INT||ke===n.UNSIGNED_INT||j.gpuType===Z0;if(j.isInterleavedBufferAttribute){const ge=j.data,Fe=ge.stride,Ye=j.offset;if(ge.isInstancedInterleavedBuffer){for(let Xe=0;Xe<V.locationSize;Xe++)d(V.location+Xe,ge.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Xe=0;Xe<V.locationSize;Xe++)_(V.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Xe=0;Xe<V.locationSize;Xe++)x(V.location+Xe,K/V.locationSize,ke,$,Fe*Z,(Ye+K/V.locationSize*Xe)*Z,xe)}else{if(j.isInstancedBufferAttribute){for(let ge=0;ge<V.locationSize;ge++)d(V.location+ge,j.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<V.locationSize;ge++)_(V.location+ge);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ge=0;ge<V.locationSize;ge++)x(V.location+ge,K/V.locationSize,ke,$,K*Z,K/V.locationSize*ge*Z,xe)}}else if(O!==void 0){const $=O[U];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(V.location,$);break;case 3:n.vertexAttrib3fv(V.location,$);break;case 4:n.vertexAttrib4fv(V.location,$);break;default:n.vertexAttrib1fv(V.location,$)}}}}m()}function T(){A();for(const P in i){const I=i[P];for(const G in I){const X=I[G];for(const N in X){const B=X[N];for(const O in B)c(B[O].object),delete B[O];delete X[N]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const G in I){const X=I[G];for(const N in X){const B=X[N];for(const O in B)c(B[O].object),delete B[O];delete X[N]}}delete i[P.id]}function w(P){for(const I in i){const G=i[I];for(const X in G){const N=G[X];if(N[P.id]===void 0)continue;const B=N[P.id];for(const O in B)c(B[O].object),delete B[O];delete N[P.id]}}}function y(P){for(const I in i){const G=i[I],X=P.isInstancedMesh===!0?P.id:0,N=G[X];if(N!==void 0){for(const B in N){const O=N[B];for(const U in O)c(O[U].object),delete O[U];delete N[B]}delete G[X],Object.keys(G).length===0&&delete i[I]}}}function A(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:_,disableUnusedAttributes:m}}function Bb(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function zb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==er&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const y=w===Kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==gi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vr&&!y)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(je("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,maxSamples:T,samples:M}}function Vb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new co,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,_=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!_)s?c(null):u();else{const m=s?0:i,x=m*4;let S=d.clippingState||null;l.value=S,S=c(g,f,x,p);for(let T=0;T!==x;++T)S[T]=t[T];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,g){const v=h!==null?h.length:0;let _=null;if(v!==0){if(_=l.value,g!==!0||_===null){const d=p+v*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(_===null||_.length<d)&&(_=new Float32Array(d));for(let x=0,S=p;x!==v;++x,S+=4)o.copy(h[x]).applyMatrix4(m,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}const Es=4,nx=[.125,.215,.35,.446,.526,.582],po=20,Gb=256,Al=new gg,ix=new rt;let zd=null,Vd=0,Gd=0,Hd=!1;const Hb=new D;class rx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Hb}=s;zd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ax(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Vd,Gd),this._renderer.xr.enabled=Hd,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Do||e.mapping===Ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Kr,format:er,colorSpace:Gf,depthBuffer:!1},r=sx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sx(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Wb(s)),this._blurMaterial=Yb(s,e,t),this._ggxMaterial=Xb(s,e,t)}return r}_compileMaterial(e){const t=new _t(new $t,e);this._renderer.compile(t,Al)}_sceneToCubeUV(e,t,i,r,s){const l=new ki(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(ix),h.toneMapping=Er,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Fn,new zt({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,_=v.material;let d=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,d=!0):(_.color.copy(ix),d=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const T=this._cubeSize;aa(r,S*T,x>2?T:0,T,T),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Do||e.mapping===Ya;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ax()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ox());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;aa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Al)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-c*c),f=0+u*1.25,p=h*f,{_lodMax:g}=this,v=this._sizeLods[i],_=3*v*(i>g-Es?i-g+Es:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,aa(s,_,d,3*v,2*v),r.setRenderTarget(s),r.render(a,Al),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,aa(e,_,d,3*v,2*v),r.setRenderTarget(e),r.render(a,Al)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const c=3,h=this._lodMeshes[r];h.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*po-1),v=s/g,_=isFinite(s)?1+Math.floor(c*v):po;_>po&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${po}`);const d=[];let m=0;for(let w=0;w<po;++w){const y=w/v,A=Math.exp(-y*y/2);d.push(A),w===0?m+=A:w<_&&(m+=2*A)}for(let w=0;w<d.length;w++)d[w]=d[w]/m;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[r],T=3*S*(r>x-Es?r-x+Es:0),M=4*(this._cubeSize-S);aa(t,T,M,3*S,2*S),l.setRenderTarget(t),l.render(h,Al)}}function Wb(n){const e=[],t=[],i=[];let r=n;const s=n-Es+1+nx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Es?l=nx[o-n+Es-1]:o===0&&(l=0),t.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,v=3,_=2,d=1,m=new Float32Array(v*g*p),x=new Float32Array(_*g*p),S=new Float32Array(d*g*p);for(let M=0;M<p;M++){const w=M%3*2/3-1,y=M>2?0:-1,A=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];m.set(A,v*g*M),x.set(f,_*g*M);const b=[M,M,M,M,M,M];S.set(b,d*g*M)}const T=new $t;T.setAttribute("position",new Mi(m,v)),T.setAttribute("uv",new Mi(x,_)),T.setAttribute("faceIndex",new Mi(S,d)),i.push(new _t(T,null)),r>Es&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function sx(n,e,t){const i=new Tr(n,e,t);return i.texture.mapping=vh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Xb(n,e,t){return new Ar({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function Yb(n,e,t){const i=new Float32Array(po),r=new D(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:po,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function ox(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function ax(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}class BM extends Tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new TM(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fn(5,5,5),s=new Ar({name:"CubemapFromEquirect",uniforms:$a(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:Wr});s.uniforms.tEquirect.value=t;const o=new _t(r,s),a=t.minFilter;return t.minFilter===vo&&(t.minFilter=Bn),new ZC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function qb(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===ld||p===ud)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new BM(g.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",u),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,g=p===ld||p===ud,v=p===Do||p===Ya;if(g||v){let _=t.get(f);const d=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new rx(n)),_=g?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const m=f.image;return g&&m&&m.height>0||v&&m&&l(m)?(i===null&&(i=new rx(n)),_=g?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function a(f,p){return p===ld?f.mapping=Do:p===ud&&(f.mapping=Ya),f}function l(f){let p=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&p++;return p===g}function u(f){const p=f.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function jb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Im("WebGLRenderer: "+i+" extension not supported."),r}}}function $b(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function u(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const m=p.array;v=p.version;for(let x=0,S=m.length;x<S;x+=3){const T=m[x+0],M=m[x+1],w=m[x+2];f.push(T,M,M,w,w,T)}}else{const m=g.array;v=g.version;for(let x=0,S=m.length/3-1;x<S;x+=3){const T=x+0,M=x+1,w=x+2;f.push(T,M,M,w,w,T)}}const _=new(g.count>=65535?MM:SM)(f,1);_.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,_)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function Kb(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function u(h,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,h*o,p),t.update(f,i,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,p);let v=0;for(let _=0;_<p;_++)v+=f[_];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function Zb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Jb(n,e,t){const i=new WeakMap,r=new en;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let b=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let T=a.attributes.position.count*S,M=1;T>e.maxTextureSize&&(M=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*M*4*h),y=new vM(w,T,M,h);y.type=vr,y.needsUpdate=!0;const A=S*4;for(let P=0;P<h;P++){const I=d[P],G=m[P],X=x[P],N=T*M*4*P;for(let B=0;B<I.count;B++){const O=B*A;g===!0&&(r.fromBufferAttribute(I,B),w[N+O+0]=r.x,w[N+O+1]=r.y,w[N+O+2]=r.z,w[N+O+3]=0),v===!0&&(r.fromBufferAttribute(G,B),w[N+O+4]=r.x,w[N+O+5]=r.y,w[N+O+6]=r.z,w[N+O+7]=0),_===!0&&(r.fromBufferAttribute(X,B),w[N+O+8]=r.x,w[N+O+9]=r.y,w[N+O+10]=r.z,w[N+O+11]=X.itemSize===4?r.w:1)}}f={count:h,texture:y,size:new Ae(T,M)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let _=0;_<u.length;_++)g+=u[_];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Qb(n,e,t,i,r){let s=new WeakMap;function o(u){const c=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const e3={[nM]:"LINEAR_TONE_MAPPING",[iM]:"REINHARD_TONE_MAPPING",[rM]:"CINEON_TONE_MAPPING",[sM]:"ACES_FILMIC_TONE_MAPPING",[aM]:"AGX_TONE_MAPPING",[lM]:"NEUTRAL_TONE_MAPPING",[oM]:"CUSTOM_TONE_MAPPING"};function t3(n,e,t,i,r){const s=new Tr(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new qa(e,t):void 0}),o=new Tr(e,t,{type:Kr,depthBuffer:!1,stencilBuffer:!1}),a=new $t;a.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Et([0,2,0,0,2,0],2));const l=new WC({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new _t(a,l),c=new gg(-1,1,1,-1,0,1);let h=null,f=null,p=!1,g,v=null,_=[],d=!1;this.setSize=function(m,x){s.setSize(m,x),o.setSize(m,x);for(let S=0;S<_.length;S++){const T=_[S];T.setSize&&T.setSize(m,x)}},this.setEffects=function(m){_=m,d=_.length>0&&_[0].isRenderPass===!0;const x=s.width,S=s.height;for(let T=0;T<_.length;T++){const M=_[T];M.setSize&&M.setSize(x,S)}},this.begin=function(m,x){if(p||m.toneMapping===Er&&_.length===0)return!1;if(v=x,x!==null){const S=x.width,T=x.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return d===!1&&m.setRenderTarget(s),g=m.toneMapping,m.toneMapping=Er,!0},this.hasRenderPass=function(){return d},this.end=function(m,x){m.toneMapping=g,p=!0;let S=s,T=o;for(let M=0;M<_.length;M++){const w=_[M];if(w.enabled!==!1&&(w.render(m,T,S,x),w.needsSwap!==!1)){const y=S;S=T,T=y}}if(h!==m.outputColorSpace||f!==m.toneMapping){h=m.outputColorSpace,f=m.toneMapping,l.defines={},dt.getTransfer(h)===wt&&(l.defines.SRGB_TRANSFER="");const M=e3[f];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(v),m.render(u,c),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const zM=new zn,zm=new qa(1,1),VM=new vM,GM=new VA,HM=new TM,lx=[],ux=[],cx=new Float32Array(16),fx=new Float32Array(9),hx=new Float32Array(4);function ol(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=lx[r];if(s===void 0&&(s=new Float32Array(r),lx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sh(n,e){let t=ux[e];t===void 0&&(t=new Int32Array(e),ux[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function r3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function s3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function o3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;hx.set(i),n.uniformMatrix2fv(this.addr,!1,hx),pn(t,i)}}function a3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;fx.set(i),n.uniformMatrix3fv(this.addr,!1,fx),pn(t,i)}}function l3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;cx.set(i),n.uniformMatrix4fv(this.addr,!1,cx),pn(t,i)}}function u3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function c3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function f3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function h3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function d3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function m3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function g3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function _3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zm.compareFunction=t.isReversedDepthBuffer()?rg:ig,s=zm):s=zM,t.setTexture2D(e||s,r)}function v3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||GM,r)}function x3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||HM,r)}function y3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||VM,r)}function S3(n){switch(n){case 5126:return n3;case 35664:return i3;case 35665:return r3;case 35666:return s3;case 35674:return o3;case 35675:return a3;case 35676:return l3;case 5124:case 35670:return u3;case 35667:case 35671:return c3;case 35668:case 35672:return f3;case 35669:case 35673:return h3;case 5125:return d3;case 36294:return p3;case 36295:return m3;case 36296:return g3;case 35678:case 36198:case 36298:case 36306:case 35682:return _3;case 35679:case 36299:case 36307:return v3;case 35680:case 36300:case 36308:case 36293:return x3;case 36289:case 36303:case 36311:case 36292:return y3}}function M3(n,e){n.uniform1fv(this.addr,e)}function E3(n,e){const t=ol(e,this.size,2);n.uniform2fv(this.addr,t)}function T3(n,e){const t=ol(e,this.size,3);n.uniform3fv(this.addr,t)}function w3(n,e){const t=ol(e,this.size,4);n.uniform4fv(this.addr,t)}function A3(n,e){const t=ol(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C3(n,e){const t=ol(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R3(n,e){const t=ol(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function b3(n,e){n.uniform1iv(this.addr,e)}function P3(n,e){n.uniform2iv(this.addr,e)}function L3(n,e){n.uniform3iv(this.addr,e)}function D3(n,e){n.uniform4iv(this.addr,e)}function N3(n,e){n.uniform1uiv(this.addr,e)}function I3(n,e){n.uniform2uiv(this.addr,e)}function U3(n,e){n.uniform3uiv(this.addr,e)}function F3(n,e){n.uniform4uiv(this.addr,e)}function O3(n,e,t){const i=this.cache,r=e.length,s=Sh(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=zm:o=zM;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function k3(n,e,t){const i=this.cache,r=e.length,s=Sh(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||GM,s[o])}function B3(n,e,t){const i=this.cache,r=e.length,s=Sh(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||HM,s[o])}function z3(n,e,t){const i=this.cache,r=e.length,s=Sh(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||VM,s[o])}function V3(n){switch(n){case 5126:return M3;case 35664:return E3;case 35665:return T3;case 35666:return w3;case 35674:return A3;case 35675:return C3;case 35676:return R3;case 5124:case 35670:return b3;case 35667:case 35671:return P3;case 35668:case 35672:return L3;case 35669:case 35673:return D3;case 5125:return N3;case 36294:return I3;case 36295:return U3;case 36296:return F3;case 35678:case 36198:case 36298:case 36306:case 35682:return O3;case 35679:case 36299:case 36307:return k3;case 35680:case 36300:case 36308:case 36293:return B3;case 36289:case 36303:case 36311:case 36292:return z3}}class G3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=S3(t.type)}}class H3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V3(t.type)}}class W3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function dx(n,e){n.seq.push(e),n.map[e.id]=e}function X3(n,e,t){const i=n.name,r=i.length;for(Wd.lastIndex=0;;){const s=Wd.exec(i),o=Wd.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){dx(t,u===void 0?new G3(a,n,e):new H3(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new W3(a),dx(t,h)),t=h}}}class hf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);X3(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function px(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Y3=37297;let q3=0;function j3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const mx=new tt;function $3(n){dt._getMatrix(mx,dt.workingColorSpace,n);const e=`mat3( ${mx.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Hf:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+j3(n.getShaderSource(e),a)}else return s}function K3(n,e){const t=$3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Z3={[nM]:"Linear",[iM]:"Reinhard",[rM]:"Cineon",[sM]:"ACESFilmic",[aM]:"AgX",[lM]:"Neutral",[oM]:"Custom"};function J3(n,e){const t=Z3[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xc=new D;function Q3(){dt.getLuminanceCoefficients(Xc);const n=Xc.x.toFixed(4),e=Xc.y.toFixed(4),t=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ul).join(`
`)}function tP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ul(n){return n!==""}function _x(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vm(n){return n.replace(iP,sP)}const rP=new Map;function sP(n,e){let t=it[e];if(t===void 0){const i=rP.get(e);if(i!==void 0)t=it[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vm(t)}const oP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xx(n){return n.replace(oP,aP)}function aP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yx(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const lP={[of]:"SHADOWMAP_TYPE_PCF",[Nl]:"SHADOWMAP_TYPE_VSM"};function uP(n){return lP[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cP={[Do]:"ENVMAP_TYPE_CUBE",[Ya]:"ENVMAP_TYPE_CUBE",[vh]:"ENVMAP_TYPE_CUBE_UV"};function fP(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cP[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const hP={[Ya]:"ENVMAP_MODE_REFRACTION"};function dP(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":hP[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pP={[tM]:"ENVMAP_BLENDING_MULTIPLY",[sA]:"ENVMAP_BLENDING_MIX",[oA]:"ENVMAP_BLENDING_ADD"};function mP(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pP[n.combine]||"ENVMAP_BLENDING_NONE"}function gP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _P(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=uP(t),u=fP(t),c=dP(t),h=mP(t),f=gP(t),p=eP(t),g=tP(s),v=r.createProgram();let _,d,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ul).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ul).join(`
`),d.length>0&&(d+=`
`)):(_=[yx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ul).join(`
`),d=[yx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?it.tonemapping_pars_fragment:"",t.toneMapping!==Er?J3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,K3("linearToOutputTexel",t.outputColorSpace),Q3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ul).join(`
`)),o=Vm(o),o=_x(o,t),o=vx(o,t),a=Vm(a),a=_x(a,t),a=vx(a,t),o=xx(o),a=xx(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",t.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=m+_+o,S=m+d+a,T=px(r,r.VERTEX_SHADER,x),M=px(r,r.FRAGMENT_SHADER,S);r.attachShader(v,T),r.attachShader(v,M),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(P){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(T)||"",X=r.getShaderInfoLog(M)||"",N=I.trim(),B=G.trim(),O=X.trim();let U=!0,V=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,M);else{const j=gx(r,T,"vertex"),$=gx(r,M,"fragment");gt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+j+`
`+$)}else N!==""?je("WebGLProgram: Program Info Log:",N):(B===""||O==="")&&(V=!1);V&&(P.diagnostics={runnable:U,programLog:N,vertexShader:{log:B,prefix:_},fragmentShader:{log:O,prefix:d}})}r.deleteShader(T),r.deleteShader(M),y=new hf(r,v),A=nP(r,v)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,Y3)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q3++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=M,this}let vP=0;class xP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yP(e),t.set(e,i)),i}}class yP{constructor(e){this.id=vP++,this.code=e,this.usedTimes=0}}function SP(n){return n===No||n===zf||n===Vf}function MP(n,e,t,i,r,s){const o=new xM,a=new xP,l=new Set,u=[],c=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,A,b,P,I,G){const X=P.fog,N=I.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,U=e.get(y.envMap||B,O),V=U&&U.mapping===vh?U.image.height:null,j=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&je("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,K=$!==void 0?$.length:0;let Ge=0;N.morphAttributes.position!==void 0&&(Ge=1),N.morphAttributes.normal!==void 0&&(Ge=2),N.morphAttributes.color!==void 0&&(Ge=3);let He,ke,Z,xe;if(j){const Qe=mr[j];He=Qe.vertexShader,ke=Qe.fragmentShader}else He=y.vertexShader,ke=y.fragmentShader,a.update(y),Z=a.getVertexShaderID(y),xe=a.getFragmentShaderID(y);const ge=n.getRenderTarget(),Fe=n.state.buffers.depth.getReversed(),Ye=I.isInstancedMesh===!0,Xe=I.isBatchedMesh===!0,ht=!!y.map,$e=!!y.matcap,re=!!U,ce=!!y.aoMap,se=!!y.lightMap,Me=!!y.bumpMap,ye=!!y.normalMap,Ke=!!y.displacementMap,L=!!y.emissiveMap,Ze=!!y.metalnessMap,De=!!y.roughnessMap,We=y.anisotropy>0,ue=y.clearcoat>0,mt=y.dispersion>0,R=y.iridescence>0,E=y.sheen>0,z=y.transmission>0,Q=We&&!!y.anisotropyMap,oe=ue&&!!y.clearcoatMap,he=ue&&!!y.clearcoatNormalMap,pe=ue&&!!y.clearcoatRoughnessMap,q=R&&!!y.iridescenceMap,te=R&&!!y.iridescenceThicknessMap,Ee=E&&!!y.sheenColorMap,be=E&&!!y.sheenRoughnessMap,_e=!!y.specularMap,de=!!y.specularColorMap,Ve=!!y.specularIntensityMap,Je=z&&!!y.transmissionMap,ut=z&&!!y.thicknessMap,F=!!y.gradientMap,me=!!y.alphaMap,J=y.alphaTest>0,Ce=!!y.alphaHash,ve=!!y.extensions;let ae=Er;y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ae=n.toneMapping);const Oe={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:He,fragmentShader:ke,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Xe,batchingColor:Xe&&I._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&I.instanceColor!==null,instancingMorph:Ye&&I.morphTexture!==null,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ht,matcap:$e,envMap:re,envMapMode:re&&U.mapping,envMapCubeUVHeight:V,aoMap:ce,lightMap:se,bumpMap:Me,normalMap:ye,displacementMap:Ke,emissiveMap:L,normalMapObjectSpace:ye&&y.normalMapType===uA,normalMapTangentSpace:ye&&y.normalMapType===mv,packedNormalMap:ye&&y.normalMapType===mv&&SP(y.normalMap.format),metalnessMap:Ze,roughnessMap:De,anisotropy:We,anisotropyMap:Q,clearcoat:ue,clearcoatMap:oe,clearcoatNormalMap:he,clearcoatRoughnessMap:pe,dispersion:mt,iridescence:R,iridescenceMap:q,iridescenceThicknessMap:te,sheen:E,sheenColorMap:Ee,sheenRoughnessMap:be,specularMap:_e,specularColorMap:de,specularIntensityMap:Ve,transmission:z,transmissionMap:Je,thicknessMap:ut,gradientMap:F,opaque:y.transparent===!1&&y.blending===Da&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:J,alphaHash:Ce,combine:y.combine,mapUv:ht&&g(y.map.channel),aoMapUv:ce&&g(y.aoMap.channel),lightMapUv:se&&g(y.lightMap.channel),bumpMapUv:Me&&g(y.bumpMap.channel),normalMapUv:ye&&g(y.normalMap.channel),displacementMapUv:Ke&&g(y.displacementMap.channel),emissiveMapUv:L&&g(y.emissiveMap.channel),metalnessMapUv:Ze&&g(y.metalnessMap.channel),roughnessMapUv:De&&g(y.roughnessMap.channel),anisotropyMapUv:Q&&g(y.anisotropyMap.channel),clearcoatMapUv:oe&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(y.sheenRoughnessMap.channel),specularMapUv:_e&&g(y.specularMap.channel),specularColorMapUv:de&&g(y.specularColorMap.channel),specularIntensityMapUv:Ve&&g(y.specularIntensityMap.channel),transmissionMapUv:Je&&g(y.transmissionMap.channel),thicknessMapUv:ut&&g(y.thicknessMap.channel),alphaMapUv:me&&g(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ye||We),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(ht||me),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&ye===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Fe,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:ht&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===wt,decodeVideoTextureEmissive:L&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Br,flipSided:y.side===ii,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ve&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&y.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function _(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)A.push(b),A.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(d(A,y),m(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function d(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function m(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function x(y){const A=p[y.type];let b;if(A){const P=mr[A];b=VC.clone(P.uniforms)}else b=y.uniforms;return b}function S(y,A){let b=c.get(A);return b!==void 0?++b.usedTimes:(b=new _P(n,A,y,r),u.push(b),c.set(A,b)),b}function T(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:w}}function EP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function TP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Sx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,g,v,_,d){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:g,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:_,group:d},n[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=g,m.materialVariant=o(f),m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=_,m.group=d),e++,m}function l(f,p,g,v,_,d){const m=a(f,p,g,v,_,d);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function u(f,p,g,v,_,d){const m=a(f,p,g,v,_,d);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,p){t.length>1&&t.sort(f||TP),i.length>1&&i.sort(p||Sx),r.length>1&&r.sort(p||Sx)}function h(){for(let f=e,p=n.length;f<p;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:h,sort:c}}function wP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Mx,n.set(i,[o])):r>=s.length?(o=new Mx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function AP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new rt};break;case"SpotLight":t={position:new D,direction:new D,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function CP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RP=0;function bP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PP(n){const e=new AP,t=CP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,s=new Ht,o=new Ht;function a(u){let c=0,h=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,v=0,_=0,d=0,m=0,x=0,S=0,T=0,M=0,w=0;u.sort(bP);for(let A=0,b=u.length;A<b;A++){const P=u[A],I=P.color,G=P.intensity,X=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===No?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=I.r*G,h+=I.g*G,f+=I.b*G;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],G);w++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,U=t.get(P);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=B,p++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(I).multiplyScalar(G),B.distance=X,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[v]=B;const O=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,O.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[v]=O.matrix,P.castShadow){const U=t.get(P);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=N,S++}v++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(I).multiplyScalar(G),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=B,_++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const O=P.shadow,U=t.get(P);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=B,g++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(G),B.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[d]=B,d++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==p||y.pointLength!==g||y.spotLength!==v||y.rectAreaLength!==_||y.hemiLength!==d||y.numDirectionalShadows!==m||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==T||y.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+T-M,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=w,y.directionalLength=p,y.pointLength=g,y.spotLength=v,y.rectAreaLength=_,y.hemiLength=d,y.numDirectionalShadows=m,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=T,y.numLightProbes=w,i.version=RP++)}function l(u,c){let h=0,f=0,p=0,g=0,v=0;const _=c.matrixWorldInverse;for(let d=0,m=u.length;d<m;d++){const x=u[d];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),h++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),f++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:i}}function Ex(n){const e=new PP(n),t=[],i=[],r=[];function s(f){h.camera=f,t.length=0,i.length=0,r.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function LP(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ex(n),e.set(r,[a])):s>=o.length?(a=new Ex(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const DP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NP=`uniform sampler2D shadow_pass;
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
}`,IP=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],UP=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Tx=new Ht,Cl=new D,Xd=new D;function FP(n,e,t){let i=new ug;const r=new Ae,s=new Ae,o=new en,a=new XC,l=new YC,u={},c=t.maxTextureSize,h={[Bs]:ii,[ii]:Bs,[Br]:Br},f=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:DP,fragmentShader:NP}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new $t;g.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let d=this.type;this.render=function(M,w,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||M.length===0)return;this.type===zw&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=of);const A=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Wr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const G=d!==this.type;G&&w.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(N=>N.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,N=M.length;X<N;X++){const B=M[X],O=B.shadow;if(O===void 0){je("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const U=O.getFrameExtents();r.multiply(U),s.copy(O.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/U.x),r.x=s.x*U.x,O.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/U.y),r.y=s.y*U.y,O.mapSize.y=s.y));const V=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Nl){if(B.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Tr(r.x,r.y,{format:No,type:Kr,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new qa(r.x,r.y,vr),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=Zr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=An,O.map.depthTexture.magFilter=An}else B.isPointLight?(O.map=new BM(r.x),O.map.depthTexture=new oC(r.x,wr)):(O.map=new Tr(r.x,r.y),O.map.depthTexture=new qa(r.x,r.y,wr)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=Zr,this.type===of?(O.map.depthTexture.compareFunction=V?rg:ig,O.map.depthTexture.minFilter=Bn,O.map.depthTexture.magFilter=Bn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=An,O.map.depthTexture.magFilter=An);O.camera.updateProjectionMatrix()}const j=O.map.isWebGLCubeRenderTarget?6:1;for(let $=0;$<j;$++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,$),n.clear();else{$===0&&(n.setRenderTarget(O.map),n.clear());const K=O.getViewport($);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),I.viewport(o)}if(B.isPointLight){const K=O.camera,Ge=O.matrix,He=B.distance||K.far;He!==K.far&&(K.far=He,K.updateProjectionMatrix()),Cl.setFromMatrixPosition(B.matrixWorld),K.position.copy(Cl),Xd.copy(K.position),Xd.add(IP[$]),K.up.copy(UP[$]),K.lookAt(Xd),K.updateMatrixWorld(),Ge.makeTranslation(-Cl.x,-Cl.y,-Cl.z),Tx.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Tx,K.coordinateSystem,K.reversedDepth)}else O.updateMatrices(B);i=O.getFrustum(),S(w,y,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===Nl&&m(O,y),O.needsUpdate=!1}d=this.type,_.needsUpdate=!1,n.setRenderTarget(A,b,P)};function m(M,w){const y=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Tr(r.x,r.y,{format:No,type:Kr})),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(w,null,y,f,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(w,null,y,p,v,null)}function x(M,w,y,A){let b=null;const P=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)b=P;else if(b=y.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=b.uuid,G=w.uuid;let X=u[I];X===void 0&&(X={},u[I]=X);let N=X[G];N===void 0&&(N=b.clone(),X[G]=N,w.addEventListener("dispose",T)),b=N}if(b.visible=w.visible,b.wireframe=w.wireframe,A===Nl?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=n.properties.get(b);I.light=y}return b}function S(M,w,y,A,b){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Nl)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);const G=e.update(M),X=M.material;if(Array.isArray(X)){const N=G.groups;for(let B=0,O=N.length;B<O;B++){const U=N[B],V=X[U.materialIndex];if(V&&V.visible){const j=x(M,V,A,b);M.onBeforeShadow(n,M,w,y,G,j,U),n.renderBufferDirect(y,null,G,j,M,U),M.onAfterShadow(n,M,w,y,G,j,U)}}}else if(X.visible){const N=x(M,X,A,b);M.onBeforeShadow(n,M,w,y,G,N,null),n.renderBufferDirect(y,null,G,N,M,null),M.onAfterShadow(n,M,w,y,G,N,null)}}const I=M.children;for(let G=0,X=I.length;G<X;G++)S(I[G],w,y,A,b)}function T(M){M.target.removeEventListener("dispose",T);for(const y in u){const A=u[y],b=M.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function OP(n,e){function t(){let F=!1;const me=new en;let J=null;const Ce=new en(0,0,0,0);return{setMask:function(ve){J!==ve&&!F&&(n.colorMask(ve,ve,ve,ve),J=ve)},setLocked:function(ve){F=ve},setClear:function(ve,ae,Oe,Qe,kt){kt===!0&&(ve*=Qe,ae*=Qe,Oe*=Qe),me.set(ve,ae,Oe,Qe),Ce.equals(me)===!1&&(n.clearColor(ve,ae,Oe,Qe),Ce.copy(me))},reset:function(){F=!1,J=null,Ce.set(-1,0,0,0)}}}function i(){let F=!1,me=!1,J=null,Ce=null,ve=null;return{setReversed:function(ae){if(me!==ae){const Oe=e.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),me=ae;const Qe=ve;ve=null,this.setClear(Qe)}},getReversed:function(){return me},setTest:function(ae){ae?ge(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(ae){J!==ae&&!F&&(n.depthMask(ae),J=ae)},setFunc:function(ae){if(me&&(ae=xA[ae]),Ce!==ae){switch(ae){case $p:n.depthFunc(n.NEVER);break;case Kp:n.depthFunc(n.ALWAYS);break;case Zp:n.depthFunc(n.LESS);break;case Xa:n.depthFunc(n.LEQUAL);break;case Jp:n.depthFunc(n.EQUAL);break;case Qp:n.depthFunc(n.GEQUAL);break;case em:n.depthFunc(n.GREATER);break;case tm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=ae}},setLocked:function(ae){F=ae},setClear:function(ae){ve!==ae&&(ve=ae,me&&(ae=1-ae),n.clearDepth(ae))},reset:function(){F=!1,J=null,Ce=null,ve=null,me=!1}}}function r(){let F=!1,me=null,J=null,Ce=null,ve=null,ae=null,Oe=null,Qe=null,kt=null;return{setTest:function(yt){F||(yt?ge(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(yt){me!==yt&&!F&&(n.stencilMask(yt),me=yt)},setFunc:function(yt,bi,Mn){(J!==yt||Ce!==bi||ve!==Mn)&&(n.stencilFunc(yt,bi,Mn),J=yt,Ce=bi,ve=Mn)},setOp:function(yt,bi,Mn){(ae!==yt||Oe!==bi||Qe!==Mn)&&(n.stencilOp(yt,bi,Mn),ae=yt,Oe=bi,Qe=Mn)},setLocked:function(yt){F=yt},setClear:function(yt){kt!==yt&&(n.clearStencil(yt),kt=yt)},reset:function(){F=!1,me=null,J=null,Ce=null,ve=null,ae=null,Oe=null,Qe=null,kt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},h={},f={},p=new WeakMap,g=[],v=null,_=!1,d=null,m=null,x=null,S=null,T=null,M=null,w=null,y=new rt(0,0,0),A=0,b=!1,P=null,I=null,G=null,X=null,N=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,U=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=U>=1):V.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=U>=2);let j=null,$={};const K=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),He=new en().fromArray(K),ke=new en().fromArray(Ge);function Z(F,me,J,Ce){const ve=new Uint8Array(4),ae=n.createTexture();n.bindTexture(F,ae),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<J;Oe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(me+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return ae}const xe={};xe[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(Xa),Me(!1),ye(hv),ge(n.CULL_FACE),ce(Wr);function ge(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function Fe(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function Ye(F,me){return f[F]!==me?(n.bindFramebuffer(F,me),f[F]=me,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=me),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Xe(F,me){let J=g,Ce=!1;if(F){J=p.get(me),J===void 0&&(J=[],p.set(me,J));const ve=F.textures;if(J.length!==ve.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Oe=ve.length;ae<Oe;ae++)J[ae]=n.COLOR_ATTACHMENT0+ae;J.length=ve.length,Ce=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(J)}function ht(F){return v!==F?(n.useProgram(F),v=F,!0):!1}const $e={[ho]:n.FUNC_ADD,[Gw]:n.FUNC_SUBTRACT,[Hw]:n.FUNC_REVERSE_SUBTRACT};$e[Ww]=n.MIN,$e[Xw]=n.MAX;const re={[Yw]:n.ZERO,[qw]:n.ONE,[jw]:n.SRC_COLOR,[qp]:n.SRC_ALPHA,[eA]:n.SRC_ALPHA_SATURATE,[Jw]:n.DST_COLOR,[Kw]:n.DST_ALPHA,[$w]:n.ONE_MINUS_SRC_COLOR,[jp]:n.ONE_MINUS_SRC_ALPHA,[Qw]:n.ONE_MINUS_DST_COLOR,[Zw]:n.ONE_MINUS_DST_ALPHA,[tA]:n.CONSTANT_COLOR,[nA]:n.ONE_MINUS_CONSTANT_COLOR,[iA]:n.CONSTANT_ALPHA,[rA]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(F,me,J,Ce,ve,ae,Oe,Qe,kt,yt){if(F===Wr){_===!0&&(Fe(n.BLEND),_=!1);return}if(_===!1&&(ge(n.BLEND),_=!0),F!==Vw){if(F!==d||yt!==b){if((m!==ho||T!==ho)&&(n.blendEquation(n.FUNC_ADD),m=ho,T=ho),yt)switch(F){case Da:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFunc(n.ONE,n.ONE);break;case dv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:gt("WebGLState: Invalid blending: ",F);break}else switch(F){case Da:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case dv:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pv:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",F);break}x=null,S=null,M=null,w=null,y.set(0,0,0),A=0,d=F,b=yt}return}ve=ve||me,ae=ae||J,Oe=Oe||Ce,(me!==m||ve!==T)&&(n.blendEquationSeparate($e[me],$e[ve]),m=me,T=ve),(J!==x||Ce!==S||ae!==M||Oe!==w)&&(n.blendFuncSeparate(re[J],re[Ce],re[ae],re[Oe]),x=J,S=Ce,M=ae,w=Oe),(Qe.equals(y)===!1||kt!==A)&&(n.blendColor(Qe.r,Qe.g,Qe.b,kt),y.copy(Qe),A=kt),d=F,b=!1}function se(F,me){F.side===Br?Fe(n.CULL_FACE):ge(n.CULL_FACE);let J=F.side===ii;me&&(J=!J),Me(J),F.blending===Da&&F.transparent===!1?ce(Wr):ce(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ce=F.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),L(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Me(F){P!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),P=F)}function ye(F){F!==kw?(ge(n.CULL_FACE),F!==I&&(F===hv?n.cullFace(n.BACK):F===Bw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),I=F}function Ke(F){F!==G&&(O&&n.lineWidth(F),G=F)}function L(F,me,J){F?(ge(n.POLYGON_OFFSET_FILL),(X!==me||N!==J)&&(X=me,N=J,o.getReversed()&&(me=-me),n.polygonOffset(me,J))):Fe(n.POLYGON_OFFSET_FILL)}function Ze(F){F?ge(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function De(F){F===void 0&&(F=n.TEXTURE0+B-1),j!==F&&(n.activeTexture(F),j=F)}function We(F,me,J){J===void 0&&(j===null?J=n.TEXTURE0+B-1:J=j);let Ce=$[J];Ce===void 0&&(Ce={type:void 0,texture:void 0},$[J]=Ce),(Ce.type!==F||Ce.texture!==me)&&(j!==J&&(n.activeTexture(J),j=J),n.bindTexture(F,me||xe[F]),Ce.type=F,Ce.texture=me)}function ue(){const F=$[j];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function mt(){try{n.compressedTexImage2D(...arguments)}catch(F){gt("WebGLState:",F)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(F){gt("WebGLState:",F)}}function E(){try{n.texSubImage2D(...arguments)}catch(F){gt("WebGLState:",F)}}function z(){try{n.texSubImage3D(...arguments)}catch(F){gt("WebGLState:",F)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(F){gt("WebGLState:",F)}}function oe(){try{n.compressedTexSubImage3D(...arguments)}catch(F){gt("WebGLState:",F)}}function he(){try{n.texStorage2D(...arguments)}catch(F){gt("WebGLState:",F)}}function pe(){try{n.texStorage3D(...arguments)}catch(F){gt("WebGLState:",F)}}function q(){try{n.texImage2D(...arguments)}catch(F){gt("WebGLState:",F)}}function te(){try{n.texImage3D(...arguments)}catch(F){gt("WebGLState:",F)}}function Ee(F){return h[F]!==void 0?h[F]:n.getParameter(F)}function be(F,me){h[F]!==me&&(n.pixelStorei(F,me),h[F]=me)}function _e(F){He.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function de(F){ke.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ke.copy(F))}function Ve(F,me){let J=u.get(me);J===void 0&&(J=new WeakMap,u.set(me,J));let Ce=J.get(F);Ce===void 0&&(Ce=n.getUniformBlockIndex(me,F.name),J.set(F,Ce))}function Je(F,me){const Ce=u.get(me).get(F);l.get(me)!==Ce&&(n.uniformBlockBinding(me,Ce,F.__bindingPointIndex),l.set(me,Ce))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},h={},j=null,$={},f={},p=new WeakMap,g=[],v=null,_=!1,d=null,m=null,x=null,S=null,T=null,M=null,w=null,y=new rt(0,0,0),A=0,b=!1,P=null,I=null,G=null,X=null,N=null,He.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ge,disable:Fe,bindFramebuffer:Ye,drawBuffers:Xe,useProgram:ht,setBlending:ce,setMaterial:se,setFlipSided:Me,setCullFace:ye,setLineWidth:Ke,setPolygonOffset:L,setScissorTest:Ze,activeTexture:De,bindTexture:We,unbindTexture:ue,compressedTexImage2D:mt,compressedTexImage3D:R,texImage2D:q,texImage3D:te,pixelStorei:be,getParameter:Ee,updateUBOMapping:Ve,uniformBlockBinding:Je,texStorage2D:he,texStorage3D:pe,texSubImage2D:E,texSubImage3D:z,compressedTexSubImage2D:Q,compressedTexSubImage3D:oe,scissor:_e,viewport:de,reset:ut}}function kP(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ae,c=new WeakMap,h=new Set;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return g?new OffscreenCanvas(R,E):Wf("canvas")}function _(R,E,z){let Q=1;const oe=mt(R);if((oe.width>z||oe.height>z)&&(Q=z/Math.max(oe.width,oe.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const he=Math.floor(Q*oe.width),pe=Math.floor(Q*oe.height);f===void 0&&(f=v(he,pe));const q=E?v(he,pe):f;return q.width=he,q.height=pe,q.getContext("2d").drawImage(R,0,0,he,pe),je("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+he+"x"+pe+")."),q}else return"data"in R&&je("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function d(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,E,z,Q,oe,he=!1){if(R!==null){if(n[R]!==void 0)return n[R];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe;Q&&(pe=e.get("EXT_texture_norm16"),pe||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=E;if(E===n.RED&&(z===n.FLOAT&&(q=n.R32F),z===n.HALF_FLOAT&&(q=n.R16F),z===n.UNSIGNED_BYTE&&(q=n.R8),z===n.UNSIGNED_SHORT&&pe&&(q=pe.R16_EXT),z===n.SHORT&&pe&&(q=pe.R16_SNORM_EXT)),E===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.R8UI),z===n.UNSIGNED_SHORT&&(q=n.R16UI),z===n.UNSIGNED_INT&&(q=n.R32UI),z===n.BYTE&&(q=n.R8I),z===n.SHORT&&(q=n.R16I),z===n.INT&&(q=n.R32I)),E===n.RG&&(z===n.FLOAT&&(q=n.RG32F),z===n.HALF_FLOAT&&(q=n.RG16F),z===n.UNSIGNED_BYTE&&(q=n.RG8),z===n.UNSIGNED_SHORT&&pe&&(q=pe.RG16_EXT),z===n.SHORT&&pe&&(q=pe.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RG8UI),z===n.UNSIGNED_SHORT&&(q=n.RG16UI),z===n.UNSIGNED_INT&&(q=n.RG32UI),z===n.BYTE&&(q=n.RG8I),z===n.SHORT&&(q=n.RG16I),z===n.INT&&(q=n.RG32I)),E===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(q=n.RGB16UI),z===n.UNSIGNED_INT&&(q=n.RGB32UI),z===n.BYTE&&(q=n.RGB8I),z===n.SHORT&&(q=n.RGB16I),z===n.INT&&(q=n.RGB32I)),E===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),z===n.UNSIGNED_INT&&(q=n.RGBA32UI),z===n.BYTE&&(q=n.RGBA8I),z===n.SHORT&&(q=n.RGBA16I),z===n.INT&&(q=n.RGBA32I)),E===n.RGB&&(z===n.UNSIGNED_SHORT&&pe&&(q=pe.RGB16_EXT),z===n.SHORT&&pe&&(q=pe.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),E===n.RGBA){const te=he?Hf:dt.getTransfer(oe);z===n.FLOAT&&(q=n.RGBA32F),z===n.HALF_FLOAT&&(q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(q=te===wt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&pe&&(q=pe.RGBA16_EXT),z===n.SHORT&&pe&&(q=pe.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(R,E){let z;return R?E===null||E===wr||E===vu?z=n.DEPTH24_STENCIL8:E===vr?z=n.DEPTH32F_STENCIL8:E===_u&&(z=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wr||E===vu?z=n.DEPTH_COMPONENT24:E===vr?z=n.DEPTH_COMPONENT32F:E===_u&&(z=n.DEPTH_COMPONENT16),z}function M(R,E){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==An&&R.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){const E=R.target;E.removeEventListener("dispose",w),A(E),E.isVideoTexture&&c.delete(E),E.isHTMLTexture&&h.delete(E)}function y(R){const E=R.target;E.removeEventListener("dispose",y),P(E)}function A(R){const E=i.get(R);if(E.__webglInit===void 0)return;const z=R.source,Q=p.get(z);if(Q){const oe=Q[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(R),Object.keys(Q).length===0&&p.delete(z)}i.remove(R)}function b(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const z=R.source,Q=p.get(z);delete Q[E.__cacheKey],o.memory.textures--}function P(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let oe=0;oe<E.__webglFramebuffer[Q].length;oe++)n.deleteFramebuffer(E.__webglFramebuffer[Q][oe]);else n.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=R.textures;for(let Q=0,oe=z.length;Q<oe;Q++){const he=i.get(z[Q]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(z[Q])}i.remove(R)}let I=0;function G(){I=0}function X(){return I}function N(R){I=R}function B(){const R=I;return R>=r.maxTextures&&je("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function O(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function U(R,E){const z=i.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const Q=R.image;if(Q===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(z,R,E);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+E)}function V(R,E){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Fe(z,R,E);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+E)}function j(R,E){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Fe(z,R,E);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+E)}function $(R,E){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Ye(z,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+E)}const K={[nm]:n.REPEAT,[Gr]:n.CLAMP_TO_EDGE,[im]:n.MIRRORED_REPEAT},Ge={[An]:n.NEAREST,[aA]:n.NEAREST_MIPMAP_NEAREST,[mc]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[cd]:n.LINEAR_MIPMAP_NEAREST,[vo]:n.LINEAR_MIPMAP_LINEAR},He={[cA]:n.NEVER,[mA]:n.ALWAYS,[fA]:n.LESS,[ig]:n.LEQUAL,[hA]:n.EQUAL,[rg]:n.GEQUAL,[dA]:n.GREATER,[pA]:n.NOTEQUAL};function ke(R,E){if(E.type===vr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===cd||E.magFilter===mc||E.magFilter===vo||E.minFilter===Bn||E.minFilter===cd||E.minFilter===mc||E.minFilter===vo)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,K[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,K[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,K[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ge[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ge[E.minFilter]),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===An||E.minFilter!==mc&&E.minFilter!==vo||E.type===vr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Z(R,E){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));const Q=E.source;let oe=p.get(Q);oe===void 0&&(oe={},p.set(Q,oe));const he=O(E);if(he!==R.__cacheKey){oe[he]===void 0&&(oe[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),oe[he].usedTimes++;const pe=oe[R.__cacheKey];pe!==void 0&&(oe[R.__cacheKey].usedTimes--,pe.usedTimes===0&&b(E)),R.__cacheKey=he,R.__webglTexture=oe[he].texture}return z}function xe(R,E,z){return Math.floor(Math.floor(R/z)/E)}function ge(R,E,z,Q){const he=R.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,z,Q,E.data);else{he.sort((be,_e)=>be.start-_e.start);let pe=0;for(let be=1;be<he.length;be++){const _e=he[pe],de=he[be],Ve=_e.start+_e.count,Je=xe(de.start,E.width,4),ut=xe(_e.start,E.width,4);de.start<=Ve+1&&Je===ut&&xe(de.start+de.count-1,E.width,4)===Je?_e.count=Math.max(_e.count,de.start+de.count-_e.start):(++pe,he[pe]=de)}he.length=pe+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),Ee=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let be=0,_e=he.length;be<_e;be++){const de=he[be],Ve=Math.floor(de.start/4),Je=Math.ceil(de.count/4),ut=Ve%E.width,F=Math.floor(Ve/E.width),me=Je,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,ut,F,me,J,z,Q,E.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function Fe(R,E,z){let Q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=n.TEXTURE_3D);const oe=Z(R,E),he=E.source;t.bindTexture(Q,R.__webglTexture,n.TEXTURE0+z);const pe=i.get(he);if(he.version!==pe.__version||oe===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const J=dt.getPrimaries(dt.workingColorSpace),Ce=E.colorSpace===ys?null:dt.getPrimaries(E.colorSpace),ve=E.colorSpace===ys||J===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let te=_(E.image,!1,r.maxTextureSize);te=ue(E,te);const Ee=s.convert(E.format,E.colorSpace),be=s.convert(E.type);let _e=S(E.internalFormat,Ee,be,E.normalized,E.colorSpace,E.isVideoTexture);ke(Q,E);let de;const Ve=E.mipmaps,Je=E.isVideoTexture!==!0,ut=pe.__version===void 0||oe===!0,F=he.dataReady,me=M(E,te);if(E.isDepthTexture)_e=T(E.format===xo,E.type),ut&&(Je?t.texStorage2D(n.TEXTURE_2D,1,_e,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,_e,te.width,te.height,0,Ee,be,null));else if(E.isDataTexture)if(Ve.length>0){Je&&ut&&t.texStorage2D(n.TEXTURE_2D,me,_e,Ve[0].width,Ve[0].height);for(let J=0,Ce=Ve.length;J<Ce;J++)de=Ve[J],Je?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,de.width,de.height,Ee,be,de.data):t.texImage2D(n.TEXTURE_2D,J,_e,de.width,de.height,0,Ee,be,de.data);E.generateMipmaps=!1}else Je?(ut&&t.texStorage2D(n.TEXTURE_2D,me,_e,te.width,te.height),F&&ge(E,te,Ee,be)):t.texImage2D(n.TEXTURE_2D,0,_e,te.width,te.height,0,Ee,be,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,_e,Ve[0].width,Ve[0].height,te.depth);for(let J=0,Ce=Ve.length;J<Ce;J++)if(de=Ve[J],E.format!==er)if(Ee!==null)if(Je){if(F)if(E.layerUpdates.size>0){const ve=tx(de.width,de.height,E.format,E.type);for(const ae of E.layerUpdates){const Oe=de.data.subarray(ae*ve/de.data.BYTES_PER_ELEMENT,(ae+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ae,de.width,de.height,1,Ee,Oe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,te.depth,Ee,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,_e,de.width,de.height,te.depth,0,de.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,te.depth,Ee,be,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,_e,de.width,de.height,te.depth,0,Ee,be,de.data)}else{Je&&ut&&t.texStorage2D(n.TEXTURE_2D,me,_e,Ve[0].width,Ve[0].height);for(let J=0,Ce=Ve.length;J<Ce;J++)de=Ve[J],E.format!==er?Ee!==null?Je?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,de.width,de.height,Ee,de.data):t.compressedTexImage2D(n.TEXTURE_2D,J,_e,de.width,de.height,0,de.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,de.width,de.height,Ee,be,de.data):t.texImage2D(n.TEXTURE_2D,J,_e,de.width,de.height,0,Ee,be,de.data)}else if(E.isDataArrayTexture)if(Je){if(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,_e,te.width,te.height,te.depth),F)if(E.layerUpdates.size>0){const J=tx(te.width,te.height,E.format,E.type);for(const Ce of E.layerUpdates){const ve=te.data.subarray(Ce*J/te.data.BYTES_PER_ELEMENT,(Ce+1)*J/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,te.width,te.height,1,Ee,be,ve)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ee,be,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,te.width,te.height,te.depth,0,Ee,be,te.data);else if(E.isData3DTexture)Je?(ut&&t.texStorage3D(n.TEXTURE_3D,me,_e,te.width,te.height,te.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ee,be,te.data)):t.texImage3D(n.TEXTURE_3D,0,_e,te.width,te.height,te.depth,0,Ee,be,te.data);else if(E.isFramebufferTexture){if(ut)if(Je)t.texStorage2D(n.TEXTURE_2D,me,_e,te.width,te.height);else{let J=te.width,Ce=te.height;for(let ve=0;ve<me;ve++)t.texImage2D(n.TEXTURE_2D,ve,_e,J,Ce,0,Ee,be,null),J>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),te.parentNode!==J){J.appendChild(te),h.add(E),J.onpaint=Qe=>{const kt=Qe.changedElements;for(const yt of h)kt.includes(yt.image)&&(yt.needsUpdate=!0)},J.requestPaint();return}const Ce=0,ve=n.RGBA,ae=n.RGBA,Oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Ce,ve,ae,Oe,te),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Je&&ut){const J=mt(Ve[0]);t.texStorage2D(n.TEXTURE_2D,me,_e,J.width,J.height)}for(let J=0,Ce=Ve.length;J<Ce;J++)de=Ve[J],Je?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ee,be,de):t.texImage2D(n.TEXTURE_2D,J,_e,Ee,be,de);E.generateMipmaps=!1}else if(Je){if(ut){const J=mt(te);t.texStorage2D(n.TEXTURE_2D,me,_e,J.width,J.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,be,te)}else t.texImage2D(n.TEXTURE_2D,0,_e,Ee,be,te);d(E)&&m(Q),pe.__version=he.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ye(R,E,z){if(E.image.length!==6)return;const Q=Z(R,E),oe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const he=i.get(oe);if(oe.version!==he.__version||Q===!0){t.activeTexture(n.TEXTURE0+z);const pe=dt.getPrimaries(dt.workingColorSpace),q=E.colorSpace===ys?null:dt.getPrimaries(E.colorSpace),te=E.colorSpace===ys||pe===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let ae=0;ae<6;ae++)!Ee&&!be?_e[ae]=_(E.image[ae],!0,r.maxCubemapSize):_e[ae]=be?E.image[ae].image:E.image[ae],_e[ae]=ue(E,_e[ae]);const de=_e[0],Ve=s.convert(E.format,E.colorSpace),Je=s.convert(E.type),ut=S(E.internalFormat,Ve,Je,E.normalized,E.colorSpace),F=E.isVideoTexture!==!0,me=he.__version===void 0||Q===!0,J=oe.dataReady;let Ce=M(E,de);ke(n.TEXTURE_CUBE_MAP,E);let ve;if(Ee){F&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,ut,de.width,de.height);for(let ae=0;ae<6;ae++){ve=_e[ae].mipmaps;for(let Oe=0;Oe<ve.length;Oe++){const Qe=ve[Oe];E.format!==er?Ve!==null?F?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Qe.width,Qe.height,Ve,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,ut,Qe.width,Qe.height,0,Qe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Qe.width,Qe.height,Ve,Je,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,ut,Qe.width,Qe.height,0,Ve,Je,Qe.data)}}}else{if(ve=E.mipmaps,F&&me){ve.length>0&&Ce++;const ae=mt(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,ut,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(be){F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,_e[ae].width,_e[ae].height,Ve,Je,_e[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ut,_e[ae].width,_e[ae].height,0,Ve,Je,_e[ae].data);for(let Oe=0;Oe<ve.length;Oe++){const kt=ve[Oe].image[ae].image;F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,kt.width,kt.height,Ve,Je,kt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,ut,kt.width,kt.height,0,Ve,Je,kt.data)}}else{F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ve,Je,_e[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ut,Ve,Je,_e[ae]);for(let Oe=0;Oe<ve.length;Oe++){const Qe=ve[Oe];F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,Ve,Je,Qe.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,ut,Ve,Je,Qe.image[ae])}}}d(E)&&m(n.TEXTURE_CUBE_MAP),he.__version=oe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Xe(R,E,z,Q,oe,he){const pe=s.convert(z.format,z.colorSpace),q=s.convert(z.type),te=S(z.internalFormat,pe,q,z.normalized,z.colorSpace),Ee=i.get(E),be=i.get(z);if(be.__renderTarget=E,!Ee.__hasExternalTextures){const _e=Math.max(1,E.width>>he),de=Math.max(1,E.height>>he);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,he,te,_e,de,E.depth,0,pe,q,null):t.texImage2D(oe,he,te,_e,de,0,pe,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),De(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,oe,be.__webglTexture,0,Ze(E)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,oe,be.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(R,E,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer){const Q=E.depthTexture,oe=Q&&Q.isDepthTexture?Q.type:null,he=T(E.stencilBuffer,oe),pe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;De(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(E),he,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(E),he,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,he,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,R)}else{const Q=E.textures;for(let oe=0;oe<Q.length;oe++){const he=Q[oe],pe=s.convert(he.format,he.colorSpace),q=s.convert(he.type),te=S(he.internalFormat,pe,q,he.normalized,he.colorSpace);De(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(E),te,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(E),te,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,te,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $e(R,E,z){const Q=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(E.depthTexture);if(oe.__renderTarget=E,(!oe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),oe.__webglTexture===void 0){oe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),ke(n.TEXTURE_CUBE_MAP,E.depthTexture);const Ee=s.convert(E.depthTexture.format),be=s.convert(E.depthTexture.type);let _e;E.depthTexture.format===Zr?_e=n.DEPTH_COMPONENT24:E.depthTexture.format===xo&&(_e=n.DEPTH24_STENCIL8);for(let de=0;de<6;de++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,_e,E.width,E.height,0,Ee,be,null)}}else U(E.depthTexture,0);const he=oe.__webglTexture,pe=Ze(E),q=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,te=E.depthTexture.format===xo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Zr)De(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,q,he,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,te,q,he,0);else if(E.depthTexture.format===xo)De(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,q,he,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,te,q,he,0);else throw new Error("Unknown depthTexture format")}function re(R){const E=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",oe)};Q.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=Q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(z)for(let Q=0;Q<6;Q++)$e(E.__webglFramebuffer[Q],R,Q);else{const Q=R.texture.mipmaps;Q&&Q.length>0?$e(E.__webglFramebuffer[0],R,0):$e(E.__webglFramebuffer,R,0)}else if(z){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=n.createRenderbuffer(),ht(E.__webglDepthbuffer[Q],R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,he)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ht(E.__webglDepthbuffer,R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,he)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(R,E,z){const Q=i.get(R);E!==void 0&&Xe(Q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&re(R)}function se(R){const E=R.texture,z=i.get(R),Q=i.get(E);R.addEventListener("dispose",y);const oe=R.textures,he=R.isWebGLCubeRenderTarget===!0,pe=oe.length>1;if(pe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=E.version,o.memory.textures++),he){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let te=0;te<E.mipmaps.length;te++)z.__webglFramebuffer[q][te]=n.createFramebuffer()}else z.__webglFramebuffer[q]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<E.mipmaps.length;q++)z.__webglFramebuffer[q]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(pe)for(let q=0,te=oe.length;q<te;q++){const Ee=i.get(oe[q]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&De(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<oe.length;q++){const te=oe[q];z.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[q]);const Ee=s.convert(te.format,te.colorSpace),be=s.convert(te.type),_e=S(te.internalFormat,Ee,be,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),de=Ze(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,_e,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,z.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ke(n.TEXTURE_CUBE_MAP,E);for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)Xe(z.__webglFramebuffer[q][te],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,te);else Xe(z.__webglFramebuffer[q],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);d(E)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let q=0,te=oe.length;q<te;q++){const Ee=oe[q],be=i.get(Ee);let _e=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,be.__webglTexture),ke(_e,Ee),Xe(z.__webglFramebuffer,R,Ee,n.COLOR_ATTACHMENT0+q,_e,0),d(Ee)&&m(_e)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,Q.__webglTexture),ke(q,E),E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)Xe(z.__webglFramebuffer[te],R,E,n.COLOR_ATTACHMENT0,q,te);else Xe(z.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,q,0);d(E)&&m(q),t.unbindTexture()}R.depthBuffer&&re(R)}function Me(R){const E=R.textures;for(let z=0,Q=E.length;z<Q;z++){const oe=E[z];if(d(oe)){const he=x(R),pe=i.get(oe).__webglTexture;t.bindTexture(he,pe),m(he),t.unbindTexture()}}}const ye=[],Ke=[];function L(R){if(R.samples>0){if(De(R)===!1){const E=R.textures,z=R.width,Q=R.height;let oe=n.COLOR_BUFFER_BIT;const he=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(R),q=E.length>1;if(q)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ee]);const be=i.get(E[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,z,Q,0,0,z,Q,oe,n.NEAREST),l===!0&&(ye.length=0,Ke.length=0,ye.push(n.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ye.push(he),Ke.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ee]);const be=i.get(E[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ze(R){return Math.min(r.maxSamples,R.samples)}function De(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function We(R){const E=o.render.frame;c.get(R)!==E&&(c.set(R,E),R.update())}function ue(R,E){const z=R.colorSpace,Q=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Gf&&z!==ys&&(dt.getTransfer(z)===wt?(Q!==er||oe!==gi)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",z)),E}function mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.getTextureUnits=X,this.setTextureUnits=N,this.setTexture2D=U,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=ce,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function BP(n,e){function t(i,r=ys){let s;const o=dt.getTransfer(r);if(i===gi)return n.UNSIGNED_BYTE;if(i===J0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Q0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dM)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cM)return n.BYTE;if(i===fM)return n.SHORT;if(i===_u)return n.UNSIGNED_SHORT;if(i===Z0)return n.INT;if(i===wr)return n.UNSIGNED_INT;if(i===vr)return n.FLOAT;if(i===Kr)return n.HALF_FLOAT;if(i===pM)return n.ALPHA;if(i===mM)return n.RGB;if(i===er)return n.RGBA;if(i===Zr)return n.DEPTH_COMPONENT;if(i===xo)return n.DEPTH_STENCIL;if(i===gM)return n.RED;if(i===eg)return n.RED_INTEGER;if(i===No)return n.RG;if(i===tg)return n.RG_INTEGER;if(i===ng)return n.RGBA_INTEGER;if(i===af||i===lf||i===uf||i===cf)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===af)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===af)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rm||i===sm||i===om||i===am)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===om)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===am)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lm||i===um||i===cm||i===fm||i===hm||i===zf||i===dm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lm||i===um)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===fm)return s.COMPRESSED_R11_EAC;if(i===hm)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zf)return s.COMPRESSED_RG11_EAC;if(i===dm)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pm||i===mm||i===gm||i===_m||i===vm||i===xm||i===ym||i===Sm||i===Mm||i===Em||i===Tm||i===wm||i===Am||i===Cm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===pm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_m)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ym)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Em)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Am)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rm||i===bm||i===Pm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rm)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lm||i===Dm||i===Vf||i===Nm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lm)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vu?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const zP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VP=`
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

}`;class GP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ar({vertexShader:zP,fragmentShader:VP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Bu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HP extends ko{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",_=new GP,d={},m=t.getContextAttributes();let x=null,S=null;const T=[],M=[],w=new Ae;let y=null;const A=new ki;A.viewport=new en;const b=new ki;b.viewport=new en;const P=[A,b],I=new JC;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let xe=T[Z];return xe===void 0&&(xe=new gd,T[Z]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(Z){let xe=T[Z];return xe===void 0&&(xe=new gd,T[Z]=xe),xe.getGripSpace()},this.getHand=function(Z){let xe=T[Z];return xe===void 0&&(xe=new gd,T[Z]=xe),xe.getHandSpace()};function N(Z){const xe=M.indexOf(Z.inputSource);if(xe===-1)return;const ge=T[xe];ge!==void 0&&(ge.update(Z.inputSource,Z.frame,u||o),ge.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",O);for(let Z=0;Z<T.length;Z++){const xe=M[Z];xe!==null&&(M[Z]=null,T[Z].disconnect(xe))}G=null,X=null,_.reset();for(const Z in d)delete d[Z];e.setRenderTarget(x),p=null,f=null,h=null,r=null,S=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",B),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Fe=null,Ye=null;m.depth&&(Ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?xo:Zr,Fe=m.stencil?vu:wr);const Xe={colorFormat:t.RGBA8,depthFormat:Ye,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Tr(f.textureWidth,f.textureHeight,{format:er,type:gi,depthTexture:new qa(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Tr(p.framebufferWidth,p.framebufferHeight,{format:er,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(Z){for(let xe=0;xe<Z.removed.length;xe++){const ge=Z.removed[xe],Fe=M.indexOf(ge);Fe>=0&&(M[Fe]=null,T[Fe].disconnect(ge))}for(let xe=0;xe<Z.added.length;xe++){const ge=Z.added[xe];let Fe=M.indexOf(ge);if(Fe===-1){for(let Xe=0;Xe<T.length;Xe++)if(Xe>=M.length){M.push(ge),Fe=Xe;break}else if(M[Xe]===null){M[Xe]=ge,Fe=Xe;break}if(Fe===-1)break}const Ye=T[Fe];Ye&&Ye.connect(ge)}}const U=new D,V=new D;function j(Z,xe,ge){U.setFromMatrixPosition(xe.matrixWorld),V.setFromMatrixPosition(ge.matrixWorld);const Fe=U.distanceTo(V),Ye=xe.projectionMatrix.elements,Xe=ge.projectionMatrix.elements,ht=Ye[14]/(Ye[10]-1),$e=Ye[14]/(Ye[10]+1),re=(Ye[9]+1)/Ye[5],ce=(Ye[9]-1)/Ye[5],se=(Ye[8]-1)/Ye[0],Me=(Xe[8]+1)/Xe[0],ye=ht*se,Ke=ht*Me,L=Fe/(-se+Me),Ze=L*-se;if(xe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ze),Z.translateZ(L),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ye[10]===-1)Z.projectionMatrix.copy(xe.projectionMatrix),Z.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const De=ht+L,We=$e+L,ue=ye-Ze,mt=Ke+(Fe-Ze),R=re*$e/We*De,E=ce*$e/We*De;Z.projectionMatrix.makePerspective(ue,mt,R,E,De,We),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function $(Z,xe){xe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(xe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let xe=Z.near,ge=Z.far;_.texture!==null&&(_.depthNear>0&&(xe=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),I.near=b.near=A.near=xe,I.far=b.far=A.far=ge,(G!==I.near||X!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),G=I.near,X=I.far),I.layers.mask=Z.layers.mask|6,A.layers.mask=I.layers.mask&-5,b.layers.mask=I.layers.mask&-3;const Fe=Z.parent,Ye=I.cameras;$(I,Fe);for(let Xe=0;Xe<Ye.length;Xe++)$(Ye[Xe],Fe);Ye.length===2?j(I,A,b):I.projectionMatrix.copy(A.projectionMatrix),K(Z,I,Fe)};function K(Z,xe,ge){ge===null?Z.matrix.copy(xe.matrixWorld):(Z.matrix.copy(ge.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(xe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(xe.projectionMatrix),Z.projectionMatrixInverse.copy(xe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=yu*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(Z){return d[Z]};let Ge=null;function He(Z,xe){if(c=xe.getViewerPose(u||o),g=xe,c!==null){const ge=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Fe=!1;ge.length!==I.cameras.length&&(I.cameras.length=0,Fe=!0);for(let $e=0;$e<ge.length;$e++){const re=ge[$e];let ce=null;if(p!==null)ce=p.getViewport(re);else{const Me=h.getViewSubImage(f,re);ce=Me.viewport,$e===0&&(e.setRenderTargetTextures(S,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(S))}let se=P[$e];se===void 0&&(se=new ki,se.layers.enable($e),se.viewport=new en,P[$e]=se),se.matrix.fromArray(re.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(re.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ce.x,ce.y,ce.width,ce.height),$e===0&&(I.matrix.copy(se.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Fe===!0&&I.cameras.push(se)}const Ye=r.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const $e=h.getDepthInformation(ge[0]);$e&&$e.isValid&&$e.texture&&_.init($e,r.renderState)}if(Ye&&Ye.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let $e=0;$e<ge.length;$e++){const re=ge[$e].camera;if(re){let ce=d[re];ce||(ce=new wM,d[re]=ce);const se=h.getCameraImage(re);ce.sourceTexture=se}}}}for(let ge=0;ge<T.length;ge++){const Fe=M[ge],Ye=T[ge];Fe!==null&&Ye!==void 0&&Ye.update(Fe,xe,u||o)}Ge&&Ge(Z,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}const ke=new OM;ke.setAnimationLoop(He),this.setAnimationLoop=function(Z){Ge=Z},this.dispose=function(){}}}const WP=new Ht,WM=new tt;WM.set(-1,0,0,0,1,0,0,0,1);function XP(n,e){function t(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function i(_,d){d.color.getRGB(_.fogColor.value,IM(n)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,m,x,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(_,d):d.isMeshLambertMaterial?(s(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(_,d),h(_,d)):d.isMeshPhongMaterial?(s(_,d),c(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(_,d),f(_,d),d.isMeshPhysicalMaterial&&p(_,d,S)):d.isMeshMatcapMaterial?(s(_,d),g(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),v(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(o(_,d),d.isLineDashedMaterial&&a(_,d)):d.isPointsMaterial?l(_,d,m,x):d.isSpriteMaterial?u(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,t(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===ii&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,t(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===ii&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,t(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,t(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const m=e.get(d),x=m.envMap,S=m.envMapRotation;x&&(_.envMap.value=x,_.envMapRotation.value.setFromMatrix4(WP.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(WM),_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,_.aoMapTransform))}function o(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform))}function a(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,m,x){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*m,_.scale.value=x*.5,d.map&&(_.map.value=d.map,t(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function h(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function f(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function p(_,d,m){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ii&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,d){d.matcap&&(_.matcap.value=d.matcap)}function v(_,d){const m=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YP(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const S=x.program;i.uniformBlockBinding(m,S)}function u(m,x){let S=r[m.id];S===void 0&&(g(m),S=c(m),r[m.id]=S,m.addEventListener("dispose",_));const T=x.program;i.updateUBOMapping(m,T);const M=e.render.frame;s[m.id]!==M&&(f(m),s[m.id]=M)}function c(m){const x=h();m.__bindingPointIndex=x;const S=n.createBuffer(),T=m.__size,M=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const x=r[m.id],S=m.uniforms,T=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let M=0,w=S.length;M<w;M++){const y=Array.isArray(S[M])?S[M]:[S[M]];for(let A=0,b=y.length;A<b;A++){const P=y[A];if(p(P,M,A,T)===!0){const I=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let N=0;N<G.length;N++){const B=G[N],O=v(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,I+X,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):ArrayBuffer.isView(B)?P.__data.set(new B.constructor(B.buffer,B.byteOffset,P.__data.length)):(B.toArray(P.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(m,x,S,T){const M=m.value,w=x+"_"+S;if(T[w]===void 0)return typeof M=="number"||typeof M=="boolean"?T[w]=M:ArrayBuffer.isView(M)?T[w]=M.slice():T[w]=M.clone(),!0;{const y=T[w];if(typeof M=="number"||typeof M=="boolean"){if(y!==M)return T[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(y.equals(M)===!1)return y.copy(M),!0}}return!1}function g(m){const x=m.uniforms;let S=0;const T=16;for(let w=0,y=x.length;w<y;w++){const A=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,P=A.length;b<P;b++){const I=A[b],G=Array.isArray(I.value)?I.value:[I.value];for(let X=0,N=G.length;X<N;X++){const B=G[X],O=v(B),U=S%T,V=U%O.boundary,j=U+V;S+=V,j!==0&&T-j<O.storage&&(S+=T-j),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=O.storage}}}const M=S%T;return M>0&&(S+=T-M),m.__size=S,m.__cache={},this}function v(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):je("WebGLRenderer: Unsupported uniform value type.",m),x}function _(m){const x=m.target;x.removeEventListener("dispose",_);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const m in r)n.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}const qP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fr=null;function jP(){return fr===null&&(fr=new tC(qP,16,16,No,Kr),fr.name="DFG_LUT",fr.minFilter=Bn,fr.magFilter=Bn,fr.wrapS=Gr,fr.wrapT=Gr,fr.generateMipmaps=!1,fr.needsUpdate=!0),fr}class $P{constructor(e={}){const{canvas:t=_A(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=gi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,_=new Set([ng,tg,eg]),d=new Set([gi,wr,_u,vu,J0,Q0]),m=new Uint32Array(4),x=new Int32Array(4),S=new D;let T=null,M=null;const w=[],y=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,I=null;this._outputColorSpace=Ui;let G=0,X=0,N=null,B=-1,O=null;const U=new en,V=new en;let j=null;const $=new rt(0);let K=0,Ge=t.width,He=t.height,ke=1,Z=null,xe=null;const ge=new en(0,0,Ge,He),Fe=new en(0,0,Ge,He);let Ye=!1;const Xe=new ug;let ht=!1,$e=!1;const re=new Ht,ce=new D,se=new en,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Ke(){return N===null?ke:1}let L=i;function Ze(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${K0}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),L===null){const k="webgl2";if(L=Ze(k,C),L===null)throw Ze(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw gt("WebGLRenderer: "+C.message),C}let De,We,ue,mt,R,E,z,Q,oe,he,pe,q,te,Ee,be,_e,de,Ve,Je,ut,F,me,J;function Ce(){De=new jb(L),De.init(),F=new BP(L,De),We=new zb(L,De,e,F),ue=new OP(L,De),We.reversedDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),mt=new Zb(L),R=new EP,E=new kP(L,De,ue,R,We,F,mt),z=new qb(b),Q=new tR(L),me=new kb(L,Q),oe=new $b(L,Q,mt,me),he=new Qb(L,oe,Q,me,mt),Ve=new Jb(L,We,E),be=new Vb(R),pe=new MP(b,z,De,We,me,be),q=new XP(b,R),te=new wP,Ee=new LP(De),de=new Ob(b,z,ue,he,g,l),_e=new FP(b,he,We),J=new YP(L,mt,We,ue),Je=new Bb(L,De,mt),ut=new Kb(L,De,mt),mt.programs=pe.programs,b.capabilities=We,b.extensions=De,b.properties=R,b.renderLists=te,b.shadowMap=_e,b.state=ue,b.info=mt}Ce(),v!==gi&&(A=new t3(v,t.width,t.height,r,s));const ve=new HP(b,L);this.xr=ve,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=De.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=De.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(C){C!==void 0&&(ke=C,this.setSize(Ge,He,!1))},this.getSize=function(C){return C.set(Ge,He)},this.setSize=function(C,k,Y=!0){if(ve.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=C,He=k,t.width=Math.floor(C*ke),t.height=Math.floor(k*ke),Y===!0&&(t.style.width=C+"px",t.style.height=k+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(Ge*ke,He*ke).floor()},this.setDrawingBufferSize=function(C,k,Y){Ge=C,He=k,ke=Y,t.width=Math.floor(C*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(v===gi){gt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){je("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(ge)},this.setViewport=function(C,k,Y,H){C.isVector4?ge.set(C.x,C.y,C.z,C.w):ge.set(C,k,Y,H),ue.viewport(U.copy(ge).multiplyScalar(ke).round())},this.getScissor=function(C){return C.copy(Fe)},this.setScissor=function(C,k,Y,H){C.isVector4?Fe.set(C.x,C.y,C.z,C.w):Fe.set(C,k,Y,H),ue.scissor(V.copy(Fe).multiplyScalar(ke).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(C){ue.setScissorTest(Ye=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){xe=C},this.getClearColor=function(C){return C.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,Y=!0){let H=0;if(C){let W=!1;if(N!==null){const Te=N.texture.format;W=_.has(Te)}if(W){const Te=N.texture.type,Pe=d.has(Te),Se=de.getClearColor(),Ue=de.getClearAlpha(),Ne=Se.r,et=Se.g,nt=Se.b;Pe?(m[0]=Ne,m[1]=et,m[2]=nt,m[3]=Ue,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=Ne,x[1]=et,x[2]=nt,x[3]=Ue,L.clearBufferiv(L.COLOR,0,x))}else H|=L.COLOR_BUFFER_BIT}k&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),de.dispose(),te.dispose(),Ee.dispose(),R.dispose(),z.dispose(),he.dispose(),me.dispose(),J.dispose(),pe.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",ts),ve.removeEventListener("sessionend",ns),Pi.stop()};function ae(C){C.preventDefault(),yv("WebGLRenderer: Context Lost."),P=!0}function Oe(){yv("WebGLRenderer: Context Restored."),P=!1;const C=mt.autoReset,k=_e.enabled,Y=_e.autoUpdate,H=_e.needsUpdate,W=_e.type;Ce(),mt.autoReset=C,_e.enabled=k,_e.autoUpdate=Y,_e.needsUpdate=H,_e.type=W}function Qe(C){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function kt(C){const k=C.target;k.removeEventListener("dispose",kt),yt(k)}function yt(C){bi(C),R.remove(C)}function bi(C){const k=R.get(C).programs;k!==void 0&&(k.forEach(function(Y){pe.releaseProgram(Y)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Y,H,W,Te){k===null&&(k=Me);const Pe=W.isMesh&&W.matrixWorld.determinant()<0,Se=cl(C,k,Y,H,W);ue.setMaterial(H,Pe);let Ue=Y.index,Ne=1;if(H.wireframe===!0){if(Ue=oe.getWireframeAttribute(Y),Ue===void 0)return;Ne=2}const et=Y.drawRange,nt=Y.attributes.position;let Be=et.start*Ne,St=(et.start+et.count)*Ne;Te!==null&&(Be=Math.max(Be,Te.start*Ne),St=Math.min(St,(Te.start+Te.count)*Ne)),Ue!==null?(Be=Math.max(Be,0),St=Math.min(St,Ue.count)):nt!=null&&(Be=Math.max(Be,0),St=Math.min(St,nt.count));const Bt=St-Be;if(Bt<0||Bt===1/0)return;me.setup(W,H,Se,Y,Ue);let It,Tt=Je;if(Ue!==null&&(It=Q.get(Ue),Tt=ut,Tt.setIndex(It)),W.isMesh)H.wireframe===!0?(ue.setLineWidth(H.wireframeLinewidth*Ke()),Tt.setMode(L.LINES)):Tt.setMode(L.TRIANGLES);else if(W.isLine){let ln=H.linewidth;ln===void 0&&(ln=1),ue.setLineWidth(ln*Ke()),W.isLineSegments?Tt.setMode(L.LINES):W.isLineLoop?Tt.setMode(L.LINE_LOOP):Tt.setMode(L.LINE_STRIP)}else W.isPoints?Tt.setMode(L.POINTS):W.isSprite&&Tt.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(De.get("WEBGL_multi_draw"))Tt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ln=W._multiDrawStarts,Re=W._multiDrawCounts,Tn=W._multiDrawCount,ct=Ue?Q.get(Ue).bytesPerElement:1,Pn=R.get(H).currentProgram.getUniforms();for(let ui=0;ui<Tn;ui++)Pn.setValue(L,"_gl_DrawID",ui),Tt.render(ln[ui]/ct,Re[ui])}else if(W.isInstancedMesh)Tt.renderInstances(Be,Bt,W.count);else if(Y.isInstancedBufferGeometry){const ln=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Re=Math.min(Y.instanceCount,ln);Tt.renderInstances(Be,Bt,Re)}else Tt.render(Be,Bt)};function Mn(C,k,Y){C.transparent===!0&&C.side===Br&&C.forceSinglePass===!1?(C.side=ii,C.needsUpdate=!0,$s(C,k,Y),C.side=Bs,C.needsUpdate=!0,$s(C,k,Y),C.side=Br):$s(C,k,Y)}this.compile=function(C,k,Y=null){Y===null&&(Y=C),M=Ee.get(Y),M.init(k),y.push(M),Y.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),C!==Y&&C.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights();const H=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Se=Te[Pe];Mn(Se,Y,W),H.add(Se)}else Mn(Te,Y,W),H.add(Te)}),M=y.pop(),H},this.compileAsync=function(C,k,Y=null){const H=this.compile(C,k,Y);return new Promise(W=>{function Te(){if(H.forEach(function(Pe){R.get(Pe).currentProgram.isReady()&&H.delete(Pe)}),H.size===0){W(C);return}setTimeout(Te,10)}De.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let qs=null;function Vu(C){qs&&qs(C)}function ts(){Pi.stop()}function ns(){Pi.start()}const Pi=new OM;Pi.setAnimationLoop(Vu),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(C){qs=C,ve.setAnimationLoop(C),C===null?Pi.stop():Pi.start()},ve.addEventListener("sessionstart",ts),ve.addEventListener("sessionend",ns),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(C,k);const Y=ve.enabled===!0&&ve.isPresenting===!0,H=A!==null&&(N===null||Y)&&A.begin(b,N);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(k),k=ve.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,k,N),M=Ee.get(C,y.length),M.init(k),M.state.textureUnits=E.getTextureUnits(),y.push(M),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Xe.setFromProjectionMatrix(re,xr,k.reversedDepth),$e=this.localClippingEnabled,ht=be.init(this.clippingPlanes,$e),T=te.get(C,w.length),T.init(),w.push(T),ve.enabled===!0&&ve.isPresenting===!0){const Pe=b.xr.getDepthSensingMesh();Pe!==null&&is(Pe,k,-1/0,b.sortObjects)}is(C,k,0,b.sortObjects),T.finish(),b.sortObjects===!0&&T.sort(Z,xe),ye=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,ye&&de.addToRenderList(T,C),this.info.render.frame++,ht===!0&&be.beginShadows();const W=M.state.shadowsArray;if(_e.render(W,C,k),ht===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&A.hasRenderPass())===!1){const Pe=T.opaque,Se=T.transmissive;if(M.setupLights(),k.isArrayCamera){const Ue=k.cameras;if(Se.length>0)for(let Ne=0,et=Ue.length;Ne<et;Ne++){const nt=Ue[Ne];Vo(Pe,Se,C,nt)}ye&&de.render(C);for(let Ne=0,et=Ue.length;Ne<et;Ne++){const nt=Ue[Ne];js(T,C,nt,nt.viewport)}}else Se.length>0&&Vo(Pe,Se,C,k),ye&&de.render(C),js(T,C,k)}N!==null&&X===0&&(E.updateMultisampleRenderTarget(N),E.updateRenderTargetMipmap(N)),H&&A.end(b),C.isScene===!0&&C.onAfterRender(b,C,k),me.resetDefaultState(),B=-1,O=null,y.pop(),y.length>0?(M=y[y.length-1],E.setTextureUnits(M.state.textureUnits),ht===!0&&be.setGlobalState(b.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,I!==null&&I.renderEnd()};function is(C,k,Y,H){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLightProbeGrid)M.pushLightProbeGrid(C);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Xe.intersectsSprite(C)){H&&se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);const Pe=he.update(C),Se=C.material;Se.visible&&T.push(C,Pe,Se,Y,se.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Xe.intersectsObject(C))){const Pe=he.update(C),Se=C.material;if(H&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),se.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),se.copy(Pe.boundingSphere.center)),se.applyMatrix4(C.matrixWorld).applyMatrix4(re)),Array.isArray(Se)){const Ue=Pe.groups;for(let Ne=0,et=Ue.length;Ne<et;Ne++){const nt=Ue[Ne],Be=Se[nt.materialIndex];Be&&Be.visible&&T.push(C,Pe,Be,Y,se.z,nt)}}else Se.visible&&T.push(C,Pe,Se,Y,se.z,null)}}const Te=C.children;for(let Pe=0,Se=Te.length;Pe<Se;Pe++)is(Te[Pe],k,Y,H)}function js(C,k,Y,H){const{opaque:W,transmissive:Te,transparent:Pe}=C;M.setupLightsView(Y),ht===!0&&be.setGlobalState(b.clippingPlanes,Y),H&&ue.viewport(U.copy(H)),W.length>0&&rs(W,k,Y),Te.length>0&&rs(Te,k,Y),Pe.length>0&&rs(Pe,k,Y),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Vo(C,k,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){const Be=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new Tr(1,1,{generateMipmaps:!0,type:Be?Kr:gi,minFilter:vo,samples:Math.max(4,We.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Te=M.state.transmissionRenderTarget[H.id],Pe=H.viewport||U;Te.setSize(Pe.z*b.transmissionResolutionScale,Pe.w*b.transmissionResolutionScale);const Se=b.getRenderTarget(),Ue=b.getActiveCubeFace(),Ne=b.getActiveMipmapLevel();b.setRenderTarget(Te),b.getClearColor($),K=b.getClearAlpha(),K<1&&b.setClearColor(16777215,.5),b.clear(),ye&&de.render(Y);const et=b.toneMapping;b.toneMapping=Er;const nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),ht===!0&&be.setGlobalState(b.clippingPlanes,H),rs(C,Y,H),E.updateMultisampleRenderTarget(Te),E.updateRenderTargetMipmap(Te),De.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let St=0,Bt=k.length;St<Bt;St++){const It=k[St],{object:Tt,geometry:ln,material:Re,group:Tn}=It;if(Re.side===Br&&Tt.layers.test(H.layers)){const ct=Re.side;Re.side=ii,Re.needsUpdate=!0,al(Tt,Y,H,ln,Re,Tn),Re.side=ct,Re.needsUpdate=!0,Be=!0}}Be===!0&&(E.updateMultisampleRenderTarget(Te),E.updateRenderTargetMipmap(Te))}b.setRenderTarget(Se,Ue,Ne),b.setClearColor($,K),nt!==void 0&&(H.viewport=nt),b.toneMapping=et}function rs(C,k,Y){const H=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Te=C.length;W<Te;W++){const Pe=C[W],{object:Se,geometry:Ue,group:Ne}=Pe;let et=Pe.material;et.allowOverride===!0&&H!==null&&(et=H),Se.layers.test(Y.layers)&&al(Se,k,Y,Ue,et,Ne)}}function al(C,k,Y,H,W,Te){C.onBeforeRender(b,k,Y,H,W,Te),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(b,k,Y,H,C,Te),W.transparent===!0&&W.side===Br&&W.forceSinglePass===!1?(W.side=ii,W.needsUpdate=!0,b.renderBufferDirect(Y,k,H,W,C,Te),W.side=Bs,W.needsUpdate=!0,b.renderBufferDirect(Y,k,H,W,C,Te),W.side=Br):b.renderBufferDirect(Y,k,H,W,C,Te),C.onAfterRender(b,k,Y,H,W,Te)}function $s(C,k,Y){k.isScene!==!0&&(k=Me);const H=R.get(C),W=M.state.lights,Te=M.state.shadowsArray,Pe=W.state.version,Se=pe.getParameters(C,W.state,Te,k,Y,M.state.lightProbeGridArray),Ue=pe.getProgramCacheKey(Se);let Ne=H.programs;H.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,H.fog=k.fog;const et=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;H.envMap=z.get(C.envMap||H.environment,et),H.envMapRotation=H.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ne===void 0&&(C.addEventListener("dispose",kt),Ne=new Map,H.programs=Ne);let nt=Ne.get(Ue);if(nt!==void 0){if(H.currentProgram===nt&&H.lightsStateVersion===Pe)return En(C,Se),nt}else Se.uniforms=pe.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,Y,Se),C.onBeforeCompile(Se,b),nt=pe.acquireProgram(Se,Ue),Ne.set(Ue,nt),H.uniforms=Se.uniforms;const Be=H.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=be.uniform),En(C,Se),H.needsLights=Ks(C),H.lightsStateVersion=Pe,H.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=nt,H.uniformsList=null,nt}function ll(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=hf.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function En(C,k){const Y=R.get(C);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function ul(C,k){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;S.setFromMatrixPosition(k.matrixWorld);for(let Y=0,H=C.length;Y<H;Y++){const W=C[Y];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function cl(C,k,Y,H,W){k.isScene!==!0&&(k=Me),E.resetTextureUnits();const Te=k.fog,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?k.environment:null,Se=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:dt.workingColorSpace,Ue=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ne=z.get(H.envMap||Pe,Ue),et=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,nt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Be=!!Y.morphAttributes.position,St=!!Y.morphAttributes.normal,Bt=!!Y.morphAttributes.color;let It=Er;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(It=b.toneMapping);const Tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ln=Tt!==void 0?Tt.length:0,Re=R.get(H),Tn=M.state.lights;if(ht===!0&&($e===!0||C!==O)){const Ct=C===O&&H.id===B;be.setState(H,C,Ct)}let ct=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Tn.state.version||Re.outputColorSpace!==Se||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==Ne||H.fog===!0&&Re.fog!==Te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==be.numPlanes||Re.numIntersection!==be.numIntersection)||Re.vertexAlphas!==et||Re.vertexTangents!==nt||Re.morphTargets!==Be||Re.morphNormals!==St||Re.morphColors!==Bt||Re.toneMapping!==It||Re.morphTargetsCount!==ln||!!Re.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Re.__version=H.version);let Pn=Re.currentProgram;ct===!0&&(Pn=$s(H,k,W),I&&H.isNodeMaterial&&I.onUpdateProgram(H,Pn,Re));let ui=!1,rr=!1,br=!1;const xt=Pn.getUniforms(),Ut=Re.uniforms;if(ue.useProgram(Pn.program)&&(ui=!0,rr=!0,br=!0),H.id!==B&&(B=H.id,rr=!0),Re.needsLights){const Ct=ul(M.state.lightProbeGridArray,W);Re.lightProbeGrid!==Ct&&(Re.lightProbeGrid=Ct,rr=!0)}if(ui||O!==C){ue.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),xt.setValue(L,"projectionMatrix",C.projectionMatrix),xt.setValue(L,"viewMatrix",C.matrixWorldInverse);const Di=xt.map.cameraPosition;Di!==void 0&&Di.setValue(L,ce.setFromMatrixPosition(C.matrixWorld)),We.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),O!==C&&(O=C,rr=!0,br=!0)}if(Re.needsLights&&(Tn.state.directionalShadowMap.length>0&&xt.setValue(L,"directionalShadowMap",Tn.state.directionalShadowMap,E),Tn.state.spotShadowMap.length>0&&xt.setValue(L,"spotShadowMap",Tn.state.spotShadowMap,E),Tn.state.pointShadowMap.length>0&&xt.setValue(L,"pointShadowMap",Tn.state.pointShadowMap,E)),W.isSkinnedMesh){xt.setOptional(L,W,"bindMatrix"),xt.setOptional(L,W,"bindMatrixInverse");const Ct=W.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),xt.setValue(L,"boneTexture",Ct.boneTexture,E))}W.isBatchedMesh&&(xt.setOptional(L,W,"batchingTexture"),xt.setValue(L,"batchingTexture",W._matricesTexture,E),xt.setOptional(L,W,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",W._indirectTexture,E),xt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",W._colorsTexture,E));const Li=Y.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Ve.update(W,Y,Pn),(rr||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,xt.setValue(L,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&k.environment!==null&&(Ut.envMapIntensity.value=k.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=jP()),rr){if(xt.setValue(L,"toneMappingExposure",b.toneMappingExposure),Re.needsLights&&zg(Ut,br),Te&&H.fog===!0&&q.refreshFogUniforms(Ut,Te),q.refreshMaterialUniforms(Ut,H,ke,He,M.state.transmissionRenderTarget[C.id]),Re.needsLights&&Re.lightProbeGrid){const Ct=Re.lightProbeGrid;Ut.probesSH.value=Ct.texture,Ut.probesMin.value.copy(Ct.boundingBox.min),Ut.probesMax.value.copy(Ct.boundingBox.max),Ut.probesResolution.value.copy(Ct.resolution)}hf.upload(L,ll(Re),Ut,E)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(hf.upload(L,ll(Re),Ut,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xt.setValue(L,"center",W.center),xt.setValue(L,"modelViewMatrix",W.modelViewMatrix),xt.setValue(L,"normalMatrix",W.normalMatrix),xt.setValue(L,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const Ct=H.uniformsGroups;for(let Di=0,Yi=Ct.length;Di<Yi;Di++){const Zs=Ct[Di];J.update(Zs,Pn),J.bind(Zs,Pn)}}return Pn}function zg(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Ks(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(C,k,Y){const H=R.get(C);H.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),R.get(C.texture).__webglTexture=k,R.get(C.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const Y=R.get(C);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const Gu=L.createFramebuffer();this.setRenderTarget=function(C,k=0,Y=0){N=C,G=k,X=Y;let H=null,W=!1,Te=!1;if(C){const Se=R.get(C);if(Se.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(L.FRAMEBUFFER,Se.__webglFramebuffer),U.copy(C.viewport),V.copy(C.scissor),j=C.scissorTest,ue.viewport(U),ue.scissor(V),ue.setScissorTest(j),B=-1;return}else if(Se.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(Se.__hasExternalTextures)E.rebindTextures(C,R.get(C.texture).__webglTexture,R.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Se.__boundDepthTexture!==et){if(et!==null&&R.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const Ue=C.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Te=!0);const Ne=R.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?H=Ne[k][Y]:H=Ne[k],W=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?H=R.get(C).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[Y]:H=Ne,U.copy(C.viewport),V.copy(C.scissor),j=C.scissorTest}else U.copy(ge).multiplyScalar(ke).floor(),V.copy(Fe).multiplyScalar(ke).floor(),j=Ye;if(Y!==0&&(H=Gu),ue.bindFramebuffer(L.FRAMEBUFFER,H)&&ue.drawBuffers(C,H),ue.viewport(U),ue.scissor(V),ue.setScissorTest(j),W){const Se=R.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,Y)}else if(Te){const Se=k;for(let Ue=0;Ue<C.textures.length;Ue++){const Ne=R.get(C.textures[Ue]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ue,Ne.__webglTexture,Y,Se)}}else if(C!==null&&Y!==0){const Se=R.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,Y)}B=-1},this.readRenderTargetPixels=function(C,k,Y,H,W,Te,Pe,Se=0){if(!(C&&C.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=R.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){ue.bindFramebuffer(L.FRAMEBUFFER,Ue);try{const Ne=C.textures[Se],et=Ne.format,nt=Ne.type;if(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),!We.textureFormatReadable(et)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(nt)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-H&&Y>=0&&Y<=C.height-W&&L.readPixels(k,Y,H,W,F.convert(et),F.convert(nt),Te)}finally{const Ne=N!==null?R.get(N).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(C,k,Y,H,W,Te,Pe,Se=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=R.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue)if(k>=0&&k<=C.width-H&&Y>=0&&Y<=C.height-W){ue.bindFramebuffer(L.FRAMEBUFFER,Ue);const Ne=C.textures[Se],et=Ne.format,nt=Ne.type;if(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),!We.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.bufferData(L.PIXEL_PACK_BUFFER,Te.byteLength,L.STREAM_READ),L.readPixels(k,Y,H,W,F.convert(et),F.convert(nt),0);const St=N!==null?R.get(N).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,St);const Bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await vA(L,Bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Te),L.deleteBuffer(Be),L.deleteSync(Bt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,Y=0){const H=Math.pow(2,-Y),W=Math.floor(C.image.width*H),Te=Math.floor(C.image.height*H),Pe=k!==null?k.x:0,Se=k!==null?k.y:0;E.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Pe,Se,W,Te),ue.unbindTexture()};const Hu=L.createFramebuffer(),Wu=L.createFramebuffer();this.copyTextureToTexture=function(C,k,Y=null,H=null,W=0,Te=0){let Pe,Se,Ue,Ne,et,nt,Be,St,Bt;const It=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(Y!==null)Pe=Y.max.x-Y.min.x,Se=Y.max.y-Y.min.y,Ue=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,et=Y.min.y,nt=Y.isBox3?Y.min.z:0;else{const Ut=Math.pow(2,-W);Pe=Math.floor(It.width*Ut),Se=Math.floor(It.height*Ut),C.isDataArrayTexture?Ue=It.depth:C.isData3DTexture?Ue=Math.floor(It.depth*Ut):Ue=1,Ne=0,et=0,nt=0}H!==null?(Be=H.x,St=H.y,Bt=H.z):(Be=0,St=0,Bt=0);const Tt=F.convert(k.format),ln=F.convert(k.type);let Re;k.isData3DTexture?(E.setTexture3D(k,0),Re=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(E.setTexture2DArray(k,0),Re=L.TEXTURE_2D_ARRAY):(E.setTexture2D(k,0),Re=L.TEXTURE_2D),ue.activeTexture(L.TEXTURE0),ue.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),ue.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ue.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Tn=ue.getParameter(L.UNPACK_ROW_LENGTH),ct=ue.getParameter(L.UNPACK_IMAGE_HEIGHT),Pn=ue.getParameter(L.UNPACK_SKIP_PIXELS),ui=ue.getParameter(L.UNPACK_SKIP_ROWS),rr=ue.getParameter(L.UNPACK_SKIP_IMAGES);ue.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),ue.pixelStorei(L.UNPACK_SKIP_ROWS,et),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,nt);const br=C.isDataArrayTexture||C.isData3DTexture,xt=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const Ut=R.get(C),Li=R.get(k),Ct=R.get(Ut.__renderTarget),Di=R.get(Li.__renderTarget);ue.bindFramebuffer(L.READ_FRAMEBUFFER,Ct.__webglFramebuffer),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Yi=0;Yi<Ue;Yi++)br&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,R.get(C).__webglTexture,W,nt+Yi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,R.get(k).__webglTexture,Te,Bt+Yi)),L.blitFramebuffer(Ne,et,Pe,Se,Be,St,Pe,Se,L.DEPTH_BUFFER_BIT,L.NEAREST);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||C.isRenderTargetTexture||R.has(C)){const Ut=R.get(C),Li=R.get(k);ue.bindFramebuffer(L.READ_FRAMEBUFFER,Hu),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wu);for(let Ct=0;Ct<Ue;Ct++)br?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ut.__webglTexture,W,nt+Ct):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ut.__webglTexture,W),xt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Li.__webglTexture,Te,Bt+Ct):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Li.__webglTexture,Te),W!==0?L.blitFramebuffer(Ne,et,Pe,Se,Be,St,Pe,Se,L.COLOR_BUFFER_BIT,L.NEAREST):xt?L.copyTexSubImage3D(Re,Te,Be,St,Bt+Ct,Ne,et,Pe,Se):L.copyTexSubImage2D(Re,Te,Be,St,Ne,et,Pe,Se);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else xt?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Re,Te,Be,St,Bt,Pe,Se,Ue,Tt,ln,It.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Re,Te,Be,St,Bt,Pe,Se,Ue,Tt,It.data):L.texSubImage3D(Re,Te,Be,St,Bt,Pe,Se,Ue,Tt,ln,It):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Te,Be,St,Pe,Se,Tt,ln,It.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Te,Be,St,It.width,It.height,Tt,It.data):L.texSubImage2D(L.TEXTURE_2D,Te,Be,St,Pe,Se,Tt,ln,It);ue.pixelStorei(L.UNPACK_ROW_LENGTH,Tn),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,Pn),ue.pixelStorei(L.UNPACK_SKIP_ROWS,ui),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,rr),Te===0&&k.generateMipmaps&&L.generateMipmap(Re),ue.unbindTexture()},this.initRenderTarget=function(C){R.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),ue.unbindTexture()},this.resetState=function(){G=0,X=0,N=null,ue.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}function Fr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function XM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Tu={duration:.5,overwrite:!1,delay:0},_g,Rn,Gt,Vi=1e8,bt=1/Vi,Gm=Math.PI*2,KP=Gm/4,ZP=0,YM=Math.sqrt,JP=Math.cos,QP=Math.sin,Sn=function(e){return typeof e=="string"},tn=function(e){return typeof e=="function"},Jr=function(e){return typeof e=="number"},vg=function(e){return typeof e>"u"},Cr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},xg=function(){return typeof window<"u"},Yc=function(e){return tn(e)||Sn(e)},qM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vn=Array.isArray,eL=/random\([^)]+\)/g,tL=/,\s*/g,wx=/(?:-?\.?\d|\.)+/gi,jM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$M=/[+-]=-?[.\d]+/,nL=/[^,'"\[\]\s]+/gi,iL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,pr,Hm,yg,wi={},jf={},KM,ZM=function(e){return(jf=Ka(e,wi))&&li},Sg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},wu=function(e,t){return!t&&console.warn(e)},JM=function(e,t){return e&&(wi[e]=t)&&jf&&(jf[e]=t)||wi},Au=function(){return 0},rL={suppressEvents:!0,isStart:!0,kill:!1},df={suppressEvents:!0,kill:!1},sL={suppressEvents:!0},Mg={},Us=[],Wm={},QM,mi={},qd={},Ax=30,pf=[],Eg="",Tg=function(e){var t=e[0],i,r;if(Cr(t)||tn(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=pf.length;r--&&!pf[r].targetTest(t););i=pf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new S1(e[r],i)))||e.splice(r,1);return e},Eo=function(e){return e._gsap||Tg(Gi(e))[0]._gsap},e1=function(e,t,i){return(i=e[t])&&tn(i)?e[t]():vg(i)&&e.getAttribute&&e.getAttribute(t)||i},si=function(e,t){return(e=e.split(",")).forEach(t)||e},nn=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},Ua=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},oL=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},$f=function(){var e=Us.length,t=Us.slice(0),i,r;for(Wm={},Us.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},wg=function(e){return!!(e._initted||e._startAt||e.add)},t1=function(e,t,i,r){Us.length&&!Rn&&$f(),e.render(t,i,!!(Rn&&t<0&&wg(e))),Us.length&&!Rn&&$f()},n1=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(nL).length<2?t:Sn(e)?e.trim():e},i1=function(e){return e},Ai=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},aL=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ka=function(e,t){for(var i in t)e[i]=t[i];return e},Cx=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Cr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Kf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Zl=function(e){var t=e.parent||Yt,i=e.keyframes?aL(Vn(e.keyframes)):Ai;if(ri(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},lL=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},r1=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Mh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},To=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},uL=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xm=function(e,t,i,r){return e._startAt&&(Rn?e._startAt.revert(df):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},cL=function n(e){return!e||e._ts&&n(e.parent)},Rx=function(e){return e._repeat?Za(e._tTime,e=e.duration()+e._rDelay)*e:0},Za=function(e,t){var i=Math.floor(e=Wt(e/t));return e&&i===e?i-1:i},Zf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Eh=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},Th=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Wt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Eh(e),i._dirty||To(i,e)),e},s1=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Zf(e.rawTime(),t),(!t._dur||zu(0,t.totalDuration(),i)-t._tTime>bt)&&t.render(i,!0)),To(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-bt}},_r=function(e,t,i,r){return t.parent&&zs(t),t._start=Wt((Jr(i)?i:i||e!==Yt?Ii(e,i,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),r1(e,t,"_first","_last",e._sort?"_start":0),Ym(t)||(e._recent=t),r||s1(e,t),e._ts<0&&Th(e,e._tTime),e},o1=function(e,t){return(wi.ScrollTrigger||Sg("scrollTrigger",t))&&wi.ScrollTrigger.create(t,e)},a1=function(e,t,i,r,s){if(Cg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&QM!==_i.frame)return Us.push(e),e._lazy=[s,r],1},fL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Ym=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hL=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&fL(e)&&!(!e._initted&&Ym(e))||(e._ts<0||e._dp._ts<0)&&!Ym(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=zu(0,e._tDur,t),c=Za(l,a),e._yoyo&&c&1&&(o=1-o),c!==Za(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Rn||r||e._zTime===bt||!t&&e._zTime){if(!e._initted&&a1(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?bt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Xm(e,t,i,!0),e._onUpdate&&!i&&xi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zs(e,1),!i&&!Rn&&(xi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ja=function(e,t,i,r){var s=e._repeat,o=Wt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Wt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Th(e,e._tTime=e._tDur*a),e.parent&&Eh(e),i||To(e.parent,e),e},bx=function(e){return e instanceof Jn?To(e):Ja(e,e._dur)},pL={_start:0,endTime:Au,totalDuration:Au},Ii=function n(e,t,i){var r=e.labels,s=e._recent||pL,o=e.duration()>=Vi?s.endTime(!1):e._dur,a,l,u;return Sn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Vn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Jl=function(e,t,i){var r=Jr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new on(t[0],o,t[s+1])},Ys=function(e,t){return e||e===0?t(e):t},zu=function(e,t,i){return i<e?e:i>t?t:i},kn=function(e,t){return!Sn(e)||!(t=iL.exec(e))?"":t[1]},mL=function(e,t,i){return Ys(i,function(r){return zu(e,t,r)})},qm=[].slice,l1=function(e,t){return e&&Cr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Cr(e[0]))&&!e.nodeType&&e!==pr},gL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Sn(r)&&!t||l1(r,1)?(s=i).push.apply(s,Gi(r)):i.push(r)})||i},Gi=function(e,t,i){return Gt&&!t&&Gt.selector?Gt.selector(e):Sn(e)&&!i&&(Hm||!Qa())?qm.call((t||yg).querySelectorAll(e),0):Vn(e)?gL(e,i):l1(e)?qm.call(e,0):e?[e]:[]},jm=function(e){return e=Gi(e)[0]||wu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Gi(t,i.querySelectorAll?i:i===e?wu("Invalid scope")||yg.createElement("div"):e)}},u1=function(e){return e.sort(function(){return .5-Math.random()})},c1=function(e){if(tn(e))return e;var t=Cr(e)?e:{each:e},i=wo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return Sn(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(f,p,g){var v=(g||t).length,_=o[v],d,m,x,S,T,M,w,y,A;if(!_){if(A=t.grid==="auto"?0:(t.grid||[1,Vi])[1],!A){for(w=-Vi;w<(w=g[A++].getBoundingClientRect().left)&&A<v;);A<v&&A--}for(_=o[v]=[],d=l?Math.min(A,v)*c-.5:r%A,m=A===Vi?0:l?v*h/A-.5:r/A|0,w=0,y=Vi,M=0;M<v;M++)x=M%A-d,S=m-(M/A|0),_[M]=T=u?Math.abs(u==="y"?S:x):YM(x*x+S*S),T>w&&(w=T),T<y&&(y=T);r==="random"&&u1(_),_.max=w-y,_.min=y,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(A>v?v-1:u?u==="y"?v/A:A:Math.max(A,v/A))||0)*(r==="edges"?-1:1),_.b=v<0?s-v:s,_.u=kn(t.amount||t.each)||0,i=i&&v<0?bL(i):i}return v=(_[f]-_.min)/_.max||0,Wt(_.b+(i?i(v):v)*_.v)+_.u}},$m=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Wt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Jr(i)?0:kn(i))}},f1=function(e,t){var i=Vn(e),r,s;return!i&&Cr(e)&&(r=i=e.radius||Vi,e.values?(e=Gi(e.values),(s=!Jr(e[0]))&&(r*=r)):e=$m(e.increment)),Ys(t,i?tn(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Vi,c=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<u&&(u=f,c=h);return c=!r||u<=r?e[c]:o,s||c===o||Jr(o)?c:c+kn(o)}:$m(e))},h1=function(e,t,i,r){return Ys(Vn(e)?!t:i===!0?!!(i=0):!r,function(){return Vn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},_L=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},vL=function(e,t){return function(i){return e(parseFloat(i))+(t||kn(i))}},xL=function(e,t,i){return p1(e,t,0,1,i)},d1=function(e,t,i){return Ys(i,function(r){return e[~~t(r)]})},yL=function n(e,t,i){var r=t-e;return Vn(e)?d1(e,n(0,e.length),t):Ys(i,function(s){return(r+(s-e)%r)%r+e})},SL=function n(e,t,i){var r=t-e,s=r*2;return Vn(e)?d1(e,n(0,e.length-1),t):Ys(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Cu=function(e){return e.replace(eL,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(tL);return h1(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},p1=function(e,t,i,r,s){var o=t-e,a=r-i;return Ys(s,function(l){return i+((l-e)/o*a||0)})},ML=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Sn(e),a={},l,u,c,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Vn(e)&&!Vn(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(g){g*=h;var v=Math.min(f,~~g);return c[v](g-v)},i=t}else r||(e=Ka(Vn(e)?[]:{},e));if(!c){for(l in t)Ag.call(a,e,l,"get",t[l]);s=function(g){return Pg(g,a)||(o?e.p:e)}}}return Ys(i,s)},Px=function(e,t,i){var r=e.labels,s=Vi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xi=function(e,t,i){var r=e.vars,s=r[t],o=Gt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Us.length&&$f(),a&&(Gt=a),c=l?s.apply(u,l):s.call(u),Gt=o,c},Fl=function(e){return zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rn),e.progress()<1&&xi(e,"onInterrupt"),e},wa,m1=[],g1=function(e){if(e)if(e=!e.name&&e.default||e,xg()||e.headless){var t=e.name,i=tn(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Au,render:Pg,add:Ag,kill:BL,modifier:kL,rawVars:0},o={targetTest:0,get:0,getSetter:bg,aliases:{},register:0};if(Qa(),e!==r){if(mi[t])return;Ai(r,Ai(Kf(e,s),o)),Ka(r.prototype,Ka(s,Kf(e,o))),mi[r.prop=t]=r,e.targetTest&&(pf.push(r),Mg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}JM(t,r),e.register&&e.register(li,r,oi)}else m1.push(e)},Rt=255,Ol={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},jd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Rt+.5|0},_1=function(e,t,i){var r=e?Jr(e)?[e>>16,e>>8&Rt,e&Rt]:0:Ol.black,s,o,a,l,u,c,h,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ol[e])r=Ol[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(wx),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=jd(l+1/3,s,o),r[1]=jd(l,s,o),r[2]=jd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(jM),i&&r.length<4&&(r[3]=1),r}else r=e.match(wx)||Ol.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Rt,o=r[1]/Rt,a=r[2]/Rt,h=Math.max(s,o,a),f=Math.min(s,o,a),c=(h+f)/2,h===f?l=u=0:(p=h-f,u=c>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},v1=function(e){var t=[],i=[],r=-1;return e.split(Fs).forEach(function(s){var o=s.match(Ta)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Lx=function(e,t,i){var r="",s=(e+r).match(Fs),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=_1(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=v1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Fs,"1").split(Ta),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Fs),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},Fs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ol)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),EL=/hsl[a]?\(/,x1=function(e){var t=e.join(" "),i;if(Fs.lastIndex=0,Fs.test(t))return i=EL.test(t),e[1]=Lx(e[1],i),e[0]=Lx(e[0],i,v1(e[1])),!0},Ru,_i=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,f,p,g=function v(_){var d=n()-r,m=_===!0,x,S,T,M;if((d>e||d<0)&&(i+=d-t),r+=d,T=r-i,x=T-o,(x>0||m)&&(M=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,o+=x+(x>=s?4:s-x),S=1),m||(l=u(v)),S)for(p=0;p<a.length;p++)a[p](T,f,M,_)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){KM&&(!Hm&&xg()&&(pr=Hm=window,yg=pr.document||{},wi.gsap=li,(pr.gsapVersions||(pr.gsapVersions=[])).push(li.version),ZM(jf||pr.GreenSockGlobals||!pr.gsap&&pr||{}),m1.forEach(g1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(_){return setTimeout(_,o-h.time*1e3+1|0)},Ru=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ru=0,u=Au},lagSmoothing:function(_,d){e=_||1/0,t=Math.min(d||33,e)},fps:function(_){s=1e3/(_||240),o=h.time*1e3+s},add:function(_,d,m){var x=d?function(S,T,M,w){_(S,T,M,w),h.remove(x)}:_;return h.remove(_),a[m?"unshift":"push"](x),Qa(),x},remove:function(_,d){~(d=a.indexOf(_))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),Qa=function(){return!Ru&&_i.wake()},pt={},TL=/^[\d.\-M][\d.\-,\s]/,wL=/["']/g,AL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(wL,"").trim():+u,r=l.substr(a+1).trim();return t},CL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},RL=function(e){var t=(e+"").split("("),i=pt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[AL(t[1])]:CL(e).split(",").map(n1)):pt._CE&&TL.test(e)?pt._CE("",e):i},bL=function(e){return function(t){return 1-e(1-t)}},wo=function(e,t){return e&&(tn(e)?e:pt[e]||RL(e))||t},zo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return si(e,function(a){pt[a]=wi[a]=s,pt[o=a.toLowerCase()]=i;for(var l in s)pt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[a+"."+l]=s[l]}),s},y1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$d=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Gm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*QP((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:y1(a);return s=Gm/s,l.config=function(u,c){return n(e,u,c)},l},Kd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:y1(i);return r.config=function(s){return n(e,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;zo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;zo("Elastic",$d("in"),$d("out"),$d());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};zo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);zo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});zo("Circ",function(n){return-(YM(1-n*n)-1)});zo("Sine",function(n){return n===1?1:-JP(n*KP)+1});zo("Back",Kd("in"),Kd("out"),Kd());pt.SteppedEase=pt.steps=wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((r*zu(0,o,a)|0)+s)*i}}};Tu.ease=pt["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Eg+=n+","+n+"Params,"});var S1=function(e,t){this.id=ZP++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:e1,this.set=t?t.getSetter:bg},bu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ja(this,+t.duration,1,1),this.data=t.data,Gt&&(this._ctx=Gt,Gt.data.push(this)),Ru||_i.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ja(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Qa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Th(this,i),!s._dp||s.parent||s1(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&_r(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),t1(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Rx(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Rx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Za(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Zf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-bt?0:this._rts,this.totalTime(zu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Eh(this),uL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Wt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&_r(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=sL);var r=Rn;return Rn=i,wg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Rn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,bx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,bx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ii(this,i),ri(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ri(r)),this._dur||(this._zTime=-bt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-bt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=tn(i)?i:i1,l=function(){var c=r.then;r.then=null,s&&s(),tn(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Fl(this)},n}();Ai(bu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Jn=function(n){XM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ri(i.sortChildren),Yt&&_r(i.parent||Yt,Fr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&o1(Fr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Jl(0,arguments,this),this},t.from=function(r,s,o){return Jl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Jl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Zl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new on(r,s,Ii(this,o),1),this},t.call=function(r,s,o){return _r(this,on.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new on(r,o,Ii(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Zl(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,Zl(a).immediateRender=ri(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Wt(r),h=this._zTime<0!=r<0&&(this._initted||!u),f,p,g,v,_,d,m,x,S,T,M,w;if(this!==Yt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,x=this._ts,d=!x,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(M=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(f=Wt(c%_),c===l?(v=this._repeat,f=u):(T=Wt(c/_),v=~~T,v&&v===T&&(f=u,v--),f>u&&(f=u)),T=Za(this._tTime,_),!a&&this._tTime&&T!==v&&this._tTime-T*_-this._dur<=0&&(T=v),M&&v&1&&(f=u-f,w=1),v!==T&&!this._lock){var y=M&&T&1,A=y===(M&&v&1);if(v<T&&(y=!y),a=y?0:c%u?u:c,this._lock=1,this.render(a||(w?0:Wt(v*_)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=v),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,A&&(this._lock=2,a=y?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=dL(this,Wt(a),Wt(f)),m&&(c-=f-(f=m._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(xi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!d){m=0,g&&(c+=this._zTime=-bt);break}}p=g}else{p=this._last;for(var b=r<0?r:f;p;){if(g=p._prev,(p._act||b<=p._end)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,s,o||Rn&&wg(p)),f!==this._time||!this._ts&&!d){m=0,g&&(c+=this._zTime=b?-bt:bt);break}}p=g}}if(m&&!s&&(this.pause(),m.render(f>=a?0:-bt)._zTime=f>=a?1:-1,this._ts))return this._start=S,Eh(this),this.render(r,s,o);this._onUpdate&&!s&&xi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&zs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(xi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Jr(s)||(s=Ii(this,s,r)),!(r instanceof bu)){if(Vn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Sn(r))return this.addLabel(r,s);if(tn(r))r=on.delayedCall(0,r);else return this}return this!==r?_r(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof on?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Sn(r)?this.removeLabel(r):tn(r)?this.killTweensOf(r):(r.parent===this&&Mh(this,r),r===this._recent&&(this._recent=this._last),To(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(_i.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ii(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=on.delayedCall(0,s||Au,o);return a.data="isPause",this._hasPause=1,_r(this,a,Ii(this,r))},t.removePause=function(r){var s=this._first;for(r=Ii(this,r);s;)s._start===r&&s.data==="isPause"&&zs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ts!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Gi(r),l=this._first,u=Jr(s),c;l;)l instanceof on?oL(l._targets,a)&&(u?(!Ts||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ii(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=on.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!p){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==_&&Ja(g,_,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ai({startAt:{time:Ii(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Px(this,Ii(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Px(this,Ii(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Wt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return To(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),To(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Vi,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,_r(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Wt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ja(o,o===Yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Yt._ts&&(t1(Yt,Zf(r,Yt)),QM=_i.frame),_i.frame>=Ax){Ax+=Ei.autoSleep||120;var s=Yt._first;if((!s||!s._ts)&&Ei.autoSleep&&_i._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_i.sleep()}}},e}(bu);Ai(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var PL=function(e,t,i,r,s,o,a){var l=new oi(this._pt,e,t,0,1,C1,null,s),u=0,c=0,h,f,p,g,v,_,d,m;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Cu(r)),o&&(m=[i,r],o(m,e,t),i=m[0],r=m[1]),f=i.match(Yd)||[];h=Yd.exec(r);)g=h[0],v=r.substring(u,h.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),g!==f[c++]&&(_=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:v||c===1?v:",",s:_,c:g.charAt(1)==="="?Ua(_,g)-_:parseFloat(g)-_,m:p&&p<4?Math.round:0},u=Yd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,($M.test(r)||d)&&(l.e=0),this._pt=l,l},Ag=function(e,t,i,r,s,o,a,l,u,c){tn(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:tn(h)?u?e[t.indexOf("set")||!tn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=tn(h)?u?UL:w1:Rg,g;if(Sn(r)&&(~r.indexOf("random(")&&(r=Cu(r)),r.charAt(1)==="="&&(g=Ua(f,r)+(kn(f)||0),(g||g===0)&&(r=g))),!c||f!==r||Km)return!isNaN(f*r)&&r!==""?(g=new oi(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?OL:A1,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Sg(t,r),PL.call(this,e,t,f,r,p,l||Ei.stringFilter,u))},LL=function(e,t,i,r,s){if(tn(e)&&(e=Ql(e,s,t,i,r)),!Cr(e)||e.style&&e.nodeType||Vn(e)||qM(e))return Sn(e)?Ql(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ql(e[a],s,t,i,r);return o},M1=function(e,t,i,r,s,o){var a,l,u,c;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:LL(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new oi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==wa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Ts,Km,Cg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,v=e._startAt,_=e._targets,d=e.parent,m=d&&d.data==="nested"?d.vars.targets:_,x=e._overwrite==="auto"&&!_g,S=e.timeline,T=r.easeReverse||h,M,w,y,A,b,P,I,G,X,N,B,O,U;if(S&&(!f||!s)&&(s="none"),e._ease=wo(s,Tu.ease),e._rEase=T&&(wo(T)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(G=_[0]?Eo(_[0]).harness:0,O=G&&r[G.prop],M=Kf(r,Mg),v&&(v._zTime<0&&v.progress(1),t<0&&c&&a&&!p?v.render(-1,!0):v.revert(c&&g?df:rL),v._lazy=0),o){if(zs(e._startAt=on.set(_,Ai({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!v&&ri(l),startAt:null,delay:0,onUpdate:u&&function(){return xi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn||!a&&!p)&&e._startAt.revert(df),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!v){if(t&&(a=!1),y=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!v&&ri(l),immediateRender:a,stagger:0,parent:d},M),O&&(y[G.prop]=O),zs(e._startAt=on.set(_,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn?e._startAt.revert(df):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ri(l)||l&&!g,w=0;w<_.length;w++){if(b=_[w],I=b._gsap||Tg(_)[w]._gsap,e._ptLookup[w]=N={},Wm[I.id]&&Us.length&&$f(),B=m===_?w:m.indexOf(b),G&&(X=new G).init(b,O||M,e,B,m)!==!1&&(e._pt=A=new oi(e._pt,b,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(V){N[V]=A}),X.priority&&(P=1)),!G||O)for(y in M)mi[y]&&(X=M1(y,M,e,B,b,m))?X.priority&&(P=1):N[y]=A=Ag.call(e,b,y,"get",M[y],B,m,0,r.stringFilter);e._op&&e._op[w]&&e.kill(b,e._op[w]),x&&e._pt&&(Ts=e,Yt.killTweensOf(b,N,e.globalTime(t)),U=!e.parent,Ts=0),e._pt&&l&&(Wm[I.id]=1)}P&&R1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!U,f&&t<=0&&S.render(Vi,!0,!0)},DL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Km=1,e.vars[t]="+=0",Cg(e,a),Km=0,l?wu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=nn(i)+kn(h.e)),h.b&&(h.b=c.s+kn(h.b))},NL=function(e,t){var i=e[0]?Eo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ka({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},IL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Vn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ql=function(e,t,i,r,s){return tn(e)?e.call(t,i,r,s):Sn(e)&&~e.indexOf("random(")?Cu(e):e},E1=Eg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",T1={};si(E1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return T1[n]=1});var on=function(n){XM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Zl(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,v=l.defaults,_=l.scrollTrigger,d=r.parent||Yt,m=(Vn(i)||qM(i)?Jr(i[0]):"length"in r)?[i]:Gi(i),x,S,T,M,w,y,A,b;if(a._targets=m.length?Tg(m):wu("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||Yc(u)||Yc(c)){r=a.vars;var P=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Jn({data:"nested",defaults:v||{},targets:d&&d.data==="nested"?d.vars.targets:m}),x.kill(),x.parent=x._dp=Fr(a),x._start=0,f||Yc(u)||Yc(c)){if(M=m.length,A=f&&c1(f),Cr(f))for(w in f)~E1.indexOf(w)&&(b||(b={}),b[w]=f[w]);for(S=0;S<M;S++)T=Kf(r,T1),T.stagger=0,P&&(T.easeReverse=P),b&&Ka(T,b),y=m[S],T.duration=+Ql(u,Fr(a),S,y,m),T.delay=(+Ql(c,Fr(a),S,y,m)||0)-a._delay,!f&&M===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),x.to(y,T,A?A(S,y,m):0),x._ease=pt.none;x.duration()?u=c=0:a.timeline=0}else if(g){Zl(Ai(x.vars.defaults,{ease:"none"})),x._ease=wo(g.ease||r.ease||"none");var I=0,G,X,N;if(Vn(g))g.forEach(function(B){return x.to(m,B,">")}),x.duration();else{T={};for(w in g)w==="ease"||w==="easeEach"||IL(w,g[w],T,g.easeEach);for(w in T)for(G=T[w].sort(function(B,O){return B.t-O.t}),I=0,S=0;S<G.length;S++)X=G[S],N={ease:X.e,duration:(X.t-(S?G[S-1].t:0))/100*u},N[w]=X.v,x.to(m,N,I),I+=N.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!_g&&(Ts=Fr(a),Yt.killTweensOf(m),Ts=0),_r(d,Fr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!g&&a._start===Wt(d._time)&&ri(h)&&cL(Fr(a))&&d.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-c)||0)),_&&o1(Fr(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-bt&&!c?l:r<bt?0:r,f,p,g,v,_,d,m,x;if(!u)hL(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=h,x=this.timeline,this._repeat){if(v=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(v*100+r,s,o);if(f=Wt(h%v),h===l?(g=this._repeat,f=u):(_=Wt(h/v),g=~~_,g&&g===_?(f=u,g--):f>u&&(f=u)),d=this._yoyo&&g&1,d&&(f=u-f),_=Za(this._tTime,v),f===a&&!o&&this._initted&&g===_)return this._tTime=h,this;g!==_&&this.vars.repeatRefresh&&!d&&!this._lock&&f!==v&&this._initted&&(this._lock=o=1,this.render(Wt(v*g),!0).invalidate()._lock=0)}if(!this._initted){if(a1(this,c?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=f<a;if(S!==this._inv){var T=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(S?-1:1)/T:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(f/u);if(this._from&&(this.ratio=m=1-m),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!_&&(xi(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(m,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Xm(this,r,s,o),xi(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&xi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Xm(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zs(this,1),!s&&!(c&&!a)&&(h||a||d)&&(xi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ru||_i.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Cg(this,u),c=this._ease(u/this._dur),DL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Th(this,0),this.parent||r1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ts&&Ts.vars.overwrite!==!0)._first||Fl(this),this.parent&&o!==this.timeline.totalDuration()&&Ja(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Gi(r):a,u=this._ptLookup,c=this._pt,h,f,p,g,v,_,d;if((!s||s==="all")&&lL(a,l))return s==="all"&&(this._pt=0),Fl(this);for(h=this._op=this._op||[],s!=="all"&&(Sn(s)&&(v={},si(s,function(m){return v[m]=1}),s=v),s=NL(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=u[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(v in g)_=f&&f[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&Mh(this,_,"_pt"),delete f[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&c&&Fl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Jl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Jl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Yt.killTweensOf(r,s,o)},e}(bu);Ai(on.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(n){on[n]=function(){var e=new Jn,t=qm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Rg=function(e,t,i){return e[t]=i},w1=function(e,t,i){return e[t](i)},UL=function(e,t,i,r){return e[t](r.fp,i)},FL=function(e,t,i){return e.setAttribute(t,i)},bg=function(e,t){return tn(e[t])?w1:vg(e[t])&&e.setAttribute?FL:Rg},A1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},OL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},C1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Pg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},kL=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},BL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Mh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},zL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},R1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},oi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||A1,this.d=l||this,this.set=u||Rg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=zL,this.m=i,this.mt=s,this.tween=r},n}();si(Eg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Mg[n]=1});wi.TweenMax=wi.TweenLite=on;wi.TimelineLite=wi.TimelineMax=Jn;Yt=new Jn({sortChildren:!1,defaults:Tu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=x1;var Ao=[],mf={},VL=[],Dx=0,GL=0,Zd=function(e){return(mf[e]||VL).map(function(t){return t()})},Zm=function(){var e=Date.now(),t=[];e-Dx>2&&(Zd("matchMediaInit"),Ao.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=pr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Zd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Dx=e,Zd("matchMedia"))},b1=function(){function n(t,i){this.selector=i&&jm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=GL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){tn(i)&&(s=r,r=i,i=tn);var o=this,a=function(){var u=Gt,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=jm(s)),Gt=o,h=r.apply(o,arguments),tn(h)&&o._r.push(h),Gt=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===tn?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Gt;Gt=null,i(this),Gt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof on&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Jn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof on)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ao.length;o--;)Ao[o].id===this.id&&Ao.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),HL=function(){function n(t){this.contexts=[],this.scope=t,Gt&&Gt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Cr(i)||(i={matches:i});var o=new b1(0,s||this.scope),a=o.conditions={},l,u,c;Gt&&!o.selector&&(o.selector=Gt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=pr.matchMedia(i[u]),l&&(Ao.indexOf(o)<0&&Ao.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Zm):l.addEventListener("change",Zm)));return c&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Jf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return g1(r)})},timeline:function(e){return new Jn(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Sn(e)&&(e=Gi(e)[0]);var s=Eo(e||{}).get,o=i?i1:n1;return i==="native"&&(i=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,i,r)):function(a,l,u){return o((mi[a]&&mi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Gi(e),e.length>1){var r=e.map(function(c){return li.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=mi[t],a=Eo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;wa._pt=0,h.init(e,i?c+i:c,wa,0,[e]),h.render(1,h),wa._pt&&Pg(1,wa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=li.to(e,Ai((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=wo(e.ease,Tu.ease)),Cx(Tu,e||{})},config:function(e){return Cx(Ei,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mi[a]&&!wi[a]&&wu(t+" effect requires "+a+" plugin.")}),qd[t]=function(a,l,u){return i(Gi(a),Ai(l||{},s),u)},o&&(Jn.prototype[t]=function(a,l,u){return this.add(qd[t](a,Cr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){pt[e]=wo(t)},parseEase:function(e,t){return arguments.length?wo(e,t):pt},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Jn(e),r,s;for(i.smoothChildTiming=ri(e.smoothChildTiming),Yt.remove(i),i._dp=0,i._time=i._tTime=Yt._time,r=Yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof on&&r.vars.onComplete===r._targets[0]))&&_r(i,r,r._start-r._delay),r=s;return _r(Yt,i,0),i},context:function(e,t){return e?new b1(e,t):Gt},matchMedia:function(e){return new HL(e)},matchMediaRefresh:function(){return Ao.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Zm()},addEventListener:function(e,t){var i=mf[e]||(mf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=mf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:yL,wrapYoyo:SL,distribute:c1,random:h1,snap:f1,normalize:xL,getUnit:kn,clamp:mL,splitColor:_1,toArray:Gi,selector:jm,mapRange:p1,pipe:_L,unitize:vL,interpolate:ML,shuffle:u1},install:ZM,effects:qd,ticker:_i,updateRoot:Jn.updateRoot,plugins:mi,globalTimeline:Yt,core:{PropTween:oi,globals:JM,Tween:on,Timeline:Jn,Animation:bu,getCache:Eo,_removeLinkedListItem:Mh,reverting:function(){return Rn},context:function(e){return e&&Gt&&(Gt.data.push(e),e._ctx=Gt),Gt},suppressOverwrites:function(e){return _g=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Jf[n]=on[n]});_i.add(Jn.updateRoot);wa=Jf.to({},{duration:0});var WL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},XL=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=WL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Jd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Sn(s)&&(l={},si(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}XL(a,s)}}}},li=Jf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Rn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Jd("roundProps",$m),Jd("modifiers"),Jd("snap",f1))||Jf;on.version=Jn.version=li.version="3.15.0";KM=1;xg()&&Qa();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nx,ws,Fa,Lg,yo,Ix,Dg,YL=function(){return typeof window<"u"},Qr={},fo=180/Math.PI,Oa=Math.PI/180,la=Math.atan2,Ux=1e8,Ng=/([A-Z])/g,qL=/(left|right|width|margin|padding|x)/i,jL=/[\s,\(]\S/,yr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$L=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},KL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},JL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},P1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},L1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},QL=function(e,t,i){return e.style[t]=i},eD=function(e,t,i){return e.style.setProperty(t,i)},tD=function(e,t,i){return e._gsap[t]=i},nD=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},iD=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},rD=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},jt="transform",ai=jt+"Origin",sD=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Qr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=yr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=kr(r,a)}):this.tfm[e]=o.x?o[e]:kr(r,e),e===ai&&(this.tfm.zOrigin=o.zOrigin);else return yr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(jt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=jt}(s||t)&&this.props.push(e,t,s[e])},D1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},oD=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ng,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Dg(),(!s||!s.isStart)&&!i[jt]&&(D1(i),r.zOrigin&&i[ai]&&(i[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},N1=function(e,t){var i={target:e,props:[],revert:oD,save:sD};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},I1,Qm=function(e,t){var i=ws.createElementNS?ws.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ws.createElement(e);return i&&i.style?i:ws.createElement(e)},yi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ng,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,el(t)||t,1)||""},Fx="O,Moz,ms,Ms,Webkit".split(","),el=function(e,t,i){var r=t||yo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Fx[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Fx[o]:"")+e},e0=function(){YL()&&window.document&&(Nx=window,ws=Nx.document,Fa=ws.documentElement,yo=Qm("div")||{style:{}},Qm("div"),jt=el(jt),ai=jt+"Origin",yo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",I1=!!el("perspective"),Dg=li.core.reverting,Lg=1)},Ox=function(e){var t=e.ownerSVGElement,i=Qm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Fa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Fa.removeChild(i),s},kx=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},U1=function(e){var t,i;try{t=e.getBBox()}catch{t=Ox(e),i=1}return t&&(t.width||t.height)||i||(t=Ox(e)),t&&!t.width&&!t.x&&!t.y?{x:+kx(e,["x","cx","x1"])||0,y:+kx(e,["y","cy","y1"])||0,width:0,height:0}:t},F1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&U1(e))},Vs=function(e,t){if(t){var i=e.style,r;t in Qr&&t!==ai&&(t=jt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Ng,"-$1").toLowerCase())):i.removeAttribute(t)}},As=function(e,t,i,r,s,o){var a=new oi(e._pt,t,i,0,1,o?L1:P1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Bx={deg:1,rad:1,turn:1},aD={grid:1,flex:1},Gs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=yo.style,l=qL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,v,_,d;if(r===o||!s||Bx[r]||Bx[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),d=e.getCTM&&F1(e),(p||o==="%")&&(Qr[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[c],nn(p?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===ws||!v.appendChild)&&(v=ws.body),_=v._gsap,_&&p&&_.width&&l&&_.time===_i.time&&!_.uncache)return nn(s/_.width*h);if(p&&(t==="height"||t==="width")){var m=e.style[t];e.style[t]=h+r,g=e[c],m?e.style[t]=m:Vs(e,t)}else(p||o==="%")&&!aD[yi(v,"display")]&&(a.position=yi(e,"position")),v===e&&(a.position="static"),v.appendChild(yo),g=yo[c],v.removeChild(yo),a.position="absolute";return l&&p&&(_=Eo(v),_.time=_i.time,_.width=v[c]),nn(f?g*s/h:g&&s?h/g*s:0)},kr=function(e,t,i,r){var s;return Lg||e0(),t in yr&&t!=="transform"&&(t=yr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Qr[t]&&t!=="transform"?(s=Lu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:eh(yi(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Qf[t]&&Qf[t](e,t,i)||yi(e,t)||e1(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Gs(e,t,s,i)+i:s},lD=function(e,t,i,r){if(!i||i==="none"){var s=el(t,e,1),o=s&&yi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=yi(e,"borderTopColor"))}var a=new oi(this._pt,e.style,t,0,1,C1),l=0,u=0,c,h,f,p,g,v,_,d,m,x,S,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=yi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=yi(e,t)||r,v?e.style[t]=v:Vs(e,t)),c=[i,r],x1(c),i=c[0],r=c[1],f=i.match(Ta)||[],T=r.match(Ta)||[],T.length){for(;h=Ta.exec(r);)_=h[0],m=r.substring(l,h.index),g?g=(g+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(g=1),_!==(v=f[u++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),_.charAt(1)==="="&&(_=Ua(p,_)+S),d=parseFloat(_),x=_.substr((d+"").length),l=Ta.lastIndex-x.length,x||(x=x||Ei.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=Gs(e,t,v,x)||0),a._pt={_next:a._pt,p:m||u===1?m:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?L1:P1;return $M.test(r)&&(a.e=0),this._pt=a,a},zx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=zx[i]||i,t[1]=zx[r]||r,t.join(" ")},cD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Qr[a]&&(l=1,a=a==="transformOrigin"?ai:jt),Vs(i,a);l&&(Vs(i,jt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Lu(i,1),o.uncache=1,D1(r)))}},Qf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new oi(e._pt,t,i,0,0,cD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Pu=[1,0,0,1,0,0],O1={},k1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vx=function(e){var t=yi(e,jt);return k1(t)?Pu:t.substr(7).match(jM).map(nn)},Ig=function(e,t){var i=e._gsap||Eo(e),r=e.style,s=Vx(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Pu:s):(s===Pu&&!e.offsetParent&&e!==Fa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Fa.appendChild(e)),s=Vx(e),l?r.display=l:Vs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Fa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},t0=function(e,t,i,r,s,o){var a=e._gsap,l=s||Ig(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],v=l[2],_=l[3],d=l[4],m=l[5],x=t.split(" "),S=parseFloat(x[0])||0,T=parseFloat(x[1])||0,M,w,y,A;i?l!==Pu&&(w=p*_-g*v)&&(y=S*(_/w)+T*(-v/w)+(v*m-_*d)/w,A=S*(-g/w)+T*(p/w)-(p*m-g*d)/w,S=y,T=A):(M=U1(e),S=M.x+(~x[0].indexOf("%")?S/100*M.width:S),T=M.y+(~(x[1]||x[0]).indexOf("%")?T/100*M.height:T)),r||r!==!1&&a.smooth?(d=S-u,m=T-c,a.xOffset=h+(d*p+m*v)-d,a.yOffset=f+(d*g+m*_)-m):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ai]="0px 0px",o&&(As(o,a,"xOrigin",u,S),As(o,a,"yOrigin",c,T),As(o,a,"xOffset",h,a.xOffset),As(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},Lu=function(e,t){var i=e._gsap||new S1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=yi(e,ai)||"0",c,h,f,p,g,v,_,d,m,x,S,T,M,w,y,A,b,P,I,G,X,N,B,O,U,V,j,$,K,Ge,He,ke;return c=h=f=v=_=d=m=x=S=0,p=g=1,i.svg=!!(e.getCTM&&F1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[jt]!=="none"?l[jt]:"")),r.scale=r.rotate=r.translate="none"),w=Ig(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),t0(e,O||u,!!O||i.originIsAbsolute,i.smooth!==!1,w)),T=i.xOrigin||0,M=i.yOrigin||0,w!==Pu&&(P=w[0],I=w[1],G=w[2],X=w[3],c=N=w[4],h=B=w[5],w.length===6?(p=Math.sqrt(P*P+I*I),g=Math.sqrt(X*X+G*G),v=P||I?la(I,P)*fo:0,m=G||X?la(G,X)*fo+v:0,m&&(g*=Math.abs(Math.cos(m*Oa))),i.svg&&(c-=T-(T*P+M*G),h-=M-(T*I+M*X))):(ke=w[6],Ge=w[7],j=w[8],$=w[9],K=w[10],He=w[11],c=w[12],h=w[13],f=w[14],y=la(ke,K),_=y*fo,y&&(A=Math.cos(-y),b=Math.sin(-y),O=N*A+j*b,U=B*A+$*b,V=ke*A+K*b,j=N*-b+j*A,$=B*-b+$*A,K=ke*-b+K*A,He=Ge*-b+He*A,N=O,B=U,ke=V),y=la(-G,K),d=y*fo,y&&(A=Math.cos(-y),b=Math.sin(-y),O=P*A-j*b,U=I*A-$*b,V=G*A-K*b,He=X*b+He*A,P=O,I=U,G=V),y=la(I,P),v=y*fo,y&&(A=Math.cos(y),b=Math.sin(y),O=P*A+I*b,U=N*A+B*b,I=I*A-P*b,B=B*A-N*b,P=O,N=U),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,d=180-d),p=nn(Math.sqrt(P*P+I*I+G*G)),g=nn(Math.sqrt(B*B+ke*ke)),y=la(N,B),m=Math.abs(y)>2e-4?y*fo:0,S=He?1/(He<0?-He:He):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!k1(yi(e,jt)),O&&e.setAttribute("transform",O))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(p*=-1,m+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,m+=m<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=nn(p),i.scaleY=nn(g),i.rotation=nn(v)+a,i.rotationX=nn(_)+a,i.rotationY=nn(d)+a,i.skewX=m+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ai]=eh(u)),i.xOffset=i.yOffset=0,i.force3D=Ei.force3D,i.renderTransform=i.svg?hD:I1?B1:fD,i.uncache=0,i},eh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qd=function(e,t,i){var r=kn(t);return nn(parseFloat(t)+parseFloat(Gs(e,"x",i+"px",r)))+r},fD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,B1(e,t)},oo="0deg",Rl="0px",ao=") ",B1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,v=i.scaleY,_=i.transformPerspective,d=i.force3D,m=i.target,x=i.zOrigin,S="",T=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==oo||c!==oo)){var M=parseFloat(c)*Oa,w=Math.sin(M),y=Math.cos(M),A;M=parseFloat(h)*Oa,A=Math.cos(M),o=Qd(m,o,w*A*-x),a=Qd(m,a,-Math.sin(M)*-x),l=Qd(m,l,y*A*-x+x)}_!==Rl&&(S+="perspective("+_+ao),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(T||o!==Rl||a!==Rl||l!==Rl)&&(S+=l!==Rl||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ao),u!==oo&&(S+="rotate("+u+ao),c!==oo&&(S+="rotateY("+c+ao),h!==oo&&(S+="rotateX("+h+ao),(f!==oo||p!==oo)&&(S+="skew("+f+", "+p+ao),(g!==1||v!==1)&&(S+="scale("+g+", "+v+ao),m.style[jt]=S||"translate(0, 0)"},hD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,v=i.yOrigin,_=i.xOffset,d=i.yOffset,m=i.forceCSS,x=parseFloat(o),S=parseFloat(a),T,M,w,y,A;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Oa,u*=Oa,T=Math.cos(l)*h,M=Math.sin(l)*h,w=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=Oa,A=Math.tan(u-c),A=Math.sqrt(1+A*A),w*=A,y*=A,c&&(A=Math.tan(c),A=Math.sqrt(1+A*A),T*=A,M*=A)),T=nn(T),M=nn(M),w=nn(w),y=nn(y)):(T=h,y=f,M=w=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Gs(p,"x",o,"px"),S=Gs(p,"y",a,"px")),(g||v||_||d)&&(x=nn(x+g-(g*T+v*w)+_),S=nn(S+v-(g*M+v*y)+d)),(r||s)&&(A=p.getBBox(),x=nn(x+r/100*A.width),S=nn(S+s/100*A.height)),A="matrix("+T+","+M+","+w+","+y+","+x+","+S+")",p.setAttribute("transform",A),m&&(p.style[jt]=A)},dD=function(e,t,i,r,s){var o=360,a=Sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?fo:1),u=l-r,c=r+u+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*Ux)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*Ux)%o-~~(u/o)*o)),e._pt=f=new oi(e._pt,t,i,r,u,$L),f.e=c,f.u="deg",e._props.push(i),f},Gx=function(e,t){for(var i in t)e[i]=t[i];return e},pD=function(e,t,i){var r=Gx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,f,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[jt]=t,a=Lu(i,1),Vs(i,jt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[jt],o[jt]=t,a=Lu(i,1),o[jt]=u);for(l in Qr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=kn(u),g=kn(c),h=p!==g?Gs(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new oi(e._pt,a,l,h,f-h,Jm),e._pt.u=g||0,e._props.push(l));Gx(a,r)};si("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Qf[e>1?"border"+n:n]=function(a,l,u,c,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return kr(a,g,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(g,v){return p[g]=f[v]=f[v]||f[(v-1)/2|0]}),a.init(l,p,h)}});var z1={name:"css",register:e0,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,f,p,g,v,_,d,m,x,S,T,M,w,y,A;Lg||e0(),this.styles=this.styles||N1(e),y=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(c=t[v],!(mi[v]&&M1(v,t,i,r,e,s)))){if(p=typeof c,g=Qf[v],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Cu(c)),g)g(this,e,v,c,i)&&(w=1);else if(v.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(v)+"").trim(),c+="",Fs.lastIndex=0,Fs.test(u)||(_=kn(u),d=kn(c),d?_!==d&&(u=Gs(e,v,u,d)+d):_&&(c+=_)),this.add(a,"setProperty",u,c,r,s,0,0,v),o.push(v),y.push(v,0,a[v]);else if(p!=="undefined"){if(l&&v in l?(u=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Sn(u)&&~u.indexOf("random(")&&(u=Cu(u)),kn(u+"")||u==="auto"||(u+=Ei.units[v]||kn(kr(e,v))||""),(u+"").charAt(1)==="="&&(u=kr(e,v))):u=kr(e,v),f=parseFloat(u),m=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),m&&(c=c.substr(2)),h=parseFloat(c),v in yr&&(v==="autoAlpha"&&(f===1&&kr(e,"visibility")==="hidden"&&h&&(f=0),y.push("visibility",0,a.visibility),As(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),v!=="scale"&&v!=="transform"&&(v=yr[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in Qr,x){if(this.styles.save(v),A=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=yi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=c,c=yi(e,"perspective"),b?e.style.perspective=b:Vs(e,"perspective")}h=parseFloat(c)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||Lu(e,t.parseTransform),M=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new oi(this._pt,a,jt,0,1,T.renderTransform,T,0,-1),S.dep=1),v==="scale")this._pt=new oi(this._pt,T,"scaleY",T.scaleY,(m?Ua(T.scaleY,m+h):h)-T.scaleY||0,Jm),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(ai,0,a[ai]),c=uD(c),T.svg?t0(e,c,0,M,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==T.zOrigin&&As(this,T,"zOrigin",T.zOrigin,d),As(this,a,v,eh(u),eh(c)));continue}else if(v==="svgOrigin"){t0(e,c,1,M,0,this);continue}else if(v in O1){dD(this,T,v,f,m?Ua(f,m+c):c);continue}else if(v==="smoothOrigin"){As(this,T,"smooth",T.smooth,c);continue}else if(v==="force3D"){T[v]=c;continue}else if(v==="transform"){pD(this,c,e);continue}}else v in a||(v=el(v)||v);if(x||(h||h===0)&&(f||f===0)&&!jL.test(c)&&v in a)_=(u+"").substr((f+"").length),h||(h=0),d=kn(c)||(v in Ei.units?Ei.units[v]:_),_!==d&&(f=Gs(e,v,u,d)),this._pt=new oi(this._pt,x?T:a,v,f,(m?Ua(f,m+h):h)-f,!x&&(d==="px"||v==="zIndex")&&t.autoRound!==!1?JL:Jm),this._pt.u=d||0,x&&A!==c?(this._pt.b=u,this._pt.e=A,this._pt.r=ZL):_!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=KL);else if(v in a)lD.call(this,e,v,u,m?m+c:c);else if(v in e)this.add(e,v,u||e[v],m?m+c:c,r,s);else if(v!=="parseTransform"){Sg(v,c);continue}x||(v in a?y.push(v,0,a[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,u||e[v])),o.push(v)}}w&&R1(this)},render:function(e,t){if(t.tween._time||!Dg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:kr,aliases:yr,getSetter:function(e,t,i){var r=yr[t];return r&&r.indexOf(",")<0&&(t=r),t in Qr&&t!==ai&&(e._gsap.x||kr(e,"x"))?i&&Ix===i?t==="scale"?nD:tD:(Ix=i||{})&&(t==="scale"?iD:rD):e.style&&!vg(e.style[t])?QL:~t.indexOf("-")?eD:bg(e,t)},core:{_removeProperty:Vs,_getMatrix:Ig}};li.utils.checkPrefix=el;li.core.getStyleSaver=N1;(function(n,e,t,i){var r=si(n+","+e+","+t,function(s){Qr[s]=1});si(e,function(s){Ei.units[s]="deg",O1[s]=1}),yr[r[13]]=n+","+e,si(i,function(s){var o=s.split(":");yr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ei.units[n]="px"});li.registerPlugin(z1);var V1=li.registerPlugin(z1)||li;V1.core.Tween;const mD={background:"#08060f",idle:3811932,idleEdge:5914506,active:11700735,activeEdge:14731519,hot:13936127,accent:9068511,ground:1182244,particle:13145599,hudPrimary:"#E8DFFF",hudAccent:"#B289FF",hudMuted:"#8a5fdf"};function gD({height:n=600,palette:e={},showHUD:t=!0,enableOrbit:i=!0,orbitSpeed:r=.04,pixelRatioCap:s=2,className:o="",style:a={}}){const l={...mD,...e},u=Un.useRef(null),c=Un.useRef(null),h={oee:Un.useRef(null),thr:Un.useRef(null),lat:Un.useRef(null),phase:Un.useRef(null),phaseDetail:Un.useRef(null),log:Un.useRef(null),sparkPath:Un.useRef(null),sparkArea:Un.useRef(null)},[f,p]=Un.useState(!1);return Un.useEffect(()=>p(!0),[]),Un.useEffect(()=>{if(!f||!c.current)return;const g=c.current;let v=g.clientWidth,_=g.clientHeight;const d=-3,m=3,x=-14,S=4,T=8,M=18,w=6,y=new D(S-.8,1,d),A=new D(T+.6,1.1,m),b=new $A;b.fog=new ag(parseInt(l.background.replace("#",""),16),.018);const P=new ki(35,v/_,.1,500),I=new $P({antialias:!0,alpha:!0});I.setPixelRatio(Math.min(window.devicePixelRatio,s)),I.setSize(v,_),I.setClearColor(0,0),g.appendChild(I.domElement);const G=new Bu(80,80,40,40),X=new zt({color:l.ground,transparent:!0,opacity:.6}),N=new _t(G,X);N.rotation.x=-Math.PI/2,N.position.y=-.01,b.add(N);const B=new QC(80,40,6963135,2759242);B.material.transparent=!0,B.material.opacity=.25,b.add(B),b.add(new KC(8413376,.6));const O=new $C(l.active,.4);O.position.set(10,20,10),b.add(O);const U=[];function V(ie,ne,ee,le={}){const Ie=new Fn(ie,ne,ee),ze=new zt({color:le.fill??l.idle,transparent:!0,opacity:le.fillOpacity??.35}),qe=new _t(Ie,ze),Lt=new so(Ie),st=new dr({color:le.edge??l.idleEdge,transparent:!0,opacity:le.edgeOpacity??.9}),ft=new ms(Lt,st),Jt=new vn;return Jt.add(qe),Jt.add(ft),Jt.userData={fillMat:ze,edgeMat:st},U.push(Ie,Lt,ze,st),Jt}function j(ie,ne,ee={}){const le=new Wn(ie,ie,ne,12),Ie=new zt({color:ee.fill??l.idle,transparent:!0,opacity:ee.fillOpacity??.35}),ze=new _t(le,Ie),qe=new so(le),Lt=new dr({color:ee.edge??l.idleEdge,transparent:!0,opacity:ee.edgeOpacity??.9}),st=new ms(qe,Lt),ft=new vn;return ft.add(ze),ft.add(st),ft.userData={fillMat:Ie,edgeMat:Lt},U.push(le,qe,Ie,Lt),ft}const $=[],K=new vn;b.add(K),[-12].forEach(ie=>{const ne=new Om;ne.moveTo(0,0),ne.lineTo(3.5,0),ne.lineTo(3.5,.4),ne.lineTo(1,.4),ne.lineTo(1,2.2),ne.lineTo(3.4,2.2),ne.lineTo(3.4,2.8),ne.lineTo(0,2.8),ne.lineTo(0,0);const ee={depth:2.4,bevelEnabled:!1},le=new qf(ne,ee);le.center();const Ie=new zt({color:2759242,transparent:!0,opacity:.35}),ze=new _t(le,Ie),qe=new so(le),Lt=new dr({color:l.idleEdge,transparent:!0,opacity:.9}),st=new ms(qe,Lt),ft=new vn;ft.add(ze),ft.add(st),ft.rotation.y=-Math.PI/2,ft.position.set(ie,1.4,-3.45),ft.userData={fillMat:Ie,edgeMat:Lt},K.add(ft),$.push(ft),U.push(le,qe,Ie,Lt);const Jt=V(.25,1,.25,{fill:l.active,edge:l.activeEdge,fillOpacity:.3}),Kn=2.2;Jt.position.set(ie,Kn,-3),Jt.userData.toolhead=!0,Jt.userData.baseY=Kn,K.add(Jt),$.push(Jt);const un=V(1,.4,.1,{fill:l.active,edge:l.activeEdge,fillOpacity:.2});un.position.set(ie,1.8,-4.25),K.add(un),$.push(un)});const Ge=S-x,He=(x+S)/2,ke=new Fn(Ge,.2,1.4),Z=new zt({color:2759242,transparent:!0}),xe=new _t(ke,Z);xe.position.set(He,.7,d),K.add(xe);const ge=new so(ke),Fe=new dr({color:l.idleEdge,transparent:!0,opacity:.8}),Ye=new ms(ge,Fe);Ye.position.copy(xe.position),K.add(Ye),U.push(ke,ge,Z,Fe);for(let ie=x+.5;ie<=S;ie+=4.2){const ne=j(.1,.6,{fill:3811932,fillOpacity:.8});ne.position.set(ie,.3,d),K.add(ne)}const Xe=M-T,ht=(T+M)/2,$e=new Fn(Xe,.2,1.2),re=new zt({color:2759242,transparent:!0,opacity:.7}),ce=new _t($e,re);ce.position.set(ht,.7,m),K.add(ce);const se=new so($e),Me=new dr({color:l.idleEdge,transparent:!0,opacity:.8}),ye=new ms(se,Me);ye.position.copy(ce.position),K.add(ye),U.push($e,se,re,Me);for(let ie=T+.5;ie<=M-1;ie+=4){const ne=j(.1,.7,{fill:3811932,fillOpacity:.8});ne.position.set(ie,.35,m),K.add(ne)}const Ke=3,L=[];for(let ie=0;ie<Ke;ie++){const ne=V(.6,.6,.6,{fill:l.hot,edge:l.activeEdge,fillOpacity:.5}),ee=x+ie*(Ge/Ke);ne.position.set(ee,1.1,d);const le=new Fn(.26,.015,.26),Ie=new zt({color:16777215,transparent:!0,opacity:.92}),ze=new _t(le,Ie);ze.position.set(0,.31,0);const qe=ee>-12;ze.visible=qe,ne.add(ze),U.push(le,Ie),K.add(ne),L.push({mesh:ne,state:"on_belt1",belt2X:0,label:ze,shrunk:!1})}const Ze=j(.7,.4,{fill:l.active,edge:l.activeEdge,fillOpacity:.3});Ze.position.set(w,.2,0),K.add(Ze),$.push(Ze);const De=j(.25,1.5,{fill:l.active,edge:l.activeEdge});De.position.set(w,1.15,0),K.add(De),$.push(De);const We=new vn;We.position.set(w,1.9,0),K.add(We);const ue=new vn;We.add(ue);const mt=V(2.2,.28,.28,{fill:l.active,edge:l.activeEdge});mt.position.set(1.1,0,0),ue.add(mt),$.push(mt);const R=new vn;R.position.set(2.2,0,0),ue.add(R);const E=V(1.8,.24,.24,{fill:l.active,edge:l.activeEdge});E.position.set(.9,0,0),R.add(E),$.push(E);const z=new vn;z.position.set(1.8,0,0),z.rotation.order="ZYX",R.add(z);const Q=V(.8,.15,.3,{fill:l.active,edge:l.activeEdge});z.add(Q),$.push(Q);const oe=V(.08,.35,.15,{fill:l.hot,edge:l.activeEdge,fillOpacity:.4});oe.position.set(-.35,-.25,0),z.add(oe),$.push(oe);const he=V(.08,.35,.15,{fill:l.hot,edge:l.activeEdge,fillOpacity:.4});he.position.set(.35,-.25,0),z.add(he),$.push(he);const pe=new hn;pe.position.set(0,-.4,0),z.add(pe);const q=V(2.5,1.8,2.5);q.position.set(-4,.9,3),K.add(q),$.push(q);const te=new Wn(.03,.03,1.5,6),Ee=new zt({color:l.hot,transparent:!0,opacity:0}),be=new _t(te,Ee);be.position.set(-4,2.4,3),K.add(be),U.push(te,Ee);const _e=V(2.8,2.2,2.2);_e.position.set(M+1.5,1.1,m),K.add(_e),$.push(_e);const de=V(1.5,.4,1.5,{fill:l.active,edge:l.activeEdge,fillOpacity:.3});de.position.set(M+1.5,2,m),de.userData.press=!0,de.userData.baseY=2,K.add(de),$.push(de);const Ve=10.7,Je={fill:1707822,edge:l.idleEdge,fillOpacity:.92},ut=V(2.8,.38,2.1,Je);ut.position.set(Ve,2.1,m),K.add(ut),$.push(ut);const F=V(2.8,1.35,.22,Je);F.position.set(Ve,1.23,m-.94),K.add(F),$.push(F);const me=V(2.8,1.35,.22,Je);me.position.set(Ve,1.23,m+.94),K.add(me),$.push(me);const J=V(.3,.55,2.1,Je);J.position.set(Ve-1.4,1.93,m),K.add(J),$.push(J);const Ce=V(.3,.55,2.1,Je);Ce.position.set(Ve+1.4,1.93,m),K.add(Ce),$.push(Ce);const ve=new Fn(2.5,1.2,1.6),ae=new zt({color:65540}),Oe=new _t(ve,ae);Oe.position.set(Ve,1.22,m),Oe.renderOrder=0,K.add(Oe),U.push(ve,ae);const Qe=new Wn(.035,.035,.45,8),kt=new zt({color:1707822}),yt=new _t(Qe,kt);yt.position.set(Ve,2.52,m-.6),K.add(yt);const bi=new Ea(.13,12,12),Mn=new zt({color:5570560,transparent:!0,opacity:.9}),qs=new _t(bi,Mn);qs.position.set(Ve,2.88,m-.6),K.add(qs);const Vu=new pg(.18,.03,8,24),ts=new zt({color:5570560,transparent:!0,opacity:0}),ns=new _t(Vu,ts);ns.position.copy(qs.position),ns.rotation.x=Math.PI/2,K.add(ns),U.push(Qe,kt,bi,Mn,Vu,ts);const Pi=-2.6,is=3,js=1.5,Vo=V(.38,.06,.08,{fill:1707822,edge:l.idleEdge,fillOpacity:.95});Vo.position.set(Pi-.19,js,is),K.add(Vo),$.push(Vo);const rs=V(.06,.44,.56,{fill:854048,edge:l.idleEdge,fillOpacity:.98});rs.position.set(Pi,js,is),K.add(rs),$.push(rs);const al=new Fn(.01,.32,.42),$s=new zt({color:l.active,transparent:!0,opacity:.55}),ll=new _t(al,$s);ll.position.set(Pi+.04,js,is),K.add(ll),U.push(al,$s),[-.12,0,.12].forEach((ie,ne)=>{const ee=new Fn(.012,.055,.055),le=new zt({color:ne===0?65416:ne===1?l.hot:4491519,transparent:!0,opacity:.9}),Ie=new _t(ee,le);Ie.position.set(Pi+.04,js-.22,is+ie),K.add(Ie),U.push(ee,le)});const En=new vn,ul=V(1.2,.15,1.6,{fill:657930,fillOpacity:.9,edge:l.activeEdge});ul.position.y=.15,En.add(ul),$.push(ul);const cl=V(1,.35,1.4,{fill:l.hot,edge:l.activeEdge,fillOpacity:.5});cl.position.y=.4,En.add(cl),$.push(cl),[[-.55,.15,.5],[.55,.15,.5],[-.55,.15,-.5],[.55,.15,-.5]].forEach(([ie,ne,ee])=>{const le=j(.15,.1,{fill:0,edge:l.activeEdge,fillOpacity:.9});le.rotation.z=Math.PI/2,le.position.set(ie,ne,ee),En.add(le)});const Ks=V(.6,.4,.6,{fill:l.active,edge:l.activeEdge,fillOpacity:.3});Ks.position.y=.825,En.add(Ks),$.push(Ks);const Gu=new Fn(.26,.015,.26),Hu=new zt({color:16777215,transparent:!0,opacity:.92}),Wu=new _t(Gu,Hu);Wu.position.set(0,.21,0),Ks.add(Wu),U.push(Gu,Hu);const C=new Ea(.07,8,8),k=new zt({color:l.hot}),Y=new _t(C,k);Y.position.set(.35,.4,.72),En.add(Y);const H=new _t(C,k);H.position.set(-.35,.4,.72),En.add(H);const W=V(.4,.1,.2,{fill:0,edge:l.activeEdge});W.position.set(0,.25,.75),En.add(W);const Te=j(.02,.4,{fill:0,edge:l.activeEdge,fillOpacity:.9});Te.position.set(-.4,.75,-.5),En.add(Te);const Pe=new Ea(.05,8,8),Se=new _t(Pe,k);Se.position.set(-.4,.95,-.5),En.add(Se),U.push(Pe),En.position.set(-14,0,0),K.add(En),U.push(C,k);function Ue(ie,ne,ee=0){const le=new vn,Ie=3811932,ze=l.activeEdge;function qe(Ih,lE=.82,uE=.32){const e_=new zt({color:Ie,transparent:!0,opacity:lE}),t_=new so(Ih),n_=new dr({color:ze,transparent:!0,opacity:uE}),Uh=new vn;return Uh.add(new _t(Ih,e_)),Uh.add(new ms(t_,n_)),U.push(Ih,e_,t_,n_),Uh}const Lt=qe(new Fn(.15,.07,.26));Lt.position.set(-.15,.035,.07),le.add(Lt);const st=qe(new Fn(.15,.07,.26));st.position.set(.15,.035,.07),le.add(st);const ft=qe(new Wn(.065,.07,.48,8));ft.position.set(-.15,.31,0),le.add(ft);const Jt=qe(new Wn(.065,.07,.48,8));Jt.position.set(.15,.31,0),le.add(Jt);const Kn=qe(new Wn(.09,.075,.46,8));Kn.position.set(-.14,.78,0),le.add(Kn);const un=qe(new Wn(.09,.075,.46,8));un.position.set(.14,.78,0),le.add(un);const Ku=qe(new Fn(.44,.7,.26),.85,.38);Ku.position.y=1.36,le.add(Ku);const Zu=qe(new Wn(.08,.1,.18,8));Zu.position.y=1.8,le.add(Zu);const hl=qe(new Ea(.2,10,7),.9,.3);hl.position.y=2.09,le.add(hl);const Xo=qe(new Wn(.065,.06,.42,8));Xo.position.set(-.27,1.5,0),Xo.rotation.z=-.22,le.add(Xo);const eo=qe(new Wn(.065,.06,.42,8));eo.position.set(.27,1.5,0),eo.rotation.z=.22,le.add(eo);const Yo=qe(new Wn(.055,.05,.38,8));Yo.position.set(-.37,1.12,0),Yo.rotation.z=-.28,le.add(Yo);const Nh=qe(new Wn(.055,.05,.38,8));return Nh.position.set(.37,1.12,0),Nh.rotation.z=.28,le.add(Nh),le.position.set(ie,0,ne),le.rotation.y=ee,le}K.add(Ue(-8,-1.2,Math.PI)),K.add(Ue(-2,3,-Math.PI/2));const Ne=new vn;Ne.position.set(0,10,0),b.add(Ne);const et=new mg(1.2,.28,80,12,2,3),nt=new zt({color:l.active,wireframe:!0,transparent:!0,opacity:.7}),Be=new _t(et,nt);Ne.add(Be),U.push(et,nt);const St=new hg(2,1),Bt=new zt({color:l.activeEdge,wireframe:!0,transparent:!0,opacity:.2}),It=new _t(St,Bt);Ne.add(It),U.push(St,Bt);const Tt=[];for(let ie=0;ie<5;ie++){const ne=new dg(.18,0),ee=new zt({color:l.hot,transparent:!0,opacity:.8}),le=new _t(ne,ee);le.userData={angle:ie/5*Math.PI*2,radius:3+Math.random()*.5,speed:.3+Math.random()*.2,yOff:Math.random()*.5},Ne.add(le),Tt.push(le),U.push(ne,ee)}let ln=new vn,Re;[-5].forEach(ie=>{const ne=new Om;ne.moveTo(0,0),ne.lineTo(.4,0),ne.lineTo(.4,2.4),ne.lineTo(2.6,2.4),ne.lineTo(2.6,0),ne.lineTo(3,0),ne.lineTo(3,2.8),ne.lineTo(0,2.8),ne.lineTo(0,0);const ee={depth:.5,bevelEnabled:!1},le=new qf(ne,ee);le.center();const Ie=new zt({color:l.idle,transparent:!0,opacity:.35}),ze=new _t(le,Ie),qe=new so(le),Lt=new dr({color:l.idleEdge,transparent:!0,opacity:.9}),st=new ms(qe,Lt),ft=new vn;ft.add(ze),ft.add(st),ft.userData={fillMat:Ie,edgeMat:Lt},ft.rotation.y=Math.PI/2,ft.position.set(ie,1.4,-3),K.add(ft),$.push(ft);const Jt=5,Kn=.35,un=(Jt-1)*Kn,Ku=-un/2,Zu=1.6,hl=new Wn(.008,.008,Zu,8);Re=new zt({color:16711680,transparent:!0,opacity:.7});for(let eo=0;eo<Jt;eo++){const Yo=new _t(hl,Re);Yo.position.set(Ku+eo*Kn,.2,0),ln.add(Yo)}ft.add(ln);const Xo=V(un+.2,.05,.2,{fill:16711680});Xo.position.set(0,1,0),ft.add(Xo),U.push(le,qe,Ie,Lt,hl,Re)});const Tn=[new D(-12,2.2,-5),new D(w,1.9,0),new D(-4,.9,3),new D(M+1.5,1.1,m),new D(-5,2.4,-3)],ct=Tn.length,Pn=40,ui=ct*Pn,rr=new Float32Array(ui*3),br=[];for(let ie=0;ie<ct;ie++)for(let ne=0;ne<Pn;ne++)br.push({stream:ie,progress:ne/Pn,offset:(Math.random()-.5)*.3});const xt=new $t;xt.setAttribute("position",new Mi(rr,3));const Ut=(()=>{const ie=document.createElement("canvas");ie.width=64,ie.height=64;const ne=ie.getContext("2d"),ee=ne.createRadialGradient(32,32,0,32,32,32);return ee.addColorStop(0,"rgba(220,180,255,1)"),ee.addColorStop(.4,"rgba(180,130,255,0.7)"),ee.addColorStop(1,"rgba(140,80,255,0)"),ne.fillStyle=ee,ne.fillRect(0,0,64,64),new sC(ie)})(),Li=new ff({size:.5,map:Ut,transparent:!0,opacity:1,blending:ql,depthWrite:!1,color:l.particle}),Ct=new Id(xt,Li);b.add(Ct),U.push(xt,Li,Ut);const Di=200,Yi=new Float32Array(Di*3);for(let ie=0;ie<Di;ie++)Yi[ie*3]=(Math.random()-.5)*60,Yi[ie*3+1]=Math.random()*12,Yi[ie*3+2]=(Math.random()-.5)*40;const Zs=new $t;Zs.setAttribute("position",new Mi(Yi,3));const Vg=new ff({size:.08,map:Ut,color:l.accent,transparent:!0,opacity:.5,blending:ql,depthWrite:!1}),G1=new Id(Zs,Vg);b.add(G1),U.push(Zs,Vg);const Go=1800,Xu=new Float32Array(Go*3),Gg=new Float32Array(Go),Hg=new Float32Array(Go),Wg=new Float32Array(Go);for(let ie=0;ie<Go;ie++){const ne=Math.random()*Math.PI*2,ee=Math.acos(2*Math.random()-1),le=72+Math.random()*28;Xu[ie*3]=le*Math.sin(ee)*Math.cos(ne),Xu[ie*3+1]=le*Math.cos(ee)+5,Xu[ie*3+2]=le*Math.sin(ee)*Math.sin(ne);const Ie=.8+Math.random()*1.6,ze=Math.random()*Math.PI*2,qe=Math.acos(2*Math.random()-1);Gg[ie]=Ie*Math.sin(qe)*Math.cos(ze),Hg[ie]=Ie*Math.cos(qe)*.5,Wg[ie]=Ie*Math.sin(qe)*Math.sin(ze)}const Yu=new $t;Yu.setAttribute("position",new Mi(Xu,3));const wh=new ff({size:2,sizeAttenuation:!1,transparent:!0,opacity:.85,blending:ql,depthWrite:!1,fog:!1,color:14735615}),H1=new Id(Yu,wh);b.add(H1),U.push(Yu,wh);const Xg=new dr({color:l.active,transparent:!0,opacity:.15});U.push(Xg),Tn.forEach(ie=>{const ne=new $t().setFromPoints([new D(0,10,0),ie]);b.add(new EM(ne,Xg)),U.push(ne)});const qu=window.innerWidth<720?52:30;let Ho=Math.PI*.5;const Yg=15;P.position.set(Math.cos(Ho)*qu,Yg,Math.sin(Ho)*qu),P.lookAt(2,1.5,0);const Mt={phase:"optimize",activation:1,oee:70,throughput:280,latency:52,deployProgress:1,running:1},ju=Array(40).fill(60);function W1(){if(!h.sparkPath.current||!h.sparkArea.current)return;const ie=ju.map((ne,ee)=>{const le=ee/(ju.length-1)*180,Ie=28-(ne-50)/50*26;return`${le.toFixed(1)} ${Ie.toFixed(1)}`});h.sparkPath.current.setAttribute("d","M"+ie.join(" L")),h.sparkArea.current.setAttribute("d",`M0 28 L${ie.join(" L")} L180 28 Z`)}function ss(ie){if(!h.log.current)return;const ne=new Date().toTimeString().slice(0,8),ee=document.createElement("div");for(ee.className="sfh-log-line sfh-log-new",ee.innerHTML=`<span class="sfh-log-tag">${ne}</span>${ie}`,h.log.current.insertBefore(ee,h.log.current.firstChild);h.log.current.children.length>4;)h.log.current.removeChild(h.log.current.lastChild)}ss("pipeline idle · awaiting trigger");const Pt=V1.timeline({repeat:-1});Pt.call(()=>{Mt.phase="optimize",h.phase.current&&(h.phase.current.textContent="MES_ACTIVE"),h.phaseDetail.current&&(h.phaseDetail.current.textContent="CONTINUOUS_FLOW (ZERO_BOTTLENECKS)")}),Pt.to(Mt,{oee:85,duration:3,ease:"power1.inOut"}),Pt.to(Mt,{throughput:540,duration:3,ease:"power1.inOut"},"<"),Pt.to(Mt,{latency:32,duration:3,ease:"power1.inOut"},"<"),Pt.call(()=>ss("▲ cycle time reduced 18%")),Pt.to(Mt,{oee:94,duration:3,ease:"power1.inOut"}),Pt.to(Mt,{throughput:740,duration:3,ease:"power1.inOut"},"<"),Pt.to(Mt,{latency:22,duration:3,ease:"power1.inOut"},"<"),Pt.call(()=>ss("▲ bottleneck resolved · line 2")),Pt.to(Mt,{oee:98,duration:2,ease:"power1.out"}),Pt.to(Mt,{throughput:847,duration:2,ease:"power1.out"},"<"),Pt.to(Mt,{latency:18,duration:2,ease:"power1.out"},"<"),Pt.call(()=>ss("● system stable · 98% OEE")),Pt.to({},{duration:4}),Pt.call(()=>ss("● throughput maximized")),Pt.to({},{duration:1}),Pt.call(()=>{Mt.phase="reset",h.phase.current&&(h.phase.current.textContent="MANUAL_OVERRIDE"),h.phaseDetail.current&&(h.phaseDetail.current.textContent="DISABLED (BOTTLENECK_DETECTED)"),ss("↻ shutting down production line")}),Pt.to(Mt,{activation:0,running:0,oee:0,throughput:0,latency:200,deployProgress:0,duration:3,ease:"power2.inOut"}),Pt.to({},{duration:2}),Pt.call(()=>{Mt.phase="optimize",h.phase.current&&(h.phase.current.textContent="INITIALIZING_MES..."),h.phaseDetail.current&&(h.phaseDetail.current.textContent="RESOLVING_BOTTLENECK..."),ss("→ restarting production line")}),Pt.to(Mt,{activation:1,running:1,oee:70,throughput:280,latency:52,deployProgress:1,duration:4,ease:"power2.inOut"}),Pt.call(()=>ss("✓ line running · 70% OEE")),Pt.to({},{duration:1});let Ah=performance.now(),qg=0,Ch=0,Rh=0;const sr=-12,$u=2.2,X1=1.5;let Js="idle",Qs=0,or=null;const jg=new rt,$g=new rt,Y1=new rt(l.idle),q1=new rt(l.active),j1=new rt(l.idleEdge),$1=new rt(l.activeEdge);function K1(){const ie=Mt.activation;jg.copy(Y1).lerp(q1,ie),$g.copy(j1).lerp($1,ie);const ne=.25+ie*.35,ee=.6+ie*.35;$.forEach(le=>{le.userData&&le.userData.fillMat&&(le.userData.fillMat.color.copy(jg),le.userData.fillMat.opacity=ne,le.userData.edgeMat&&(le.userData.edgeMat.color.copy($g),le.userData.edgeMat.opacity=ee))}),Z.opacity=1,re.opacity=1,Ee.opacity=ie*.9,Re&&(Re.opacity=.1+ie*.7),Y.material.color.setHSL(.75,.8,.5+Math.sin(Ch*4)*.2*ie)}function Z1(ie){const ne=xt.attributes.position,ee=Mt.deployProgress,le=Mt.activation;for(let Ie=0;Ie<ui;Ie++){const ze=br[Ie],qe=Tn[ze.stream];if(ze.progress+=ie*(.3+ee*.5)*(.8+ze.stream*.1),ze.progress>1&&(ze.progress-=1),!(ze.progress>(1-ee)*.3||Mt.phase==="activate"||Mt.phase==="optimize")){ne.array[Ie*3]=999;continue}const st=ze.progress,ft=qe.x*.5,Jt=7,Kn=qe.z*.5,un=1-st;ne.array[Ie*3]=un*un*0+2*un*st*ft+st*st*qe.x+ze.offset,ne.array[Ie*3+1]=un*un*10+2*un*st*Jt+st*st*qe.y,ne.array[Ie*3+2]=un*un*0+2*un*st*Kn+st*st*qe.z+ze.offset}ne.needsUpdate=!0,Li.opacity=.4+Math.max(ee,le)*.6}function J1(){if(Mt.activation<.05)return 0;const ie=Math.max(0,(Mt.oee-60)/38);return Mt.activation*(.6+ie*2.4)}const Q1=-1.55,eE=-1.55,bh=Math.atan2(y.x-w,y.z-0)+Q1,Ph=Math.atan2(A.x-w,A.z-0)+eE,fl=(bh+Ph)/2;let ar="waiting",ci=0,fi=null,lr=fl,Wo=fl,Lh=new D;We.rotation.y=lr;const Kg=0,os=.5;let mn=os;const as=-.8,Zg=-.15;let gn=as;function tE(ie){if(Mt.running<.1){ue.rotation.z=Dt.lerp(ue.rotation.z,os,.05),R.rotation.z=Dt.lerp(R.rotation.z,as,.05);return}ci+=ie;const ne=Wo-lr,ee=ie*3;switch(Math.abs(ne)>.01?(lr+=Math.sign(ne)*Math.min(Math.abs(ne),ee),We.rotation.y=lr):(lr=Wo,We.rotation.y=lr),ar){case"waiting":{mn=Dt.lerp(mn,os,.1),gn=Dt.lerp(gn,as,.1),Wo=fl;const le=L.find(Ie=>Ie.state==="on_belt1"&&Ie.mesh.position.x>=y.x-.5);le&&(fi=le,ar="turning_to_pick",Wo=bh);break}case"turning_to_pick":{mn=Dt.lerp(mn,os,.1),gn=Dt.lerp(gn,as,.1),Math.abs(lr-bh)<.05&&(ar="picking_down",ci=0);break}case"picking_down":{if(mn=Dt.lerp(mn,Kg,.15),gn=Dt.lerp(gn,Zg,.15),ci>.5){if(fi){fi.state="picked";const le=new D;pe.getWorldPosition(le),Lh.copy(fi.mesh.position).sub(le)}ar="picking_up",ci=0}break}case"picking_up":{mn=Dt.lerp(mn,os,.15),gn=Dt.lerp(gn,as,.15),ci>.4&&(ar="rotating",Wo=Ph,ci=0);break}case"rotating":{mn=Dt.lerp(mn,os,.1),gn=Dt.lerp(gn,as,.1),Math.abs(lr-Ph)<.05&&(ar="placing_down",ci=0);break}case"placing_down":{mn=Dt.lerp(mn,Kg,.15),gn=Dt.lerp(gn,Zg,.15),ci>.5&&(fi&&(fi.state="on_belt2",fi.belt2X=0,fi.mesh.position.copy(A),fi=null),ar="placing_up",ci=0);break}case"placing_up":{mn=Dt.lerp(mn,os,.15),gn=Dt.lerp(gn,as,.15),ci>.3&&(ar="returning",Wo=fl,ci=0);break}case"returning":{mn=Dt.lerp(mn,os,.1),gn=Dt.lerp(gn,as,.1),Math.abs(lr-fl)<.05&&(ar="waiting",ci=0);break}}if(ue.rotation.z=mn,R.rotation.z=gn,z.rotation.y=-lr+Math.PI/2,z.rotation.z=-(mn+gn),fi&&fi.state==="picked"){const le=new D;if(pe.getWorldPosition(le),ar==="placing_down"){const Ie=Math.min(ci/.5,1);fi.mesh.position.copy(le).lerp(A,Ie*Ie)}else Lh.lerp(new D(0,0,0),.1),fi.mesh.position.copy(le).add(Lh)}}function nE(ie){const ne=J1();qg+=ie*ne,L.forEach((ee,le)=>{if(ee.state==="on_belt1")ee.mesh.position.x>=sr-.6&&ee.mesh.position.x<sr+.6&&Js!=="idle"?ee.mesh.position.x=Math.min(ee.mesh.position.x,sr-.05):ee.mesh.position.x+=ie*ne,ee.mesh.position.y=1.1+Math.sin(qg*2+le*2)*.015*Mt.activation,ee.mesh.position.x>=y.x&&(ee.mesh.position.x=y.x,ee.mesh.position.z=y.z);else if(ee.state==="being_pressed")ee.mesh.position.x<sr&&(ee.mesh.position.x+=ie*ne,ee.mesh.position.x>sr&&(ee.mesh.position.x=sr)),ee.mesh.position.y=1.1,ee.mesh.position.z=d;else if(ee.state==="on_belt2"&&(ee.belt2X+=ie*ne,ee.mesh.position.x=A.x+ee.belt2X,ee.mesh.position.z=m,!ee.shrunk&&ee.mesh.position.x>Ve+1.2&&(ee.shrunk=!0,ee.mesh.scale.set(1,.667,1)),ee.mesh.position.y=ee.shrunk?1.2:1.1,ee.mesh.position.x>M+.3)){const Ie=L.filter(qe=>qe.state==="on_belt1");let ze=x;if(Ie.length>0){const qe=Math.min(...Ie.map(Lt=>Lt.mesh.position.x));ze=Math.min(qe-Ge/Ke,x)}ee.state="on_belt1",ee.mesh.position.set(ze,1.1,d),ee.mesh.scale.set(1,1,1),ee.shrunk=!1,ee.label.visible=!1}})}function iE(ie){const ne=performance.now()*.001;$.forEach(le=>{le.userData&&le.userData.press&&(le.position.y=le.userData.baseY-Math.abs(Math.sin(ne*1.5))*.5*Mt.running)});const ee=$.find(le=>le.userData&&le.userData.toolhead);if(ee){if(Mt.running<.1){ee.position.y=$u,Js="idle",or=null;return}switch(Qs+=ie,Js){case"idle":{ee.position.y=Dt.lerp(ee.position.y,$u,.1);const le=L.find(Ie=>Ie.state==="on_belt1"&&Ie.mesh.position.x>=sr-.55&&Ie.mesh.position.x<sr-.05);le&&(le.state="being_pressed",or=le,Js="arriving",Qs=0);break}case"arriving":ee.position.y=Dt.lerp(ee.position.y,$u,.1),or&&or.mesh.position.x>=sr-.05&&(or.mesh.position.x=sr,Js="pressing",Qs=0);break;case"pressing":ee.position.y=Dt.lerp(ee.position.y,X1,.16),Qs>.7&&(or&&(or.label.visible=!0),Js="releasing",Qs=0);break;case"releasing":ee.position.y=Dt.lerp(ee.position.y,$u,.11),Qs>.65&&(or&&(or.state="on_belt1",or=null),Js="idle",Qs=0);break}}}function rE(ie){Ch+=ie*Mt.activation;const ne=15,ee=Ch%ne/ne;let le=0,Ie=5.8,ze=-Math.PI/2,qe=!1,Lt=!0;if(ee<.25){const st=ee/.25;le=Dt.lerp(35,19.5,st),ze=-Math.PI/2,qe=!1}else if(ee<.35){le=19.5;const st=(ee-.25)/.1,ft=st*st*(3-2*st);ze=Dt.lerp(-Math.PI/2,-Math.PI,ft),qe=!1}else if(ee<.45)le=19.5,ze=-Math.PI,qe=ee>.4;else if(ee<.55){le=19.5;const st=(ee-.45)/.1,ft=st*st*(3-2*st);ze=Dt.lerp(-Math.PI,-Math.PI/2,ft),qe=!0}else if(ee<.85){const st=(ee-.55)/.3;le=Dt.lerp(19.5,-35,st),ze=-Math.PI/2,qe=!0}else Lt=!1,qe=!1;Lt?(En.position.set(le,0,Ie),En.rotation.y=ze,Ks.visible=qe):En.position.set(0,-999,0)}function sE(){const ie=performance.now()*.001;if(L.some(ee=>ee.state==="on_belt2"&&ee.mesh.position.x>=Ve-1.45&&ee.mesh.position.x<=Ve+1.45)){const ee=.65+.35*Math.sin(ie*9);Mn.color.setHex(65382),Mn.opacity=ee,ts.color.setHex(65382),ts.opacity=(1-ee)*.6,ns.scale.setScalar(1+(1-ee)*.5)}else{const ee=.25+.15*Math.sin(ie*1.2);Mn.color.setHex(16720384),Mn.opacity=ee,ts.opacity=0,ns.scale.setScalar(1)}}function oE(){const ie=performance.now()*.001;Be.rotation.y=ie*.3,Be.rotation.x=ie*.15,It.rotation.y=-ie*.1,Ne.position.y=10+Math.sin(ie*.6)*.3,Tt.forEach(ne=>{ne.userData.angle+=.016*ne.userData.speed,ne.position.x=Math.cos(ne.userData.angle)*ne.userData.radius,ne.position.z=Math.sin(ne.userData.angle)*ne.userData.radius,ne.position.y=Math.sin(ne.userData.angle*2+ne.userData.yOff)*.5,ne.rotation.x=ne.userData.angle,ne.rotation.y=ne.userData.angle*.7})}function aE(){h.oee.current&&(h.oee.current.textContent=Mt.oee.toFixed(0)),h.thr.current&&(h.thr.current.textContent=Math.round(Mt.throughput)),h.lat.current&&(h.lat.current.textContent=Mt.latency.toFixed(0)),ju.push(Mt.oee),ju.shift(),W1()}function Dh(){const ie=performance.now(),ne=Math.min(.05,(ie-Ah)/1e3);Ah=ie,i&&(Ho+=ne*r,P.position.x=Math.cos(Ho)*qu,P.position.z=Math.sin(Ho)*qu,P.position.y=Yg+Math.sin(Ho*.5)*1.5,P.lookAt(2,1.5,0)),K1(),Z1(ne),iE(ne),tE(ne),nE(ne),rE(ne),sE(),oE(),aE();const ee=Zs.attributes.position;for(let ze=0;ze<Di;ze++)ee.array[ze*3+1]+=ne*.1,ee.array[ze*3+1]>12&&(ee.array[ze*3+1]=0);ee.needsUpdate=!0;const le=performance.now()*.001,Ie=Yu.attributes.position;for(let ze=0;ze<Go;ze++){Ie.array[ze*3]+=Gg[ze]*ne,Ie.array[ze*3+1]+=Hg[ze]*ne,Ie.array[ze*3+2]+=Wg[ze]*ne;const qe=Ie.array[ze*3],Lt=Ie.array[ze*3+1],st=Ie.array[ze*3+2];if(qe*qe+Lt*Lt+st*st>110*110){const ft=Math.random()*Math.PI*2,Jt=Math.acos(2*Math.random()-1),Kn=72+Math.random()*28;Ie.array[ze*3]=Kn*Math.sin(Jt)*Math.cos(ft),Ie.array[ze*3+1]=Kn*Math.cos(Jt)+5,Ie.array[ze*3+2]=Kn*Math.sin(Jt)*Math.sin(ft)}}Ie.needsUpdate=!0,wh.opacity=.75+.1*Math.sin(le*.28),I.render(b,P),Rh=requestAnimationFrame(Dh)}Dh();const Jg=new ResizeObserver(()=>{v=g.clientWidth,_=g.clientHeight,P.aspect=v/_,P.updateProjectionMatrix(),I.setSize(v,_)});Jg.observe(g);const Qg=()=>{document.hidden?(Pt.pause(),cancelAnimationFrame(Rh)):(Pt.resume(),Ah=performance.now(),Dh())};return document.addEventListener("visibilitychange",Qg),()=>{cancelAnimationFrame(Rh),document.removeEventListener("visibilitychange",Qg),Jg.disconnect(),Pt.kill(),U.forEach(ie=>{ie&&typeof ie.dispose=="function"&&ie.dispose()}),b.traverse(ie=>{ie.geometry&&typeof ie.geometry.dispose=="function"&&ie.geometry.dispose(),ie.material&&(Array.isArray(ie.material)?ie.material.forEach(ne=>ne.dispose&&ne.dispose()):typeof ie.material.dispose=="function"&&ie.material.dispose())}),I.dispose(),I.domElement&&I.domElement.parentNode&&I.domElement.parentNode.removeChild(I.domElement)}},[f,i,r,s]),at.jsxs("div",{ref:u,className:`sfh-root ${o}`,style:{position:"relative",width:"100%",height:typeof n=="number"?`${n}px`:n,background:l.background,borderRadius:12,overflow:"hidden",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',...a},children:[at.jsx("style",{children:`
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
          color: ${l.hudPrimary};
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
          color: ${l.hudAccent};
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
          color: ${l.hudAccent};
          margin-left: 2px;
        }
        .sfh-root .sfh-phase {
          top: 20px; right: 24px; min-width: 0; text-align: right;
          padding: 12px 16px;
          background: rgba(20,10,40,0.45);
          border-color: rgba(180,130,255,0.22);
          box-shadow: none;
        }
        .sfh-root .sfh-mono {
          font-family: 'SF Mono', Menlo, Consolas, monospace;
          font-size: 13px; font-weight: 500; letter-spacing: 0.3px; line-height: 1.4;
          color: rgba(255,255,255,0.85);
        }
        .sfh-root .sfh-mono-dim {
          font-family: 'SF Mono', Menlo, Consolas, monospace;
          font-size: 12px; font-weight: 400; letter-spacing: 0.3px; line-height: 1.4;
          color: ${l.hudMuted};
        }
        .sfh-root .sfh-phase-dot {
          display: inline-block; width: 8px; height: 8px; border-radius: 50%;
          background: #C895FF; box-shadow: 0 0 10px #C895FF;
          margin-right: 6px; vertical-align: middle;
          animation: sfh-pulse 1.4s ease-in-out infinite;
        }
        @keyframes sfh-pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .sfh-root .sfh-metrics {
          top: 20px; left: 24px;
          display: flex; align-items: stretch; gap: 0;
          padding: 12px 18px;
          background: rgba(20,10,40,0.45);
          border-color: rgba(180,130,255,0.22);
          box-shadow: none;
        }
        .sfh-root .sfh-m-item { padding: 0 18px; }
        .sfh-root .sfh-m-item:first-child { padding-left: 2px; }
        .sfh-root .sfh-m-item:last-child  { padding-right: 2px; }
        .sfh-root .sfh-m-label {
          font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
          color: ${l.hudMuted}; opacity: 0.85; margin-bottom: 4px;
        }
        .sfh-root .sfh-m-val {
          font-size: 26px; font-weight: 300;
          color: rgba(255,255,255,0.85);
          font-variant-numeric: tabular-nums;
        }
        .sfh-root .sfh-m-unit {
          font-size: 13px; color: ${l.hudMuted}; margin-left: 3px;
        }
        .sfh-root .sfh-m-sep {
          width: 1px; background: rgba(180,130,255,0.22); margin: 2px 0;
        }
        .sfh-root .sfh-spark {
          width: 90px; height: 20px; margin-top: 6px; display: block; opacity: 0.75;
        }

        @media (max-width: 720px) {
          .sfh-root .sfh-m-item.sfh-m-hide { display: none; }
          .sfh-root .sfh-m-sep.sfh-m-hide  { display: none; }
          .sfh-root .sfh-hud { display: none; }
        }
      `}),at.jsx("div",{className:"sfh-grid-bg"}),at.jsx("div",{ref:c,style:{position:"absolute",inset:0}}),at.jsx("div",{className:"sfh-overlay"}),t&&at.jsxs("div",{className:"sfh-hud",children:[at.jsxs("div",{className:"sfh-card sfh-phase",children:[at.jsxs("div",{style:{fontSize:9,letterSpacing:2,textTransform:"uppercase",color:l.hudMuted,opacity:.7,marginBottom:2},children:[at.jsx("span",{className:"sfh-phase-dot",style:{width:5,height:5,boxShadow:"0 0 6px #C895FF"}}),"Status"]}),at.jsx("div",{className:"sfh-mono",ref:h.phase,children:"MES_ACTIVE"}),at.jsx("div",{style:{fontSize:9,letterSpacing:2,textTransform:"uppercase",color:l.hudMuted,opacity:.7,marginTop:6,marginBottom:2},children:"Optimization"}),at.jsx("div",{className:"sfh-mono-dim",ref:h.phaseDetail,children:"CONTINUOUS_FLOW (ZERO_BOTTLENECKS)"})]}),at.jsxs("div",{className:"sfh-card sfh-metrics",children:[at.jsxs("div",{className:"sfh-m-item",children:[at.jsx("div",{className:"sfh-m-label",children:"OEE"}),at.jsxs("div",{className:"sfh-m-val",children:[at.jsx("span",{ref:h.oee,children:"60"}),at.jsx("span",{className:"sfh-m-unit",children:"%"})]}),at.jsxs("svg",{className:"sfh-spark",viewBox:"0 0 180 28",preserveAspectRatio:"none",children:[at.jsx("path",{ref:h.sparkPath,d:"M0 20 L180 20",fill:"none",stroke:l.hudAccent,strokeWidth:"1.5",strokeLinejoin:"round"}),at.jsx("path",{ref:h.sparkArea,d:"M0 28 L0 20 L180 20 L180 28 Z",fill:"rgba(178,137,255,0.15)"})]})]}),at.jsx("div",{className:"sfh-m-sep sfh-m-hide"}),at.jsxs("div",{className:"sfh-m-item sfh-m-hide",children:[at.jsx("div",{className:"sfh-m-label",children:"Throughput"}),at.jsxs("div",{className:"sfh-m-val",children:[at.jsx("span",{ref:h.thr,children:"0"}),at.jsx("span",{className:"sfh-m-unit",children:"u/h"})]})]}),at.jsx("div",{className:"sfh-m-sep sfh-m-hide"}),at.jsxs("div",{className:"sfh-m-item sfh-m-hide",children:[at.jsx("div",{className:"sfh-m-label",children:"Latency"}),at.jsxs("div",{className:"sfh-m-val",children:[at.jsx("span",{ref:h.lat,children:"—"}),at.jsx("span",{className:"sfh-m-unit",children:"ms"})]})]})]})]})]})}function _D(){return at.jsx("div",{style:{width:"100vw",height:"100vh",margin:0,padding:0},children:at.jsx(gD,{height:"100%"})})}ep.createRoot(document.getElementById("root")).render(at.jsx(AE.StrictMode,{children:at.jsx(_D,{})}));
