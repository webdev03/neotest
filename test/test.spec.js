import {Tester} from "../dist/index.js";

const r = new Tester();

r.test('success',() => {
  r.expectToBe(1, 1);
  r.expectTypeOf(1, "number");
}); 

r.test('fail',() => {
  r.expectTypeOf(1, "string");
}); 
