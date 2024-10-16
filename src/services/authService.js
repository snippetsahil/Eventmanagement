// authService.js

/**
 * Mock login function.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} A promise that resolves to a user object on successful login.
 */
export const login = (email, password) => {
    // Mock user data
    const mockUser = {
      email: 'sahil@bhai.com',
      password: 'sahil123', // In a real app, use hashed passwords
    };
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === mockUser.email && password === mockUser.password) {
          localStorage.setItem('user', JSON.stringify({ email: mockUser.email })); // Store user data
          resolve({ success: true, user: { email: mockUser.email } }); // Successful login
        } else {
          reject({ success: false, message: 'Invalid credentials' }); // Failed login
        }
      }, 500); // Simulated delay for authentication
    });
  };
  
  /**
   * Mock function to check if the user is authenticated.
   * @returns {boolean} True if the user is authenticated, false otherwise.
   */
  export const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('user')); // Example check
    return !!user; // Returns true if a user object exists
  };
  
  /**
   * Mock logout function.
   */
  export const logout = () => {
    localStorage.removeItem('user'); // Example logout action
  };
  