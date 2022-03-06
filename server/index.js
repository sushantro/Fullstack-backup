const express = require('express');
const app = express();
const cors=require('cors')//cors for not giving error in console
app.use(express.json())//middlewares
app.use(cors())//it an middleware




const db = require('./models');
//Router 
const postRouter = require('./routes/Post')
app.use("/post", postRouter);





db.sequelize.sync().then(() => {

  app.listen(8000, () => {
    console.log(`the server is runiing on port 8000`);
  })
})




