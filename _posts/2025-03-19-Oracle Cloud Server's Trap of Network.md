---
layout:     post
title:      "Oracle云服务器网络的天坑"
subtitle:   "Oracle Cloud Always Free but Bugs"
date:       2025-3-19 2:52:00
author:     "Ode1l"
published: true
header-style: text
tags:
    - 计算机科学
    - 计算机网络
    - 云计算
    - Oracle
---

# 前言

Oracle Cloud有严格的网络管理。首先仅支持SSH public key登录。其次只允许登录到opc或ubuntu角色，不允许直接登录root。

切换到root角色：

>sudo -su
 
若要开放端口并提供服务，需要创建vps并设置出站入站规则。例如开放0.0.0.0/0 **所有端口**的出站规则，开放 0.0.0.0/0 443 80的入站规则。

# 防火墙

Oracle Cloud所提供的镜像中没有安装防火墙管理软件，例如ufw。而是直接通过iptables管理。因此需要防火墙设置：

>sudo iptables -P INPUT ACCEPT
>sudo iptables -P FORWARD ACCEPT
>sudo iptables -P OUTPUT ACCEPT
>sudo iptables -F

Oracle自带的Ubuntu镜像默认设置了Iptable规则，关闭它：

>apt-get purge netfilter-persistent

然后重启：

>reboot

若要开启：

>apt-get install netfilter-persistent

若要强制删除：

>rm -rf /etc/iptables && reboot

查看规则是否生效，命令：

>iptables -L