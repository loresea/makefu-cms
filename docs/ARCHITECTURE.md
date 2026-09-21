# 码科服 CMS 架构边界

## 核心原则

四个层次必须解耦：

1. **CMS Core**：内容模型、业务服务、事件、权限、升级与备份
2. **Admin**：Filament 只负责后台交互，不承载核心业务
3. **Theme**：只负责展示与主题配置，不直接查询数据库
4. **Plugin**：通过事件、Service Provider、Route、Component 扩展，不修改核心源码

## 目录建议

```
app/
  CMS/
  Services/
  Models/
  Filament/
plugins/
themes/
storage/
  database/
  backups/
public/
  uploads/
```

## 数据库原则

- 默认 SQLite
- 可切换 MySQL
- 业务层不得写死数据库方言
- 数据访问统一通过 Eloquent / Service
- 模板禁止直接 DB 查询

## 模板约定

每个模板至少包含：

```
theme.json
preview.png
views/
assets/
config/schema.json
```

模板可以声明：

- CMS 最低版本
- PHP 最低版本
- 依赖插件
- 自定义字段
- 默认菜单 / 页面
- 主题配置项

## 插件约定

插件至少包含：

```
plugin.json
src/
routes/
migrations/
```

插件必须拥有独立版本，并支持生命周期钩子：

- install
- enable
- disable
- update
- uninstall

## 升级边界

Core 更新不得覆盖：

- .env
- storage
- public/uploads
- themes
- plugins
- 用户数据

升级顺序：

1. 下载
2. 校验
3. 备份
4. 维护模式
5. 替换 Core
6. Migration
7. 清缓存
8. 健康检查
9. 完成 / 回滚

## 商业模块

开源 Core 不依赖商业服务才能正常运行。

商业能力通过外部接口提供：

- 主题市场
- 插件市场
- License
- 官方更新源
- 托管与中央管理

即使官方服务不可用，本地站点仍应能继续正常工作。
