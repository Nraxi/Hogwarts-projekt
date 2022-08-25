const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const routerApply =       require("./Api/Apply-Api");
const routerCourses =     require("./Api/Courses-Api");
const routerEducation =   require("./Api/Education-Api");
const routerLogin =       require("./Api/Login-Api");
const routerStaff =       require("./Api/Staff-Api");

const app = express();
const port = 5000;
const handleStaticFiles = express.static(path.join(__dirname, "..", "group-project-client", "build"));

app.use(bodyParser.json());
app.use(handleStaticFiles);

app.use(routerApply);
app.use(routerCourses);
app.use(routerEducation);
app.use(routerLogin);
app.use(routerStaff);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
