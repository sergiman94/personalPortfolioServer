import {Request, Response} from 'express';

class TestController {

    public list (req: Request, res: Response){
        res.json( 'test routes ok' );
    }

    public create (req: Request, res: Response){
        
        console.log(req.body)
    }
}

export const testController = new TestController();