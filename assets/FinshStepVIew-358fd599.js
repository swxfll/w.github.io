import{_ as F,u as g,n as C,l as d,b as v,r as t,o as S,c as B,e,w as n,a as o,f as r,g as A}from"./index-8d8776ad.js";const I={class:"finsh-step-view"},P={style:{width:"100%",height:"100%",display:"flex","flex-direction":"column"}},y={class:"step-form-content"},O={class:"step-op-area"},E={__name:"FinshStepVIew",emits:["update-step-index","update-step-status"],setup(M,{emit:m}){const u=g(),a=C();let b=d(!0);const c=d(`Feb  3 10:51:11 h1 rsyslogd: [origin software="rsyslogd" swVersion="7.4.7" x-pid="1116" x-info="http://www.rsyslog.com"] start
Feb  3 10:51:01 h1 kernel: Linux version 4.10.4-1.el7.elrepo.x86_64 (mockbuild@Build64R7) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-11) (GCC) ) #1 SMP Sat Mar 18 12:50:10 EDT 2017
Feb  3 10:51:01 h1 kernel: Command line: BOOT_IMAGE=/vmlinuz-4.10.4-1.el7.elrepo.x86_64 root=UUID=3437f1a0-f850-4f1b-8a7c-819c5f6a29e4 ro crashkernel=auto consoleblank=0 vga=0x305
Feb  3 10:51:01 h1 kernel: x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'
Feb  3 10:51:01 h1 kernel: x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'
Feb  3 10:51:01 h1 kernel: x86/fpu: Supporting XSAVE feature 0x004: 'AVX registers'
Feb  3 10:51:01 h1 kernel: x86/fpu: xstate_offset[2]:  576, xstate_sizes[2]:  256
Feb  3 10:51:01 h1 kernel: x86/fpu: Enabled xstate features 0x7, context size is 832 bytes, using 'standard' format.
Feb  3 10:51:01 h1 kernel: e820: BIOS-provided physical RAM map:
Feb  3 10:51:01 h1 kernel: BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable
Feb  3 10:51:01 h1 kernel: BIOS-e820: [mem 0x000000000009fc00-0x000000000009ffff] reserved
Feb  3 10:51:01 h1 kernel: BIOS-e820: [mem 0x00000000000f0000-0x00000000000fffff] reserved
Feb  3 10:51:01 h1 kernel: BIOS-e820: [mem 0x0000000000100000-0x00000000211ddfff] usable
Feb  3 10:51:01 h1 kernel: BIOS-e820: [mem 0x00000000211de000-0x00000000211fffff] reserved
Feb  3 10:51:01 h1 kernel: BIOS-e820: [mem 0x00000000feffc000-0x00000000feffffff] reserved
Feb  3 10:51:01 h1 kernel: BIOS-e820: [mem 0x00000000fffc0000-0x00000000ffffffff] reserved
Feb  3 10:51:01 h1 kernel: NX (Execute Disable) protection: active
Feb  3 10:51:01 h1 kernel: SMBIOS 2.8 present.
Feb  3 10:51:01 h1 kernel: DMI: Red Hat KVM, BIOS 1.11.0-2.el7 04/01/2014
Feb  3 10:51:01 h1 kernel: Hypervisor detected: KVM
Feb  3 10:51:01 h1 kernel: e820: last_pfn = 0x211de max_arch_pfn = 0x400000000
Feb  3 10:51:01 h1 kernel: x86/PAT: PAT not supported by CPU.
Feb  3 10:51:01 h1 kernel: x86/PAT: Configuration [0-7]: WB  WT  UC- UC  WB  WT  UC- UC
Feb  3 10:51:01 h1 kernel: found SMP MP-table at [mem 0x000f6380-0x000f638f] mapped at [ffff8800000f6380]
Feb  3 10:51:01 h1 kernel: Using GB pages for direct mapping
Feb  3 10:51:01 h1 kernel: RAMDISK: [mem 0x1f8a7000-0x20a0cfff]
Feb  3 10:51:01 h1 kernel: ACPI: Early table checksum verification disabled
Feb  3 10:51:01 h1 kernel: ACPI: RSDP 0x00000000000F6160 000014 (v00 BOCHS )
Feb  3 10:51:01 h1 kernel: ACPI: RSDT 0x00000000211E237B 00002C (v01 BOCHS  BXPCRSDT 00000001 BXPC 00000001)
Feb  3 10:51:01 h1 kernel: ACPI: FACP 0x00000000211E228F 000074 (v01 BOCHS  BXPCFACP 00000001 BXPC 00000001)
Feb  3 10:51:01 h1 kernel: ACPI: DSDT 0x00000000211E0040 00224F (v01 BOCHS  BXPCDSDT 00000001 BXPC 00000001)
Feb  3 10:51:01 h1 kernel: ACPI: FACS 0x00000000211E0000 000040
Feb  3 10:51:01 h1 kernel: ACPI: APIC 0x00000000211E2303 000078 (v01 BOCHS  BXPCAPIC 00000001 BXPC 00000001)
Feb  3 10:51:01 h1 kernel: No NUMA configuration found
Feb  3 10:51:01 h1 kernel: Faking a node at [mem 0x0000000000000000-0x00000000211ddfff]
Feb  3 10:51:01 h1 kernel: NODE_DATA(0) allocated [mem 0x211bc000-0x211ddfff]
Feb  3 10:51:01 h1 kernel: kexec_core: crashkernel: memory value expected
Feb  3 10:51:01 h1 kernel: kvm-clock: Using msrs 4b564d01 and 4b564d00
Feb  3 10:51:01 h1 kernel: kvm-clock: cpu 0, msr 0:2113c001, primary cpu clock
Feb  3 10:51:01 h1 kernel: kvm-clock: using sched offset of 9766985086 cycles
Feb  3 10:51:01 h1 kernel: clocksource: kvm-clock: mask: 0xffffffffffffffff max_cycles: 0x1cd42e4dffb, max_idle_ns: 881590591483 ns
Feb  3 10:51:01 h1 kernel: Zone ranges:
Feb  3 10:51:01 h1 kernel:  DMA      [mem 0x0000000000001000-0x0000000000ffffff]
Feb  3 10:51:01 h1 kernel:  DMA32    [mem 0x0000000001000000-0x00000000211ddfff]
Feb  3 10:51:01 h1 kernel:  Normal   empty
Feb  3 10:51:01 h1 kernel: Movable zone start for each node
Feb  3 10:51:01 h1 kernel: Early memory node ranges
`);function p(){u.push({path:"/dashboard/config/vcs/repo-step"})}function x(){const s=navigator.clipboard;s!==void 0?s.writeText(c.value).then(()=>{a.success("内容已拷贝到剪切板")}).catch(()=>{a.warning("内容拷贝到剪切板失败")}):document.getElementById("log-content")}return v(()=>{m("update-step-index","5")}),(s,w)=>{const f=t("n-number-animation"),l=t("n-statistic"),h=t("n-divider"),k=t("n-log"),i=t("n-button"),_=t("n-card");return S(),B("div",I,[e(_,{style:{width:"100%",height:"100%"}},{default:n(()=>[o("div",P,[o("div",y,[e(l,{label:"你一共处理了","tabular-nums":""},{suffix:n(()=>[r(" 台机器 ")]),default:n(()=>[e(f,{ref:"numberAnimationInstRef",from:0,to:12039},null,512)]),_:1}),e(l,{label:"其中有","tabular-nums":""},{suffix:n(()=>[r(" 完成了变更任务 ")]),default:n(()=>[e(f,{ref:"numberAnimationInstRef",from:0,to:12030},null,512)]),_:1}),e(l,{label:"但是有","tabular-nums":""},{suffix:n(()=>[r(" 操作失败了 ")]),default:n(()=>[e(f,{ref:"numberAnimationInstRef",from:0,to:9},null,512)]),_:1}),e(h,{"title-placement":"left"},{default:n(()=>[r("详细的错误信息如下:")]),_:1}),o("div",null,[e(k,{loading:A(b),log:c.value},null,8,["loading","log"])])]),o("div",O,[e(i,{strong:"",type:"warning",onClick:x,id:"log-content",style:{"margin-right":"10px"}},{default:n(()=>[r("拷 贝 到 剪 切 板 ")]),_:1}),e(i,{strong:"",type:"primary",onClick:p},{default:n(()=>[r("好")]),_:1})])])]),_:1})])}}},T=F(E,[["__scopeId","data-v-eed8d1ec"]]);export{T as default};
