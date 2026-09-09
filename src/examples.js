/* Original teaching reconstructions based on the five author-supplied JOP PDFs. */
const EXAMPLE_NOTE = 'Published facts come from the linked articles. These complete prompts and illustrative AI responses were created for this course; they are not the authors’ original prompts, real peer reviews, or recorded runs of named AI tools. Proposed studies, altered practice text, and imagined comments are explicitly identified as exercises.';
const ARTICLES = {
alfaraj:{short:'Alfaraj et al. · AI umbrella review',title:'Harnessing AI in prosthodontics and implant dentistry: An umbrella review of systematic evidence',citation:'Alfaraj A, Limones Á, Ahmad S, Aljubairah F, Albalaw S, Albesher M, et al. Journal of Prosthodontics. 2026;35(2):127–142.',doi:'10.1111/jopr.70091',url:'https://onlinelibrary.wiley.com/doi/full/10.1111/jopr.70091',design:'Umbrella review of systematic reviews',location:'Methods/Results, PDF pp. 2–4 (journal pp. 128–130); quality and overlap, PDF p. 13 (journal p. 139).',facts:'Eleven systematic reviews were included. Searches were conducted in April 2025; eligible reviews were published from 1 January 2018 through 30 April 2025. Databases: PubMed, Scopus, Web of Science, Embase, Cochrane Database of Systematic Reviews. The review followed PRIOR 2022 and reported PROSPERO CRD420251067048. Flow: 207 records retrieved; 186 after deduplication; 165 excluded at title/abstract; 21 full texts assessed; 10 full texts excluded; 11 reviews included. There were 281 primary-study citations representing 261 unique primary studies; overall corrected covered area (CCA) was 0.77%. AMSTAR 2: 4 high, 1 low, 6 critically low. Heterogeneity prevented an across-review meta-analysis. For tooth-shade selection, two reviews relied on the same single primary study (task-level CCA 1.00).',takeaway:'Review counts, unique studies, and patients are different units. Low overall overlap does not establish independent evidence for every task.',modules:['evidence','synthesis','editing']},
azpiazu:{short:'Azpiazu-Flores et al. · Clinical case report',title:'Implementing 3D-printed indexing devices and contemporary scanning techniques for complete-arch implant-supported rehabilitations: A clinical case report',citation:'Azpiazu-Flores FX, Phuckdeedindan M, Aldosari AM, Yang CC, Morton D, Lin WS. Journal of Prosthodontics. 2026. Early View; supplied PDF pp. 1–11.',doi:'10.1111/jopr.70167',url:'https://onlinelibrary.wiley.com/doi/10.1111/jopr.70167',design:'Single-patient clinical case report',location:'Clinical report, PDF pp. 2–7; Figure 11, PDF p. 8; Discussion/Summary, PDF p. 9.',facts:'A 68-year-old man underwent staged complete-arch rehabilitation with six maxillary and six mandibular implants. A hybrid workflow combined a custom 3D-printed hexagonal indexing device, CBCT anatomy, articulated diagnostic casts, milled PMMA interim prostheses, and monolithic zirconia definitive prostheses. Maxillary acquisition used individual nonsplinted scan bodies; mandibular acquisition used a splinted OptiSplint system, with verification casts. One-year observations described satisfactory fit and occlusion, healthy peri-implant tissues, and stable bone levels. There was one patient and no control group. The two arches were not randomized comparison arms. Comparative accuracy, time, and cost advantages were not quantified in this case.',takeaway:'Detailed clinical implementation can demonstrate feasibility without proving comparative superiority.',modules:['foundations','synthesis','submission','peer-review']},
ishiguro:{short:'Ishiguro et al. · Laboratory factorial study',title:'Effects of scanner type and prosthesis design–luting protocol combinations on the passive fit of interim implant-supported complete-arch fixed dental prostheses',citation:'Ishiguro D, Omar MS, Lin WS, Nagai T. Journal of Prosthodontics. 2026. Early View; supplied PDF pp. 1–9.',doi:'10.1111/jopr.70218',url:'https://onlinelibrary.wiley.com/doi/abs/10.1111/jopr.70218',design:'2 × 3 factorial in vitro study',location:'Methods, PDF pp. 2–5; Tables 1–2, PDF pp. 5–6; limitations, PDF p. 7.',facts:'One maxillary edentulous master cast had four parallel multiunit abutment analogs. The same splinted OptiSplint assembly was scanned extraorally with TRIOS 4 (intraoral scanner, IOS) and E4 (laboratory scanner), ten scans per device without repositioning the assembly. Two scanners and three design–luting combinations yielded 60 PMMA prostheses, ten per group. Table 2 fit/misfit counts: G1 IOS–Ti-base Freehand 7/3; G2 IOS–Ti-base on Cast 10/0; G3 IOS–Direct-to-MUA 0/10; G4 Lab–Ti-base Freehand 10/0; G5 Lab–Ti-base on Cast 10/0; G6 Lab–Direct-to-MUA 10/0. Fit was a binary screw-resistance assessment. Initial examiner agreement: 59/60 (98.3%), κ = 0.95. Table 2 Fisher comparisons: G1 versus G3 p = 0.003; G3 versus G6 p < 0.001. Sixty prostheses are not 60 patients or independent casts. Source scans may connect specimens across designs; the original mapping is needed for any new dependence-aware analysis.',takeaway:'Preserve the experimental unit: six groups of ten prostheses produced from one master cast.',modules:['proposal','statistics','manuscript','editing','figures','conference']},
omar:{short:'Omar et al. · Articulation proof of concept',title:'Virtual articulation using sequential mandibular intraoral scans and computational functional rotation reference determination—Proof-of-concept',citation:'Omar MS, Yang CC, Morton D, Lin WS. Journal of Prosthodontics. 2026. Early View; supplied PDF pp. 1–8.',doi:'10.1111/jopr.70188',url:'https://onlinelibrary.wiley.com/doi/10.1111/jopr.70188',design:'Computational technique / single-case proof of concept',location:'Technique, PDF pp. 2–6; Figure 8 and Discussion, PDF p. 7.',facts:'Sequential mandibular scans came from one representative case. Six leaf-gauge conditions were 2, 5, 7, 10, 15, and 20 leaves (0.2, 0.5, 0.7, 1.0, 1.5, and 2.0 mm). The 0.2-mm computational baseline was not maximal intercuspation. Mandibular positions were aligned to a fixed maxillary reference with identical mesh topology. Four landmarks established orientation; a minimal-displacement search and principal-component line fit determined a functional rotation reference. Compatibility was demonstrated with Denar Mark 330, Artex CR, and Stratos 300 coordinate systems. The paper reported average RMSD of 0.14 mm in internal forward validation against captured scan positions. This was not external ground-truth occlusal error or an independently established anatomical hinge axis. Larger cohorts and interoperator/inter-scanner reproducibility remain to be studied.',takeaway:'Internal agreement supports a proof of concept; independent clinical validation asks a different question.',modules:['proposal','data','figures','peer-review']},
xu:{short:'Xu et al. · Clinical AI shade evaluation',title:'Performance of a residual neural network system versus dental technicians for gingival porcelain shade matching',citation:'Xu B, Wang Y, Zhang L, Lin WS, Tan J, Chen L. Journal of Prosthodontics. 2026. Early View; supplied PDF pp. 1–7.',doi:'10.1111/jopr.70151',url:'https://onlinelibrary.wiley.com/doi/full/10.1111/jopr.70151',design:'Paired human-participant AI performance evaluation',location:'Methods, PDF pp. 2–4; Results and Tables 2–3, PDF pp. 4–6; Discussion, PDF p. 6.',facts:'Eighteen periodontally healthy adult volunteers without gingival pigmentation each received technician and ResNet shade-matching specimens. Three adjacent 1 × 3 mm² gingival zones (upper, middle, lower) were assessed per method per volunteer. CIEDE2000 ΔE00 is dimensionless. Overall mean ± SD: ResNet 4.169 ± 2.048; technicians 5.625 ± 1.967; reported p < 0.001. Upper-zone means: 5.511 versus 6.129 (p = 0.317); middle: 3.486 versus 5.724 (p < 0.001); lower: 3.509 versus 5.023 (p = 0.007), always ResNet first. Acceptability threshold: 2.8; perceptibility threshold: 1.1. Both overall means exceeded 2.8. Objective measurements involved 18 volunteers; subjective evaluation involved 17 after one loss to follow-up. Methods were paired and zones repeated, not two independent groups of 18 people. Two experienced technicians and four porcelain powders were involved; generalization to other systems or gingival conditions is limited.',takeaway:'A statistically lower color difference does not, by itself, establish acceptable color matching.',modules:['foundations','data','statistics','manuscript','conference']}
};
function articleSourceText(ids){return ids.map(id=>{const a=ARTICLES[id];return `${a.title}\n${a.citation}\nDOI: ${a.doi}\nJournal page: ${a.url}\nDesign: ${a.design}\nSource locations: ${a.location}\nVerified published facts: ${a.facts}`;}).join('\n\n');}
function worked(title,articleIds,location,task,answer,verify){return {title,articleIds,location,filled:`ROLE AND MATERIALS\nYou are a dental research learning assistant. Use the verified source pack below. Do not infer access to missing data, approvals, or the authors’ actual AI use. Any requested search strategy is unexecuted unless explicitly stated otherwise.\n\n${articleSourceText(articleIds)}\n\nCOMPLETE TASK\n${task}`,answer:`ILLUSTRATIVE AI RESPONSE — course demonstration\n\n${answer}\n\nSources: ${articleIds.map(id=>`${ARTICLES[id].short}; DOI ${ARTICLES[id].doi}`).join('; ')}.\nLocation: ${location}`,verify};}
const WORKED_EXAMPLES = {
foundations:[
worked('Plan AI assistance for the clinical case',['azpiazu'],'Clinical report and Discussion, PDF pp. 2–9.',
`Create an AI-use plan for a journal-club explanation of this published case for dental residents. Return task / permitted input / human check / owner, then log fields. Available material is the factual summary above, not patient scans or images. Requested tasks: workflow outline, claim checking, and discussion questions. No authorization for cloud processing of clinical records is supplied. Do not imply the authors used AI in their report.`,
`Task | Permitted input | Human check | Owner
Workflow outline | Published fact summary | Check arch-specific acquisition, verification, and one-year follow-up | Prosthodontic faculty reviewer
Claim checking | Original teaching paragraph and source pack | Remove unsupported accuracy, cost, or speed claims | Lead presenter
Discussion questions | Published design and limitations | Distinguish one case from comparative evidence | Methods tutor

Keep original CBCT data, scans, photographs, and confidential correspondence within their authorized workflow. Publication does not itself authorize new cloud processing.

Log actual tool/provider and model/version, date, task, input category, prompt/output references, slide or paragraph locations, checks performed, corrections, reviewer, and privacy safeguards. Record an unavailable model version as unavailable rather than guessing. Obtain institutional guidance before expanding the input set.`,
'Compare the outline with the article and assign actual reviewers. Record only AI uses and safeguards that really occurred.'),
worked('Challenge an overstated shade-matching answer',['xu'],'Results/Table 2, PDF pp. 4–5; Discussion, PDF p. 6.',
`Audit this deliberately invented practice answer, not an article quotation: “The ResNet clinically solved shade matching in 36 independent patients. Its ΔE00 of 4.169 µm was lower than 5.625 µm, so it met clinical acceptability. The upper zone was equivalent because p = 0.317.” Return claim, verdict, correction, and a replacement paragraph.`,
`“36 independent patients” — incorrect: 18 volunteers contributed both methods, with repeated zones.
“ΔE00 … µm” — incorrect: ΔE00 is dimensionless.
“met clinical acceptability” — unsupported: both overall means exceeded 2.8.
“upper zone was equivalent” — unsupported: a nonsignificant difference is not an equivalence finding.

Replacement: In this paired evaluation of 18 volunteers, overall ΔE00 was lower for ResNet than for technician shade matching (4.169 ± 2.048 versus 5.625 ± 1.967; p < 0.001). Both overall means exceeded the acceptability threshold of 2.8. The upper-zone difference was not statistically significant; equivalence was not established.`,
'Verify the denominator, units, thresholds, and comparison direction in the original Methods and Results.')
],
proposal:[
worked('Reconstruct a proposal from the laboratory design',['ishiguro'],'Materials and Methods, PDF pp. 2–5; Table 2, PDF p. 6.',
`This is a retrospective proposal-writing exercise about an already published study. Outline question, design, experimental unit, measurement, analysis issues, bias controls, and an invented 8-week teaching timetable. Use the reported one cast, two scanners, three combinations, and 60 prostheses. Do not use observed outcomes as prospective sample-size assumptions. List decisions still needed for a real replication.`,
`Question: In the specified master-cast setup, how does passive-fit classification vary across scanner and design–luting combinations?
Design: A 2 × 3 in vitro arrangement; 60 PMMA prostheses, ten per group, from one four-abutment cast.
Unit: Prosthesis-level fit assessment. Map specimens to source scans and the shared cast to identify dependence.
Outcome: Binary screw-resistance fit/misfit; retain examiner ratings separately from adjudicated outcomes.
Bias controls: Document calibration, unchanged assembly, fabrication order, environment, examiner calibration, and any masking actually used. Do not assume unreported procedures.
Analysis: Preserve reported descriptive counts and intended Fisher comparisons. A new replication needs a statistician’s plan for dependence, multiplicity, and scanner-by-combination effects.
Sample size: Ten per cell describes the published study; a new study needs its own power or precision justification.
Invented timetable: weeks 1–2 source/protocol review; 3–4 measurement/provenance plan; 5–6 mock analysis of published counts; 7–8 reporting review. No new specimens are collected.
Replication decisions: independent casts, scan-to-prosthesis mapping, fit criteria, failures/exclusions, sample-size inputs, and institutional determination for the actual specimen source.`,
'Keep the retrospective exercise separate from a prospective protocol; obtain complete methods and the original specimen mapping.'),
worked('Find gaps in an external-validation proposal',['omar'],'Technique and Discussion, PDF pp. 2–7.',
`Review this invented follow-up outline: “Recruit 20 adults; collect six positions per adult using two operators; compare the algorithm with a facebow; average all errors and report one p value; finish in six months.” Twenty adults and six months are teaching assumptions, not justified choices. Return section, missing decision, consequence, and owner. Use the published internal validation as background only.`,
`Validation | Define an independent reference and whether the endpoint is pose, rotation reference, or occlusal error | A facebow label does not define ground truth | Prosthodontic methods lead
Sample size | Justify independent participants with a meaningful precision target and variance inputs | Six positions are not six independent patients | Statistician
Acquisition | Specify operator order, repeats, calibration, and alignment | Operator and alignment effects may be confounded | Scanning lead
Analysis | Account for positions/operators within participant and define the primary contrast | One pooled mean hides dependence and variability | Statistician
Failures | Define unusable scans, alignment failures, and exclusions | Selective removal can bias results | Principal investigator
Governance | Specify consent, approvals, storage, and permitted processing | Published feasibility does not authorize the new study | Research office

The reported internal RMSD of 0.14 mm motivates further work; it is not automatically an external clinical accuracy target.`,
'Resolve the reference standard and sampling unit before a power calculation or recruitment.')
],
evidence:[
worked('Draft an update search for the umbrella review',['alfaraj'],'Search methods, PDF pp. 2–3; Results, PDF p. 4.',
`Question: What systematic reviews evaluate AI in prosthodontics and implant dentistry? Draft a PubMed starting strategy for an update planned on 9 September 2026, without running it. Include AI and prosthodontic concepts, an optional review filter, and verification steps. Apply no date restriction yet; indexing and publication dates need librarian review. The published April 2025 search is background, not your executed search.`,
`UNTESTED PUBMED DRAFT
("Artificial Intelligence"[Mesh] OR "machine learning"[tiab] OR "deep learning"[tiab] OR "neural network"[tiab] OR "neural networks"[tiab])
AND
("Prosthodontics"[Mesh] OR "Dental Implants"[Mesh] OR prosthodontic*[tiab] OR "dental prosthesis"[tiab] OR "dental prostheses"[tiab] OR "implant dentistry"[tiab] OR "digital dentistry"[tiab] OR "CAD/CAM"[tiab])

Optional review block to test:
AND ("Systematic Review"[Publication Type] OR "systematic review"[tiab] OR "systematic reviews"[tiab] OR "meta-analysis"[tiab])

Verify candidate MeSH headings and PubMed translation details. Test retrieval of known relevant reviews before adding restrictions. Translate syntax separately for Scopus, Web of Science, Embase, and Cochrane with a librarian.

Log database/platform, complete executed query, run date, limits, actual count, export filename, deduplication, and searcher/reviewer. No search was run here; no updated count is available.`,
'Test recall and database-specific syntax with a librarian; an AI-generated query is not an executed comprehensive search.'),
worked('Match articulation claims to the validation performed',['omar'],'Figure 8 and Discussion, PDF p. 7.',
`Check these claims: A. “Reported average internal RMSD was 0.14 mm.” B. “Clinical occlusal error was 0.14 mm against an independent reference.” C. “Three articulators represent three externally validated patient cohorts.” Give claim, location, sample/design, verdict, and correction. Do not invent quotations or retrieve additional papers.`,
`A | Figure 8/Discussion, p. 7 | Single-case proof of concept | SUPPORTED with scope retained: the paper reports internal forward-validation RMSD against captured scan positions.
B | Discussion, p. 7 | Same case | NOT SUPPORTED: external ground-truth clinical occlusal error was not established.
C | Figure 9/Discussion, p. 7 | One case; three coordinate systems | NOT SUPPORTED: Denar Mark 330, Artex CR, and Stratos 300 demonstrate workflow adaptability, not three cohorts.

Teaching sentence: The technique demonstrated internal agreement and compatibility with three virtual articulator coordinate systems in a single-case proof of concept; independent clinical validation remains necessary.`,
'Open the exact passage and distinguish systems tested, positions measured, and participants studied.')
],
synthesis:[
worked('Extract a review without mixing denominators',['alfaraj'],'Results, PDF p. 4; quality and overlap, PDF p. 13.',
`Complete an extraction row: design, included units, search time, synthesis, quality, overlap, uncertainty, and limitations. Preserve 11 reviews versus 281 citations versus 261 unique studies. Do not treat any as patient counts. Explain why low overall CCA does not guarantee independence for every task.`,
`Design: Umbrella review of systematic reviews.
Units: 11 reviews; 281 primary-study citations representing 261 unique studies. Patient total: NOT REPORTED in the source pack.
Search: April 2025; eligible reviews published 1 January 2018–30 April 2025.
Synthesis: Descriptive/narrative; heterogeneity prevented an across-review meta-analysis.
Quality: AMSTAR 2 ratings were 4 high, 1 low, and 6 critically low.
Overlap: Overall CCA 0.77%. Tooth-shade selection had two reviews of the same single primary study, giving task-level CCA 1.00.
Uncertainty: No common pooled clinical effect or confidence interval was estimated across reviews. Do not manufacture one from heterogeneous task metrics.
Interpretation: Examine evidence quantity, independence, and quality separately for each AI task.
Locations: Counts/synthesis, PDF p. 4; quality and task-level overlap, PDF p. 13.`,
'Reconcile counts and definitions. Trace performance estimates to their particular included review and primary task.'),
worked('Compare laboratory evidence with a clinical case',['ishiguro','azpiazu'],'Ishiguro Table 2, PDF p. 6; Azpiazu-Flores Discussion/Summary, PDF p. 9.',
`Compare the two studies on design, unit, comparison, outcome, observed finding, and limits. Then write a synthesis of no more than 80 words. Do not pool them or treat the two arches in the case as randomized arms.`,
`Ishiguro: Factorial in vitro study; 60 prostheses from one master cast, ten per combination. Binary fit assessment compares scanner/design–luting workflows. IOS groups had 3, 0, and 10 misfits; laboratory groups had none observed. It cannot establish patient outcomes or zero population risk.

Azpiazu-Flores: One clinical case; hybrid workflow with arch-specific acquisition and verification casts. Favorable one-year observations illustrate implementation. The study cannot isolate comparative effects of splinting, scanner choice, or indexing.

Synthesis: The laboratory study identifies workflow-dependent fit differences in a controlled cast setup, while the case report illustrates clinical implementation and follow-up. Their outcomes and sampling units differ. Together they motivate comparative clinical evaluation but do not justify a pooled effect or a causal ranking of clinical scanning methods.`,
'Keep laboratory fit, clinical follow-up, and workflow feasibility as separate outcomes.')
],
data:[
worked('Audit a shade-matching data dictionary',['xu'],'Methods and Tables 2–3, PDF pp. 2–6.',
`Audit this deliberately incomplete teaching dictionary, not the authors’ data: patient_id=text; method=0/1 without a key; zone=upper/middle/lower; deltaE=number labeled µm; subjective_score=number; missing_score=0. The objective table has one record per volunteer–method–zone. Synthetic syntax examples: DEMO01,ResNet,upper,4.0 and DEMO01,Technician,upper,5.0. These invented values must not enter research analysis. Return corrected definitions, keys, missingness rules, and checks without altering observations.`,
`Use a coded volunteer_id and a unique volunteer_id × method × zone key. Define method labels Technician and ResNet, or document the numeric mapping. Both methods belong to the same volunteer.

Define delta_e00 as dimensionless CIEDE2000 color difference. Require a numeric nonnegative value; flag implausible entries for source review, not automatic deletion. Restrict zone to upper, middle, lower and check duplicate keys.

Keep subjective ratings in a separate table with volunteer, method, rater, and score definition. Missing stays missing with a reason; zero is not a universal missing code. Confirm the scale before setting bounds.

The published objective cohort is 18, while subjective evaluation is 17. A complete objective long table would contain 18 × 2 × 3 = 108 measurement records, not 108 independent participants. Check completeness against actual exclusions and the study record.

Keep the two DEMO records in a separate teaching file. They are not published observations.`,
'Verify definitions and linkage against the actual data dictionary. Never fabricate records or replace missing scores with zero.'),
worked('Plan reproducibility for virtual articulation',['omar'],'Technique, PDF pp. 2–6; Discussion, PDF p. 7.',
`Create a reproducibility plan for independently implementing the published method. Available: the supplied methods summary only. Original meshes are unavailable; the supplementary program has not been downloaded or inspected. Organize input, processing, outputs, and sharing. Include opening conditions, baseline, topology, and coordinate transformations. Separate planned checks from completed validation.`,
`Inputs: Preserve permitted original scans read-only. Record device/software versions, calibration, acquisition conditions, coded case ID, units, and six leaf-gauge conditions. Distinguish maximal intercuspation from the 0.2-mm computational baseline.

Processing: Version the maxillary alignment, vertex correspondence, topology checks, landmark orientation, search parameters, PCA line fit, and articulator transforms. Preserve matrices and registration-failure decisions; filenames alone do not define coordinates.

Outputs: Link predicted and captured positions to case and opening condition. Record the RMSD formula, included vertices, units, and aggregation rule. Preserve per-position outputs and logs needed to regenerate figures.

Sharing: Release only cleared code, documentation, and labeled synthetic meshes if permitted. Dental meshes may remain identifying without names. Obtain and inspect the actual program and files before claiming reproduction.

Status: This is a plan. No execution, original-data validation, or independent replication occurred in this example.`,
'Resolve topology and coordinate transforms before interpreting residuals; inspect the actual code before claiming reproducibility.')
],
statistics:[
worked('Plan an analysis that respects pairing and zones',['xu'],'Methods, PDF pp. 3–4; Tables 2–3, PDF pp. 4–6.',
`Prepare a statistician-facing reanalysis memo using only published aggregate facts. Identify unit, repeated observations, outcomes, plausible methods, diagnostics, missingness, and information needed for confidence intervals and future sample size. No raw data are supplied and no reanalysis should be claimed. Explain why two marginal SDs are insufficient for paired uncertainty.`,
`Structure: Eighteen volunteers contributed both methods and three zones per method. Volunteer is the independent sampling unit; method and zone repeat within volunteer. Subjective evaluation has 17 available volunteers.

Objective analysis: With original data, inspect paired differences and zone patterns. A repeated-measures approach or appropriately specified mixed model can account for within-person observations. Confirm the primary contrast, interaction question, covariance assumptions, and multiplicity plan before choosing a model. The paper describes paired and repeated-measures methods; this memo does not replace its analysis.

Diagnostics: Inspect distributions, residuals, measurement-linked outliers, and justified sensitivity analyses. Present estimates with uncertainty; keep clinical acceptability separate from statistical significance.

Missingness: Document the unavailable subjective evaluation and reason. Do not silently alter the objective denominator or impute zero.

Required information: Paired observations, subject/zone mapping, exclusions, and analysis specification. Paired-difference variability or covariance is needed for paired uncertainty; two marginal SDs cannot supply it. A future sample size also needs a meaningful difference or precision target and a missing-data allowance.`,
'Review the original data and prespecified analysis with a statistician. This memo does not reproduce p values.'),
worked('Audit Fisher-test code against Table 2',['ishiguro'],'Table 2, PDF p. 6.',
`Audit this unexecuted R snippet: x <- matrix(c(7,3,0,10), nrow=2); fisher.test(x). Intended rows: G1, G3; intended columns: Fit, Misfit. Explain the layout issue; provide corrected complete code with labels and assertions. State the published p value separately. This is a narrow comparison check, not a new factorial analysis. Do not claim execution.`,
`R fills matrices by column unless byrow = TRUE. The vector was written in row order. Transposition may leave Fisher’s p value unchanged, so a matching p value alone does not validate coding.

x <- matrix(
  c(7, 3, 0, 10), nrow = 2, byrow = TRUE,
  dimnames = list(c("G1_IOS_Freehand", "G3_IOS_DirectMUA"),
                  c("Fit", "Misfit"))
)
stopifnot(all(rowSums(x) == c(10, 10)))
stopifnot(x["G1_IOS_Freehand", "Fit"] == 7)
stopifnot(x["G3_IOS_DirectMUA", "Misfit"] == 10)
result <- fisher.test(x, alternative = "two.sided")
print(x)
print(result)
sessionInfo()

Published comparator: Table 2 reports p = 0.003 for G1 versus G3. The code has not been executed in this response. Run it in an approved R environment and inspect both counts and output. Resolve source-scan dependence and multiplicity before extending to a new analysis.`,
'Execute and inspect the labeled counts, not only the p value. Save the code, output, and session information.')
],
manuscript:[
worked('Draft a precise Results paragraph from published counts',['ishiguro'],'Table 2, PDF p. 6; Table 1, PDF p. 5.',
`Write a 100–140-word teaching Results paragraph using all six group counts, examiner agreement, and the G1/G3 Table 2 comparison. Preserve scanner labels and numbers; use third person. This is an educational paraphrase of an already published result, not a manuscript for resubmission. Add no mechanisms or clinical outcomes.`,
`Sixty PMMA prostheses were evaluated across six scanner–design/luting combinations, with ten prostheses per group. In the IOS groups, misfit was observed in 3 of 10 Ti-base Freehand prostheses, 0 of 10 Ti-base on Cast prostheses, and 10 of 10 Direct-to-MUA prostheses. Each corresponding laboratory-scanner group had 0 of 10 observed misfits. The Table 2 comparison between IOS–Ti-base Freehand and IOS–Direct-to-MUA yielded p = 0.003. Initial examiner agreement was 59 of 60 assessments (98.3%), with κ = 0.95. These results describe binary passive-fit assessments of prostheses fabricated from a single master-cast setup; they do not represent patient-level outcomes.`,
'Check every group and value against Tables 1–2, including the Table 2-specific comparison and one-cast design.'),
worked('Write a measured discussion of the shade study',['xu'],'Results, PDF pp. 4–5; Discussion, PDF p. 6.',
`Audit these invented practice sentences, not article quotations: “Our randomized trial proves AI replaces technicians. The significant overall reduction establishes acceptable matching in every zone and patient. Upper-zone p = 0.317 proves equivalence. Benefits extend to inflamed gingiva and all ceramics.” Give minimal corrections and a replacement discussion paragraph.`,
`“randomized trial … replaces technicians” → A paired evaluation found lower overall color differences with the tested ResNet workflow; replacement was not established.
“acceptable … every zone and patient” → Both overall means exceeded 2.8; overall significance does not establish acceptability for individual observations.
“proves equivalence” → The upper-zone difference was not statistically significant; equivalence was not demonstrated.
“inflamed gingiva and all ceramics” → Generalization is limited by selected healthy volunteers, two technicians, four powders, and the tested system.

Replacement: The ResNet workflow improved the reported overall color-difference measure under the tested conditions. However, both overall means remained above the acceptability threshold, and the upper-zone comparison was not statistically significant. The small, selected sample and restricted materials limit generalization. Further evaluation should address acceptable matching across broader gingival conditions and fabrication workflows.`,
'Retain favorable and limiting findings. Do not attribute the deliberately altered practice sentences to the published authors.')
],
editing:[
worked('Catch denominator, group, and unit errors',['ishiguro'],'Tables 1–2, PDF pp. 5–6.',
`Perform a substantive audit of this deliberately altered teaching excerpt: “Sixty independent casts were assigned to six groups. Lab Direct-to-MUA had 10/10 misfits, whereas IOS Direct-to-MUA had none. Agreement was 98.3 mm. Table 2 shows IOS Freehand versus IOS Direct-to-MUA p < 0.001.” Return location, conflict, severity, and minimal fix. Do no optional style editing.`,
`Sentence 1 | “Sixty independent casts” conflicts with 60 prostheses from one cast | Major: changes the unit | Use “Sixty prostheses fabricated from one master cast.”
Sentence 2 | Scanner outcomes reversed | Major: reverses the finding | Laboratory Direct-to-MUA: 0/10 misfits; IOS Direct-to-MUA: 10/10.
Sentence 3 | Agreement is a proportion, not length | Major: wrong unit | Use “Initial examiner agreement was 98.3% (59/60).”
Sentence 4 | Table 2 G1 versus G3 reports p = 0.003 | Major: incorrect source-specific value | Replace with “p = 0.003.”

All four errors were introduced for teaching. This is not a list of errors attributed to the publication.`,
'Recheck the whole corrected paragraph against the specified tables and group definitions.'),
worked('Reorganize evidence while preserving citations',['alfaraj','xu','omar'],'Alfaraj Results/quality; Xu Results; Omar Discussion.',
`Reorder these original teaching sentences from broad evidence to specific evaluations, without adding facts: “Internal validation in a single-case articulation proof of concept yielded reported average RMSD 0.14 mm (Omar-2026). An umbrella review included 11 systematic reviews, six critically low in AMSTAR 2 quality (Alfaraj-2026). A paired shade study of 18 volunteers found lower overall ΔE00 with ResNet, but both means exceeded 2.8 (Xu-2026).” Keep citation keys with claims. Return the revised text and a citation movement/DOI log.`,
`An umbrella review included 11 systematic reviews, six critically low in AMSTAR 2 quality (Alfaraj-2026). A paired shade study of 18 volunteers found lower overall ΔE00 with ResNet, but both means exceeded 2.8 (Xu-2026). Internal validation in a single-case articulation proof of concept yielded reported average RMSD 0.14 mm (Omar-2026).

Alfaraj-2026: sentence 2 → 1; DOI 10.1111/jopr.70091.
Xu-2026: sentence 3 → 2; DOI 10.1111/jopr.70151.
Omar-2026: sentence 1 → 3; DOI 10.1111/jopr.70188.

Claims retain their original sources. The studies concern different tasks and do not form one numerical measure of AI effectiveness. Import verified article records into a reference manager and apply the journal’s final citation style there.`,
'Verify each title and passage. These short keys are teaching identifiers, not final JOP numbering.')
],
figures:[
worked('Specify a plot from real fit/misfit counts',['ishiguro'],'Table 2, PDF p. 6.',
`Specify an original journal-club plot of observed misfit: G1 IOS Freehand 3/10; G2 IOS on Cast 0/10; G3 IOS Direct-to-MUA 10/10; G4 Lab Freehand 0/10; G5 Lab on Cast 0/10; G6 Lab Direct-to-MUA 0/10. Include columns, axes, labels, denominator checks, uncertainty, alt text, and caption. No individual measurements or intervals are supplied. Do not copy an article figure.`,
`Columns: group_id, scanner, combination, misfit_n, total_n. Derive proportion = misfit_n / total_n. Retain integer counts; verify ten per group and 60 total prostheses.
Display: Horizontal dot plot of observed misfit percentage, grouped by scanner. Show all six names and n/N labels on a 0–100% axis. Use readable type and labels that do not rely on color alone.
Uncertainty: No intervals are supplied. Label this descriptive plot “observed proportions; intervals not shown.” Do not invent error bars. A publication plot needs a justified uncertainty method and current journal instructions.
Alt text: Misfit occurred in 3/10 IOS Freehand and 10/10 IOS Direct-to-MUA prostheses; the other four groups had 0/10.
Caption: Observed misfit proportions reconstructed from Ishiguro et al., Table 2. Each group contains ten PMMA prostheses from the shared master-cast setup. The figure describes binary fit assessments and does not estimate clinical failure risk.`,
'Check six numerators and denominators, preserve the plotting input/script, and distinguish zero observed events from zero population risk.'),
worked('Repair an articulation figure caption',['omar'],'Figure 8 and Discussion, PDF p. 7.',
`Audit this invented caption for a proposed original workflow diagram: “Externally validated anatomical hinge-axis detection in six patients and three clinical cohorts. Mean clinical occlusal error 0.14 mm; bars show 95% confidence intervals.” No new figure or confidence intervals are supplied. Return a corrected caption and an illustration checklist without reproducing the article’s figures.`,
`Corrected caption: Conceptual workflow for functional rotation reference determination from sequential mandibular scans in a single-case proof of concept. Six opening conditions use the 0.2-mm condition as computational baseline. The source reports average internal forward-validation RMSD of 0.14 mm against captured scan positions. Compatibility with three articulator coordinate systems is distinct from independent clinical validation. No confidence intervals are shown in this conceptual diagram.

Checklist: Label one case, six positions, and the fixed maxillary reference. Separate orientation landmarks from rotation-reference calculation. Call the output a functional rotation reference. Use an original source-cited schematic; add no invented error bars, patient imagery, or external accuracy claims.`,
'Match the eventual diagram to its caption; visual labels must not imply external validation or unreported uncertainty.')
],
submission:[
worked('Match the publications to JOP article categories',['ishiguro','azpiazu','omar','alfaraj'],'JOP Author Guidelines, Article Types; source papers establish designs.',
`Compare JOP article categories using these checked official facts (9 September 2026): https://onlinelibrary.wiley.com/page/journal/1532849x/homepage/forauthors.html . Original research includes in vivo/in vitro; clinical reports concern individual patients; techniques describe technical solutions; reviews favor systematic reviews. All four list a 10-page limit. Figures/tables limits: 8, 10, 10, 7 respectively. References: no limit, 30, 20, no limit. Research/reviews use structured abstracts; reports/techniques unstructured. No submission fee is listed; optional open access may incur an APC. Map the four papers, flag current APC amounts as unverified, and distinguish a teaching category choice from editor approval. Already published papers must not be resubmitted as original work.`,
`Study → likely category | Abstract | Pages | Figures/tables | References
Ishiguro → Original research | Structured | 10 | 8 | No stated limit
Azpiazu-Flores → Clinical report | Unstructured | 10 | 10 | 30
Omar → Technique | Unstructured | 10 | 10 | 20
Alfaraj → Review | Structured | 10 | 7 | No stated limit

These are teaching mappings; the journal determines category suitability. Verify how limits are counted in the current submission system. No submission fee does not mean no open-access charge; the current APC amount is UNVERIFIED here.

For new work, check required files, anonymization, declarations, reporting guidance, and AI disclosure. These source papers are already published and cannot be submitted again as original work.`,
'Reopen official author instructions for a real submission; an Early View PDF’s length does not itself establish the limit.'),
worked('Learn cover-letter structure from the clinical report',['azpiazu'],'Clinical report and Discussion, PDF pp. 2–9; JOP scope.',
`Write a cover-letter teaching reconstruction labeled “Educational reconstruction—do not submit.” Target JOP. Use the exact published title and explain its contribution/fit without exaggerated novelty. Draft the contribution paragraph plus an author-completion note. Current author approval, originality, conflicts, and actual AI-use declarations are not supplied; do not make them up.`,
`EDUCATIONAL RECONSTRUCTION—DO NOT SUBMIT

Dear Editor,

“Implementing 3D-printed indexing devices and contemporary scanning techniques for complete-arch implant-supported rehabilitations: A clinical case report” illustrates a hybrid workflow integrating a custom indexing device, conventional records, and contemporary acquisition for staged rehabilitation. It documents arch-specific scanning and verification with one-year clinical observations. The contribution is a detailed workflow relevant to prosthodontic practice; a single case does not establish comparative superiority.

For a future new manuscript, the authors must supply actual approval, overlapping-publication status, conflicts, permissions, and AI-use details before completing declarations. This example is already published (DOI 10.1111/jopr.70167); originality or exclusive-submission assurances for resubmitting it would be inappropriate.`,
'Use this for structure only. Real declarations must come from the authors and actual study record.')
],
'peer-review':[
worked('Organize imagined validation comments',['omar'],'Discussion, PDF p. 7; reviewer comments below are invented.',
`Build a response matrix for invented comments: R1 “Separate internal residuals from external accuracy.” R2 “Do three articulators mean three cohorts?” R3 “Add multicenter validation.” Planned teaching changes: add a scope sentence in Discussion paragraph 2; clarify coordinate compatibility in paragraph 3; no new participants or experiments. Return issue, proposed response, pending action, and location. None of these changes has been made yet; these are not real confidential reviews.`,
`R1 | Validation scope | The Discussion will distinguish internal residuals from external clinical accuracy | NOT YET DONE: insert scope sentence and check related captions | Teaching Discussion paragraph 2
R2 | Cohort count | The three articulators represent coordinate implementations in one case | NOT YET DONE: clarify the distinction | Teaching Discussion paragraph 3
R3 | Additional study | Multicenter validation is outside the present dataset and remains future work | NOT YET DONE: explain the limitation without claiming new data | Teaching limitations paragraph

Use completed-action language only after the actual revision is made and checked. The article’s real peer-review history is not represented here.`,
'Compare final responses with actual revised text and current locations. Respect confidentiality for real peer-review material.'),
worked('Check a reply against the supplied revision',['azpiazu'],'Discussion, PDF p. 9; both practice excerpts are invented.',
`Compare an invented response with an invented actual revision. Request: “Clarify accuracy and follow-up limits.” Response: “We added a controlled comparison proving superior accuracy and extended follow-up to two years in Discussion paragraph 2.” Actual revised paragraph 2: “This single case has no control group. One-year observations support feasibility; longer follow-up and comparative studies are needed.” Identify unsupported reply claims and write a corrected response. Do not imply this is the real review history.`,
`The claimed controlled comparison is absent. Superior accuracy is not established; the revision limits inference to feasibility. Two-year follow-up is incorrect; both the practice revision and source describe one year. Paragraph 2 is the supplied teaching location; actual manuscript line numbers are unavailable.

Corrected reply: The revised Discussion paragraph 2 now states that this is a single case without a control group. It identifies the one-year follow-up and explains the need for longer observation and comparative studies. No new comparative data or extended follow-up have been added.

This reply is supported by the exact practice revision supplied; it makes no claim about the authors’ original correspondence.`,
'Check the actual revised file before sending a real reply. New wording is not new evidence.')
],
conference:[
worked('Storyboard an eight-minute talk on the shade study',['xu'],'Methods/Results, PDF pp. 2–6.',
`Create an eight-minute educational conference or journal-club presentation of this published study for dental researchers. Use eight slides with evidence, speaking points, and timings totaling eight minutes. A separate two-minute Q&A is a teaching assumption, not an event rule. Include study attribution, an actual-use AI-preparation disclosure to be completed by the presenter, design, results, clinical interpretation, and limits. Use original schematics/plots, no invented patient images.`,
`1. Can AI improve gingival shade matching? — 0.5 min. Study title, authors, DOI, and the presenter’s actual AI-preparation disclosure. Identify this as a published-study presentation.
2. The comparison is paired — 1.0 min. Original diagram: 18 volunteers, each with technician and ResNet specimens.
3. Three zones, one color-difference metric — 1.0 min. Original zone schematic; ΔE00 is dimensionless. Repeats are not independent participants.
4. Overall color difference was lower — 1.5 min. Source-labeled table/plot: 4.169 ± 2.048 versus 5.625 ± 1.967; p < 0.001. Label SD.
5. Zone findings were not uniform — 1.0 min. Upper p = 0.317; middle p < 0.001; lower p = 0.007. Do not claim upper-zone equivalence.
6. Improvement did not establish acceptability — 1.0 min. Show both overall means and the 2.8 threshold.
7. What limits generalization? — 1.0 min. Selected volunteers, two technicians, four powders, 17 available subjective evaluations.
8. A measured conclusion — 1.0 min. Better overall performance under tested conditions; wider application and acceptable matching need further work. Retain the source citation.

Speaking total: 8.0 minutes. Separate practice Q&A: 2.0 minutes. Confirm actual event rules and presentation permissions.`,
'Reconcile slide values with the paper; keep limitations in the main talk and disclose only actual AI preparation use.'),
worked('Rehearse difficult questions about the laboratory study',['ishiguro'],'Methods/Tables 1–2, PDF pp. 2–6; limitations, PDF p. 7.',
`Generate six audience questions with evidence-limited answers about the unit, acquisition setting, zero events, workflow combinations, examiner agreement, and clinical relevance. Use only the supplied facts. Do not invent casts, external validation, intervals, or long-term outcomes.`,
`Were there 60 independent patients? No: 60 prostheses came from one master-cast setup. The scan-to-prosthesis mapping matters for dependence.
Was IOS acquisition performed in patients? No: the TRIOS 4 was used extraorally on the splinted assembly. Device category and acquisition setting differ.
Does 0/10 prove a perfect method? No: no misfit was observed under the binary test in ten specimens; zero population risk or perfect geometry was not established.
Can luting alone explain differences? The factors include design–luting combinations. Their effects cannot automatically be separated into individual causal components.
Were examiners consistent? Initial agreement was 59/60 (98.3%), κ = 0.95. Agreement does not establish validity against an independent standard.
Does this predict long-term survival? No patient survival outcome was measured. Clinical generalization requires further evidence beyond the tested cast, devices, material, and workflow.`,
'Answer from measured outcomes and explicitly identify questions that require a different study.')
]
};
