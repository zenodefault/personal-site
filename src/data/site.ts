import type { ContactLink, NavItem, Project, SkillGroup } from '../lib/types';

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', command: 'cat about.md', description: 'Read the operator profile' },
  {
    id: 'projects',
    label: 'Projects',
    command: 'ls projects/',
    description: 'Inspect featured work and experiments',
  },
  {
    id: 'skills',
    label: 'Skills',
    command: 'env capabilities',
    description: 'Review stack fluency and specialties',
  },
  {
    id: 'contact',
    label: 'Contact',
    command: 'ping operator',
    description: 'Open the communication channels',
  },
];

export const projects: Project[] = [
  {
    name: 'Dummy Project One',
    summary: 'Short placeholder summary for a featured project. Replace this with a real project description later.',
    stack: ['React', 'TypeScript', 'UI'],
    href: '#',
    status: 'Placeholder',
  },
  {
    name: 'Dummy Project Two',
    summary: 'Another placeholder project entry for layout testing, spacing checks, and content structure.',
    stack: ['Frontend', 'Design', 'Motion'],
    href: '#',
    status: 'Placeholder',
  },
  {
    name: 'Dummy Project Three',
    summary: 'Temporary content block for a future case study, prototype, or interactive experiment.',
    stack: ['Prototype', 'Research', 'Build'],
    href: '#',
    status: 'Placeholder',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Dummy Skills',
    items: ['Skill placeholder A', 'Skill placeholder B', 'Skill placeholder C'],
  },
  {
    title: 'Tools',
    items: ['Tool placeholder A', 'Tool placeholder B', 'Tool placeholder C'],
  },
  {
    title: 'Focus Areas',
    items: ['Focus placeholder A', 'Focus placeholder B', 'Focus placeholder C'],
  },
];

export const contactLinks: ContactLink[] = [
  { label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
  { label: 'GitHub', value: 'github.com/yourname', href: 'https://github.com/yourname' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourname',
    href: 'https://linkedin.com/in/yourname',
  },
];
