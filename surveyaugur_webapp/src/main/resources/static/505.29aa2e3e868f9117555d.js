(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[505],{5505:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ProfileModule:()=>m});var i=n(8583),o=n(4655);class r{constructor(){}}var a=n(7716),s=n(1841),l=n(2199),g=n(3738),c=n(1095),d=n(3679);function u(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"input",24),a.NdJ("change",function(t){return a.CHM(e),a.oxw().readURL(t)}),a.qZA()}if(2&e){const e=a.oxw();a.Q6J("disabled",!e.isEditing)}}const p=[{path:"",component:(()=>{class e{constructor(e,t){this.http=e,this.userinfo=t,this.profileImagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HrjlxizejA_sfkfPhIaAdv5Cxy6A-HGFzA&usqp=CAU",this.isEditing=!1,this.user1=new r,this.enable=!0}ngOnInit(){this.http.get("/userservice/api/v1/users/f5601d6b-08fc-428a-bfb8-c9b12768cc81").subscribe(e=>{console.log(e),this.user1.userId=e.userId,this.user1.username=e.username,console.log(this.user1.username),this.user1.email=e.email,this.user1.avatar=e.avatar,this.profileImagePath=e.avatar,this.user1.userRole=e.userRole,this.user1.accessLevel=e.accessLevel,this.user1.organization=e.organization,console.log(this.user1)})}onEdit(){this.isEditing=!0}onsave(e){this.isEditing=!1,console.log(e);let t=e.value,n=new r;n.username=this.user1.username,n.email=this.user1.email,n.accessLevel=this.user1.accessLevel,n.organization=t.org,n.userRole=this.user1.userRole,n.avatar=this.profileImagePath.toString(),n.userId="f5601d6b-08fc-428a-bfb8-c9b12768cc81",console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),console.log(n),this.http.put("/userservice/api/v1/users/f5601d6b-08fc-428a-bfb8-c9b12768cc81",n).subscribe(e=>{console.log(e),console.log("imside")})}readURL(e){console.log("Image uploaded");const t=e.target.files;if(0===t.length)return;if(null==t[0].type.match(/image\/*/))return;let n=new FileReader;n.readAsDataURL(e.target.files[0]),n.onload=()=>{this.profileImagePath=n.result},console.log(this.profileImagePath)}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(s.eN),a.Y36(l._))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-profile"]],decls:51,vars:12,consts:[[1,"profile-header"],["id","main"],["id","left"],[1,"profile-detail"],[1,"user-important-detail"],[1,"user-photo"],["id","blah","alt","your image",3,"src"],[1,"user-name"],["mat-button","",1,"btn-edit",3,"click"],["type","file","class","profile-image-selector",3,"disabled","change",4,"ngIf"],[1,"form-container"],[1,"user-details"],[1,"data-form"],["uinfo","ngForm"],[1,"form-field"],["type","text","id","UserName","name","username",3,"ngModel","ngModelChange"],["type","text","id","Email","name","email","placeholder","me@gmail.com",3,"ngModel","ngModelChange"],["type","text","id","Role","name","role","placeholder","developer",3,"ngModel","ngModelChange"],["type","text","id","Access Level","name","access","placeholder","premium",3,"ngModel","ngModelChange"],["type","text","id","form-field","name","org",3,"ngModel","ngModelChange"],["mat-button","",1,"btn-save",3,"click"],["id","right"],["id","test",1,"user-selections"],[1,"card"],["type","file",1,"profile-image-selector",3,"disabled","change"]],template:function(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"div"),a.TgZ(1,"div",0),a._uU(2,"User Profile"),a.qZA(),a.qZA(),a.TgZ(3,"div",1),a.TgZ(4,"div",2),a.TgZ(5,"mat-card",3),a.TgZ(6,"div",4),a.TgZ(7,"div",5),a._UZ(8,"img",6),a.qZA(),a.TgZ(9,"div",7),a._uU(10),a.qZA(),a.TgZ(11,"button",8),a.NdJ("click",function(){return t.onEdit()}),a._uU(12,"Edit"),a.qZA(),a.YNc(13,u,1,1,"input",9),a.qZA(),a.TgZ(14,"mat-card",10),a.TgZ(15,"div",11),a._uU(16," User Details"),a.qZA(),a.TgZ(17,"form",12,13),a.TgZ(19,"div",14),a.TgZ(20,"label"),a._uU(21,"UserName"),a.qZA(),a.TgZ(22,"input",15),a.NdJ("ngModelChange",function(e){return t.user1.username=e}),a.qZA(),a.qZA(),a.TgZ(23,"div",14),a.TgZ(24,"label"),a._uU(25,"Email"),a.qZA(),a.TgZ(26,"input",16),a.NdJ("ngModelChange",function(e){return t.user1.email=e}),a.qZA(),a.qZA(),a.TgZ(27,"div",14),a.TgZ(28,"label"),a._uU(29,"Role"),a.qZA(),a.TgZ(30,"input",17),a.NdJ("ngModelChange",function(e){return t.user1.userRole=e}),a.qZA(),a.qZA(),a.TgZ(31,"div",14),a.TgZ(32,"label"),a._uU(33,"Access Level"),a.qZA(),a.TgZ(34,"input",18),a.NdJ("ngModelChange",function(e){return t.user1.accessLevel=e}),a.qZA(),a.qZA(),a.TgZ(35,"div",14),a.TgZ(36,"label"),a._uU(37,"Organization"),a.qZA(),a.TgZ(38,"input",19),a.NdJ("ngModelChange",function(e){return t.user1.organization=e}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(39,"button",20),a.NdJ("click",function(){a.CHM(e);const n=a.MAs(18);return t.onsave(n)}),a._uU(40,"Save"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(41,"div",21),a.TgZ(42,"div",22),a.TgZ(43,"div",23),a._uU(44," CURRENT_PLAN "),a.qZA(),a.TgZ(45,"div",23),a._uU(46," FAQ and Help "),a.qZA(),a.TgZ(47,"div",23),a._uU(48," LINKED_ACCOUNT "),a.qZA(),a.TgZ(49,"div",23),a._uU(50," ABOUT_US "),a.qZA(),a.qZA(),a.qZA(),a.qZA()}2&e&&(a.xp6(8),a.Q6J("src",t.profileImagePath,a.LSH),a.xp6(2),a.hij(" ",t.user1.username," "),a.xp6(3),a.Q6J("ngIf",t.isEditing),a.xp6(9),a.Q6J("ngModel",t.user1.username),a.uIk("disabled",!0),a.xp6(4),a.Q6J("ngModel",t.user1.email),a.uIk("disabled",!0),a.xp6(4),a.Q6J("ngModel",t.user1.userRole),a.uIk("disabled",!0),a.xp6(4),a.Q6J("ngModel",t.user1.accessLevel),a.uIk("disabled",!0),a.xp6(4),a.Q6J("ngModel",t.user1.organization))},directives:[g.a8,c.lW,i.O5,d._Y,d.JL,d.F,d.Fj,d.JJ,d.On],styles:["#main[_ngcontent-%COMP%]{width:100%;display:flex}#left[_ngcontent-%COMP%]{width:60%}#left[_ngcontent-%COMP%], #right[_ngcontent-%COMP%]{margin-top:50px}#right[_ngcontent-%COMP%]{float:right;width:40%}.profile-header[_ngcontent-%COMP%]{font-size:larger;width:200px;text-align:center;margin-top:3%;color:blue}.profile-detail[_ngcontent-%COMP%]{height:400px;width:100%;padding:0;display:flex}.user-important-detail[_ngcontent-%COMP%]{height:300px;width:30%;min-width:200px;display:flex;flex-direction:column;align-items:center}.user-important-detail[_ngcontent-%COMP%]   .user-photo[_ngcontent-%COMP%]{margin-top:10px}.user-important-detail[_ngcontent-%COMP%]   .user-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:180px}.user-important-detail[_ngcontent-%COMP%]   .user-photo[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{padding:10px;background:#2d2d2d}.user-important-detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:180px;height:180px;border-radius:50%;object-fit:cover}.user-important-detail[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin-top:10px;color:blue}.user-important-detail[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]{margin-top:10px;width:50px;align-self:flex-end;margin-right:10px;background:orange;color:#fff}.user-important-detail[_ngcontent-%COMP%]   .profile-image-selector[_ngcontent-%COMP%]{width:100px}.user-details[_ngcontent-%COMP%]{align-self:center;color:blue}.form-container[_ngcontent-%COMP%]{width:70%;display:flex;flex-direction:column}.form-container[_ngcontent-%COMP%]   .data-form[_ngcontent-%COMP%]{padding:20px}.form-container[_ngcontent-%COMP%]   .data-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}.form-container[_ngcontent-%COMP%]   .data-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:200px}.form-container[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]{margin-top:10px;width:50px;align-self:flex-end;background:orange;color:#fff}.user-selections[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-top:0;align-items:flex-end;margin-left:auto;margin-right:40px}.card[_ngcontent-%COMP%]{width:60%;height:50px;text-align:center;box-shadow:0 4px 8px 0 #000;margin:2% 2% 7%;border-left:5px solid orange;display:flex;align-items:center;justify-content:center}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.Bz.forChild(p)],o.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.ez,f,g.QW,c.ot,d.u5,d.UX]]}),e})()}}]);