// Your third exercise is all about design patterns.
// Create a calculator object/constructor/class

// For this exercise... YOU write the tests.


// Your calculator should expose the following methods: 
// * `sum`
// * `multiply`
// * `getValueOfPI`



// ## Part 1: Module

// Implement the above using a JS object module.

const moduleCalc = {
    sum: (numbers = []) => numbers.reduce((acc, curr) => acc + curr, 0),

    multiply: numbers =>
        numbers ? numbers.reduce((acc, curr) => acc * curr) : 0,

    getValueOfPI: () => Math.PI
};

describe('Module', () => {
    describe('Sum', () => {
      test('Returns 0 when no numbers given', () => {
        const result = moduleCalc.sum();
        expect(result).toEqual(0);
      });
  
      test('Adds two numbers together', () => {
        const result = moduleCalc.sum([1, 2]);
        expect(result).toEqual(3);
      });
  
      test('Adds three numbers together', () => {
        const result = moduleCalc.sum([1, 2, 3]);
        expect(result).toEqual(6);
      });
    });
  
    describe('Multiply', () => {
      test('Returns 0 when no numbers given', () => {
        const result = moduleCalc.multiply();
        expect(result).toEqual(0);
      });
  
      test('Adds two numbers together', () => {
        const result = moduleCalc.multiply([1, 2]);
        expect(result).toEqual(2);
      });
  
      test('Adds three numbers together', () => {
        const result = moduleCalc.multiply([1, 2, 3]);
        expect(result).toEqual(6);
      });
    });
  
    describe('PI', () => {
      test('Returns value of PI', () => {
        const result = moduleCalc.getValueOfPI();
        expect(result).toEqual(Math.PI);
      });
    });
  });

// ## Part 2: Constructor

// Implement the above using a Constructor

function ConstructorCalc() {
    (this.sum = (numbers = []) => numbers.reduce((acc, curr) => acc + curr, 0)),
      (this.multiply = numbers =>
        numbers ? numbers.reduce((acc, curr) => acc * curr) : 0),
      (this.getValueOfPI = () => Math.PI);
  }

const constructorCalculator = new ConstructorCalc();

describe('Constructor', () => {
    describe('Sum', () => {
      test('Returns 0 when no numbers given', () => {
        const result = constructorCalculator.sum();
        expect(result).toEqual(0);
      });
  
      test('Adds two numbers together', () => {
        const result = constructorCalculator.sum([1, 2]);
        expect(result).toEqual(3);
      });
  
      test('Adds three numbers together', () => {
        const result = constructorCalculator.sum([1, 2, 3]);
        expect(result).toEqual(6);
      });
    });
  
    describe('Multiply', () => {
      test('Returns 0 when no numbers given', () => {
        const result = constructorCalculator.multiply();
        expect(result).toEqual(0);
      });
  
      test('Adds two numbers together', () => {
        const result = constructorCalculator.multiply([1, 2]);
        expect(result).toEqual(2);
      });
  
      test('Adds three numbers together', () => {
        const result = constructorCalculator.multiply([1, 2, 3]);
        expect(result).toEqual(6);
      });
    });
  
    describe('PI', () => {
      test('Returns value of PI', () => {
        const result = constructorCalculator.getValueOfPI();
        expect(result).toEqual(Math.PI);
      });
    });
  });


// ## Part 3: Class

// Implement the above using a Class

class ClassCalc {
    static sum(numbers = []) {
      return numbers.reduce((acc, curr) => acc + curr, 0);
    }
  
    static multiply(numbers) {
      return numbers ? numbers.reduce((acc, curr) => acc * curr) : 0;
    }
  
    static getValueOfPI() {
      return Math.PI;
    }
}
  
describe('Class', () => {
    describe('Sum', () => {
        test('Returns 0 when no numbers given', () => {
        const result = ClassCalc.sum();
        expect(result).toEqual(0);
        });

        test('Adds two numbers together', () => {
        const result = ClassCalc.sum([1, 2]);
        expect(result).toEqual(3);
        });

        test('Adds three numbers together', () => {
        const result = ClassCalc.sum([1, 2, 3]);
        expect(result).toEqual(6);
        });
    });

    describe('Multiply', () => {
        test('Returns 0 when no numbers given', () => {
        const result = ClassCalc.multiply();
        expect(result).toEqual(0);
        });

        test('Adds two numbers together', () => {
        const result = ClassCalc.multiply([1, 2]);
        expect(result).toEqual(2);
        });

        test('Adds three numbers together', () => {
        const result = ClassCalc.multiply([1, 2, 3]);
        expect(result).toEqual(6);
        });
    });

    describe('PI', () => {
        test('Returns value of PI', () => {
        const result = ClassCalc.getValueOfPI();
        expect(result).toEqual(Math.PI);
        });
    });
});
  

// ## Part 4: Prototypes

// Modify your above example by using a Prototype


const PrototypeCalc = function() {};
PrototypeCalc.prototype = {
  sum: function(numbers = []) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  },

  multiply: function(numbers) {
    return numbers ? numbers.reduce((acc, curr) => acc * curr) : 0;
  },

  getValueOfPI: function() {
    return Math.PI;
  }
};
const prototypeCalculator = new PrototypeCalc();

describe('Prototype', () => {
    describe('Sum', () => {
      test('Returns 0 when no numbers given', () => {
        const result = prototypeCalculator.sum();
        expect(result).toEqual(0);
      });
  
      test('Adds two numbers together', () => {
        const result = prototypeCalculator.sum([1, 2]);
        expect(result).toEqual(3);
      });
  
      test('Adds three numbers together', () => {
        const result = prototypeCalculator.sum([1, 2, 3]);
        expect(result).toEqual(6);
      });
    });
  
    describe('Multiply', () => {
      test('Returns 0 when no numbers given', () => {
        const result = prototypeCalculator.multiply();
        expect(result).toEqual(0);
      });
  
      test('Adds two numbers together', () => {
        const result = prototypeCalculator.multiply([1, 2]);
        expect(result).toEqual(2);
      });
  
      test('Adds three numbers together', () => {
        const result = prototypeCalculator.multiply([1, 2, 3]);
        expect(result).toEqual(6);
      });
    });
  
    describe('PI', () => {
      test('Returns value of PI', () => {
        const result = prototypeCalculator.getValueOfPI();
        expect(result).toEqual(Math.PI);
      });
    });
});