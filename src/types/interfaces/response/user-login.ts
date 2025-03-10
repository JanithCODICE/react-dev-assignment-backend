import { Tokens } from "../token/token";

export interface UserLoginResponse  {
    email: string;
    name: string;
    id: number;
    status: number
    session: Tokens;
  }
  