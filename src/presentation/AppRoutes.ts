import { Router } from 'express';
import { IllnessCaseRoutes } from './illnessCase/IllnessCaseRoutes';

export class AppRoutes {

  static get routes() : Router {
    const router = Router()
    router.use('/api/illnessCases', IllnessCaseRoutes.routes);
    
    return router;
  }
}