import type {
  CareerMilestone,
  EducatorData,
  EducatorProfile,
} from "@/types/educator";

export const educatorProfile: EducatorProfile = {
  name: "김OO",
  honorific: "선생님",
  role: "중학교 진로교사",
  yearsOfService: 37,
  headline: "37년 동안 학생들과 함께 성장한 교사의 기록",
  headlineLines: ["37년 동안 학생들과", "함께 성장한 교사의 기록"],
  subheadline:
    "교단에서 배운 것들,\n그리고 앞으로도 함께 배우고 싶은 이야기들.",
  timelineSectionTitle: "교단의 시간들",
  openingNarrative:
    "이 페이지는 상을 모으거나 이력을 나열하기 위한 곳이 아닙니다. 37년 동안 교실에서 보낸 시간—첫 발령, 상업고의 젊은 날, 공립중학교의 진로교사, 그리고 다시 찾아온 학생들—을 하나의 교직 인생으로 남기기 위해 만들었습니다. 끝나는 이야기가 아니라, 아직 이어지고 있는 이야기입니다.",
  portrait: {
    src: "/images/editor.jpg",
    alt: "Hands turning the pages of a book by a window",
    caption: "창가에서 책을 넘기는 오후",
  },
  homeTeaser: {
    headline: "교직 인생",
    subheadline:
      "첫 발령부터 진로교사, 그리고 다시 찾아온 학생들까지.\n37년의 시간을 기록했습니다.",
    cta: "전체 타임라인 보기 →",
  },
};

export const careerTimeline: CareerMilestone[] = [
  {
    id: "deciding-to-teach",
    chapter: 1,
    period: "교직 이전",
    title: "교사가 되기로 결심하다",
    description:
      "교직이라는 길을 선택한 이유는 단순하지 않았습니다. 누군가의 길을 함께 고민하는 일에 마음이 갔고, 선생님이 된다는 것은 가르치는 일이기도 하지만 오래 곁에 있는 일이라고 생각했습니다. 그 결심이 이후 긴 시간의 시작이 되었습니다.",
  },
  {
    id: "first-classroom",
    chapter: 2,
    period: "첫 발령",
    title: "첫 발령, 첫 교실",
    description:
      "처음 학생들을 만나던 날의 설렘과 긴장이 아직도 선명합니다. 교실 문을 열었을 때, 칠판 앞에 서야 한다는 사실이 무겁게 느껴졌습니다. 하지만 학생들의 첫 인사를 받는 순간, 이곳이 내가 오래 머물 공간이 될 것 같다는 생각이 들었습니다.",
    previewDescription:
      "처음 학생들을 만난 날의 설렘과 긴장이 아직도 선명합니다. 학생들의 첫 인사를 받는 순간, 오래 머물 공간이 될 것 같다는 생각이 들었습니다. 그 교실에서 교사로서의 첫 시간을 시작했습니다. 돌아보면 모든 이야기의 시작은 그 교실이었습니다.",
    // placeholder: /images/editorial/career/first-classroom.jpg
    image: {
      src: "/images/editorial/career/first-classroom.jpg",
      alt: "아침 빛이 드는 책상 위의 책과 안경",
      caption: "첫 교실 · 아침의 책상 · 교직의 시작",
    },
    journalSlug: "first-classroom",
  },
  {
    id: "commercial-high-school-years",
    chapter: 3,
    period: "상업고 시절",
    title: "상업고등학교 교사 시절",
    description:
      "젊은 교사로서 첫 경험을 쌓아가던 시간이었습니다. 아직 모든 것을 안다고 말할 수 없었지만, 매일 교실에서 배우는 것이 더 많았습니다. 학생들과 함께하며 교사라는 역할이 어떤 무게를 지니는지 조금씩 알아가기 시작했습니다.",
  },
  {
    id: "mother-of-two",
    chapter: 4,
    period: "엄마가 된 시간",
    title: "두 아이의 엄마가 되다",
    description:
      "결혼과 함께 가정을 꾸리고, 두 아이를 키우며 엄마와 교사라는 두 역할을 함께 배웠습니다. 가정에서의 시간은 교실에서 학생과 학부모를 더 깊이 이해하게 해주었습니다. 바쁜 일상 속에서도 교실로 돌아가는 마음은 변하지 않았습니다.",
  },
  {
    id: "no-leave-37-years",
    chapter: 5,
    period: "37년",
    title: "휴직 없이 37년을 걷다",
    description:
      "아이 둘을 키우며 한 번도 휴직하지 않고 교직 생활을 이어왔습니다. 담임과 부장교사를 맡으며 바쁜 시간을 보냈지만, 학생들이 있는 교실을 떠나지 않고 싶었습니다. 가정과 학교 사이를 오가며 걸어온 시간이 하나의 교직 인생이 되었습니다.",
    previewDescription:
      "아이 둘을 키우며 한 번도 휴직하지 않고 교직을 이어왔습니다. 바쁜 시간 속에서도 학생들이 있는 교실을 떠나고 싶지 않았습니다. 가정과 학교를 함께 돌보는 시간은 쉽지 않았습니다. 하지만 학생들과 함께하는 일상은 늘 저를 다시 교실로 이끌었습니다.",
    // placeholder: /images/editorial/career/no-leave-classroom-years.jpg
    image: {
      src: "/images/editorial/career/no-leave-37-years.jpg",
      alt: "창가 아침 차와 책상, 일상의 교육 현장을 이어가는 시간",
      caption: "가정과 교실 사이 · 휴직 없이 이어온 37년",
    },
    journalSlug: "no-leave-37-years",
  },
  {
    id: "head-teacher-years",
    chapter: 6,
    period: "부장교사 시절",
    title: "부장교사로 보낸 시간",
    description:
      "학교 운영과 후배 교사들을 함께 고민하던 시절이었습니다. 한 반을 넘어 학교 전체를 바라보는 시선이 생겼고, 교육이란 개인의 노력만으로 완성되지 않는다는 것을 배웠습니다. 후배들과 나눈 대화가 지금도 기억에 남습니다.",
  },
  {
    id: "counseling-study-begins",
    chapter: 7,
    period: "상담 공부",
    title: "상담 공부를 시작하다",
    description:
      "훗날 예상치 못한 기회로 이어질 준비의 시간이었습니다. 당시에는 그저 학생을 더 잘 이해하고 싶어서 시작한 공부였습니다. 상담에 대해 배울수록, 답을 주는 일보다 함께 질문하는 일이 중요하다는 것을 알게 되었습니다.",
  },
  {
    id: "public-middle-school-move",
    chapter: 8,
    period: "학교 이동",
    title: "모두가 만류했던 공립중학교로의 이동",
    description:
      "주변의 만류에도 새로운 학교를 선택했습니다. 그 결정이 진로교사와 상담, 그리고 다시 만난 학생들로 이어질 줄은 몰랐습니다. 중학생들은 고등학생과 달랐고, 더 가까이에서 학생들의 변화를 보게 되었습니다. 공립중학교로의 이동은 단순한 직장 이동이 아니라, 교육관이 확장되는 계기였습니다.",
    previewDescription:
      "주변의 만류에도 새로운 학교를 선택했습니다. 그 결정이 진로교사와 상담의 길로 이어질 줄은 몰랐습니다. 새로운 환경은 늘 두려웠지만, 다시 배우는 시간이 되었습니다. 돌아보면 그 선택은 교직 인생의 큰 전환점이었습니다.",
    // placeholder: /images/editorial/career/middle-school-hallway.jpg
    image: {
      src: "/images/editorial/career/public-middle-school-move.jpg",
      alt: "조용한 골목과 저녁빛이 드는 학교 근처 거리",
      caption: "새로운 학교 · 낯선 동네 · 다시 시작하는 길",
    },
    journalSlug: "public-middle-school-move",
  },
  {
    id: "becoming-career-teacher",
    chapter: 9,
    period: "진로교사",
    title: "진로교사가 되다",
    description:
      "상담 공부가 새로운 역할과 새로운 길로 이어졌습니다. 진로교사가 되어 학생들의 미래를 함께 고민하는 일을 맡게 되었습니다. 무엇을 좋아하는지, 어떤 삶을 살고 싶은지—그 질문들이 이후 시간의 중심이 되었습니다.",
  },
  {
    id: "pondering-students-future",
    chapter: 10,
    period: "진로교사로서",
    title: "학생들의 미래를 함께 고민하다",
    description:
      "진로교사로서 수많은 학생들과 미래를 이야기한 시간이었습니다. 같은 질문을 여러 번 함께했고, 답을 서두르지 않기로 했습니다. 어떤 학생은 일찍 길을 찾았고, 어떤 학생은 더 오래 맴돌았지만—모두 같은 상담실에서 시작했습니다.",
  },
  {
    id: "green-service-medal",
    chapter: 11,
    period: "37년을 돌아보며",
    title: "녹조근정훈장을 받다",
    description:
      "37년 교직 인생을 돌아보며 받은 가장 뜻깊은 순간이었습니다. 상을 받는 것이 교직의 목적은 아니었지만, 오래 걸어온 길을 돌아볼 수 있는 시간이 되었습니다. 그날 떠올린 것은 상장보다 교실과 상담실의 기억이었습니다.",
    previewDescription:
      "37년을 돌아보며 받은 가장 뜻깊은 순간이었습니다. 그날 떠오른 것은 상장보다 교실과 학생들의 기억이었습니다. 수많은 학생들과 함께한 시간이 있었기에 가능한 순간이었습니다. 그래서 가장 먼저 생각난 것도 학생들의 얼굴이었습니다.",
    // placeholder: /images/editorial/career/green-service-medal-ceremony.jpg
    image: {
      src: "/images/editorial/career/green-medal-prize.jpg",
      alt: "책상 위 펼쳐진 책과 안경, 오후의 고요한 빛",
      caption: "37년을 돌아보는 오후 · 상장보다 먼저 떠오른 교실",
    },
    journalSlug: "green-medal-prize",
  },
  {
    id: "students-returned",
    chapter: 12,
    period: "지금도 이어지는",
    title: "학생들이 다시 찾아오다",
    description:
      "졸업한 뒤에도 연락을 주는 학생, 진로를 바꾸고 다시 찾아오는 학생들이 있었습니다. 상담실을 찾아왔던 학생들이 자신의 길을 찾고 다시 선생님을 찾아온 순간들이었습니다. 교직 인생은 그런 만남으로 이어지고 있으며, 아직 끝나지 않았습니다.",
  },
];

export const homeTimelinePreviewIds: string[] = [
  "first-classroom",
  "no-leave-37-years",
  "public-middle-school-move",
  "green-service-medal",
];

export const educatorData: EducatorData = {
  profile: educatorProfile,
  careerTimeline,
  homeTimelinePreviewIds,
};

export function getCareerTimeline(): CareerMilestone[] {
  return [...careerTimeline].sort((a, b) => a.chapter - b.chapter);
}

export function getHomeTimelinePreview(): CareerMilestone[] {
  const timelineById = new Map(
    careerTimeline.map((milestone) => [milestone.id, milestone]),
  );

  return homeTimelinePreviewIds
    .map((id) => timelineById.get(id))
    .filter(
      (milestone): milestone is CareerMilestone =>
        milestone !== undefined && milestone.image !== undefined,
    );
}

export function getMilestoneById(id: string): CareerMilestone | undefined {
  return careerTimeline.find((milestone) => milestone.id === id);
}
