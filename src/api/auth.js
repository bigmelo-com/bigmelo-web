import { authenticatedRequest, unAuthenticatedRequest } from "./requests";

export const login =  async (data) => {
    return unAuthenticatedRequest.post("/v1/auth/get-token", data);
};

export const signUp =  async (data) => {
    return unAuthenticatedRequest.post("/v1/auth/signup", data);
};

export const isLogged = async () => {
    return authenticatedRequest.get("/v1/profile");
};
        


