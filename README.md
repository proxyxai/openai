# ProxyXAI

https://proxyxai.com

## 授权部署 api

`docker-compose -f docker-compose.yml up -d` 一键拉起

## 余额查询(静态资源)

可将 pages/billing 目录独立部署在 nginx 即可

## 子账号(静态资源)

可将 pages/user 目录独立部署在 nginx 即可

## 部署案例说明

我们以 https://proxyxai.com 说明部署结构

- 1. 部署 api 服务, 启动了 3443 端口, 然后前面可以通过一个 nginx 服务把 api.proxyxai.com 80/443 关联到 api 服务的 3443 端口
- 2. 部署 billing, usage.proxyxai.com 请求关联到 pages/billing 静态文件目录即可
- 3. 部署 user, sub.proxyxai.com 请求关联到 pages/user 静态文件目录即可
