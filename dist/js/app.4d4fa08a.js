(function(t){function e(e){for(var o,r,n=e[0],l=e[1],c=e[2],p=0,h=[];p<n.length;p++)r=n[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},s={app:0},i=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},"270b":function(t,e,a){t.exports=a.p+"img/ticket.96dcef47.png"},"30d8":function(t,e,a){"use strict";a("479e")},"30e2":function(t,e,a){},"336c":function(t,e,a){t.exports=a.p+"img/back.f0e45694.png"},"46fd":function(t,e,a){t.exports=a.p+"img/f1.4c70d90c.png"},"479e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("14d9");var o=a("2b0e"),s=a("7496"),i=a("40dc"),r=a("5bc1"),n=a("8336"),l=a("132d"),c=a("f6c4"),d=a("2fa4"),p=a("2a7f"),h=function(){var t=this,e=t._self._c;return e(s["a"],{ref:"app"},[e(i["a"],{directives:[{name:"show",rawName:"v-show",value:t.showAppBar,expression:"showAppBar"}],attrs:{app:"",color:"primary",dark:""}},[e(r["a"],{on:{click:t.goHome}},[e(l["a"],[t._v(t._s(t.mdiHome))])],1),e(p["a"],[t._v("Origami Introduction")]),e(d["a"]),e(n["a"],{attrs:{icon:""},on:{click:function(e){return t.$router.push("/query")}}},[e(l["a"],[t._v(t._s(t.mdiCalendarText))])],1)],1),e(c["a"],{style:{padding:t.showAppBar?"56px 0px 0px":"0"}},[e("router-view",{key:t.$route.fullPath})],1)],1)},u=[],f=a("94ed"),m={name:"App",components:{},data:()=>({showAppBar:!0,mdiHome:f["c"],mdiCalendarText:f["a"]}),methods:{initListener(){window.addEventListener("resize",this.resizeHandler),this.resizeHandler()},resizeHandler(){this.showAppBar=!(window.outerWidth>window.outerHeight)},goHome(){this.$router.replace({path:"/empty",name:"Empty"})}},mounted(){this.initListener()}},g=m,v=a("2877"),y=Object(v["a"])(g,h,u,!1,null,null,null),b=y.exports,_=a("8c4f"),w=function(){var t=this,e=t._self._c;return e("HelloWorld")},x=[],k=a("b0afa"),S=a("99d9"),C=a("62ad"),z=a("a523"),L=a("169a"),T=a("ce7e"),A=a("adda"),$=a("a797"),j=a("490a"),R=a("8e36"),O=a("0fd9"),H=a("8654"),N=a("8414"),I=a("1e06"),q=function(){var t=this,e=t._self._c;return e(z["a"],[1===t.step?e("div",[e(O["a"],{staticClass:"text-center"},[e(C["a"],{attrs:{cols:"12"}},[e(A["a"],{staticClass:"my-3",attrs:{src:a("cf05"),contain:"",height:"200"}})],1),e(C["a"],{staticClass:"mb-4"},[e("h1",{staticClass:"font-weight-bold mb-3"},[t._v(" SARS-COV-2 ")]),e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" detection in cold-chain food ")])]),e(C["a"],{attrs:{cols:"12"}},[e(n["a"],{attrs:{color:"primary"},on:{click:t.nextStep}},[t._v("Start")])],1)],1)],1):t._e(),2===t.step?e("div",[e(O["a"],{staticClass:"text-center"},[e(C["a"],{attrs:{cols:"12"}},[e("image-uploader",{staticStyle:{position:"relative",width:"100%",height:"200px"},attrs:{preview:!0,className:["fileinput",{"fileinput--loaded":t.hasImage1}],debug:1,doNotResize:"gif",autoRotate:!0,outputFormat:"file",maxSize:1e6},on:{input:t.setImage1}},[e("label",{staticStyle:{"z-index":"0"},attrs:{slot:"upload-label",for:"fileInput"},slot:"upload-label"},[e("figure",{directives:[{name:"show",rawName:"v-show",value:!t.hasImage1,expression:"!hasImage1"}]},[e("div",{staticClass:"d-flex align-center justify-center flex-column",staticStyle:{width:"100%",height:"200px",border:"1px dashed lightgray"}},[e("div",[e(l["a"],{attrs:{"x-large":"",color:"primary"}},[t._v(t._s(t.mdiCamera))])],1),e("div",[e("span",{staticClass:"upload-caption"},[t._v(t._s(t.hasImage1?"Replace":"Click to upload"))])])])])])]),e("span",[t._v("Upload your food / package above")])],1)],1),e(T["a"],{staticClass:"mt-2 mb-2"}),e(O["a"],[e(C["a"],{attrs:{cols:"12"}},[e("div",{staticClass:"headline font-weight-bold"},[t._v(" Detection Information ")])]),e(C["a"],{attrs:{cols:"12"}},[e(H["a"],{ref:"name",attrs:{error:t.name_has_error,label:"Operator Name",rules:[""!==t.name],outlined:"",dense:"","hide-details":"auto"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),e(C["a"],{attrs:{cols:"12"}},[e(H["a"],{attrs:{label:"Detection Address",outlined:"",dense:"",value:t.addr,readonly:"","hide-details":"auto"}})],1),e(C["a"],{attrs:{cols:"12"}},[e(H["a"],{attrs:{label:"Detection Time",outlined:"",dense:"",value:t.date,readonly:"","hide-details":"auto"}})],1),e(C["a"],{staticClass:"text-center",attrs:{cols:"12"}},[e(n["a"],{attrs:{color:"primary"},on:{click:t.nextStep}},[t._v("Next")])],1)],1)],1):t._e(),3===t.step?e("div",{staticClass:"d-flex justify-center"},[e(N["a"],t._l(t.steps,(function(o,s){return e(I["a"],{key:s,attrs:{small:"",right:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[e(A["a"],{attrs:{src:a("9e01")("./"+o.icon+".png")}})]},proxy:!0}],null,!0)},[e("div",{staticClass:"py-4"},[e("div",[t._v(" "+t._s(o.text)+" ")])])])})),1),e(n["a"],{attrs:{color:"primary",elevation:"2",fixed:"",bottom:""},on:{click:t.nextStep}},[t._v(" Next ")])],1):t._e(),4===t.step?e("div",[e(O["a"],[e(C["a"],{attrs:{cols:"12"}},[e(A["a"],{attrs:{src:a("46fd"),contain:""}})],1)],1),e(O["a"],{staticClass:"text-center"},[e(C["a"],{attrs:{cols:"12"}},[e("image-uploader",{staticStyle:{position:"relative",width:"100%",height:"200px"},attrs:{preview:!0,className:["fileinput"],debug:1,doNotResize:"gif",autoRotate:!0,outputFormat:"file",maxSize:1e6},on:{input:t.setImage2}},[e("label",{directives:[{name:"show",rawName:"v-show",value:!t.hasImage2,expression:"!hasImage2"}],attrs:{slot:"upload-label",for:"fileInput"},slot:"upload-label"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}]},[e("div",{staticClass:"d-flex align-center justify-center flex-column",staticStyle:{width:"100%",height:"200px",border:"1px dashed lightgray"}},[e("div",[e(l["a"],{attrs:{"x-large":"",color:"primary"}},[t._v(t._s(t.mdiCamera))])],1),e("div",[e("span",{staticClass:"upload-caption"},[t._v(t._s(t.hasImage2?"Replace":"Click to upload"))])])])])])]),e("span",[t._v("Upload your origami as above")])],1),e(C["a"],{staticClass:"text-center",attrs:{cols:"12"}},[e(n["a"],{attrs:{color:"primary"},on:{click:t.nextStep}},[t._v("Submit")])],1)],1)],1):t._e(),5===t.step?e("div",[e(O["a"],[e(C["a"],{attrs:{cols:"12"}},[t._v(" Your photo has been uploaded successfully. ")])],1),e(O["a"],[e(C["a"],{attrs:{cols:"12"}},[e("div",{staticClass:"d-flex",staticStyle:{position:"relative"},attrs:{id:"copy-ticket","data-clipboard-text":t.ticket}},[e(A["a"],{attrs:{src:a("270b")}}),e("div",{staticClass:"ticket",staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"#fff","font-size":"30px","font-weight":"bold"},attrs:{id:"copy-ticket-value"}},[t._v(" "+t._s(t.ticket)+" ")])],1)])],1),e(O["a"],[e(C["a"],{attrs:{cols:"12"}},[e("p",[t._v("According to the quality of the photos you upload, the results are usually obtained in about 1 minute. We have assigned you a unique ticket, which you can use to query the results. Click the button ( "),e(l["a"],{attrs:{color:"primary"}},[t._v(t._s(t.mdiCalendarText))]),t._v(" ) in the upper right corner of our program to enter the query interface. Please take good care of your ticket. Click it to copy it to the clipboard.")],1)])],1)],1):t._e(),e(L["a"],{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(k["a"],{attrs:{color:"primary",dark:""}},[e(S["a"],[t._v(" Please stand by "),e(R["a"],{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.toastShow,expression:"toastShow"}],staticClass:"toast"},[t._v(" "+t._s(t.toastText)+" ")]),e($["a"],{attrs:{value:t.overlay}},[e(j["a"],{attrs:{indeterminate:"",size:"64"}})],1)],1)},E=[],P=a("b311"),W=a.n(P),D={name:"HelloWorld",data:()=>({apiKey:"657028a734eb4ce8bf3e0387df28f8eb",mdiCamera:f["b"],mdiCalendarText:f["a"],step:1,dialog:!1,toastShow:!1,toastText:"",overlay:!1,ticket:"",name:"",name_has_error:!1,lon:0,lat:0,addr:"",date:(()=>{const t=new Date;return t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()})(),hasImage1:!1,image1:null,steps:[{icon:"step1",text:"Add sample solution on page 1."},{icon:"step2",text:"Fold page 1 to page 2 and incubate it for 30 min."},{icon:"step3",text:"Fold page 2 to page 3，3 to 4 and incubate it."},{icon:"step4",text:"Put the origami in the dark box and take photos."}],hasImage2:!1,image2:null}),methods:{commit(){this.overlay=!0;let t=new FormData;t.append("name",this.name),t.append("file1",this.image1),t.append("file2",this.image2),t.append("lon",this.lon),t.append("lat",this.lat),t.append("intime",this.date),this.$post("/bpi/ticket",t).then(t=>{console.log(t),this.overlay=!1,this.step=5,this.ticket=t.data.data,this.$nextTick(()=>{const t=new W.a("#copy-ticket");t.on("success",t=>{console.info("Action:",t.action),console.info("Text:",t.text),console.info("Trigger:",t.trigger),this.toast("Copied to clipboard",""),t.clearSelection()}),t.on("error",t=>{console.error("Action:",t.action),console.error("Trigger:",t.trigger),this.toast("Copy failed","")})})}).catch(t=>{console.log(t),this.overlay=!1})},nextStep(){if(2===this.step){if(this.name_has_error=!this.$refs.name.validate(),this.name_has_error)return;if(!this.hasImage1)return void this.toast("Upload your photo","")}else if(4===this.step)return this.hasImage2?void this.commit():void this.toast("Upload your photo","");this.step++,2===this.step&&this.getLocation()},toast(t,e){let a=this;a.toastText=t+" "+e,a.toastShow=!0,setTimeout((function(){a.toastShow=!1}),1500)},setImage1(t){this.hasImage1=!0,this.image1=t,console.log("setImage1: %o",t)},getLocationByGeo(){return new Promise(t=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(e=>{const a=e.coords.latitude,o=e.coords.longitude;t({ok:200,latitude:a,longitude:o})},e=>{t({ok:401,error:e})}):t({ok:402,error:"Geolocation is not supported by the device."})})},getLocationByIp(){return new Promise((t,e)=>{this.$ajax("get","https://api.geoapify.com/v1/ipinfo?&apiKey="+this.apiKey).then(e=>{const a=e.data.location.latitude,o=e.data.location.longitude;t({ok:200,latitude:a,longitude:o})}).catch(t=>{e({ok:401,error:t})})})},parseLocation(t,e){return new Promise((a,o)=>{this.$ajax("get",`https://api.geoapify.com/v1/geocode/reverse?lat=${t}&lon=${e}&apiKey=${this.apiKey}`).then(t=>{console.log("[parse] %o",t),a({ok:200,formatted:t.data.features[0].properties.address_line2})}).catch(t=>{o({ok:401,error:t})})})},getLocation(){this.dialog=!0,this.getLocationByGeo().then(t=>(console.log("geolocation: %o",t),200!==t.ok?this.getLocationByIp():t)).then(t=>(this.lat=t.latitude,this.lon=t.longitude,this.parseLocation(this.lat,this.lon))).then(t=>{this.addr=t.formatted}).catch(t=>{console.log(t),this.toast("Fail to get your geolocation.","Sorry")}).finally(()=>{this.dialog=!1})},setImage2(t){this.hasImage2=!0,this.image2=t,console.log("setImage2: %o",t)}},mounted(){}},B=D,K=(a("f7f8"),a("30d8"),Object(v["a"])(B,q,E,!1,null,"ac29409c",null)),F=K.exports,U={name:"Home",components:{HelloWorld:F}},M=U,G=Object(v["a"])(M,w,x,!1,null,"2457f3e6",null),Z=G.exports,Y=a("8860"),J=a("da13"),V=a("5d23"),Q=a("e0c7"),X=function(){var t=this,e=t._self._c;return e(z["a"],{staticStyle:{position:"relative"}},[e(O["a"],[e(C["a"],{staticClass:"font-weight-bold",attrs:{cols:"12"}},[t._v(" SARS-CoV-2 "+t._s(t.title)+" ")])],1),e(O["a"],{attrs:{"no-gutters":""}},[e(C["a"],{attrs:{cols:"6"}},[e("div",{staticClass:"block r2 hidden no-padding-n-margin-top-bottom",staticStyle:{"background-color":"unset"}},[e("div",{staticClass:"title-all-in-one",staticStyle:{display:"flex","justify-content":"space-around"}},[e("div",{staticClass:"r2-type-1"},[t._v("N")]),e("div",{staticClass:"r2-type-1"},[t._v("N501Y")]),e("div",{staticClass:"r2-type-1"},[t._v("E488K")]),e("div",{staticClass:"r2-type-1"},[t._v("-")])]),e(A["a"],{attrs:{src:t.src,"lazy-src":t.src},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(O["a"],{staticClass:"fill-height ma-0",staticStyle:{height:"100px"},attrs:{align:"center",justify:"center"}},[e(j["a"],{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),e("div",{staticClass:"title-all-in-one",staticStyle:{display:"flex","justify-content":"space-around"}},[e("div",{staticClass:"r2-type-1"},[t._v("E")]),e("div",{staticClass:"r2-type-1"},[t._v("K417N")]),e("div",{staticClass:"r2-type-1"},[t._v("D614G")]),e("div",{staticClass:"r2-type-1"},[t._v("+")])])],1),e("div",{ref:"echart",staticStyle:{height:"180px"}}),e(A["a"],{attrs:{src:t.src2,"lazy-src":t.src2},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(O["a"],{staticClass:"fill-height ma-0",staticStyle:{height:"100px"},attrs:{align:"center",justify:"center"}},[e(j["a"],{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1),e(C["a"],{attrs:{cols:"6"}},[e(k["a"],{staticClass:"ml-2"},[e(Y["a"],[e(Q["a"],{staticClass:"font-weight-bold",staticStyle:{color:"#1972D6"}},[e(l["a"],{staticClass:"mr-1",attrs:{color:"primary"}},[t._v(t._s(t.mdiStar))]),t._v(" SARS-CoV-2 "+t._s(t.result))],1),e(T["a"]),e(J["a"],[e(V["a"],[e(V["c"],{staticClass:"mb-1"},[t._v("Operator Name:")]),e(V["b"],[t._v(t._s(t.cont.name))])],1)],1),e(J["a"],[e(V["a"],[e(V["c"],{staticClass:"mb-1"},[t._v("Detection Address:")]),e(V["b"],[t._v(t._s(t.addr))])],1)],1),e(J["a"],[e(V["a"],[e(V["c"],{staticClass:"mb-1"},[t._v("Detection Time:")]),e(V["b"],[t._v(t._s(t.cont.intime))])],1)],1),e(J["a"],[e(V["a"],[e(V["c"],{staticClass:"mb-1"},[t._v("Detection Result:")]),e(V["b"],{style:{color:t.danger?"red":"default"}},[t._v("SARS-CoV-2 "+t._s(t.result))])],1)],1)],1)],1),e("div",{staticClass:"mt-2 ml-2"},[t._v(" Send message to "),e("a",{on:{click:t.sendMessage}},[t._v("Food and Drug Administration")])])],1)],1),e(O["a"],{staticClass:"mb-0"},[e(C["a"],{attrs:{cols:"12"}},[e("h3",[t._v(" Preventive advice ")])])],1),e(O["a"],{staticClass:"mt-0"},[e(C["a"],{attrs:{cols:t.ho?12:4}},[e("span",{staticClass:"font-weight-bold",staticStyle:{color:"#1976d2"}},[t._v("When purchasing frozen food")]),e("ul",[e("li",[t._v("Go to supermarket or market to buy fresh products.")]),e("li",[t._v("When buying, you can use plastic bags to cover your hands and choose frozen fresh food.")]),e("li",[t._v("Wash your hands after shopping.")]),e("li",[t._v("When shopping abroad，pay attention to the food quarantine information of the customs.")])])]),e(C["a"],{attrs:{cols:t.ho?12:4}},[e("span",{staticClass:"font-weight-bold",staticStyle:{color:"#1976d2"}},[t._v("When processing frozen food")]),e("ul",[e("li",[t._v("Keep the kitchen table, tableware and container clean.")]),e("li",[t._v("Avoid touching mouth, eyes and nose with hands that have touched raw meat or aquatic products.")]),e("li",[t._v("Pay attention to the separation of raw and cooked during processing.")]),e("li",[t._v("Frozen food should be heated thoroughly.")])])]),e(C["a"],{attrs:{cols:t.ho?12:4}},[e("span",{staticClass:"font-weight-bold",staticStyle:{color:"#1976d2"}},[t._v("In frozen food storage")]),e("ul",[e("li",[t._v("Raw meat in the refrigerator before freezing, it is best to split into small pieces, and packaging bags to be complete without damage.")]),e("li",[t._v("The raw and cooked food should be separated to prevent cross contamination.")]),e("li",[t._v("Frozen food should be placed to prevent the outflow of water from polluting other food.")])])])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.toastShow,expression:"toastShow"}],staticClass:"toast"},[t._v(" "+t._s(t.toastText)+" ")])],1)},tt=[],et={name:"Report",props:{item:{type:String}},data:()=>({apiKey:"657028a734eb4ce8bf3e0387df28f8eb",mdiStar:f["d"],ho:!1,echart:null,toastShow:!1,toastText:"",overlay:!1,src:"",src2:"",title:"",result:"",danger:!1,cont:"",addr:""}),mounted(){let t,e,a,o,s,i;if(this.cont=JSON.parse(this.item),null!=this.cont.result){const r=this.cont.result.split(/,|，/);6===r.length&&(t="1"==r[0]?1:-1,e="1"==r[1]?1:-1,a="1"==r[2]?1:-1,o="1"==r[3]?1:-1,s="1"==r[4]?1:-1,i="1"==r[5]?1:-1)}let r=[];1===a&&r.push("K417N"),1===o&&r.push("E484K"),1===s&&r.push("N501Y"),1===i&&r.push("D614G");let n="";r.length>0?(n=r.join(", "),this.result=" infected",this.danger=!0):(n="Not",this.result=" not infected",this.danger=!1),n+=" infected",this.title=n,this.parseLocation(this.cont.geolat,this.cont.geolon).then(t=>{this.addr=t.formatted}),""!=this.cont.output?this.src=this.BASE_URL+"/bpi/image/"+this.cont.output+".png":this.src=this.BASE_URL+"/bpi/image/"+this.cont.input2+".png",this.src2=this.BASE_URL+"/bpi/image/"+this.cont.input1+".png",this.echart=this.$echarts.init(this.$refs.echart),this.setHist([t,e,a,o,s,i]),this.initListener()},methods:{toast(t){let e=this;e.toastText=t,e.toastShow=!0,setTimeout((function(){e.toastShow=!1}),1500)},sendMessage(){let t=new FormData;t.append("ticket",this.cont.ticket),this.$post("/bpi/send",t).then(t=>{console.log(t),this.toast("Message Sent")})},initListener(){window.addEventListener("resize",this.resizeHandler),this.resizeHandler()},destroyListener(){window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null},resizeHandler(){this.ho=!(window.outerWidth>window.outerHeight),this.echart&&this.echart.resize()},setHist(t){const e={grid:{x:"-2.5%",x2:"-2.5%",y:0,y2:0,containLabel:!0},xAxis:{type:"category",axisLine:{show:!0},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:["N gene","E gene","K417N","E484K","N501Y","D614G"]},yAxis:{type:"value",axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},series:[{barWidth:"70%",label:{show:!0,position:"inside",distance:10,align:"left",verticalAlign:"middle",rotate:90,formatter:"{b}",fontSize:12,rich:{name:{}}},data:t.map(t=>({value:t,itemStyle:{color:t>0?"#e9bfbf":"#bfbfe9",borderColor:t>0?"#c75959":"#5959c7"},label:{align:t>0?"left":"right",position:t>0?"insideBottom":"insideTop"}})),type:"bar"}]};this.echart.setOption(e)},parseLocation(t,e){return new Promise((a,o)=>{this.$ajax("get",`https://api.geoapify.com/v1/geocode/reverse?lat=${t}&lon=${e}&apiKey=${this.apiKey}`).then(t=>{console.log("[parse] %o",t),a({ok:200,formatted:t.data.features[0].properties.address_line2})}).catch(t=>{o({ok:401,error:t})})})},queryReport(){this.$refs.query.validate()&&(this.overlay=!0,this.$ajax("get","/bpi/query",{ticket:this.ticket}).then(t=>{this.overlay=!1;const e=t.data.data;if(console.log(e),null===e)this.toast("Ticket not found!");else{let t,a,o,s,i,r,n=!1;if(null!=e.result){const l=e.result.split(/,|，/);6===l.length&&(n=!0,t="1"==l[0]?1:-1,a="1"==l[1]?1:-1,o="1"==l[2]?1:-1,s="1"==l[3]?1:-1,i="1"==l[4]?1:-1,r="1"==l[5]?1:-1)}n?(this.setHist([t,a,o,s,i,r]),this.show=!0,this.name=e.name,this.time=e.intime,this.parseLocation(e.geolat,e.geolon).then(t=>{this.addr=t.formatted}),""!=e.output?this.src=this.BASE_URL+"/bpi/image/"+e.output+".png":this.src=this.BASE_URL+"/bpi/image/"+e.input2+".png"):this.toast("Wait a moment!")}}).catch(t=>{this.overlay=!1,console.log(t),this.toast("Error get ticket")}))}}},at=et,ot=(a("cab2"),Object(v["a"])(at,X,tt,!1,null,"23f38f52",null)),st=ot.exports,it=function(){var t=this,e=t._self._c;return e("h1")},rt=[],nt={data(){return{}},created(){this.$router.replace({path:"/",name:"Home"})}},lt=nt,ct=Object(v["a"])(lt,it,rt,!1,null,null,null),dt=ct.exports,pt=function(){var t=this,e=t._self._c;return e(z["a"],{staticStyle:{position:"relative"}},[e(O["a"],[e(C["a"],{attrs:{cols:"12"}},[t._v(" Please input your private ticket: ")]),e(C["a"],{attrs:{cols:"12"}},[e(H["a"],{ref:"query",attrs:{outlined:"",dense:"","hide-details":"auto",rules:[()=>/[0-9a-zA-Z][0-9a-zA-Z][0-9a-zA-Z][0-9a-zA-Z][0-9a-zA-Z][0-9a-zA-Z]/.test(t.ticket)||"Ticket pattern error!",()=>!!t.ticket||"Required!"]},model:{value:t.ticket,callback:function(e){t.ticket=e},expression:"ticket"}})],1),e(C["a"],{staticClass:"text-center",attrs:{cols:"12"}},[e(n["a"],{attrs:{color:"primary"},on:{click:t.queryReport}},[t._v("Query Report")])],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.toastShow,expression:"toastShow"}],staticClass:"toast"},[t._v(" "+t._s(t.toastText)+" ")]),e($["a"],{attrs:{value:t.overlay}},[e(j["a"],{attrs:{indeterminate:"",size:"64"}})],1)],1)},ht=[],ut={name:"Query",data:()=>({echart:null,toastShow:!1,toastText:"",overlay:!1,ticket:"",src:"",name:"",addr:"",time:""}),mounted(){},methods:{toast(t){let e=this;e.toastText=t,e.toastShow=!0,setTimeout((function(){e.toastShow=!1}),1500)},queryReport(){this.$refs.query.validate()&&(this.overlay=!0,this.$ajax("get","/bpi/query",{ticket:this.ticket}).then(t=>{this.overlay=!1;const e=t.data.data;if(console.log(e),null===e)this.toast("Ticket not found!");else{let t=!1;if(null!=e.result){const a=e.result.split(/,|，/);6===a.length&&(t=!0)}t?this.$router.push({path:"/report",query:{item:JSON.stringify(e)}}):this.toast("Wait a moment!")}}).catch(t=>{this.overlay=!1,console.log(t),this.toast("Error get ticket")}))}}},ft=ut,mt=(a("c24e"),Object(v["a"])(ft,pt,ht,!1,null,"a17c3066",null)),gt=mt.exports,vt=function(){var t=this,e=t._self._c;return e(z["a"],[e(O["a"],{staticClass:"mb-0"},[e(C["a"],{attrs:{cols:"12"}},[e("h3",[t._v(" Preventive advice ")])])],1),e(O["a"],{staticClass:"mt-0"},[e(C["a"],{attrs:{cols:t.ho?12:4}},[e("span",{staticClass:"font-weight-bold",staticStyle:{color:"#1976d2"}},[t._v("When purchasing frozen food")]),e("ul",[e("li",[t._v("Go to supermarket or market to buy fresh products.")]),e("li",[t._v("When buying, you can use plastic bags to cover your hands and choose frozen fresh food.")]),e("li",[t._v("Wash your hands after shopping.")]),e("li",[t._v("When shopping abroad, pay attention to the food quarantine information of the customs.")])])]),e(C["a"],{attrs:{cols:t.ho?12:4}},[e("span",{staticClass:"font-weight-bold",staticStyle:{color:"#1976d2"}},[t._v("When processing frozen food")]),e("ul",[e("li",[t._v("Keep the kitchen table, tableware and container clean.")]),e("li",[t._v("Avoid touching mouth, eyes and nose with hands that have touched raw meat or aquatic products.")]),e("li",[t._v("Pay attention to the separation of raw and cooked during processing.")]),e("li",[t._v("Frozen food should be heated thoroughly.")])])]),e(C["a"],{attrs:{cols:t.ho?12:4}},[e("span",{staticClass:"font-weight-bold",staticStyle:{color:"#1976d2"}},[t._v("In frozen food storage")]),e("ul",[e("li",[t._v("Raw meat in the refrigerator before freezing, it is best to split into small pieces, and packaging bags to be complete without damage.")]),e("li",[t._v("The raw and cooked food should be separated to prevent cross contamination.")]),e("li",[t._v("Frozen food should be placed to prevent the outflow of water from polluting other food.")])])])],1)],1)},yt=[],bt={name:"Advice",data:()=>({ho:!1}),methods:{initListener(){window.addEventListener("resize",this.resizeHandler),this.resizeHandler()},resizeHandler(){this.ho=!(window.outerWidth>window.outerHeight)}},mounted(){this.initListener()}},_t=bt,wt=Object(v["a"])(_t,vt,yt,!1,null,"8f72c096",null),xt=wt.exports;const kt=_["a"].prototype.push;_["a"].prototype.push=function(t){return kt.call(this,t).catch(t=>t)},o["a"].use(_["a"]);const St=[{path:"/",name:"Home",component:Z},{path:"/query",name:"Query",component:gt},{path:"/report",name:"Report",component:st,props:t=>({item:t.query.item})},{path:"/advice",name:"Advice",component:xt},{path:"/empty",name:"Empty",component:dt}],Ct=new _["a"]({routes:St});Ct.beforeEach((t,e,a)=>{o["a"].$httpRequestList.length>0&&o["a"].$httpRequestList.forEach(t=>{t("interrupt")}),document.documentElement.scrollTop=0,a()});var zt=Ct,Lt=a("f309");o["a"].use(Lt["a"]);var Tt=new Lt["a"]({icons:{iconfont:"mdiSvg"}}),At=a("4c7d"),$t=a.n(At),jt=a("313e"),Rt=a.n(jt),Ot=a("bc3a"),Ht=a.n(Ot),Nt=a("4328"),It=a.n(Nt);o["a"].config.productionTip=!1,o["a"].prototype.$echarts=Rt.a,o["a"].use($t.a),o["a"].prototype.BASE_URL="http://47.109.38.99:9081/",o["a"].prototype.$http=Ht.a.create({baseURL:"http://47.109.38.99:9081/"});const qt=Ht.a.CancelToken;o["a"].$httpRequestList=[],o["a"].prototype.$ajax=(t,e,a)=>new Promise((s,i)=>{let r={method:t,url:e,cancelToken:new qt(t=>{o["a"].$httpRequestList.push(t)}),paramsSerializer:t=>It.a.stringify(t,{indices:!1})},n="get"===t?Object.assign(r,{params:a}):Object.assign(r,{data:a});return o["a"].prototype.$http(n).then(t=>{s(t)}).catch(t=>{"interrupt"===t.message?console.log("已中断请求"):i(t)})}),o["a"].prototype.$post=(t,e)=>new Promise((a,s)=>{let i={method:"post",url:t,cancelToken:new qt(t=>{o["a"].$httpRequestList.push(t)}),headers:{"Content-Type":"multipart/form-data"},data:e};return o["a"].prototype.$http(i).then(t=>{a(t)}).catch(t=>{"interrupt"===t.message?console.log("已中断请求"):s(t)})}),new o["a"]({vuetify:Tt,router:zt,render:t=>t(b)}).$mount("#app")},"906c":function(t,e,a){},"90ee":function(t,e,a){t.exports=a.p+"img/step2.c77c052f.png"},"9e01":function(t,e,a){var o={"./back.png":"336c","./f1.png":"46fd","./logo.png":"cf05","./step1.png":"e84b","./step2.png":"90ee","./step3.png":"f1d9","./step4.png":"dcee","./ticket.png":"270b"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=i,t.exports=s,s.id="9e01"},ba0b:function(t,e,a){},c24e:function(t,e,a){"use strict";a("ba0b")},cab2:function(t,e,a){"use strict";a("30e2")},cf05:function(t,e,a){t.exports=a.p+"img/logo.afd5ad72.png"},dcee:function(t,e,a){t.exports=a.p+"img/step4.c6d8aac2.png"},e84b:function(t,e,a){t.exports=a.p+"img/step1.74b72307.png"},f1d9:function(t,e,a){t.exports=a.p+"img/step3.5cfc051f.png"},f7f8:function(t,e,a){"use strict";a("906c")}});
//# sourceMappingURL=app.4d4fa08a.js.map