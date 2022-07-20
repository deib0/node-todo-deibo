用mock单元测试读文件，写文件

使用浏览器node工具调试，为你的命令添加 `--inspect-brk`

例如：```node --inspect-brk cli.js add task 200```

如何发布到npm
1. 初始化化package.json
```
// package.json
{
"name":"node-todo-deibo",
"main":"main.js",
"description":"简单快捷的待办清单",
"keywords":["list"],
"license":"ISC",
}
```
2. 发布到npm
```
nrm use npm// 使用官方源
npm adduser// 填写账号
npm publish// 发布
```
