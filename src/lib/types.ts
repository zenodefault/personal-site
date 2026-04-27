export type NavItem = {
  id: string;
  label: string;
  command: string;
  description: string;
};

export type HeroAction = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
};

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  href: string;
  status: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};
