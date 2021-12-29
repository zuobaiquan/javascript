
# patch-package 安装

https://github.com/ds300/patch-package

npm install patch-package --save-dev


修改项目根目录下的 package.json 文件

在 package.json 文件中的 
	
	scripts 中加入 "postinstall": "patch-package"

手动修改 node_modules 依赖包中的源码


npx patch-package vue2-toast


测试补丁包是否有效 ，删除node_modules ，并重新执行 npm install 命令

补丁文件测试成功后就可以将补丁文件推送到远程仓库中


npm 命令钩子

# install 之前执行这个脚本
preinstall
# 执行 install 脚本
install
# install 之后执行这个脚本
postinstall

统一规范包管理器
https://github.com/pnpm/only-allow

{
  "scripts": {
    "preinstall": "npx only-allow yarn"
  }
}


