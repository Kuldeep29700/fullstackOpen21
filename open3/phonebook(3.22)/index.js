const express= require('express')
const app= express()
require('dotenv').config()
const Person  = require('./models/contacts')
app.use(express.json())
const cors=require('cors')
app.use(express.static('build'))
app.use(cors())
app.get('/api/contact',(request,response) => {
  Person.find({}).then(contact => {
    response.json(contact)
  })
})
app.get('/info',(request,response,next) => {
  Person.find({}).then(result => {
    const personNumber=result.length
    const date= new Date()
    response.end(`<p>Phonebook has info for ${personNumber} people</p><p>${date}<p/>`)
  }).catch((error) => next(error))
})
app.get('/api/contact/:id',(request,response,next) => {
  Person.findById(request.params.id).then(num => {
    if(num){ response.json(num)}
    else{
      response.status(404).end()
    }

  }).catch((error) => {
    next(error)
  })
})
app.delete('/api/contact/:id',(request,response,next) => {
  Person.findByIdAndRemove(request.params.id).
    then(() => {
      response.status(204).end()
    }).catch(error => next(error))
})

app.post('/api/contact',(request,response,next) => {
  const body=request.body
  if(!body.name){
    return response.status(400).json({
      error:'name is missing'
    })
  }
  else if(!body.number){
    return response.status(400).json({
      error:'number is missing'
    })
  }
  // else if(contact.find(person=>person.name.toLowerCase()=== body.name.toLowerCase())){
  //   return response.status(400).json({error:"name must be unique"})
  // }

  const person = new Person({
    name: body.name,
    number:body.number,

  })

  person.save().then(savedContact => {
    return savedContact.toJSON()
  }).then(savedAndFormattedContact => {
    response.json(savedAndFormattedContact)
  }).catch(error => next(error))
})
app.put('/api/contact/:id',(request,response,next) => {
  const id= request.params.id
  const body=request.body
  const contact={
    number:body.number,
  }
  Person.findByIdAndUpdate(id,contact,{ new:true,runValidators:true })
    .then(result => {
      if(!result){
        return response.status(404).end()
      }
      response.json(result)
    }).catch(error => next(error))
})




const errorHandler=(error,request,response,next) => {
  console.error(error.message)
  if(error.name==='CastError'){
    return response.status(400).send({ error:'melformatted id' })

  }
  else if(error.name==='ValidationError'){
    return response.status(400).send({ error:error.message })
  }
  next(error)
}
app.use(errorHandler)
const PORT =process.env.PORT||3000
app.listen(PORT,() => {
  console.log(`server is running on port ${PORT}`)
})




