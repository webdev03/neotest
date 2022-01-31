// thank u copilot

class Neotest {
  test(fn: () => void) {
    try {
      fn();
    } catch(e) {
      console.log(`${e.name}: ${e.message}`);
    }
  }
}

export default Neotest;
