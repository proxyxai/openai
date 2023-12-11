window.$docsify = {
	auto2top:true,
	coverpage:false,
	executeScript: true,
	loadSidebar:true,
	maxLevel: 4,
	subMaxLevel: 3,
	themeColor:'#333333',
	name:'𝑶𝒑𝒆𝒏𝑨𝑰',
	search:{maxAge: 86400000, paths: 'auto', placeholder: '🔍', noData: '无信息'},
	plugins: [
		function (hook) {
			hook.afterEach(function (html) {
				var footerTemplate = [
					'<footer>',
					'<hr><small> © 2022-YEAR proxyxai.com <a href="https://proxyxai.com/#/tos" style="text-decoration: none;">Terms of Service</a> | <a href="https://status.openai.com" style="text-decoration: none;">status</a> | <a href="mailto:support@proxyxai.com" style="text-decoration: none;">support@proxyxai.com</a></small>',
					'</footer>'
				].join('');

				var currentYear = new Date().getFullYear();
				var footer = footerTemplate.replace("YEAR", currentYear);
				return html + footer;
			});
		}
	]
}
