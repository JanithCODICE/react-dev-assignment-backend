import { Request, Response } from "express";
import { handleError, handleSuccess } from "../helpers/response.helper";
import { UserListDto } from "../types/interfaces/request/user-list";
import { userManager } from "../managers/users.manager";
import { userConstants } from "../types/constants/user.constants";

class UsersController {
    public async getUsers(req: Request, res: Response) {
        try {
            const requestPayload: UserListDto = {
                page: parseInt(req.query.page as string, 10) || 0
            };
            const response = await userManager.getPaginatedUsers(requestPayload)
            handleSuccess(res, userConstants.GET_USERS_SUCCESS, response);
        } catch (error: any) {
            handleError(res, error);
        }
    }
}

export const usersController = new UsersController();