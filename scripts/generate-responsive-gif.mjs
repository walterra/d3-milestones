import puppeteer from 'puppeteer-core';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const storybookUrl = process.env.STORYBOOK_URL || 'http://127.0.0.1:6007';
const output = process.argv[2] || 'docs/assets/d3-milestones-responsive.gif';
const chromePath =
  process.env.CHROME_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const frames = '/tmp/d3-milestones-responsive-frames';
fs.rmSync(frames, { recursive: true, force: true });
fs.mkdirSync(frames, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 1 });
await page.goto(storybookUrl, { waitUntil: 'networkidle0', timeout: 120000 });

await page.evaluate((storybookUrl) => {
  document.head.innerHTML =
    '<meta charset="utf-8"><style>*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden}body{background:#eef1f5;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#17202a}.stage{width:1600px;height:900px;padding:24px 48px 30px;display:flex;flex-direction:column}.heading{height:72px;display:flex;justify-content:space-between;align-items:flex-start}.title{font-size:28px;font-weight:700;letter-spacing:-.4px}.subtitle{font-size:15px;color:#667085;margin-top:6px}.badge{margin-top:4px;background:#fff;border:1px solid #d6dae1;border-radius:18px;padding:8px 14px;font:600 14px ui-monospace,SFMono-Regular,Menlo,monospace}.surface{height:774px;display:flex;justify-content:center;align-items:stretch}.frame{height:100%;border:1px solid #c7ccd5;border-radius:12px;box-shadow:0 12px 34px #27364a24;background:#fff;overflow:hidden}iframe{display:block;width:100%;height:100%;border:0;background:#fff}</style>';
  document.body.innerHTML =
    '<main class="stage"><header class="heading"><div><div class="title">Responsive milestone layout</div><div class="subtitle">Labels automatically reflow as the available width changes</div></div><code class="badge"><span id="gif-width">1400</span> px</code></header><section class="surface"><div class="frame" id="gif-frame" style="width:1400px"><iframe id="gif-story"></iframe></div></section></main>';
  document.querySelector('#gif-story').src =
    `${storybookUrl}/iframe.html?id=d3-milestones--vikings&viewMode=story`;
}, storybookUrl);

await page.waitForFunction(
  () => {
    const frame = document.querySelector('#gif-story');
    return frame?.contentDocument?.querySelector(
      '.milestones__horizontal_line',
    );
  },
  { timeout: 120000 },
);
await page.evaluate(() => {
  document
    .querySelector('#gif-story')
    .contentDocument.querySelector('h2').style.display = 'none';
  window.__gifAxisY = 402;
});
await new Promise((resolve) => setTimeout(resolve, 250));

const widths = [];
for (let i = 0; i < 12; i++) widths.push(1400);
for (let i = 1; i <= 30; i++) {
  const eased = (1 - Math.cos((Math.PI * i) / 30)) / 2;
  widths.push(Math.round(1400 - 600 * eased));
}
for (let i = 0; i < 12; i++) widths.push(800);
for (let i = 1; i <= 30; i++) {
  const eased = (1 - Math.cos((Math.PI * i) / 30)) / 2;
  widths.push(Math.round(800 + 600 * eased));
}
for (let i = 0; i < 12; i++) widths.push(1400);

for (let i = 0; i < widths.length; i++) {
  const width = widths[i];
  await page.evaluate((value) => {
    document.querySelector('#gif-frame').style.width = `${value}px`;
    document.querySelector('#gif-width').textContent = value;
  }, width);
  await new Promise((resolve) => setTimeout(resolve, 45));
  await page.evaluate(() => {
    const doc = document.querySelector('#gif-story').contentDocument;
    const timeline = doc.querySelector('.timeline');
    timeline.style.transform = '';
    const line = doc.querySelector('.milestones__horizontal_line');
    const delta = window.__gifAxisY - line.getBoundingClientRect().top;
    timeline.style.transform = `translateY(${delta}px)`;
  });
  await new Promise((resolve) => setTimeout(resolve, 20));
  await page.screenshot({
    path: path.join(frames, `frame-${String(i).padStart(4, '0')}.jpg`),
    type: 'jpeg',
    quality: 90,
  });
}

await browser.close();

fs.mkdirSync(path.dirname(output), { recursive: true });
execFileSync('magick', [
  '-delay',
  '7',
  '-loop',
  '0',
  path.join(frames, 'frame-*.jpg'),
  '-resize',
  '960x540',
  '-colors',
  '192',
  '-layers',
  'Optimize',
  output,
]);
console.log(`Created ${output}`);
