// Main application entry point
import { calculate } from './calculator';
import { getUserData } from './user';

// Incorrect indentation (should be 2 spaces)
function init(): boolean {
    const result = calculate(10, 5, 'add');
    console.log("The result is: " + result); // wrong quotes and console.log warning
    
    // Unused variable
    const user = getUserData();
    
    // Missing semicolon
    return true
}

init(); 