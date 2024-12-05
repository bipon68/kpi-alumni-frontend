import { create } from "zustand";
import { firebaseAuth, githubProvider, googleProvider } from "../google/firebase";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import AxiosApi from "@/utils/axios";
import { TApiResponse } from "../types/response";

interface IFormData {
  FullName: string;
  Email: string;
  Password1: string;
  Password2: string;
  AcceptTc: boolean;
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
    if (!emailRegex.test(formData.Email)) {
      set({ loading: false });
      toast.error("Invalid email format");
      return;
    }

    try {
      const { data }: { data: TApiResponse<any> } = await AxiosApi.setPath("/api/v1/registration/with-email").post(
        formData
      );

      set({ loading: false });
      console.log("Email Password registration response: ", data);
      if (data.error !== 0) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
      }
    } catch (error) {
      set({ loading: false });
      throw new Error("Email Password registration error: " + error);
    }
  },
}));

export default useRegistrationStore;
