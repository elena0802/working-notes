import type { NewsletterIssue } from "@/types/newsletter";

export const newsletterIssues: NewsletterIssue[] = [
  {
    slug: "second-season-letter-001",
    title: "Second Season Letter #001",
    subject: "햇살이 오래 머무는 곳",
    previewText:
      "오후의 빛이 먼저 기억되는 장소들 — 창가, 컬렉션, 그리고 다시 읽고 싶은 글.",
    publishedAt: "2026-05-31",
    collectionSlug: "places-of-lingering-sunlight",
    letter:
      "안녕하세요. Second Season의 첫 번째 편지입니다.\n\n이번에는 ‘햇살이 오래 머무는 곳’이라는 이름으로, 컬렉션을 모았습니다. 화려하지 않아도, 창가에 앉아 있으면 시간이 천천히 흐르는 공간들입니다. 서울 골목의 작은 카페, 정원이 보이는 테이블, 제주에서 바다를 바라본 오후까지 — 도시는 달라도, 공통된 것은 빛이 머무는 시간이었습니다.\n\n아래에서 Re:Place에 기록한 장소들과, 그 장소를 떠올리게 하는 Second Season의 글들을 함께 담았습니다. 천천히 펼쳐 보셔도 좋겠습니다.\n\n다음 편지에서도, 다시 가고 싶은 장소와 조용한 순간을 나누겠습니다.",
    status: "published",
  },
];

export function getAllNewsletterIssues(): NewsletterIssue[] {
  return [...newsletterIssues].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getNewsletterIssueBySlug(
  slug: string,
): NewsletterIssue | undefined {
  return newsletterIssues.find((issue) => issue.slug === slug);
}

export function getPublishedNewsletterIssues(): NewsletterIssue[] {
  return getAllNewsletterIssues().filter((issue) => issue.status === "published");
}
