# Issue tracker: GitHub

本仓库的 issue 和 PRD 使用 GitHub Issues 管理。相关操作统一使用 `gh` CLI。

## Conventions

- **创建 issue**：`gh issue create --title "..." --body "..."`
- **读取 issue**：`gh issue view <number> --comments`
- **列出 issue**：`gh issue list --state open --json number,title,body,labels,comments`
- **评论 issue**：`gh issue comment <number> --body "..."`
- **增删标签**：`gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- **关闭 issue**：`gh issue close <number> --comment "..."`

在当前仓库目录运行命令，由 `gh` 根据 `git remote -v` 自动识别
`masteryijian/band`。

## Pull requests as a triage surface

**PRs as a request surface: no.**

当前不把外部 PR 当作功能请求进入 triage 队列。需要改变时，将上面的
`no` 改为 `yes`。

GitHub 的 issue 和 PR 共用编号空间。遇到单独的 `#42` 时，先运行
`gh pr view 42`，失败后再运行 `gh issue view 42`。

## Skill operations

- 当技能要求“publish to the issue tracker”时，创建 GitHub issue。
- 当技能要求“fetch the relevant ticket”时，运行
  `gh issue view <number> --comments`。
- `/to-tickets` 创建的任务使用 GitHub Issues 及原生 blocking links。
- `/triage` 按 `docs/agents/triage-labels.md` 映射工作状态。
- `/wayfinder` 使用一个 map issue 和多个子 issue 记录决策。

## Wayfinding operations

- **Map**：使用 `wayfinder:map` 标签的单一 issue。
- **Child ticket**：优先使用 GitHub sub-issues；不可用时，在 map 的任务
  列表中引用子 issue，并在子 issue 开头写明 `Part of #<map>`。
- **Blocking**：优先使用 GitHub 原生 issue dependencies；不可用时，在
  issue 开头维护 `Blocked by: #<n>`。
- **Claim**：`gh issue edit <n> --add-assignee @me`。
- **Resolve**：记录结论、关闭 issue，并把结论引用加入 map。
