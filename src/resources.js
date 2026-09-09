const TOOL_REVIEW_DATE = '9 September 2026';
const AI_RESOURCES = [
{
id:'notebooklm',name:'Gemini Notebook (formerly NotebookLM)',category:'Read & extract',
description:'Ask focused questions across a selected set of papers and follow source-linked citations back to the supporting passage. Google renamed NotebookLM in July 2026.',
access:'A free Standard option is available. Usage limits, enhanced features, and account terms vary; check the current plan page.',url:'https://notebook.google/',
sources:[['Source citations','https://support.google.com/gemininotebook/answer/16179559?hl=en'],['Plans and limits','https://support.google.com/gemininotebook/answer/16213268?hl=en'],['Name change','https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/']],
steps:['Create a notebook and add a lawful copy of the paper or a permitted factual summary. Check which sources are selected.','Start with extraction before asking for prose. Open each source citation and compare it with the table or methods.','Keep the verified extraction in your evidence worksheet. Use that checked record as the source pack for manuscript drafting.'],
template:'Using only [selected article], extract [fields] and attach a source citation to each fact. Distinguish [important design feature] from [possible misinterpretation]. Mark unavailable details NOT REPORTED.',
example:worked('Extract the shade study before drafting',['xu'],'Methods and Tables 2–3, PDF pp. 2–6.',
`Tool workflow: Gemini Notebook/NotebookLM source-grounded chat. Use the Xu paper if lawfully uploaded; otherwise use the factual summary above and explicitly identify it as a summary. Extract design, participant count, methods compared, repeated zones, overall ΔE00, clinical thresholds, and missing subjective data. Attach a source citation to every row if the full source is available; never invent citation markers. Finish with two interpretation limits.`,
`Illustrative extraction, based on the verified course source pack:
Design/unit: Paired comparison in 18 volunteers; both methods within volunteer (Methods).
Observation structure: Three zones per method per volunteer (Methods).
Overall ΔE00: ResNet 4.169 ± 2.048; technicians 5.625 ± 1.967; reported p < 0.001 (Results/Table 2).
Clinical threshold: Acceptability 2.8; both overall means exceeded it (Methods/Results).
Subjective cohort: 17 volunteers after one unavailable evaluation (Table 3).
Limits: Statistical improvement does not establish acceptable matching; selected volunteers and restricted materials limit generalization.

In an actual notebook, click the tool’s citation for each row. The location labels here are course references, not simulated clickable citations from a recorded NotebookLM session.`,
'Inspect cited passages, especially table continuation pages. A cited answer can still use the wrong denominator or interpretation.')
},
{
id:'chatgpt',name:'ChatGPT',category:'Write & analyze',
description:'Useful for outlining, editing, code review, and drafting from a controlled source pack. Search and file/data tools can support research tasks, subject to the features available in your account.',
access:'A free tier is available with usage limits. Record the actual model shown during your task; do not assume a permanent model or unlimited uploads.',url:'https://chatgpt.com/',
sources:[['Free-tier features','https://help.openai.com/en/articles/9275245-using-chatgpt-s-free-tier-faq']],
steps:['Give the goal, audience, verified facts, output format, and what must stay unchanged.','Ask for a claim-source table before a manuscript paragraph. Use the checked paragraph as input for the next edit.','For statistics or figures, retain executable code and original inputs, run it in an approved environment, and compare outputs with the source.'],
template:'Using only [verified source pack], draft [section and length] for [audience]. Preserve numbers, units, and citation keys. Return the paragraph plus claim → source → exact location. Do not add references or analyses.',
example:worked('Draft a cited discussion paragraph from two papers',['alfaraj','xu'],'Alfaraj Results/quality, PDF pp. 4 and 13; Xu Results/Discussion, PDF pp. 4–6.',
`Draft an 80–120-word original teaching discussion paragraph connecting broad evidence quality with one specific shade-matching evaluation. Use citation keys Alfaraj-2026 and Xu-2026, with DOI mappings. Do not claim that the umbrella review included this 2026 shade paper, because its search ended in April 2025. Do not describe the papers as measuring the same outcome. Return a claim-source map after the paragraph.`,
`An umbrella review of AI applications in prosthodontics and implant dentistry found an uneven evidence base, with six of 11 included reviews rated critically low by AMSTAR 2 (Alfaraj-2026). A separate 2026 paired evaluation provides a task-specific example: ResNet yielded lower overall gingival color differences than technician shade matching, but both means exceeded the study’s acceptability threshold (Xu-2026). These findings support separating technical improvement from clinical adequacy. The shade study was published after the umbrella review’s search period and should be discussed as subsequent evidence, not as one of its included studies.

Claim map:
Review quality → Alfaraj-2026 → PDF p. 13 → 10.1111/jopr.70091.
Shade result/threshold → Xu-2026 → Results/Discussion, PDF pp. 4–6 → 10.1111/jopr.70151.
Chronology → Alfaraj search ended April 2025; Xu published 2026 → source metadata/methods.

Import both DOI records into Zotero and apply the journal’s citation style after checking the original passages.`,
'Check temporal relationships as well as numerical claims. A later study cannot be an included source in an earlier search.')
},
{
id:'clinicians',name:'ChatGPT for Clinicians',category:'Clinical evidence',
description:'A clinician-focused version of ChatGPT with clinical search, citations, and deeper literature review. It can help frame research questions and examine how evidence applies to a clinical claim.',
access:'Free for eligible verified U.S. clinicians. The current official list includes MD/DO physicians, NPs, PAs, and pharmacists; it does not list dentists. Verify eligibility directly. Ordinary ChatGPT remains a separate option for researchers.',url:'https://help.openai.com/en/articles/20001202-chatgpt-for-clinicians',
sources:[['Features and eligibility','https://help.openai.com/en/articles/20001202-chatgpt-for-clinicians']],
steps:['If eligible, start with a general research question without patient identifiers. Specify population, comparison, outcome, and the type of evidence needed.','Ask for citations and a distinction between laboratory findings, clinical outcomes, and recommendations. Open the cited articles.','Save verified references and exact claim support. Confirm institutional authorization before any sensitive-data workflow; a product label alone does not establish permission.'],
template:'For [research question], distinguish [laboratory/clinical] evidence and measured outcomes. Provide verified original-source citations with study design, sample, and limitations. State when evidence is unavailable; do not turn the answer into patient-specific advice.',
example:worked('Turn a laboratory finding into a clinical research question',['ishiguro','azpiazu'],'Ishiguro Methods/Table 2; Azpiazu-Flores Clinical report/Discussion.',
`Using only the two source packs, answer this research question: Do these papers establish that laboratory scanning improves long-term survival of complete-arch implant prostheses compared with intraoral scanning? Give a direct answer, study-design comparison, citations, and a more answerable follow-up research question. This is research appraisal, not advice for an individual patient. Do not claim a live literature search.`,
`No. Ishiguro et al. compared binary fit in 60 laboratory prostheses from one cast; long-term patient survival was not measured (10.1111/jopr.70218, Methods/Table 2). Azpiazu-Flores et al. reported one patient with a hybrid workflow and one-year observations; there was no control group (10.1111/jopr.70167, Clinical report/Discussion).

A follow-up research question could be: In patients receiving complete-arch implant-supported fixed prostheses, how do prespecified scan/fabrication workflows compare in objectively measured fit and prospectively defined clinical outcomes? A prospective protocol must define the comparator, independent patient unit, follow-up, confounding control, and sample-size rationale.

This is an illustrative appraisal of supplied sources, not a retrieved ChatGPT for Clinicians answer or evidence of a completed clinical comparison.`,
'Check access eligibility and cited primary studies. Neither internal fit nor one case establishes long-term comparative survival.')
},
{
id:'openevidence',name:'OpenEvidence',category:'Clinical evidence',
description:'A clinical question-answering resource with linked medical literature. It is useful for orienting a question and following citations into original studies; assess coverage of the specific dental topic.',
access:'The provider’s app listing describes free access for verified U.S. clinicians. Eligibility and regional access require confirmation through the service.',url:'https://www.openevidence.com/',
sources:[['Provider’s app description','https://apps.apple.com/us/app/openevidence/id6612007783']],
steps:['Ask a focused research question and specify the dental outcome rather than a broad “AI in dentistry” request.','Ask which statements come from primary studies, reviews, or inference. Follow every relevant citation to the journal page or PubMed record.','Export or record the verified DOI/title and supporting passage in your evidence worksheet. A clinical answer is not an exhaustive systematic-review search.'],
template:'What primary evidence addresses [population/task, comparator, outcome]? For each source give title, year, DOI/PMID if verified, design, sample, estimate, and limitations. Separate direct evidence from extrapolation. Do not invent missing citations.',
example:worked('Ask for evidence without losing the clinical threshold',['xu'],'Methods/Results, PDF pp. 2–5.',
`Tool workflow: OpenEvidence clinical-literature question. Is there clinical evidence that AI improves gingival porcelain shade matching compared with experienced dental technicians, and does improvement meet a stated acceptability threshold? Start by checking the known Xu article (DOI 10.1111/jopr.70151). Separate verified primary evidence from broader claims. Return design, participants, overall result, threshold interpretation, and original-source citation. If the paper or additional evidence cannot be retrieved, state that; do not fabricate other references. The fact pack above can be used for a source-based teaching answer without claiming retrieval.`,
`Illustrative source-based answer, not an OpenEvidence search transcript:
Xu et al. evaluated paired technician and ResNet specimens in 18 volunteers. ResNet had lower reported overall ΔE00 (4.169 ± 2.048 versus 5.625 ± 1.967; p < 0.001), but both overall means exceeded the acceptability threshold of 2.8. This supports improvement under the tested conditions, not universal clinical acceptability.
Primary citation: Xu B, Wang Y, Zhang L, Lin WS, Tan J, Chen L. Performance of a residual neural network system versus dental technicians for gingival porcelain shade matching. Journal of Prosthodontics. 2026. DOI 10.1111/jopr.70151.
Additional evidence: Not retrieved in this demonstration. Any references returned by a live service must be opened and verified before entering a manuscript.`,
'Confirm the service can access the specific paper. Record full-text versus abstract-only support and do not treat an unanswered query as proof that no study exists.')
},
{
id:'elicit',name:'Elicit',category:'Read & extract',
description:'Supports research discovery, paper summaries, and structured extraction. Use it to build a candidate evidence table, then verify each row against the paper.',
access:'A free Basic plan is available; advanced review workflows, exports, and higher usage may require an upgrade. Check the current plan for the task you need.',url:'https://elicit.com/',
sources:[['Research features','https://elicit.com/industries/edu'],['Current plans','https://elicit.com/pricing']],
steps:['Start with a natural-language discovery question. Record the date, query, filters, and what the service searched.','Select candidate papers and define extraction columns that preserve study design, denominator, metric, and source location.','Verify rows manually and retain inclusion/exclusion decisions. Use a reproducible database search alongside discovery when completeness is required.'],
template:'Find candidate studies for [focused question]. Extract design, independent unit, outcome, estimate, uncertainty, and source location. Distinguish primary studies from reviews; mark missing details NOT REPORTED. Do not assume semantic search is exhaustive.',
example:worked('Create an extraction row for an AI umbrella review',['alfaraj'],'Methods/Results, PDF pp. 2–4; quality/overlap, PDF p. 13.',
`Discovery question to enter in Elicit: “What systematic or umbrella reviews evaluate artificial intelligence in prosthodontics and implant dentistry?” This example does not execute that search. For the known Alfaraj article, use the verified pack to show an extraction row with type, search window, included reviews, unique studies, quality, overlap, and supported conclusion. Show how to keep a review separate from primary-study rows; never invent an export or search count.`,
`Example extraction row for a known source, not an Elicit search result:
Source: Alfaraj et al., DOI 10.1111/jopr.70091.
Type: Umbrella review; do not classify as a primary trial.
Search: April 2025; review eligibility 2018–30 April 2025.
Included reviews: 11.
Unique primary studies: 261, represented by 281 citations across reviews.
AMSTAR 2: 4 high; 1 low; 6 critically low.
Overlap: Overall CCA 0.77%; task-level overlap requires separate assessment.
Conclusion supported: The paper maps a heterogeneous evidence base with important quality limitations; it does not provide one pooled estimate of clinical AI effectiveness.

Keep the original review row identifiable when following its references to primary studies. Deduplicate primary records before synthesis to avoid counting the same study through multiple reviews.`,
'Review the full-text extraction and distinguish a discovery aid from the documented systematic-search record.')
}
];
