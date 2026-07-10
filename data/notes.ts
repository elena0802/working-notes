import { articles } from "@/data/articles";
import { getArticleContent } from "@/lib/content";

export type NoteType =
  | "Decision"
  | "Thought"
  | "Change"
  | "Review"
  | "Experiment";

export type Note = {
  slug: string;
  title: string;
  date: string;
  type: NoteType;
  summary: string;
  content: string;
  tags?: string[];
  coverImage?: string;
};

const sampleNotes: Note[] = [
  {
    slug: "start-with-frontend-before-reusing-cms",
    title: "CMS 재사용을 미루고 프론트부터 시작하기로 한 이유",
    date: "2026-07-10",
    type: "Decision",
    summary:
      "기존 CMS를 먼저 옮기는 대신, 실제로 필요한 화면과 기록 흐름을 프론트에서 먼저 확인하기로 했다.",
    content: `## 결정

기존 CMS를 바로 재사용하지 않고, Working Notes에 필요한 화면과 기록 흐름을 프론트에서 먼저 만들기로 했다.

## 이유

아직 어떤 필드와 분류가 오래 유지될지 확실하지 않다. 이 시점에 CMS 구조부터 고정하면 이전 서비스의 복잡성을 그대로 가져오거나, 실제 사용 방식과 맞지 않는 스키마를 다시 수정할 가능성이 크다.

우선 작은 데이터 구조로 기록을 작성하고 목록과 상세 화면에서 사용해 보면, 꼭 필요한 필드와 편집 흐름을 더 구체적으로 알 수 있다.

## 다음에 확인할 것

- 기록을 몇 주간 작성하며 자주 수정하는 필드를 확인한다.
- 이미지 없는 기록이 충분히 읽기 편한지 살펴본다.
- 반복되는 편집 작업이 분명해졌을 때 CMS 연결을 다시 검토한다.`,
    tags: ["CMS", "Frontend", "Architecture"],
  },
  {
    slug: "from-build-log-to-working-notes",
    title: "Build Log 대신 Working Notes로 방향을 바꾼 과정",
    date: "2026-07-09",
    type: "Change",
    summary:
      "구현 결과만 나열하는 Build Log보다 결정의 배경과 생각의 변화를 남기는 기록이 더 필요했다.",
    content: `## 처음 생각한 형태

처음에는 기능을 만들 때마다 변경 사항을 적는 Build Log를 계획했다. 무엇을 추가했고 어떤 문제가 있었는지 짧게 남기는 방식이었다.

## 바꾸게 된 이유

구현 목록만으로는 시간이 지난 뒤 왜 그런 선택을 했는지 알기 어려웠다. 실제로 다시 보고 싶은 것은 결과보다 당시의 가정, 포기한 선택지, 방향을 바꾼 계기였다.

그래서 이름을 Working Notes로 바꾸고 기록의 범위를 의사결정, 생각, 변화, 실험과 회고까지 넓히기로 했다.

## 달라진 기준

완성된 결론만 정리하지 않는다. 결정 당시의 불확실성과 이후에 달라진 생각도 함께 남긴다. 기록이 서로 모순되더라도 그 변화 자체를 보존한다.`,
    tags: ["Direction", "Writing"],
  },
];

const legacyNotes: Note[] = articles.map((article) => ({
  slug: article.slug,
  title: article.title,
  date: article.date,
  type: "Thought",
  summary: article.excerpt,
  content: getArticleContent(article.slug).content,
  tags: [article.category],
  coverImage: article.image,
}));

export const notes: Note[] = [...sampleNotes, ...legacyNotes];

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((note) => note.slug === slug);
}

export function getRecentNotes(limit = 5): Note[] {
  return notes.slice(0, limit);
}

export function getRelatedNotes(slug: string, limit = 3): Note[] {
  return notes.filter((note) => note.slug !== slug).slice(0, limit);
}
