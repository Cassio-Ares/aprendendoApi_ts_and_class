import express, {Request, Response} from 'express';
import * as produtoModel from './produto.model';//import {getAll, store} from './produto.model';


const router = express.Router();


router.get('/', async (req: Request, res:express.Response) => {
    const data = await produtoModel.getAll();
    return res.status(200).json({data});
})

router.post('/', async (req: Request, res:Response) => {
    const data = await produtoModel.store(req.body);
    return res.status(200).json({ data });
  });
  
 export default router;
  

