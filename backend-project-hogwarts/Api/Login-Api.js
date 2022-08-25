const express = require("express");
const routerLogin = express.Router();

const credentials = { secretUser: "user", secretPassword: "password" };

let authorized = true;

let loginUser = "";
let loginPassword = "";

routerLogin.post("/Login", (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
  });

  loginUser = request.body.user;
  loginPassword = request.body.passWord;

  if (
    credentials.secretUser === loginUser &&
    credentials.secretPassword === loginPassword
  ) {
    response.json({
      status: "success",
      method: request.method,
      data: authorized,
    });
  } else {
    response.json({
      status: "failed",
      method: request.method,
      data: false,
    });
  }
});

module.exports = routerLogin;
