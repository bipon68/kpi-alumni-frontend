import { create } from "zustand";
import { signInWithEmailAndPassword, signInWithPopup, signOut, User } from "firebase/auth";
import { firebaseAuth, githubProvider, googleProvider } from "../google/firebase";
import { toast } from "react-toastify";

interface AuthState {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithGitHub: () => Promise<void>;
  loginWithEmailPassword: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  //--Login with Google
  loginWithGoogle: async () => {
    set({ loading: true });
    toast.info("Logging in with Google...", { hideProgressBar: true, autoClose: 3000 });
    try {
      const userCredential = await signInWithPopup(firebaseAuth, googleProvider);
      set({ user: userCredential.user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw new Error("Google login error: " + error);
    }
  },
  //--Login with Github
  loginWithGitHub: async () => {
    set({ loading: true });
    toast.info("Logging in with Github...", { hideProgressBar: true, autoClose: 3000 });
    try {
      const userCredential = await signInWithPopup(firebaseAuth, githubProvider);
      set({ user: userCredential.user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw new Error("Github login error: " + error);
    }
  },
  //--Login with Email and Password
  loginWithEmailPassword: async (email, password) => {
    set({ loading: true });

    //--valid email using regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      set({ loading: false });
      toast.error("Invalid email format");
      return;
    }

    if (password.length < 6) {
      set({ loading: false });
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      set({ user: userCredential.user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw new Error("Email and Password login error: " + error);
    }
  },
  //--Logout
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
