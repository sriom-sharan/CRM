import express from 'express'
import cors from 'cors'
import helmet from 'helmet';
import compaingsRouter from './routes/compaign';
import leadsRouter from './routes/leads';
const app = express();

app.use(cors());
app.use(helmet())

app.use('/api/leads',leadsRouter);
app.use('/api/compaigns',compaingsRouter);
app.listen(8000,()=>{
    console.log('Server running at localhost:8000');
})
