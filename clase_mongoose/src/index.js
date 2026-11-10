import express from 'express'
import studentsRouter from './routes/students.router.js'
import courseRouter from './routes/course.router.js'
import mongoose from 'mongoose'

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/students", studentsRouter)
app.use("/api/courses", courseRouter)

const connection = async () => {
  try {
    await mongoose.connect('mongodb+srv://andresitoelcrack1212_db_user:eRUx90dGfMqkC91b@cluster0.dirdweo.mongodb.net/',{dbName: 'school'})
    console.log('Connectado a la base de datos MongoDB')
  } catch (error) {
    console.error('Error, no fue posible la conexion:', error)
  }
}

connection();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})