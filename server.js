// dependencies
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())


//db connection 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

//port 
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`listening on port ${PORT}`))
