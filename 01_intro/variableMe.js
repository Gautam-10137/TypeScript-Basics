"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String
var greetings = "Hello Gautam";
// greetings=6;     can't assign number to string
greetings.toUpperCase(); // will only work with string methods
console.log(greetings);
// number
var userId = 11212529.5;
userId.toString(); // methods of number
var count = 1; // auto detecting the type
// there are some conditions where we should define type
// boolean
var isLoggedIn = false;
isLoggedIn.valueOf(); // only boolean methods
