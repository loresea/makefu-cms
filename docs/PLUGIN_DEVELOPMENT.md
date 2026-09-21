# 插件开发规范

## 原则

插件是功能扩展单元，不得修改 CMS Core 文件。

## 目录

```
plugins/example/
  plugin.json
  src/
  routes/
  migrations/
  resources/
```

## plugin.json

建议字段：

```json
{
  "name": "Example Plugin",
  "slug": "example-plugin",
  "version": "1.0.0",
  "requires": {
    "cms": ">=1.0.0",
    "php": ">=8.3"
  }
}
```

## 生命周期

插件应支持：

- install
- enable
- disable
- update
- uninstall

卸载时是否删除数据必须由用户确认，默认不删除业务数据。

## 扩展方式

使用：

- Event / Listener
- Service Provider
- Middleware
- Route
- View Component
- Filament Extension Point

禁止：

- 修改 Core PHP 文件
- 修改其他插件源码
- 在安装时执行未声明的外部下载
- 在公共上传目录写可执行 PHP

## 商业插件

商业插件可以增加 License 检查，但要求：

- License 服务不可用时给出宽限策略；
- 不得影响 CMS Core 基础功能；
- License Token 不写入公开目录；
- 更新包同样需要签名校验。
