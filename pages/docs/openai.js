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
					'<hr><small> © 2022-YEAR 𝑜𝑝𝑒𝑛-𝑎𝑠𝑠𝑖𝑠𝑡𝑎𝑛𝑡 <a href="https://open-assistant.cn/#/tos" style="text-decoration: none;">Terms of Service</a> | <a href="https://status.openai.com" style="text-decoration: none;">status</a> | <a href="mailto:support@open-assistant.cn" style="text-decoration: none;">support@open-assistant.cn</a></small>',
					'</footer>'
				].join('');

				var currentYear = new Date().getFullYear();
				var footer = footerTemplate.replace("YEAR", currentYear);
				return html + footer;
			});
		}
	]
}
