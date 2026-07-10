import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ArticleMarkdownProps = {
  content: string;
};

export default function ArticleMarkdown({ content }: ArticleMarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="mt-12 font-serif text-2xl leading-snug text-foreground first:mt-0 sm:text-3xl">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-10 font-serif text-xl leading-snug text-foreground sm:text-2xl">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="body-reading [&:not(:first-child)]:mt-8 sm:[&:not(:first-child)]:mt-10">
            {children}
          </p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="mt-8 border-l border-accent/40 py-1 pl-6 font-serif text-lg leading-relaxed text-foreground/70 sm:mt-10 sm:text-xl">
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className="body-reading mt-8 list-disc space-y-3 pl-5 marker:text-secondary sm:mt-10">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="body-reading mt-8 list-decimal space-y-3 pl-5 marker:text-secondary sm:mt-10">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="leading-[1.9]">{children}</li>,
        strong: ({ children }) => (
          <strong className="font-medium text-foreground">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="font-serif text-foreground/80">{children}</em>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
