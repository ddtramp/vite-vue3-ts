var r=(e,c,o)=>new Promise((n,_)=>{var p=t=>{try{a(o.next(t))}catch(d){_(d)}},u=t=>{try{a(o.throw(t))}catch(d){_(d)}},a=t=>t.done?n(t.value):Promise.resolve(t.value).then(p,u);a((o=o.apply(e,c)).next())});import{_ as m}from"./index.efe79d0f.js";import{f as s,aa as f,ac as h,d as x,o as g,y as v,b as l,E as I,G as b,B as j}from"./vendor.b98b9ed7.js";/* empty css              */import{g as w,_ as y}from"./index.d9fd58b6.js";/* empty css              *//* empty css               *//* empty css              */function B(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!f(e)}const S=[{title:"IP\u5730\u5740",dataIndex:"ip",width:150},{title:"\u7AEF\u53E3",dataIndex:"host",width:80,customRender:({text:e})=>s(h,null,B(e)?e:{default:()=>[e]})},{title:"\u534F\u8BAE",dataIndex:"protocol",width:100},{title:"\u57DF\u540D",dataIndex:"domain",width:100},{title:"\u90AE\u7BB1",dataIndex:"email",width:150},{title:"\u5730\u5740",dataIndex:"url",width:200,customRender:({text:e})=>s("a",{href:e,target:"_blank"},[e])}];var i;(function(e){e.page_one_list="/v1/common/page_one/list"})(i||(i={}));const k=e=>r(void 0,null,function*(){return w({url:i.page_one_list,data:e})});var A={page_one_list:k};const N=e=>(I("data-v-200201ce"),e=e(),b(),e),R={class:"node-conatiner"},V=N(()=>j("h2",{class:"nc_title font18"},"\u7F51\u7AD9\u7BA1\u7406",-1)),E=x({setup(e){return(c,o)=>{const n=m;return g(),v("div",R,[V,s(n,{url:l(A).page_one_list,columns:l(S),hiddenFilter:!0},null,8,["url","columns"])])}}});var U=y(E,[["__scopeId","data-v-200201ce"]]);export{U as default};