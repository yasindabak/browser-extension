export type Extension = {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

export type ButtonFilter = "all" | "active" | "inactive"