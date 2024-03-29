import express from 'express';
import productRoute from './module/produto/produto.route';
const app = express();


app.use(express.json());

app.use('/produto', productRoute);


app.listen(8080, ()=>{
    console.log('listening on port 8080');
})