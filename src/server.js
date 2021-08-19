'use strict';

const express=require('express');
const app=express();

// const validatorMiddleware=require('./middleware/validator'); 

const loggerMiddleware=require('./middleware/logger');

const notFoundHandler=require('./error-handler/404');
const serverErrorHandler=require('./error-handler/500');

const foodRouts=require('./routes/food')
const clothesRouts=require('./routes/clothes')


app.use(express.json());
app.use(foodRouts)
app.use(clothesRouts)

app.get('/bad', (req, res, next) => {
    next('error from bad end point');
}); 



app.use('*', notFoundHandler);
app.use(serverErrorHandler);




module.exports={
    server:app,
    start:port=>{
        app.listen(port,()=>console.log(`Server listening on ${process.env.PORT}`))
    }
}
