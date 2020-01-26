import {Request, Response} from 'express';

class IndexController {

    public index (req: Request, res: Response){
        res.send('hello000');
    }
}

export const indexController = new IndexController();