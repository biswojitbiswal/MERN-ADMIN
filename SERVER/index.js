import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './db/db.js'
import userRouter from './routes/user.routes.js'
import contactRouter from './routes/contact.routes.js'
import serviceRouter from './routes/service.routes.js'
import adminRouter from './routes/admin.routes.js'
import errorMiddleware from './middlewares/error.middlewares.js'

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: ["https://servicebase.vercel.app"],
    methods: ["GET, POST, PUT, DELETE, PATCH, HEAD"],
    credentials: true
}))

// app.options('*', cors());

app.use(express.json());

app.use("/api/user", userRouter)
app.use("/api/contact", contactRouter)
app.use("/api", serviceRouter)
app.use("/api/admin", adminRouter)

app.use(errorMiddleware)

app.get("/", (req, res) => {
    res.send("Express on Vercel");

});

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Error", error);
        throw error;
    })
    app.listen(PORT, () => {
        console.log(`app is listening on ${PORT}`)
    })
})
.catch((err) => {
    console.log(`connection failed`, err)
})

