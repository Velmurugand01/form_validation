const express=require('express')
app=express()
const mongoose=require('mongoose')
const Schema=require('./Schema')
mongoose.connect('mongodb+srv://VelmuruganD:Arulkumar01@cluster0.bjprrd6.mongodb.net/')

// Database Connection
.then(()=>{
    console.log('Database Connect Successfully');
})
.catch(()=>{
    console.log("Database Not Connected");
})

//middleware
app.use(express.urlencoded({extended:false}))


// App Post

// app.post('/Signup',async(req,res) =>{
//     const data=new Schema({
//         ...req.body
//     })

//   const{emailorPhone}=req.body
//   const verify=await Schema.findOne({emailorPhone})
//   if(verify){
//     return res.json("You Have Aleady Account")
//   }

//   await data.save()
//   .then(()=>{
//    console.log("data Saved Successfully");
//    res.json("Data Send Succesfully")
//   })
//   .catch(()=>{
//     console.log("Data Saved Something Wrong");
//     res.json('Data Saved Something wrong ')
//   })

// })

app.post('/Signup',async(req,res)=>{
   const data=new Schema({
       ...req.body
   })
   //Email Verifying
    const{EmailorPhone}=req.body
   const verify= await Schema.findOne({EmailorPhone})
   if(verify){
    return res.json("You Have Already Account")
   }

   // Email already illina Puthusa store agum
else{
  await data.save()
  .then(() =>{
    console.log("You Entered Sucessfully");
    return res.json("Welcome buddy!")
})
.catch(()=>{
   console.log("Something Wrong");
   return res.json("Try Again")
})
}
    
})


app.post('/login',async(req,res)=>{
    const {EmailorPhone,Password}=req.body
    //find user &email
    const User= await Schema.findOne({EmailorPhone})
  
    if(!User){
        return res.json("Invalid EmailorPhoneNumber")
    }
   // password verify 
    const match = (Password === User.Password)
    if(!match){
        return res.json("User or Password is Incorrect")
    }
    else{
        res.json("Login Successfully")
        console.log(User);
    }

   
})

app.listen(8000,()=>{
  console.log("Server is Listening:",8000);
})