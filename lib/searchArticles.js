import { articles, articleCategories, articleStatus } from '@/data/content';

// Common words that don't help find an article
const STOP_WORDS = new Set([
  'adalah', 'yang', 'dan', 'di', 'ke', 'dari', 'pada', 'untuk', 'ini', 'itu', 'dengan', 'oleh', 'atau', 'akan',
  'the', 'a', 'an', 'of', 'is', 'to', 'in', 'and', 'or', 'for', 'on', 'it',
]);

const categoryLabel = Object.fromEntries(articleCategories.map((c) => [c.id, c.label]));

// Lower-case, no accents/punctuation, single spaces
const normalize = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

// Keywords worth searching for in a query
export const keywords = (query) =>
  normalize(query)
    .split(' ')
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));

// All searchable text of one article
const searchText = (a) =>
  normalize(
    [
      a.title,
      a.alt,
      a.agency.name,
      articleStatus[a.status].label,
      ...a.categories.map((id) => categoryLabel[id]),
    ].join(' ')
  );

// True when every keyword appears in the article (an empty query matches everything)
export const matchesQuery = (article, query) => {
  const words = keywords(query);
  if (!words.length) return true;
  const text = searchText(article);
  return words.every((w) => text.includes(w));
};

// Articles that match a search query
export const searchArticles = (query) => articles.filter((a) => matchesQuery(a, query));
