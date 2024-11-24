import { create } from "zustand";
import { signInWithPopup, signOut, User } from "firebase/auth";
import { firebaseAuth, githubProvider, googleProvider } from "../google/firebase";

interface AuthState {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithGitHub: () => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  loginWithGoogle: async () => {
    set({ loading: true });

    try {
      const userCredential = await signInWithPopup(firebaseAuth, googleProvider);
      set({ user: userCredential.user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw new Error("Google login error: " + error);
    }
  },
  loginWithGitHub: async () => {
    set({ loading: true });

    try {
      const userCredential = await signInWithPopup(firebaseAuth, githubProvider);
      set({ user: userCredential.user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw new Error("Github login error: " + error);
    }
  },
  logout: async () => {
    set({ loading: true });

    try {
      await signOut(firebaseAuth);
      set({ user: null, loading: false });
    } catch (error) {
      set({ loading: false });
      throw new Error("Logout error: " + error);
    }
  },
}));

export default useAuthStore;
