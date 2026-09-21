# Contributing

感谢参与码科服 CMS。

## 提交原则

- Core、Theme、Plugin 边界清晰
- PHP 遵循 PSR-12
- 新功能包含 Migration / 校验 / 错误处理
- 不在 Controller / Filament Page 中堆积核心业务
- 不引入非必要重依赖
- 保持 SQLite 与 MySQL 兼容

## Pull Request

PR 应说明：

1. 解决的问题
2. 设计方案
3. 数据库变更
4. 安全影响
5. 测试方式
6. 是否影响模板 / 插件兼容

## Bug 报告

至少提供：

- CMS 版本
- PHP 版本
- 数据库类型
- Web Server
- 错误日志
- 复现步骤
