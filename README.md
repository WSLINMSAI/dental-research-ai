# Dental Research AI

AI in Research (Dental): free practical education for dental researchers using AI responsibly and ethically.

**Website address:** <https://wslinmsai.github.io/dental-research-ai/>

The address becomes available after GitHub Pages is enabled and deployment succeeds. The complete site also opens locally: download `index.html` and open it in a modern browser.

## What is included

- 12 lessons covering responsible AI, proposals, evidence searching, synthesis, data management, statistics, manuscript writing, editorial checks, figures, submission, peer review, and conference presentations.
- 24 copyable prompts, 12 hypothetical dental examples, and reflection exercises.
- A local prompt builder, reporting-guideline selector, AI disclosure draft builder, and an 18-item submission checklist.
- Six downloadable worksheets, searchable lessons, source filters, printable lessons, and browser-local progress.
- 16 primary guidance and tool links, checked 8 September 2026.

No installation, account, API key, paid model, or external page assets are required. The core site works offline; external source links require internet access.

## Hosting

In repository **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**, and save. The root `index.html` is the complete website. `.nojekyll` tells Pages to serve the static files directly. No paid backend or custom domain is needed.

See [GitHub's Pages setup instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). GitHub Pages supports public repositories on GitHub Free; hosting terms can change.

## Editing

| File | Purpose |
| --- | --- |
| `src/content.js` | Lessons, prompts, guidelines, sources, and worksheets |
| `src/styles.css` | Responsive layout, appearance, and print styles |
| `src/app.js` | Navigation and local tools |
| `src/shell.html` | Page shell, metadata, and navigation |
| `build.py` | Combines the source into the published `index.html` |

After editing the source, run:

```sh
python3 build.py
```

Commit both the changed source and the rebuilt root `index.html`. Pages publishes the file in the repository; it does not run the Python build automatically. Python 3 standard library is sufficient. Hash-based navigation needs no server route configuration.

## Privacy and academic scope

The site makes no AI requests, uploads no files, and has no analytics or advertising. Prompt and disclosure entries are not persisted. Only lesson completion and checklist selections are stored in the browser. Browser settings may limit persistence. Hosting providers and linked external services have their own privacy practices.

The initial teaching content was prepared with AI assistance and source checks. It has not undergone independent academic peer review and does not award continuing education credit. All dental scenarios are hypothetical. The linked organizations are not represented as sponsors or endorsers.

For institutional use, designate a content maintainer, arrange academic review, and add applicable institutional guidance. Recheck dated journal and conference policies. The tools support author review; they do not certify research quality, regulatory compliance, or readiness for submission.

## Validation

JavaScript syntax, lesson completeness, source-reference integrity, guideline mappings, worksheet content, document-shell identifiers, and the absence of external page assets were checked. Full browser interaction and visual tests could not be run in the creation workspace because a browser was unavailable and its download was blocked. Desktop and phone testing remains recommended before an institutional launch.

## License

This repository uses the MIT license selected by the repository owner; see [LICENSE](LICENSE). Linked third-party guidance and materials retain their respective rights.
