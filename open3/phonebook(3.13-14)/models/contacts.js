const mongoose= require("mongoose")


const url = process.env.MONGODB_URL
console.log('connecting to', url)
mongoose.connect(url,{
  // useNewUrlParser:true,
  // useCreateIndex:true,
  // useUnifiedTopology:true,
  // useFindAndModify:false
}).then(()=>{
  console.log("connection successfull")}).catch((error)=>console.log("Error please check code",error.message))

const noteSchema= new mongoose.Schema({
  number :String,
  name: String,
})
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
module.exports = mongoose.model("Contact",noteSchema)






