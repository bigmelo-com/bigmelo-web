import { authenticatedRequest } from "./requests";

export const sendPaymentInfo = async (data) => {
    return authenticatedRequest.post("/v1/plan/payment", data);
};

export const getPaymentLink = async (planId) => {
    return authenticatedRequest.get(`/v1/plan/purchase/${planId}`);
};

export const getPlanData = async () => {
    return authenticatedRequest.get("/v1/plan/purchase");
};


