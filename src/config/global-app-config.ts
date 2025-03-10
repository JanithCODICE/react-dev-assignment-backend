import exp from "constants";

interface GlobalAppConfig {
  accessTokenSecret: string;
  refreshTokenSecret: string;
  accessTokenExpiresIn: string;
  refreshTokenExpiresIn: string;
}

const globalAppConfig: GlobalAppConfig = {
    accessTokenSecret: process.env.JWT_ACCESS_SECRET ?? "",
    refreshTokenSecret: process.env.JWT_REFRESH_SECRET ?? "",
    accessTokenExpiresIn: process.env.JWT_ACCESS_EXPIRATION ?? "",
    refreshTokenExpiresIn: process.env.JWT_REFRESH_EXPIRATION ?? "",
}

export default globalAppConfig;
