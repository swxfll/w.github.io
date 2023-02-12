import{P as j,D as E,T as F}from"./TableOperationAreaButtonGroup-a5f06493.js";import{_ as q,m as W,n as H,l as h,p as J,r as p,o as K,c as Q,e,w as t,a as o,g as l,q as y,h as T,f,s as r,t as X,v as Y,z as Z}from"./index-8d8776ad.js";import{S as $,C as ee}from"./SearchOutlined-5d222807.js";const a=g=>(X("data-v-223301f6"),g=g(),Y(),g),te={class:"safe-group-view"},oe={class:"op-area"},le=a(()=>o("span",null,"按照指定条件进行搜索",-1)),ie=a(()=>o("span",null,"添加",-1)),ae=a(()=>o("span",null,"删除选中条目",-1)),ne=a(()=>o("span",null,"清空搜索条件",-1)),se={style:{display:"flex",width:"100%",height:"100%","flex-direction":"column"}},de={style:{width:"100%"}},re=a(()=>o("div",{style:{"font-size":"12pt","font-weight":"bold"}},"名称",-1)),pe=a(()=>o("div",{style:{"font-size":"12pt","font-weight":"bold"}},"放行端口",-1)),ce=a(()=>o("div",{style:{"font-size":"12pt","font-weight":"bold"}},"业务需求",-1)),ue={style:{display:"flex",width:"100%",height:"100%","justify-content":"flex-end","margin-top":"10px"}},fe={style:{display:"flex",width:"100%",height:"100%","flex-direction":"column"}},_e={style:{width:"100%"}},he=a(()=>o("div",{style:{"font-size":"12pt","font-weight":"bold"}},"名称",-1)),ye=a(()=>o("div",{style:{"font-size":"12pt","font-weight":"bold"}},"放行端口",-1)),ge=a(()=>o("div",{style:{"font-size":"12pt","font-weight":"bold"}},"业务需求",-1)),me={style:{display:"flex",width:"100%",height:"100%","justify-content":"flex-end","margin-top":"10px"}},xe={style:{display:"flex",width:"100%",height:"100%","flex-direction":"column"}},ve={style:{width:"100%"}},we=a(()=>o("div",{style:{"font-size":"12pt","font-weight":"bold"}},"放行端口",-1)),be=a(()=>o("div",{style:{"font-size":"12pt","font-weight":"bold"}},"业务需求",-1)),ke={style:{display:"flex",width:"100%",height:"100%","justify-content":"flex-end","margin-top":"10px"}},Ce=a(()=>o("div",{style:{width:"100%","min-height":"20px"}}," ",-1)),Te={__name:"SafeGroupView",setup(g){const S=W(),M=H();let _=h(!1),c=h(!1);function P(){_.value=!1}function z(){c.value=!1}function D(){c.value=!1}function O(){S.warning({title:"批量删除",content:"即将删除 24 个条目, 是否继续?",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{M.success("删除成功")}})}let u=h(!1);function A(){u.value=!0}function B(){}function U(){u.value=!1}function L(){u.value=!1}let m=h(""),x=h(""),N=h([{key:"0",name:"常规",ports:["IN:TCP:80","IN:TCP:443","OUT:TCP:443","ALL:TCP:22"],"create-time":"2023/12/12 00:00:00",usage:"常规的静态 WEB 服务 和 远程管理端口"}]);const I=[{type:"selection",fiex:"left"},{title:"名称",key:"name",fixed:"left",width:250},{title:"放行端口列表",key:"ports",render(d){return d.ports.map(n=>T(Z,{style:{marginRight:"6px",marginTop:"2px"},type:"info",bordered:!1,size:"small"},{default:()=>n}))},resizable:!0},{title:"创建时间",key:"create-time"},{title:"业务需求",key:"usage"},{title:"操作",key:"op",render(d){return T(F,{isShowDetail:!0,isShowModify:!0,isShowDelete:!0,onDetailButtonClicked:()=>{_.value=!0},onModifyButtonClicked:()=>{c.value=!0},onDeleteButtonClicked:()=>{}})},fixed:"right",width:150}],v=J({page:2,pageSize:5,showSizePicker:!0,pageSizes:[3,5,7],onChange:d=>{v.page=d},onUpdatePageSize:d=>{v.pageSize=d,v.page=1}});return(d,n)=>{const C=p("n-breadcrumb-item"),G=p("n-breadcrumb"),R=p("n-page-header"),s=p("n-input"),w=p("n-icon"),b=p("n-tooltip"),V=p("n-data-table"),k=p("n-modal");return K(),Q("div",te,[e(R,null,{header:t(()=>[e(G,null,{default:t(()=>[e(C,null,{default:t(()=>[f("业务概念")]),_:1}),e(C,null,{default:t(()=>[f("安全组")]),_:1})]),_:1})]),_:1}),o("div",oe,[e(s,{style:{width:"500px","margin-right":"15px"},value:l(m),"onUpdate:value":n[0]||(n[0]=i=>y(m)?m.value=i:m=i),type:"text",placeholder:"请输入名称"},null,8,["value"]),e(s,{value:l(x),"onUpdate:value":n[1]||(n[1]=i=>y(x)?x.value=i:x=i),type:"text",placeholder:"请输入业务需求,支持全文检索.."},null,8,["value"]),e(b,{trigger:"hover"},{trigger:t(()=>[e(l(r),{tertiary:"",circle:"",style:{"margin-left":"5px"},secondary:"",type:"info"},{icon:t(()=>[e(w,null,{default:t(()=>[e(l($))]),_:1})]),_:1})]),default:t(()=>[le]),_:1}),e(b,{trigger:"hover"},{trigger:t(()=>[e(l(r),{tertiary:"",circle:"",style:{"margin-left":"5px"},secondary:"",type:"primary",onClick:A},{icon:t(()=>[e(w,null,{default:t(()=>[e(l(j))]),_:1})]),_:1})]),default:t(()=>[ie]),_:1}),e(b,{trigger:"hover"},{trigger:t(()=>[e(l(r),{tertiary:"",circle:"",style:{"margin-left":"5px"},secondary:"",type:"error",onClick:O},{icon:t(()=>[e(w,null,{default:t(()=>[e(l(E))]),_:1})]),_:1})]),default:t(()=>[ae]),_:1}),e(b,{trigger:"hover"},{trigger:t(()=>[e(l(r),{tertiary:"",circle:"",style:{"margin-left":"5px"},secondary:"",type:"error"},{icon:t(()=>[e(w,null,{default:t(()=>[e(l(ee))]),_:1})]),_:1})]),default:t(()=>[ne]),_:1})]),e(V,{columns:I,data:l(N),pagination:v,striped:""},null,8,["data","pagination"]),e(k,{show:l(u),"onUpdate:show":n[2]||(n[2]=i=>y(u)?u.value=i:u=i),segmented:!1,"mask-closable":!1,preset:"card",title:"添加安全组","on-after-leave":B,style:{width:"45%","min-width":"600px"}},{default:t(()=>[o("div",se,[o("div",de,[re,e(s,{type:"text",placeholder:"必填,请输入名称",style:{"margin-bottom":"10px"}}),pe,e(s,{type:"textarea",placeholder:"必填,请输入放行端口列表,使用英文半角小写逗号分割,格式[IN|OUT|ALL]:[TCP|UDP]:PORT",rows:"5",style:{"margin-bottom":"10px"}}),ce,e(s,{type:"text",placeholder:"必填,请输入业务需求",style:{"margin-bottom":"10px"}})]),o("div",ue,[e(l(r),{onClick:U,style:{"margin-right":"10px"}},{default:t(()=>[f("取消")]),_:1}),e(l(r),{onClick:L,type:"primary"},{default:t(()=>[f("添加")]),_:1})])])]),_:1},8,["show"]),e(k,{show:l(_),"onUpdate:show":n[3]||(n[3]=i=>y(_)?_.value=i:_=i),segmented:!1,"mask-closable":!1,preset:"card",title:"xxx的详情信息","on-after-leave":d.onDetailModalAfterLeave,style:{width:"45%","min-width":"600px"}},{default:t(()=>[o("div",fe,[o("div",_e,[he,e(s,{type:"text",placeholder:"必填,请输入名称",style:{"margin-bottom":"10px"},disabled:""}),ye,e(s,{type:"textarea",placeholder:"必填,请输入放行端口列表,使用英文半角小写逗号分割,格式[IN|OUT|ALL]:[TCP|UDP]:PORT",rows:"5",style:{"margin-bottom":"10px"},disabled:""}),ge,e(s,{type:"text",placeholder:"必填,请输入业务需求",style:{"margin-bottom":"10px"},disabled:""})]),o("div",me,[e(l(r),{onClick:P,type:"primary"},{default:t(()=>[f("关闭")]),_:1})])])]),_:1},8,["show","on-after-leave"]),e(k,{show:l(c),"onUpdate:show":n[4]||(n[4]=i=>y(c)?c.value=i:c=i),segmented:!1,"mask-closable":!1,preset:"card",title:"修改安全组","on-after-leave":d.onModifyModalAfterLeave,style:{width:"45%","min-width":"600px"}},{default:t(()=>[o("div",xe,[o("div",ve,[we,e(s,{type:"textarea",placeholder:"必填,请输入放行端口列表,使用英文半角小写逗号分割,格式[IN|OUT|ALL]:[TCP|UDP]:PORT",rows:"5",style:{"margin-bottom":"10px"}}),be,e(s,{type:"text",placeholder:"必填,请输入业务需求",style:{"margin-bottom":"10px"}})]),o("div",ke,[e(l(r),{onClick:z,style:{"margin-right":"10px"}},{default:t(()=>[f("取消")]),_:1}),e(l(r),{onClick:D,type:"primary"},{default:t(()=>[f("修改")]),_:1})])])]),_:1},8,["show","on-after-leave"]),Ce])}}},ze=q(Te,[["__scopeId","data-v-223301f6"]]);export{ze as default};