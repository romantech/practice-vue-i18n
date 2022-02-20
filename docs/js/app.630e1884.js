(function(e){function n(n){for(var c,a,r=n[0],i=n[1],u=n[2],m=0,f=[];m<r.length;m++)a=r[m],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&f.push(l[a][0]),l[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);s&&s(n);while(f.length)f.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,r=1;r<t.length;r++){var i=t[r];0!==l[i]&&(c=!1)}c&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var c={},l={app:0},o=[];function a(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=c,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)a.d(t,c,function(n){return e[n]}.bind(null,c));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/practice-vue-i18n/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=n,r=r.slice();for(var u=0;u<r.length;u++)n(r[u]);var s=i;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23"),l={style:{color:"OrangeRed"}},o=["innerHTML","onClick"],a={class:"locale-changer"},r=["value"],i=Object(c["f"])("br",null,null,-1),u=Object(c["f"])("hr",null,null,-1),s=Object(c["f"])("h3",null,"BASIC",-1),m=Object(c["g"])(" | "),f=Object(c["f"])("h3",null,"LITERAL INTERPOLATION",-1),b=Object(c["f"])("h3",null,"NAMED INTERPOLATION",-1),O=Object(c["f"])("h3",null,"LIST INTERPOLATION",-1),h=Object(c["f"])("h3",null,"PLURALIZATION",-1),d=Object(c["f"])("h3",null,"LINKED MESSAGES",-1),g=Object(c["f"])("h3",null,"BUILT-IN MODIFIERS",-1),j=Object(c["f"])("h3",null,"CUSTOM MODIFIERS",-1),p=Object(c["f"])("h3",null,"DATETIME FORMATTING",-1),y=Object(c["f"])("h3",null,"NUMBER FORMATS",-1),v=Object(c["f"])("b",null,"CURRENCY : ",-1),N=Object(c["g"])(" | "),k=Object(c["f"])("b",null,"DECIMAL : ",-1),L=Object(c["g"])(" | "),C=Object(c["f"])("b",null,"PERCENT : ",-1);function E(e,n,t,E,I,M){return Object(c["p"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("section",null,[Object(c["f"])("h1",l,Object(c["s"])(e.$t("changeLocale")),1),(Object(c["p"])(!0),Object(c["e"])(c["a"],null,Object(c["r"])(e.$i18n.availableLocales,(function(n){return Object(c["p"])(),Object(c["e"])("button",{key:"locale-".concat(n),innerHTML:e.$t("localeName.".concat(n)),onClick:function(t){return e.$i18n.locale=n}},null,8,o)})),128)),Object(c["f"])("div",a,[Object(c["v"])(Object(c["f"])("select",{"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.$i18n.locale=n})},[(Object(c["p"])(!0),Object(c["e"])(c["a"],null,Object(c["r"])(e.$i18n.availableLocales,(function(e){return Object(c["p"])(),Object(c["e"])("option",{key:"locale-".concat(e),value:e},Object(c["s"])(e),9,r)})),128))],512),[[c["t"],e.$i18n.locale]])])]),i,u,Object(c["f"])("section",null,[s,Object(c["f"])("span",null,Object(c["s"])(e.$t("confirm")),1),m,Object(c["f"])("span",null,Object(c["s"])(E.cancelMsg),1)]),Object(c["f"])("section",null,[f,Object(c["f"])("span",null,Object(c["s"])(e.$t("email",{account:"johan",domain:"gmail.com"})),1)]),Object(c["f"])("section",null,[b,Object(c["f"])("span",null,Object(c["s"])(e.$t("sayHello",{name:e.$t("name")})),1)]),Object(c["f"])("section",null,[O,Object(c["f"])("span",null,Object(c["s"])(e.$t("greeting",[e.$t("day.morning"),e.$t("day.evening")])),1)]),Object(c["f"])("section",null,[h,Object(c["f"])("span",null,Object(c["s"])(e.$tc("car",100)),1)]),Object(c["f"])("section",null,[d,Object(c["f"])("span",null,Object(c["s"])(e.$t("linked")),1)]),Object(c["f"])("section",null,[g,Object(c["f"])("span",null,Object(c["s"])(e.$t("builtInModifiers")),1)]),Object(c["f"])("section",null,[j,Object(c["f"])("span",null,Object(c["s"])(e.$t("customModifiers")),1)]),Object(c["f"])("section",null,[p,Object(c["f"])("span",null,Object(c["s"])(e.$d(new Date,"long",E.formattingLocale(e.$i18n.locale))),1)]),Object(c["f"])("section",null,[y,Object(c["f"])("span",null,[v,Object(c["g"])(Object(c["s"])(e.$n(E.setCurrency(1e6),"currency",E.formattingLocale(e.$i18n.locale))),1)]),N,Object(c["f"])("span",null,[k,Object(c["g"])(Object(c["s"])(e.$n(12.11612345,"decimal",E.formattingLocale(e.$i18n.locale))),1)]),L,Object(c["f"])("span",null,[C,Object(c["g"])(" "+Object(c["s"])(e.$n(.79173,"percent",E.formattingLocale(e.$i18n.locale))),1)])])],64)}t("a15b"),t("99af");var I=t("47e2"),M={name:"App",i18n:{datetimeFormats:{"us-GB":{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}}}},setup:function(){var e=Object(I["b"])(),n=e.t,t=e.d,l=e.availableLocales,o=e.locale,a=["color: OrangeRed","background-color: PapayaWhip"].join(";");console.info("%cAVAILABLE_LOCALES: ".concat(l,"\nCURRENT_LOCALE: ").concat(o.value),a),Object(c["o"])((function(){console.info("%cCURRENT_LOCALE: ".concat(o.value),a)}));var r=function(e){switch(o.value){case"en":case"en-US":return e/1100;case"zh":case"zh-CN":return e/175;default:return e}},i=Object(c["c"])((function(){return n("cancel")})),u=function(e){switch(e){case"ko":return"ko-KR";case"en":return"en-US";case"zh":return"zh-CN";default:return e}};return console.info("%cCURRENT_TIME: ".concat(t(new Date,"long",u(o.value))),a),{cancelMsg:i,formattingLocale:u,setCurrency:r}}},R=(t("f997"),t("6b0d")),T=t.n(R);const $=T()(M,[["render",E]]);var D=$,A=(t("ac1f"),t("1276"),{"ko-KR":{currency:{style:"currency",currency:"KRW",currencyDisplay:"code",useGrouping:!0,notation:"standard",maximumFractionDigits:0},decimal:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:5},percent:{style:"percent",useGrouping:!1,maximumFractionDigits:2}},"en-US":{currency:{style:"currency",currency:"USD",currencyDisplay:"symbol",useGrouping:!0,notation:"standard",maximumFractionDigits:0},decimal:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:5},percent:{style:"percent",useGrouping:!1,maximumFractionDigits:2}},"zh-CN":{currency:{style:"currency",currency:"CNY",currencyDisplay:"symbol",useGrouping:!0,notation:"standard",maximumFractionDigits:0},decimal:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:5},percent:{style:"percent",useGrouping:!1,maximumFractionDigits:2}}}),S={"ko-KR":{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!1}},"en-US":{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},"zh-CN":{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}}},F={changeLocale:"언어 변경",confirm:"확인",cancel:"취소",name:"조안",sayHello:"안녕하세요 {name}",greeting:"좋은 {0}입니다",car:"자동차 0대 | 자동차 1대 | 자동차 여러대",email:"{account}{'@'}{domain}",linked:"@:localeName.en {'|'} @:localeName.ko {'|'} @:localeName.zh",english:"english",helloWorld:"Hello World",builtInModifiers:"@.upper:english",customModifiers:"@.snakeCase:{'helloWorld'}",day:{morning:"아침",afternoon:"점심",evening:"저녁"},localeName:{en:"영어",ko:"한국어",zh:"중국어"}},w={changeLocale:"CHANGE LOCALE",confirm:"Confirm",cancel:"Cancel",name:"Johan",sayHello:"Hello {name}",greeting:"Good {0}",car:"no car | a car | cars",email:"{account}{'@'}{domain}",linked:"@:localeName.en {'|'} @:localeName.ko {'|'} @:localeName.zh",english:"english",helloWorld:"Hello World",builtInModifiers:"@.upper:english",customModifiers:"@.snakeCase:{'helloWorld'}",day:{morning:"morning",afternoon:"afternoon",evening:"evening"},localeName:{en:"English",ko:"Korean",zh:"Chinese"}},z={changeLocale:"切换语言",confirm:"确认",cancel:"取消",name:"约翰",sayHello:"您好 {name}",greeting:"{0}好",car:"0台车 | 1台车 | 多台车",email:"{account}{'@'}{domain}",linked:"@:localeName.en {'|'} @:localeName.ko {'|'} @:localeName.zh",english:"english",helloWorld:"Hello World",builtInModifiers:"@.upper:english",customModifiers:"@.snakeCase:{'helloWorld'}",day:{morning:"早上",afternoon:"中午",evening:"晚上"},localeName:{en:"英文",ko:"韩文",zh:"中文"}},x=function(){return navigator.language?navigator.language:navigator.languages[0]},U=Object(I["a"])({locale:x(),fallbackLocale:{"ko-KR":["ko"],"en-US":["en"],"zh-CN":["zh"],default:["ko","en","zh"]},messages:{ko:F,en:w,zh:z},datetimeFormats:S,numberFormats:A,modifiers:{snakeCase:function(e){return e.split(" ").join("_")}},silentTranslationWarn:!0,silentFallbackWarn:!0});Object(c["d"])(D).use(U).mount("#app")},c553:function(e,n,t){},f997:function(e,n,t){"use strict";t("c553")}});
//# sourceMappingURL=app.630e1884.js.map