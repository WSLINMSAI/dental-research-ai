# Dental Research AI

AI in Research (Dental): free practical education for dental researchers using AI responsibly and ethically.

**Website address:** <https://wslinmsai.github.io/dental-research-ai/>

The website is published with GitHub Pages from `main` at the repository root. The complete site also opens locally: download `index.html` and open it in a modern browser. The embedded Excel downloads work offline too.

## What is included

- 12 lessons covering responsible AI, proposals, evidence searching, synthesis, data management, statistics, manuscript writing, editorial checks, figures, submission, peer review, and conference presentations.
- 24 copyable prompt templates, each followed by a complete worked prompt, an illustrative AI response, and a verification step, plus the original dental scenarios and reflection exercises.
- Larger text in relative units: 18px-equivalent lesson text, 16px-equivalent prompts and form inputs, and supporting text generally 14px or larger at the default browser setting. Responsive layouts accommodate the larger type.
- A local prompt builder, reporting-guideline selector, six-question AI disclosure builder with multiple-tool support, and an 18-item submission checklist.
- Six downloadable Excel workbooks. Each includes a Guide, Blank template, and Completed example; the conference workbook includes editable timing formulas.
- Searchable lessons/examples, source filters, printable lessons, and browser-local progress.
- 17 primary guidance and tool links, checked 8 September 2026.

The disclosure builder covers tool names/versions, dates, applications, specific sections, accuracy validation, and privacy/compliance safeguards. It links to the [Journal of Prosthodontics author instructions](https://onlinelibrary.wiley.com/page/journal/1532849x/homepage/forauthors.html), which direct manuscript AI use to Methods. Authors must verify their actual record and the journal's current requirements.

No installation, account, API key, paid model, or external page assets are required. The core site works offline; external source links require internet access.

## Hosting

In repository **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**, and save. The root `index.html` is the complete website. `.nojekyll` tells Pages to serve the static files directly. No paid backend or custom domain is needed.

See [GitHub's Pages setup instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). GitHub Pages supports public repositories on GitHub Free; hosting terms can change.

## Editing

| File | Purpose |
| --- | --- |
| `src/content.js` | Lessons, prompt templates, guidelines, sources, and worksheet titles |
| `src/examples.js` | 24 complete teaching prompts, illustrative responses, and human checks |
| `src/styles.css` | Responsive layout, appearance, and print styles |
| `src/app.js` | Navigation and local tools |
| `src/shell.html` | Page shell, metadata, and navigation |
| `build.py` | Combines the source into the published `index.html` |
| `downloads/*.xlsx` | The six editable Excel workbooks |
| `downloads/workbooks.json` | Workbook filenames, IDs, and example descriptions |

After editing the source, run:

```sh
python3 build.py
```

Commit both the changed source/downloads and the rebuilt root `index.html`. The build embeds the Excel files into the HTML so a standalone backup can download them without a network connection. Pages publishes the file in the repository; it does not run the Python build automatically. Python 3 standard library is sufficient. Hash-based navigation needs no server route configuration.

To edit a workbook, open its `.xlsx` file in Excel or a compatible application, preserve the blank/example separation and formulas, save it back to `downloads/`, and rebuild. Adding a new workbook also requires matching IDs in the catalog and worksheet list.

## Privacy and academic scope

The site makes no AI requests, uploads no files, and has no analytics or advertising. Prompt and disclosure entries are not persisted. Only lesson completion and checklist selections are stored in the browser. Browser settings may limit persistence. Hosting providers and linked external services have their own privacy practices.

The teaching content and illustrative AI responses were prepared with AI assistance and source checks. They have not undergone independent academic peer review and do not award continuing education credit. All worked study scenarios, data, mock sources, event rules, tool records, and completed worksheet actions are hypothetical. Responses are teaching demonstrations, not recorded runs of named external AI tools. They do not prove that a database was searched or code executed. The linked organizations are not represented as sponsors or endorsers.

For institutional use, designate a content maintainer, arrange academic review, and add applicable institutional guidance. Recheck dated journal and conference policies. The tools support author review; they do not certify research quality, regulatory compliance, or readiness for submission.

## Validation

JavaScript syntax, all 24 example records and rendered example markup, source-reference integrity, two-tool disclosure output, stale-draft invalidation, and the absence of external page assets were checked. The six embedded workbook payloads match the downloadable `.xlsx` bytes. All 18 Excel sheets were rendered and visually checked; workbook package integrity and formula-error scans passed, and the sample conference timings total 8 minutes with 0 minutes remaining.

Full browser interaction and website visual tests could not be run in the creation workspace because a browser was unavailable and its download was blocked. Static markup and function checks do not replace native browser layout, form-validity, or download testing. Desktop and phone checks remain recommended before an institutional launch.

## Backup and restoration

The downloadable backup ZIP contains the complete website, editable source, all six Excel workbooks, the workbook catalog, this README, and the original MIT license. Extract it, open `index.html` locally, or upload its contents to the root of a GitHub Pages repository. Preserve `src/` and `downloads/` to make future edits and rebuilds.

## License

This repository uses the MIT license selected by the repository owner; see [LICENSE](LICENSE). Linked third-party guidance and materials retain their respective rights.
