/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-12-06 15:14:17
 * @LastEditors: zhongconghai
 * @LastEditTime: 2021-01-20 13:22:06
 */
module.exports = {
	title: "From the sea",
	description: "欢迎来到我的个人博客",
	head: [["link", { rel: "icon", href: "/ocean.png" }]],
	themeConfig: {
		logo: "/ocean.png",
		editLink: "赣ICP20003686",
		editLink: "http://www.beian.miit.gov.cn/",
		nav: [
			{ text: "首页", link: "/" },
			{ text: "个人学习", link: "/study/" },
			{ text: "读书笔记", link: "/books_reading/" },
			{ text: "github", link: "https://github.com/zch1999" },
		],
		markdown: {
			target: "赣ICP20003686",
			rel: "http://www.beian.miit.gov.cn/",
		},
		sidebarDepth: 2,
		sidebar: require("./sidebar.js"),
		// sidebar:{
		//   '/books_reading/': [
		//     '',     /* /foo/ */
		//     'one',  /* /foo/one.html */
		//     'two',   /* /foo/two.html */
		//   ]
		// }
	},
	// base: "/static-blog/",
};
