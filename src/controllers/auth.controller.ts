import { Request, Response } from "express";
import { UserLoginDto } from "../types/interfaces/request/user-login";
import { authManager } from "../managers/auth.manager";
import { handleError, handleSuccess } from "../helpers/response.helper";
import { authConstants } from "../types/constants/auth.constants";

class AuthController {
  public async login(req: Request, res: Response) {
    try {
      const requestBody: UserLoginDto = req.body;
      const response = await authManager.login(requestBody);
      handleSuccess(res, authConstants.LOGIN_SUCCESS, response);
      
    } catch (error: any) {
      handleError(res, error);
    }
  }
}

export const authController = new AuthController();
