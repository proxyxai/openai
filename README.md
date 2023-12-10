# ProxyXAI

https://proxyxai.com

## 授权部署 api

`docker-compose -f docker-compose.yml up -d` 一键拉起,默认启动端口是 3443

## 余额查询(静态资源)

可将 pages/billing 目录独立部署在 nginx 即可

## 子账号(静态资源)

可将 pages/user 目录独立部署在 nginx 即可

## 部署案例说明

我们以 https://proxyxai.com 说明部署结构

- 部署 api.proxyxai.com , 启动了 3443 端口, 配置一个 nginx 服务将 api.proxyxai.com 80/443 关联到 api 服务的 3443 端口
- 部署 usage.proxyxai.com, nginx 配置 usage.proxyxai.com 请求关联到 pages/billing 静态文件目录即可
- 部署 sub.proxyxai.com, nginx 配置 sub.proxyxai.com 请求关联到 pages/user 静态文件目录即可
