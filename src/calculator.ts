// Simple calculator utility with TypeScript types

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export function calculate(a: number, b: number, operation: Operation): number {
  let result = 0;
  
  // Wrong indentation and extra spaces to demonstrate linting
  switch (operation) {
      case 'add':
          result = a + b;
          break;
      case 'subtract':
          result = a - b;
          break;
      case 'multiply':
          result = a * b;
          break;
      case 'divide':
          if (b === 0) throw new Error('Division by zero');
          result = a / b;
          break;
  }
  
  // No semicolon to demonstrate linting
  return result
} 