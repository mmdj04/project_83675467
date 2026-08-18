// Client-side demo sign-out helper.
// Clears the demo session cookie and returns to the landing page.

export function signOut() {
  // biome-ignore lint/suspicious/noDocumentCookie: This project still uses document.cookie for broad browser support.
  document.cookie = "demo-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  window.location.href = "/";
}
