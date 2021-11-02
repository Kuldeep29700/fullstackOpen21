const http = require("http")
const morgan = require("morgan")
const express = require("express")
const { response } = require("express")
const app= express()
app.use(express.json())
morgan.token('body',(req)=> JSON.stringify(req.body))
app.use(morgan(':method :url :status  :res[content-length] - :response-time ms :body ')
)

let persons=[
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
const total= persons.length

console.log(typeof(total))
const date= new Date().toString()


app.get("/api/persons",(request,response)=>{
    response.json(persons)
})
app.get("/api/info",(request,response)=>{
    response.writeHead(200,{"Content-Type":"text/plain"})
    response.end(`Phonebook has info for ${total} people 
${date}`)
    
})
app.get("/api/persons/:id",(request,response)=>{
    const id = Number(request.params.id)
    console.log(id)
    const person= persons.find(person=> {
       
        return person.id===id})
       
    if(person){
         response.json(person)
    }else{
        response.status(404).end()
    }
})
app.delete("/api/persons/:id",(request,response)=>{
    const id= Number(request.params.id)
    persons= persons.filter(person=>person.id!==id)
    response.status(204).end()
})

app.post("/api/persons",(request,response)=>{
  const maxId= persons.length>0?Math.floor(Math.random()*100):0
  const body = request.body;
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
  else if(persons.find(person=>person.name===body.name)){
    return response.status(400).json({
      error:"name must be unique"
    })
  }
  const person={
    id:maxId,
    name:body.name,
    number:body.number,
  }
  persons=persons.concat(person)
  response.json(person)
 
})

const PORT=3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)