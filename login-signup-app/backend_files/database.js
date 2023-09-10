const mongoose=require('mongoose');

const connect=async()=>{
    try {
        const connectdb=await mongoose.connect(`mongodb+srv://19pawanclasher:19clasher@lscluster.cza33zm.mongodb.net/Login_Signup_DB`)
        console.log("Connection Establish Successfully")
    } catch (error) {
        console.log(error);
    }

}

module.exports=connect;