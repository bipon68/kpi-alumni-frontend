import { create } from "zustand";
import { firebaseAuth, githubProvider, googleProvider } from "../google/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

interface IRegistration {
  loading: boolean;
  regWithGoogle: () => Promise<void>;
  regWithGitHub: () => Promise<void>;
  regWithEmailPassword: (formData: IFormData) => Promise<void>;
}

const useRegistrationStore = create<IRegistration>((set) => ({
  loading: false,

  regWithGoogle: async () => {
    set({ loading: true });
    toast.info("Registering with Google...");

    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile");
    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email");
    googleProvider.addScope("profile");
    googleProvider.addScope("email");
    googleProvider.addScope("openid");
    try {
      await signInWithPopup(firebaseAuth, googleProvider);

      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      throw new Error("Google login error: " + error);
    }
  },
  regWithGitHub: async () => {
    set({ loading: true });
    toast.info("Registering through Github...");

    githubProvider.addScope("user:email");
    try {
      const { user } = await signInWithPopup(firebaseAuth, githubProvider);
      console.log("Github User: ", user);
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      throw new Error("Github login error: " + error);
    }
  },

  regWithEmailPassword: async (formData) => {
    set({ loading: true });

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      set({ loading: false });
      toast.error("Invalid email format");
      return;
    }

    if (formData.password.length < 6) {
      set({ loading: false });
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(firebaseAuth, formData.email, formData.password);
      console.log("Email Password User: ", user);
      set({ loading: false });
      toast.success("Registration successful");
    } catch (error) {
      set({ loading: false });
      throw new Error("Email Password registration error: " + error);
    }
  },
}));

export default useRegistrationStore;
