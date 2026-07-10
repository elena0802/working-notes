export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  chapterId?: string;
};

export const issueLabel = "Issue No. 001";
export const issueSeason = "Early Spring";

export type JournalIssue = {
  label: string;
  title: string;
  description: string;
  slugs: string[];
};

export const homeRecentPostSlugs: string[] = [
  "seoul-first-friends",
  "learning-again",
  "life-changed",
  "people-to-share-meals-with",
  "still-curious",
];

export const journalIssues: JournalIssue[] = [
  {
    label: "Second Season",
    title: "두 번째 계절",
    description: "정년 이후, 다시 시작된 일상의 기록.",
    slugs: [
      "seoul-first-friends",
      "learning-again",
      "life-changed",
      "people-to-share-meals-with",
      "still-curious",
    ],
  },
  {
    label: "Teaching Life",
    title: "교직 인생",
    description: "37년 교단의 시간을 따라가는 네 편의 이야기.",
    slugs: [
      "first-classroom",
      "no-leave-37-years",
      "public-middle-school-move",
      "green-medal-prize",
    ],
  },
  {
    label: "Issue #003",
    title: "Quiet Taste",
    description: "다시 펼치는 책과 조용해진 취향.",
    slugs: [
      "books-we-reread",
      "rainy-day-bookstore",
      "a-park-for-slow-walks",
      "walking-without-a-destination",
      "the-beginning-of-a-second-season",
    ],
  },
  {
    label: "Issue #002",
    title: "Summer Notes",
    description: "여름의 빛, 다시 찾은 장소, 오래된 사람들과의 시간.",
    slugs: [
      "why-mornings-became-better",
      "small-restaurant-worth-returning-to",
      "lunch-with-an-old-friend",
      "an-afternoon-in-jeju",
      "a-garden-where-seasons-appear",
    ],
  },
  {
    label: "Issue #001",
    title: "The Beginning of a New Season",
    description: "두 번째 계절의 시작을 기록한 첫 번째 저널.",
    slugs: [
      "after-35-years-teaching",
      "how-to-know-a-good-place",
      "cafe-where-sunlight-lingers",
      "two-days-in-gangneung",
      "things-that-get-better-with-age",
    ],
  },
];

export const tagline = "The second season begins with curiosity.";

/** Home Featured Story display — journal article metadata unchanged */
export const homeFeaturedStoryDisplay = {
  title: "두 번째 계절이 시작된 날",
  subtitle:
    "37년 동안 교단에 있었던 시간 뒤,\n조금 다른 하루가 시작되었습니다.",
  cta: "두 번째 계절의 이야기 →",
};

export const siteImages = {
  hero: {
    src: "/images/hero-v2.jpg",
    alt: "A flower-lined path in soft spring light",
    caption: "봄에서 초여름으로 · 이어지는 길",
  },
  editor: {
    src: "/images/editor.jpg",
    alt: "Hands turning the pages of a book by a window",
    caption: "창가에서 책을 넘기는 오후",
  },
  places: [
    {
      src: "/images/places-01.jpg",
      alt: "Sunlit living room with warm afternoon light",
      caption: "햇살이 머무는 거실, 서울",
    },
    {
      src: "/images/places-02.jpg",
      alt: "Warmly lit table set for a quiet meal",
      caption: "조용한 식사를 위한 자리",
    },
    {
      src: "/images/places-03.jpg",
      alt: "Pouring tea in soft morning light",
      caption: "아침 차 한 잔의 시간",
    },
  ],
};

export const articles: Article[] = [
  {
    slug: "after-35-years-teaching",
    title: "35년 교직 생활 이후",
    excerpt:
      "35년간 교실에서 보낸 시간 뒤, 처음으로 자신만의 아침을 갖게 되었습니다.",
    category: "Essay",
    date: "March 2026",
    featured: true,
    image: "/images/editorial/books/books-morning-desk-glasses.jpg",
  },
  {
    slug: "how-to-know-a-good-place",
    title: "좋은 장소를 알아보는 기준",
    excerpt:
      "인스타그램에 잘 나오는 곳과, 다시 가고 싶은 곳은 같은 곳이 아닙니다.",
    category: "Places",
    date: "March 2026",
    image: "/images/editorial/places/places-neighborhood-street-dusk.jpg",
  },
  {
    slug: "cafe-where-sunlight-lingers",
    title: "햇살이 오래 머무는 카페",
    excerpt:
      "서울 골목에서 찾은, 햇살이 오후 내내 머무는 작은 카페.",
    category: "Places",
    date: "March 2026",
    image: "/images/editorial/cafes/cafes-window-seat-afternoon.jpg",
  },
  {
    slug: "two-days-in-gangneung",
    title: "강릉에서 보낸 이틀",
    excerpt:
      "관광지를 채우지 않고, 두 골목과 한 해변만 기억하기로 했습니다.",
    category: "Journeys",
    date: "March 2026",
    image: "/images/editorial/journeys/journeys-gangneung-shore-path.jpg",
  },
  {
    slug: "things-that-get-better-with-age",
    title: "나이가 들수록 좋아지는 것들",
    excerpt:
      "빠르게 변하는 것보다, 시간이 지날수록 깊어지는 것들.",
    category: "Essay",
    date: "March 2026",
    image: "/images/editorial/books/books-worn-stack-shelf.jpg",
  },
  {
    slug: "why-mornings-became-better",
    title: "아침이 좋아진 이유",
    excerpt:
      "젊을 때는 밤이 좋았지만, 두 번째 계절에는 아침의 고요함이 더 소중해졌다.",
    category: "Essay",
    date: "2026-06-01",
    image: "/images/editorial/home/home-morning-tea-window.jpg",
  },
  {
    slug: "small-restaurant-worth-returning-to",
    title: "다시 찾게 되는 작은 식당",
    excerpt:
      "좋은 식당은 맛으로 기억되기도 하지만, 결국 다시 가고 싶은 마음으로 남는다.",
    category: "Places",
    date: "2026-06-08",
    image: "/images/editorial/meals/meals-small-restaurant-table.jpg",
  },
  {
    slug: "lunch-with-an-old-friend",
    title: "오래된 친구와의 점심",
    excerpt:
      "나이가 들수록 관계는 넓이보다 깊이가 중요해진다.",
    category: "Essay",
    date: "2026-06-15",
    image: "/images/editorial/meals/meals-two-settings-daylight.jpg",
  },
  {
    slug: "an-afternoon-in-jeju",
    title: "제주의 오후",
    excerpt:
      "좋은 여행은 많은 장소보다 오래 기억에 남는 한 장면을 남긴다.",
    category: "Journeys",
    date: "2026-06-22",
    image: "/images/editorial/journeys/journeys-jeju-stone-wall-afternoon.jpg",
  },
  {
    slug: "a-garden-where-seasons-appear",
    title: "계절이 보이는 정원",
    excerpt:
      "정원은 꽃을 보여주는 곳이 아니라 계절을 보여주는 곳이다.",
    category: "Seasons",
    date: "2026-06-29",
    image: "/images/editorial/seasons/seasons-quiet-garden-path.jpg",
  },
  {
    slug: "books-we-reread",
    title: "책을 다시 읽게 되는 나이",
    excerpt:
      "책은 변하지 않았지만, 읽는 사람은 변한다.",
    category: "Essay",
    date: "2026-07-06",
    image: "/images/editorial/books/books-rereading-old-pages.jpg",
  },
  {
    slug: "rainy-day-bookstore",
    title: "비 오는 날의 서점",
    excerpt:
      "비 오는 거리보다 책장 사이가 더 잘 어울리는 날이 있습니다.",
    category: "Places",
    date: "2026-07-13",
    image: "/images/editorial/books/books-rainy-bookstore.jpg",
  },
  {
    slug: "a-park-for-slow-walks",
    title: "혼자 걷기 좋은 공원",
    excerpt:
      "혼자이지만 외롭지 않은 시간, 조용하지만 비어 있지 않은 오후.",
    category: "Places",
    date: "2026-07-20",
    image: "/images/editorial/parks/parks-solitary-walk-path.jpg",
  },
  {
    slug: "walking-without-a-destination",
    title: "목적 없는 산책의 기록",
    excerpt:
      "어디에 도착하기 위해서가 아니라, 지금의 시간을 조금 더 천천히 지나가기 위해서.",
    category: "Journeys",
    date: "2026-07-27",
    image: "/images/editorial/journeys/journeys-no-destination-walk.jpg",
  },
  {
    slug: "the-beginning-of-a-second-season",
    title: "두 번째 계절의 시작",
    excerpt:
      "끝이 아니라, 다시 호기심을 갖기 시작하는 시간.",
    category: "Seasons",
    date: "2026-08-03",
    image: "/images/editorial/seasons/seasons-second-season-beginning-flowers.jpg",
  },
  {
    slug: "first-classroom",
    title: "첫 발령 날, 교실 문을 열며",
    excerpt:
      "처음 교단에 섰던 날의 떨림은 오랜 시간이 지나도 잊히지 않습니다.",
    category: "교직 인생",
    date: "2026-06-01",
    image: "/images/editorial/career/first-classroom.jpg",
    chapterId: "first-classroom",
  },
  {
    slug: "no-leave-37-years",
    title: "휴직 없이 37년을 걷다",
    excerpt:
      "두 아이를 키우며 교단에 섰던 시간, 평범한 하루들이 가장 큰 자랑으로 남았습니다.",
    category: "교직 인생",
    date: "2026-06-05",
    image: "/images/editorial/career/no-leave-37-years.jpg",
    chapterId: "no-leave-37-years",
  },
  {
    slug: "public-middle-school-move",
    title: "가장 잘한 선택은 가장 두려웠던 선택이었다",
    excerpt:
      "많은 사람이 만류했지만, 그 선택은 교직 인생의 새로운 시작이 되었습니다.",
    category: "교직 인생",
    date: "2026-06-08",
    image: "/images/editorial/career/public-middle-school-move.jpg",
    chapterId: "public-middle-school-move",
  },
  {
    slug: "green-medal-prize",
    title: "상보다 먼저 떠오른 얼굴들",
    excerpt:
      "녹조근정훈장을 받던 날, 가장 먼저 떠오른 것은 함께했던 학생들이었습니다.",
    category: "교직 인생",
    date: "2026-06-11",
    image: "/images/editorial/career/green-medal-prize.jpg",
    chapterId: "green-service-medal",
  },
  {
    slug: "seoul-first-friends",
    title: "서울에 와서 처음 친구를 사귀던 날",
    excerpt:
      "낯선 도시에서, 처음으로 마음이 통하는 사람을 만났습니다.",
    category: "Essay",
    date: "2026-06-14",
    image: "/images/editorial/home/home-morning-tea-window.jpg",
  },
  {
    slug: "learning-again",
    title: "학생이 아닌 사람들과 다시 배우기 시작했다",
    excerpt:
      "교실 밖에서 다시 시작한 배움은 예상과 달랐습니다.",
    category: "Essay",
    date: "2026-06-18",
    image: "/images/editorial/books/books-rainy-bookstore.jpg",
  },
  {
    slug: "life-changed",
    title: "시간이 생긴 것이 아니라 삶이 달라졌다",
    excerpt:
      "여유가 생긴 것이 아니라, 하루를 대하는 방식이 바뀌었습니다.",
    category: "Essay",
    date: "2026-06-22",
    image: "/images/editorial/parks/parks-solitary-walk-path.jpg",
  },
  {
    slug: "people-to-share-meals-with",
    title: "함께 밥 먹는 사람이 있다는 것",
    excerpt:
      "혼자가 아닌 식탁에는 작은 대화가 머뭅니다.",
    category: "Essay",
    date: "2026-06-26",
    image: "/images/editorial/meals/meals-two-settings-daylight.jpg",
  },
  {
    slug: "still-curious",
    title: "아직도 배우고 싶은 것이 많다",
    excerpt:
      "두 번째 계절에도 궁금함은 멈추지 않습니다.",
    category: "Essay",
    date: "2026-06-30",
    image: "/images/editorial/books/books-rereading-old-pages.jpg",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category).reverse();
}

export function getArticlesBySlugs(slugs: string[]): Article[] {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => article !== undefined);
}

export function getHomeRecentPosts(): Article[] {
  return getArticlesBySlugs(homeRecentPostSlugs);
}

export function getFeaturedArticle(): Article {
  return articles.find((article) => article.featured) ?? articles[0];
}

export function getSecondaryArticles(): Article[] {
  return articles.filter((article) => !article.featured);
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const currentIndex = articles.findIndex((article) => article.slug === slug);

  if (currentIndex === -1) {
    return articles.slice(0, count);
  }

  const related: Article[] = [];

  for (let i = 1; i <= count; i++) {
    related.push(articles[(currentIndex + i) % articles.length]);
  }

  return related;
}
