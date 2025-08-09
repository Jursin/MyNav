---
order: 5
---

<div align="center">

<img src="/icon/ACS/Ink-Canvas-Better.png" width="64"/>

# Ink-Canvas-Better

<ArticleMetadata />

![preview](/images/Ink-Canvas-Better/preview.png)

[![iNKORE.UI.WPF.Modern](https://github.com/iNKORE-NET/UI.WPF.Modern/blob/main/assets/images/badges/UI.WPF.Modern_Main_Shield.svg?raw=true)](https://github.com/iNKORE-NET/UI.WPF.Modern)
[![UPSTREAM](https://img.shields.io/badge/UpStream-InkCanvas/Ink--Canvas--Artistry-red.svg "LICENSE")](https://github.com/InkCanvas/Ink-Canvas-Artistry)
[![Downloads](https://img.shields.io/github/downloads/BaiYang2238/Ink-Canvas-Better/total?style=social&label=Downloads&logo=github)](https://github.com/BaiYang2238/Ink-Canvas-Better/releases/latest)
[![Release](https://img.shields.io/github/v/release/BaiYang2238/Ink-Canvas-Better?style=flat&color=%233fb950&label=正式版)](https://github.com/BaiYang2238/Ink-Canvas-Better/releases/latest)

该软件在 [Ink-Canvas-Artistry](https://github.com/InkCanvas/Ink-Canvas-Artistry) 的基础上对 [Ink-Canvas](https://github.com/WXRIW/Ink-Canvas) 进行了二次修改，且**移除**了点名和计时器工具等非画板软件的核心功能  

[直接下载](https://github.com/BaiYang2238/Ink-Canvas-Better/releases/latest)｜[使用说明](https://github.com/BaiYang2238/Ink-Canvas-Better/blob/master/Document/Manual.md)｜[隐私政策](https://github.com/BaiYang2238/Ink-Canvas-Better/blob/master/Document/Privacy.md)

</div>

<GitHubCard owner="BaiYang2238" repo="Ink-Canvas-Better" />

## 模式

- **幻灯片模式**
  - [X] 在幻灯片模式下支持画笔、橡皮擦、图形工具、快捷翻页按键、换页自动换笔迹等功能
  - [X] 自动保存幻灯片下的墨迹，下次打开时墨迹将自动恢复，并且随时可修改。
  - [X] 如果有隐藏的幻灯片页面，将询问是否取消隐藏
- **画板模式（黑/白板模式）**
  - [ ] 在画板模式下有着一整个类似希沃白板一样的画板
  - [ ] 支持添加新页面和页面切换
  - [ ] 支持多指书写：黑板模式界面左下角人像图标为切换按钮
  - [ ] 默认是黑板，可以在设置中调成白板

- **屏幕画笔模式**
    - 在屏幕画笔模式下可以显示原屏幕内容的同时将鼠标调为画笔书写授课笔迹

## 特性
- [X] 一键清屏，更方便
- [X] 自动查杀希沃部分软件
- [X] 图形绘制（支持长按一直选中）
  - [X] 直线、虚线、带箭头直线
  - [X] 多条平行线，带焦点和不带焦点的椭圆、双曲线、抛物线。
  - [X] 正圆、虚线圆，圆柱、圆锥、长方体
  - [X] 坐标系（平面直角坐标系，空间直角坐标系）
- [X] 放大镜功能，把细小图形展示出来
- [ ] 手掌手指并拢，直接放在屏幕上，则是大橡皮（按区域擦除）
- [ ] 单条或多条墨迹选中后缩放、旋转、移动、克隆
- [ ] 全屏幕笔迹双指手势缩放（旋转和拖动也是双指手势）
- [ ] 墨迹转图形，目前可实现智能识别圆、三角形、四边形
- [ ] 墨迹自动转换为规范图形。可自动识别同心圆，相切圆，可自动识别球的截面圆

## 功能  
- **保存墨迹**：默认保存至 `文档\Ink Canvas Strokes`
- **截图**：任意模式模式下（包括鼠标）下点击相机图标截图并自动保存至 `图片\Ink Canvas Screenshots`，可在设置中开启“截图时自动保存墨迹”
- **幻灯片自动保存墨迹**：默认保存至 `文档\Ink Canvas Strokes`
- **墨迹回放**：从头自动书写一遍屏中墨迹