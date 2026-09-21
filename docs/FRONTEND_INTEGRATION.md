# 前台接入规范

码科服 CMS 的前台、Blade 模板、独立前端、小程序统一通过 **FrontendContentService / Helper / REST API** 获取同一套内容数据。

## PHP / Blade Helper

```php
cms_site('site_name');
cms_menu('main');
cms_banners('home_hero');
cms_page('about');
cms_articles(['limit' => 6, 'recommended' => true]);
cms_products(['limit' => 8, 'category' => 'laser']);
cms_cases(['limit' => 6]);
cms_block('global-cta');
cms_form('contact');
```

模板禁止直接使用 `DB::table(...)` 或自己写 Model 查询；复杂查询统一扩展 `FrontendContentService`。

## REST API v1

开启 `CMS_API_ENABLED=true` 后：

```text
GET /api/v1/site
GET /api/v1/menus/main
GET /api/v1/banners/home_hero
GET /api/v1/pages
GET /api/v1/pages/{slug}
GET /api/v1/articles
GET /api/v1/articles/{slug}
GET /api/v1/products
GET /api/v1/products/{slug}
GET /api/v1/cases
GET /api/v1/cases/{slug}
GET /api/v1/forms/{slug}
GET /api/v1/blocks/{slug}
GET /api/v1/search?q=keyword
```

列表接口支持分页、分类、搜索、推荐筛选。Blade 页面和 REST API 共用同一查询层，发布状态、分类树、定时发布和到期下线逻辑只维护一份。

## 草稿预览

后台页面、文章、产品、案例的“预览”使用：

- 登录态
- Laravel Signed URL
- 30 分钟有效
- 新窗口打开
- `X-Robots-Tag: noindex, nofollow`

因此草稿不需要先公开发布就可以查看真实前台效果。

## 内容区块

后台可以维护 Hero、CTA、数据统计、合作伙伴等可复用区块。

```php
$cta = cms_block('global-cta');
```

或：

```text
GET /api/v1/blocks/global-cta
```

## Webhook

第一阶段事件：

```text
form.submitted
theme.activated
cms.updated
```

配置 Secret 后请求包含：

```text
X-Makefu-Event
X-Makefu-Signature: sha256=...
```

签名为完整 JSON Body 的 HMAC-SHA256。
