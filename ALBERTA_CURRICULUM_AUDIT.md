# Alberta Curriculum Audit

## Scope

This audit compares the current app structure in [app.js](C:\Users\comfo\Documents\Codex\2026-04-23-can-you-develop-a-mathematics-app\app.js) against Alberta-style curriculum expectations for:

- Mathematics
- English Language Arts

The purpose is to answer two questions honestly:

1. Does the app broadly cover the expected strands/topics?
2. Can we claim full Alberta curriculum alignment for all grades right now?

## Important Note

At the time of this audit, the official Alberta curriculum site was difficult to verify through automated search and direct fetch in this environment. The current findings are therefore:

- based on the app's actual topic map and question generators
- compared against known Alberta curriculum strand structure
- suitable for product planning
- **not yet a line-by-line official outcome certification**

Because of that, the app should **not** yet be described as:

- "fully Alberta curriculum aligned"
- "complete for all Alberta outcomes in all grades"

## Overall Verdict

### Mathematics

Status: **Broad coverage exists, but not full confirmed alignment**

The app now includes many major mathematics strands across Grades 1 to 12, including:

- number sense
- operations
- fractions, decimals, percent
- algebra
- functions and graphing
- geometry and measurement
- data analysis and probability
- trigonometry
- financial math
- calculus

However, the app still has two major Alberta-alignment limitations:

1. **Senior high is organized by grade, not by Alberta course pathway**
   - Alberta senior high mathematics is normally course-based rather than simple Grade 10/11/12 buckets.
   - A fully Alberta-aligned design would separate pathways such as:
     - Math 10C
     - Math 20-1
     - Math 20-2
     - Math 30-1
     - Math 30-2
     - Applied / workplace-style strands where appropriate

2. **Coverage is strand-broad, not outcome-complete**
   - Many topics exist.
   - That is not the same as confirming every outcome, every concept cluster, and every expected progression.

### English Language Arts

Status: **Not complete enough to claim full Alberta curriculum alignment**

The current English side includes:

- grammar
- vocabulary
- writing
- Grade 9 PAT Part A
- Grade 9 PAT Part B
- Grade 6 PAT Part B

This is useful practice content, but it is **not** yet a full Alberta ELA program.

Major Alberta-style ELA areas that are still incomplete or missing across grades include:

- reading comprehension across all grades
- literature study
- oral language / speaking and listening
- viewing and representing / visual literacy
- text forms and genre study across all grades
- full response-to-text work
- research / inquiry / information literacy progression
- course-specific senior English structures

## Mathematics Audit By Grade Band

### Grades 1 to 3

Status: **Mostly broad-topic coverage present**

Current app coverage includes:

- counting and ordering
- place value / numbers
- addition and subtraction
- early multiplication / division
- shapes and space
- measurement and time
- patterns and graphs
- equal parts / basic fractions

Audit note:

- These grades appear broadly represented.
- They still need a formal strand-by-strand checklist to ensure no foundational area is underrepresented.

### Grades 4 to 6

Status: **Broad-topic coverage present**

Current app coverage includes:

- whole numbers and number sense
- multiplication and division
- fractions and decimals
- percent foundations
- geometry
- measurement and area / volume
- patterns and early algebra
- graphs, tables, and data
- ratios / rates
- integers foundations

Audit note:

- Broad coverage is present.
- Some categories are merged rather than clearly separated by outcome family.
- This is acceptable for practice, but not yet a full curriculum map.

### Grade 7

Status: **Strong topic coverage**

Current Grade 7 maths app coverage includes:

- integers
- fractions
- decimals
- percents and decimal connections
- patterns and expressions
- algebra
- coordinates and transformations
- geometry and measurement
- circles
- central tendency / data
- probability
- ratios and proportions

Audit note:

- Grade 7 is one of the stronger mapped grades.
- It broadly matches the kinds of topics expected in Alberta junior high.
- It still needs outcome-level sequencing validation and more careful difficulty calibration across levels.

### Grades 8 and 9

Status: **Good broad coverage, still needs audit completion**

Current app coverage includes:

- rational and irrational numbers
- exponents and roots
- linear equations and inequalities
- functions / graphing / linear patterns
- geometry / transformations / Pythagorean theorem
- statistics and probability
- financial math
- quadratics introduction

Audit note:

- Major junior high strands are present.
- More detailed validation is still needed for:
  - progression order
  - balance between procedural and conceptual questions
  - avoidance of repeated or oversimplified prompts

### Grades 10 to 12

Status: **Not fully Alberta-aligned yet**

Current app coverage includes:

- advanced algebra
- functions
- graphing
- trigonometry
- statistics
- financial math
- logarithms / exponential models
- advanced functions
- calculus

Audit note:

- Senior topics exist.
- Some weak senior prompts have already been corrected in the code, especially in functions.
- But this is still **not** a full Alberta senior-high curriculum structure because it is not separated into Alberta course pathways.
- This is the biggest mathematics alignment gap.

## English Audit By Grade Band

### Grades 1 to 6

Status: **Partial coverage only**

Current app coverage includes:

- grammar
- vocabulary
- writing

What is missing for fuller Alberta-style ELA coverage:

- regular reading comprehension passages
- literary response
- nonfiction / informational reading
- listening / speaking tasks
- viewing / visual text interpretation
- grade-specific text features and comprehension progression

### Grades 7 to 9

Status: **Partial coverage with useful PAT prep**

Current app coverage includes:

- grammar
- vocabulary
- writing
- Grade 6 PAT Part B
- Grade 9 PAT Part A
- Grade 9 PAT Part B

Audit note:

- This is stronger than the lower grades because PAT practice exists.
- Even so, it is still not a complete Alberta ELA map across reading, writing, speaking, listening, viewing, and representing.

### Grades 10 to 12

Status: **Significant gap**

Current app coverage includes:

- grammar
- vocabulary
- writing

Major missing Alberta-style senior English areas include:

- literature and text study
- essay / critical / personal response structures by course level
- rhetorical analysis
- reading comprehension sets
- oral communication outcomes
- viewing / media analysis
- formal research and synthesis work

## Current Product Truth

Right now, the most accurate description of the app is:

> A broad practice hub for maths and English skills with many Alberta-relevant topics, but not yet a fully audited Alberta curriculum-complete program.

That wording is honest.

The following claims would currently be too strong:

- "all topics for Alberta math and English are fully covered"
- "every quiz is in line with Alberta curriculum"
- "complete Alberta curriculum for Grades 1 to 12"

## Highest-Priority Gaps To Fix

### Priority 1: Senior High Math Structure

Convert Grades 10 to 12 maths from generic grade buckets into Alberta-style course pathways.

Recommended future structure:

- Math 10C
- Math 20-1
- Math 20-2
- Math 30-1
- Math 30-2
- optional applied / workplace-support strands if desired

### Priority 2: English Reading Program

Add true reading comprehension tracks by grade:

- fiction
- nonfiction
- poetry
- visual/media texts
- inference
- main idea
- author's purpose
- evidence-based response

### Priority 3: English Outcome Expansion

Add grade-band coverage for:

- grammar
- vocabulary
- reading
- writing
- oral language
- viewing / representing

### Priority 4: Outcome-Level Math Checklist

Create a proper per-grade checklist for:

- number
- patterns / algebra
- shape / space / geometry
- measurement
- statistics / probability

Then mark each as:

- covered
- partly covered
- missing

## Suggested Next Build Order

1. Build a **Math Alberta checklist by grade**
2. Rebuild **Senior High Math by Alberta course stream**
3. Add **English Reading** as a full track across grades
4. Expand **English Writing** by text type and grade band
5. Add **ELA comprehension passage sets** across grades

## Immediate Recommendation

For now, the app can safely be described as:

> Grammar & Maths Mastery Hub with broad topic practice and Alberta-relevant learning support.

It should **not** yet be marketed as a fully complete Alberta curriculum program until the gaps above are addressed.
