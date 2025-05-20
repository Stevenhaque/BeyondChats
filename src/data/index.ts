import { NavLink, Service, TeamMember, Testimonial } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Tax Planning & Preparation',
    description: 'Strategic tax planning and preparation services for individuals and businesses to minimize tax liability and ensure compliance.',
    icon: 'Calculator',
  },
  {
    id: 2,
    title: 'Bookkeeping & Accounting',
    description: 'Comprehensive bookkeeping and accounting services to maintain accurate financial records and gain insights into your business performance.',
    icon: 'BookOpen',
  },
  {
    id: 3,
    title: 'Financial Planning',
    description: 'Personalized financial planning services to help you achieve your short and long-term financial goals with confidence.',
    icon: 'LineChart',
  },
  {
    id: 4,
    title: 'Business Consulting',
    description: 'Expert business consulting services to optimize operations, improve profitability, and drive sustainable growth.',
    icon: 'TrendingUp',
  },
  {
    id: 5,
    title: 'Audit & Assurance',
    description: 'Independent audit and assurance services to enhance financial reporting credibility and stakeholder confidence.',
    icon: 'CheckCircle',
  },
  {
    id: 6,
    title: 'Estate & Trust Planning',
    description: 'Comprehensive estate and trust planning services to protect assets, minimize taxes, and ensure your legacy.',
    icon: 'Building',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Jennifer Mitchell',
    title: 'Managing Partner, CPA',
    bio: 'With over 20 years of experience in public accounting, Jennifer specializes in complex tax planning strategies for high-net-worth individuals and businesses.',
    image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    title: 'Tax Director, CPA',
    bio: 'Michael has 15 years of experience in tax compliance and planning, with expertise in partnership and corporate taxation across multiple industries.',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    title: 'Audit Manager, CPA',
    bio: 'Sarah leads our audit and assurance practice with 12 years of experience serving clients in technology, manufacturing, and nonprofit sectors.',
    image: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'David Washington',
    title: 'Financial Planning Specialist, CFP',
    bio: 'David combines his CPA background with financial planning expertise to provide comprehensive wealth management solutions to our clients.',
    image: 'https://images.pexels.com/photos/5668770/pexels-photo-5668770.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Amanda Torres',
    company: 'Torres Medical Group',
    quote: 'Modern CPA has been instrumental in optimizing our tax strategy and financial reporting. Their proactive approach has saved us thousands while providing peace of mind.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Robert Chen',
    company: 'Innovative Solutions Inc.',
    quote: 'As our company scaled, we needed advisors who understood our industry and growth challenges. The team at Modern CPA has exceeded our expectations at every turn.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Lisa Montgomery',
    company: 'Montgomery Estates',
    quote: 'Their expertise in estate planning has been invaluable. Modern CPA helped us create a comprehensive strategy that protects our assets and secures our family\'s future.',
    image: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];