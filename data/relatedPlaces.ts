import type { RelatedEssay, RelatedPlace } from "@/types/relatedPlace";

export type { RelatedEssay, RelatedPlace } from "@/types/relatedPlace";

const relatedEssays = {
  "how-to-know-a-good-place": {
    slug: "how-to-know-a-good-place",
    title: "좋은 장소를 알아보는 기준",
    excerpt:
      "인스타그램에 잘 나오는 곳과, 다시 가고 싶은 곳은 같은 곳이 아닙니다.",
  },
  "cafe-where-sunlight-lingers": {
    slug: "cafe-where-sunlight-lingers",
    title: "햇살이 오래 머무는 카페",
    excerpt: "서울 골목에서 찾은, 햇살이 오후 내내 머무는 작은 카페.",
  },
  "two-days-in-gangneung": {
    slug: "two-days-in-gangneung",
    title: "강릉에서 보낸 이틀",
    excerpt: "관광지를 채우지 않고, 두 골목과 한 해변만 기억하기로 했습니다.",
  },
  "an-afternoon-in-jeju": {
    slug: "an-afternoon-in-jeju",
    title: "제주의 오후",
    excerpt: "좋은 여행은 많은 장소보다 오래 기억에 남는 한 장면을 남긴다.",
  },
  "small-restaurant-worth-returning-to": {
    slug: "small-restaurant-worth-returning-to",
    title: "다시 찾게 되는 작은 식당",
    excerpt:
      "좋은 식당은 맛으로 기억되기도 하지만, 결국 다시 가고 싶은 마음으로 남는다.",
  },
} satisfies Record<string, RelatedEssay>;

export const relatedPlacesByArticleSlug: Record<string, RelatedPlace[]> = {
  "how-to-know-a-good-place": [
    {
      id: "place-001",
      name: "창가가 좋은 작은 카페",
      location: "서울, 성북구",
      image: "/images/editorial/cafes/cafes-window-seat-afternoon.jpg",
      context:
        "글에서 말하는 ‘시간의 속도가 달라지는 장소’ — 화려하지 않지만 오후에 오래 앉을 수 있는 창가.",
      description:
        "사람이 많지 않아 오후에 창가에 앉아 한참 머물 수 있는 곳. 커피보다 빛과 고요함이 먼저 기억납니다.",
      category: "cafe",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["how-to-know-a-good-place"],
    },
    {
      id: "place-002",
      name: "골목 끝 조용한 서점",
      location: "서울, 종로구",
      image: "/images/editorial/books/books-rainy-bookstore.jpg",
      context:
        "처음엔 눈에 띄지 않지만 다시 떠오르는 장소 — 글의 ‘조용한 좋은 장소’ 기준과 맞닿아 있습니다.",
      description:
        "베스트셀러 코너가 없고, 오래된 책장 사이를 천천히 걸을 수 있는 작은 서점. 비 오는 날 특히 잘 어울립니다.",
      category: "bookstore",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["how-to-know-a-good-place"],
    },
    {
      id: "place-003",
      name: "언덕 아래 산책로",
      location: "서울, 용산구",
      context:
        "목적지 없이 걸으며 장소를 ‘느끼는’ 시간 — 좋은 장소가 좋은 시간을 만든다는 글의 흐름과 연결됩니다.",
      description:
        "목적지 없이 걷기 좋은 짧은 길. 벤치가 몇 개 있어 쉬었다 가기에 충분합니다.",
      category: "walk",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["how-to-know-a-good-place"],
    },
  ],

  "cafe-where-sunlight-lingers": [
    {
      id: "place-004",
      name: "오후 빛이 머무는 창가 카페",
      location: "서울, 마포구",
      image: "/images/editorial/home/home-morning-tea-window.jpg",
      context:
        "이 글의 중심인 ‘햇살이 오후 내내 머무는 창가’ — 시간이 천천히 흐르는 카페의 구체적인 모습.",
      description:
        "서쪽 창 너머로 햇살이 오후 내내 기울어지는 자리. 음악이 크지 않아 책을 펼치기 좋습니다.",
      category: "cafe",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["cafe-where-sunlight-lingers"],
    },
    {
      id: "place-005",
      name: "골목 안 작은 정원 카페",
      location: "서울, 서대문구",
      image: "/images/editorial/seasons/seasons-quiet-garden-path.jpg",
      context:
        "창가에서 바라보는 계절 — 글에서 말하는 ‘마음이 서두르지 않게 되는’ 장소의 또 다른 형태.",
      description:
        "실내 창가와 작은 마당이 이어져 계절이 보이는 곳. 여름에는 그늘이, 가을에는 낙엽이 먼저 반깁니다.",
      category: "cafe",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["cafe-where-sunlight-lingers"],
    },
    {
      id: "place-006",
      name: "근처 공원 산책로",
      location: "서울, 서대문구",
      context:
        "카페에서 나와 이어지는 조용한 오후 — 좋은 장소는 좋은 시간을 남긴다는 글의 마무리와 닿습니다.",
      description:
        "커피 한 잔 뒤 천천히 걷기 좋은 짧은 둘레길. 사람이 많지 않은 평일 오후가 편합니다.",
      category: "walk",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["cafe-where-sunlight-lingers"],
    },
  ],

  "two-days-in-gangneung": [
    {
      id: "place-007",
      name: "해변을 따라 걷는 길",
      location: "강릉, 안목해변",
      context:
        "관광지를 채우지 않고 ‘한 해변만 기억하기로 했다’는 글의 선택 — 이틀 중 가장 오래 남는 장면.",
      description:
        "파도 소리만 들으며 천천히 걷기 좋은 해안 산책로. 해가 기울 무렵이 특히 고요합니다.",
      category: "walk",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["two-days-in-gangneung"],
    },
    {
      id: "place-008",
      name: "오래 머물기 편한 작은 숙소",
      location: "강릉, 경포동",
      context:
        "두 골목과 한 해변 — 글처럼 짧지만 깊게 머무는 여행을 위한, 서두르지 않아도 되는 숙소.",
      description:
        "화려하지 않지만 창 밖으로 나무가 보이는 방. 이틀 동안 서두르지 않고 쉬기에 충분합니다.",
      category: "stay",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["two-days-in-gangneung"],
    },
    {
      id: "place-009",
      name: "아침에 가기 좋은 식당",
      location: "강릉, 중앙시장 인근",
      context:
        "여행지가 아니라 ‘그곳 사람들의 아침’ — 화려한 맛집이 아닌, 다시 가고 싶은 식당의 감각.",
      description:
        "현지 사람들이 자주 찾는 작은 식당. 메뉴가 많지 않지만 매일 같은 맛으로 나옵니다.",
      category: "restaurant",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["two-days-in-gangneung"],
    },
  ],

  "an-afternoon-in-jeju": [
    {
      id: "place-010",
      name: "돌담 옆 오후 산책로",
      location: "제주, 한담해변",
      context:
        "‘한 장면만 기억해도 충분한 오후’ — 글에서 제주를 기억하는 방식 그 자체.",
      description:
        "돌담과 바다 사이를 천천히 걷는 길. 한 장면만 기억해도 충분한 오후입니다.",
      category: "walk",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["an-afternoon-in-jeju"],
    },
    {
      id: "place-011",
      name: "창가에서 바다 보는 카페",
      location: "제주, 애월",
      context:
        "많은 장소보다 오래 남는 한 장면 — 글의 오후를 실제로 머물 수 있는 창가 자리.",
      description:
        "유리창 너머로 바다가 보이는 작은 카페. 사람이 많지 않은 시간대에 가면 한참 앉아 있을 수 있습니다.",
      category: "cafe",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["an-afternoon-in-jeju"],
    },
    {
      id: "place-012",
      name: "계절이 보이는 작은 정원",
      location: "제주, 조천",
      context:
        "꽃을 보여주는 곳이 아니라 계절을 보여주는 곳 — 글의 여운과 같은, 천천히 둘러보는 정원.",
      description:
        "꽃보다 나무와 돌, 바람이 먼저 느껴지는 정원. 서두르지 않고 한 바퀴 도는 데 충분한 크기입니다.",
      category: "garden",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["an-afternoon-in-jeju"],
    },
  ],

  "small-restaurant-worth-returning-to": [
    {
      id: "place-013",
      name: "다시 찾게 되는 작은 식당",
      location: "서울, 은평구",
      image: "/images/editorial/meals/meals-small-restaurant-table.jpg",
      context:
        "맛으로 기억되기도 하지만 결국 ‘다시 가고 싶은 마음’으로 남는 곳 — 이 글의 핵심.",
      description:
        "좌석이 많지 않아 조용히 식사할 수 있는 곳. 주인이 직접 내는 반찬이 매번 비슷하고 정직합니다.",
      category: "restaurant",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["small-restaurant-worth-returning-to"],
    },
    {
      id: "place-014",
      name: "점심 뒤 차 한 잔 하기 좋은 카페",
      location: "서울, 은평구",
      image: "/images/editorial/meals/meals-two-settings-daylight.jpg",
      context:
        "식사가 끝나도 바로 일어나지 않게 되는 동네 — 좋은 식당과 이어지는 오후의 시간.",
      description:
        "식당에서 걸어갈 만한 거리에 있는 작은 카페. 식사 후에도 자리를 옮기지 않고 쉬고 싶을 때.",
      category: "cafe",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["small-restaurant-worth-returning-to"],
    },
    {
      id: "place-015",
      name: "동네 골목 산책로",
      location: "서울, 은평구",
      context:
        "낯선 여행지가 아닌, 익숙한 풍경 속에서 다시 찾게 되는 식당과 같은 동네의 결.",
      description:
        "식사 후 소화 겸 천천히 걷기 좋은 동네 길. 낯선 곳이 아니라 익숙한 풍경이 편안합니다.",
      category: "walk",
      rePlaceUrl: "#",
      relatedEssay: relatedEssays["small-restaurant-worth-returning-to"],
    },
  ],
};

export function getRelatedPlaceBody(place: RelatedPlace): string | undefined {
  return place.context ?? place.description;
}

export function getRelatedPlaceMeta(place: RelatedPlace): string | undefined {
  const categoryLabel = categoryLabels[place.category];
  const parts = [place.location, categoryLabel].filter(Boolean);

  return parts.length > 0 ? parts.join(" · ") : undefined;
}

const categoryLabels: Record<RelatedPlace["category"], string> = {
  cafe: "카페",
  restaurant: "식당",
  walk: "산책로",
  stay: "숙소",
  bookstore: "서점",
  garden: "정원",
};
