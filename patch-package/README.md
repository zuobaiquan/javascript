
# patch-package 安装

npm install patch-package --save-dev


修改项目根目录下的 package.json 文件

在 package.json 文件中的 
	
	scripts 中加入 "postinstall": "patch-package"

手动修改 node_modules 依赖包中的源码


npx patch-package vue2-toast


测试补丁包是否有效 ，删除node_modules ，并重新执行 npm install 命令

补丁文件测试成功后就可以将补丁文件推送到远程仓库中