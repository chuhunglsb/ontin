// convertPptxToLesson.js
// This script reads PPTX files from the PPTX/ folder, converts each slide into a lesson
// object compatible with src/data/defaultPresentation.js, and writes the generated
// lessons into grade‑specific data files.

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { PPTXParser, PowerPointParser } from '@cliftonc/pptx-to-json';

const PPTX_DIR = path.resolve('PPTX');
const OUTPUT_DIR = path.resolve('src/data');

// Utility: generate a random 6‑digit pin code as a string
function randomPin() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Map grade from filename pattern, e.g. "grade3_topic.pptx" → 3
function extractGrade(filename) {
  const match = filename.match(/grade(\d)/i);
  return match ? parseInt(match[1], 10) : null;
}

// Build a content slide from PPTX slide data
function buildContentSlide(pptSlide) {
  const title = pptSlide.title || '';
  const text = pptSlide.text ? pptSlide.text.join('\n') : '';
  const image = pptSlide.images && pptSlide.images[0] ? pptSlide.images[0].src : null;
  return {
    type: 'content',
    title,
    content: text,
    ...(image && { imageUrl: image }),
  };
}

// Very simple heuristics to generate an interactive slide from a content slide
function buildInteractiveSlide(contentSlide) {
  // If the slide contains a list with >2 items, create a checkbox question
  const lines = contentSlide.content ? contentSlide.content.split('\n') : [];
  const listItems = lines.filter(l => l.trim().startsWith('-') || l.trim().startsWith('•'));
  if (listItems.length >= 3) {
    const correct = listItems.slice(0, Math.min(2, listItems.length));
    const distractors = ['Option A', 'Option B', 'Option C'];
    return {
      type: 'checkbox',
      title: `Select all that apply: ${contentSlide.title}`,
      question: `Which items belong to the topic?`,
      options: [...correct, ...distractors].map(o => o.replace(/^[-•]\s*/, '').trim()),
      correctIndices: correct.map((_, i) => i),
      timeLimit: 45,
      points: 1000,
      explanation: 'Review the slide content for the correct items.',
    };
  }

  // Otherwise, create a multiple‑choice question from the first sentence
  const firstSentence = contentSlide.content?.split(/[.!?]\s/)[0] || contentSlide.title;
  const correct = firstSentence.trim();
  const options = [correct, 'Incorrect A', 'Incorrect B', 'Incorrect C'];
  // shuffle options
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  const correctIndex = options.indexOf(correct);
  return {
    type: 'multiple_choice',
    title: `Question: ${contentSlide.title}`,
    question: `Select the correct statement based on the slide.`,
    options,
    correctIndex,
    timeLimit: 30,
    points: 1000,
    explanation: 'Refer to the slide for the answer.',
  };
}

// Process all PPTX files
async function processPptxFiles() {
  const files = fs.readdirSync(PPTX_DIR).filter(f => f.toLowerCase().endsWith('.pptx'));
  const lessonsByGrade = {};

  for (const file of files) {
    const filePath = path.join(PPTX_DIR, file);
    console.log(`Parsing ${file}`);
    const buffer = fs.readFileSync(filePath);
    const parser = new PPTXParser();
    const json = await parser.buffer2json(buffer);
    const slides = [];
    json.slides.forEach(pptSlide => {
      const contentSlide = buildContentSlide(pptSlide);
      slides.push(contentSlide);
      const interactive = buildInteractiveSlide(contentSlide);
      slides.push(interactive);
    });

    const grade = extractGrade(file) || 3; // fallback to grade 3 if not detectable
    const lesson = {
      id: `lesson_${path.basename(file, '.pptx')}`,
      title: json.title || path.basename(file, '.pptx'),
      grade,
      pinCode: randomPin(),
      subject: 'Tin học',
      slides,
    };

    if (!lessonsByGrade[grade]) lessonsByGrade[grade] = [];
    lessonsByGrade[grade].push(lesson);
  }

  // Write each grade file
  for (const [grade, lessons] of Object.entries(lessonsByGrade)) {
    const fileName = `lessonsGrade${grade}.js`;
    const outPath = path.join(OUTPUT_DIR, fileName);
    const content = `// Auto‑generated from PPTX files
export const LESSONS_GRADE_${grade} = ${JSON.stringify(lessons, null, 2)};\n`;
    fs.writeFileSync(outPath, content, 'utf8');
    console.log(`Written ${outPath}`);
  }
}

processPptxFiles();

// Optional: after generation, stage, commit and push (used by npm script "export-and-push")
if (process.argv.includes('--push')) {
  try {
    execSync('git add .', { stdio: 'inherit' });
    execSync('git commit -m "chore: import PPTX lessons"', { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });
    console.log('Push completed. Vercel will auto‑deploy.');
  } catch (e) {
    console.error('Git push failed – you may need to configure your token.');
  }
}
