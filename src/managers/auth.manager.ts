import { UserLoginDto } from "../types/interfaces/request/user-login";
import { UserLoginResponse } from "../types/interfaces/response/user-login";
import moment from "moment";
import { TokenPayload, Tokens } from "../types/interfaces/token/token";
import jwt from "jsonwebtoken";
import { userRepository } from "../repository/user.repository";
import globalAppConfig from "../config/global-app-config";
import { BadRequestError } from "../helpers/error.helper";

class AuthManager {
  async login(request: UserLoginDto): Promise<UserLoginResponse> {
    const { email, password } = request;
    const user = userRepository.findUserByEmailAndStatus(email, 1);

    if (!user) {
      throw new BadRequestError("INVALID CREDENTIALS");
    }

    if (password !== user.password) {
      throw new BadRequestError("INVALID CREDENTIALS");
    }

    const tokens: Tokens = await this.generateAuthToken(email);

    const response: UserLoginResponse = {
      email,
      name: user.name,
      id: user.id,
      status: user.status,
      session: {
        accessToken: tokens.accessToken,
        accessExpiresIn: tokens.accessExpiresIn,
        refreshToken: tokens.refreshToken,
        refreshExpiresIn: tokens.refreshExpiresIn,
      }
    };

    return response;
  }

  private async generateAuthToken(userEmail: string): Promise<Tokens> {
    const accessTokenPayload: TokenPayload = {
      email: userEmail,
      type: "ACCESS",
    };

    const refreshTokenPayload: TokenPayload = {
      email: userEmail,
      type: "REFRESH",
    };

    const accessToken = this.createToken(accessTokenPayload);
    const refreshToken = this.createToken(refreshTokenPayload);

    const accessPayload = jwt.decode(accessToken) as jwt.JwtPayload;
    const accessExpiresIn = accessPayload?.exp?.valueOf() ?? 0;
  
    const refreshPayload = jwt.decode(refreshToken) as jwt.JwtPayload;
    const refreshExpiresIn = refreshPayload?.exp?.valueOf() ?? 0;
    

    return {
      accessToken,
      refreshToken,
      accessExpiresIn: accessExpiresIn,
      refreshExpiresIn: refreshExpiresIn,
    };
  }

  private createToken(payload: TokenPayload): string {
    if (payload.type === "ACCESS") {
      return jwt.sign(
        payload,
        globalAppConfig.accessTokenSecret as jwt.Secret,
        {
          expiresIn: globalAppConfig.accessTokenExpiresIn,
        } as jwt.SignOptions
      );
    }

    if (payload.type === "REFRESH") {
      return jwt.sign(
        payload,
        globalAppConfig.refreshTokenSecret as jwt.Secret,
        {
          expiresIn: globalAppConfig.refreshTokenExpiresIn,
        } as jwt.SignOptions
      );
    }

    throw new Error("INVALID TOKEN TYPE");
  }
}

export const authManager = new AuthManager();
