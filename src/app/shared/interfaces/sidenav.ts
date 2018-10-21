export interface Isidenav {
    elementId: number;
    elementValue: string;
    elementParent: number;
    elementChild: boolean;
    isCollapsed: boolean;
    routelink: string;
    icon: string;
    children: Isidenav[];
  }
  