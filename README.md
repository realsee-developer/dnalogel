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

## 测试/上线部署

```bash
#进入静态资源目录
cd online

#开启http服务，以下启动服务的方式可被替换
python -m SimpleHTTPServer
```

访问链接: 
