// Utility function to get the correct asset path based on environment
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Always use the base path for consistency between dev and prod
  return `/website/${cleanPath}`;
};
