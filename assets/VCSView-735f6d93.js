import{_ as b,l as p,r as t,o as w,c as x,e,w as n,f as d,g as i,t as V,v as C,a as I}from"./index-8d8776ad.js";const g=o=>(V("data-v-842b8728"),o=o(),C(),o),y={class:"vcs-view"},k=g(()=>I("div",{style:{width:"100%","min-height":"20px"}}," ",-1)),B={__name:"VCSView",setup(o){let _=p(1),a=p("process");function u(c){_.value=c}function l(c){a.value=c}return(c,N)=>{const r=t("n-breadcrumb-item"),m=t("n-breadcrumb"),h=t("n-page-header"),s=t("n-step"),S=t("n-steps"),f=t("n-card"),v=t("router-view");return w(),x("div",y,[e(h,null,{header:n(()=>[e(m,null,{default:n(()=>[e(r,null,{default:n(()=>[d("配置")]),_:1}),e(r,null,{default:n(()=>[d("版本控制")]),_:1})]),_:1})]),_:1}),e(f,null,{default:n(()=>[e(S,{current:i(_),status:i(a)},{default:n(()=>[e(s,{title:"选择配置存储库",description:"选择一个 Git 存储, 并设置分支与提交版本"}),e(s,{title:"下发目录",description:"设置一个指定的配置目录,来存放远程的配置数据"}),e(s,{title:"机器或者群组",description:"更新任意数量的机器或者群组的配置数据并提交执行"}),e(s,{title:"执行",description:"在这里提交任务,设置 WebHook 通知,看执行进度,甚至可以置入后台并开始新的同步任务"}),e(s,{title:"完成",description:"结果页"})]),_:1},8,["current","status"])]),_:1}),e(v,{onUpdateStepIndex:u,onUpdateStepStatus:l,style:{width:"100%",height:"100%"}}),k])}}},E=b(B,[["__scopeId","data-v-842b8728"]]);export{E as default};
