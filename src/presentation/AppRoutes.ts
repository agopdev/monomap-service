import { Router } from 'express';
import { IllnessCaseRoutes } from './illnessCase/IllnessCaseRoutes';

export class AppRoutes {

  static get routes() : Router {
    const router = Router()
    router.use('/api/illness-cases', IllnessCaseRoutes.routes);
    
    return router;
  }
}