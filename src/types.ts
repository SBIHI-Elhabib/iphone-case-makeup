export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProductFeature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}