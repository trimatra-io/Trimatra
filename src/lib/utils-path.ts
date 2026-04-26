// lib/utils-path.ts
export function getAssetPath(path: string | undefined) {
  if (!path) return "";

  // 1. Remove the "./" from the start if it exists
  let cleanPath = path.startsWith("./") ? path.slice(1) : path;

  // 2. Ensure it starts with a /
  if (!cleanPath.startsWith("/")) {
    cleanPath = "/" + cleanPath;
  }

  // 3. Add GitHub repository name in production
  // Replace 'your-repo-name' with your actual GitHub repo name
  const repoName = "";

  return repoName + cleanPath;
}
