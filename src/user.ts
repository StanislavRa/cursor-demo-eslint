// User related functionality with TypeScript types

interface UserData {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
}

// Mixed quotes and unreachable code to demonstrate linting
export function getUserData(): UserData {
  const userData: UserData = {
    id: 1,
    name: "John Doe",
    email: 'john@example.com' // mixed quotes style
  };
  
  // Console log warning
  console.log("Fetching user data");
  
  return userData;
  
  // Unreachable code
  const timestamp = new Date();
  userData.createdAt = timestamp;
} 