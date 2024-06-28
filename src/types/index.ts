// src/types/index.ts
export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IconProps {
  color?: string;
  size?: number;
}
