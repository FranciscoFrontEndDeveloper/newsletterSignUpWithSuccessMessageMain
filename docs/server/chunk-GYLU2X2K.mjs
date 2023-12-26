import './polyfills.server.mjs';
import{A as ve,B as D,C as c,D as j,E as f,F as ye,G as _e,N as Ce,O as ee,Q as Ve,R as p,S as De,T as be,W as Me,_ as Ae,a as de,aa as Ee,b as ce,ba as we,c as he,d as P,e as k,f as fe,g as G,h as C,i as h,j as T,k as v,l as Y,m as pe,n as me,o as ge,p as J,q as K,r as b,s as u,t as F,u as V,v as M,w as Q,x as a,y as l,z as d}from"./chunk-YDO66MTO.mjs";import{a as g,b as _}from"./chunk-KRLCULJA.mjs";var Ge=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(u(K),u(J))},e.\u0275dir=v({type:e});let t=e;return t})(),gt=(()=>{let e=class e extends Ge{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=pe(e)))(o||e)}})(),e.\u0275dir=v({type:e,features:[V]});let t=e;return t})(),Te=new C("NgValueAccessor");var vt={provide:Te,useExisting:P(()=>z),multi:!0};function yt(){let t=ee()?ee().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var _t=new C("CompositionEventMode"),z=(()=>{let e=class e extends Ge{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!yt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(u(K),u(J),u(_t,8))},e.\u0275dir=v({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&D("input",function(m){return o._handleInput(m.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(m){return o._compositionEnd(m.target.value)})},features:[j([vt]),V]});let t=e;return t})();function y(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function je(t){return t!=null&&typeof t.length=="number"}var Be=new C("NgValidators"),Re=new C("NgAsyncValidators"),Ct=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,x=class{static min(e){return Vt(e)}static max(e){return Dt(e)}static required(e){return bt(e)}static requiredTrue(e){return Mt(e)}static email(e){return At(e)}static minLength(e){return Et(e)}static maxLength(e){return wt(e)}static pattern(e){return Ft(e)}static nullValidator(e){return Ue(e)}static compose(e){return ze(e)}static composeAsync(e){return Xe(e)}};function Vt(t){return e=>{if(y(e.value)||y(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function Dt(t){return e=>{if(y(e.value)||y(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function bt(t){return y(t.value)?{required:!0}:null}function Mt(t){return t.value===!0?null:{required:!0}}function At(t){return y(t.value)||Ct.test(t.value)?null:{email:!0}}function Et(t){return e=>y(e.value)||!je(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function wt(t){return e=>je(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ft(t){if(!t)return Ue;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(y(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Ue(t){return null}function He(t){return t!=null}function Le(t){return ve(t)?de(t):t}function We(t){let e={};return t.forEach(n=>{e=n!=null?g(g({},e),n):e}),Object.keys(e).length===0?null:e}function $e(t,e){return e.map(n=>n(t))}function St(t){return!t.validate}function qe(t){return t.map(e=>St(e)?e:n=>e.validate(n))}function ze(t){if(!t)return null;let e=t.filter(He);return e.length==0?null:function(n){return We($e(n,e))}}function Ze(t){return t!=null?ze(qe(t)):null}function Xe(t){if(!t)return null;let e=t.filter(He);return e.length==0?null:function(n){let i=$e(n,e).map(Le);return he(i).pipe(ce(We))}}function Ye(t){return t!=null?Xe(qe(t)):null}function Fe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Je(t){return t._rawValidators}function Ke(t){return t._rawAsyncValidators}function te(t){return t?Array.isArray(t)?t:[t]:[]}function U(t,e){return Array.isArray(t)?t.includes(e):t===e}function Se(t,e){let n=te(e);return te(t).forEach(r=>{U(n,r)||n.push(r)}),n}function Ie(t,e){return te(e).filter(n=>!U(t,n))}var H=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ze(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ye(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},E=class extends H{get formDirective(){return null}get path(){return null}},O=class extends H{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},It={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Di=_(g({},It),{"[class.ng-submitted]":"isSubmitted"}),Qe=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(O,2))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Q("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[V]});let t=e;return t})(),et=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(E,10))},e.\u0275dir=v({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&Q("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[V]});let t=e;return t})();var S="VALID",B="INVALID",A="PENDING",I="DISABLED";function re(t){return(Z(t)?t.validators:t)||null}function xt(t){return Array.isArray(t)?Ze(t):t||null}function oe(t,e){return(Z(e)?e.asyncValidators:t)||null}function Ot(t){return Array.isArray(t)?Ye(t):t||null}function Z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function tt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new k(1e3,"");if(!i[n])throw new k(1001,"")}function it(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new k(1002,"")})}var w=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===B}get pending(){return this.status==A}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Se(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Se(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ie(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ie(e,this._rawAsyncValidators))}hasValidator(e){return U(this._rawValidators,e)}hasAsyncValidator(e){return U(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=A,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(i=>{i.disable(_(g({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(i=>{i.enable(_(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(_(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===A)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;let n=Le(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(B)?B:S}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=xt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ot(this._rawAsyncValidators)}},W=class extends w{constructor(e,n,i){super(re(n),oe(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){it(this,!0,e),Object.keys(e).forEach(i=>{tt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ie=class extends W{};var nt=new C("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function Nt(t,e){return[...e.path,t]}function xe(t,e,n=se){ae(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),kt(t,e),Tt(t,e),Gt(t,e),Pt(t,e)}function Oe(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),q(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function $(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Pt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ae(t,e){let n=Je(t);e.validator!==null?t.setValidators(Fe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Ke(t);e.asyncValidator!==null?t.setAsyncValidators(Fe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();$(e._rawValidators,r),$(e._rawAsyncValidators,r)}function q(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Je(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=Ke(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return $(e._rawValidators,i),$(e._rawAsyncValidators,i),n}function kt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&rt(t,e)})}function Gt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&rt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function rt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Tt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function jt(t,e){t==null,ae(t,e)}function Bt(t,e){return q(t,e)}function Rt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ut(t){return Object.getPrototypeOf(t.constructor)===gt}function Ht(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Lt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===z?n=o:Ut(o)?i=o:r=o}),r||i||n||null}function Wt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ne(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Pe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var R=class extends w{constructor(e=null,n,i){super(re(n),oe(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Pe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ne(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ne(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Pe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var $t=t=>t instanceof R;var ot=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var qt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e}),e.\u0275inj=G({});let t=e;return t})();var st=new C("NgModelWithFormControlWarning");var zt={provide:E,useExisting:P(()=>le)},le=(()=>{let e=class e extends E{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new F,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return xe(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Oe(i.control||null,i,!1),Wt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Ht(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(Oe(r||null,i),$t(o)&&(xe(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);jt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Bt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ae(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(u(Be,10),u(Re,10),u(nt,8))},e.\u0275dir=v({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&D("submit",function(m){return o.onSubmit(m)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[j([zt]),V,Y]});let t=e;return t})();var Zt={provide:O,useExisting:P(()=>ue)},ue=(()=>{let e=class e extends O{set isDisabled(i){}constructor(i,r,o,s,m){super(),this._ngModelWarningConfig=m,this._added=!1,this.name=null,this.update=new F,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Lt(this,s)}ngOnChanges(i){this._added||this._setUpControl(),Rt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return Nt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(u(E,13),u(Be,10),u(Re,10),u(Te,10),u(st,8))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[j([Zt]),V,Y]});let t=e;return t})();var Xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e}),e.\u0275inj=G({imports:[qt]});let t=e;return t})(),ne=class extends w{constructor(e,n,i){super(re(n),oe(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){it(this,!1,e),e.forEach((i,r)=>{tt(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function ke(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var at=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let o=this._reduceControls(i),s={};return ke(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new W(o,s)}record(i,r=null){let o=this._reduceControls(i);return new ie(o,r)}control(i,r,o){let s={};return this.useNonNullable?(ke(r)?s=r:(s.validators=r,s.asyncValidators=o),new R(i,_(g({},s),{nonNullable:!0}))):new R(i,r,o)}array(i,r,o){let s=i.map(m=>this._createControl(m));return new ne(s,r,o)}_reduceControls(i){let r={};return Object.keys(i).forEach(o=>{r[o]=this._createControl(i[o])}),r}_createControl(i){if(i instanceof R)return i;if(i instanceof w)return i;if(Array.isArray(i)){let r=i[0],o=i.length>1?i[1]:null,s=i.length>2?i[2]:null;return this.control(r,o,s)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=fe({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var X=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:st,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:nt,useValue:i.callSetDisabledState??se}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e}),e.\u0275inj=G({imports:[Xt]});let t=e;return t})();var lt=(()=>{let e=class e{constructor(){this.title="newsletterSignUpWithSuccessMessageMain"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],standalone:!0,features:[f],decls:1,vars:0,template:function(r,o){r&1&&d(0,"router-outlet")},dependencies:[p,Ae,X]});let t=e;return t})();var ut=(()=>{let e=class e{onResize(){window.innerWidth>1024?this.imageForm="assets/images/illustration-sign-up-desktop.svg":this.imageForm="assets/images/illustration-sign-up-mobile.svg"}ngOnInit(){this.onResize()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-image"]],hostBindings:function(r,o){r&1&&D("resize",function(){return o.onResize()},!1,me)},standalone:!0,features:[f],decls:3,vars:1,consts:[[1,"lg:h-full","lg:w-full"],[1,""],["alt","imagen main",1,"sm:w-full","lg:w-full","lg:h-full",3,"src"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"picture",1),d(2,"img",2),l()()),r&2&&(b(2),M("src",o.imageForm,ge))},dependencies:[p],encapsulation:2});let t=e;return t})();var Jt=(t,e)=>({"text-red-400":t,hidden:e}),Kt=t=>({"border-red-500 text-red-400 placeholder:text-red-400":t}),dt=(()=>{let e=class e{constructor(i,r){this.FormBuilder=i,this.Router=r,this.newsForm=this.FormBuilder.group({email:["",[x.required,x.email]]}),this.errorForm=!1}onSubmit(){this.newsForm.valid?this.Router.navigate(["/","thanks"]):(this.Router.navigate(["/",""]),this.errorForm=!0)}};e.\u0275fac=function(r){return new(r||e)(u(at),u(Ee))},e.\u0275cmp=h({type:e,selectors:[["app-forn"]],standalone:!0,features:[f],decls:34,vars:8,consts:[[1,"px-8","flex","lg:justify-center","flex-col","gap-4","lg:h-full"],[1,"text-4xl","lg:text-6xl","font-bold","text-gray-800"],[1,"text-gray-600","font-normal","lg:text-lg"],[1,"flex","py-1"],[1,"w-auto"],["src","assets/images/icon-list.svg","alt","",1,"mr-4"],[1,"w-full","text-gray-600","font-normal","lg:text-lg"],["action","",1,"flex","flex-col","gap-4",3,"formGroup","submit"],[1,"flex","justify-between"],["for","",1,"font-bold","text-xs","text-gray-600","lg:text-lg"],["for","",1,"font-bold","text-xs","text-gray-600","lg:text-lg",3,"ngClass"],["type","text","placeholder","email@company.com","formControlName","email",1,"border-solid","p-4","border-gray-300","border-2","rounded-lg","w-full","placeholder:p-2","hover:border-black",3,"ngClass"],["type","submit","value","Subscribe to monthly newsletter",1,"bg-gray-800","text-white","p-4","rounded-lg","w-full","font-bold","hover:bg-red-400","lg:cursor-pointer"]],template:function(r,o){r&1&&(a(0,"section",0)(1,"div")(2,"h1",1),c(3,"Stay updated!"),l()(),a(4,"div")(5,"p",2),c(6," Join 60,000+ product managers receiving monthly updates on: "),l()(),a(7,"div")(8,"ol")(9,"ul",3)(10,"picture",4),d(11,"img",5),l(),a(12,"p",6),c(13," Product discovery and building what matters "),l()(),a(14,"ul",3)(15,"picture",4),d(16,"img",5),l(),a(17,"p",6),c(18," Measuring to ensure updates are a success "),l()(),a(19,"ul",3)(20,"picture",4),d(21,"img",5),l(),a(22,"p",6),c(23," And much more! "),l()()()(),a(24,"div")(25,"form",7),D("submit",function(){return o.onSubmit()}),a(26,"div",8)(27,"label",9),c(28,"Email address"),l(),a(29,"label",10),c(30,"Valid email required"),l()(),a(31,"div"),d(32,"input",11),l(),d(33,"input",12),l()()()),r&2&&(b(25),M("formGroup",o.newsForm),b(4),M("ngClass",_e(3,Jt,o.errorForm,!o.errorForm)),b(3),M("ngClass",ye(6,Kt,o.errorForm)))},dependencies:[p,Ve,X,ot,z,Qe,et,le,ue],encapsulation:2});let t=e;return t})();var ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-main"]],standalone:!0,features:[f],decls:6,vars:0,consts:[[1,"lg:bg-gray-800","lg:w-full","lg:h-screen","flex","items-center","justify-center"],[1,"sm:bg-white-500","sm:w-full","sm:h-screen","grid","grid-cols-1","grid-rows-[auto_minmax(auto,_1fr)_100px]","lg:grid-cols-2","lg:grid-rows-1","gap-8","font-['Roboto']","lg:bg-white-500","lg:bg-white","lg:w-2/5","lg:h-3/5","lg:rounded-3xl","lg:p-5"],[1,"lg:order-2"],[1,"lg:order-1"]],template:function(r,o){r&1&&(a(0,"main",0)(1,"div",1)(2,"div",2),d(3,"app-image"),l(),a(4,"div",3),d(5,"app-forn"),l()()())},dependencies:[p,ut,dt],encapsulation:2});let t=e;return t})();var ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-thanks"]],standalone:!0,features:[f],decls:16,vars:0,consts:[[1,"lg:bg-gray-800","lg:w-full","lg:h-screen","flex","items-center","justify-center"],[1,"bg-white","p-5","w-full","h-screen","grid","grid-cols-1","grid-rows-4","lg:w-1/2","lg:h-2/3","lg:p-20","gap-20","rounded-[50px]"],[1,"flex","items-end"],["src","assets/images/icon-list.svg","alt","check",1,"w-20"],[1,"flex","items-center"],[1,"text-5xl","font-bold","lg:text-7xl"],[1,"flex","items-start","h-full"],[1,"text-base","lg:text-2xl","w-full"],["type","text","value","Dismiss message",1,"bg-gray-800","text-lg","rounded-lg","text-white","w-full","text-center","py-5","lg:hover:bg-red-400","lg:cursor-pointer"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"picture"),d(4,"img",3),l()(),a(5,"div",4)(6,"h1",5),c(7,"Thanks for subscribing!"),l()(),a(8,"div",6)(9,"p",7),c(10," A confirmation email has been sent to "),a(11,"strong"),c(12,"ash@loremcompany.com."),l(),c(13," Please open it and click the button inside to confirm your subscription. "),l()(),a(14,"div"),d(15,"input",8),l()()())},dependencies:[p],encapsulation:2});let t=e;return t})();var ft=[{path:"",component:ct},{path:"thanks",component:ht}];var pt={providers:[we(ft),be()]};var Qt={providers:[Me()]},mt=Ce(pt,Qt);var ei=()=>De(lt,mt),nn=ei;export{nn as a};