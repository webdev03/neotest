import {Tester} from "../dist/index.js";

const r = new Tester();

r.test('eeee',() => {
  console.log("test");
  r.expectToBe(1, 1);
  r.expectTypeOf(1, "number");
}); 
