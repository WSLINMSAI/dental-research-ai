// Original AI-generated teaching demonstrations, reviewed for internal consistency.
// These are not transcripts from named external tools, real studies, or patient records.
const EXAMPLE_NOTE = 'Teaching demonstration: the scenario and any study data are hypothetical. The response was generated with AI for this course and edited for clarity; it is not a recorded run of a named external tool. Outputs vary. Verify sources, calculations, code, and decisions yourself.';
const WORKED_EXAMPLES = {
  foundations: [
    {
      title: 'An AI-use plan for a laboratory scanner project',
      filled: `Help me draft an AI-use plan for a dental research project using only this nonconfidential teaching description.

PROJECT: Our team is planning an in vitro comparison of scanner A and scanner B using commercially manufactured dental casts. There are no patient records. The protocol is still a draft; no data have been collected. We want help organizing the proposal, suggesting search terms, reviewing R code using invented rows, and editing our own nonconfidential text. The project lead checks study claims, the information specialist checks searches, and the statistician checks code and analyses. Our institution has not yet determined which AI service we may use. Unpublished manufacturer specifications are confidential.

TASK: List permitted tasks conditional on institutional authorization, prohibited inputs, output checks, responsible human reviewers, and log fields. Flag decisions that require institutional or journal guidance. Do not claim that any tool is approved or compliant.`,
      answer: `DRAFT AI-USE PLAN

1. Before use: the project lead should obtain the institution's decision on the permitted service, account settings, retention, and acceptable input types. This plan does not establish approval.
2. Candidate tasks: organize the nonconfidential proposal; suggest untested search terms; inspect code with invented data; edit text owned by the team. Do not use a suggested search as evidence that a database was searched.
3. Excluded inputs: confidential manufacturer specifications, credentials, restricted unpublished material, and any later patient-level material unless separately authorized. Keep the input scope limited even though this project uses manufactured casts.
4. Checks: the project lead compares proposal claims with verified sources and protocol decisions; the information specialist tests syntax and known-record retrieval; the statistician runs code on test data and checks the experimental unit. Authors compare edited text with the original to detect altered meaning or numbers.
5. Log each use: tool/provider/version, date, task, affected section, permitted input description, prompt/output file references, checks actually completed, reviewer, corrections, and privacy controls.
6. Unresolved decisions: institutional service approval, manufacturer permissions, and the target journal's disclosure and figure rules. Record decisions before expanding AI use.`,
      verify: 'Obtain the actual institutional decision and inspect the service settings. An AI-written plan is not evidence of approval.'
    },
    {
      title: 'Spotting confident but unsupported claims',
      filled: `Audit this invented AI-generated response for a dental researcher:
“Scanner A is clinically superior to scanner B because it has a lower mean surface deviation in a bench experiment. Removing names makes every dataset anonymous. The study can therefore be uploaded to any free chatbot without review.”

No original paper, numerical results, privacy assessment, or institutional policy is supplied. List factual claims, assumptions, unsupported statements, and details requiring original-source verification. Do not invent references or treat your own assessment as independent validation.`,
      answer: `CLAIM AUDIT

“Scanner A is clinically superior”: NOT SUPPORTED. The text supplies neither clinical outcomes nor a clinical study. A laboratory measurement does not establish clinical superiority.

“Lower mean surface deviation”: UNVERIFIED. Retrieve the actual methods and results; confirm the direction, units, sample, uncertainty, and comparison. Even if the mean is lower, the supplied text does not establish how reliably or by how much.

“Removing names makes every dataset anonymous”: NOT SUPPORTED. Other identifiers and combinations of attributes may permit re-identification. A proper data assessment is needed.

“Upload to any free chatbot”: NOT SUPPORTED. Cost does not determine institutional authorization, retention terms, confidentiality, or data-use permissions.

Safer wording: “The claims require verification against the original study and the applicable data-governance decision. Do not infer clinical superiority or permission to upload from this paragraph.”

This audit identifies issues; it is not an independent validation of the study or a privacy determination.`,
      verify: 'Open the original study and applicable policy. Do not use a second chatbot as the sole fact-checker.'
    }
  ],
  proposal: [
    {
      title: 'A complete starting brief for a scanner proposal',
      filled: `Act as a research planning assistant. Outline a dental research proposal using only this hypothetical planning brief.

BACKGROUND: Our verified project record says scanner A and scanner B can export STL files. We have no verified comparative literature yet; do not claim an evidence gap has been established.
QUESTION: On commercially manufactured edentulous casts, how does mean surface deviation from the same reference scan compare between A and B?
CONSTRAINTS: One laboratory, one trained operator, access to 12 distinct manufactured casts, two scanner sessions per week, and a 10-week planning/pilot window. Each cast will be scanned with both devices, three times per device. The primary outcome proposed is mean absolute surface deviation in micrometers. A lower value means closer agreement with the reference under this measurement definition. No pilot variance or target meaningful difference is available. This is a proposal, not a completed study.

Include the primary question, design, experimental unit, outcomes, bias controls, sample-size inputs, ethics questions, data management, and timeline. Label every missing decision TO CONFIRM. Do not invent references, approval numbers, or numerical assumptions.`,
      answer: `PROPOSAL OUTLINE

Question and rationale: compare the specified deviation measure between scanners on the same manufactured casts. Comparative background and the evidence gap are TO CONFIRM through a documented search.

Design: paired in vitro comparison. The distinct cast is the unit supporting the scanner comparison; three scans per device are technical repeats, not three independent casts. There would be 72 scan files if all 12 casts receive six scans, but only 12 distinct casts.

Outcome: mean absolute surface deviation (µm) from the common reference. Registration, surface region, reference-system accuracy, and the method for combining technical repeats are TO CONFIRM.

Bias controls: prespecify and record scanner order, calibration, environmental conditions, and the analysis operator's masking where feasible. The single-operator setting limits generalizability.

Sample-size planning: 12 available casts is a feasibility constraint, not a power calculation. The primary contrast, meaningful difference, variability of paired cast summaries, desired precision or power, and failure allowance need statistician review.

Governance and data: ask the institution for its applicable determination for manufactured specimens; do not assume an approval or exemption. Preserve raw STL files as read-only, coded cast/device/repeat IDs, versioned processing settings, and an AI-use log.

Proposed 10-week planning/pilot schedule: weeks 1–2 literature and protocol decisions; 3–4 calibration and workflow pilot; 5–6 pilot measurements; 7–8 reproducibility and variance review; 9–10 protocol revision. This is a proposed schedule, not completed work.`,
      verify: 'Check feasibility with the laboratory, define the reference and registration method, and ask the statistician to assess precision before fixing sample size.'
    },
    {
      title: 'A protocol gap audit with named decision owners',
      filled: `Review this hypothetical protocol outline for reproducibility gaps.

OUTLINE: We will invite adults requiring a single posterior crown at one clinic and compare two intraoral scanning workflows. Participants will receive both workflows at one appointment. We will measure scan time and comfort. Operators will be “experienced.” We aim to enroll 30 participants because this is convenient. Incomplete scans will be excluded. The order of workflows and the comfort questionnaire have not been specified. A single analyst will prepare the tables. The institutional ethics application has not been submitted.

For each gap give the section, exact missing decision, why it matters, and the responsible role. Focus on repeated observations, calibration, recruitment, missing data, and outcome timing. Do not silently redesign the study. Do not invent approval or consent details.`,
      answer: `PROTOCOL GAPS FOR TEAM REVIEW

Recruitment — Eligibility, consecutive versus convenience sampling, and recruitment dates are missing. These affect selection bias and reproducibility. Owner: clinical investigator.

Paired workflow — Both observations come from the same participant; workflow order and possible carryover are unspecified. Prespecify order allocation and timing. Owners: investigator and statistician.

Measurement — Define start/stop rules for scan time, the comfort instrument and scale direction, and exactly when comfort is assessed. Owner: outcomes lead.

Training — “Experienced” is not a calibration procedure. Record training, competency checks, and how operators are assigned. Owner: clinical lead.

Missing data — Excluding incomplete scans could remove difficult cases and hide workflow failures. Define a failure outcome, reasons for missingness, and handling of partially observed pairs before collection. Owners: investigator and statistician.

Sample size — Convenience alone does not justify precision. Specify the primary outcome and required sample-size inputs. Owner: statistician.

Governance — Resolve ethics review, participant information/consent, and access controls before recruitment. Owner: principal investigator and institutional reviewers.

The design remains a proposed paired comparison. These are decisions to resolve, not approvals or amendments already made.`,
      verify: 'Confirm the final decisions in a versioned protocol before recruiting. The output cannot supply the missing institutional determination.'
    }
  ],
  evidence: [
    {
      title: 'An untested PubMed strategy for a focused question',
      filled: `For the question “In adults receiving a single implant-supported crown, how do intraoral digital impressions compare with conventional impressions for patient-reported comfort?”, propose concept groups, text-word synonyms, candidate MeSH headings to verify, and a draft PubMed search.

SCOPE: Human clinical studies; comfort is the outcome of interest. We have not chosen date or language restrictions. Do not add a randomized-trial filter because eligibility is still being decided. Prefer a sensitive starting query and explain whether requiring a comfort term could miss relevant papers. No database access or verified seed articles are supplied.

Label the strategy untested. Do not claim you searched PubMed, found records, or verified MeSH terms. Do not invent citations or counts.`,
      answer: `UNTESTED SEARCH DRAFT — NO SEARCH EXECUTED

Concepts:
• Implant restoration: dental implant, implant-supported crown, implant-supported prosthesis.
• Impression workflow: intraoral scan, digital impression, optical impression, conventional impression.
• Patient experience: comfort, discomfort, patient preference, patient satisfaction.

Candidate MeSH headings to check in the live MeSH database: Dental Implants; Dental Impression Technique; Patient Satisfaction. Confirm the exact current headings and whether they represent your question before adding them as MeSH fields.

Text-word starting query:
("dental implant"[tiab] OR "dental implants"[tiab] OR "implant-supported"[tiab])
AND
("intraoral scan"[tiab] OR "intraoral scanning"[tiab] OR "intraoral scanner"[tiab] OR "digital impression"[tiab] OR "digital impressions"[tiab] OR "optical impression"[tiab])

Optional narrowing block to test separately:
AND (comfort[tiab] OR discomfort[tiab] OR "patient preference"[tiab] OR "patient satisfaction"[tiab])

The base query leaves conventional comparison and single-crown eligibility to screening; forcing both could lose records. A mandatory comfort block may miss papers that report comfort only in the full text. Do not add date, language, or study-design limits without a protocol rationale.

Next: an information specialist should test syntax, inspect PubMed's query translation, add verified subject headings, test retrieval of known eligible records, and record the exact executed query, date, limits, and result count.`,
      verify: 'Run and refine the strategy in PubMed. Candidate headings, query sensitivity, and retrieved records are not validated by this example.'
    },
    {
      title: 'A claim-source map that refuses a clinical leap',
      filled: `Use only these fictional teaching excerpts; they are not publications and have no DOI.

Teaching source A, Methods paragraph 1: “Ten manufactured dentate casts were scanned with both devices. The outcome was surface deviation from a laboratory reference.”
Teaching source A, Results paragraph 2: “The mean of the cast-level summaries was 70 µm for A and 62 µm for B.”
Teaching source A, Limitations paragraph 1: “No patients or clinical crown outcomes were studied. Uncertainty intervals are not included in this exercise.”

CLAIMS TO CHECK: (1) B had a lower observed mean deviation in this bench sample. (2) B improves crown survival. (3) B is more comfortable for patients. (4) The difference is statistically significant.

Create a claim/source-location/design/population/limits table. Write NOT SUPPORTED when supplied material does not justify a claim. Do not fill gaps from memory.`,
      answer: `CLAIM 1 — Supported within the supplied teaching excerpt.
Location: source A, Results paragraph 2 (A 70 µm; B 62 µm).
Design/population: paired laboratory comparison on 10 manufactured dentate casts, from Methods paragraph 1.
Limit: descriptive means only; no supplied uncertainty and no clinical population.

CLAIM 2 — NOT SUPPORTED.
Location explaining the limit: source A, Limitations paragraph 1. Crown survival was not studied.

CLAIM 3 — NOT SUPPORTED.
Location explaining the limit: source A, Limitations paragraph 1. There were no patients or comfort measurements.

CLAIM 4 — NOT SUPPORTED.
No inferential analysis, uncertainty interval, or prespecified testing information is supplied.

Permitted summary: “In this hypothetical bench sample, scanner B had a lower observed mean surface deviation than scanner A (62 versus 70 µm). The excerpts do not establish statistical significance or a clinical benefit.”`,
      verify: 'For real research, compare each row with the actual full text and check corrections or retractions. These teaching source IDs must never enter a manuscript reference list.'
    }
  ],
  synthesis: [
    {
      title: 'Extracting an outcome without inventing uncertainty',
      filled: `Using only the following complete fictional teaching extract, fill design, sample/experimental unit, methods, outcome definition, time point, estimate, uncertainty, limitations, and exact source location. Mark absent details NOT REPORTED; distinguish author statements from interpretation.

Teaching source B, page 1 Methods: “A laboratory study used eight distinct commercially manufactured edentulous casts. Each cast was scanned twice with device C. The two scan-level absolute deviation summaries were averaged within cast. The same reference system and alignment settings were used for all casts.”
Page 2 Table 1: “Mean of eight cast-level average deviations: 84 µm.”
Page 2 Discussion: “Only one operator and one cast material were used.”

No additional text or numbers are supplied. Do not infer confidence intervals, standard deviations, or unreported device settings.`,
      answer: `EXTRACTION RECORD — TEACHING SOURCE B

Design: laboratory measurement study (page 1, Methods).
Sample and unit: eight distinct manufactured edentulous casts. There are two technical scans per cast; the summarized unit is the cast (page 1, Methods).
Methods: average the two scan-level summaries within cast; use common reference/alignment settings. Specific settings and reference accuracy: NOT REPORTED.
Outcome: absolute surface-deviation summary, µm. Exact surface region and mathematical definition: NOT REPORTED.
Time point: NOT REPORTED beyond measurements during the experiment.
Estimate: mean of eight cast-level averages = 84 µm (page 2, Table 1).
Uncertainty: NOT REPORTED. Do not create an SD or confidence interval from the mean alone.
Authors' limitations: one operator and one cast material (page 2, Discussion).
Extractor interpretation: this supplied experiment does not establish performance across operators/materials or clinical outcomes. This is an interpretation of scope, not an additional reported finding.`,
      verify: 'A second researcher should compare fields and locations against the real source. Preserve NOT REPORTED instead of using AI to fill missing evidence.'
    },
    {
      title: 'Comparing incompatible laboratory summaries',
      filled: `Compare these verified rows from fictional teaching records only.

A: 10 manufactured dentate casts, paired devices A/B, mean absolute surface deviation, µm, full arch, one operator. Cast-level means: A 70, B 62. No uncertainty supplied.
B: 8 manufactured edentulous casts, device C only, absolute deviation summary, µm; exact mathematical definition and surface region not reported. Cast-level mean: 84. One operator, one material. No uncertainty supplied.
C: 6 manufactured dentate casts, device B only, signed mean deviation, µm, posterior region. Mean: -4. Uncertainty and calibration details not reported.

Identify agreements, methodological differences, and reasons the findings may not be comparable. Separate observed findings from possible explanations. Do not calculate pooled effects or infer clinical benefit.`,
      answer: `OBSERVED FINDINGS

All three records describe manufactured casts and laboratory deviation measures. Record A supplies a within-study paired comparison; B and C supply single-device summaries. Only A directly compares devices under its own measurement conditions.

COMPARABILITY LIMITS

• A and B use different cast anatomy, and B lacks an exact outcome definition and surface region. Their means cannot isolate a device effect.
• C reports signed deviation: positive and negative departures can cancel. A signed mean of -4 µm does not show better accuracy than an absolute-deviation mean of 62 µm.
• C covers a posterior region while A covers the full arch. Measurement domains differ.
• No row supplies uncertainty, and sample sizes are small. A pooled precision estimate cannot be recovered from these rows.

POSSIBLE EXPLANATIONS, NOT FINDINGS
Anatomy, region, outcome calculation, material, or calibration might contribute to differences. These records do not test those explanations.

Synthesis: describe the studies separately and seek missing methods. Do not rank all devices across records, pool incompatible outcomes, or claim a clinical advantage.`,
      verify: 'Check outcome definitions before combining studies. A reviewer must assess comparability and risk of bias using the full reports.'
    }
  ],
  data: [
    {
      title: 'Auditing a synthetic data dictionary',
      filled: `Review this data dictionary and invented dataset. Flag coding, units, impossible values, missing identifiers, and unclear derived variables. Propose rules without changing data.

DICTIONARY: cast_id = manufactured cast identifier; scanner = A or B; repeat = integer 1–3 within cast/device; deviation = mean absolute surface deviation, unit not recorded; elapsed_s = scan duration in seconds, expected positive; success = 0 failed, 1 completed. For failed scans deviation should be missing, but the missing-value representation has not been decided.
CSV ROWS:
cast_id,scanner,repeat,deviation,elapsed_s,success
C01,A,1,70,45,1
C01,A,1,72,47,1
C01,b,2,0.065,46,1
C02,B,1,-8,49,1
C02,B,2,999,-5,0

These are teaching data, not patient records. Do not request identifiers or silently correct values.`,
      answer: `DATA-QUALITY FINDINGS

1. Duplicate key: C01/A/1 appears twice. Determine whether it is a duplicate entry or a mislabeled repeat; do not delete either row automatically.
2. Scanner coding: lowercase b is outside the stated A/B categories. Confirm with the source record before standardizing.
3. Unit ambiguity: deviation values 70 and 0.065 may reflect different units, but that is only a hypothesis. Record the canonical unit and verify original exports before conversion.
4. Impossible under the definition: -8 cannot be a mean absolute deviation. Check the export field or sign; do not take its absolute value as a repair.
5. Failed scan: success = 0 with deviation = 999 may represent an undocumented missing code. Resolve the missing-value convention and preserve the original record.
6. Duration: -5 seconds is invalid under the stated rule. Verify the timestamp or source value.

PROPOSED RULES
Unique cast_id + scanner + repeat; scanner in A/B; repeat integer 1–3; success in 0/1; elapsed_s positive when recorded; deviation nonnegative with one explicit unit, and missing according to the documented failure rule. Check completeness of all planned cast/device/repeat combinations.

Create a query log with row ID, issue, source check, decision, reviewer, and date. Keep raw data unchanged; write approved corrections to a derived dataset.`,
      verify: 'Resolve each query against the raw record. A plausible unit conversion or missing-value code is still an assumption until confirmed.'
    },
    {
      title: 'Tracing a table and figure back to source files',
      filled: `Create a reproducibility plan for this hypothetical authorized laboratory workflow. The teaching scenario assumes institutional permission for nonconfidential code assistance only; do not generalize that permission to a real institution.

WORKFLOW: 12 manufactured casts, scanners A/B, three scans per cast/device. Raw STL files remain on the laboratory's restricted drive. An alignment script produces scan_metrics.csv; a cleaning script produces analysis.csv; an R script averages technical scans by cast/device and creates Table 1 and Figure 1. AI may review code using synthetic rows only. Raw scans and unpublished manufacturer settings must not be uploaded to AI. The team can share its code and invented demonstration data after internal review, but actual scans have not been cleared for release.

List files, versions, decisions, checks, access controls, and permitted sharing needed to reproduce outputs. Do not claim that removing names guarantees anonymity.`,
      answer: `REPRODUCIBILITY RECORD

Raw layer: preserve read-only STL files, a file manifest/checksums, coded cast/device/repeat keys, collection dates, calibration records, and authorized access roles. Record the actual reference and alignment settings in approved storage.

Processing layer: retain alignment and cleaning scripts, software/package versions, environment information, parameter files, and a correction/exclusion log. Keep scan_metrics.csv and analysis.csv traceable to their input versions.

Analysis layer: version the rule for combining technical repeats, the analysis plan, executable R script, and output-generation command. Record any random seed only where a stochastic operation actually uses it.

Checks: confirm expected and missing scan combinations; reconcile cast counts; compare a hand-worked synthetic case with code output; regenerate Table 1 and Figure 1 from the same analysis dataset; review axis units and uncertainty labels.

AI record: retain tool/version/date, the synthetic prompt and output references, proposed code changes, and human execution/review results. Keep confidential settings out of the prompt.

Sharing: publish only internally cleared code and clearly labeled invented data. Provide a README explaining how to run the demonstration and why actual scans are unavailable. Permission to use data internally is not permission to publish them.`,
      verify: 'A second team member should regenerate the outputs in the recorded environment and confirm that every publicly shared file is cleared.'
    }
  ],
  statistics: [
    {
      title: 'Recognizing casts as the paired experimental units',
      filled: `Using this hypothetical protocol and dictionary, outline an analysis for statistician review, without selecting a final method.

DESIGN: 12 distinct manufactured casts, each scanned with A and B, three technical repeats per device. Primary outcome is nonnegative mean absolute surface deviation in µm. The planned primary contrast is B minus A after averaging the three repeats within each cast/device. A failed scan has a missing deviation plus a recorded failure reason. No data, distribution, failure count, paired-difference variance, meaningful difference, or precision target is available. Only one operator is used.
DICTIONARY: cast_id identifies cast; scanner identifies A/B; repeat identifies 1–3; deviation_um is numeric; failed is 0/1; reason is text.

Identify unit, pairing, nesting, plausible approaches, assumptions, diagnostics, missing-data issues, and sample-size inputs still needed. Do not treat technical scans as independent casts or invent results.`,
      answer: `ANALYSIS DISCUSSION FOR THE STATISTICIAN

Structure: scanner measurements are paired within cast; technical repeats are nested within cast/device. The planned comparison has at most 12 independent cast pairs, not 72 independent specimens. The outcome is continuous and nonnegative; paired differences may be positive or negative.

Primary estimand: the mean cast-level difference in the specified deviation summary, B minus A, under the protocol conditions. A negative difference favors B only on this laboratory measure.

Possible approaches: analyze prespecified cast/device averages and their paired differences, or consider a model that explicitly represents within-cast dependence if that better matches the scientific question. The choice, uncertainty method, and assumptions require the actual data structure and statistician review.

Diagnostics: inspect paired differences, unusual observations, device-specific spread, technical repeat variability, and model residuals if a model is fitted. Confirm casts are the independent sampling units and examine sensitivity to justified decisions.

Missing data: define how many successful repeats are needed for a cast/device summary and what happens to incomplete pairs. Report failure counts/reasons by device. Do not silently average different numbers of repeats or impute zero for failure.

Sample-size inputs: target difference or precision, variability of paired summaries, desired error rates/power if testing, and anticipated failures. The available count of 12 alone cannot establish adequate power.

No estimates, intervals, or final test are provided because there are no observed data.`,
      verify: 'Have the statistician approve the estimand, missing-data rule, and analysis before inspecting comparative results.'
    },
    {
      title: 'Finding an incorrect unpaired test in R code',
      filled: `Audit this R script against this teaching analysis plan. Do not claim to execute it.

PLAN: Three invented casts each have one A and one B summary. Retain pairing by cast_id. For this code-review exercise, report only the mean B-minus-A difference; perform no hypothesis test. Required values are complete and in µm. Exclusions are not allowed without a documented correction.

CODE:
d <- data.frame(cast_id = rep(c("C01","C02","C03"), each = 2), scanner = rep(c("A","B"), 3), deviation_um = c(60,50,70,65,80,75))
t.test(deviation_um ~ scanner, data = d)

Check coding, units, pairing, missing values, exclusions, and output against the plan. Propose corrected code, separating inspection from executed checks. Do not invent p-values.`,
      answer: `CODE INSPECTION — NOT EXECUTED

Issue: the formula call to t.test performs an unpaired comparison by default and adds a hypothesis test absent from the supplied plan. Keep cast pairing explicit and produce only the planned descriptive contrast.

Suggested replacement after constructing d:

stopifnot(!anyNA(d), !anyDuplicated(d[c("cast_id", "scanner")]))
stopifnot(all(d$scanner %in% c("A", "B")))
a <- subset(d, scanner == "A", c(cast_id, deviation_um))
b <- subset(d, scanner == "B", c(cast_id, deviation_um))
paired <- merge(a, b, by = "cast_id", all = TRUE, suffixes = c("_A", "_B"))
stopifnot(nrow(paired) == 3L, !anyNA(paired))
paired$diff_um <- paired$deviation_um_B - paired$deviation_um_A
mean(paired$diff_um)

Hand-check target from the invented inputs: differences are -10, -5, and -5 µm; their mean is -20/3 µm, approximately -6.67 µm. This arithmetic is a check target, not a claimed R execution result. No p-value is needed.

The fixed count of three is specific to this supplied exercise. For a real study, validate against the protocol's expected cast manifest and approved missing-data rules.`,
      verify: 'Run the code in your approved R environment, compare with the hand calculation, and test a missing pair and duplicate record to ensure they are flagged.'
    }
  ],
  manuscript: [
    {
      title: 'Drafting Results from a closed, synthetic source pack',
      filled: `Draft one Results paragraph of no more than 100 words using only this hypothetical, author-verified teaching source pack.

METHODS: Ten distinct manufactured dentate casts were scanned with both A and B, with three successful technical scans per cast/device. Technical measurements were averaged within cast/device. The outcome was mean absolute surface deviation in µm from one laboratory reference.
RESULTS RECORD T1: All 10 casts contributed paired summaries. Mean of cast summaries: A 70 µm, B 62 µm. The author-verified paired mean difference B minus A was -8 µm; its supplied 95% confidence interval was -13 to -3 µm. This interval is a stipulated teaching result, not something to recalculate from the supplied means.
CLAIM-SOURCE MAP: Participant/specimen count, means, difference, and interval all belong to internal Table 1 (T1). No clinical outcomes or external references are included.

Preserve every number, unit, group label, and T1 identifier. Use MISSING for absent facts that are necessary. Do not add references, a p-value, analyses, causal claims, or clinical benefit.`,
      answer: `All 10 manufactured casts contributed paired summaries for scanners A and B (T1). After averaging the three technical scans within each cast/device, the mean absolute surface deviation was 70 µm for A and 62 µm for B. The mean paired difference (B minus A) was -8 µm (95% confidence interval, -13 to -3 µm; T1).

Author check: this paragraph reports only the supplied laboratory outcome. The interval was provided in the source pack; no analysis was executed to generate it. The actual manuscript should identify the interval-estimation method in Methods.`,
      verify: 'Compare every value with the locked analysis output, including the contrast direction and interval method. Never reuse the synthetic results as research findings.'
    },
    {
      title: 'Correcting overinterpretation in a Discussion',
      filled: `Audit this hypothetical Discussion against the verified teaching record. Quote each problematic sentence and give a minimal correction.

RECORD: Ten manufactured casts, one operator, paired A/B comparison. Mean absolute deviation: A 70 µm, B 62 µm; B-minus-A mean difference -8 µm, supplied 95% CI -13 to -3 µm. Only surface deviation was measured. There was no patient comfort, crown survival, chair-time, or cost outcome. No mechanism was tested.
DISCUSSION: “Scanner B improved patient comfort and will increase crown survival. The lower deviation proves that B's proprietary algorithm is better. These findings apply to every clinical setting. Our result was A 70 µm and B 62 µm, and the mean difference was -8 µm. Thus all clinics should replace scanner A.”

Flag overinterpretation, missing limitations, repeated Results text, and unsupported mechanisms. Do not add citations or new findings.`,
      answer: `1. “Scanner B improved patient comfort and will increase crown survival.”
Problem: neither clinical outcome was measured.
Minimal correction: “Scanner B had a lower mean absolute surface deviation in this laboratory comparison.”

2. “The lower deviation proves that B's proprietary algorithm is better.”
Problem: no algorithm mechanism was tested.
Minimal correction: remove this sentence or state, “The study did not investigate the mechanism underlying the difference.”

3. “These findings apply to every clinical setting.”
Problem: generalization exceeds one operator and manufactured casts.
Minimal correction: “Generalizability is limited by the use of manufactured casts and one operator.”

4. “Our result was A 70 µm and B 62 µm, and the mean difference was -8 µm.”
Problem: repeats numerical Results without adding interpretation.
Minimal correction: refer briefly to the lower observed deviation and discuss its bounded meaning; retain full numbers in Results.

5. “Thus all clinics should replace scanner A.”
Problem: treatment/equipment advice is unsupported by this outcome and design.
Minimal correction: “Clinical consequences and performance in other settings require further study.”

Retain the observed comparison while adding the key limitations. Do not imply that statistical uncertainty measures clinical importance.`,
      verify: 'Ensure the final Discussion remains consistent with the actual design, analysis, limitations, and verified citation map.'
    }
  ],
  editing: [
    {
      title: 'Reconciling Abstract, Results, and Table 1',
      filled: `Perform a focused editorial audit of these fictional manuscript excerpts. Return exact location, original wording, conflicting information, severity, and a minimal fix. Do not propose optional stylistic changes or redesign the analysis.

CANONICAL VERIFIED RECORD: 10 manufactured casts, all analyzed; three scans per cast/device; device names A and B; mean absolute deviation in µm; A 70 µm and B 62 µm. Table 1 contains these outcomes. No participants or clinical endpoints.
ABSTRACT sentence 2: “Twelve participants were evaluated.”
RESULTS sentence 1: “Mean deviations were 70 mm for A and 62 mm for B (Table 2).”
DISCUSSION sentence 3: “B therefore improved patient outcomes.”
TABLE 1 headers: “Scanner”, “Mean absolute deviation (µm)”; rows A = 70, B = 62.

Check sample counts, units, outcome scope, group labels, and table callouts. No citation sequence is supplied, so do not pretend to check it.`,
      answer: `ISSUE 1
Location: Abstract, sentence 2.
Original: “Twelve participants were evaluated.”
Conflict: canonical record specifies 10 manufactured casts and no participants.
Severity: major factual inconsistency.
Minimal fix: “Ten manufactured casts were evaluated.”

ISSUE 2
Location: Results, sentence 1.
Original: “70 mm for A and 62 mm for B (Table 2).”
Conflict: Table 1 reports µm; the cited table is incorrect.
Severity: major unit error; incorrect cross-reference.
Minimal fix: “70 µm for A and 62 µm for B (Table 1).” Retain the supplied numbers; do not multiply them because the verified record identifies a label error.

ISSUE 3
Location: Discussion, sentence 3.
Original: “B therefore improved patient outcomes.”
Conflict: no patient outcome was measured.
Severity: major scope error.
Minimal fix: “B had a lower mean absolute deviation in this laboratory sample.”

No group-label conflict was found in the supplied excerpts. Citation sequence was not assessed because no citations were supplied.`,
      verify: 'Apply approved corrections to the manuscript, then rerun cross-references and check the final submission PDF.'
    },
    {
      title: 'Moving paragraphs without detaching their citations',
      filled: `Reorganize this fictional teaching section into a logical sequence: measurement definition, evidence, then limitation. Keep source IDs attached to the same claims. Do not add facts or renumber references.

ORIGINAL TEXT:
“The evidence is limited to manufactured casts and one operator (TEACH-C).
Scanner B had a lower observed mean absolute deviation than A in a paired laboratory comparison (TEACH-B).
Mean absolute surface deviation describes the average magnitude of departures from a reference surface in this exercise (TEACH-A).”

VERIFIED TEACHING SOURCE MAP: TEACH-A supports only the supplied definition. TEACH-B supports only the supplied within-study comparison. TEACH-C supports only the specified study's cast/operator limitation. These IDs are invented teaching labels, not references to real papers.

Return the reordered paragraph, a moved-citation log, and verification needs. Do not introduce a clinical recommendation.`,
      answer: `REORDERED PARAGRAPH

Mean absolute surface deviation describes the average magnitude of departures from a reference surface in this exercise (TEACH-A). Scanner B had a lower observed mean absolute deviation than A in a paired laboratory comparison (TEACH-B). The evidence is limited to manufactured casts and one operator (TEACH-C).

MOVED-CITATION LOG
TEACH-A: moved with its definition from sentence 3 to sentence 1.
TEACH-B: stays with the comparison in sentence 2.
TEACH-C: moved with its study limitation from sentence 1 to sentence 3.

VERIFICATION NEEDS
The supplied map supports the reordering only within this exercise. For a real manuscript, open the underlying sources, confirm each claim, and let the reference manager update numbering according to the journal style. None of these teaching IDs is a real bibliographic reference.`,
      verify: 'Check claim-to-source links after reordering and after reference-manager updates; matching citation numbers alone is insufficient.'
    }
  ],
  figures: [
    {
      title: 'A paired dot-plot specification with complete data',
      filled: `Write a reproducible plotting specification using these invented cast-level summaries. Do not generate or alter research images.

DATA (µm): C01 A=60 B=50; C02 A=70 B=65; C03 A=80 B=75. Each row pair represents one distinct manufactured cast measured with both devices. Values are already cast/device summaries. There are three casts and no missing values. This is a teaching dataset, not a research result.
GOAL: Show within-cast A/B changes and all observations. No inferential uncertainty has been estimated. Lower absolute deviation indicates closer agreement with the reference on this laboratory measure only.

State columns, units, observation structure, display, uncertainty labeling, caption, accessibility choices, and checks against source values. Do not add data, p-values, error bars, or clinical claims.`,
      answer: `PLOTTING SPECIFICATION

Input: six rows with cast_id (C01–C03), scanner (A/B), and deviation_um (numeric). Require one unique row per cast/device and retain the cast pairing.

Display: paired dot plot; x-axis scanner A then B, y-axis “Mean absolute surface deviation (µm).” Plot all six supplied values and connect each cast's A/B observations with a thin neutral line. Use shapes or direct cast labels as well as color, readable text, and high contrast.

Scale: choose a labeled range that contains 0–90 µm for these supplied values, without a broken axis. Do not interpolate additional observations or depict the points as independent groups.

Uncertainty: omit error bars because no uncertainty analysis was supplied. Do not label lines as confidence intervals; they connect observations from the same cast.

Suggested caption: “Synthetic teaching data for three manufactured casts. Points show cast/device summaries of mean absolute surface deviation from a reference; lines join the same cast under A and B. No inferential uncertainty is displayed. These values are invented for instruction.”

Checks: six points, three connecting lines, correct A/B assignment, µm units, and exact values 60/50, 70/65, 80/75. Export a reproducible vector or journal-specified format and inspect at its final display size.`,
      verify: 'Regenerate from the supplied data table and check every plotted point and pair. For real figures, use actual verified data and the journal’s image rules.'
    },
    {
      title: 'Repairing a caption that mislabels standard deviations',
      filled: `Audit this hypothetical figure and caption using only the verified record.

METHODS/OUTPUT: Ten distinct manufactured casts, each scanned three times per device A/B. The plotted bars are the means of cast/device averages: A 70 µm and B 62 µm. Error bars are the standard deviations across the 10 cast/device averages; their numeric lengths are not supplied in this exercise. The figure was plotted from the results table using R. No image-generation tool, patient photograph, or image-processing operation was used. The plot is original to the hypothetical authors.
CURRENT CAPTION: “Figure 1. Clinical accuracy in 30 patients. Bars show scanner performance; whiskers show 95% confidence intervals. B improves crown survival.”

Flag units, sample counts, error-bar meaning, comparison scope, source information, and any AI information needing confirmation. Do not invent omitted details.`,
      answer: `CAPTION AUDIT

“30 patients” conflicts with 10 manufactured casts. The three scans per device are technical repeats, not patients or independent casts.

“Clinical accuracy” and the crown-survival claim exceed the laboratory outcome. Replace them with the actual surface-deviation measure.

“95% confidence intervals” is incorrect: the supplied record identifies standard deviations across cast-level averages. Add µm units and explain the aggregation.

REVISED CAPTION

“Figure 1. Mean absolute surface deviation from the laboratory reference for scanners A and B (µm) in 10 manufactured casts. Bars show means after averaging three technical scans within each cast/device; error bars show standard deviations across the 10 cast/device averages. The plot was generated in R from the study results table.”

TO CONFIRM BEFORE SUBMISSION
Check numeric error-bar lengths against the output, the R version in the reproducibility record, and whether AI assisted any plotting code or caption drafting. The supplied record rules out image generation but does not establish that no other AI assistance occurred. Record and disclose actual use as required by the journal.`,
      verify: 'Inspect the actual plot and exported file. A caption audit cannot verify unseen error-bar lengths or replace the AI-use log.'
    }
  ],
  submission: [
    {
      title: 'Comparing journal instructions without inventing fees',
      filled: `Compare two fictional teaching journals using only the complete mock instruction records below. These are not real journals and there are no live URLs; record the source as “supplied mock instructions” and do not invent a website.

Teaching Journal Alpha, mock author instructions, checked 2026-09-08: scope includes prosthodontic laboratory methods; Original Research limit 3,000 words excluding references; maximum 5 figures; applicable reporting checklist required; manuscript, separate title page, figures, cover letter, and checklist required. AI assistance must be described in Methods with tool/version, use date, tasks/sections, validation, and data safeguards. Fees not stated.
Teaching Journal Beta, mock author instructions, checked 2026-09-08: scope is clinical patient outcomes only; Original Research limit 2,500 words; figure limit not stated; manuscript, title page, and cover letter required. Fees, reporting checklist, and AI policy not stated.
OUR STUDY: in vitro scanner comparison on manufactured casts, no patient outcomes.

Compare fit, article type, limits, checklists, AI policy, fees, and files. Mark missing facts UNVERIFIED. Do not invent indexing, metrics, or acceptance probabilities.`,
      answer: `JOURNAL COMPARISON — MOCK INSTRUCTIONS ONLY

Fit: Alpha explicitly includes prosthodontic laboratory methods and is a plausible scope match. Beta specifies clinical patient outcomes; the supplied laboratory study does not meet that described scope.

Article/word limit: Alpha — Original Research, 3,000 words excluding references. Beta — Original Research, 2,500 words; what is excluded is UNVERIFIED.

Figures: Alpha — maximum 5. Beta — UNVERIFIED.

Reporting checklist: Alpha — applicable checklist required, exact checklist depends on design. Beta — UNVERIFIED.

AI disclosure: Alpha — Methods, addressing the six stated details. Beta — UNVERIFIED; silence is not permission to omit disclosure.

Fees: UNVERIFIED for both. Ask or consult actual current official instructions before budgeting.

Files: Alpha — manuscript, separate title page, figures, cover letter, checklist. Beta — manuscript, title page, cover letter.

Source for every entry: supplied mock instructions, checked 2026-09-08. No real journal website was searched. Before a real submission, replace these records with current official URLs, dates, and article-specific requirements.`,
      verify: 'Use current official journal instructions and check the submission portal. These fictional limits and policies must not be applied to real journals.'
    },
    {
      title: 'A cover letter using only supplied declarations',
      filled: `Draft a concise cover letter for this fictional teaching submission. Do not invent assurances.

JOURNAL: Teaching Journal Alpha (fictional); scope includes prosthodontic laboratory methods.
TITLE: “Paired comparison of two intraoral scanners on manufactured dental casts.”
STUDY: Ten manufactured casts, paired A/B comparison of mean absolute deviation. B had a lower observed mean in this laboratory sample. No clinical benefit was measured. The contribution is a transparent paired measurement workflow, not a claim of being first.
ACTUAL DECLARATIONS WITHIN THIS SCENARIO: All authors reviewed the manuscript and approved submission. It is not under consideration elsewhere. No part has been published or posted as a preprint. Authors report no conflicts and no external funding. The institution supplied a written determination that this manufactured-cast study did not require human-subject review; no reference number is available. An AI tool assisted language editing of the Introduction and Discussion; the authors checked every change and the manuscript's Methods contains the detailed tool/version/date/validation/privacy disclosure. The corresponding author in this fictional scenario is Dr. Example Researcher, Teaching Dental Laboratory.

Explain question, contribution, and fit. Keep ethics wording to the supplied determination; do not invent an approval number.`,
      answer: `Dear Editor,

Please consider “Paired comparison of two intraoral scanners on manufactured dental casts” for Original Research in Teaching Journal Alpha.

This in vitro study compares mean absolute surface deviation for two scanners on the same 10 manufactured casts. Its contribution is a transparent paired measurement workflow relevant to your journal's stated interest in prosthodontic laboratory methods. The findings are limited to the laboratory conditions and do not establish clinical benefit.

All authors have reviewed the manuscript and approved this submission. The work is not under consideration elsewhere and has not been published or posted as a preprint. The authors report no conflicts of interest and no external funding. The institution determined in writing that this manufactured-cast study did not require human-subject review.

AI-assisted language editing was used in the Introduction and Discussion. Authors checked the changes, and a detailed disclosure is included in Methods.

Sincerely,
Dr. Example Researcher
Teaching Dental Laboratory

Teaching note: each declaration above comes from the supplied fictional scenario. Replace it with the real authors' confirmed record before using a letter.`,
      verify: 'Obtain all authors’ actual declarations and verify the journal’s required letter content; never copy teaching assurances into a real submission.'
    }
  ],
  'peer-review': [
    {
      title: 'Separating planned edits from completed responses',
      filled: `Create a response matrix using only these invented reviewer comments and the team's actual planned actions in this teaching scenario. No confidential peer-review text is included.

R1.1: “Clarify the experimental unit and treatment of three scans per cast.” Planned action: add a Methods paragraph explaining cast-level averaging. The manuscript has not yet been edited. Intended location: Methods, Statistical analysis.
R1.2: “Your conclusion implies clinical superiority.” Planned action: replace the last Discussion sentence with a laboratory-only conclusion. Not yet edited. Intended location: Discussion, final paragraph.
R2.1: “Report scanner calibration.” Planned action: the laboratory lead must check the contemporaneous equipment log before any reply; no calibration detail has been verified. Intended location: Methods, Scanning protocol.

Return comment ID, issue, draft response, required action, location, and status. Mark all pending actions NOT YET DONE. Do not claim new experiments, analyses, or edits have occurred.`,
      answer: `R1.1 — Experimental unit
Draft response for planning: “We will clarify how the three technical scans are averaged within each cast/device and identify the cast as the paired unit.”
Action: draft the paragraph, have the statistician verify it, and insert it.
Location: Methods, Statistical analysis.
Status: NOT YET DONE. Convert to a completed-change statement only after checking the revised manuscript.

R1.2 — Clinical overstatement
Draft response for planning: “We will limit the conclusion to surface deviation under the laboratory conditions.”
Action: replace the final sentence and check consistency with the Abstract.
Location: Discussion, final paragraph.
Status: NOT YET DONE.

R2.1 — Calibration details
Draft response for planning: “We are checking the contemporaneous calibration record and will report only verified details.”
Action: laboratory lead reviews the equipment log; document what is established and any unresolved limitation.
Location: Methods, Scanning protocol.
Status: NOT YET DONE. Do not state that calibration occurred or invent its frequency.

These are internal planning replies, not a final response letter. Replace intended locations with verified page/line references after revision.`,
      verify: 'Check journal and institutional confidentiality rules before using any real review material with AI. Verify every claimed change in the revised manuscript.'
    },
    {
      title: 'Catching a response letter that claims absent analyses',
      filled: `Compare this fictional response letter with the complete revised excerpts supplied. Identify absent changes, contradictions, unresolved comments, and wrong locations. Give minimal corrections without manufacturing evidence.

RESPONSE LETTER:
R1.1: “We now identify the cast as the unit and average repeats in Methods page 4, lines 80–82.”
R1.2: “We removed all clinical superiority claims in Discussion page 8, lines 160–162.”
R2.1: “We performed a new sensitivity analysis and added its confidence interval to Table 2.”

ACTUAL REVISION:
Methods page 5, lines 100–102: “Three technical scans were averaged within each cast/device. The cast was the unit for the paired comparison.”
Discussion page 8, lines 160–162: “Scanner B is clinically superior and should be preferred in all patients.”
Table 2: the original descriptive means only; no sensitivity analysis or confidence interval. The analysis log records no new analysis.

All text is invented for teaching and contains no real confidential reviewer material.`,
      answer: `R1.1 — Substantive change present; location wrong.
The Methods wording addresses the unit and averaging, but it is on page 5, lines 100–102.
Minimal correction: update the response's page/line reference after confirming the final pagination.

R1.2 — Claimed correction absent.
The supplied Discussion still claims clinical superiority and universal preference.
Required action: revise that sentence to a conclusion limited to the laboratory outcome; then check the Abstract and response letter. Until then, mark the comment unresolved rather than saying the claim was removed.

R2.1 — Claimed analysis absent.
Neither Table 2 nor the analysis log supports a new sensitivity analysis or interval.
Minimal correction: remove the false completed-action claim. The team must decide whether an additional analysis is scientifically justified, perform and document it if appropriate, or explain why it was not undertaken. Do not invent a result to close the comment.

Ready-to-submit status: not ready. Two substantive comments remain unresolved, and the location for the completed edit needs correction.`,
      verify: 'Read the final response alongside the actual manuscript and analysis log. Recheck locations after the final PDF is generated.'
    }
  ],
  conference: [
    {
      title: 'A complete eight-minute talk storyboard',
      filled: `Storyboard an 8-minute dental research talk using only this approved fictional teaching abstract. The 8 minutes excludes a separate 2-minute Q&A; those timings are supplied scenario requirements, not rules of a real conference.

ABSTRACT: Ten manufactured casts, paired scanners A/B, three scans per cast/device averaged within cast. Mean absolute surface deviation: A 70 µm, B 62 µm. Supplied mean paired difference B minus A -8 µm (95% CI -13 to -3 µm). One operator and laboratory conditions limit generalizability. No clinical outcome or mechanism was measured.
DISCLOSURES: No external funding or conflicts in this fictional scenario. AI assisted outline drafting; authors verified all statements against the approved record. No patient images or generated research images are used.
AVAILABLE VISUALS: A text workflow diagram of the paired design and a verified summary table with the supplied means/difference/interval. No individual cast values are available, so do not invent a scatterplot.

For each slide give purpose, title, evidence/visual, speaking point, and time in minutes. Include disclosures, limitations, and a measured conclusion. Total exactly 8 minutes.`,
      answer: `1. QUESTION AND DISCLOSURES — 0.5 min
Title: “Two scanners, the same casts.”
Visual: study question plus funding/conflict and AI-outline disclosures.
Speaking point: this is a laboratory comparison with author-verified content.

2. WHY THIS MEASURE? — 1.0 min
Title: “Measure agreement with a reference.”
Visual: a plain-text definition of mean absolute surface deviation (µm).
Speaking point: this measure does not directly establish clinical benefit.

3. PAIRED DESIGN — 1.5 min
Title: “Ten casts; technical repeats within each device.”
Visual: design diagram, both devices on each cast, three scans averaged.
Speaking point: casts are the paired units; scan count is not sample size.

4. VERIFIED RESULTS — 2.0 min
Title: “Lower mean deviation for B in this sample.”
Visual: supplied summary table: A 70, B 62 µm; B minus A -8 µm, 95% CI -13 to -3 µm.
Speaking point: preserve contrast direction and distinguish the mean difference from individual observations.

5. LIMITATIONS — 1.5 min
Title: “What this experiment cannot establish.”
Visual: one operator, manufactured casts, no clinical outcomes, no mechanism test.
Speaking point: discuss transferability without inventing additional validation.

6. CONCLUSION — 1.5 min
Title: “A bounded laboratory finding.”
Visual: one-sentence conclusion and the research question for future clinical evaluation.
Speaking point: B had lower mean deviation here; clinical consequences remain unmeasured.

Total speaking time: 8.0 minutes. Separate Q&A: 2.0 minutes. Rehearse and adjust pacing without removing essential limitations.`,
      verify: 'Compare slides against the approved abstract and current event rules. Time an actual rehearsal and check readability at projection size.'
    },
    {
      title: 'Honest answers to difficult conference questions',
      filled: `Generate seven challenging questions and concise answers for this fictional study. Use only supplied evidence and label unanswered questions.

SUMMARY: Ten manufactured casts; both scanners A/B used on each cast; three successful scans per device averaged within cast. Mean absolute deviation A 70 µm, B 62 µm; supplied paired difference -8 µm (95% CI -13 to -3 µm). One operator. Scanner order was counterbalanced in the study record. Calibration documentation is not included in this briefing. Sample-size rationale, statistical software details, and interval method are not included. No patient outcomes, mechanism tests, economic analysis, or sensitivity analyses were performed.

Cover design, experimental unit, measurement, analysis, bias, generalizability, and clinical relevance. Do not invent calibration, power, methods, or additional analyses.`,
      answer: `Q1. “Why is your sample size not 60?”
A: “We studied 10 distinct casts. The 60 scan files were technical observations; three scans were averaged within each cast/device before the paired comparison.”

Q2. “Did scanner order favor one device?”
A: “The supplied study record says order was counterbalanced. That addresses one potential order issue, but it does not remove every source of bias.”

Q3. “How did you verify calibration?”
A: “The calibration documentation is not in this briefing. I need to check the contemporaneous record before giving you the details.” Status: not answerable from this summary.

Q4. “Was the study adequately powered, and how was the interval computed?”
A: “Those methods are not included in the briefing. I would refer to the verified protocol and analysis report rather than infer them from the interval.” Status: requires the study record.

Q5. “Does a difference of -8 µm mean every cast improved by 8 µm?”
A: “No. It is the supplied mean paired difference, B minus A. Individual cast differences are not supplied here.”

Q6. “Will this result hold for other operators and patients?”
A: “We used one operator and manufactured casts. Generalizability to other operators and clinical conditions was not established.”

Q7. “Should clinicians switch scanners?”
A: “This study measured a laboratory deviation outcome. It did not evaluate patient outcomes or costs, so it cannot support that recommendation by itself.”`,
      verify: 'Prepare verified backup material for methods questions. If a detail is unavailable, say so and follow up from the study record.'
    }
  ]
};
