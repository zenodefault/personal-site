import type { ContactLink, NavItem, Project, SkillGroup } from '../lib/types';

export const navItems: NavItem[] = [
  { id: 'about', label: './about', command: 'cat ./about.txt', description: 'read the operator profile' },
  {
    id: 'projects',
    label: './projects',
    command: 'ls projects/',
    description: 'inspect featured work and experiments',
  },
  {
    id: 'skills',
    label: './skills',
    command: 'env capabilities',
    description: 'review stack fluency and specialties',
  },
  {
    id: 'contact',
    label: './socials',
    command: 'ping operator',
    description: 'open the communication channels',
  },
];

export const projects: Project[] = [
  {
    name: 'dummy project one',
    summary: 'short placeholder summary for a featured project. replace this with a real project description later.',
    stack: ['react', 'typescript', 'ui'],
    href: '#',
    status: 'placeholder',
  },
  {
    name: 'dummy project two',
    summary: 'another placeholder project entry for layout testing, spacing checks, and content structure.',
    stack: ['frontend', 'design', 'motion'],
    href: '#',
    status: 'placeholder',
  },
  {
    name: 'dummy project three',
    summary: 'temporary content block for a future case study, prototype, or interactive experiment.',
    stack: ['prototype', 'research', 'build'],
    href: '#',
    status: 'placeholder',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'dummy skills',
    items: ['skill placeholder a', 'skill placeholder b', 'skill placeholder c'],
  },
  {
    title: 'tools',
    items: ['tool placeholder a', 'tool placeholder b', 'tool placeholder c'],
  },
  {
    title: 'focus areas',
    items: ['focus placeholder a', 'focus placeholder b', 'focus placeholder c'],
  },
];

export const contactLinks: ContactLink[] = [
  { label: 'email', value: 'your@email.com', href: 'mailto:your@email.com' },
  { label: 'github', value: 'github.com/yourname', href: 'https://github.com/yourname' },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/yourname',
    href: 'https://linkedin.com/in/yourname',
  },
];
