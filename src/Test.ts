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
    try {
      fn();
      this.tests.push({ success: true, name: name });
    } catch(e) {
      console.log(`\x1b[41m${e.name}\x1b[0m: ${e.message}`);
      this.tests.push({ success: false, name: name, errorName: e.name, errorMessage: e.message });
    }
  }
}

export default Neotest;
