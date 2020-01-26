import {Router} from 'express';
import {testController} from '../controllers/testController'

class TestRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', testController.list);
        this.router.post('/', testController.create);
    }
}

const testRoutes = new TestRoutes();
export default testRoutes.router;