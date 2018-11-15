import assert from "power-assert";
import version from "../index";
import _pkg from "../../../package";

describe("cuke ui version test", () => {
  it("should return latest version", () => {
    assert(version === _pkg.version);
  });
});
