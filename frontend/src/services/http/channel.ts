import { getTokenInterceptor } from "./interceptors";

const axiosChannel = getTokenInterceptor("/channel");

export const httpChannelService = {
  findByName: async (name: string) => {
    const result = await axiosChannel.get("/find/" + name);
    const data = result.data;
    console.log(data);
    return data;
  },
};
