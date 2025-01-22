# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js where a server fails to start because the specified port is already in use.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a robust solution.

## Problem

Attempting to start a server on a port that's already occupied by another process results in an error, typically preventing your application from running correctly.  This can be tricky to debug, especially in production environments.

## Solution

The solution involves checking if the port is available before attempting to bind the server.  This ensures graceful handling of port conflicts and improved error management.