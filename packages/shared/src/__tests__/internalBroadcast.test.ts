import { describe, expect, it } from "vitest";
import { internalBroadcastHeaders } from "../internalBroadcast.js";

describe("internalBroadcastHeaders", () => {
  it("sends the configured token in both accepted header forms", () => {
    expect(internalBroadcastHeaders("internal-token")).toEqual({
      "Content-Type": "application/json",
      Authorization: "Bearer internal-token",
      "X-Internal-Broadcast-Token": "internal-token",
    });
  });

  it("trims surrounding whitespace from the token", () => {
    expect(internalBroadcastHeaders("  padded  ")).toEqual({
      "Content-Type": "application/json",
      Authorization: "Bearer padded",
      "X-Internal-Broadcast-Token": "padded",
    });
  });

  it("does not invent authentication when no token is configured", () => {
    expect(internalBroadcastHeaders(undefined)).toEqual({
      "Content-Type": "application/json",
    });
  });
});
