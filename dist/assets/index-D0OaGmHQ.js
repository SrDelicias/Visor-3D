(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="160",xi={ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wf=0,pc=1,Xf=2,bu=1,qf=2,bn=3,_n=0,Pe=1,Ke=2,Yn=0,ui=1,mc=2,gc=3,_c=4,Yf=5,ai=100,jf=101,$f=102,xc=103,vc=104,Kf=200,Zf=201,Jf=202,Qf=203,Mo=204,yo=205,th=206,eh=207,nh=208,ih=209,rh=210,sh=211,ah=212,oh=213,ch=214,lh=0,uh=1,fh=2,Xs=3,hh=4,dh=5,ph=6,mh=7,ra=0,gh=1,_h=2,jn=0,xh=1,vh=2,Mh=3,yh=4,Sh=5,Eh=6,Au=300,ir=301,rr=302,So=303,Eo=304,sa=306,To=1e3,un=1001,bo=1002,Le=1003,Mc=1004,Sa=1005,je=1006,Th=1007,Fr=1008,$n=1009,bh=1010,Ah=1011,$o=1012,wu=1013,kn=1014,Wn=1015,Or=1016,Ru=1017,Cu=1018,fi=1020,wh=1021,fn=1023,Rh=1024,Ch=1025,hi=1026,sr=1027,Lh=1028,Lu=1029,Ph=1030,Pu=1031,Du=1033,Ea=33776,Ta=33777,ba=33778,Aa=33779,yc=35840,Sc=35841,Ec=35842,Tc=35843,Uu=36196,bc=37492,Ac=37496,wc=37808,Rc=37809,Cc=37810,Lc=37811,Pc=37812,Dc=37813,Uc=37814,Ic=37815,Nc=37816,Fc=37817,Oc=37818,Bc=37819,zc=37820,Hc=37821,wa=36492,Vc=36494,Gc=36495,Dh=36283,kc=36284,Wc=36285,Xc=36286,Iu=3e3,di=3001,Uh=3200,Ih=3201,aa=0,Nh=1,Ze="",ye="srgb",In="srgb-linear",Ko="display-p3",oa="display-p3-linear",qs="linear",Qt="srgb",Ys="rec709",js="p3",Mi=7680,qc=519,Fh=512,Oh=513,Bh=514,Nu=515,zh=516,Hh=517,Vh=518,Gh=519,Ao=35044,Yc="300 es",wo=1035,Ln=2e3,$s=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bs=Math.PI/180,Ro=180/Math.PI;function Kn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function kh(i,t){return(i%t+t)%t}function Ra(i,t,e){return(1-e)*i+e*t}function jc(i){return(i&i-1)===0&&i!==0}function Co(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wh={DEG2RAD:Bs};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,r,s,o,a,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],m=n[5],v=n[8],x=r[0],p=r[3],f=r[6],_=r[1],g=r[4],M=r[7],T=r[2],E=r[5],S=r[8];return s[0]=o*x+a*_+c*T,s[3]=o*p+a*g+c*E,s[6]=o*f+a*M+c*S,s[1]=l*x+u*_+d*T,s[4]=l*p+u*g+d*E,s[7]=l*f+u*M+d*S,s[2]=h*x+m*_+v*T,s[5]=h*p+m*g+v*E,s[8]=h*f+m*M+v*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*s,m=l*s-o*c,v=e*d+n*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=d*x,t[1]=(r*l-u*n)*x,t[2]=(a*n-r*o)*x,t[3]=h*x,t[4]=(u*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=m*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new Gt;function Fu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xh(){const i=Ks("canvas");return i.style.display="block",i}const $c={};function Dr(i){i in $c||($c[i]=!0,console.warn(i))}const Kc=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zc=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[In]:{transfer:qs,primaries:Ys,toReference:i=>i,fromReference:i=>i},[ye]:{transfer:Qt,primaries:Ys,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[oa]:{transfer:qs,primaries:js,toReference:i=>i.applyMatrix3(Zc),fromReference:i=>i.applyMatrix3(Kc)},[Ko]:{transfer:Qt,primaries:js,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Zc),fromReference:i=>i.applyMatrix3(Kc).convertLinearToSRGB()}},qh=new Set([In,oa]),$t={enabled:!0,_workingColorSpace:In,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!qh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Xr[t].toReference,r=Xr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Xr[i].primaries},getTransfer:function(i){return i===Ze?qs:Xr[i].transfer}};function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function La(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class Ou{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=Ks("canvas")),yi.width=t.width,yi.height=t.height;const n=yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=er(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(er(e[n]/255)*255):e[n]=er(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yh=0;class Bu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Kn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pa(r[o].image)):s.push(Pa(r[o]))}else s=Pa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jh=0;class Oe extends _i{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=un,r=un,s=je,o=Fr,a=fn,c=$n,l=Oe.DEFAULT_ANISOTROPY,u=Ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Kn(),this.name="",this.source=new Bu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===di?ye:Ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case To:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case To:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?di:Iu}set encoding(t){Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===di?ye:Ze}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Au;Oe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,r=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],v=c[9],x=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,M=(m+1)/2,T=(f+1)/2,E=(u+h)/4,S=(d+x)/4,U=(v+p)/4;return g>M&&g>T?g<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(g),r=E/n,s=S/n):M>T?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=E/r,s=U/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=S/s,r=U/s),this.set(n,r,s,e),this}let _=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(d-x)/_,this.z=(h-u)/_,this.w=Math.acos((l+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $h extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===di?ye:Ze),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Oe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends $h{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zu extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Le,this.minFilter=Le,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kh extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Le,this.minFilter=Le,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=v,t[e+3]=x;return}if(d!==x||c!==h||l!==m||u!==v){let p=1-a;const f=c*h+l*m+u*v+d*x,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const T=Math.sqrt(g),E=Math.atan2(T,f*_);p=Math.sin(p*E)/T,a=Math.sin(a*E)/T}const M=a*_;if(c=c*p+h*M,l=l*p+m*M,u=u*p+v*M,d=d*p+x*M,p===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=T,l*=T,u*=T,d*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return t[e]=a*v+u*d+c*m-l*h,t[e+1]=c*v+u*h+l*d-a*m,t[e+2]=l*v+u*m+a*h-c*d,t[e+3]=u*v-a*d-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),d=a(s/2),h=c(n/2),m=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*m*v,this._y=l*m*d-h*u*v,this._z=l*u*v+h*m*d,this._w=l*u*d-h*m*v;break;case"YXZ":this._x=h*u*d+l*m*v,this._y=l*m*d-h*u*v,this._z=l*u*v-h*m*d,this._w=l*u*d+h*m*v;break;case"ZXY":this._x=h*u*d-l*m*v,this._y=l*m*d+h*u*v,this._z=l*u*v+h*m*d,this._w=l*u*d-h*m*v;break;case"ZYX":this._x=h*u*d-l*m*v,this._y=l*m*d+h*u*v,this._z=l*u*v-h*m*d,this._w=l*u*d+h*m*v;break;case"YZX":this._x=h*u*d+l*m*v,this._y=l*m*d+h*u*v,this._z=l*u*v-h*m*d,this._w=l*u*d-h*m*v;break;case"XZY":this._x=h*u*d-l*m*v,this._y=l*m*d-h*u*v,this._z=l*u*v+h*m*d,this._w=l*u*d+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new C,Jc=new mi;class ee{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),Yr.subVectors(this.max,_r),Si.subVectors(t.a,_r),Ei.subVectors(t.b,_r),Ti.subVectors(t.c,_r),Fn.subVectors(Ei,Si),On.subVectors(Ti,Ei),ei.subVectors(Si,Ti);let e=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-ei.z,ei.y,Fn.z,0,-Fn.x,On.z,0,-On.x,ei.z,0,-ei.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-ei.y,ei.x,0];return!Ua(e,Si,Ei,Ti,Yr)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,Si,Ei,Ti,Yr))?!1:(jr.crossVectors(Fn,On),e=[jr.x,jr.y,jr.z],Ua(e,Si,Ei,Ti,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new C,new C,new C,new C,new C,new C,new C,new C],an=new C,qr=new ee,Si=new C,Ei=new C,Ti=new C,Fn=new C,On=new C,ei=new C,_r=new C,Yr=new C,jr=new C,ni=new C;function Ua(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ni.fromArray(i,s);const a=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),c=t.dot(ni),l=e.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Zh=new ee,xr=new C,Ia=new C;class ur{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(xr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(Ia)),this.expandByPoint(xr.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new C,Na=new C,$r=new C,Bn=new C,Fa=new C,Kr=new C,Oa=new C;class fr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Na.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(Na);const s=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=Bn.dot(this.direction),c=-Bn.dot($r),l=Bn.lengthSq(),u=Math.abs(1-o*o);let d,h,m,v;if(u>0)if(d=o*c-a,h=o*a-c,v=s*u,d>=0)if(h>=-v)if(h<=v){const x=1/u;d*=x,h*=x,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=v?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Na).addScaledVector($r,h),m}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,r,s){Fa.subVectors(e,t),Kr.subVectors(n,t),Oa.crossVectors(Fa,Kr);let o=this.direction.dot(Oa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);const c=a*this.direction.dot(Kr.crossVectors(Bn,Kr));if(c<0)return null;const l=a*this.direction.dot(Fa.cross(Bn));if(l<0||c+l>o)return null;const u=-a*Bn.dot(Oa);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(t,e,n,r,s,o,a,c,l,u,d,h,m,v,x,p){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,d,h,m,v,x,p)}set(t,e,n,r,s,o,a,c,l,u,d,h,m,v,x,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=v,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/bi.setFromMatrixColumn(t,0).length(),s=1/bi.setFromMatrixColumn(t,1).length(),o=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,m=o*d,v=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=m+v*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=v+m*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,m=c*d,v=l*u,x=l*d;e[0]=h+x*a,e[4]=v*a-m,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=m*a-v,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,m=c*d,v=l*u,x=l*d;e[0]=h-x*a,e[4]=-o*d,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,m=o*d,v=a*u,x=a*d;e[0]=c*u,e[4]=v*l-m,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=m*l-v,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,m=o*l,v=a*c,x=a*l;e[0]=c*u,e[4]=x-h*d,e[8]=v*d+m,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*d+v,e[10]=h-x*d}else if(t.order==="XZY"){const h=o*c,m=o*l,v=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=o*u,e[9]=m*d-v,e[2]=v*d-m,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,Qh)}lookAt(t,e,n){const r=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),zn.crossVectors(n,ze),zn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),zn.crossVectors(n,ze)),zn.normalize(),Zr.crossVectors(ze,zn),r[0]=zn.x,r[4]=Zr.x,r[8]=ze.x,r[1]=zn.y,r[5]=Zr.y,r[9]=ze.y,r[2]=zn.z,r[6]=Zr.z,r[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],m=n[13],v=n[2],x=n[6],p=n[10],f=n[14],_=n[3],g=n[7],M=n[11],T=n[15],E=r[0],S=r[4],U=r[8],y=r[12],b=r[1],D=r[5],N=r[9],z=r[13],P=r[2],F=r[6],O=r[10],q=r[14],Y=r[3],j=r[7],$=r[11],rt=r[15];return s[0]=o*E+a*b+c*P+l*Y,s[4]=o*S+a*D+c*F+l*j,s[8]=o*U+a*N+c*O+l*$,s[12]=o*y+a*z+c*q+l*rt,s[1]=u*E+d*b+h*P+m*Y,s[5]=u*S+d*D+h*F+m*j,s[9]=u*U+d*N+h*O+m*$,s[13]=u*y+d*z+h*q+m*rt,s[2]=v*E+x*b+p*P+f*Y,s[6]=v*S+x*D+p*F+f*j,s[10]=v*U+x*N+p*O+f*$,s[14]=v*y+x*z+p*q+f*rt,s[3]=_*E+g*b+M*P+T*Y,s[7]=_*S+g*D+M*F+T*j,s[11]=_*U+g*N+M*O+T*$,s[15]=_*y+g*z+M*q+T*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],m=t[14],v=t[3],x=t[7],p=t[11],f=t[15];return v*(+s*c*d-r*l*d-s*a*h+n*l*h+r*a*m-n*c*m)+x*(+e*c*m-e*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+p*(+e*l*d-e*a*m-s*o*d+n*o*m+s*a*u-n*l*u)+f*(-r*a*u-e*c*d+e*a*h+r*o*d-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],m=t[11],v=t[12],x=t[13],p=t[14],f=t[15],_=d*p*l-x*h*l+x*c*m-a*p*m-d*c*f+a*h*f,g=v*h*l-u*p*l-v*c*m+o*p*m+u*c*f-o*h*f,M=u*x*l-v*d*l+v*a*m-o*x*m-u*a*f+o*d*f,T=v*d*c-u*x*c-v*a*h+o*x*h+u*a*p-o*d*p,E=e*_+n*g+r*M+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return t[0]=_*S,t[1]=(x*h*s-d*p*s-x*r*m+n*p*m+d*r*f-n*h*f)*S,t[2]=(a*p*s-x*c*s+x*r*l-n*p*l-a*r*f+n*c*f)*S,t[3]=(d*c*s-a*h*s-d*r*l+n*h*l+a*r*m-n*c*m)*S,t[4]=g*S,t[5]=(u*p*s-v*h*s+v*r*m-e*p*m-u*r*f+e*h*f)*S,t[6]=(v*c*s-o*p*s-v*r*l+e*p*l+o*r*f-e*c*f)*S,t[7]=(o*h*s-u*c*s+u*r*l-e*h*l-o*r*m+e*c*m)*S,t[8]=M*S,t[9]=(v*d*s-u*x*s-v*n*m+e*x*m+u*n*f-e*d*f)*S,t[10]=(o*x*s-v*a*s+v*n*l-e*x*l-o*n*f+e*a*f)*S,t[11]=(u*a*s-o*d*s-u*n*l+e*d*l+o*n*m-e*a*m)*S,t[12]=T*S,t[13]=(u*x*r-v*d*r+v*n*h-e*x*h-u*n*p+e*d*p)*S,t[14]=(v*a*r-o*x*r-v*n*c+e*x*c+o*n*p-e*a*p)*S,t[15]=(o*d*r-u*a*r+u*n*c-e*d*c-o*n*h+e*a*h)*S,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,h=s*l,m=s*u,v=s*d,x=o*u,p=o*d,f=a*d,_=c*l,g=c*u,M=c*d,T=n.x,E=n.y,S=n.z;return r[0]=(1-(x+f))*T,r[1]=(m+M)*T,r[2]=(v-g)*T,r[3]=0,r[4]=(m-M)*E,r[5]=(1-(h+f))*E,r[6]=(p+_)*E,r[7]=0,r[8]=(v+g)*S,r[9]=(p-_)*S,r[10]=(1-(h+x))*S,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=bi.set(r[0],r[1],r[2]).length();const o=bi.set(r[4],r[5],r[6]).length(),a=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],on.copy(this);const l=1/s,u=1/o,d=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Ln){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),h=(n+r)/(n-r);let m,v;if(a===Ln)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===$s)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Ln){const c=this.elements,l=1/(e-t),u=1/(n-r),d=1/(o-s),h=(e+t)*l,m=(n+r)*u;let v,x;if(a===Ln)v=(o+s)*d,x=-2*d;else if(a===$s)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new C,on=new qt,Jh=new C(0,0,0),Qh=new C(1,1,1),zn=new C,Zr=new C,ze=new C,Qc=new qt,tl=new mi;class ca{constructor(t=0,e=0,n=0,r=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tl.setFromEuler(this),this.setFromQuaternion(tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let td=0;const el=new C,Ai=new mi,yn=new qt,Jr=new C,vr=new C,ed=new C,nd=new mi,nl=new C(1,0,0),il=new C(0,1,0),rl=new C(0,0,1),id={type:"added"},rd={type:"removed"};class de extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new C,e=new ca,n=new mi,r=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new Gt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(nl,t)}rotateY(t){return this.rotateOnAxis(il,t)}rotateZ(t){return this.rotateOnAxis(rl,t)}translateOnAxis(t,e){return el.copy(t).applyQuaternion(this.quaternion),this.position.add(el.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nl,t)}translateY(t){return this.translateOnAxis(il,t)}translateZ(t){return this.translateOnAxis(rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(vr,Jr,this.up):yn.lookAt(Jr,vr,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(yn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(id)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}de.DEFAULT_UP=new C(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new C,Sn=new C,Ba=new C,En=new C,wi=new C,Ri=new C,sl=new C,za=new C,Ha=new C,Va=new C;let Qr=!1;class Se{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),cn.subVectors(t,e),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){cn.subVectors(r,e),Sn.subVectors(n,e),Ba.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(Sn),c=cn.dot(Ba),l=Sn.dot(Sn),u=Sn.dot(Ba),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(l*c-a*u)*h,v=(o*u-a*c)*h;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(t,e,n,r,s,o,a,c){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(t,e,n,r,s,o,a,c)}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c)}static isFrontFacing(t,e,n,r){return cn.subVectors(n,e),Sn.subVectors(t,e),cn.cross(Sn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),cn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Se.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Se.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),Se.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return Se.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Se.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Se.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;wi.subVectors(r,n),Ri.subVectors(s,n),za.subVectors(t,n);const c=wi.dot(za),l=Ri.dot(za);if(c<=0&&l<=0)return e.copy(n);Ha.subVectors(t,r);const u=wi.dot(Ha),d=Ri.dot(Ha);if(u>=0&&d<=u)return e.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(wi,o);Va.subVectors(t,s);const m=wi.dot(Va),v=Ri.dot(Va);if(v>=0&&m<=v)return e.copy(s);const x=m*l-c*v;if(x<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(n).addScaledVector(Ri,a);const p=u*v-m*d;if(p<=0&&d-u>=0&&m-v>=0)return sl.subVectors(s,r),a=(d-u)/(d-u+(m-v)),e.copy(r).addScaledVector(sl,a);const f=1/(p+x+h);return o=x*f,a=h*f,e.copy(n).addScaledVector(wi,o).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function Ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=$t.workingColorSpace){if(t=kh(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ga(o,s,t+1/3),this.g=Ga(o,s,t),this.b=Ga(o,s,t-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(t,e=ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=Hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}copyLinearToSRGB(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return $t.fromWorkingColorSpace(Ae.copy(this),t),Math.round(we(Ae.r*255,0,255))*65536+Math.round(we(Ae.g*255,0,255))*256+Math.round(we(Ae.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,r=Ae.g,s=Ae.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=ye){$t.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,r=Ae.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(ts);const n=Ra(Hn.h,ts.h,e),r=Ra(Hn.s,ts.s,e),s=Ra(Hn.l,ts.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Rt;Rt.NAMES=Hu;let sd=0;class nn extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=ui,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=yo,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mo&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zr extends nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new C,es=new mt;class ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)es.fromBufferAttribute(this,e),es.applyMatrix3(t),this.setXY(e,es.x,es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ao&&(t.usage=this.usage),t}}class Vu extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gu extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ad=0;const Xe=new qt,ka=new de,Ci=new C,He=new ee,Mr=new ee,_e=new C;class ce extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fu(t)?Gu:Vu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ee);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];He.setFromBufferAttribute(s),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(He.min,Mr.min),He.expandByPoint(_e),_e.addVectors(He.max,Mr.max),He.expandByPoint(_e)):(He.expandByPoint(Mr.min),He.expandByPoint(Mr.max))}He.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)_e.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(_e));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)_e.fromBufferAttribute(a,l),c&&(Ci.fromBufferAttribute(t,l),_e.add(Ci)),r=Math.max(r,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<a;b++)l[b]=new C,u[b]=new C;const d=new C,h=new C,m=new C,v=new mt,x=new mt,p=new mt,f=new C,_=new C;function g(b,D,N){d.fromArray(r,b*3),h.fromArray(r,D*3),m.fromArray(r,N*3),v.fromArray(o,b*2),x.fromArray(o,D*2),p.fromArray(o,N*2),h.sub(d),m.sub(d),x.sub(v),p.sub(v);const z=1/(x.x*p.y-p.x*x.y);isFinite(z)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(z),_.copy(m).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar(z),l[b].add(f),l[D].add(f),l[N].add(f),u[b].add(_),u[D].add(_),u[N].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let b=0,D=M.length;b<D;++b){const N=M[b],z=N.start,P=N.count;for(let F=z,O=z+P;F<O;F+=3)g(n[F+0],n[F+1],n[F+2])}const T=new C,E=new C,S=new C,U=new C;function y(b){S.fromArray(s,b*3),U.copy(S);const D=l[b];T.copy(D),T.sub(S.multiplyScalar(S.dot(D))).normalize(),E.crossVectors(U,D);const z=E.dot(u[b])<0?-1:1;c[b*4]=T.x,c[b*4+1]=T.y,c[b*4+2]=T.z,c[b*4+3]=z}for(let b=0,D=M.length;b<D;++b){const N=M[b],z=N.start,P=N.count;for(let F=z,O=z+P;F<O;F+=3)y(n[F+0]),y(n[F+1]),y(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new C,s=new C,o=new C,a=new C,c=new C,l=new C,u=new C,d=new C;if(t)for(let h=0,m=t.count;h<m;h+=3){const v=t.getX(h+0),x=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let m=0,v=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*u;for(let f=0;f<u;f++)h[v++]=l[m++]}return new ve(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ce,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],m=t(h,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const m=l[d];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const al=new qt,ii=new fr,ns=new ur,ol=new C,Li=new C,Pi=new C,Di=new C,Wa=new C,is=new C,rs=new mt,ss=new mt,as=new mt,cl=new C,ll=new C,ul=new C,os=new C,cs=new C;class Ee extends de{constructor(t=new ce,e=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){is.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Wa.fromBufferAttribute(d,t),o?is.addScaledVector(Wa,u):is.addScaledVector(Wa.sub(e),u))}e.add(is)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(s),ii.copy(t.ray).recast(t.near),!(ns.containsPoint(ii.origin)===!1&&(ii.intersectSphere(ns,ol)===null||ii.origin.distanceToSquared(ol)>(t.far-t.near)**2))&&(al.copy(s).invert(),ii.copy(t.ray).applyMatrix4(al),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],f=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,T=g;M<T;M+=3){const E=a.getX(M),S=a.getX(M+1),U=a.getX(M+2);r=ls(this,f,t,n,l,u,d,E,S,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,f=x;p<f;p+=3){const _=a.getX(p),g=a.getX(p+1),M=a.getX(p+2);r=ls(this,o,t,n,l,u,d,_,g,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],f=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,T=g;M<T;M+=3){const E=M,S=M+1,U=M+2;r=ls(this,f,t,n,l,u,d,E,S,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=v,f=x;p<f;p+=3){const _=p,g=p+1,M=p+2;r=ls(this,o,t,n,l,u,d,_,g,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function od(i,t,e,n,r,s,o,a){let c;if(t.side===Pe?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===_n,a),c===null)return null;cs.copy(a),cs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(cs);return l<e.near||l>e.far?null:{distance:l,point:cs.clone(),object:i}}function ls(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,Li),i.getVertexPosition(c,Pi),i.getVertexPosition(l,Di);const u=od(i,t,e,n,Li,Pi,Di,os);if(u){r&&(rs.fromBufferAttribute(r,a),ss.fromBufferAttribute(r,c),as.fromBufferAttribute(r,l),u.uv=Se.getInterpolation(os,Li,Pi,Di,rs,ss,as,new mt)),s&&(rs.fromBufferAttribute(s,a),ss.fromBufferAttribute(s,c),as.fromBufferAttribute(s,l),u.uv1=Se.getInterpolation(os,Li,Pi,Di,rs,ss,as,new mt),u.uv2=u.uv1),o&&(cl.fromBufferAttribute(o,a),ll.fromBufferAttribute(o,c),ul.fromBufferAttribute(o,l),u.normal=Se.getInterpolation(os,Li,Pi,Di,cl,ll,ul,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new C,materialIndex:0};Se.getNormal(Li,Pi,Di,d.normal),u.face=d}return u}class Hr extends ce{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,m=0;v("z","y","x",-1,-1,n,e,t,o,s,0),v("z","y","x",1,-1,n,e,-t,o,s,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2));function v(x,p,f,_,g,M,T,E,S,U,y){const b=M/S,D=T/U,N=M/2,z=T/2,P=E/2,F=S+1,O=U+1;let q=0,Y=0;const j=new C;for(let $=0;$<O;$++){const rt=$*D-z;for(let st=0;st<F;st++){const X=st*b-N;j[x]=X*_,j[p]=rt*g,j[f]=P,l.push(j.x,j.y,j.z),j[x]=0,j[p]=0,j[f]=E>0?1:-1,u.push(j.x,j.y,j.z),d.push(st/S),d.push(1-$/U),q+=1}}for(let $=0;$<U;$++)for(let rt=0;rt<S;rt++){const st=h+rt+F*$,X=h+rt+F*($+1),K=h+(rt+1)+F*($+1),lt=h+(rt+1)+F*$;c.push(st,X,lt),c.push(X,K,lt),Y+=6}a.addGroup(m,Y,y),m+=Y,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=ar(i[e]);for(const r in n)t[r]=n[r]}return t}function cd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ku(i){return i.getRenderTarget()===null?i.outputColorSpace:$t.workingColorSpace}const ld={clone:ar,merge:Ce};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wu extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $e extends Wu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ii=1;class hd extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $e(Ui,Ii,t,e);r.layers=this.layers,this.add(r);const s=new $e(Ui,Ii,t,e);s.layers=this.layers,this.add(s);const o=new $e(Ui,Ii,t,e);o.layers=this.layers,this.add(o);const a=new $e(Ui,Ii,t,e);a.layers=this.layers,this.add(a);const c=new $e(Ui,Ii,t,e);c.layers=this.layers,this.add(c);const l=new $e(Ui,Ii,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,h,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Xu extends Oe{constructor(t,e,n,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dd extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===di?ye:Ze),this.texture=new Xu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hr(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Yn});s.uniforms.tEquirect.value=e;const o=new Ee(r,s),a=e.minFilter;return e.minFilter===Fr&&(e.minFilter=je),new hd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Xa=new C,pd=new C,md=new Gt;class mn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Xa.subVectors(n,e).cross(pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||md.getNormalMatrix(t),r=this.coplanarPoint(Xa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new ur,us=new C;class Jo{constructor(t=new mn,e=new mn,n=new mn,r=new mn,s=new mn,o=new mn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],m=r[8],v=r[9],x=r[10],p=r[11],f=r[12],_=r[13],g=r[14],M=r[15];if(n[0].setComponents(c-s,h-l,p-m,M-f).normalize(),n[1].setComponents(c+s,h+l,p+m,M+f).normalize(),n[2].setComponents(c+o,h+u,p+v,M+_).normalize(),n[3].setComponents(c-o,h-u,p-v,M-_).normalize(),n[4].setComponents(c-a,h-d,p-x,M-g).normalize(),e===Ln)n[5].setComponents(c+a,h+d,p+x,M+g).normalize();else if(e===$s)n[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(us.x=r.normal.x>0?t.max.x:t.min.x,us.y=r.normal.y>0?t.max.y:t.min.y,us.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qu(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function gd(i,t){const e=t.isWebGL2,n=new WeakMap;function r(l,u){const d=l.array,h=l.usage,m=d.byteLength,v=i.createBuffer();i.bindBuffer(u,v),i.bufferData(u,d,h),l.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,d){const h=u.array,m=u._updateRange,v=u.updateRanges;if(i.bindBuffer(d,l),m.count===-1&&v.length===0&&i.bufferSubData(d,0,h),v.length!==0){for(let x=0,p=v.length;x<p;x++){const f=v[x];e?i.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):i.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,r(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,u),d.version=l.version}}return{get:o,remove:a,update:c}}class Qo extends ce{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,d=t/a,h=e/c,m=[],v=[],x=[],p=[];for(let f=0;f<u;f++){const _=f*h-o;for(let g=0;g<l;g++){const M=g*d-s;v.push(M,-_,0),x.push(0,0,1),p.push(g/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<a;_++){const g=_+l*f,M=_+l*(f+1),T=_+1+l*(f+1),E=_+1+l*f;m.push(g,M,E),m.push(M,T,E)}this.setIndex(m),this.setAttribute("position",new Zt(v,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.width,t.height,t.widthSegments,t.heightSegments)}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
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
#endif`,Td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ld=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hd=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gd=`vec3 transformedNormal = objectNormal;
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
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$d=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
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
}`,sp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,gp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_p=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wp=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
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
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Im=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bm=`#define PHONG
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
}`,zm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Hm=`#define STANDARD
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
}`,Vm=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Gm=`#define TOON
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
}`,km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Ym=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,jm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,$m=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bt={alphahash_fragment:_d,alphahash_pars_fragment:xd,alphamap_fragment:vd,alphamap_pars_fragment:Md,alphatest_fragment:yd,alphatest_pars_fragment:Sd,aomap_fragment:Ed,aomap_pars_fragment:Td,batching_pars_vertex:bd,batching_vertex:Ad,begin_vertex:wd,beginnormal_vertex:Rd,bsdfs:Cd,iridescence_fragment:Ld,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Nd,color_fragment:Fd,color_pars_fragment:Od,color_pars_vertex:Bd,color_vertex:zd,common:Hd,cube_uv_reflection_fragment:Vd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:kd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Yd,colorspace_pars_fragment:jd,envmap_fragment:$d,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Zd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:up,envmap_vertex:Qd,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:rp,lightmap_fragment:sp,lightmap_pars_fragment:ap,lights_lambert_fragment:op,lights_lambert_pars_fragment:cp,lights_pars_begin:lp,lights_toon_fragment:fp,lights_toon_pars_fragment:hp,lights_phong_fragment:dp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:_p,lights_fragment_maps:xp,lights_fragment_end:vp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:Ep,map_fragment:Tp,map_pars_fragment:bp,map_particle_fragment:Ap,map_particle_pars_fragment:wp,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphcolor_vertex:Lp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Up,normal_fragment_begin:Ip,normal_fragment_maps:Np,normal_pars_fragment:Fp,normal_pars_vertex:Op,normal_vertex:Bp,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Vp,clearcoat_pars_fragment:Gp,iridescence_pars_fragment:kp,opaque_fragment:Wp,packing:Xp,premultiplied_alpha_fragment:qp,project_vertex:Yp,dithering_fragment:jp,dithering_pars_fragment:$p,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:rm,skinnormal_vertex:sm,specularmap_fragment:am,specularmap_pars_fragment:om,tonemapping_fragment:cm,tonemapping_pars_fragment:lm,transmission_fragment:um,transmission_pars_fragment:fm,uv_pars_fragment:hm,uv_pars_vertex:dm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:_m,backgroundCube_vert:xm,backgroundCube_frag:vm,cube_vert:Mm,cube_frag:ym,depth_vert:Sm,depth_frag:Em,distanceRGBA_vert:Tm,distanceRGBA_frag:bm,equirect_vert:Am,equirect_frag:wm,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Lm,meshbasic_frag:Pm,meshlambert_vert:Dm,meshlambert_frag:Um,meshmatcap_vert:Im,meshmatcap_frag:Nm,meshnormal_vert:Fm,meshnormal_frag:Om,meshphong_vert:Bm,meshphong_frag:zm,meshphysical_vert:Hm,meshphysical_frag:Vm,meshtoon_vert:Gm,meshtoon_frag:km,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:jm,sprite_frag:$m},at={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},gn={basic:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ce([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ce([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ce([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ce([at.points,at.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ce([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ce([at.common,at.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ce([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ce([at.sprite,at.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ce([at.common,at.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ce([at.lights,at.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};gn.physical={uniforms:Ce([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const fs={r:0,b:0,g:0};function Km(i,t,e,n,r,s,o){const a=new Rt(0);let c=s===!0?0:1,l,u,d=null,h=0,m=null;function v(p,f){let _=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?e:t).get(g)),g===null?x(a,c):g&&g.isColor&&(x(g,1),_=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===sa)?(u===void 0&&(u=new Ee(new Hr(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:ar(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=$t.getTransfer(g.colorSpace)!==Qt,(d!==g||h!==g.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Ee(new Qo(2,2),new gi({name:"BackgroundMaterial",uniforms:ar(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=$t.getTransfer(g.colorSpace)!==Qt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=g,h=g.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,f){p.getRGB(fs,ku(i)),n.buffers.color.setClear(fs.r,fs.g,fs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:v}}function Zm(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null);let l=c,u=!1;function d(P,F,O,q,Y){let j=!1;if(o){const $=x(q,O,F);l!==$&&(l=$,m(l.object)),j=f(P,q,O,Y),j&&_(P,q,O,Y)}else{const $=F.wireframe===!0;(l.geometry!==q.id||l.program!==O.id||l.wireframe!==$)&&(l.geometry=q.id,l.program=O.id,l.wireframe=$,j=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,U(P,F,O,q),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function v(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,F,O){const q=O.wireframe===!0;let Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let j=Y[F.id];j===void 0&&(j={},Y[F.id]=j);let $=j[q];return $===void 0&&($=p(h()),j[q]=$),$}function p(P){const F=[],O=[],q=[];for(let Y=0;Y<r;Y++)F[Y]=0,O[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:q,object:P,attributes:{},index:null}}function f(P,F,O,q){const Y=l.attributes,j=F.attributes;let $=0;const rt=O.getAttributes();for(const st in rt)if(rt[st].location>=0){const K=Y[st];let lt=j[st];if(lt===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),K===void 0||K.attribute!==lt||lt&&K.data!==lt.data)return!0;$++}return l.attributesNum!==$||l.index!==q}function _(P,F,O,q){const Y={},j=F.attributes;let $=0;const rt=O.getAttributes();for(const st in rt)if(rt[st].location>=0){let K=j[st];K===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const lt={};lt.attribute=K,K&&K.data&&(lt.data=K.data),Y[st]=lt,$++}l.attributes=Y,l.attributesNum=$,l.index=q}function g(){const P=l.newAttributes;for(let F=0,O=P.length;F<O;F++)P[F]=0}function M(P){T(P,0)}function T(P,F){const O=l.newAttributes,q=l.enabledAttributes,Y=l.attributeDivisors;O[P]=1,q[P]===0&&(i.enableVertexAttribArray(P),q[P]=1),Y[P]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),Y[P]=F)}function E(){const P=l.newAttributes,F=l.enabledAttributes;for(let O=0,q=F.length;O<q;O++)F[O]!==P[O]&&(i.disableVertexAttribArray(O),F[O]=0)}function S(P,F,O,q,Y,j,$){$===!0?i.vertexAttribIPointer(P,F,O,Y,j):i.vertexAttribPointer(P,F,O,q,Y,j)}function U(P,F,O,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const Y=q.attributes,j=O.getAttributes(),$=F.defaultAttributeValues;for(const rt in j){const st=j[rt];if(st.location>=0){let X=Y[rt];if(X===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){const K=X.normalized,lt=X.itemSize,vt=e.get(X);if(vt===void 0)continue;const _t=vt.buffer,Dt=vt.type,Ut=vt.bytesPerElement,bt=n.isWebGL2===!0&&(Dt===i.INT||Dt===i.UNSIGNED_INT||X.gpuType===wu);if(X.isInterleavedBufferAttribute){const kt=X.data,V=kt.stride,Me=X.offset;if(kt.isInstancedInterleavedBuffer){for(let St=0;St<st.locationSize;St++)T(st.location+St,kt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let St=0;St<st.locationSize;St++)M(st.location+St);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let St=0;St<st.locationSize;St++)S(st.location+St,lt/st.locationSize,Dt,K,V*Ut,(Me+lt/st.locationSize*St)*Ut,bt)}else{if(X.isInstancedBufferAttribute){for(let kt=0;kt<st.locationSize;kt++)T(st.location+kt,X.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let kt=0;kt<st.locationSize;kt++)M(st.location+kt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let kt=0;kt<st.locationSize;kt++)S(st.location+kt,lt/st.locationSize,Dt,K,lt*Ut,lt/st.locationSize*kt*Ut,bt)}}else if($!==void 0){const K=$[rt];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(st.location,K);break;case 3:i.vertexAttrib3fv(st.location,K);break;case 4:i.vertexAttrib4fv(st.location,K);break;default:i.vertexAttrib1fv(st.location,K)}}}}E()}function y(){N();for(const P in a){const F=a[P];for(const O in F){const q=F[O];for(const Y in q)v(q[Y].object),delete q[Y];delete F[O]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;const F=a[P.id];for(const O in F){const q=F[O];for(const Y in q)v(q[Y].object),delete q[Y];delete F[O]}delete a[P.id]}function D(P){for(const F in a){const O=a[F];if(O[P.id]===void 0)continue;const q=O[P.id];for(const Y in q)v(q[Y].object),delete q[Y];delete O[P.id]}}function N(){z(),u=!0,l!==c&&(l=c,m(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:N,resetDefaultState:z,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:M,disableUnusedAttributes:E}}function Jm(i,t,e,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,d){i.drawArrays(s,u,d),e.update(d,s,1)}function c(u,d,h){if(h===0)return;let m,v;if(r)m=i,v="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,u,d,h),e.update(d,s,h)}function l(u,d,h){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<h;v++)this.render(u[v],d[v]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x];e.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Qm(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,M=o||t.has("OES_texture_float"),T=g&&M,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:E}}function tg(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new mn,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||r;return r=h,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!r||v===null||v.length===0||s&&!p)s?u(null):l();else{const _=s?0:n,g=_*4;let M=f.clippingState||null;c.value=M,M=u(v,h,g,m);for(let T=0;T!==g;++T)M[T]=e[T];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=c.value,v!==!0||p===null){const f=m+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<f)&&(p=new Float32Array(f));for(let g=0,M=m;g!==x;++g,M+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function eg(i){let t=new WeakMap;function e(o,a){return a===So?o.mapping=ir:a===Eo&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===So||a===Eo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new dd(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Yu extends Wu{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ki=4,fl=[.125,.215,.35,.446,.526,.582],oi=20,qa=new Yu,hl=new Rt;let Ya=null,ja=0,$a=0;const si=(1+Math.sqrt(5))/2,Ni=1/si,dl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,si,Ni),new C(0,si,-Ni),new C(Ni,0,si),new C(-Ni,0,si),new C(si,Ni,0),new C(-si,Ni,0)];class pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ya=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya,ja,$a),t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Or,format:fn,colorSpace:In,depthBuffer:!1},r=ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ml(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ng(s)),this._blurMaterial=ig(s,t,e)}return r}_compileMaterial(t){const e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,n,r){const a=new $e(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(hl),u.toneMapping=jn,u.autoClear=!1;const m=new zr({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),v=new Ee(new Hr,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(hl),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):_===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const g=this._cubeSize;hs(r,_*g,f>2?g:0,g,g),u.setRenderTarget(r),x&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ir||t.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;hs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,qa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dl[(r-1)%dl.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ee(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*oi-1),x=s/v,p=isFinite(s)?1+Math.floor(u*x):oi;p>oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${oi}`);const f=[];let _=0;for(let S=0;S<oi;++S){const U=S/x,y=Math.exp(-U*U/2);f.push(y),S===0?_+=y:S<p&&(_+=2*y)}for(let S=0;S<f.length;S++)f[S]=f[S]/_;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-n;const M=this._sizeLods[r],T=3*M*(r>g-Ki?r-g+Ki:0),E=4*(this._cubeSize-M);hs(e,T,E,3*M,2*M),c.setRenderTarget(e),c.render(d,qa)}}function ng(i){const t=[],e=[],n=[];let r=i;const s=i-Ki+1+fl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Ki?c=fl[o-i+Ki-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,x=3,p=2,f=1,_=new Float32Array(x*v*m),g=new Float32Array(p*v*m),M=new Float32Array(f*v*m);for(let E=0;E<m;E++){const S=E%3*2/3-1,U=E>2?0:-1,y=[S,U,0,S+2/3,U,0,S+2/3,U+1,0,S,U,0,S+2/3,U+1,0,S,U+1,0];_.set(y,x*v*E),g.set(h,p*v*E);const b=[E,E,E,E,E,E];M.set(b,f*v*E)}const T=new ce;T.setAttribute("position",new ve(_,x)),T.setAttribute("uv",new ve(g,p)),T.setAttribute("faceIndex",new ve(M,f)),t.push(T),r>Ki&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ml(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function ig(i,t,e){const n=new Float32Array(oi),r=new C(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function gl(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function _l(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}function rg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===So||c===Eo,u=c===ir||c===rr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new pl(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){e===null&&(e=new pl(i));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function sg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ag(i,t,e,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let p=0,f=x.length;p<f;p++)t.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const v in h)t.update(h[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let p=0,f=x.length;p<f;p++)t.update(x[p],i.ARRAY_BUFFER)}}function l(d){const h=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let g=0,M=_.length;g<M;g+=3){const T=_[g+0],E=_[g+1],S=_[g+2];h.push(T,E,E,S,S,T)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const T=g+0,E=g+1,S=g+2;h.push(T,E,E,S,S,T)}}else return;const p=new(Fu(h)?Gu:Vu)(h,1);p.version=x;const f=s.get(d);f&&t.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function og(i,t,e,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,v){i.drawElements(s,v,a,m*c),e.update(v,s,1)}function d(m,v,x){if(x===0)return;let p,f;if(r)p=i,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,v,a,m*c,x),e.update(v,s,x)}function h(m,v,x){if(x===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<x;f++)this.render(m[f]/c,v[f]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,x);let f=0;for(let _=0;_<x;_++)f+=v[_];e.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function cg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function lg(i,t){return i[0]-t[0]}function ug(i,t){return Math.abs(t[1])-Math.abs(i[1])}function fg(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new xe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){const h=l.morphTargetInfluences;if(t.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==x){let F=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const g=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let y=0;g===!0&&(y=1),M===!0&&(y=2),T===!0&&(y=3);let b=u.attributes.position.count*y,D=1;b>t.maxTextureSize&&(D=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const N=new Float32Array(b*D*4*x),z=new zu(N,b,D,x);z.type=Wn,z.needsUpdate=!0;const P=y*4;for(let O=0;O<x;O++){const q=E[O],Y=S[O],j=U[O],$=b*D*4*O;for(let rt=0;rt<q.count;rt++){const st=rt*P;g===!0&&(o.fromBufferAttribute(q,rt),N[$+st+0]=o.x,N[$+st+1]=o.y,N[$+st+2]=o.z,N[$+st+3]=0),M===!0&&(o.fromBufferAttribute(Y,rt),N[$+st+4]=o.x,N[$+st+5]=o.y,N[$+st+6]=o.z,N[$+st+7]=0),T===!0&&(o.fromBufferAttribute(j,rt),N[$+st+8]=o.x,N[$+st+9]=o.y,N[$+st+10]=o.z,N[$+st+11]=j.itemSize===4?o.w:1)}}p={count:x,texture:z,size:new mt(b,D)},s.set(u,p),u.addEventListener("dispose",F)}let f=0;for(let g=0;g<h.length;g++)f+=h[g];const _=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",_),d.getUniforms().setValue(i,"morphTargetInfluences",h),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=h===void 0?0:h.length;let x=n[u.id];if(x===void 0||x.length!==v){x=[];for(let M=0;M<v;M++)x[M]=[M,0];n[u.id]=x}for(let M=0;M<v;M++){const T=x[M];T[0]=M,T[1]=h[M]}x.sort(ug);for(let M=0;M<8;M++)M<v&&x[M][1]?(a[M][0]=x[M][0],a[M][1]=x[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(lg);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const T=a[M],E=T[0],S=T[1];E!==Number.MAX_SAFE_INTEGER&&S?(p&&u.getAttribute("morphTarget"+M)!==p[E]&&u.setAttribute("morphTarget"+M,p[E]),f&&u.getAttribute("morphNormal"+M)!==f[E]&&u.setAttribute("morphNormal"+M,f[E]),r[M]=S,_+=S):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),f&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const g=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(i,"morphTargetBaseInfluence",g),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function hg(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class ju extends Oe{constructor(t,e,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:hi,u!==hi&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hi&&(n=kn),n===void 0&&u===sr&&(n=fi),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=c!==void 0?c:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $u=new Oe,Ku=new ju(1,1);Ku.compareFunction=Nu;const Zu=new zu,Ju=new Kh,Qu=new Xu,xl=[],vl=[],Ml=new Float32Array(16),yl=new Float32Array(9),Sl=new Float32Array(4);function hr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=xl[r];if(s===void 0&&(s=new Float32Array(r),xl[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function la(i,t){let e=vl[t];e===void 0&&(e=new Int32Array(t),vl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Sl.set(n),i.uniformMatrix2fv(this.addr,!1,Sl),me(e,n)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;yl.set(n),i.uniformMatrix3fv(this.addr,!1,yl),me(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Ml.set(n),i.uniformMatrix4fv(this.addr,!1,Ml),me(e,n)}}function Mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Rg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Ku:$u;e.setTexture2D(t||s,r)}function Cg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ju,r)}function Lg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Qu,r)}function Pg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Zu,r)}function Dg(i){switch(i){case 5126:return dg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return xg;case 35676:return vg;case 5124:case 35670:return Mg;case 35667:case 35671:return yg;case 35668:case 35672:return Sg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return bg;case 36295:return Ag;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Ug(i,t){i.uniform1fv(this.addr,t)}function Ig(i,t){const e=hr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){const e=hr(t,this.size,3);i.uniform3fv(this.addr,e)}function Fg(i,t){const e=hr(t,this.size,4);i.uniform4fv(this.addr,e)}function Og(i,t){const e=hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bg(i,t){const e=hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zg(i,t){const e=hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hg(i,t){i.uniform1iv(this.addr,t)}function Vg(i,t){i.uniform2iv(this.addr,t)}function Gg(i,t){i.uniform3iv(this.addr,t)}function kg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function qg(i,t){i.uniform3uiv(this.addr,t)}function Yg(i,t){i.uniform4uiv(this.addr,t)}function jg(i,t,e){const n=this.cache,r=t.length,s=la(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||$u,s[o])}function $g(i,t,e){const n=this.cache,r=t.length,s=la(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ju,s[o])}function Kg(i,t,e){const n=this.cache,r=t.length,s=la(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Qu,s[o])}function Zg(i,t,e){const n=this.cache,r=t.length,s=la(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Zu,s[o])}function Jg(i){switch(i){case 5126:return Ug;case 35664:return Ig;case 35665:return Ng;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return Hg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return kg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Zg}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}}class t_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jg(e.type)}}class e_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function El(i,t){i.seq.push(t),i.map[t.id]=t}function n_(i,t,e){const n=i.name,r=n.length;for(Ka.lastIndex=0;;){const s=Ka.exec(n),o=Ka.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){El(e,l===void 0?new Qg(a,i,t):new t_(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new e_(a),El(e,d)),e=d}}}class zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);n_(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Tl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i_=37297;let r_=0;function s_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function a_(i){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(i);let n;switch(t===e?n="":t===js&&e===Ys?n="LinearDisplayP3ToLinearSRGB":t===Ys&&e===js&&(n="LinearSRGBToLinearDisplayP3"),i){case In:case oa:return[n,"LinearTransferOETF"];case ye:case Ko:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+s_(i.getShaderSource(t),o)}else return r}function o_(i,t){const e=a_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function c_(i,t){let e;switch(t){case xh:e="Linear";break;case vh:e="Reinhard";break;case Mh:e="OptimizedCineon";break;case yh:e="ACESFilmic";break;case Eh:e="AgX";break;case Sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function l_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function u_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zi).join(`
`)}function f_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zi(i){return i!==""}function Al(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(i){return i.replace(d_,m_)}const p_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function m_(i,t){let e=Bt[t];if(e===void 0){const n=p_.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Lo(e)}const g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(i){return i.replace(g_,__)}function __(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cl(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function x_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function v_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ir:case rr:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function y_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ra:t="ENVMAP_BLENDING_MULTIPLY";break;case gh:t="ENVMAP_BLENDING_MIX";break;case _h:t="ENVMAP_BLENDING_ADD";break}return t}function S_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function E_(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=x_(e),l=v_(e),u=M_(e),d=y_(e),h=S_(e),m=e.isWebGL2?"":l_(e),v=u_(e),x=f_(s),p=r.createProgram();let f,_,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Zi).join(`
`),f.length>0&&(f+=`
`),_=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Zi).join(`
`),_.length>0&&(_+=`
`)):(f=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),_=[m,Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==jn?c_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,o_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zi).join(`
`)),o=Lo(o),o=Al(o,e),o=wl(o,e),a=Lo(a),a=Al(a,e),a=wl(a,e),o=Rl(o),a=Rl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=g+f+o,T=g+_+a,E=Tl(r,r.VERTEX_SHADER,M),S=Tl(r,r.FRAGMENT_SHADER,T);r.attachShader(p,E),r.attachShader(p,S),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(N){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(E).trim(),F=r.getShaderInfoLog(S).trim();let O=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,E,S);else{const Y=bl(r,E,"vertex"),j=bl(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+Y+`
`+j)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(P===""||F==="")&&(q=!1);q&&(N.diagnostics={runnable:O,programLog:z,vertexShader:{log:P,prefix:f},fragmentShader:{log:F,prefix:_}})}r.deleteShader(E),r.deleteShader(S),y=new zs(r,p),b=h_(r,p)}let y;this.getUniforms=function(){return y===void 0&&U(this),y};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(p,i_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=r_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=S,this}let T_=0;class b_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new A_(t),e.set(t,n)),n}}class A_{constructor(t){this.id=T_++,this.code=t,this.usedTimes=0}}function w_(i,t,e,n,r,s,o){const a=new Zo,c=new b_,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function p(y,b,D,N,z){const P=N.fog,F=z.geometry,O=y.isMeshStandardMaterial?N.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||O),Y=q&&q.mapping===sa?q.image.height:null,j=v[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=$!==void 0?$.length:0;let st=0;F.morphAttributes.position!==void 0&&(st=1),F.morphAttributes.normal!==void 0&&(st=2),F.morphAttributes.color!==void 0&&(st=3);let X,K,lt,vt;if(j){const ae=gn[j];X=ae.vertexShader,K=ae.fragmentShader}else X=y.vertexShader,K=y.fragmentShader,c.update(y),lt=c.getVertexShaderID(y),vt=c.getFragmentShaderID(y);const _t=i.getRenderTarget(),Dt=z.isInstancedMesh===!0,Ut=z.isBatchedMesh===!0,bt=!!y.map,kt=!!y.matcap,V=!!q,Me=!!y.aoMap,St=!!y.lightMap,Ct=!!y.bumpMap,pt=!!y.normalMap,Jt=!!y.displacementMap,Nt=!!y.emissiveMap,R=!!y.metalnessMap,A=!!y.roughnessMap,H=y.anisotropy>0,tt=y.clearcoat>0,J=y.iridescence>0,et=y.sheen>0,gt=y.transmission>0,ct=H&&!!y.anisotropyMap,dt=tt&&!!y.clearcoatMap,Tt=tt&&!!y.clearcoatNormalMap,Ft=tt&&!!y.clearcoatRoughnessMap,Z=J&&!!y.iridescenceMap,jt=J&&!!y.iridescenceThicknessMap,zt=et&&!!y.sheenColorMap,Lt=et&&!!y.sheenRoughnessMap,yt=!!y.specularMap,ut=!!y.specularColorMap,L=!!y.specularIntensityMap,nt=gt&&!!y.transmissionMap,xt=gt&&!!y.thicknessMap,ht=!!y.gradientMap,Q=!!y.alphaMap,I=y.alphaTest>0,it=!!y.alphaHash,ot=!!y.extensions,At=!!F.attributes.uv1,Et=!!F.attributes.uv2,Wt=!!F.attributes.uv3;let Xt=jn;return y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Xt=i.toneMapping),{isWebGL2:u,shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:K,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ut,instancing:Dt,instancingColor:Dt&&z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:In,map:bt,matcap:kt,envMap:V,envMapMode:V&&q.mapping,envMapCubeUVHeight:Y,aoMap:Me,lightMap:St,bumpMap:Ct,normalMap:pt,displacementMap:h&&Jt,emissiveMap:Nt,normalMapObjectSpace:pt&&y.normalMapType===Nh,normalMapTangentSpace:pt&&y.normalMapType===aa,metalnessMap:R,roughnessMap:A,anisotropy:H,anisotropyMap:ct,clearcoat:tt,clearcoatMap:dt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ft,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:jt,sheen:et,sheenColorMap:zt,sheenRoughnessMap:Lt,specularMap:yt,specularColorMap:ut,specularIntensityMap:L,transmission:gt,transmissionMap:nt,thicknessMap:xt,gradientMap:ht,opaque:y.transparent===!1&&y.blending===ui,alphaMap:Q,alphaTest:I,alphaHash:it,combine:y.combine,mapUv:bt&&x(y.map.channel),aoMapUv:Me&&x(y.aoMap.channel),lightMapUv:St&&x(y.lightMap.channel),bumpMapUv:Ct&&x(y.bumpMap.channel),normalMapUv:pt&&x(y.normalMap.channel),displacementMapUv:Jt&&x(y.displacementMap.channel),emissiveMapUv:Nt&&x(y.emissiveMap.channel),metalnessMapUv:R&&x(y.metalnessMap.channel),roughnessMapUv:A&&x(y.roughnessMap.channel),anisotropyMapUv:ct&&x(y.anisotropyMap.channel),clearcoatMapUv:dt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&x(y.sheenRoughnessMap.channel),specularMapUv:yt&&x(y.specularMap.channel),specularColorMapUv:ut&&x(y.specularColorMap.channel),specularIntensityMapUv:L&&x(y.specularIntensityMap.channel),transmissionMapUv:nt&&x(y.transmissionMap.channel),thicknessMapUv:xt&&x(y.thicknessMap.channel),alphaMapUv:Q&&x(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pt||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:Et,vertexUv3s:Wt,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(bt||Q),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:st,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ke,flipSided:y.side===Pe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ot&&y.extensions.derivatives===!0,extensionFragDepth:ot&&y.extensions.fragDepth===!0,extensionDrawBuffers:ot&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ot&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)b.push(D),b.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(_(b,y),g(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function _(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function g(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function M(y){const b=v[y.type];let D;if(b){const N=gn[b];D=ld.clone(N.uniforms)}else D=y.uniforms;return D}function T(y,b){let D;for(let N=0,z=l.length;N<z;N++){const P=l[N];if(P.cacheKey===b){D=P,++D.usedTimes;break}}return D===void 0&&(D=new E_(i,b,y,s),l.push(D)),D}function E(y){if(--y.usedTimes===0){const b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),y.destroy()}}function S(y){c.remove(y)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:T,releaseProgram:E,releaseShaderCache:S,programs:l,dispose:U}}function R_(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function C_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ll(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,h,m,v,x,p){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},i[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=x,f.group=p),t++,f}function a(d,h,m,v,x,p){const f=o(d,h,m,v,x,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):e.push(f)}function c(d,h,m,v,x,p){const f=o(d,h,m,v,x,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function l(d,h){e.length>1&&e.sort(d||C_),n.length>1&&n.sort(h||Ll),r.length>1&&r.sort(h||Ll)}function u(){for(let d=t,h=i.length;d<h;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function L_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Pl,i.set(n,[o])):r>=s.length?(o=new Pl,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function P_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Rt};break;case"SpotLight":e={position:new C,direction:new C,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function D_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let U_=0;function I_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N_(i,t){const e=new P_,n=D_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new C);const s=new C,o=new qt,a=new qt;function c(u,d){let h=0,m=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,p=0,f=0,_=0,g=0,M=0,T=0,E=0,S=0,U=0,y=0;u.sort(I_);const b=d===!0?Math.PI:1;for(let N=0,z=u.length;N<z;N++){const P=u[N],F=P.color,O=P.intensity,q=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*O*b,m+=F.g*O*b,v+=F.b*O*b;else if(P.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(P.sh.coefficients[j],O);y++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const $=P.shadow,rt=n.get(P);rt.shadowBias=$.bias,rt.shadowNormalBias=$.normalBias,rt.shadowRadius=$.radius,rt.shadowMapSize=$.mapSize,r.directionalShadow[x]=rt,r.directionalShadowMap[x]=Y,r.directionalShadowMatrix[x]=P.shadow.matrix,M++}r.directional[x]=j,x++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(F).multiplyScalar(O*b),j.distance=q,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,r.spot[f]=j;const $=P.shadow;if(P.map&&(r.spotLightMap[S]=P.map,S++,$.updateMatrices(P),P.castShadow&&U++),r.spotLightMatrix[f]=$.matrix,P.castShadow){const rt=n.get(P);rt.shadowBias=$.bias,rt.shadowNormalBias=$.normalBias,rt.shadowRadius=$.radius,rt.shadowMapSize=$.mapSize,r.spotShadow[f]=rt,r.spotShadowMap[f]=Y,E++}f++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(F).multiplyScalar(O),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),r.rectArea[_]=j,_++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*b),j.distance=P.distance,j.decay=P.decay,P.castShadow){const $=P.shadow,rt=n.get(P);rt.shadowBias=$.bias,rt.shadowNormalBias=$.normalBias,rt.shadowRadius=$.radius,rt.shadowMapSize=$.mapSize,rt.shadowCameraNear=$.camera.near,rt.shadowCameraFar=$.camera.far,r.pointShadow[p]=rt,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=P.shadow.matrix,T++}r.point[p]=j,p++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(O*b),j.groundColor.copy(P.groundColor).multiplyScalar(O*b),r.hemi[g]=j,g++}}_>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=at.LTC_FLOAT_1,r.rectAreaLTC2=at.LTC_FLOAT_2):(r.rectAreaLTC1=at.LTC_HALF_1,r.rectAreaLTC2=at.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=at.LTC_FLOAT_1,r.rectAreaLTC2=at.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=at.LTC_HALF_1,r.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const D=r.hash;(D.directionalLength!==x||D.pointLength!==p||D.spotLength!==f||D.rectAreaLength!==_||D.hemiLength!==g||D.numDirectionalShadows!==M||D.numPointShadows!==T||D.numSpotShadows!==E||D.numSpotMaps!==S||D.numLightProbes!==y)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=E+S-U,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=y,D.directionalLength=x,D.pointLength=p,D.spotLength=f,D.rectAreaLength=_,D.hemiLength=g,D.numDirectionalShadows=M,D.numPointShadows=T,D.numSpotShadows=E,D.numSpotMaps=S,D.numLightProbes=y,r.version=U_++)}function l(u,d){let h=0,m=0,v=0,x=0,p=0;const f=d.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const M=u[_];if(M.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),h++}else if(M.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),v++}else if(M.isRectAreaLight){const T=r.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:r}}function Dl(i,t){const e=new N_(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function F_(i,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new Dl(i,t),e.set(s,[c])):o>=a.length?(c=new Dl(i,t),a.push(c)):c=a[o],c}function r(){e=new WeakMap}return{get:n,dispose:r}}class O_ extends nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class B_ extends nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function V_(i,t,e){let n=new Jo;const r=new mt,s=new mt,o=new xe,a=new O_({depthPacking:Ih}),c=new B_,l={},u=e.maxTextureSize,d={[_n]:Pe,[Pe]:_n,[Ke]:Ke},h=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:z_,fragmentShader:H_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new ce;v.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ee(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let f=this.type;this.render=function(E,S,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Yn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=f!==bn&&this.type===bn,P=f===bn&&this.type!==bn;for(let F=0,O=E.length;F<O;F++){const q=E[F],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const j=Y.getFrameExtents();if(r.multiply(j),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,Y.mapSize.y=s.y)),Y.map===null||z===!0||P===!0){const rt=this.type!==bn?{minFilter:Le,magFilter:Le}:{};Y.map!==null&&Y.map.dispose(),Y.map=new pi(r.x,r.y,rt),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const $=Y.getViewportCount();for(let rt=0;rt<$;rt++){const st=Y.getViewport(rt);o.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),N.viewport(o),Y.updateMatrices(q,rt),n=Y.getFrustum(),M(S,U,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===bn&&_(Y,U),Y.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(y,b,D)};function _(E,S){const U=t.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pi(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,U,h,x,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,U,m,x,null)}function g(E,S,U,y){let b=null;const D=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)b=D;else if(b=U.isPointLight===!0?c:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=b.uuid,z=S.uuid;let P=l[N];P===void 0&&(P={},l[N]=P);let F=P[z];F===void 0&&(F=b.clone(),P[z]=F,S.addEventListener("dispose",T)),b=F}if(b.visible=S.visible,b.wireframe=S.wireframe,y===bn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:d[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=i.properties.get(b);N.light=U}return b}function M(E,S,U,y,b){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===bn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const z=t.update(E),P=E.material;if(Array.isArray(P)){const F=z.groups;for(let O=0,q=F.length;O<q;O++){const Y=F[O],j=P[Y.materialIndex];if(j&&j.visible){const $=g(E,j,y,b);E.onBeforeShadow(i,E,S,U,z,$,Y),i.renderBufferDirect(U,null,z,$,E,Y),E.onAfterShadow(i,E,S,U,z,$,Y)}}}else if(P.visible){const F=g(E,P,y,b);E.onBeforeShadow(i,E,S,U,z,F,null),i.renderBufferDirect(U,null,z,F,E,null),E.onAfterShadow(i,E,S,U,z,F,null)}}const N=E.children;for(let z=0,P=N.length;z<P;z++)M(N[z],S,U,y,b)}function T(E){E.target.removeEventListener("dispose",T);for(const U in l){const y=l[U],b=E.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function G_(i,t,e){const n=e.isWebGL2;function r(){let I=!1;const it=new xe;let ot=null;const At=new xe(0,0,0,0);return{setMask:function(Et){ot!==Et&&!I&&(i.colorMask(Et,Et,Et,Et),ot=Et)},setLocked:function(Et){I=Et},setClear:function(Et,Wt,Xt,ie,ae){ae===!0&&(Et*=ie,Wt*=ie,Xt*=ie),it.set(Et,Wt,Xt,ie),At.equals(it)===!1&&(i.clearColor(Et,Wt,Xt,ie),At.copy(it))},reset:function(){I=!1,ot=null,At.set(-1,0,0,0)}}}function s(){let I=!1,it=null,ot=null,At=null;return{setTest:function(Et){Et?Ut(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Et){it!==Et&&!I&&(i.depthMask(Et),it=Et)},setFunc:function(Et){if(ot!==Et){switch(Et){case lh:i.depthFunc(i.NEVER);break;case uh:i.depthFunc(i.ALWAYS);break;case fh:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case hh:i.depthFunc(i.EQUAL);break;case dh:i.depthFunc(i.GEQUAL);break;case ph:i.depthFunc(i.GREATER);break;case mh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=Et}},setLocked:function(Et){I=Et},setClear:function(Et){At!==Et&&(i.clearDepth(Et),At=Et)},reset:function(){I=!1,it=null,ot=null,At=null}}}function o(){let I=!1,it=null,ot=null,At=null,Et=null,Wt=null,Xt=null,ie=null,ae=null;return{setTest:function(Yt){I||(Yt?Ut(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Yt){it!==Yt&&!I&&(i.stencilMask(Yt),it=Yt)},setFunc:function(Yt,le,pn){(ot!==Yt||At!==le||Et!==pn)&&(i.stencilFunc(Yt,le,pn),ot=Yt,At=le,Et=pn)},setOp:function(Yt,le,pn){(Wt!==Yt||Xt!==le||ie!==pn)&&(i.stencilOp(Yt,le,pn),Wt=Yt,Xt=le,ie=pn)},setLocked:function(Yt){I=Yt},setClear:function(Yt){ae!==Yt&&(i.clearStencil(Yt),ae=Yt)},reset:function(){I=!1,it=null,ot=null,At=null,Et=null,Wt=null,Xt=null,ie=null,ae=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap;let h={},m={},v=new WeakMap,x=[],p=null,f=!1,_=null,g=null,M=null,T=null,E=null,S=null,U=null,y=new Rt(0,0,0),b=0,D=!1,N=null,z=null,P=null,F=null,O=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=j>=2);let rt=null,st={};const X=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),lt=new xe().fromArray(X),vt=new xe().fromArray(K);function _t(I,it,ot,At){const Et=new Uint8Array(4),Wt=i.createTexture();i.bindTexture(I,Wt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<ot;Xt++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(it,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(it+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Wt}const Dt={};Dt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),Dt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Dt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Dt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ut(i.DEPTH_TEST),c.setFunc(Xs),Nt(!1),R(pc),Ut(i.CULL_FACE),pt(Yn);function Ut(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function bt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function kt(I,it){return m[I]!==it?(i.bindFramebuffer(I,it),m[I]=it,n&&(I===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=it),I===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=it)),!0):!1}function V(I,it){let ot=x,At=!1;if(I)if(ot=v.get(it),ot===void 0&&(ot=[],v.set(it,ot)),I.isWebGLMultipleRenderTargets){const Et=I.texture;if(ot.length!==Et.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let Wt=0,Xt=Et.length;Wt<Xt;Wt++)ot[Wt]=i.COLOR_ATTACHMENT0+Wt;ot.length=Et.length,At=!0}}else ot[0]!==i.COLOR_ATTACHMENT0&&(ot[0]=i.COLOR_ATTACHMENT0,At=!0);else ot[0]!==i.BACK&&(ot[0]=i.BACK,At=!0);At&&(e.isWebGL2?i.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function Me(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const St={[ai]:i.FUNC_ADD,[jf]:i.FUNC_SUBTRACT,[$f]:i.FUNC_REVERSE_SUBTRACT};if(n)St[xc]=i.MIN,St[vc]=i.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(St[xc]=I.MIN_EXT,St[vc]=I.MAX_EXT)}const Ct={[Kf]:i.ZERO,[Zf]:i.ONE,[Jf]:i.SRC_COLOR,[Mo]:i.SRC_ALPHA,[rh]:i.SRC_ALPHA_SATURATE,[nh]:i.DST_COLOR,[th]:i.DST_ALPHA,[Qf]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[ih]:i.ONE_MINUS_DST_COLOR,[eh]:i.ONE_MINUS_DST_ALPHA,[sh]:i.CONSTANT_COLOR,[ah]:i.ONE_MINUS_CONSTANT_COLOR,[oh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(I,it,ot,At,Et,Wt,Xt,ie,ae,Yt){if(I===Yn){f===!0&&(bt(i.BLEND),f=!1);return}if(f===!1&&(Ut(i.BLEND),f=!0),I!==Yf){if(I!==_||Yt!==D){if((g!==ai||E!==ai)&&(i.blendEquation(i.FUNC_ADD),g=ai,E=ai),Yt)switch(I){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,T=null,S=null,U=null,y.set(0,0,0),b=0,_=I,D=Yt}return}Et=Et||it,Wt=Wt||ot,Xt=Xt||At,(it!==g||Et!==E)&&(i.blendEquationSeparate(St[it],St[Et]),g=it,E=Et),(ot!==M||At!==T||Wt!==S||Xt!==U)&&(i.blendFuncSeparate(Ct[ot],Ct[At],Ct[Wt],Ct[Xt]),M=ot,T=At,S=Wt,U=Xt),(ie.equals(y)===!1||ae!==b)&&(i.blendColor(ie.r,ie.g,ie.b,ae),y.copy(ie),b=ae),_=I,D=!1}function Jt(I,it){I.side===Ke?bt(i.CULL_FACE):Ut(i.CULL_FACE);let ot=I.side===Pe;it&&(ot=!ot),Nt(ot),I.blending===ui&&I.transparent===!1?pt(Yn):pt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const At=I.stencilWrite;l.setTest(At),At&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),H(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ut(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(I){N!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),N=I)}function R(I){I!==Wf?(Ut(i.CULL_FACE),I!==z&&(I===pc?i.cullFace(i.BACK):I===Xf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),z=I}function A(I){I!==P&&(Y&&i.lineWidth(I),P=I)}function H(I,it,ot){I?(Ut(i.POLYGON_OFFSET_FILL),(F!==it||O!==ot)&&(i.polygonOffset(it,ot),F=it,O=ot)):bt(i.POLYGON_OFFSET_FILL)}function tt(I){I?Ut(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function J(I){I===void 0&&(I=i.TEXTURE0+q-1),rt!==I&&(i.activeTexture(I),rt=I)}function et(I,it,ot){ot===void 0&&(rt===null?ot=i.TEXTURE0+q-1:ot=rt);let At=st[ot];At===void 0&&(At={type:void 0,texture:void 0},st[ot]=At),(At.type!==I||At.texture!==it)&&(rt!==ot&&(i.activeTexture(ot),rt=ot),i.bindTexture(I,it||Dt[I]),At.type=I,At.texture=it)}function gt(){const I=st[rt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(I){lt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),lt.copy(I))}function nt(I){vt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),vt.copy(I))}function xt(I,it){let ot=d.get(it);ot===void 0&&(ot=new WeakMap,d.set(it,ot));let At=ot.get(I);At===void 0&&(At=i.getUniformBlockIndex(it,I.name),ot.set(I,At))}function ht(I,it){const At=d.get(it).get(I);u.get(it)!==At&&(i.uniformBlockBinding(it,At,I.__bindingPointIndex),u.set(it,At))}function Q(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,st={},m={},v=new WeakMap,x=[],p=null,f=!1,_=null,g=null,M=null,T=null,E=null,S=null,U=null,y=new Rt(0,0,0),b=0,D=!1,N=null,z=null,P=null,F=null,O=null,lt.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ut,disable:bt,bindFramebuffer:kt,drawBuffers:V,useProgram:Me,setBlending:pt,setMaterial:Jt,setFlipSided:Nt,setCullFace:R,setLineWidth:A,setPolygonOffset:H,setScissorTest:tt,activeTexture:J,bindTexture:et,unbindTexture:gt,compressedTexImage2D:ct,compressedTexImage3D:dt,texImage2D:yt,texImage3D:ut,updateUBOMapping:xt,uniformBlockBinding:ht,texStorage2D:zt,texStorage3D:Lt,texSubImage2D:Tt,texSubImage3D:Ft,compressedTexSubImage2D:Z,compressedTexSubImage3D:jt,scissor:L,viewport:nt,reset:Q}}function k_(i,t,e,n,r,s,o){const a=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,A){return m?new OffscreenCanvas(R,A):Ks("canvas")}function x(R,A,H,tt){let J=1;if((R.width>tt||R.height>tt)&&(J=tt/Math.max(R.width,R.height)),J<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const et=A?Co:Math.floor,gt=et(J*R.width),ct=et(J*R.height);d===void 0&&(d=v(gt,ct));const dt=H?v(gt,ct):d;return dt.width=gt,dt.height=ct,dt.getContext("2d").drawImage(R,0,0,gt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+gt+"x"+ct+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return jc(R.width)&&jc(R.height)}function f(R){return a?!1:R.wrapS!==un||R.wrapT!==un||R.minFilter!==Le&&R.minFilter!==je}function _(R,A){return R.generateMipmaps&&A&&R.minFilter!==Le&&R.minFilter!==je}function g(R){i.generateMipmap(R)}function M(R,A,H,tt,J=!1){if(a===!1)return A;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=A;if(A===i.RED&&(H===i.FLOAT&&(et=i.R32F),H===i.HALF_FLOAT&&(et=i.R16F),H===i.UNSIGNED_BYTE&&(et=i.R8)),A===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.R8UI),H===i.UNSIGNED_SHORT&&(et=i.R16UI),H===i.UNSIGNED_INT&&(et=i.R32UI),H===i.BYTE&&(et=i.R8I),H===i.SHORT&&(et=i.R16I),H===i.INT&&(et=i.R32I)),A===i.RG&&(H===i.FLOAT&&(et=i.RG32F),H===i.HALF_FLOAT&&(et=i.RG16F),H===i.UNSIGNED_BYTE&&(et=i.RG8)),A===i.RGBA){const gt=J?qs:$t.getTransfer(tt);H===i.FLOAT&&(et=i.RGBA32F),H===i.HALF_FLOAT&&(et=i.RGBA16F),H===i.UNSIGNED_BYTE&&(et=gt===Qt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function T(R,A,H){return _(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==Le&&R.minFilter!==je?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function E(R){return R===Le||R===Mc||R===Sa?i.NEAREST:i.LINEAR}function S(R){const A=R.target;A.removeEventListener("dispose",S),y(A),A.isVideoTexture&&u.delete(A)}function U(R){const A=R.target;A.removeEventListener("dispose",U),D(A)}function y(R){const A=n.get(R);if(A.__webglInit===void 0)return;const H=R.source,tt=h.get(H);if(tt){const J=tt[A.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(R),Object.keys(tt).length===0&&h.delete(H)}n.remove(R)}function b(R){const A=n.get(R);i.deleteTexture(A.__webglTexture);const H=R.source,tt=h.get(H);delete tt[A.__cacheKey],o.memory.textures--}function D(R){const A=R.texture,H=n.get(R),tt=n.get(A);if(tt.__webglTexture!==void 0&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(H.__webglFramebuffer[J]))for(let et=0;et<H.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(H.__webglFramebuffer[J][et]);else i.deleteFramebuffer(H.__webglFramebuffer[J]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[J])}else{if(Array.isArray(H.__webglFramebuffer))for(let J=0;J<H.__webglFramebuffer.length;J++)i.deleteFramebuffer(H.__webglFramebuffer[J]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let J=0;J<H.__webglColorRenderbuffer.length;J++)H.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[J]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let J=0,et=A.length;J<et;J++){const gt=n.get(A[J]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(A[J])}n.remove(A),n.remove(R)}let N=0;function z(){N=0}function P(){const R=N;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function F(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function O(R,A){const H=n.get(R);if(R.isVideoTexture&&Jt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const tt=R.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(H,R,A);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+A)}function q(R,A){const H=n.get(R);if(R.version>0&&H.__version!==R.version){lt(H,R,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+A)}function Y(R,A){const H=n.get(R);if(R.version>0&&H.__version!==R.version){lt(H,R,A);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+A)}function j(R,A){const H=n.get(R);if(R.version>0&&H.__version!==R.version){vt(H,R,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+A)}const $={[To]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},rt={[Le]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[Sa]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Th]:i.LINEAR_MIPMAP_NEAREST,[Fr]:i.LINEAR_MIPMAP_LINEAR},st={[Fh]:i.NEVER,[Gh]:i.ALWAYS,[Oh]:i.LESS,[Nu]:i.LEQUAL,[Bh]:i.EQUAL,[Vh]:i.GEQUAL,[zh]:i.GREATER,[Hh]:i.NOTEQUAL};function X(R,A,H){if(H?(i.texParameteri(R,i.TEXTURE_WRAP_S,$[A.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,$[A.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,$[A.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,rt[A.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,rt[A.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==un||A.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,E(A.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,E(A.minFilter)),A.minFilter!==Le&&A.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,st[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Le||A.minFilter!==Sa&&A.minFilter!==Fr||A.type===Wn&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===Or&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(R,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function K(R,A){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",S));const tt=A.source;let J=h.get(tt);J===void 0&&(J={},h.set(tt,J));const et=F(A);if(et!==R.__cacheKey){J[et]===void 0&&(J[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[et].usedTimes++;const gt=J[R.__cacheKey];gt!==void 0&&(J[R.__cacheKey].usedTimes--,gt.usedTimes===0&&b(A)),R.__cacheKey=et,R.__webglTexture=J[et].texture}return H}function lt(R,A,H){let tt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(tt=i.TEXTURE_3D);const J=K(R,A),et=A.source;e.bindTexture(tt,R.__webglTexture,i.TEXTURE0+H);const gt=n.get(et);if(et.version!==gt.__version||J===!0){e.activeTexture(i.TEXTURE0+H);const ct=$t.getPrimaries($t.workingColorSpace),dt=A.colorSpace===Ze?null:$t.getPrimaries(A.colorSpace),Tt=A.colorSpace===Ze||ct===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ft=f(A)&&p(A.image)===!1;let Z=x(A.image,Ft,!1,r.maxTextureSize);Z=Nt(A,Z);const jt=p(Z)||a,zt=s.convert(A.format,A.colorSpace);let Lt=s.convert(A.type),yt=M(A.internalFormat,zt,Lt,A.colorSpace,A.isVideoTexture);X(tt,A,jt);let ut;const L=A.mipmaps,nt=a&&A.isVideoTexture!==!0&&yt!==Uu,xt=gt.__version===void 0||J===!0,ht=T(A,Z,jt);if(A.isDepthTexture)yt=i.DEPTH_COMPONENT,a?A.type===Wn?yt=i.DEPTH_COMPONENT32F:A.type===kn?yt=i.DEPTH_COMPONENT24:A.type===fi?yt=i.DEPTH24_STENCIL8:yt=i.DEPTH_COMPONENT16:A.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===hi&&yt===i.DEPTH_COMPONENT&&A.type!==$o&&A.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=kn,Lt=s.convert(A.type)),A.format===sr&&yt===i.DEPTH_COMPONENT&&(yt=i.DEPTH_STENCIL,A.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=fi,Lt=s.convert(A.type))),xt&&(nt?e.texStorage2D(i.TEXTURE_2D,1,yt,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,yt,Z.width,Z.height,0,zt,Lt,null));else if(A.isDataTexture)if(L.length>0&&jt){nt&&xt&&e.texStorage2D(i.TEXTURE_2D,ht,yt,L[0].width,L[0].height);for(let Q=0,I=L.length;Q<I;Q++)ut=L[Q],nt?e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ut.width,ut.height,zt,Lt,ut.data):e.texImage2D(i.TEXTURE_2D,Q,yt,ut.width,ut.height,0,zt,Lt,ut.data);A.generateMipmaps=!1}else nt?(xt&&e.texStorage2D(i.TEXTURE_2D,ht,yt,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,zt,Lt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,yt,Z.width,Z.height,0,zt,Lt,Z.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){nt&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,yt,L[0].width,L[0].height,Z.depth);for(let Q=0,I=L.length;Q<I;Q++)ut=L[Q],A.format!==fn?zt!==null?nt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ut.width,ut.height,Z.depth,zt,ut.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,yt,ut.width,ut.height,Z.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ut.width,ut.height,Z.depth,zt,Lt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,yt,ut.width,ut.height,Z.depth,0,zt,Lt,ut.data)}else{nt&&xt&&e.texStorage2D(i.TEXTURE_2D,ht,yt,L[0].width,L[0].height);for(let Q=0,I=L.length;Q<I;Q++)ut=L[Q],A.format!==fn?zt!==null?nt?e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ut.width,ut.height,zt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ut.width,ut.height,zt,Lt,ut.data):e.texImage2D(i.TEXTURE_2D,Q,yt,ut.width,ut.height,0,zt,Lt,ut.data)}else if(A.isDataArrayTexture)nt?(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,yt,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,zt,Lt,Z.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,Z.width,Z.height,Z.depth,0,zt,Lt,Z.data);else if(A.isData3DTexture)nt?(xt&&e.texStorage3D(i.TEXTURE_3D,ht,yt,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,zt,Lt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,yt,Z.width,Z.height,Z.depth,0,zt,Lt,Z.data);else if(A.isFramebufferTexture){if(xt)if(nt)e.texStorage2D(i.TEXTURE_2D,ht,yt,Z.width,Z.height);else{let Q=Z.width,I=Z.height;for(let it=0;it<ht;it++)e.texImage2D(i.TEXTURE_2D,it,yt,Q,I,0,zt,Lt,null),Q>>=1,I>>=1}}else if(L.length>0&&jt){nt&&xt&&e.texStorage2D(i.TEXTURE_2D,ht,yt,L[0].width,L[0].height);for(let Q=0,I=L.length;Q<I;Q++)ut=L[Q],nt?e.texSubImage2D(i.TEXTURE_2D,Q,0,0,zt,Lt,ut):e.texImage2D(i.TEXTURE_2D,Q,yt,zt,Lt,ut);A.generateMipmaps=!1}else nt?(xt&&e.texStorage2D(i.TEXTURE_2D,ht,yt,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,zt,Lt,Z)):e.texImage2D(i.TEXTURE_2D,0,yt,zt,Lt,Z);_(A,jt)&&g(tt),gt.__version=et.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function vt(R,A,H){if(A.image.length!==6)return;const tt=K(R,A),J=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const et=n.get(J);if(J.version!==et.__version||tt===!0){e.activeTexture(i.TEXTURE0+H);const gt=$t.getPrimaries($t.workingColorSpace),ct=A.colorSpace===Ze?null:$t.getPrimaries(A.colorSpace),dt=A.colorSpace===Ze||gt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Tt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ft=A.image[0]&&A.image[0].isDataTexture,Z=[];for(let Q=0;Q<6;Q++)!Tt&&!Ft?Z[Q]=x(A.image[Q],!1,!0,r.maxCubemapSize):Z[Q]=Ft?A.image[Q].image:A.image[Q],Z[Q]=Nt(A,Z[Q]);const jt=Z[0],zt=p(jt)||a,Lt=s.convert(A.format,A.colorSpace),yt=s.convert(A.type),ut=M(A.internalFormat,Lt,yt,A.colorSpace),L=a&&A.isVideoTexture!==!0,nt=et.__version===void 0||tt===!0;let xt=T(A,jt,zt);X(i.TEXTURE_CUBE_MAP,A,zt);let ht;if(Tt){L&&nt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ut,jt.width,jt.height);for(let Q=0;Q<6;Q++){ht=Z[Q].mipmaps;for(let I=0;I<ht.length;I++){const it=ht[I];A.format!==fn?Lt!==null?L?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I,0,0,it.width,it.height,Lt,it.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I,ut,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I,0,0,it.width,it.height,Lt,yt,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I,ut,it.width,it.height,0,Lt,yt,it.data)}}}else{ht=A.mipmaps,L&&nt&&(ht.length>0&&xt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ut,Z[0].width,Z[0].height));for(let Q=0;Q<6;Q++)if(Ft){L?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Z[Q].width,Z[Q].height,Lt,yt,Z[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ut,Z[Q].width,Z[Q].height,0,Lt,yt,Z[Q].data);for(let I=0;I<ht.length;I++){const ot=ht[I].image[Q].image;L?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I+1,0,0,ot.width,ot.height,Lt,yt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I+1,ut,ot.width,ot.height,0,Lt,yt,ot.data)}}else{L?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,yt,Z[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ut,Lt,yt,Z[Q]);for(let I=0;I<ht.length;I++){const it=ht[I];L?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I+1,0,0,Lt,yt,it.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I+1,ut,Lt,yt,it.image[Q])}}}_(A,zt)&&g(i.TEXTURE_CUBE_MAP),et.__version=J.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function _t(R,A,H,tt,J,et){const gt=s.convert(H.format,H.colorSpace),ct=s.convert(H.type),dt=M(H.internalFormat,gt,ct,H.colorSpace);if(!n.get(A).__hasExternalTextures){const Ft=Math.max(1,A.width>>et),Z=Math.max(1,A.height>>et);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,et,dt,Ft,Z,A.depth,0,gt,ct,null):e.texImage2D(J,et,dt,Ft,Z,0,gt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),pt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,J,n.get(H).__webglTexture,0,Ct(A)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,J,n.get(H).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(R,A,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let tt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||pt(A)){const J=A.depthTexture;J&&J.isDepthTexture&&(J.type===Wn?tt=i.DEPTH_COMPONENT32F:J.type===kn&&(tt=i.DEPTH_COMPONENT24));const et=Ct(A);pt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,tt,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,et,tt,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,tt,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const tt=Ct(A);H&&pt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,A.width,A.height):pt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const tt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let J=0;J<tt.length;J++){const et=tt[J],gt=s.convert(et.format,et.colorSpace),ct=s.convert(et.type),dt=M(et.internalFormat,gt,ct,et.colorSpace),Tt=Ct(A);H&&pt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,dt,A.width,A.height):pt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,dt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,dt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),O(A.depthTexture,0);const tt=n.get(A.depthTexture).__webglTexture,J=Ct(A);if(A.depthTexture.format===hi)pt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(A.depthTexture.format===sr)pt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function bt(R){const A=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ut(A.__webglFramebuffer,R)}else if(H){A.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[tt]),A.__webglDepthbuffer[tt]=i.createRenderbuffer(),Dt(A.__webglDepthbuffer[tt],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),Dt(A.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(R,A,H){const tt=n.get(R);A!==void 0&&_t(tt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&bt(R)}function V(R){const A=R.texture,H=n.get(R),tt=n.get(A);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=A.version,o.memory.textures++);const J=R.isWebGLCubeRenderTarget===!0,et=R.isWebGLMultipleRenderTargets===!0,gt=p(R)||a;if(J){H.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[ct]=[];for(let dt=0;dt<A.mipmaps.length;dt++)H.__webglFramebuffer[ct][dt]=i.createFramebuffer()}else H.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let ct=0;ct<A.mipmaps.length;ct++)H.__webglFramebuffer[ct]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(et)if(r.drawBuffers){const ct=R.texture;for(let dt=0,Tt=ct.length;dt<Tt;dt++){const Ft=n.get(ct[dt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&pt(R)===!1){const ct=et?A:[A];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<ct.length;dt++){const Tt=ct[dt];H.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);const Ft=s.convert(Tt.format,Tt.colorSpace),Z=s.convert(Tt.type),jt=M(Tt.internalFormat,Ft,Z,Tt.colorSpace,R.isXRRenderTarget===!0),zt=Ct(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,jt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),X(i.TEXTURE_CUBE_MAP,A,gt);for(let ct=0;ct<6;ct++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let dt=0;dt<A.mipmaps.length;dt++)_t(H.__webglFramebuffer[ct][dt],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else _t(H.__webglFramebuffer[ct],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);_(A,gt)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){const ct=R.texture;for(let dt=0,Tt=ct.length;dt<Tt;dt++){const Ft=ct[dt],Z=n.get(Ft);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),X(i.TEXTURE_2D,Ft,gt),_t(H.__webglFramebuffer,R,Ft,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),_(Ft,gt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,tt.__webglTexture),X(ct,A,gt),a&&A.mipmaps&&A.mipmaps.length>0)for(let dt=0;dt<A.mipmaps.length;dt++)_t(H.__webglFramebuffer[dt],R,A,i.COLOR_ATTACHMENT0,ct,dt);else _t(H.__webglFramebuffer,R,A,i.COLOR_ATTACHMENT0,ct,0);_(A,gt)&&g(ct),e.unbindTexture()}R.depthBuffer&&bt(R)}function Me(R){const A=p(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let tt=0,J=H.length;tt<J;tt++){const et=H[tt];if(_(et,A)){const gt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ct=n.get(et).__webglTexture;e.bindTexture(gt,ct),g(gt),e.unbindTexture()}}}function St(R){if(a&&R.samples>0&&pt(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,tt=R.height;let J=i.COLOR_BUFFER_BIT;const et=[],gt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(R),dt=R.isWebGLMultipleRenderTargets===!0;if(dt)for(let Tt=0;Tt<A.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Tt=0;Tt<A.length;Tt++){et.push(i.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&et.push(gt);const Ft=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ft===!1&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),dt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[Tt]),Ft===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[gt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[gt])),dt){const Z=n.get(A[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,H,tt,0,0,H,tt,J,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Tt=0;Tt<A.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,ct.__webglColorRenderbuffer[Tt]);const Ft=n.get(A[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Ct(R){return Math.min(r.maxSamples,R.samples)}function pt(R){const A=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Jt(R){const A=o.render.frame;u.get(R)!==A&&(u.set(R,A),R.update())}function Nt(R,A){const H=R.colorSpace,tt=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===wo||H!==In&&H!==Ze&&($t.getTransfer(H)===Qt?a===!1?t.has("EXT_sRGB")===!0&&tt===fn?(R.format=wo,R.minFilter=je,R.generateMipmaps=!1):A=Ou.sRGBToLinear(A):(tt!==fn||J!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}this.allocateTextureUnit=P,this.resetTextureUnits=z,this.setTexture2D=O,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=kt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=pt}function W_(i,t,e){const n=e.isWebGL2;function r(s,o=Ze){let a;const c=$t.getTransfer(o);if(s===$n)return i.UNSIGNED_BYTE;if(s===Ru)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Cu)return i.UNSIGNED_SHORT_5_5_5_1;if(s===bh)return i.BYTE;if(s===Ah)return i.SHORT;if(s===$o)return i.UNSIGNED_SHORT;if(s===wu)return i.INT;if(s===kn)return i.UNSIGNED_INT;if(s===Wn)return i.FLOAT;if(s===Or)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===wh)return i.ALPHA;if(s===fn)return i.RGBA;if(s===Rh)return i.LUMINANCE;if(s===Ch)return i.LUMINANCE_ALPHA;if(s===hi)return i.DEPTH_COMPONENT;if(s===sr)return i.DEPTH_STENCIL;if(s===wo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Lh)return i.RED;if(s===Lu)return i.RED_INTEGER;if(s===Ph)return i.RG;if(s===Pu)return i.RG_INTEGER;if(s===Du)return i.RGBA_INTEGER;if(s===Ea||s===Ta||s===ba||s===Aa)if(c===Qt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ea)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ea)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ta)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Aa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yc||s===Sc||s===Ec||s===Tc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ec)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Tc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bc||s===Ac)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===bc)return c===Qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ac)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wc||s===Rc||s===Cc||s===Lc||s===Pc||s===Dc||s===Uc||s===Ic||s===Nc||s===Fc||s===Oc||s===Bc||s===zc||s===Hc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===wc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ic)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Oc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wa||s===Vc||s===Gc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===wa)return c===Qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dh||s===kc||s===Wc||s===Xc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===wa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===kc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class X_ extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pn extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q_={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),f=this._getHandJoint(l,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,v=.005;l.inputState.pinching&&h>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Y_ extends _i{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,v=null;const x=e.getContextAttributes();let p=null,f=null;const _=[],g=[],M=new mt;let T=null;const E=new $e;E.layers.enable(1),E.viewport=new xe;const S=new $e;S.layers.enable(2),S.viewport=new xe;const U=[E,S],y=new X_;y.layers.enable(1),y.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=_[X];return K===void 0&&(K=new Za,_[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=_[X];return K===void 0&&(K=new Za,_[X]=K),K.getGripSpace()},this.getHand=function(X){let K=_[X];return K===void 0&&(K=new Za,_[X]=K),K.getHandSpace()};function N(X){const K=g.indexOf(X.inputSource);if(K===-1)return;const lt=_[K];lt!==void 0&&(lt.update(X.inputSource,X.frame,l||o),lt.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",P);for(let X=0;X<_.length;X++){const K=g[X];K!==null&&(g[X]=null,_[X].disconnect(K))}b=null,D=null,t.setRenderTarget(p),m=null,h=null,d=null,r=null,f=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",z),r.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(M),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new pi(m.framebufferWidth,m.framebufferHeight,{format:fn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,lt=null,vt=null;x.depth&&(vt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=x.stencil?sr:hi,lt=x.stencil?fi:kn);const _t={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};d=new XRWebGLBinding(r,e),h=d.createProjectionLayer(_t),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),f=new pi(h.textureWidth,h.textureHeight,{format:fn,type:$n,depthTexture:new ju(h.textureWidth,h.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Dt=t.properties.get(f);Dt.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),st.setContext(r),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(X){for(let K=0;K<X.removed.length;K++){const lt=X.removed[K],vt=g.indexOf(lt);vt>=0&&(g[vt]=null,_[vt].disconnect(lt))}for(let K=0;K<X.added.length;K++){const lt=X.added[K];let vt=g.indexOf(lt);if(vt===-1){for(let Dt=0;Dt<_.length;Dt++)if(Dt>=g.length){g.push(lt),vt=Dt;break}else if(g[Dt]===null){g[Dt]=lt,vt=Dt;break}if(vt===-1)break}const _t=_[vt];_t&&_t.connect(lt)}}const F=new C,O=new C;function q(X,K,lt){F.setFromMatrixPosition(K.matrixWorld),O.setFromMatrixPosition(lt.matrixWorld);const vt=F.distanceTo(O),_t=K.projectionMatrix.elements,Dt=lt.projectionMatrix.elements,Ut=_t[14]/(_t[10]-1),bt=_t[14]/(_t[10]+1),kt=(_t[9]+1)/_t[5],V=(_t[9]-1)/_t[5],Me=(_t[8]-1)/_t[0],St=(Dt[8]+1)/Dt[0],Ct=Ut*Me,pt=Ut*St,Jt=vt/(-Me+St),Nt=Jt*-Me;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Nt),X.translateZ(Jt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Ut+Jt,A=bt+Jt,H=Ct-Nt,tt=pt+(vt-Nt),J=kt*bt/A*R,et=V*bt/A*R;X.projectionMatrix.makePerspective(H,tt,J,et,R,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;y.near=S.near=E.near=X.near,y.far=S.far=E.far=X.far,(b!==y.near||D!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,D=y.far);const K=X.parent,lt=y.cameras;Y(y,K);for(let vt=0;vt<lt.length;vt++)Y(lt[vt],K);lt.length===2?q(y,E,S):y.projectionMatrix.copy(E.projectionMatrix),j(X,y,K)};function j(X,K,lt){lt===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(lt.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ro*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let $=null;function rt(X,K){if(u=K.getViewerPose(l||o),v=K,u!==null){const lt=u.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let vt=!1;lt.length!==y.cameras.length&&(y.cameras.length=0,vt=!0);for(let _t=0;_t<lt.length;_t++){const Dt=lt[_t];let Ut=null;if(m!==null)Ut=m.getViewport(Dt);else{const kt=d.getViewSubImage(h,Dt);Ut=kt.viewport,_t===0&&(t.setRenderTargetTextures(f,kt.colorTexture,h.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(f))}let bt=U[_t];bt===void 0&&(bt=new $e,bt.layers.enable(_t),bt.viewport=new xe,U[_t]=bt),bt.matrix.fromArray(Dt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Dt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),_t===0&&(y.matrix.copy(bt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),vt===!0&&y.cameras.push(bt)}}for(let lt=0;lt<_.length;lt++){const vt=g[lt],_t=_[lt];vt!==null&&_t!==void 0&&_t.update(vt,K,l||o)}$&&$(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),v=null}const st=new qu;st.setAnimationLoop(rt),this.setAnimationLoop=function(X){$=X},this.dispose=function(){}}}function j_(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,ku(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,_,g,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),v(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),x(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,_,g):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Pe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Pe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const g=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*g,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,_,g){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=g*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pe&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const _=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $_(i,t,e,n){let r={},s={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,g){const M=g.program;n.uniformBlockBinding(_,M)}function l(_,g){let M=r[_.id];M===void 0&&(v(_),M=u(_),r[_.id]=M,_.addEventListener("dispose",p));const T=g.program;n.updateUBOMapping(_,T);const E=t.render.frame;s[_.id]!==E&&(h(_),s[_.id]=E)}function u(_){const g=d();_.__bindingPointIndex=g;const M=i.createBuffer(),T=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],M=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let E=0,S=M.length;E<S;E++){const U=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,b=U.length;y<b;y++){const D=U[y];if(m(D,E,y,T)===!0){const N=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let P=0;for(let F=0;F<z.length;F++){const O=z[F],q=x(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,N+P,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(_,g,M,T){const E=_.value,S=g+"_"+M;if(T[S]===void 0)return typeof E=="number"||typeof E=="boolean"?T[S]=E:T[S]=E.clone(),!0;{const U=T[S];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return T[S]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function v(_){const g=_.uniforms;let M=0;const T=16;for(let S=0,U=g.length;S<U;S++){const y=Array.isArray(g[S])?g[S]:[g[S]];for(let b=0,D=y.length;b<D;b++){const N=y[b],z=Array.isArray(N.value)?N.value:[N.value];for(let P=0,F=z.length;P<F;P++){const O=z[P],q=x(O),Y=M%T;Y!==0&&T-Y<q.boundary&&(M+=T-Y),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=q.storage}}}const E=M%T;return E>0&&(M+=T-E),_.__size=M,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class tf{constructor(t={}){const{canvas:e=Xh(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;const g=this;let M=!1,T=0,E=0,S=null,U=-1,y=null;const b=new xe,D=new xe;let N=null;const z=new Rt(0);let P=0,F=e.width,O=e.height,q=1,Y=null,j=null;const $=new xe(0,0,F,O),rt=new xe(0,0,F,O);let st=!1;const X=new Jo;let K=!1,lt=!1,vt=null;const _t=new qt,Dt=new mt,Ut=new C,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return S===null?q:1}let V=n;function Me(w,B){for(let k=0;k<w.length;k++){const W=w[k],G=e.getContext(W,B);if(G!==null)return G}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",it,!1),V===null){const B=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&B.shift(),V=Me(B,w),V===null)throw Me(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let St,Ct,pt,Jt,Nt,R,A,H,tt,J,et,gt,ct,dt,Tt,Ft,Z,jt,zt,Lt,yt,ut,L,nt;function xt(){St=new sg(V),Ct=new Qm(V,St,t),St.init(Ct),ut=new W_(V,St,Ct),pt=new G_(V,St,Ct),Jt=new cg(V),Nt=new R_,R=new k_(V,St,pt,Nt,Ct,ut,Jt),A=new eg(g),H=new rg(g),tt=new gd(V,Ct),L=new Zm(V,St,tt,Ct),J=new ag(V,tt,Jt,L),et=new hg(V,J,tt,Jt),zt=new fg(V,Ct,R),Ft=new tg(Nt),gt=new w_(g,A,H,St,Ct,L,Ft),ct=new j_(g,Nt),dt=new L_,Tt=new F_(St,Ct),jt=new Km(g,A,H,pt,et,h,c),Z=new V_(g,et,Ct),nt=new $_(V,Jt,Ct,pt),Lt=new Jm(V,St,Jt,Ct),yt=new og(V,St,Jt,Ct),Jt.programs=gt.programs,g.capabilities=Ct,g.extensions=St,g.properties=Nt,g.renderLists=dt,g.shadowMap=Z,g.state=pt,g.info=Jt}xt();const ht=new Y_(g,V);this.xr=ht,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=St.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=St.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(F,O,!1))},this.getSize=function(w){return w.set(F,O)},this.setSize=function(w,B,k=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,O=B,e.width=Math.floor(w*q),e.height=Math.floor(B*q),k===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(F*q,O*q).floor()},this.setDrawingBufferSize=function(w,B,k){F=w,O=B,q=k,e.width=Math.floor(w*k),e.height=Math.floor(B*k),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,B,k,W){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,B,k,W),pt.viewport(b.copy($).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(rt)},this.setScissor=function(w,B,k,W){w.isVector4?rt.set(w.x,w.y,w.z,w.w):rt.set(w,B,k,W),pt.scissor(D.copy(rt).multiplyScalar(q).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(w){pt.setScissorTest(st=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){j=w},this.getClearColor=function(w){return w.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(w=!0,B=!0,k=!0){let W=0;if(w){let G=!1;if(S!==null){const ft=S.texture.format;G=ft===Du||ft===Pu||ft===Lu}if(G){const ft=S.texture.type,Mt=ft===$n||ft===kn||ft===$o||ft===fi||ft===Ru||ft===Cu,wt=jt.getClearColor(),Pt=jt.getClearAlpha(),Ht=wt.r,It=wt.g,Ot=wt.b;Mt?(m[0]=Ht,m[1]=It,m[2]=Ot,m[3]=Pt,V.clearBufferuiv(V.COLOR,0,m)):(v[0]=Ht,v[1]=It,v[2]=Ot,v[3]=Pt,V.clearBufferiv(V.COLOR,0,v))}else W|=V.COLOR_BUFFER_BIT}B&&(W|=V.DEPTH_BUFFER_BIT),k&&(W|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",it,!1),dt.dispose(),Tt.dispose(),Nt.dispose(),A.dispose(),H.dispose(),et.dispose(),L.dispose(),nt.dispose(),gt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",ae),ht.removeEventListener("sessionend",Yt),vt&&(vt.dispose(),vt=null),le.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Jt.autoReset,B=Z.enabled,k=Z.autoUpdate,W=Z.needsUpdate,G=Z.type;xt(),Jt.autoReset=w,Z.enabled=B,Z.autoUpdate=k,Z.needsUpdate=W,Z.type=G}function it(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){const B=w.target;B.removeEventListener("dispose",ot),At(B)}function At(w){Et(w),Nt.remove(w)}function Et(w){const B=Nt.get(w).programs;B!==void 0&&(B.forEach(function(k){gt.releaseProgram(k)}),w.isShaderMaterial&&gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,k,W,G,ft){B===null&&(B=bt);const Mt=G.isMesh&&G.matrixWorld.determinant()<0,wt=Hf(w,B,k,W,G);pt.setMaterial(W,Mt);let Pt=k.index,Ht=1;if(W.wireframe===!0){if(Pt=J.getWireframeAttribute(k),Pt===void 0)return;Ht=2}const It=k.drawRange,Ot=k.attributes.position;let oe=It.start*Ht,Be=(It.start+It.count)*Ht;ft!==null&&(oe=Math.max(oe,ft.start*Ht),Be=Math.min(Be,(ft.start+ft.count)*Ht)),Pt!==null?(oe=Math.max(oe,0),Be=Math.min(Be,Pt.count)):Ot!=null&&(oe=Math.max(oe,0),Be=Math.min(Be,Ot.count));const ge=Be-oe;if(ge<0||ge===1/0)return;L.setup(G,W,wt,k,Pt);let xn,ne=Lt;if(Pt!==null&&(xn=tt.get(Pt),ne=yt,ne.setIndex(xn)),G.isMesh)W.wireframe===!0?(pt.setLineWidth(W.wireframeLinewidth*kt()),ne.setMode(V.LINES)):ne.setMode(V.TRIANGLES);else if(G.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),pt.setLineWidth(Vt*kt()),G.isLineSegments?ne.setMode(V.LINES):G.isLineLoop?ne.setMode(V.LINE_LOOP):ne.setMode(V.LINE_STRIP)}else G.isPoints?ne.setMode(V.POINTS):G.isSprite&&ne.setMode(V.TRIANGLES);if(G.isBatchedMesh)ne.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ne.renderInstances(oe,ge,G.count);else if(k.isInstancedBufferGeometry){const Vt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,xa=Math.min(k.instanceCount,Vt);ne.renderInstances(oe,ge,xa)}else ne.render(oe,ge)};function Wt(w,B,k){w.transparent===!0&&w.side===Ke&&w.forceSinglePass===!1?(w.side=Pe,w.needsUpdate=!0,Wr(w,B,k),w.side=_n,w.needsUpdate=!0,Wr(w,B,k),w.side=Ke):Wr(w,B,k)}this.compile=function(w,B,k=null){k===null&&(k=w),p=Tt.get(k),p.init(),_.push(p),k.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),w!==k&&w.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(g._useLegacyLights);const W=new Set;return w.traverse(function(G){const ft=G.material;if(ft)if(Array.isArray(ft))for(let Mt=0;Mt<ft.length;Mt++){const wt=ft[Mt];Wt(wt,k,G),W.add(wt)}else Wt(ft,k,G),W.add(ft)}),_.pop(),p=null,W},this.compileAsync=function(w,B,k=null){const W=this.compile(w,B,k);return new Promise(G=>{function ft(){if(W.forEach(function(Mt){Nt.get(Mt).currentProgram.isReady()&&W.delete(Mt)}),W.size===0){G(w);return}setTimeout(ft,10)}St.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Xt=null;function ie(w){Xt&&Xt(w)}function ae(){le.stop()}function Yt(){le.start()}const le=new qu;le.setAnimationLoop(ie),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(w){Xt=w,ht.setAnimationLoop(w),w===null?le.stop():le.start()},ht.addEventListener("sessionstart",ae),ht.addEventListener("sessionend",Yt),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(B),B=ht.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,B,S),p=Tt.get(w,_.length),p.init(),_.push(p),_t.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(_t),lt=this.localClippingEnabled,K=Ft.init(this.clippingPlanes,lt),x=dt.get(w,f.length),x.init(),f.push(x),pn(w,B,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(Y,j),this.info.render.frame++,K===!0&&Ft.beginShadows();const k=p.state.shadowsArray;if(Z.render(k,w,B),K===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(x,w),p.setupLights(g._useLegacyLights),B.isArrayCamera){const W=B.cameras;for(let G=0,ft=W.length;G<ft;G++){const Mt=W[G];cc(x,w,Mt,Mt.viewport)}}else cc(x,w,B);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(g,w,B),L.resetDefaultState(),U=-1,y=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function pn(w,B,k,W){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){W&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_t);const Mt=et.update(w),wt=w.material;wt.visible&&x.push(w,Mt,wt,k,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const Mt=et.update(w),wt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ut.copy(Mt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(_t)),Array.isArray(wt)){const Pt=Mt.groups;for(let Ht=0,It=Pt.length;Ht<It;Ht++){const Ot=Pt[Ht],oe=wt[Ot.materialIndex];oe&&oe.visible&&x.push(w,Mt,oe,k,Ut.z,Ot)}}else wt.visible&&x.push(w,Mt,wt,k,Ut.z,null)}}const ft=w.children;for(let Mt=0,wt=ft.length;Mt<wt;Mt++)pn(ft[Mt],B,k,W)}function cc(w,B,k,W){const G=w.opaque,ft=w.transmissive,Mt=w.transparent;p.setupLightsView(k),K===!0&&Ft.setGlobalState(g.clippingPlanes,k),ft.length>0&&zf(G,ft,B,k),W&&pt.viewport(b.copy(W)),G.length>0&&kr(G,B,k),ft.length>0&&kr(ft,B,k),Mt.length>0&&kr(Mt,B,k),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function zf(w,B,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const ft=Ct.isWebGL2;vt===null&&(vt=new pi(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?Or:$n,minFilter:Fr,samples:ft?4:0})),g.getDrawingBufferSize(Dt),ft?vt.setSize(Dt.x,Dt.y):vt.setSize(Co(Dt.x),Co(Dt.y));const Mt=g.getRenderTarget();g.setRenderTarget(vt),g.getClearColor(z),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();const wt=g.toneMapping;g.toneMapping=jn,kr(w,k,W),R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt);let Pt=!1;for(let Ht=0,It=B.length;Ht<It;Ht++){const Ot=B[Ht],oe=Ot.object,Be=Ot.geometry,ge=Ot.material,xn=Ot.group;if(ge.side===Ke&&oe.layers.test(W.layers)){const ne=ge.side;ge.side=Pe,ge.needsUpdate=!0,lc(oe,k,W,Be,ge,xn),ge.side=ne,ge.needsUpdate=!0,Pt=!0}}Pt===!0&&(R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt)),g.setRenderTarget(Mt),g.setClearColor(z,P),g.toneMapping=wt}function kr(w,B,k){const W=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ft=w.length;G<ft;G++){const Mt=w[G],wt=Mt.object,Pt=Mt.geometry,Ht=W===null?Mt.material:W,It=Mt.group;wt.layers.test(k.layers)&&lc(wt,B,k,Pt,Ht,It)}}function lc(w,B,k,W,G,ft){w.onBeforeRender(g,B,k,W,G,ft),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(g,B,k,W,w,ft),G.transparent===!0&&G.side===Ke&&G.forceSinglePass===!1?(G.side=Pe,G.needsUpdate=!0,g.renderBufferDirect(k,B,W,G,w,ft),G.side=_n,G.needsUpdate=!0,g.renderBufferDirect(k,B,W,G,w,ft),G.side=Ke):g.renderBufferDirect(k,B,W,G,w,ft),w.onAfterRender(g,B,k,W,G,ft)}function Wr(w,B,k){B.isScene!==!0&&(B=bt);const W=Nt.get(w),G=p.state.lights,ft=p.state.shadowsArray,Mt=G.state.version,wt=gt.getParameters(w,G.state,ft,B,k),Pt=gt.getProgramCacheKey(wt);let Ht=W.programs;W.environment=w.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(w.isMeshStandardMaterial?H:A).get(w.envMap||W.environment),Ht===void 0&&(w.addEventListener("dispose",ot),Ht=new Map,W.programs=Ht);let It=Ht.get(Pt);if(It!==void 0){if(W.currentProgram===It&&W.lightsStateVersion===Mt)return fc(w,wt),It}else wt.uniforms=gt.getUniforms(w),w.onBuild(k,wt,g),w.onBeforeCompile(wt,g),It=gt.acquireProgram(wt,Pt),Ht.set(Pt,It),W.uniforms=wt.uniforms;const Ot=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ot.clippingPlanes=Ft.uniform),fc(w,wt),W.needsLights=Gf(w),W.lightsStateVersion=Mt,W.needsLights&&(Ot.ambientLightColor.value=G.state.ambient,Ot.lightProbe.value=G.state.probe,Ot.directionalLights.value=G.state.directional,Ot.directionalLightShadows.value=G.state.directionalShadow,Ot.spotLights.value=G.state.spot,Ot.spotLightShadows.value=G.state.spotShadow,Ot.rectAreaLights.value=G.state.rectArea,Ot.ltc_1.value=G.state.rectAreaLTC1,Ot.ltc_2.value=G.state.rectAreaLTC2,Ot.pointLights.value=G.state.point,Ot.pointLightShadows.value=G.state.pointShadow,Ot.hemisphereLights.value=G.state.hemi,Ot.directionalShadowMap.value=G.state.directionalShadowMap,Ot.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ot.spotShadowMap.value=G.state.spotShadowMap,Ot.spotLightMatrix.value=G.state.spotLightMatrix,Ot.spotLightMap.value=G.state.spotLightMap,Ot.pointShadowMap.value=G.state.pointShadowMap,Ot.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=It,W.uniformsList=null,It}function uc(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=zs.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function fc(w,B){const k=Nt.get(w);k.outputColorSpace=B.outputColorSpace,k.batching=B.batching,k.instancing=B.instancing,k.instancingColor=B.instancingColor,k.skinning=B.skinning,k.morphTargets=B.morphTargets,k.morphNormals=B.morphNormals,k.morphColors=B.morphColors,k.morphTargetsCount=B.morphTargetsCount,k.numClippingPlanes=B.numClippingPlanes,k.numIntersection=B.numClipIntersection,k.vertexAlphas=B.vertexAlphas,k.vertexTangents=B.vertexTangents,k.toneMapping=B.toneMapping}function Hf(w,B,k,W,G){B.isScene!==!0&&(B=bt),R.resetTextureUnits();const ft=B.fog,Mt=W.isMeshStandardMaterial?B.environment:null,wt=S===null?g.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:In,Pt=(W.isMeshStandardMaterial?H:A).get(W.envMap||Mt),Ht=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,It=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ot=!!k.morphAttributes.position,oe=!!k.morphAttributes.normal,Be=!!k.morphAttributes.color;let ge=jn;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ge=g.toneMapping);const xn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=xn!==void 0?xn.length:0,Vt=Nt.get(W),xa=p.state.lights;if(K===!0&&(lt===!0||w!==y)){const We=w===y&&W.id===U;Ft.setState(W,w,We)}let re=!1;W.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==xa.state.version||Vt.outputColorSpace!==wt||G.isBatchedMesh&&Vt.batching===!1||!G.isBatchedMesh&&Vt.batching===!0||G.isInstancedMesh&&Vt.instancing===!1||!G.isInstancedMesh&&Vt.instancing===!0||G.isSkinnedMesh&&Vt.skinning===!1||!G.isSkinnedMesh&&Vt.skinning===!0||G.isInstancedMesh&&Vt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Vt.instancingColor===!1&&G.instanceColor!==null||Vt.envMap!==Pt||W.fog===!0&&Vt.fog!==ft||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Ft.numPlanes||Vt.numIntersection!==Ft.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==It||Vt.morphTargets!==Ot||Vt.morphNormals!==oe||Vt.morphColors!==Be||Vt.toneMapping!==ge||Ct.isWebGL2===!0&&Vt.morphTargetsCount!==ne)&&(re=!0):(re=!0,Vt.__version=W.version);let Qn=Vt.currentProgram;re===!0&&(Qn=Wr(W,B,G));let hc=!1,gr=!1,va=!1;const Te=Qn.getUniforms(),ti=Vt.uniforms;if(pt.useProgram(Qn.program)&&(hc=!0,gr=!0,va=!0),W.id!==U&&(U=W.id,gr=!0),hc||y!==w){Te.setValue(V,"projectionMatrix",w.projectionMatrix),Te.setValue(V,"viewMatrix",w.matrixWorldInverse);const We=Te.map.cameraPosition;We!==void 0&&We.setValue(V,Ut.setFromMatrixPosition(w.matrixWorld)),Ct.logarithmicDepthBuffer&&Te.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Te.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,gr=!0,va=!0)}if(G.isSkinnedMesh){Te.setOptional(V,G,"bindMatrix"),Te.setOptional(V,G,"bindMatrixInverse");const We=G.skeleton;We&&(Ct.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),Te.setValue(V,"boneTexture",We.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Te.setOptional(V,G,"batchingTexture"),Te.setValue(V,"batchingTexture",G._matricesTexture,R));const Ma=k.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0&&Ct.isWebGL2===!0)&&zt.update(G,k,Qn),(gr||Vt.receiveShadow!==G.receiveShadow)&&(Vt.receiveShadow=G.receiveShadow,Te.setValue(V,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ti.envMap.value=Pt,ti.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),gr&&(Te.setValue(V,"toneMappingExposure",g.toneMappingExposure),Vt.needsLights&&Vf(ti,va),ft&&W.fog===!0&&ct.refreshFogUniforms(ti,ft),ct.refreshMaterialUniforms(ti,W,q,O,vt),zs.upload(V,uc(Vt),ti,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(zs.upload(V,uc(Vt),ti,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Te.setValue(V,"center",G.center),Te.setValue(V,"modelViewMatrix",G.modelViewMatrix),Te.setValue(V,"normalMatrix",G.normalMatrix),Te.setValue(V,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const We=W.uniformsGroups;for(let ya=0,kf=We.length;ya<kf;ya++)if(Ct.isWebGL2){const dc=We[ya];nt.update(dc,Qn),nt.bind(dc,Qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qn}function Vf(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Gf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,B,k){Nt.get(w.texture).__webglTexture=B,Nt.get(w.depthTexture).__webglTexture=k;const W=Nt.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){const k=Nt.get(w);k.__webglFramebuffer=B,k.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,k=0){S=w,T=B,E=k;let W=!0,G=null,ft=!1,Mt=!1;if(w){const Pt=Nt.get(w);Pt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(V.FRAMEBUFFER,null),W=!1):Pt.__webglFramebuffer===void 0?R.setupRenderTarget(w):Pt.__hasExternalTextures&&R.rebindTextures(w,Nt.get(w.texture).__webglTexture,Nt.get(w.depthTexture).__webglTexture);const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Mt=!0);const It=Nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[B])?G=It[B][k]:G=It[B],ft=!0):Ct.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?G=Nt.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?G=It[k]:G=It,b.copy(w.viewport),D.copy(w.scissor),N=w.scissorTest}else b.copy($).multiplyScalar(q).floor(),D.copy(rt).multiplyScalar(q).floor(),N=st;if(pt.bindFramebuffer(V.FRAMEBUFFER,G)&&Ct.drawBuffers&&W&&pt.drawBuffers(w,G),pt.viewport(b),pt.scissor(D),pt.setScissorTest(N),ft){const Pt=Nt.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pt.__webglTexture,k)}else if(Mt){const Pt=Nt.get(w.texture),Ht=B||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pt.__webglTexture,k||0,Ht)}U=-1},this.readRenderTargetPixels=function(w,B,k,W,G,ft,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){pt.bindFramebuffer(V.FRAMEBUFFER,wt);try{const Pt=w.texture,Ht=Pt.format,It=Pt.type;if(Ht!==fn&&ut.convert(Ht)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=It===Or&&(St.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&St.has("EXT_color_buffer_float"));if(It!==$n&&ut.convert(It)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(It===Wn&&(Ct.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-W&&k>=0&&k<=w.height-G&&V.readPixels(B,k,W,G,ut.convert(Ht),ut.convert(It),ft)}finally{const Pt=S!==null?Nt.get(S).__webglFramebuffer:null;pt.bindFramebuffer(V.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(w,B,k=0){const W=Math.pow(2,-k),G=Math.floor(B.image.width*W),ft=Math.floor(B.image.height*W);R.setTexture2D(B,0),V.copyTexSubImage2D(V.TEXTURE_2D,k,0,0,w.x,w.y,G,ft),pt.unbindTexture()},this.copyTextureToTexture=function(w,B,k,W=0){const G=B.image.width,ft=B.image.height,Mt=ut.convert(k.format),wt=ut.convert(k.type);R.setTexture2D(k,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment),B.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,W,w.x,w.y,G,ft,Mt,wt,B.image.data):B.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,W,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,Mt,B.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,W,w.x,w.y,Mt,wt,B.image),W===0&&k.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,k,W,G=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=w.max.x-w.min.x+1,Mt=w.max.y-w.min.y+1,wt=w.max.z-w.min.z+1,Pt=ut.convert(W.format),Ht=ut.convert(W.type);let It;if(W.isData3DTexture)R.setTexture3D(W,0),It=V.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),It=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const Ot=V.getParameter(V.UNPACK_ROW_LENGTH),oe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Be=V.getParameter(V.UNPACK_SKIP_PIXELS),ge=V.getParameter(V.UNPACK_SKIP_ROWS),xn=V.getParameter(V.UNPACK_SKIP_IMAGES),ne=k.isCompressedTexture?k.mipmaps[G]:k.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ne.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ne.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,w.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,w.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,w.min.z),k.isDataTexture||k.isData3DTexture?V.texSubImage3D(It,G,B.x,B.y,B.z,ft,Mt,wt,Pt,Ht,ne.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(It,G,B.x,B.y,B.z,ft,Mt,wt,Pt,ne.data)):V.texSubImage3D(It,G,B.x,B.y,B.z,ft,Mt,wt,Pt,Ht,ne),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ot),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,oe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Be),V.pixelStorei(V.UNPACK_SKIP_ROWS,ge),V.pixelStorei(V.UNPACK_SKIP_IMAGES,xn),G===0&&W.generateMipmaps&&V.generateMipmap(It),pt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){T=0,E=0,S=null,pt.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ko?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===oa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?di:Iu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===di?ye:In}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class K_ extends tf{}K_.prototype.isWebGL1Renderer=!0;class Z_ extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class J_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new C;class Zs{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ef extends nn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fi;const yr=new C,Oi=new C,Bi=new C,zi=new mt,Sr=new mt,nf=new qt,ds=new C,Er=new C,ps=new C,Ul=new mt,Ja=new mt,Il=new mt;class Q_ extends de{constructor(t=new ef){if(super(),this.isSprite=!0,this.type="Sprite",Fi===void 0){Fi=new ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new J_(e,5);Fi.setIndex([0,1,2,0,2,3]),Fi.setAttribute("position",new Zs(n,3,0,!1)),Fi.setAttribute("uv",new Zs(n,2,3,!1))}this.geometry=Fi,this.material=t,this.center=new mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),nf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-Bi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;ms(ds.set(-.5,-.5,0),Bi,o,Oi,r,s),ms(Er.set(.5,-.5,0),Bi,o,Oi,r,s),ms(ps.set(.5,.5,0),Bi,o,Oi,r,s),Ul.set(0,0),Ja.set(1,0),Il.set(1,1);let a=t.ray.intersectTriangle(ds,Er,ps,!1,yr);if(a===null&&(ms(Er.set(-.5,.5,0),Bi,o,Oi,r,s),Ja.set(0,1),a=t.ray.intersectTriangle(ds,ps,Er,!1,yr),a===null))return;const c=t.ray.origin.distanceTo(yr);c<t.near||c>t.far||e.push({distance:c,point:yr.clone(),uv:Se.getInterpolation(yr,ds,Er,ps,Ul,Ja,Il,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ms(i,t,e,n,r,s){zi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Sr.x=s*zi.x-r*zi.y,Sr.y=r*zi.x+s*zi.y):Sr.copy(zi),i.copy(t),i.x+=Sr.x,i.y+=Sr.y,i.applyMatrix4(nf)}class Ur extends nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nl=new C,Fl=new C,Ol=new qt,Qa=new fr,gs=new ur;class rf extends de{constructor(t=new ce,e=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Nl.fromBufferAttribute(e,r-1),Fl.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Nl.distanceTo(Fl);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),gs.radius+=s,t.ray.intersectsSphere(gs)===!1)return;Ol.copy(r).invert(),Qa.copy(t.ray).applyMatrix4(Ol);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,u=new C,d=new C,h=new C,m=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const f=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let g=f,M=_-1;g<M;g+=m){const T=v.getX(g),E=v.getX(g+1);if(l.fromBufferAttribute(p,T),u.fromBufferAttribute(p,E),Qa.distanceSqToSegment(l,u,h,d)>c)continue;h.applyMatrix4(this.matrixWorld);const U=t.ray.origin.distanceTo(h);U<t.near||U>t.far||e.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let g=f,M=_-1;g<M;g+=m){if(l.fromBufferAttribute(p,g),u.fromBufferAttribute(p,g+1),Qa.distanceSqToSegment(l,u,h,d)>c)continue;h.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(h);E<t.near||E>t.far||e.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Bl=new C,zl=new C;class Hl extends rf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Bl.fromBufferAttribute(e,r),zl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Bl.distanceTo(zl);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ji extends nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vl=new qt,Po=new fr,_s=new ur,xs=new C;class Hs extends de{constructor(t=new ce,e=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),_s.radius+=s,t.ray.intersectsSphere(_s)===!1)return;Vl.copy(r).invert(),Po.copy(t.ray).applyMatrix4(Vl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let v=h,x=m;v<x;v++){const p=l.getX(v);xs.fromBufferAttribute(d,p),Gl(xs,p,c,r,t,e,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=h,x=m;v<x;v++)xs.fromBufferAttribute(d,v),Gl(xs,v,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gl(i,t,e,n,r,s,o){const a=Po.distanceSqToPoint(i);if(a<e){const c=new C;Po.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class sf extends Oe{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ua extends ce{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new C,h=new C,m=[],v=[],x=[],p=[];for(let f=0;f<=n;f++){const _=[],g=f/n;let M=0;f===0&&o===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){const E=T/e;d.x=-t*Math.cos(r+E*s)*Math.sin(o+g*a),d.y=t*Math.cos(o+g*a),d.z=t*Math.sin(r+E*s)*Math.sin(o+g*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(E+M,1-g),_.push(l++)}u.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const g=u[f][_+1],M=u[f][_],T=u[f+1][_],E=u[f+1][_+1];(f!==0||o>0)&&m.push(g,M,E),(f!==n-1||c<Math.PI)&&m.push(M,T,E)}this.setIndex(m),this.setAttribute("position",new Zt(v,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class t0 extends nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class e0 extends nn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class n0 extends nn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const kl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class i0{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const m=l[d],v=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const r0=new i0;class Vr{constructor(t){this.manager=t!==void 0?t:r0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tn={};class s0 extends Error{constructor(t,e){super(t),this.response=e}}class ec extends Vr{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=kl.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Tn[t]!==void 0){Tn[t].push({onLoad:e,onProgress:n,onError:r});return}Tn[t]=[],Tn[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Tn[t],d=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=h?parseInt(h):0,v=m!==0;let x=0;const p=new ReadableStream({start(f){_();function _(){d.read().then(({done:g,value:M})=>{if(g)f.close();else{x+=M.byteLength;const T=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:m});for(let E=0,S=u.length;E<S;E++){const U=u[E];U.onProgress&&U.onProgress(T)}f.enqueue(M),_()}})}}});return new Response(p)}else throw new s0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(h);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{kl.add(t,l);const u=Tn[t];delete Tn[t];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Tn[t];if(u===void 0)throw this.manager.itemError(t),l;delete Tn[t];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class nc extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class a0 extends nc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const to=new qt,Wl=new C,Xl=new C;class o0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wl),Xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xl),e.updateMatrixWorld(),to.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(to)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class c0 extends o0{constructor(){super(new Yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ic extends nc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new c0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class l0 extends nc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class af{constructor(t,e,n=0,r=1/0){this.ray=new fr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Do(t,this,n,e),n.sort(ql),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Do(t[r],this,n,e);return n.sort(ql),n}}function ql(i,t){return i.distance-t.distance}function Do(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Do(r[s],t,e,!0)}}class Yl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jl=new C,vs=new C;class Dn{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){jl.subVectors(t,this.start),vs.subVectors(this.end,this.start);const n=vs.dot(vs);let s=vs.dot(jl)/n;return e&&(s=we(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);const $l={type:"change"},eo={type:"start"},Kl={type:"end"},Ms=new fr,Zl=new mn,u0=Math.cos(70*Wh.DEG2RAD);class f0 extends _i{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Tt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Tt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent($l),n.update(),s=r.NONE},this.update=function(){const L=new C,nt=new mi().setFromUnitVectors(t.up,new C(0,1,0)),xt=nt.clone().invert(),ht=new C,Q=new mi,I=new C,it=2*Math.PI;return function(At=null){const Et=n.object.position;L.copy(Et).sub(n.target),L.applyQuaternion(nt),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&N(b(At)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Wt=n.minAzimuthAngle,Xt=n.maxAzimuthAngle;isFinite(Wt)&&isFinite(Xt)&&(Wt<-Math.PI?Wt+=it:Wt>Math.PI&&(Wt-=it),Xt<-Math.PI?Xt+=it:Xt>Math.PI&&(Xt-=it),Wt<=Xt?a.theta=Math.max(Wt,Math.min(Xt,a.theta)):a.theta=a.theta>(Wt+Xt)/2?Math.max(Wt,a.theta):Math.min(Xt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*l),L.setFromSpherical(a),L.applyQuaternion(xt),Et.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let ie=!1;if(n.zoomToCursor&&E){let ae=null;if(n.object.isPerspectiveCamera){const Yt=L.length();ae=$(Yt*l);const le=Yt-ae;n.object.position.addScaledVector(M,le),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Yt=new C(T.x,T.y,0);Yt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ie=!0;const le=new C(T.x,T.y,0);le.unproject(n.object),n.object.position.sub(le).add(Yt),n.object.updateMatrixWorld(),ae=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ae).add(n.object.position):(Ms.origin.copy(n.object.position),Ms.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ms.direction))<u0?t.lookAt(n.target):(Zl.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ms.intersectPlane(Zl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ie=!0);return l=1,E=!1,ie||ht.distanceToSquared(n.object.position)>o||8*(1-Q.dot(n.object.quaternion))>o||I.distanceToSquared(n.target)>0?(n.dispatchEvent($l),ht.copy(n.object.position),Q.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",jt),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",H),n.domElement.removeEventListener("wheel",et),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",H),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Tt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Yl,c=new Yl;let l=1;const u=new C,d=new mt,h=new mt,m=new mt,v=new mt,x=new mt,p=new mt,f=new mt,_=new mt,g=new mt,M=new C,T=new mt;let E=!1;const S=[],U={};let y=!1;function b(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function D(L){const nt=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*nt)}function N(L){c.theta-=L}function z(L){c.phi-=L}const P=function(){const L=new C;return function(xt,ht){L.setFromMatrixColumn(ht,0),L.multiplyScalar(-xt),u.add(L)}}(),F=function(){const L=new C;return function(xt,ht){n.screenSpacePanning===!0?L.setFromMatrixColumn(ht,1):(L.setFromMatrixColumn(ht,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(xt),u.add(L)}}(),O=function(){const L=new C;return function(xt,ht){const Q=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;L.copy(I).sub(n.target);let it=L.length();it*=Math.tan(n.object.fov/2*Math.PI/180),P(2*xt*it/Q.clientHeight,n.object.matrix),F(2*ht*it/Q.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(xt*(n.object.right-n.object.left)/n.object.zoom/Q.clientWidth,n.object.matrix),F(ht*(n.object.top-n.object.bottom)/n.object.zoom/Q.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(L,nt){if(!n.zoomToCursor)return;E=!0;const xt=n.domElement.getBoundingClientRect(),ht=L-xt.left,Q=nt-xt.top,I=xt.width,it=xt.height;T.x=ht/I*2-1,T.y=-(Q/it)*2+1,M.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function rt(L){d.set(L.clientX,L.clientY)}function st(L){j(L.clientX,L.clientX),f.set(L.clientX,L.clientY)}function X(L){v.set(L.clientX,L.clientY)}function K(L){h.set(L.clientX,L.clientY),m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const nt=n.domElement;N(2*Math.PI*m.x/nt.clientHeight),z(2*Math.PI*m.y/nt.clientHeight),d.copy(h),n.update()}function lt(L){_.set(L.clientX,L.clientY),g.subVectors(_,f),g.y>0?q(D(g.y)):g.y<0&&Y(D(g.y)),f.copy(_),n.update()}function vt(L){x.set(L.clientX,L.clientY),p.subVectors(x,v).multiplyScalar(n.panSpeed),O(p.x,p.y),v.copy(x),n.update()}function _t(L){j(L.clientX,L.clientY),L.deltaY<0?Y(D(L.deltaY)):L.deltaY>0&&q(D(L.deltaY)),n.update()}function Dt(L){let nt=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),nt=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),nt=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),nt=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),nt=!0;break}nt&&(L.preventDefault(),n.update())}function Ut(L){if(S.length===1)d.set(L.pageX,L.pageY);else{const nt=ut(L),xt=.5*(L.pageX+nt.x),ht=.5*(L.pageY+nt.y);d.set(xt,ht)}}function bt(L){if(S.length===1)v.set(L.pageX,L.pageY);else{const nt=ut(L),xt=.5*(L.pageX+nt.x),ht=.5*(L.pageY+nt.y);v.set(xt,ht)}}function kt(L){const nt=ut(L),xt=L.pageX-nt.x,ht=L.pageY-nt.y,Q=Math.sqrt(xt*xt+ht*ht);f.set(0,Q)}function V(L){n.enableZoom&&kt(L),n.enablePan&&bt(L)}function Me(L){n.enableZoom&&kt(L),n.enableRotate&&Ut(L)}function St(L){if(S.length==1)h.set(L.pageX,L.pageY);else{const xt=ut(L),ht=.5*(L.pageX+xt.x),Q=.5*(L.pageY+xt.y);h.set(ht,Q)}m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const nt=n.domElement;N(2*Math.PI*m.x/nt.clientHeight),z(2*Math.PI*m.y/nt.clientHeight),d.copy(h)}function Ct(L){if(S.length===1)x.set(L.pageX,L.pageY);else{const nt=ut(L),xt=.5*(L.pageX+nt.x),ht=.5*(L.pageY+nt.y);x.set(xt,ht)}p.subVectors(x,v).multiplyScalar(n.panSpeed),O(p.x,p.y),v.copy(x)}function pt(L){const nt=ut(L),xt=L.pageX-nt.x,ht=L.pageY-nt.y,Q=Math.sqrt(xt*xt+ht*ht);_.set(0,Q),g.set(0,Math.pow(_.y/f.y,n.zoomSpeed)),q(g.y),f.copy(_);const I=(L.pageX+nt.x)*.5,it=(L.pageY+nt.y)*.5;j(I,it)}function Jt(L){n.enableZoom&&pt(L),n.enablePan&&Ct(L)}function Nt(L){n.enableZoom&&pt(L),n.enableRotate&&St(L)}function R(L){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",H)),zt(L),L.pointerType==="touch"?Ft(L):tt(L))}function A(L){n.enabled!==!1&&(L.pointerType==="touch"?Z(L):J(L))}function H(L){Lt(L),S.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",H)),n.dispatchEvent(Kl),s=r.NONE}function tt(L){let nt;switch(L.button){case 0:nt=n.mouseButtons.LEFT;break;case 1:nt=n.mouseButtons.MIDDLE;break;case 2:nt=n.mouseButtons.RIGHT;break;default:nt=-1}switch(nt){case xi.DOLLY:if(n.enableZoom===!1)return;st(L),s=r.DOLLY;break;case xi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;X(L),s=r.PAN}else{if(n.enableRotate===!1)return;rt(L),s=r.ROTATE}break;case xi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;rt(L),s=r.ROTATE}else{if(n.enablePan===!1)return;X(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(eo)}function J(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;K(L);break;case r.DOLLY:if(n.enableZoom===!1)return;lt(L);break;case r.PAN:if(n.enablePan===!1)return;vt(L);break}}function et(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(eo),_t(gt(L)),n.dispatchEvent(Kl))}function gt(L){const nt=L.deltaMode,xt={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(nt){case 1:xt.deltaY*=16;break;case 2:xt.deltaY*=100;break}return L.ctrlKey&&!y&&(xt.deltaY*=10),xt}function ct(L){L.key==="Control"&&(y=!0,document.addEventListener("keyup",dt,{passive:!0,capture:!0}))}function dt(L){L.key==="Control"&&(y=!1,document.removeEventListener("keyup",dt,{passive:!0,capture:!0}))}function Tt(L){n.enabled===!1||n.enablePan===!1||Dt(L)}function Ft(L){switch(yt(L),S.length){case 1:switch(n.touches.ONE){case vi.ROTATE:if(n.enableRotate===!1)return;Ut(L),s=r.TOUCH_ROTATE;break;case vi.PAN:if(n.enablePan===!1)return;bt(L),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(L),s=r.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(L),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(eo)}function Z(L){switch(yt(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;St(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ct(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Jt(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Nt(L),n.update();break;default:s=r.NONE}}function jt(L){n.enabled!==!1&&L.preventDefault()}function zt(L){S.push(L.pointerId)}function Lt(L){delete U[L.pointerId];for(let nt=0;nt<S.length;nt++)if(S[nt]==L.pointerId){S.splice(nt,1);return}}function yt(L){let nt=U[L.pointerId];nt===void 0&&(nt=new mt,U[L.pointerId]=nt),nt.set(L.pageX,L.pageY)}function ut(L){const nt=L.pointerId===S[0]?S[1]:S[0];return U[nt]}n.domElement.addEventListener("contextmenu",jt),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",H),n.domElement.addEventListener("wheel",et,{passive:!1}),document.addEventListener("keydown",ct,{passive:!0,capture:!0}),this.update()}}class h0 extends Vr{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new ec(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t){function e(l){const u=new DataView(l),d=32/8*3+32/8*3*3+16/8,h=u.getUint32(80,!0);if(80+32/8+h*d===u.byteLength)return!0;const v=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(v,u,x))return!1;return!0}function n(l,u,d){for(let h=0,m=l.length;h<m;h++)if(l[h]!==u.getUint8(d+h))return!1;return!0}function r(l){const u=new DataView(l),d=u.getUint32(80,!0);let h,m,v,x=!1,p,f,_,g,M;for(let D=0;D<70;D++)u.getUint32(D,!1)==1129270351&&u.getUint8(D+4)==82&&u.getUint8(D+5)==61&&(x=!0,p=new Float32Array(d*3*3),f=u.getUint8(D+6)/255,_=u.getUint8(D+7)/255,g=u.getUint8(D+8)/255,M=u.getUint8(D+9)/255);const T=84,E=12*4+2,S=new ce,U=new Float32Array(d*3*3),y=new Float32Array(d*3*3),b=new Rt;for(let D=0;D<d;D++){const N=T+D*E,z=u.getFloat32(N,!0),P=u.getFloat32(N+4,!0),F=u.getFloat32(N+8,!0);if(x){const O=u.getUint16(N+48,!0);O&32768?(h=f,m=_,v=g):(h=(O&31)/31,m=(O>>5&31)/31,v=(O>>10&31)/31)}for(let O=1;O<=3;O++){const q=N+O*12,Y=D*3*3+(O-1)*3;U[Y]=u.getFloat32(q,!0),U[Y+1]=u.getFloat32(q+4,!0),U[Y+2]=u.getFloat32(q+8,!0),y[Y]=z,y[Y+1]=P,y[Y+2]=F,x&&(b.set(h,m,v).convertSRGBToLinear(),p[Y]=b.r,p[Y+1]=b.g,p[Y+2]=b.b)}}return S.setAttribute("position",new ve(U,3)),S.setAttribute("normal",new ve(y,3)),x&&(S.setAttribute("color",new ve(p,3)),S.hasColors=!0,S.alpha=M),S}function s(l){const u=new ce,d=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let v=0;const x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+x+x+x,"g"),f=new RegExp("normal"+x+x+x,"g"),_=[],g=[],M=[],T=new C;let E,S=0,U=0,y=0;for(;(E=d.exec(l))!==null;){U=y;const b=E[0],D=(E=m.exec(b))!==null?E[1]:"";for(M.push(D);(E=h.exec(b))!==null;){let P=0,F=0;const O=E[0];for(;(E=f.exec(O))!==null;)T.x=parseFloat(E[1]),T.y=parseFloat(E[2]),T.z=parseFloat(E[3]),F++;for(;(E=p.exec(O))!==null;)_.push(parseFloat(E[1]),parseFloat(E[2]),parseFloat(E[3])),g.push(T.x,T.y,T.z),P++,y++;F!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+v),P!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+v),v++}const N=U,z=y-U;u.userData.groupNames=M,u.addGroup(N,z,S),S++}return u.setAttribute("position",new Zt(_,3)),u.setAttribute("normal",new Zt(g,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let d=0;d<l.length;d++)u[d]=l.charCodeAt(d)&255;return u.buffer||u}else return l}const c=a(t);return e(c)?r(c):s(o(t))}}const d0=/^[og]\s*(.+)?/,p0=/^mtllib /,m0=/^usemtl /,g0=/^usemap /,Jl=/\s+/,Ql=new C,no=new C,tu=new C,eu=new C,qe=new C,ys=new Rt;function _0(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(t,e,n){const r=this.vertices,s=this.object.geometry.normals;Ql.fromArray(r,t),no.fromArray(r,e),tu.fromArray(r,n),qe.subVectors(tu,no),eu.subVectors(Ql,no),qe.cross(eu),qe.normalize(),s.push(qe.x,qe.y,qe.z),s.push(qe.x,qe.y,qe.z),s.push(qe.x,qe.y,qe.z)},addColor:function(t,e,n){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(t,e,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,r,s,o,a,c,l){const u=this.vertices.length;let d=this.parseVertexIndex(t,u),h=this.parseVertexIndex(e,u),m=this.parseVertexIndex(n,u);if(this.addVertex(d,h,m),this.addColor(d,h,m),a!==void 0&&a!==""){const v=this.normals.length;d=this.parseNormalIndex(a,v),h=this.parseNormalIndex(c,v),m=this.parseNormalIndex(l,v),this.addNormal(d,h,m)}else this.addFaceNormal(d,h,m);if(r!==void 0&&r!==""){const v=this.uvs.length;d=this.parseUVIndex(r,v),h=this.parseUVIndex(s,v),m=this.parseUVIndex(o,v),this.addUV(d,h,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,r=t.length;n<r;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return i.startObject("",!1),i}class x0 extends Vr{constructor(t){super(t),this.materials=null}load(t,e,n,r){const s=this,o=new ec(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new _0;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let r=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const d=l.split(Jl);switch(d[0]){case"v":e.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(ys.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),e.colors.push(ys.r,ys.g,ys.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":e.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){const h=l.slice(1).trim().split(Jl),m=[];for(let x=0,p=h.length;x<p;x++){const f=h[x];if(f.length>0){const _=f.split("/");m.push(_)}}const v=m[0];for(let x=1,p=m.length-1;x<p;x++){const f=m[x],_=m[x+1];e.addFace(v[0],f[0],_[0],v[1],f[1],_[1],v[2],f[2],_[2])}}else if(u==="l"){const d=l.substring(1).trim().split(" ");let h=[];const m=[];if(l.indexOf("/")===-1)h=d;else for(let v=0,x=d.length;v<x;v++){const p=d[v].split("/");p[0]!==""&&h.push(p[0]),p[1]!==""&&m.push(p[1])}e.addLineGeometry(h,m)}else if(u==="p"){const h=l.slice(1).trim().split(" ");e.addPointGeometry(h)}else if((r=d0.exec(l))!==null){const d=(" "+r[0].slice(1).trim()).slice(1);e.startObject(d)}else if(m0.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if(p0.test(l))e.materialLibraries.push(l.substring(7).trim());else if(g0.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=l.split(" "),r.length>1){const h=r[1].trim().toLowerCase();e.object.smooth=h!=="0"&&h!=="off"}else e.object.smooth=!0;const d=e.object.currentMaterial();d&&(d.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();const s=new Pn;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=e.objects.length;a<c;a++){const l=e.objects[a],u=l.geometry,d=l.materials,h=u.type==="Line",m=u.type==="Points";let v=!1;if(u.vertices.length===0)continue;const x=new ce;x.setAttribute("position",new Zt(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new Zt(u.normals,3)),u.colors.length>0&&(v=!0,x.setAttribute("color",new Zt(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new Zt(u.uvs,2));const p=[];for(let _=0,g=d.length;_<g;_++){const M=d[_],T=M.name+"_"+M.smooth+"_"+v;let E=e.materials[T];if(this.materials!==null){if(E=this.materials.create(M.name),h&&E&&!(E instanceof Ur)){const S=new Ur;nn.prototype.copy.call(S,E),S.color.copy(E.color),E=S}else if(m&&E&&!(E instanceof Ji)){const S=new Ji({size:10,sizeAttenuation:!1});nn.prototype.copy.call(S,E),S.color.copy(E.color),S.map=E.map,E=S}}E===void 0&&(h?E=new Ur:m?E=new Ji({size:1,sizeAttenuation:!1}):E=new e0,E.name=M.name,E.flatShading=!M.smooth,E.vertexColors=v,e.materials[T]=E),p.push(E)}let f;if(p.length>1){for(let _=0,g=d.length;_<g;_++){const M=d[_];x.addGroup(M.groupStart,M.groupCount,_)}h?f=new Hl(x,p):m?f=new Hs(x,p):f=new Ee(x,p)}else h?f=new Hl(x,p[0]):m?f=new Hs(x,p[0]):f=new Ee(x,p[0]);f.name=l.name,s.add(f)}else if(e.vertices.length>0){const a=new Ji({size:1,sizeAttenuation:!1}),c=new ce;c.setAttribute("position",new Zt(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new Zt(e.colors,3)),a.vertexColors=!0);const l=new Hs(c,a);s.add(l)}return s}}const Ie=new Rt;class v0 extends Vr{constructor(t){super(t),this.propertyNameMapping={},this.customPropertyMapping={}}load(t,e,n,r){const s=this,o=new ec(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}setPropertyNameMapping(t){this.propertyNameMapping=t}setCustomPropertyNameMapping(t){this.customPropertyMapping=t}parse(t){function e(p,f=0){const _=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let g="";const M=_.exec(p);M!==null&&(g=M[1]);const T={comments:[],elements:[],headerLength:f,objInfo:""},E=g.split(/\r\n|\r|\n/);let S;function U(y,b){const D={type:y[0]};return D.type==="list"?(D.name=y[3],D.countType=y[1],D.itemType=y[2]):D.name=y[1],D.name in b&&(D.name=b[D.name]),D}for(let y=0;y<E.length;y++){let b=E[y];if(b=b.trim(),b==="")continue;const D=b.split(/\s+/),N=D.shift();switch(b=D.join(" "),N){case"format":T.format=D[0],T.version=D[1];break;case"comment":T.comments.push(b);break;case"element":S!==void 0&&T.elements.push(S),S={},S.name=D[0],S.count=parseInt(D[1]),S.properties=[];break;case"property":S.properties.push(U(D,x.propertyNameMapping));break;case"obj_info":T.objInfo=b;break;default:console.log("unhandled",N,D)}}return S!==void 0&&T.elements.push(S),T}function n(p,f){switch(f){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(p);case"float":case"double":case"float32":case"float64":return parseFloat(p)}}function r(p,f){const _={};for(let g=0;g<p.length;g++){if(f.empty())return null;if(p[g].type==="list"){const M=[],T=n(f.next(),p[g].countType);for(let E=0;E<T;E++){if(f.empty())return null;M.push(n(f.next(),p[g].itemType))}_[p[g].name]=M}else _[p[g].name]=n(f.next(),p[g].type)}return _}function s(){const p={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(const f of Object.keys(x.customPropertyMapping))p[f]=[];return p}function o(p){const f=p.map(g=>g.name);function _(g){for(let M=0,T=g.length;M<T;M++){const E=g[M];if(f.includes(E))return E}return null}return{attrX:_(["x","px","posx"])||"x",attrY:_(["y","py","posy"])||"y",attrZ:_(["z","pz","posz"])||"z",attrNX:_(["nx","normalx"]),attrNY:_(["ny","normaly"]),attrNZ:_(["nz","normalz"]),attrS:_(["s","u","texture_u","tx"]),attrT:_(["t","v","texture_v","ty"]),attrR:_(["red","diffuse_red","r","diffuse_r"]),attrG:_(["green","diffuse_green","g","diffuse_g"]),attrB:_(["blue","diffuse_blue","b","diffuse_b"])}}function a(p,f){const _=s(),g=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let M,T;(T=g.exec(p))!==null?M=T[1].split(/\s+/):M=[];const E=new M0(M);t:for(let S=0;S<f.elements.length;S++){const U=f.elements[S],y=o(U.properties);for(let b=0;b<U.count;b++){const D=r(U.properties,E);if(!D)break t;l(_,U.name,D,y)}}return c(_)}function c(p){let f=new ce;p.indices.length>0&&f.setIndex(p.indices),f.setAttribute("position",new Zt(p.vertices,3)),p.normals.length>0&&f.setAttribute("normal",new Zt(p.normals,3)),p.uvs.length>0&&f.setAttribute("uv",new Zt(p.uvs,2)),p.colors.length>0&&f.setAttribute("color",new Zt(p.colors,3)),(p.faceVertexUvs.length>0||p.faceVertexColors.length>0)&&(f=f.toNonIndexed(),p.faceVertexUvs.length>0&&f.setAttribute("uv",new Zt(p.faceVertexUvs,2)),p.faceVertexColors.length>0&&f.setAttribute("color",new Zt(p.faceVertexColors,3)));for(const _ of Object.keys(x.customPropertyMapping))p[_].length>0&&f.setAttribute(_,new Zt(p[_],x.customPropertyMapping[_].length));return f.computeBoundingSphere(),f}function l(p,f,_,g){if(f==="vertex"){p.vertices.push(_[g.attrX],_[g.attrY],_[g.attrZ]),g.attrNX!==null&&g.attrNY!==null&&g.attrNZ!==null&&p.normals.push(_[g.attrNX],_[g.attrNY],_[g.attrNZ]),g.attrS!==null&&g.attrT!==null&&p.uvs.push(_[g.attrS],_[g.attrT]),g.attrR!==null&&g.attrG!==null&&g.attrB!==null&&(Ie.setRGB(_[g.attrR]/255,_[g.attrG]/255,_[g.attrB]/255).convertSRGBToLinear(),p.colors.push(Ie.r,Ie.g,Ie.b));for(const M of Object.keys(x.customPropertyMapping))for(const T of x.customPropertyMapping[M])p[M].push(_[T])}else if(f==="face"){const M=_.vertex_indices||_.vertex_index,T=_.texcoord;M.length===3?(p.indices.push(M[0],M[1],M[2]),T&&T.length===6&&(p.faceVertexUvs.push(T[0],T[1]),p.faceVertexUvs.push(T[2],T[3]),p.faceVertexUvs.push(T[4],T[5]))):M.length===4&&(p.indices.push(M[0],M[1],M[3]),p.indices.push(M[1],M[2],M[3])),g.attrR!==null&&g.attrG!==null&&g.attrB!==null&&(Ie.setRGB(_[g.attrR]/255,_[g.attrG]/255,_[g.attrB]/255).convertSRGBToLinear(),p.faceVertexColors.push(Ie.r,Ie.g,Ie.b),p.faceVertexColors.push(Ie.r,Ie.g,Ie.b),p.faceVertexColors.push(Ie.r,Ie.g,Ie.b))}}function u(p,f){const _={};let g=0;for(let M=0;M<f.length;M++){const T=f[M],E=T.valueReader;if(T.type==="list"){const S=[],U=T.countReader.read(p+g);g+=T.countReader.size;for(let y=0;y<U;y++)S.push(E.read(p+g)),g+=E.size;_[T.name]=S}else _[T.name]=E.read(p+g),g+=E.size}return[_,g]}function d(p,f,_){function g(M,T,E){switch(T){case"int8":case"char":return{read:S=>M.getInt8(S),size:1};case"uint8":case"uchar":return{read:S=>M.getUint8(S),size:1};case"int16":case"short":return{read:S=>M.getInt16(S,E),size:2};case"uint16":case"ushort":return{read:S=>M.getUint16(S,E),size:2};case"int32":case"int":return{read:S=>M.getInt32(S,E),size:4};case"uint32":case"uint":return{read:S=>M.getUint32(S,E),size:4};case"float32":case"float":return{read:S=>M.getFloat32(S,E),size:4};case"float64":case"double":return{read:S=>M.getFloat64(S,E),size:8}}}for(let M=0,T=p.length;M<T;M++){const E=p[M];E.type==="list"?(E.countReader=g(f,E.countType,_),E.valueReader=g(f,E.itemType,_)):E.valueReader=g(f,E.type,_)}}function h(p,f){const _=s(),g=f.format==="binary_little_endian",M=new DataView(p,f.headerLength);let T,E=0;for(let S=0;S<f.elements.length;S++){const U=f.elements[S],y=U.properties,b=o(y);d(y,M,g);for(let D=0;D<U.count;D++){T=u(E,y),E+=T[1];const N=T[0];l(_,U.name,N,b)}}return c(_)}function m(p){let f=0,_=!0,g="";const M=[],T=new TextDecoder().decode(p.subarray(0,5)),E=/^ply\r\n/.test(T);do{const S=String.fromCharCode(p[f++]);S!==`
`&&S!=="\r"?g+=S:(g==="end_header"&&(_=!1),g!==""&&(M.push(g),g=""))}while(_&&f<p.length);return E===!0&&f++,{headerText:M.join("\r")+"\r",headerLength:f}}let v;const x=this;if(t instanceof ArrayBuffer){const p=new Uint8Array(t),{headerText:f,headerLength:_}=m(p),g=e(f,_);if(g.format==="ascii"){const M=new TextDecoder().decode(p);v=a(M,g)}else v=h(t,g)}else v=a(t,e(t));return v}}class M0{constructor(t){this.arr=t,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}const of=0,y0=1,S0=2,nu=2,io=1.25,iu=1,Ir=6*4+4+4,fa=65535,E0=Math.pow(2,-24),ro=Symbol("SKIP_GENERATION");function T0(i){return i.index?i.index.count:i.attributes.position.count}function dr(i){return T0(i)/3}function b0(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function A0(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=b0(e,n);i.setIndex(new ve(r,1));for(let s=0;s<e;s++)r[s]=s}}function cf(i){const t=dr(i),e=i.drawRange,n=e.start/3,r=(e.start+e.count)/3,s=Math.max(0,n),o=Math.min(t,r)-s;return[{offset:Math.floor(s),count:Math.floor(o)}]}function lf(i){if(!i.groups||!i.groups.length)return cf(i);const t=[],e=new Set,n=i.drawRange,r=n.start/3,s=(n.start+n.count)/3;for(const a of i.groups){const c=a.start/3,l=(a.start+a.count)/3;e.add(Math.max(r,c)),e.add(Math.min(s,l))}const o=Array.from(e.values()).sort((a,c)=>a-c);for(let a=0;a<o.length-1;a++){const c=o[a],l=o[a+1];t.push({offset:Math.floor(c),count:Math.floor(l-c)})}return t}function w0(i){if(i.groups.length===0)return!1;const t=dr(i),e=lf(i).sort((s,o)=>s.offset-o.offset),n=e[e.length-1];n.count=Math.min(t-n.offset,n.count);let r=0;return e.forEach(({count:s})=>r+=s),t!==r}function so(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,d=1/0,h=1/0,m=1/0,v=-1/0,x=-1/0,p=-1/0;for(let f=t*6,_=(t+e)*6;f<_;f+=6){const g=i[f+0],M=i[f+1],T=g-M,E=g+M;T<s&&(s=T),E>c&&(c=E),g<d&&(d=g),g>v&&(v=g);const S=i[f+2],U=i[f+3],y=S-U,b=S+U;y<o&&(o=y),b>l&&(l=b),S<h&&(h=S),S>x&&(x=S);const D=i[f+4],N=i[f+5],z=D-N,P=D+N;z<a&&(a=z),P>u&&(u=P),D<m&&(m=D),D>p&&(p=D)}n[0]=s,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,r[0]=d,r[1]=h,r[2]=m,r[3]=v,r[4]=x,r[5]=p}function R0(i,t=null,e=null,n=null){const r=i.attributes.position,s=i.index?i.index.array:null,o=dr(i),a=r.normalized;let c;t===null?(c=new Float32Array(o*6*4),e=0,n=o):(c=t,e=e||0,n=n||o);const l=r.array,u=r.offset||0;let d=3;r.isInterleavedBufferAttribute&&(d=r.data.stride);const h=["getX","getY","getZ"];for(let m=e;m<e+n;m++){const v=m*3,x=m*6;let p=v+0,f=v+1,_=v+2;s&&(p=s[p],f=s[f],_=s[_]),a||(p=p*d+u,f=f*d+u,_=_*d+u);for(let g=0;g<3;g++){let M,T,E;a?(M=r[h[g]](p),T=r[h[g]](f),E=r[h[g]](_)):(M=l[p+g],T=l[f+g],E=l[_+g]);let S=M;T<S&&(S=T),E<S&&(S=E);let U=M;T>U&&(U=T),E>U&&(U=E);const y=(U-S)/2,b=g*2;c[x+b+0]=S+y,c[x+b+1]=y+(Math.abs(S)+y)*E0}}return c}function se(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function ru(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function su(i,t){t.set(i)}function au(i,t,e){let n,r;for(let s=0;s<3;s++){const o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function Ss(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Tr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const An=32,C0=(i,t)=>i.candidate-t.candidate,Vn=new Array(An).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Es=new Float32Array(6);function L0(i,t,e,n,r,s){let o=-1,a=0;if(s===of)o=ru(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===y0)o=ru(i),o!==-1&&(a=P0(e,n,r,o));else if(s===S0){const c=Tr(i);let l=io*r;const u=n*6,d=(n+r)*6;for(let h=0;h<3;h++){const m=t[h],p=(t[h+3]-m)/An;if(r<An/4){const f=[...Vn];f.length=r;let _=0;for(let M=u;M<d;M+=6,_++){const T=f[_];T.candidate=e[M+2*h],T.count=0;const{bounds:E,leftCacheBounds:S,rightCacheBounds:U}=T;for(let y=0;y<3;y++)U[y]=1/0,U[y+3]=-1/0,S[y]=1/0,S[y+3]=-1/0,E[y]=1/0,E[y+3]=-1/0;Ss(M,e,E)}f.sort(C0);let g=r;for(let M=0;M<g;M++){const T=f[M];for(;M+1<g&&f[M+1].candidate===T.candidate;)f.splice(M+1,1),g--}for(let M=u;M<d;M+=6){const T=e[M+2*h];for(let E=0;E<g;E++){const S=f[E];T>=S.candidate?Ss(M,e,S.rightCacheBounds):(Ss(M,e,S.leftCacheBounds),S.count++)}}for(let M=0;M<g;M++){const T=f[M],E=T.count,S=r-T.count,U=T.leftCacheBounds,y=T.rightCacheBounds;let b=0;E!==0&&(b=Tr(U)/c);let D=0;S!==0&&(D=Tr(y)/c);const N=iu+io*(b*E+D*S);N<l&&(o=h,l=N,a=T.candidate)}}else{for(let g=0;g<An;g++){const M=Vn[g];M.count=0,M.candidate=m+p+g*p;const T=M.bounds;for(let E=0;E<3;E++)T[E]=1/0,T[E+3]=-1/0}for(let g=u;g<d;g+=6){let E=~~((e[g+2*h]-m)/p);E>=An&&(E=An-1);const S=Vn[E];S.count++,Ss(g,e,S.bounds)}const f=Vn[An-1];su(f.bounds,f.rightCacheBounds);for(let g=An-2;g>=0;g--){const M=Vn[g],T=Vn[g+1];au(M.bounds,T.rightCacheBounds,M.rightCacheBounds)}let _=0;for(let g=0;g<An-1;g++){const M=Vn[g],T=M.count,E=M.bounds,U=Vn[g+1].rightCacheBounds;T!==0&&(_===0?su(E,Es):au(E,Es,Es)),_+=T;let y=0,b=0;_!==0&&(y=Tr(Es)/c);const D=r-_;D!==0&&(b=Tr(U)/c);const N=iu+io*(y*_+b*D);N<l&&(o=h,l=N,a=M.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function P0(i,t,e,n){let r=0;for(let s=t,o=t+e;s<o;s++)r+=i[s*6+n*2];return r/e}class ao{constructor(){this.boundingData=new Float32Array(6)}}function D0(i,t,e,n,r,s){let o=n,a=n+r-1;const c=s.pos,l=s.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let d=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=d}for(let u=0;u<6;u++){let d=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=d}o++,a--}else return o}}function U0(i,t,e,n,r,s){let o=n,a=n+r-1;const c=s.pos,l=s.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){let u=i[o];i[o]=i[a],i[a]=u;for(let d=0;d<6;d++){let h=e[o*6+d];e[o*6+d]=e[a*6+d],e[a*6+d]=h}o++,a--}else return o}}function Ne(i,t){return t[i+15]===65535}function Ge(i,t){return t[i+6]}function Je(i,t){return t[i+14]}function Qe(i){return i+8}function tn(i,t){return t[i+6]}function uf(i,t){return t[i+7]}let ff,Lr,Vs,hf;const I0=Math.pow(2,32);function Uo(i){return"count"in i?1:1+Uo(i.left)+Uo(i.right)}function N0(i,t,e){return ff=new Float32Array(e),Lr=new Uint32Array(e),Vs=new Uint16Array(e),hf=new Uint8Array(e),Io(i,t)}function Io(i,t){const e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)ff[e+o]=s[o];if(r)if(t.buffer){const o=t.buffer;hf.set(new Uint8Array(o),i);for(let a=i,c=i+o.byteLength;a<c;a+=Ir){const l=a/2;Ne(l,Vs)||(Lr[a/4+6]+=e)}return i+o.byteLength}else{const o=t.offset,a=t.count;return Lr[e+6]=o,Vs[n+14]=a,Vs[n+15]=fa,i+Ir}else{const o=t.left,a=t.right,c=t.splitAxis;let l;if(l=Io(i+Ir,o),l/4>I0)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Lr[e+6]=l/4,l=Io(l,a),Lr[e+7]=c,l}}function F0(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,r=n?4:2,s=t?new SharedArrayBuffer(e*r):new ArrayBuffer(e*r),o=n?new Uint32Array(s):new Uint16Array(s);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function O0(i,t,e,n,r){const{maxDepth:s,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=r,d=i._indirectBuffer,h=i.geometry,m=h.index?h.index.array:null,v=u?U0:D0,x=dr(h),p=new Float32Array(6);let f=!1;const _=new ao;return so(t,e,n,_.boundingData,p),M(_,e,n,p),_;function g(T){l&&l(T/x)}function M(T,E,S,U=null,y=0){if(!f&&y>=s&&(f=!0,o&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),S<=a||y>=s)return g(E+S),T.offset=E,T.count=S,T;const b=L0(T.boundingData,U,t,E,S,c);if(b.axis===-1)return g(E+S),T.offset=E,T.count=S,T;const D=v(d,m,t,E,S,b);if(D===E||D===E+S)g(E+S),T.offset=E,T.count=S;else{T.splitAxis=b.axis;const N=new ao,z=E,P=D-E;T.left=N,so(t,z,P,N.boundingData,p),M(N,z,P,p,y+1);const F=new ao,O=D,q=S-P;T.right=F,so(t,O,q,F.boundingData,p),M(F,O,q,p,y+1)}return T}}function B0(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=F0(e,t.useSharedArrayBuffer),w0(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||A0(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=R0(e),s=t.indirect?cf(e):lf(e);i._roots=s.map(o=>{const a=O0(i,r,o.offset,o.count,t),c=Uo(a),l=new n(Ir*c);return N0(0,a,l),l})}class Nn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const c=t[s][e];n=c<n?c:n,r=c>r?c:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],c=t.dot(a);n=c<n?c:n,r=c>r?c:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}Nn.prototype.setFromBox=function(){const i=new C;return function(e,n){const r=n.min,s=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=r.x*c+s.x*(1-c),i.y=r.y*l+s.y*(1-l),i.z=r.z*u+s.z*(1-u);const d=e.dot(i);o=Math.min(d,o),a=Math.max(d,a)}this.min=o,this.max=a}}();const z0=function(){const i=new C,t=new C,e=new C;return function(r,s,o){const a=r.start,c=i,l=s.start,u=t;e.subVectors(a,l),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const d=e.dot(u),h=u.dot(c),m=u.dot(u),v=e.dot(c),p=c.dot(c)*m-h*h;let f,_;p!==0?f=(d*h-v*m)/p:f=0,_=(d+f*h)/m,o.x=f,o.y=_}}(),rc=function(){const i=new mt,t=new C,e=new C;return function(r,s,o,a){z0(r,s,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){r.at(c,o),s.at(l,a);return}else if(c>=0&&c<=1){l<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=r.start:u=r.end;let d;l<0?d=s.start:d=s.end;const h=t,m=e;if(r.closestPointToPoint(d,!0,t),s.closestPointToPoint(u,!0,e),h.distanceToSquared(d)<=m.distanceToSquared(u)){o.copy(h),a.copy(d);return}else{o.copy(u),a.copy(m);return}}}}(),H0=function(){const i=new C,t=new C,e=new mn,n=new Dn;return function(s,o){const{radius:a,center:c}=s,{a:l,b:u,c:d}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a||(n.start=l,n.end=d,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a)||(n.start=u,n.end=d,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a))return!0;const x=o.getPlane(e);if(Math.abs(x.distanceToPoint(c))<=a){const f=x.projectPoint(c,t);if(o.containsPoint(f))return!0}return!1}}(),V0=1e-15;function oo(i){return Math.abs(i)<V0}class dn extends Se{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new C),this.satBounds=new Array(4).fill().map(()=>new Nn),this.points=[this.a,this.b,this.c],this.sphere=new ur,this.plane=new mn,this.needsUpdate=!0}intersectsSphere(t){return H0(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],c=o[0];this.getNormal(a),c.setFromPoints(a,r);const l=s[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,r);const d=s[2],h=o[2];d.subVectors(e,n),h.setFromPoints(d,r);const m=s[3],v=o[3];m.subVectors(n,t),v.setFromPoints(m,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}dn.prototype.closestPointToSegment=function(){const i=new C,t=new C,e=new Dn;return function(r,s=null,o=null){const{start:a,end:c}=r,l=this.points;let u,d=1/0;for(let h=0;h<3;h++){const m=(h+1)%3;e.start.copy(l[h]),e.end.copy(l[m]),rc(e,r,i,t),u=i.distanceToSquared(t),u<d&&(d=u,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<d&&(d=u,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<d&&(d=u,s&&s.copy(i),o&&o.copy(c)),Math.sqrt(d)}}();dn.prototype.intersectsTriangle=function(){const i=new dn,t=new Array(3),e=new Array(3),n=new Nn,r=new Nn,s=new C,o=new C,a=new C,c=new C,l=new C,u=new Dn,d=new Dn,h=new Dn,m=new C;function v(x,p,f){const _=x.points;let g=0,M=-1;for(let T=0;T<3;T++){const{start:E,end:S}=u;E.copy(_[T]),S.copy(_[(T+1)%3]),u.delta(o);const U=oo(p.distanceToPoint(E));if(oo(p.normal.dot(o))&&U){f.copy(u),g=2;break}const y=p.intersectLine(u,m);if(!y&&U&&m.copy(E),(y||U)&&!oo(m.distanceTo(S))){if(g<=1)(g===1?f.start:f.end).copy(m),U&&(M=g);else if(g>=2){(M===1?f.start:f.end).copy(m),g=2;break}if(g++,g===2&&M===-1)break}}return g}return function(p,f=null,_=!1){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(i.copy(p),i.update(),p=i);const g=this.plane,M=p.plane;if(Math.abs(g.normal.dot(M.normal))>1-1e-10){const T=this.satBounds,E=this.satAxes;e[0]=p.a,e[1]=p.b,e[2]=p.c;for(let y=0;y<4;y++){const b=T[y],D=E[y];if(n.setFromPoints(D,e),b.isSeparated(n))return!1}const S=p.satBounds,U=p.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let y=0;y<4;y++){const b=S[y],D=U[y];if(n.setFromPoints(D,t),b.isSeparated(n))return!1}for(let y=0;y<4;y++){const b=E[y];for(let D=0;D<4;D++){const N=U[D];if(s.crossVectors(b,N),n.setFromPoints(s,t),r.setFromPoints(s,e),n.isSeparated(r))return!1}}return f&&(_||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),f.start.set(0,0,0),f.end.set(0,0,0)),!0}else{const T=v(this,M,d);if(T===1&&p.containsPoint(d.end))return f&&(f.start.copy(d.end),f.end.copy(d.end)),!0;if(T!==2)return!1;const E=v(p,g,h);if(E===1&&this.containsPoint(h.end))return f&&(f.start.copy(h.end),f.end.copy(h.end)),!0;if(E!==2)return!1;if(d.delta(a),h.delta(c),a.dot(c)<0){let z=h.start;h.start=h.end,h.end=z}const S=d.start.dot(a),U=d.end.dot(a),y=h.start.dot(a),b=h.end.dot(a),D=U<y,N=S<b;return S!==b&&y!==U&&D===N?!1:(f&&(l.subVectors(d.start,h.start),l.dot(a)>0?f.start.copy(d.start):f.start.copy(h.start),l.subVectors(d.end,h.end),l.dot(a)<0?f.end.copy(d.end):f.end.copy(h.end)),!0)}}}();dn.prototype.distanceToPoint=function(){const i=new C;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();dn.prototype.distanceToTriangle=function(){const i=new C,t=new C,e=["a","b","c"],n=new Dn,r=new Dn;return function(o,a=null,c=null){const l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let d=0;d<3;d++){let h;const m=e[d],v=o[m];this.closestPointToPoint(v,i),h=v.distanceToSquared(i),h<u&&(u=h,a&&a.copy(i),c&&c.copy(v));const x=this[m];o.closestPointToPoint(x,i),h=x.distanceToSquared(i),h<u&&(u=h,a&&a.copy(x),c&&c.copy(i))}for(let d=0;d<3;d++){const h=e[d],m=e[(d+1)%3];n.set(this[h],this[m]);for(let v=0;v<3;v++){const x=e[v],p=e[(v+1)%3];r.set(o[x],o[p]),rc(n,r,i,t);const f=i.distanceToSquared(t);f<u&&(u=f,a&&a.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}}();class Ue{constructor(t,e,n){this.isOrientedBox=!0,this.min=new C,this.max=new C,this.matrix=new qt,this.invMatrix=new qt,this.points=new Array(8).fill().map(()=>new C),this.satAxes=new Array(3).fill().map(()=>new C),this.satBounds=new Array(3).fill().map(()=>new Nn),this.alignedSatBounds=new Array(3).fill().map(()=>new Nn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ue.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){const h=1*l|2*u|4*d,m=r[h];m.x=l?n.x:e.x,m.y=u?n.y:e.y,m.z=d?n.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let l=0;l<3;l++){const u=o[l],d=s[l],h=1<<l,m=r[h];u.subVectors(a,m),d.setFromPoints(u,r)}const c=this.alignedSatBounds;c[0].setFromPointsField(r,"x"),c[1].setFromPointsField(r,"y"),c[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Ue.prototype.intersectsBox=function(){const i=new Nn;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=o[c],u=s[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}}();Ue.prototype.intersectsTriangle=function(){const i=new dn,t=new Array(3),e=new Nn,n=new Nn,r=new C;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let h=0;h<3;h++){const m=a[h],v=c[h];if(e.setFromPoints(v,t),m.isSeparated(e))return!1}const l=o.satBounds,u=o.satAxes,d=this.points;for(let h=0;h<3;h++){const m=l[h],v=u[h];if(e.setFromPoints(v,d),m.isSeparated(e))return!1}for(let h=0;h<3;h++){const m=c[h];for(let v=0;v<4;v++){const x=u[v];if(r.crossVectors(m,x),e.setFromPoints(r,t),n.setFromPoints(r,d),e.isSeparated(n))return!1}}return!0}}();Ue.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Ue.prototype.distanceToPoint=function(){const i=new C;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Ue.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Dn),e=new Array(12).fill().map(()=>new Dn),n=new C,r=new C;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),c&&c.copy(n),l&&l.copy(r)),0;const u=a*a,d=o.min,h=o.max,m=this.points;let v=1/0;for(let p=0;p<8;p++){const f=m[p];r.copy(f).clamp(d,h);const _=f.distanceToSquared(r);if(_<v&&(v=_,c&&c.copy(f),l&&l.copy(r),_<u))return Math.sqrt(_)}let x=0;for(let p=0;p<3;p++)for(let f=0;f<=1;f++)for(let _=0;_<=1;_++){const g=(p+1)%3,M=(p+2)%3,T=f<<g|_<<M,E=1<<p|f<<g|_<<M,S=m[T],U=m[E];t[x].set(S,U);const b=i[p],D=i[g],N=i[M],z=e[x],P=z.start,F=z.end;P[b]=d[b],P[D]=f?d[D]:h[D],P[N]=_?d[N]:h[D],F[b]=h[b],F[D]=f?d[D]:h[D],F[N]=_?d[N]:h[D],x++}for(let p=0;p<=1;p++)for(let f=0;f<=1;f++)for(let _=0;_<=1;_++){r.x=p?h.x:d.x,r.y=f?h.y:d.y,r.z=_?h.z:d.z,this.closestPointToPoint(r,n);const g=r.distanceToSquared(n);if(g<v&&(v=g,c&&c.copy(n),l&&l.copy(r),g<u))return Math.sqrt(g)}for(let p=0;p<12;p++){const f=t[p];for(let _=0;_<12;_++){const g=e[_];rc(f,g,n,r);const M=n.distanceToSquared(r);if(M<v&&(v=M,c&&c.copy(n),l&&l.copy(r),M<u))return Math.sqrt(M)}}return Math.sqrt(v)}}();class sc{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class G0 extends sc{constructor(){super(()=>new dn)}}const en=new G0;class k0{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const te=new k0;let Xn,Qi;const Hi=[],Ts=new sc(()=>new ee);function W0(i,t,e,n,r,s){Xn=Ts.getPrimitive(),Qi=Ts.getPrimitive(),Hi.push(Xn,Qi),te.setBuffer(i._roots[t]);const o=No(0,i.geometry,e,n,r,s);te.clearBuffer(),Ts.releasePrimitive(Xn),Ts.releasePrimitive(Qi),Hi.pop(),Hi.pop();const a=Hi.length;return a>0&&(Qi=Hi[a-1],Xn=Hi[a-2]),o}function No(i,t,e,n,r=null,s=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=te;let u=i*2;if(Ne(u,c)){const v=Ge(i,l),x=Je(u,c);return se(i,a,Xn),n(v,x,!1,o,s+i,Xn)}else{let N=function(P){const{uint16Array:F,uint32Array:O}=te;let q=P*2;for(;!Ne(q,F);)P=Qe(P),q=P*2;return Ge(P,O)},z=function(P){const{uint16Array:F,uint32Array:O}=te;let q=P*2;for(;!Ne(q,F);)P=tn(P,O),q=P*2;return Ge(P,O)+Je(q,F)};var h=N,m=z;const v=Qe(i),x=tn(i,l);let p=v,f=x,_,g,M,T;if(r&&(M=Xn,T=Qi,se(p,a,M),se(f,a,T),_=r(M),g=r(T),g<_)){p=x,f=v;const P=_;_=g,g=P,M=T}M||(M=Xn,se(p,a,M));const E=Ne(p*2,c),S=e(M,E,_,o+1,s+p);let U;if(S===nu){const P=N(p),O=z(p)-P;U=n(P,O,!0,o+1,s+p,M)}else U=S&&No(p,t,e,n,r,s,o+1);if(U)return!0;T=Qi,se(f,a,T);const y=Ne(f*2,c),b=e(T,y,g,o+1,s+f);let D;if(b===nu){const P=N(f),O=z(f)-P;D=n(P,O,!0,o+1,s+f,T)}else D=b&&No(f,t,e,n,r,s,o+1);return!!D}}const br=new C,co=new C;function X0(i,t,e={},n=0,r=1/0){const s=n*n,o=r*r;let a=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(br.copy(t).clamp(u.min,u.max),br.distanceToSquared(t)),intersectsBounds:(u,d,h)=>h<a&&h<o,intersectsTriangle:(u,d)=>{u.closestPointToPoint(t,br);const h=t.distanceToSquared(br);return h<a&&(co.copy(br),a=h,c=d),h<s}}),a===1/0)return null;const l=Math.sqrt(a);return e.point?e.point.copy(co):e.point=co.clone(),e.distance=l,e.faceIndex=c,e}const Vi=new C,Gi=new C,ki=new C,bs=new mt,As=new mt,ws=new mt,ou=new C,cu=new C,lu=new C,Rs=new C;function q0(i,t,e,n,r,s,o,a){let c;if(s===Pe?c=i.intersectTriangle(n,e,t,!0,r):c=i.intersectTriangle(t,e,n,s!==Ke,r),c===null)return null;const l=i.origin.distanceTo(r);return l<o||l>a?null:{distance:l,point:r.clone()}}function Y0(i,t,e,n,r,s,o,a,c,l,u){Vi.fromBufferAttribute(t,s),Gi.fromBufferAttribute(t,o),ki.fromBufferAttribute(t,a);const d=q0(i,Vi,Gi,ki,Rs,c,l,u);if(d){n&&(bs.fromBufferAttribute(n,s),As.fromBufferAttribute(n,o),ws.fromBufferAttribute(n,a),d.uv=Se.getInterpolation(Rs,Vi,Gi,ki,bs,As,ws,new mt)),r&&(bs.fromBufferAttribute(r,s),As.fromBufferAttribute(r,o),ws.fromBufferAttribute(r,a),d.uv1=Se.getInterpolation(Rs,Vi,Gi,ki,bs,As,ws,new mt)),e&&(ou.fromBufferAttribute(e,s),cu.fromBufferAttribute(e,o),lu.fromBufferAttribute(e,a),d.normal=Se.getInterpolation(Rs,Vi,Gi,ki,ou,cu,lu,new C),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:o,c:a,normal:new C,materialIndex:0};Se.getNormal(Vi,Gi,ki,h.normal),d.face=h,d.faceIndex=s}return d}function ha(i,t,e,n,r,s,o){const a=n*3;let c=a+0,l=a+1,u=a+2;const d=i.index;i.index&&(c=d.getX(c),l=d.getX(l),u=d.getX(u));const{position:h,normal:m,uv:v,uv1:x}=i.attributes,p=Y0(e,h,m,v,x,c,l,u,t,s,o);return p?(p.faceIndex=n,r&&r.push(p),p):null}function he(i,t,e,n){const r=i.a,s=i.b,o=i.c;let a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(c),s.y=n.getY(c),s.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function j0(i,t,e,n,r,s,o,a){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,d=n+r;u<d;u++)ha(c,t,e,u,s,o,a)}function $0(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:c}=i;let l=1/0,u=null;for(let d=n,h=n+r;d<h;d++){let m;m=ha(a,t,e,d,null,s,o),m&&m.distance<l&&(u=m,l=m.distance)}return u}function K0(i,t,e,n,r,s,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,d=t+i;u<d;u++){let h;if(h=u,he(o,h*3,c,l),o.needsUpdate=!0,n(o,h,r,s))return!0}return!1}function Z0(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,c,l=0;const u=i._roots;for(let h=0,m=u.length;h<m;h++)s=u[h],o=new Uint32Array(s),a=new Uint16Array(s),c=new Float32Array(s),d(0,l),l+=s.byteLength;function d(h,m,v=!1){const x=h*2;if(a[x+15]===fa){const f=o[h+6],_=a[x+14];let g=1/0,M=1/0,T=1/0,E=-1/0,S=-1/0,U=-1/0;for(let y=3*f,b=3*(f+_);y<b;y++){let D=n[y];const N=r.getX(D),z=r.getY(D),P=r.getZ(D);N<g&&(g=N),N>E&&(E=N),z<M&&(M=z),z>S&&(S=z),P<T&&(T=P),P>U&&(U=P)}return c[h+0]!==g||c[h+1]!==M||c[h+2]!==T||c[h+3]!==E||c[h+4]!==S||c[h+5]!==U?(c[h+0]=g,c[h+1]=M,c[h+2]=T,c[h+3]=E,c[h+4]=S,c[h+5]=U,!0):!1}else{const f=h+8,_=o[h+6],g=f+m,M=_+m;let T=v,E=!1,S=!1;t?T||(E=t.has(g),S=t.has(M),T=!E&&!S):(E=!0,S=!0);const U=T||E,y=T||S;let b=!1;U&&(b=d(f,m,T));let D=!1;y&&(D=d(_,m,T));const N=b||D;if(N)for(let z=0;z<3;z++){const P=f+z,F=_+z,O=c[P],q=c[P+3],Y=c[F],j=c[F+3];c[h+z]=O<Y?O:Y,c[h+z+3]=q>j?q:j}return N}}}function Zn(i,t,e,n,r){let s,o,a,c,l,u;const d=1/e.direction.x,h=1/e.direction.y,m=1/e.direction.z,v=e.origin.x,x=e.origin.y,p=e.origin.z;let f=t[i],_=t[i+3],g=t[i+1],M=t[i+3+1],T=t[i+2],E=t[i+3+2];return d>=0?(s=(f-v)*d,o=(_-v)*d):(s=(_-v)*d,o=(f-v)*d),h>=0?(a=(g-x)*h,c=(M-x)*h):(a=(M-x)*h,c=(g-x)*h),s>c||a>o||((a>s||isNaN(s))&&(s=a),(c<o||isNaN(o))&&(o=c),m>=0?(l=(T-p)*m,u=(E-p)*m):(l=(E-p)*m,u=(T-p)*m),s>u||l>o)?!1:((l>s||s!==s)&&(s=l),(u<o||o!==o)&&(o=u),s<=r&&o>=n)}function J0(i,t,e,n,r,s,o,a){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,d=n+r;u<d;u++){let h=l?l[u]:u;ha(c,t,e,h,s,o,a)}}function Q0(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:c}=i;let l=1/0,u=null;for(let d=n,h=n+r;d<h;d++){let m;m=ha(a,t,e,c?c[d]:d,null,s,o),m&&m.distance<l&&(u=m,l=m.distance)}return u}function tx(i,t,e,n,r,s,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,d=t+i;u<d;u++){let h;if(h=e.resolveTriangleIndex(u),he(o,h*3,c,l),o.needsUpdate=!0,n(o,h,r,s))return!0}return!1}function ex(i,t,e,n,r,s,o){te.setBuffer(i._roots[t]),Fo(0,i,e,n,r,s,o),te.clearBuffer()}function Fo(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:c,uint32Array:l}=te,u=i*2;if(Ne(u,c)){const h=Ge(i,l),m=Je(u,c);j0(t,e,n,h,m,r,s,o)}else{const h=Qe(i);Zn(h,a,n,s,o)&&Fo(h,t,e,n,r,s,o);const m=tn(i,l);Zn(m,a,n,s,o)&&Fo(m,t,e,n,r,s,o)}}const nx=["x","y","z"];function ix(i,t,e,n,r,s){te.setBuffer(i._roots[t]);const o=Oo(0,i,e,n,r,s);return te.clearBuffer(),o}function Oo(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:c}=te;let l=i*2;if(Ne(l,a)){const d=Ge(i,c),h=Je(l,a);return $0(t,e,n,d,h,r,s)}else{const d=uf(i,c),h=nx[d],v=n.direction[h]>=0;let x,p;v?(x=Qe(i),p=tn(i,c)):(x=tn(i,c),p=Qe(i));const _=Zn(x,o,n,r,s)?Oo(x,t,e,n,r,s):null;if(_){const T=_.point[h];if(v?T<=o[p+d]:T>=o[p+d+3])return _}const M=Zn(p,o,n,r,s)?Oo(p,t,e,n,r,s):null;return _&&M?_.distance<=M.distance?_:M:_||M||null}}const Cs=new ee,Wi=new dn,Xi=new dn,Ar=new qt,uu=new Ue,Ls=new Ue;function rx(i,t,e,n){te.setBuffer(i._roots[t]);const r=Bo(0,i,e,n);return te.clearBuffer(),r}function Bo(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=te;let c=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),uu.set(e.boundingBox.min,e.boundingBox.max,n),r=uu),Ne(c,o)){const u=t.geometry,d=u.index,h=u.attributes.position,m=e.index,v=e.attributes.position,x=Ge(i,a),p=Je(c,o);if(Ar.copy(n).invert(),e.boundsTree)return se(i,s,Ls),Ls.matrix.copy(Ar),Ls.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>Ls.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let g=x*3,M=(p+x)*3;g<M;g+=3)if(he(Xi,g,d,h),Xi.needsUpdate=!0,_.intersectsTriangle(Xi))return!0;return!1}});for(let f=x*3,_=(p+x)*3;f<_;f+=3){he(Wi,f,d,h),Wi.a.applyMatrix4(Ar),Wi.b.applyMatrix4(Ar),Wi.c.applyMatrix4(Ar),Wi.needsUpdate=!0;for(let g=0,M=m.count;g<M;g+=3)if(he(Xi,g,m,v),Xi.needsUpdate=!0,Wi.intersectsTriangle(Xi))return!0}}else{const u=i+8,d=a[i+6];return se(u,s,Cs),!!(r.intersectsBox(Cs)&&Bo(u,t,e,n,r)||(se(d,s,Cs),r.intersectsBox(Cs)&&Bo(d,t,e,n,r)))}}const Ps=new qt,lo=new Ue,wr=new Ue,sx=new C,ax=new C,ox=new C,cx=new C;function lx(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),lo.set(t.boundingBox.min,t.boundingBox.max,e),lo.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,d=t.index,h=en.getPrimitive(),m=en.getPrimitive();let v=sx,x=ax,p=null,f=null;r&&(p=ox,f=cx);let _=1/0,g=null,M=null;return Ps.copy(e).invert(),wr.matrix.copy(Ps),i.shapecast({boundsTraverseOrder:T=>lo.distanceToBox(T),intersectsBounds:(T,E,S)=>S<_&&S<o?(E&&(wr.min.copy(T.min),wr.max.copy(T.max),wr.needsUpdate=!0),!0):!1,intersectsRange:(T,E)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:U=>wr.distanceToBox(U),intersectsBounds:(U,y,b)=>b<_&&b<o,intersectsRange:(U,y)=>{for(let b=U,D=U+y;b<D;b++){he(m,3*b,d,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let N=T,z=T+E;N<z;N++){he(h,3*N,l,c),h.needsUpdate=!0;const P=h.distanceToTriangle(m,v,p);if(P<_&&(x.copy(v),f&&f.copy(p),_=P,g=N,M=b),P<s)return!0}}}});{const S=dr(t);for(let U=0,y=S;U<y;U++){he(m,3*U,d,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let b=T,D=T+E;b<D;b++){he(h,3*b,l,c),h.needsUpdate=!0;const N=h.distanceToTriangle(m,v,p);if(N<_&&(x.copy(v),f&&f.copy(p),_=N,g=b,M=U),N<s)return!0}}}}}),en.releasePrimitive(h),en.releasePrimitive(m),_===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=_,n.faceIndex=g,r&&(r.point?r.point.copy(f):r.point=f.clone(),r.point.applyMatrix4(Ps),x.applyMatrix4(Ps),r.distance=x.sub(r.point).length(),r.faceIndex=M),n)}function ux(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,c,l=0;const u=i._roots;for(let h=0,m=u.length;h<m;h++)s=u[h],o=new Uint32Array(s),a=new Uint16Array(s),c=new Float32Array(s),d(0,l),l+=s.byteLength;function d(h,m,v=!1){const x=h*2;if(a[x+15]===fa){const f=o[h+6],_=a[x+14];let g=1/0,M=1/0,T=1/0,E=-1/0,S=-1/0,U=-1/0;for(let y=f,b=f+_;y<b;y++){const D=3*i.resolveTriangleIndex(y);for(let N=0;N<3;N++){let z=D+N;z=n?n[z]:z;const P=r.getX(z),F=r.getY(z),O=r.getZ(z);P<g&&(g=P),P>E&&(E=P),F<M&&(M=F),F>S&&(S=F),O<T&&(T=O),O>U&&(U=O)}}return c[h+0]!==g||c[h+1]!==M||c[h+2]!==T||c[h+3]!==E||c[h+4]!==S||c[h+5]!==U?(c[h+0]=g,c[h+1]=M,c[h+2]=T,c[h+3]=E,c[h+4]=S,c[h+5]=U,!0):!1}else{const f=h+8,_=o[h+6],g=f+m,M=_+m;let T=v,E=!1,S=!1;t?T||(E=t.has(g),S=t.has(M),T=!E&&!S):(E=!0,S=!0);const U=T||E,y=T||S;let b=!1;U&&(b=d(f,m,T));let D=!1;y&&(D=d(_,m,T));const N=b||D;if(N)for(let z=0;z<3;z++){const P=f+z,F=_+z,O=c[P],q=c[P+3],Y=c[F],j=c[F+3];c[h+z]=O<Y?O:Y,c[h+z+3]=q>j?q:j}return N}}}function fx(i,t,e,n,r,s,o){te.setBuffer(i._roots[t]),zo(0,i,e,n,r,s,o),te.clearBuffer()}function zo(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:c,uint32Array:l}=te,u=i*2;if(Ne(u,c)){const h=Ge(i,l),m=Je(u,c);J0(t,e,n,h,m,r,s,o)}else{const h=Qe(i);Zn(h,a,n,s,o)&&zo(h,t,e,n,r,s,o);const m=tn(i,l);Zn(m,a,n,s,o)&&zo(m,t,e,n,r,s,o)}}const hx=["x","y","z"];function dx(i,t,e,n,r,s){te.setBuffer(i._roots[t]);const o=Ho(0,i,e,n,r,s);return te.clearBuffer(),o}function Ho(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:c}=te;let l=i*2;if(Ne(l,a)){const d=Ge(i,c),h=Je(l,a);return Q0(t,e,n,d,h,r,s)}else{const d=uf(i,c),h=hx[d],v=n.direction[h]>=0;let x,p;v?(x=Qe(i),p=tn(i,c)):(x=tn(i,c),p=Qe(i));const _=Zn(x,o,n,r,s)?Ho(x,t,e,n,r,s):null;if(_){const T=_.point[h];if(v?T<=o[p+d]:T>=o[p+d+3])return _}const M=Zn(p,o,n,r,s)?Ho(p,t,e,n,r,s):null;return _&&M?_.distance<=M.distance?_:M:_||M||null}}const Ds=new ee,qi=new dn,Yi=new dn,Rr=new qt,fu=new Ue,Us=new Ue;function px(i,t,e,n){te.setBuffer(i._roots[t]);const r=Vo(0,i,e,n);return te.clearBuffer(),r}function Vo(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=te;let c=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),fu.set(e.boundingBox.min,e.boundingBox.max,n),r=fu),Ne(c,o)){const u=t.geometry,d=u.index,h=u.attributes.position,m=e.index,v=e.attributes.position,x=Ge(i,a),p=Je(c,o);if(Rr.copy(n).invert(),e.boundsTree)return se(i,s,Us),Us.matrix.copy(Rr),Us.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>Us.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let g=x,M=p+x;g<M;g++)if(he(Yi,3*t.resolveTriangleIndex(g),d,h),Yi.needsUpdate=!0,_.intersectsTriangle(Yi))return!0;return!1}});for(let f=x,_=p+x;f<_;f++){const g=t.resolveTriangleIndex(f);he(qi,3*g,d,h),qi.a.applyMatrix4(Rr),qi.b.applyMatrix4(Rr),qi.c.applyMatrix4(Rr),qi.needsUpdate=!0;for(let M=0,T=m.count;M<T;M+=3)if(he(Yi,M,m,v),Yi.needsUpdate=!0,qi.intersectsTriangle(Yi))return!0}}else{const u=i+8,d=a[i+6];return se(u,s,Ds),!!(r.intersectsBox(Ds)&&Vo(u,t,e,n,r)||(se(d,s,Ds),r.intersectsBox(Ds)&&Vo(d,t,e,n,r)))}}const Is=new qt,uo=new Ue,Cr=new Ue,mx=new C,gx=new C,_x=new C,xx=new C;function vx(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),uo.set(t.boundingBox.min,t.boundingBox.max,e),uo.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,d=t.index,h=en.getPrimitive(),m=en.getPrimitive();let v=mx,x=gx,p=null,f=null;r&&(p=_x,f=xx);let _=1/0,g=null,M=null;return Is.copy(e).invert(),Cr.matrix.copy(Is),i.shapecast({boundsTraverseOrder:T=>uo.distanceToBox(T),intersectsBounds:(T,E,S)=>S<_&&S<o?(E&&(Cr.min.copy(T.min),Cr.max.copy(T.max),Cr.needsUpdate=!0),!0):!1,intersectsRange:(T,E)=>{if(t.boundsTree){const S=t.boundsTree;return S.shapecast({boundsTraverseOrder:U=>Cr.distanceToBox(U),intersectsBounds:(U,y,b)=>b<_&&b<o,intersectsRange:(U,y)=>{for(let b=U,D=U+y;b<D;b++){const N=S.resolveTriangleIndex(b);he(m,3*N,d,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let z=T,P=T+E;z<P;z++){const F=i.resolveTriangleIndex(z);he(h,3*F,l,c),h.needsUpdate=!0;const O=h.distanceToTriangle(m,v,p);if(O<_&&(x.copy(v),f&&f.copy(p),_=O,g=z,M=b),O<s)return!0}}}})}else{const S=dr(t);for(let U=0,y=S;U<y;U++){he(m,3*U,d,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let b=T,D=T+E;b<D;b++){const N=i.resolveTriangleIndex(b);he(h,3*N,l,c),h.needsUpdate=!0;const z=h.distanceToTriangle(m,v,p);if(z<_&&(x.copy(v),f&&f.copy(p),_=z,g=b,M=U),z<s)return!0}}}}}),en.releasePrimitive(h),en.releasePrimitive(m),_===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=_,n.faceIndex=g,r&&(r.point?r.point.copy(f):r.point=f.clone(),r.point.applyMatrix4(Is),x.applyMatrix4(Is),r.distance=x.sub(r.point).length(),r.faceIndex=M),n)}function Mx(){return typeof SharedArrayBuffer<"u"}const Nr=new te.constructor,Js=new te.constructor,Gn=new sc(()=>new ee),ji=new ee,$i=new ee,fo=new ee,ho=new ee;let po=!1;function yx(i,t,e,n){if(po)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");po=!0;const r=i._roots,s=t._roots;let o,a=0,c=0;const l=new qt().copy(e).invert();for(let u=0,d=r.length;u<d;u++){Nr.setBuffer(r[u]),c=0;const h=Gn.getPrimitive();se(0,Nr.float32Array,h),h.applyMatrix4(l);for(let m=0,v=s.length;m<v&&(Js.setBuffer(s[u]),o=ln(0,0,e,l,n,a,c,0,0,h),Js.clearBuffer(),c+=s[m].length,!o);m++);if(Gn.releasePrimitive(h),Nr.clearBuffer(),a+=r[u].length,o)break}return po=!1,o}function ln(i,t,e,n,r,s=0,o=0,a=0,c=0,l=null,u=!1){let d,h;u?(d=Js,h=Nr):(d=Nr,h=Js);const m=d.float32Array,v=d.uint32Array,x=d.uint16Array,p=h.float32Array,f=h.uint32Array,_=h.uint16Array,g=i*2,M=t*2,T=Ne(g,x),E=Ne(M,_);let S=!1;if(E&&T)u?S=r(Ge(t,f),Je(t*2,_),Ge(i,v),Je(i*2,x),c,o+t,a,s+i):S=r(Ge(i,v),Je(i*2,x),Ge(t,f),Je(t*2,_),a,s+i,c,o+t);else if(E){const U=Gn.getPrimitive();se(t,p,U),U.applyMatrix4(e);const y=Qe(i),b=tn(i,v);se(y,m,ji),se(b,m,$i);const D=U.intersectsBox(ji),N=U.intersectsBox($i);S=D&&ln(t,y,n,e,r,o,s,c,a+1,U,!u)||N&&ln(t,b,n,e,r,o,s,c,a+1,U,!u),Gn.releasePrimitive(U)}else{const U=Qe(t),y=tn(t,f);se(U,p,fo),se(y,p,ho);const b=l.intersectsBox(fo),D=l.intersectsBox(ho);if(b&&D)S=ln(i,U,e,n,r,s,o,a,c+1,l,u)||ln(i,y,e,n,r,s,o,a,c+1,l,u);else if(b)if(T)S=ln(i,U,e,n,r,s,o,a,c+1,l,u);else{const N=Gn.getPrimitive();N.copy(fo).applyMatrix4(e);const z=Qe(i),P=tn(i,v);se(z,m,ji),se(P,m,$i);const F=N.intersectsBox(ji),O=N.intersectsBox($i);S=F&&ln(U,z,n,e,r,o,s,c,a+1,N,!u)||O&&ln(U,P,n,e,r,o,s,c,a+1,N,!u),Gn.releasePrimitive(N)}else if(D)if(T)S=ln(i,y,e,n,r,s,o,a,c+1,l,u);else{const N=Gn.getPrimitive();N.copy(ho).applyMatrix4(e);const z=Qe(i),P=tn(i,v);se(z,m,ji),se(P,m,$i);const F=N.intersectsBox(ji),O=N.intersectsBox($i);S=F&&ln(y,z,n,e,r,o,s,c,a+1,N,!u)||O&&ln(y,P,n,e,r,o,s,c,a+1,N,!u),Gn.releasePrimitive(N)}}return S}const Ns=new Ue,hu=new ee,Sx={strategy:of,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class ac{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex();let a;return e.cloneBuffers?a={roots:r.map(c=>c.slice()),index:o?o.array.slice():null,indirectBuffer:s?s.slice():null}:a={roots:r,index:o?o.array:null,indirectBuffer:s},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:o}=t,a=new ac(e,{...n,[ro]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const c=e.getIndex();if(c===null){const l=new ve(t.index,1,!1);e.setIndex(l)}else c.array!==r&&(c.array.set(r),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...Sx,[ro]:!1},e),e.useSharedArrayBuffer&&!Mx())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[ro]||(B0(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ee))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?ux:Z0)(this,t)}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,c=0){const l=a*2,u=s[l+15]===fa;if(u){const d=r[a+6],h=s[l+14];t(c,u,new Float32Array(n,a*4,6),d,h)}else{const d=a+Ir/4,h=r[a+6],m=r[a+7];t(c,u,new Float32Array(n,a*4,6),m)||(o(d,c+1),o(h,c+1))}}}raycast(t,e=_n,n=0,r=1/0){const s=this._roots,o=this.geometry,a=[],c=e.isMaterial,l=Array.isArray(e),u=o.groups,d=c?e.side:e,h=this.indirect?fx:ex;for(let m=0,v=s.length;m<v;m++){const x=l?e[u[m].materialIndex].side:d,p=a.length;if(h(this,m,x,t,a,n,r),l){const f=u[m].materialIndex;for(let _=p,g=a.length;_<g;_++)a[_].face.materialIndex=f}}return a}raycastFirst(t,e=_n,n=0,r=1/0){const s=this._roots,o=this.geometry,a=e.isMaterial,c=Array.isArray(e);let l=null;const u=o.groups,d=a?e.side:e,h=this.indirect?dx:ix;for(let m=0,v=s.length;m<v;m++){const x=c?e[u[m].materialIndex].side:d,p=h(this,m,x,t,n,r);p!=null&&(l==null||p.distance<l.distance)&&(l=p,c&&(p.face.materialIndex=u[m].materialIndex))}return l}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?px:rx;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){const e=en.getPrimitive(),n=this.indirect?tx:K0;let{boundsTraverseOrder:r,intersectsBounds:s,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const d=o;o=(h,m,v,x,p)=>d(h,m,v,x,p)?!0:n(h,m,this,a,v,x,e)}else o||(a?o=(d,h,m,v)=>n(d,h,this,a,m,v,e):o=(d,h,m)=>m);let c=!1,l=0;const u=this._roots;for(let d=0,h=u.length;d<h;d++){const m=u[d];if(c=W0(this,d,s,o,r,l),c)break;l+=m.byteLength}return en.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=en.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?v=>{const x=this.resolveTriangleIndex(v);he(o,x*3,a,c)}:v=>{he(o,v*3,a,c)},u=en.getPrimitive(),d=t.geometry.index,h=t.geometry.attributes.position,m=t.indirect?v=>{const x=t.resolveTriangleIndex(v);he(u,x*3,d,h)}:v=>{he(u,v*3,d,h)};if(s){const v=(x,p,f,_,g,M,T,E)=>{for(let S=f,U=f+_;S<U;S++){m(S),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let y=x,b=x+p;y<b;y++)if(l(y),o.needsUpdate=!0,s(o,u,y,S,g,M,T,E))return!0}return!1};if(r){const x=r;r=function(p,f,_,g,M,T,E,S){return x(p,f,_,g,M,T,E,S)?!0:v(p,f,_,g,M,T,E,S)}}else r=v}return yx(this,t,e,r)}intersectsBox(t,e){return Ns.set(t.min,t.max,e),Ns.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Ns.intersectsBox(n),intersectsTriangle:n=>Ns.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?vx:lx)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return X0(this,t,e,n,r)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{se(0,new Float32Array(n),hu),t.union(hu)}),t}}function du(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const Fs=new fr,pu=new C,mu=new qt,Ex=Ee.prototype.raycast,gu=new C;function Tx(i,t){if(this.geometry.boundsTree){if(this.material===void 0)return;mu.copy(this.matrixWorld).invert(),Fs.copy(i.ray).applyMatrix4(mu),wx(this.matrixWorld,gu),pu.copy(Fs.direction).multiply(gu);const e=pu.length(),n=i.near/e,r=i.far/e,s=this.geometry.boundsTree;if(i.firstHitOnly===!0){const o=du(s.raycastFirst(Fs,this.material,n,r),this,i);o&&t.push(o)}else{const o=s.raycast(Fs,this.material,n,r);for(let a=0,c=o.length;a<c;a++){const l=du(o[a],this,i);l&&t.push(l)}}}else Ex.call(this,i,t)}function bx(i){return this.boundsTree=new ac(this,i),this.boundsTree}function Ax(){this.boundsTree=null}function wx(i,t){const e=i.elements,n=t.set(e[0],e[1],e[2]).length(),r=t.set(e[4],e[5],e[6]).length(),s=t.set(e[8],e[9],e[10]).length();return t.set(n,r,s)}class Rx{parse(t,e={}){e=Object.assign({binary:!1},e);const n=e.binary,r=[];let s=0;t.traverse(function(f){if(f.isMesh){const _=f.geometry,g=_.index,M=_.getAttribute("position");s+=g!==null?g.count/3:M.count/3,r.push({object3d:f,geometry:_})}});let o,a=80;if(n===!0){const f=s*2+s*3*4*4+80+4,_=new ArrayBuffer(f);o=new DataView(_),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const c=new C,l=new C,u=new C,d=new C,h=new C,m=new C;for(let f=0,_=r.length;f<_;f++){const g=r[f].object3d,M=r[f].geometry,T=M.index,E=M.getAttribute("position");if(T!==null)for(let S=0;S<T.count;S+=3){const U=T.getX(S+0),y=T.getX(S+1),b=T.getX(S+2);v(U,y,b,E,g)}else for(let S=0;S<E.count;S+=3){const U=S+0,y=S+1,b=S+2;v(U,y,b,E,g)}}return n===!1&&(o+=`endsolid exported
`),o;function v(f,_,g,M,T){c.fromBufferAttribute(M,f),l.fromBufferAttribute(M,_),u.fromBufferAttribute(M,g),T.isSkinnedMesh===!0&&(T.applyBoneTransform(f,c),T.applyBoneTransform(_,l),T.applyBoneTransform(g,u)),c.applyMatrix4(T.matrixWorld),l.applyMatrix4(T.matrixWorld),u.applyMatrix4(T.matrixWorld),x(c,l,u),p(c),p(l),p(u),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function x(f,_,g){d.subVectors(g,_),h.subVectors(f,_),d.cross(h).normalize(),m.copy(d).normalize(),n===!0?(o.setFloat32(a,m.x,!0),a+=4,o.setFloat32(a,m.y,!0),a+=4,o.setFloat32(a,m.z,!0),a+=4):(o+="	facet normal "+m.x+" "+m.y+" "+m.z+`
`,o+=`		outer loop
`)}function p(f){n===!0?(o.setFloat32(a,f.x,!0),a+=4,o.setFloat32(a,f.y,!0),a+=4,o.setFloat32(a,f.z,!0),a+=4):o+="			vertex "+f.x+" "+f.y+" "+f.z+`
`}}}Ee.prototype.raycast=Tx;ce.prototype.computeBoundsTree=bx;ce.prototype.disposeBoundsTree=Ax;let df=!1;function pf(i){typeof requestIdleCallback<"u"?requestIdleCallback(()=>i(),{timeout:1200}):setTimeout(i,0)}let or=0,mo=null;function da(i){const t=i==null?void 0:i.geometry;if(t){if(t.boundsTree){i.userData._bvhReady=!0;return}i.userData._bvhBuilding||(i.userData._bvhBuilding=!0,pf(()=>{try{t.computeBoundsTree({maxLeafTris:10}),i.userData._bvhReady=!0}catch{i.userData._bvhReady=!1}finally{i.userData._bvhBuilding=!1}}))}}function mf(i,t=0){mo&&clearTimeout(mo),mo=setTimeout(()=>{pf(()=>{i===or&&ov(i)})},t)}let go=null;function pa(i=150){go&&clearTimeout(go),or++;const t=or;go=setTimeout(()=>{if(De.children.filter(n=>n.visible).length<2){Gs=!1;return}try{Rf(),mf(t,0)}catch{}},i)}let Gs=!1,Ye=null,_o=null;function Cx(){Ye||(Ye=document.createElement("div"),Ye.id="collisionToast",Ye.style.cssText=`
    position: fixed; top: 14px; right: 14px; z-index: 9999;
    background: #cc3333; color: white; padding: 12px 16px;
    border-radius: 8px; font-size: 13px; font-weight: 600;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3); opacity: 0;
    transform: translateY(-6px); transition: opacity 0.2s ease, transform 0.2s ease;
    pointer-events: none;
  `,document.body.appendChild(Ye))}function Fe(i="⚠️ Colisión detectada",t=1800){Cx(),Ye.innerHTML=i,Ye.style.opacity="0",Ye.style.transform="translateY(-6px)",requestAnimationFrame(()=>{Ye.style.opacity="1",Ye.style.transform="translateY(0)"}),_o&&clearTimeout(_o),_o=setTimeout(()=>{Ye.style.opacity="0",Ye.style.transform="translateY(-6px)"},t)}const Jn=document.getElementById("canvas"),gf=document.getElementById("drop"),_f=document.getElementById("fileInput"),Lx=document.getElementById("btnLoad"),Px=document.getElementById("btnSave"),_u=document.getElementById("btnTheme"),Dx=document.getElementById("btnScreenshot"),xf=document.getElementById("btnAlign"),Ux=document.getElementById("count"),Ix=document.getElementById("modelsList");document.getElementById("panelSub");const Nx=document.getElementById("viewOclusal"),Fx=document.getElementById("viewFrontal"),Ox=document.getElementById("viewLatD"),Bx=document.getElementById("viewLatI"),zx=document.getElementById("viewInferior"),vf=document.getElementById("btnMeasure"),Hx=document.getElementById("btnClearMeasures"),Vx=document.getElementById("measureHint"),Go=document.getElementById("measureList"),ko=document.getElementById("btnInterference"),Mf=document.getElementById("interferencePanel"),yf=document.getElementById("severityFilter"),Gx=document.getElementById("btnShare"),Wo=document.getElementById("shareModal"),kx=document.getElementById("closeModal"),xu=document.getElementById("shareStatus"),vu=document.getElementById("shareResult"),Sf=document.getElementById("shareLink"),xo=document.getElementById("btnCopyLink"),Wx=document.getElementById("alignPanel"),ks=document.getElementById("alignInstructions"),Xx=document.getElementById("btnCancelAlign");let Pr="dark";document.documentElement.dataset.theme=Pr;_u.addEventListener("click",()=>{Pr=Pr==="dark"?"light":"dark",document.documentElement.dataset.theme=Pr,_u.innerHTML=Pr==="dark"?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'});const pr=new tf({canvas:Jn,antialias:!0,preserveDrawingBuffer:!0});pr.setPixelRatio(Math.min(window.devicePixelRatio,2));const sn=new Z_;sn.background=new Rt(6118749);const ke=new $e(50,1,.01,5e3);ke.position.set(0,60,140);const rn=new f0(ke,pr.domElement);rn.enableDamping=!0;rn.dampingFactor=.08;rn.screenSpacePanning=!0;rn.minPolarAngle=-1/0;rn.maxPolarAngle=1/0;rn.minAzimuthAngle=-1/0;rn.maxAzimuthAngle=1/0;sn.add(new a0(16777215,2241365,.9));const Ef=new ic(16777215,.95);Ef.position.set(80,140,60);sn.add(Ef);const Tf=new ic(16777215,.22);Tf.position.set(-40,-120,-20);sn.add(Tf);const De=new Pn;sn.add(De);const qx=new l0(16777215,.85);sn.add(qx);const Yx=new ic(16777215,.1);ke.add(Yx);sn.add(ke);const jx=new h0,$x=new x0,Kx=new v0;let bf=1,oc=!1,Rn=[],Cn=[],Ws=null,ci=null;const Qs=new Pn;sn.add(Qs);function ma(i){if(oc=i,xf.classList.toggle("active",i),Wx.style.display=i?"block":"none",i)ks.innerHTML="Haz click en el <b>1º punto</b> del modelo de Referencia";else for(Rn=[],Cn=[],Ws=null,ci=null;Qs.children.length>0;){const t=Qs.children.pop();t.geometry.dispose(),t.material.dispose()}}function Mu(i,t){const e=new ua(1.2,16,16),n=new zr({color:t,depthTest:!1,transparent:!0,opacity:.9}),r=new Ee(e,n);r.position.copy(i),Qs.add(r)}function Zx(i){const t=i.point.clone(),e=i.object;if(Rn.length<3){if(Rn.length===0)Ws=e;else if(e!==Ws){Fe("⚠️ Selecciona en el MISMO modelo",2500);return}Rn.push(t),Mu(t,16724787),Rn.length===3?ks.innerHTML="Haz click en los <b>mismos 3 puntos</b> del modelo a MOVER":ks.innerHTML=`Punto <b>${Rn.length+1}/3</b> en el modelo REFERENCIA`}else if(Cn.length<3){if(Cn.length===0){if(e===Ws){Fe("⚠️ Selecciona el OTRO modelo para moverlo",2500);return}ci=e}else if(e!==ci){Fe("⚠️ Selecciona en el MISMO modelo",2500);return}if(Cn.push(t),Mu(t,3377407),Cn.length===3)try{Jx()}catch{Fe("❌ Error. Intenta con puntos más separados.",3e3),ma(!1)}else ks.innerHTML=`Punto <b>${Cn.length+1}/3</b> en el modelo a MOVER`}}function Jx(){function i(r,s,o){const a=new C().subVectors(s,r).normalize(),c=new C().subVectors(o,r),l=new C().crossVectors(a,c).normalize(),u=new C().crossVectors(l,a).normalize(),d=new qt().makeBasis(a,u,l);return d.setPosition(r),d}const t=i(Rn[0],Rn[1],Rn[2]),e=i(Cn[0],Cn[1],Cn[2]),n=new qt().multiplyMatrices(t,e.invert());ci.geometry.applyMatrix4(n),ci.geometry.computeVertexNormals(),ci.geometry.disposeBoundsTree(),da(ci),Fe("✅ Modelos alineados correctamente",3e3),pa(800),ma(!1)}xf.addEventListener("click",()=>{qn&&Lf(!1),ma(!oc)});Xx.addEventListener("click",()=>ma(!1));const ta=new af,nr=new mt;let fe=null;const cr=new Map;function Xo(i,t){var n;const e=cr.get((n=i==null?void 0:i.userData)==null?void 0:n.id);e&&e.classList.toggle("selected",!!t)}function qo(i,t){!i||!i.material||(i.userData._orig||(i.userData._orig={emissive:i.material.emissive?i.material.emissive.clone():new Rt(0),emissiveIntensity:i.material.emissiveIntensity??0}),i.material.emissive||(i.material.emissive=new Rt(0)),t?(i.material.emissive.setHex(31436),i.material.emissiveIntensity=.3):(i.material.emissive.copy(i.userData._orig.emissive),i.material.emissiveIntensity=i.userData._orig.emissiveIntensity))}function Qx(i){const t=cr.get(i.userData.id);if(!t)return;const e=t.querySelector('[data-action="toggle"]');e&&(i.visible?(e.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',e.classList.remove("ghost")):(e.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',e.classList.add("ghost")))}function Af(i){if(fe!==i&&(fe&&(qo(fe,!1),Xo(fe,!1)),fe=i,fe)){qo(fe,!0),Xo(fe,!0);const t=cr.get(fe.userData.id);t&&t.scrollIntoView({block:"nearest",behavior:"smooth"})}}function wf(){fe&&(qo(fe,!1),Xo(fe,!1),fe=null)}function tv(i,t){if(!(i!=null&&i.material))return;const e=Math.max(.05,Math.min(1,t));i.material.opacity=e,i.material.transparent=e<.999,i.material.depthWrite=e>=.999,i.material.needsUpdate=!0,i.userData.opacity=e}const ev=[{name:"Original",hex:13621503},{name:"Blanco",hex:16777215},{name:"Amarillo",hex:16765952},{name:"Rojo",hex:16726843},{name:"Verde",hex:3462041},{name:"Azul",hex:3900150},{name:"Morado",hex:11032055},{name:"Naranja",hex:16486972}];function nv(i,t){var e,n;i!=null&&i.material&&(i.userData.baseColorHex==null&&(i.userData.baseColorHex=((n=(e=i.material.color)==null?void 0:e.getHex)==null?void 0:n.call(e))??13621503),i.material.color.setHex(t),i.userData.colorHex=t)}let Un=!1;const Ve=new Map,ea=new Pn;sn.add(ea);let hn=[],Br="all";const iv={MODERADA:.5};function rv(){const i=document.createElement("canvas");i.width=64,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255, 50, 50, 1)"),e.addColorStop(.75,"rgba(255, 50, 50, 1)"),e.addColorStop(1,"rgba(255, 50, 50, 0)"),t.fillStyle=e,t.beginPath(),t.arc(32,32,32,0,Math.PI*2),t.fill(),new sf(i)}const sv=rv();function Rf(){Ve.clear(),ga(),hn=[];const i=De.children.filter(e=>e.visible);if(i.length<2){Gs=!1,Un&&(na(Br),ia());return}for(let e=0;e<i.length;e++)for(let n=e+1;n<i.length;n++){const r=i[e],s=i[n],o=new ee().setFromObject(r),a=new ee().setFromObject(s);if(!o.intersectsBox(a))continue;const c=av(r,s);if(c.points.length>0){let l=0;c.depths.forEach(h=>{h>l&&(l=h)}),hn.push(...c.points.map((h,m)=>({point:h,depth:c.depths[m],meshA:r.userData.id,meshB:s.userData.id}))),Ve.has(r.userData.id)||Ve.set(r.userData.id,{hasInterference:!0,intersectsWith:[],pointCount:0,maxDepth:0});let u=Ve.get(r.userData.id);u.intersectsWith.push(s.userData.id),u.pointCount+=c.points.length,l>u.maxDepth&&(u.maxDepth=l),Ve.has(s.userData.id)||Ve.set(s.userData.id,{hasInterference:!0,intersectsWith:[],pointCount:0,maxDepth:0});let d=Ve.get(s.userData.id);d.intersectsWith.push(r.userData.id),d.pointCount+=c.points.length,l>d.maxDepth&&(d.maxDepth=l)}}i.forEach(e=>{Ve.has(e.userData.id)||Ve.set(e.userData.id,{hasInterference:!1,intersectsWith:[],pointCount:0,maxDepth:0})}),Un&&(na(Br),ia());const t=hn.some(e=>e.depth>=iv.MODERADA);t&&!Gs&&!Un&&Fe("⚠️ Atención: Colisión detectada"),Gs=t}function av(i,t){const e=[],n=[];i.updateMatrixWorld(!0),t.updateMatrixWorld(!0);const r=i.geometry.attributes.position,s=t.geometry.attributes.position,o=1.5,a=new ee().setFromObject(t);a.expandByScalar(.5);const c=new C,l=new C,u=Math.max(1,Math.floor(r.count/500)),d=Math.max(1,Math.floor(s.count/500));for(let h=0;h<r.count;h+=u){if(c.fromBufferAttribute(r,h).applyMatrix4(i.matrixWorld),!a.containsPoint(c))continue;let m=1/0;for(let v=0;v<s.count;v+=d){l.fromBufferAttribute(s,v).applyMatrix4(t.matrixWorld);const x=c.distanceTo(l);x<o&&(m=Math.min(m,x))}if(m<o){if(!cv(c,t))continue;e.push(c.clone()),n.push(o-m)}}return{points:e,depths:n}}function yu(i,t){var y;const e=[],n=[];i.updateMatrixWorld(!0),t.updateMatrixWorld(!0);const r=i.geometry,s=t.geometry;if(!((y=r==null?void 0:r.attributes)!=null&&y.position)||!(s!=null&&s.boundsTree))return{points:e,depths:n};const o=1.5,a=new ee().setFromObject(t);a.expandByScalar(.5);const c=r.attributes.position,l=r.index,u=!!l,d=u?l.count/3:c.count/3,h=900,m=900,v=Math.max(1,Math.floor(c.count/h)),x=Math.max(1,Math.floor(d/m)),p=new C,f=new C,_=new C,g=new C,M=new C,T=new C,E=new C,S=new qt().copy(t.matrixWorld).invert();function U(b){return f.copy(b).applyMatrix4(S),s.boundsTree.closestPointToPoint(f,T),E.copy(T).applyMatrix4(t.matrixWorld),b.distanceTo(E)}for(let b=0;b<c.count;b+=v){if(p.fromBufferAttribute(c,b).applyMatrix4(i.matrixWorld),!a.containsPoint(p))continue;const D=U(p);D<o&&(e.push(p.clone()),n.push(o-D))}for(let b=0;b<d;b+=x){let D,N,z;if(u?(D=l.getX(b*3+0),N=l.getX(b*3+1),z=l.getX(b*3+2)):(D=b*3+0,N=b*3+1,z=b*3+2),_.fromBufferAttribute(c,D).applyMatrix4(i.matrixWorld),g.fromBufferAttribute(c,N).applyMatrix4(i.matrixWorld),M.fromBufferAttribute(c,z).applyMatrix4(i.matrixWorld),p.copy(_).add(g).add(M).multiplyScalar(1/3),!a.containsPoint(p))continue;const P=U(p);P<o&&(e.push(p.clone()),n.push(o-P))}return{points:e,depths:n}}function ov(i){var r;if(i!==or)return;const t=De.children.filter(s=>s.visible);if(t.length<2)return;for(const s of t)if(da(s),!((r=s.geometry)!=null&&r.boundsTree))return;const e=new Map,n=[];for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++){if(i!==or)return;const a=t[s],c=t[o],l=new ee().setFromObject(a),u=new ee().setFromObject(c);if(!l.intersectsBox(u))continue;const d=yu(a,c),h=yu(c,a),m=[...d.points,...h.points],v=[...d.depths,...h.depths];if(m.length>0){let x=0;v.forEach(_=>{_>x&&(x=_)}),n.push(...m.map((_,g)=>({point:_,depth:v[g]??0,meshA:a.userData.id,meshB:c.userData.id}))),e.has(a.userData.id)||e.set(a.userData.id,{hasInterference:!0,intersectsWith:[],pointCount:0,maxDepth:0});let p=e.get(a.userData.id);p.intersectsWith.push(c.userData.id),p.pointCount+=m.length,x>p.maxDepth&&(p.maxDepth=x),e.has(c.userData.id)||e.set(c.userData.id,{hasInterference:!0,intersectsWith:[],pointCount:0,maxDepth:0});let f=e.get(c.userData.id);f.intersectsWith.push(a.userData.id),f.pointCount+=m.length,x>f.maxDepth&&(f.maxDepth=x)}}n.length!==0&&(Ve.clear(),e.forEach((s,o)=>Ve.set(o,s)),hn=n,Un&&(ga(),Cf(hn.map(s=>s.point)),ia(),na(Br)))}const Su=new C(1,.123,.456).normalize(),Eu=new C,Os=new af;function cv(i,t){return Eu.copy(i).addScaledVector(Su,1e-4),Os.set(Eu,Su),Os.near=0,Os.far=1e6,Os.intersectObject(t,!0).length%2===1}function na(i){if(Br=i,!Un||hn.length===0)return;ga();let t=hn;i==="critical"?t=hn.filter(e=>e.depth>1):i==="moderate"?t=hn.filter(e=>e.depth>=.5&&e.depth<=1):i==="light"&&(t=hn.filter(e=>e.depth<.5)),t.length>0&&Cf(t.map(e=>e.point))}function Cf(i){const t=new ce,e=new Float32Array(i.length*3);i.forEach((r,s)=>{e[s*3]=r.x,e[s*3+1]=r.y,e[s*3+2]=r.z}),t.setAttribute("position",new ve(e,3));const n=new Ji({color:16711680,size:6,map:sv,transparent:!0,opacity:.9,depthTest:!1,sizeAttenuation:!0,blending:ui});ea.add(new Hs(t,n))}function ga(){var i,t;for(;ea.children.length>0;){const e=ea.children.pop();(i=e.geometry)==null||i.dispose(),(t=e.material)==null||t.dispose()}}function lv(){Un=!1,ko.classList.remove("active"),Mf.style.display="none",ga(),Ve.clear(),hn=[],Br="all",yf.value="all",ia()}function ia(){De.children.forEach(i=>{const t=cr.get(i.userData.id);if(!t)return;const e=t.querySelector(".interferenceBadge");if(e&&e.remove(),!Un)return;const n=Ve.get(i.userData.id);if(!n)return;const r=document.createElement("div");r.className=`interferenceBadge ${n.hasInterference?"hasInterference":"noInterference"}`,n.hasInterference?r.innerHTML=`🔴 Máx: ${n.maxDepth.toFixed(2)} mm`:r.innerHTML="🟢 OK";const s=t.querySelector(".rowTitle");s&&s.parentNode.insertBefore(r,s.nextSibling)})}let qn=!1,tr=null;const lr=new Pn;sn.add(lr);const uv=new zr({color:31436}),fv=new Ur({color:31436,linewidth:2});function Lf(i){qn=!!i,vf.classList.toggle("active",qn),Vx.classList.toggle("show",qn),qn||(tr=null)}function hv(){var i,t,e,n,r,s,o;for(tr=null;lr.children.length;){const a=lr.children.pop();(t=(i=a.geometry)==null?void 0:i.dispose)==null||t.call(i),(e=a.material)!=null&&e.map&&((r=(n=a.material.map).dispose)==null||r.call(n)),(o=(s=a.material)==null?void 0:s.dispose)==null||o.call(s)}Go&&(Go.innerHTML="")}function dv(i){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=400,t.height=120,e.clearRect(0,0,t.width,t.height),e.shadowColor="rgba(0,0,0,0.8)",e.shadowBlur=6,e.shadowOffsetX=2,e.shadowOffsetY=2,e.fillStyle="#ffffff",e.font="bold 60px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,t.width/2,t.height/2);const n=new Q_(new ef({map:new sf(t),transparent:!0,depthTest:!1}));return n.scale.set(10,5,1),n}function pv(i,t,e){const n=document.createElement("div");n.className="measureItem",n.textContent=`📏 ${i}`,n.addEventListener("click",()=>{mr(new ee().setFromCenterAndSize(new C().addVectors(t,e).multiplyScalar(.5),new C(20,20,20)),new C(0,0,1))}),Go.prepend(n)}function Tu(i){const t=new Ee(new ua(.7,16,16),uv);return t.position.copy(i),lr.add(t),t}function mv(i,t){const e=new rf(new ce().setFromPoints([i,t]),fv);return lr.add(e),e}function gv(i,t,e){const n=new C().addVectors(i,t).multiplyScalar(.5),r=dv(e);return r.position.copy(n),r.position.y+=Math.max(.8,i.distanceTo(t)*.03),lr.add(r),r}Jn.addEventListener("pointerdown",i=>{if(qn)return;const t=Jn.getBoundingClientRect();nr.x=(i.clientX-t.left)/t.width*2-1,nr.y=-((i.clientY-t.top)/t.height*2-1),ta.setFromCamera(nr,ke);const e=ta.intersectObjects(De.children.filter(n=>n.visible),!1);if(oc){if(!e.length)return;Zx(e[0]);return}e.length?Af(e[0].object):wf()});Jn.addEventListener("dblclick",i=>{if(!qn)return;const t=Jn.getBoundingClientRect();nr.x=(i.clientX-t.left)/t.width*2-1,nr.y=-((i.clientY-t.top)/t.height*2-1),ta.setFromCamera(nr,ke);const e=ta.intersectObjects(De.children.filter(a=>a.visible),!1);if(!e.length)return;const n=e[0].point.clone();if(!tr){tr=n,Tu(n);return}const r=tr,s=n;Tu(s),mv(r,s);const o=`${r.distanceTo(s).toFixed(2)} mm`;gv(r,s,o),pv(o,r,s),tr=null});function Pf(){const i=Jn.clientWidth,t=Jn.clientHeight;pr.setSize(i,t,!1),ke.aspect=i/t,ke.updateProjectionMatrix()}window.addEventListener("resize",Pf);function _a(){const i=De.children.length;Ux.textContent=`${i} modelo${i===1?"":"s"} cargado${i===1?"":"s"}`}function Df(){const i=new ee().setFromObject(De);if(i.isEmpty())return;const t=i.getSize(new C),e=i.getCenter(new C),n=Math.max(t.x,t.y,t.z);ke.position.set(e.x,e.y+n*.3,e.z+n/2/Math.tan(ke.fov*Math.PI/360)*1.8),rn.target.copy(e),rn.update()}function mr(i,t){if(!i||i.isEmpty())return;const e=i.getCenter(new C),n=Math.max(...i.getSize(new C).toArray());ke.position.copy(e.clone().add(t.multiplyScalar(n*1.8))),rn.target.copy(e),rn.update()}function Gr(){return new ee().setFromObject(fe||De)}Nx.addEventListener("click",()=>mr(Gr(),new C(0,1,0)));zx.addEventListener("click",()=>mr(Gr(),new C(0,-1,0)));Fx.addEventListener("click",()=>mr(Gr(),new C(0,0,1)));Ox.addEventListener("click",()=>mr(Gr(),new C(1,0,0)));Bx.addEventListener("click",()=>mr(Gr(),new C(-1,0,0)));function _v(i,t=22){return i.length>t?i.slice(0,t-3)+"...":i}function Uf(i){const t=document.createElement("div");t.className="modelRow",t.dataset.id=i.userData.id;const e=Math.round((i.userData.opacity??1)*100);t.innerHTML=`
    <div class="rowTitle">
      <div class="name" title="${i.userData.name}">${_v(i.userData.name)}</div>
      <div class="rowActions">
        <button class="iconBtn small" type="button" data-action="toggle" title="Ocultar/Mostrar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
        <button class="iconBtn small danger" type="button" data-action="delete" title="Borrar del visor">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
    <div class="meta">${i.geometry.attributes.position.count.toLocaleString()} vértices</div>

    <div class="rowOpacity">
      <div class="rowOpacityLabel">
        <span>Transparencia</span>
        <span class="opacityVal" data-opacity-val>${e}%</span>
      </div>
      <input class="opacityRange" type="range" min="5" max="100" value="${e}" data-action="opacity" />
    </div>

    <div class="colorDropdown">
      <button class="btnColor" type="button" data-action="color-dropdown">
        <span class="colorIndicator" data-color-indicator style="background:#cfd8ff"></span>
        Color Material
      </button>
      <div class="colorMenu" data-color-menu>
        ${ev.map(a=>`
          <button class="colorOption" type="button" data-action="color" data-hex="${a.hex}">
            <span class="colorDot" style="background:#${a.hex.toString(16).padStart(6,"0")}"></span>
            <span class="colorName">${a.name}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `,cr.set(i.userData.id,t),t.addEventListener("click",a=>{a.target.closest("button")||a.target.closest("input")||Af(i)}),t.querySelector('[data-action="toggle"]').addEventListener("click",()=>{i.visible=!i.visible,Qx(i)}),t.querySelector('[data-action="delete"]').addEventListener("click",()=>{var a,c,l,u;fe===i&&wf(),De.remove(i),(c=(a=i.geometry)==null?void 0:a.dispose)==null||c.call(a),(u=(l=i.material)==null?void 0:l.dispose)==null||u.call(l),cr.delete(i.userData.id),t.remove(),_a(),pa(150)});const n=t.querySelector('[data-action="opacity"]'),r=t.querySelector("[data-opacity-val]");n.addEventListener("input",()=>{r.textContent=`${n.value}%`,tv(i,n.value/100)});const s=t.querySelector("[data-color-menu]"),o=t.querySelector("[data-color-indicator]");t.querySelector('[data-action="color-dropdown"]').addEventListener("click",a=>{a.stopPropagation(),document.querySelectorAll("[data-color-menu].show").forEach(c=>{c!==s&&c.classList.remove("show")}),s.classList.toggle("show")}),t.querySelectorAll('[data-action="color"]').forEach(a=>{a.addEventListener("click",c=>{c.stopPropagation();const l=parseInt(a.dataset.hex);nv(i,l),o.style.background=`#${l.toString(16).padStart(6,"0")}`,s.classList.remove("show")})}),document.addEventListener("click",()=>s.classList.remove("show")),Ix.prepend(t)}async function xv(i){const t=i.name.split(".").pop().toLowerCase(),e=await i.arrayBuffer();let n=null;try{if(t==="stl"?n=jx.parse(e):t==="ply"?n=Kx.parse(e):t==="obj"&&$x.parse(new TextDecoder().decode(e)).traverse(o=>{o.isMesh&&!n&&(n=o.geometry.clone())}),!n)throw new Error("No se pudo extraer la geometría");n.attributes.normal||n.computeVertexNormals();const r=new Ee(n,new n0({color:12306431,side:Ke}));r.userData.id=`m${bf++}`,r.userData.name=i.name,r.userData.opacity=1,De.add(r),Uf(r),da(r),pa(150)}catch{Fe(`❌ Error al cargar ${i.name}`)}}async function If(i){if(df){Fe("👁️ Modo Visor activado: No se pueden cargar más archivos.",3e3);return}const t=[...i].filter(e=>[".stl",".obj",".ply"].some(n=>e.name.toLowerCase().endsWith(n)));if(!t.length)return Fe("⚠️ Formato no soportado");for(const e of t)await xv(e);_a(),Df()}Lx.addEventListener("click",()=>_f.click());_f.addEventListener("change",i=>If(i.target.files));vf.addEventListener("click",()=>Lf(!qn));Hx.addEventListener("click",hv);ko.addEventListener("click",()=>{Un?lv():(Un=!0,ko.classList.add("active"),Mf.style.display="flex",Rf(),mf(++or,0))});yf.addEventListener("change",i=>na(i.target.value));Dx.addEventListener("click",()=>{pr.render(sn,ke);const i=document.createElement("a");i.download=`Aura3D_Captura_${new Date().toISOString().slice(0,10)}.png`,i.href=Jn.toDataURL("image/png"),i.click(),Fe("📸 Captura guardada",2e3)});["dragenter","dragover"].forEach(i=>window.addEventListener(i,t=>{t.preventDefault(),gf.classList.add("show")}));["dragleave","drop"].forEach(i=>window.addEventListener(i,t=>{t.preventDefault(),gf.classList.remove("show")}));window.addEventListener("drop",i=>If(i.dataTransfer.files));function vv(i="stl_viewer_db",t="shares"){const e=()=>new Promise((n,r)=>{const s=indexedDB.open(i,1);s.onupgradeneeded=()=>{s.result.objectStoreNames.contains(t)||s.result.createObjectStore(t)},s.onsuccess=()=>n(s.result),s.onerror=()=>r(s.error)});return{set:async(n,r)=>{const s=await e();return new Promise((o,a)=>{const c=s.transaction(t,"readwrite");c.objectStore(t).put(r,n),c.oncomplete=()=>o(!0),c.onerror=()=>a(c.error)})},get:async n=>{const r=await e();return new Promise((s,o)=>{const a=r.transaction(t,"readonly").objectStore(t).get(n);a.onsuccess=()=>s(a.result!==void 0?{value:a.result}:null),a.onerror=()=>o(a.error)})}}}const Nf=vv();Gx.addEventListener("click",async()=>{if(De.children.length===0)return alert("No hay modelos para compartir");Wo.style.display="flex",xu.style.display="flex",vu.style.display="none";try{const i="share_"+Date.now(),t={models:De.children.map(e=>({name:e.userData.name,positions:Array.from(e.geometry.attributes.position.array),color:e.userData.colorHex||13621503,opacity:e.userData.opacity||1})),expiresAt:Date.now()+7*24*60*60*1e3};await Nf.set(i,JSON.stringify(t)),xu.style.display="none",vu.style.display="block",Sf.value=`${window.location.origin}${window.location.pathname}?share=${i}`}catch{Wo.style.display="none",alert("Error al generar el link")}});kx.addEventListener("click",()=>Wo.style.display="none");xo.addEventListener("click",()=>{navigator.clipboard.writeText(Sf.value),xo.textContent="✅ Copiado!",setTimeout(()=>xo.textContent="📋 Copiar",2e3)});setTimeout(async()=>{const i=new URLSearchParams(window.location.search).get("share");if(!i)return;df=!0,document.body.classList.add("view-only");const t=await Nf.get(i);if(!t)return alert("❌ Link expirado");const e=JSON.parse(t.value);for(const n of e.models){const r=new ce;r.setAttribute("position",new ve(new Float32Array(n.positions),3)),r.computeVertexNormals();const s=new Ee(r,new t0({color:n.color,side:Ke,transparent:n.opacity<1,opacity:n.opacity}));s.userData={id:`m${bf++}`,name:n.name,opacity:n.opacity,colorHex:n.color},De.add(s),Uf(s),da(s),pa(1e3)}_a(),Df(),Fe("👁️ Modo Visor Activo",3e3)},500);function Ff(){Pf(),rn.update(),pr.render(sn,ke),requestAnimationFrame(Ff)}Ff();_a();const Mv=new Rx;Px.addEventListener("click",async()=>{if(!fe){Fe("⚠️ Selecciona un modelo de la lista primero",3e3);return}const e=`${(fe.userData.name||"modelo_aura3d").replace(/\.[^/.]+$/,"")}_modificado.stl`;try{fe.updateMatrixWorld(!0);let n=fe.geometry.clone();n.applyMatrix4(fe.matrixWorld),n.index&&(n=n.toNonIndexed());const r=new Ee(n,new zr);r.updateMatrixWorld(!0);const s=Mv.parse(r,{binary:!0});if(!s)throw new Error("Fallo al generar la geometría STL");const o=new Blob([s],{type:"application/octet-stream"}),a=document.createElement("a");a.style.display="none",a.href=URL.createObjectURL(o),a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(a.href),Fe("✅ Guardado STL optimizado con éxito",3e3)}catch(n){console.error("Error al exportar a STL:",n),Fe(`❌ Error: ${n.message}`,5e3)}});let li,vo=[];const Yo=document.getElementById("recordBtn"),Of=document.getElementById("recordStatus"),Bf=document.getElementById("recordText");Yo.addEventListener("click",()=>{li&&li.state==="recording"?(li.stop(),Of.style.display="none",Bf.innerText="Grabar"):yv()});function yv(){vo=[];const i=pr.domElement.captureStream(60),t={mimeType:"video/webm;codecs=h264"};li=new MediaRecorder(i,t),li.ondataavailable=e=>{e.data.size>0&&vo.push(e.data)},li.onstop=()=>{const e=new Blob(vo,{type:"video/mp4"}),n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=`Aura3D_Video_${new Date().getTime()}.mp4`,r.click(),URL.revokeObjectURL(n)},li.start(),Of.style.display="inline",Bf.innerText="Detener",Yo.classList.add("recording-active"),Yo.classList.remove("recording-active")}
