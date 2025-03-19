---
layout:     post
title:      "新西兰光纤网络手动配置问题"
subtitle:   "New Zealand UFB"
date:       2025-3-20 12:56:00
author:     "Ode1l"
published: true
header-style: text
tags:
    - 计算机网络
    - 新西兰生活
    - 路由器
---

# Ethernet

中国的网络接入协议普遍采用PPPoE协议。新西兰则不同，目前猜测采用IPoE协议，等我进入Modem后便可知晓。

## New Zealand UFB

New Zealand's Ultra-Fast Broadband (UFB)，该计划是新西兰政府推行的一套光纤网络计划。目前我还未知晓更多细节，但是可以得知改网络同时提供IPTV和VoIP。因此我猜测网络使用的是IPoE接入认证协议。

当然这些信息对非专业读者来说不重要，重要的是连接Modem的路由器需要做出对应设置，即：

>VLAN = 10
>Priority = 0

## Deco Router

如果大家购买的是contact网络，运营商会提供一台Deco X55路由器，该品牌为TP-Link子品牌，标准型号命名为AX3000。该品牌路由器极其恶心，强制用户使用手机app登录，管理界面居然还有付费功能。其实该路由器还有web界面，网址为：

>https://tplinkdeco.net/webpages/index.html
>http://192.168.68.1/webpages/index.html （网关的ip）

目前还不知如何开放telnet，该型号路由器也没推出OpenWrt

## 如果采用电脑直连Modem的方式，是无法直接正常上网的，需要配置VLAN。

具体操作请[谷歌](https://google.com/search?q=configure+vlan+ID+MacOS)，或者[这个](https://google.com/search?q=configure+vlan+ID+Windows)。