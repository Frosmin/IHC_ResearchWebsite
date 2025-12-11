export interface Publication {
  title: string;
  authors: string;
  year: number;
  journal: string;
  abstract: string;
}

export interface ResearchPublicationDetail extends Publication {
  sourceId: string;
  sourceName: string;
  sourceType: 'Centro' | 'Laboratorio';
}

export type SearchResultItem =
  | { id: string; type: 'centro' }
  | { id: string; type: 'laboratorio' }
  | { id: string; type: 'investigacion'; publication: ResearchPublicationDetail };

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface Center {
  id: string;
  name: string;
  description: string;
  logo: string;
  history: string;
  mission: string;
  usefulInfo: string;
  publications: Publication[];
  contact: ContactInfo;
  popularity: number;
}

export interface Lab {
  id: string;
  name: string;
  description: string;
  logo: string;
  history: string;
  mission: string;
  usefulInfo: string;
  publications: Publication[];
  contact: ContactInfo;
  popularity: number;
}
