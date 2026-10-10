import { site } from './site';

export function organizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    alternateName: [site.legalName, 'Hash Founder', 'Founder India'],
    url: siteUrl,
    email: site.email,
    description: site.description,
    areaServed: { '@type': 'Country', name: 'India' },
    founder: { '@type': 'Organization', name: site.company },
    knowsAbout: [
      'Startup incorporation in India',
      'Private Limited company',
      'Limited Liability Partnership',
      'DPIIT Startup Recognition',
      'GST for startups',
      'Employee stock options in India',
    ],
  };
}

export function websiteSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: siteUrl,
    inLanguage: site.language,
    description: site.description,
    publisher: { '@type': 'Organization', name: site.legalName },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/faq?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(siteUrl: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).href,
    })),
  };
}

export function faqPageSchema(siteUrl: string, faqs: { question: string; answer: string; path?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      url: faq.path ? new URL(faq.path, siteUrl).href : undefined,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(opts: {
  siteUrl: string;
  title: string;
  description: string;
  path: string;
  type?: 'Article' | 'TechArticle';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'Article',
    headline: opts.title,
    description: opts.description,
    inLanguage: site.language,
    mainEntityOfPage: new URL(opts.path, opts.siteUrl).href,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.legalName },
    about: { '@type': 'Country', name: 'India' },
  };
}
