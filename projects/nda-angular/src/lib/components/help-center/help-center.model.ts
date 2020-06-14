export interface HelpCenter {
  overview: string;
  title: string;
  lastPublished: string;
  faqs: Faq[];
  glossary: Glossary[];
}

export interface Faq {
  question: string;
  answer: string;
  displayOrder: number;
  lastPublished: string;
  video?: Video;
}

export interface Glossary {
  term: string;
  definition: string;
  displayOrder: number;
  lastPublished: string;
}

export interface Video {
  title: string;
  description: string;
  mediaGif: string;
  mediaMp4: string;
  mediaWebM: string;
  lastPublished: string;
}