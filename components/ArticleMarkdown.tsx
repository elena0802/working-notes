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
          <h2 className="mt-16 font-serif-kr text-2xl font-medium leading-[1.45] text-foreground first:mt-0 sm:mt-20 sm:text-[1.75rem]">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-14 font-serif-kr text-xl font-medium leading-[1.5] text-foreground sm:mt-16 sm:text-2xl">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="text-[1.0625rem] leading-[1.9] text-foreground/85 [&:not(:first-child)]:mt-9 sm:[&:not(:first-child)]:mt-11 md:text-lg">
            {children}
          </p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="mt-10 border-l border-accent/40 py-1 pl-6 font-serif-kr text-lg leading-[1.9] text-foreground/75 sm:mt-12 sm:text-xl">
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className="mt-10 list-disc space-y-4 pl-5 text-[1.0625rem] leading-[1.9] text-foreground/85 marker:text-secondary sm:mt-12 md:text-lg">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-10 list-decimal space-y-4 pl-5 text-[1.0625rem] leading-[1.9] text-foreground/85 marker:text-secondary sm:mt-12 md:text-lg">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="leading-[1.9]">{children}</li>,
        strong: ({ children }) => (
          <strong className="font-medium text-foreground">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="font-serif-kr text-foreground/90">{children}</em>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
