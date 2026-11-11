import { articles, articleCategories } from '@/data/content';

const MONTHS = ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'];

const categoryLabel = Object.fromEntries(articleCategories.map((c) => [c.id, c.label]));

// "2026-10-28" -> "28 Okt 2026"
export const formatDate = (iso) => {
  const [y, m, d] = iso.split('-');
  return `${+d} ${MONTHS[+m - 1]} ${y}`;
};

export const articleHref = (article) => `/article/${article.slug}`;

export const getArticle = (slug) => articles.find((a) => a.slug === slug);

export const getCategoryLabel = (id) => categoryLabel[id] || id;

// "METMalaysia (Jabatan Meteorologi Malaysia)" -> { short: 'METMalaysia', full: 'Jabatan Meteorologi Malaysia' }
export const agencyParts = (name) => {
  const match = name.match(/^(.+?)\s*\((.+)\)$/);
  return match ? { short: match[1], full: match[2] } : { short: name, full: name };
};

// "Apa Yang Perlu Anda Buat" list, used when an article has no `actions` of its own
export const articleActions = (article) => {
  if (article.actions) return article.actions;
  const { short } = agencyParts(article.agency.name);

  if (article.status === 'palsu') {
    return [
      { title: 'Jangan kongsi mesej asal', text: 'kongsi semakan ini sebagai gantinya supaya rakan dan keluarga tidak terpedaya.' },
      { title: 'Rujuk saluran rasmi', text: `dapatkan maklumat terus daripada ${short}.` },
      { title: 'Laporkan', text: 'jika anda menerima mesej yang sama, salurkan kepada Sebenarnya.my untuk semakan.' },
    ];
  }

  return [
    { title: 'Rujuk saluran rasmi', text: `dapatkan maklumat terus daripada ${short}.` },
    { title: 'Kongsi sumber asal', text: 'jika mahu berkongsi, sertakan pautan kenyataan rasmi dan bukan tangkap layar.' },
    { title: 'Lapor versi yang diubah', text: 'jika anda menerima hantaran yang mengubah fakta maklumat ini.' },
  ];
};
