// User related functionality

// Mixed quotes and unreachable code
export function getUserData() {
  const userData = {
    id: 1,
    name: "John Doe",
    email: 'john@example.com' // mixed quotes style
  };
  
  // Console log warning
  console.log("Fetching user data");
  
  return userData;
  
  // Unreachable code
  const timestamp = Date.now();
} 