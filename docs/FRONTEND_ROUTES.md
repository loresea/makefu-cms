# 前台多页面路由规范

码科服 CMS 的生产模板必须使用真正的页面路由，不把所有内容塞在首页，也不依赖锚点作为主导航。

## 标准路由

建议 Laravel 正式版使用：

```text
/                         首页
/products                 产品 / 服务列表
/products/{slug}          产品 / 服务详情
/cases                    案例列表
/cases/{slug}             案例详情
/news                     新闻 / 文章列表
/news/{slug}              新闻 / 文章详情
/about                    关于我们
/contact                  联系我们
/search                   站内搜索
```

行业插件可以追加自己的独立路由，例如：

```text
/destinations
/routes/{slug}
/lawyers/{slug}
/designers/{slug}
/courses/{slug}
```

## 首页原则

首页只负责：

- 品牌定位
- 重点产品 / 服务摘要
- 精选案例摘要
- 最新新闻摘要
- 核心优势
- 转化 CTA

“查看全部”必须进入独立列表页。

## 列表与详情

新闻必须具备：

- 新闻列表
- 分类筛选
- 搜索
- 分页
- 独立新闻详情
- 独立 SEO Title / Description / Canonical
- 发布时间 / 作者 / 标签
- 相关内容

产品和案例同样使用列表 + 详情模式。

## 前后台数据映射

每个前台页面都通过 FrontendContentService 获取数据：

```text
首页摘要       -> featured / latest 查询
产品列表       -> products query
产品详情       -> product by slug
案例列表       -> cases query
案例详情       -> case by slug
新闻列表       -> articles query
新闻详情       -> article by slug
关于我们       -> page by slug
联系我们       -> page + form
```

Blade Helper 和 REST API 共用同一服务层，避免前后台两套查询逻辑。

## 草稿预览

后台预览生成 signed URL，例如：

```text
/preview/articles/{id}?expires=...&signature=...
```

草稿预览：

- 新窗口打开
- 仅授权用户 / 签名访问
- noindex, nofollow
- 不需要提前公开发布
