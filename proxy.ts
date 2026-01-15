// File: middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface GeoNextRequest extends NextRequest {
  geo?: {
    country?: string;
    city?: string;
    region?: string;
    latitude?: string;
    longitude?: string;
  };
}

// Middleware function
export function proxy(request: GeoNextRequest): NextResponse | void {
  // const host: string = request.headers.get("host") || "";
  // const country: string | undefined = request.geo?.country;

  // // --- Pakistan (PK) Logic ---
  // if (country === "PK") {
  //   if (host.includes("strugbits.co") || host.includes("strugbits.com")) {
  //     return NextResponse.redirect("https://careers.strugbits.com");
  //   }
  // }
  // // --- International Logic ---
  // else {
  //   if (host.includes("strugbits.com")) {
  //     return NextResponse.redirect("https://strugbits.co");
  //   }
  // }

  // // Default: continue to next route
  // return NextResponse.next();
}

// Middleware configuration
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
