+++
title = "常见问题"
description = "Answers to frequently asked questions."
date = 2021-05-01T19:30:00+00:00
updated = 2021-05-01T19:30:00+00:00
draft = false
weight = 30
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

<details>
<summary>为什么某些接口调用报错404?</summary>
你域名可能配错了，请检查api_base配置是否正确，很多库（比如langchain）在配置api_base时，需要加上/v1的接口后缀，而不是直接一个域名，示例https://api.proxyxai.com/v1
</details>
<br/>

<details>
<summary>报错：Error 401: Incorrect APl key provided: sk-： You can find your APl key at https://platform.openai.com/accour keys</summary>
这是因为你没有配置请求的API接入地址为我们提供的地址，平台工作的原理就是代理API请求，因此你必须配置我们平台提供的API Base和API Key，将API改为https://api.proxyxai.com + sk-Xvsxxxx 即可
</details>
<br/>

<details>
<summary>如果某个开源项目不支持配置api base怎么办？</summary>
找到项目源码,将里面的API连接地址从 api.openai.com 改成 api.proxyxai.com 即可
</details>
<br/>

<details>
<summary>有限量吗?</summary>
可在余额查询 [usage.proxyxai.com](https://usage.proxyxai.com) 获得 RPM 数据
</details>
<br/>
