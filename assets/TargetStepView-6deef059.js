import{_ as k,u as v,l as M,b as I,r as n,o as x,c as w,e,w as t,a as o,g as S,f as l,t as T,v as A}from"./index-8d8776ad.js";const u=a=>(T("data-v-60f6462c"),a=a(),A(),a),W={class:"target-step-view"},B={style:{width:"100%",height:"100%",display:"flex","flex-direction":"column"}},G={class:"step-form-content"},N={style:{"margin-bottom":"25px"}},C=u(()=>o("div",{style:{"font-size":"15pt","margin-bottom":"15px"}},"机器:",-1)),L={style:{"margin-bottom":"25px"}},D=u(()=>o("div",{style:{"font-size":"15pt","margin-bottom":"15px"}},"群组:",-1)),R={class:"step-op-area"},U={__name:"TargetStepView",emits:["update-step-index","update-step-status"],setup(a,{emit:p}){const _=v();let y=M([{label:"Rubber Soul",key:"Rubber Soul",children:[{label:"Everybody's Got Something to Hide Except Me and My Monkey",key:"Everybody's Got Something to Hide Except Me and My Monkey"},{label:"Drive My Car",key:"Drive My Car",disabled:!0},{label:"Norwegian Wood",key:"Norwegian Wood"},{label:"You Won't See",key:"You Won't See",disabled:!0},{label:"Nowhere Man",key:"Nowhere Man"},{label:"Think For Yourself",key:"Think For Yourself"},{label:"The Word",key:"The Word"},{label:"Michelle",key:"Michelle",disabled:!0},{label:"What goes on",key:"What goes on"},{label:"Girl",key:"Girl"},{label:"I'm looking through you",key:"I'm looking through you"},{label:"In My Life",key:"In My Life"},{label:"Wait",key:"Wait"}]},{label:"Let It Be",key:"Let It Be Album",children:[{label:"Two Of Us",key:"Two Of Us"},{label:"Dig A Pony",key:"Dig A Pony"},{label:"Across The Universe",key:"Across The Universe"},{label:"I Me Mine",key:"I Me Mine"},{label:"Dig It",key:"Dig It"},{label:"Let It Be",key:"Let It Be"},{label:"Maggie Mae",key:"Maggie Mae"},{label:"I've Got A Feeling",key:"I've Got A Feeling"},{label:"One After 909",key:"One After 909"},{label:"The Long And Winding Road",key:"The Long And Winding Road"},{label:"For You Blue",key:"For You Blue"},{label:"Get Back",key:"Get Back"}]}]);function b(){_.push({path:"/dashboard/config/vcs/execute-step"})}return I(()=>{p("update-step-index","3")}),(s,i)=>{const h=n("n-input"),g=n("n-tree-select"),r=n("n-number-animation"),d=n("n-statistic"),c=n("n-button"),m=n("n-card");return x(),w("div",W,[e(m,{style:{width:"100%",height:"100%"}},{default:t(()=>[o("div",B,[o("div",G,[o("div",N,[C,e(h,{value:s.postSyncScriptContent,"onUpdate:value":i[0]||(i[0]=f=>s.postSyncScriptContent=f),type:"textarea",rows:"10",placeholder:"请输入机器的UUID, 使用英文半角逗号分割."},null,8,["value"])]),o("div",L,[D,e(g,{multiple:"",cascade:"",checkable:"",options:S(y),"default-value":["Norwegian Wood"]},null,8,["options"])]),e(d,{label:"你选择了","tabular-nums":""},{suffix:t(()=>[l(" 个群组， ")]),default:t(()=>[e(r,{ref:"numberAnimationInstRef",from:0,to:12039},null,512)]),_:1}),e(d,{label:"共计（去重后）有","tabular-nums":""},{suffix:t(()=>[l(" 台机器。 ")]),default:t(()=>[e(r,{ref:"numberAnimationInstRef",from:0,to:12030},null,512)]),_:1})]),o("div",R,[e(c,{strong:"",style:{"margin-right":"10px"}},{default:t(()=>[l("取 消")]),_:1}),e(c,{strong:"",type:"primary",onClick:b},{default:t(()=>[l("下 一 步")]),_:1})])])]),_:1})])}}},V=k(U,[["__scopeId","data-v-60f6462c"]]);export{V as default};