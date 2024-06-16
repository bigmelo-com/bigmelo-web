import { authenticatedRequest, unAuthenticatedRequest } from "./requests";

export const login =  async (data) => {
    return unAuthenticatedRequest.post("/v1/auth/get-token", data);
};

export const signUp =  async (data) => {
    return unAuthenticatedRequest.post("/v1/auth/signup", data);
};

export const isLogged = async () => {
    return authenticatedRequest.get("/v1/test");
};

export const sendRecoveryRequest = async (email) => {
    return unAuthenticatedRequest.post("/v1/auth/password-recovery", {
        email: email
    });
};

export const resetPassword = async (data) => {
    return authenticatedRequest.post("/v1/auth/reset-password", data);
};