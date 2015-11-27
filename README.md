# node_ueditor v1.0.1s
###node环境下的ueditor包

文件结构：
-------------
	1. /node_modules/ueditor/ 放入项目node_modules中
	2. /ueditor/ 放入项目根目录中
	3. /routes/ueditor.js 放入项目/routes/中

功能配置：
-------------
	1. 如需要，修改/ueditor/ueditor.config.js的相关配置（路由地址及ueditor本身的菜单等配置）
	2. 如需要，修改/routes/ueditor.js的相关路由方法（如图片保存路径、生成缩略图、加水印等后续操作）
	3. 如需要，修改/node_modules/ueditor/index.js（上传文件保存路径）
	4. 如需要，修改/ueditor/nodejs/config.json（上传文件访问前缀、文件大小限制、文件格式等）

页面引用：
--------------
	1. 页面底部引用：
		<script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.config.js"></script>
		<script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.all.min.js"> </script>
		<script type="text/javascript" charset="utf-8" src="/ueditor/lang/zh-cn/zh-cn.js"> </script>
	2. 在想让编辑器出现的位置引用：
		<script id="container" name="content" type="text/plain">
        	在这里给编辑器赋初值
    	</script>
    3. 实例化编辑器：
    	<script type="text/javascript">
        var ue = UE.getEditor('container');
    	</script>

参考引用：
--------------
[Ueditor官网](http://ueditor.baidu.com/website/)<br />
[ueditor:nodejs](http://blog.netpi.me/nodejs/ueditor-nodejs/)<br />
[Nodejs环境配置UEditor上传功能](http://www.xiaoboy.com/detail/1341545081.html)<br />
[node.js集成百度UE编辑器](http://www.jb51.net/article/60781.htm)