# Repository Guidelines

## Project Structure & Module Organization

This repository is a Hexo static blog. Site-wide settings live in `_config.yml`; the active Butterfly theme settings live in `_config.butterfly.yml`. Blog posts are Markdown files in `source/_posts/`, while drafts belong in `source/_drafts/`. Static pages such as the about page live under `source/about/`, `source/categories/`, and `source/tags/`. Images and post assets are stored under `source/image/` and theme or global assets are under `themes/` and `public/`. The `public/` directory is generated output; avoid editing it by hand unless debugging generated files.

## Build, Test, and Development Commands

- `npm run server`: starts the local Hexo preview server.
- `npm run build`: generates the static site into `public/`.
- `npm run clean`: clears generated Hexo artifacts.
- `npm run deploy`: deploys generated output using the Hexo git deployer.
- `./preview.sh`: generates the site and starts local preview on port 4000.
- `./deploy.sh` or `./deploy_c.sh`: commits source changes, generates pages, and deploys.

Run commands from the repository root.

## Coding Style & Naming Conventions

Use UTF-8 Markdown for posts and YAML for configuration. Keep post filenames lowercase, descriptive, and hyphen-separated, for example `maynard-sieve-method.md`. Preserve existing front matter fields such as `title`, `date`, `categories`, and `tags`. Prefer concise Markdown, KaTeX-compatible math syntax, and relative asset paths that match the existing `source/image/<post-name>/` pattern.

## Testing Guidelines

There is no automated test suite configured. Before publishing, run `npm run clean` and `npm run build` to catch generation errors. For visual checks, run `npm run server` and inspect affected pages, math rendering, images, navigation, local search, and theme widgets. If changing scripts or theme templates, verify both home and post pages.

## Commit & Pull Request Guidelines

Recent history uses short deployment-style commits such as `update post`. Keep commits focused and imperative, for example `update sieve notes` or `fix math rendering config`. Pull requests should summarize changed posts or config files, include screenshots for visual/theme changes, and mention any generated-site verification performed.

## Security & Configuration Tips

Do not commit private keys, tokens, or local machine paths. Keep deployment configuration in `_config.yml` aligned with the GitHub Pages remote and branch. Treat `node_modules/`, `public/`, and `.deploy_git/` as generated or dependency directories unless a task specifically requires inspecting them.
