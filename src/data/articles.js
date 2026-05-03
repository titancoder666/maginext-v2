import { ARTICLES as RAW_ARTICLES, CATEGORIES as RAW_CATEGORIES } from './site.js';

export const ARTICLES = RAW_ARTICLES.map(a => ({ ...a, catKey: a.cat }));

export const ART_CATEGORIES = RAW_CATEGORIES.map(c => ({
  ...c,
  count: c.id === 'all' ? ARTICLES.length : ARTICLES.filter(a => a.cat === c.id).length,
}));
