import './polyfills.server.mjs';
import{a as I}from"./chunk-RVG7JYVX.mjs";import"./chunk-WLSKTQK7.mjs";import{c as E,d as H,f as L,g as F}from"./chunk-45YR4A7I.mjs";import{k as z,l as S,o as P,v as x}from"./chunk-CITTUIPC.mjs";import{Dc as M,Ec as k,Hc as O,Ia as c,Ib as m,Ja as C,Jb as w,Oa as p,Pa as f,W as T,da as h,db as u,ea as b,hb as n,pb as o,qb as r,rb as s,ua as y,wb as g,xb as _}from"./chunk-M3327I6V.mjs";import"./chunk-5XUXGTUW.mjs";function $(t,l){if(t&1&&s(0,"li",18),t&2){let i=l.$implicit;n("innerHTML",i,c)}}var A=(()=>{class t{constructor(){this.therapist=null,this.nextTherapist=new y,this.prevTherapist=new y}onNextTherapist(){this.nextTherapist.emit()}onPrevTherapist(){this.prevTherapist.emit()}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-person-carousel"]],inputs:{therapist:"therapist"},outputs:{nextTherapist:"nextTherapist",prevTherapist:"prevTherapist"},decls:23,vars:6,consts:[[1,"person-carousel"],[1,"row","d-flex","justify-content-center","align-items-center","name-box"],[1,"col-md","text-center","my-4"],[1,"card-title","fw-bold","mb-3","mx-2"],[1,"role-title","px-4",3,"innerHTML"],[1,"col-md","p-0","img-container"],["type","image/webp",3,"srcset"],[3,"src","alt"],[1,"col-md","assistance-box"],[1,"card-title","fw-bold","mb-2","mt-4","ms-1","text-center","text-lg-start","no-wrap","ps-md-3","mx-2"],[1,"mx-2"],[3,"innerHTML",4,"ngFor","ngForOf"],[1,"next-btn",3,"click"],["srcset","assets/img/right-arrow.webp","type","image/webp"],["src","assets/img/right-arrow.png","alt","Ikona strza\u0142ki w prawo","width","30","height","30",1,"arrow-btn"],[1,"back-btn",3,"click"],["srcset","assets/img/left-arrow.webp","type","image/webp"],["src","assets/img/left-arrow.png","alt","Ikona strza\u0142ki w lewo","width","30","height","30",1,"arrow-btn"],[3,"innerHTML"]],template:function(a,e){a&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),m(4),r(),s(5,"p",4),r(),o(6,"div",5)(7,"picture"),s(8,"source",6)(9,"img",7),r()(),o(10,"div",8)(11,"h2",9),m(12," Zakres wsparcia "),r(),o(13,"ul",10),u(14,$,1,1,"li",11),r()()(),o(15,"app-next-back-btn",12),g("click",function(){return e.onNextTherapist()}),o(16,"picture"),s(17,"source",13)(18,"img",14),r()(),o(19,"app-next-back-btn",15),g("click",function(){return e.onPrevTherapist()}),o(20,"picture"),s(21,"source",16)(22,"img",17),r()()()),a&2&&(p(4),w(e.therapist==null?null:e.therapist.name),p(),n("innerHTML",e.therapist==null?null:e.therapist.role,c),p(3),n("srcset",e.therapist==null?null:e.therapist.webpImg),p(),n("src",e.therapist==null?null:e.therapist.alterImg,C)("alt","Zdj\u0119cie "+(e.therapist==null?null:e.therapist.name)),p(5),n("ngForOf",e.therapist==null?null:e.therapist.assistance))},dependencies:[M,L],styles:["p[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{font-size:16px}.person-carousel[_ngcontent-%COMP%]{position:relative;max-width:1200px;height:auto;background-color:#d6f3efe3;border-radius:15px;margin:40px auto 100px}.next-btn[_ngcontent-%COMP%]{position:absolute;top:50%;right:-110px;transform:translate(-50%)}.back-btn[_ngcontent-%COMP%]{position:absolute;top:50%;left:-50px;transform:translate(-50%)}.no-wrap[_ngcontent-%COMP%]{white-space:nowrap}.img-container[_ngcontent-%COMP%]{width:100%;min-height:600px;height:400px;overflow:hidden;position:relative}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center 20%;display:block}.arrow-btn[_ngcontent-%COMP%]{height:30px;width:30px}@media (max-width: 1400px){.next-btn[_ngcontent-%COMP%]{top:90%;right:-31px}.back-btn[_ngcontent-%COMP%]{top:90%;left:30px}}@media (max-width: 767px){.next-btn[_ngcontent-%COMP%]{top:45%;right:-31px;opacity:.8}.back-btn[_ngcontent-%COMP%]{top:45%;left:30px;opacity:.8}}"]})}}return t})();var j=(()=>{class t{constructor(){this.therapist=null}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-znany-lekarz"]],inputs:{therapist:"therapist"},decls:8,vars:1,consts:[[1,"znanyLekarz","d-flex","flex-column","flex-sm-row","justify-content-center","align-items-center","ms-sm-4","text-center","text-sm-start"],[1,"mb-0"],["src","assets/img/next.png","alt","Ikona strza\u0142ki w prawo",1,"ms-3","arrow","d-sm-inline","d-none"],["src","assets/img/down-arrow.png","alt","Ikona strza\u0142ki w d\xF3\u0142",1,"ms-3","arrow","d-sm-none"],[1,"mb-4","ms-3"],["target","_blank","rel","noopener noreferrer",1,"me-2",3,"href"],["src","assets/img/znanylekarz.jpg","alt","Ikona portalu ZnanyLekarz",1,"znany-icon","mt-3","w-75"]],template:function(a,e){a&1&&(o(0,"div",0)(1,"h4",1),m(2," Sprawd\u017A opinie na\xA0m\xF3j temat "),s(3,"img",2),r(),s(4,"img",3),o(5,"div",4)(6,"a",5),s(7,"img",6),r()()()),a&2&&(p(6),n("href",e.therapist==null?null:e.therapist.znanyLekarz,C))}})}}return t})();function U(t,l){if(t&1&&(o(0,"div"),s(1,"h3",11)(2,"p",3),r()),t&2){let i=l.$implicit;p(),n("innerHTML",i.title,c),p(),n("innerHTML",i.content,c)}}function W(t,l){if(t&1&&s(0,"li",12),t&2){let i=l.$implicit;n("innerHTML",i,c)}}function K(t,l){if(t&1&&s(0,"li",12),t&2){let i=l.$implicit;n("innerHTML",i,c)}}function G(t,l){if(t&1&&(o(0,"div")(1,"h3"),m(2,"Certyfikaty"),r(),o(3,"ul"),u(4,K,1,1,"li",8),r()()),t&2){let i=_();p(4),n("ngForOf",i.therapist==null||i.therapist.qualifications==null?null:i.therapist.qualifications.certificates)}}function J(t,l){if(t&1&&s(0,"li",12),t&2){let i=l.$implicit;n("innerHTML",i,c)}}function Q(t,l){if(t&1&&(o(0,"div")(1,"h3"),m(2,"Szkolenia Specjalistyczne"),r(),o(3,"ul"),u(4,J,1,1,"li",8),r()()),t&2){let i=_();p(4),n("ngForOf",i.therapist==null||i.therapist.qualifications==null?null:i.therapist.qualifications.specialistTrainings)}}function V(t,l){if(t&1&&s(0,"li",12),t&2){let i=l.$implicit;n("innerHTML",i,c)}}function X(t,l){if(t&1&&(o(0,"div")(1,"h3"),m(2,"Szkolenia z Integracji Sensorycznej"),r(),o(3,"ul"),u(4,V,1,1,"li",8),r()()),t&2){let i=_();p(4),n("ngForOf",i.therapist==null||i.therapist.qualifications==null?null:i.therapist.qualifications.sensoryIntegrationTrainings)}}function Y(t,l){if(t&1&&s(0,"app-znany-lekarz",13),t&2){let i=_();n("therapist",i.therapist)}}var q=(()=>{class t{constructor(){this.therapist=null}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-about-me"]],inputs:{therapist:"therapist"},decls:18,vars:7,consts:[[1,"about-me-section"],[1,"px-3"],[1,"title","underline-title"],[1,"about-text",3,"innerHTML"],[4,"ngFor","ngForOf"],[1,"qualifications-section"],[1,"underline-title"],[1,"pt-2"],[3,"innerHTML",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"therapist",4,"ngIf"],[1,"subtitle",3,"innerHTML"],[3,"innerHTML"],[3,"therapist"]],template:function(a,e){a&1&&(o(0,"app-white-container")(1,"div",0)(2,"div",1)(3,"h2",2),m(4,"O mnie"),r(),s(5,"p",3),u(6,U,3,2,"div",4),r(),o(7,"div",5)(8,"h2",6),m(9,"Kwalifikacje"),r(),o(10,"h3",7),m(11,"Wykszta\u0142cenie"),r(),o(12,"ul"),u(13,W,1,1,"li",8),r(),u(14,G,5,1,"div",9)(15,Q,5,1,"div",9)(16,X,5,1,"div",9),r(),u(17,Y,1,1,"app-znany-lekarz",10),r()()),a&2&&(p(5),n("innerHTML",e.therapist==null?null:e.therapist.aboutMe,c),p(),n("ngForOf",e.therapist==null?null:e.therapist.sections),p(7),n("ngForOf",e.therapist==null||e.therapist.qualifications==null?null:e.therapist.qualifications.education),p(),n("ngIf",e.therapist==null||e.therapist.qualifications==null?null:e.therapist.qualifications.certificates),p(),n("ngIf",e.therapist==null||e.therapist.qualifications==null?null:e.therapist.qualifications.specialistTrainings),p(),n("ngIf",e.therapist==null||e.therapist.qualifications==null?null:e.therapist.qualifications.sensoryIntegrationTrainings),p(),n("ngIf",e.therapist==null?null:e.therapist.znanyLekarz))},dependencies:[M,k,E,j],styles:[".about-text[_ngcontent-%COMP%]{font-size:16px;line-height:1.6;margin-bottom:15px;text-align:justify}.underline-title[_ngcontent-%COMP%]{display:inline-block;border-bottom:3px solid var(--pink-color);padding-bottom:5px}.qualifications-section[_ngcontent-%COMP%]{background-color:#f9f9f9;padding:20px;border-radius:10px;margin:20px auto}.qualifications-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:20px}.qualifications-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:5px;line-height:1.6}.arrow[_ngcontent-%COMP%]{width:30px}.znany-icon[_ngcontent-%COMP%]{min-width:188px}.about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .qualifications-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .qualifications-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:18px;line-height:1.7}"]})}}return t})();var D=(()=>{class t{constructor(i,a,e,d){this.therapistService=i,this.route=a,this.titleService=e,this.metaService=d,this.therapist=null,this.therapistSubscription=null}ngOnInit(){this.route.params.subscribe(i=>{let a=+i.id;this.therapistService.setActiveTherapistId(a)}),this.therapistSubscription=this.therapistService.getActiveTherapistObservable().subscribe(i=>{this.therapist=i,this.setTitleAndMeta()})}nextTherapist(){this.therapistService.nextTherapist()}prevTherapist(){this.therapistService.prevTherapist()}setTitleAndMeta(){this.therapist?(this.titleService.setTitle(this.therapist.seoData.title),this.metaService.updateTag({name:"description",content:this.therapist.seoData.metaDescription})):console.warn("setTitleAndMeta: Brak terapeuty!")}ngOnDestroy(){this.therapistSubscription&&this.therapistSubscription.unsubscribe()}static{this.\u0275fac=function(a){return new(a||t)(f(I),f(P),f(S),f(z))}}static{this.\u0275cmp=h({type:t,selectors:[["app-therapist-template"]],decls:3,vars:2,consts:[[3,"nextTherapist","prevTherapist","therapist"],[3,"therapist"]],template:function(a,e){a&1&&(o(0,"app-person-carousel",0),g("nextTherapist",function(){return e.nextTherapist()})("prevTherapist",function(){return e.prevTherapist()}),r(),s(1,"app-about-me",1)(2,"app-back-btn")),a&2&&(n("therapist",e.therapist),p(),n("therapist",e.therapist))},dependencies:[H,A,q]})}}return t})();var et=[{path:":id",component:D}],N=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=b({type:t})}static{this.\u0275inj=T({imports:[x.forChild(et),x]})}}return t})();var Tt=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=b({type:t})}static{this.\u0275inj=T({imports:[O,N,F]})}}return t})();export{Tt as TherapistTemplateModule};