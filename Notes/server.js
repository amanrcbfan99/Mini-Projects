const app = require(`./src/app`)
const connectDb = require(`./src/db/db`)
app.listen(3000, async ()=>{
    await connectDb()
    console.log("Server is runnign smoothly")
})

