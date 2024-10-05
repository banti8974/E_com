const mongoose =require('mongoose')

const connectDb =()=>{
  mongoose
  .connect(
    "mongodb+srv://Backend:12345@learn.ajh4xvk.mongodb.net/",
    {
      dbName: "E-comm",
    }
  )
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));
}

module.exports=connectDb;