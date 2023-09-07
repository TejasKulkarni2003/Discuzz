const app = require("./app")
const connectDB = require("./configurations/database")
const dotenv = require("dotenv")

dotenv.config()

connectDB()

app.listen(process.env.PORT, ()=>{
    console.log(`Server Start at ${process.env.PORT}`);
})