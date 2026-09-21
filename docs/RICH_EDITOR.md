# 富文本编辑器规范

文章、页面、产品详情和案例正文必须使用真正的富文本编辑器，不能使用普通 textarea。

码科服 CMS 基于 Filament v4+ 时，优先使用 Filament 原生 RichEditor（底层为 Tiptap），避免再维护一套自研编辑器。

## 必须功能

- Paragraph
- H2 / H3 / H4
- Bold / Italic / Underline / Strike
- 有序 / 无序列表
- 引用
- 链接
- 图片
- 表格
- 水平线
- 撤销 / 重做
- HTML / Source（可选，仅管理员）
- 全屏编辑
- 粘贴清理
- 自动保存草稿
- 字数统计
- 内容修订
- 新窗口真实前台预览

## 图片

编辑器插图必须进入 CMS 媒体库：

1. 选择已有图片；
2. 上传新图片；
3. 保存媒体 ID / 受控 URL；
4. 支持 alt；
5. 前台可输出 width / height；
6. 禁止上传可执行 PHP。

## SEO 内容规范

文章编辑页面右侧或独立 Tab 提供：

- SEO Title
- SEO Description
- Slug
- Canonical
- Index / Noindex
- OG Image
- 发布时间
- 下线时间

## 内容存储

优先使用 Filament RichEditor 推荐的数据格式（HTML 或 JSON），渲染时必须使用对应 RichContentRenderer，不能简单地对数据库内容直接 `{!! !!}` 输出而忽略附件、Block 和安全过滤。
