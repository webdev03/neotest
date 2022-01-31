import {Tester} from "../dist/index.js";

const r = new Tester();

r.test('eeee',() => {
  console.log("test");
  throw new Error("oops");
}); 
