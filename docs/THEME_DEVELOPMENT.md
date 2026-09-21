# 模板开发规范

## 目标

模板负责展示，不负责 CMS 核心业务。

模板禁止：

- 直接修改 Core
- 直接使用数据库连接
- 把插件逻辑塞入模板
- 把客户数据写入模板目录

## 目录

```
themes/example/
  theme.json
  preview.png
  views/
  assets/
  config/
    schema.json
```

## theme.json

建议字段：

```json
{
  "name": "Example Theme",
  "slug": "example",
  "version": "1.0.0",
  "author": "码科服",
  "requires": {
    "cms": ">=1.0.0",
    "php": ">=8.3"
  },
  "requires_plugins": []
}
```

## 配置 Schema

模板的品牌色、首页数量、模块开关等使用 Schema 描述，由 CMS 自动生成后台配置。

支持类型建议：

- text
- textarea
- number
- select
- boolean
- color
- image
- url

## 数据获取

模板只通过 CMS 提供的 ViewModel / Service / Helper 获取数据。

例如：

```php
cms_setting('site_name');
cms_menu('main');
cms_products(['featured' => true]);
cms_articles(['limit' => 6]);
```

## 模板依赖

如果模板需要三级分类、复杂报价、多语言等能力，必须声明依赖插件。

安装模板时由 CMS：

1. 读取 manifest；
2. 检查依赖；
3. 提示用户；
4. 自动安装或引导安装；
5. 依赖满足后才能启用。

## 升级

模板升级不能删除：

- 用户上传文件
- 模板设置
- 内容数据

模板版本与 CMS Core 独立。
