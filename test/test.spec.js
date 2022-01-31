import { AssertionError } from "assert";
import {Tester} from "../dist/index.js";

const r = new Tester();

r.test('eeee',() => {
  throw new AssertionError({})
  console.log("test, ever");
  throw new Error("oops");
}); 
