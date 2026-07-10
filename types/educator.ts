export type EducatorPortrait = {
  src: string;
  alt: string;
  caption: string;
};

export type CareerMilestoneImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type EducatorHomeTeaser = {
  headline: string;
  subheadline: string;
  cta: string;
};

export type EducatorProfile = {
  name: string;
  honorific: string;
  role: string;
  yearsOfService: number;
  headline: string;
  headlineLines: [string, string];
  subheadline: string;
  timelineSectionTitle: string;
  openingNarrative: string;
  portrait: EducatorPortrait;
  homeTeaser: EducatorHomeTeaser;
};

export type CareerMilestone = {
  id: string;
  chapter: number;
  period: string;
  title: string;
  description: string;
  /** Shorter copy for Home timeline preview cards only. */
  previewDescription?: string;
  image?: CareerMilestoneImage;
  journalSlug?: string;
};

export type EducatorData = {
  profile: EducatorProfile;
  careerTimeline: CareerMilestone[];
  homeTimelinePreviewIds: string[];
};
