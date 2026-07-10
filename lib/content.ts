import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article } from "@/data/articles";

const contentDirectory = path.join(process.cwd(), "content");

export type ArticleFrontmatter = {
  subtitle: string;
  imageAlt: string;
  imageCaption: string;
};

export type ArticleDisplay = Article & ArticleFrontmatter;

export type ArticleContent = {
  frontmatter: ArticleFrontmatter;
  content: string;
};

function getContentPath(slug: string) {
  return path.join(contentDirectory, `${slug}.md`);
}

export function getArticleContent(slug: string): ArticleContent {
  const filePath = getContentPath(slug);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    frontmatter: data as ArticleFrontmatter,
    content: content.trim(),
  };
}

export function enrichArticle(article: Article): ArticleDisplay {
  const { frontmatter } = getArticleContent(article.slug);

  return {
    ...article,
    ...frontmatter,
  };
}

export function enrichArticles(articleList: Article[]): ArticleDisplay[] {
  return articleList.map(enrichArticle);
}

export function contentExists(slug: string): boolean {
  return fs.existsSync(getContentPath(slug));
}
