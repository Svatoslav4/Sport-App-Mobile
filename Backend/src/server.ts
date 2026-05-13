import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const port = Number(process.env.PORT)|| 5000

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`)
})