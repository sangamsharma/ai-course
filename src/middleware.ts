import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

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

const COMPANY_ROUTES = ["/company"];
const ADMIN_ROUTES = ["/admin"];

function isPublic(pathname: string): boolean {
  return PUBLIC_ROUTES.some((r) => pathname === r || pathname.startsWith(r + "/"));
}

export default auth((req) => {
  const { nextUrl } = req;
  const session = req.auth;

  // Allow public routes and static assets
  if (isPublic(nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Company routes: must be authenticated
  if (COMPANY_ROUTES.some((r) => nextUrl.pathname.startsWith(r))) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    return NextResponse.next();
  }

  // Admin routes: must be authenticated
  if (ADMIN_ROUTES.some((r) => nextUrl.pathname.startsWith(r))) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
