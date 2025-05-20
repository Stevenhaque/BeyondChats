export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  image: string;
}