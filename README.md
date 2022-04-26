# getting start

## 插件开发

1、安装依赖包
```bash
yarn
```

2、启动 lerna 包管理，进行包的安装即依赖处理
```bash
yarn bootstrap
```

3、启动插件打包 
```bash
yarn start:plugins
```

启动插件打包后，新起终端，继续往下执行。

4、启动示例应用
```bash
yarn start:examples
```

5、文档构建
```bash
yarn docs
```

**提示：** 若要使用实时测试功能，请确保 examples 文件夹下 package.json中 @realsee/dnalogel 的版本号与 plugins 文件夹下 package.json 的版本号一致。


## 插件发包

1、填写更新日历
路径：/plugins/CHANGELOG.md

2、更改 package.json 版本号

3、插件打包
```bash
cd plugins

yarn build
```

4、发包
确认更新日志、版本号、打包无误后进行发包
```bash
npm publish
```

## 示例发布

** 示例链接同时应用于文档中心，请确保无误后再发布 **
```bash
yarn deploy
```

进入 https://realsee.js.org/dnalogel/ 查看是否发布成功。

## 测试/上线部署

developer 启动命令：
```bash
yarn test
```
此命令会自动构建 examples 静态资源，并 push 到 online 分支，测试人员拉取 online 分支，进行如下操作：

```bash
#进入静态资源目录
cd online

#开启http服务，以下启动服务的方式可被替换
python -m SimpleHTTPServer
```

访问链接: http://localhost:8000/dnalogel/
