import { LocalStorageService, LocalStorageKeys } from "@services/LocalStorage";

const login = async (params: {
  username: string;
  password: string;
}): Promise<void> => {
  console.log("login params", params);
  const token = "2342f2f1d131rf12";
  LocalStorageService.setLS(LocalStorageKeys.Token, token);

  new Promise((resolve) => {
    setTimeout(() => resolve(token), 1500);
  });
};

export const AuthenticationService = {
  login,
};
