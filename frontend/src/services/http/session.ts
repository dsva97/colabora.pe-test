import { getInterceptor } from "./interceptors";

const axiosSession = getInterceptor("/session");

export const httpSessionService = {
  async login(body: { email: string; password: string }) {
    const res = await axiosSession.post("/login", body);
    return res.data;
  },
};
