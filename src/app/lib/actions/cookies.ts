"use server";
import { cookies } from "next/headers";
import jwt, { JwtPayload, Secret, TokenExpiredError } from "jsonwebtoken";
import { ENUM_USER_ROLE } from "@/app/types/Iuser";

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

export async function removeCookie(name: string) {
  cookies().delete(name);
}
export async function decodeUserCookie(name: string) {
  const cookieStore = cookies();
  const user = cookieStore.get(name);

  if (user && user.value) {
    const payload = await verifyToken(
      user.value,
      process.env.JWT_SECRET as Secret
    );

    if (payload) {
      const email = payload.userEmail as string;
      const role = payload.role as ENUM_USER_ROLE;
      const _id = payload._id as string;

      return {
        email,
        role,
        _id,
      };
    } else {
      return null;
    }
  } else {
    return null;
  }
}
export async function setCookie(name: string, value: string) {
  cookies().set({
    name: name,
    value: value,
    httpOnly: true,
    secure: true,
  });
}

//
export async function setCookieAndVerify(
  name: string,
  value: string
): Promise<JwtPayload | null> {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
  }

  // Set the cookie
  cookies().set({
    name: name,
    value: value,
    httpOnly: true,
  });

  try {
    // Verify the JWT and return the decoded payload
    return jwt.verify(value, secret) as JwtPayload;
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      console.error("Token expired:", error.message);
    } else {
      console.error("JWT verification error:", error);
    }
    return null;
  }
}
