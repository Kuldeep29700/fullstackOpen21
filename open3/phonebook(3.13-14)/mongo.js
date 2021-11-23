const mongoose= require("mongoose")

const password= process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
const url = `mongodb+srv://kuldeepkumawat:${password}@cluster0.troxs.mongodb.net/myFirstDatabase?retryWrites=true`

mongoose.connect(url,{
  // useNewUrlParser:true,
  // useCreateIndex:true,
  // useUnifiedTopology:true,
  // useFindAndModify:false
}).then(()=>{
  console.log("connection successfull")}).catch((error)=>console.log(`Error please check code`))

const noteSchema= new mongoose.Schema({
  number :String,
  name: String,
})
const Contact = mongoose.model("Contact",noteSchema)
const contact = new Contact({
  number:`${number}`,
  name: `${name}`,
  
})

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

if(process.argv.length <=3){
  Contact.find({}).then(result=>{
    result.forEach(note=>{console.log(`phonebook: ${note}`)})
    mongoose.connection.close()
  })
}else{
  contact.save().then(result=>{
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}
