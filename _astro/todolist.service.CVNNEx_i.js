import{a as E,b as X}from"./util.DiFbyzn0.js";import{i as b,a as z,r as N,b as B,c as ee,d as ne,e as te,f as re,g as oe,h as ie}from"./innerFrom.-_aNtNEc.js";import{_ as ae,S as F,O as w,i as T,o as y,c as h,m as W,a as L,b as M,d as j,e as U}from"./map.BOKCRUkl.js";var $={now:function(){return($.delegate||Date).now()},delegate:void 0},ue=function(e){ae(n,e);function n(r,t,o){r===void 0&&(r=1/0),t===void 0&&(t=1/0),o===void 0&&(o=$);var i=e.call(this)||this;return i._bufferSize=r,i._windowTime=t,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=t===1/0,i._bufferSize=Math.max(1,r),i._windowTime=Math.max(1,t),i}return n.prototype.next=function(r){var t=this,o=t.isStopped,i=t._buffer,f=t._infiniteTimeWindow,u=t._timestampProvider,a=t._windowTime;o||(i.push(r),!f&&i.push(u.now()+a)),this._trimBuffer(),e.prototype.next.call(this,r)},n.prototype._subscribe=function(r){this._throwIfClosed(),this._trimBuffer();for(var t=this._innerSubscribe(r),o=this,i=o._infiniteTimeWindow,f=o._buffer,u=f.slice(),a=0;a<u.length&&!r.closed;a+=i?1:2)r.next(u[a]);return this._checkFinalizedStatuses(r),t},n.prototype._trimBuffer=function(){var r=this,t=r._bufferSize,o=r._timestampProvider,i=r._buffer,f=r._infiniteTimeWindow,u=(f?1:2)*t;if(t<1/0&&u<i.length&&i.splice(0,i.length-u),!f){for(var a=o.now(),c=0,s=1;s<i.length&&i[s]<=a;s+=2)c=s;c&&i.splice(0,c+1)}},n}(F),fe=new w(function(e){return e.complete()});function ce(e){return e&&T(e.schedule)}function Z(e){return e[e.length-1]}function se(e){return T(Z(e))?e.pop():void 0}function D(e){return ce(Z(e))?e.pop():void 0}function m(e,n,r,t,o){t===void 0&&(t=0),o===void 0&&(o=!1);var i=n.schedule(function(){r(),o?e.add(this.schedule(null,t)):this.unsubscribe()},t);if(e.add(i),!o)return i}function G(e,n){return n===void 0&&(n=0),y(function(r,t){r.subscribe(h(t,function(o){return m(t,e,function(){return t.next(o)},n)},function(){return m(t,e,function(){return t.complete()},n)},function(o){return m(t,e,function(){return t.error(o)},n)}))})}function J(e,n){return n===void 0&&(n=0),y(function(r,t){t.add(e.schedule(function(){return r.subscribe(t)},n))})}function le(e,n){return b(e).pipe(J(n),G(n))}function de(e,n){return b(e).pipe(J(n),G(n))}function ve(e,n){return new w(function(r){var t=0;return n.schedule(function(){t===e.length?r.complete():(r.next(e[t++]),r.closed||this.schedule())})})}function me(e,n){return new w(function(r){var t;return m(r,n,function(){t=e[z](),m(r,n,function(){var o,i,f;try{o=t.next(),i=o.value,f=o.done}catch(u){r.error(u);return}f?r.complete():r.next(i)},0,!0)}),function(){return T(t?.return)&&t.return()}})}function K(e,n){if(!e)throw new Error("Iterable cannot be null");return new w(function(r){m(r,n,function(){var t=e[Symbol.asyncIterator]();m(r,n,function(){t.next().then(function(o){o.done?r.complete():r.next(o.value)})},0,!0)})})}function pe(e,n){return K(N(e),n)}function he(e,n){if(e!=null){if(B(e))return le(e,n);if(ee(e))return ve(e,n);if(ne(e))return de(e,n);if(te(e))return K(e,n);if(re(e))return me(e,n);if(oe(e))return pe(e,n)}throw ie(e)}function k(e,n){return n?he(e,n):b(e)}function be(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=D(e);return k(e,r)}var ye=Array.isArray;function _e(e,n){return ye(n)?e.apply(void 0,L([],M(n))):e(n)}function we(e){return W(function(n){return _e(e,n)})}var xe=Array.isArray,ge=Object.getPrototypeOf,Oe=Object.prototype,Ie=Object.keys;function Ae(e){if(e.length===1){var n=e[0];if(xe(n))return{args:n,keys:null};if(Te(n)){var r=Ie(n);return{args:r.map(function(t){return n[t]}),keys:r}}}return{args:e,keys:null}}function Te(e){return e&&typeof e=="object"&&ge(e)===Oe}function Se(e,n){return e.reduce(function(r,t,o){return r[t]=n[o],r},{})}function Ce(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=D(e),t=se(e),o=Ae(e),i=o.args,f=o.keys;if(i.length===0)return k([],r);var u=new w(je(i,r,f?function(a){return Se(f,a)}:j));return t?u.pipe(we(t)):u}function je(e,n,r){return r===void 0&&(r=j),function(t){P(n,function(){for(var o=e.length,i=new Array(o),f=o,u=o,a=function(s){P(n,function(){var l=k(e[s],n),v=!1;l.subscribe(h(t,function(p){i[s]=p,v||(v=!0,u--),u||t.next(r(i.slice()))},function(){--f||t.complete()}))},t)},c=0;c<o;c++)a(c)},t)}}function P(e,n,r){e?m(r,e,n):n()}function V(e){return e<=0?function(){return fe}:y(function(n,r){var t=0;n.subscribe(h(r,function(o){++t<=e&&(r.next(o),e<=t&&r.complete())}))})}function ke(e){e===void 0&&(e={});var n=e.connector,r=n===void 0?function(){return new F}:n,t=e.resetOnError,o=t===void 0?!0:t,i=e.resetOnComplete,f=i===void 0?!0:i,u=e.resetOnRefCountZero,a=u===void 0?!0:u;return function(c){var s,l,v,p=0,x=!1,g=!1,O=function(){l?.unsubscribe(),l=void 0},S=function(){O(),s=v=void 0,x=g=!1},Q=function(){var _=s;S(),_?.unsubscribe()};return y(function(_,R){p++,!g&&!x&&O();var I=v=v??r();R.add(function(){p--,p===0&&!g&&!x&&(l=C(Q,a))}),I.subscribe(R),!s&&p>0&&(s=new U({next:function(A){return I.next(A)},error:function(A){g=!0,O(),l=C(S,o,A),I.error(A)},complete:function(){x=!0,O(),l=C(S,f),I.complete()}}),b(_).subscribe(s))})(c)}}function C(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];if(n===!0){e();return}if(n!==!1){var o=new U({next:function(){o.unsubscribe(),e()}});return b(n.apply(void 0,L([],M(r)))).subscribe(o)}}function Re(e,n,r){var t,o,i,f,u=!1;return e&&typeof e=="object"?(t=e.bufferSize,f=t===void 0?1/0:t,o=e.windowTime,n=o===void 0?1/0:o,i=e.refCount,u=i===void 0?!1:i,r=e.scheduler):f=e??1/0,ke({connector:function(){return new ue(f,n,r)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:u})}function Pe(e,n){return y(function(r,t){var o=null,i=0,f=!1,u=function(){return f&&!o&&t.complete()};r.subscribe(h(t,function(a){o?.unsubscribe();var c=0,s=i++;b(e(a,s)).subscribe(o=h(t,function(l){return t.next(n?n(a,l,s,c++):l)},function(){o=null,u()}))},function(){f=!0,u()}))})}function Y(e,n,r){var t=T(e)||n||r?{next:e,error:n,complete:r}:e;return t?y(function(o,i){var f;(f=t.subscribe)===null||f===void 0||f.call(t);var u=!0;o.subscribe(h(i,function(a){var c;(c=t.next)===null||c===void 0||c.call(t,a),i.next(a)},function(){var a;u=!1,(a=t.complete)===null||a===void 0||a.call(t),i.complete()},function(a){var c;u=!1,(c=t.error)===null||c===void 0||c.call(t,a),i.error(a)},function(){var a,c;u&&((a=t.unsubscribe)===null||a===void 0||a.call(t)),(c=t.finalize)===null||c===void 0||c.call(t)}))}):j}const Ee=[{id:"f33f9cd8-4941-4535-bef9-06200b918541",title:"abc",completed:!1}],q=E("all"),Ue=e=>q.next(e),Fe=()=>q.asObservable(),d=E(Ee),H=()=>Fe().pipe(Pe(e=>Ce([d,be(e)])),W(([e,n])=>{switch(n){case"active":return e.filter(r=>!r.completed);case"completed":return e.filter(r=>r.completed);default:return e}}),Re(1)),$e=e=>{const n={title:e,id:X(),completed:!1},r=d.value;r.push(n),d.next(r)},Ze=e=>{const r=d.value.filter(t=>t.id!==e);d.next(r)},De=e=>{const n=d.value,r=n.find(t=>t.id===e.id);r&&Object.assign(r,e),d.next(n)},Ge=e=>H().pipe(V(1),Y(n=>{n.forEach(r=>r.completed=e),d.next(n)})),Je=()=>H().pipe(V(1),Y(e=>{const n=e.filter(r=>!r.completed);d.next(n)}));export{ue as R,$e as a,Fe as b,Ue as c,Ze as d,V as e,Ge as f,H as g,Je as r,Pe as s,Y as t,De as u};
