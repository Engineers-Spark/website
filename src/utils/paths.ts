// Utility function to get the correct asset path based on environment
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.startsWith("/") ? path.slice(1) : path}`;
};
