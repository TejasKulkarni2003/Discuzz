const app = require("./app")
const connectDB = require("./configurations/database")
const dotenv = require("dotenv")

//uncaught Errors
process.on("uncaughtException", (err)=>{
    console.log(`Error : ${err}`);
    console.log("Closing Server by uncaughtException");
    process.exit(1);
})

dotenv.config()

connectDB()

app.listen(process.env.PORT, ()=>{
    console.log(`Server Start at ${process.env.PORT}`);
})

//unhandled rejection by server
process.on("unhandledRejection", (err)=>{
    console.log(`Error : ${err}`);
    console.log("Closing Server");

    server.close(()=>{
        process.exit(1);
    })
})