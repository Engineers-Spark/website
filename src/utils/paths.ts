// Utility function to get the correct asset path based on environment
export const getAssetPath = (path: string): string => {
  // Check if we're in development or production
  const isDev = import.meta.env.DEV;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // In development, use root paths. In production, use /website/ prefix
  return isDev ? `/${cleanPath}` : `/website/${cleanPath}`;
};
