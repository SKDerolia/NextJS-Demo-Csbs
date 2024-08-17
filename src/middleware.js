import { NextResponse } from "next/server";

export function middleware(request) {
    // if (request.nextUrl.pathname != "/login") {
    return NextResponse.redirect(new URL("/login", request.url))
    // }
}

export const config = {
    matcher: ["/about/:path+", "/studentlist/:path*"]
    // here "/about/:path+" '+' it will match one and more path and it will not redirect on about
    // but it will redirect to /about/aboutStudent or /about/aboutTeacher path
}
