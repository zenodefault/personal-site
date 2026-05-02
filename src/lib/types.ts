import type { IconType } from 'react-icons';

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
  stats?: { label: string; value: string }[];
  highlights?: string[];
  href: string;
  status: string;
};

export type Skill = {
  name: string;
  icon: IconType;
};

export type SkillGroup = {
  title: string;
  items: (string | Skill)[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
};
