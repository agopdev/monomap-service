import { Router } from 'express';
import { MonkeypoxCaseRoutes } from './monkeypoxCase/MonkeypoxCaseRoutes';

export class AppRoutes {

  static get routes() : Router {
    const router = Router()
    router.use('/api/illness-cases', MonkeypoxCaseRoutes.routes);
    
    return router;
  }
}