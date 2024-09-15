import { Router } from 'express';
import { IllnessCaseController } from './IllnessCaseController';

export class IllnessCaseRoutes {

  static get routes() : Router {
    const router = Router();
    const illnessCaseController = new IllnessCaseController();

    router.get('', illnessCaseController.getIllnessCases);
    router.get('/:id', illnessCaseController.getIllnessCaseById);
    router.post('', illnessCaseController.createIllnessCase);
    router.put('/:id', illnessCaseController.updateIllnessCase);
    router.delete('/:id', illnessCaseController.deleteIllnessCase);

    return router;
  }
}