export const __PROD__ = process.env.NODE_ENV.toLowerCase() === `production`;
export const __IS_SERVER__ = typeof window === `undefined`;
