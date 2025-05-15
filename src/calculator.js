// Simple calculator utility

// Wrong quotes and missing semicolon
export function calculate(a, b, operation) {
  let result = 0;
  
  // Wrong indentation and extra spaces
  switch (operation) {
      case "add":
          result = a + b;
          break;
      case "subtract":
          result = a - b;
          break;
      case "multiply":
          result = a * b;
          break;
      case "divide":
          result = a / b;
          break;
  }
  
  // No semicolon
  return result
} 