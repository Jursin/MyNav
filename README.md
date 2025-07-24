 # Minecraft 教程

[![Netlify deployments](https://img.shields.io/github/deployments/Jursin/MC-Guide/production?style=flat&logo=netlify&label=netlify)](https://mc-guide.jursin.top)
[![CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-blue.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0)

这是一个使用 VitePress 搭建的 Minecraft 入门教程网站

## 快速开始
- 环境要求
  - Node.js 22
  - npm
- 安装依赖
  ```bash
  npm install
  ```
- 开发模式
  ```bash
  npm run docs:dev
  ```
  开发服务器将运行在 [http://localhost:5173](http://localhost:5173)
- 构建生产版本
  ```bash
  npm run docs:build
  ```
  构建结果将输出到 .vitepress/dist 目录
- 预览生产版本
  ```bash
  npm run docs:preview
- 内容编写指南
  - 所有文档使用 Markdown 格式编写
  - 在 docs 目录下创建新的 .md 文件即可自动生成对应页面
  - 使用 Frontmatter 配置页面元数据：
  - 在 `/docs/.vitepress/config.mts` 中配置站点

## 贡献指南
欢迎贡献文档改进或功能增强：

- Fork 本项目
- 创建新分支
- 提交更改
- 推送到分支
- 创建 Pull Request
