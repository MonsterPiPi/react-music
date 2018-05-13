# React-Music（开发中...）

> #### api：一个开源的[网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi)（有api才有动力写！！！）

> #### [在线演示地址](http://reactmusic.mtnhao.com)

> #### [桌面版下载](http://cdn.mtnhao.com/mmPlayer.zip)

> #### [Vue PC/移动端二合一版本](https://github.com/maomao1996/Vue-mmPlayer)

> #### [交流QQ群：529940193](http://shang.qq.com/wpa/qunwpa?idkey=f8be1b627a89108ccfda9308720d2a4d0eb3306f253c5d3e8d58452e20b91129)

## 如何安装与使用（暂时没啥功能）

> 后台服务器

```
cd react-music/server //进入后台服务器目录

npm install //安装依赖

node app.js //服务端运行 访问 http://localhost:3163
```

> mmPlayer

```
git clone https://github.com/maomao1996/react-music  //下载mmPlayer（移动端版本）

cd react-music //进入react-music播放器目录

npm install //安装依赖

npm run dev //服务端运行

npm run build  //项目打包
```

## 技术栈

- React（核心框架）
- React-Router（页面路由）
- ES 6 / 7
- Sass（CSS预处理器）
- Axios（网络请求）
- [Better-Scroll](https://ustbhuangyi.github.io/better-scroll/#/zh)（一款重点解决移动端各种滚动场景需求的插件）
- FastClick（解决移动端300ms点击延迟）

## 项目布局

```
├── config                                          // webpack配置文件
├── public                                          // 项目启动页面
├── scripts                                         // 脚本工具
├── screenshots                                     // 项目截图
├── server                                          // 后台服务器目录
├── src                                             // 项目源码目录
│   ├── api                                         // 数据交互目录
│   │   └── index.js                                // 获取数据
│   ├── assets                                      // 资源目录
│   │   ├── css                                     // 数据交互目录
│   │   │   └── index.scss                          // 基础样式
│   │   │   ├── mixin.scss                          // 样式混合
│   │   │   └── reset.css                           // 样式重置
│   │   ├── img                                     // 图片
│   ├── base                                        // 公共基础组件目录
│   │   ├── scroll
│   │   │   └── scroll.js                           //
│   │   ├── slide
│   │   │   └── slide.js                            // 轮播组件
│   ├── common                                      //
│   ├── components                                  // 公共项目组件目录
│   │   ├── lcr-list
│   │   │   └── lcr-list                            // 列表组件（三列）
│   ├── pages                                       //
│   │   ├── find
│   │   │   └── find.js                             //
│   │   ├── my
│   │   │   └── my.js                               //
│   │   ├── recommend
│   │   │   └── recommend.js                        //
│   │   ├── app.js                                  //
│   │   ├── app.less                                //
│   ├── router
│   │   └── index.js                                // 路由配置
│   └── index.js                                    // 入口主文件
```

## 功能

## 界面欣赏

## 更新说明

## License

[MIT](https://github.com/maomao1996/react-music/blob/master/LICENSE)
