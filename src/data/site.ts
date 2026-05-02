import { 
  SiFlutter, 
  SiDart, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiCplusplus, 
  SiC, 
  SiFastapi, 
  SiPython, 
  SiFirebase, 
  SiPostgresql, 
  SiLinux, 
  SiX, 
  SiGithub, 
  SiAnilist, 
  SiSpotify
} from 'react-icons/si';
import { TbBrain, TbLayoutBoard } from 'react-icons/tb';
import type { ContactLink, NavItem, Project, SkillGroup } from '../lib/types';

export const navItems: NavItem[] = [
  { id: 'about', label: './about', command: 'cat about.txt', description: 'read the operator profile' },
  {
    id: 'projects',
    label: './projects',
    command: 'ls -la projects/',
    description: 'inspect featured work and experiments',
  },
  {
    id: 'skills',
    label: './skills',
    command: 'env --capabilities',
    description: 'review stack fluency and specialties',
  },
  {
    id: 'contact',
    label: './socials',
    command: 'ping operator --socials',
    description: 'open the communication channels',
  },
];

export const projects: Project[] = [
  {
    name: 'Sumi',
    summary: 'Sumi is a privacy-first fitness companion that unifies calorie tracking, habit building, workout planning, and weekly analytics — all offline-capable. Built with Indian users in mind, it integrates the Indian Nutrient Databank (INDB) alongside Open Food Facts for accurate local food tracking.',
    stack: ['Flutter', 'Dart', 'Hive', 'Provider'],
    stats: [
      { value: '15MB', label: 'apk size' },
      { value: 'Offline', label: 'architecture' },
      { value: 'INDB', label: 'nutrition data' },
      { value: 'Cross-platform', label: 'deployment' }
    ],
    highlights: [
      '// Offline-first architecture with local JSON food database.',
      '// Habit streaks + visual analytics dashboard.',
      '// Exercise library with muscle-group mapping.',
      '// Lightweight (~15MB APK), no cloud dependency.'
    ],
    href: 'https://github.com/zenodefault/sumi',
    status: 'v1.0',
  },
  {
    name: 'MyCampusMate',
    summary: 'MyCampusMate streamlines campus life for MS RIT students with real-time attendance tracking, smart timetables, digital notes, and official portal integration. Features secure authentication, dark mode, and cross-platform support — built to solve real student pain points.',
    stack: ['Flutter', 'Python', 'FastAPI', 'Dio'],
    stats: [
      { value: 'Real-time', label: 'sync' },
      { value: 'Multi-platform', label: 'builds' },
      { value: 'FastAPI', label: 'backend' },
      { value: 'Automated', label: 'scraping' }
    ],
    highlights: [
      '// Real-time attendance sync with college portal.',
      '// Subject-wise analytics + assignment reminders.',
      '// Campus news scraper + academic calendar.',
      '// Production-ready: APK releases, multi-platform builds.'
    ],
    href: 'https://github.com/zenodefault/my_campus_mate7',
    status: 'Active',
  },
  {
    name: 'Nexus (EVP)',
    summary: 'Nexus is an AI-powered research orchestration tool that helps teams prioritize experiments. It ingests literature, generates hypotheses, estimates compute/impact tradeoffs, and outputs ranked recommendations — with support for mock, local LLM, or cloud API modes.',
    stack: ['Python', 'LangChain', 'CrewAI', 'Streamlit'],
    stats: [
      { value: 'Modular', label: 'agents' },
      { value: 'Mock/Local/Cloud', label: 'llm backend' },
      { value: 'EVP', label: 'scoring' },
      { value: 'Automated', label: 'pipelines' }
    ],
    highlights: [
      '// Modular agent architecture (Literature -> Hypothesis -> Scoring).',
      '// "Syntropy" cross-domain knowledge bridging feature.',
      '// Flexible LLM backend: mock -> local -> cloud.',
      '// Research-grade: PDF audit, concept graphs, JSON contracts.'
    ],
    href: 'https://github.com/zenodefault/nexus',
    status: 'Research',
  },
  {
    name: 'fileman',
    summary: 'fileman is a minimalist terminal file manager written in pure C with ncurses. It delivers fast directory navigation, human-readable file sizes, and essential file operations — with zero external dependencies beyond the standard library.',
    stack: ['C', 'ncurses', 'Makefile', 'POSIX'],
    stats: [
      { value: '<500', label: 'loc' },
      { value: '0', label: 'dependencies' },
      { value: 'POSIX', label: 'compliant' },
      { value: 'O(1)', label: 'caching' }
    ],
    highlights: [
      '// <500 lines of core logic — clean, readable systems code.',
      '// No runtime dependencies beyond ncurses.',
      '// Human-readable sizes (B/KB/MB/GB) + performance caching.',
      '// Great showcase of low-level C + terminal UI skills.'
    ],
    href: 'https://github.com/zenodefault/fileman',
    status: 'Stable',
  },
  {
    name: 'creatorOS',
    summary: 'creatorOS is a modular Next.js starter kit designed for creator tools and content platforms. It features a component-driven architecture, TailwindCSS styling, and Firebase integration — built for rapid prototyping of modern web apps.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    stats: [
      { value: 'Next.js 14', label: 'framework' },
      { value: 'Firebase', label: 'backend' },
      { value: 'Component', label: 'driven' },
      { value: 'Vercel', label: 'deployment' }
    ],
    highlights: [
      '// Component library with reusable UI primitives.',
      '// Firebase-ready auth + data layer.',
      '// Optimized for Vercel deployment.',
      '// Clean architecture: apps/, components/, hooks/ separation.'
    ],
    href: 'https://github.com/zenodefault/creatorOS',
    status: 'WIP',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Development',
    items: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Dart', icon: SiDart },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C', icon: SiC },
    ],
  },
  {
    title: 'Systems & Backend',
    items: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Python', icon: SiPython },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Linux', icon: SiLinux },
    ],
  },
  {
    title: 'Focus Areas',
    items: [
      { name: 'AI/ML Integration', icon: TbBrain },
      { name: 'Clean Architecture', icon: TbLayoutBoard },
    ],
  },
];

export const contactLinks: ContactLink[] = [
  { label: 'x/twitter', value: '@zenodefault99', href: 'https://x.com/zenodefault99', icon: SiX },
  { label: 'github', value: 'zenodefault', href: 'https://github.com/zenodefault', icon: SiGithub },
  { label: 'anilist', value: 'Naveedkun', href: 'https://anilist.co/user/Naveedkun/', icon: SiAnilist },
  { label: 'spotify', value: 'zenodefault', href: 'https://open.spotify.com/user/5991xd4ts74felvg5rskl6zo7?si=sGyuk3EgRo2SZDhDKHOlgA', icon: SiSpotify },
];
