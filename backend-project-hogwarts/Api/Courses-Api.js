const express = require("express");
const routes = express.Router();
const bodyParser = require('body-parser')

let courses = [
  // Pre added data
  {
    courseId: 9876543,
    courseName: "Application of Dark Arts",
    teacher: "Rebeus Hagrig",
    courseDuration: "12 weeks",
    courseDescription: `"The Dark Arts are many, varied, ever-changing, and eternal. Fighting them is like fighting a many-headed monster, which, each time a neck is severed, sprouts a head even fiercer and cleverer than before. You are fighting that which is unfixed, mutating, indestructible."
    — Severus Snape's description of the Dark Arts`
  },
  {
    courseId: 1356789,
    courseName: "Defence Against the Dark Arts",
    teacher: "Minerva Mcgonagall",
    courseDuration: "12 weeks",
    courseDescription: `Defend yourself. Survive. Forget your last course about learning the dark arts. Unlearn it. That is how we defeat this problem. There was a lot more to magic, as Harry quickly found out, than waving your wand and saying a few funny words."
    — The challenging nature of academic classes at Hogwarts`
  },
  {
    courseId: 126264,
    courseName: "History of Magic",
    teacher: "Minerva Mcgonagall",
    courseDuration: "8 weeks",
    courseDescription: `Learning the magics history is the key to Great exhibition, a once-in-a-lifetime collaboration between Bloomsbury, J.K. Rowling and the brilliant curators of the British Library. It promises to take readers on a fascinating journey through the subjects studied at Hogwarts School of Witchcraft and Wizardry...`
  },
  {
    courseId: 12566,
    courseName: "Transfiguration",
    teacher: "Draco Lucius Malfoy",
    courseDuration: "12 weeks",
    courseDescription: `Learn to throw frogs! Explode frogs! Multiply frogs. "I do hope they start right away, there's so much to learn, I'm particularly interested in Transfiguration, you know, turning something into something else, of course, it's supposed to be very difficult —"
    — Description of Transfiguration`
  },
  {
    courseId: 75322,
    courseName: "Charms",
    teacher: "Draco Lucius Malfoy",
    courseDuration: "8 weeks",
    courseDescription: `"Charms differ from Transfiguring Spells in the following manner: a charm adds certain properties to an object or creature, whereas a transfiguring spell will change it into something utterly different."
    — The Standard Book of Spells, Grade 1`
  },
  {
    courseId: 1266743,
    courseName: "Poison",
    teacher: "Alexander Winqvist",
    courseDuration: "12 weeks",
    courseDescription: `Poison is an affect that can cause good and harm. Learning poison and its usage is essential in becoming a wizard. "Ron had dropped his glass; he half-rose from his chair and then crumpled, his extremities jerking uncontrollably. Foam was dribbling from his mouth and his eyes were bulging from their sockets."
    — Ron Weasley after having consumed poisoned oak matured mead`
  }
];

routes.get("/Courses", (req, res) => {
  console.log({
    method: req.method,
    data: courses,
  });
  res.json({
    status: "success",
    method: req.method,
    data: courses,
  });
});

routes.post("/Courses", (req, res) => {
  console.log({
    method: req.method,
    body: req.body,
  });

  const course = {
    courseId: req.body.id,
    courseName: req.body.courseName,
    teacher: req.body.teacher,
    courseDuration: req.body.courseDuration,
    courseDescription: req.body.courseDescription,
  };

  courses.push(course);

  res.json({
    status: "successfully created new course",
    method: req.method,
    data: courses,
  });
});

routes.put("/Courses/:courseId", (req, res) => {
  const courseId = Number(req.params.courseId);
  const courseName = req.body.courseName;
  const teacher = req.body.teacher;
  const courseDuration = req.body.courseDuration;
  const courseDescription = req.body.courseDescription;

  const newCourse = {
    courseId: courseId,
    courseName: courseName,
    teacher: teacher,
    courseDuration: courseDuration,
    courseDescription: courseDescription,
  };

  const courseIndex = courses.findIndex(
    (course) => course.courseId == courseId
  );
  courses[courseIndex] = newCourse;

  console.log({
    method: req.method,
    body: req.body,
    data: newCourse,
  });

  res.json({
    status: "successfully updated course",
    method: req.method,
    data: newCourse,
  });
});

routes.delete("/Courses/:courseId", (req, res) => {
  const courseId = req.params.courseId;
  const courseIndex = courses.findIndex(
    (course) => course.courseId == courseId
  );
  if (courseIndex > -1) {
    courses.splice(courseIndex, 1);
  }
  console.log({
    method: req.method,
    body: req.body,
  });
  res.json({
    status: "deleted course",
    method: req.method,
    data: courseId,
  });
});

module.exports = routes;
