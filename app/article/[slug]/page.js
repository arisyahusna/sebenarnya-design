import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import ArticleDetail from '@/components/ArticleDetail';
import Footer from '@/components/Footer';
import { articles } from '@/data/content';
import { getArticle } from '@/lib/articles';

// Build one static page per article
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Sebenarnya.my`,
    description: article.lead,
    openGraph: { title: article.title, description: article.lead },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <div className="site">
      <Header />

      <main className="main">
        <ArticleDetail article={article} />
      </main>

      <Footer />
    </div>
  );
}
