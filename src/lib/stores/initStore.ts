import AxiosApi from "@/utils/axios";
import { create } from "zustand";

interface InitState {
  initInfo: object;
  loading: boolean;
  loadInitInfo: () => Promise<void>;
}

const useInitStore = create<InitState>((set) => ({
  initInfo: {},
  loading: false,
  loadInitInfo: async () => {
    set({ loading: true });

    try {
      const { data } = await AxiosApi.setPath("/api/v1/init/info").get();
      localStorage.setItem("init-id", data?.data?.initId);
      set({ initInfo: data, loading: false });
    } catch (ex) {
      set({ loading: false });
      throw ex;
    }
  },
}));

export default useInitStore;
