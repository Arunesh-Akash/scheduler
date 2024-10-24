import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtected = createRouteMatcher([
    "/dashboard(.*)",
    "/events(.*)",
    "/meetings(.*)",
    "/availability(.*)",
])

export default clerkMiddleware((auth,req)=>{
    if(!auth().userId && isProtected(req)){
        return auth().redirectToSignIn();
    }
});

export const config = {
    matcher: [

        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

        '/(api|trpc)(.*)',
    ],
};