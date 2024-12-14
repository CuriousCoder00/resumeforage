/**
 * An array of routes that are accessible to public
 * These routes do not need authentication/login
 */
export const publicRoutes = ["/", "/explore", "/explore/gaming", "/explore/entertainment", "/explore/education", "/explore/music", "/explore/science-tech"];

/**
 * An array of routes that are used for authentication
 * These routes do not need authentication/login
 * These routes will redirect users to /feed route
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/verify-email",
  "/auth/reset-pass",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API authentication purposes
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logged in
 */
export const DEFAULT_LOGIN_REDIRECT = "/activities";