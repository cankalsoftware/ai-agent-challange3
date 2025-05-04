import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

// Define multiple protected routes
const protectedRoutes = [
    '/video(/.*)?',  // All routes under /video
    '/dashboard(/.*)?',  // All routes under /dashboard
    '/profile',  // Specific profile page
    '/settings(/.*)?',  // All routes under /settings
    '/create-content(/.*)?' // All routes under speach to text  / create content page
];

// Create route matchers for all protected routes
const isProtectedRoute = (req: NextRequest) => {
    return protectedRoutes.some(route => createRouteMatcher(route)(req));
};

export default clerkMiddleware(async(auth, req) => {
    const{userId, redirectToSignIn} = await auth();
    if(!userId && isProtectedRoute(req)){
        // Redirect to sign in page
        return redirectToSignIn();
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};