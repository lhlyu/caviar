### 待做

- [ ] 自动部署文档
- [ ] 自动发布包

### 参考

-   [lerna | 管理多包存储库](https://zhuanlan.zhihu.com/p/108118011)

```text
// 常用
lerna bootstrap  // 安装所有依赖项并链接任何交叉依赖项
//例: lerna bootstrap --npm-client yarn --use-workspaces

lerna exec       // 在每个包中执行任意命令
//例: lerna exec 'yarn remove lodash' // 删除

lerna add        // 安装依赖，支持交叉依赖
// lerna add packageA --scope=packageB

// 版本发布
lerna changed    // 检查自上次发布以来哪些软件包已经更新
lerna diff       // 自上次发布以来，对所有包或单个包进行区分
lerna publish    // 发布版本

// 常用
lerna clean      // 清除项目中所有 node_modules
lerna init       // 初始化项目
lerna create     // 创建项目中的子package

// 其它
lerna run        // 在包含该脚本的包中运行 npm 脚本
lerna info       // 查看信息
lerna import     // 导入
lerna link       // 软链
lerna version    // 查看版本
lerna ls         // 列出当前 lerna 项目中的公共包
```

-   [workspace | 工作空间](https://www.jianshu.com/p/990afa30b6fe)
-   [elenext | 一个 vue3 组件](https://github.com/JasKang/elenext)
-   [vercel | 自动部署网站](https://editio.me/2020/vercel/)
-   [vite-plugin-vuedoc | 将 Markdown 用作 Vue 组件](https://github.com/JasKang/vite-plugin-vuedoc)
-   [git 钩子](https://www.jianshu.com/p/f0d31f92bfab)
-   [execa](https://www.npmjs.com/package/execa)
-   [tsrv | 0 零配置可以快速开发 vue 3 组件库](https://www.npmjs.com/package/tsrv)
-   [pro-components](https://github.com/ant-design/pro-components)
