var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(g){var window=this;var Lsa=function(a,b){return g.Ub(a,b)},Y5=function(a,b,c){a.w.set(b,c)},Z5=function(a){Y5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.H)()).toString(36));
return a},$5=function(a,b,c){g.Ha(c)||(c=[String(c)]);
g.dn(a.w,b,c)},Msa=function(a,b){var c=[];
g.kk(b,function(d){try{var e=g.mo.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.lo(e)&&c.push(d)},a);
return c},Nsa=function(a,b){var c=Msa(a,b);
(0,g.y)(c,function(d){g.mo.prototype.remove.call(this,d)},a)},Osa=function(a,b){g.Xa(a,b)||a.push(b)},a6=function(a){var b=0,c;
for(c in a)b++;return b},Psa=function(a,b){var c=b instanceof g.yc?b:g.Cc(b,/^data:image\//i.test(b));
a.src=g.zc(c)},b6=function(){},Qsa=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Rsa=function(a){if(a.yd&&"function"==typeof a.yd)return a.yd();
if("string"===typeof a)return a.split("");if(g.Ia(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Qb(a)},Ssa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ia(a)||"string"===typeof a)(0,g.y)(a,b,void 0);else{if(a.pe&&"function"==typeof a.pe)var c=a.pe();else if(a.yd&&"function"==typeof a.yd)c=void 0;else if(g.Ia(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Rb(a);d=Rsa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},Tsa=function(a,b,c,d){var e=new g.Sm(null,void 0);
a&&g.Tm(e,a);b&&g.Um(e,b);c&&g.Vm(e,c);d&&(e.u=d);return e},c6=function(a,b){g.Oo[a]=!0;
var c=g.Mo();c&&c.publish.apply(c,arguments);g.Oo[a]=!1},d6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.w=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Pm;this.o=this.u="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Usa(this,a.capabilities||""),Vsa(this,a.experiments||""),this.u=a.remoteControllerUrl||"",this.o=a.localChannelEncryptionKey||
"")},Usa=function(a,b){a.capabilities.clear();
(0,g.Xd)(b.split(","),g.Na(Lsa,Wsa)).forEach(function(c){a.capabilities.add(c)})},Vsa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},e6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},f6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},Xsa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Ysa=function(a){return new e6(a)},Zsa=function(a){return g.Ha(a)?(0,g.Hc)(a,Ysa):[]},g6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},h6=function(a){return g.Ha(a)?"["+(0,g.Hc)(a,g6).join(",")+"]":"null"},i6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},$sa=function(a){return(0,g.Hc)(a,function(b){return{key:b.id,
name:b.name}})},j6=function(a,b){return g.Ua(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},k6=function(a,b){return g.Ua(a,function(c){return f6(c,b)})},l6=function(a){try{var b=(0,g.os)(),c=(0,g.ns)();
b&&b.remove(a);c&&c.remove(a)}catch(d){}},ata=function(){var a=(0,g.ns)();
a&&Nsa(a,a.o.Cf(!0))},m6=function(){var a=g.qs("yt-remote-connected-devices")||[];
g.pb(a);return a},bta=function(a){if(g.Ya(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.Hc)(a,function(d,e){return 0==e?d:d.substring(c.length)})},cta=function(a){g.ps("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.qs("yt-remote-device-id");a||(a=i6(),g.ps("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.Xa(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.Xa(a,b);g.rs()&&g.rb(a,b);a=bta(a);if(g.Ya(a))try{g.br("remote_sid")}catch(c){}else try{g.ar("remote_sid",a.join(","),-1)}catch(c){}},dta=function(){return g.qs("yt-remote-session-browser-channel")},eta=function(){return g.qs("yt-remote-local-screens")||[]},fta=function(){g.ps("yt-remote-lounge-token-expiration",!0,86400)},gta=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.Hc)(eta(),function(d){return d.loungeToken}),c=(0,g.Hc)(a,function(d){return d.loungeToken});
(0,g.qi)(c,function(d){return!g.Xa(b,d)})&&fta();
g.ps("yt-remote-local-screens",a,31536E3)},hta=function(a,b){g.ps("yt-remote-session-browser-channel",a);
g.ps("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.Xa(c,d)||c.push(d);cta(c);p6()},q6=function(a){a||(l6("yt-remote-session-screen-id"),l6("yt-remote-session-video-id"));
p6();a=m6();g.bb(a,o6());cta(a)},ita=function(){if(!r6){var a=g.wo();
a&&(r6=new g.go(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},jta=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},kta=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},s6=function(a){a.length?lta(a.shift(),function(){s6(a)}):t6()},mta=function(a){return"chrome-extension://"+a+"/cast_sender.js"},lta=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},t6=function(){var a=kta();
a&&a(!1,"No cast extension found")},ota=function(){if(nta){var a=2,b=kta(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;lta("//web.archive.org/web/20200205140011/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",t6,c)}},pta=function(){ota();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);s6(["//web.archive.org/web/20200205140011/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20200205140011/https://www.gstatic.com/eureka/clank/cast_sender.js"])},u6=function(a,b,c){g.A.call(this);
this.C=null!=c?(0,g.x)(a,c):a;this.ld=b;this.B=(0,g.x)(this.FE,this);this.o=!1;this.u=0;this.w=this.Ha=null;this.A=[]},v6=function(a,b,c){g.A.call(this);
this.w=null!=c?(0,g.x)(a,c):a;this.ld=b;this.u=(0,g.x)(this.GE,this);this.o=[]},w6=function(a){a.Ha=g.yf(a.u,a.ld);
a.w.apply(null,a.o)},x6=function(){},qta=function(){},sta=function(a){return(a=rta(a))?new ActiveXObject(a):new XMLHttpRequest},rta=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},y6=function(a,b,c,d){this.o=a;
this.w=b;this.G=c;this.F=d||1;this.B=45E3;this.A=new g.x1(this);this.u=new g.xf;this.u.setInterval(250)},uta=function(a,b,c){a.Gi=1;
a.rg=Z5(b.clone());a.Vh=c;a.C=!0;tta(a,null)},z6=function(a,b,c,d,e){a.Gi=1;
a.rg=Z5(b.clone());a.Vh=null;a.C=c;e&&(a.dB=!1);tta(a,d)},tta=function(a,b){a.tj=(0,g.H)();
A6(a);a.Xg=a.rg.clone();$5(a.Xg,"t",a.F);a.Ql=0;a.Fc=a.o.cq(a.o.Cl()?b:null);0<a.Lq&&(a.Bo=new v6((0,g.x)(a.iC,a,a.Fc),a.Lq));a.A.ga(a.Fc,"readystatechange",a.HN);var c=a.zh?g.$b(a.zh):{};a.Vh?(a.fp="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Fc.send(a.Xg,a.fp,a.Vh,c)):(a.fp="GET",a.dB&&!g.Md&&(c.Connection="close"),a.Fc.send(a.Xg,a.fp,null,c));a.o.Ne(1)},xta=function(a,b,c){for(var d=!0;!a.jh&&a.Ql<c.length;){var e=vta(a,c);
if(e==B6){4==b&&(a.Cg=4,C6(15),d=!1);break}else if(e==wta){a.Cg=4;C6(16);d=!1;break}else D6(a,e)}4==b&&0==c.length&&(a.Cg=1,C6(17),d=!1);a.Oe=a.Oe&&d;d||(E6(a),F6(a))},vta=function(a,b){var c=a.Ql,d=b.indexOf("\n",c);
if(-1==d)return B6;c=Number(b.substring(c,d));if(isNaN(c))return wta;d+=1;if(d+c>b.length)return B6;var e=b.substr(d,c);a.Ql=d+c;return e},zta=function(a,b){a.tj=(0,g.H)();
A6(a);var c=b?window.location.hostname:"";a.Xg=a.rg.clone();Y5(a.Xg,"DOMAIN",c);Y5(a.Xg,"t",a.F);try{a.Se=new ActiveXObject("htmlfile")}catch(n){E6(a);a.Cg=7;C6(22);F6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in G6)k=G6[l];else if(l in yta)k=G6[l]=yta[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
G6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Uc(g.pc("b/12014412"),d+"</body></html>");a.Se.open();a.Se.write(g.Pc(c));a.Se.close();a.Se.parentWindow.m=(0,g.x)(a.bN,a);a.Se.parentWindow.d=(0,g.x)(a.lA,a,!0);a.Se.parentWindow.rpcClose=(0,g.x)(a.lA,a,!1);c=a.Se.createElement("DIV");a.Se.parentWindow.document.body.appendChild(c);d=g.Bc(a.Xg.toString());d=g.ad(g.zc(d));d=g.Uc(g.pc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Vc(c,d);a.o.Ne(1)},A6=function(a){a.hu=(0,g.H)()+a.B;
Ata(a,a.B)},Ata=function(a,b){if(null!=a.Hj)throw Error("WatchDog timer not null");
a.Hj=H6((0,g.x)(a.iN,a),b)},I6=function(a){a.Hj&&(g.v.clearTimeout(a.Hj),a.Hj=null)},F6=function(a){a.o.Sw()||a.jh||a.o.so(a)},E6=function(a){I6(a);
g.je(a.Bo);a.Bo=null;a.u.stop();g.z1(a.A);if(a.Fc){var b=a.Fc;a.Fc=null;b.abort();b.dispose()}a.Se&&(a.Se=null)},D6=function(a,b){try{a.o.fA(a,b),a.o.Ne(4)}catch(c){}},Cta=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;Bta(a,b,function(k){k?c(!0):g.v.setTimeout(function(){Cta(a,b,c,d,f)},f)})}},Bta=function(a,b,c){var d=new Image;
d.onload=function(){try{J6(d),c(!0)}catch(e){}};
d.onerror=function(){try{J6(d),c(!1)}catch(e){}};
d.onabort=function(){try{J6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{J6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
Psa(d,a)},J6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},K6=function(){},Dta=function(a){this.o=a;
this.u=new K6},Eta=function(a){var b=L6(a.o,a.Qj,"/mail/images/cleardot.gif");
Z5(b);Cta(b.toString(),5E3,(0,g.x)(a.CD,a),3,2E3);a.Ne(1)},N6=function(a){var b=a.o.H;
if(null!=b)C6(5),b?(C6(11),M6(a.o,a,!1)):(C6(12),M6(a.o,a,!0));else if(a.Kd=new y6(a,void 0,void 0,void 0),a.Kd.zh=a.Jq,b=a.o,b=L6(b,b.Cl()?a.nk:null,a.Kq),C6(5),!g.Kd||g.od(10))$5(b,"TYPE","xmlhttp"),z6(a.Kd,b,!1,a.nk,!1);else{$5(b,"TYPE","html");var c=a.Kd;a=!!a.nk;c.Gi=3;c.rg=Z5(b.clone());zta(c,a)}},O6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return Qsa(a)},P6=function(a){g.Je.call(this);
this.headers=new g.Pm;this.T=a||null;this.w=!1;this.O=this.o=null;this.da=this.H="";this.C=0;this.A="";this.B=this.Z=this.G=this.U=!1;this.F=0;this.M=null;this.na="";this.J=this.Y=!1},Fta=function(a){return g.Kd&&g.nd(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},Gta=function(a){return"content-type"==a.toLowerCase()},Ita=function(a,b){a.w=!1;
a.o&&(a.B=!0,a.o.abort(),a.B=!1);a.A=b;a.C=5;Hta(a);Q6(a)},Hta=function(a){a.U||(a.U=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},Kta=function(a){if(a.w&&"undefined"!=typeof g.F1)if(a.O[1]&&4==R6(a)&&2==a.getStatus())S6(a,"Local request error detected and ignored");
else if(a.G&&4==R6(a))g.yf(a.Uw,0,a);else if(a.dispatchEvent("readystatechange"),4==R6(a)){S6(a,"Request complete");a.w=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.Pg(1,String(a.H));if(!f&&g.v.self&&g.v.self.location){var k=g.v.self.location.protocol;f=k.substr(0,k.length-1)}e=!Jta.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.C=6;try{var l=2<R6(a)?a.o.statusText:""}catch(m){l=""}a.A=l+" ["+a.getStatus()+"]";Hta(a)}}finally{Q6(a)}}},Q6=function(a,b){if(a.o){Lta(a);
var c=a.o,d=a.O[0]?g.Ea:null;a.o=null;a.O=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},Lta=function(a){a.o&&a.J&&(a.o.ontimeout=null);
a.M&&(g.v.clearTimeout(a.M),a.M=null)},R6=function(a){return a.o?a.o.readyState:0},T6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},S6=function(a,b){return b+" ["+a.da+" "+a.H+" "+a.getStatus()+"]"},U6=function(a,b,c){this.o=1;
this.u=[];this.A=[];this.B=new K6;this.G=a||null;this.H=null!=b?b:null;this.C=c||!1},Mta=function(a,b){this.o=a;
this.map=b;this.context=null},Nta=function(a){g.le.call(this,"statevent",a)},Ota=function(a,b){g.le.call(this,"timingevent",a);
this.size=b},Pta=function(a){g.le.call(this,"serverreachability",a)},Sta=function(a){Qta(a);
if(3==a.o){var b=a.bl++,c=a.Vm.clone();Y5(c,"SID",a.w);Y5(c,"RID",b);Y5(c,"TYPE","terminate");V6(a,c);b=new y6(a,a.w,b,void 0);b.Gi=2;b.rg=Z5(c.clone());Psa(new Image,b.rg.toString());b.tj=(0,g.H)();A6(b)}Rta(a)},Tta=function(a){a.YD(1,0);
a.Vm=L6(a,null,a.Iq);W6(a)},Qta=function(a){a.vg&&(a.vg.abort(),a.vg=null);
a.Zb&&(a.Zb.cancel(),a.Zb=null);a.Ff&&(g.v.clearTimeout(a.Ff),a.Ff=null);X6(a);a.Ed&&(a.Ed.cancel(),a.Ed=null);a.zg&&(g.v.clearTimeout(a.zg),a.zg=null)},Uta=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new Mta(a.tJ++,b));2!=a.o&&3!=a.o||W6(a)},W6=function(a){a.Ed||a.zg||(a.zg=H6((0,g.x)(a.kA,a),0),a.zi=0)},Wta=function(a,b){if(1==a.o){if(!b){a.bl=Math.floor(1E5*Math.random());
var c=a.bl++,d=new y6(a,"",c,void 0);d.zh=null;var e=Y6(a),f=a.Vm.clone();Y5(f,"RID",c);Y5(f,"CVER","1");V6(a,f);uta(d,f,e);a.Ed=d;a.o=2}}else 3==a.o&&(b?Vta(a,b):0==a.u.length||a.Ed||Vta(a))},Vta=function(a,b){if(b)if(6<a.kh){a.u=a.A.concat(a.u);
a.A.length=0;var c=a.bl-1;var d=Y6(a)}else c=b.G,d=b.Vh;else c=a.bl++,d=Y6(a);var e=a.Vm.clone();Y5(e,"SID",a.w);Y5(e,"RID",c);Y5(e,"AID",a.Ti);V6(a,e);c=new y6(a,a.w,c,a.zi+1);c.zh=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Ed=c;uta(c,e,d)},V6=function(a,b){if(a.hd){var c=a.hd.pw();
c&&g.Kb(c,function(d,e){Y5(b,e,d)})}},Y6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.kh&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,k=a.u[e].map;f=6>=a.kh?e:f-d;try{g.Kb(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.A=a.A.concat(a.u.splice(0,b));
return c.join("&")},Xta=function(a){a.Zb||a.Ff||(a.F=1,a.Ff=H6((0,g.x)(a.jA,a),0),a.ri=0)},Z6=function(a){if(a.Zb||a.Ff||3<=a.ri)return!1;
a.F++;a.Ff=H6((0,g.x)(a.jA,a),Yta(a,a.ri));a.ri++;return!0},M6=function(a,b,c){a.cp=c;
a.bf=b.Rf;a.C||Tta(a)},X6=function(a){null!=a.oh&&(g.v.clearTimeout(a.oh),a.oh=null)},Yta=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},$6=function(a,b){if(2==b||9==b){var c=null;
a.hd&&(c=null);var d=(0,g.x)(a.sO,a);c||(c=new g.Sm("//web.archive.org/web/20200205140011/https://www.google.com/images/cleardot.gif"),Z5(c));Bta(c.toString(),1E4,d)}else C6(2);Zta(a,b)},Zta=function(a,b){a.o=0;
a.hd&&a.hd.Ev(b);Rta(a);Qta(a)},Rta=function(a){a.o=0;
a.bf=-1;if(a.hd)if(0==a.A.length&&0==a.u.length)a.hd.Up();else{g.fb(a.A);var b=g.fb(a.u);a.A.length=0;a.u.length=0;a.hd.Up(b)}},L6=function(a,b,c){var d=g.$m(c);
if(""!=d.o)b&&g.Um(d,b+"."+d.o),g.Vm(d,d.B);else{var e=window.location;d=Tsa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.bk&&g.Kb(a.bk,function(f,k){Y5(d,k,f)});
Y5(d,"VER",a.kh);V6(a,d);return d},H6=function(a,b){if(!g.Ja(a))throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},C6=function(a){a7.dispatchEvent(new Nta(a7,a))},$ta=function(){},aua=function(){this.o=[];
this.u=[]},bua=function(a,b){this.action=a;
this.params=b||{}},b7=function(a,b){g.A.call(this);
this.o=new g.J(this.SM,0,this);g.B(this,this.o);this.ld=5E3;this.u=0;if(g.Ja(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Ja(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.w=a},c7=function(a,b,c){this.M=a;
this.C=b;this.w=new g.eo;this.u=new b7(this.WN,this);this.o=null;this.tb=!1;this.B=null;this.H="";this.G=this.A=0;this.F=[];this.J=c||!1},cua=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.cp,sessionId:a.o.w,arrayId:a.o.Ti}},dua=function(a,b){a.G=b||0;
a.u.stop();a.o&&(3==a.o.o&&Wta(a.o),Sta(a.o));a.G=0},d7=function(a){return!!a.o&&3==a.o.o},eua=function(a,b){(a.C.loungeIdToken=b)||a.u.stop()},e7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.Pg(4,a))||"";b&&(this.port=":"+b);this.domain=g.Qg(a)||"";a=g.Ib;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Hb(a,"10.0")&&(this.u=!1))},f7=function(a,b){var c=a.o;
a.u&&(c="https://"+a.domain+a.port+a.o);return g.Zg(c+b,{})},g7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Na(a.A,d,!0),onError:g.Na(a.w,e),Gd:g.Na(a.B,e)};c&&(a.yb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Kp(b,a)},iua=function(){var a=fua;
gua();h7.push(a);hua(h7)},i7=function(a,b){gua();
var c=h7,d=jua(a,String(b));g.Ya(c)?kua(d):(hua(c),(0,g.y)(c,function(e){e(d)}))},gua=function(){h7||(h7=g.w("yt.mdx.remote.debug.handlers_")||[],g.Da("yt.mdx.remote.debug.handlers_",h7,void 0))},kua=function(a){var b=(j7+1)%50;
j7=b;k7[b]=a;l7||(l7=49==b)},hua=function(a){var b=k7;
if(b[0]){var c=j7,d=l7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.y)(a,function(f){f(e)})}while(d!=c);
k7=Array(50);j7=-1;l7=!1}},jua=function(a,b){var c=((0,g.H)()-lua)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},m7=function(a){g.Q.call(this);
this.F=a;this.o=[]},mua=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},nua=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Xd)(a.o,function(f){return!!j6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=mua(a,b[d])||c;return c},oua=function(a,b){var c=a.o.length;
a.o=(0,g.Xd)(a.o,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.o.length<c},n7=function(a,b,c,d){g.Q.call(this);
this.C=a;this.B=b;this.w=c;this.A=d;this.u=0;this.o=null;this.Ha=NaN},p7=function(a){m7.call(this,"LocalScreenService");
this.w=a;this.u=NaN;o7(this);this.info("Initializing with "+h6(this.o))},pua=function(a){if(a.o.length){var b=(0,g.Hc)(a.o,function(d){return d.id}),c=f7(a.w,"/pairing/get_lounge_token_batch");
g7(a.w,c,{screen_ids:b.join(",")},(0,g.x)(a.PE,a),(0,g.x)(a.OE,a))}},o7=function(a){var b=Zsa(eta());
b=(0,g.Xd)(b,function(c){return!c.uuid});
return nua(a,b)},q7=function(a,b){gta((0,g.Hc)(a.o,Xsa));
b&&fta()},s7=function(a,b){g.Q.call(this);
this.C=b;var c=g.qs("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Xa(c,l)}this.o=d;this.B=a;this.w=this.A=NaN;this.u=null;r7("Initialized with "+g.Kk(this.o))},qua=function(a,b,c){var d=f7(a.B,"/pairing/get_screen_availability");
g7(a.B,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},t7=function(a,b){a:if(a6(b)!=a6(a.o))var c=!1;
else{c=g.Rb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(r7("Updated online screens: "+g.Kk(a.o)),a.o=b,a.R("screenChange"));rua(a)},u7=function(a){isNaN(a.w)||g.Lo(a.w);
a.w=g.Jo((0,g.x)(a.vt,a),0<a.A&&a.A<(0,g.H)()?2E4:1E4)},r7=function(a){i7("OnlineScreenService",a)},sua=function(a){var b={};
(0,g.y)(a.C(),function(c){c.token?b[c.token]=c.id:this.Rb("Requesting availability of screen w/o lounge token.")});
return b},rua=function(a){a=g.Rb(g.Lb(a.o,function(b){return b}));
g.pb(a);a.length?g.ps("yt-remote-online-screen-ids",a.join(","),60):l6("yt-remote-online-screen-ids")},v7=function(a){m7.call(this,"ScreenService");
this.C=a;this.u=this.w=null;this.A=[];this.B={};tua(this)},vua=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.Yd();if(k=(c?k6(k,c):null)||k6(k,b)){k.uuid=b;var l=w7(a,k);qua(a.u,l,function(m){e(m?l:null)})}else c?uua(a,c,(0,g.x)(function(m){var n=w7(this,new e6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));qua(this.u,n,function(q){e(q?n:null)})},a),f):e(null)},wua=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},uua=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={yb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Kp(f7(a.C,"/pairing/get_lounge_token_batch"),e)},xua=function(a){a.o=a.w.Yd();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+h6(a.o))},tua=function(a){x7(a);
a.w=new p7(a.C);a.w.subscribe("screenChange",(0,g.x)(a.XE,a));xua(a);a.A=Zsa(g.qs("yt-remote-automatic-screen-cache")||[]);x7(a);a.info("Initializing automatic screens: "+h6(a.A));a.u=new s7(a.C,(0,g.x)(a.Yd,a,!0));a.u.subscribe("screenChange",(0,g.x)(function(){this.R("onlineScreenChange")},a))},w7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=k6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.ps("yt-remote-automatic-screen-cache",(0,g.Hc)(a.A,Xsa)));x7(a);a.B[b.uuid]=b.id;g.ps("yt-remote-device-id-map",a.B,31536E3);return b},x7=function(a){a.B=g.qs("yt-remote-device-id-map")||{}},y7=function(a,b,c){g.Q.call(this);
this.O=c;this.H=a;this.u=b;this.w=null},z7=function(a,b){i7(a.O,b)},A7=function(a,b){y7.call(this,a,b,"CastSession");
this.o=null;this.A=0;this.C=(0,g.x)(this.cP,this);this.B=(0,g.x)(this.qN,this);this.A=g.Jo((0,g.x)(function(){yua(this,null)},this),12E4)},zua=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Kk(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ea,(0,g.x)(function(){z7(this,"Failed to send message: getMdxSessionStatus.")},a)):z7(a,"Sending yt message without session: "+g.Kk(b))},yua=function(a,b){g.Lo(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.w||a.w.id!=b){var c=(0,g.x)(a.vo,a),d=(0,g.x)(a.ee,a);a.Kw(b,c,d,5)}}else a.ee(Error("Waiting for session status timed out."))},B7=function(a,b,c){y7.call(this,a,b,"DialSession");
this.A=this.G=null;this.M="";this.T=c;this.B=null;this.F=g.Ea;this.C=NaN;this.J=(0,g.x)(this.fP,this);this.o=g.Ea},Aua=function(a){a.o=a.H.oC(a.M,a.u.label,a.u.friendlyName,(0,g.x)(function(b){this.o=g.Ea;
this.vo(b)},a),(0,g.x)(function(b){this.o=g.Ea;
this.ee(b)},a))},Bua=function(a){var b={};
b.pairingCode=a.M;b.theme=a.T;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}ita()&&(b.env_useStageMdx=1);return g.Xg(b)},C7=function(a,b){y7.call(this,a,b,"ManualSession");
this.o=g.Jo((0,g.x)(this.Ui,this,null),150)},D7=function(a,b,c,d){g.Q.call(this);
this.u=a;this.F=b||"233637DE";this.C=c||"cl";this.G=d||!1;this.o=null;this.B=!1;this.w=[];this.A=(0,g.x)(this.bM,this)},Cua=function(a,b){return b?g.Ua(a.w,function(c){return f6(b,c.label)},a):null},E7=function(a){i7("Controller",a)},fua=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},F7=function(a){return a.B||!!a.w.length||!!a.o},G7=function(a,b,c){b!=a.o&&(g.je(a.o),(a.o=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.u):a.R("yt-remote-cast2-receiver-selected",
b.u),b.subscribe("sessionScreen",(0,g.x)(a.iA,a,b)),b.w?a.R("yt-remote-cast2-session-change",b.w):c&&a.o.Ui(null)):a.R("yt-remote-cast2-session-change",null))},Dua=function(a){var b=a.u.nC(),c=a.o&&a.o.u;
a=(0,g.Hc)(b,function(d){c&&f6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Cua(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Jua=function(a,b,c,d,e,f,k){Eua()?Fua(b,e,f,k)&&(I7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Gua(a,c):(window.__onGCastApiAvailable=function(l,m){l?Gua(a,c):(J7("Failed to load cast API: "+m),K7(!1),I7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),Hua(),c(!1))},d?g.Wo("https://web.archive.org/web/20200205140011/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?pta():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?t6():(ota(),s6(Iua.map(mta))))):H7("Cannot initialize because not running Chrome")},Hua=function(){H7("dispose");
var a=L7();a&&a.dispose();g.Da("yt.mdx.remote.cloudview.instance_",null,void 0);Kua(!1);g.Ro(M7);M7.length=0},N7=function(){return!!g.qs("yt-remote-cast-installed")},Lua=function(){var a=g.qs("yt-remote-cast-receiver");
return a?a.friendlyName:null},Mua=function(){H7("clearCurrentReceiver");
l6("yt-remote-cast-receiver")},Nua=function(){return N7()?L7()?L7().getCastSession():(J7("getCastSelector: Cast is not initialized."),null):(J7("getCastSelector: Cast API is not installed!"),null)},P7=function(){N7()?L7()?O7()?(H7("Requesting cast selector."),L7().requestSession()):(H7("Wait for cast API to be ready to request the session."),M7.push(g.Qo("yt-remote-cast2-api-ready",P7))):J7("requestCastSelector: Cast is not initialized."):J7("requestCastSelector: Cast API is not installed!")},Q7=
function(a,b){O7()?L7().setConnectedScreenStatus(a,b):J7("setConnectedScreenStatus called before ready.")},Eua=function(){var a=0<=g.Ib.search(/ (CrMo|Chrome|CriOS)\//);
return g.Gv||a},Oua=function(a,b){L7().init(a,b)},Fua=function(a,b,c,d){var e=!1;
L7()||(a=new D7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.ps("yt-remote-cast-available",f);c6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){H7("onReceiverSelected: "+f.friendlyName);
g.ps("yt-remote-cast-receiver",f);c6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){H7("onReceiverResumed: "+f.friendlyName);
g.ps("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){H7("onSessionChange: "+g6(f));
f||l6("yt-remote-cast-receiver");c6("yt-remote-cast2-session-change",f)}),g.Da("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
H7("cloudview.createSingleton_: "+e);return e},L7=function(){return g.w("yt.mdx.remote.cloudview.instance_")},Gua=function(a,b){K7(!0);
I7(!1);Oua(a,function(c){c?(Kua(!0),g.To("yt-remote-cast2-api-ready")):(J7("Failed to initialize cast API."),K7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),Hua());b(c)})},H7=function(a){i7("cloudview",a)},J7=function(a){i7("cloudview",a)},K7=function(a){H7("setCastInstalled_ "+a);
g.ps("yt-remote-cast-installed",a)},O7=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},Kua=function(a){H7("setApiReady_ "+a);
g.Da("yt.mdx.remote.cloudview.apiReady_",a,void 0)},I7=function(a){g.Da("yt.mdx.remote.cloudview.initializing_",a,void 0)},R7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.C=this.F=0;this.o=null;this.hasNext=this.cf=!1;this.H=this.G=this.u=this.A=0;this.w=NaN;this.B=!1;this.reset(a)},S7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.cf=!1;a.hasNext=!1;a.F=0;a.C=(0,g.H)();a.A=0;a.u=0;a.G=0;a.H=0;a.w=NaN;a.B=!1},T7=function(a){return 1==a.playerState?((0,g.H)()-a.C)/1E3:0},U7=function(a,b){a.F=b;
a.C=(0,g.H)()},V7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.H)()-a.C)/1E3+a.F;
case -1E3:return 0}return a.F},W7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&S7(a)},X7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.ac(a.o);b.hasPrevious=a.cf;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.C;b.seekableStart=a.A;b.seekableEnd=a.u;b.duration=a.G;b.loadedTime=a.H;b.liveIngestionTime=a.w;return b},Z7=function(a,b){g.Q.call(this);
this.o=0;this.A=a;this.C=[];this.B=new aua;this.w=this.u=null;this.H=(0,g.x)(this.bK,this);this.F=(0,g.x)(this.il,this);this.G=(0,g.x)(this.aK,this);this.M=(0,g.x)(this.nK,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.ku,this),Pua(this))):c=3;0!=c&&(b?this.ku(c):g.Jo((0,g.x)(function(){this.ku(c)},this),0));
var d=Nua();d&&Y7(this,d);this.subscribe("yt-remote-cast2-session-change",this.M)},$7=function(a){return new R7(a.A.getPlayerContextData())},Pua=function(a){(0,g.y)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.C.push(this.A.subscribe(b,g.Na(this.YL,b),this))},a)},Qua=function(a){(0,g.y)(a.C,function(b){this.A.unsubscribeByKey(b)},a);
a.C.length=0},a8=function(a,b){var c=a.B;
50>c.o.length+c.u.length&&a.B.u.push(b)},c8=function(a,b,c){var d=$7(a);
U7(d,c);-1E3!=d.playerState&&(d.playerState=b);b8(a,d)},d8=function(a,b,c){a.A.sendMessage(b,c)},b8=function(a,b){Qua(a);
a.A.setPlayerContextData(X7(b));Pua(a)},Y7=function(a,b){a.w&&(a.w.removeUpdateListener(a.H),a.w.removeMediaListener(a.F),a.il(null));
a.w=b;a.w&&(i7("CP","Setting cast session: "+a.w.sessionId),a.w.addUpdateListener(a.H),a.w.addMediaListener(a.F),a.w.media.length&&a.il(a.w.media[0]))},Rua=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=$7(a);b.contentId!=d.videoId&&i7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;U7(d,a.u.getEstimatedTime());b8(a,d)}else i7("CP","No cast media video. Ignoring state update.")},e8=function(a,b,c){return(0,g.x)(function(d){this.Rb("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Rb("Retrying "+b+" using MDx browser channel."),d8(this,b,c))},a)},f8=function(a,b,c){g.Q.call(this);
this.B=NaN;this.J=!1;this.G=this.F=this.H=this.M=NaN;this.O=[];this.A=this.C=this.w=this.Sa=this.o=null;this.U=a;this.O.push(g.Eq(window,"beforeunload",(0,g.x)(this.IE,this)));this.u=[];this.Sa=new R7;this.T=b.id;this.o=Sua(this,c);this.o.subscribe("handlerOpened",this.fK,this);this.o.subscribe("handlerClosed",this.cK,this);this.o.subscribe("handlerError",this.dK,this);this.o.subscribe("handlerMessage",this.eK,this);eua(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Sa.videoId;
g.rs()&&g.ps("yt-remote-session-video-id",d)},this)},g8=function(a){i7("conn",a)},Sua=function(a,b){return new c7(f7(a.U,"/bc"),b)},h8=function(a,b){a.R("proxyStateChange",b)},Tua=function(a){a.B=g.Jo((0,g.x)(function(){g8("Connecting timeout");
this.yi(1)},a),2E4)},i8=function(a){g.Lo(a.B);
a.B=NaN},j8=function(a){g.Lo(a.M);
a.M=NaN},Uua=function(a){k8(a);
a.H=g.Jo((0,g.x)(function(){l8(this,"getNowPlaying")},a),2E4)},k8=function(a){g.Lo(a.H);
a.H=NaN},Wua=function(a,b){b&&(i8(a),j8(a));
b==(d7(a.o)&&isNaN(a.B))?b&&(h8(a,1),l8(a,"getSubtitlesTrack")):b?(a.Iw()&&a.Sa.reset(),h8(a,1),l8(a,"getNowPlaying"),Vua(a)):a.yi(1)},Xua=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Sa.videoId&&(g.Xb(b.params)?a.Sa.o=null:a.Sa.o=b.params,a.R("remotePlayerChange"))},Yua=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Sa.listId=b.params.listId||a.Sa.listId;W7(a.Sa,c,d);a.R("remoteQueueChange")},$ua=function(a,b){b.params=b.params||{};
Yua(a,b);Zua(a,b);a.R("autoplayDismissed")},Zua=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
U7(a.Sa,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Sa.playerState&&(c=-1E3);a.Sa.playerState=c;c=Number(b.params.loadedTime);a.Sa.H=isNaN(c)?0:c;c=Number(b.params.duration);a.Sa.G=isNaN(c)?0:c;c=a.Sa;var d=Number(b.params.liveIngestionTime);c.w=d;c.B=isNaN(d)?!1:!0;c=a.Sa;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.A=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.Sa.playerState?Uua(a):k8(a);a.R("remotePlayerChange")},ava=function(a,b){if(-1E3!=
a.Sa.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Sa.playerState=c;c=parseInt(b.params.currentTime,10);U7(a.Sa,isNaN(c)?0:c);a.R("remotePlayerChange")}},bva=function(a,b){var c="true"==b.params.muted;
a.Sa.volume=parseInt(b.params.volume,10);a.Sa.muted=c;a.R("remotePlayerChange")},cva=function(a,b){a.C=b.params.videoId;
a.R("nowAutoplaying",parseInt(b.params.timeout,10))},dva=function(a,b){var c="true"==b.params.hasNext;
a.Sa.cf="true"==b.params.hasPrevious;a.Sa.hasNext=c;a.R("previousNextChange")},Vua=function(a){g.Lo(a.G);
a.G=g.Jo((0,g.x)(a.yi,a,1),864E5)},l8=function(a,b,c){c?g8("Sending: action="+b+", params="+g.Kk(c)):g8("Sending: action="+b);
a.o.sendMessage(b,c)},m8=function(a){m7.call(this,"ScreenServiceProxy");
this.kd=a;this.u=[];this.u.push(this.kd.$_s("screenChange",(0,g.x)(this.aP,this)));this.u.push(this.kd.$_s("onlineScreenChange",(0,g.x)(this.DL,this)))},iva=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.N("MDX_CONFIG")||b;ata();p6();n8||(n8=new e7(b?b.loungeApiHost:void 0),ita()&&(n8.o="/api/loungedev"));o8||(o8=g.w("yt.mdx.remote.deferredProxies_")||[],g.Da("yt.mdx.remote.deferredProxies_",o8,void 0));eva();var c=p8();if(!c){var d=new v7(n8);g.Da("yt.mdx.remote.screenService_",d,void 0);c=p8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);Jua(a,d,function(m){m?q8()&&Q7(q8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){c6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.w("yt.mdx.remote.initialized_")&&(g.Da("yt.mdx.remote.initialized_",!0,void 0),r8("Initializing: "+g.Kk(b)),s8.push(g.Qo("yt-remote-cast2-availability-change",function(){c6("yt-remote-receiver-availability-change")})),s8.push(g.Qo("yt-remote-cast2-receiver-selected",function(){t8(null);
c6("yt-remote-auto-connect","cast-selector-receiver")})),s8.push(g.Qo("yt-remote-cast2-receiver-resumed",function(){c6("yt-remote-receiver-resumed","cast-selector-receiver")})),s8.push(g.Qo("yt-remote-cast2-session-change",fva)),s8.push(g.Qo("yt-remote-connection-change",function(m){m?Q7(q8(),"YouTube TV"):u8()||(Q7(null,null),Mua())})),a=v8(),b.isAuto&&(a.id+="#dial"),g.Ap("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),r8(" -- with channel params: "+
g.Kk(a)),gva(a),c.start(),q8()||hva())},kva=function(){var a=jva();
N7()&&g.qs("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},jva=function(){var a=p8().kd.$_gos();
var b=w8();b&&x8()&&(j6(a,b)||a.push(b));return $sa(a)},y8=function(){var a=lva();
!a&&N7()&&Lua()&&(a={key:"cast-selector-receiver",name:Lua()});return a},lva=function(){var a=jva(),b=w8();
b||(b=u8());return g.Ua(a,function(c){return b&&f6(b,c.key)?!0:!1})},w8=function(){var a=q8();
if(!a)return null;var b=p8().Yd();return k6(b,a)},fva=function(a){r8("remote.onCastSessionChange_: "+g6(a));
if(a){var b=w8();b&&b.id==a.id?Q7(b.id,"YouTube TV"):(b&&z8(),A8(a,1))}else x8()&&z8()},z8=function(){O7()?L7().stopSession():J7("stopSession called before API ready.");
var a=x8();a&&(a.disconnect(1),B8(null))},C8=function(){var a=x8();
return!!a&&3!=a.getProxyState()},r8=function(a){i7("remote",a)},p8=function(){if(!D8){var a=g.w("yt.mdx.remote.screenService_");
D8=a?new m8(a):null}return D8},q8=function(){return g.w("yt.mdx.remote.currentScreenId_")},mva=function(a){g.Da("yt.mdx.remote.currentScreenId_",a,void 0)},nva=function(){return g.w("yt.mdx.remote.connectData_")},t8=function(a){g.Da("yt.mdx.remote.connectData_",a,void 0)},x8=function(){return g.w("yt.mdx.remote.connection_")},B8=function(a){var b=x8();
t8(null);a||mva("");g.Da("yt.mdx.remote.connection_",a,void 0);o8&&((0,g.y)(o8,function(c){c(a)}),o8.length=0);
b&&!a?c6("yt-remote-connection-change",!1):!b&&a&&c6("yt-remote-connection-change",!0)},u8=function(){var a=g.rs();
if(!a)return null;var b=p8().Yd();return k6(b,a)},A8=function(a,b){q8();
w8()&&w8();if(E8)F8=a;else{mva(a.id);var c=new f8(n8,a,v8());c.connect(b,nva());c.subscribe("beforeDisconnect",function(d){c6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){x8()&&(x8(),B8(null))});
B8(c)}},hva=function(){var a=u8();
a?(r8("Resume connection to: "+g6(a)),A8(a,0)):(q6(),Mua(),r8("Skipping connecting because no session screen found."))},eva=function(){var a=v8();
if(g.Xb(a)){a=o6();var b=g.qs("yt-remote-session-name")||"",c=g.qs("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Da("yt.mdx.remote.channelParams_",a,void 0)}},v8=function(){return g.w("yt.mdx.remote.channelParams_")||{}},gva=function(a){a?(g.ps("yt-remote-session-app",a.app),g.ps("yt-remote-session-name",a.name)):(l6("yt-remote-session-app"),l6("yt-remote-session-name"));
g.Da("yt.mdx.remote.channelParams_",a,void 0)},G8=function(a,b,c){g.A.call(this);
this.B=a;this.u=b;this.w=new g.P(this);g.B(this,this.w);this.w.L(b,"onCaptionsTrackListChanged",this.YK);this.w.L(b,"captionschanged",this.ZJ);this.w.L(b,"captionssettingschanged",this.yB);this.w.L(b,"videoplayerreset",this.wo);this.w.L(b,"mdxautoplaycancel",this.BD);this.T=this.w.L(b,"onVolumeChange",this.Qz);this.G=!1;this.o=c;c.subscribe("proxyStateChange",this.eA,this);c.subscribe("remotePlayerChange",this.ll,this);c.subscribe("remoteQueueChange",this.wo,this);c.subscribe("autoplayUpNext",this.Gz,
this);c.subscribe("previousNextChange",this.bA,this);c.subscribe("nowAutoplaying",this.Xz,this);c.subscribe("autoplayDismissed",this.Fz,this);this.suggestion=null;this.H=new g.mD(64);this.A=new g.J(this.uB,500,this);g.B(this,this.A);this.C=new g.J(this.vB,1E3,this);g.B(this,this.C);this.J=new u6(this.CO,0,this);g.B(this,this.J);this.F={};this.O=new g.J(this.aC,1E3,this);g.B(this,this.O);this.M=new v6(this.BH,1E3,this);g.B(this,this.M);this.U=g.Ea;this.yB();this.wo();this.ll()},H8=function(a,b){var c=
a.B,d=a.u.getVideoData().lengthSeconds;
c.O=b||0;c.player.R("progresssync",b,d)},ova=function(a){H8(a,0);
a.A.stop();I8(a,new g.mD(64))},K8=function(a,b){if(J8(a)&&!a.G){var c=null;
b&&(c={style:a.u.getSubtitlesUserSettings()},g.cc(c,b));a.o.jB(a.u.getVideoData(1).videoId,c);a.F=$7(a.o).o}},L8=function(a,b){var c=a.u.getPlaylist();
if(c){var d=c.Va;var e=c.listId.toString()}c=a.u.getVideoData(1);a.o.playVideo(c.videoId,b,d,e,c.playerParams,c.ff,g.vB(c));I8(a,new g.mD(1))},pva=function(a,b){if(b){var c=a.u.getOption("captions","tracklist",{WS:1});
c&&c.length?(a.u.setOption("captions","track",b),a.G=!1):(a.u.loadModule("captions"),a.G=!0)}else a.u.setOption("captions","track",{})},J8=function(a){return $7(a.o).videoId==a.u.getVideoData(1).videoId},I8=function(a,b){a.C.stop();
var c=a.H;if(!g.sD(c,b)){var d=g.W(b,2);d!=g.W(a.H,2)&&g.RS(a.u.app,d);a.H=b;qva(a.B,c,b)}},M8=function(){g.V.call(this,{D:"div",
I:"ytp-mdx-popup-dialog",N:{role:"dialog"},K:[{D:"div",I:"ytp-mdx-popup-dialog-inner-content",K:[{D:"div",I:"ytp-mdx-popup-title",V:"You're signed out"},{D:"div",I:"ytp-mdx-popup-description",V:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",I:"ytp-mdx-privacy-popup-buttons",K:[{D:"button",W:["ytp-button","ytp-mdx-privacy-popup-cancel"],V:"Cancel"},{D:"button",W:["ytp-button","ytp-mdx-privacy-popup-confirm"],
V:"Confirm"}]}]}]});this.u=new g.XL(this,250);g.B(this,this.u);this.C=this.o["ytp-mdx-privacy-popup-cancel"];this.L(this.C,"click",this.w);this.A=this.o["ytp-mdx-privacy-popup-confirm"];this.L(this.A,"click",this.B)},N8=function(a){g.V.call(this,{D:"div",
I:"ytp-remote",K:[{D:"div",I:"ytp-remote-display-status",K:[{D:"div",I:"ytp-remote-display-status-icon",K:[g.ZL()]},{D:"div",I:"ytp-remote-display-status-text",V:"{{statustext}}"}]}]});this.u=new g.XL(this,250);g.B(this,this.u);this.w=a;this.L(a,"presentingplayerstatechange",this.A);rva(this,g.lL(a))},rva=function(a,b){if(3==a.w.getPresentingPlayerType()){var c={RECEIVER_NAME:a.w.getOption("remote","currentReceiver").name};
c=g.W(b,128)?g.CM("Error on $RECEIVER_NAME",c):g.tD(b)||g.W(b,4)?g.CM("Playing on $RECEIVER_NAME",c):g.CM("Connected to $RECEIVER_NAME",c);a.ha("statustext",c);a.u.show()}else a.u.hide()},O8=function(a,b){g.lO.call(this,"Play on",0,a,b);
this.u=a;this.C={};this.L(a,"onMdxReceiversChange",this.J);this.L(a,"presentingplayerstatechange",this.J);this.J()},P8=function(a){g.uP.call(this,a);
this.u={key:i6(),name:"This computer"};this.B=null;this.A=[];this.T=this.o=null;this.M=[this.u];this.w=this.u;this.F=new g.mD(64);this.O=0;this.H=-1;this.C=null;if(!g.Ix(this.player.P())){a=this.player;var b=g.TC(a);b&&(b=b.Uk())&&(b=new O8(a,b),g.B(this,b));b=new N8(a);g.B(this,b);g.DL(a,b.element,4);this.C=new M8;g.B(this,this.C);g.DL(a,this.C.element,4);this.J=!!u8()}this.G=null},Q8=function(a){a.G&&(a.player.removeEventListener("presentingplayerstatechange",a.G),a.G=null)},qva=function(a,b,c){a.F=
c;
a.player.R("presentingplayerstatechange",new g.yD(c,b))},R8=function(a,b){if(b.key!=a.w.key)if(b.key==a.u.key)z8();
else{var c;(c=!g.R(a.player.P().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.N("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.N("SESSION_INDEX")&&!g.N("LOGGED_IN")))||a.J||!a.C);if(c?0:a.player.P().Bh()||"WEB_EMBEDDED_PLAYER"==a.player.P().deviceParams.c)g.tD(g.lL(a.player))?a.player.pauseVideo():(a.G=(0,g.x)(a.vN,a),a.player.addEventListener("presentingplayerstatechange",a.G)),a.C&&a.C.u.show(),x8()||(E8=!0);a.w=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(!d&&!e||(2==a.player.app.U||1==a.player.app.U)&&g.R(a.player.P().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.wa(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.ff,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(c=g.vB(c))&&(d.locationInfo=c);c=d}r8("Connecting to: "+
g.Kk(b));"cast-selector-receiver"==b.key?(t8(c||null),c=c||null,O7()?L7().setLaunchParams(c):J7("setLaunchParams called before ready.")):!c&&C8()&&q8()==b.key?c6("yt-remote-connection-change",!0):(z8(),t8(c||null),c=p8().Yd(),(c=k6(c,b.key))&&A8(c,1))}},yta={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},G6={"'":"\\'"},sva={},Wsa={DP:"atp",iS:"ska",XR:"que",qR:"mus",hS:"sus",CQ:"dsp",eS:"seq"};
d6.prototype.wg=function(){var a=new d6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.w=this.w;a.u=this.u;a.o=this.o};
var r6,n6="",nta=jta("loadCastFramework")||jta("loadCastApplicationFramework"),Iua=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.Pa(u6,g.A);g.h=u6.prototype;g.h.EE=function(a){this.A=arguments;this.o=!1;this.Ha?this.w=(0,g.H)()+this.ld:this.Ha=g.yf(this.B,this.ld)};
g.h.stop=function(){this.Ha&&(g.v.clearTimeout(this.Ha),this.Ha=null);this.w=null;this.o=!1;this.A=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.C.apply(null,this.A)))};
g.h.X=function(){this.stop();u6.Db.X.call(this)};
g.h.FE=function(){this.w?(this.Ha=g.yf(this.B,this.w-(0,g.H)()),this.w=null):(this.Ha=null,this.u?this.o=!0:(this.o=!1,this.C.apply(null,this.A)))};g.Pa(v6,g.A);g.h=v6.prototype;g.h.Fi=!1;g.h.mk=0;g.h.Ha=null;g.h.Rw=function(a){this.o=arguments;this.Ha||this.mk?this.Fi=!0:w6(this)};
g.h.stop=function(){this.Ha&&(g.v.clearTimeout(this.Ha),this.Ha=null,this.Fi=!1,this.o=[])};
g.h.pause=function(){this.mk++};
g.h.resume=function(){this.mk--;this.mk||!this.Fi||this.Ha||(this.Fi=!1,w6(this))};
g.h.X=function(){v6.Db.X.call(this);this.stop()};
g.h.GE=function(){this.Ha=null;this.Fi&&!this.mk&&(this.Fi=!1,w6(this))};x6.prototype.o=null;x6.prototype.getOptions=function(){var a;(a=this.o)||(a={},rta(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var S8;g.Pa(qta,x6);S8=new qta;g.h=y6.prototype;g.h.zh=null;g.h.Oe=!1;g.h.Hj=null;g.h.hu=null;g.h.tj=null;g.h.Gi=null;g.h.rg=null;g.h.Xg=null;g.h.Vh=null;g.h.Fc=null;g.h.Ql=0;g.h.Se=null;g.h.fp=null;g.h.Cg=null;g.h.pk=-1;g.h.dB=!0;g.h.jh=!1;g.h.Lq=0;g.h.Bo=null;var wta={},B6={};g.h=y6.prototype;g.h.setTimeout=function(a){this.B=a};
g.h.HN=function(a){a=a.target;var b=this.Bo;b&&3==R6(a)?b.Rw():this.iC(a)};
g.h.iC=function(a){try{if(a==this.Fc)a:{var b=R6(this.Fc),c=this.Fc.C,d=this.Fc.getStatus();if(g.Kd&&!g.od(10)||g.Md&&!g.nd("420+")){if(4>b)break a}else if(3>b||3==b&&!g.rh&&!T6(this.Fc))break a;this.jh||4!=b||7==c||(8==c||0>=d?this.o.Ne(3):this.o.Ne(2));I6(this);var e=this.Fc.getStatus();this.pk=e;var f=T6(this.Fc);(this.Oe=200==e)?(4==b&&E6(this),this.C?(xta(this,b,f),g.rh&&this.Oe&&3==b&&(this.A.ga(this.u,"tick",this.BN),this.u.start())):D6(this,f),this.Oe&&!this.jh&&(4==b?this.o.so(this):(this.Oe=
!1,A6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Cg=3,C6(13)):(this.Cg=0,C6(14)),E6(this),F6(this))}}catch(k){this.Fc&&T6(this.Fc)}finally{}};
g.h.BN=function(){var a=R6(this.Fc),b=T6(this.Fc);this.Ql<b.length&&(I6(this),xta(this,a,b),this.Oe&&4!=a&&A6(this))};
g.h.bN=function(a){H6((0,g.x)(this.aN,this,a),0)};
g.h.aN=function(a){this.jh||(I6(this),D6(this,a),A6(this))};
g.h.lA=function(a){H6((0,g.x)(this.ZM,this,a),0)};
g.h.ZM=function(a){this.jh||(E6(this),this.Oe=a,this.o.so(this),this.o.Ne(4))};
g.h.cancel=function(){this.jh=!0;E6(this)};
g.h.iN=function(){this.Hj=null;var a=(0,g.H)();0<=a-this.hu?(2!=this.Gi&&this.o.Ne(3),E6(this),this.Cg=2,C6(18),F6(this)):Ata(this,this.hu-a)};
g.h.getLastError=function(){return this.Cg};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
K6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
K6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};g.h=Dta.prototype;g.h.Jq=null;g.h.Kd=null;g.h.Co=!1;g.h.Tw=null;g.h.Tm=null;g.h.wr=null;g.h.Kq=null;g.h.se=null;g.h.Rf=-1;g.h.nk=null;g.h.Qj=null;g.h.connect=function(a){this.Kq=a;a=L6(this.o,null,this.Kq);C6(3);this.Tw=(0,g.H)();var b=this.o.G;null!=b?(this.nk=b[0],(this.Qj=b[1])?(this.se=1,Eta(this)):(this.se=2,N6(this))):($5(a,"MODE","init"),this.Kd=new y6(this,void 0,void 0,void 0),this.Kd.zh=this.Jq,z6(this.Kd,a,!1,null,!0),this.se=0)};
g.h.CD=function(a){if(a)this.se=2,N6(this);else{C6(4);var b=this.o;b.bf=b.vg.Rf;$6(b,9)}a&&this.Ne(2)};
g.h.cq=function(a){return this.o.cq(a)};
g.h.abort=function(){this.Kd&&(this.Kd.cancel(),this.Kd=null);this.Rf=-1};
g.h.Sw=function(){return!1};
g.h.fA=function(a,b){this.Rf=a.pk;if(0==this.se)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.bf=this.Rf;$6(c,2);return}this.nk=c[0];this.Qj=c[1]}else c=this.o,c.bf=this.Rf,$6(c,2);else if(2==this.se)if(this.Co)C6(7),this.wr=(0,g.H)();else if("11111"==b){if(C6(6),this.Co=!0,this.Tm=(0,g.H)(),c=this.Tm-this.Tw,!g.Kd||g.od(10)||500>c)this.Rf=200,this.Kd.cancel(),C6(12),M6(this.o,this,!0)}else C6(8),this.Tm=this.wr=(0,g.H)(),this.Co=!1};
g.h.so=function(){this.Rf=this.Kd.pk;if(this.Kd.Oe)0==this.se?this.Qj?(this.se=1,Eta(this)):(this.se=2,N6(this)):2==this.se&&((!g.Kd||g.od(10)?!this.Co:200>this.wr-this.Tm)?(C6(11),M6(this.o,this,!1)):(C6(12),M6(this.o,this,!0)));else{0==this.se?C6(9):2==this.se&&C6(10);var a=this.o;this.Kd.getLastError();a.bf=this.Rf;$6(a,2)}};
g.h.Cl=function(){return this.o.Cl()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Ne=function(a){this.o.Ne(a)};g.Pa(P6,g.Je);var Jta=/^https?$/i,tva=["POST","PUT"];g.h=P6.prototype;
g.h.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET";this.H=a;this.A="";this.C=0;this.da=b;this.U=!1;this.w=!0;this.o=this.T?sta(this.T):sta(S8);this.O=this.T?this.T.getOptions():S8.getOptions();this.o.onreadystatechange=(0,g.x)(this.Uw,this);try{b6(S6(this,"Opening Xhr")),this.Z=!0,this.o.open(b,String(a),!0),this.Z=!1}catch(f){b6(S6(this,"Error opening Xhr: "+f.message));Ita(this,f);return}a=c||
"";var e=this.headers.clone();d&&Ssa(d,function(f,k){e.set(k,f)});
d=g.Ua(e.pe(),Gta);c=g.v.FormData&&a instanceof g.v.FormData;!g.Xa(tva,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.o.setRequestHeader(k,f)},this);
this.na&&(this.o.responseType=this.na);"withCredentials"in this.o&&this.o.withCredentials!==this.Y&&(this.o.withCredentials=this.Y);try{Lta(this),0<this.F&&(this.J=Fta(this.o),b6(S6(this,"Will abort after "+this.F+"ms if incomplete, xhr2 "+this.J)),this.J?(this.o.timeout=this.F,this.o.ontimeout=(0,g.x)(this.Vw,this)):this.M=g.yf(this.Vw,this.F,this)),b6(S6(this,"Sending request")),this.G=!0,this.o.send(a),this.G=!1}catch(f){b6(S6(this,"Send error: "+f.message)),Ita(this,f)}};
g.h.Vw=function(){"undefined"!=typeof g.F1&&this.o&&(this.A="Timed out after "+this.F+"ms, aborting",this.C=8,S6(this,this.A),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.o&&this.w&&(S6(this,"Aborting"),this.w=!1,this.B=!0,this.o.abort(),this.B=!1,this.C=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Q6(this))};
g.h.X=function(){this.o&&(this.w&&(this.w=!1,this.B=!0,this.o.abort(),this.B=!1),Q6(this,!0));P6.Db.X.call(this)};
g.h.Uw=function(){this.ka()||(this.Z||this.G||this.B?Kta(this):this.aM())};
g.h.aM=function(){Kta(this)};
g.h.isActive=function(){return!!this.o};
g.h.getStatus=function(){try{return 2<R6(this)?this.o.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return"string"===typeof this.A?this.A:String(this.A)};g.h=U6.prototype;g.h.bk=null;g.h.Ed=null;g.h.Zb=null;g.h.Iq=null;g.h.Vm=null;g.h.ov=null;g.h.jn=null;g.h.bl=0;g.h.tJ=0;g.h.hd=null;g.h.zg=null;g.h.Ff=null;g.h.oh=null;g.h.vg=null;g.h.cp=null;g.h.Ti=-1;g.h.Gx=-1;g.h.bf=-1;g.h.zi=0;g.h.ri=0;g.h.kh=8;var a7=new g.Je;g.Pa(Nta,g.le);g.Pa(Ota,g.le);g.Pa(Pta,g.le);g.h=U6.prototype;g.h.connect=function(a,b,c,d,e){C6(0);this.Iq=b;this.bk=c||{};d&&void 0!==e&&(this.bk.OSID=d,this.bk.OAID=e);this.C?(H6((0,g.x)(this.Kv,this,a),100),Tta(this)):this.Kv(a)};
g.h.Kv=function(a){this.vg=new Dta(this);this.vg.Jq=null;this.vg.u=this.B;this.vg.connect(a)};
g.h.Sw=function(){return 0==this.o};
g.h.kA=function(a){this.zg=null;Wta(this,a)};
g.h.jA=function(){this.Ff=null;this.Zb=new y6(this,this.w,"rpc",this.F);this.Zb.zh=null;this.Zb.Lq=0;var a=this.ov.clone();Y5(a,"RID","rpc");Y5(a,"SID",this.w);Y5(a,"CI",this.cp?"0":"1");Y5(a,"AID",this.Ti);V6(this,a);if(!g.Kd||g.od(10))Y5(a,"TYPE","xmlhttp"),z6(this.Zb,a,!0,this.jn,!1);else{Y5(a,"TYPE","html");var b=this.Zb,c=!!this.jn;b.Gi=3;b.rg=Z5(a.clone());zta(b,c)}};
g.h.fA=function(a,b){if(0!=this.o&&(this.Zb==a||this.Ed==a))if(this.bf=a.pk,this.Ed==a&&3==this.o)if(7<this.kh){try{var c=this.B.parse(b)}catch(f){c=null}if(g.Ha(c)&&3==c.length)if(0==c[0])a:{if(!this.Ff){if(this.Zb)if(this.Zb.tj+3E3<this.Ed.tj)X6(this),this.Zb.cancel(),this.Zb=null;else break a;Z6(this);C6(19)}}else this.Gx=c[1],0<this.Gx-this.Ti&&37500>c[2]&&this.cp&&0==this.ri&&!this.oh&&(this.oh=H6((0,g.x)(this.VJ,this),6E3));else $6(this,11)}else b!=sva.aQ.o&&$6(this,11);else if(this.Zb==a&&
X6(this),!g.wb(b)){c=this.B.parse(b);g.Ha(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ti=e[0];e=e[1];2==this.o?"c"==e[0]?(this.w=e[1],this.jn=e[2],e=e[3],null!=e?this.kh=e:this.kh=6,this.o=3,this.hd&&this.hd.Gv(),this.ov=L6(this,this.Cl()?this.jn:null,this.Iq),Xta(this)):"stop"==e[0]&&$6(this,7):3==this.o&&("stop"==e[0]?$6(this,7):"noop"!=e[0]&&this.hd&&this.hd.Fv(e),this.ri=0)}}};
g.h.VJ=function(){null!=this.oh&&(this.oh=null,this.Zb.cancel(),this.Zb=null,Z6(this),C6(20))};
g.h.so=function(a){if(this.Zb==a){X6(this);this.Zb=null;var b=2}else if(this.Ed==a)this.Ed=null,b=1;else return;this.bf=a.pk;if(0!=this.o)if(a.Oe)1==b?(b=(0,g.H)()-a.tj,a7.dispatchEvent(new Ota(a7,a.Vh?a.Vh.length:0,b,this.zi)),W6(this),this.A.length=0):Xta(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.bf)){if(d=1==b)this.Ed||this.zg||1==this.o||2<=this.zi?d=!1:(this.zg=H6((0,g.x)(this.kA,this,a),Yta(this,this.zi)),this.zi++,d=!0);d=!(d||2==b&&Z6(this))}if(d)switch(c){case 1:$6(this,
5);break;case 4:$6(this,10);break;case 3:$6(this,6);break;case 7:$6(this,12);break;default:$6(this,2)}}};
g.h.YD=function(a){if(!g.Xa(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.sO=function(a){a?C6(2):(C6(1),Zta(this,8))};
g.h.cq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new P6;a.Y=!1;return a};
g.h.isActive=function(){return!!this.hd&&this.hd.isActive(this)};
g.h.Ne=function(a){a7.dispatchEvent(new Pta(a7,a))};
g.h.Cl=function(){return!(!g.Kd||g.od(10))};
g.h=$ta.prototype;g.h.Gv=function(){};
g.h.Fv=function(){};
g.h.Ev=function(){};
g.h.Up=function(){};
g.h.pw=function(){return{}};
g.h.isActive=function(){return!0};g.h=aua.prototype;g.h.isEmpty=function(){return g.Ya(this.o)&&g.Ya(this.u)};
g.h.clear=function(){this.o=[];this.u=[]};
g.h.contains=function(a){return g.Xa(this.o,a)||g.Xa(this.u,a)};
g.h.remove=function(a){var b=this.o;var c=(0,g.hoa)(b,a);0<=c?(g.$a(b,c),b=!0):b=!1;return b||g.bb(this.u,a)};
g.h.yd=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Pa(b7,g.A);g.h=b7.prototype;g.h.SM=function(){this.ld=Math.min(3E5,2*this.ld);this.w();this.u&&this.start()};
g.h.start=function(){var a=this.ld+15E3*Math.random();g.mn(this.o,a);this.u=(0,g.H)()+a};
g.h.stop=function(){this.o.stop();this.u=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.ld=5E3};g.Pa(c7,$ta);g.h=c7.prototype;g.h.subscribe=function(a,b,c){return this.w.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.w.unsubscribe(a,b,c)};
g.h.dg=function(a){return this.w.Ah(a)};
g.h.R=function(a,b){return this.w.R.apply(this.w,arguments)};
g.h.dispose=function(){this.tb||(this.tb=!0,g.je(this.w),dua(this),g.je(this.u),this.u=null)};
g.h.ka=function(){return this.tb};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.H="";this.u.stop();this.B=a||null;this.A=b||0;a=this.M+"/test";b=this.M+"/bind";var d=new U6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.J),e=this.o;e&&(e.hd=null);d.hd=this;this.o=d;e?this.o.connect(a,b,this.C,e.w,e.Ti):c?this.o.connect(a,b,this.C,c.sessionId,c.arrayId):this.o.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.cc(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.F.push(c):d7(this)&&Uta(this.o,c)};
g.h.Gv=function(){this.u.reset();this.B=null;this.A=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)Uta(this.o,a[b])}this.R("handlerOpened")};
g.h.Ev=function(a){var b=2==a&&401==this.o.bf;4==a||b||this.u.start();this.R("handlerError",a)};
g.h.Up=function(a){if(!this.u.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.F.push(d)}};
g.h.pw=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.G&&(a.ui=""+this.G);this.B&&g.cc(a,this.B);return a};
g.h.Fv=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),Sta(this.o)):this.R("handlerMessage",new bua(a[0],a[1]))};
g.h.WN=function(){this.u.isActive();var a=this.o,b=0;a.Zb&&b++;a.Ed&&b++;0==b&&this.connect(this.B,this.A)};e7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
e7.prototype.w=function(a,b){a(Error("Request error: "+b.status))};
e7.prototype.B=function(a){a(Error("request timed out"))};var lua=(0,g.H)(),h7=null,k7=Array(50),j7=-1,l7=!1;g.Pa(m7,g.Q);m7.prototype.Yd=function(){return this.o};
m7.prototype.contains=function(a){return!!j6(this.o,a)};
m7.prototype.get=function(a){return a?k6(this.o,a):null};
m7.prototype.info=function(a){i7(this.F,a)};g.r(n7,g.Q);g.h=n7.prototype;g.h.start=function(){!this.o&&isNaN(this.Ha)&&this.mC()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.Ha)||(g.Lo(this.Ha),this.Ha=NaN)};
g.h.X=function(){this.stop();g.Q.prototype.X.call(this)};
g.h.mC=function(){this.Ha=NaN;this.o=g.Kp(f7(this.C,"/pairing/get_screen"),{method:"POST",yb:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.x)(this.YO,this),onError:(0,g.x)(this.XO,this),Gd:(0,g.x)(this.ZO,this)})};
g.h.YO=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.w;c.name=this.A;this.R("pairingComplete",new e6(c))};
g.h.XO=function(a){this.o=null;a.status&&404==a.status?this.u>=uva.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=uva[this.u],this.Ha=g.Jo((0,g.x)(this.mC,this),a),this.u++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.ZO=function(){this.o=null;this.R("pairingFailed",Error("Server not responding"))};
var uva=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Pa(p7,m7);g.h=p7.prototype;g.h.start=function(){o7(this)&&this.R("screenChange");!g.qs("yt-remote-lounge-token-expiration")&&pua(this);g.Lo(this.u);this.u=g.Jo((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){o7(this);mua(this,a);q7(this,!1);this.R("screenChange");b(a);a.token||pua(this)};
g.h.remove=function(a,b){var c=o7(this);oua(this,a)&&(q7(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.Yo=function(a,b,c,d){var e=o7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,q7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.X=function(){g.Lo(this.u);p7.Db.X.call(this)};
g.h.PE=function(a){o7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}q7(this,!b);b&&i7(this.F,"Missed "+b+" lounge tokens.")};
g.h.OE=function(a){i7(this.F,"Requesting lounge tokens failed: "+a)};g.r(s7,g.Q);g.h=s7.prototype;g.h.start=function(){var a=parseInt(g.qs("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.H)()-144E5<a?0:a)?u7(this):(this.A=(0,g.H)()+3E5,g.ps("yt-remote-fast-check-period",this.A),this.vt())};
g.h.isEmpty=function(){return g.Xb(this.o)};
g.h.update=function(){r7("Updating availability on schedule.");var a=this.C(),b=g.Lb(this.o,function(c,d){return c&&!!k6(a,d)},this);
t7(this,b)};
g.h.X=function(){g.Lo(this.w);this.w=NaN;this.u&&(this.u.abort(),this.u=null);g.Q.prototype.X.call(this)};
g.h.vt=function(){g.Lo(this.w);this.w=NaN;this.u&&this.u.abort();var a=sua(this);if(a6(a)){var b=f7(this.B,"/pairing/get_screen_availability");this.u=g7(this.B,b,{lounge_token:g.Rb(a).join(",")},(0,g.x)(this.wM,this,a),(0,g.x)(this.vM,this))}else t7(this,{}),u7(this)};
g.h.wM=function(a,b){this.u=null;var c=g.Rb(sua(this));if(g.qb(c,g.Rb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;t7(this,d);u7(this)}else this.Rb("Changing Screen set during request."),this.vt()};
g.h.vM=function(a){this.Rb("Screen availability failed: "+a);this.u=null;u7(this)};
g.h.Rb=function(a){i7("OnlineScreenService",a)};g.Pa(v7,m7);g.h=v7.prototype;g.h.start=function(){this.w.start();this.u.start();this.o.length&&(this.R("screenChange"),this.u.isEmpty()||this.R("onlineScreenChange"))};
g.h.add=function(a,b,c){this.w.add(a,b,c)};
g.h.remove=function(a,b,c){this.w.remove(a,b,c);this.u.update()};
g.h.Yo=function(a,b,c,d){this.w.contains(a)?this.w.Yo(a,b,c,d):(a="Updating name of unknown screen: "+a.name,i7(this.F,a),d(Error(a)))};
g.h.Yd=function(a){return a?this.o:g.eb(this.o,(0,g.Xd)(this.A,function(b){return!this.contains(b)},this))};
g.h.nC=function(){return(0,g.Xd)(this.Yd(!0),function(a){return!!this.u.o[a.id]},this)};
g.h.oC=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new n7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.je(f);d(w7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.je(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.bP=function(a,b,c,d){g.Kp(f7(this.C,"/pairing/get_screen"),{method:"POST",yb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new e6(f.screen||{});if(!k.name||wua(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);wua(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(w7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Gd:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.je(this.w);g.je(this.u);v7.Db.X.call(this)};
g.h.XE=function(){xua(this);this.R("screenChange");this.u.update()};
v7.prototype.dispose=v7.prototype.dispose;g.Pa(y7,g.Q);g.h=y7.prototype;g.h.vo=function(a){this.w=a;this.R("sessionScreen",this.w)};
g.h.ee=function(a){this.ka()||(a&&z7(this,""+a),this.w=null,this.R("sessionScreen",null))};
g.h.info=function(a){i7(this.O,a)};
g.h.qC=function(){return null};
g.h.Ft=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){z7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.Ft("");y7.Db.X.call(this)};g.Pa(A7,y7);g.h=A7.prototype;g.h.Et=function(a){if(this.o){if(this.o==a)return;z7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.C);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.o=a;this.o.addUpdateListener(this.C);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);zua(this)};
g.h.Ui=function(a){this.info("launchWithParams no-op for Cast: "+g.Kk(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.x)(function(){this.ee()},this),(0,g.x)(function(){this.ee(Error("Failed to stop receiver app."))},this)):this.ee(Error("Stopping cast device witout session."))};
g.h.Ft=g.Ea;g.h.X=function(){this.info("disposeInternal");g.Lo(this.A);this.A=0;this.o&&(this.o.removeUpdateListener(this.C),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.o=null;A7.Db.X.call(this)};
g.h.qN=function(a,b){if(!this.ka())if(b){var c=O6(b);if(g.Ka(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Kk(c));switch(d){case "mdxSessionStatus":yua(this,c.screenId);break;default:z7(this,"Unknown youtube message: "+d)}}else z7(this,"Unable to parse message.")}else z7(this,"No data in message.")};
g.h.Kw=function(a,b,c,d){vua(this.H,this.u.label,a,this.u.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(z7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Jo((0,g.x)(this.Kw,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.qC=function(){return this.o};
g.h.cP=function(a){this.ka()||a||(z7(this,"Cast session died."),this.ee())};g.Pa(B7,y7);g.h=B7.prototype;g.h.Et=function(a){this.A=a;this.A.addUpdateListener(this.J)};
g.h.Ui=function(a){this.B=a;this.F()};
g.h.stop=function(){this.o();this.o=g.Ea;g.Lo(this.C);this.A?this.A.stop((0,g.x)(this.ee,this,null),(0,g.x)(this.ee,this,"Failed to stop DIAL device.")):this.ee()};
g.h.X=function(){this.o();this.o=g.Ea;g.Lo(this.C);this.A&&this.A.removeUpdateListener(this.J);this.A=null;B7.Db.X.call(this)};
g.h.fP=function(a){this.ka()||a||(z7(this,"DIAL session died."),this.o(),this.o=g.Ea,this.ee())};
g.h.Xq=function(a){this.M=i6();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,Bua(this));a(b);Aua(this)}else this.F=(0,g.x)(function(){g.Lo(this.C);this.F=g.Ea;this.C=NaN;var c=new chrome.cast.DialLaunchResponse(!0,Bua(this));a(c);Aua(this)},this),this.C=g.Jo((0,g.x)(function(){this.F()},this),100)};
g.h.qF=function(a,b,c){vua(this.H,this.G.receiver.label,a,this.u.friendlyName,(0,g.x)(function(d){d&&d.token?(this.vo(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Xq(b,c)},this),(0,g.x)(function(d){z7(this,"Failed to get DIAL screen: "+d);
this.Xq(b,c)},this))};g.Pa(C7,y7);C7.prototype.stop=function(){this.ee()};
C7.prototype.Et=g.Ea;C7.prototype.Ui=function(){g.Lo(this.o);this.o=NaN;var a=k6(this.H.Yd(),this.u.label);a?this.vo(a):this.ee(Error("No such screen"))};
C7.prototype.X=function(){g.Lo(this.o);this.o=NaN;C7.Db.X.call(this)};g.Pa(D7,g.Q);g.h=D7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.F);this.G||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.fM,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.hA,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.uK,this);chrome.cast.initialize(c,(0,g.x)(function(){this.ka()||
(chrome.cast.addReceiverActionListener(this.A),iua(),this.u.subscribe("onlineScreenChange",(0,g.x)(this.pC,this)),this.w=Dua(this),chrome.cast.setCustomReceivers(this.w,g.Ea,(0,g.x)(function(k){this.Rb("Failed to set initial custom receivers: "+g.Kk(k))},this)),this.R("yt-remote-cast2-availability-change",F7(this)),b(!0))},this),(0,g.x)(function(k){this.Rb("Failed to initialize API: "+g.Kk(k));
b(!1)},this))};
g.h.eO=function(a,b){E7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.w;if(!a||c&&c.id!=a)E7("Unsetting old screen status: "+this.o.u.friendlyName),G7(this,null)}if(a&&b){if(!this.o){c=k6(this.u.Yd(),a);if(!c){E7("setConnectedScreenStatus: Unknown screen.");return}var d=Cua(this,c);d||(E7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.w.push(d),chrome.cast.setCustomReceivers(this.w,
g.Ea,(0,g.x)(function(e){this.Rb("Failed to set initial custom receivers: "+g.Kk(e))},this)));
E7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);G7(this,new C7(this.u,d),!0)}this.o.Ft(b)}else E7("setConnectedScreenStatus: no screen.")};
g.h.fO=function(a){this.ka()?this.Rb("Setting connection data on disposed cast v2"):this.o?this.o.Ui(a):this.Rb("Setting connection data without a session")};
g.h.eP=function(){this.ka()?this.Rb("Stopping session on disposed cast v2"):this.o?(this.o.stop(),G7(this,null)):E7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.hA,this),(0,g.x)(this.AM,this))};
g.h.X=function(){this.u.unsubscribe("onlineScreenChange",(0,g.x)(this.pC,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.A);var a=fua,b=g.w("yt.mdx.remote.debug.handlers_");g.bb(b||[],a);g.je(this.o);D7.Db.X.call(this)};
g.h.Rb=function(a){i7("Controller",a)};
g.h.iA=function(a,b){this.o==a&&(b||G7(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.bM=function(a,b){if(!this.ka())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),E7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.u.label!=a.label)E7("onReceiverAction_: Stopping active receiver: "+this.o.u.friendlyName),this.o.stop();else{E7("onReceiverAction_: Casting to active receiver.");this.o.w&&this.R("yt-remote-cast2-session-change",this.o.w);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:G7(this,
new C7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:G7(this,new B7(this.u,a,this.C));break;case chrome.cast.ReceiverType.CAST:G7(this,new A7(this.u,a));break;default:this.Rb("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.u.label==a.label?this.o.stop():this.Rb("Stopping receiver w/o session: "+a.friendlyName)}else this.Rb("onReceiverAction_ called without receiver.")};
g.h.uK=function(a){if(this.ka())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Rb("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.u:null;if(!c||c.label!=b.label)return this.Rb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.w)return E7("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.o.w),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Rb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);G7(this,new B7(this.u,b,this.C))}b=this.o;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.qF,b,(b.G.extraData||{}).screenId||null)):new Promise((0,g.x)(b.Xq,b))};
g.h.hA=function(a){if(!this.ka()){E7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)E7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),G7(this,new A7(this.u,b),!0);else{this.Rb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.u,d=k6(this.u.Yd(),c.label);d&&f6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(E7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.je(this.o),this.o=new A7(this.u,b),this.o.subscribe("sessionScreen",(0,g.x)(this.iA,this,this.o)),this.o.Ui(null));this.o.Et(a)}}};
g.h.dP=function(){return this.o?this.o.qC():null};
g.h.AM=function(a){this.ka()||(this.Rb("Failed to estabilish a session: "+g.Kk(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&G7(this,null))};
g.h.fM=function(a){E7("Receiver availability updated: "+a);if(!this.ka()){var b=F7(this);this.B=a==chrome.cast.ReceiverAvailability.AVAILABLE;F7(this)!=b&&this.R("yt-remote-cast2-availability-change",F7(this))}};
g.h.pC=function(){this.ka()||(this.w=Dua(this),E7("Updating custom receivers: "+g.Kk(this.w)),chrome.cast.setCustomReceivers(this.w,g.Ea,(0,g.x)(function(){this.Rb("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",F7(this)))};
D7.prototype.setLaunchParams=D7.prototype.fO;D7.prototype.setConnectedScreenStatus=D7.prototype.eO;D7.prototype.stopSession=D7.prototype.eP;D7.prototype.getCastSession=D7.prototype.dP;D7.prototype.requestSession=D7.prototype.requestSession;D7.prototype.init=D7.prototype.init;D7.prototype.dispose=D7.prototype.dispose;var M7=[];R7.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";S7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.cf=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.C=a.playerTimeAt,this.A=a.seekableStart,this.u=a.seekableEnd,this.G=a.duration,this.H=a.loadedTime,this.w=a.liveIngestionTime,this.B=
!isNaN(this.w))};
R7.prototype.isAdPlaying=function(){return 1081==this.playerState};
R7.prototype.getDuration=function(){return this.B?this.G+T7(this):this.G};
R7.prototype.clone=function(){return new R7(X7(this))};g.r(Z7,g.Q);g.h=Z7.prototype;g.h.play=function(){1==this.o?(this.u?this.u.play(null,g.Ea,e8(this,"play")):d8(this,"play"),c8(this,1,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.play)};
g.h.pause=function(){1==this.o?(this.u?this.u.pause(null,g.Ea,e8(this,"pause")):d8(this,"pause"),c8(this,2,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.o){if(this.u){var b=$7(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Ea,e8(this,"seekTo",{newTime:a}))}else d8(this,"seekTo",{newTime:a});c8(this,3,a);this.R("remotePlayerChange")}else a8(this,g.Na(this.seekTo,a))};
g.h.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.Ea,e8(this,"stopVideo")):d8(this,"stopVideo");var a=$7(this);a.index=-1;a.videoId="";S7(a);b8(this,a);this.R("remotePlayerChange")}else a8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=$7(this);if(this.w){if(c.volume!=a){var d=Math.round(a)/100;this.w.setReceiverVolumeLevel(d,(0,g.x)(function(){i7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.Rb("failed to set receiver volume.")},this))}c.muted!=b&&this.w.setReceiverMuted(b,(0,g.x)(function(){i7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.Rb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);d8(this,"setVolume",e)}c.muted=b;c.volume=a;b8(this,c)}else a8(this,g.Na(this.setVolume,a,b))};
g.h.jB=function(a,b){if(1==this.o){var c=$7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Kk(b.style),g.cc(d,c.o));d8(this,"setSubtitlesTrack",d);b8(this,c)}else a8(this,g.Na(this.jB,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();d8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=$7(this);d.audioTrackId=c;b8(this,d)}else a8(this,g.Na(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=$7(this);c=c||0;var m={videoId:a,currentIndex:c};W7(l,a,c);void 0!==b&&(U7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.Kk(k));d8(this,"setPlaylist",m);d||b8(this,l)};
g.h.lC=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"previous")}else a8(this,g.Na(this.lC,a,b))};
g.h.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"next")}else a8(this,g.Na(this.nextVideo,a,b))};
g.h.Sv=function(){1==this.o?d8(this,"dismissAutoplay"):a8(this,this.Sv)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.R("proxyStateChange",a,this.o)}g.Q.prototype.dispose.call(this)};
g.h.X=function(){Qua(this);this.A=null;this.B.clear();Y7(this,null);g.Q.prototype.X.call(this)};
g.h.ku=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,g.Ya(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.h.YL=function(a,b){this.R(a,b)};
g.h.bK=function(a){if(!a)this.il(null),Y7(this,null);else if(this.w.receiver.volume){a=this.w.receiver.volume;var b=$7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)i7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,b8(this,b)}};
g.h.il=function(a){i7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.G);if(this.u=a)this.u.addUpdateListener(this.G),Rua(this),this.R("remotePlayerChange")};
g.h.aK=function(a){a?(Rua(this),this.R("remotePlayerChange")):this.il(null)};
g.h.nK=function(){var a=Nua();a&&Y7(this,a)};
g.h.Rb=function(a){i7("CP",a)};g.r(f8,g.Q);g.h=f8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==k&&(l.currentIndex=k);c&&(this.Sa.listId=c);this.Sa.videoId=d;this.Sa.index=k||0;this.Sa.state=3;U7(this.Sa,m);this.A="UNSUPPORTED";g8("Connecting with setPlaylist and params: "+g.Kk(l));this.o.connect({method:"setPlaylist",
params:g.Kk(l)},a,dta())}else g8("Connecting without params"),this.o.connect({},a,dta());Tua(this)};
g.h.dispose=function(){this.ka()||(this.R("beforeDispose"),h8(this,3));g.Q.prototype.dispose.call(this)};
g.h.X=function(){i8(this);k8(this);j8(this);g.Lo(this.F);this.F=NaN;g.Lo(this.G);this.G=NaN;this.w=null;g.Fq(this.O);this.O.length=0;this.o.dispose();g.Q.prototype.X.call(this);this.A=this.C=this.u=this.Sa=this.o=null};
g.h.IE=function(){this.yi(2)};
g.h.fK=function(){g8("Channel opened");this.J&&(this.J=!1,j8(this),this.M=g.Jo((0,g.x)(function(){g8("Timing out waiting for a screen.");this.yi(1)},this),15E3));
hta(cua(this.o),this.T)};
g.h.cK=function(){g8("Channel closed");isNaN(this.B)?q6(!0):q6();this.dispose()};
g.h.dK=function(a){q6();isNaN(this.gk())?(g8("Channel error: "+a+" without reconnection"),this.dispose()):(this.J=!0,g8("Channel error: "+a+" with reconnection in "+this.gk()+" ms"),h8(this,2))};
g.h.eK=function(a){a.params?g8("Received: action="+a.action+", params="+g.Kk(a.params)):g8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=O6(a.params.devices);this.u=(0,g.Hc)(a,function(c){return new d6(c)});
a=!!g.Ua(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
Wua(this,a);break;case "loungeScreenDisconnected":g.cb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
Wua(this,!1);break;case "remoteConnected":var b=new d6(O6(a.params.device));g.Ua(this.u,function(c){return b?c.id==b.id:!1})||Osa(this.u,b);
break;case "remoteDisconnected":b=new d6(O6(a.params.device));g.cb(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":Yua(this,a);break;case "nowPlaying":$ua(this,a);break;case "onStateChange":Zua(this,a);break;case "onAdStateChange":ava(this,a);break;case "onVolumeChanged":bva(this,a);break;case "onSubtitlesTrackChanged":Xua(this,a);break;case "nowAutoplaying":cva(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.C=a.params.videoId||null;this.R("autoplayUpNext",this.C);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.R("autoplayModeChange",this.A);"DISABLED"==this.A&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":dva(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:g8("Unrecognized action: "+a.action)}};
g.h.SN=function(){if(this.w){var a=this.w;this.w=null;this.Sa.videoId!=a&&l8(this,"getNowPlaying")}};
g.h.xE=function(){var a=3;this.ka()||(a=0,isNaN(this.gk())?d7(this.o)&&isNaN(this.B)&&(a=1):a=2);return a};
g.h.yi=function(a){g8("Disconnecting with "+a);i8(this);this.R("beforeDisconnect",a);1==a&&q6();dua(this.o,a);this.dispose()};
g.h.wE=function(){var a=this.Sa;this.w&&(a=this.Sa.clone(),W7(a,this.w,a.index));return X7(a)};
g.h.gO=function(a){var b=new R7(a);b.videoId&&b.videoId!=this.Sa.videoId&&(this.w=b.videoId,g.Lo(this.F),this.F=g.Jo((0,g.x)(this.SN,this),5E3));var c=[];this.Sa.listId==b.listId&&this.Sa.videoId==b.videoId&&this.Sa.index==b.index||c.push("remoteQueueChange");this.Sa.playerState==b.playerState&&this.Sa.volume==b.volume&&this.Sa.muted==b.muted&&V7(this.Sa)==V7(b)&&g.Kk(this.Sa.o)==g.Kk(b.o)||c.push("remotePlayerChange");this.Sa.reset(a);(0,g.y)(c,function(d){this.R(d)},this)};
g.h.Iw=function(){var a=this.o.C.id,b=g.Ua(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.gk=function(){var a=this.o;return a.u.isActive()?a.u.u-(0,g.H)():NaN};
g.h.lE=function(){return this.A||"UNSUPPORTED"};
g.h.mE=function(){return this.C||""};
g.h.WO=function(){if(!isNaN(this.gk())){var a=this.o.u;g.nn(a.o);a.start()}};
g.h.bO=function(a,b){l8(this,a,b);Vua(this)};
f8.prototype.subscribe=f8.prototype.subscribe;f8.prototype.unsubscribeByKey=f8.prototype.dg;f8.prototype.getProxyState=f8.prototype.xE;f8.prototype.disconnect=f8.prototype.yi;f8.prototype.getPlayerContextData=f8.prototype.wE;f8.prototype.setPlayerContextData=f8.prototype.gO;f8.prototype.getOtherConnectedRemoteId=f8.prototype.Iw;f8.prototype.getReconnectTimeout=f8.prototype.gk;f8.prototype.getAutoplayMode=f8.prototype.lE;f8.prototype.getAutoplayVideoId=f8.prototype.mE;f8.prototype.reconnect=f8.prototype.WO;
f8.prototype.sendMessage=f8.prototype.bO;g.r(m8,m7);g.h=m8.prototype;g.h.Yd=function(a){return this.kd.$_gs(a)};
g.h.contains=function(a){return!!this.kd.$_c(a)};
g.h.get=function(a){return this.kd.$_g(a)};
g.h.start=function(){this.kd.$_st()};
g.h.add=function(a,b,c){this.kd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.kd.$_r(a,b,c)};
g.h.Yo=function(a,b,c,d){this.kd.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.u.length;a<b;++a)this.kd.$_ubk(this.u[a]);this.u.length=0;this.kd=null;m7.prototype.X.call(this)};
g.h.aP=function(){this.R("screenChange")};
g.h.DL=function(){this.R("onlineScreenChange")};
v7.prototype.$_st=v7.prototype.start;v7.prototype.$_gspc=v7.prototype.bP;v7.prototype.$_gsppc=v7.prototype.oC;v7.prototype.$_c=v7.prototype.contains;v7.prototype.$_g=v7.prototype.get;v7.prototype.$_a=v7.prototype.add;v7.prototype.$_un=v7.prototype.Yo;v7.prototype.$_r=v7.prototype.remove;v7.prototype.$_gs=v7.prototype.Yd;v7.prototype.$_gos=v7.prototype.nC;v7.prototype.$_s=v7.prototype.subscribe;v7.prototype.$_ubk=v7.prototype.dg;var F8=null,E8=!1,n8=null,o8=null,D8=null,s8=[];g.r(G8,g.A);g.h=G8.prototype;
g.h.X=function(){g.A.prototype.X.call(this);this.A.stop();this.C.stop();this.J.stop();this.U();this.o.unsubscribe("proxyStateChange",this.eA,this);this.o.unsubscribe("remotePlayerChange",this.ll,this);this.o.unsubscribe("remoteQueueChange",this.wo,this);this.o.unsubscribe("autoplayUpNext",this.Gz,this);this.o.unsubscribe("previousNextChange",this.bA,this);this.o.unsubscribe("nowAutoplaying",this.Xz,this);this.o.unsubscribe("autoplayDismissed",this.Fz,this);this.o=this.B=null};
g.h.Fy=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(J8(this)){if(!$7(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==$7(this.o).playerState?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.M.Rw(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.u.getCurrentTime();L8(this,0==c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,c)}};
g.h.ZJ=function(a){this.J.EE(a)};
g.h.CO=function(a){this.Fy("control_subtitles_set_track",g.Xb(a)?null:a)};
g.h.yB=function(){var a=this.u.getOption("captions","track");g.Xb(a)||K8(this,a)};
g.h.Qz=function(a){if(J8(this)){this.o.unsubscribe("remotePlayerChange",this.ll,this);var b=Math.round(a.volume);a=!!a.muted;var c=$7(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.O.start();this.o.subscribe("remotePlayerChange",this.ll,this)}};
g.h.YK=function(){g.Xb(this.F)||pva(this,this.F);this.G=!1};
g.h.eA=function(a,b){this.C.stop();2==b&&this.vB()};
g.h.ll=function(){if(J8(this)){this.A.stop();var a=$7(this.o);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.H=1;break;case 1082:case 1083:this.B.H=0;break;default:this.B.H=-1}switch(a.playerState){case 1081:case 1:I8(this,new g.mD(8));this.uB();break;case 1085:case 3:I8(this,new g.mD(9));break;case 1083:case 0:I8(this,new g.mD(2));this.M.stop();H8(this,this.u.getVideoData().lengthSeconds);break;case 1084:I8(this,new g.mD(4));break;case 2:I8(this,new g.mD(4));H8(this,V7(a));
break;case -1:I8(this,new g.mD(64));break;case -1E3:I8(this,new g.mD(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=$7(this.o).o;var b=this.F;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.F=a,pva(this,a));a=$7(this.o);-1==a.volume||Math.round(this.u.getVolume())==a.volume&&this.u.isMuted()==a.muted||this.O.isActive()||this.aC()}else ova(this)};
g.h.bA=function(){this.u.R("mdxpreviousnextchange")};
g.h.wo=function(){J8(this)||ova(this)};
g.h.BD=function(){this.o.Sv()};
g.h.Gz=function(){};
g.h.Xz=function(a){isNaN(a)||this.u.R("mdxnowautoplaying",a)};
g.h.Fz=function(){this.u.R("mdxautoplaycanceled")};
g.h.BH=function(a,b){-1==$7(this.o).playerState?L8(this,a):b&&this.o.seekTo(a)};
g.h.aC=function(){if(J8(this)){var a=$7(this.o);this.w.Wa(this.T);a.muted?this.u.mute():this.u.unMute();this.u.setVolume(a.volume);this.T=this.w.L(this.u,"onVolumeChange",this.Qz)}};
g.h.uB=function(){this.A.stop();if(!this.o.ka()){var a=$7(this.o);1==a.playerState&&I8(this,new g.mD(8));H8(this,V7(a));this.A.start()}};
g.h.vB=function(){this.C.stop();this.A.stop();var a=this.o.A.getReconnectTimeout();2==this.o.o&&!isNaN(a)&&this.C.start()};g.r(M8,g.V);M8.prototype.w=function(){c6("mdx-privacy-popup-cancel");this.u.hide()};
M8.prototype.B=function(){c6("mdx-privacy-popup-confirm");this.u.hide()};g.r(N8,g.V);N8.prototype.A=function(a){rva(this,a.state)};g.r(O8,g.lO);O8.prototype.J=function(){var a=this.u.getOption("remote","receivers");a&&1<a.length&&!this.u.getOption("remote","quickCast")?(this.C=g.sb(a,this.B,this),g.nO(this,(0,g.Hc)(a,this.B)),a=this.u.getOption("remote","currentReceiver"),this.ue(this.B(a)),this.enable(!0)):this.enable(!1)};
O8.prototype.B=function(a){return a.key};
O8.prototype.Le=function(a){return"cast-selector-receiver"==a?"Cast...":this.C[a].name};
O8.prototype.Yc=function(a){g.lO.prototype.Yc.call(this,a);this.u.setOption("remote","currentReceiver",this.C[a]);this.w.jb()};g.r(P8,g.uP);g.h=P8.prototype;
g.h.create=function(){iva(g.zx(this.player.P()));this.A.push(g.Qo("yt-remote-before-disconnect",this.WJ,this));this.A.push(g.Qo("yt-remote-connection-change",this.gM,this));this.A.push(g.Qo("yt-remote-receiver-availability-change",this.cA,this));this.A.push(g.Qo("yt-remote-auto-connect",this.eM,this));this.A.push(g.Qo("yt-remote-receiver-resumed",this.dM,this));this.A.push(g.Qo("mdx-privacy-popup-confirm",this.EN,this));this.A.push(g.Qo("mdx-privacy-popup-cancel",this.DN,this));this.cA()};
g.h.load=function(){this.player.cancelPlayback();g.uP.prototype.load.call(this);this.B=new G8(this,this.player,this.o);var a=(a=nva())?a.currentTime:0;var b=C8()?new Z7(x8(),void 0):null;0==a&&b&&(a=V7($7(b)));0!=a&&(this.O=a||0,this.player.R("progresssync",a,void 0));qva(this,this.F,this.F);g.XS(this.player.app,6)};
g.h.unload=function(){this.player.R("mdxautoplaycanceled");this.w=this.u;g.ke(this.B,this.o);this.o=this.B=null;g.uP.prototype.unload.call(this);g.XS(this.player.app,5);Q8(this)};
g.h.X=function(){g.Ro(this.A);g.uP.prototype.X.call(this)};
g.h.Sk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.Fy.apply(this.B,[a].concat(g.ea(c)))};
g.h.getAdState=function(){return this.H};
g.h.zE=function(){return this.loaded?this.B.suggestion:null};
g.h.cf=function(){return this.o?$7(this.o).cf:!1};
g.h.hasNext=function(){return this.o?$7(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.O};
g.h.getProgressState=function(){var a=$7(this.o),b=this.player.getVideoData();return{allowSeeking:g.R(this.player.P().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.Nc():!a.isAdPlaying()&&this.player.Nc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.B?a.w+T7(a):a.w,isAtLiveHead:1>=(a.B?a.u+T7(a):a.u)-this.getCurrentTime(),loaded:a.H,seekableEnd:a.B?a.u+T7(a):a.u,seekableStart:0<a.A?a.A+T7(a):
a.A}};
g.h.nextVideo=function(){this.o&&this.o.nextVideo()};
g.h.dH=function(){this.o&&this.o.lC()};
g.h.WJ=function(a){1==a&&(this.T=this.o?$7(this.o):null)};
g.h.gM=function(){var a=C8()?new Z7(x8(),void 0):null;if(a){var b=this.w;this.loaded&&this.unload();this.o=a;this.T=null;b.key!=this.u.key&&(this.w=b,this.load())}else g.je(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.T)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,V7(a)));this.player.R("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.cA=function(){this.M=[this.u].concat(kva());var a=y8()||this.u;R8(this,a);this.player.la("onMdxReceiversChange")};
g.h.vN=function(a){!this.J&&g.AD(a,8)&&(this.player.pauseVideo(),Q8(this))};
g.h.eM=function(){var a=y8();R8(this,a)};
g.h.dM=function(){this.w=y8()};
g.h.EN=function(){this.J=!0;Q8(this);E8=!1;F8&&A8(F8,1);F8=null};
g.h.DN=function(){this.J=!1;Q8(this);R8(this,this.u);this.w=this.u;E8=!1;F8=null;this.player.playVideo()};
g.h.Ic=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.M;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?P7():R8(this,b)),this.loaded?this.w:this.u;case "quickCast":return 2==this.M.length&&"cast-selector-receiver"==this.M[1].key?(b&&P7(),!0):!1}};
g.h.eH=function(){d8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.uf=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.JP.remote=P8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 14:00:11 Feb 05, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:39:37 Mar 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.711
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.013
  cdx.remote: 6.631
  LoadShardBlock: 197.792 (6)
  PetaboxLoader3.datanode: 211.968 (7)
  load_resource: 267.906
  PetaboxLoader3.resolve: 223.112
*/