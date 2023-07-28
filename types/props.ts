export interface NavigationMenuItem {
  path: string;
  icon: string;
}

export interface HobbyDataItem {
  title: string;
  subtitle: string;
  items: string[];
}

export interface WorkDataItem {
  title: string;
  position: string;
  startDate: string;
  endDate?: string;
}

export interface PillGroupItem {
  primary: string;
  secondary?: string;
}
