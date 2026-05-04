import { ARTICLES as RAW_ARTICLES, CATEGORIES as RAW_CATEGORIES } from './site.js';

export const ARTICLES = RAW_ARTICLES.map(a => ({ ...a, catKey: a.cat }));

function categoryCount(c) {
  if (c.id === 'all') return ARTICLES.length;
  if (c.id === '__emergency__') return ARTICLES.filter(a => a.emergency).length;
  return ARTICLES.filter(a => a.cat === c.id).length;
}

export const ART_CATEGORIES = RAW_CATEGORIES.map(c => ({ ...c, count: categoryCount(c) }));
