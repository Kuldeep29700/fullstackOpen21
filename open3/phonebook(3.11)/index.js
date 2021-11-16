const express= require("express")
const app= express()
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
    response.json(contact)
})
app.get("/api/contact/:id",(request,response)=>{
  const id =Number(request.params.id)
  const person= contact.find(persons=>persons.id===id)
  if(person){
    response.json(person)
  }
  else{
    response.status(404).end()
  }
})
app.delete("/api/contact/:id",(request,response)=>{
  const id=Number(request.params.id)
  contact=contact.filter(persons=>persons.id !==id)
  response.status(204).end()
})
const generateId=()=>{
  const maxId=contact.length>0 ? Math.max(...contact.map(n=>n.id)):0
  return maxId+1

}
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

  const person ={
    name: body.name,
    number:body.number,
    id: generateId(),
  }

  contact=contact.concat(person)
  response.json(person)
})
const PORT =process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
