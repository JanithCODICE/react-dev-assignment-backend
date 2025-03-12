import { Request, Response, NextFunction } from "express";
import passport from "passport";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const unauthorizedResponse = { success: false, message: `Unauthorized` };
  if (!req.headers.authorization) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }

  passport.authenticate("jwt", { session: false }, (err: any, user: any | undefined, info: any) => {

    if (err) {
      console.error("Authentication error:", err || "Unknown error");
      return res.status(401).json(unauthorizedResponse);
    }

    if (!user) {
      console.error("Authentication error: ", "Invalid token");
      console.log("Authentication info: ", info)
      return res.status(401).json(unauthorizedResponse);
    }

    req.user = user;
    next();
  })(req, res, next);
};

export default authMiddleware;
