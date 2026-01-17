// Utility function to get the correct asset path based on environment
export const getAssetPath = (path: string): string => {
  // For GitHub Pages deployment, always use /website/ prefix
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `/website/${cleanPath}`;
};
