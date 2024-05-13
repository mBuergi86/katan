import { inArray } from "./practice004";

describe("inArray", () => {
  it("should return an array containing elements present in both arrays", () => {
    const a2: string[] = ["lively", "alive", "harp", "sharp", "armstrong"];
    const a1: string[] = ["arp", "live", "strong"];
    expect(inArray(a1, a2)).toEqual(["arp", "live", "strong"]);
  });
  it("should return an empty array if anywhere in the elements are present in both arrays", () => {
    const a2: string[] = ["lively", "alive", "harp", "sharp", "armstrong"];
    const a1: string[] = ["arp", "live", "strong", "nope"];
    expect(inArray(a1, a2)).not.toEqual([]);
  });
  it("should return an empty array if one of the arrays is empty", () => {
    const a2: string[] = ["lively", "alive", "harp", "sharp", "armstrong"];
    const a1: string[] = [];
    expect(inArray(a1, a2)).toEqual([]);
  });
  it("should return an empty array if both arrays are empty", () => {
    const a2: string[] = [];
    const a1: string[] = [];
    expect(inArray(a1, a2)).toEqual([]);
  });
});
