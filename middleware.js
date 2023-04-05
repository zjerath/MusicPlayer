import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }
  //if (!token && pathname !== `${req.baseUrl}/login`) {
    //var fullUrl = req.nextUrl.protocol + '//' + req.nextUrl.host + '/login'
    //return NextResponse.redirect(fullUrl);
  //}
}