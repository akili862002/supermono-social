export enum Privacy {
  PUBLIC = "Public",
  CURATED_AUDIENCE = "Curated Audience",
  COMMUNITY_ONLY = "Community Only",
}

export interface Social {
  id: string;
  title: string;
  startAt: string;
  venue: string;
  capacity: number;
  price: number;
  description: string;
  banner: string;
  tags: string[];
  isManualApprove: boolean;
  privacy: Privacy;
}

export interface SocialInput extends Omit<Social, "id"> {}
