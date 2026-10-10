export const site = {
  name: '#Founder',
  legalName: 'Founder by Karpav Technology',
  company: 'Karpav Technology',
  description:
    'Free guides for Indian founders: how to incorporate a startup in India, Pvt Ltd vs LLP, GST, DPIIT recognition, ESOPs, and real founder stories.',
  email: 'hello@karpav.technology',
  reddit: 'https://www.reddit.com/r/indianstartups/',
  locale: 'en_IN',
  language: 'en-IN',
  country: 'India',
  keywords: [
    'startup incorporation India',
    'how to register a startup in India',
    'Pvt Ltd vs LLP',
    'Private Limited company India',
    'DPIIT recognition',
    'Startup India',
    'GST registration for startups',
    'ESOP tax India',
    'angel tax India',
    'Indian founder stories',
    'OPC vs Pvt Ltd',
    'NRI startup India',
  ],
};

export const orgTags = [
  'Sole Proprietorship',
  'LLP',
  'Pvt Limited',
  'One Person Company',
  'Partnership Firm',
] as const;

export function markdownToPlain(md: string, max = 220) {
  const text = md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`[\]]/g, ' ')
    .replace(/!\([^)]*\)/g, ' ')
    .replace(/\((https?:\/\/[^)]+)\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? `${text.slice(0, max).trim()}…` : text;
}

export function titleWithBrand(title: string) {
  return title.includes(site.name) ? title : `${title} | ${site.name}`;
}

export function absoluteUrl(path: string, siteUrl: URL | string) {
  return new URL(path, siteUrl).href;
}
