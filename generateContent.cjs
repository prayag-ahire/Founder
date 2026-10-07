const fs = require('fs');
const path = require('path');

const faqs = [
  { q: 'Why do Indian VCs insist on a Pvt Limited company over an LLP?', a: 'In India, Venture Capitalists (VCs) strongly prefer Private Limited companies because the Companies Act, 2013 allows for clear issuance of equity, preference shares, and ESOPs.', tags: ['Pvt Limited', 'LLP', 'Equity & ESOP', 'Funding'] },
  { q: 'What is DPIIT Recognition and why does my startup need it?', a: 'Registering with the Department for Promotion of Industry and Internal Trade (DPIIT) under the Startup India initiative gives you significant benefits.', tags: ['Gov Schemes', 'Taxes & GST', 'Setup'] },
  { q: 'When is it mandatory to register for GST in India?', a: 'Normally, a business needs to register for GST if its aggregate turnover exceeds ₹40 Lakhs for goods.', tags: ['Taxes & GST', 'Compliance'] },
  { q: 'How are ESOPs taxed for startup employees in India?', a: 'ESOPs are taxed at two stages in India: First, as perquisite under salary when the employee exercises the option.', tags: ['Equity & ESOP', 'Taxes & GST'] },
  { q: 'Can a foreign investor (FDI) invest in an Indian LLP?', a: 'Yes, 100% Foreign Direct Investment (FDI) is allowed in LLPs under the automatic route.', tags: ['LLP', 'FDI', 'Funding'] },
  { q: 'What is the Startup India Seed Fund Scheme (SISFS)?', a: 'SISFS aims to provide financial assistance to early-stage startups for proof of concept.', tags: ['Gov Schemes', 'Funding'] },
  { q: 'Is an audit mandatory for a One Person Company (OPC)?', a: 'Yes. In India, a statutory audit by a practicing Chartered Accountant is mandatory for all registered companies.', tags: ['One Person Company', 'Compliance'] },
  { q: 'Does a Sole Proprietorship have a separate legal identity?', a: 'No, a Sole Proprietorship and its owner are considered the exact same legal entity in India.', tags: ['Sole Proprietorship', 'Liability'] },
  { q: 'What is Angel Tax and does it still apply?', a: 'Historically, Angel Tax was levied under Section 56(2)(viib) of the Income Tax Act. It has now been abolished.', tags: ['Funding', 'Taxes & GST'] }
];

fs.mkdirSync(path.join(__dirname, 'src', 'content', 'faqs'), { recursive: true });
for (let i = 1; i <= 20; i++) {
  const base = faqs[(i - 1) % faqs.length];
  const content = `---
question: "${base.q} [${i}]"
tags: ${JSON.stringify(base.tags)}
order: ${i}
---

${base.a}

This allows for **markdown formatting**, [links](#), and more inside answers!`;
  fs.writeFileSync(path.join(__dirname, 'src', 'content', 'faqs', `faq-${i}.md`), content);
}

const startups = [
  { name: 'Stripe', desc: 'Financial infrastructure for the internet.', logo: 'S' },
  { name: 'Vercel', desc: 'Develop. Preview. Ship. For the best frontend teams.', logo: 'V' },
  { name: 'OpenAI', desc: 'Creating safe AGI that benefits all of humanity.', logo: 'O' },
  { name: 'Notion', desc: 'One workspace. Every team.', logo: 'N' },
  { name: 'Figma', desc: 'How the internet builds software.', logo: 'F' },
  { name: 'Supabase', desc: 'The open source Firebase alternative.', logo: 'SB' }
];

fs.mkdirSync(path.join(__dirname, 'src', 'content', 'startups'), { recursive: true });
for (let i = 1; i <= startups.length; i++) {
  const s = startups[i - 1];
  const content = `---
name: "${s.name}"
description: "${s.desc}"
logoText: "${s.logo}"
---

Welcome to the full profile for **${s.name}**. 

Here you can put detailed markdown content describing the company, their founders, tech stack, and more.`;
  fs.writeFileSync(path.join(__dirname, 'src', 'content', 'startups', `startup-${s.name.toLowerCase()}.md`), content);
}

console.log('Successfully generated content collections.');
