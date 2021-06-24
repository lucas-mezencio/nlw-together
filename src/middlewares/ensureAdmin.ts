import { Request, Response, NextFunction } from "express";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const admin = true;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "User is not an adminstrator",
  });
}
