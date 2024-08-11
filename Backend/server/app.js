import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js'
const app = express();

app.use(express.json());

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}));

app.use(cookieParser());

app.use(morgan('dev'));

app.use('/ping' ,function(req,res){
 res.send('/pong');   
});

app.use('/api/v1/user', userRoutes)

app.all0('*',(req,res) => {
    res.status(404),res.send('OOPS!! 404 page not found');
});

export default app;
