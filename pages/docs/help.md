## OpenAI API 服务特性

1. 兼容所有支持“自定义 OpenAI 域名”的客户端或网页应用。
2. 服务器部署在支持调用 OpenAI SDK 的区域，确保所有客户端无缝接入。
3. 提供账号管理功能，允许为每个账户分配唯一的 API Key，便于团队协作。
4. 实现对每个账户 API 调用次数的跟踪和统计。

## 使用示例

### OpenCat 客户端 (iOS & Mac)

即使 OpenCat 提供了团队版本，该功能仍属于收费服务。通过使用自定义 OpenAI 域名功能，可以实现团队免费使用的目的。

1. 在自己的服务器上部署此服务，OpenAI Key 仅存储在自己的服务器上，确保安全。
2. 在服务器上为每个账户分配一个 API Key。
3. 在 OpenCat 客户端中，将 API Key 设置为服务器上创建的 Key。
4. 在 OpenCat 客户端中，将自定义 OpenAI 域名设置为自己的服务器地址，例如：`https://api.proxyxai.com`，并点击“自定义 API 域名”下的“验证”完成设置。

### ChatBox (Windows, Mac, Linux)

访问 [ChatBox GitHub 仓库](https://github.com/Bin-Huang/chatbox)。

在设置中选择OpenAI API,输入本服务的 API 地址和 API Key。

### AMA (全终端)

下载地址 [https://bytemyth.com/zh-CN/ama](https://bytemyth.com/zh-CN/ama)

下载后打开设置页面，选中OpenAI，并输入平台提供的API Base和API Key即可。

### ChatBoost（Android）

在设置中将自定义 API 地址配置为本服务的 API 地址和 API Key。

### ChatGPT Box（浏览器插件）

访问 [ChatGPT Box Chrome 商店页面](https://chrome.google.com/webstore/detail/chatgptbox/eobbhoofkanlmddnplfhnmkfbnlhpbbo)。

在“高级”设置中，将“自定义的 ChatGPT 网页 API 地址”修改为本服务的 API 地址，并在“API 模式”后的输入框中填入 API Key。

### ChatGPT-Next-web（网页版）

访问 [ChatGPT-Next-Web GitHub 仓库](https://github.com/Yidadaa/ChatGPT-Next-Web)。

使用以下命令部署 docker：

```markdown
docker run --name=chatgpt -d -p 3000:3000 -e OPENAI_API_KEY="" -e BASE_URL="api.proxyxai.com" -e PROTOCOL="https" yidadaa/chatgpt-next-web:latest
```

将 `BASE_URL` 设置为本服务的 API 地址，`OPENAI_API_KEY` 保留为空。这样，访问网页版时，用户可以直接使用自己的 API Key。
