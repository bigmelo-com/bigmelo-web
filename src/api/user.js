import { authenticatedRequest } from "./requests";

export const sendSupportRequest = async (data) => {
  return authenticatedRequest.post("/v1/contact", data);
};

export const profile = async () => {
  return authenticatedRequest.get("/v1/profile");
};

export const validateUser = async (data) => {
  return authenticatedRequest.post("/v1/user/validate", data);
};

export const getValidationCode = async () => {
  return authenticatedRequest.patch("/v1/user/validation-code", {});
};