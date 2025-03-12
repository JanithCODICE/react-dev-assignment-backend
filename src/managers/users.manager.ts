import { BadRequestError } from "../helpers/error.helper";
import { PaginatedResult } from "../helpers/response.helper";
import { userRepository } from "../repository/user.repository";
import { User } from "../types/Entities/user.entity";
import { UserListDto } from "../types/interfaces/request/user-list";

class UserManager {
  async getPaginatedUsers(
    request: UserListDto
  ): Promise<PaginatedResult<User>> {
    const { page } = request;

    if (page < 0) {
      throw new BadRequestError("INVALID PAGE NUMBER");
    }

    const users = userRepository.getPaginatedUsers(page);
    return users;
  }
}

export const userManager = new UserManager();
