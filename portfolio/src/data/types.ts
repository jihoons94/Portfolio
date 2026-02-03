export type ContentItem = 
  | string 
  | { type: 'subtitle'; text: string }
  | { type: 'image'; src: string; alt?: string; caption?: string; maxWidth?: string }
  | { type: 'imageGroup'; images: Array<{ src: string; alt?: string; caption?: string; maxWidth?: string }> }
  | { type: 'video'; src: string; caption?: string; controls?: boolean }
  | { type: 'code'; language: string; code: string; caption?: string };

export interface ContentSection {
  title: string;
  items: ContentItem[];
}

export interface TechDetail {
  id: string;
  name: string;
  description: string;
  content: ContentSection[];
  relatedProjects: string[];
}

