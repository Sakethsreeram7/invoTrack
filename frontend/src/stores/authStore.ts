import { create } from 'zustand';

interface User {
  id: string;
  email: string;
}

interface AuthState {
  user: User | null;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: null,
  login: async (email, password) => {
    try {
      // Replace with your API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error('Invalid credentials');
      const user = await response.json();
      set({ user, error: null });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: 'An unknown error occurred' });
      }
    }
  },
  logout: () => set({ user: null }),
}));
