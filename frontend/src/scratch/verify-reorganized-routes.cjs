const puppeteer = require('puppeteer-core');
const fs = require('fs');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const ARTIFACT_DIR = '/Users/cs/.gemini/antigravity/brain/444bd338-6729-44c3-980c-5a5f25d46973';

async function run() {
  console.log('Launching browser for reorganization test...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  const routes = [
    { name: 'Home Page', url: 'http://localhost:5173/', selector: '#home', file: 'reorg-home.png' },
    { name: 'Academy Overview', url: 'http://localhost:5173/#academy', selector: '#academy-overview', file: 'reorg-academy-overview.png' },
    { name: 'School Page', url: 'http://localhost:5173/#academy/school', selector: '#school-hero', file: 'reorg-academy-school.png' },
    { name: 'After +2 Page', url: 'http://localhost:5173/#academy/after-plus-two', selector: '#plus2-hero', file: 'reorg-academy-plus2.png' },
    { name: 'College Programs', url: 'http://localhost:5173/#academy/college-programs', selector: '#college-hero', file: 'reorg-academy-college.png' },
    { name: 'Graduates', url: 'http://localhost:5173/#academy/graduates', selector: '#graduates-hero', file: 'reorg-academy-graduates.png' },
    { name: 'Internships', url: 'http://localhost:5173/#academy/internships', selector: '#internships-hero', file: 'reorg-academy-internships.png' },
    { name: 'Skill Assessment', url: 'http://localhost:5173/#academy/skill-assessment', selector: '#assessment-hero', file: 'reorg-academy-assessment.png' },
    { name: 'Academy FAQ', url: 'http://localhost:5173/#academy/faq', selector: '#academy-faq', file: 'reorg-academy-faq.png' },
    { name: 'Technologies', url: 'http://localhost:5173/#technologies', selector: 'main', file: 'reorg-technologies.png' },
    { name: 'Clean Path: /academy/school', url: 'http://localhost:5173/academy/school', selector: '#school-hero', file: 'reorg-path-school.png' },
  ];

  for (const r of routes) {
    console.log(`Testing ${r.name} (${r.url})...`);
    await page.goto(r.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForSelector(r.selector, { timeout: 8000 });
    await new Promise(res => setTimeout(res, 800));
    await page.screenshot({ path: `${ARTIFACT_DIR}/${r.file}`, clip: { x: 0, y: 0, width: 1440, height: 750 } });
    console.log(`  -> OK: ${r.file}`);
  }

  console.log('All routes verified successfully!');
  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
