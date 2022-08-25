const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

let educations = [
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

router.get('/education', (request, response)=>{
    console.log({
      method: request.method,

    });
    response.json({
      status: 'success',
      method: request.method,
      data: educations,
    })
})

router.post('/education',(request,response)=>{            
  console.log({
      method: request.method,
      body: request.body,


  })

})


router.delete('/Education/:educationsId', (request,response)=>{
  const educationsId = request.params.educationsId

  const  educationsIndex = educations.findIndex((educations)=>educations.id == educationsId)
  educations.splice(educationsIndex, 1)
  
  response.json({             
    status: 'success',
    method: request.method,
    data: educationsId,
  });
})

module.exports = router


