---
order: 2
---
<div align="center">

<img src="/icon/ClassIsland.png" width="64"/> 

# ClassIsland

<ArticleMetadata />

![Banner](/images/ClassIsland/banner.png)

[![Downloads](https://img.shields.io/github/downloads/ClassIsland/ClassIsland/total?style=social&label=Downloads&logo=github)](https://github.com/ClassIsland/ClassIsland/releases/latest)
[![Release](https://img.shields.io/github/v/release/ClassIsland/ClassIsland?style=flat&color=%233fb950&label=正式版)](https://github.com/ClassIsland/ClassIsland/releases/latest)
[![Beta](https://img.shields.io/github/v/release/ClassIsland/ClassIsland?include_prereleases&style=flat&color=orange&label=测试版)](https://github.com/ClassIsland/ClassIsland/releases)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FHelloWRC%2FClassIsland.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FHelloWRC%2FClassIsland?ref=badge_shield&style=flat)
[![QQ群](https://img.shields.io/badge/-QQ%E7%BE%A4%EF%BD%9C958840932-blue?style=flat&logo=QQ)](https://qm.qq.com/q/4NsDQKiAuQ)
[![QQ频道](https://img.shields.io/badge/-QQ%E9%A2%91%E9%81%93%EF%BD%9Cclassisland-blue?style=flat&logo=QQ)](https://pd.qq.com/s/7a41knciu)
[![bilibili](https://img.shields.io/badge/-UP%E4%B8%BB%EF%BD%9CHelloWRC__dev-%23FB7299?style=flat&logo=bilibili)](https://space.bilibili.com/355897687)

一款适用于班级一体机的课程信息显示软件，支持显示当日课表、课程信息与各 `组件` 信息，具有丰富的 `插件系统` ，支持各种精细化设置。

[Github 投票](https://github.com/ClassIsland/voting/discussions)｜[ClassIsland 文档](https://docs.classisland.tech)

</div>

<GitHubCard owner="ClassIsland" repo="ClassIsland" />

<Linkcard url="https://classisland.tech/" title="ClassIsland 官网" description="https://classisland.tech/" logo="/icon/ClassIsland.png" />

## [主界面](https://docs.classisland.tech/app/basic.html#%E4%B8%BB%E7%95%8C%E9%9D%A2)

![主界面](https://classisland.tech/assets/comps-BImMTOwP.png)

- 支持通过自定义`隐藏规则集`在特定情况下自动隐藏，灵活应对各种情景
  ![隐藏规则集](https://classisland.tech/assets/ruleset-DvDC3p49.png)

## [组件](https://docs.classisland.tech/app/basic.html#%E7%BB%84%E4%BB%B6)配置

自定义主界面显示内容，如日期、时间、课程表、天气简报、倒数日、自定义文本、轮播组件、分组组件
![组件设置](https://classisland.tech/assets/comp-settings-CnSSI3ny.png)

- 支持自定义相对行号、隐藏规则集与更多高级设置
  - 课程表组件
    ![class-schedule](/images/ClassIsland/class-schedule.png)
  - 轮播组件、分组组件满足更多需求
  - [天气简报](https://docs.classisland.tech/app/advanced#%e5%a4%a9%e6%b0%94)组件支持显示降雨剩余时间
  - 高级设置
    ![advanced-settings](/images/ClassIsland/advanced-settings.png)

## 主题设置
![themes](/images/ClassIsland/themes.png)

> 通过主题设置高度定制应用主界面外观（[**主题下载**](https://www.123912.com/s/0l7bVv-qHdAh)）

![Class-Widgests](/images/ClassIsland/classwidgets.png)
    
![Fluent](/images/ClassIsland/fluent.png)
    
![TestTheme](/images/ClassIsland/testtheme.png)
    
![TestTheme2](/images/ClassIsland/testtheme2.png)
    
![NeZha](/images/ClassIsland/nezha.png)

## [档案编辑](https://docs.classisland.tech/app/profile/)

::: code-group

```md:img [科目]
- [科目](https://docs.classisland.tech/app/profile/subject.html)
  ![科目](https://classisland.tech/assets/4-UASBuuFy.png)
```

```md:img [时间表]
- [时间表](https://docs.classisland.tech/app/profile/time-layout.html)
  ![时间表](https://classisland.tech/assets/3-B78pDh2c.png)
```

```md:img [课表]
- [课表](https://docs.classisland.tech/app/profile/classplan.html)
  ![课表](https://classisland.tech/assets/1-UIMlY11K.png)
  ![课表](https://classisland.tech/assets/2-D-hk6KM_.png)
```

:::

::: tip 注意
应在编辑好`科目`与`时间表`之后编辑`课表`
:::

- 支持[`临时课表与临时层`](https://docs.classisland.tech/app/profile/classplan.html#%E4%B8%B4%E6%97%B6%E8%AF%BE%E8%A1%A8%E4%B8%8E%E4%B8%B4%E6%97%B6%E5%B1%82)、[`课表群`](https://docs.classisland.tech/app/profile/classplan.html#%E8%AF%BE%E8%A1%A8%E7%BE%A4)
- 支持[从表格导入](https://docs.classisland.tech/app/profile/#%E4%BB%8E%E8%A1%A8%E6%A0%BC%E5%AF%BC%E5%85%A5)、[从 CSES 导入](https://edit.cses-org.cn/)、[从其他软件导入](https://docs.classisland.tech/app/migrate/)
- 支持为课表设置最多4周轮换、分批启用课表群

::: code-group
```md:img [换课]
- 支持[当日和跨日换课](https://docs.classisland.tech/app/profile/classplan.html#%E6%8D%A2%E8%AF%BE)
  ![换课](https://classisland.tech/assets/5-Cf_Rqjz-.png)
```
```md:img [调休]
- 支持提前预定要启用的课表、安排调休课表
  ![调休课表](https://classisland.tech/assets/6-CIhgwWiW.png)
```
:::

## [附加设置](https://docs.classisland.tech/app/profile/attached-settings.html)

### [提醒](https://docs.classisland.tech/app/notifications.html)
- 支持[`上下课提醒`、`放学提醒`、`天气/预警提醒`、`行动提醒`](https://docs.classisland.tech/app/notifications.html#%E6%8F%90%E9%86%92%E8%AE%BE%E7%BD%AE)，可设置提醒优先级，提醒横幅可自选搭配[`提醒音效`、`强调特效`和`提醒语音`](https://docs.classisland.tech/app/notifications.html#%E5%BC%BA%E8%B0%83%E6%8F%90%E9%86%92)
![notifications](/images/ClassIsland/notifications.png)

### [自动化](https://docs.classisland.tech/app/automation.html)
- 支持在特定时间节点或情况下执行特定操作，如切换组件配置、运行程序、显示提醒等
- 支持多个不同配置方案，可通过拖动进行排序
  ![自动化](https://classisland.tech/assets/automatic1-itAmfZ_k.png)

::: code-group

```md:img [触发器]
- [触发器](https://docs.classisland.tech/app/automation.html#%E8%A7%A6%E5%8F%91%E5%99%A8)
  ![触发器](https://docs.classisland.tech/assets/%E8%A7%A6%E5%8F%91%E5%99%A8-BFm_yeqw.png)
```

```md:img [规则集]
- [规则集](https://docs.classisland.tech/app/automation.html#%E8%87%AA%E5%8A%A8%E5%8C%96-1)
  ![规则集](https://docs.classisland.tech/assets/%E8%A7%84%E5%88%99%E9%9B%86%E7%A4%BA%E4%BE%8B-CsFLEBwL.png)
```

```md:img [行动]
- [行动](https://docs.classisland.tech/app/automation.html#%E8%A7%A6%E5%8F%91%E5%99%A8)
  ![行动](https://docs.classisland.tech/assets/%E8%A1%8C%E5%8A%A8%E7%A4%BA%E4%BE%8B-C2elwscy.png)
```

:::
    
### [插件](https://github.com/ClassIsland/PluginIndex)
- 支持通过安装插件的方式扩展应用功能，如添加更多新组件、自动化行动、规则集规则、提醒提供方、认证提供方等
- 可在应用内的插件市场中安装插件或从本地安装
![plug-in-market](/images/ClassIsland/plug-in-market.png)

## 更多功能
- [回声洞](https://docs.qq.com/sheet/DS3pQdk5IRmZnbmhu)、[调试菜单](https://docs.classisland.tech/app/advanced.html#%E8%B0%83%E8%AF%95%E8%8F%9C%E5%8D%95)
![debug](/images/ClassIsland/debug.png)
- [从壁纸提取主题色](https://docs.classisland.tech/app/advanced.html#%E4%BB%8E%E5%A3%81%E7%BA%B8%E6%8F%90%E5%8F%96%E4%B8%BB%E9%A2%98%E8%89%B2)
- 运行保障
  - 支持在发生崩溃时自动退出，不影响教学任务
  - [应用数据备份](https://docs.classisland.tech/app/backup.html)
    ![backup](/images/ClassIsland/backup.png)
- 自动时间同步
  - 支持自动从公开的 NTP 服务器或学校广播服务器的 NTP 服务同步时间，提高提醒等功能与学校铃声的同步性
  - 支持自定义时间偏移和自动调整时间偏移
- 密码保护
  - 支持为部分功能设置密码，如编辑应用设置、档案等，减小应用配置被篡改的可能性
- 应用内自动更新
- [获取调试信息](https://docs.classisland.tech/app/faq/reporting-issue.html)

### [集控管理](https://docs.classisland.tech/management/)

支持通过静态配置文件或集控服务器部署，统一管理档案配置、应用策略等，提高管理多个实例的便利性

- [官方集控服务器](https://github.com/ClassIsland/ManagementServer)***（🚧开发中）***
- [基于 Python 的第三方集控服务器](https://github.com/kaokao221/ClassIslandManagementServer.py)
- [开始使用](https://docs.classisland.tech/management/#%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8)

## 宣传视频
<BilibiliVideo bvid="BV1EEsNeYEc9" />