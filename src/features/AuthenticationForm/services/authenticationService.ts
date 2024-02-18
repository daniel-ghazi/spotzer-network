import Logger from "../../../utils/Logger";
import cookies from "../../../utils/cookies";
import { MOCK_JWT_TOKEN, MOCK_USER } from "../mock-data/mockData";
import { User } from "../models/user";

class AuthenticationService {
  static async authenticate({ username, password }: User): Promise<string> {
    return new Promise((resolve, reject) => {
      // imitating server call delay
      setTimeout(() => {
        try {
          if (
            username === MOCK_USER.username &&
            password === MOCK_USER.password
          ) {
            const fakeToken = MOCK_JWT_TOKEN;
            resolve(fakeToken);
          } else {
            reject("Username or password is incorrect");
          }
        } catch (error) {
          if (error instanceof Error) {
            Logger.error(error, { username });
          } else {
            Logger.errorMessage("An authenticate API error occurred", {
              username,
            });
          }
          reject(error);
        }
      }, 1000);
    });
  }

  static setAuthToken(token: string): void {
    const oneDay = 24 * 60 * 60 * 1000;
    // In real scenario the server would set cookie with httpOnly, secure and
    // sameSite flags to prevent XSS attacks
    cookies.set("authToken", token, { path: "/", maxAge: oneDay });
  }

  static isUserAuthenticated(): boolean {
    // In real scenario we would validate the token with the server
    return !!cookies.get("authToken");
  }
}

export default AuthenticationService;
