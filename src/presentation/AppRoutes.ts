import { Router } from 'express';
import { MonkeypoxCaseRoutes } from './monkeypoxCase/MonkeypoxCaseRoutes';

export class AppRoutes {

  static get routes() : Router {
    const router = Router()
    router.use('/api/monkeypox-cases', MonkeypoxCaseRoutes.routes);
    
    return router;
  }
}