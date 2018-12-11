import assert from "power-assert";
import { debounce } from "..";

describe("utils tests", () => {
  it("should return a debounce function", () => {
    assert(debounce(() => {}, 500) instanceof Function);
  });
  it("should trigger once sum calculate", () => {
    let num = 0;
    const fn = debounce(() => {
      num++;
    }, 500);
    fn();
    fn();
    assert(num === 0);
    setTimeout(() => {
      assert(num === 1);
    }, 500);
  });
});
