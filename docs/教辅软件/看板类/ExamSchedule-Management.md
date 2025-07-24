---
order: 4
---

<div align="center">

# ExamSchedule-Management

<ArticleMetadata />

[![stars](https://img.shields.io/github/stars/ExamAware/ExamSchedule-Management?label=Stars)](https://github.com/ExamAware/ExamSchedule-Management/stargazers) [![forks](https://img.shields.io/github/forks/ExamAware/ExamSchedule-Management?label=Forks)](https://github.com/ExamAware/ExamSchedule-Management/forks) [![Watchers](https://img.shields.io/github/watchers/ExamAware/ExamSchedule-Management?style=social)](https://github.com/ExamAware/ExamSchedule-Management/watchers) [![Downloads](https://img.shields.io/github/downloads/ExamAware/ExamSchedule-Management/total?style=social&label=Downloads&logo=github)](https://github.com/ExamAware/ExamSchedule-Management/releases) [![GitHub Issues](https://img.shields.io/github/issues-search/ExamAware/ExamSchedule-Management?query=is%3Aopen&style=flat&logo=github&label=Issues&color=%233fb950)](https://github.com/ExamAware/ExamSchedule-Management/issues) [![Created At](https://img.shields.io/github/created-at/ExamAware/ExamSchedule-Management)](https://github.com/ExamAware/ExamSchedule-Management) [![Github Last Commit](https://img.shields.io/github/last-commit/ExamAware/ExamSchedule-Management)](https://github.com/ExamAware/ExamSchedule-Management/commits/main) [![QQ群](https://img.shields.io/badge/-QQ%E7%BE%A4%EF%BD%9C901670561-blue?style=flat&logo=QQ&logoColor=white)](https://qm.qq.com/q/zDiEipHsaI) [![LICENSE](https://img.shields.io/badge/License-MIT-red.svg "LICENSE")](https://github.com/ExamAware/ExamSchedule-Management/blob/main/LICENSE)

ExamSchedule-Management 是一个基于 PHP + SQLite 的考试看板与排考管理系统，支持多用户权限管理、考试配置的可视化编辑、考试信息的放映展示等功能。前端采用 Material Design 2 蓝色风格，支持移动端和大屏显示。

</div>

## 主要功能

- **考试看板主页**：输入配置ID，查询并高亮显示考试安排 JSON，支持一键放映。
- **考试放映页**：大屏展示考试安排，实时显示当前科目、倒计时、考试状态等。
- **后台管理**：
  - 登录/登出
  - 配置管理（增删改查，图形化编辑考试安排）
  - 用户管理（管理员可增删改用户，普通用户仅可管理配置）
  - 权限分级（管理员/普通用户）
- **主题与设置**：支持主题切换、页面缩放、考场号自定义等。
- **本地配置导入/导出**：支持 JSON 配置文件的导入与本地存储。