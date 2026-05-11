import express from "express"
import cors from "cors"

import authRoutes from "./Routes/auth.routes"
import userRoutes from "./Routes/user.routes"
import videoRoutes from "./Routes/video.routes"

const app = express()
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/videos', videoRoutes)

export default app