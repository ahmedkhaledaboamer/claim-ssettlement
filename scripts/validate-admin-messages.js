const fs = require('fs');
const path = require('path');
const messagesDir = path.join(__dirname, '../messages');
const requiredKeys = [
  'administrativeDepartmentPage.hero.badge',
  'administrativeDepartmentPage.hero.titleLine1',
  'administrativeDepartmentPage.hero.cta',
  'administrativeDepartmentPage.introduction.headingMain',
  'administrativeDepartmentPage.introduction.features',
  'administrativeDepartmentPage.whatWeDo.services',
  'administrativeDepartmentPage.clientJourney.stageLabel',
  'administrativeDepartmentPage.operatingSystem.layerLabel',
  'administrativeDepartmentPage.serviceLevels.mostPopular',
  'administrativeDepartmentPage.qualityStandards.approvedBy',
  'administrativeDepartmentPage.clientTypes.description',
  'administrativeDepartmentPage.faq.noAnswerTitle',
  'administrativeDepartmentPage.conclusion.cta',
];
const locales = ['en', 'ar', 'fr', 'es', 'ja', 'de', 'pt', 'it', 'hi', 'ru', 'zh-hans'];
function get(obj, pathStr) {
  const parts = pathStr.split('.');
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}
let hasError = false;
for (const locale of locales) {
  const file = path.join(messagesDir, `${locale}.json`);
  if (!fs.existsSync(file)) {
    console.error(`Missing file: ${locale}.json`);
    hasError = true;
    continue;
  }
  let data;
  try {
    data = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    console.error(`${locale}.json: Parse error`, e.message);
    hasError = true;
    continue;
  }
  for (const key of requiredKeys) {
    const val = get(data, key);
    if (val === undefined) {
      console.error(`${locale}.json: Missing key "${key}"`);
      hasError = true;
    }
  }
  const introFeatures = get(data, 'administrativeDepartmentPage.introduction.features');
  if (Array.isArray(introFeatures) && introFeatures.length !== 4) {
    console.error(`${locale}.json: introduction.features must have 4 items, got ${introFeatures.length}`);
    hasError = true;
  }
  const services = get(data, 'administrativeDepartmentPage.whatWeDo.services');
  if (Array.isArray(services) && services.length !== 10) {
    console.error(`${locale}.json: whatWeDo.services must have 10 items, got ${services.length}`);
    hasError = true;
  }
}
if (!hasError) console.log('All locale files have required administrativeDepartmentPage keys.');
