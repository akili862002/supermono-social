export enum Privacy {
  PUBLIC = "Public",
  CURATED_AUDIENCE = "Curated Audience",
  COMMUNITY_ONLY = "Community Only",
}

export interface Social {
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
