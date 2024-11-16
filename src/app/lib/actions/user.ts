"use server";
import jwt, { JwtPayload, Secret, TokenExpiredError } from "jsonwebtoken";

export async function verifyToken(token: string, secret: Secret) {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error) {
    if (error instanceof TokenExpiredError) {
    } else {
    }
    return null;
  }
}
