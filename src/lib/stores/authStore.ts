import { create } from "zustand";
import { signInWithEmailAndPassword, signInWithPopup, signOut, User } from "firebase/auth";
import { firebaseAuth, githubProvider, googleProvider } from "../google/firebase";
import { toast } from "react-toastify";
import AxiosApi from "@/utils/axios";
import axios from "axios";
import { getApiUrl } from "@/utils/env";

interface AuthState {
  user: User | null;
  loading: boolean;
  verifyLogin: (user: User) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGitHub: () => Promise<void>;
  loginWithEmailPassword: (email: string, password: string) => Promise<void>;
  logginIn: (user: User) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,

  //--Verify login
  verifyLogin: async (user: User) => {
    set({ loading: true });
    const { uid, refreshToken } = user;
    const headers = {
      "content-type": "application/json",
      "refresh-token": `${refreshToken}`,
      "user-uid": `${uid}`,
    };
    try {
      const { data }: { data: any } = await axios.get(`${getApiUrl()}/api/v1/login/verify`, { headers });

      if (data.Error !== 0) {
        set({ loading: false });
        throw new Error(data.Message);
      }
      return data;
    } catch (ex) {
      set({ loading: false });
      throw ex;
    }
  },

  logginIn: async (user: User) => {
    const { uid, refreshToken } = user || {};
    const headers = {
      "content-type": "application/json",
      "refresh-token": `${refreshToken}`,
      "user-uid": `${uid}`,
    };
    const { data } = await axios.post(`${getApiUrl()}/auth/logging-in`, { id: Math.random() }, { headers });

    if (data.error) {
      const err = new Error(data.message);
      err.name = data.referenceName;
      throw err;
    }
  },
  //--Login with Google
  loginWithGoogle: async () => {
    set({ loading: true });
    toast.info("Logging in with Google...", { hideProgressBar: true, autoClose: 3000 });

    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile");
    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email");
    googleProvider.addScope("profile");
    googleProvider.addScope("email");
    googleProvider.addScope("openid");
    try {
      const { user } = await signInWithPopup(firebaseAuth, googleProvider);
      set({ user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw new Error("Google login error: " + error);
    }
  },
  //--Login with Github
  loginWithGitHub: async () => {
    set({ loading: true });
    toast.info("Logging in with Github...", { hideProgressBar: true, autoClose: 3000 });

    githubProvider.addScope("user:email");
    try {
      const { user } = await signInWithPopup(firebaseAuth, githubProvider);
      set({ user, loading: false });
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
      const loginInfo = await AxiosApi.setPath("api/v1/login").post({ type: "email", email: email });

      if (loginInfo.data.Error !== 0) {
        toast.error(loginInfo.data.Message);
        return;
      }

      const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
      set({ user, loading: false });
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
