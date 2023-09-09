export interface NavigationMenuItem {
  path: string;
  icon: string;
}

export interface HobbyDataItem {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface WorkDataItem {
  id: string;
  title: string;
  position: string;
  startDate: string;
  endDate?: string;
  skills: string[];
}

export interface PillGroupItem {
  primary: string;
  secondary?: string;
}

export interface Skill {
  icon: string;
  displayName: string;
}

export interface SkillDataItem {
  startDate: string;
  skill: Skill;
  name: string;
}

export interface SkillDataResponse {
  startDate: string;
  name: string;
}