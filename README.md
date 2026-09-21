# 码科服 CMS

轻量级企业建站 CMS，基于 **Laravel + Filament**，默认支持 **SQLite 上传即用**，并可迁移至 MySQL。

> 当前阶段：1.0.0 RC4 商业化候选版

## 在线演示

- 后台演示：https://loresea.github.io/makefu-cms/cms.html
- 安装向导：https://loresea.github.io/makefu-cms/install.html
- 登录页：https://loresea.github.io/makefu-cms/login.html
- 通用模板预览：https://loresea.github.io/makefu-cms/template.html?theme=default&page=home
- 旅游行业：https://loresea.github.io/makefu-cms/travel.html
- 装修行业：https://loresea.github.io/makefu-cms/renovation.html
- 代理记账：https://loresea.github.io/makefu-cms/accounting.html
- 律师行业：https://loresea.github.io/makefu-cms/lawyer.html

后台演示中的“查看前台”和模板预览均使用新窗口打开，不会覆盖后台。

## 核心定位

码科服 CMS 面向企业官网、机械设备、外贸 B2B、软件科技、服务型企业等场景，重点解决：

- 低成本部署
- 网站数据隔离
- 模板复用
- 插件扩展
- SEO
- 备份与数据库迁移
- 系统在线升级与回滚
- 商业模板 / 商业插件扩展

## 技术栈

- PHP 8.3+
- Laravel
- Filament
- SQLite（默认）
- MySQL（可迁移）
- Blade / 主题系统
- Composer

不强依赖 Redis、Docker、Node 常驻服务。

## 已规划 / 已实现能力

### 内容管理
- 页面
- 文章 / 分类 / 标签
- 产品 / 产品分类 / 自定义字段
- 案例
- Banner
- 菜单
- 媒体库
- 表单与线索

### SEO
- Meta Title / Description / Keywords
- Canonical
- robots.txt
- sitemap.xml
- OpenGraph / Twitter Card
- JSON-LD
- 301 跳转

### 模板
- 独立模板目录
- 模板配置 Schema
- 模板依赖插件
- 独立预览
- 模板更新
- 模板市场接口

内置方向：
1. 企业商务 Pro
2. 工业智造
3. 外贸独立站
4. 极简品牌
5. 旅行发现（旅游行业）
6. 筑家设计（装修行业）
7. 企财管家（代理记账）
8. 衡正律师（律师行业）

行业模板采用“Theme + 可选 Starter Content Pack”模式。切换模板默认不会覆盖真实内容；可选择仅换外观、只填空白行业内容、或在新站中完整导入演示数据。

### 插件
- 安装 / 启用 / 停用 / 卸载 / 更新
- 插件版本与兼容性检查
- 商业 License 预留
- 插件市场接口

### 系统维护
- SQLite / MySQL 备份
- SQLite → MySQL 安全迁移
- 自动备份
- 系统健康检查
- 操作日志
- 更新包 SHA256 校验
- Ed25519 签名验证
- 升级前代码 + 数据库备份
- 升级失败回滚

## 安装目标

普通用户的目标安装路径：

1. 上传源码
2. 访问域名
3. 自动检查 PHP 环境
4. 自动创建 SQLite
5. 填写网站信息和管理员
6. 完成安装
7. 登录后台

默认 SQLite 模式不要求用户填写数据库 Host、用户名和密码。

## 商业化方式

开源核心保持完整可用，商业价值来自：

- 商业模板
- 商业插件
- 企业建站
- 定制开发
- 托管维护
- 企业技术支持

## 开源许可

MIT License。

## 当前说明

仓库中的 GitHub Pages 是用于产品交互与模板验收的静态演示。正式 PHP/Laravel 版本在发布 Stable 前仍需要完成真实 PHP 主机环境的 Composer 安装、Migration、CRUD、模板/插件安装、数据库迁移、升级和回滚全链路测试。
