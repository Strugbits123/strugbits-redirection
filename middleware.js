import { NextResponse } from "next/server";

export function middleware(request) {
    const host = request.headers.get("host") || "";
    const country = request.geo?.country;

    // Pakistan (PK) Logic
    if (country === "PK") {
        if (host.includes("strugbits.co") || host.includes("strugbits.com")) {
            return NextResponse.redirect("https://careers.strugbits.com");
        }
    }
    // International Logic
    else {
        if (host.includes("strugbits.com")) {
            return NextResponse.redirect("https://strugbits.co");
        }
    }
}

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
