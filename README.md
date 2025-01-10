# Express.js: Handling Undefined Properties in Request Body

This repository demonstrates a common error in Express.js applications: accessing undefined properties in the request body. The `bug.js` file shows the problematic code, which crashes the server if the request body is missing an expected property.  The `bugSolution.js` provides a corrected version with proper error handling and input validation.

## Problem
The server crashes because it attempts to access `data.someProperty` without checking if `data` or `data.someProperty` exist. If the client sends a request without this property, a runtime error occurs.

## Solution
The solution adds input validation to check for the existence of `data` and `data.someProperty` before accessing them.  It also handles cases where the request body is missing or empty, sending a more informative error response to the client.