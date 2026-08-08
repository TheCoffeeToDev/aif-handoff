/**
 * Build headers for the API's trusted internal broadcast endpoints.
 *
 * Outside tests the API requires INTERNAL_BROADCAST_TOKEN. Callers resolve the
 * token through their own getEnv() binding and pass it here so agent and MCP
 * cannot drift into separate authentication implementations.
 */
export function internalBroadcastHeaders(token: string | undefined | null): Record<string, string> {
  const trimmedToken = token?.trim() ?? "";
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (trimmedToken) {
    headers.Authorization = `Bearer ${trimmedToken}`;
    headers["X-Internal-Broadcast-Token"] = trimmedToken;
  }

  return headers;
}
