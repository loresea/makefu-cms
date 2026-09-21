# 部署指南

## 环境要求

- PHP 8.3+
- PDO SQLite（默认）
- PDO MySQL（可选）
- OpenSSL
- Fileinfo
- ZIP
- Sodium
- JSON
- Mbstring
- Curl
- Web 服务器可将站点根目录指向 `public/`

## SQLite 默认部署

目标流程：

1. 上传源码；
2. Web 根目录指向 `public/`；
3. 访问域名；
4. 进入安装向导；
5. 系统检查环境；
6. 自动创建 `storage/database/database.sqlite`；
7. 执行 Migration；
8. 创建管理员；
9. 安装默认模板；
10. 写入安装锁。

SQLite 数据库与备份目录禁止暴露到 Web 根目录。

## MySQL 部署

可以首次安装时选择 MySQL，也可以在 SQLite 运行后从后台执行迁移。

SQLite → MySQL 迁移必须：

1. 自动备份 SQLite；
2. 测试 MySQL 连接；
3. 创建目标表；
4. 按依赖顺序迁移；
5. 校验表记录数量；
6. 校验关键关联；
7. 仅在全部成功后修改连接；
8. 失败时保持 SQLite 继续运行。

## 虚拟主机

最低要求：

- 能选择 PHP 8.3+
- 支持 URL Rewrite
- 可修改目录写权限
- 支持 SQLite 扩展
- 站点运行目录可以指向 `public/`

如果不能将运行目录指向 `public/`，需要提供兼容部署方案，但绝不能把 `.env`、SQLite、备份文件公开到 Web。

## 云服务器

推荐：

- Nginx / Apache
- PHP-FPM
- HTTPS
- Scheduler / Cron
- 日志轮转
- 异地备份

## 上线检查

- `APP_DEBUG=false`
- HTTPS 正常
- 上传目录禁止执行 PHP
- 数据库 / 备份不可公开下载
- 后台登录限流开启
- 自动备份开启
- 更新签名验证开启
- 运行系统健康检查
