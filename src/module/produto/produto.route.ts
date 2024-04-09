import express, {Request, Response} from 'express';
import produtoFactory from './produto.factory';


const router = express.Router();


router.get('/', async (req: Request, res:express.Response) => {
    const data = await produtoFactory.getAll();
    return res.status(200).json({data});
})

router.post('/', async (req: Request, res:Response) => {
    if (!req.body.nome || !req.body.preco) {
        return res.status(400).json({ msg: 'Nome e Preço são obrigatórios' })
      }
      
    const data = await produtoFactory.store(req.body);
    return res.status(201).json({ data });
  });
  
 export default router;
  

