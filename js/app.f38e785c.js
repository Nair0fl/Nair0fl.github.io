(function(e){function t(t){for(var n,o,i=t[0],l=t[1],d=t[2],u=0,m=[];u<i.length;u++)o=i[u],r[o]&&m.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"090f":function(e){e.exports=[{id:1,startDate:"10-04-2016",endDate:"08-31-2018",weeklyHour:35},{id:2,startDate:"09-08-2017",endDate:"08-31-2020",weeklyHour:35}]},1339:function(e){e.exports={absences:[{Type:"Absence Maladie",start:"11-02-201809:30",end:"11-02-201818:00"}]}},"19cc":function(e){e.exports={users:[{id:"s1",firstname:"florian",lastname:"salarie",type:"Salaried",birthDate:"17/12/1996",adress:{zipCode:"44000",street:"rue du haut moreau",number:"36"},mail:"florian.boche@ynov.com",tel:"0633891640",password:"salarie"},{id:"M1",firstname:"florian",lastname:"manager",type:"Manager",birthDate:"17/12/1996",adress:{zipCode:"44000",street:"rue du haut moreau",number:"36"},mail:"florian.boche@ynov.com",tel:"0633891640",password:"manager"},{id:"D1",firstname:"florian",lastname:"drh",type:"Drh",birthDate:"17/12/1996",adress:{zipCode:"44000",street:"rue du haut moreau",number:"36"},mail:"florian.boche@ynov.com",tel:"0633891640",password:"drh"}]}},"3a47":function(e){e.exports={hours:[{"10-21-2018":{startMorning:"09:00",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00",nbrheure:7}},{"11-01-2018":{startMorning:"09:00",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00",nbrheure:7}},{"11-21-2018":{startMorning:"09:00",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00",nbrheure:7}},{"11-20-2018":{startMorning:"09:00",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00",nbrheure:7}},{"11-19-2018":{startMorning:"09:00",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00",nbrheure:7}}]}},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"48bf":function(e){e.exports={totalPrit:2,vacations:[{startDate:"11-05-2018",endDate:"11-09-2018"}]}},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view",{on:{authenticated:e.setAuthenticated}})],1)},s=[],o=(a("a481"),a("8c4f")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"login"}},[a("h1",[e._v("Login")]),a("b-form",[a("b-form-input",{attrs:{type:"text",placeholder:"Username"},model:{value:e.input.username,callback:function(t){e.$set(e.input,"username",t)},expression:"input.username"}}),a("b-form-input",{attrs:{type:"password",name:"password",placeholder:"Password"},model:{value:e.input.password,callback:function(t){e.$set(e.input,"password",t)},expression:"input.password"}}),a("b-button",{on:{click:function(t){e.login()}}},[e._v("Login")])],1)],1)},l=[],d=a("19cc"),c={name:"Login",router:se,json:d,data:function(){return{input:{username:"",password:""}}},methods:{login:function(){if(""!=this.input.username&&""!=this.input.password)for(var e in d.users)this.input.username===d.users[e].lastname&&this.input.password===d.users[e].password&&(this.$emit("authenticated",!0),window.localStorage.setItem("user",JSON.stringify(d.users[e])),this.$router.replace({name:d.users[e].type+""}));else alert("A username and password must be present")}}},u=c,m=a("2877"),f=Object(m["a"])(u,i,l,!1,null,null,null);f.options.__file="Connexion.vue";var p=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"SalariedZone"},[a("div",{attrs:{id:"nav"}},[a("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),a("b-navbar-brand",{attrs:{href:"#"}},[e._v("NavBar")]),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{right:""}},[a("template",{slot:"button-content"},[a("em",[e._v("User")])]),a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Profile")]),a("b-dropdown-item",{attrs:{href:"#"},on:{click:e.logout}},[e._v("Deconnexion")])],2)],1)],1)],1)],1),a("b-row",[a("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[a("h1",[e._v("Bonjour "+e._s(e.user.firstname+" "+e.user.lastname))])])],1),a("b-row",[a("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"Informations Personnelles",active:""}},[a("b-form",[a("b-col",{attrs:{cols:"12",sm:"5",md:"12",lg:"12",xl:"12"}},[a("b-form-group",{attrs:{id:"mailAdresseLabel",label:"Email address:","label-for":"mailAdresseInput"}},[a("b-form-input",{attrs:{id:"mailAdresseInput",type:"email",required:"",placeholder:"Enter email"},model:{value:e.newuser.mail,callback:function(t){e.$set(e.newuser,"mail",t)},expression:"newuser.mail"}})],1)],1),a("b-col",{attrs:{cols:"12",sm:"5",md:"12",lg:"12",xl:"12"}},[a("b-form-group",{attrs:{id:"telLabel",label:"Téléphone :","label-for":"telInput"}},[a("b-form-input",{attrs:{id:"telInput"},model:{value:e.newuser.tel,callback:function(t){e.$set(e.newuser,"tel",t)},expression:"newuser.tel"}})],1)],1),a("b-col",{attrs:{cols:"12",sm:"5",md:"12",lg:"12",xl:"12"}},[a("b-form-group",{attrs:{id:"AdresseLabel",label:"Adresse:","label-for":"AdresseInput"}},[a("b-form-input",{attrs:{id:"AdresseInput",type:"text",required:"",placeholder:"Enter rue"},model:{value:e.newuser.adress.street,callback:function(t){e.$set(e.newuser.adress,"street",t)},expression:"newuser.adress.street"}})],1)],1),a("b-col",{attrs:{cols:"12",sm:"5",md:"12",lg:"12",xl:"12"}},[a("b-form-group",{attrs:{id:"ZipCodeLabel",label:"ZipCode:","label-for":"ZipCodeInput"}},[a("b-form-input",{attrs:{id:"ZipCodeInput",type:"text",required:"",placeholder:"Enter rue"},model:{value:e.newuser.adress.zipCode,callback:function(t){e.$set(e.newuser.adress,"zipCode",t)},expression:"newuser.adress.zipCode"}})],1)],1),a("b-col",{attrs:{cols:"12",sm:"5",md:"12",lg:"12",xl:"12"}},[a("b-form-group",{attrs:{id:"numberLabel",label:"number:","label-for":"numberInput"}},[a("b-form-input",{attrs:{id:"numberInput",type:"text",required:"",placeholder:"Enter rue"},model:{value:e.newuser.adress.number,callback:function(t){e.$set(e.newuser.adress,"number",t)},expression:"newuser.adress.number"}})],1)],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1),a("b-tab",{attrs:{title:"Planning"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("calendar",{attrs:{contrat:e.currentContrat}})],1)],1)],1),a("b-tab",{attrs:{title:"Tableau de Bord"}},[a("b-row",[e.totalConge&&e.soldeConge?a("b-col",{attrs:{cols:"12"}},[a("b-progress",{attrs:{max:e.totalConge}},[a("b-progress-bar",{attrs:{value:e.soldeConge}},[a("strong",[e._v(e._s(e.soldeConge)+" / "+e._s(e.totalConge))])])],1)],1):e._e(),a("b-col",{attrs:{cols:"12"}},[a("b-form-select",{model:{value:e.selectedContract,callback:function(t){e.selectedContract=t},expression:"selectedContract"}},e._l(e.contracts,function(t){return a("option",{key:t.id,domProps:{value:{id:t.id,startDate:t.startDate,endDate:t.endDate,weeklyHour:t.weeklyHour}}},[e._v(" Contract "+e._s(t.id))])}))],1),a("b-col",[e.contractsAffichage?a("b-table",{attrs:{striped:"",hover:"",items:e.contractsAffichage,fields:e.fields}}):e._e()],1)],1),a("p",[e._v("Compteur Hebdomadaire : "+e._s(e.compteurHebdomadaire)+"h travaillé")]),a("p",[e._v("Compteur Mensuel : "+e._s(e.compteurMensuelle)+"h travaillé")]),a("p",[e._v("Compteur Annuel : "+e._s(e.compteurAnnuelle)+"h travaillé")])],1),a("b-tab",{attrs:{title:"Demande"}},[a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{label:"Type demande"}},[a("b-form-radio-group",{attrs:{id:"radios2",name:"radioSubComponent"},model:{value:e.selectedTypeDemande,callback:function(t){e.selectedTypeDemande=t},expression:"selectedTypeDemande"}},[a("b-form-radio",{attrs:{value:"conge"}},[e._v("Congé payé")]),a("b-form-radio",{attrs:{value:"recup"}},[e._v("Récupération de temps de travail ")])],1)],1)],1),a("b-col",{attrs:{cols:"6"}},["conge"===e.selectedTypeDemande?a("div",[a("date-picker",{attrs:{config:e.options},model:{value:e.demandeVac.dateDebVacanceDemande,callback:function(t){e.$set(e.demandeVac,"dateDebVacanceDemande",t)},expression:"demandeVac.dateDebVacanceDemande"}}),a("date-picker",{attrs:{config:e.options},model:{value:e.demandeVac.dateFinVacanceDemande,callback:function(t){e.$set(e.demandeVac,"dateFinVacanceDemande",t)},expression:"demandeVac.dateFinVacanceDemande"}}),a("textarea",{attrs:{id:"story",name:"story",placeholder:"commentaire"}}),a("b-button",[e._v("Envoyer")])],1):e._e(),"recup"===e.selectedTypeDemande?a("div",[a("date-picker",{attrs:{config:e.options},model:{value:e.demandeVac.dateDebVacanceDemande,callback:function(t){e.$set(e.demandeVac,"dateDebVacanceDemande",t)},expression:"demandeVac.dateDebVacanceDemande"}}),a("date-picker",{attrs:{config:e.options},model:{value:e.demandeVac.dateFinVacanceDemande,callback:function(t){e.$set(e.demandeVac,"dateFinVacanceDemande",t)},expression:"demandeVac.dateFinVacanceDemande"}}),a("textarea",{attrs:{id:"story",name:"story",placeholder:"commentaire"}}),a("b-button",[e._v("Envoyer")])],1):e._e()])],1)],1)],1)],1)],1)],1)},Y=[],h=(a("ac6a"),a("456d"),a("20d6"),a("6762"),a("2fdb"),a("133f")),v=a.n(h),D=a("c1df"),M=a.n(D),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[e.modification?a("b-container",[a("b-alert",{attrs:{show:"",variant:"warning"}},[e._v("\r\n      Envoyer modification au manager \r\n      "),a("b-button",{attrs:{variant:"warning"},on:{click:function(t){return t.preventDefault(),e.toValidation(t)}}},[e._v("\r\n       OK\r\n      ")])],1)],1):e._e(),a("full-calendar",{attrs:{config:e.config,events:e.events},on:{"event-drop":e.EventsChange}})],1)},j=[],w=a("2ef0"),y=a.n(w),k=a("3a47"),H=(a("fa91"),a("48bf")),x=a("1339"),_=[],A=[],C=[],S=[],N=[];k.hours.forEach(function(e){var t=Object.keys(e)[0],a={title:t+" Morning",start:M()(t+e[t].startMorning,"MM-DD-YYYYHH:mm"),end:M()(t+e[t].endMorning,"MM-DD-YYYYHH:mm"),editable:!1},n={title:t+" Afternoon",start:M()(t+e[t].startAfternoon,"MM-DD-YYYYHH:mm"),end:M()(t+e[t].endAfternoon,"MM-DD-YYYYHH:mm"),editable:!1};_.push(a,n)}),H.vacations.forEach(function(e){var t={title:"Vacance",start:M()(e.startDate,"MM-DD-YYYY"),end:M()(e.endDate,"MM-DD-YYYY"),color:"#378006",editable:!1};S.push(t)}),x.absences.forEach(function(e){var t={title:e.Type,start:M()(e.start,"MM-DD-YYYYHH:mm"),end:M()(e.end,"MM-DD-YYYYHH:mm"),color:"#FF0000",editable:!1};N.push(t)});var U=_.concat(N).concat(S).concat(A).concat(C),z={name:"calendar",data:function(){return{modification:null,events:U,config:{defaultView:"month"}}},props:["contrat"],computed:{},mounted:function(){var e=M()();while(e.isBefore(M()(this.contrat.endDate,"MM-DD-YYYY")))e.day()<5&&(U.push({title:"Horraire prévu matin",start:M()(e.format("MM-DD-YYYY")+"09:00","MM-DD-YYYYHH:mm"),end:M()(e.format("MM-DD-YYYY")+"12:00","MM-DD-YYYYHH:mm")}),U.push({title:"Horraire prévu après-midi",start:M()(e.format("MM-DD-YYYY")+"13:00","MM-DD-YYYYHH:mm"),end:M()(e.format("MM-DD-YYYY")+"17:00","MM-DD-YYYYHH:mm")})),e.add(1,"days")},methods:{EventsChange:function(e){var t=e.title,a=this.events.filter(function(e){return e.title===t})[0]||C.filter(function(e){return e.title===t})[0];if(a.start!=e.start||a.end!=e.end){var n={title:t,start:e.start,end:e.end,color:"#FF7F50"};y.a.remove(A,function(e){return e.title===t}),y.a.remove(C,function(e){return e.title===t}),y.a.remove(_,function(e){return e.title===t}),y.a.remove(this.events,function(e){return e.title===t}),this.events.push(n),A.push(n),this.modification=!0}},toValidation:function(){var e=this;this.modification=!1,A.forEach(function(t){var a={title:t.title,start:t.start,end:t.end,color:"#00BFFF"};y.a.remove(C,function(e){return e.title===t.title}),y.a.remove(e.events,function(e){return e.title===t.title}),C.push(a),e.events.push(a)})}}},V=z,I=Object(m["a"])(V,g,j,!1,null,null,null);I.options.__file="Calendar.vue";var E=I.exports,$=a("090f"),O=JSON.parse(window.localStorage.getItem("user")),F={name:"Salaried",data:function(){return{options:{format:"MM-DD-YYYY",useCurrent:!1},user:O,fields:["startDate","endDate","weeklyHour"],contracts:$,demandeVac:{dateFinVacanceDemande:null,dateDebVacanceDemande:null,commentaire:null},newuser:O,demandeRecup:{dateFinRecupDemande:null,dateDebRecupDemande:null,commentaire:null},contractsAffichage:null,selectedContract:null,currentContrat:null,soldeConge:null,totalConge:null,compteurAnnuelle:0,compteurMensuelle:0,compteurHebdomadaire:0,selectedTypeDemande:null,config:{defaultView:"month"}}},components:{datePicker:v.a,Calendar:E},watch:{selectedContract:function(){this.contractsAffichage=[this.selectedContract]}},mounted:function(){this.$nextTick(function(){for(var e in this.getcompteur("week"),this.getcompteur("month"),this.getcompteur("year"),this.contracts){var t=M()(this.contracts[e].endDate).format("DD-MM-YYYY");if(M()(t,"DD-MM-YYYY").fromNow().includes("in")){this.currentContrat=this.contracts[e],this.contractsAffichage=[this.currentContrat];var a=M()().format("YYYY"),n=M()().diff(M()("01-01-"+a),"month"),r=void 0;r=n>=0?n:M()().diff(M()(this.contracts[e].startDate),"months"),this.totalConge=Math.ceil(2.08*r),this.soldeConge=this.totalConge-H.totalPrit}}})},methods:{logout:function(){window.sessionStorage.removeItem("user"),this.$router.push("/")},getcompteur:function(e){var t=M()(),a=M()();t.lang("fr"),t.startOf(e);var n=M.a.duration(t.diff(t));while(t.isBefore(a,"day")){var r=k.hours.findIndex(function(e){return Object.keys(e)[0]===t.format("MM-DD-YYYY")});if(-1!=r){var s=k.hours[r][t.format("MM-DD-YYYY")],o=M()(t.format("MM-DD-YYYY")+s.startMorning,"MM-DD-YYYYHH:mm"),i=M()(t.format("MM-DD-YYYY")+s.endMorning,"MM-DD-YYYYHH:mm"),l=M()(t.format("MM-DD-YYYY")+s.startAfternoon,"MM-DD-YYYYHH:mm"),d=M()(t.format("MM-DD-YYYY")+s.endAfternoon,"MM-DD-YYYYHH:mm"),c=M.a.duration(i.diff(o));c.add(M.a.duration(d.diff(l))),n.add(c)}t.add(1,"day")}var u=Math.floor(n/36e5),m=Math.floor(n/1e3/60%60),f=u+":"+m;switch(e){case"year":this.compteurAnnuelle=f;break;case"month":this.compteurMensuelle=f;break;case"week":this.compteurHebdomadaire=f;break}},changeInformation:function(){}}},T=F,P=(a("63af"),Object(m["a"])(T,b,Y,!1,null,null,null));P.options.__file="SalariedZone.vue";var L=P.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"ManagerZone"},[a("b-row",[a("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"Ajouter salarié",active:""}},[a("b-col",{attrs:{cols:"12",sm:"5",md:"12",lg:"12",xl:"12"}},[a("b-form-group",{attrs:{id:"firstname",label:"Prénom:","label-for":"firstnameInput",description:"We'll never share your email with anyone else."}},[a("b-form-input",{attrs:{id:"firstnameInput",type:"text",required:"",placeholder:"Enter firstname"},model:{value:e.NewUser.firstname,callback:function(t){e.$set(e.NewUser,"firstname",t)},expression:"NewUser.firstname"}})],1)],1),a("b-col",{attrs:{cols:"12",sm:"5",md:"12",lg:"12",xl:"12"}},[a("b-form-group",{attrs:{id:"lastname",label:"Nom:","label-for":"lastnameInput"}},[a("b-form-input",{attrs:{id:"lastnameInput",type:"text",required:"",placeholder:"Enter lastname"},model:{value:e.NewUser.lastname,callback:function(t){e.$set(e.NewUser,"lastname",t)},expression:"NewUser.lastname"}})],1)],1),a("b-col",{attrs:{sm:"5"}},[a("b-form-group",{attrs:{id:"mailAdresseLabel",label:"Email address:","label-for":"mailAdresseInput",description:"We'll never share your email with anyone else."}},[a("b-form-input",{attrs:{id:"mailAdresseInput",type:"email",required:"",placeholder:"Enter email"},model:{value:e.NewUser.mail,callback:function(t){e.$set(e.NewUser,"mail",t)},expression:"NewUser.mail"}})],1)],1),a("b-col",{attrs:{cols:"12",sm:"5",md:"12",lg:"12",xl:"12"}},[a("b-form-group",{attrs:{id:"telLabel",label:"Téléphone :","label-for":"telInput"}},[a("b-form-input",{attrs:{id:"telInput"},model:{value:e.NewUser.tel,callback:function(t){e.$set(e.NewUser,"tel",t)},expression:"NewUser.tel"}})],1)],1),a("b-col",{attrs:{cols:"12",sm:"5",md:"12",lg:"12",xl:"12"}},[a("b-form-group",{attrs:{id:"AdresseLabel",label:"Adresse:","label-for":"AdresseInput"}},[a("b-form-input",{attrs:{id:"AdresseInput",type:"text",required:"",placeholder:"Enter rue"},model:{value:e.NewUser.adress.street,callback:function(t){e.$set(e.NewUser.adress,"street",t)},expression:"NewUser.adress.street"}})],1)],1),a("b-col",{attrs:{cols:"12",sm:"5",md:"12",lg:"12",xl:"12"}},[a("b-form-group",{attrs:{id:"ZipCodeLabel",label:"ZipCode:","label-for":"ZipCodeInput"}},[a("b-form-input",{attrs:{id:"ZipCodeInput",type:"text",required:"",placeholder:"Enter rue"},model:{value:e.NewUser.adress.zipCode,callback:function(t){e.$set(e.NewUser.adress,"zipCode",t)},expression:"NewUser.adress.zipCode"}})],1)],1),a("b-col",{attrs:{cols:"12",sm:"5",md:"12",lg:"12",xl:"12"}},[a("b-form-group",{attrs:{id:"numberLabel",label:"number:","label-for":"numberInput"}},[a("b-form-input",{attrs:{id:"numberInput",type:"text",required:"",placeholder:"Enter rue"},model:{value:e.NewUser.adress.number,callback:function(t){e.$set(e.NewUser.adress,"number",t)},expression:"NewUser.adress.number"}})],1)],1),a("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.newSalarie}},[e._v("Submit")])],1),a("b-tab",{attrs:{title:"Planning Équipe"}},[a("b-form-select",{on:{input:e.refresh},model:{value:e.selectedSalarie,callback:function(t){e.selectedSalarie=t},expression:"selectedSalarie"}},e._l(e.salarieResponsable,function(t){return a("option",{key:t.id,domProps:{value:t}},[e._v(" "+e._s(t.firstname))])})),a("full-calendar",{attrs:{config:e.config,events:e.events}})],1)],1)],1)],1)],1)],1)},Z=[],R=a("ad6d"),B=a("c64e"),J=R.users,W={name:"Manager",data:function(){return{events:[],config:{defaultView:"month"},selectedSalarie:null,salarieResponsable:J,NewUser:{id:B(),firstname:null,lastname:null,type:"Salaried",birthDate:null,adress:{zipCode:null,street:null,number:null},mail:null,tel:null}}},methods:{newSalarie:function(){this.salarieResponsable.push(this.NewUser),this.NewUser.id=B(),this.NewUser.firstname=null,this.NewUser.lastname=null,this.NewUser.birthDate=null,this.NewUser.adress.zipCode=null,this.NewUser.adress.street=null,this.NewUser.adress.number=null,this.NewUser.mail=null,this.NewUser.tel=null},refresh:function(){this.events=[];var e=M()(this.selectedSalarie.contratEnCours.startDate,"MM-DD-YYYY");while(e.isBefore(M()(this.selectedSalarie.contratEnCours.endDate,"MM-DD-YYYY"))){var t=this.selectedSalarie.planning.presence.findIndex(function(t){return Object.keys(t)[0]===e.format("MM-DD-YYYY")});if(-1===t){var a=this.selectedSalarie.planning.vacations.findIndex(function(t){return Object.keys(t)[0]===e.format("MM-DD-YYYY")});if(-1===a){var n=this.selectedSalarie.planning.absences.findIndex(function(t){return Object.keys(t)[0]===e.format("MM-DD-YYYY")});if(-1===n)e.day()<6&&e.day()>0&&(this.events.push({title:"Horraire matin",start:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.startMorning,"MM-DD-YYYYHH:mm"),end:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.endMorning,"MM-DD-YYYYHH:mm")}),this.events.push({title:"Horraire après-Midi",start:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.startAfternoon,"MM-DD-YYYYHH:mm"),end:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.endAfternoon,"MM-DD-YYYYHH:mm")}));else{var r=this.selectedSalarie.planning.absences[n][e.format("MM-DD-YYYY")];this.events.push({title:r.Type,start:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.startMorning,"MM-DD-YYYYHH:mm"),end:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.endMorning,"MM-DD-YYYYHH:mm"),color:"#FF0000"}),this.events.push({title:r.Type,start:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.startMorning,"MM-DD-YYYYHH:mm"),end:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.endMorning,"MM-DD-YYYYHH:mm"),color:"#FF0000"}),e.add(1,"day")}}else{var s=this.selectedSalarie.planning.vacations[a][e.format("MM-DD-YYYY")];while(e.isBefore(s.endDate)||e.isSame(s.endDate))this.events.push({title:"Vacances",start:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.startMorning,"MM-DD-YYYYHH:mm"),end:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.endMorning,"MM-DD-YYYYHH:mm"),color:"#378006"}),this.events.push({title:"Vacances",start:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.startAfternoon,"MM-DD-YYYYHH:mm"),end:M()(e.format("MM-DD-YYYY")+this.selectedSalarie.planning.presenceprevu.endAfternoon,"MM-DD-YYYYHH:mm"),color:"#378006"}),e.add(1,"day")}}else{var o=this.selectedSalarie.planning.presence[t][e.format("MM-DD-YYYY")];this.events.push({title:"Horraire matin",start:M()(e.format("MM-DD-YYYY")+o.startMorning,"MM-DD-YYYYHH:mm"),end:M()(e.format("MM-DD-YYYY")+o.endMorning,"MM-DD-YYYYHH:mm")}),this.events.push({title:"Horraire après-Midi",start:M()(e.format("MM-DD-YYYY")+o.startAfternoon,"MM-DD-YYYYHH:mm"),end:M()(e.format("MM-DD-YYYY")+o.endAfternoon,"MM-DD-YYYYHH:mm")})}e.add(1,"day")}}}},K=W,G=Object(m["a"])(K,q,Z,!1,null,null,null);G.options.__file="ManagerZone.vue";var Q=G.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"DRH"},[e._v("\r\n DRH\r\n")])},ee=[],te={name:"DRH",data:function(){return{}}},ae=te,ne=Object(m["a"])(ae,X,ee,!1,null,null,null);ne.options.__file="DrhZone.vue";var re=ne.exports;n["a"].use(o["a"]);var se=new o["a"]({routes:[{path:"/",redirect:{name:"login"}},{path:"/login",name:"login",component:p},{path:"/Salaried",name:"Salaried",component:L},{path:"/Manager",name:"Manager",component:Q},{path:"/Drh",name:"Drh",component:re}]}),oe=a("9f7b"),ie=(a("f9e3"),a("2dd8"),a("7b38"));n["a"].use(oe["a"]),n["a"].use(ie["Card"]),n["a"].use(ie["Form"]);var le={name:"App",router:se,data:function(){return{authenticated:!1,iduser:null}},mounted:function(){this.authenticated||this.$router.replace({name:"login"})},methods:{setAuthenticated:function(e){this.authenticated=e},setIduser:function(e){this.iduser=e},logout:function(){this.authenticated=!1}}},de=le,ce=Object(m["a"])(de,r,s,!1,null,null,null);ce.options.__file="App.vue";var ue=ce.exports,me=a("25cc");n["a"].use(me["a"]),new n["a"]({render:function(e){return e(ue)}}).$mount("#app")},"63af":function(e,t,a){"use strict";var n=a("c8f0"),r=a.n(n);r.a},ad6d:function(e){e.exports={users:[{id:"s1",firstname:"florian",lastname:"salarie",type:"Salaried",birthDate:"17/12/1996",adress:{zipCode:"44000",street:"rue du haut moreau",number:"36"},mail:"florian.boche@ynov.com",tel:"0633891640",password:"salarie",contratEnCours:{startDate:"09-08-2017",endDate:"08-31-2020",weeklyHour:35},planning:{vacations:[{"11-05-2018":{endDate:"11-09-2018"}}],absences:[{"11-02-2018":{Type:"Absence Maladie",end:"11-02-2018"}}],presenceprevu:{startMorning:"09:00",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00"},presencePrevuChange:[],presence:[{"10-21-2018":{startMorning:"09:00",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00",nbrheure:7}},{"11-01-2018":{startMorning:"08:00",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00",nbrheure:7}},{"11-21-2018":{startMorning:"11:00",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00",nbrheure:7}},{"11-20-2018":{startMorning:"10:00",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00",nbrheure:7}},{"11-19-2018":{startMorning:"08:15",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00",nbrheure:7}}]}},{id:"s2",firstname:"salarie2",lastname:"salarie2",type:"Salaried",birthDate:"17/12/1996",adress:{zipCode:"44000",street:"rue du haut moreau",number:"36"},mail:"florian.boche@ynov.com",tel:"0633891640",password:"salarie",planning:{vacations:[{startDate:"11-05-2018",endDate:"11-09-2018"}],absences:[{Type:"Absence Maladie",start:"11-02-201809:30",end:"11-02-201818:00"}],presence:{startMorning:"09:00",endMorning:"12:00",startAfternoon:"13:00",endAfternoon:"17:00",nbrheure:7}}}]}},c8f0:function(e,t,a){}});
//# sourceMappingURL=app.f38e785c.js.map