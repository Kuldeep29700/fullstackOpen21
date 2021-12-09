const mongoose= require("mongoose")
const uniqueValidator=require("mongoose-unique-validator")

const url = process.env.MONGODB_URI
console.log('connecting to', url)
mongoose.connect(url,{
  useNewUrlParser:true,
  // useCreateIndex:true,
  useUnifiedTopology:true,
  // useFindAndModify:false
}).then(()=>{
  console.log("connection successfull")}).catch((error)=>console.log("Error please check code",error.message))

const noteSchema= new mongoose.Schema({
  number :{type:String,
  minlength:8,
  unique: true},
  name: {type:String,
  require:true,
  unique: true,
  minlength:3}
})
noteSchema.plugin(uniqueValidator)
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  module.exports= mongoose.model("Person",noteSchema);






