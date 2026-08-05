import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_ROUTES = [
  "/",
  "/modules",
  "/scenarios",
  "/tools",
  "/prompts",
  "/glossary",
  "/for-business",
  "/pricing",
  "/contact",
  "/book",
  "/login",
  "/about",
  "/practice",
  "/playground",
  "/prompt-builder",
  "/bad-vs-good",
  "/tool-chooser",
  "/verification",
  "/capstone",
  "/onboarding",
  "/progress",
  "/api/auth",
  "/api/webhooks",
];

function isPublic(pathname: string): boolean {
  return PUBLIC_ROUTES.some((r) => pathname === r || pathname.startsWith(r + "/"));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes and static assets
  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  // Protected routes: check for session cookie
  const sessionCookie =
    request.cookies.get("__Secure-authjs.session-token") ??
    request.cookies.get("authjs.session-token");

  if (!sessionCookie) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
