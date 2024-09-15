import { Router } from 'express';
import { MonkeypoxCaseController } from './MonkeypoxCaseController';

export class MonkeypoxCaseRoutes {

  static get routes() : Router {
    const router = Router();
    const monkeypoxCaseController = new MonkeypoxCaseController();

    router.get('', monkeypoxCaseController.getMonkeypoxCases);
    router.get('/recent', monkeypoxCaseController.getRecentMonkeypoxCases);
    router.get('/:id', monkeypoxCaseController.getMonkeypoxCaseById);
    router.post('', monkeypoxCaseController.createMonkeypoxCase);
    router.put('/:id', monkeypoxCaseController.updateMonkeypoxCase);
    router.delete('/:id', monkeypoxCaseController.deleteMonkeypoxCase);

    return router;
  }
}