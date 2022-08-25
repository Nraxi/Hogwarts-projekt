const express = require("express");
const routerApply = express.Router();

let Applys = [

  {
    id: 132456654,
    firstName: "Godstime",
    lastName: "Nwankwo",
    email: "g-nwa@jensens.edu",
    education: "Potion Mastery",
  },
  {
    id: 175689791,
    firstName: "John",
    lastName: "Nordström",
    email: "john_88_nordstrom@gmail.com",
    education: "Potion Mastery",
  },
  {
    id: 123456780,
    firstName: "Maria",
    lastName: "Nilsson",
    email: "nilsson88@hotmail.com",
    education: "Forsight",
  },
];

routerApply.get("/Apply", (request, response) => {
  console.log({
    method: request.method,
  });

  response.json({
    status: "success",
    method: request.method,
    data: Applys,
  });
});

routerApply.post("/Apply", (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
  });

  const Apply = {
    id: request.body.id,
    education: request.body.education,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
  };

  Applys.push(Apply);

  response.json({
    status: "success",
    method: request.method,
    data: Applys,
  });
});

routerApply.delete("/Apply/:applyId", (request, response) => {
  const applyId = request.params.applyId;
  const applyIndex = Applys.findIndex((apply) => apply.id == applyId);
  Applys.splice(applyIndex, 1);

  response.json({
    status: "success",
    method: request.method,
    data: applyId,
  });
});

module.exports = routerApply;
