(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[324],{768:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SurveysModule:()=>B});var o=n(8583),a=n(1095),i=n(4655),c=n(2789),r=n(7716),u=n(1841),s=n(2199),l=n(5939);function d(t,e){1&t&&(r.TgZ(0,"th",13),r._uU(1,"SNo. "),r.qZA())}function h(t,e){if(1&t&&(r.TgZ(0,"td",14),r._uU(1),r.qZA()),2&t){const t=e.index;r.xp6(1),r.hij(" ",t+1," ")}}function m(t,e){1&t&&(r.TgZ(0,"th",13),r._uU(1," SurveyTitle "),r.qZA())}function p(t,e){if(1&t&&(r.TgZ(0,"td",14),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t.surveyTitle," ")}}function f(t,e){1&t&&(r.TgZ(0,"th",13),r._uU(1," ActivatedOn "),r.qZA())}function g(t,e){if(1&t&&(r.TgZ(0,"td",14),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t.activatedOn," ")}}function v(t,e){1&t&&(r.TgZ(0,"th",13),r._uU(1," Actions "),r.qZA())}function y(t,e){1&t&&(r.TgZ(0,"td",14),r.TgZ(1,"button",15),r._uU(2,"Preview"),r.qZA(),r._uU(3,"\xa0\xa0\xa0 "),r.TgZ(4,"button",16),r._uU(5,"DeActivate"),r.qZA(),r.qZA())}function Z(t,e){1&t&&r._UZ(0,"tr",17)}function w(t,e){1&t&&r._UZ(0,"tr",18)}function b(t,e){1&t&&(r.TgZ(0,"th",13),r._uU(1,"SNo. "),r.qZA())}function _(t,e){if(1&t&&(r.TgZ(0,"td",14),r._uU(1),r.qZA()),2&t){const t=e.index;r.xp6(1),r.hij(" ",t+1," ")}}function A(t,e){1&t&&(r.TgZ(0,"th",13),r._uU(1," SurveyTitle "),r.qZA())}function S(t,e){if(1&t&&(r.TgZ(0,"td",14),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t.title," ")}}function C(t,e){1&t&&(r.TgZ(0,"th",13),r._uU(1," CreatedOn "),r.qZA())}function U(t,e){if(1&t&&(r.TgZ(0,"td",14),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t.createdOn," ")}}function T(t,e){1&t&&(r.TgZ(0,"th",13),r._uU(1," Actions "),r.qZA())}function x(t,e){1&t&&(r.TgZ(0,"td",14),r.TgZ(1,"button",15),r._uU(2,"Preview"),r.qZA(),r._uU(3,"\xa0\xa0\xa0 "),r.TgZ(4,"button",16),r._uU(5,"Activate"),r.qZA(),r.qZA())}function k(t,e){1&t&&r._UZ(0,"tr",17)}function q(t,e){1&t&&r._UZ(0,"tr",18)}const N=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.user=e,this.displayedColumns=["position","name","updates","Actions"],this.activeById=[],this.inactiveSurvey=[],this.activeSurvey=[],this.id="ca9dac86-f327-4491-9e46-3400a3a996b4"}ngOnInit(){setInterval(()=>this.http.get("/surveyauthor/api/v1/surveys/users/ca9dac86-f327-4491-9e46-3400a3a996b4").subscribe(t=>{this.inactiveSurvey=[],this.inactiveSurvey=t.result,console.log(t),console.log(this.inactiveSurvey),this.dataSource1=new c.by(this.inactiveSurvey)}),10),setInterval(()=>{this.http.get("/surveyengine/api/v1/surveys").subscribe(t=>{console.log(t.result),this.activeSurvey=t.result,console.log(this.activeSurvey),this.activeById=[],this.getById(),console.log(this.activeById),this.dataSource=new c.by(this.activeById)})},10)}getById(){for(let t=0;t<this.activeSurvey.length;t++)this.activeSurvey[t].createdBy.toString()===this.id.toString()&&this.activeById.push(this.activeSurvey[t])}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(u.eN),r.Y36(s._))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-surveys"]],decls:40,vars:6,consts:[[1,"sub-heading"],[2,"width","100%"],["label","Active Surveys"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","","class","tableHeader",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","updates"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["label","InActive Surveys"],["mat-header-cell","",1,"tableHeader"],["mat-cell",""],["mat-raised-button","","color","accent",2,"width","6em"],["mat-raised-button","","color","primary",2,"width","7em"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(r.TgZ(0,"p",0),r._uU(1,"Surveys"),r.qZA(),r._UZ(2,"hr",1),r.TgZ(3,"mat-tab-group"),r.TgZ(4,"mat-tab",2),r._UZ(5,"br"),r._UZ(6,"br"),r.TgZ(7,"table",3),r.ynx(8,4),r.YNc(9,d,2,0,"th",5),r.YNc(10,h,2,1,"td",6),r.BQk(),r.ynx(11,7),r.YNc(12,m,2,0,"th",5),r.YNc(13,p,2,1,"td",6),r.BQk(),r.ynx(14,8),r.YNc(15,f,2,0,"th",5),r.YNc(16,g,2,1,"td",6),r.BQk(),r.ynx(17,9),r.YNc(18,v,2,0,"th",5),r.YNc(19,y,6,0,"td",6),r.BQk(),r.YNc(20,Z,1,0,"tr",10),r.YNc(21,w,1,0,"tr",11),r.qZA(),r.qZA(),r.TgZ(22,"mat-tab",12),r._UZ(23,"br"),r._UZ(24,"br"),r.TgZ(25,"table",3),r.ynx(26,4),r.YNc(27,b,2,0,"th",5),r.YNc(28,_,2,1,"td",6),r.BQk(),r.ynx(29,7),r.YNc(30,A,2,0,"th",5),r.YNc(31,S,2,1,"td",6),r.BQk(),r.ynx(32,8),r.YNc(33,C,2,0,"th",5),r.YNc(34,U,2,1,"td",6),r.BQk(),r.ynx(35,9),r.YNc(36,T,2,0,"th",5),r.YNc(37,x,6,0,"td",6),r.BQk(),r.YNc(38,k,1,0,"tr",10),r.YNc(39,q,1,0,"tr",11),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(7),r.Q6J("dataSource",e.dataSource),r.xp6(13),r.Q6J("matHeaderRowDef",e.displayedColumns),r.xp6(1),r.Q6J("matRowDefColumns",e.displayedColumns),r.xp6(4),r.Q6J("dataSource",e.dataSource1),r.xp6(13),r.Q6J("matHeaderRowDef",e.displayedColumns),r.xp6(1),r.Q6J("matRowDefColumns",e.displayedColumns))},directives:[l.SP,l.uX,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,c.ge,c.ev,a.lW,c.XQ,c.Gk],styles:[".sub-heading[_ngcontent-%COMP%]{font-size:18px;font-weight:700;font-family:Roboto}.mat-tab-lables[_ngcontent-%COMP%]{flex:50%;flex-wrap:wrap;justify-content:space-around;align-content:stretch;align-items:baseline;flex-direction:row}.Active[_ngcontent-%COMP%]   Surveys[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:blue}table[_ngcontent-%COMP%]{width:100%}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 0%!important;width:30%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-name[_ngcontent-%COMP%]{justify-content:center}.mat-column-Actions[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 0%!important;width:20%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}"]}),t})()}];let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.Bz.forChild(N)],i.Bz]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.ez,Y,l.Nh,u.JF,a.ot,c.p0]]}),t})()}}]);