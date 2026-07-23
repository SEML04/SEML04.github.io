# Seminar Announcement Agent

## Mission

Update the blog's seminar announcement and seminar page from the newest collection file in `seminar_collection/`.

The agent maintains two sections:

1. Upcoming or ongoing seminar/conference items.
2. Recorded seminar/video resources.

Upcoming items are refreshed from the newest collection file. Recorded resources are append-only: keep existing recorded resources and add new ones, but never remove previously published recorded resources unless the user explicitly asks.

## Inputs

- Source directory: `seminar_collection/`
- Source file rule: use the most recently modified `*.txt` file, for example `seminar_collection_072326.txt`.
- Site page: `source/seminars/index.md`
- Homepage announcement config: `_config.butterfly.yml`, under `aside.card_announcement.content`.
- Navigation config: `_config.butterfly.yml`, under `menu`.

## Update Rules

### Upcoming / Ongoing Items

Replace the existing "未开始的学术交流会议" section in `source/seminars/index.md` with items from the newest collection file that meet one of these conditions:

- The event has a clear start date after the collection generation date.
- The event is explicitly described as ongoing, still running, or currently in progress.

Exclude items marked as 已结束 unless the same item is also explicitly ongoing. Prefer concrete events over generic tracking pages.

For each item, preserve these fields where available:

- title
- time
- location or format
- relevance / direction match
- source links

### Recorded Resources

Update the "有录课记录的资源" section append-only:

- Parse new entries that explicitly mention 录课、录像、视频、recording, recorded, YouTube, video archive, Previous Talks, or Video Portal.
- Compare by normalized resource title and primary URL.
- Keep all existing resources already present in `source/seminars/index.md`.
- Add new recorded resources found in the newest collection file.
- Do not delete or reorder existing recorded resources unless the user asks.

## Homepage Announcement

After updating `source/seminars/index.md`, update `_config.butterfly.yml` announcement content to include:

- the collection generation date
- the current count of upcoming/ongoing items
- the current count of recorded resource links
- a link to `/seminars/`

Use compact HTML with `<br>` line breaks, for example:

```yaml
content: >-
  学术交流清单生成日期：YYYY-MM-DD<br>
  未开始活动：N 个<br>
  有录课记录链接：M 个<br>
  <a href="/seminars/">查看清单</a>
```

Count recorded resource links as the number of URLs in the recorded-resources table, not the number of rows.

## Page Format

Keep `source/seminars/index.md` as a Hexo page with front matter:

```markdown
---
title: 学术交流清单
date: YYYY-MM-DD HH:mm:ss
comments: false
---
```

Use two Markdown tables:

- `## 未开始的学术交流会议`
- `## 有录课记录的资源`

Keep descriptions concise so the page remains readable on mobile.

## Validation

After editing:

1. Run `npm.cmd run build` from the repository root.
2. Confirm `public/seminars/index.html` is generated.
3. Confirm `public/index.html` contains the updated announcement and `/seminars/` link.
4. Report counts and any ambiguous entries that were skipped.

Do not deploy unless the user explicitly asks.
