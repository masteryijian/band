# Domain Docs

工程技能探索代码库前，按本文件约定读取领域文档。

## Before exploring, read these

- 仓库根目录的 `CONTEXT.md`。
- 如果根目录存在 `CONTEXT-MAP.md`，按其中的指针读取与当前任务相关的
  `CONTEXT.md`。
- 阅读 `docs/adr/` 中与当前修改相关的架构决策记录。

这些文件尚不存在时静默继续，不需要为了满足目录结构预先创建。
`/domain-modeling`、`/grill-with-docs` 或
`/improve-codebase-architecture` 会在真正形成术语或决策时按需创建。

## File structure

本仓库采用 single-context 布局：

```text
/
├── CONTEXT.md
├── docs/
│   └── adr/
└── 网站源文件
```

## Use the glossary's vocabulary

issue 标题、重构方案、测试名称和代码输出应使用 `CONTEXT.md` 已定义的
领域术语，不要换成词义相近但未经定义的名称。

如果需要的概念不在 glossary 中，应先判断是用词偏离了项目，还是确实
存在需要通过 `/domain-modeling` 补充的领域空白。

## Flag ADR conflicts

如果计划或实现与现有 ADR 冲突，必须明确指出冲突，不得静默覆盖已经
记录的决定。
