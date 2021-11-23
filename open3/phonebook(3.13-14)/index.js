const express= require("express")
const app= express()
require('dotenv').config()
const Person  = require('./models/contacts')
app.use(express.json())
const cors=require("cors")
app.use(express.static('build'))
app.use(cors())
let contact =[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
app.get("/api/contact",(request,response)=>{
    Person.find({}).then(contact=>{
      response.json(contact)
    })
})
app.get("/api/contact/:id",(request,response)=>{
  Person.findById(request.params.id).then(num=>{
    response.json(num)
  })
})
app.delete("/api/contact/:id",(request,response)=>{
  const id=Number(request.params.id)
  contact=contact.filter(persons=>persons.id !==id)
  response.status(204).end()
})

app.post("/api/contact",(request,response)=>{
  const body=request.body
  if(!body.name){
    return response.status(400).json({
      error:"name is missing"
    })
  }
  else if(!body.number){
    return response.status(400).json({
      error:"number is missing"
    })
  }
  else if(contact.find(person=>person.name.toLowerCase()=== body.name.toLowerCase())){
    return response.status(400).json({error:"name must be unique"})
  }

  const person = new Person({
    name: body.name,
    number:body.number,
    
  })

  person.save().then(savedContact=>{
    response.json(savedContact)
  })
})
const PORT =process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
