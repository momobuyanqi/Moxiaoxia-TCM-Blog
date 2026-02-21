# 🏔️ TCM Museum Blog (tcm-30-media/31-tcm-blog)

> **“让思想在数字世界留下可见的痕迹。”**
> 本项目是“洞穴博物馆”的传播枢纽。它不是一个独立的写作网站，而是整个 Life OS 2.0 系统的“对外展厅”。

---

## 🏗️ 核心逻辑：从 Obsidian 到全球发布

在 TCM Life OS 2.0 中，博客的写作、更新与管理已经完成了一体化的自动化重构：

### 1. 写作入口 (The Entry)
所有的博客写作均在 **Obsidian** 中完成。你不需要在这个项目里创建文件，只需在 `tcm-10-library`（藏书阁）或其他板块中进行创作。

### 2. 分发律令 (The Publish Tag)
通过在 Obsidian 笔记的 YAML 属性中添加 `publish` 标签来控制分发：
```yaml
publish:
  - blog   # 只要带上这个标签，文章就会进入博客流水线
```

### 3. 自动化同步 (The Sync Engine)
我们通过 **`blog-sync.py`** 自动化脚本实现源文件到博客目录的“物理映射”：
- **同步**：脚本扫描整个系统，提取带有 `blog` 标签的文章，自动脱敏并推送到 `src/data/blog`。
- **撤回**：一旦从源文件中移除 `blog` 标签，脚本在下次运行时会自动从博客中删除该文章。

---

## 🚀 运维指南 (Maintenance)

### 内容同步 (Content Sync)
在根目录下运行以下命令（由 AI 协作或手动执行）：
```bash
# 触发系统内笔记向博客的物理同步
python3 "../../tcm-00-constitution/02-automation/2026/02/202602211650-blog-sync.py"
```

### 本地预览 (Local Preview)
```bash
npm run dev
```
访问：`http://localhost:4321`

### 全球发布 (Global Deployment)
内容一旦通过 Git 提交并推送到 GitHub，**Vercel** 将自动完成生产环境的构建与发布。
```bash
git add .
git commit -m "feat: content sync from life os"
git push origin main
```

---

## 🛠️ 技术底座
- **框架**：[Astro](https://astro.build/) (基于 AstroPaper 主题)
- **部署**：Vercel / GitHub
- **同步引擎**：Python Custom Script (TCM Metadata Protocol 2.1)

---
*本 README 随 TCM Life OS 2.0 革命动态更新。*
*记录于：2026-02-21*
 stone
 stone
 stone
 stone
 stone
 stone
 stone
 stone
 stone
 stone
