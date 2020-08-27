interface ITest {
  number: number;
  operation(num: number): number;
}

class Test implements ITest {
  number: number;

  constructor(number: number) {
    this.number = number;
  }

  operation(operation_number: number): number {
    return operation_number * this.number;
  }
}

const test = new Test(5);

const result = test.operation(10);

console.log(result);

// This code was not made to make sense.
