---
order: 2
---

<div align="center">

<img src="/icon/ACS/Rand.png" width="64"/>

# Rand

<ArticleMetadata />

[![Downloads](https://img.shields.io/github/downloads/LuoYunXi0407/Rand/total?style=social&label=Downloads&logo=github)](https://github.com/LuoYunXi0407/Rand/releases/latest)
[![Release](https://img.shields.io/github/v/release/LuoYunXi0407/Rand?style=flat&color=%233fb950&label=正式版)](https://github.com/LuoYunXi0407/Rand/releases/latest)

一款美观、易用、强大的抽号软件

</div>

<GitHubCard owner="LuoYunXi0407" repo="Rand" />

## 主界面

![主页](/images/Rand/home.png)

- 用于临时抽号，输入抽选序号的起点和终点，然后点击开始按钮即可抽号。
- 可开启不重复设置

::: code-group

```md:img [单人]
![单人](/images/Rand/single.png)
```

```md:img [多人]
![多人](/images/Rand/multiple.png)
```

:::

## 设置

### 设置姓名

![设置姓名](/images/Rand/settings.png)

- 点击 `设置姓名`
- 在自动打开的 `Name.txt` 文件中粘贴学生名单（一行一个）
  ![name](/images/Rand/name.png)
- 每行名称对应一个座号，如果某个座位没有学生，对应行可以填 `【空】`
  ![空](/images/Rand/blank.png)
- 保存文件
- 重新启动抽号器

### 设置座号范围

::: tip
如果已配置姓名，则下次启动时会自动配置座号范围，无需重复配置。
:::

如果不想配置姓名，仅配置座号范围，可以前往设置，关闭` 自动识别抽号范围` ，并填入班级座号数，然后点击 `保存`
![image](/images/Rand/close.png)

## 个性化

![个性化](/images/Rand/personal.png)

- **主题：** 可以自定义颜色模式（主题色随系统设置，暂时无法更改）
- **显示设置：** 设置座号、姓名显示格式

## 更多设置
- **平衡设置:** 使抽到的学生不重复，直到抽完全部学生为止（未来会上线更优化的平衡机制，防止学生抽到后高枕无忧）
  ![平衡设置](/images/Rand/1.png)
- **抽号模式:** 可以为不同的抽号模式配置不同的自定义设置
  ![image](/images/Rand/2.png)
- **多人模式**
  ![image](/images/Rand/3.png)