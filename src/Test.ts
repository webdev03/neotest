// thank u copilot

class Neotest {
  tests: Array<{
    success: boolean,
    name: string,
    errorName?: string,
    errorMessage?: string
  }>;
  constructor() {
    this.tests = [];
  }
  test(name: string, fn: () => void) {
    console.log(`Running test: ${name}`);
    try {
      fn();
      this.tests.push({ success: true, name: name });
      console.log(`\x1b[42mPass\x1b[0m: ${name}`);
    } catch(e) {
      console.log(`\x1b[41m${e.name}\x1b[0m: ${e.message}`);
      process.exitCode = 1;
      this.tests.push({ success: false, name: name, errorName: e.name, errorMessage: e.message });
    }
  }

  // miscellaneous functions
  expectToBe(actual: any, expected: any) {
    if (actual !== expected) {
      throw new Error(`Expected ${actual} to be ${expected}`);
    }
  }

  expectTypeOf(input: any, type: string) {
    if (typeof input !== type) {
      throw new Error(`Expected ${input} to be of type ${type}`);
    }
  }
}

export default Neotest;
