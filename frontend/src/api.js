// Shared API configuration for local development and Render deployment.
const configuredApiUrl = import.meta.env.VITE_API_URL;

export const API_BASE_URL = configuredApiUrl
  ? configuredApiUrl.trim().replace(/\/+$/, "")
  : (import.meta.env.DEV ? "http://localhost:8081" : "");

export function ensureApiConfigured() {
  if (!API_BASE_URL) {
    throw new Error("VITE_API_URL is not configured. Set it in the frontend deployment environment.");
  }
}
