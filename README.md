# TypeScript Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

This repository demonstrates a common TypeScript type error that occurs when passing an array of strings to a function expecting a single string as an argument.

## Bug

The `greeter` function expects a single string as input. However, the code attempts to pass an array of strings (`user`) to the function, resulting in a type error.

## Solution

The solution involves modifying the `greeter` function to accept an array of strings or iterating over the array and calling the function for each element.